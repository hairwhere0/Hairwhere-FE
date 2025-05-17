"use client"

import style from './commentInput.module.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {useRouter} from "next/navigation";
import { Comment } from '@/model/Comment';

type Props = {
  postId: string
}

export default function CommentInput({postId}: Props) {
  const myId = localStorage.getItem("id");
  const myKakaoId = localStorage.getItem("kakaoId");
  const myName = localStorage.getItem("nickName");
  const myProfile = localStorage.getItem("profileImageUrl");
  const queryClient = useQueryClient();
  const [text, setText] = useState<string>("");
  const router = useRouter();

  const addComment = useMutation({
    mutationFn: () => {
      return fetch(`/comment/${postId}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: text
        }),
      })
    }, 
    onMutate() {
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if(queryKey[0] === "comments" && queryKey[1] === postId) {
          const value: Comment[] | undefined = queryClient.getQueryData(queryKey);
          const shallow = value ? [...value] : [];
          const newComment:Comment = {
            id: shallow.length === 0 ? 1: shallow[shallow.length-1].id + 1,
            photoId: Number(postId),
            content: text,
            user: {
              id: myId || '',
              kakaoId: myKakaoId || '',
              nickName: myName || '',
              profileImagePath: myProfile || '',
            },
            replies: [],
            createdAt: new Date()
          };
          shallow.unshift(newComment);
          queryClient.setQueryData(queryKey, shallow);
        }
      })
    },
    onSuccess() {
      setText('');
      // queryClient.invalidateQueries({queryKey: ['comments', postId]});
    },
    onError: (error) => {
      console.error("Error adding comment:", error);
    }
  })

  const onAddComment = () => {
    if(!myName && !myKakaoId) {
      router.push('/login');
      return;
    } else {
      addComment.mutate();
      return;
    }
  }

  return (
    <>
      <div className={style.commentInput}>
          { myName && myProfile ?
            <Avatar src={myProfile} className={style.profile}/>
            : <Avatar icon={<UserOutlined/>} className={style.profile}/>
          }
          <textarea 
            className={style.textArea} 
            placeholder="댓글 작성..."
            spellCheck={false}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          { text && <button className={style.commentButton} onClick={onAddComment}>등록</button> }
        </div>
    </>
  )
}
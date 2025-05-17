"use client"

import { Avatar } from 'antd';
import style from './comment.module.css';
import { Comment as IComment } from '@/model/Comment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useStore } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

dayjs.locale('ko');
dayjs.extend(relativeTime)

type Props = {
  comment: IComment
  postId: string
}

export default function Comment({comment, postId}: Props) {
  const {setRecomment, setPhotoId } = useStore((state) => ({
    setRecomment: state.setRecomment,
    setPhotoId: state.setPhotoId
  }));
  const myId = localStorage.getItem("id");
  const queryClient = useQueryClient();
  const router = useRouter();

  const redirectToRecomment = (comment: IComment) => {
    setRecomment(comment);
    setPhotoId(postId);
    router.push('/recomment');
  }

  const deleteComment = useMutation({
    mutationFn: () => {
      console.log("deleteComment");
      return fetch(`/comment/deleteComment/${comment.id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    },
    onMutate() {
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if(queryKey[0] === "comments" && queryKey[1] === postId) {
          const value: IComment[] | undefined = queryClient.getQueryData(queryKey);
          const shallow = value ? [...value] : [];
          shallow.filter((c) => c.id !== comment.id);
          queryClient.setQueryData(queryKey, shallow);
        }
      })
    },
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ['comments', postId]});
    },
    onError: (error) => {
      console.error("Error deleting comment:", error);
    }
  })

  const deleteRecomment = useMutation({
    mutationFn: () => {
      console.log("deleteRecomment");
      return fetch(`/comment/deleteComment/${comment.id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    },
    onMutate() {
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if(queryKey[0] === "recomment" && queryKey[1] === postId && queryKey[2] === comment.parentId) {
          const value: IComment[] | undefined = queryClient.getQueryData(queryKey);
          const shallow = value ? [...value] : [];
          const filtered = shallow.filter((c) => c.id !== comment.id);
          queryClient.setQueryData(queryKey, filtered);
        }
      })
    },
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ['recomment', postId, comment.parentId]});
    },
    onError: (error) => {
      console.error("Error deleting comment:", error);
    }
  })

  const onDeleteComment = () => {
    if(window.location.pathname === "/recomment") {
      deleteRecomment.mutate();
    } else {
      deleteComment.mutate();
    }
  }

  return (
    <>
      <div className={style.comment}>
        <Avatar src={comment.user.profileImagePath} className={style.profile} size={42}/>
        <div className={style.textWrapper}>
          <div className={style.userName}>{comment.user.nickName}</div>
          <div className={style.text}>{comment.content}</div>
          <div className={style.commentBottom}>
            <span className={style.time}>{dayjs(comment.createdAt).fromNow(true)} 전</span>
            <span className={style.recomment} onClick={()=>redirectToRecomment(comment)}>
              {comment.parentId ?
                <></>
                : comment.replies.length === 0 ?
                  "답글 달기"
                  : `답글 ${comment.replies.length}개 보기`
              }
            </span>
            <span className={style.delete} onClick={() => onDeleteComment()}>
              {comment.user.id === myId ?
                "삭제하기":
                <></>}
            </span>
          </div>
        </div>
      </div>
    </> 
    )
    
}
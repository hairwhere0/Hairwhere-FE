"use client";

import React, { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogAction, AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import {useMutation} from "@tanstack/react-query";
import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import style from './seeMore.module.css';
import { Post } from '@/model/Post';
import { useRouter } from "next/navigation";
import { authApi } from '@/app/(main)/_lib/axios';
import { response } from 'express';

type Props = {
  post: Post
}

export default function SeeMore({ post }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportContent, setReportContent] = useState('');
  const kakaoId = localStorage.getItem("kakaoId");
  const router = useRouter();
  
  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      alert('주소가 클립보드에 복사되었습니다.');
    })
    .catch((err) => {
      console.error('복사 중 에러 발생:', err);
    });
  };

  const items = [
    {
      label: (
        <span onClick={copyToClipboard}>
          클립보드 복사
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span
          style={{color: '#dc2626'}}
          onClick={() => setIsReportOpen(true)} // Open dialog on click
        >
          신고하기
        </span>
      ),
      key: '1',
    },
  ];

  const loginItems = [
    {
      label: (
        <span onClick={copyToClipboard}>
          클립보드 복사
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span
          style={{color: '#dc2626'}}
          onClick={() => setIsOpen(true)} // Open dialog on click
        >
          삭제하기
        </span>
      ),
      key: '1',
    },
  ];

  const mutation = useMutation({
    mutationFn: async () => {
      return authApi.delete(`/photo/delete/${post.id}`);
    },
    async onSuccess() {
      router.push('/');
      setTimeout(() => { // "/" 경로로 이동 후 새로고침 하기 위해 1초 타이머
        window.location.reload(); // "/" 경로로 이동 후 새로운 게시물 목록을 받기 위해 새로고침
      }, 100);
    },
    onError(error) {
      console.error(error);
      alert("삭제 중 에러가 발생했습니다.");
    }
  })

  const reportMutation = useMutation({
    mutationFn: async (content: string) => {
      return authApi.post(`/report/${post.id}`, {
        reason: content,
      })
    },
    onSuccess() {
      alert("신고가 접수되었습니다.");
      setIsReportOpen(false);
      setReportContent('');
    },
    onError(error) {
      console.error(error);
      alert("신고 중 에러가 발생했습니다.");
    }
  })

  const onDeletePost = () => {
    mutation.mutate();
  }

  const onReportPost = () => {
    if (!reportContent.trim()) {
      alert("신고 내용을 입력해주세요.");
      return;
    }
    reportMutation.mutate(reportContent);
  }

  const handleReportClose = () => {
    setIsReportOpen(false);
    setReportContent('');
  }

  return (
    <>
      <Dropdown menu={{ items: post.kakaoId ===  Number(kakaoId) ? loginItems : items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <MoreOutlined />
          </Space>
        </a>
      </Dropdown>

      {/* Alert Dialog */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className={style['alert-dialog-content']}>
          <div>
            <h2>삭제하시겠습니까?</h2>
            <p>이 작업은 되돌릴 수 없습니다.<br/>게시글이 영구적으로 삭제됩니다.</p>
          </div>
          <div className={style['alert-dialog-footer']}>
            <AlertDialogCancel asChild>
              <button className={style['btn-cancel']} onClick={() => setIsOpen(false)}>취소</button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <button className={style['btn-delete']} onClick={() => {
                // 삭제 로직 처리
                onDeletePost();
                setIsOpen(false);
              }}>삭제</button>
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* 삭제 오버레이 */}
      {isOpen && <div className={style['alert-dialog-overlay']} onClick={() => setIsOpen(false)} />}
      
      {/* 신고 모달 */}
      {isReportOpen && (
        <>
          <div className={style['report-dialog-overlay']} onClick={handleReportClose} />
          <div className={style['report-dialog-content']}>
            <div>
              <h2>신고하기</h2>
              <p>신고 사유를 자세히 입력해주세요.</p>
            </div>
            <div className={style['report-dialog-body']}>
              <textarea
                className={style['report-textarea']}
                placeholder="신고 내용을 입력해주세요..."
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
                rows={4}
              />
            </div>
            <div className={style['report-dialog-footer']}>
              <button className={style['btn-cancel']} onClick={handleReportClose}>
                취소
              </button>
              <button 
                className={style['btn-report']} 
                onClick={onReportPost}
                disabled={reportMutation.isPending}
              >
                {reportMutation.isPending ? '신고 중...' : '신고하기'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
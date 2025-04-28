"use client"

import style from './likesPage.module.css';
import LikePosts from './_component/LikePosts';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export default function LikesPage() {

  return (
    <>
      <div className={style.main}>
          <div className={style.header}>
            <span>좋아하는 게시글</span>
          </div>
          <div className={style.postsWrapper}>
            <LikePosts/>
          </div>
      </div>
    </>
  )
}
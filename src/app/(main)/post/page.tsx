"use client"

import style from "@/app/(main)/post/postPage.module.css";
import PostBody from "./_component/PostBody";
import { useSearchParams } from "next/navigation";

export default function PostPage() {
  const searchParams = useSearchParams();
  const sn = searchParams.get('sn');
  const sa = searchParams.get('sa');

  const params = (sn && sa) ? {sn, sa} : undefined;
  
  return (
    <div className={style.main}>
      <div className={style.header}>
        <span>게시글 작성</span>
      </div>
      <PostBody params={params}/>
    </div>
  );
}


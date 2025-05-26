import style from "@/app/(main)/post/postPage.module.css";
import PostBody from "./_component/PostBody";

type Props = {
  searchParams: {
    sn: string,
    sa: string,
  }
}

export default function PostPage({ searchParams }: Props) {
  const sn = searchParams?.sn;
  const sa = searchParams?.sa;

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
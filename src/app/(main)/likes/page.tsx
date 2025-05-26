import style from './likesPage.module.css';
import LikePosts from './_component/LikePosts';

export default async function LikesPage() {
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
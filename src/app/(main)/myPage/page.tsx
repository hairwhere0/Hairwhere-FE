import style from './myPage.module.css';
import MyInfo from './_component/MyInfo';

export default async function MyPage() {
    return (
      <>
        <div className={style.main}>
            <MyInfo/>
        </div>
      </>
    )
  }


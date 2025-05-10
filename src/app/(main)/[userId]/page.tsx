import style from './userPage.module.css';
import UserInfo from './_component/UserInfo';

type Props = {
  params: { userId: string },
}

export default function UserPage({params}: Props) {
  const {userId} = params;
  return (
    <>
      <div className={style.main}>
        <UserInfo userId={userId}/>
      </div>
    </>
  )
  }


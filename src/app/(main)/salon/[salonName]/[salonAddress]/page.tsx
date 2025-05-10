import style from './salonPage.module.css';
import Header from './_component/Header';
import SalonPosts from './_component/SalonPosts';

type Props = {
  params: { 
    salonName: string,
    salonAddress: string
  };
}

export default function SalonPage({params}: Props) {
  const salonName = decodeURIComponent(params.salonName);
  const salonAddress = decodeURIComponent(params.salonAddress);
  return (
    <>
      <div className={style.main}>
          <Header salonName={salonName}/>
          <div className={style.postsWrapper}>
            <SalonPosts salonName={salonName} salonAddress={salonAddress}/>
          </div>
      </div>
    </>
  )
} 
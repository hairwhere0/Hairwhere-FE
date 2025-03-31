"use client"

import style from './loginButton.module.css';
import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  return (
    <>
      <div className={style.loginButton} onClick={() => router.push('/login')}>로그인</div>
    </>
  )
}
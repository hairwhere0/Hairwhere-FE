"use client"

import { useEffect, useState } from 'react';
import style from './loginButton.module.css';
import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken') || '');
  }, []);

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('kakaoId');
    localStorage.removeItem('nickName');
    localStorage.removeItem('profileImageUrl');
    document.cookie = `accessToken=; path=/; max-age=0`;
    router.replace('/');
  };

  return (
    <>
    {accessToken ?
      <div className={style.loginButton} onClick={onLogout}>로그아웃</div>
      : <div className={style.loginButton} onClick={() => router.push('/login')}>로그인</div>
    }
    </>
  )
}
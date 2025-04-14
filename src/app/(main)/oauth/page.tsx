"use client"

import { useEffect } from "react";
import LoadingSpinner from "../_component/LoadingSpinner";
import style from "./oauthPage.module.css";
import { useRouter } from "next/navigation";
import { getToken } from "./_lib/getToken";

export default function OauthPage() {
  const router = useRouter();

  useEffect(() => {
    const authenticateUser = async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (!code) return;

      try {
        const tokenResponse = await getToken(code);
        if (tokenResponse.success) {
          router.replace("/");
        }
      } catch (error) {
        console.error("로그인 실패:", error);
        alert("로그인 실패");
        router.replace("/login");
      }
    };

    authenticateUser();
  }, []);

  return (
    <div className={style.container}>
      <LoadingSpinner/>
    </div>
  )
}
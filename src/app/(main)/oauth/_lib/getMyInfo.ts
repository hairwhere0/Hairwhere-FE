import { authApi } from "../../_lib/axios";

type MyInfo = {
  id: number;
  kakaoId: number;
  nickName: string;
  profileImageUrl: string;
}

export const getMyInfo = async () => {
  try {
    const response = await authApi.get<MyInfo>(`/kakao/mypage`);

    const myInfo = response.data;

    if(myInfo) {
      localStorage.setItem('id', myInfo.id.toString());
      localStorage.setItem('kakaoId', myInfo.kakaoId.toString());
      localStorage.setItem('nickName', myInfo.nickName);
      localStorage.setItem('profileImageUrl', myInfo.profileImageUrl);
    }
  } catch(err) {
    console.log(err);
  }
} 
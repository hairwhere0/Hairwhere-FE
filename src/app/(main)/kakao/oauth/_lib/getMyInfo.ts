import { User } from "@/model/User";
import { authApi } from "../../../_lib/axios";

export const getMyInfo = async () => {
  try {
    const response = await authApi.get<User>(`/kakao/mypage`);

    const myInfo = response.data;

    if(myInfo) {
      localStorage.setItem('id', myInfo.id.toString());
      localStorage.setItem('kakaoId', myInfo.kakaoId.toString());
      localStorage.setItem('nickName', myInfo.nickName);
      localStorage.setItem('profileImageUrl', myInfo.profileImagePath);
    }
  } catch(err) {
    console.log(err);
  }
} 
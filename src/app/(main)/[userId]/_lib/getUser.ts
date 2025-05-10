import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { User } from "@/model/User";

export const getUser: QueryFunction<User, [_1: string, _2: string]>
 = async ({ queryKey }) => {
  try {
    const [, userId] = queryKey;

    //msw용
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/kakao/find/${userId}`);
    return res.data.result;

    // const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/photo/find/${photoId}`);
    // return res.data;
  } catch (error) {
    console.error('에러 상세 정보:', error);
    throw error;
  }
 }
import { PageInfo } from "@/model/PageInfo";
import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { authApi } from "../../_lib/axios";


export const getMyPosts: QueryFunction<PageInfo, [_1: string, _2: string, _3: string], number> 
= async ({ queryKey, pageParam=1}) => {
  try {
    const [,,kakaoId] = queryKey;
    //msw용
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/kakao/find/${kakaoId}/photos?page=${pageParam}&size=15`);
    // return response.data.result;

    const response = await authApi.get(`/kakao/find/${kakaoId}/photos?page=${pageParam}&size=15`);
    console.log('내 게시글:', response.data);
    return response.data;
  } catch (error) {
    console.error('에러 상세 정보:', error);
    throw error;
  }
};
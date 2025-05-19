import { PageInfo } from "@/model/PageInfo";
import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { authApi } from "../../_lib/axios";


export const getLikePosts: QueryFunction<PageInfo, [_1: string, _2: string, id: string], number> 
= async ({ queryKey, pageParam=1}) => {
  try {
    const [,,id] = queryKey;
    //msw용
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/photo/find/${id}/likes?page=${pageParam}&size=15`);
    // return response.data.result;

    const response = await authApi.get(`/kakao/mypage/like?page=${pageParam}&size=15`);
    console.log('응답 데이터:', response.data);
    return response.data;
  } catch (error) {
    console.error('에러 상세 정보:', error);
    throw error;
  }
};
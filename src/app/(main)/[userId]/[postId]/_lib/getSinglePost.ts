import { QueryFunction } from "@tanstack/react-query";
import { Post } from "@/model/Post";
import axios from "axios";

export const getSinglePost: QueryFunction<Post, [_1: string, _2: string]>
 = async ({ queryKey }) => {
  try {
    const [, photoId] = queryKey;

    //msw용
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/photo/find/${photoId}`);
    return res.data.result;

    // const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/photo/find/${photoId}`);
    // return res.data;
  } catch (error) {
    console.error('에러 상세 정보:', error);
    throw error;
  }
 }
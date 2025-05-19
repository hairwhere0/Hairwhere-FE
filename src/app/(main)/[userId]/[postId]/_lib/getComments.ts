import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { Comment } from "@/model/Comment";

export const getComments: QueryFunction<Comment[], [_1: string, _2: string]>
 = async ({ queryKey }) => {
  try {
    const [, postId] = queryKey;

    //msw용
    // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/comment/getComments/${postId}`);
    // return res.data.result;

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comment/getComments/${postId}`);
    return res.data;
  } catch (error) {
    console.error('에러 상세 정보:', error);
    throw error;
  }
 }
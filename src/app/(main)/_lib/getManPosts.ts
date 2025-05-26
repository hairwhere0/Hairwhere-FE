import axios from "axios";

type Props = {pageParam?: number};

export default async function getManPosts({pageParam}: Props) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/photo/findByGender/male?page=${pageParam}&size=15`);
    return response.data;
  } catch (error) {
    console.error('에러 상세 정보:', error);
    throw error;
  }
};
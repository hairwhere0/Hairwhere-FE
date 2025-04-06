import axios from "axios";

type Props = {pageParam?: number};

export default async function getWomenPosts({pageParam}: Props) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_SERVER}/photo/findByGender/female?page=${pageParam}&size=15`);

  if(!res.data.code) {
    throw new Error('Failed to fetch data');
  }

  return res.data.result;
};
import { PageInfo } from "@/model/PageInfo";
import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";

export const getSearchResult: QueryFunction<PageInfo, [_1: string, _2: string, { hairName: string; gender: string; hairLength: string; hairColor: string }], number>
= async ({ queryKey, pageParam=1}) => {
  try {
    const [,,searchParams] = queryKey;
    //msw용
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/photo/search/?page=${pageParam}&size=15&hairName=${searchParams.hairName}&gender=${searchParams.gender}&hairLength=${searchParams.hairLength}&hairColor=${searchParams.hairColor}`);
    // return response.data.result;

    const response = await axios.get(`/photo/search/`,{
      params: {
        page: pageParam,
        size: 15,
        ...searchParams,
      }
    });
    console.log('검색 데이터:', response.data);
    return response.data;
  } catch (error) {
    console.error('에러 상세 정보:', error);
    throw error;
  }
};
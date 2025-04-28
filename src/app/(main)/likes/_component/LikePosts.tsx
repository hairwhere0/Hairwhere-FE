"use client"

import { PageInfo } from "@/model/PageInfo";
import { InfiniteData, useSuspenseInfiniteQuery } from "@tanstack/react-query"
import { getLikePosts } from "../_lib/getLikePosts"
import Post from "../../_component/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function LikePosts() {
  const id = localStorage.getItem('id');
  const {
      data,
      fetchNextPage,
      hasNextPage, 
      isFetching,
  } = useSuspenseInfiniteQuery<PageInfo, Object, InfiniteData<PageInfo>, [_1: string, _2: string, _3: string], number>({
      queryKey:["posts","likes", id!],
      queryFn:getLikePosts,
      initialPageParam:0,
      getNextPageParam: (lastPage) => {
        // 마지막 페이지가 있고, 페이지가 비어있지 않고, 다음 페이지가 있다면 다음 페이지 번호 반환
        if (lastPage && !lastPage.last) {
          return lastPage.number + 1;
        }
        // 마지막 페이지이거나 콘텐츠가 없으면 더 이상 페이지를 가져오지 않음
        return undefined;
      },
      staleTime:60 * 1000,
      gcTime:300 * 1000,
  })

    const { ref, inView } = useInView({
        threshold: 0,
        delay: 0,
    });
    
    useEffect(() => {
      if (inView && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

      return (
        <>
          {data?.pages?.map((page, idx) => (
            <Fragment key={idx}>
              {page?.content?.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </Fragment>))}
          <div ref={ref} style={{height: 50}}/>
        </>
      );
    }
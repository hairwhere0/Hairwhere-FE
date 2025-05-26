"use client"

import { PageInfo } from "@/model/PageInfo";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query"
import { getLikePosts } from "../_lib/getLikePosts"
import Post from "../../_component/Post";
import { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function LikePosts() {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setId(localStorage.getItem("id"));
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage, 
    isFetching,
    isLoading,
} = useInfiniteQuery<PageInfo, Object, InfiniteData<PageInfo>, [_1: string, _2: string, _3: string], number>({ // useSuspenseInfiniteQuery 대신
    queryKey:["posts","likes", id!],
    queryFn:getLikePosts,
    initialPageParam:0,
    getNextPageParam: (lastPage) => {
      if (lastPage && !lastPage.last) {
        return lastPage.number + 1;
      }
      return undefined;
    },
    staleTime:60 * 1000,
    gcTime:300 * 1000,
    enabled: !!id, // id가 있을 때만 실행
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

      // 로딩 상태 처리
  if (isLoading || !id) {
    return <div>Loading...</div>;
  }

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
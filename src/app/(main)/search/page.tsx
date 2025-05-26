"use client"

import dynamic from 'next/dynamic';

// SearchHeader를 동적으로 로드하여 SSR을 비활성화
const SearchHeader = dynamic(() => import("../_component/SearchHeader"), {
  ssr: false,
  loading: () => <div>검색 헤더 로딩 중...</div>
});

export default function SearchPage() {
  return (
    <>
      <SearchHeader />
    </>
  )
}
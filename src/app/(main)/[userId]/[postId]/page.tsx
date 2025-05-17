import style from './postPage.module.css';
import SinglePost from './_component/SinglePost';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getSinglePost } from './_lib/getSinglePost';
import CommentInput from './_component/CommentInput';
// import Comments from './_component/Comments';
// import { getComments } from './_lib/getComments';

type Props = {
  params: {postId: string}
}

export default async function PostPage({params}: Props) {
  const {postId} = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({queryKey: ['post', postId], queryFn: getSinglePost});
  // await queryClient.prefetchQuery({queryKey: ['comments', postId], queryFn: getComments});
  const dehydratedState = dehydrate(queryClient);

  if (!postId) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <SinglePost postId={postId}/>
        <CommentInput postId={postId} />
        {/* <Comments postId={postId}/> */}
      </HydrationBoundary>
    </div>
  );
}

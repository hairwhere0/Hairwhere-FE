import { getRecomments } from "@/app/(main)/_lib/getRecomments"
import { Comment as IComment } from "@/model/Comment"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react"
import Comment from "../[userId]/[postId]/_component/Comment"

type Props = {
  postId: string,
  parentId: string
}

export default function Recomments({postId, parentId}: Props) {
  const { data } = useQuery<IComment[], object, IComment[], [_1: string, _2: string, _3: string]>({
    queryKey: ['recomment', postId, parentId],
    queryFn: getRecomments,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  })

  return (
    <>
      {data?.map((comment, idx) => (
        <Fragment key={idx}>
          <Comment key={comment.id} comment={comment} postId={postId}/>
        </Fragment>
      ))}
    </>
  )
}
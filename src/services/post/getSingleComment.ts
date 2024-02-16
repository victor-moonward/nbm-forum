import { axios } from "@/api/axios";
import { Comments } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface DefaultProps {
  postId: number;
  commentId: number;
  enabled: boolean;
}

interface CommentsRes {
  data: Comments[];
  total: number;
}

export async function getSingleComment({ postId, commentId }: DefaultProps) {
  try {
    const res: CommentsRes = await axios({
      method: "GET",
      url: `/posts/${postId}/comments/${commentId}?page=1&limit=10`,
    });

    return res;
  } catch (e) {
    throw (e)
  }
}

export function useGetSingleComment(props: DefaultProps) {
  return useQuery({
    queryFn: () => getSingleComment(props),
    queryKey: ["single-comment", props.commentId],
    enabled: props.enabled
  })
}
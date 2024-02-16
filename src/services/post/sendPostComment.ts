import { axios } from "@/api/axios";
import { useMutation } from "@tanstack/react-query";

interface SendPostCommentProps {
  postId: number;
  commentId: number;
  text: string;
}

interface UseSendPostCommentProps {
  updatePage: () => void;
}

async function sendPostComment({ postId, commentId, text }: SendPostCommentProps) {
  try {
    const res = await axios({
      method: "POST",
      url: `/posts/${postId}/comments`,
      data: {
        commentId,
        text
      }
    });

    return res;
  } catch (e) {
    throw (e);
  }
}

export function useSendPostComment({ updatePage }: UseSendPostCommentProps) {
  const mutation = useMutation({
    mutationFn: sendPostComment,
    mutationKey: ["post-comment"],
    onSuccess: () => {
      updatePage();
    }
  });

  return mutation;
}
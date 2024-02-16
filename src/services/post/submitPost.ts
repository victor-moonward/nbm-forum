import { axios } from "@/api/axios";
import { TCreatePostForm } from "@/stores";
import { useMutation } from "@tanstack/react-query"

async function submitPost(data: TCreatePostForm) {
  try {
    const res = await axios({
      method: "POST",
      url: "/posts",
      data
    });

    return res;
  } catch (e) {
    throw (e);
  }
}

export function useSubmitPost() {
  const mutation = useMutation({
    mutationFn: submitPost,
    mutationKey: ["create-post"]
  });

  return mutation;
}
import { axios } from "@/api/axios";
import { Comments } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface DefaultProps {
  id: string;
}

interface CommentsRes {
  data: Comments[];
  total: number;
}

const COMMENTS_QUANTITY_LIMIT = 10;
const PAGE = 1;

export async function getComments({ id }: DefaultProps) {
  try {
    const res: CommentsRes = await axios({
      method: "GET",
      url: `/posts/${id}/comments?page=${PAGE}&limit=${COMMENTS_QUANTITY_LIMIT}`,
    });

    return res;
  } catch (e) {
    throw (e)
  }
}

export function useComments({ id }: DefaultProps) {
  return useQuery({
    queryFn: () => getComments({ id }),
    queryKey: ["comments"],
  })
}
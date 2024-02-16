import { axios } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";

const TAGS_QUANTITY_LIMIT = 10;
const PAGE = 1;

async function getTags() {
  try {
    const res = await axios({
      method: "GET",
      url: `/tags?page=${PAGE}&limit=${TAGS_QUANTITY_LIMIT}`
    });

    return res;
  } catch (e) {
    throw (e)
  }
}

export function useTags() {
  return useQuery({
    queryFn: getTags,
    queryKey: ["tags"],
  });
}
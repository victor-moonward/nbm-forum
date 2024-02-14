import { axios } from "@/api/axios";
import { Posts } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type TTags = {
  data: Array<{
    name: string
  }>
}

interface GetPostsProps {
  tags: Array<never | string>;
  page: number;
}

interface ReceivedPosts {
  data: Posts[];
  total: number;
}

const TAGS_QUANTITY_LIMIT = 10;
const PAGE = 1;

async function getTags() {
  try {
    const res: TTags = await axios({
      method: "GET",
      url: `/tags?page=${PAGE}&limit=${TAGS_QUANTITY_LIMIT}`
    });

    return res;
  } catch (e) {
    throw (e)
  }
}

export async function getPosts({ tags, page }: GetPostsProps) {
  try {
    const res: ReceivedPosts = await axios({
      method: "POST",
      url: "/posts/_search",
      data: {
        tags,
        page,
        limit: 10
      }
    });

    return res;
  } catch (e) {
    throw (e)
  }
}

export function useFeed() {
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState<Array<string | never>>([]);

  const {
    isLoading: isLoadingTags,
    data: receivedTags
  } = useQuery({
    queryFn: getTags,
    queryKey: ["tags"]
  });

  const {
    isLoading: isLoadingPosts,
    data: receivedPosts
  } = useQuery({
    queryFn: () => getPosts({ tags, page }),
    queryKey: ["feed", tags, page],
  });

  function handleTags(tag: string) {
    const index = tags.indexOf(tag);
    const newTagsArr = [...tags];

    if (index != -1) newTagsArr.splice(index, 1);
    else newTagsArr.push(tag);

    setTags(newTagsArr);

  }

  return {
    receivedTags: receivedTags?.data,
    receivedPosts: receivedPosts?.data,
    isLoadingTags,
    isLoadingPosts,
    handleTags
  }
}
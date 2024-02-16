import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Posts } from "@/types";
import { axios } from "@/api/axios";

interface ReceivedPosts {
  data: Posts[];
  total: number;
}

interface GetPostsProps {
  tags: Array<never | string>;
}

const TAGS_QUANTITY_LIMIT = 10;
const PAGE = 1;

export async function getPosts({ tags }: GetPostsProps) {
  try {
    const res: ReceivedPosts = await axios({
      method: "POST",
      url: "/posts/_search",
      data: {
        tags,
        page: PAGE,
        limit: TAGS_QUANTITY_LIMIT
      }
    });

    return res;
  } catch (e) {
    throw (e)
  }
}

export function usePosts() {
  const [tags, setTags] = useState<Array<string | never>>([]);

  function handleTags(tag: string) {
    const index = tags.indexOf(tag);
    const newTagsArr = [...tags];

    if (index != -1) newTagsArr.splice(index, 1);
    else newTagsArr.push(tag);

    setTags(newTagsArr);
  }

  return {
    handleTags,
    query: useQuery({
      queryFn: () => getPosts({ tags }),
      queryKey: ["feed", tags],
    })
  }
}
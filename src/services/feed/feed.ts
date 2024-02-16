import { usePosts } from "../post/getPosts";
import { useTags } from "./getTags";

export function useFeed() {
  const {
    data: receivedTags,
    isLoading: isLoadingTags
  } = useTags();

  const {
    query: {
      isLoading: isLoadingPosts,
      data: receivedPosts
    },
    handleTags
  } = usePosts();

  return {
    receivedTags: receivedTags?.data,
    receivedPosts: receivedPosts?.data,
    isLoadingTags,
    isLoadingPosts,
    handleTags
  }
}
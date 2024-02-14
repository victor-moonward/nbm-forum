import { CommentsSection, PostBar, PostCard } from "@/components/feed";
import { usePosts } from "@/services/getPosts";
import { Posts } from "@/types";
import { useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text } from "react-native";

export function SinglePost() {
  const { params } = useRoute();
  const { query: { data: receivedData } } = usePosts();
  const currentPost = receivedData?.data.find(posts => posts.id === params?.id) as Posts;

  return (
    <ScrollView style={styles.container}>
      <PostBar />
      <PostCard  {...currentPost} />
      <CommentsSection id={params?.id} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flex: 1
  }
});
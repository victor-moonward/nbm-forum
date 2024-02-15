import { PostBar, PostCard, SingleComment } from "@/components/feed";
import { useComments } from "@/services/getComments";
import { usePosts } from "@/services/getPosts";
import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import { SplashScreen } from "./SplashScreen";
import { Text } from "@/components/common";
import { Fonts } from "@/styles/theme";

export function SinglePost() {
  const { params } = useRoute();
  const { query: { data: posts } } = usePosts();
  const { data: receivedComments, refetch } = useComments({ id: params?.id });
  const currentPost = posts?.data.find(post => post.id === params?.id);
  const comments = receivedComments?.data;

  if (!currentPost || !comments) return <SplashScreen colorSchema="secondary" />;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={comments}
      renderItem={({ item }) => (
        <SingleComment
          {...item}
          postId={params?.id}
          updatePage={refetch}
        />
      )}
      ListHeaderComponent={() => (
        <>
          <PostBar />
          <PostCard {...currentPost} />
          <Text style={styles.heading}>Comments</Text>
        </>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
  },
  commentsWrapper: {
    padding: 20
  },
  heading: {
    fontWeight: Fonts.weight.bold,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 0
  }
});
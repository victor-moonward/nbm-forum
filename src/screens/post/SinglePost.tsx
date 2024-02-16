import { PostCard } from "@/components/feed";
import { useComments } from "@/services/post/getComments";
import { usePosts } from "@/services/post/getPosts";
import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import { SplashScreen } from "../common/SplashScreen";
import { Text } from "@/components/common";
import { Fonts } from "@/styles/theme";
import { useSendPostComment } from "@/services/post/sendPostComment";
import { PostBar, ReplyBar, SingleComment } from "@/components/post";

export function SinglePost() {
  const { params } = useRoute();
  const { query: { data: posts } } = usePosts();
  const { data: receivedComments, refetch } = useComments({ id: params?.id });
  const { mutate } = useSendPostComment({ updatePage: refetch })
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
      ListFooterComponent={() => (
        <View style={styles.footerContainer}>
          <ReplyBar
            onSubmit={(value) => {
              mutate({
                text: value,
                postId: params?.id,
                commentId: params?.id
              })
            }}
          />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20
  },
  commentsWrapper: {
    padding: 20
  },
  heading: {
    fontWeight: Fonts.weight.bold,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 0
  },
  footerContainer: {
    paddingTop: 20,
    paddingHorizontal: 20
  }
});
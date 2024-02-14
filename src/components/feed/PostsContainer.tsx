import { ScrollView, StyleSheet } from "react-native";
import { SinglePost } from ".";
import { Posts } from "@/types";

interface PostsContainerProps {
  receivedPosts: Posts[] | undefined;
}

export function PostsContainer({ receivedPosts }: PostsContainerProps) {
  return (
    <ScrollView>
      {receivedPosts?.map(post => <SinglePost {...post} key={post.id} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
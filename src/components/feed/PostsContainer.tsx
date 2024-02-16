import { ScrollView, StyleSheet } from "react-native";
import { PostCard } from ".";
import { Posts } from "@/types";

interface PostsContainerProps {
  receivedPosts: Posts[] | undefined;
}

export function PostsContainer({ receivedPosts }: PostsContainerProps) {
  return (
    <ScrollView>
      {receivedPosts?.map(post => (
        <PostCard
          {...post}
          key={post.id}
          handleEditPost={() => console.log("post")}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
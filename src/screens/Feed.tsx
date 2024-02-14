import { ScrollView, StyleSheet } from "react-native";
import { useFeed } from "@/services/feed";
import { PostsContainer, TopBar } from "@/components/feed";
import { SplashScreen } from "./SplashScreen";

export function Feed() {
  const {
    receivedTags,
    handleTags,
    isLoadingPosts,
    receivedPosts,
    isLoadingTags
  } = useFeed();

  if (isLoadingPosts || isLoadingTags) return <SplashScreen colorSchema="secondary" />;

  return (
    <ScrollView style={styles.container}>
      <TopBar
        receivedTags={receivedTags}
        handleTags={handleTags}
      />
      <PostsContainer receivedPosts={receivedPosts} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1
  }
});
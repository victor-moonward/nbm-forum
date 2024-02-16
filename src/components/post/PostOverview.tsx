import { useCreatePost } from "@/stores";
import { StyleSheet, View } from "react-native";
import { Button, Text, Title } from "../common";

export function PostOverview() {
  const { tags, title, content } = useCreatePost(state => state.formInitialValues);

  return (
    <View style={styles.container}>
      {tags[0] && (
        <View style={styles.buttonContainer}>
          <Button onPress={() => console.log("clicked")}>
            {tags[0]}
          </Button>
        </View>
      )}
      <Title>{title}</Title>
      <Text>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10
  },
  buttonContainer: {
    maxWidth: 100
  }
})
import { useComments } from "@/services/getComments";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "../common";
import { Comments } from "@/types";
import { HeaderDescription } from ".";
import { Colors, Fonts } from "@/styles/theme";

function SingleComment({
  user,
  createdAt,
  text,
  comments
}: Comments) {
  console.log(comments);

  return (
    <View>
      <View style={singleCommentStyles.mainContainer}>
        <HeaderDescription
          userName={user.firstName}
          createdAt={createdAt}
        />
        <Text>
          {text}
        </Text>
      </View>
    </View>
  )
}

export function CommentsSection({ id }) {
  const { data: receivedData } = useComments({ id });
  const comments = receivedData?.data;

  if (!comments) return null;

  console.log(comments)

  return (
    <View style={commentsSectionStyles.container}>
      <Text style={commentsSectionStyles.title}>Comments</Text>
      <ScrollView contentContainerStyle={commentsSectionStyles.comments}>
        {comments.map(comment => <SingleComment {...comment} key={comment.id} />)}
      </ScrollView>
    </View>
  )
}

const commentsSectionStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    gap: 20
  },
  title: {
    fontSize: Fonts.size.text,
    fontWeight: Fonts.weight.bold,
    color: Colors.inputIcon
  },
  comments: {
    gap: 30
  }
});

const singleCommentStyles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    gap: 5
  }
})
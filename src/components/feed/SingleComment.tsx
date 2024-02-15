import { StyleSheet, View } from "react-native";
import { Input, Text } from "../common";
import { Comments } from "@/types";
import { HeaderDescription } from ".";
import { Colors, Fonts } from "@/styles/theme";
import { useState } from "react";
import { useSendPostComment } from "@/services/sendPostComment";

interface SingleCommentProps extends Comments {
  postId: number;
  updatePage: () => void;
}

interface SubCommentProps extends SingleCommentProps {
  commentId: number;
}

function SubComment({
  user,
  createdAt,
  text,
  postId,
  commentId,
  updatePage
}: SubCommentProps) {
  const [inputText, setInputText] = useState("");
  const { mutate } = useSendPostComment({ updatePage });

  function handleSubmit() {
    mutate({
      postId,
      commentId,
      text: inputText
    });
  }

  return (
    <View style={subCommentStyles.container}>
      <HeaderDescription
        userName={user.firstName}
        createdAt={createdAt}
      />
      <Text>
        {text}
      </Text>
      <Input
        placeholder="Write a reply ..."
        layout="secondary"
        containerStyle={subCommentStyles.inputContainer}
        placeholderTextColor={subCommentStyles.input.color}
        style={subCommentStyles.input}
        onChangeText={(value: string) => setInputText(value)}
        onSubmitEditing={handleSubmit}
        value={inputText}
      />
    </View>
  )
}

export function SingleComment(props: SingleCommentProps) {
  const {
    user,
    createdAt,
    text,
    comments,
  } = props;

  return (
    <View style={singleCommentStyles.container}>
      <View style={singleCommentStyles.header}>
        <HeaderDescription
          userName={user.firstName}
          createdAt={createdAt}
        />
        <Text>
          {text}
        </Text>
      </View>
      <SubComment
        {...props}
        commentId={comments[0]}
      />
    </View>
  )
}

const singleCommentStyles = StyleSheet.create({
  container: {
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  header: {
    gap: 5
  }
});

const subCommentStyles = StyleSheet.create({
  container: {
    gap: 8,
    borderLeftWidth: 2,
    borderLeftColor: Colors.border,
    paddingLeft: 20
  },
  inputContainer: {
    backgroundColor: Colors.defaultNotification,
  },
  input: {
    color: Colors.inputIcon,
    fontSize: Fonts.size.link
  }
})
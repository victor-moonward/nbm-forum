import { StyleSheet, View } from "react-native";
import { Input } from "../common";
import { useState } from "react";
import { ArrowUp } from "@/assets/icons";
import { Colors, Fonts } from "@/styles/theme";

interface ReplyBarProps {
  onSubmit: (value: string) => void;
}

export function ReplyBar({ onSubmit }: ReplyBarProps) {
  const [textInputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <Input
        placeholder="Make a Comment"
        onChangeText={(value: string) => setInputValue(value)}
        value={textInputValue}
        layout="secondary"
        containerStyle={styles.inputContainer}
        placeholderTextColor={styles.input.color}
        style={styles.input}
        onSubmitEditing={() => onSubmit(textInputValue)}
      />
      <View style={styles.buttonContainer}>
        <ArrowUp />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.inputIcon
  },
  inputContainer: {
    backgroundColor: Colors.defaultNotification,
  },
  input: {
    color: Colors.inputIcon,
    fontSize: Fonts.size.link
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    backgroundColor: Colors.primary
  }
})
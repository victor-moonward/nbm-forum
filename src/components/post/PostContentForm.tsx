import { useCreatePost } from "@/stores";
import { Colors, Fonts } from "@/styles/theme";
import { StyleSheet, TextInput, View } from "react-native";

export function PostContentForm() {
  const { handleFormValues } = useCreatePost();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter post title..."
        style={styles.titleInput}
        placeholderTextColor={Colors.placeholder}
        multiline
        onChangeText={(title) => handleFormValues({ title })}
      />
      <TextInput
        placeholder="Enter your body text.."
        style={styles.bodyInput}
        placeholderTextColor={Colors.placeholder}
        multiline
        onChangeText={(content) => handleFormValues({ content })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleInput: {
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.bold,
    fontFamily: Fonts.family.default,
  },
  container: {
    gap: 5
  },
  bodyInput: {
    fontFamily: Fonts.family.default,
  },
});
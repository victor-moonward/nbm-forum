import { ScrollView, StyleSheet, View } from "react-native";
import { CheckBox, Title } from "../common";
import { useTags } from "@/services/feed/getTags";
import { useCreatePost } from "@/stores";

export function CategoryBlock() {
  const { data: receivedTags } = useTags();
  const {
    handleFormValues,
    formInitialValues: { tags }
  } = useCreatePost(state => state);

  function handleTags(tagName: string) {
    if (tags.includes(tagName)) {
      handleFormValues({ tags: tags.filter(tag => tag !== tagName) });
    } else {
      handleFormValues({ tags: [...tags, tagName] });
    }
  }

  return (
    <View>
      <Title>Select a Category</Title>
      <ScrollView contentContainerStyle={styles.checkBoxContainer}>
        {receivedTags?.data.map(tag => (
          <CheckBox
            placeholder={tag.name}
            onPress={(value) => handleTags(value as string)}
            value={tag.name}
            checked={tags.includes(tag.name)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    gap: 10,
    paddingTop: 20
  }
})
import { Upload } from "@/assets/icons";
import { Colors, Fonts } from "@/styles/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface IUploadFile {
  title: string;
  description: string;
  onUpload: () => void;
}

export function UploadFileInput({
  title,
  description,
  onUpload
}: IUploadFile) {
  return (
    <Pressable
      style={styles.container}
      onPress={onUpload}
    >
      <View style={styles.iconContainer}>
        <Upload color={Colors.inputIcon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    borderStyle: "dashed",
    borderColor: Colors.inputIcon,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconContainer: {
    justifyContent: "center",
    paddingHorizontal: 25
  },
  title: {
    fontFamily: Fonts.family.default,
    color: Colors.inputIcon,
    fontSize: Fonts.size.text,
    fontWeight: Fonts.weight.bold
  },
  description: {
    fontFamily: Fonts.family.default,
    color: Colors.inputIcon,
    fontSize: Fonts.size.text,
  },
  textContainer: {
    gap: 3,
    maxWidth: 230,
    flex: 1,
  }
});
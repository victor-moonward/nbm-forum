import { StyleSheet, View } from "react-native";
import { Button, Text, Title, UploadFileInput } from "../common";
import { ArrowRight } from "@/assets/icons";
import { Colors } from "@/styles/theme";
import { useFileUpload } from "@/services/file-upload";

export function ProfilePictureBlock() {
  const { isLoading, handleSubmitPhoto } = useFileUpload();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Title>Upload a Profile Picture</Title>
        <Text>
          Let’s put a name to a face. Upload a profile picture to complete your profile. This is an optional step.
        </Text>
      </View>
      <UploadFileInput
        title="Select a file"
        description="JPG or PNG, file size no more than 10MB"
        onUpload={handleSubmitPhoto}
      />
      <Button
        onPress={() => console.log("data")}
        icon={<ArrowRight color={Colors.clean} />}
        disabled={isLoading}
      >
        Create my account
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30
  },
  textContainer: {
    gap: 10
  }
});
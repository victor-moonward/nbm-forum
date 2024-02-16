import { ArrowRight, Close } from "@/assets/icons";
import { Button, IconButton } from "@/components/common";
import { CategoryBlock, PostContentForm, PostOverview } from "@/components/post";
import { usePosts } from "@/services/post/getPosts";
import { useSubmitPost } from "@/services/post/submitPost";
import { useCreatePost } from "@/stores";
import { Colors } from "@/styles/theme";
import { StackNavigation } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

function TopBar() {
  const {
    currentStep,
    totalSteps,
    handleNextStep,
    formInitialValues,
    resetFormValues
  } = useCreatePost(state => state);
  const { mutate: submitPost, isPending } = useSubmitPost();
  const { query: { refetch } } = usePosts();
  const { navigate } = useNavigation<StackNavigation>();
  
  const isActionBlocked = !formInitialValues.title || !formInitialValues.content;
  const actionLabel = currentStep === totalSteps ? "Post" : "Next";

  function onPress() {
    if (currentStep === totalSteps) {
      submitPost(formInitialValues);
      resetFormValues();
      navigate("Feed");
      refetch();
    } else {
      handleNextStep();
    }
  }

  return (
    <View style={TopBarStyles.container}>
      <IconButton
        onPress={() => {
          navigate("Feed");
          resetFormValues();
        }}
        icon={<Close color={TopBarStyles.icon.color} />}
      />
      <Button
        onPress={onPress}
        disabled={isActionBlocked || isPending}
        icon={
          <ArrowRight
            color={Colors.clean}
            viewBox="0 0 22 22"
            height={18}
            width={18}
          />
        }
      >
        {actionLabel}
      </Button>
    </View>
  )
}

export function CreatePost() {
  const { currentStep } = useCreatePost(state => state);

  return (
    <View style={styles.container}>
      <TopBar />
      {currentStep === 0 && <PostContentForm />}
      {currentStep === 1 && <CategoryBlock />}
      {currentStep === 2 && <PostOverview />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 20
  },
});

const TopBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  icon: {
    color: Colors.text
  }
});
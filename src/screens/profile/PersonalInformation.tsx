import { EditInfoBar } from "@/components/profile";
import { PageTitle } from "@/components/profile/PageTitle";
import { PersonalInfoBlock } from "@/components/profile/PersonalInfoBlock";
import { useUser } from "@/stores";
import { StyleSheet, View } from "react-native";

export function PersonalInformation() {
  const userData = useUser(state => state.data);

  return (
    <View style={styles.container}>
      <EditInfoBar onPress={() => console.log("test")} />
      <PageTitle>Personal Information</PageTitle>
      <PersonalInfoBlock userData={userData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20
  }
});
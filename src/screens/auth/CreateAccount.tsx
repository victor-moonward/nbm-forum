import {
  AuthBar,
  CredentialsForm,
  LocationBlock,
  PasswordForm
} from "@/components/auth";
import { useCreateAccount } from "@/stores";
import { Colors } from "@/styles/theme";
import { StyleSheet, View } from "react-native";

export function CreateAccount() {
  const { currentStep, totalSteps } = useCreateAccount(state => state);

  return (
    <View style={styles.container}>
      <AuthBar
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
      {currentStep === 0 && <CredentialsForm />}
      {currentStep === 1 && <LocationBlock />}
      {currentStep === 2 && <PasswordForm />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.clean,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    gap: 30,
  }
});
import { StyleSheet, View } from "react-native";
import { AuthBar, LoginForm } from "@/components/auth";
import { Colors } from "@/styles/theme";

export function Login() {
  return (
    <View style={styles.container}>
      <AuthBar />
      <LoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.clean,
    paddingVertical: 40,
    paddingHorizontal: 16,
    flex: 1,
    gap: 30
  }
});
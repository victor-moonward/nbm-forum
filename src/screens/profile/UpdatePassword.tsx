import { VisibilityOff, VisibilityOn } from "@/assets/icons";
import { IconButton, Input } from "@/components/common";
import { EditInfoBar } from "@/components/profile";
import { PageTitle } from "@/components/profile/PageTitle";
import { Colors } from "@/styles/theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

function handleIconVisibility(hiddenPassword: boolean) {
  return hiddenPassword ? <VisibilityOff color={Colors.border} /> : <VisibilityOn color={Colors.border} />;
}

export function UpdatePassword() {
  const [hidePassword, setHidePassword] = useState({
    currentPassword: false,
    confirmNewPassword: false,
    newPassword: false
  });

  function handleShowPassword(type: "currentPassword" | "newPassword" | "confirmNewPassword") {
    setHidePassword(prev => ({ ...prev, [type]: !prev[type] }));
  }

  return (
    <View style={styles.container}>
      <EditInfoBar onPress={() => console.log("test")} />
      <PageTitle>Personal Information</PageTitle>
      <View style={styles.inputsContainer}>
        <Input
          onChangeText={() => console.log("test")}
          onBlur={() => console.log("test")}
          placeholder="Enter your current password"
          label="Current Password"
          secureTextEntry={hidePassword.currentPassword}
          icon={
            <IconButton
              onPress={() => handleShowPassword('currentPassword')}
              icon={handleIconVisibility(hidePassword.currentPassword)}
            />
          }
        />
        <Input
          onChangeText={() => console.log("test")}
          onBlur={() => console.log("test")}
          placeholder="Enter your new password"
          label="Create a new Password"
          secureTextEntry={hidePassword.newPassword}
          icon={
            <IconButton
              onPress={() => handleShowPassword('newPassword')}
              icon={handleIconVisibility(hidePassword.newPassword)}
            />
          }
        />
        <Input
          onChangeText={() => console.log("test")}
          onBlur={() => console.log("test")}
          placeholder="Re-enter your new password"
          label="Confirm New Password"
          secureTextEntry={hidePassword.confirmNewPassword}
          icon={
            <IconButton
              onPress={() => handleShowPassword('confirmNewPassword')}
              icon={handleIconVisibility(hidePassword.confirmNewPassword)}
            />
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    gap: 20
  },
  inputsContainer: {
    gap: 10
  }
});
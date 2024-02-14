import { Formik } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  CheckBox,
  IconButton,
  Input,
  Text,
  Title
} from "@/components/common";
import {
  ArrowRight,
  VisibilityOff,
  VisibilityOn,
} from "@/assets/icons";
import { Colors, Fonts } from "@/styles/theme";
import { useCreateAccountForm } from "@/hooks/useCreateAccountForm";
import { PasswordReqBlock } from "./PasswordReqBlock";

function handleIconVisibility(hiddenPassword: boolean) {
  return hiddenPassword ? <VisibilityOff color={Colors.border} /> : <VisibilityOn color={Colors.border} />;
}

export function PasswordForm() {
  const [hidePassword, setHidePassword] = useState({
    password: false,
    confirmPassword: false
  });
  const { formInitialValues, passwordsSchema, handleNextStep } = useCreateAccountForm();

  function handleShowPassword(type: "password" | "confirmPassword") {
    setHidePassword(prev => ({ ...prev, [type]: !prev[type] }));
  }

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={passwordsSchema}
      onSubmit={handleNextStep}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        setFieldValue
      }) => (
        <View style={formStyles.container}>
          <View style={formStyles.textContainer}>
            <Title>Let’s Secure your Account</Title>
            <Text>Let’s keep your NBM account safe with a secure password.</Text>
          </View>
          <View style={formStyles.inputsContainer}>
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Enter your password"
              value={values.password}
              label="Create a Password"
              secureTextEntry={hidePassword.password}
              icon={
                <IconButton
                  onPress={() => handleShowPassword('password')}
                  icon={handleIconVisibility(hidePassword.password)}
                />
              }
            />
            <Input
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('password')}
              placeholder="Re-enter your password"
              value={values.confirmPassword}
              label="Confirm Password"
              secureTextEntry={hidePassword.confirmPassword}
              icon={
                <IconButton
                  onPress={() => handleShowPassword('confirmPassword')}
                  icon={handleIconVisibility(hidePassword.confirmPassword)}
                />
              }
            />
          </View>
          <View style={formStyles.errorsContainer}>
            <PasswordReqBlock hasErrors={Boolean(errors.password)} />
          </View>
          <View>
            <CheckBox
              onPress={() => setFieldValue('acceptTerms', !values.acceptTerms)}
              placeholder="By ticking this box, I agree to the terms and conditions of NBM."
              checked={values.acceptTerms}
            />
          </View>
          <Button
            onPress={handleSubmit}
            icon={<ArrowRight color={Colors.clean} />}
            disabled={
              !values.password ||
              !values.acceptTerms ||
              !values.confirmPassword
            }
          >
            Next
          </Button>
        </View>
      )}
    </Formik>
  )
}

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  textContainer: {
    gap: 10
  },
  inputsContainer: {
    gap: 5,
    alignItems: "flex-end",
  },
  linkText: {
    fontFamily: Fonts.family.default,
    fontSize: Fonts.size.link,
    lineHeight: Fonts.height.text,
    color: Colors.primary,
    textDecorationLine: "underline",
    textAlign: "center"
  },
  rightText: {
    textAlign: "right"
  },
  centerText: {
    textAlign: "center"
  },
  errorsContainer: {
    flex: 1
  }
});


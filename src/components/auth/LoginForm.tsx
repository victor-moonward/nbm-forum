import { Formik } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, IconButton, Input, Link, Text, Title } from "@/components/common";
import { ArrowRight, VisibilityOff, VisibilityOn } from "@/assets/icons";
import { Colors, Fonts } from "@/styles/theme";
import { useLogin } from "@/services/login";
import { Notification } from ".";
import { dictionaryMessage } from "@/constants/validation";

export function LoginForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const {
    handleFormSubmit,
    formInitialValues,
    loginSchema,
    isLoading,
    errorMessage
  } = useLogin();

  function handleShowPassword() {
    setHidePassword(prev => !prev)
  }

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={loginSchema}
      onSubmit={handleFormSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
      }) => (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Title>Log In</Title>
            <Text>Enter your details to log into your account. </Text>
          </View>
          <View style={styles.inputsContainer}>
            <Input
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="you@email.com.au"
              value={values.email}
              label="Email"
              error={errors.email}
            />
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Enter your password"
              value={values.password}
              label="Password"
              secureTextEntry={hidePassword}
              error={errors.password}
              icon={
                <IconButton
                  onPress={handleShowPassword}
                  icon={hidePassword ?
                    <VisibilityOff color={Colors.border} />
                    :
                    <VisibilityOn color={Colors.border} />
                  }
                />
              }
            />
            <Link
              onPress={() => console.log('test')}
              style={styles.rightText}
            >
              Forgot your password?
            </Link>
          </View>
          <Button
            onPress={handleSubmit}
            icon={<ArrowRight color={Colors.clean} />}
            disabled={isLoading}
          >
            Log In
          </Button>
          <View style={styles.errorsContainer}>
            {errorMessage && (
              <Notification
                type="error"
                message={dictionaryMessage.INVALID_CREDENTIALS}
              />
            )}
          </View>
          <Link
            onPress={() => console.log('test')}
            style={styles.centerText}
          >
            Don’t have an account?
            {' '}
            <Text style={styles.linkText}>Create one Here</Text>
          </Link>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
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
})
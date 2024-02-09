import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button, Input, Link, Text, Title } from "@/components/common";
import { ArrowRight } from "@/assets/icons";
import { Colors, Fonts } from "@/styles/theme";
import { Notification } from ".";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "@/types";
import { useCreateAccountForm } from "@/hooks/useCreateAccountForm";

export function CredentialsForm() {
  const {
    formInitialValues,
    credentialsSchema,
    handleNextStep
  } = useCreateAccountForm();
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={credentialsSchema}
      onSubmit={handleNextStep}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors
      }) => (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Title>Create your Account</Title>
            <Text>Enter your details below to start creating your brand new account.</Text>
          </View>
          <View style={styles.inputsContainer}>
            <Input
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              placeholder="Enter your first name here"
              label="Your name"
              value={values.firstName}
            />
            <Input
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              placeholder="Enter your last name here"
              value={values.lastName}
            />
            <Input
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="you@email.com.au"
              value={values.email}
              label="Email"
            />
          </View>
          {errors.email && (
            <Notification
              type="error"
              message={errors.email}
            />
          )}
          <Button
            onPress={handleSubmit}
            icon={<ArrowRight color={Colors.clean} />}
          >
            Next
          </Button>
          <View style={styles.linkContainer}>
            <Link
              onPress={() => navigate("Login")}
              style={styles.centerText}
            >
              Already have an account?
              {' '}
              <Text style={styles.linkText}>Log in here</Text>
            </Link>
          </View>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
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
    textAlign: "center",
    alignSelf: "flex-end"
  },
  linkContainer: {
    justifyContent: "flex-end",
    flex: 1,
  }
})
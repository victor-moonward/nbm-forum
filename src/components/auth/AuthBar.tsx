import { Image, StyleSheet, View } from "react-native";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { IconButton, Title } from "@/components/common";
import { Colors } from "@/styles/theme";
import Logo from "@/assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "@/types";
import { useCreateAccount } from "@/stores";

interface AuthBarProps {
  currentStep?: number;
  totalSteps?: number;
}

export function AuthBar({ currentStep, totalSteps }: AuthBarProps) {
  const { navigate } = useNavigation<StackNavigation>();
  const showProgressBar = currentStep !== undefined && totalSteps !== undefined;
  const { handlePreviousStep } = useCreateAccount();

  function handleGoBack() {
    if (currentStep === 0 || !currentStep) {
      navigate("Welcome");
      return;
    }

    handlePreviousStep();
  }

  return (
    <View style={authBar.container}>
      <View style={topBarStyles.container}>
        <IconButton
          onPress={handleGoBack}
          icon={
            <ArrowLeft color={topBarStyles.icon.color} />
          }
        />
        <View style={topBarStyles.logoContainer}>
          <Title style={topBarStyles.title}>NBM</Title>
          <Image source={Logo} />
        </View>
      </View>
      {showProgressBar && (
        <View style={progressBarStyles.container}>
          {new Array(totalSteps).fill(0).map((_, index) => (
            <View
              key={index}
              style={[
                progressBarStyles.bar,
                currentStep >= index ? progressBarStyles.activeBar : undefined
              ]}
            />
          ))}
        </View>
      )}
    </View>
  )
}

const authBar = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: 'center'
  }
});

const topBarStyles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3
  },
  title: {
    color: Colors.primary
  },
  icon: {
    color: Colors.text
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

const progressBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    maxWidth: '90%'
  },
  bar: {
    flex: 1,
    height: 8,
    backgroundColor: Colors.border
  },
  activeBar: {
    backgroundColor: Colors.primary
  }
});
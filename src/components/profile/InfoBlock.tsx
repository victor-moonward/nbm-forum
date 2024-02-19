import { Pressable, StyleSheet, View } from "react-native"
import { Text } from "../common"
import { Colors, Fonts } from "@/styles/theme";
import { ArrowForward } from "@/assets/icons";
import { ReactElement } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "@/types";
import { PageTitle } from "./PageTitle";

interface SingleInfoProps {
  screen: string;
  icon: ReactElement;
  label: string;
}

interface InfoBlockProps {
  blockName: string;
  options: Array<SingleInfoProps>
}

function SingleInfo({
  screen,
  label,
  icon
}: SingleInfoProps) {
  const { navigate } = useNavigation<StackNavigation>();

  function handleNavigation() {
    navigate(screen)
  }

  return (
    <Pressable
      onPress={handleNavigation}
      style={singleInfoStyles.container}
    >
      <View style={singleInfoStyles.field}>
        <View style={singleInfoStyles.iconContainer}>
          {icon}
        </View>
        <Text style={singleInfoStyles.text}>
          {label}
        </Text>
      </View>
      <ArrowForward color={Colors.border} />
    </Pressable>
  )
}

export function InfoBlock({
  blockName,
  options
}: InfoBlockProps) {
  return (
    <View style={infoBlockStyles.container}>
      <PageTitle>{blockName}</PageTitle>
      {options.map(item => <SingleInfo {...item} />)}
    </View>
  )
}

const infoBlockStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 8
  },

});

const singleInfoStyles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    backgroundColor: Colors.defaultNotification,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 55
  },
  iconContainer: {
    width: 32,
    alignItems: "center",
  },
  text: {
    fontWeight: Fonts.weight.bold
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  }
})
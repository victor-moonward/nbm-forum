import { StyleSheet, View } from "react-native";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { IconButton, Title } from "@/components/common";
import { Colors } from "@/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "@/types";

export function ProfileBar() {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={topBarStyles.container}>
      <IconButton
        onPress={() => navigate("Feed")}
        icon={<ArrowLeft color={topBarStyles.icon.color} />}
      />
      <View style={topBarStyles.titleContainer}>
        <Title>Profile</Title>
      </View>
    </View>
  )
}

const topBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    paddingRight: 20
  },
  icon: {
    color: Colors.text
  }
});
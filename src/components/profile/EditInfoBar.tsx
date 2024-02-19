import { Colors } from "@/styles/theme";
import { StyleSheet, View } from "react-native";
import { Button, IconButton } from "../common";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight, Check, Close } from "@/assets/icons";
import { StackNavigation } from "@/types";

export function EditInfoBar({
  onPress
}) {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <IconButton
        onPress={() => navigate("Settings")}
        icon={<Close color={styles.icon.color} />}
      />
      <Button
        onPress={onPress}
        icon={
          <Check
            color={Colors.clean}
            viewBox="0 0 45 45"
          />
        }
      >
        Save
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  icon: {
    color: Colors.text
  }
});
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/common";
import { Colors } from "@/styles/theme";
import { Error } from "@/assets/icons";

interface NotificationProps {
  type: "error" | "success";
  message: string;
}

const icons = {
  error: <Error color={Colors.warning} />,
  success: <></>
};

export function Notification({ type, message }: NotificationProps) {
  return (
    <View style={styles.container}>
      {icons[type]}
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: Colors.errorNotification,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center"
  },
  text: {
    flexWrap: "wrap",
    flex: 1,
    color: Colors.text
  }
})
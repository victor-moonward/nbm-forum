import { Counter, Numbers, TextField } from "@/assets/icons";
import { Colors, Fonts } from "@/styles/theme";
import { StyleSheet, Text, View } from "react-native";

interface IRequirements {
  hasErrors: boolean;
}

export function PasswordReqBlock({ hasErrors }: IRequirements) {
  console.log(hasErrors);

  return (
    <View style={[styles.container, hasErrors ? styles.error : undefined]}>
      <Text style={styles.text}>Your password must...</Text>
      <View style={styles.item}>
        <Counter color={Colors.primary} />
        <Text style={styles.text}>
          Include at least one number (eg. 1)
        </Text>
      </View>
      <View style={styles.item}>
        <Numbers color={Colors.primary} />
        <Text style={styles.text}>
          Include at least one symbol (eg. #)
        </Text>
      </View>
      <View style={styles.item}>
        <TextField color={Colors.primary} />
        <Text style={styles.text}>
          Include at least one upper and lowercase character
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 14,
    gap: 8,
    backgroundColor: Colors.defaultNotification
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  text: {
    fontSize: Fonts.size.link,
    color: Colors.notificationText,
    fontWeight: Fonts.weight.normal
  },
  error: {
    backgroundColor: Colors.errorNotification
  }
});
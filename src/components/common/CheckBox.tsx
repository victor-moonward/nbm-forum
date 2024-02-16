import { Colors } from "@/styles/theme";
import { Pressable, StyleSheet, View } from "react-native";
import { Check } from "@/assets/icons";
import { Text } from ".";

interface ICheckBox {
  onPress: (value: string | number | boolean) => void;
  checked: boolean;
  placeholder: string;
  value: string | number | boolean;
}

export function CheckBox({
  onPress,
  placeholder,
  checked,
  value
}: ICheckBox) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.checkBox, checked ? styles.checked : undefined]}
        onPress={() => onPress(value)}
      >
        {checked && <Check />}
      </Pressable>
      <Text style={styles.text}>
        {placeholder}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  checkBox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: Colors.border
  },
  checked: {
    backgroundColor: Colors.primary
  },
  text: {
    color: Colors.placeholder,
  }
});
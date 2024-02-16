import { Colors } from "@/styles/theme";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "../common";

interface SingleTagProps {
  active?: boolean;
  children: string;
  onPress?: (val: string) => void;
}

export function SingleTag({ active, children, onPress }: SingleTagProps) {
  return (
    <Pressable
      style={[styles.container, active ? styles.active : undefined]}
      onPress={() => onPress && onPress(children)}
    >
      <Text style={active ? styles.activeText : styles.defaultText}>
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tagBackground,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  active: {
    backgroundColor: Colors.primary,
  },
  activeText: {
    color: Colors.clean
  },
  defaultText: {
    color: Colors.text
  }
})
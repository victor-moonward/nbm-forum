import { ReactElement, ReactNode } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text
} from "react-native";
import { Colors, Fonts } from "@/styles/theme";

interface ButtonProps {
  children: ReactNode;
  outlined?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  icon?: ReactElement;
  disabled?: boolean;
}

export function Button({
  children,
  outlined = false,
  onPress,
  icon,
  disabled
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.default,
        outlined ? styles.outlined : null,
        disabled ? styles.disabled : null
      ]}
      disabled={disabled}
    >
      <Text
        style={[
          textStyles.default,
          outlined ? textStyles.colored : null
        ]}
      >
        {children}
      </Text>
      {icon}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderWidth: 2,
    gap: 7,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  outlined: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.4
  }
});

const textStyles = StyleSheet.create({
  default: {
    fontSize: Fonts.size.text,
    color: Colors.clean,
    gap: 5,
  },
  colored: {
    color: Colors.primary
  }
});
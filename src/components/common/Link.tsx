import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text as TextCP,
  TextStyle
} from "react-native";
import { Colors, Fonts } from "@/styles/theme";
import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  style?: TextStyle;
  onPress: (event: GestureResponderEvent) => void;
}

export function Link({ children, style, onPress }: LinkProps) {
  return (
    <Pressable onPress={onPress}>
      <TextCP style={[styles.text, style]}>
        {children}
      </TextCP>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.family.default,
    fontSize: Fonts.size.link,
    lineHeight: Fonts.height.text,
    color: Colors.primary,
  }
})
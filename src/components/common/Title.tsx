import { StyleSheet, Text, TextStyle } from "react-native";
import {
  Colors,
  Fonts
} from "@/styles/theme";

interface TitleProps {
  children: string;
  style?: TextStyle;
}

export function Title({ children, style }: TitleProps) {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.family.default,
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.bold,
    lineHeight: Fonts.height.title,
    color: Colors.text
  }
})
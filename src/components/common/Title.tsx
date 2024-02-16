import { StyleSheet, Text, TextStyle } from "react-native";
import {
  Colors,
  Fonts
} from "@/styles/theme";

interface TitleProps {
  children: string;
  style?: TextStyle;
  numberOfLines?: number;
}

export function Title({ children, style, numberOfLines}: TitleProps) {
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
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
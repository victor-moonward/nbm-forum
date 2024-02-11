import {
  StyleSheet,
  Text as TextCP,
  TextStyle
} from "react-native";
import { Colors, Fonts } from "@/styles/theme";

interface IText {
  children: string;
  style?: TextStyle;
}

export function Text({ children, style }: IText) {
  return (
    <TextCP style={[styles.text, style]}>
      {children}
    </TextCP>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.family.default,
    fontSize: Fonts.size.text,
    fontWeight: Fonts.weight.normal,
    lineHeight: Fonts.height.text,
    color: Colors.text
  }
})
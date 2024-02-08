import {
  Pressable,
  StyleSheet,
  Text as TextCP,
  TextStyle
} from "react-native";
import { Colors, Fonts } from "@/styles/theme";
import { ReactNode } from "react";

// TO-DO: Link props
interface IText {
  children: ReactNode;
  style?: TextStyle;
  onPress: any;
}

export function Link({ children, style, onPress }: IText) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <TextCP style={[styles.text, style]}>
        {children}
      </TextCP>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  text: {
    fontFamily: Fonts.family.default,
    fontSize: Fonts.size.link,
    lineHeight: Fonts.height.text,
    color: Colors.primary,
    width: "100%"
  }
})
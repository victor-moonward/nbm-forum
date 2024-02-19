import { Text } from "@/components/common";
import { Fonts } from "@/styles/theme";
import { StyleSheet } from "react-native";

interface PageTitleProps {
  children: string;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <Text style={styles.container}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.input,
    marginBottom: 8
  }
})
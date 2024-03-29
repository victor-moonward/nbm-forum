import { StyleSheet, TextInput, View } from "react-native";
import { Colors, Fonts } from "@/styles/theme";
import { Text } from ".";
import { ChangeEvent, ReactNode } from "react";

interface InputProps {
  label?: string;
  icon?: ReactNode;
  error?: string | undefined;
  placeholder: string;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  value?: string | undefined;
  onBlur?: (e: any) => void;
  secureTextEntry?: boolean;
}

export function Input({ 
  label, 
  icon, 
  error, 
  ...rest 
}: InputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        {error && <Text style={styles.errorMsg}>{error}</Text>}
      </View>
      <View style={styles.input}>
        <TextInput
          {...rest}
          placeholderTextColor={styles.placeholder.color}
          style={styles.textInput}
        />
        {icon}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: Fonts.weight.bold,
  },
  container: {
    gap: 5,
    width: "100%"
  },
  input: {
    borderColor: Colors.border,
    borderWidth: 1,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    minHeight: 50,
  },
  placeholder: {
    color: Colors.placeholder
  },
  textInput: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  errorMsg: {
    fontSize: Fonts.size.link,
    color: Colors.warning
  }
});
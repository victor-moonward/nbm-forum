import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
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
  layout?: "primary" | "secondary";
  containerStyle?: ViewStyle;
  [key:string] : any;
}

export function Input({
  label,
  icon,
  error,
  layout,
  containerStyle,
  ...rest
}: InputProps) {

  if (layout === "secondary") {
    return (
      <View style={[secondaryLayoutStyles.container, containerStyle]}>
        {icon}
        <TextInput
          placeholderTextColor={secondaryLayoutStyles.input.color}
          style={secondaryLayoutStyles.input}
          {...rest}
        />
      </View>
    )
  }

  return (
    <View style={[primaryLayoutStyles.container,containerStyle]}>
      <View style={primaryLayoutStyles.labelContainer}>
        {label && <Text style={primaryLayoutStyles.label}>{label}</Text>}
        {error && <Text style={primaryLayoutStyles.errorMsg}>{error}</Text>}
      </View>
      <View style={primaryLayoutStyles.input}>
        <TextInput
          placeholderTextColor={primaryLayoutStyles.placeholder.color}
          style={primaryLayoutStyles.textInput}
          {...rest}
        />
        {icon}
      </View>
    </View>
  )
}

const primaryLayoutStyles = StyleSheet.create({
  container: {
    gap: 5,
    width: "100%"
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  label: {
    fontWeight: Fonts.weight.bold,
  },
  errorMsg: {
    fontSize: Fonts.size.link,
    color: Colors.warning
  },
  textInput: {
    flex: 1,
  },
  placeholder: {
    color: Colors.placeholder
  },
});

const secondaryLayoutStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#3839391A",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 5,
  },
  input: {
    color: Colors.placeholder,
    fontSize: Fonts.size.input,
    flex: 1,
  }
})
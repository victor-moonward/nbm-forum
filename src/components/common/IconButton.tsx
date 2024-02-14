import { ReactNode } from "react";
import { Pressable } from "react-native";

interface IIconButton {
  onPress: any;
  icon: ReactNode
}

export function IconButton({ onPress, icon}: IIconButton) {
  return (
    <Pressable onPress={onPress}>
      {icon}
    </Pressable>
  )
}
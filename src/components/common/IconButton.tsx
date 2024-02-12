import { ReactNode } from "react";
import { Pressable } from "react-native";

interface IconButtonProps {
  onPress: any;
  icon: ReactNode
}

export function IconButton({ onPress, icon }: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {icon}
    </Pressable>
  )
}
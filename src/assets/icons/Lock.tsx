import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Lock = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={22}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M18.9999 9.33333H17.6666V6.66667C17.6666 2.98667 14.6799 0 10.9999 0C7.31992 0 4.33325 2.98667 4.33325 6.66667V9.33333H2.99992C1.53325 9.33333 0.333252 10.5333 0.333252 12V25.3333C0.333252 26.8 1.53325 28 2.99992 28H18.9999C20.4666 28 21.6666 26.8 21.6666 25.3333V12C21.6666 10.5333 20.4666 9.33333 18.9999 9.33333ZM10.9999 21.3333C9.53325 21.3333 8.33325 20.1333 8.33325 18.6667C8.33325 17.2 9.53325 16 10.9999 16C12.4666 16 13.6666 17.2 13.6666 18.6667C13.6666 20.1333 12.4666 21.3333 10.9999 21.3333ZM15.1333 9.33333H6.86658V6.66667C6.86658 4.38667 8.71992 2.53333 10.9999 2.53333C13.2799 2.53333 15.1333 4.38667 15.1333 6.66667V9.33333Z"
    />
  </Svg>
);
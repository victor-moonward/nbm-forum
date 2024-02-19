import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Person = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M10.9999 11.0002C13.9466 11.0002 16.3333 8.6135 16.3333 5.66683C16.3333 2.72016 13.9466 0.333496 10.9999 0.333496C8.05325 0.333496 5.66658 2.72016 5.66658 5.66683C5.66658 8.6135 8.05325 11.0002 10.9999 11.0002ZM10.9999 13.6668C7.43992 13.6668 0.333252 15.4535 0.333252 19.0002V21.6668H21.6666V19.0002C21.6666 15.4535 14.5599 13.6668 10.9999 13.6668Z"
    />
  </Svg>
);
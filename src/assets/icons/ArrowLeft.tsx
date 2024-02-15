import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const ArrowLeft = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={20}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="m7 14 1.41-1.41L3.83 8H20V6H3.83l4.59-4.59L7 0 0 7l7 7Z"
    />
  </Svg>
);
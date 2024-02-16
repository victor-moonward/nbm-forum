import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Close = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M0 1.41L1.41 0L7 5.59L12.59 0L14 1.41L8.41 7L14 12.59L12.59 14L7 8.41L1.41 14L0 12.59L5.59 7L0 1.41Z"
    />
  </Svg>
);
import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const ArrowUp = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <Path
      fill={color}
      d="M-3.49691e-07 8.5L1.41 9.91L7 4.33L7 16.5L9 16.5L9 4.33L14.59 9.91L16 8.5L8 0.5L-3.49691e-07 8.5Z"
    />
  </Svg>
);
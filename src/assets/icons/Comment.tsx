import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Comment = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M18 0H2C.9 0 0 .9 0 2v18l4-4h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 14H4l-2 2V2h16v12Z" />
  </Svg>
);
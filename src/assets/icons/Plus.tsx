import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { ISVG } from "@/types";

export const Plus = ({ color = "#fff", ...props }: ISVG) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M19.333 11.333h-8v8H8.667v-8h-8V8.667h8v-8h2.666v8h8v2.666Z"
    />
  </Svg>
);
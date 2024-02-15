import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Error = ({ color = "#000", ...props }: SVGProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 23 23"
    {...props}
  >
    <Path
      fill={color}
      d="M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z"
    />
  </Svg>
);
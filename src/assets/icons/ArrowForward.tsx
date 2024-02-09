import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { ISVG } from "@/types";

export const ArrowForward = ({ color = "#fff", ...props }: ISVG) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={color}
      d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12l-8.23 8.23Z"
    />
  </Svg>
);
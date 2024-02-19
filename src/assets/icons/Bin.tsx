import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Bin = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={20}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M2.00008 21.3333C2.00008 22.8 3.20008 24 4.66675 24H15.3334C16.8001 24 18.0001 22.8 18.0001 21.3333V5.33333H2.00008V21.3333ZM19.3334 1.33333H14.6667L13.3334 0H6.66675L5.33342 1.33333H0.666748V4H19.3334V1.33333Z"
    />
  </Svg>
);
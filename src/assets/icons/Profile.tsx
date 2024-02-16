import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Profile = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667ZM16 8a4.672 4.672 0 0 1 4.667 4.667A4.672 4.672 0 0 1 16 17.333a4.672 4.672 0 0 1-4.667-4.666A4.672 4.672 0 0 1 16 8Zm0 18.667c-2.707 0-5.907-1.094-8.187-3.84A13.262 13.262 0 0 1 16 20c3.093 0 5.933 1.067 8.187 2.827-2.28 2.746-5.48 3.84-8.187 3.84Z"
    />
  </Svg>
);
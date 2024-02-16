import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const TextField = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={20}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M6.5 16c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 0 1 5 14.5V3H1.5c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 0 1 0 1.5C0 1.083.146.73.438.437A1.447 1.447 0 0 1 1.5 0h10c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062 0 .417-.146.77-.438 1.063A1.447 1.447 0 0 1 11.5 3H8v11.5c0 .417-.146.77-.438 1.063A1.446 1.446 0 0 1 6.5 16Zm9 0c-.417 0-.77-.146-1.063-.438A1.446 1.446 0 0 1 14 14.5V8h-1.5c-.417 0-.77-.146-1.063-.438A1.446 1.446 0 0 1 11 6.5c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12.5 5h6c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062 0 .417-.146.77-.438 1.063A1.447 1.447 0 0 1 18.5 8H17v6.5c0 .417-.146.77-.438 1.063A1.446 1.446 0 0 1 15.5 16Z"
    />
  </Svg>
);
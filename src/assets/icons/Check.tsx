import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Check = ({ color = "#fff", ...props }: SVGProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    viewBox="0 0 63 63"
    {...props}
  >
    <Path fill="none" d="M0 0H50V50H0z" />
    <Path fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="20" d="M5967.056-2393.842a1.166 1.166 0 0 1-.095-.084v-.005l-.008-.008-.014-.014-9-9.062a1.455 1.455 0 0 1 .188-2.04 1.472 1.472 0 0 1 2.044-.17l7.9 7.953 17.792-17.681a1.582 1.582 0 0 1 2.226 0 1.558 1.558 0 0 1 0 2.213l-18.915 18.8a1.572 1.572 0 0 1-1.112.457 1.58 1.58 0 0 1-1.006-.359z" transform="translate(-5948.591 2429.411)" />
  </Svg>
);
import * as React from "react"
import Svg, { Path } from "react-native-svg";
import { SVGProps } from "@/types";

export const Rocket = ({ color = "#FFF", ...props }: SVGProps) => (
  <Svg
    width={120}
    height={179}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M119.606 135.34c-3.534-15.09-20.911-37.26-23.721-40.775C90.478 79.145 80.943 55.23 72.1 49.067l-.032-16.893a53.281 53.281 0 0 0-3.792-19.729l-.42-1.253-3.037-7.66a5.6 5.6 0 0 0-10.413.012l-3.01 7.41-.368 1.376a53.675 53.675 0 0 0-3.766 19.89l.032 16.944c-8.8 6.28-18.2 30.136-23.54 45.536C20.95 98.227 3.682 120.58.168 135.566l-.168.768.194.762c2.778 10.814 27.959 12.364 43.2 12.3l.006 2.384a5.185 5.185 0 0 0 2.119 4.147 14.8 14.8 0 0 0 3.023 1.751l.013 6.505-3.379 12.119 6.486 1.557a36.198 36.198 0 0 0 16.8-.032l6.486-1.576-3.424-12.1-.013-6.654a14.797 14.797 0 0 0 2.842-1.731 5.073 5.073 0 0 0 1.776-2.681c.12-.44.18-.894.181-1.35l-.006-2.4c15.174.026 40.375-1.589 43.262-12.351l.026-.11.194-.762-.18-.772ZM62.681 15.888a45.53 45.53 0 0 1 1.253 4.593 7.972 7.972 0 0 0-4.173-1.2 8.174 8.174 0 0 0-4.651 1.563 49.956 49.956 0 0 1 1.466-4.947 8.5 8.5 0 0 1 6.1-.013M59.787 31.25c-1.187.007 1.57 0 0 0Zm-5.058 49.968 10.129-.02.2 71.375-.045.006-10.052.013-.232-71.374ZM6.7 136.097l.006-.026-.006.026Zm58.359 25.84c-.3.052-.581.123-.879.168-.762.1-1.531.142-2.3.194-1.26.078-2.525.078-3.786 0-.724-.045-1.447-.078-2.171-.174-.31-.039-.607-.123-.917-.168l-.013-2.9 10.026-.013.039-.006.001 2.899Z"
    />
  </Svg>
);
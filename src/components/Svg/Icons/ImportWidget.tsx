import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox='0 0 16 16' {...props}>
    <path
      d="M1.5 6.11226V14.0714H14.5V6.11226M7.99984 10.7551V2M7.99984 2L3.52581 5.71429M7.99984 2L12.4739 5.71429"
      stroke="url(#paint0_linear_10149_634)"
      strokeWidth="1.3"
      fill="none"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10149_634"
        x1="10.253"
        y1="14.0714"
        x2="6.30943"
        y2="1.81897"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE3876" stopOpacity="0.519832" />
        <stop offset="1" stopColor="#D030DD" />
      </linearGradient>
    </defs>
  </Svg>
);

export default Icon;

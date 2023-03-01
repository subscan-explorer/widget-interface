import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path d="M1.5 6.7002V14.6594H14.5V6.7002" stroke="url(#paint0_linear_10149_4728)" fill="none" strokeWidth="1.3" />
    <path
      d="M8 2V9.77784M8 9.77784L4 5.5012M8 9.77784L12 5.5012"
      stroke="url(#paint1_linear_10149_4728)"
      strokeWidth="1.3"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10149_4728"
        x1="10.253"
        y1="14.6594"
        x2="8.44256"
        y2="6.12815"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE3876" stopOpacity="0.519832" />
        <stop offset="1" stopColor="#D030DD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_10149_4728"
        x1="9.38648"
        y1="9.77784"
        x2="6.7499"
        y2="1.95404"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE3876" stopOpacity="0.519832" />
        <stop offset="1" stopColor="#D030DD" />
      </linearGradient>
    </defs>
  </Svg>
);

export default Icon;

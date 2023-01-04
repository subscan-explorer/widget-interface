import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 64 63" {...props}>
    <circle cx="32.0996" cy="31.5" r="31.5" fill="url(#paint0_linear_7873_37520)" />
    <path d="M28.5624 13.8154H35.6361V49.1838H28.5624V13.8154Z" fill="white" />
    <path d="M14.415 34.6828V27.6091H49.7835V34.6828H14.415Z" fill="white" />
    <defs>
      <linearGradient
        id="paint0_linear_7873_37520"
        x1="43.0181"
        y1="63"
        x2="21.1811"
        y2="1.2549e-06"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE3876" stopOpacity="0.519832" />
        <stop offset="1" stopColor="#D030DD" />
      </linearGradient>
    </defs>
  </Svg>
);

export default Icon;

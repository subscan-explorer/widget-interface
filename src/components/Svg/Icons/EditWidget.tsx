import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 15 15" {...props}>
    <path
      d="M0.150391 15.1998V13.6319H14.4004V15.1998H0.150391ZM3.43885 12.5867H0.150391V9.451L7.13837 2.6047L10.2186 5.5413L10.9968 4.80179L7.90568 1.85579L8.66751 1.10636C8.87311 0.910087 9.15211 0.799805 9.44304 0.799805C9.73396 0.799805 10.013 0.910087 10.2186 1.10636L11.7696 2.58485C12.1975 2.99301 12.1975 3.65465 11.7696 4.06281L3.43885 12.5867Z"
      fill="url(#paint0_linear_7873_37542)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7873_37542"
        x1="9.74506"
        y1="15.1998"
        x2="4.71261"
        y2="0.832418"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE3876" stopOpacity="0.519832" />
        <stop offset="1" stopColor="#D030DD" />
      </linearGradient>
    </defs>
  </Svg>
);

export default Icon;

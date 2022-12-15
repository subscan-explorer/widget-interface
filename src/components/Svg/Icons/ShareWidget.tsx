

import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox='0 0 14 14' {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.76778 0.599609V2.02183H2.21922V11.9774H12.1552V8.42183H13.5746V13.3996H0.799805V0.599609H5.76778ZM13.5746 0.599609V1.58023L13.5998 1.60527L13.5746 1.63001V6.2885H12.1552V3.05223L7.07587 8.14208L6.07219 7.13642L11.1765 2.02183H7.89691V0.599609H13.5746Z" fill="url(#paint0_linear_7873_37537)" />
    <defs>
      <linearGradient id="paint0_linear_7873_37537" x1="9.41817" y1="13.3996" x2="4.98144" y2="0.59961" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FE3876" stopOpacity="0.519832" />
        <stop offset="1" stopColor="#D030DD" />
      </linearGradient>
    </defs>
  </Svg>
);

export default Icon;

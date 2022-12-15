

import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox='0 0 14 16' {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.7554 3.6798V15.1998H0.799805V3.6798H10.7554ZM9.33314 5.1198H2.22203V13.7598H9.33314V5.1198ZM13.5998 0.799805V12.3198H12.1773L12.1776 2.2398H2.93314V0.799805H13.5998Z" fill="url(#paint0_linear_7873_37534)" />
    <defs>
      <linearGradient id="paint0_linear_7873_37534" x1="9.41817" y1="15.1998" x2="3.95848" y2="1.19871" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FE3876" stopOpacity="0.519832" />
        <stop offset="1" stopColor="#D030DD" />
      </linearGradient>
    </defs>
  </Svg>
);

export default Icon;

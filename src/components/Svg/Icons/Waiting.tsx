

import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox='0 0 30 30' {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M30 15C30 6.71468 23.2853 0 15 0C6.71468 0 0 6.71799 0 15C0 23.282 6.71799 30 15 30C23.282 30 30 23.2853 30 15ZM2.14286 15C2.14286 7.90115 7.8983 2.14286 15 2.14286C22.1017 2.14286 27.8571 7.8983 27.8571 15C27.8571 22.1017 22.0989 27.8571 15 27.8571C7.90115 27.8571 2.14286 22.0989 2.14286 15Z" fill="#FFB600" />
    <path d="M16.1538 9.23077H12.6923V18.4615H19.6154V15H16.1538V9.23077Z" fill="#FFB600" />
  </Svg>
);

export default Icon;

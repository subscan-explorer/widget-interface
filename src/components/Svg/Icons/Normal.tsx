import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 30 30" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0C23.2853 0 30 6.71468 30 15C30 23.2853 23.282 30 15 30C6.71799 30 0 23.282 0 15C0 6.71799 6.71468 0 15 0ZM12.8573 17.6839L21.4442 9.09703L22.9594 10.6123L14.3726 19.1991L14.3733 19.1998L12.858 20.715L7.55474 15.4117L9.06998 13.8965L12.8573 17.6839ZM2.14286 15C2.14286 7.90115 7.8983 2.14286 15 2.14286C22.1017 2.14286 27.8571 7.8983 27.8571 15C27.8571 22.1017 22.0989 27.8571 15 27.8571C7.90115 27.8571 2.14286 22.0989 2.14286 15Z"
      fill="#6BC10E"
    />
  </Svg>
);

export default Icon;

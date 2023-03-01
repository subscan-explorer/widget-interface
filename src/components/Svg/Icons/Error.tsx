import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox="0 0 30 30" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 15C30 6.72499 23.275 0 15 0C6.72499 0 0 6.72499 0 15C0 23.275 6.72499 30 15 30C23.275 30 30 23.275 30 15ZM21.0609 10.4438L16.5152 14.9895L21.0609 19.5352L19.5457 21.0504L15 16.5047L10.4543 21.0504L8.9391 19.5352L13.4848 14.9895L8.9391 10.4438L10.4543 8.92858L15 13.4742L19.5457 8.92858L21.0609 10.4438Z"
      fill="#FF475D"
    />
  </Svg>
);

export default Icon;

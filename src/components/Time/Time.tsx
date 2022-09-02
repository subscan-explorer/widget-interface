

import React from 'react';
import { BareProps } from 'types';
import { StyledFont12, StyledFont14 } from 'ui/common';
import { parseTimeToUtc, timeAgo } from 'utils';
import { Tooltip, Box } from '@chakra-ui/react';

export interface Props extends BareProps {
  second: number;
}

const Time: React.FC<Props> = ({ className, second }) => {
  return (<Tooltip hasArrow bg='#fff' placement="top" label={<Box p="2"><StyledFont12>{parseTimeToUtc(second)}</StyledFont12></Box>}>
    <StyledFont14 className={className}>{timeAgo(second)}</StyledFont14>
  </Tooltip>);
};

export default Time;

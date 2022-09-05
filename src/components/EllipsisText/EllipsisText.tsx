import React from 'react';
import { BareProps } from 'types';
import { StyledFont12, StyledFont14 } from 'ui/common';
import { toShortString } from 'utils';
import { Tooltip, Box } from '@chakra-ui/react';

export interface Props extends BareProps {
  ellipsis?: boolean;
  text: string;
}

const EllipsisText: React.FC<Props> = ({ className, text, ellipsis }) => {
  const displayName = ellipsis ? toShortString(text) : text;
  return (<>
    {ellipsis ? <Tooltip className={className} hasArrow bg='#fff' placement="top" label={<Box p="2"><StyledFont12>{text}</StyledFont12></Box>}>
      <StyledFont14>{displayName}</StyledFont14>
    </Tooltip> : <StyledFont14 className={className}>{displayName}</StyledFont14>}</>);
};

export default EllipsisText;

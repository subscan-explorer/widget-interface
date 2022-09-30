import React from 'react';
import { BareProps } from 'types';
import { StyledFont14 } from 'ui/common';

const Status: React.FC<BareProps> = ({ children }) => {
  return <StyledFont14 wordbreak="break-all" >{children}</StyledFont14>;
};

export default Status;

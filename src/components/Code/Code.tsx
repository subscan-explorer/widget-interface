

import React from 'react';
import styled from 'styled-components';
import { BareProps } from 'types';
import { StyledFont14 } from 'ui/common';

export interface Props extends BareProps {
  code?: string;
}

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background04 };
  padding: 10px;
`;

const StyledCode = styled(StyledFont14)`
  align-items: left;
  background-color: ${({ theme }) => theme.colors.background05 };
  padding: 10px;
`;

const Code: React.FC<Props> = ({ className, code }) => {
  return (<StyledContainer>
    <StyledCode wordbreak='break-all'>{code}</StyledCode>
  </StyledContainer>);
};

export default Code;

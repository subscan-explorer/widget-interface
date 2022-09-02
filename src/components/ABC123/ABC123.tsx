

import React from 'react';
import styled from 'styled-components';
import { BareProps } from 'types';

export interface Props extends BareProps {
  number?: string;
}

const StyledABC123 = styled.div`
  align-items: center;
`;

const ABC123: React.FC<Props> = ({ className, number }) => {
  return <StyledABC123>{number}</StyledABC123>;
};

export default ABC123;

import React from 'react';
import styled from 'styled-components';
import { BareProps } from 'types';
import { StyledFont14 } from 'ui/common';
import { getBalanceAmount } from 'utils/formatBalance';

export interface Props extends BareProps {
  value: string;
  decimals?: number;
  symbol?: string;
}

const StyledContainer = styled.div`
  align-items: left;
`;

const Balance: React.FC<Props> = ({ className, value, decimals = 0, symbol = '' }) => {
  const balanceAmount = getBalanceAmount(value, decimals);

  const displayValue = balanceAmount.toFormat(3);
  const splitValue = displayValue.split('.');

  return (
    <StyledContainer className={className}>
      <StyledFont14>{splitValue[0]}</StyledFont14>
      {splitValue[1] ? <StyledFont14 fontColor="background02">.{splitValue[1]}</StyledFont14> : null}{' '}
      {symbol && <StyledFont14> {symbol}</StyledFont14>}
    </StyledContainer>
  );
};

export default Balance;

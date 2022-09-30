

import React from 'react';
import styled, { css } from 'styled-components';
import { BareProps } from 'types';

export interface Props extends BareProps {
  text: string;
  variant?: Variant;
}

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export type Variant = typeof variants[keyof typeof variants];

const styleVariants = {
  [variants.PRIMARY]: css`
    background-color: ${({ theme }) => theme.chain.color};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.chain.color};
  `,
  [variants.SECONDARY]: css`
    background-color: 'transparent';
    color: ${({ theme }) => theme.chain.color};
    border: 1px solid ${({ theme }) => theme.chain.color};
  `,
};

const StyledContainer = styled.div<{ variant?: Props['variant'] }>`
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-radius: ${({ theme }) => theme.chain.borderRadius};
  ${({variant}) => styleVariants[variant || 'primary']}
`;

const Tag: React.FC<Props> = ({ className, text, variant }) => {
  return <StyledContainer className={className} variant={variant} >{text}</StyledContainer>;
};

export default Tag;

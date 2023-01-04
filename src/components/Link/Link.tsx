import React from 'react';
import styled from 'styled-components';
import { StyledFont14 } from 'ui/common';
import { LinkProps } from './types';

const getExternalLinkProps = (): { target: string; rel: string } => ({
  target: '_blank',
  rel: 'noreferrer noopener',
});

const StyledLink = styled(StyledFont14)<LinkProps>`
  color: ${({ theme }) => theme.colors.link};
  align-items: center;
  display: flex;
  width: fit-content;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps> = ({ external, children, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return (
    <StyledLink as="a" {...internalProps} {...props}>
      {children}
    </StyledLink>
  );
};

Link.defaultProps = {
  color: 'primary',
};

export default Link;

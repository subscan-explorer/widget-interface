import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import { LinkRouterProps } from './types';

const StyledLink = styled(Text)<Omit<LinkRouterProps, 'to'>>`
  align-items: center;
  display: flex;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkRouter: React.FC<LinkRouterProps> = ({ to, ...props }) => {
  return (
    <Link to={to}>
      <StyledLink {...props} />
    </Link>
  );
};

export default LinkRouter;

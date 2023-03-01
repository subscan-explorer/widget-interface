import React from 'react';
import Link from './Link';
import { LinkProps } from './types';

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link external {...props}>
    {children}
  </Link>
);

export default LinkExternal;

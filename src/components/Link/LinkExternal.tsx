// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Link from './Link';
import { LinkProps } from './types';

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link external {...props}>
    {children}
  </Link>
);

export default LinkExternal;

// Copyright 2018-2021 evolution.land authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnchorHTMLAttributes } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  to?: string;
}

export interface LinkRouterProps {
  external?: boolean;
  to: string;
}

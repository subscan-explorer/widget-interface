import { AnchorHTMLAttributes } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  to?: string;
}

export interface LinkRouterProps {
  external?: boolean;
  to: string;
}

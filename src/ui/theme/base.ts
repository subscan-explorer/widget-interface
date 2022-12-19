import { ChainColors, MediaQueries } from '../type';

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`
};

export const radii = {
  small: "4px",
  default: "16px",
  card: "24px",
  circle: "50%",
};

export const chain: {
  dark: ChainColors;
  light: ChainColors;
} = {
  dark: {
    color: '#FF0083',
    borderRadius: '4px',
  },
  light: {
    color: '#FF0083',
    borderRadius: '4px',
  }
};

export type ChainStyles = typeof chain;

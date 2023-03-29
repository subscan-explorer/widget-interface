import { Colors } from './colors';
import { MediaQueries, ChainColors, Radii } from '../type';
export { default as dark } from './dark';
export { default as light } from './light';

interface SubscanTheme {
  isDark: boolean;
  colors: Colors;
  chain: ChainColors;
  mediaQueries: MediaQueries;
  radii: Radii;
}

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends SubscanTheme {}
}

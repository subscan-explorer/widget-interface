import { Colors } from './colors';
import { MediaQueries, ChainColors } from '../type';
export { default as dark } from './dark';
export { default as light } from './light';

interface SubscanTheme {
  isDark: boolean;
  colors: Colors;
  chain: ChainColors;
  mediaQueries: MediaQueries;
}

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends SubscanTheme {}
}

import { ChainColors } from './base';
import { Colors } from './colors';

export { default as dark } from './dark';
export { default as light } from './light';

interface SubscanTheme {
  isDark: boolean,
  colors: Colors,
  chain: ChainColors
}

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends SubscanTheme {}
}
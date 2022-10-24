import { lightColors } from './colors';
import { DefaultTheme } from 'styled-components';
import { chain, mediaQueries } from './base';

const lightTheme: DefaultTheme = {
  isDark: false,
  colors: lightColors,
  chain: chain.dark,
  mediaQueries
};

export default lightTheme;

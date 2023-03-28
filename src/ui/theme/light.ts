import { lightColors } from './colors';
import { DefaultTheme } from 'styled-components';
import { chain, mediaQueries, radii } from './base';

const lightTheme: DefaultTheme = {
  isDark: false,
  colors: lightColors,
  chain: chain.light,
  mediaQueries,
  radii,
};

export default lightTheme;

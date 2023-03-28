import { darkColors } from './colors';
import { DefaultTheme } from 'styled-components';
import { chain, mediaQueries, radii } from './base';

const darkTheme: DefaultTheme = {
  isDark: true,
  colors: darkColors,
  chain: chain.dark,
  mediaQueries,
  radii,
};

export default darkTheme;

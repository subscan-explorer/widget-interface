import { darkColors } from './colors';
import { DefaultTheme } from 'styled-components';
import { chain } from './base';

const darkTheme: DefaultTheme = {
  isDark: true,
  colors: darkColors,
  chain: chain.dark
};

export default darkTheme;
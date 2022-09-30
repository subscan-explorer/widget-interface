import { lightColors } from './colors';
import { DefaultTheme } from 'styled-components';
import { chain } from './base';

const lightTheme: DefaultTheme = {
  isDark: false,
  colors: lightColors,
  chain: chain.dark
};

export default lightTheme;
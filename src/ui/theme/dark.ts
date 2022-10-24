import { darkColors } from "./colors";
import { DefaultTheme } from "styled-components";
import { chain, mediaQueries } from "./base";

const darkTheme: DefaultTheme = {
  isDark: true,
  colors: darkColors,
  chain: chain.dark,
  mediaQueries,
};

export default darkTheme;

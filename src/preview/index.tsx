import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from 'ui/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'ui/chakraTheme';
import BigNumber from 'bignumber.js';
import { initSunmaoUI } from '@sunmao-ui-fork/runtime';
import runtimeConfig from 'config/runtime';
import { type Application } from '@sunmao-ui-fork/core';
import "@arco-design/web-react/dist/css/arco.css";

// This config is required for number formatting
// https://mikemcl.github.io/bignumber.js/#toS
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  ROUNDING_MODE: 1
});

const Preview: React.FC<{ options: Application }> = ({ options }) => {
  const { App, registry } = initSunmaoUI(runtimeConfig);

  return (<ChakraProvider theme={theme}>
    <ThemeProvider theme={light}>
      {options && <App options={options} />}
    </ThemeProvider>
  </ChakraProvider>);
};

export default Preview;

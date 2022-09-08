import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { light } from 'ui/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'ui/chakraTheme';
import BigNumber from 'bignumber.js';
import { initSunmaoUI } from '@sunmao-ui/runtime';
import runtimeConfig from 'config/runtime';
import { DEFAULT_APP } from 'config/constants';

// This config is required for number formatting
// https://mikemcl.github.io/bignumber.js/#toS
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  ROUNDING_MODE: 1
});

const Preview: React.FC = () => {
  const { App, registry } = initSunmaoUI(runtimeConfig);

  return (<ChakraProvider theme={theme}>
    <ThemeProvider theme={light}>
      <App options={DEFAULT_APP} />
    </ThemeProvider>
  </ChakraProvider>);
};

export default Preview;

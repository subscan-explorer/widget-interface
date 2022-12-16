import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from 'ui/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'ui/chakraTheme';
import BigNumber from 'bignumber.js';
import { initSunmaoUI } from '@subscan/widget-runtime';
import runtimeConfig from 'config/runtime';
import { type Application } from '@subscan/widget-core';
import '../chakraCSSReset.css';

// This config is required for number formatting
// https://mikemcl.github.io/bignumber.js/#toS
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  ROUNDING_MODE: 1
});

const Preview: React.FC<{ options: Application, isDark?: boolean }> = ({ options, isDark }) => {
  const { App } = initSunmaoUI(runtimeConfig);
  const initTheme = useMemo(() => isDark ? dark : light, [isDark]);

  return (<ChakraProvider theme={theme} resetCSS={false}>
    <ThemeProvider theme={initTheme}>
      <div className="chakraCSSReset">
        {options && <App options={options} />}
      </div>
    </ThemeProvider>
  </ChakraProvider>);
};

export default Preview;

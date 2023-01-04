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
import { ChainStyles } from 'ui/theme/base';

export type { ChainStyles } from 'ui/theme/base';
export type { ChainColors } from 'ui/type';

// This config is required for number formatting
// https://mikemcl.github.io/bignumber.js/#toS
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  ROUNDING_MODE: 1,
});

const Preview: React.FC<{ options: Application; isDark?: boolean; chainStyles?: ChainStyles }> = ({
  options,
  isDark,
  chainStyles,
}) => {
  const { App } = initSunmaoUI(runtimeConfig);
  const initTheme = useMemo(() => {
    const defaultStyles = isDark ? dark : light;
    if (chainStyles && chainStyles?.dark && chainStyles?.light) {
      defaultStyles.chain = {
        ...defaultStyles.chain,
        ...(isDark ? chainStyles?.dark : chainStyles?.light),
      };
    }
    return isDark ? dark : light;
  }, [chainStyles, isDark]);

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <ThemeProvider theme={initTheme}>
        <div className="chakraCSSReset">{options && <App options={options} />}</div>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Preview;

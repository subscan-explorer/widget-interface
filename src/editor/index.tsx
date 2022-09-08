import { initSunmaoUIEditor } from '@sunmao-ui/editor';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BareProps } from 'types';
import '@sunmao-ui/editor/dist/index.css';
import runtimeConfig from 'config/runtime';
import { DEFAULT_APP } from 'config/constants';
import { light } from 'ui/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'ui/chakraTheme';
import BigNumber from 'bignumber.js';

// This config is required for number formatting
// https://mikemcl.github.io/bignumber.js/#toS
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  ROUNDING_MODE: 1
});

const StyledContainer = styled.div`
  height: 100%;
`;

const EditorUI: React.FC<BareProps> = ({ className }) => {
  const { Editor } = initSunmaoUIEditor({
    defaultApplication: DEFAULT_APP,
    runtimeProps: runtimeConfig
  });

  return (<ChakraProvider theme={theme}>
    <ThemeProvider theme={light}>
      <StyledContainer>
        <Editor />
      </StyledContainer>
    </ThemeProvider>
  </ChakraProvider>);
};

export default EditorUI;

import React from 'react';
import './App.css';
import Editor from 'editor';
import { ThemeProvider } from 'styled-components';
import { light } from 'ui/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'ui/chakraTheme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={light}>
        <Editor />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;

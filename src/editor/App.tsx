import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { light } from 'ui/theme';
import { theme } from 'ui/chakraTheme';
import { router } from './router';
import './App.css';

dayjs.locale('en');
dayjs.extend(relativeTime);

function App() {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <ThemeProvider theme={light}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;

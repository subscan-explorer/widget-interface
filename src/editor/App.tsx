import React from 'react';
import './App.css';
import { Editor, Record } from 'editor';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { light } from 'ui/theme';
import { theme } from 'ui/chakraTheme';
import { fetchConfigById } from './services';

const router = createBrowserRouter([
  {
    path: "/editor",
    element: <Editor />,

    children: [
      {
        element: <Editor />,
        path: ":appId",
        id: "editor",
        loader: async ({ params }) => {
          try {
            if (params.appId) {
              return await fetchConfigById(params.appId);
            }
          } catch (error) {
            console.log('/editor loader', error);
            return {};
          }
        }
      }
    ]
  },
  {
    path: "/",
    element: <Record />,
  },
]);

function App() {
  return (<ChakraProvider resetCSS={false} theme={theme}>
    <ThemeProvider theme={light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ChakraProvider>);
}

export default App;

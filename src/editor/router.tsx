
import React from 'react';
import './App.css';
import { Editor, Record } from 'editor';
import { createBrowserRouter } from 'react-router-dom';
import { fetchConfigById } from './services';

const BASE_URL = '/lowcode';

export const router = createBrowserRouter([
  {
    path: `${BASE_URL}/editor`,
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
    path: `${BASE_URL}`,
    element: <Record />,
  },
]);

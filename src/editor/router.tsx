import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Editor from './Editor';
import Management from './Management';
import { fetchConfigById } from './api/subscan/Services';
import { LocalStorageManager } from './api/localstorage/LocalStorageManager';

export const ROUTER_BASE_URL = '/lowcode';

const CHANNEL = process.env.REACT_APP_CHANNEL;

const routers: RouteObject[] = [
  {
    path: `${ROUTER_BASE_URL}/editor`,
    element: <Editor />,
    children: [
      {
        element: <Editor />,
        path: ':appId',
        id: 'editor',
        loader: async ({ params }) => {
          const lsManager = new LocalStorageManager();

          try {
            if (params.appId) {
              if (CHANNEL === 'subscan') {
                return await fetchConfigById(params.appId);
              } else {
                return {
                  application: lsManager.getAppFromLS(params.appId),
                  id: params.appId,
                  name: '',
                };
              }
            }
          } catch (error) {
            console.log('/editor loader', error);
            return {};
          }
        },
      },
    ],
  },
];

if (CHANNEL !== 'subscan') {
  routers.push({
    path: `${ROUTER_BASE_URL}`,
    element: <Management />,
  });
}

// 404
routers.push({
  path: '*',
  element: null,
});

export const router = createBrowserRouter(routers);

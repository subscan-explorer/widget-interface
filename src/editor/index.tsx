import { initSunmaoUIEditor } from '@sunmao-ui-fork/editor';
import React from 'react';
import styled from 'styled-components';
import { BareProps, ProApiConfig } from 'types';
import '@sunmao-ui-fork/editor/dist/index.css';
import runtimeConfig from 'config/runtime';
import BigNumber from 'bignumber.js';
import "@arco-design/web-react/dist/css/arco.css";
import { LocalStorageManager } from './LocalStorageManager';
import {
  useRouteLoaderData,
} from "react-router-dom";
import { saveConfig } from './services';
export { default as Record } from './Record';

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

export const Editor: React.FC<BareProps> = ({ className }) => {
  const lsManager = new LocalStorageManager();
  const config = useRouteLoaderData('editor') as ProApiConfig;
  console.log('useRouteLoaderData', config);

  const { Editor } = initSunmaoUIEditor({
    defaultApplication: config.application,
    defaultModules: lsManager.getModulesFromLS(),
    runtimeProps: runtimeConfig,
    storageHandler: {
      onSaveApp(app) {
        saveConfig({
          name: config.name,
          payload: JSON.stringify(app),
          id: config.id
        });
      },
      onSaveModules(modules) {
        lsManager.saveModulesInLS(modules);
      },
    },
    registerCoreComponent: false
  });

  return (<StyledContainer className="chakraCSSReset">
    <Editor />
  </StyledContainer>);
};


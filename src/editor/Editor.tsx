import { initWidgetUIEditor } from '@subscan/widget-editor';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { BareProps, ProApiConfig } from 'types';
import '@subscan/widget-editor/dist/index.css';
import runtimeConfig from 'config/runtime';
import BigNumber from 'bignumber.js';
import { useRouteLoaderData } from 'react-router-dom';
import { LocalStorageManager } from './api/localstorage/LocalStorageManager';
import { saveConfig } from './api/subscan/Services';
import { Application, Module } from '@subscan/widget-core';
export { default as Record } from './Record';
export { default as Management } from './Management';

// This config is required for number formatting
// https://mikemcl.github.io/bignumber.js/#toS
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  ROUNDING_MODE: 1,
});

const StyledContainer = styled.div`
  height: 100%;
`;

const Editor: React.FC<BareProps> = ({ className }) => {
  const lsManager = useMemo(() => new LocalStorageManager(), []);
  const config = useRouteLoaderData('editor') as ProApiConfig;
  console.log('widget data:', config);
  const CHANNEL = process.env.REACT_APP_CHANNEL;

  const { Editor } = initWidgetUIEditor({
    defaultApplication: config.application,
    defaultModules: lsManager.getModulesFromLS(),
    runtimeProps: runtimeConfig,
    storageHandler: {
      onSaveApp(app: Application) {
        if (CHANNEL === 'subscan') {
          saveConfig({
            name: config.name,
            payload: JSON.stringify(app),
            id: config.id,
          });
        } else {
          lsManager.saveWidgetInLs(config.id.toString(), app);
        }
      },
      onSaveModules(modules: Module[]) {
        lsManager.saveModulesInLS(modules);
      },
    },
    registerCoreComponent: false,
  });

  return (
    <StyledContainer className="chakraCSSReset">
      <Editor />
    </StyledContainer>
  );
};

export default Editor;

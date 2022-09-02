import { initSunmaoUIEditor } from '@sunmao-ui/editor';
import React from 'react';
import styled from 'styled-components';
import { BareProps } from 'types';
import '@sunmao-ui/editor/dist/index.css';
import runtimeConfig from 'config/runtime';
import { DEFAULT_APP } from 'config/constants';

export interface Props extends BareProps {
  number: string;
}

const StyledABC123 = styled.div`
  align-items: center;
  height: 100%;
`;

const ABC123: React.FC<BareProps> = ({ className }) => {
  const { Editor } = initSunmaoUIEditor({
    defaultApplication: DEFAULT_APP,
    runtimeProps: runtimeConfig
  });

  return (<StyledABC123>
    <Editor />
  </StyledABC123>);
};

export default ABC123;

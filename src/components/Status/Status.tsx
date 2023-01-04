import { ErrorIcon, NormalIcon, WaitingIcon } from 'components/Svg';
import React from 'react';
import { BareProps } from 'types';

export interface Props extends BareProps {
  number?: string;
  type: StatusType;
}

export enum StatusType {
  normal = 'normal',
  waiting = 'waiting',
  error = 'error',
}

const Status: React.FC<Props> = ({ type }) => {
  switch (type) {
    case StatusType.normal:
      return <NormalIcon />;
    case StatusType.waiting:
      return <WaitingIcon />;
    case StatusType.error:
      return <ErrorIcon />;
    default:
      return type;
  }
};

export default Status;

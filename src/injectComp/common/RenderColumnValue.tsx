
import React, { useCallback, useEffect, useState } from 'react';
import { Type, Static } from '@sinclair/typebox';
import { Balance, Link, Status, Text, Time, EllipsisText } from 'components';
import { Category } from 'config/constants';
import { StyledFont12 } from 'ui/common';
import { StatusType } from 'components/Status/Status';
import { toShortString } from 'utils';
import { Tooltip, Box } from '@chakra-ui/react';

export const BaseColumnSpecObject = {
  type: Type.KeyOf(
    Type.Object({
      text: Type.String(),
      link: Type.String(),
      transactionStatus: Type.String(),
      balance: Type.String(),
      time: Type.String(),
    }),
    {
      title: 'Type',
      category: Category.Basic,
    }
  ),
  transformer: Type.String({
    title: 'Transformer',
    description:
      'return value + \'test\'',
  }),
  prePath: Type.String({
    title: 'URL prefix',
    conditions: [
      {
        key: 'type',
        value: 'link',
      }
    ]
  }),
  ellipsis: Type.Boolean({
    title: 'Ellipsis',
    conditions: [
      {
        or: [
          {
            key: 'type',
            value: 'link',
          },
          {
            key: 'type',
            value: 'text',
          }
        ]
      }
    ]
  }),
  decimals: Type.Number({
    title: 'Token Decimals',
    conditions: [
      {
        key: 'type',
        value: 'balance',
      }
    ]
  }),
  symbol: Type.String({
    title: 'Token Symbol',
    conditions: [
      {
        key: 'type',
        value: 'balance',
      }
    ]
  })
};

export const BaseColumnSpec = Type.Object(BaseColumnSpecObject);

export interface BaseColumnValueProps extends Static<typeof BaseColumnSpec> {
  value: string;
};

export const RenderColumnValue: React.FC<BaseColumnValueProps> = ({ type, value, transformer, ...rest }) => {
  // eslint-disable-next-line no-new-func
  const transformerValue = transformer ? new Function('value', transformer)(value?.toString()) : value;
  const { ellipsis = true, prePath = '', decimals = 0, symbol } = rest;

  switch (type) {
    case 'text':
      return <>{ellipsis ? <EllipsisText ellipsis={ellipsis} text={transformerValue} /> : <Text>{transformerValue?.toString()}</Text>}</>;
    case 'transactionStatus':
      return <Status type={transformerValue as StatusType} />;
    case 'link':
      const to = prePath ? `${prePath}/${transformerValue}` : `/${transformerValue}`;
      const displayName = ellipsis ? toShortString(transformerValue) : transformerValue;

      return (<>{ellipsis ? <Link href={to}>
        <Tooltip hasArrow bg='#fff' placement="top" label={<Box p="2"><StyledFont12>{transformerValue}</StyledFont12></Box>}>
          {displayName}
        </Tooltip>
      </Link> : <Link href={to}>{displayName}</Link>}
      </>);
    case 'time':
      return <Time second={parseInt(transformerValue)} />;
    case 'balance':
      return <Balance value={transformerValue} decimals={decimals} symbol={symbol} />;
    default:
      return <Text>{transformerValue?.toString()}</Text>;
  }
};

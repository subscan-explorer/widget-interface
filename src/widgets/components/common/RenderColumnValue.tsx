import React from 'react';
import { Type, Static } from '@sinclair/typebox';
import { Balance, Link, Status, Text, Time, EllipsisText, Tag, Code } from 'components';
import { PRESET_PROPERTY_CATEGORY } from 'config/constants';
import { StyledFont12 } from 'ui/common';
import { StatusType } from 'components/Status/Status';
import { toShortString } from 'utils';
import { Tooltip, Box } from '@chakra-ui/react';
import { StateManagerInterface } from '@subscan/widget-runtime';

export const BaseColumnSpecObject = {
  transformer: Type.Optional(
    Type.String({
      title: 'Transformer',
      description: "$value + 'test'",
    })
  ),
  type: Type.KeyOf(
    Type.Object({
      text: Type.String(),
      link: Type.String(),
      transactionStatus: Type.String(),
      balance: Type.String(),
      time: Type.String(),
      tag: Type.String(),
      code: Type.String(),
    }),
    {
      title: 'Type',
      category: PRESET_PROPERTY_CATEGORY.Basic,
    }
  ),
  prePath: Type.Optional(
    Type.String({
      title: 'URL prefix',
      conditions: [
        {
          key: 'type',
          value: 'link',
        },
      ],
    })
  ),
  ellipsis: Type.Optional(
    Type.Boolean({
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
            },
          ],
        },
      ],
    })
  ),
  decimals: Type.Optional(
    Type.Number({
      title: 'Token Decimals',
      conditions: [
        {
          key: 'type',
          value: 'balance',
        },
      ],
    })
  ),
  tagstyle: Type.Optional(
    Type.KeyOf(
      Type.Object({
        primary: Type.String(),
        secondary: Type.String(),
      }),
      {
        title: 'Tag Style',
        conditions: [
          {
            key: 'type',
            value: 'tag',
          },
        ],
      }
    )
  ),
  symbol: Type.Optional(
    Type.String({
      title: 'Token Symbol',
      conditions: [
        {
          key: 'type',
          value: 'balance',
        },
      ],
    })
  ),
};

export const BaseColumnSpec = Type.Object(BaseColumnSpecObject);

export interface BaseColumnValueProps extends Static<typeof BaseColumnSpec> {
  value: any;
  stateManager: StateManagerInterface;
}

export const RenderColumnValue: React.FC<BaseColumnValueProps> = ({
  stateManager,
  type,
  value,
  transformer,
  ...rest
}) => {
  const transformerValue = transformer
    ? (stateManager.deepEval(`{{${transformer}}}` || '', { scopeObject: { $value: value } }) as string).toString()
    : value;
  // const transformerValue = transformer ? new Function('value', transformer)(value) : value;
  const { ellipsis = true, prePath = '', decimals = 0, symbol, tagstyle } = rest;

  switch (type) {
    case 'text':
      return (
        <>
          {ellipsis ? (
            <EllipsisText ellipsis={ellipsis} text={transformerValue} />
          ) : (
            <Text>{transformerValue?.toString()}</Text>
          )}
        </>
      );
    case 'transactionStatus':
      return <Status type={transformerValue as StatusType} />;
    case 'link':
      const to = prePath ? `${prePath}/${transformerValue}` : `/${transformerValue}`;
      const displayName = ellipsis ? toShortString(transformerValue) : transformerValue;

      return (
        <>
          {ellipsis ? (
            <Link href={to}>
              <Tooltip
                hasArrow
                bg="#fff"
                placement="top"
                label={
                  <Box p="2">
                    <StyledFont12>{transformerValue}</StyledFont12>
                  </Box>
                }
              >
                {displayName}
              </Tooltip>
            </Link>
          ) : (
            <Link href={to}>{displayName}</Link>
          )}
        </>
      );
    case 'time':
      return <Time second={parseInt(transformerValue)} />;
    case 'balance':
      return <Balance value={transformerValue} decimals={decimals} symbol={symbol} />;
    case 'tag':
      return <Tag text={transformerValue} variant={tagstyle} />;
    case 'code':
      return <Code code={transformerValue} />;
    default:
      return <Text>{transformerValue?.toString()}</Text>;
  }
};

import React from 'react';
import { Type, Static } from '@sinclair/typebox';
import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Balance, Link, Status, Text, Time, EllipsisText } from 'components';
import { CATEGORY, Category, VERSION } from 'config/constants';
import { StyledFont12, StyledFont14Bold, StyledModuleBox } from 'ui/common';
import { StyledTable, StyledTd, StyledTh, StyledTr } from './styled';
import { StatusType } from 'components/Status/Status';
import { toShortString } from 'utils';
import { Tooltip, Box } from '@chakra-ui/react';

export const ColumnSpec = Type.Object({
  title: Type.String({
    title: 'Title',
    category: Category.Basic,
  }),
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
  width: Type.String({
    title: 'Width',
  }),
  transformer: Type.String({
    title: 'Transformer',
    description:
      'return value + \'test\'',
  }),
  dataKey: Type.String({
    title: 'Key',
    category: Category.Basic,
    description:
      'The key corresponding to the column data in the data item is used to display the value',
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
  }),
});

const PropsSpec = Type.Object({
  data: Type.Array(Type.Any(), {
    title: 'Data',
    category: Category.Data,
    weight: 0,
    widget: 'core/v1/expression',
  }),
  columns: Type.Array(ColumnSpec, {
    title: 'Columns',
    description: '',
    category: Category.Columns,
    widget: 'core/v1/array',
    widgetOptions: {
      displayedKeys: ['title'],
    },
    weight: 0,
  }),
});

const StateSpec = Type.Object({
  value: Type.String(),
});

export interface ColumnValueProps extends Static<typeof ColumnSpec> {
  value: string;
};

const RenderColumnValue: React.FC<ColumnValueProps> = ({ type, value, transformer, ...rest }) => {
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

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    name: 'table',
    displayName: 'Table',
    description: 'Table Components',
    exampleProperties: {
      data: [],
    },
    annotations: {
      category: CATEGORY.Display,
    },
  },
  spec: {
    properties: PropsSpec,
    state: StateSpec,
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(({ data, columns, elementRef }) => {
  return (<StyledModuleBox>

    <StyledTable ref={elementRef}>
      <thead>
        <tr>
          {columns.map((thData, tdIndex) => {
            return (
              <StyledTh key={`${thData.title}${tdIndex}`}>
                <StyledFont14Bold>{thData.title}</StyledFont14Bold>
              </StyledTh>
            );
          })}

        </tr>
      </thead>
      <tbody>
        {data?.map((trData, trIndex) => {
          return (
            <StyledTr key={`${trIndex}`}>

              {columns.map((column, tdIndex) => {
                return (
                  <StyledTd key={`${trData.title}${tdIndex}`}>
                    <RenderColumnValue value={trData[column.dataKey]} {...column} />
                    {/* <StyledFont14>{trData[column.dataKey].toString()}</StyledFont14> */}
                  </StyledTd>
                );
              })}

            </StyledTr>);
        })}
      </tbody>
    </StyledTable>
  </StyledModuleBox>);
});


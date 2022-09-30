import React, { useCallback, useEffect, useState } from 'react';
import { Type, Static } from '@sinclair/typebox';
import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { CATEGORY, Category, VERSION } from 'config/constants';
import { StyledFont14, StyledModuleBox } from 'ui/common';
import { css } from '@emotion/css';
import styled from 'styled-components';
import { RenderColumnValue, BaseColumnSpecObject } from '../common/RenderColumnValue';

const CssBox = css`
  padding: 10px 20px;
`;

const StyledColumn = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background04};
  padding: 15px 10px;
`;

const StyledColumnHeader = styled.div`
  width: 180px;
`;

export const ColumnSpec = Type.Object({
  title: Type.String({
    title: 'Title',
    category: Category.Basic,
  }),
  width: Type.String({
    title: 'Width',
  }),
  dataKey: Type.String({
    title: 'Key',
    category: Category.Basic,
    description:
      'The key corresponding to the column data in the data item is used to display the value',
  }),
  sort: Type.KeyOf(
    Type.Object({
      disabled: Type.String(),
      default: Type.String(),
      desc: Type.String(),
      asc: Type.String(),
    }),
    {
      title: 'Sort',
      category: Category.Basic,
    }
  ),
  ...BaseColumnSpecObject
});

const PropsSpec = Type.Object({
  data: Type.Object(Type.Any(), {
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

export interface ColumnValueProps extends Static<typeof ColumnSpec> {
  value: string;
};


export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    name: 'constraintlist',
    displayName: 'Constraint List',
    description: 'Constraint List Components',
    exampleProperties: {
      data: { "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f", "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "extrinsic_index": "10426613-1", "success": false, "hash": "0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8", "block_num": 10426613, "block_timestamp": 1664176458, "module": "balances", "amount": "86.13245", "amount_v2": "86132450000", "fee": "114600000", "nonce": 7, "asset_symbol": "", "asset_type": "", "from_account_display": { "address": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f" }, "to_account_display": { "address": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "display": "0x245b4775082c144c22a4874b0fba8c70c510c5ae" }, "event_idx": 1 },
      columns: [
        {
          "title": "Extrinsic ID",
          "type": "link",
          "width": "",
          "dataKey": "extrinsic_index",
          "prePath": "/extrinsic",
          "ellipsis": false,
          "sort": "disabled"
        },
        {
          "title": "Block",
          "type": "link",
          "width": "",
          "dataKey": "block_num",
          "prePath": "/block",
          "ellipsis": false
        },
        {
          "title": "Time",
          "type": "time",
          "width": "",
          "dataKey": "block_timestamp"
        },
        {
          "title": "From",
          "type": "link",
          "width": "",
          "dataKey": "from",
          "prePath": "/account"
        },
        {
          "title": "To",
          "type": "link",
          "width": "",
          "dataKey": "to",
          "prePath": "/account"
        },
        {
          "title": "Value",
          "type": "balance",
          "width": "",
          "dataKey": "amount_v2",
          "decimals": 9,
          "symbol": "RING"
        },
        {
          "title": "Result",
          "type": "transactionStatus",
          "width": "",
          "dataKey": "success",
          "transformer": "return value == 'true' ? 'normal' : 'error'",
          "sort": "disabled"
        },
        {
          "title": "Hash",
          "type": "link",
          "width": "",
          "dataKey": "hash",
          "prePath": "/extrinsic",
          "ellipsis": true,
          "sort": "disabled"
        }
      ]
    },
    annotations: {
      category: CATEGORY.Display,
    },
  },
  spec: {
    properties: PropsSpec,
    state: {},
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(({ data, columns, elementRef, mergeState }) => {
  return (<StyledModuleBox className={CssBox} ref={elementRef} >
    {columns?.map((column, index) => {
      return (<StyledColumn key={`${column.title}${index}`}>
        <StyledColumnHeader>
          <StyledFont14 bold>{column.title}</StyledFont14>
        </StyledColumnHeader>
        <div>
          <RenderColumnValue value={data[column.dataKey]} {...column} />
        </div>
      </StyledColumn>);
    })}
  </StyledModuleBox>);
});


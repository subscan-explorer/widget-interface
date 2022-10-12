import React from 'react';
import { Type, Static } from '@sinclair/typebox';
import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { COMPONENTS_CATEGORY, PRESET_PROPERTY_CATEGORY, VERSION } from 'config/constants';
import { StyledFont14, StyledModuleBox, StyledScrollX } from 'ui/common';
import { css } from '@emotion/css';
import styled from 'styled-components';
import { RenderColumnValue, BaseColumnSpecObject } from '../common/RenderColumnValue';
import { StyledTable, StyledTd, StyledTh, StyledTr } from './styled';

const CssBox = css`
  padding: 10px 20px;
`;

const TimeLineSymbolPointer = styled.div`
  border-radius: 5px;
  height: 10px;
  width: 10px;
  background-color: ${({ theme }) => theme.chain.color};

`;

const TimeLineSymbolLine = styled.div`
  width: 1px;
  height: 32px;
  background-color: ${({ theme }) => theme.chain.color};
  opacity: 0.4;
  margin: 4px 0;
`;

const TimeLineSymbolBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 20px;
`;

export const ColumnSpec = Type.Object({
  title: Type.String({
    title: 'Title',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  width: Type.String({
    title: 'Width',
  }),
  dataKey: Type.String({
    title: 'Key',
    category: PRESET_PROPERTY_CATEGORY.Basic,
    description:
      'The key corresponding to the column data in the data item is used to display the value',
  }),
  ...BaseColumnSpecObject
});

const PropsSpec = Type.Object({
  data: Type.Array(Type.Any(), {
    title: 'Data',
    category: PRESET_PROPERTY_CATEGORY.Data,
    weight: 0,
    widget: 'core/v1/expression',
  }),
  columns: Type.Array(ColumnSpec, {
    title: 'Columns',
    description: '',
    category: PRESET_PROPERTY_CATEGORY.Columns,
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
    name: 'timeline',
    displayName: 'TimeLine',
    description: 'TimeLine Components',
    exampleProperties: {
      data: [{ "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f", "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "extrinsic_index": "10426613-1" },
      { "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f", "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "extrinsic_index": "10426613-2" },
      { "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f", "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "extrinsic_index": "10426613-3" }],
      columns: [
        {
          "title": "From",
          "type": "text",
          "width": "",
          "dataKey": "from",
          "prePath": "/account",
          "ellipsis": true,
        },
        {
          "title": "To",
          "type": "text",
          "width": "",
          "dataKey": "to",
          "prePath": "/account",
          "ellipsis": true,
        },
        {
          "title": "Extrinsic Index",
          "type": "link",
          "width": "",
          "dataKey": "extrinsic_index",
          "prePath": "/extrinsic",
        },
      ]
    },
    annotations: {
      category: COMPONENTS_CATEGORY.Display,
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
    <StyledScrollX>
      <StyledTable ref={elementRef}>
        <thead>
          <tr>
            <StyledTh> </StyledTh>

            {columns?.map((thData, tdIndex) => {
              return (
                <StyledTh key={`${thData.title}${tdIndex}`}>
                  <StyledFont14 bold>{thData.title}</StyledFont14>
                </StyledTh>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((trData, trIndex) => {
            return (
              <StyledTr key={`${trIndex}`}>
                <TimeLineSymbolBox style={{ borderBottom: 0 }}>
                  <TimeLineSymbolPointer />
                  {trIndex === data.length - 1 ? null : <TimeLineSymbolLine />}
                </TimeLineSymbolBox>
                {columns.map((column, tdIndex) => {
                  return (
                    <StyledTd key={`${trData.title}${tdIndex}`}>
                      <RenderColumnValue value={trData[column.dataKey]} {...column} />
                    </StyledTd>
                  );
                })}

              </StyledTr>);
          })}
        </tbody>
      </StyledTable>
    </StyledScrollX>
  </StyledModuleBox>);
});

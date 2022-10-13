import React, { useCallback, useEffect, useState } from 'react';
import { Type, Static } from '@sinclair/typebox';
import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { COMPONENTS_CATEGORY, PRESET_PROPERTY_CATEGORY, VERSION } from 'config/constants';
import { StyledFont14, StyledModuleBox, StyledScrollX } from 'ui/common';
import { StyledSortAsc, StyledSortBox, StyledSortDesc, StyledTable, StyledTd, StyledTh, StyledTr } from './styled';
import { useStateValue } from 'hooks/useStateValue';
import { css } from '@emotion/css';
import { BaseColumnSpecObject, RenderColumnValue } from '../common/RenderColumnValue';

const CssBox = css`
  padding: 10px 20px;
`;

export const ColumnSpec = Type.Object({
  title: Type.String({
    title: 'Title',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  width: Type.String({
    title: 'Width',
    category: PRESET_PROPERTY_CATEGORY.Basic,
  }),
  dataKey: Type.String({
    title: 'Key',
    category: PRESET_PROPERTY_CATEGORY.Basic,
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
      category: PRESET_PROPERTY_CATEGORY.Basic,
    }
  ),
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

const StateSpec = Type.Object({
  currentSortKey: Type.String(),
  currentSortValue: Type.String()
});

export interface ColumnValueProps extends Static<typeof ColumnSpec> {
  value: string;
};

type StateType = { key: string, sort: (Static<typeof ColumnSpec>)["sort"] };

const RenderSort: React.FC<{ dataKey: string, sort: (Static<typeof ColumnSpec>)["sort"], cb?: (o: StateType) => void }> = ({ sort, dataKey, cb }) => {
  const [currentSort, setCurrentSortSort] = useState(sort || 'default');

  useEffect(() => {
    setCurrentSortSort(sort);
  }, [sort]);

  const handleClick = useCallback(() => {
    let _sort: (Static<typeof ColumnSpec>)["sort"] = 'default';
    if (currentSort === 'asc') {
      _sort = 'desc';
    }

    if (currentSort === 'default' || !currentSort) {
      _sort = 'asc';
    }

    if (currentSort === 'desc') {
      _sort = 'default';
    }
    const stats = { key: dataKey, sort: _sort };
    cb && cb(stats);
  }, [cb, currentSort, dataKey]);

  if (currentSort === 'disabled') {
    return null;
  }

  return (<StyledSortBox onClick={handleClick}>
    <StyledSortAsc className={currentSort === 'asc' ? 'active' : ''} />
    <StyledSortDesc className={currentSort === 'desc' ? 'active' : ''} />
  </StyledSortBox>);
};

export default implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    name: 'table',
    displayName: 'Table',
    description: 'Table Components',
    exampleProperties: {
      data: [
        { "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f", "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "extrinsic_index": "10426613-1", "success": false, "hash": "0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8", "block_num": 10426613, "block_timestamp": 1664176458, "module": "balances", "amount": "86.13245", "amount_v2": "86132450000", "fee": "114600000", "nonce": 7, "asset_symbol": "", "asset_type": "", "from_account_display": { "address": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f" }, "to_account_display": { "address": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "display": "0x245b4775082c144c22a4874b0fba8c70c510c5ae" }, "event_idx": 1 },
        { "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f", "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "extrinsic_index": "10426613-1", "success": false, "hash": "0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8", "block_num": 10426613, "block_timestamp": 1664176458, "module": "balances", "amount": "86.13245", "amount_v2": "86132450000", "fee": "114600000", "nonce": 7, "asset_symbol": "", "asset_type": "", "from_account_display": { "address": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f" }, "to_account_display": { "address": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N", "display": "0x245b4775082c144c22a4874b0fba8c70c510c5ae" }, "event_idx": 1 }
      ],
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
          "ellipsis": false,
          "sort": "disabled"
        },
        {
          "title": "Time",
          "type": "time",
          "width": "",
          "dataKey": "block_timestamp",
          "sort": "disabled"
        },
        {
          "title": "From",
          "type": "link",
          "width": "",
          "dataKey": "from",
          "prePath": "/account",
          "sort": "disabled"
        }
      ]
    },
    annotations: {
      category: COMPONENTS_CATEGORY.Display,
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
})(({ data, columns, elementRef, mergeState }) => {
  const [currentSortKey, setCurrentSortKey] = useStateValue(
    '' as string,
    mergeState,
    true,
    'currentSortKey'
  );

  const [currentSortValue, setCurrentSortValue] = useStateValue(
    '' as string,
    mergeState,
    true,
    'currentSortValue'
  );

  return (<StyledModuleBox className={CssBox} ref={elementRef}>
    <StyledScrollX>
      <StyledTable>
        <thead>
          <tr>
            {columns?.map((thData, tdIndex) => {
              return (
                <StyledTh key={`${thData.title}${tdIndex}`}>
                  <StyledFont14 bold nowrap>{thData.title}</StyledFont14>
                  <RenderSort cb={({ key, sort }) => {
                    setCurrentSortKey(key);
                    setCurrentSortValue(sort);
                    mergeState({ currentSortKey: key, currentSortValue: sort });
                  }} dataKey={thData.dataKey} sort={currentSortKey === thData.dataKey ? currentSortValue as (Static<typeof ColumnSpec>)["sort"] : thData.sort} />
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


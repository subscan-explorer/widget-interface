import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { css } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from 'utils/sunmao-helper';
import { Category, VERSION } from 'config/constants';
import { useCallback, useEffect, useState } from 'react';
import './Init';
import * as echarts from 'echarts/core';
import { getAreaChartOptions } from './options';
import { useTheme } from 'styled-components';
import { ElementResizeListener } from 'components';

const ButtonPropsSpec = Type.Object({
  data: Type.Array(Type.Array(Type.Any()), {
    title: 'Data',
    category: Category.Data,
    weight: 0,
    widget: 'core/v1/expression',
  }),
});

const exampleProperties: Static<typeof ButtonPropsSpec> = {
  data: [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]]
};

export const Chart = implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'chart',
    displayName: 'Chart',
    exampleProperties,
    annotations: {
      category: 'General',
    },
  },
  spec: {
    properties: ButtonPropsSpec,
    state: {},
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: ['onClick'],
  },
})(props => {
  const { elementRef, customStyle, data, callbackMap } = props;
  const [chart, SetChart] = useState<echarts.ECharts>();
  const { ...cProps } = getComponentProps(props);
  const theme = useTheme();

  const adaptResize = useCallback(() => {
    if (chart) {
      chart.resize();
    }
  }, [chart]);

  useEffect(() => {
    if (!elementRef) return;
    const myChart = echarts.init(elementRef?.current, undefined, { renderer: 'svg' });
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });
    const options = getAreaChartOptions(theme, dateList, valueList);
    myChart.setOption(options);
    SetChart(myChart);
  }, [data, elementRef, theme]);

  return (
    <>
      <ElementResizeListener onResize={adaptResize} />
      <div
        style={{ width: '100%', height: '400px' }}
        ref={elementRef}
        className={css(customStyle?.content)}
        onClick={callbackMap?.onClick}
        {...cProps}
      />
    </>
  );
});

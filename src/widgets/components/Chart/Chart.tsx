import { implementRuntimeComponent } from '@subscan/widget-runtime';
import { css } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from 'utils/widget-helper';
import { COMPONENTS_CATEGORY, VERSION } from 'config/constants';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './Init';
import * as echarts from 'echarts/core';
import { ElementResizeListener } from 'components';
import { ChartPropsSpec as BaseChartPropsSpec } from './types/Chart';
import { filterProperties } from './object';

// https://github.com/webzard-io/sunmao-ui-echarts-lib
const ChartPropsSpec = Type.Object({
  ...BaseChartPropsSpec,
});

const exampleProperties: Static<typeof ChartPropsSpec> = {
  title: {
    text: 'Chart',
    left: '',
    right: '',
    top: '',
    bottom: '',
  },
  xAxis: [
    {
      name: '',
      type: 'category',
      data: ['Dimension 1', 'Dimension 2'],
      nameLocation: 'center',
      offset: 0,
      position: 'bottom',
    },
  ],
  yAxis: [
    {
      name: '',
      type: 'value',
      data: [],
      nameLocation: 'center',
      offset: 0,
      position: 'left',
    },
  ],
  series: [
    {
      type: 'line',
      name: 'Series 1',
      label: {
        show: false,
        position: 'top',
      },
      data: [1, 2],
      symbol: 'circle',
      showSymbol: true,
      smooth: true,
    },
    {
      type: 'bar',
      name: 'Series 2',
      label: {
        show: false,
        position: 'top',
      },
      data: [4, 2],
      barWidth: '',
      barGap: '',
      barCategoryGap: '',
      stack: '',
      showBackground: false,
    },
  ],
  color: [],
};

export const Chart = implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'chart',
    displayName: 'Chart',
    exampleProperties,
    annotations: {
      category: COMPONENTS_CATEGORY.Display,
    },
  },
  spec: {
    properties: ChartPropsSpec,
    state: {},
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: ['onClick'],
  },
})(props => {
  const {
    title,
    yAxis,
    xAxis,
    series,
    color,
    ...cProps
  } = getComponentProps(props);
  const { elementRef, customStyle, callbackMap } = props;
  const [chart, SetChart] = useState<echarts.ECharts>();
  const adaptResize = useCallback(() => {
    if (chart) {
      chart.resize();
    }
  }, [chart]);

  const option = useMemo(() => {
    return filterProperties(
      {
        title,
        yAxis,
        xAxis,
        series,
        color,
      },
      (option, key, path) => {
        const value = option[key];
        if (value !== undefined && (value as unknown as string !== '')) {
          const strPath = path.join('.');
          const checkedEmptyArrayProperties = ['color', 'legend.data'];
          if (checkedEmptyArrayProperties.includes(strPath) && Array.isArray(value)) {
            return value.length !== 0;
          } else {
            return true;
          }
        }

        return false;
      },
      { deep: true }
    );
  }, [title, yAxis, xAxis, series, color]);

  useEffect(() => {
    if (!elementRef) return;
    const myChart = echarts.init(elementRef?.current, undefined, { renderer: 'svg' });
    // const dateList = data.map(function (item) {
    //   return item[0];
    // });
    // const valueList = data.map(function (item) {
    //   return item[1];
    // });
    // const options = getAreaChartOptions(theme, dateList, valueList);
    myChart.setOption({
      ...option,
      tooltip: {
        trigger: 'axis',
        triggerOn: 'mousemove',
      },
    });
    SetChart(myChart);
  }, [elementRef, option]);

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

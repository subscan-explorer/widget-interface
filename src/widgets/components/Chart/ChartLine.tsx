import { implementRuntimeComponent } from '@subscan/widget-runtime';
import { css } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from 'utils/widget-helper';
import { COMPONENTS_CATEGORY, VERSION } from 'config/constants';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './Init';
import * as echarts from 'echarts/core';
import { ElementResizeListener } from 'components';
// import { ChartPropsSpec as BaseChartPropsSpec } from './types/Chart';
import { filterProperties } from './object';
import { useTheme } from 'styled-components';
import { LineChartPropsSpec } from './types/Line';

// https://github.com/webzard-io/sunmao-ui-echarts-lib
const ChartPropsSpec = Type.Object({
  ...LineChartPropsSpec,
});

const exampleProperties: Static<typeof ChartPropsSpec> = {
  xAxis: [
    {
      // name: '',
      type: 'category',
      data: ['Dimension 1', 'Dimension 2', 'Dimension 3'],
      // nameLocation: 'center',
      // offset: 0,
      position: 'bottom',
    },
  ],
  yAxis: [
    {
      // name: '',
      type: 'value',
      data: [],
      // nameLocation: 'center',
      // offset: 0,
      position: 'left',
    },
  ],
  series: [
    {
      name: 'Series 1',
      label: {
        show: false,
        position: 'top',
      },
      data: [1, 2, 10],
      symbol: 'circle',
      showSymbol: true,
      smooth: true,
      activeAreaStyle: true
    },
    {
      name: 'Series 2',
      label: {
        show: false,
        position: 'top',
      },
      data: [10, 20, 15],
      symbol: 'circle',
      showSymbol: true,
      smooth: true,
      activeAreaStyle: true
    },
  ],
  color: [],
};

export const ChartLine = implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'chart',
    displayName: 'Line Chart',
    exampleProperties,
    annotations: {
      category: COMPONENTS_CATEGORY.Chart,
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
    yAxis,
    xAxis,
    series,
    color,
    ...cProps
  } = getComponentProps(props);
  const { elementRef, customStyle, callbackMap } = props;
  const theme = useTheme();
  const [chart, SetChart] = useState<echarts.ECharts>();
  const adaptResize = useCallback(() => {
    if (chart) {
      chart.resize();
    }
  }, [chart]);

  const option = useMemo(() => {
    const filterOption = filterProperties(
      {
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

    return {
      grid: {
        top: "30",
        left: "50",
        right: "20",
        bottom: "80",
        containLabel: false,
      },
      // https://echarts.apache.org/en/option.html#dataZoom
      dataZoom: [
        {
          type: 'slider',
          show: true,
          start: 0,
          end: 100,
          xAxisIndex: [0],
        },
      ],
      tooltip: {
        trigger: "axis",
        triggerOn: 'mousemove',
        textStyle: {
          color: theme.colors.primary,
        },
        padding: 10,
        backgroundColor: theme.colors.contrast,
        extraCssText: "box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px;",
      },
      xAxis: filterOption.xAxis.map((item) => {
        return {
          // type: "category",
          show: true,
          boundaryGap: false,
          // data: xAxisData,
          axisLine: {
            onZero: false,
            show: true,
            lineStyle: {
              color: theme.colors.primary,
              opacity: 0,
              width: 3,
            },
          },
          axisLabel: {
            margin: 16,
          },
          axisTick: {
            show: false,
          },
          ...item
        };
      }),
      yAxis: filterOption.yAxis.map((item) => {
        return {
          show: true,
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#E7EAF3",
            },
          },
          axisLine: {
            onZero: false,
            show: true,
            lineStyle: {
              opacity: 0,
              width: 3,
            },
          },
          axisLabel: {
          },
          axisTick: {
            show: false,
          },
          ...item
        };
      }),
      series: filterOption.series.map((item, index) => {
        return {
          type: 'line',
          itemStyle: {
            borderWidth: 4,
          },

          lineStyle: {
            width: 1.5,
          },
          emphasis: {
            disabled: true,
          },
          ...item,
          areaStyle: item.activeAreaStyle ? {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: (filterOption.color || [])[index] || theme.chain.color || theme.colors.primary,
              },
              {
                offset: 1,
                color: '#ffffff'
              },
            ]),
          } : null,
        };
      }),
      color: filterOption.color ? filterOption.color : filterOption.series.map(() => theme.chain.color || theme.colors.primary)
    };

    // const uiOptions = getAreaChartOptions(theme);
    // Object.keys(uiOptions).forEach((key) => {
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   const uiOption = uiOptions[key];
    //   if (uiOption) {
    //     if(key === 'series' || key === 'xAxis' || key === 'yAxis') {
    //       filterOption[key].forEach((item, index) => {
    //         filterOption[key][index] = {
    //           ...uiOption[0],
    //           ...item,
    //         };
    //       });
    //     } else {
    //       filterOption[key as keyof typeof filterOption] = isArray(uiOption) ? [
    //         ...uiOption,
    //         ...(filterOption[key as keyof typeof filterOption] || [])
    //       ] : {
    //         ...uiOption,
    //         ...(filterOption[key as keyof typeof filterOption] || {})
    //       };
    //     }
    //   }
    // });

    // return filterOption;
  }, [yAxis, xAxis, series, color, theme]);

  useEffect(() => {
    if (!elementRef) return;
    const myChart = echarts.init(elementRef?.current, undefined, { renderer: 'svg' });

    myChart.clear();

    myChart.setOption({
      ...option,
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

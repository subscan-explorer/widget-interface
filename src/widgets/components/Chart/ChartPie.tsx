import { implementRuntimeComponent } from '@subscan/widget-runtime';
import { css } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from 'utils/widget-helper';
import { COMPONENTS_CATEGORY, VERSION } from 'config/constants';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './Init';
import * as echarts from 'echarts/core';
import { ElementResizeListener } from 'components';
import { filterProperties } from './object';
import { useTheme } from 'styled-components';
import { PieChartPropsSpec } from './types/Pie';

const ChartPropsSpec = Type.Object({
  ...PieChartPropsSpec,
});

const exampleProperties: Static<typeof ChartPropsSpec> = {
  series: {
    data: [
      { value: 30, name: 'Validator' },
      { value: 60, name: 'Nominator' },
    ],
  },
  color: ['#E90979', '#F081B9', '#d7d7d7'],
};

export const ChartPie = implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    ...FALLBACK_METADATA,
    name: 'chartpie',
    displayName: 'Pie Chart',
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
  const { series, color, ...cProps } = getComponentProps(props);
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
        series,
        color,
      },
      (option, key, path) => {
        const value = option[key];
        if (value !== undefined && (value as unknown as string) !== '') {
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
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: '#ffffff',
        borderColor: '#e7eaf3',
        borderWidth: 1,
        padding: [5, 20],
        textStyle: {
          color: theme.colors.primary,
        },
        formatter: `{b}`,
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: '50%',
        top: 'center',
        bottom: 20,
        textStyle: {
          color: theme.colors.primary,
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['65%', '85%'],
          center: ['25%', '50%'],
          avoidLabelOverlap: false,
          legendHoverLink: false,
          emphasis: {
            scale: false,
            label: {
              show: false,
            },
          },
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          ...filterOption.series,
        },
      ],
      color: filterOption.color,
    };
  }, [series, color, theme]);

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
        style={{ width: '100%', height: '156px' }}
        ref={elementRef}
        className={css(customStyle?.content)}
        onClick={callbackMap?.onClick}
        {...cProps}
      />
    </>
  );
});

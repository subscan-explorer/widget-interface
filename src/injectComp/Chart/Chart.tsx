import { implementRuntimeComponent } from '@sunmao-ui-fork/runtime';
import { css } from '@emotion/css';
import { Type, Static } from '@sinclair/typebox';
import { FALLBACK_METADATA, getComponentProps } from 'utils/sunmao-helper';
import { Category, VERSION } from 'config/constants';
import { useEffect } from 'react';
import './Init';
import * as echarts from 'echarts/core';
import { getAreaChartOptions } from './options';
import { useTheme } from 'styled-components';

const ButtonPropsSpec = Type.Object({
  data: Type.Array(Type.Array(Type.Any()), {
    title: 'Data',
    category: Category.Data,
    weight: 0,
    widget: 'core/v1/expression',
  }),
});

const exampleProperties: Static<typeof ButtonPropsSpec> = {
  data: [],
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
  const { ...cProps } = getComponentProps(props);
  const theme = useTheme();

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
  }, [data, elementRef, theme]);

  return (
    <div
      style={{ width: '100%', height: '400px' }}
      ref={elementRef}
      className={css(customStyle?.content)}
      onClick={callbackMap?.onClick}
      {...cProps}
    />
  );
});

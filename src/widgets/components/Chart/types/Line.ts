import { Type } from '@sinclair/typebox';
import { StringUnion } from 'utils/widget-helper';
import { BaseChartSpec, SeriesSpec } from './Chart';

export const LineSpecObject = {
  symbol: StringUnion(['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'], {
    title: 'Symbol',
  }),
  showSymbol: Type.Boolean({
    title: 'Show Symbol',
  }),
  smooth: Type.Boolean({
    title: 'Smooth',
  }),
  activeAreaStyle: Type.Boolean({
    title: 'Active Area Style',
  }),
};

export const LineConditions = [
  {
    key: 'type',
    value: 'line',
  },
];

export const LineChartPropsSpec = {
  ...BaseChartSpec,
  series: Type.Array(
    Type.Object({
      ...SeriesSpec,
      // line
      ...LineSpecObject,
    }),
    {
      title: 'Series',
      category: 'Series',
      widget: 'core/v1/array',
      widgetOptions: {
        displayedKeys: ['name'],
      },
    }
  ),
};

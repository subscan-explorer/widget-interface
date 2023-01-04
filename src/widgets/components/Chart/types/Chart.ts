import { Type } from '@sinclair/typebox';
import { StringUnion } from 'utils/widget-helper';

// https://echarts.apache.org/zh/option.html#title
export const TitleSpec = {
  text: Type.String({
    title: 'Text',
  }),
  left: Type.String({
    title: 'Left',
  }),
  right: Type.String({
    title: 'Right',
  }),
  top: Type.String({
    title: 'Top',
  }),
  bottom: Type.String({
    title: 'Bottom',
  }),
};

export const AxisSpec = {
  // name: Type.String({
  //   title: "Name",
  // }),
  // nameLocation: StringUnion(["end", "start", "center"], {
  //   title: "Name Location",
  // }),
  type: StringUnion(['value', 'category'], {
    title: 'Type',
  }),
  // offset: Type.Number({
  //   title: "Offset",
  // }),
  data: Type.Array(Type.String(), {
    title: 'Data',
  }),
};

export const BaseChartSpec = {
  xAxis: Type.Array(
    Type.Object({
      ...AxisSpec,
      position: StringUnion(['bottom', 'top'], {
        title: 'Position',
      }),
    }),
    {
      category: 'XAxis',
    }
  ),
  yAxis: Type.Array(
    Type.Object({
      ...AxisSpec,
      position: StringUnion(['left', 'right'], {
        title: 'Position',
      }),
    }),
    {
      category: 'YAxis',
    }
  ),
  color: Type.Array(Type.String(), {
    category: 'Color',
  }),
};

export const SeriesLabelSpec = {
  show: Type.Boolean(),
  position: StringUnion(
    [
      'top',
      'left',
      'right',
      'bottom',
      'inside',
      'insideLeft',
      'insideRight',
      'insideTop',
      'insideBottom',
      'insideTopLeft',
      'insideBottomLeft',
      'insideTopRight',
      'insideBottomRight',
    ],
    {
      title: 'Position',
    }
  ),
};

export const SeriesItemStyle = {
  color: Type.String({
    title: 'Color',
    widget: 'core/v1/color',
  }),
};

export const SeriesSpec = {
  name: Type.String({
    title: 'Name',
  }),
  label: Type.Object(SeriesLabelSpec, {
    title: 'Label',
  }),
  data: Type.Array(Type.Number(), {
    title: 'Data',
  }),
  // itemStyle: Type.Object(SeriesItemStyle, {
  //   title: "Line Style",
  // })
};

// type Optional<T extends Record<string, TSchema>> = {
//   [P in keyof T]: TOptional<T[P]>;
// };

// export const ChartPropsSpec = {
//   ...BaseChartSpec,
//   series: Type.Array(
//     Type.Object({
//       // type: StringUnion(["line", "bar"], {
//       //   title: "Type",
//       // }),
//       ...SeriesSpec,
//       // line
//       ...(Object.keys(LineSpecObject).reduce((result, key) => {
//         result[key] = Type.Optional({
//           ...LineSpecObject[key as keyof typeof LineSpecObject],
//           conditions: LineConditions,
//         });

//         return result;
//       }, {} as Record<string, any>) as Optional<typeof LineSpecObject>),
//       // bar
//       ...(Object.keys(BarSpecObject).reduce((result, key) => {
//         result[key] = Type.Optional({
//           ...BarSpecObject[key as keyof typeof BarSpecObject],
//           conditions: BarConditions,
//         });

//         return result;
//       }, {} as Record<string, any>) as Optional<typeof BarSpecObject>),
//     }),
//     {
//       title: "Series",
//       category: "Series",
//       widget: "core/v1/array",
//       widgetOptions: {
//         displayedKeys: ["name"],
//       },
//     }
//   ),
// };

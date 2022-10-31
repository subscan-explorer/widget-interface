import { Type } from "@sinclair/typebox";

export const BarSpecObject = {
  stack: Type.String({
    title: 'Stack',
  }),
  barWidth: Type.String({
    title: 'Bar Width',
  }),
  barGap: Type.String({
    title: 'Bar Gap',
  }),
  barCategoryGap: Type.String({
    title: 'Bar Category Gap',
  }),
  showBackground: Type.Boolean({
    title: 'Show Background',
  }),
};

export const BarConditions = [
  {
    key: 'type',
    value: 'bar',
  },
];

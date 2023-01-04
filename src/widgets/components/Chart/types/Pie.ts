import { Type } from "@sinclair/typebox";
import { SeriesSpec } from "./Chart";

export const PieSpecObject = {
  data: Type.Array(
    Type.Object({
      value: Type.Number({ title: "Value" }),
      name: Type.String({ title: "Name" }),
    }),
    { title: "Data" }
  ),
};

export const PieConditions = [
  {
    key: "type",
    value: "pie",
  },
];

export const PieChartPropsSpec = {
  color: Type.Array(Type.String(), {
    category: 'Color',
  }),
  series: Type.Object({
    // pie
    ...PieSpecObject,
  }),
};

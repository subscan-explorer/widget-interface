import { Type } from "@sinclair/typebox";
import { StringUnion } from "utils/widget-helper";

export const LineSpecObject = {
  symbol: StringUnion(
    ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'],
    {
      title: 'Symbol',
    }
  ),
  showSymbol: Type.Boolean({
    title: 'Show Symbol',
  }),
  smooth: Type.Boolean({
    title: 'Smooth',
  }),
};

export const LineConditions = [
  {
    key: 'type',
    value: 'line',
  },
];

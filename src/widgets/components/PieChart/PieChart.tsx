import { useCallback, useEffect, useMemo, useState } from "react";
import { Type, Static } from "@sinclair/typebox";
import { css } from "@emotion/css";
import { implementRuntimeComponent } from "@subscan/widget-runtime";
import { ElementResizeListener } from "components";
import { getComponentProps } from "utils/widget-helper";
import { COMPONENTS_CATEGORY, VERSION } from "config/constants";

import * as echarts from "echarts/core";
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  GraphicComponent,
  GraphicComponentOption,
} from "echarts/components";
import { PieChart as EChartsPieChart, PieSeriesOption } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TooltipComponent, LegendComponent, EChartsPieChart, CanvasRenderer, LabelLayout, GraphicComponent]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | LegendComponentOption | PieSeriesOption | GraphicComponentOption
>;

const ChartPropsSpec = Type.Object({
  textColor: Type.String({ title: "Text Color" }),
  colorMap: Type.Array(Type.String(), { title: "Color Map" }),
  seriesData: Type.Array(
    Type.Object({
      value: Type.Union([Type.String(), Type.Number()], { title: "Value" }),
      name: Type.String({ title: "Name" }),
    }),
    { title: "Data" }
  ),
});

const exampleProperties: Static<typeof ChartPropsSpec> = {
  textColor: "#000",
  colorMap: ["#E90979", "#F081B9", "#d7d7d7"], // Polkadot network on Subscan
  // colorMap: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"], // echarts default
  seriesData: [
    { value: 735, name: "Validator Stake" },
    { value: 1048, name: "Nominator Stake" },
  ],
};

export const PieChart = implementRuntimeComponent({
  version: VERSION.Core,
  metadata: {
    name: "piechart",
    displayName: "Pie Chart",
    description: "Pie Chart",
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
    styleSlots: ["content"],
    events: ["onClick"],
  },
})((props) => {
  const { textColor, colorMap, seriesData, ...cProps } = getComponentProps(props);
  const { elementRef, customStyle, callbackMap } = props;

  const [chart, setChart] = useState<echarts.ECharts>();

  const adaptResize = useCallback(() => {
    if (chart) {
      chart.resize();
    }
  }, [chart]);

  const option = useMemo(() => {
    return {
      tooltip: {
        show: true,
        trigger: "item",
        backgroundColor: "#ffffff",
        borderColor: "#e7eaf3",
        borderWidth: 1,
        padding: [5, 20],
        textStyle: {
          color: textColor,
        },
        formatter: `{b}`,
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        left: "50%",
        top: "center",
        bottom: 20,
      },
      series: [
        {
          type: "pie",
          radius: ["65%", "85%"],
          center: ["25%", "50%"],
          avoidLabelOverlap: false,
          legendHoverLink: false,
          color: colorMap,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            scale: false,
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: seriesData,
        },
      ],
    } as EChartsOption;
  }, [textColor, colorMap, seriesData]);

  useEffect(() => {
    if (elementRef?.current) {
      const instance = echarts.init(elementRef.current, undefined, { renderer: "svg" });
      instance.setOption({
        ...option,
      });

      setChart(instance);
    }
  }, [elementRef, option]);

  return (
    <>
      <ElementResizeListener onResize={adaptResize} />
      <div
        style={{ width: "100%", height: "156px" }}
        ref={elementRef}
        className={css(customStyle?.content)}
        onClick={callbackMap?.onClick}
        {...cProps}
      />
    </>
  );
});

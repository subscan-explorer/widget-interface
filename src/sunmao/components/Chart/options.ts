import { DefaultTheme } from "styled-components";
import * as echarts from 'echarts/core';

export const getAreaChartOptions = (
  theme: DefaultTheme,
  xAxisData: any[],
  seriesData: any[]
) => {
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
        start: 80,
        end: 100,
        xAxisIndex: [0],
      },
    ],
    tooltip: {
      trigger: "axis",
      textStyle: {
        color: theme.colors.primary,
      },
      padding: 10,
      backgroundColor: theme.colors.contrast,
      extraCssText: "box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px;",
    },
    xAxis: [
      {
        type: "category",
        show: true,
        boundaryGap: false,
        data: xAxisData,
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
          // formatter(value, index) {
          //   const date = new Date(value);
          //   if (index === 0) {
          //     return '';
          //   }
          //   if (date.getYear() === new Date().getYear()) {
          //     return moment(value).format('MM-DD');
          //   }
          //   return value;
          // },
          // color: getChartTextColor(),
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
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
      },
    ],
    series: [
      {
        type: "line",
        showSymbol: false,
        name: "value",
        itemStyle: {
          color:  theme.chain.color,
          borderWidth: 4,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: theme.chain.color || theme.colors.primary,
            },
            {
              offset: 1,
              color: '#ffffff'
            },
          ]),
        },
        lineStyle: {
          width: 1.5,
          color: theme.chain.color || theme.colors.primary,
        },
        emphasis: {
          disabled: true,
        },
        data: seriesData,
      },
    ],
  };
};

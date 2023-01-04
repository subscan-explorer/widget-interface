import React from 'react';
import { Application } from '@subscan/widget-core';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preview from 'preview';
import { initChainStyles } from 'config/stylebook';

const LineAppOptions: Application = {
  "version": "widget/v1",
  "kind": "Application",
  "metadata": {
    "name": "subscan widget"
  },
  "spec": {
    "components": [
      {
        "id": "chart0",
        "type": "core/v1/chart",
        "properties": {
          "xAxis": [
            {
              "type": "category",
              "data": [
                "Dimension 1",
                "Dimension 2",
                "Dimension 3"
              ],
              "position": "bottom"
            }
          ],
          "yAxis": [
            {
              "type": "value",
              "data": [],
              "position": "left"
            }
          ],
          "series": [
            {
              "name": "Series 1",
              "label": {
                "show": false,
                "position": "top"
              },
              "data": [
                1,
                2,
                10
              ],
              "symbol": "circle",
              "showSymbol": true,
              "smooth": true,
              "activeAreaStyle": true
            },
            {
              "name": "Series 2",
              "label": {
                "show": false,
                "position": "top"
              },
              "data": [
                10,
                20,
                15
              ],
              "symbol": "circle",
              "showSymbol": true,
              "smooth": true,
              "activeAreaStyle": true
            }
          ],
          "color": []
        },
        "traits": []
      }
    ]
  }
};


const PieAppOptions: Application = {
  "version": "widget/v1",
  "kind": "Application",
  "metadata": {
    "name": "subscan widget"
  },
  "spec": {
    "components": [
      {
        "id": "chartpie1",
        "type": "core/v1/chartpie",
        "properties": {
          "series": {
            "data": [
              {
                "value": 30,
                "name": "Validator"
              },
              {
                "value": 60,
                "name": "Nominator"
              }
            ]
          },
          "color": [
            "#E90979",
            "#F081B9",
            "#d7d7d7"
          ]
        },
        "traits": []
      }
    ]
  }
};

export default {
  title: 'Subscan Lib/Chart',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const LineChart = Template.bind({});

LineChart.args = {
  options: LineAppOptions,
  ...initChainStyles
};


export const PieChart = Template.bind({});

PieChart.args = {
  options: PieAppOptions,
  ...initChainStyles
};

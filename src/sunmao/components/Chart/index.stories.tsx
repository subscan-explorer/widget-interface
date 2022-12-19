import React from 'react';
import { Application } from '@subscan/widget-core';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preview from 'preview';

const AppOptions: Application = {
  "version": "widget/v1",
  "kind": "Application",
  "metadata": {
    "name": "some App"
  },
  "spec": {
    "components": [
      {
        "id": "chart3",
        "type": "core/v1/chart",
        "properties": {
          "title": {
            "text": "Chart",
            "left": "",
            "right": "",
            "top": "",
            "bottom": ""
          },
          "xAxis": [
            {
              "name": "",
              "type": "category",
              "data": [
                "Dimension 1",
                "Dimension 2"
              ],
              "nameLocation": "center",
              "offset": 0,
              "position": "bottom"
            }
          ],
          "yAxis": [
            {
              "name": "",
              "type": "value",
              "data": [],
              "nameLocation": "center",
              "offset": 0,
              "position": "left"
            }
          ],
          "series": [
            {
              "type": "line",
              "name": "Series 1",
              "label": {
                "show": false,
                "position": "top"
              },
              "data": [
                1,
                2
              ],
              "symbol": "circle",
              "showSymbol": true,
              "smooth": true
            },
            {
              "type": "bar",
              "name": "Series 2",
              "label": {
                "show": false,
                "position": "top"
              },
              "data": [
                4,
                2
              ],
              "barWidth": "",
              "barGap": "",
              "barCategoryGap": "",
              "stack": "",
              "showBackground": false
            }
          ],
          "color": []
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

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
};

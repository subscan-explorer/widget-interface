import React from 'react';
import { Application } from '@subscan/widget-core';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preview from 'preview';
import { initChainStyles } from 'config/stylebook';

const AppOptions: Application = {
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
              "data": [
                "12341234",
                "2345"
              ],
              "position": "left",
              "type": "value"
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
              "areaStyle": true
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
              "areaStyle": true
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
  ...initChainStyles
};

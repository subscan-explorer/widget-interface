import React from 'react';
import { Application } from '@sunmao-ui-fork/core';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preview from 'preview';

const AppOptions: Application = {
  "version": "sunmao/v1",
  "kind": "Application",
  "metadata": {
    "name": "some App"
  },
  "spec": {
    "components": [
      {
        "id": "cardsummary14",
        "type": "core/v1/cardsummary",
        "properties": {
          "columns": [
            {
              "title": "Finalized Block",
              "value": "145,431",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            }
          ]
        },
        "traits": []
      }
    ]
  }
};

export default {
  title: 'Subscan Lib/CardSummary',
  component: Preview,
  layout: 'fullscreen',
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
};

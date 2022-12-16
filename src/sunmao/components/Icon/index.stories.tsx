import React from 'react';
import { Application } from '@subscan/widget-core';
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
        "id": "api0",
        "type": "core/v1/dummy",
        "traits": [
          {
            "type": "core/v1/fetch",
            "properties": {
              "url": "",
              "body": {},
              "lazy": false,
              "method": "get",
              "headers": {},
              "onError": [],
              "bodyType": "json",
              "disabled": false,
              "onComplete": []
            }
          }
        ],
        "properties": {}
      },
      {
        "id": "icon2",
        "type": "core/v1/icon",
        "properties": {
          "name": "barchart",
          "spin": false
        },
        "traits": []
      },
      {
        "id": "icon3",
        "type": "core/v1/icon",
        "properties": {
          "name": "finalized",
          "spin": false
        },
        "traits": []
      }
    ]
  }
};

export default {
  title: 'Subscan Lib/Icon',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
};

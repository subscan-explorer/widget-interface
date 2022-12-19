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
        "id": "pagination0",
        "type": "core/v1/pagination",
        "properties": {
          "pageSize": 10,
          "total": 300,
          "defaultCurrent": 3,
          "disabled": false,
          "hideOnSinglePage": true,
          "size": "default",
          "sizeCanChange": false,
          "simple": false,
          "showJumper": false,
          "showTotal": false,
          "updateWhenDefaultValueChanges": false
        },
        "traits": []
      }
    ]
  }
};

export default {
  title: 'Subscan Lib/Pagination',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
};

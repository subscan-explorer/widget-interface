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
        "id": "title0",
        "type": "core/v1/title",
        "properties": {
          "text": "Subscan Title"
        },
        "traits": []
      }
    ]
  }
};

export default {
  title: 'Subscan Lib/Title',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
};

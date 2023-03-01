import React from 'react';
import { Application } from '@subscan/widget-core';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preview from 'preview';
import { initChainStyles } from 'config/stylebook';

const AppOptions: Application = {
  version: 'widget/v1',
  kind: 'Application',
  metadata: {
    name: 'subscan widget',
  },
  spec: {
    components: [
      {
        id: 'title0',
        type: 'core/v1/title',
        properties: {
          text: 'Subscan Title',
        },
        traits: [],
      },
    ],
  },
};

export default {
  title: 'Subscan Lib/Title',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = args => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
  ...initChainStyles,
};

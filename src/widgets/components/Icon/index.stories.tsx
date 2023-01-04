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
        id: 'icon2',
        type: 'core/v1/icon',
        properties: {
          name: 'barchart',
          spin: false,
        },
        traits: [],
      },
      {
        id: 'icon3',
        type: 'core/v1/icon',
        properties: {
          name: 'finalized',
          spin: false,
        },
        traits: [],
      },
      {
        id: 'icon4',
        type: 'core/v1/icon',
        properties: {
          name: 'note',
          spin: false,
        },
        traits: [],
      },
      {
        id: 'icon5',
        type: 'core/v1/icon',
        properties: {
          name: 'person',
          spin: false,
        },
        traits: [],
      },
      {
        id: 'icon6',
        type: 'core/v1/icon',
        properties: {
          name: 'points',
          spin: false,
        },
        traits: [],
      },
      {
        id: 'icon7',
        type: 'core/v1/icon',
        properties: {
          name: 'rate',
          spin: false,
        },
        traits: [],
      },
      {
        id: 'icon8',
        type: 'core/v1/icon',
        properties: {
          name: 'stake',
          spin: false,
        },
        traits: [],
      },
      {
        id: 'icon9',
        type: 'core/v1/icon',
        properties: {
          name: 'swap',
          spin: false,
        },
        traits: [],
      },
    ],
  },
};

export default {
  title: 'Subscan Lib/Icon',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = args => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
  ...initChainStyles,
};

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
        id: 'timeline0',
        type: 'core/v1/timeline',
        properties: {
          data: [
            {
              from: '2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f',
              to: '2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N',
              extrinsic_index: '10426613-1',
            },
            {
              from: '2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f',
              to: '2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N',
              extrinsic_index: '10426613-2',
            },
            {
              from: '2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f',
              to: '2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N',
              extrinsic_index: '10426613-3',
            },
          ],
          columns: [
            {
              title: 'From',
              type: 'text',
              width: '',
              dataKey: 'from',
              prePath: '/account',
              ellipsis: true,
            },
            {
              title: 'To',
              type: 'text',
              width: '',
              dataKey: 'to',
              prePath: '/account',
              ellipsis: true,
            },
            {
              title: 'Extrinsic Index',
              type: 'link',
              width: '',
              dataKey: 'extrinsic_index',
              prePath: '/extrinsic',
            },
          ],
        },
        traits: [],
      },
    ],
  },
};

export default {
  title: 'Subscan Lib/Timeline',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = args => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
  ...initChainStyles,
};

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
        id: 'api0',
        type: 'core/v1/dummy',
        properties: {},
        traits: [
          {
            type: 'core/v1/fetch',
            properties: {
              url: 'https://polkadot.webapi.subscan.io/api/v2/scan/transfers?',
              body: "{{{row:10,page:pagination2.currentPage ,direction:'all',include_total:false}}}",
              lazy: true,
              method: 'post',
              headers: {
                'content-type': 'application/json',
              },
              onError: [],
              bodyType: 'json',
              disabled: false,
              onComplete: [],
            },
          },
        ],
      },
      {
        id: 'title1',
        type: 'core/v1/title',
        properties: {
          text: '{{JSON.stringify(api0.fetch.data)}}',
        },
        traits: [
          {
            type: 'core/v1/event',
            properties: {
              handlers: [
                {
                  type: '$onMount',
                  componentId: 'api0',
                  method: {
                    name: 'triggerFetch',
                    parameters: {},
                  },
                  wait: {
                    type: 'debounce',
                    time: 0,
                  },
                  disabled: false,
                },
              ],
            },
          },
        ],
      },
      {
        id: 'pagination2',
        type: 'core/v1/pagination',
        properties: {
          pageSize: 10,
          total: 300,
          defaultCurrent: 3,
          disabled: false,
          hideOnSinglePage: true,
          size: 'default',
          sizeCanChange: false,
          simple: false,
          showJumper: false,
          showTotal: false,
          updateWhenDefaultValueChanges: false,
        },
        traits: [
          {
            type: 'core/v1/event',
            properties: {
              handlers: [
                {
                  type: 'onChange',
                  componentId: 'api0',
                  method: {
                    name: 'triggerFetch',
                    parameters: {},
                  },
                  wait: {
                    type: 'debounce',
                    time: 0,
                  },
                  disabled: false,
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default {
  title: 'Subscan Lib/DataSource API',
  component: Preview,
  layout: 'fullscreen',
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = args => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
  ...initChainStyles,
};

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
        id: 'title1',
        type: 'core/v1/title',
        properties: {
          text: '{{JSON.stringify(graphQL0.data)}}',
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
        id: 'graphQL0',
        type: 'core/v1/dummy',
        properties: {},
        traits: [
          {
            type: 'core/v1/graphQL',
            properties: {
              url: 'https://api.subquery.network/sq/itering/multisig-polkadot',
              query:
                'query {\n    approveRecords (first: 5) {\n        nodes {\n            id\n            multisigRecordId\n            account\n            approveTimepoint\n        }\n    }\n    multisigRecords (first: 5) {\n        nodes {\n            id\n            createExtrinsicIdx\n            module\n            method\n        }\n    }\n}',
              variables: '{{{}}}',
              key: 'value',
            },
          },
        ],
      },
    ],
  },
};

export default {
  title: 'Subscan Lib/DataSource GraphQL',
  component: Preview,
  layout: 'fullscreen',
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = args => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
  ...initChainStyles,
};

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
        "id": "table5",
        "type": "core/v1/table",
        "properties": {
          "data": [
            {
              "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f",
              "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
              "extrinsic_index": "10426613-1",
              "success": false,
              "hash": "0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8",
              "block_num": 10426613,
              "block_timestamp": 1664176458,
              "module": "balances",
              "amount": "86.13245",
              "amount_v2": "86132450000",
              "fee": "114600000",
              "nonce": 7,
              "asset_symbol": "",
              "asset_type": "",
              "from_account_display": {
                "address": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f"
              },
              "to_account_display": {
                "address": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
                "display": "0x245b4775082c144c22a4874b0fba8c70c510c5ae"
              },
              "event_idx": 1
            },
            {
              "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f",
              "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
              "extrinsic_index": "10426613-1",
              "success": false,
              "hash": "0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8",
              "block_num": 10426613,
              "block_timestamp": 1664176458,
              "module": "balances",
              "amount": "86.13245",
              "amount_v2": "86132450000",
              "fee": "114600000",
              "nonce": 7,
              "asset_symbol": "",
              "asset_type": "",
              "from_account_display": {
                "address": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f"
              },
              "to_account_display": {
                "address": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
                "display": "0x245b4775082c144c22a4874b0fba8c70c510c5ae"
              },
              "event_idx": 1
            }
          ],
          "columns": [
            {
              "title": "Extrinsic ID",
              "type": "link",
              "width": "",
              "dataKey": "extrinsic_index",
              "prePath": "/extrinsic",
              "ellipsis": false,
              "sort": "disabled"
            },
            {
              "title": "Block",
              "type": "link",
              "width": "",
              "dataKey": "block_num",
              "prePath": "/block",
              "ellipsis": false,
              "sort": "disabled"
            },
            {
              "title": "Time",
              "type": "time",
              "width": "",
              "dataKey": "block_timestamp",
              "sort": "disabled"
            },
            {
              "title": "From",
              "type": "link",
              "width": "",
              "dataKey": "from",
              "prePath": "/account",
              "sort": "disabled"
            }
          ]
        },
        "traits": []
      }
    ]
  }
};

export default {
  title: 'Subscan Lib/Table',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
  ...initChainStyles
};

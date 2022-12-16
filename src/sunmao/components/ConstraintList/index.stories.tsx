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
        "id": "constraintlist0",
        "type": "core/v1/constraintlist",
        "properties": {
          "data": {
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
          "columns": [
            {
              "title": "Extrinsic ID",
              "type": "link",
              "width": "",
              "dataKey": "extrinsic_index",
              "prePath": "/extrinsic",
              "ellipsis": false
            },
            {
              "title": "Block",
              "type": "link",
              "width": "",
              "dataKey": "block_num",
              "prePath": "/block",
              "ellipsis": false
            },
            {
              "title": "Time",
              "type": "time",
              "width": "",
              "dataKey": "block_timestamp"
            },
            {
              "title": "From",
              "type": "link",
              "width": "",
              "dataKey": "from",
              "prePath": "/account"
            },
            {
              "title": "To",
              "type": "link",
              "width": "",
              "dataKey": "to",
              "prePath": "/account"
            },
            {
              "title": "Value",
              "type": "balance",
              "width": "",
              "dataKey": "amount_v2",
              "decimals": 9,
              "symbol": "RING"
            },
            {
              "title": "Result",
              "type": "transactionStatus",
              "width": "",
              "dataKey": "success",
              "transformer": "return value == 'true' ? 'normal' : 'error'"
            },
            {
              "title": "Hash",
              "type": "link",
              "width": "",
              "dataKey": "hash",
              "prePath": "/extrinsic",
              "ellipsis": true
            }
          ]
        },
        "traits": []
      }
    ]
  }
};

export default {
  title: 'Subscan Lib/ConstraintList',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args} />;

export const Index = Template.bind({});

Index.args = {
  options: AppOptions,
};

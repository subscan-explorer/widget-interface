import { type Application } from '@sunmao-ui/core';

export const enum Category {
  Data = 'Data',
  Columns = 'Columns',
  Basic = 'Basic',
  Behavior = 'Behavior',
  Layout = 'Layout',
  Style = 'Style',
}

export const enum VERSION {
  Core = 'core/v1'
}

export const enum CATEGORY {
  Display = 'display'
}

export const DEFAULT_APP: Application = {
  version: 'template/v1',
  kind: 'Application',
  metadata: {
    name: 'Polkadot',
  },
  spec: {
    "components": [
      {
        "id": "table0",
        "type": "core/v1/table",
        "properties": {
          "data": "{{api0.fetch.data.data.transfers}}",
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
              "symbol": 'RING',
            },
            {
              "title": "Result",
              "type": "transactionStatus",
              "width": "",
              "dataKey": "success",
              "transformer": "return value == 'true' ? 'normal' : 'error'",
            },
            {
              "title": "Hash",
              "type": "link",
              "width": "",
              "dataKey": "hash",
              "prePath": "/extrinsic"
            }
          ]
        },
        "traits": []
      },
      {
        "id": "api0",
        "type": "core/v1/dummy",
        "properties": {},
        "traits": [
          {
            "type": "core/v1/fetch",
            "properties": {
              "url": "https://darwinia.webapi.subscan.io/api/v2/scan/transfers?",
              "method": "post",
              "lazy": false,
              "disabled": false,
              "headers": {
                "content-type": "application/json"
              },
              "body": "{{{\"row\":25,\"page\":0,\"direction\":\"all\",\"include_total\":false}}}",
              "bodyType": "json",
              "onComplete": [
                {
                  "componentId": "",
                  "method": {
                    "name": "",
                    "parameters": {}
                  },
                  "wait": {
                    "type": "debounce",
                    "time": 0
                  },
                  "disabled": false
                }
              ],
              "onError": [
                {
                  "componentId": "",
                  "method": {
                    "name": "",
                    "parameters": {}
                  },
                  "wait": {
                    "type": "debounce",
                    "time": 0
                  },
                  "disabled": false
                }
              ]
            }
          }
        ]
      }
    ]
  },
};
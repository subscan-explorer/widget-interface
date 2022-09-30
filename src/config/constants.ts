import { type Application } from '@sunmao-ui-fork/core';

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
  "version": "sunmao/v1",
  "kind": "Application",
  "metadata": {
    "name": "some App"
  },
  "spec": {
    "components": [
      // {
      //   "id": "table0",
      //   "type": "core/v1/table",
      //   "properties": {
      //     "data": "{{api0.fetch.data.data.transfers}}",
      //     "columns": [
            // {
            //   "title": "Extrinsic ID",
            //   "type": "link",
            //   "width": "",
            //   "dataKey": "extrinsic_index",
            //   "prePath": "/extrinsic",
            //   "ellipsis": false,
            //   "sort": "disabled"
            // },
            // {
            //   "title": "Block",
            //   "type": "link",
            //   "width": "",
            //   "dataKey": "block_num",
            //   "prePath": "/block",
            //   "ellipsis": false
            // },
            // {
            //   "title": "Time",
            //   "type": "time",
            //   "width": "",
            //   "dataKey": "block_timestamp"
            // },
            // {
            //   "title": "From",
            //   "type": "link",
            //   "width": "",
            //   "dataKey": "from",
            //   "prePath": "/account"
            // },
            // {
            //   "title": "To",
            //   "type": "link",
            //   "width": "",
            //   "dataKey": "to",
            //   "prePath": "/account"
            // },
            // {
            //   "title": "Value",
            //   "type": "balance",
            //   "width": "",
            //   "dataKey": "amount_v2",
            //   "decimals": 9,
            //   "symbol": "RING"
            // },
            // {
            //   "title": "Result",
            //   "type": "transactionStatus",
            //   "width": "",
            //   "dataKey": "success",
            //   "transformer": "return value == 'true' ? 'normal' : 'error'",
            //   "sort": "disabled"
            // },
            // {
            //   "title": "Hash",
            //   "type": "link",
            //   "width": "",
            //   "dataKey": "hash",
            //   "prePath": "/extrinsic",
            //   "ellipsis": true,
            //   "sort": "disabled"
            // }
      //     ]
      //   },
      //   "traits": []
      // },
      // {
      //   "id": "api0",
      //   "type": "core/v1/dummy",
      //   "properties": {},
      //   "traits": [
      //     {
      //       "type": "core/v1/fetch",
      //       "properties": {
      //         "url": "https://darwinia.webapi.subscan.io/api/v2/scan/transfers?",
      //         "method": "post",
      //         "lazy": false,
      //         "disabled": false,
      //         "headers": {
      //           "content-type": "application/json"
      //         },
      //         "body": "{{{\"row\":25,\"page\":pagination2.currentPage - 1,\"direction\":\"all\",\"include_total\":false}}}",
      //         "bodyType": "json",
      //         "onComplete": [
      //           {
      //             "componentId": "",
      //             "method": {
      //               "name": "",
      //               "parameters": {}
      //             },
      //             "wait": {
      //               "type": "debounce",
      //               "time": 0
      //             },
      //             "disabled": false
      //           }
      //         ],
      //         "onError": [
      //           {
      //             "componentId": "",
      //             "method": {
      //               "name": "",
      //               "parameters": {}
      //             },
      //             "wait": {
      //               "type": "debounce",
      //               "time": 0
      //             },
      //             "disabled": false
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // },
      // {
      //   "id": "pagination2",
      //   "type": "core/v1/pagination",
      //   "properties": {
      //     "pageSize": 25,
      //     "total": "{{(Math.ceil(api0?.fetch?.data?.data.count) > 10000 ? 10000 : Math.ceil(api0?.fetch?.data?.data.count)) || 1}}",
      //     "defaultCurrent": 1,
      //     "disabled": false,
      //     "hideOnSinglePage": false,
      //     "size": "default",
      //     "sizeCanChange": false,
      //     "simple": false,
      //     "showJumper": false,
      //     "showTotal": false,
      //     "updateWhenDefaultValueChanges": true
      //   },
      //   "traits": [
      //     {
      //       "type": "core/v1/event",
      //       "properties": {
      //         "handlers": []
      //       }
      //     },
      //     {
      //       "type": "core/v1/style",
      //       "properties": {
      //         "styles": [
      //           {
      //             "styleSlot": "content",
      //             "style": "",
      //             "cssProperties": {
      //               "marginTop": "20px"
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // },
      {
        "id": "title2",
        "type": "core/v1/title",
        "properties": {
          "text": "Subscan Title"
        },
        "traits": []
      },
      {
        "id": "icon3",
        "type": "core/v1/icon",
        "properties": {
          "name": "barchart",
          "spin": false
        },
        "traits": [
          {
            "type": "core/v1/slot",
            "properties": {
              "container": {
                "id": "title2",
                "slot": "prefix"
              },
              "ifCondition": true
            }
          }
        ]
      },
      {
        "id": "cardsummary2",
        "type": "core/v1/cardsummary",
        "properties": {
          "name": "barchart",
          "spin": false,
          "columns": [
            {
              "title": "Finalized Block",
              "value": "145,431",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            },
            {
              "title": "Signed Extrinsics",
              "value": "54,541,324",
              "icon": "barchart"
            }
          ]
        },
        "traits": []
      },
      {
        "id": "constraintlist3",
        "type": "core/v1/constraintlist",
        "properties": {
          "data": "{{{\n        \"block_timestamp\": 1664508078,\n        \"block_num\": 10481467,\n        \"extrinsic_index\": \"10481467-1\",\n        \"call_module_function\": \"transfer_keep_alive\",\n        \"call_module\": \"balances\",\n        \"account_id\": \"2tFM9MAB2Mv1Kfy59vPwpVf6YyRyceCZybfAjfcnbLCer7N1\",\n        \"signature\": \"0x20e3af8c47489dcd4b28cb6d76881aa515d41b26f8bbb571853ef1f0a70b62520b523544a29410d2e3fca50bd0b8a28d8737ad74bcb8e1daf414e43d89d63b84\",\n        \"nonce\": 5887,\n        \"extrinsic_hash\": \"0x9d8b7bc9d3479c9f1e0099e3b288a90d8caf906bf60abdc035791684c0f09e87\",\n        \"success\": true,\"transfer\": {\n            \"from\": \"2tFM9MAB2Mv1Kfy59vPwpVf6YyRyceCZybfAjfcnbLCer7N1\",\n            \"to\": \"2qkk5ZzztYpEyyPFgciphiqk294HFobKTPP43vAkHjePhm5y\",\n            \"module\": \"balances\",\n            \"amount\": \"100\",\n            \"hash\": \"0x9d8b7bc9d3479c9f1e0099e3b288a90d8caf906bf60abdc035791684c0f09e87\",\n            \"success\": true,\n            \"asset_symbol\": \"\",\n            \"to_account_display\": {\n                \"address\": \"2qkk5ZzztYpEyyPFgciphiqk294HFobKTPP43vAkHjePhm5y\"\n            }\n        },}}}",
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
              "type": "text",
              "width": "",
              "dataKey": "transfer",
              "prePath": "/account",
              "transformer": "return value.from",
              "ellipsis": false
            },
            {
              "title": "Extrinsic Hash",
              "type": "text",
              "width": "",
              "dataKey": "extrinsic_hash",
              "prePath": "",
              "ellipsis": false
            },
            {
              "title": "Module",
              "width": "",
              "dataKey": "call_module",
              "sort": "disabled",
              "type": "tag",
              "transformer": "",
              "prePath": "",
              "ellipsis": false,
              "decimals": 0,
              "symbol": ""
            },
            {
              "title": "Call",
              "width": "",
              "dataKey": "call_module_function",
              "type": "tag",
              "transformer": "",
              "prePath": "",
              "ellipsis": false,
              "decimals": 0,
              "symbol": "",
              "tagstyle": "secondary"
            },
            {
              "title": "Value",
              "width": "",
              "dataKey": "transfer",
              "type": "balance",
              "transformer": "return value.amount",
              "prePath": "",
              "ellipsis": false,
              "decimals": 0,
              "symbol": "DOT"
            }
          ]
        },
        "traits": []
      }
    ]
  }
};
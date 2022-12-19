import { type Application } from '@subscan/widget-core';

export const enum PRESET_PROPERTY_CATEGORY {
  Data = 'Data',
  Columns = 'Columns',
  Basic = 'Basic',
  Behavior = 'Behavior',
  Layout = 'Layout',
  Style = 'Style',
  Display = 'Display'
}

export const enum COMPONENTS_CATEGORY {
  General = 'General',
  Display = 'Display'
}

export const enum VERSION {
  Core = 'core/v1'
}


export const DEFAULT_APP_TEMPLATE = {
  "kind": "Application",
  "version": "widget/v1",
  "metadata": { name: 'subscan widget', description: 'subscan widget' },
  "spec": { "components": [] }
};

export const DEFAULT_APP: Application = {
  "version": "widget/v1",
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
        "id": "chart8",
        "type": "core/v1/chart",
        "properties": {
          "data": "{{[[\"2000-06-05\", 116], [\"2000-06-06\", 129], [\"2000-06-07\", 135], [\"2000-06-08\", 86], [\"2000-06-09\", 73], [\"2000-06-10\", 85], [\"2000-06-11\", 73], [\"2000-06-12\", 68], [\"2000-06-13\", 92], [\"2000-06-14\", 130], [\"2000-06-15\", 245], [\"2000-06-16\", 139], [\"2000-06-17\", 115], [\"2000-06-18\", 111], [\"2000-06-19\", 309], [\"2000-06-20\", 206], [\"2000-06-21\", 137], [\"2000-06-22\", 128], [\"2000-06-23\", 85], [\"2000-06-24\", 94], [\"2000-06-25\", 71], [\"2000-06-26\", 106], [\"2000-06-27\", 84], [\"2000-06-28\", 93], [\"2000-06-29\", 85], [\"2000-06-30\", 73], [\"2000-07-01\", 83], [\"2000-07-02\", 125], [\"2000-07-03\", 107], [\"2000-07-04\", 82], [\"2000-07-05\", 44], [\"2000-07-06\", 72], [\"2000-07-07\", 106], [\"2000-07-08\", 107], [\"2000-07-09\", 66], [\"2000-07-10\", 91], [\"2000-07-11\", 92], [\"2000-07-12\", 113], [\"2000-07-13\", 107], [\"2000-07-14\", 131], [\"2000-07-15\", 111], [\"2000-07-16\", 64], [\"2000-07-17\", 69], [\"2000-07-18\", 88], [\"2000-07-19\", 77], [\"2000-07-20\", 83], [\"2000-07-21\", 111], [\"2000-07-22\", 57], [\"2000-07-23\", 55], [\"2000-07-24\", 60]]}}"
        },
        "traits": []
      },
      // {
      //   "id": "timeline7",
      //   "type": "core/v1/timeline",
      //   "properties": {
      //     "data": [
      //       {
      //         "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f",
      //         "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
      //         "extrinsic_index": "10426613-1"
      //       },
      //       {
      //         "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f",
      //         "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
      //         "extrinsic_index": "10426613-2"
      //       },
      //       {
      //         "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f",
      //         "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
      //         "extrinsic_index": "10426613-3"
      //       }
      //     ],
      //     "columns": [
      //       {
      //         "title": "From",
      //         "type": "text",
      //         "width": "",
      //         "dataKey": "from",
      //         "prePath": "/account",
      //         "ellipsis": true
      //       },
      //       {
      //         "title": "To",
      //         "type": "text",
      //         "width": "",
      //         "dataKey": "to",
      //         "prePath": "/account",
      //         "ellipsis": true
      //       },
      //       {
      //         "title": "Extrinsic Index",
      //         "type": "link",
      //         "width": "",
      //         "dataKey": "extrinsic_index",
      //         "prePath": "/extrinsic"
      //       }
      //     ]
      //   },
      //   "traits": []
      // },
      // {
      //   "id": "tabs4",
      //   "type": "core/v1/tabs",
      //   "properties": {
      //     "tabNames": [
      //       "Tab1",
      //       "Tab2",
      //       "Tab3",
      //       "Tab4",
      //       "Tab5"
      //     ],
      //     "initialSelectedTabIndex": 0
      //   },
      //   "traits": []
      // },
      // {
      //   "id": "text5",
      //   "type": "core/v1/text",
      //   "properties": {
      //     "value": {
      //       "raw": "Tab content 1",
      //       "format": "plain"
      //     }
      //   },
      //   "traits": [
      //     {
      //       "type": "core/v1/slot",
      //       "properties": {
      //         "container": {
      //           "id": "tabs4",
      //           "slot": "content"
      //         },
      //         "ifCondition": "{{$slot.tabIndex === 0}}"
      //       }
      //     }
      //   ]
      // },
      // {
      //   "id": "text6",
      //   "type": "core/v1/text",
      //   "properties": {
      //     "value": {
      //       "raw": "Tab content 2",
      //       "format": "plain"
      //     }
      //   },
      //   "traits": [
      //     {
      //       "type": "core/v1/slot",
      //       "properties": {
      //         "container": {
      //           "id": "tabs4",
      //           "slot": "content"
      //         },
      //         "ifCondition": "{{$slot.tabIndex === 1}}"
      //       }
      //     }
      //   ]
      // },
      // {
      //   "id": "title2",
      //   "type": "core/v1/title",
      //   "properties": {
      //     "text": "Subscan Title"
      //   },
      //   "traits": []
      // },
      // {
      //   "id": "icon3",
      //   "type": "core/v1/icon",
      //   "properties": {
      //     "name": "barchart",
      //     "spin": false
      //   },
      //   "traits": [
      //     {
      //       "type": "core/v1/slot",
      //       "properties": {
      //         "container": {
      //           "id": "title2",
      //           "slot": "prefix"
      //         },
      //         "ifCondition": true
      //       }
      //     }
      //   ]
      // },
      // {
      //   "id": "cardsummary2",
      //   "type": "core/v1/cardsummary",
      //   "properties": {
      //     "name": "barchart",
      //     "spin": false,
      //     "columns": [
      //       {
      //         "title": "Finalized Block",
      //         "value": "145,431",
      //         "icon": "barchart"
      //       },
      //       {
      //         "title": "Signed Extrinsics",
      //         "value": "54,541,324",
      //         "icon": "barchart"
      //       },
      //       {
      //         "title": "Signed Extrinsics",
      //         "value": "54,541,324",
      //         "icon": "barchart"
      //       },
      //       {
      //         "title": "Signed Extrinsics",
      //         "value": "54,541,324",
      //         "icon": "barchart"
      //       },
      //       {
      //         "title": "Signed Extrinsics",
      //         "value": "54,541,324",
      //         "icon": "barchart"
      //       }
      //     ]
      //   },
      //   "traits": []
      // },
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
            },
            {
              "title": "Signature",
              "width": "",
              "dataKey": "signature",
              "transformer": "",
              "type": "code",
              "prePath": "",
              "ellipsis": false,
              "decimals": 0,
              "tagstyle": "primary",
              "symbol": ""
            }
          ]
        },
        "traits": []
      }
    ]
  }
};

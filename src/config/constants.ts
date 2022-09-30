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
          "data": "{{{\n  \"from\": \"2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f\",\n  \"to\": \"2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N\",\n  \"extrinsic_index\": \"10426613-1\",\n  \"success\": false,\n  \"hash\": \"0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8\",\n  \"block_num\": 10426613,\n  \"block_timestamp\": 1664176458,\n  \"module\": \"balances\",\n  \"amount\": \"86.13245\",\n  \"amount_v2\": \"86132450000\",\n  \"fee\": \"114600000\",\n  \"nonce\": 7,\n  \"asset_symbol\": \"\",\n  \"asset_type\": \"\",\n  \"from_account_display\": {\n    \"address\": \"2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f\"\n  },\n  \"to_account_display\": {\n    \"address\": \"2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N\",\n    \"display\": \"0x245b4775082c144c22a4874b0fba8c70c510c5ae\"\n  },\n  \"event_idx\": 1\n}}}",
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
              "type": "link",
              "width": "",
              "dataKey": "from",
              "prePath": "/account"
            },{
              "title": "Extrinsic Hash",
              "type": "text",
              "width": "",
              "dataKey": "hash",
              "prePath": "",
              "ellipsis": false
            }
          ]
        },
        "traits": []
      }
    ]
  }
};
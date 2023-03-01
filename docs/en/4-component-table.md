# Table Component

Use the Table component to display your data

---

Table is the most basic component for displaying data. You can customize the display of columns, sort, render specific types of data, and even use the Pagination component to achieve paging functionality.

## Implement Extrinsic Table

Try to implement a Table that displays Extrinsic entries. The Table contains different types of columns, where Extrinsic ID, Block, From, To columns are clickable hyperlinks.

![Component table](../assets/images/component-table.png)

## Initialize data source

When you drag and drop a Table component onto the Canvas, it will automatically display some data. This data is built-in test data that can be modified at any time. Properties - Data column is the data source of the Table, the initial data is an array: `{{ [{Extrinsic Object}, {Extrinsic Object}] }}`. You can see that this is fixed data. In actual use, most of the data will be obtained from the API interface, and then read through `{{ api.fetch.data }}`.

We try to make a small modification to the content of array index = 0 ("block_num": 10426613 changed to 10426612), and observe the change of the Table.

![Component table](../assets/images/component-table-01.png)

## Add column

When adding a new Table component, there are 4 default columns. We try to add a To column at the end to display the Transfer reciver. First, select the Table component in the Canvas panel to highlight it. Switch the Right panel to the Inspect tab and click the Columns + Icon to add a column.

Title indicates the title of the new Table column, Key indicates the Object Key of the data source, the data source is the JSON below, fill in `to`, Editor will automatically bind this column data source to `Data.to`.
We expect To to be rendered as a link, click to jump to the To account page, so we choose Link in Type. URL prefix indicates the prefix of the jump URL, the complete URL generation rule is `${URL prefix}/${column value}`, so the complete address in the example is `/account/account address`.

```json
[
  {
    "from": "2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f",
    "to": "2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N",
    "extrinsic_index": "10426613-1",
    "success": false,
    "hash": "0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8",
    "block_num": 10426612,
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
    }
  }
]
```

![Component table](../assets/images/component-table-02.png)
| Column Key | Description | Example |
| ----------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Title | The title of the header | |
| Width | Column width, default is automatic | |
| Key | The Key of the data source | |
| Sort | Data sorting | `disabled` `default` `asc` `desc` |
| Transformer | Data processor, custom wrapper for the original data | `'ID is ' + $value + ' ~'` |
| Type | Built-in rendering types, such as: time, easy to parse timestamp data into user-friendly YYYY-MM-DD format | `text` `link` `transactionStatus` `balance` `time` `tag` `code` |

> Choosing different Types will have different sub-options, for example: Balance sub-options have, Token Decimals for setting Token precision, Token Symbol for indicating the Token name after the value

## Code

```json
{
  "version": "widget/v1",
  "kind": "Application",
  "metadata": {
    "name": "subscan widget"
  },
  "spec": {
    "components": [
      {
        "id": "title4",
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
                "id": "title4",
                "slot": "prefix"
              },
              "ifCondition": true
            }
          }
        ]
      },
      {
        "id": "table5",
        "type": "core/v1/table",
        "properties": {
          "data": "{{[\n  {\n    \"from\": \"2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f\",\n    \"to\": \"2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N\",\n    \"extrinsic_index\": \"10426613-1\",\n    \"success\": false,\n    \"hash\": \"0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8\",\n    \"block_num\": 10426612,\n    \"block_timestamp\": 1664176458,\n    \"module\": \"balances\",\n    \"amount\": \"86.13245\",\n    \"amount_v2\": \"86132450000\",\n    \"fee\": \"114600000\",\n    \"nonce\": 7,\n    \"asset_symbol\": \"\",\n    \"asset_type\": \"\",\n    \"from_account_display\": {\n      \"address\": \"2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f\"\n    },\n    \"to_account_display\": {\n      \"address\": \"2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N\",\n      \"display\": \"0x245b4775082c144c22a4874b0fba8c70c510c5ae\"\n    },\n    \"event_idx\": 1\n  },\n  {\n    \"from\": \"2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f\",\n    \"to\": \"2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N\",\n    \"extrinsic_index\": \"10426613-1\",\n    \"success\": false,\n    \"hash\": \"0x4b786c3d4740fcb90bfa593c1335a65fc2ff425114b3060ae377b6981c50e3d8\",\n    \"block_num\": 10426613,\n    \"block_timestamp\": 1664176458,\n    \"module\": \"balances\",\n    \"amount\": \"86.13245\",\n    \"amount_v2\": \"86132450000\",\n    \"fee\": \"114600000\",\n    \"nonce\": 7,\n    \"asset_symbol\": \"\",\n    \"asset_type\": \"\",\n    \"from_account_display\": {\n      \"address\": \"2rGH1BB1E6fvTqiVrHMwNw8r5VrFYznvafn2Uf7amvYdCZ9f\"\n    },\n    \"to_account_display\": {\n      \"address\": \"2qSbd2umtD4KmV2X4zZk5QkCvmYKyiR2ysAeM1Eca6vcvg7N\",\n      \"display\": \"0x245b4775082c144c22a4874b0fba8c70c510c5ae\"\n    },\n    \"event_idx\": 1\n  }\n]}}",
          "columns": [
            {
              "title": "Extrinsic ID",
              "type": "link",
              "width": "",
              "dataKey": "extrinsic_index",
              "prePath": "/extrinsic",
              "ellipsis": false,
              "sort": "disabled",
              "transformer": "'ID is ' + $value + ' ~'",
              "decimals": -9007199254740991
            },
            {
              "title": "Block",
              "type": "link",
              "width": "",
              "dataKey": "block_num",
              "prePath": "/block",
              "ellipsis": false,
              "sort": "disabled",
              "transformer": ""
            },
            {
              "title": "Time",
              "type": "time",
              "width": "",
              "dataKey": "block_timestamp",
              "sort": "disabled",
              "transformer": ""
            },
            {
              "title": "From",
              "type": "link",
              "width": "",
              "dataKey": "from",
              "prePath": "/account",
              "sort": "disabled",
              "transformer": ""
            },
            {
              "title": "To",
              "width": "",
              "dataKey": "to",
              "sort": "disabled",
              "transformer": "",
              "type": "link",
              "prePath": "/account",
              "ellipsis": true,
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
}
```

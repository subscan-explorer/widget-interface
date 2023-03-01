# Expression

Using Javascript in Widget Editor

---

Because JavaScript is an indispensable part of building in Subscan Widget, we will discuss some special JavaScript concepts. If you are new to JavaScript or programming, there are some external resources that can help you get started.

- [codecademy](https://www.codecademy.com/learn/introduction-to-javascript)

If you are already familiar with Javascript basics, most Javascript knowledge overlaps with Widget Editor, you can skip this part and go directly to Javascript in Widget Editor.

Editor displays your data by dragging buttons, tables, tabs, etc. When editing specific data conversion, you need to use Javascript.

## Data Types

Everything in JavaScript is an object, which means it has some built-in methods and properties.

> In Widget Editor, Object only refers to data similar to `{name: 'alice', age: 18}` as Object. Smaller than the Javascript range.

JavaScript has the following common data types, which are valid in Widget Editor.

| Type    | Description                                                                                                       | Use Cases                     |
| ------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| String  | A value enclosed in quotation marks. If a number is enclosed in quotes, it is a string.                           | `"hi", "1", "true", "Object"` |
| Number  | A numeric value. Numbers do not need to be enclosed in quotation marks.                                           | `5, 6, -100`                  |
| Boolean | True or false value. `true` and `false` are reserved keywords that do not need to be enclosed in quotation marks. | `true, false`                 |
| Array   | A list-like ordered data structure that can store multiple data types surrounded by hard brackets.                | `[1, [1, "hi"], 'hi']`        |
| Object  | An unordered data structure with key-value pairs enclosed in curly braces and separated by commas.                | `{name: 'alice', age: 18}`    |

## Data Conversion

| Method                   | Description                           | Use Cases                           | Result      |
| ------------------------ | ------------------------------------- | ----------------------------------- | ----------- |
| `parseInt("")`           | String → Integer value                | `{{ parseInt("3") }}`               | `3`         |
| `number.toString()`      | Value (integer, float, etc.) → String | `{{ 3.toString() }}`                | `"3.5"`     |
| ['3.5', '3'].map(Number) | String array → Number array           | `{{ ['3.5', '3', 8].map(Number) }}` | `[3.5,3,8]` |

## Truthy and Falsy

[Truthy-Falsy](https://www.sitepoint.com/javascript-truthy-falsy/)

## Operators

JavaScript operators are symbols or keywords that are used to perform various arithmetic, comparison, and logical operations. By using these operators, JavaScript developers can perform various tasks such as calculating numbers, concatenating strings, comparing values, controlling flow, and performing more advanced programming features such as conditional statements, loops, and functions.

| Operator | Description | Example |
| -------- | ----------- | ------- |
| `+`      | Addition    | `2 + 2` equals `4` |
| `-`      | Subtraction | `5 - 3` equals `2` |
| `*`      | Multiplication | `2 * 3` equals `6` |
| `/`      | Division    | `10 / 2` equals `5` |
| `%`      | Modulus     | `10 % 3` equals `1` |
| `=`      | Assignment  | `x = 5` assigns `5` to `x` |
| `==`     | Equal to    | `5 == "5"` returns `true` |
| `===`    | Strict equal to | `5 === "5"` returns `false` |
| `!=`     | Not equal to | `5 != "5"` returns `false` |
| `>`      | Greater than | `10 > 5` returns `true` |
| `<`      | Less than    | `5 < 2` returns `false` |
| `>=`     | Greater than or equal to | `10 >= 10` returns `true` |
| `<=`     | Less than or equal to | `3 <= 1` returns `false` |
| `&&`     | Logical and  | `true && false` returns `false` |
| `\|\|`   | Logical or   | `true \|\| false` returns `true` |
| `!`      | Logical not  | `!true` returns `false` |
| `++`     | Increment    | `x++` increases the value of `x` by `1` |
| `--`     | Decrement    | `y--` decreases the value of `y` by `1` |

## Global Methods and States

Enter `{{}}` in the input box that supports expressions to activate the expression function. Editor provides autocomplete options, if you enter the name of an Object (with a `name` property), a drop-down box will appear when you enter `.`, prompting the available options.

![Component expression](../assets/images/expression.png)

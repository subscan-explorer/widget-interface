# Icon 组件

使用 Icon 组件展示一个图标

---

Icon 用于展示图标，经常搭配其他组件一起使用

## 独立的图标

将 Icon 拖放在 Canvas 中，默认 Icon 是个独立的组件，通过切换 Name 值更换图标，打开 Spin 开关，图标顺时针旋转。

属性说明：

| Column Key | Description | Example |
| ----------- | ----------- | ----------- |
| Name | 图标名称，用于切换不同的图标 | `barchart` `finalized` `note` `person` ... |
| Spin | 旋转动效 | `true` `false` |

## 与 Title 组件组合使用

Title 组件在 UI Tab 中显示与其他组件不同，具有下拉三角箭头和 `Slot:prefix` 子项，因为 Title 可以将其他组件作为自身的子组件（更多文档可以查看 Slot 独立章节），拖动 `icon4` 到 `Slot:prefix` 内即可将 Icon 作为 Title 的字组件。

![Component icon](../assets/images/component-icon.png)

效果图：

![Component icon](../assets/images/component-icon-01.png)

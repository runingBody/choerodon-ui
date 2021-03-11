---
category: Pro Components
subtitle: 文本输入框
type: Data Entry
title: TextField
---

文本输入框。

## 何时使用



## API

### TextField

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| placeholder | 占位词。当为range时，可以设定两个占位词 | string\|string[]  |  |
| prefix | 前缀，一般用于放置图标 | ReactNode  |  |
| suffix | 后缀，一般用于放置图标 | ReactNode  |  |
| clearButton | 是否显示清除按钮 | boolean  | false |
| minLength | 最小长度 | number  |  |
| maxLength | 最大长度 | number |   |
| pattern | 正则校验 | string\|RegExp |   |
| autoComplete | 自动完成，可选值：`on` `off` | string | off |
| addonBefore | 设置前置标签 | string \| ReactNode |  |
| addonAfter | 设置后置标签 | string \| ReactNode |  |
| restrict | 限制可输入的字符 | string |  |
| valueChangeAction | 触发值变更的动作, 可选值：`blur` `input` | `blur` |  |
| wait | 设置值变更间隔时间，只有在 valueChangeAction 为 input 时起作用 | number | - |
| waitType | 设置值变更间隔类型，可选值： `throttle` `debounce` | string | `debounce` |

更多属性请参考 [FormField](/components-pro/field/#FormField)。

<style>
.code-box .c7n-row {
  margin-bottom: .24rem;
}
</style>

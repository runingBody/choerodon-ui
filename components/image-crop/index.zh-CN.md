---
type: Data Entry
category: Components
cols: 1
title: ImageCrop
subtitle: 图片裁剪
---

裁剪图片

## 何时使用

裁剪图片

## API

| 参数 | 说明 | 类型 | 默认值 |
| ----------- | -------------------- | ------------ | ---------------------------------------------- |
| aspect      | 裁切区域宽高比，`width / height`               | `number`             | `1 / 1`      |
| shape       | 裁切区域形状，`'rect'` 或 `'round'`            | `string`             | `'rect'`     |
| grid        | 显示裁切区域网格（九宫格）                     | `boolean`            | `false`      |
| zoom        | 启用图片缩放                                   | `boolean`            | `true`       |
| rotate      | 启用图片旋转                                   | `boolean`            | `false`      |
| beforeCrop  | 弹窗打开前调用，若返回 `false`，弹框将不会打开 | `function`           | -            |
| modalTitle  | 弹窗标题                                       | `string`             | `'编辑图片'` |
| modalWidth  | 弹窗宽度，像素值或百分比                       | `number` \| `string` | `520`        |
| modalOk     | 弹窗确定按钮文字                               | `string`             | `'确定'`     |
| modalCancel | 弹窗取消按钮文字                               | `string`             | `'取消'`     |
| onCancel   | 取消模态框触发 | `onCancel?: () => void `         | -              |
| onOk  | 点击模态框确定触发 | `{ url: string, blob: Blob,area:Area }=> void`         | -              |
| modalVisible   |  控制模态框的展示 | `boolean`         | `ture`              |
| serverCrop   | 服务端裁剪 | `boolean`         | `false`           |
| onCropComplete   | 裁剪完毕触发方法 |({ url: string, blob: Blob, area: Area }) => void        | -          |
| cropContent   | 修改裁剪编辑位置的渲染 |`(crop: ReactElement<EasyCropProps>) => React.ReactElement<any>`     | -          |
| modalProps   | modal 的属性配置不可以更改onOk，onCancel | ModalProps     | -          |

## ImgCrop.AvatarUploader 

这个组件可以完成对于头像上传的裁剪的场景需求，主要是增加预览效果集成

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 上传图片模态框的显示状态| boolean | false |
| onClose | 模态框关闭时的回调| ` (visible: boolean) => void;` | 无 |
| onUploadOk | 成功上传时的回调| `(res: any) => void;` | 无 |
| uploadUrl | 上传链接| string | 无 |
| uploadFaild | 上传失败| `() => void;` | 无 |
| uploadError | 上传服务器错误|`(error: any) => void;`| 无 |
| handleUpload | 点击上传| ` (area: AvatarArea) => void; `  | 无 |
| cropComplete | 裁剪完成| `(imageState: any) => void; ` | 无 |
| title | 上传头像标题| `string | React.ReactElement; ` | 无 |
| subTitle | 上传头像小标题| `string | React.ReactElement;` | 无 |
| previewTitle | 头像预览标题| `string | React.ReactElement;` | 无 |
| reloadTitle | 重新上传标题| `string | React.ReactElement;` | 无 |
| uploadProps | 上传配置| `UploadProps` | 无 |
| modalProps | 模态框的配置| `ModalProps` | 无 |
| limit | 限制内容| boolean | `{type: 'jpeg,png,jpg',size: 1024,}` |
| previewList | 定义预览的大小| number[] | [80, 30, 18] |
| editorWidth | 裁剪容器宽度| number | 540 |
| editorHeight | 裁剪容器高度| number | 300 |
| minRectSize | 最小裁剪大小| number | 80 |
| defaultRectSize | 默认裁剪大小| number | 200 |
| axiosConfig | axios 上传配置 | AxiosRequestConfig | 无 |




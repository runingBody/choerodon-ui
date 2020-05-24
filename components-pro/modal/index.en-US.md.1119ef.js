(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1636:function(t,n){t.exports={content:["section",["p","模态框。"],["h2","何时使用"]],meta:{category:"Pro Components",subtitle:"模态框",type:"Feedback",title:"Modal",filename:"components-pro/modal/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Modal"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","key"],["td","唯一键， 当 destroyOnClose 为 false 时，必须指定 key。为了避免与其他 modal 的 key 重复，可通过 Modal.key()来获取唯一 key。"],["td","string"],["td"]],["tr",["td","title"],["td","标题"],["td","ReactNode"],["td"]],["tr",["td","closable"],["td","显示右上角关闭按钮"],["td","boolean"],["td","false"]],["tr",["td","movable"],["td","可移动， drawer 无法移动"],["td","boolean"],["td","true"]],["tr",["td","fullScreen"],["td","全屏显示"],["td","boolean"],["td","false"]],["tr",["td","maskClosable"],["td","点击蒙层是否允许关闭"],["td","boolean"],["td","false"]],["tr",["td","mask"],["td","是否显示蒙层"],["td","boolean"],["td","true"]],["tr",["td","maskStyle"],["td","蒙层样式"],["td","CSSProperties"],["td"]],["tr",["td","maskClassName"],["td","蒙层自定义样式名"],["td","string"],["td"]],["tr",["td","keyboardClosable"],["td","按 esc 键是否允许关闭"],["td","boolean"],["td","true"]],["tr",["td","destroyOnClose"],["td","关闭时是否销毁"],["td","boolean"],["td","true"]],["tr",["td","footer"],["td","底部内容"],["td","ReactNode 或",["code","(okBtn: ReactNode, cancelBtn: ReactNode) => ReactNode"]],["td"]],["tr",["td","okText"],["td","确认按钮文字"],["td","ReactNode"],["td","确定"]],["tr",["td","cancelText"],["td","取消按钮文字"],["td","ReactNode"],["td","取消"]],["tr",["td","onClose"],["td","关闭时回调，返回",["code","false"]," ",["code","Promise.resolve(false)"],"或",["code","Promise.reject()"],"不会关闭， 其他自动关闭"],["td","() => Promise","<","boolean",">"],["td"]],["tr",["td","onOk"],["td","点击确定回调，返回",["code","false"]," ",["code","Promise.resolve(false)"],"或",["code","Promise.reject()"],"不会关闭， 其他自动关闭"],["td","() => Promise","<","boolean",">"],["td"]],["tr",["td","onCancel"],["td","点击取消回调，返回",["code","false"]," ",["code","Promise.resolve(false)"],"或",["code","Promise.reject()"],"不会关闭， 其他自动关闭"],["td","() => Promise","<","boolean",">"],["td"]],["tr",["td","afterClose"],["td","关闭后回调"],["td","() => void"],["td"]],["tr",["td","drawer"],["td","抽屉模式"],["td","boolean"],["td","false"]],["tr",["td","drawerTransitionName"],["td","抽屉模式使用的动画"],["td","string"],["td","'slide-right'"]],["tr",["td","okCancel"],["td","同时显示 ok 和 cancel 按钮，false 的时候只显示 ok 按钮"],["td","boolean"],["td","true"]],["tr",["td","okFirst"],["td","ok 按钮是否排在第一个"],["td","boolean"],["td","true"]],["tr",["td","okProps"],["td","ok 按钮属性"],["td","object"],["td"]],["tr",["td","cancelProps"],["td","cancel 按钮属性"],["td","object"],["td"]]]],["style","\n.code-box-demo .c7n-pro-btn {\n    margin-right: 8px;\n}\n"],["h3","ModalProvider > v0.8.50"],["ul",["li",["p","使用 Modal 前，需要在页面根节点外包裹 ",["a",{title:null,href:"/components-pro/modal-provider/#ModalProvider"},"ModalProvider"],"。如果路由切换时要清空所有 Modal，需要在 ModalProvider 传入 location，如下所示。"]],["li",["p","如果 Modal 要获取 React Context，请在对应的 Context.Provider 子节点外包裹 ",["a",{title:null,href:"/components-pro/modal-provider/#ModalProvider"},"ModalProvider"],"，并使用 ModalProvider 提供的 injectModal 或 useModal 来代替 Modal.open。"]]],["pre",{lang:"jsx harmony",highlighted:'import { ModalProvider } from <span class="token string">\'choerodon-ui/pro\'</span><span class="token comment" spellcheck="true">;</span>\nimport { withRouter } from <span class="token string">\'react-router\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token variable">@withRouter</span>\nclass App extends React<span class="token punctuation">.</span>Component {\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> { location } <span class="token operator">=</span> this<span class="token punctuation">.</span>props<span class="token comment" spellcheck="true">;</span>\n    return <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>ModalProvider location<span class="token operator">=</span>{location}<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Main <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ModalProvider<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  }\n}\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","import { ModalProvider } from 'choerodon-ui/pro';\nimport { withRouter } from 'react-router';\n\n@withRouter\nclass App extends React.Component {\n  render() {\n    const { location } = this.props;\n    return (\n      <ModalProvider location={location}>\n        <Main />\n      </ModalProvider>\n    );\n  }\n}\n\nrender(<App />, mountNode);"]],["h3","ModalContent <= v0.8.50"],["ul",["li",["p","使用 Modal 前，需要在页面 Root 内插入 ModalContainer。如果路由切换时要清空所有 Modal，需要在 ModalContiner 传入 location，如下所示。"]],["li",["p","如果 Modal 要获取 React Context，请将 ModalContainer 至于 Context.Provider 之下。"]],["li",["p","为了避免多个 ModalContainer 之间 Context 错乱， ModalContainer 务必作为第一个子元素使用。"]]],["pre",{lang:"jsx harmony",highlighted:'import { ModalContainer } from <span class="token string">\'choerodon-ui/pro\'</span><span class="token comment" spellcheck="true">;</span>\nimport { withRouter } from <span class="token string">\'react-router\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token variable">@withRouter</span>\nclass App extends React<span class="token punctuation">.</span>Component {\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> { location } <span class="token operator">=</span> this<span class="token punctuation">.</span>props<span class="token comment" spellcheck="true">;</span>\n    return <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ModalContainer location<span class="token operator">=</span>{location} <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Main <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  }\n}\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","import { ModalContainer } from 'choerodon-ui/pro';\nimport { withRouter } from 'react-router';\n\n@withRouter\nclass App extends React.Component {\n  render() {\n    const { location } = this.props;\n    return (\n      <div>\n        <ModalContainer location={location} />\n        <Main />\n      </div>\n    );\n  }\n}\n\nrender(<App />, mountNode);"]],["h3","Modal.open"],["p","Modal.open()返回一个对象，该对象具有如下方法："],["table",["thead",["tr",["th","名称"],["th","说明"],["th","参数"]]],["tbody",["tr",["td","close(destroy)"],["td","关闭"],["td",["code","destroy"]," - 是否销毁"]],["tr",["td","open()"],["td","打开"],["td"]],["tr",["td","update(props)"],["td","更新"],["td"]]]],["h3","props.modal"],["p","Modal 会向内部组件注入 modal 对象，该对象具有如下属性与方法："],["table",["thead",["tr",["th","名称"],["th","说明"],["th","参数"]]],["tbody",["tr",["td","handleOk(callback)"],["td","注册响应 ok 按钮的钩子，返回值为 false 将阻止关闭"],["td",["code","callback"]," - 钩子"]],["tr",["td","handleCancel(callback)"],["td","注册响应 cancel 按钮的钩子，返回值为 false 将阻止关闭"],["td",["code","callback"]," - 钩子"]],["tr",["td","close(destroy)"],["td","关闭"],["td",["code","destroy"]," - 是否销毁"]],["tr",["td","update(props)"],["td","更新"],["td"]],["tr",["td","props"],["td","modal 的 props"],["td"]]]]]}}}]);
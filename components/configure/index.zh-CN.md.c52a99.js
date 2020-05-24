(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1474:function(t,e){t.exports={content:["section",["p","为组件提供统一的全局化配置。"],["h2","使用"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> configure<span class="token punctuation">,</span> getConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prefixCls<span class="token punctuation">:</span> <span class="token string">\'c7n\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token string">\'prefixCls\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { configure, getConfig } from 'choerodon-ui';\n\nconfigure({ prefixCls: 'c7n' });\n\nconst prefixCls = getConfig('prefixCls');"]]],meta:{category:"Components",subtitle:"全局化配置",cols:1,type:"Other",title:"Configure",filename:"components/configure/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","prefixCls"],["td","设置统一样式前缀"],["td","string"],["td","c7n"]],["tr",["td","proPrefixCls"],["td","设置统一样式前缀(pro 组件)"],["td","string"],["td","c7n-pro"]],["tr",["td","iconfontPrefix"],["td","图标样式前缀"],["td","string"],["td","icon"]],["tr",["td","icons"],["td","图标列表，用于 IconPicker。"],["td","string[] ","|"," { ","[","categoryName: string","]",": string[] }"],["td","import { categories } from 'choerodon-ui-font'"]],["tr",["td","ripple"],["td","是否开启波纹效果"],["td","boolean"],["td","true"]],["tr",["td","lookupCache"],["td","lookup 缓存配置。",["code","maxAge"]," - 缓存时长 ",["code","max"]," - 缓存数量上限"],["td","object"],["td","{ maxAge: 1000 ",["em"," 60 "]," 10, max: 100 }"]],["tr",["td","lookupUrl"],["td","lookup 取值的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/code/\\${code}/","`"]],["tr",["td","lookupAxiosConfig"],["td","值列表请求的配置或钩子，详见",["a",{title:null,href:"#AxiosRequestConfig"},"AxiosRequestConfig"],"。 配置中默认 url 为 lookupUrl， method 为 post。"],["td","AxiosRequestConfig ","|"," ({ dataSet: DataSet, record: Record, params?: any, lookupCode: string }) => AxiosRequestConfig"],["td","-"]],["tr",["td","lovDefineUrl"],["td","Lov 取配置的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/sys/lov/lov_define?code=\\${code}","`"]],["tr",["td","lovDefineAxiosConfig"],["td","返回 Lov 配置的请求的配置或钩子，详见",["a",{title:null,href:"#AxiosRequestConfig"},"AxiosRequestConfig"],"。 配置中默认 url 为 lovDefineUrl， method 为 post。"],["td","AxiosRequestConfig ","|"," (code: string, lovConfig?: LovConfig, { dataSet, params, data }) => AxiosRequestConfig"],["td","-"]],["tr",["td","lovQueryUrl"],["td","Lov 取值的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/lov/dataset/\\${code}","`"]],["tr",["td","lovQueryAxiosConfig"],["td","Lov 查询数据请求的配置或钩子，详见",["a",{title:null,href:"#AxiosRequestConfig"},"AxiosRequestConfig"],"。 配置中默认 url 为 lovQueryUrl， method 为 post。"],["td","AxiosRequestConfig ","|"," (code: string, lovConfig?: LovConfig, { dataSet, params, data }) => AxiosRequestConfig"],["td","-"]],["tr",["td","lovTriggerMode"],["td","Lov 触发弹窗模式，可选 ",["code","icon"]," ",["code","input"],"。"],["td","string"],["td","icon"]],["tr",["td","lookupBatchAxiosConfig"],["td","返回 lookup 批量查询配置的钩子，详见",["a",{title:null,href:"#AxiosRequestConfig"},"AxiosRequestConfig"],"。"],["td","(codes: string[]) => AxiosRequestConfig"],["td","-"]],["tr",["td","axios"],["td","替换内置的 axios 实例"],["td","AxiosInstance"],["td"]],["tr",["td","dataKey"],["td","默认 DataSet 的 dataKey"],["td","string"],["td","rows"]],["tr",["td","totalKey"],["td","默认 DataSet 的 totalKey"],["td","string"],["td","total"]],["tr",["td","statusKey"],["td","默认 DataSet 提交的数据中标识状态的 key"],["td","string"],["td","_","_","status"]],["tr",["td","tlsKey"],["td","默认 DataSet 数据中标识多语言的 key"],["td","string"],["td","_","_","tls"]],["tr",["td","status"],["td","默认 DataSet 提交的数据的状态映射"],["td","{ add: string, update: string, delete: string }"],["td","{ add: 'add', update: 'update', delete: 'delete' }"]],["tr",["td","labelLayout"],["td","默认 Form 的 labelLayout"],["td","string"],["td","horizontal"]],["tr",["td","queryBar"],["td","默认 Table 的 queryBar"],["td","string"],["td","normal"]],["tr",["td","tableBorder"],["td","默认 Table 的 border"],["td","boolean"],["td","true"]],["tr",["td","tableHighLightRow"],["td","默认 Table 当前行高亮"],["td","boolean"],["td","true"]],["tr",["td","tableSelectedHighLightRow"],["td","默认 Table 当前勾选行高亮"],["td","boolean"],["td","false"]],["tr",["td","tableRowHeight"],["td","默认 Table 行高"],["td","auto ","|"," number"],["td","30"]],["tr",["td","tableColumnResizable"],["td","默认 Table 列可调整列宽"],["td","boolean"],["td","true"]],["tr",["td","tableExpandIcon"],["td","默认 Table 自定义展开图标"],["td","({ prefixCls, expanded, expandable, needIndentSpaced, record, onExpand }) => ReactNode"],["td"]],["tr",["td","tableSpinProps"],["td","默认 Table spin 的属性"],["td","SpinProps"],["td","{ size: Size.default, wrapperClassName: '' }"]],["tr",["td","tableButtonProps"],["td","默认 TableButton 的属性"],["td","ButtonProps"],["td","{ color: 'primary', funcType: 'flat' }"]],["tr",["td","tableCommandProps"],["td","默认 TableCommand 的属性"],["td","ButtonProps"],["td","{ color: 'primary', funcType: 'flat' }"]],["tr",["td","pagination"],["td","默认 pagination 的属性"],["td","TablePaginationConfig ","|"," false"],["td","详见",["a",{title:null,href:"/components-pro/pagination/#Pagination"},"Pagination"]]],["tr",["td","dropdownMatchSelectWidth"],["td","默认下拉框匹配输入框宽度"],["td","boolean"],["td","true"]],["tr",["td","modalSectionBorder"],["td","默认 Modal 的头和脚有边框线"],["td","boolean"],["td","true"]],["tr",["td","modalOkFirst"],["td","默认 Modal 的 ok 按钮排在第一个"],["td","boolean"],["td","true"]],["tr",["td","buttonFuncType"],["td","默认 Button 的功能类型"],["td","string"],["td","raised"]],["tr",["td","buttonColor"],["td","默认 Button 的颜色"],["td","string"],["td","default"]],["tr",["td","renderEmpty"],["td","自定义组件空状态。"],["td","(componentName: string) => ReactNode"],["td","-"]],["tr",["td","defaultValidationMessages"],["td","自定义校验信息, 详见",["a",{title:null,href:"#ValidationMessages"},"ValidationMessages"]],["td","ValitionMessages"],["td","-"]],["tr",["td","generatePageQuery"],["td","分页参数转换的钩子"],["td","({ page?: number, pageSize?: number, sortName?: string, sortOrder?: string }) => object"],["td","-"]],["tr",["td","feedback"],["td","DataSet 查询和提交数据的反馈配置, 详见",["a",{title:null,href:"/components-pro/data-set/#Feedback"},"Feedback"]],["td","Feedback"],["td"]],["tr",["td","transport"],["td","DataSet 默认 transport, 详见",["a",{title:null,href:"/components-pro/data-set/#Transport"},"Transport"]],["td","Transport"],["td"]],["tr",["td","formatter"],["td","日期格式化。其中 jsonDate 是数据请求和响应时的格式，为空时日期会转化为 timestamp。详见",["a",{title:null,href:"#Formatter"},"Formatter"]],["td","Formatter"],["td"]]]],["h3","Formatter"],["table",["thead",["tr",["th","属性"],["th","默认值"],["th","类型"]]],["tbody",["tr",["td","jsonDate"],["td","YYYY-MM-DD HH:mm:ss"],["td","string"]],["tr",["td","date"],["td","YYYY-MM-DD"],["td","string"]],["tr",["td","dateTime"],["td","YYYY-MM-DD HH:mm:ss"],["td","string"]],["tr",["td","time"],["td","HH:mm:ss"],["td","string"]],["tr",["td","week"],["td","YYYY-Wo"],["td","string"]],["tr",["td","month"],["td","YYYY-MM"],["td","string"]],["tr",["td","year"],["td","YYYY"],["td","string"]]]],["h3","ValidationMessages"],["table",["thead",["tr",["th","属性"],["th","默认值"],["th","类型"]]],["tbody",["tr",["td","badInput"],["td","请输入一个数字。"],["td","ReactNode"]],["tr",["td","patternMismatch"],["td","请输入有效的值。"],["td","ReactNode"]],["tr",["td","rangeOverflow"],["td","{label}必须小于或等于{max}。"],["td","ReactNode"]],["tr",["td","rangeUnderflow"],["td","{label}必须大于或等于{min}。"],["td","ReactNode"]],["tr",["td","stepMismatch"],["td","请输入有效值。最接近的有效值为{0}。"],["td","ReactNode"]],["tr",["td","stepMismatchBetween"],["td","请输入有效值。两个最接近的有效值分别为{0}和{1}。"],["td","ReactNode"]],["tr",["td","tooLong"],["td","请将该内容减少到{maxLength}个或更少字符（目前您使用了{length}个字符）。"],["td","ReactNode"]],["tr",["td","tooShort"],["td","请将该内容增加到{minLength}个或更多字符（目前您使用了{length}个字符）。"],["td","ReactNode"]],["tr",["td","typeMismatch"],["td","请输入与类型匹配的有效值。"],["td","ReactNode"]],["tr",["td","valueMissing"],["td","请输入{label}。"],["td","ReactNode"]],["tr",["td","valueMissingNoLabel"],["td","请填写此字段。"],["td","ReactNode"]],["tr",["td","uniqueError"],["td","该字段值重复，请重新填写。"],["td","ReactNode"]],["tr",["td","unknown"],["td","未知错误。"],["td","ReactNode"]]]],["h3","AxiosRequestConfig"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","url"],["td","地址"],["td","string"]],["tr",["td","method"],["td","方法"],["td","string"]],["tr",["td","baseURL"],["td","基础地址"],["td","string"]],["tr",["td","headers"],["td","请求头"],["td","object"]],["tr",["td","params"],["td","url 参数"],["td","object"]],["tr",["td","data"],["td","请求体数据"],["td","object"]],["tr",["td","timeout"],["td","请求超时时间"],["td","number"]],["tr",["td","withCredentials"],["td","用于跨域传递 cookie"],["td","boolean"]],["tr",["td","transformRequest"],["td","转变提交的数据"],["td","(data: any, headers: any) => string"]],["tr",["td","transformResponse"],["td","转变响应的数据"],["td","(data: any, headers: any) => any"]]]],["p","更多配置请参考 Axios 官方文档，或参考 typescript 文件/node_modules/axios/index.d.ts"]]}}}]);
"use strict";(self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[]).push([[3122],{"./src/components/Blocks/Section/Section.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),icons_28_chat__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icons/28/chat.tsx"),icons_28_devices__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/icons/28/devices.tsx"),icons_28_stats__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icons/28/stats.tsx"),storybook_controls__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/controls.ts"),components_Blocks_Cell_Cell__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Blocks/Cell/Cell.tsx"),components_Blocks_IconContainer_IconContainer__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Blocks/IconContainer/IconContainer.tsx"),components_Blocks_List_List__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Blocks/List/List.tsx"),components_Form_Input_Input__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Form/Input/Input.tsx"),_Section__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Blocks/Section/Section.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Section",component:_Section__WEBPACK_IMPORTED_MODULE_1__.w,argTypes:(0,storybook_controls__WEBPACK_IMPORTED_MODULE_2__.w0)(["header","footer"],"text")};var cells=[{id:1,icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(icons_28_chat__WEBPACK_IMPORTED_MODULE_3__.i,{}),text:"Chat Settings"},{id:2,icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(icons_28_devices__WEBPACK_IMPORTED_MODULE_4__.j,{}),text:"Data and Storage"},{id:3,icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(icons_28_stats__WEBPACK_IMPORTED_MODULE_5__.D,{}),text:"Devices"}],Playground={render:function(args){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Blocks_List_List__WEBPACK_IMPORTED_MODULE_6__.B,{style:{background:"var(--tgui--secondary_bg_color)",padding:"40px",width:500},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Section__WEBPACK_IMPORTED_MODULE_1__.w,_object_spread_props(_object_spread({header:"Main Settings",footer:"The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."},args),{children:cells.map(function(cell){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Blocks_Cell_Cell__WEBPACK_IMPORTED_MODULE_7__.f,{before:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Blocks_IconContainer_IconContainer__WEBPACK_IMPORTED_MODULE_8__.T,{children:cell.icon}),children:cell.text},cell.id)})})),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Section__WEBPACK_IMPORTED_MODULE_1__.w,_object_spread_props(_object_spread({header:"Personal Information",footer:"The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."},args),{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Form_Input_Input__WEBPACK_IMPORTED_MODULE_9__.p,{header:"First name",placeholder:"21 y.o. designer from San Francisco"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Form_Input_Input__WEBPACK_IMPORTED_MODULE_9__.p,{header:"Last name",placeholder:"21 y.o. designer from San Francisco"})]}))]})}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <List style={{\n    background: \'var(--tgui--secondary_bg_color)\',\n    padding: \'40px\',\n    width: 500\n  }}>\n      <Section header="Main Settings" footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux." {...args}>\n        {cells.map(cell => <Cell key={cell.id} before={<IconContainer>{cell.icon}</IconContainer>}>\n            {cell.text}\n          </Cell>)}\n      </Section>\n      <Section header="Personal Information" footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux." {...args}>\n        <Input header="First name" placeholder="21 y.o. designer from San Francisco" />\n        <Input header="Last name" placeholder="21 y.o. designer from San Francisco" />\n      </Section>\n    </List>\n} satisfies Story',...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Blocks/IconContainer/IconContainer.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.vBNhoFi_gJJo6GzYaSwz {
  color: var(--tgui--link_color);
}

`,"",{version:3,sources:["webpack://./src/components/Blocks/IconContainer/IconContainer.module.css"],names:[],mappings:"AAAA;EACE,8BAA8B;AAChC",sourcesContent:[".wrapper {\n  color: var(--tgui--link_color);\n}\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"vBNhoFi_gJJo6GzYaSwz"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Form/Input/Input.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.JF9Vl7dzi7wOM7wGWtcH {
  padding: 12px 16px;
  gap: 12px;
}

.homup3QQHB_9oVwvfclO {
  min-height: 48px;
}

.CCk79gcoWbvJJHKQlxdm {
  display: block;
  width: 100%;
  margin: 0;
  border: 0;
  outline: 0;
  padding: 0;
  resize: none;
  background: transparent;
  box-sizing: border-box;
  text-overflow: ellipsis;
  color: var(--tgui--text_color);
}

.CCk79gcoWbvJJHKQlxdm::-webkit-outer-spin-button,
.CCk79gcoWbvJJHKQlxdm::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.CCk79gcoWbvJJHKQlxdm::placeholder {
  color: var(--tgui--secondary_hint_color);
}
`,"",{version:3,sources:["webpack://./src/components/Form/Input/Input.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,SAAS;EACT,SAAS;EACT,UAAU;EACV,UAAU;EACV,YAAY;EACZ,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,8BAA8B;AAChC;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,wCAAwC;AAC1C",sourcesContent:[".wrapper {\n  padding: 12px 16px;\n  gap: 12px;\n}\n\n.wrapper--ios {\n  min-height: 48px;\n}\n\n.input {\n  display: block;\n  width: 100%;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  resize: none;\n  background: transparent;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  color: var(--tgui--text_color);\n}\n\n.input::-webkit-outer-spin-button,\n.input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\n.input::placeholder {\n  color: var(--tgui--secondary_hint_color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"JF9Vl7dzi7wOM7wGWtcH","wrapper--ios":"homup3QQHB_9oVwvfclO",input:"CCk79gcoWbvJJHKQlxdm"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Blocks/IconContainer/IconContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>IconContainer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),IconContainer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Blocks/IconContainer/IconContainer.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(IconContainer_module.A,options);let IconContainer_IconContainer_module=IconContainer_module.A&&IconContainer_module.A.locals?IconContainer_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var IconContainer=function(_param){var className=_param.className,children=_param.children,restProps=_object_without_properties(_param,["className","children"]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",_object_spread_props(_object_spread({className:(0,classNames.x)(IconContainer_IconContainer_module.wrapper,className)},restProps),{children:children}))};try{IconContainer.displayName="IconContainer",IconContainer.__docgenInfo={description:"",displayName:"IconContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Blocks/IconContainer/IconContainer.tsx#IconContainer"]={docgenInfo:IconContainer.__docgenInfo,name:"IconContainer",path:"src/components/Blocks/IconContainer/IconContainer.tsx#IconContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Form/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),Input_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Form/Input/Input.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Input_module.A,options);let Input_Input_module=Input_module.A&&Input_module.A.locals?Input_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),FormInput=__webpack_require__("./src/components/Form/FormInput/FormInput.tsx"),Subheadline=__webpack_require__("./src/components/Typography/Subheadline/Subheadline.tsx"),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Input=/*#__PURE__*/(0,react.forwardRef)(function(_param,ref){var _param_type=_param.type,header=_param.header,before=_param.before,after=_param.after,status=_param.status,className=_param.className,disabled=_param.disabled,restProps=_object_without_properties(_param,["type","header","before","after","status","className","disabled"]),platform=(0,usePlatform.V)(),TypographyComponent="ios"===platform?Text.E:Subheadline.N;return/*#__PURE__*/(0,jsx_runtime.jsx)(FormInput.Z,{header:header,before:before,after:after,status:status,disabled:disabled,className:(0,classNames.x)(Input_Input_module.wrapper,"ios"===platform&&Input_Input_module["wrapper--ios"],className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TypographyComponent,_object_spread({ref:ref,Component:"input",className:Input_Input_module.input,type:void 0===_param_type?"text":_param_type,disabled:disabled},restProps))})});try{Input.displayName="Input",Input.__docgenInfo={description:"Renders a text input field with enhanced styling and integration into a form structure. Supports customization through `FormPublicProps` and standard input attributes.\nIt automatically adapts typography and layout based on the platform, ensuring a consistent user experience across devices.",displayName:"Input",props:{status:{defaultValue:null,description:"Defines the visual state of the form input (e.g., error, focused).",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"focused"'}]}},header:{defaultValue:null,description:"Optional header content, displayed above the form input on `base` platform.",name:"header",required:!1,type:{name:"ReactNode"}},before:{defaultValue:null,description:"Content to be displayed before the form input, such as icons or labels.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Content to be displayed after the form input, often used for action icons or additional information.",name:"after",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Indicates if the form input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Form/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/28/chat.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Icon28Chat});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Icon28Chat=function(_param){var restProps=_extends({},_object_destructuring_empty(_param));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",_object_spread_props(_object_spread({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},restProps),{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.15 20.64c.27-.6.45-1.29.45-2.13a7.55 7.55 0 0 1-2.91-5.84c0-4.44 4.17-8.04 9.3-8.04 5.15 0 9.32 3.6 9.32 8.04 0 4.44-4.17 8.04-9.31 8.04-.8 0-1.58-.1-2.33-.26a7.55 7.55 0 0 1-3.19 1.86c-.87.29-1.94.54-3.21.7a8.4 8.4 0 0 0 1.88-2.37Zm5.12 1.93c.57.08 1.14.12 1.73.12 5.95 0 11.29-4.23 11.29-10.02 0-5.8-5.34-10.02-11.3-10.02-5.94 0-11.28 4.22-11.28 10.02 0 2.58 1.1 4.9 2.82 6.63-.2.82-.75 1.4-1.65 2.3a1.98 1.98 0 0 0 1.63 3.37c3.24-.4 5.42-1.37 6.76-2.4Z",fill:"currentColor"})}))};try{Icon28Chat.displayName="Icon28Chat",Icon28Chat.__docgenInfo={description:"",displayName:"Icon28Chat",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/28/chat.tsx#Icon28Chat"]={docgenInfo:Icon28Chat.__docgenInfo,name:"Icon28Chat",path:"src/icons/28/chat.tsx#Icon28Chat"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/28/devices.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Icon28Devices});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Icon28Devices=function(_param){var restProps=_extends({},_object_destructuring_empty(_param));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",_object_spread_props(_object_spread({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},restProps),{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.03 7.9c0-1.59 1.3-2.88 2.89-2.88h16.74a.9.9 0 0 1 0 1.8H6.92c-.6 0-1.09.48-1.09 1.08v12.9h9.63a.9.9 0 0 1 0 1.8H2a.9.9 0 1 1 0-1.8h2.03V7.9Zm16.93 3.77c-.6 0-1.08.5-1.08 1.1v6.95c0 .6.48 1.08 1.08 1.08h3.05c.6 0 1.09-.48 1.09-1.08v-6.96c0-.6-.49-1.09-1.09-1.09h-3.05Zm-2.88 1.1c0-1.6 1.29-2.9 2.88-2.9h3.05c1.6 0 2.89 1.3 2.89 2.9v6.95c0 1.6-1.3 2.88-2.89 2.88h-3.05c-1.6 0-2.88-1.29-2.88-2.88v-6.96Z",fill:"currentColor"})}))};try{Icon28Devices.displayName="Icon28Devices",Icon28Devices.__docgenInfo={description:"",displayName:"Icon28Devices",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/28/devices.tsx#Icon28Devices"]={docgenInfo:Icon28Devices.__docgenInfo,name:"Icon28Devices",path:"src/icons/28/devices.tsx#Icon28Devices"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/28/stats.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Icon28Stats});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Icon28Stats=function(_param){var restProps=_extends({},_object_destructuring_empty(_param));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",_object_spread_props(_object_spread({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},restProps),{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.1 4.4a9.51 9.51 0 0 0-8.7 9.41 9.53 9.53 0 0 0 9.6 9.46c5 0 9.1-3.76 9.55-8.56h-7.29c-.5 0-.96 0-1.33-.05a2.04 2.04 0 0 1-1.23-.55c-.36-.36-.5-.8-.55-1.22-.05-.38-.05-.84-.05-1.34V4.4Zm1.8 0v7.1a9.97 9.97 0 0 0 .08 1.34l.19.04c.24.03.58.03 1.15.03h7.23A9.53 9.53 0 0 0 14.9 4.4Zm.06 8.43h.01Zm.02.01v.01Zm-12.38.97C2.6 7.6 7.72 2.56 14 2.56S25.4 7.59 25.4 13.8c0 6.23-5.12 11.26-11.4 11.26S2.6 20.04 2.6 13.81Z",fill:"currentColor"})}))};try{Icon28Stats.displayName="Icon28Stats",Icon28Stats.__docgenInfo={description:"",displayName:"Icon28Stats",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/28/stats.tsx#Icon28Stats"]={docgenInfo:Icon28Stats.__docgenInfo,name:"Icon28Stats",path:"src/icons/28/stats.tsx#Icon28Stats"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/controls.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rI:()=>hideControls,w0:()=>setControlsTypes});var setControlsTypes=function(controls,type){return controls.reduce(function(acc,control){return acc[control]={control:{type:type}},acc},{})},hideControls=function(){for(var _len=arguments.length,controls=Array(_len),_key=0;_key<_len;_key++)controls[_key]=arguments[_key];return setControlsTypes(controls,null)}}}]);
//# sourceMappingURL=components-Blocks-Section-Section-stories.71dfe2c8.iframe.bundle.js.map
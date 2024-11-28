"use strict";(self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[]).push([[9972],{"./src/components/Blocks/Cell/Cell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CellWithInfo:()=>CellWithInfo,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),storybook_controls__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/controls.ts"),components_Blocks_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Blocks/Avatar/Avatar.tsx"),components_Blocks_Badge_Badge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Blocks/Badge/Badge.tsx"),components_Blocks_Cell_components_Info_Info__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Blocks/Cell/components/Info/Info.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}let __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Cell",component:__webpack_require__("./src/components/Blocks/Cell/Cell.tsx").f,argTypes:_object_spread({},(0,storybook_controls__WEBPACK_IMPORTED_MODULE_2__.rI)("before","after","titleBadge"),(0,storybook_controls__WEBPACK_IMPORTED_MODULE_2__.w0)(["Component","subhead","subtitle","children","hint","description"],"text"))};var Playground={args:{subhead:"Subhead",children:"Title",subtitle:"Subtitle",description:"Description",titleBadge:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Blocks_Badge_Badge__WEBPACK_IMPORTED_MODULE_3__.E,{type:"dot"}),before:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Blocks_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__.e,{size:48}),after:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Blocks_Badge_Badge__WEBPACK_IMPORTED_MODULE_3__.E,{type:"number",children:"99"})}},CellWithInfo={args:{children:"Noah",subtitle:"Yesterday",before:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Blocks_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_4__.e,{size:48}),after:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Blocks_Cell_components_Info_Info__WEBPACK_IMPORTED_MODULE_5__.R,{type:"text",subtitle:"Received",children:"+1000"})}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    subhead: 'Subhead',\n    children: 'Title',\n    subtitle: 'Subtitle',\n    description: 'Description',\n    titleBadge: <Badge type=\"dot\" />,\n    before: <Avatar size={48} />,\n    after: <Badge type=\"number\">99</Badge>\n  }\n} satisfies Story",...Playground.parameters?.docs?.source}}},CellWithInfo.parameters={...CellWithInfo.parameters,docs:{...CellWithInfo.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Noah',\n    subtitle: 'Yesterday',\n    before: <Avatar size={48} />,\n    after: <Info type=\"text\" subtitle=\"Received\">+1000</Info>\n  }\n}",...CellWithInfo.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","CellWithInfo"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Blocks/Cell/components/Info/Info.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.Zep6VxAXVstinwYjEEoL {
  text-align: right;
}

.HV8fFz__j9nPy2HmKUPq {
  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--tgui--secondary_hint_color);
}

.Ve9tZuH63jzB3L3NhhA6 {
  margin: 2px 0 0;
  color: var(--tgui--hint_color);
}
`,"",{version:3,sources:["webpack://./src/components/Blocks/Cell/components/Info/Info.module.css"],names:[],mappings:"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;;EAET,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC",sourcesContent:[".wrapper--text {\n  text-align: right;\n}\n\n.wrapper--avatarStack {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  color: var(--tgui--secondary_hint_color);\n}\n\n.subtitle {\n  margin: 2px 0 0;\n  color: var(--tgui--hint_color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"wrapper--text":"Zep6VxAXVstinwYjEEoL","wrapper--avatarStack":"HV8fFz__j9nPy2HmKUPq",subtitle:"Ve9tZuH63jzB3L3NhhA6"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Blocks/Cell/components/Info/Info.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Info});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),Info_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Blocks/Cell/components/Info/Info.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Info_module.A,options);let Info_Info_module=Info_module.A&&Info_module.A.locals?Info_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts"),node=__webpack_require__("./src/helpers/react/node.ts"),Subheadline=__webpack_require__("./src/components/Typography/Subheadline/Subheadline.tsx"),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var typeStyles={text:Info_Info_module["wrapper--text"],avatarStack:Info_Info_module["wrapper--avatarStack"]},Info=function(_param){var _param_type=_param.type,type=void 0===_param_type?"text":_param_type,subtitle=_param.subtitle,avatarStack=_param.avatarStack,children=_param.children,className=_param.className,restProps=_object_without_properties(_param,["type","subtitle","avatarStack","children","className"]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",_object_spread_props(_object_spread({className:(0,classNames.x)(Info_Info_module.wrapper,typeStyles[type],className)},restProps),{children:["avatarStack"===type&&(0,node.G)(avatarStack)&&avatarStack,(0,node.G)(children)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text.E,{children:children}),"text"===type&&(0,node.G)(subtitle)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Subheadline.N,{className:Info_Info_module.subtitle,level:"2",plain:!1,children:subtitle})]}))};try{Info.displayName="Info",Info.__docgenInfo={description:"A versatile component designed to display either text information with an optional subtitle or a stack of avatars.\nIt adapts its structure based on the `type` prop, allowing for a wide range of use cases within user interfaces.",displayName:"Info",props:{type:{defaultValue:{value:"text"},description:"Determines the type of content to display, affecting the layout and styling.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"avatarStack"'}]}},subtitle:{defaultValue:null,description:"Text content for the component, utilized when the `type` is set to 'text'.",name:"subtitle",required:!1,type:{name:"string"}},avatarStack:{defaultValue:null,description:"An `AvatarStack` component to display when the `type` is 'avatarStack', showcasing multiple avatars.",name:"avatarStack",required:!1,type:{name:"ReactElement<AvatarStackProps, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Blocks/Cell/components/Info/Info.tsx#Info"]={docgenInfo:Info.__docgenInfo,name:"Info",path:"src/components/Blocks/Cell/components/Info/Info.tsx#Info"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Blocks-Cell-Cell-stories.a52bbd8c.iframe.bundle.js.map
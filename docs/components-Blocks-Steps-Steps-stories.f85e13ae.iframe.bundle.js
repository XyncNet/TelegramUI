"use strict";(self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[]).push([[5178],{"./src/components/Blocks/Steps/Steps.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Steps_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),Steps_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Blocks/Steps/Steps.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Steps_module.A,options);let Steps_Steps_module=Steps_module.A&&Steps_module.A.locals?Steps_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Steps=function(param){var className=param.className,count=param.count,progress=param.progress;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,classNames.x)(Steps_Steps_module.wrapper,className),children:Array.from({length:count},function(_,i){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,classNames.x)(Steps_Steps_module.step,_define_property({},Steps_Steps_module["step--active"],i<progress))},i)})})};try{Steps.displayName="Steps",Steps.__docgenInfo={description:"Renders a visual indicator of steps or progress in a process, such as a tutorial or a multi-step form.\nIt visually represents total steps and current progress.",displayName:"Steps",props:{count:{defaultValue:null,description:"Total number of steps.",name:"count",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"Current progress, indicating how many steps have been completed. Progress is 0-indexed and goes up to `count`.",name:"progress",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Blocks/Steps/Steps.tsx#Steps"]={docgenInfo:Steps.__docgenInfo,name:"Steps",path:"src/components/Blocks/Steps/Steps.tsx#Steps"})}catch(__react_docgen_typescript_loader_error){}let Steps_stories={title:"Blocks/Steps",component:Steps};var Playground={args:{count:10,progress:5}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    count: 10,\n    progress: 5\n  }\n} satisfies Story",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Blocks/Steps/Steps.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.vg4KgYa4iMx_K_dpQSaf {
  display: flex;
  gap: 9px;
  padding: 12px;
}

.tcDJAuHZfscTKsdmCSfQ {
  min-width: 3px;
  height: 3px;
  width: 100%;

  border-radius: 2px;
  background: var(--tgui--tertiary_bg_color);
}

.eGUPO5UKs_lpyw9au_4f {
  background: var(--tgui--link_color);
}
`,"",{version:3,sources:["webpack://./src/components/Blocks/Steps/Steps.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,cAAc;EACd,WAAW;EACX,WAAW;;EAEX,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,mCAAmC;AACrC",sourcesContent:[".wrapper {\n  display: flex;\n  gap: 9px;\n  padding: 12px;\n}\n\n.step {\n  min-width: 3px;\n  height: 3px;\n  width: 100%;\n\n  border-radius: 2px;\n  background: var(--tgui--tertiary_bg_color);\n}\n\n.step--active {\n  background: var(--tgui--link_color);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"vg4KgYa4iMx_K_dpQSaf",step:"tcDJAuHZfscTKsdmCSfQ","step--active":"eGUPO5UKs_lpyw9au_4f"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=components-Blocks-Steps-Steps-stories.f85e13ae.iframe.bundle.js.map
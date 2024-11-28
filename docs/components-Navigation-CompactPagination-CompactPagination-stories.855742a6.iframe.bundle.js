"use strict";(self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[]).push([[2738],{"./src/components/Navigation/CompactPagination/CompactPagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CompactPagination_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),controls=__webpack_require__("./src/storybook/controls.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),CompactPagination_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Navigation/CompactPagination/CompactPagination.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(CompactPagination_module.A,options);let CompactPagination_CompactPagination_module=CompactPagination_module.A&&CompactPagination_module.A.locals?CompactPagination_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts"),CompactPaginationItem=__webpack_require__("./src/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var modeStyles={default:void 0,ambient:CompactPagination_CompactPagination_module["wrapper--ambient"],white:CompactPagination_CompactPagination_module["wrapper--white"]},CompactPagination=function(_param){var _param_mode=_param.mode,children=_param.children,className=_param.className,restProps=_object_without_properties(_param,["mode","children","className"]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",_object_spread_props(_object_spread({role:"tablist",className:(0,classNames.x)(CompactPagination_CompactPagination_module.wrapper,modeStyles[void 0===_param_mode?"default":_param_mode],className)},restProps),{children:children}))};CompactPagination.Item=CompactPaginationItem.x;try{CompactPagination.displayName="CompactPagination",CompactPagination.__docgenInfo={description:"Displays a compact set of pagination controls. This component allows users to navigate\nbetween pages of content. It supports several themes for customization and can fit within various UI designs.",displayName:"CompactPagination",props:{mode:{defaultValue:{value:"default"},description:"Sets the color theme of the pagination.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"ambient"'},{value:'"white"'}]}},children:{defaultValue:null,description:"Contains pagination items.",name:"children",required:!1,type:{name:"ReactElement<CompactPaginationItemProps, string | JSXElementConstructor<any>>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/CompactPagination/CompactPagination.tsx#CompactPagination"]={docgenInfo:CompactPagination.__docgenInfo,name:"CompactPagination",path:"src/components/Navigation/CompactPagination/CompactPagination.tsx#CompactPagination"})}catch(__react_docgen_typescript_loader_error){}try{Item.displayName="CompactPagination.Item",Item.__docgenInfo={description:"",displayName:"CompactPagination.Item",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/CompactPagination/CompactPagination.tsx#CompactPagination.Item"]={docgenInfo:CompactPagination.Item.__docgenInfo,name:"CompactPagination.Item",path:"src/components/Navigation/CompactPagination/CompactPagination.tsx#CompactPagination.Item"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function CompactPagination_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CompactPagination_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CompactPagination_stories_define_property(target,key,source[key])})}return target}function CompactPagination_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CompactPagination_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CompactPagination_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let CompactPagination_stories={title:"Navigation/CompactPagination",component:CompactPagination,argTypes:(0,controls.rI)("children")};var paginationItems=Array.from({length:8},function(_,i){return i+1}),Playground={render:function(args){var _useState=_sliced_to_array((0,react.useState)(1),2),selected=_useState[0],setSelected=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"inline-flex",alignItems:"center",padding:20,background:"white"===args.mode?"var(--tgui--black)":"var(--tgui--secondary_bg_color)"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(CompactPagination,CompactPagination_stories_object_spread_props(CompactPagination_stories_object_spread({},args),{children:paginationItems.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(CompactPagination.Item,{onClick:function(){return setSelected(item)},selected:item===selected,children:item},item)})}))})}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const [selected, setSelected] = useState(1);\n    return <div style={{\n      display: 'inline-flex',\n      alignItems: 'center',\n      padding: 20,\n      background: args.mode === 'white' ? 'var(--tgui--black)' : 'var(--tgui--secondary_bg_color)'\n    }}>\n        <CompactPagination {...args}>\n          {paginationItems.map(item => <CompactPagination.Item key={item} onClick={() => setSelected(item)} selected={item === selected}>\n              {item}\n            </CompactPagination.Item>)}\n        </CompactPagination>\n      </div>;\n  }\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Navigation/CompactPagination/CompactPagination.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.oT9AWUq6IjukjdaCchHf {
  --tgui--compact_pagination--dot--opacity--selected: .1;
  --tgui--compact_pagination--dot--background--selected: var(--tgui--link_color);

  display: inline-flex;
  gap: 8px;
  padding: 4px;
}

.gcQQyJSkKZIvjfh5fEoW {
  --tgui--compact_pagination--dot--opacity--selected: .25;
  --tgui--compact_pagination--dot--background--selected: var(--tgui--white);

  padding: 8px 9px;
  gap: 6px;
  border-radius: 28px;
  background: rgba(0, 0, 0, .25);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}

.pLy3h1Shl0fdJXRlgq97 {
  --tgui--compact_pagination--dot--opacity--selected: .25;
  --tgui--compact_pagination--dot--background--selected: var(--tgui--white);

  gap: 6px;
  padding: 0;
}

`,"",{version:3,sources:["webpack://./src/components/Navigation/CompactPagination/CompactPagination.module.css"],names:[],mappings:"AAAA;EACE,sDAAsD;EACtD,8EAA8E;;EAE9E,oBAAoB;EACpB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,uDAAuD;EACvD,yEAAyE;;EAEzE,gBAAgB;EAChB,QAAQ;EACR,mBAAmB;EACnB,8BAA8B;EAC9B,2BAA2B;EAC3B,mCAAmC;AACrC;;AAEA;EACE,uDAAuD;EACvD,yEAAyE;;EAEzE,QAAQ;EACR,UAAU;AACZ",sourcesContent:[".wrapper {\n  --tgui--compact_pagination--dot--opacity--selected: .1;\n  --tgui--compact_pagination--dot--background--selected: var(--tgui--link_color);\n\n  display: inline-flex;\n  gap: 8px;\n  padding: 4px;\n}\n\n.wrapper--ambient {\n  --tgui--compact_pagination--dot--opacity--selected: .25;\n  --tgui--compact_pagination--dot--background--selected: var(--tgui--white);\n\n  padding: 8px 9px;\n  gap: 6px;\n  border-radius: 28px;\n  background: rgba(0, 0, 0, .25);\n  backdrop-filter: blur(22px);\n  -webkit-backdrop-filter: blur(22px);\n}\n\n.wrapper--white {\n  --tgui--compact_pagination--dot--opacity--selected: .25;\n  --tgui--compact_pagination--dot--background--selected: var(--tgui--white);\n\n  gap: 6px;\n  padding: 0;\n}\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"oT9AWUq6IjukjdaCchHf","wrapper--ambient":"gcQQyJSkKZIvjfh5fEoW","wrapper--white":"pLy3h1Shl0fdJXRlgq97"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.fn8q8Oy361moCNgB0pzn {
  cursor: pointer;
  display: block;

  width: 8px;
  height: 8px;

  padding: 0;
  border: none;
  border-radius: 50%;

  transition: opacity .15s ease-in-out;
  opacity: var(--tgui--compact_pagination--dot--opacity--selected, .25);
  background: var(--tgui--compact_pagination--dot--background--selected, var(--tgui--link_color));
}

.EUjGFv9Hxhi_LfO3bbiP {
  opacity: 1;
}
`,"",{version:3,sources:["webpack://./src/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem.module.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,cAAc;;EAEd,UAAU;EACV,WAAW;;EAEX,UAAU;EACV,YAAY;EACZ,kBAAkB;;EAElB,oCAAoC;EACpC,qEAAqE;EACrE,+FAA+F;AACjG;;AAEA;EACE,UAAU;AACZ",sourcesContent:[".wrapper {\n  cursor: pointer;\n  display: block;\n\n  width: 8px;\n  height: 8px;\n\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n\n  transition: opacity .15s ease-in-out;\n  opacity: var(--tgui--compact_pagination--dot--opacity--selected, .25);\n  background: var(--tgui--compact_pagination--dot--background--selected, var(--tgui--link_color));\n}\n\n.wrapper--selected {\n  opacity: 1;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"fn8q8Oy361moCNgB0pzn","wrapper--selected":"EUjGFv9Hxhi_LfO3bbiP"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Service/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.HXIjtDnRLm959QWBIaJz {
  position: absolute;
  block-size: 1px;
  inline-size: 1px;
  padding: 0;
  margin: -1px;
  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  overflow: hidden;
  border: 0;
  opacity: 0;
}
`,"",{version:3,sources:["webpack://./src/components/Service/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ",sourcesContent:[".wrapper {\n  position: absolute;\n  block-size: 1px;\n  inline-size: 1px;\n  padding: 0;\n  margin: -1px;\n  white-space: nowrap;\n  clip: rect(0, 0, 0, 0);\n  clip-path: inset(50%);\n  overflow: hidden;\n  border: 0;\n  opacity: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"HXIjtDnRLm959QWBIaJz"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>CompactPaginationItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),CompactPaginationItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(CompactPaginationItem_module.A,options);let CompactPaginationItem_CompactPaginationItem_module=CompactPaginationItem_module.A&&CompactPaginationItem_module.A.locals?CompactPaginationItem_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts"),node=__webpack_require__("./src/helpers/react/node.ts"),VisuallyHidden=__webpack_require__("./src/components/Service/VisuallyHidden/VisuallyHidden.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CompactPaginationItem=function(_param){var selected=_param.selected,className=_param.className,children=_param.children,restProps=_object_without_properties(_param,["selected","className","children"]);return/*#__PURE__*/(0,jsx_runtime.jsx)("button",_object_spread_props(_object_spread({type:"button",role:"tab","aria-selected":selected,className:(0,classNames.x)(CompactPaginationItem_CompactPaginationItem_module.wrapper,selected&&CompactPaginationItem_CompactPaginationItem_module["wrapper--selected"],className)},restProps),{children:(0,node.G)(children)?/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:children}):void 0}))};try{CompactPaginationItem.displayName="CompactPaginationItem",CompactPaginationItem.__docgenInfo={description:"",displayName:"CompactPaginationItem",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem.tsx#CompactPaginationItem"]={docgenInfo:CompactPaginationItem.__docgenInfo,name:"CompactPaginationItem",path:"src/components/Navigation/CompactPagination/components/CompactPaginationItem/CompactPaginationItem.tsx#CompactPaginationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Service/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>VisuallyHidden});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),VisuallyHidden_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Service/VisuallyHidden/VisuallyHidden.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(VisuallyHidden_module.A,options);let VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.A&&VisuallyHidden_module.A.locals?VisuallyHidden_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var VisuallyHidden=/*#__PURE__*/(0,react.forwardRef)(function(_param,ref){var _param_Component=_param.Component,className=_param.className,restProps=_object_without_properties(_param,["Component","className"]);return/*#__PURE__*/(0,jsx_runtime.jsx)(void 0===_param_Component?"span":_param_Component,_object_spread_props(_object_spread({},restProps),{ref:ref,className:(0,classNames.x)(VisuallyHidden_VisuallyHidden_module.wrapper,className)}))});try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Service/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/Service/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/react/node.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>hasReactNode,l:()=>isPrimitiveReactNode});var hasReactNode=function(value){return void 0!==value&&!1!==value&&null!==value&&""!==value};function isPrimitiveReactNode(node){return"string"==typeof node||"number"==typeof node}},"./src/storybook/controls.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rI:()=>hideControls,w0:()=>setControlsTypes});var setControlsTypes=function(controls,type){return controls.reduce(function(acc,control){return acc[control]={control:{type:type}},acc},{})},hideControls=function(){for(var _len=arguments.length,controls=Array(_len),_key=0;_key<_len;_key++)controls[_key]=arguments[_key];return setControlsTypes(controls,null)}}}]);
//# sourceMappingURL=components-Navigation-CompactPagination-CompactPagination-stories.855742a6.iframe.bundle.js.map
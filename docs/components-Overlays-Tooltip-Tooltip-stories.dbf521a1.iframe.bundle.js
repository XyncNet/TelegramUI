"use strict";(self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[]).push([[2231],{"./src/components/Overlays/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),controls=__webpack_require__("./src/storybook/controls.ts"),Button=__webpack_require__("./src/components/Blocks/Button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),Tooltip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Overlays/Tooltip/Tooltip.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Tooltip_module.A,options);let Tooltip_Tooltip_module=Tooltip_module.A&&Tooltip_module.A.locals?Tooltip_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts"),Popper=__webpack_require__("./src/components/Overlays/Popper/Popper.tsx"),Caption=__webpack_require__("./src/components/Typography/Caption/Caption.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Tooltip=function(_param){var _param_mode=_param.mode,children=_param.children,className=_param.className,arrowProps=_param.arrowProps,restProps=_object_without_properties(_param,["mode","children","className","arrowProps"]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Popper.N,_object_spread_props(_object_spread({withArrow:!0,arrowProps:_object_spread_props(_object_spread({},arrowProps),{className:(0,classNames.x)(Tooltip_Tooltip_module.arrow,null==arrowProps?void 0:arrowProps.className)}),className:(0,classNames.x)(Tooltip_Tooltip_module.wrapper,"dark"===(void 0===_param_mode?"light":_param_mode)&&Tooltip_Tooltip_module["wrapper--dark"],className)},restProps),{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Caption.H,{level:"1",children:children})}))};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"The Tooltip component provides text labels that appear when the user hovers over, focuses on,\nor touches an element. It's built on top of the Popper component for automatic positioning\nrelative to the target element. The tooltip supports light and dark modes for different visual\ncontexts and uses the Caption component for its content to ensure consistent typography.",displayName:"Tooltip",props:{mode:{defaultValue:{value:"light"},description:"Defines the theme of the tooltip, affecting its background and text color.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},targetRef:{defaultValue:null,description:"Reference to the target element or virtual element for precise positioning.",name:"targetRef",required:!0,type:{name:"RefObject<HTMLElement> | VirtualElement"}},arrowProps:{defaultValue:null,description:"Configuration and customization options for the floating arrow component.",name:"arrowProps",required:!1,type:{name:"(FloatingArrowProps & { height?: number; padding?: number; }) | undefined"}},ArrowIcon:{defaultValue:null,description:"Optional custom component for the arrow icon, replacing the default.",name:"ArrowIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},Component:{defaultValue:null,description:"Defines the root element type of the Popper, allowing for semantic customization.",name:"Component",required:!1,type:{name:"ElementType"}},autoUpdateOnTargetResize:{defaultValue:null,description:"Opt-in feature to automatically update Popper's position when the target element resizes.",name:"autoUpdateOnTargetResize",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"By default, the component will automatically choose the best placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},offsetByMainAxis:{defaultValue:null,description:"Offset along the main axis.",name:"offsetByMainAxis",required:!1,type:{name:"number"}},offsetByCrossAxis:{defaultValue:null,description:"Offset along the cross axis.",name:"offsetByCrossAxis",required:!1,type:{name:"number"}},withArrow:{defaultValue:null,description:"Whether to display an arrow pointing to the anchor element.",name:"withArrow",required:!1,type:{name:"boolean"}},sameWidth:{defaultValue:null,description:"Sets the width to match the target element.",name:"sameWidth",required:!1,type:{name:"boolean"}},customMiddlewares:{defaultValue:null,description:"An array of custom modifiers for Popper (should be memoized).",name:"customMiddlewares",required:!1,type:{name:"{ name: string; options?: any; fn: (state: { placement: Placement; x: number; y: number; initialPlacement: Placement; strategy: Strategy; middlewareData: MiddlewareData; rects: ElementRects; platform: Platform; elements: Elements; }) => Promisable<...>; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlays/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Overlays/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function Tooltip_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Tooltip_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Tooltip_stories_define_property(target,key,source[key])})}return target}function Tooltip_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Tooltip_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tooltip_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let Tooltip_stories={title:"Overlays/Tooltip",component:Tooltip,argTypes:(0,controls.rI)("ArrowIcon","targetRef","arrowProps","Component","customMiddlewares"),parameters:{layout:"centered"}};var Playground={args:{mode:"light",targetRef:{current:null}},render:function(args){var ref=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!0),2),shown=_useState[0],setShown=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button.$,{style:{width:100},ref:ref,onClick:function(){return setShown(!shown)},children:shown?"Hide":"Show"}),shown&&/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip,Tooltip_stories_object_spread_props(Tooltip_stories_object_spread({},args),{targetRef:ref,children:"Hold to record audio. Tap to switch to video."}))]})},decorators:[function(StoryComponent){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:280,height:300},children:/*#__PURE__*/(0,jsx_runtime.jsx)(StoryComponent,{})})}]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    mode: 'light',\n    targetRef: {\n      current: null\n    }\n  },\n  render: args => {\n    const ref = useRef(null);\n    const [shown, setShown] = useState(true);\n    return <>\n        <Button style={{\n        width: 100\n      }} ref={ref} onClick={() => setShown(!shown)}>\n          {shown ? 'Hide' : 'Show'}\n        </Button>\n        {shown && <Tooltip {...args} targetRef={ref}>\n            Hold to record audio. Tap to switch to video.\n          </Tooltip>}\n      </>;\n  },\n  decorators: [StoryComponent => <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    width: 280,\n    height: 300\n  }}>\n      <StoryComponent />\n    </div>]\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Overlays/Tooltip/Tooltip.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.XCMyWXoc7Jq_6aBt27Dk {
  padding: 10px;
  border-radius: 12px;
  color: var(--tgui--black);
  background: var(--tgui--white);
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .10);
}

.osZGPyNrqYU1XMN_raIU {
  box-shadow: none;
  color: var(--tgui--white);
  background: var(--tooltip_background_dark);
}

.XCMyWXoc7Jq_6aBt27Dk .HLWloAMJRwmHnTaeS_Q3 {
  color: var(--tgui--white);
}

.osZGPyNrqYU1XMN_raIU .HLWloAMJRwmHnTaeS_Q3 {
  color: var(--tooltip_background_dark);
}

.rUh6OrL_41_1d2GRIxLQ .osZGPyNrqYU1XMN_raIU {
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}
`,"",{version:3,sources:["webpack://./src/components/Overlays/Tooltip/Tooltip.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,0CAA0C;AAC5C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,2BAA2B;EAC3B,mCAAmC;AACrC",sourcesContent:[".wrapper {\n  padding: 10px;\n  border-radius: 12px;\n  color: var(--tgui--black);\n  background: var(--tgui--white);\n  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .10);\n}\n\n.wrapper--dark {\n  box-shadow: none;\n  color: var(--tgui--white);\n  background: var(--tooltip_background_dark);\n}\n\n.wrapper .arrow {\n  color: var(--tgui--white);\n}\n\n.wrapper--dark .arrow {\n  color: var(--tooltip_background_dark);\n}\n\n.wrapper--ios .wrapper--dark {\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"XCMyWXoc7Jq_6aBt27Dk","wrapper--dark":"osZGPyNrqYU1XMN_raIU",arrow:"HLWloAMJRwmHnTaeS_Q3","wrapper--ios":"rUh6OrL_41_1d2GRIxLQ"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Typography/Caption/Caption.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.ut6lPxAAagGyieRM8_HP {
  font-size: var(--tgui--caption1--font_size);
  line-height: var(--tgui--caption1--line_height);
}

.D0ZTwne7jVQR1pI_H7wQ {
  font-size: var(--tgui--caption2--font_size);
  line-height: var(--tgui--caption2--line_height);
}
`,"",{version:3,sources:["webpack://./src/components/Typography/Caption/Caption.module.css"],names:[],mappings:"AAAA;EACE,2CAA2C;EAC3C,+CAA+C;AACjD;;AAEA;EACE,2CAA2C;EAC3C,+CAA+C;AACjD",sourcesContent:[".wrapper--1 {\n  font-size: var(--tgui--caption1--font_size);\n  line-height: var(--tgui--caption1--line_height);\n}\n\n.wrapper--2 {\n  font-size: var(--tgui--caption2--font_size);\n  line-height: var(--tgui--caption2--line_height);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"wrapper--1":"ut6lPxAAagGyieRM8_HP","wrapper--2":"D0ZTwne7jVQR1pI_H7wQ"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Typography/Caption/Caption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Caption});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),Caption_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Typography/Caption/Caption.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Caption_module.A,options);let Caption_Caption_module=Caption_module.A&&Caption_module.A.locals?Caption_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var captionLevelStyles={1:Caption_Caption_module["wrapper--1"],2:Caption_Caption_module["wrapper--2"]},Caption=function(_param){var _param_level=_param.level,className=_param.className,Component=_param.Component,restProps=_object_without_properties(_param,["level","className","Component"]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Typography.o,_object_spread_props(_object_spread({},restProps),{className:(0,classNames.x)(Caption_Caption_module.wrapper,captionLevelStyles[void 0===_param_level?"1":_param_level],className),Component:Component||"span"}))};try{Caption.displayName="Caption",Caption.__docgenInfo={description:"The Caption component is a text wrapper that applies specific typographic styles,\nbased on the provided `level` prop. It's built on top of the Typography component,\nensuring consistent text styling across the application. It primarily serves for text\nthat acts as a small, descriptive label or annotation.",displayName:"Caption",props:{level:{defaultValue:{value:"1"},description:"The size level of the caption, influencing its styling and typography size.",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},Component:{defaultValue:null,description:"Specifies the HTML tag or React component used to render the text, defaulting to `span`.",name:"Component",required:!1,type:{name:"ElementType"}},weight:{defaultValue:null,description:"Controls the font weight of the text, with options ranging from light to bold.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},caps:{defaultValue:null,description:"If true, transforms the text to uppercase for stylistic emphasis.",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Caption/Caption.tsx#Caption"]={docgenInfo:Caption.__docgenInfo,name:"Caption",path:"src/components/Typography/Caption/Caption.tsx#Caption"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Overlays-Tooltip-Tooltip-stories.dbf521a1.iframe.bundle.js.map
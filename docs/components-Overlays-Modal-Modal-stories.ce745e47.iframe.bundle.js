"use strict";(self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[]).push([[8947],{"./src/components/Overlays/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,NestedModals:()=>NestedModals,Playground:()=>Playground,SnapPoints:()=>SnapPoints,WithCloseButton:()=>WithCloseButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),_28_close=__webpack_require__("./src/icons/28/close.tsx"),controls=__webpack_require__("./src/storybook/controls.ts"),Button=__webpack_require__("./src/components/Blocks/Button/Button.tsx"),Placeholder=__webpack_require__("./src/components/Blocks/Placeholder/Placeholder.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=/*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=/*#__PURE__*/__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=/*#__PURE__*/__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=/*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=/*#__PURE__*/__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=/*#__PURE__*/__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Overlays/Modal/Modal.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Modal_module.A,options);let Modal_Modal_module=Modal_module.A&&Modal_module.A.locals?Modal_module.A.locals:void 0;var classNames=__webpack_require__("./src/helpers/classNames.ts"),useAppRootContext=__webpack_require__("./src/hooks/useAppRootContext.ts"),dist=__webpack_require__("./node_modules/@xelene/vaul-with-scroll-fix/dist/index.mjs"),ModalClose=__webpack_require__("./src/components/Overlays/Modal/components/ModalClose/ModalClose.tsx"),ModalHeader=__webpack_require__("./src/components/Overlays/Modal/components/ModalHeader/ModalHeader.tsx"),ModalOverlay_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Overlays/Modal/components/ModalOverlay/ModalOverlay.module.css"),ModalOverlay_module_options={};ModalOverlay_module_options.styleTagTransform=styleTagTransform_default(),ModalOverlay_module_options.setAttributes=setAttributesWithoutAttributes_default(),ModalOverlay_module_options.insert=insertBySelector_default().bind(null,"head"),ModalOverlay_module_options.domAPI=styleDomAPI_default(),ModalOverlay_module_options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(ModalOverlay_module.A,ModalOverlay_module_options);let ModalOverlay_ModalOverlay_module=ModalOverlay_module.A&&ModalOverlay_module.A.locals?ModalOverlay_module.A.locals:void 0;var hexToRGB=function(hex){var fullHex=hex;4===hex.length&&(fullHex=hex.replace(/([^#])/g,"$1$1"));var bigint=parseInt(fullHex.replace("#",""),16);return[255&bigint>>16,255&bigint>>8,255&bigint]},telegram=__webpack_require__("./src/helpers/telegram.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DEFAULT_LIGHT_OVERLAY_RGB=[255,255,255],DEFAULT_DARK_OVERLAY_RGB=[33,33,33],ModalOverlay=/*#__PURE__*/(0,react.forwardRef)(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]),context=(0,useAppRootContext.a)(),_useMemo=_sliced_to_array((0,react.useMemo)(function(){var telegramData=(0,telegram.i)();return telegramData&&telegramData.themeParams.bg_color?hexToRGB(telegramData.themeParams.bg_color):"light"===context.appearance?DEFAULT_LIGHT_OVERLAY_RGB:DEFAULT_DARK_OVERLAY_RGB},[context.appearance]),3),r=_useMemo[0],g=_useMemo[1],b=_useMemo[2];return/*#__PURE__*/(0,jsx_runtime.jsx)(dist._.Overlay,_object_spread({ref:ref,style:{background:"rgba(".concat(r,", ").concat(g,", ").concat(b,", .4)")},className:(0,classNames.x)(ModalOverlay_ModalOverlay_module.wrapper,className)},props))});try{ModalOverlay.displayName="ModalOverlay",ModalOverlay.__docgenInfo={description:"",displayName:"ModalOverlay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlays/Modal/components/ModalOverlay/ModalOverlay.tsx#ModalOverlay"]={docgenInfo:ModalOverlay.__docgenInfo,name:"ModalOverlay",path:"src/components/Overlays/Modal/components/ModalOverlay/ModalOverlay.tsx#ModalOverlay"})}catch(__react_docgen_typescript_loader_error){}function Modal_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Modal_array_with_holes(arr){if(Array.isArray(arr))return arr}function Modal_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Modal_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Modal_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Modal_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Modal_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Modal_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=Modal_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Modal_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Modal_sliced_to_array(arr,i){return Modal_array_with_holes(arr)||Modal_iterable_to_array_limit(arr,i)||Modal_unsupported_iterable_to_array(arr,i)||Modal_non_iterable_rest()}function Modal_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Modal_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Modal_array_like_to_array(o,minLen)}}var Modal=/*#__PURE__*/(0,react.forwardRef)(function(_param,ref){var _container_portalContainer,_param_overlayComponent=_param.overlayComponent,overlayComponent=void 0===_param_overlayComponent?/*#__PURE__*/(0,jsx_runtime.jsx)(ModalOverlay,{}):_param_overlayComponent,open=_param.open,onOpenChange=_param.onOpenChange,header=_param.header,className=_param.className,children=_param.children,nested=_param.nested,trigger=_param.trigger,closeThreshold=_param.closeThreshold,scrollLockTimeout=_param.scrollLockTimeout,snapPoints=_param.snapPoints,fadeFromIndex=_param.fadeFromIndex,modal=_param.modal,preventScrollRestoration=_param.preventScrollRestoration,dismissible=_param.dismissible,restProps=Modal_object_without_properties(_param,["overlayComponent","open","onOpenChange","header","className","children","nested","trigger","closeThreshold","scrollLockTimeout","snapPoints","fadeFromIndex","modal","preventScrollRestoration","dismissible"]),container=(0,useAppRootContext.a)(),_useState=Modal_sliced_to_array((0,react.useState)(null===(_container_portalContainer=container.portalContainer)||void 0===_container_portalContainer?void 0:_container_portalContainer.current),2),portal=_useState[0],setPortal=_useState[1];(0,react.useEffect)(function(){var _container_portalContainer;setPortal(null===(_container_portalContainer=container.portalContainer)||void 0===_container_portalContainer?void 0:_container_portalContainer.current)},[container.portalContainer]);var Component=nested?dist._.NestedRoot:dist._.Root;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,{open:open,onOpenChange:onOpenChange,closeThreshold:closeThreshold,scrollLockTimeout:scrollLockTimeout,snapPoints:snapPoints,fadeFromIndex:fadeFromIndex,modal:modal,preventScrollRestoration:preventScrollRestoration,dismissible:dismissible,children:[trigger&&/*#__PURE__*/(0,jsx_runtime.jsx)(dist._.Trigger,{asChild:!0,children:trigger}),/*#__PURE__*/(0,jsx_runtime.jsxs)(dist._.Portal,{container:portal,children:[overlayComponent,/*#__PURE__*/(0,jsx_runtime.jsxs)(dist._.Content,_object_spread_props(Modal_object_spread({ref:ref,className:(0,classNames.x)(Modal_Modal_module.wrapper,className)},restProps),{children:[header,/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.body,children:children})]}))]})]})});Modal.Header=ModalHeader.r,Modal.Overlay=ModalOverlay,Modal.Close=ModalClose.O;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"Modal component, providing a flexible dialog framework with customizable content and interaction models.\nIt leverages the Drawer component from 'vaul' for its base functionality, enhanced with additional properties\nand behaviors specific to modal dialogues, such as overlay management and nested modals.",displayName:"Modal",props:{open:{defaultValue:null,description:"Controls the displayed state of the modal, enabling external management.",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback fired upon state change, facilitating open/close state synchronization.",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},header:{defaultValue:null,description:"Custom header component to display at the top of the modal.",name:"header",required:!1,type:{name:"ReactNode"}},overlayComponent:{defaultValue:null,description:"Custom component for the modal's overlay backdrop.",name:"overlayComponent",required:!1,type:{name:"ReactNode"}},trigger:{defaultValue:null,description:"Component or element used to trigger the modal's visibility.",name:"trigger",required:!1,type:{name:"ReactNode"}},nested:{defaultValue:null,description:"Enables nesting within another drawer component, allowing for hierarchical structures.",name:"nested",required:!1,type:{name:"boolean"}},closeThreshold:{defaultValue:null,description:"Threshold for swipe actions to trigger modal closure, expressed as a decimal between 0 and 1.",name:"closeThreshold",required:!1,type:{name:"number"}},scrollLockTimeout:{defaultValue:null,description:"Debounce duration after scrolling within the modal before it can be closed through swipe actions.",name:"scrollLockTimeout",required:!1,type:{name:"number"}},modal:{defaultValue:null,description:"Governs interaction with background elements when the modal is open.",name:"modal",required:!1,type:{name:"boolean"}},preventScrollRestoration:{defaultValue:null,description:"Prevents automatic scroll position restoration when the modal closes, preserving user context.",name:"preventScrollRestoration",required:!1,type:{name:"boolean"}},snapPoints:{defaultValue:null,description:"Defines snap points for modal positioning, supporting percentages of screen height or pixel values.",name:"snapPoints",required:!1,type:{name:"(string | number)[]"}},fadeFromIndex:{defaultValue:null,description:"Snap point index at which the overlay begins to fade, enhancing visual cues for modal depth.",name:"fadeFromIndex",required:!1,type:{name:"undefined"}},dismissible:{defaultValue:null,description:"Determines if the modal can be closed by user interactions",name:"dismissible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlays/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Overlays/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}function Modal_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Modal_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Modal_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Modal_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Modal_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Modal_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Modal_stories_define_property(target,key,source[key])})}return target}function Modal_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Modal_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Modal_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Modal_stories_sliced_to_array(arr,i){return Modal_stories_array_with_holes(arr)||Modal_stories_iterable_to_array_limit(arr,i)||Modal_stories_unsupported_iterable_to_array(arr,i)||Modal_stories_non_iterable_rest()}function Modal_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Modal_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Modal_stories_array_like_to_array(o,minLen)}}let Modal_stories={title:"Overlays/Modal",component:Modal,argTypes:(0,controls.rI)("header","trigger","children","overlayComponent","snapPoints","fadeFromIndex")};var DecoratorFullScreen=function(StoryComponent){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:600,maxHeight:"96vh"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(StoryComponent,{})})},Playground={args:{header:/*#__PURE__*/(0,jsx_runtime.jsx)(Modal.Header,{children:"Only iOS header"}),trigger:/*#__PURE__*/(0,jsx_runtime.jsx)(Button.$,{size:"m",children:"Open modal"}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Placeholder.O,{header:"Title",description:"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{alt:"Telegram sticker",src:"https://xelene.me/telegram.gif",style:{display:"block",width:"144px",height:"144px"}})})},decorators:[DecoratorFullScreen]},PlaceholderForNestedModal=function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Placeholder.O,{header:"Title",description:"Description",action:/*#__PURE__*/(0,jsx_runtime.jsx)(Modal,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{nested:!0,children:/*#__PURE__*/(0,jsx_runtime.jsx)(PlaceholderForNestedModal,Modal_stories_object_spread({},props))}))})},NestedModals={args:Playground.args,render:function(args){return/*#__PURE__*/(0,jsx_runtime.jsx)(Modal,Modal_stories_object_spread_props(Modal_stories_object_spread({},args),{children:/*#__PURE__*/(0,jsx_runtime.jsx)(PlaceholderForNestedModal,Modal_stories_object_spread({trigger:args.trigger},args))}))},decorators:[DecoratorFullScreen]},WithCloseButton={args:Modal_stories_object_spread_props(Modal_stories_object_spread({},Playground.args),{header:/*#__PURE__*/(0,jsx_runtime.jsx)(Modal.Header,{after:/*#__PURE__*/(0,jsx_runtime.jsx)(Modal.Close,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(_28_close.i,{style:{color:"var(--tgui--plain_foreground)"}})}),children:"Only iOS header"})}),decorators:[DecoratorFullScreen]},SnapPoints={args:Modal_stories_object_spread_props(Modal_stories_object_spread({},Playground.args),{snapPoints:[.33,.66,1],children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{height:"33vh",background:"blue"}}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{height:"33vh",background:"green"}}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{height:"33vh",background:"bisque"}})]})}),decorators:[DecoratorFullScreen]},Controlled={args:Modal_stories_object_spread({},Playground.args),render:function(args){var _useState=Modal_stories_sliced_to_array((0,react.useState)(args.open),2),isOpen=_useState[0],setIsOpen=_useState[1],_useState1=Modal_stories_sliced_to_array((0,react.useState)(!1),2),isFetching=_useState1[0],setIsFetching=_useState1[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(Placeholder.O,{header:"This modal will be closed after 1000ms, click fetch",description:"Click fetch",action:/*#__PURE__*/(0,jsx_runtime.jsx)(Button.$,{size:"m",onClick:function(){return setIsOpen(!0)},children:"Open again"}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Modal,Modal_stories_object_spread_props(Modal_stories_object_spread({},args),{trigger:void 0,open:isOpen,onOpenChange:setIsOpen,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Placeholder.O,{action:/*#__PURE__*/(0,jsx_runtime.jsx)(Button.$,{size:"m",loading:isFetching,onClick:function(){setIsFetching(!0),setTimeout(function(){setIsFetching(!1),setIsOpen(!1)},1e3)},children:"Fetch data and close"})})}))})},decorators:[DecoratorFullScreen]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  args: {\n    header: <Modal.Header>Only iOS header</Modal.Header>,\n    trigger: <Button size="m">Open modal</Button>,\n    children: <Placeholder header="Title" description="Description">\n        <img alt="Telegram sticker" src="https://xelene.me/telegram.gif" style={{\n        display: \'block\',\n        width: \'144px\',\n        height: \'144px\'\n      }} />\n      </Placeholder>\n  },\n  decorators: [DecoratorFullScreen]\n}',...Playground.parameters?.docs?.source}}},NestedModals.parameters={...NestedModals.parameters,docs:{...NestedModals.parameters?.docs,source:{originalSource:"{\n  args: Playground.args,\n  render: args => <Modal {...args}>\n      <PlaceholderForNestedModal trigger={args.trigger} {...args} />\n    </Modal>,\n  decorators: [DecoratorFullScreen]\n}",...NestedModals.parameters?.docs?.source}}},WithCloseButton.parameters={...WithCloseButton.parameters,docs:{...WithCloseButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Playground.args,\n    header: <Modal.Header after={<Modal.Close><Icon28Close style={{\n        color: 'var(--tgui--plain_foreground)'\n      }} /></Modal.Close>}>\n        Only iOS header\n      </Modal.Header>\n  },\n  decorators: [DecoratorFullScreen]\n}",...WithCloseButton.parameters?.docs?.source}}},SnapPoints.parameters={...SnapPoints.parameters,docs:{...SnapPoints.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Playground.args,\n    snapPoints: [0.33, 0.66, 1],\n    children: <>\n        <div style={{\n        height: '33vh',\n        background: 'blue'\n      }} />\n        <div style={{\n        height: '33vh',\n        background: 'green'\n      }} />\n        <div style={{\n        height: '33vh',\n        background: 'bisque'\n      }} />\n      </>\n  },\n  decorators: [DecoratorFullScreen]\n}",...SnapPoints.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Playground.args\n  },\n  render: args => {\n    const [isOpen, setIsOpen] = useState(args.open);\n    const [isFetching, setIsFetching] = useState(false);\n    const fetchAndClose = () => {\n      setIsFetching(true);\n      setTimeout(() => {\n        setIsFetching(false);\n        setIsOpen(false);\n      }, 1000);\n    };\n    return <Placeholder header="This modal will be closed after 1000ms, click fetch" description="Click fetch" action={<Button size="m" onClick={() => setIsOpen(true)}>Open again</Button>}>\n        <Modal {...args} trigger={undefined} open={isOpen} onOpenChange={setIsOpen}>\n          <Placeholder action={<Button size="m" loading={isFetching} onClick={fetchAndClose}>\n              Fetch data and close\n            </Button>} />\n        </Modal>\n      </Placeholder>;\n  },\n  decorators: [DecoratorFullScreen]\n}',...Controlled.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","NestedModals","WithCloseButton","SnapPoints","Controlled"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Overlays/Modal/Modal.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.kvv0AtN99Gql_GZx0jlU {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 96%;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  display: flex;
  flex-direction: column;

  outline: none;
  background-color: var(--tgui--bg_color);
  z-index: var(--tgui--z-index--overlay);
}

.ByCAR9wHGANUiDRVUS2F {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  border-bottom: 1px solid var(--tgui--divider);
}

.eLMrkmOb7URfRimbEIXC {
  overflow-y: auto;
  padding-bottom: var(--tgui--safe_area_inset_bottom);
}
`,"",{version:3,sources:["webpack://./src/components/Overlays/Modal/Modal.module.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,eAAe;;EAEf,4BAA4B;EAC5B,6BAA6B;;EAE7B,aAAa;EACb,sBAAsB;;EAEtB,aAAa;EACb,uCAAuC;EACvC,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;;EAEnB,aAAa;EACb,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,mDAAmD;AACrD",sourcesContent:[".wrapper {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  max-height: 96%;\n\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n\n  display: flex;\n  flex-direction: column;\n\n  outline: none;\n  background-color: var(--tgui--bg_color);\n  z-index: var(--tgui--z-index--overlay);\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 16px;\n  border-bottom: 1px solid var(--tgui--divider);\n}\n\n.body {\n  overflow-y: auto;\n  padding-bottom: var(--tgui--safe_area_inset_bottom);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"kvv0AtN99Gql_GZx0jlU",header:"ByCAR9wHGANUiDRVUS2F",body:"eLMrkmOb7URfRimbEIXC"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Overlays/Modal/components/ModalOverlay/ModalOverlay.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.DOXG0zVwcKTQ7Y_b2FE2 {
  position: fixed;
  inset: 0;
  z-index: var(--tgui--z-index--overlay);
}
`,"",{version:3,sources:["webpack://./src/components/Overlays/Modal/components/ModalOverlay/ModalOverlay.module.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,QAAQ;EACR,sCAAsC;AACxC",sourcesContent:[".wrapper {\n  position: fixed;\n  inset: 0;\n  z-index: var(--tgui--z-index--overlay);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"DOXG0zVwcKTQ7Y_b2FE2"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Overlays/Modal/components/ModalClose/ModalClose.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ModalClose});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_xelene_vaul_with_scroll_fix__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@xelene/vaul-with-scroll-fix/dist/index.mjs");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var ModalClose=function(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_xelene_vaul_with_scroll_fix__WEBPACK_IMPORTED_MODULE_1__._.Close,_object_spread({asChild:!0},props))};try{ModalClose.displayName="ModalClose",ModalClose.__docgenInfo={description:"",displayName:"ModalClose",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlays/Modal/components/ModalClose/ModalClose.tsx#ModalClose"]={docgenInfo:ModalClose.__docgenInfo,name:"ModalClose",path:"src/components/Overlays/Modal/components/ModalClose/ModalClose.tsx#ModalClose"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/28/close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Icon28Close});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Icon28Close=function(_param){var restProps=_extends({},_object_destructuring_empty(_param));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",_object_spread_props(_object_spread({width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},restProps),{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#close_a)",fill:"currentColor",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14 28c7.66 0 14-6.35 14-14 0-7.66-6.35-14-14.01-14A14.1 14.1 0 0 0 0 14c0 7.65 6.35 14 14 14Z",fillOpacity:".04"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{opacity:".5",d:"M9.17 20C8.51 20 8 19.47 8 18.81c0-.31.11-.61.34-.83L12.31 14l-3.97-3.97A1.15 1.15 0 0 1 8 9.2c0-.67.51-1.17 1.17-1.17.33 0 .59.11.82.33l3.99 3.98 4.02-4c.24-.24.5-.34.81-.34.66 0 1.19.52 1.19 1.17 0 .33-.1.6-.36.85L15.67 14l3.96 3.97c.24.21.36.51.36.84 0 .66-.53 1.19-1.2 1.19-.33 0-.64-.11-.85-.34l-3.96-3.98-3.95 3.98c-.23.23-.53.34-.86.34Z",fillOpacity:".8"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"close_a",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"#fff",d:"M0 0h28v28H0z"})})})]}))};try{Icon28Close.displayName="Icon28Close",Icon28Close.__docgenInfo={description:"",displayName:"Icon28Close",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/28/close.tsx#Icon28Close"]={docgenInfo:Icon28Close.__docgenInfo,name:"Icon28Close",path:"src/icons/28/close.tsx#Icon28Close"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Overlays-Modal-Modal-stories.ce745e47.iframe.bundle.js.map
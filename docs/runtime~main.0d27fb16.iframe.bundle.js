(()=>{"use strict";var __webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},(()=>{var deferred=[];__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(chunkIds){priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority];return}for(var notFulfilled=1/0,i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every(key=>__webpack_require__.O[key](chunkIds[j]))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}})(),__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},(()=>{var leafPrototypes,getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__;__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode||"object"==typeof value&&value&&(4&mode&&value.__esModule||16&mode&&"function"==typeof value.then))return value;var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach(key=>def[key]=()=>value[key]);return def.default=()=>value,__webpack_require__.d(ns,def),ns}})(),__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises),[])),__webpack_require__.u=chunkId=>""+(({183:"components-Navigation-CompactPagination-components-CompactPaginationItem-CompactPaginationItem-stories",256:"components-Form-Textarea-Textarea-stories",452:"components-Blocks-Banner-Banner-stories",598:"components-Blocks-IconButton-IconButton-stories",741:"components-Feedback-Spinner-Spinner-stories",838:"components-Blocks-Timeline-Timeline-stories",854:"components-Form-Multiselectable-Multiselectable-stories",959:"Getting-Started-mdx",960:"components-Blocks-InlineButtons-components-InlineButtonsItem-InlineButtonsItem-stories",986:"components-Form-Input-Input-stories",1405:"components-Typography-Headline-Headline-stories",1469:"components-Feedback-Snackbar-Snackbar-stories",1514:"Platform-And-Palette-mdx",1583:"components-Typography-Caption-Caption-stories",1906:"components-Blocks-Cell-components-ButtonCell-ButtonCell-stories",2036:"components-Navigation-TabsList-components-TabsItem-TabsItem-stories",2071:"components-Typography-Subheadline-Subheadline-stories",2231:"components-Overlays-Tooltip-Tooltip-stories",2406:"components-Form-Multiselect-Multiselect-stories",2646:"components-Blocks-Avatar-Avatar-stories",2738:"components-Navigation-CompactPagination-CompactPagination-stories",2908:"components-Blocks-List-List-stories",2959:"components-Typography-Title-Title-stories",3024:"components-Navigation-Pagination-Pagination-stories",3122:"components-Blocks-Section-Section-stories",3248:"components-Form-Selectable-Selectable-stories",3300:"components-Layout-Tabbar-Tabbar-stories",3702:"components-Form-PinInput-PinInput-stories",3722:"components-Blocks-Badge-Badge-stories",3952:"components-Form-Switch-Switch-stories",4294:"components-Navigation-Breadcrumbs-Breadcrumbs-stories",4430:"components-Blocks-Placeholder-Placeholder-stories",4496:"components-Overlays-Modal-components-ModalClose-ModalClose-stories",4528:"components-Layout-Tabbar-components-TabbarItem-TabbarItem-stories",4900:"components-Form-Chip-Chip-stories",5042:"components-Form-Checkbox-Checkbox-stories",5178:"components-Blocks-Steps-Steps-stories",5309:"components-Feedback-Progress-Progress-stories",5599:"components-Typography-Text-Text-stories",5854:"components-Form-Slider-Slider-stories",5980:"components-Overlays-Modal-components-ModalHeader-ModalHeader-stories",6162:"components-Navigation-SegmentedControl-SegmentedControl-stories",6312:"components-Form-Select-Select-stories",6334:"components-Blocks-Image-Image-stories",6418:"components-Form-Radio-Radio-stories",6458:"components-Form-FileInput-FileInput-stories",7272:"components-Blocks-Accordion-According-stories",7511:"components-Typography-LargeTitle-LargeTitle-stories",7738:"components-Form-Rating-Rating-stories",7832:"components-Blocks-Button-Button-stories",7990:"components-Blocks-Accordion-components-AccordionSummary-AccordionSummary-stories",8116:"components-Misc-Divider-Divider-stories",8174:"components-Layout-FixedLayout-FixedLayout-stories",8209:"components-Blocks-Section-components-SectionHeader-SectionHeader-stories",8253:"components-Overlays-Popper-Popper-stories",8542:"components-Blocks-InlineButtons-InlineButtons-stories",8566:"components-Blocks-Blockquote-Blockquote-stories",8588:"components-Navigation-TabsList-TabsList-stories",8832:"components-Blocks-Accordion-components-AccordionContent-AccordionContent-stories",8947:"components-Overlays-Modal-Modal-stories",9018:"components-Form-ColorInput-ColorInput-stories",9037:"components-Blocks-Section-components-SectionFooter-SectionFooter-stories",9134:"components-Blocks-Cell-components-Navigation-Navigation-stories",9178:"components-Blocks-Cell-components-Info-Info-stories",9193:"components-Feedback-Spoiler-Spoiler-stories",9195:"components-Navigation-SegmentedControl-components-SegmentedControlItem-SegmentedControlItem-stories",9605:"components-Feedback-Skeleton-Skeleton-stories",9859:"components-Feedback-CircularProgress-CircularProgress-stories",9889:"components-Blocks-Timeline-components-TimelineItem-TimelineItem-stories",9902:"components-Blocks-AvatarStack-AvatarStack-stories",9908:"components-Blocks-Card-Card-stories",9972:"components-Blocks-Cell-Cell-stories"})[chunkId]||chunkId)+"."+({183:"1ca7cee6",256:"e4f476ae",452:"46fce132",554:"e2abe8f3",598:"48ed21c3",657:"a7c9169a",741:"b0fd9236",838:"7e8a6e5f",854:"4f246c43",857:"176803f4",959:"aabe4f0c",960:"c2a3c3bd",986:"5c945b50",1095:"e4331095",1294:"cb4cd523",1405:"2a8fcac8",1469:"a7cb508a",1514:"0b60cee0",1583:"b6c32317",1710:"aacd4b42",1756:"dc2c9746",1841:"41c6d283",1906:"2b30223b",2036:"362a2a2b",2071:"6e17e1f5",2231:"dbf521a1",2304:"a7049a25",2406:"31149ba1",2646:"aea27d17",2738:"855742a6",2805:"51c1f6d0",2908:"596e942f",2959:"f441b37d",3003:"be922bc6",3024:"3127117e",3122:"71dfe2c8",3248:"c1cddfb5",3300:"bd1a744e",3421:"e771d987",3702:"50a6cda1",3722:"b59a7733",3762:"0a164240",3952:"5745cd78",4071:"31b22bd2",4169:"29cff93a",4294:"b5f3d61a",4430:"52536444",4496:"4f41a65c",4528:"e2e68886",4900:"d369d45b",5042:"c69964e8",5178:"f85e13ae",5309:"02b1441d",5316:"0a84b7ad",5389:"fb9e59f8",5599:"ae1a4e0d",5647:"7aee33cb",5748:"5dd02903",5800:"c7bef404",5854:"02601720",5980:"9d525df8",6162:"b917c546",6312:"b653b438",6334:"0ca51242",6418:"02b5f399",6458:"3acc6d64",7272:"c79955e4",7511:"92fbda2d",7738:"94416eec",7832:"44a1e66d",7990:"34bacb52",8116:"0c2fe5b5",8174:"8429bc4c",8209:"a95ae008",8253:"9fcd708f",8542:"dd2c45c1",8566:"272f4f95",8588:"bedb68b8",8696:"0b295d75",8751:"84ff1a50",8822:"6536f86f",8832:"cdb945bb",8883:"eb80f8aa",8947:"ce745e47",9018:"cab74210",9037:"ace9cc05",9134:"db86b381",9178:"510fe848",9193:"4c4460d0",9195:"32e11b09",9605:"da1f2f30",9686:"a18e3216",9859:"8c5c9b86",9889:"49f6057d",9902:"05f20c56",9908:"4831b7a0",9972:"a52bbd8c"})[chunkId]+".iframe.bundle.js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),(()=>{var inProgress={},dataWebpackPrefix="@telegram-apps/telegram-ui:";__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url]){inProgress[url].push(done);return}if(void 0!==key)for(var script,needAttach,scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")==dataWebpackPrefix+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack",dataWebpackPrefix+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach(fn=>fn(event)),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}})(),__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData){if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]);promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=Error();__webpack_require__.l(url,event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}},"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some(id=>0!==installedChunks[id])){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
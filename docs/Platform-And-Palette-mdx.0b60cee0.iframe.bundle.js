"use strict";(self.webpackChunk_telegram_apps_telegram_ui=self.webpackChunk_telegram_apps_telegram_ui||[]).push([[1514],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/Platform And Palette.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_artemiev_www_TelegramUI_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",strong:"strong",h3:"h3",ul:"ul",li:"li"},(0,_Users_artemiev_www_TelegramUI_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"understanding-approot-theming-mechanism",children:["Understanding ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," Theming Mechanism"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," component is pivotal in implementing a dynamic theming system within your application. It employs a sophisticated approach to CSS variables and React context to seamlessly adapt to various themes and platforms. This section delves into the inner workings of this system, explaining how themes are managed and applied internally."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables-the-backbone-of-theming",children:"CSS Variables: The Backbone of Theming"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["At the heart of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," theming system lie CSS variables, which are utilized to create a flexible and adaptable styling framework. These variables are divided into two main categories: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Basic Variables"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Custom Variables"}),". Both play a crucial role in tailoring the application's appearance to match both Telegram's theme and any additional stylistic preferences."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic-variables",children:"Basic Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Basic Variables are designed to inherit styles directly from Telegram or fall back on predefined styles within the library. This ensures that the application remains consistent with the user's current Telegram theme settings."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Telegram Style Inheritance"}),": When available, Basic Variables dynamically adopt values from Telegram's theme, aligning the application's appearance with the platform's chosen theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Library Defaults"}),": In scenarios where Telegram theme data isn't available or not support in current version, these variables revert to a set of default styles specified within the library, maintaining a coherent and user-friendly interface."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"custom-variables",children:"Custom Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Custom Variables offer an extension to the theming capabilities, allowing for more nuanced and specific styling adjustments that go beyond the scope of Telegram's native themes."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Enhanced Styling Flexibility"}),": These variables enable the definition of unique stylistic elements like accent colors, providing opportunities for brand alignment and distinct visual design."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Brand Identity Support"}),": By leveraging Custom Variables, developers can ensure that the application not only adheres to Telegram's theming but also reflects the brand's identity through consistent use of colors, typography, and other design elements."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"internal-mechanism-for-theme-and-platform-adaptation",children:"Internal Mechanism for Theme and Platform Adaptation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," intelligently leverages React context and CSS variables to dynamically adjust the application's styling based on the current theme (light, dark, or Telegram custom themes) and platform (iOS, Android, web). Here's an overview of how this process unfolds internally:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Theme Detection and Application"}),": Upon initialization, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," detects the current theme settings (from Telegram or manually set preferences) and updates the CSS variables accordingly. This process ensures that the theme is consistently applied across the application."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Platform-Specific Styling"}),": In addition to theme management, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," also detects the user's platform and applies platform-specific styles to optimize the user experience. This might include adjustments to typography, element sizing, and interaction feedback, aligning with platform conventions."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Contextual Theme and Platform Information"}),": Through the use of React context, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," provides nested components with access to current theme and platform information. This allows for conditional rendering or styling adjustments deep within the component tree, based on the overall application context."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"summary",children:"Summary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," theming system is a sophisticated framework designed to ensure visual consistency and adaptability across different themes and platforms. By combining CSS variables with React context, it offers a robust solution for managing theme and platform-specific styling, all while keeping the application aligned with Telegram's theming capabilities and the brand's visual identity."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Through this internal mechanism, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AppRoot"})," abstracts away the complexities of dynamic theming, allowing developers to focus on building feature-rich and visually appealing applications that provide a seamless user experience across all platforms and themes."]})]})}let __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,_Users_artemiev_www_TelegramUI_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
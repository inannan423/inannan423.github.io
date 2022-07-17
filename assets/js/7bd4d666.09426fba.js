"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[1059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"React.js\u5f15\u5165",date:new Date("2022-07-16T00:00:00.000Z"),authors:"Chengzihan",tags:["React"]},c=void 0,i={unversionedId:"\u524d\u7aef/React/\u5f15\u5165",id:"\u524d\u7aef/React/\u5f15\u5165",title:"React.js\u5f15\u5165",description:"React\u4ecb\u7ecd",source:"@site/docs/\u524d\u7aef/06.React/01.\u5f15\u5165.md",sourceDirName:"\u524d\u7aef/06.React",slug:"/\u524d\u7aef/React/\u5f15\u5165",permalink:"/docs/\u524d\u7aef/React/\u5f15\u5165",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u524d\u7aef/06.React/01.\u5f15\u5165.md",tags:[{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:1,frontMatter:{title:"React.js\u5f15\u5165",date:"2022-07-16T00:00:00.000Z",authors:"Chengzihan",tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"React.js",permalink:"/docs/category/reactjs"},next:{title:"\u5b66\u4e60\u7b14\u8bb0\u5f15\u5165",permalink:"/docs/study"}},l={},p=[{value:"React\u4ecb\u7ecd",id:"react\u4ecb\u7ecd",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"react\u4ecb\u7ecd"},"React\u4ecb\u7ecd"),(0,a.kt)("p",null,"React \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"JAVASCRIPT")," \u5e93\u3002React \u4e3b\u8981\u7528\u4e8e\u6784\u5efa UI\uff0c\u5f88\u591a\u4eba\u8ba4\u4e3a React \u662f MVC \u4e2d\u7684 V\uff08\u89c6\u56fe\uff09\u3002React \u8d77\u6e90\u4e8e Facebook \u7684\u5185\u90e8\u9879\u76ee\uff0c\u7528\u6765\u67b6\u8bbe Instagram \u7684\u7f51\u7ad9\uff0c\u5e76\u4e8e 2013 \u5e74 5 \u6708\u5f00\u6e90\u3002React \u62e5\u6709\u8f83\u9ad8\u7684\u6027\u80fd\uff0c\u4ee3\u7801\u903b\u8f91\u975e\u5e38\u7b80\u5355\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u5df2\u5f00\u59cb\u5173\u6ce8\u548c\u4f7f\u7528\u5b83\u3002React\u5982\u4eca\u5df2\u6210\u4e3a\u548cvue\u3001Angular\u5e76\u5217\u5b58\u5728\u7684\u4e09\u5927\u6846\u67b6\u4e4b\u4e00\u3002  "),(0,a.kt)("p",null,"\u4e0b\u9762\u5c06\u8ddf\u968fReact\u5b98\u65b9\u7684\u6559\u7a0b\uff0c\u5b66\u4e60React\uff0c\u4e0b\u9762\u7684\u6d41\u7a0b\u5927\u90e8\u5206\u642c\u8fd0\u81ea",(0,a.kt)("a",{parentName:"p",href:"https://react.docschina.org/tutorial/tutorial.html#what-are-we-building"},"\u5b98\u65b9\u6559\u7a0b"),"\uff0c\u5f88\u591a\u4e5f\u662f\u81ea\u5df1\u7406\u89e3\u540e\u7f16\u5199\u7684\u3002  "),(0,a.kt)("admonition",{title:"\u8981\u505a\u51fa\u4ec0\u4e48\u4e1c\u897f\uff1f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4e00\u8d77\u7528 React \u5f00\u53d1\u4e00\u4e2a\u4e95\u5b57\u68cb\uff08tic-tac-toe\uff09\u3002\u4f60\u53ef\u4ee5\u63d0\u524d\u9884\u89c8\u6211\u4eec\u8981\u5199\u7684\u6e38\u620f\u7684",(0,a.kt)("a",{parentName:"p",href:"https://codepen.io/gaearon/pen/gWWZgR?editors=0010"},"\u6700\u7ec8\u6548\u679c"),"\u3002\u5982\u679c\u4f60\u770b\u4e0d\u61c2\u5176\u4e2d\u7684\u4ee3\u7801\uff0c\u6216\u4e0d\u719f\u6089\u8fd9\u4e9b\u8bed\u6cd5\uff0c\u522b\u62c5\u5fc3\uff01\u63a5\u4e0b\u6765\u7684\u6559\u7a0b\u4f1a\u4e00\u6b65\u4e00\u6b65\u5e2e\u52a9\u4f60\u7406\u89e3 React \u53ca\u5176\u8bed\u6cd5\u3002\u5728\u7ee7\u7eed\u540e\u9762\u7684\u6559\u7a0b\u4e4b\u524d\uff0c\u63a8\u8350\u4f60\u5148\u73a9\u4e00\u4e0b\u8fd9\u4e2a\u4e95\u5b57\u68cb\u3002\u5728\u6e38\u620f\u91cc\uff0c\u4f60\u4f1a\u770b\u5230\u6e38\u620f\u9762\u677f\u7684\u53f3\u8fb9\u6709\u4e00\u4e2a\u6807\u6709\u5e8f\u53f7\u7684\u5217\u8868\u3002\u8fd9\u4e2a\u5217\u8868\u8bb0\u5f55\u4e86\u6e38\u620f\u4e2d\u7684\u6bcf\u4e2a\u6b65\u9aa4\uff0c\u5e76\u4e14\u4f1a\u968f\u7740\u6e38\u620f\u7684\u8fdb\u884c\u4e0d\u65ad\u66f4\u65b0\u3002\u7b49\u4f60\u719f\u6089\u6e38\u620f\u529f\u80fd\uff0c\u4fbf\u53ef\u5173\u6389\u5b83\uff01\u6211\u4eec\u4f1a\u5728\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u677f\u4e0a\u5f00\u59cb\u5199\u8d77\u3002\u4e0b\u4e00\u6b65\u5c31\u662f\u5e2e\u505a\u597d\u51c6\u5907\u5de5\u4f5c\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u6e38\u620f\u5f00\u53d1\u4e86\u3002  ")),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"))}u.isMDXComponent=!0}}]);
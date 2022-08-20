"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[6849],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>x});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),i=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),x=s,d=m["".concat(o,".").concat(x)]||m[x]||u[x]||a;return t?n.createElement(d,p(p({ref:r},c),{},{components:t})):n.createElement(d,p({ref:r},c))}));function x(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,p[1]=l;for(var i=2;i<a;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7823:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const a={title:"\u8ba4\u8bc6 Express",date:new Date("2022-08-20T00:00:00.000Z"),authors:"Chengzihan",tags:["Node.js","Express"]},p=void 0,l={unversionedId:"\u540e\u7aef/Express/Express1",id:"\u540e\u7aef/Express/Express1",title:"\u8ba4\u8bc6 Express",description:"\u5b66\u4e60\u76ee\u6807",source:"@site/docs/\u540e\u7aef/Express/Express1.md",sourceDirName:"\u540e\u7aef/Express",slug:"/\u540e\u7aef/Express/Express1",permalink:"/docs/\u540e\u7aef/Express/Express1",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u540e\u7aef/Express/Express1.md",tags:[{label:"Node.js",permalink:"/docs/tags/node-js"},{label:"Express",permalink:"/docs/tags/express"}],version:"current",frontMatter:{title:"\u8ba4\u8bc6 Express",date:"2022-08-20T00:00:00.000Z",authors:"Chengzihan",tags:["Node.js","Express"]},sidebar:"tutorialSidebar",previous:{title:"Express",permalink:"/docs/category/express"},next:{title:"\u57fa\u672c\u4f7f\u7528",permalink:"/docs/\u540e\u7aef/Express/Express2"}},o={},i=[{value:"\u5b66\u4e60\u76ee\u6807",id:"\u5b66\u4e60\u76ee\u6807",level:2},{value:"\u4ec0\u4e48\u662f Express",id:"\u4ec0\u4e48\u662f-express",level:2},{value:"\u4e3a\u4ec0\u4e48 Express",id:"\u4e3a\u4ec0\u4e48-express",level:2},{value:"Express \u80fd\u591f\u505a\u4ec0\u4e48",id:"express-\u80fd\u591f\u505a\u4ec0\u4e48",level:2},{value:"\u5b89\u88c5 Express",id:"\u5b89\u88c5-express",level:2}],c={toc:i};function u(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u5b66\u4e60\u76ee\u6807"},"\u5b66\u4e60\u76ee\u6807"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"express.static()")," \u5feb\u901f\u6258\u7ba1\u9759\u6001\u8d44\u6e90"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 express \u8def\u7531\u7cbe\u7b80\u9879\u76ee\u7ed3\u6784"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 express \u5e38\u89c1\u7684\u4e2d\u95f4\u4ef6"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 express \u521b\u5efa API \u63a5\u53e3"),(0,s.kt)("li",{parentName:"ul"},"\u5728 express \u4e2d\u542f\u7528 cors \u8de8\u57df\u8d44\u6e90\u5171\u4eab")),(0,s.kt)("h2",{id:"\u4ec0\u4e48\u662f-express"},"\u4ec0\u4e48\u662f Express"),(0,s.kt)("p",null,"Express \u662f\u5feb\u901f\uff0c\u5f00\u653e\uff0c\u6781\u7b80\u4e3b\u4e49\u7684 Web \u6846\u67b6\uff0c\u57fa\u4e8e Node.js \u5e73\u53f0\u3002\u5b83\u7684\u4f5c\u7528\u4e0e Http \u6a21\u5757\u7c7b\u4f3c\uff0c\u4e13\u95e8\u7528\u6765\u521b\u5efa Web \u670d\u52a1\u3002\u672c\u8d28\u5c31\u662f\u4e00\u4e2a ",(0,s.kt)("strong",{parentName:"p"},"npm")," \u5305\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.expressjs.com.cn/"},"Express\u4e2d\u6587\u7f51"),"\u3002  "),(0,s.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-express"},"\u4e3a\u4ec0\u4e48 Express"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"http \u5185\u7f6e\u6a21\u5757\u6bd4\u8f83\u590d\u6742"),(0,s.kt)("li",{parentName:"ul"},"Express \u5bf9\u5176\u8fdb\u884c\u5c01\u88c5\uff0c\u63d0\u9ad8\u4e86\u4f7f\u7528\u6548\u7387")),(0,s.kt)("h2",{id:"express-\u80fd\u591f\u505a\u4ec0\u4e48"},"Express \u80fd\u591f\u505a\u4ec0\u4e48"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Web\u7f51\u7ad9\u670d\u52a1\u5668"),"\uff1a\u63d0\u4f9b Web \u8d44\u6e90\u7684\u670d\u52a1\u5668\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"API\u63a5\u53e3\u670d\u52a1\u5668"),"\uff1a\u4e13\u95e8\u5bf9\u5916\u63d0\u4f9b API\u63a5\u53e3\u7684\u670d\u52a1\u5668\u3002")),(0,s.kt)("h2",{id:"\u5b89\u88c5-express"},"\u5b89\u88c5 Express"),(0,s.kt)("p",null,"\u5728\u9879\u76ee\u6240\u5728\u76ee\u5f55\u4e2d\uff0c\u8fd0\u884c\u4e0b\u9762\u7684\u7ec8\u7aef\u547d\u4ee4\uff1a  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i express@4.17.1\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[9557],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return t?r.createElement(y,u(u({ref:n},c),{},{components:t})):r.createElement(y,u({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const l={title:"\u51fd\u6570\u548c\u7c7b\u578b\u63a8\u65ad",date:new Date("2023-01-15T00:00:00.000Z"),authors:"Chengzihan",tags:["TypeScript"]},u=void 0,o={unversionedId:"FrontEnd/TypeScript/fuctions",id:"FrontEnd/TypeScript/fuctions",title:"\u51fd\u6570\u548c\u7c7b\u578b\u63a8\u65ad",description:"\u51fd\u6570\u65f6\u4e00\u7b49\u516c\u6c11\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u8fd4\u56de\u503c\u8fd4\u56de\u3002",source:"@site/docs/FrontEnd/10.TypeScript/04.fuctions.md",sourceDirName:"FrontEnd/10.TypeScript",slug:"/FrontEnd/TypeScript/fuctions",permalink:"/docs/FrontEnd/TypeScript/fuctions",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/10.TypeScript/04.fuctions.md",tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u51fd\u6570\u548c\u7c7b\u578b\u63a8\u65ad",date:"2023-01-15T00:00:00.000Z",authors:"Chengzihan",tags:["TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"Interface \u63a5\u53e3",permalink:"/docs/FrontEnd/TypeScript/interface"},next:{title:"\u7c7b\uff08Class\uff09",permalink:"/docs/FrontEnd/TypeScript/class"}},p={},i=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",level:2},{value:"\u53ef\u9009\u53c2\u6570",id:"\u53ef\u9009\u53c2\u6570",level:2},{value:"\u51fd\u6570\u8868\u8fbe\u5f0f",id:"\u51fd\u6570\u8868\u8fbe\u5f0f",level:2},{value:"\u7bad\u5934\u51fd\u6570",id:"\u7bad\u5934\u51fd\u6570",level:2},{value:"\u7c7b\u578b\u63a8\u65ad",id:"\u7c7b\u578b\u63a8\u65ad",level:2}],c={toc:i};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u51fd\u6570\u65f6\u4e00\u7b49\u516c\u6c11\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u8fd4\u56de\u503c\u8fd4\u56de\u3002")),(0,a.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function add(x: number, y: number): number {\n  return x + y;\n}\n\nlet result = add(1, 2);\n")),(0,a.kt)("p",null,"\u7b2c\u4e00\u3001\u7b2c\u4e8c\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," \u8868\u793a\u53c2\u6570\u7c7b\u578b\uff0c\u7b2c\u4e09\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," \u8868\u793a\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8fc7\u591a\u6216\u8fc7\u5c11\u7684\u53c2\u6570\uff0c\u90a3\u4e48\u4f1a\u62a5\u9519\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function add(x: number, y: number): number {\n  return x + y;\n}\n\nlet result = add(1);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Type '(x: number) => number' is not assignable to type '(x: number, y: number) => number'.\n  Types of parameters 'x' and 'x' are incompatible.\n    Type 'number' is not assignable to type 'string'.\n")),(0,a.kt)("h2",{id:"\u53ef\u9009\u53c2\u6570"},"\u53ef\u9009\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function add(x: number, y?: number): number {\n  return y ? x + y : x;\n}\n\nlet result = add(1);\n")),(0,a.kt)("p",null,"\u53ef\u9009\u53c2\u6570\u53ea\u80fd\u653e\u5728\u6700\u540e\uff0c\u5426\u5219\u4f1a\u62a5\u9519\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function add(x?: number, y: number): number {\n  return y ? x + y : x;\n}\n\nlet result = add(1);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Type '(x?: number, y: number) => number' is not assignable to type '(x: number, y?: number) => number'.\n  Types of parameters 'x' and 'x' are incompatible.\n    Type 'number' is not assignable to type 'number | undefined'.\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u8868\u8fbe\u5f0f"},"\u51fd\u6570\u8868\u8fbe\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const add = function (x: number, y: number): number {\n  return x + y;\n};\n\nlet result = add(1, 2);\n")),(0,a.kt)("h2",{id:"\u7bad\u5934\u51fd\u6570"},"\u7bad\u5934\u51fd\u6570"),(0,a.kt)("p",null,"\u5728 ES6 \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u7bad\u5934\u51fd\u6570\uff0c\u7b80\u5316\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const add = (x: number, y: number): number => {\n  return x + y;\n};\n\nlet result = add(1, 2);\n")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u63a8\u65ad"},"\u7c7b\u578b\u63a8\u65ad"),(0,a.kt)("p",null,"\u5728 TypeScript \u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u7c7b\u578b\uff0c\u90a3\u4e48 TS \u4f1a\u81ea\u52a8\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const add = (x: number, y: number) => {\n  return x + y;\n};\n\nlet result = add(1, 2);\n")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"result")," \u7684\u7c7b\u578b\u4f1a\u88ab\u63a8\u65ad\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u3002"))}s.isMDXComponent=!0}}]);
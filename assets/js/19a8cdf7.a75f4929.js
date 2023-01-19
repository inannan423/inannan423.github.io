"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[5291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const i={title:"\u7c7b\u578b\u522b\u540d\u548c\u65ad\u8a00",date:new Date("2023-01-15T00:00:00.000Z"),authors:"Chengzihan",tags:["TypeScript"]},o=void 0,p={unversionedId:"FrontEnd/TypeScript/more",id:"FrontEnd/TypeScript/more",title:"\u7c7b\u578b\u522b\u540d\u548c\u65ad\u8a00",description:"\u7c7b\u578b\u522b\u540d",source:"@site/docs/FrontEnd/10.TypeScript/08.more.md",sourceDirName:"FrontEnd/10.TypeScript",slug:"/FrontEnd/TypeScript/more",permalink:"/docs/FrontEnd/TypeScript/more",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/10.TypeScript/08.more.md",tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",sidebarPosition:8,frontMatter:{title:"\u7c7b\u578b\u522b\u540d\u548c\u65ad\u8a00",date:"2023-01-15T00:00:00.000Z",authors:"Chengzihan",tags:["TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\u6cdb\u578b\uff08Generics\uff09",permalink:"/docs/FrontEnd/TypeScript/generics"},next:{title:"TypeScript \u9ad8\u7ea7\u7279\u6027",permalink:"/docs/FrontEnd/TypeScript/guard"}},l={},u=[{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:2},{value:"\u7c7b\u578b\u65ad\u8a00",id:"\u7c7b\u578b\u65ad\u8a00",level:2},{value:"\u58f0\u660e\u6587\u4ef6",id:"\u58f0\u660e\u6587\u4ef6",level:2}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),(0,a.kt)("p",null,"\u7c7b\u578b\u522b\u540d\uff08Type Aliases\uff09\u662f TypeScript 1.9 \u7248\u672c\u4e2d\u5f15\u5165\u7684\u65b0\u7279\u6027\uff0c\u5b83\u53ef\u4ee5\u7ed9\u4e00\u4e2a\u7c7b\u578b\u8d77\u4e00\u4e2a\u65b0\u7684\u540d\u5b57\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type PlusType = (x: number, y: number) => number;\n\nfunction add(x: number, y: number): number {\n  return x + y;\n}\n\nconst add2: PlusType = add;\n")),(0,a.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type NameResolver = () => string;\ntype NameOrResolver = string | NameResolver;\nfunction getName(n: NameOrResolver): string {\n  if (typeof n === "string") {\n    return n;\n  } else {\n    return n();\n  }\n}\n')),(0,a.kt)("h2",{id:"\u7c7b\u578b\u65ad\u8a00"},"\u7c7b\u578b\u65ad\u8a00"),(0,a.kt)("p",null,"\u7c7b\u578b\u65ad\u8a00\uff08Type Assertion\uff09\u53ef\u4ee5\u7528\u6765\u624b\u52a8\u6307\u5b9a\u4e00\u4e2a\u503c\u7684\u7c7b\u578b\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getLength(input: string | number): number {\n  const str = input as String;  // \u7c7b\u578b\u65ad\u8a00\uff0c\u6ce8\u610f\u8fd9\u91cc\u7684\u5199\u6cd5\uff0cString \u4e0d\u662f string\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bf9\u8c61\n  if (str.length) {\n    return str.length;\n  } else {\n    const number = input as Number;\n    return number.toString().length;\n  }\n}\n")),(0,a.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getLength(input: string | number): number {\n  const str = <string>input;  // \u7c7b\u578b\u65ad\u8a00\n  if (str.length) {\n    return str.length;\n  } else {\n    const number = <number>input;\n    return number.toString().length;\n  }\n}\n")),(0,a.kt)("h2",{id:"\u58f0\u660e\u6587\u4ef6"},"\u58f0\u660e\u6587\u4ef6"),(0,a.kt)("p",null,"\u58f0\u660e\u6587\u4ef6\uff08Declaration Files\uff09\u662f\u4e00\u4e2a\u5168\u5c40\u7684\u6982\u5ff5\uff0c\u5b83\u662f\u7528\u6765\u63cf\u8ff0\u4e00\u4e2a\u5e93\u7684 API \u7684\uff0c\u6bd4\u5982 jQuery\u3001React\u3001Vue \u7b49\u7b49\u3002  "),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u60f3\u4f7f\u7528 jQuery\uff0c\u90a3\u4e48\u6211\u4eec\u9700\u8981\u5f15\u5165 jQuery \u7684\u58f0\u660e\u6587\u4ef6\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport $ from 'jquery';\ndeclare var jQuery: (selector: string) => any;\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u6587\u4ef6\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"index.d.ts"),"\uff0c\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},'"include": ["index.d.ts"]'),"\u3002\u5728\u522b\u7684\u6587\u4ef6\u4e2d\u5c31\u53ef\u4ee5\u4f7f\u7528 jQuery \u4e86\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport $ from 'jquery';\njQuery('#foo');\n")),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0cjQuery \u7684\u58f0\u660e\u6587\u4ef6\u5df2\u7ecf\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/jquery")," \u4e2d\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5\u4f7f\u7528\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"npm install @types/jquery --save-dev\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@types")," \u662f\u4e00\u4e2a npm \u5305\uff0c\u5b83\u5305\u542b\u4e86\u5f88\u591a\u7b2c\u4e09\u65b9\u5e93\u7684\u58f0\u660e\u6587\u4ef6\u3002\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1ajQuery\u3001React\u3001Vue\u3001Angular\u3001Node \u7b49\u7b49\u3002"))}c.isMDXComponent=!0}}]);
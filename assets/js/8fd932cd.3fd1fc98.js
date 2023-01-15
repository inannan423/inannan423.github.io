"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[7654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"TypeScript \u57fa\u7840\u7c7b\u578b",date:new Date("2023-01-15T00:00:00.000Z"),authors:"Chengzihan",tags:["TypeScript"]},i=void 0,p={unversionedId:"FrontEnd/TypeScript/basictype",id:"FrontEnd/TypeScript/basictype",title:"TypeScript \u57fa\u7840\u7c7b\u578b",description:"\u57fa\u7840\u7c7b\u578b",source:"@site/docs/FrontEnd/10.TypeScript/02.basictype.md",sourceDirName:"FrontEnd/10.TypeScript",slug:"/FrontEnd/TypeScript/basictype",permalink:"/docs/FrontEnd/TypeScript/basictype",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/10.TypeScript/02.basictype.md",tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",sidebarPosition:2,frontMatter:{title:"TypeScript \u57fa\u7840\u7c7b\u578b",date:"2023-01-15T00:00:00.000Z",authors:"Chengzihan",tags:["TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f TypeScript",permalink:"/docs/FrontEnd/TypeScript/wahtists"},next:{title:"Interface \u63a5\u53e3",permalink:"/docs/FrontEnd/TypeScript/interface"}},u={},o=[{value:"\u57fa\u7840\u7c7b\u578b",id:"\u57fa\u7840\u7c7b\u578b",level:2},{value:"\u5e03\u5c14\u503c\uff08Boolean\uff09",id:"\u5e03\u5c14\u503cboolean",level:3},{value:"\u6570\u5b57\uff08Number\uff09",id:"\u6570\u5b57number",level:3},{value:"\u5b57\u7b26\u4e32\uff08String\uff09",id:"\u5b57\u7b26\u4e32string",level:3},{value:"\u6570\u7ec4\uff08Array\uff09",id:"\u6570\u7ec4array",level:3},{value:"\u957f\u6574\u578b\uff08BigInt\uff09",id:"\u957f\u6574\u578bbigint",level:3},{value:"Symbol",id:"symbol",level:3},{value:"Null",id:"null",level:3},{value:"Undefined",id:"undefined",level:3},{value:"Any",id:"any",level:2},{value:"\u8054\u5408\u7c7b\u578b",id:"\u8054\u5408\u7c7b\u578b",level:2},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:2},{value:"\u5143\u7ec4\uff08Tuple\uff09",id:"\u5143\u7ec4tuple",level:2}],c={toc:o};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u7840\u7c7b\u578b"},"\u57fa\u7840\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e03\u5c14\u503c\uff08Boolean\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u5b57\uff08Number\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\uff08String\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u7ec4\uff08Array\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u957f\u6574\u578b\uff08BigInt\uff09"),(0,a.kt)("li",{parentName:"ul"},"Symbol"),(0,a.kt)("li",{parentName:"ul"},"Null"),(0,a.kt)("li",{parentName:"ul"},"Undefined")),(0,a.kt)("h3",{id:"\u5e03\u5c14\u503cboolean"},"\u5e03\u5c14\u503c\uff08Boolean\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let isDone: boolean = false;\n")),(0,a.kt)("h3",{id:"\u6570\u5b57number"},"\u6570\u5b57\uff08Number\uff09"),(0,a.kt)("p",null,"ES6 \u63d0\u4f9b\u4e86\u4e8c\u8fdb\u5236\u548c\u516b\u8fdb\u5236\u6570\u503c\u7684\u65b0\u7684\u5199\u6cd5\uff0c\u5206\u522b\u7528\u524d\u7f00 0b\uff08\u6216 0B\uff09\u548c 0o\uff08\u6216 0O\uff09\u8868\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\nlet binaryLiteral: number = 0b1010;\nlet octalLiteral: number = 0o744;\n")),(0,a.kt)("h3",{id:"\u5b57\u7b26\u4e32string"},"\u5b57\u7b26\u4e32\uff08String\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let name: string = 'bob';\nname = 'smith';\n")),(0,a.kt)("p",null,"\u53e6\u5916\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32\uff0c\u5b83\u53ef\u4ee5\u5b9a\u4e49\u591a\u884c\u6587\u672c\u548c\u5185\u5d4c\u8868\u8fbe\u5f0f\u3002\u8fd9\u79cd\u5b57\u7b26\u4e32\u662f\u88ab\u53cd\u5f15\u53f7\u5305\u56f4\uff08`\uff09\uff0c\u5e76\u4e14\u4ee5 ${ expr } \u8fd9\u79cd\u5f62\u5f0f\u5d4c\u5165\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let name: string = `Gene`;\nlet age: number = 37;\nlet sentence: string = `Hello, my name is ${ name }. I'll be ${ age + 1 } years old next month.`;\n")),(0,a.kt)("h3",{id:"\u6570\u7ec4array"},"\u6570\u7ec4\uff08Array\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let list: number[] = [1, 2, 3];\nlet list: Array<number> = [1, 2, 3];\n")),(0,a.kt)("h3",{id:"\u957f\u6574\u578bbigint"},"\u957f\u6574\u578b\uff08BigInt\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const max: bigint = 9007199254740991n;\n")),(0,a.kt)("h3",{id:"symbol"},"Symbol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let sym1 = Symbol();\nlet sym2 = Symbol('key');\n")),(0,a.kt)("h3",{id:"null"},"Null"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let n: null = null;\n")),(0,a.kt)("h3",{id:"undefined"},"Undefined"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let u: undefined = undefined;\n")),(0,a.kt)("h2",{id:"any"},"Any"),(0,a.kt)("p",null,"\u5728 TypeScript \u4e2d\uff0c\u4efb\u4f55\u7c7b\u578b\u90fd\u53ef\u4ee5\u8d4b\u503c\u7ed9 any \u7c7b\u578b\uff0c\u800c any \u7c7b\u578b\u4e5f\u53ef\u4ee5\u8d4b\u503c\u7ed9\u4efb\u4f55\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let notSure: any = 4;\nnotSure = 'maybe a string instead';\nnotSure = false; // okay, definitely a boolean\n")),(0,a.kt)("h2",{id:"\u8054\u5408\u7c7b\u578b"},"\u8054\u5408\u7c7b\u578b"),(0,a.kt)("p",null,"\u8054\u5408\u7c7b\u578b\uff08Union Types\uff09\u8868\u793a\u53d6\u503c\u53ef\u4ee5\u4e3a\u591a\u79cd\u7c7b\u578b\u4e2d\u7684\u4e00\u79cd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let myFavoriteNumber: string | number = 'seven';\nmyFavoriteNumber = 'seven';\nmyFavoriteNumber = 7;\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u65f6\uff0c\u53ea\u80fd\u8bbf\u95ee\u6b64\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u7c7b\u578b\u91cc\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u4e0d\u80fd\u8bbf\u95ee\u5176\u4ed6\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let fibonacci: number[] = [1, 1, 2, 3, 5];\n")),(0,a.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u6570\u7ec4\u6cdb\u578b\uff0c\u6cdb\u578b\u5c06\u5728\u540e\u9762\u4ecb\u7ecd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let fibonacci: Array<number> = [1, 1, 2, 3, 5];\n")),(0,a.kt)("p",null,"\u7c7b\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function sum() {\n  let args: {\n    [index: number]: number;\n    length: number;\n    callee: Function;\n  } = arguments;\n}\n")),(0,a.kt)("p",null,"\u7c7b\u6570\u7ec4\u4e0d\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u6bd4\u5982 arguments\u3002\u5e38\u89c1\u7684\u7c7b\u6570\u7ec4\u90fd\u6709\u81ea\u5df1\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u5982 IArguments, NodeList, HTMLCollection \u7b49\uff0c\u7c7b\u6570\u7ec4\u4e0d\u5177\u5907\u6570\u7ec4\u7684\u4e00\u4e9b\u65b9\u6cd5\uff0c\u6bd4\u5982 push\uff0cpop \u7b49\uff0c\u6240\u4ee5\u5728 TypeScript \u4e2d\uff0c\u7c7b\u6570\u7ec4\u53ea\u80fd\u7528\u63a5\u53e3\u8868\u793a\u3002"),(0,a.kt)("h2",{id:"\u5143\u7ec4tuple"},"\u5143\u7ec4\uff08Tuple\uff09"),(0,a.kt)("p",null,"\u5143\u7ec4\uff08Tuple\uff09\u5408\u5e76\u4e86\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u6bd4\u5982\u4e00\u4e2a\u6570\u7ec4\u5408\u5e76\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let xcatliu: [string, number] = ['Xcat Liu', 25];\n")))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[5634],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=i(t),d=a,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||l;return t?r.createElement(m,u(u({ref:n},s),{},{components:t})):r.createElement(m,u({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},79037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const l={title:"\u6cdb\u578b\uff08Generics\uff09",date:new Date("2023-01-15T00:00:00.000Z"),authors:"Chengzihan",tags:["TypeScript"]},u=void 0,o={unversionedId:"FrontEnd/TypeScript/generics",id:"FrontEnd/TypeScript/generics",title:"\u6cdb\u578b\uff08Generics\uff09",description:"\u6cdb\u578b\u662f TypeScript \u4e2d\u6700\u96be\u7406\u89e3\u7684\u6982\u5ff5\u4e4b\u4e00\uff0c\u4f46\u662f\u5b83\u4e5f\u662f TypeScript \u4e2d\u6700\u5f3a\u5927\u7684\u7279\u6027\u4e4b\u4e00\u3002\u6cdb\u578b\u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u5b9a\u4e49\u51fd\u6570\u3001\u63a5\u53e3\u6216\u7c7b\u7684\u65f6\u5019\uff0c\u4e0d\u9884\u5148\u6307\u5b9a\u5177\u4f53\u7c7b\u578b\u7684\u65b9\u5f0f\u3002",source:"@site/docs/FrontEnd/10.TypeScript/07.generics.md",sourceDirName:"FrontEnd/10.TypeScript",slug:"/FrontEnd/TypeScript/generics",permalink:"/docs/FrontEnd/TypeScript/generics",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/10.TypeScript/07.generics.md",tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",sidebarPosition:7,frontMatter:{title:"\u6cdb\u578b\uff08Generics\uff09",date:"2023-01-15T00:00:00.000Z",authors:"Chengzihan",tags:["TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\u679a\u4e3e\uff08Enums\uff09",permalink:"/docs/FrontEnd/TypeScript/enums"},next:{title:"\u7c7b\u578b\u522b\u540d\u548c\u65ad\u8a00",permalink:"/docs/FrontEnd/TypeScript/more"}},p={},i=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6cdb\u578b",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6cdb\u578b",level:2},{value:"\u6cdb\u578b\u7ea6\u675f",id:"\u6cdb\u578b\u7ea6\u675f",level:2},{value:"\u7c7b\u548c\u63a5\u53e3\u4e2d\u7684\u6cdb\u578b",id:"\u7c7b\u548c\u63a5\u53e3\u4e2d\u7684\u6cdb\u578b",level:2},{value:"\u7c7b",id:"\u7c7b",level:3},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:3}],s={toc:i};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6cdb\u578b\u662f TypeScript \u4e2d\u6700\u96be\u7406\u89e3\u7684\u6982\u5ff5\u4e4b\u4e00\uff0c\u4f46\u662f\u5b83\u4e5f\u662f TypeScript \u4e2d\u6700\u5f3a\u5927\u7684\u7279\u6027\u4e4b\u4e00\u3002\u6cdb\u578b\u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u5b9a\u4e49\u51fd\u6570\u3001\u63a5\u53e3\u6216\u7c7b\u7684\u65f6\u5019\uff0c\u4e0d\u9884\u5148\u6307\u5b9a\u5177\u4f53\u7c7b\u578b\u7684\u65b9\u5f0f\u3002")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6cdb\u578b"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u6cdb\u578b"),(0,a.kt)("p",null,"\u5982\u679c\u7528 js \u6765\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\u6765 return \u4f20\u5165\u7684\u53c2\u6570\uff0c\u90a3\u4e48\u5c31\u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function identity(arg) {\n  return arg;\n}\n")),(0,a.kt)("p",null,"\u90a3\u4e48\u5728 ts \u4e2d\uff0c\u6211\u4eec\u5e94\u8be5\u600e\u6837\u5199\u5462\uff1f  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function identity(arg: number): number {\n  return arg;\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u5199\u7684\u8bdd\uff0c\u6211\u4eec\u5c31\u53ea\u80fd\u4f20\u5165 number \u7c7b\u578b\u7684\u53c2\u6570\u4e86\uff0c\u5982\u679c\u6211\u4eec\u60f3\u4f20\u5165 string \u7c7b\u578b\u7684\u53c2\u6570\u5462\uff1f  "),(0,a.kt)("p",null,"\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u6765\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function identity(arg: any): any {\n  return arg;\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u4f1a\u5bfc\u81f4\u6211\u4eec\u4e22\u5931\u4e00\u4e9b\u4fe1\u606f\uff0c\u6bd4\u5982\u4f20\u5165\u7684\u53c2\u6570\u7c7b\u578b\u548c\u8fd4\u56de\u7684\u53c2\u6570\u7c7b\u578b\u5e94\u8be5\u662f\u76f8\u540c\u7684\u3002\u5982\u679c\u6211\u4eec\u4f20\u5165\u4e00\u4e2a\u6570\u5b57\uff0c\u6211\u4eec\u53ea\u77e5\u9053\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u90fd\u6709\u53ef\u80fd\u88ab\u8fd4\u56de\u3002\u4f8b\u5982\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let output :string = identity(123);\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f20\u5165\u4e86\u4e00\u4e2a\u6570\u5b57\uff0c\u4f46\u662f\u5374\u8fd4\u56de\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8fd9\u884c\u4ee3\u7801\u4e0d\u4f1a\u62a5\u9519\uff0c\u4f46\u662f\u4e5f\u4e0d\u4f1a\u5f97\u5230\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\u3002  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u65f6\u5019\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u4e86\u3002"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function identity<T>(arg: T): T {\n  return arg;\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684 T \u662f\u6211\u4eec\u521b\u5efa\u7684\u6cdb\u578b\u7684\u540d\u79f0\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u51fd\u6570\u4f53\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u6cdb\u578b\u3002\u5b9e\u8d28\u4e0a\u5b83\u662f\u4e00\u4e2a\u5360\u4f4d\u7b26\uff0c\u6211\u4eec\u53ef\u4ee5\u4f20\u5165\u4efb\u4f55\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u6bd4\u5982\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let output = identity('myString'); // type of output will be 'string'\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u8fd8\u6d89\u53ca\u4e86\u7c7b\u578b\u63a8\u8bba\uff0c\u56e0\u4e3a\u6211\u4eec\u4f20\u5165\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u63a8\u65ad\u51fa\u6211\u4eec\u7684\u53c2\u6570\u7c7b\u578b\u4e3a string\uff0c\u800c\u4e0d\u662f any\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u8981\u7684\u548c\u4f20\u5165\u7684\u53c2\u6570\u7c7b\u578b\u4e0d\u4e00\u6837\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function loggingIdentity<T>(arg: T): T {\n  return arg;\n}\n\nconst res:string = loggingIdentity(123);\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u6211\u4eec\u4f20\u5165\u7684\u53c2\u6570\u7c7b\u578b\u662f number\uff0c\u4f46\u662f\u6211\u4eec\u60f3\u8981\u7684\u53c2\u6570\u7c7b\u578b\u662f string\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u66f4\u590d\u6742\u7684\u4f8b\u5b50\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function swap<T, U>(tuple: [T, U]): [U, T] {\n  return [tuple[1], tuple[0]];\n}\n\nswap([7, 'seven']); // ['seven', 7]\nswap([true, 123]); // [123, true]\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f20\u5165\u4e86\u4e00\u4e2a\u5143\u7ec4\uff0c\u7136\u540e\u8fd4\u56de\u4e86\u4e00\u4e2a\u5143\u7ec4\uff0c\u4f46\u662f\u5143\u7ec4\u4e2d\u7684\u7c7b\u578b\u662f\u53cd\u8fc7\u6765\u7684\u3002"),(0,a.kt)("h2",{id:"\u6cdb\u578b\u7ea6\u675f"},"\u6cdb\u578b\u7ea6\u675f"),(0,a.kt)("p",null,"\u6709\u4e0b\u9762\u4e00\u4e2a\u4f8b\u5b50\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function loggingIdentity<T>(arg: T): T {\n  console.log(arg.length);  // Error: T doesn't have .length\n  return arg;\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u6211\u4eec\u4f20\u5165\u7684\u53c2\u6570\u53ef\u80fd\u6ca1\u6709 length \u5c5e\u6027\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u4f20\u5165\u7684\u53c2\u6570\u8fdb\u884c\u6307\u5b9a\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function loggingIdentity<T>(arg: T[]): T[] {\n  console.log(arg.length);  // Error: T doesn't have .length\n  return arg;\n}\n\nconst res = loggingIdentity([1, 2, 3]);\n")),(0,a.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u7ea6\u675f\u6765\u5b9e\u73b0\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Lengthwise {\n  length: number;\n}\n\nfunction loggingIdentity<T extends Lengthwise>(arg: T): T {\n  console.log(arg.length);  // Now we know it has a .length property, so no more error\n  return arg;\n}\n\nconst res = loggingIdentity([1, 2, 3]);\nconst res2 = loggingIdentity({length: 10, value: 3});\nconst res3 = loggingIdentity('123'); \nconst res4 = loggingIdentity(123); // Error, number doesn't have a .length property\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u8868\u793a\u4f20\u5165\u7684\u53c2\u6570\u5fc5\u987b\u5305\u542b length \u5c5e\u6027\u3002\u5426\u5219\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("h2",{id:"\u7c7b\u548c\u63a5\u53e3\u4e2d\u7684\u6cdb\u578b"},"\u7c7b\u548c\u63a5\u53e3\u4e2d\u7684\u6cdb\u578b"),(0,a.kt)("h3",{id:"\u7c7b"},"\u7c7b"),(0,a.kt)("p",null,"\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u5728\u7c7b\u548c\u63a5\u53e3\u4e2d\u4f7f\u7528\u6cdb\u578b\u3002\u6211\u4eec\u8981\u5b9e\u73b0\u4e00\u4e2a\u961f\u5217\u7c7b\uff0c\u5b83\u6709\u4e00\u4e2a push \u65b9\u6cd5\u548c\u4e00\u4e2a pop \u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u6765\u5b9e\u73b0\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Queue {\n  private data = [];\n  push(item) {\n    return this.data.push(item);\n  }\n  pop() {\n    return this.data.shift();\n  }\n}\n\nconst queue = new Queue();\nqueue.push(1);\nqueue.push('str');\nconsole.log(queue.pop().toFixed()); // 1 ,toFix()\u65b9\u6cd5\u662fnumber\u7c7b\u578b\u7684\u65b9\u6cd5\nconsole.log(queue.pop().toFixed()); // Error, toFix()\u65b9\u6cd5\u662fnumber\u7c7b\u578b\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u8fd9\u91cc\u662fstring\u7c7b\u578b\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u5411\u961f\u5217\u4e2d\u6dfb\u52a0\u4efb\u4f55\u7c7b\u578b\u7684\u6570\u636e\uff0c\u4f46\u662f\u5f53\u6211\u4eec\u8c03\u7528 pop \u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u80fd\u5f97\u5230 any \u7c7b\u578b\u7684\u6570\u636e\uff0c\u8fd9\u6837\u5c31\u4f1a\u5bfc\u81f4\u6211\u4eec\u8c03\u7528 any \u7c7b\u578b\u7684\u65b9\u6cd5\u7684\u65f6\u5019\u4f1a\u62a5\u9519\u3002\u6211\u4eec\u5e0c\u671b\u5728\u4efb\u4f55\u65f6\u5019\uff0c\u6211\u4eec\u63a8\u5165\u548c\u5f39\u51fa\u7684\u6570\u636e\u7c7b\u578b\u662f\u4e00\u81f4\u7684\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Queue<T> {\n  private data = [];\n  push(item: T) {\n    return this.data.push(item);\n  }\n  pop(): T {\n    return this.data.shift();\n  }\n}\n\nconst queue = new Queue<number>();\nqueue.push(1);\nqueue.push('str'); // Error, 'str' is not assignable to parameter of type 'number'\nconsole.log(queue.pop().toFixed()); // 1 ,toFix()\u65b9\u6cd5\u662fnumber\u7c7b\u578b\u7684\u65b9\u6cd5\n\nconst queue2 = new Queue<string>();\nqueue2.push('str');\nqueue2.push(1); // Error, 1 is not assignable to parameter of type 'string'\nconsole.log(queue2.pop().length); // 3 ,length\u662fstring\u7c7b\u578b\u7684\u65b9\u6cd5\n")),(0,a.kt)("h3",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u6765\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u7684\u7ed3\u6784\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u7684\u7ed3\u6784\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface KeyPair<T, U> {\n  key: T;\n  value: U;\n}\n\nlet kp1: KeyPair<number, string> = { key: 123, value: 'str' }; // OK\nlet kp2: KeyPair<string, number> = { key: 'str', value: 123 }; // OK\nlet kp3: KeyPair<number, string> = { key: 123, value: 123 }; // Error, 123 is not assignable to type\n")),(0,a.kt)("p",null,"\u524d\u9762\u63d0\u5230\u6570\u7ec4\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5b9a\u4e49\u6570\u7ec4\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5b9a\u4e49\u6570\u7ec4\u7684\u7ed3\u6784\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let arr: Array<number> = [1, 2, 3];\nlet arr2: Array<string> = ['1', '2', '3'];\n")),(0,a.kt)("p",null,"\u540c\u6837\u4e5f\u53ef\u4f7f\u7528\u6cdb\u578b\u6765\u63cf\u8ff0\u4e00\u4e2a\u51fd\u6570\u7c7b\u578b\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPlus<T> {\n  (a: T, b: T): T;\n}\n\nfunction plus(a: number, b: number): number {\n  return a + b;\n}\n\nfunction connect(a: string, b: string): string {\n  return a + b;\n}\n\nconst a: IPlus<number> = plus;\nconst b: IPlus<string> = connect;\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[3736],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={title:"\u679a\u4e3e\uff08Enums\uff09",date:new Date("2023-01-15T00:00:00.000Z"),authors:"Chengzihan",tags:["TypeScript"]},o=void 0,p={unversionedId:"FrontEnd/TypeScript/enums",id:"FrontEnd/TypeScript/enums",title:"\u679a\u4e3e\uff08Enums\uff09",description:"\u6570\u5b57\u679a\u4e3e",source:"@site/docs/FrontEnd/10.TypeScript/06.enums.md",sourceDirName:"FrontEnd/10.TypeScript",slug:"/FrontEnd/TypeScript/enums",permalink:"/docs/FrontEnd/TypeScript/enums",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/10.TypeScript/06.enums.md",tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",sidebarPosition:6,frontMatter:{title:"\u679a\u4e3e\uff08Enums\uff09",date:"2023-01-15T00:00:00.000Z",authors:"Chengzihan",tags:["TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\uff08Class\uff09",permalink:"/docs/FrontEnd/TypeScript/class"},next:{title:"\u6cdb\u578b\uff08Generics\uff09",permalink:"/docs/FrontEnd/TypeScript/generics"}},c={},l=[{value:"\u6570\u5b57\u679a\u4e3e",id:"\u6570\u5b57\u679a\u4e3e",level:2},{value:"\u5b57\u7b26\u4e32\u679a\u4e3e",id:"\u5b57\u7b26\u4e32\u679a\u4e3e",level:2},{value:"\u5e38\u91cf\u679a\u4e3e",id:"\u5e38\u91cf\u679a\u4e3e",level:2}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6570\u5b57\u679a\u4e3e"},"\u6570\u5b57\u679a\u4e3e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right,\n}\n")),(0,i.kt)("p",null,"\u679a\u4e3e\u6210\u5458\u4f1a\u88ab\u8d4b\u503c\u4e3a\u4ece 0 \u5f00\u59cb\u9012\u589e\u7684\u6570\u5b57\uff0c\u540c\u65f6\u4e5f\u4f1a\u5bf9\u679a\u4e3e\u503c\u5230\u679a\u4e3e\u540d\u8fdb\u884c\u53cd\u5411\u6620\u5c04\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(Direction.Up); // 1\nconsole.log(Direction[1]); // Up\n")),(0,i.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u8d4b\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"enum Direction {\n  Up = 10,\n  Down,\n  Left,\n  Right,\n}\n")),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," \u4e3a 10\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Down")," \u4e3a 11\uff0c\u4f9d\u6b21\u7c7b\u63a8\u3002"),(0,i.kt)("p",null,"\u5b83\u4f1a\u88ab\u7f16\u8bd1\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var Direction;\n(function (Direction) {\n  Direction[(Direction["Up"] = 10)] = "Up";\n  Direction[(Direction["Down"] = 11)] = "Down";\n  Direction[(Direction["Left"] = 12)] = "Left";\n  Direction[(Direction["Right"] = 13)] = "Right";\n})(Direction || (Direction = {})); // \u8fd9\u91cc\u7684 Direction || (Direction = {}) \u662f\u4e3a\u4e86\u9632\u6b62\u91cd\u590d\u58f0\u660e\n')),(0,i.kt)("h2",{id:"\u5b57\u7b26\u4e32\u679a\u4e3e"},"\u5b57\u7b26\u4e32\u679a\u4e3e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'enum Direction {\n  Up = "UP",\n  Down = "DOWN",\n  Left = "LEFT",\n  Right = "RIGHT",\n}\n')),(0,i.kt)("p",null,"\u5047\u5982\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u5230\u7684\u6570\u636e\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"UP"),"\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Direction.Up")," \u6765\u83b7\u53d6\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"UP"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const value = "UP";\nif (value === Direction.Up) {\n  // ...\n}\n')),(0,i.kt)("h2",{id:"\u5e38\u91cf\u679a\u4e3e"},"\u5e38\u91cf\u679a\u4e3e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const enum Direction {\n  Up,\n  Down,\n  Left,\n  Right,\n}\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u5e38\u91cf\u679a\u4e3e\u53ef\u4ee5\u63d0\u5347\u6027\u80fd\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5728\u7f16\u8bd1\u9636\u6bb5\u88ab\u79fb\u9664\u3002  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const enum Direction {\n  Up,\n  Down,\n  Left,\n  Right,\n}\n\nconst value=1;\nif (value === Direction.Up) {\n  // ...\n}\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u540e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const value = 1;\nif (value === 0 /* Up */) {\n  // ...\n}\n")))}u.isMDXComponent=!0}}]);
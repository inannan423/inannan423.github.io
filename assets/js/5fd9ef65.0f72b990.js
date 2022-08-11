"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[4089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"path \u8def\u5f84\u6a21\u5757",date:new Date("2022-08-11T00:00:00.000Z"),authors:"Chengzihan",tags:["Node.js"]},o=void 0,p={unversionedId:"\u540e\u7aef/Node.js/Nodepath",id:"\u540e\u7aef/Node.js/Nodepath",title:"path \u8def\u5f84\u6a21\u5757",description:"\u4ec0\u4e48\u662f path \u8def\u5f84\u6a21\u5757",source:"@site/docs/\u540e\u7aef/Node.js/04.Nodepath.md",sourceDirName:"\u540e\u7aef/Node.js",slug:"/\u540e\u7aef/Node.js/Nodepath",permalink:"/docs/\u540e\u7aef/Node.js/Nodepath",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u540e\u7aef/Node.js/04.Nodepath.md",tags:[{label:"Node.js",permalink:"/docs/tags/node-js"}],version:"current",sidebarPosition:4,frontMatter:{title:"path \u8def\u5f84\u6a21\u5757",date:"2022-08-11T00:00:00.000Z",authors:"Chengzihan",tags:["Node.js"]},sidebar:"tutorialSidebar",previous:{title:"fs \u6587\u4ef6\u7cfb\u7edf\u6a21\u5757",permalink:"/docs/\u540e\u7aef/Node.js/NodejsFs"},next:{title:"\u6848\u4f8b\uff1a\u65f6\u949f",permalink:"/docs/\u540e\u7aef/Node.js/NodeExample1"}},i={},s=[{value:"\u4ec0\u4e48\u662f path \u8def\u5f84\u6a21\u5757",id:"\u4ec0\u4e48\u662f-path-\u8def\u5f84\u6a21\u5757",level:2},{value:"\u6a21\u5757\u5bfc\u5165",id:"\u6a21\u5757\u5bfc\u5165",level:2},{value:"\u8def\u5f84\u62fc\u63a5",id:"\u8def\u5f84\u62fc\u63a5",level:2},{value:"\u8bed\u6cd5\u683c\u5f0f",id:"\u8bed\u6cd5\u683c\u5f0f",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u540d",id:"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u540d",level:2},{value:"\u8bed\u6cd5\u683c\u5f0f",id:"\u8bed\u6cd5\u683c\u5f0f-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u6269\u5c55\u540d",id:"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u6269\u5c55\u540d",level:2},{value:"\u8bed\u6cd5\u683c\u5f0f",id:"\u8bed\u6cd5\u683c\u5f0f-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f-path-\u8def\u5f84\u6a21\u5757"},"\u4ec0\u4e48\u662f path \u8def\u5f84\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"path")," \u6a21\u5757\u662f node \u4e3a\u6211\u4eec\u63d0\u4f9b\u7684\u7528\u6765\u5904\u7406\u8def\u5f84\u7684\u6a21\u5757\u3002\u6ee1\u8db3\u7528\u6237\u5bf9\u8def\u5f84\u5904\u7406\u7684\u9700\u6c42\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path.join()")," \u65b9\u6cd5\uff0c\u5c06\u591a\u4e2a\u8def\u5f84\u7247\u6bb5\u62fc\u63a5\u6210\u4e00\u4e2a\u5b8c\u6210\u7684\u8def\u5f84\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path.basename()")," \uff0c\u5c06\u6587\u4ef6\u7684\u540d\u5b57\u4ece\u8def\u5f84\u4e2d\u89e3\u6790\u51fa\u6765\u3002")),(0,r.kt)("h2",{id:"\u6a21\u5757\u5bfc\u5165"},"\u6a21\u5757\u5bfc\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require ('path');\n")),(0,r.kt)("h2",{id:"\u8def\u5f84\u62fc\u63a5"},"\u8def\u5f84\u62fc\u63a5"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"path.join()")," \u65b9\u6cd5\uff0c\u5c06\u591a\u4e2a\u8def\u5f84\u7247\u6bb5\u62fc\u63a5\u6210\u4e00\u4e2a\u5b8c\u6210\u7684\u8def\u5f84\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"path.join([...paths]);\n// \u53c2\u6570\uff1a\u4f20\u5165\u4efb\u610f\u591a\u4e2a\u8def\u5f84\u7247\u6bb5\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a\u62fc\u63a5\u597d\u7684\u8def\u5f84\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nconst pathStr = path.join("/a", "/b", "/c", "../", "./d", "e");\nconsole.log(pathStr);\n')),(0,r.kt)("p",null,"\u63a7\u5236\u53f0\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\\a\\b\\d\\e\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5b58\u5728\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"../")," \uff0c\u51fa\u73b0\u8fd9\u4e2a\u53c2\u6570\u540e\u5c06\u4f1a\u628a\u524d\u9762\u7684\u4e00\u4e2a\u53c2\u6570\u8def\u5f84\u62b5\u6d88\uff0c\u4e5f\u5c31\u662f\u5728\u672c\u4f8b\u5b50\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"/c")," \u88ab\u62b5\u6d88\u6389\u4e86\u3002")),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nconst pathStr = path.join(__dirname,"files/1.txt");\nconsole.log(pathStr);\n')),(0,r.kt)("h2",{id:"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u540d"},"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u540d"),(0,r.kt)("h3",{id:"\u8bed\u6cd5\u683c\u5f0f-1"},"\u8bed\u6cd5\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"path.basename(path[,ext]);\n")),(0,r.kt)("p",null,"\u53c2\u6570\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," \u5fc5\u9009\uff0c\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ext")," \u53ef\u9009\uff0c\u6587\u4ef6\u7684\u6269\u5c55\u540d\u3002\u6307\u5b9a\u6269\u5c55\u540d\u540e\u5c06\u4e0d\u4f1a\u663e\u793a\u6269\u5c55\u540d\u4e86\u3002")),(0,r.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fpath = '/a/b/c/index.html';\n\nvar fullName = path.basename(fpath);\nconsole.log(fullName);  // \u8f93\u51fa index.html\n\nvar nameWidthExt = path.basename(fpath,'.html');\nconsole.log(nameWidthExt); // \u8f93\u51fa index\n")),(0,r.kt)("h2",{id:"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u6269\u5c55\u540d"},"\u83b7\u53d6\u8def\u5f84\u4e2d\u7684\u6587\u4ef6\u6269\u5c55\u540d"),(0,r.kt)("h3",{id:"\u8bed\u6cd5\u683c\u5f0f-2"},"\u8bed\u6cd5\u683c\u5f0f"),(0,r.kt)("p",null,"node \u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"path.extname()")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u83b7\u53d6\u6587\u4ef6\u540d\u4e2d\u7684\u6269\u5c55\u540d\u90e8\u5206\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"path.extname(path);\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1astring"),(0,r.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fpath = '/a/b/c/index.html'; // \u8def\u5f84\u5b57\u7b26\u4e32\nconst fext = path.extname(fpath);\nconsole.log(fext);\n")),(0,r.kt)("p",null,"\u63a7\u5236\u53f0\u8fd4\u56de\u503c\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".html\n")))}c.isMDXComponent=!0}}]);
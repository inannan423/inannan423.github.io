"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[5225],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),g=m(n),k=r,c=g["".concat(o,".").concat(k)]||g[k]||d[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83471:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={slug:"gitrules",title:"git commit \u89c4\u8303",authors:"Chengzihan",tags:["git"]},i=void 0,p={permalink:"/blog/gitrules",editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/blog/2022-9-16-gitrules.md",source:"@site/blog/2022-9-16-gitrules.md",title:"git commit \u89c4\u8303",description:"\u610f\u4e49",date:"2022-09-16T00:00:00.000Z",formattedDate:"September 16, 2022",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:2.59,hasTruncateMarker:!1,authors:[{name:"Chengzihan",title:"Orange Chengzihan",url:"https://github.com/inannan423",imageURL:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220710133634.png",key:"Chengzihan"}],frontMatter:{slug:"gitrules",title:"git commit \u89c4\u8303",authors:"Chengzihan",tags:["git"]},prevItem:{title:"\u722c\u53d6\u5f3a\u667a\u6559\u52a1\u7cfb\u7edf\u83b7\u53d6\u8bfe\u8868\u4fe1\u606f",permalink:"/blog/qiangzhi"},nextItem:{title:"\u6d45\u5c1d DaisyUI",permalink:"/blog/daily"}},o={authorsImageUrls:[void 0]},m=[{value:"\u610f\u4e49",id:"\u610f\u4e49",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:m};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u610f\u4e49"},"\u610f\u4e49"),(0,r.kt)("p",null,"\u53d7\u5927\u4f6c \u6127\u600d \u7684\u5efa\u8bae\uff0c\u6211\u8981\u89c4\u8303\u4e00\u4e0b\u81ea\u5df1\u7684 Git Commit \u89c4\u8303\uff0c\u9996\u5148\u56e0\u4e3a\u89c4\u8303\u7684\u63d0\u4ea4\u547d\u540d\u4e00\u76ee\u4e86\u7136\uff0c\u5176\u6b21\u770b\u8d77\u6765\u4e5f\u66f4\u9ad8\u7ea7\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://kuizuo.cn/docs/skill/git/git-conmit-specification"},"\u6127\u600d\u7684\u6587\u6863"),"\uff0c\u6211\u4e5f\u5c06\u76f8\u5173\u89c4\u8303\u8bb0\u5f55\u5982\u4e0b\u3002  "),(0,r.kt)("p",null,"Git \u6bcf\u6b21\u63d0\u4ea4\u4ee3\u7801\uff0c\u90fd\u8981\u5199 Commit message\uff08\u63d0\u4ea4\u8bf4\u660e\uff09\uff0c\u5426\u5219\u5c31\u4e0d\u5141\u8bb8\u63d0\u4ea4\u3002\u4f46\u662f\uff0c\u4e00\u822c\u6765\u8bf4\uff0ccommit message \u5e94\u8be5\u6e05\u6670\u660e\u4e86\uff0c\u8bf4\u660e\u672c\u6b21\u63d0\u4ea4\u7684\u76ee\u7684\u3002\u8fd9\u6837\uff0c\u5c31\u53ef\u4ee5\u8ba9\u5176\u4ed6\u4eba\u4e86\u89e3\u5230\u4f60\u7684\u4ee3\u7801\u63d0\u4ea4\u7684\u76ee\u7684\uff0c\u4ece\u800c\u66f4\u597d\u5730\u534f\u4f5c\u5f00\u53d1\u3002  "),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u793e\u533a\u6709\u591a\u79cd Commit message \u7684\u5199\u6cd5\u89c4\u8303\u3002\u672c\u6587\u4ecb\u7ecd ",(0,r.kt)("a",{parentName:"p",href:"https://link.jianshu.com/?t=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y%2Fedit%23heading%3Dh.greljkmo14y0"},"Angular \u89c4\u8303")," \u662f\u76ee\u524d\u4f7f\u7528\u6700\u5e7f\u7684\u5199\u6cd5\uff0c\u6bd4\u8f83\u5408\u7406\u548c\u7cfb\u7edf\u5316\u3002  "),(0,r.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("p",null,"\u6838\u5fc3\u8bed\u6cd5\u5982\u4e0b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\\" and ",")\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"commit \u7684\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feat"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u529f\u80fd\u3001\u65b0\u7279\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fix"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539 bug")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"perf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u4ee3\u7801\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refactor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u91cd\u6784\uff08\u91cd\u6784\uff0c\u5728\u4e0d\u5f71\u54cd\u4ee3\u7801\u5185\u90e8\u884c\u4e3a\u3001\u529f\u80fd\u4e0b\u7684\u4ee3\u7801\u4fee\u6539\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"docs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u6863\u4fee\u6539")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u683c\u5f0f\u4fee\u6539, \u6ce8\u610f\u4e0d\u662f css \u4fee\u6539\uff08\u4f8b\u5982\u5206\u53f7\u4fee\u6539\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"test"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u7528\u4f8b\u65b0\u589e\u3001\u4fee\u6539")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"build"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f71\u54cd\u9879\u76ee\u6784\u5efa\u6216\u4f9d\u8d56\u9879\u4fee\u6539")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revert"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6062\u590d\u4e0a\u4e00\u6b21\u63d0\u4ea4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ci"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6301\u7eed\u96c6\u6210\u76f8\u5173\u6587\u4ef6\u4fee\u6539")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chore"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5176\u4ed6\u4fee\u6539\uff08\u4e0d\u5728\u4e0a\u8ff0\u7c7b\u578b\u4e2d\u7684\u4fee\u6539\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"release"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03\u65b0\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workflow"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u6d41\u76f8\u5173\u6587\u4ef6\u4fee\u6539")))),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"commit message"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chore: init"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u9879\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chore: update deps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u4f9d\u8d56")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chore: wording"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u6574\u6587\u5b57\uff08\u63aa\u8bcd\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chore: fix typos"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u62fc\u5199\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chore: release v1.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03 1.0.0 \u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fix: icon size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u56fe\u6807\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fix: value.length -> values.length"),(0,r.kt)("td",{parentName:"tr",align:null},"value \u53d8\u91cf\u8c03\u6574\u4e3a values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feat(blog): add comment section"),(0,r.kt)("td",{parentName:"tr",align:null},"blog \u65b0\u589e\u8bc4\u8bba\u90e8\u5206")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feat: support typescript"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e typescript \u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feat: improve xxx types"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6539\u5584 xxx \u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style(component): code"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u6574 component \u4ee3\u7801\u6837\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refactor: xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91cd\u6784 xxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"perf(utils): random function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316 utils \u7684 random \u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"docs: xxx.md"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0 xxx.md \u6587\u7ae0")))))}d.isMDXComponent=!0}}]);
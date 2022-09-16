"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[5038],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={title:"\u8f93\u51fa",date:new Date("2022-08-07T00:00:00.000Z"),authors:"Chengzihan",tags:["web","JavaScript"]},i=void 0,o={unversionedId:"FrontEnd/webBasis/JavaScript/jsstart",id:"FrontEnd/webBasis/JavaScript/jsstart",title:"\u8f93\u51fa",description:"JavaScript \u4e0d\u63d0\u4f9b\u4efb\u4f55\u5185\u5efa\u6253\u5370\u6216\u8005\u663e\u793a\u51fd\u6570\u3002",source:"@site/docs/FrontEnd/08.webBasis/03.JavaScript/02.jsstart.md",sourceDirName:"FrontEnd/08.webBasis/03.JavaScript",slug:"/FrontEnd/webBasis/JavaScript/jsstart",permalink:"/docs/FrontEnd/webBasis/JavaScript/jsstart",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/08.webBasis/03.JavaScript/02.jsstart.md",tags:[{label:"web",permalink:"/docs/tags/web"},{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u8f93\u51fa",date:"2022-08-07T00:00:00.000Z",authors:"Chengzihan",tags:["web","JavaScript"]},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f JavaScript",permalink:"/docs/FrontEnd/webBasis/JavaScript/whatisjs"},next:{title:"\u6570\u636e\u7c7b\u578b\u548c\u51fd\u6570",permalink:"/docs/FrontEnd/webBasis/JavaScript/languageJS"}},p={},c=[{value:"\u663e\u793a\u65b9\u6848",id:"\u663e\u793a\u65b9\u6848",level:2},{value:"<code>innerHTML</code>",id:"innerhtml",level:3},{value:"<code>document.write</code>",id:"documentwrite",level:3},{value:"<code>window.alert</code>",id:"windowalert",level:3},{value:"<code>console.log</code>",id:"consolelog",level:3}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JavaScript \u4e0d\u63d0\u4f9b\u4efb\u4f55\u5185\u5efa\u6253\u5370\u6216\u8005\u663e\u793a\u51fd\u6570\u3002  "),(0,a.kt)("h2",{id:"\u663e\u793a\u65b9\u6848"},"\u663e\u793a\u65b9\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window.alert()")," \u5c06\u5185\u5bb9\u5199\u5165\u8b66\u544a\u6846"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"document.write()")," \u5c06\u5185\u5bb9\u5199\u5165 HTML \u8f93\u51fa"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"innerHTML")," \u5199\u5165 HTML \u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"console.log")," ",(0,a.kt)("strong",{parentName:"li"},"\u63a7\u5236\u53f0\u6253\u5370"))),(0,a.kt)("h3",{id:"innerhtml"},(0,a.kt)("inlineCode",{parentName:"h3"},"innerHTML")),(0,a.kt)("p",null,"JavaScript \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"document.getElementById(id)")," \u6765\u8bbf\u95ee HTML \u5143\u7d20\u3002  "),(0,a.kt)("p",null,"\u5b9e\u4f8b\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n\n<h1>\u6211\u7684\u7b2c\u4e00\u5f20\u7f51\u9875</h1>\n\n<p>\u6211\u7684\u7b2c\u4e00\u4e2a\u6bb5\u843d</p>\n\n<p id="demo"></p>\n\n<script>\n document.getElementById("demo").innerHTML = 5 + 6;\n<\/script>\n\n</body>\n</html> \n')),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u793a\u610f\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 JS \u8bbe\u7f6e\u7684\u5185\u5bb9\u88ab HTMl \u4e2d\u7684 demo \u5143\u7d20\u6e32\u67d3\u51fa\u6765\u4e86\u3002  "),(0,a.kt)("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",width:"600",height:"300",scrolling:"no",src:"https://codepen.io/Orange423/full/GRxdLMW"}),(0,a.kt)("h3",{id:"documentwrite"},(0,a.kt)("inlineCode",{parentName:"h3"},"document.write")),(0,a.kt)("p",null,"\u51fa\u4e8e\u6d4b\u8bd5\u76ee\u7684\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"document.write()")," \u6bd4\u8f83\u65b9\u4fbf\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>\u6211\u7684\u7b2c\u4e00\u5f20\u7f51\u9875</h1>\n\n<p>\u6211\u7684\u7b2c\u4e00\u4e2a\u6bb5\u843d</p>\n\n<script>\ndocument.write(5 + 6);\n<\/script>\n\n</body>\n</html>\n")),(0,a.kt)("p",null,"\u4f1a\u4e0e\u4e0a\u9762\u4ea7\u751f\u4e00\u6837\u7684\u6548\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5728 HTML \u6587\u6863\u5b8c\u5168\u52a0\u8f7d\u540e\u4f7f\u7528 document.write() \u5c06\u5220\u9664\u6240\u6709",(0,a.kt)("strong",{parentName:"p"},"\u5df2\u6709\u7684")," HTML \uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n\n<h1>\u6211\u7684\u7b2c\u4e00\u5f20\u7f51\u9875</h1>\n\n<p>\u6211\u7684\u7b2c\u4e00\u4e2a\u6bb5\u843d</p>\n\n<button onclick="document.write(5 + 6)">\u8bd5\u4e00\u8bd5</button>\n\n</body>\n</html>\n')),(0,a.kt)("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",width:"600",height:"300",scrolling:"no",src:"https://codepen.io/Orange423/full/ExELJQq"}),(0,a.kt)("p",null,"\u70b9\u51fb\u4e0a\u9762\u7684 \u8bd5\u4e00\u8bd5 \u53ef\u4ee5\u91cd\u65b0\u6e32\u67d3\u51fa\u5185\u5bb9\uff0c\u4e4b\u524d\u7684\u88ab\u5220\u9664\u3002  "),(0,a.kt)("h3",{id:"windowalert"},(0,a.kt)("inlineCode",{parentName:"h3"},"window.alert")),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u8b66\u544a\u6846\u6765\u663e\u793a\u6570\u636e\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n\n<h1>\u6211\u7684\u7b2c\u4e00\u5f20\u7f51\u9875</h1>\n\n<p>\u6211\u7684\u7b2c\u4e00\u4e2a\u6bb5\u843d</p>\n  <button onclick="window.alert(5 + 6);">\u70b9\u51fb\u663e\u793a</button>\n</body>\n</html> \n')),(0,a.kt)("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",width:"600",height:"300",scrolling:"no",src:"https://codepen.io/Orange423/full/NWYMmYY"}),(0,a.kt)("h3",{id:"consolelog"},(0,a.kt)("inlineCode",{parentName:"h3"},"console.log")),(0,a.kt)("p",null,"\u6700\u5e38\u7528\u7684\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," \u6765\u6253\u5370\u4fe1\u606f\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>\u6211\u7684\u7b2c\u4e00\u5f20\u7f51\u9875</h1>\n\n<p>\u6211\u7684\u7b2c\u4e00\u4e2a\u6bb5\u843d</p>\n\n<script>\nconsole.log(5 + 6);\n<\/script>\n\n</body>\n</html>\n")),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u6309\u4f4f F12 \u5373\u53ef\u6253\u5f00\u63a7\u5236\u53f0\u67e5\u770b\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);
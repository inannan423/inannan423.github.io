"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[1082],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=c(n),g=r,h=u["".concat(o,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(h,i(i({ref:e},s),{},{components:n})):a.createElement(h,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82654:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={slug:"chatGPT",title:"chatGPT \u63a5\u5165\u5fae\u4fe1",authors:"Chengzihan",tags:["chatGPT","railway"]},i=void 0,p={permalink:"/blog/chatGPT",editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/blog/2022-12-05-mfc.md",source:"@site/blog/2022-12-05-mfc.md",title:"chatGPT \u63a5\u5165\u5fae\u4fe1",description:"\u4ecb\u7ecd",date:"2022-12-05T00:00:00.000Z",formattedDate:"December 5, 2022",tags:[{label:"chatGPT",permalink:"/blog/tags/chat-gpt"},{label:"railway",permalink:"/blog/tags/railway"}],readingTime:2.38,hasTruncateMarker:!1,authors:[{name:"Chengzihan",title:"Orange Chengzihan",url:"https://github.com/inannan423",imageURL:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220710133634.png",key:"Chengzihan"}],frontMatter:{slug:"chatGPT",title:"chatGPT \u63a5\u5165\u5fae\u4fe1",authors:"Chengzihan",tags:["chatGPT","railway"]},prevItem:{title:"\u6570\u5b57\u89c6\u9891\u5904\u7406\u57fa\u672c\u65b9\u6cd5",permalink:"/blog/videoprocess"},nextItem:{title:"Unity \u4e2d\u7684\u811a\u672c",permalink:"/blog/UnityCsharp"}},o={authorsImageUrls:[void 0]},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u83b7\u53d6 token",id:"\u83b7\u53d6-token",level:2},{value:"\u4f7f\u7528 Railway \u90e8\u7f72",id:"\u4f7f\u7528-railway-\u90e8\u7f72",level:2}],s={toc:c};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"chatGPT \u662f openAI \u53d1\u5e03\u7684\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u53ef\u4ee5\u7528\u6765\u751f\u6210\u804a\u5929\u5185\u5bb9\uff0c\u8fd9\u91cc\u6211\u4eec\u5c06\u5176\u63a5\u5165\u5230\u5fae\u4fe1\u4e2d\uff0c\u5b9e\u73b0\u5fae\u4fe1\u804a\u5929\u673a\u5668\u4eba\u3002  "),(0,r.kt)("h2",{id:"\u83b7\u53d6-token"},"\u83b7\u53d6 token"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("a",{parentName:"li",href:"https://chat.openai.com/chat"},"https://chat.openai.com/chat")," \u5e76\u767b\u9646\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u4e0b F12 \u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177."),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb Application \u9009\u9879\u5361 > Cookies.\n",(0,r.kt)("img",{parentName:"li",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/session-token.png",alt:"image"})),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236 ",(0,r.kt)("inlineCode",{parentName:"li"},"Secure-next-auth.session-token")," \u7684\u503c\uff0c\u4fdd\u7559\uff0c\u5728\u4e0b\u9762\u4f1a\u4f7f\u7528\u5230\u3002")),(0,r.kt)("admonition",{title:"\u65e0\u6cd5\u767b\u5f55\u7684\u89e3\u51b3\u65b9\u6cd5",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u65e0\u6cd5\u767b\u5f55\uff0c\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://www.lanka.cn/ChatGPT_4699.html"},"\u8fd9\u4e2a\u65b9\u6cd5"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-railway-\u90e8\u7f72"},"\u4f7f\u7528 Railway \u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://railway.app/"},"Railway")," \u662f\u4e00\u4e2a\u90e8\u7f72\u5e73\u53f0\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e0a\u914d\u7f6e\u57fa\u7840\u67b6\u6784\uff0c\u5728\u672c\u5730\u4f7f\u7528\u8be5\u57fa\u7840\u67b6\u6784\u8fdb\u884c\u5f00\u53d1\uff0c\u7136\u540e\u5c06\u5176\u90e8\u7f72\u5230\u4e91\u7aef\u3002\u672c\u90e8\u5206\u5c06\u63cf\u8ff0\u5982\u4f55\u5feb\u901f\u4f7f\u7528 Railway \u90e8\u7f72\u4e00\u4e2a wechat-chatgpt \u9879\u76ee\u3002  "),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u6ce8\u518c\u4e00\u4e2a Railway \u5e10\u6237\uff0c\u5e76\u4f7f\u7528 GitHub \u9a8c\u8bc1\u767b\u5f55\u3002  "),(0,r.kt)("p",null,"\u7136\u540e\u70b9\u51fb\u4e0b\u9762\u7684\u4e00\u952e\u90e8\u7f72\u6309\u94ae\u8fdb\u884c\u90e8\u7f72\u3002  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://railway.app/new/template/BHJD6L?referralCode=FaJtD_"},(0,r.kt)("img",{parentName:"a",src:"https://railway.app/button.svg",alt:"Deploy on Railway"}))),(0,r.kt)("p",null,"\u5b8c\u6210\u4e00\u4e9b\u9a8c\u8bc1\u64cd\u4f5c\u540e\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u90e8\u7f72\u4e86\u3002\u60a8\u5c06\u770b\u5230\u4ee5\u4e0b\u754c\u9762\uff1a  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/railway-deployment.png",alt:"railway-deployment"}),"  "),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u914d\u7f6e\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CHAT_GPT_EMAIL")," \uff1a\u60a8\u7684 OpenAI \u5e10\u6237\u7535\u5b50\u90ae\u4ef6\uff0c\u5982\u679c\u60a8\u6709 session_token\uff0c\u5219\u53ef\u4e0d\u586b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CHAT_GPT_PASSWORD")," \uff1a\u60a8\u7684 OpenAI \u5e10\u6237\u5bc6\u7801\uff0c\u5982\u679c\u60a8\u6709 session_token\uff0c\u5219\u53ef\u4e0d\u586b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CHAT_GPT_SESSION_TOKEN")," \uff1a\u60a8\u7684 OpenAI \u5e10\u6237 session_token\uff0c\u5982\u679c\u60a8\u6709\u7535\u5b50\u90ae\u4ef6\u548c\u5bc6\u7801\uff0c\u5219\u53ef\u9009\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CHAT_GPT_RETRY_TIMES")," \uff1a\u5f53 OpenAI API \u8fd4\u56de 429 \u6216 503 \u65f6\u91cd\u8bd5\u7684\u6b21\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CHAT_PRIVATE_TRIGGER_KEYWORD")," \uff1a\u5982\u679c\u60a8\u5e0c\u671b\u53ea\u6709\u4e00\u4e9b\u5173\u952e\u5b57\u624d\u80fd\u5728\u79c1\u4eba\u804a\u5929\u4e2d\u89e6\u53d1 chatgpt\uff0c\u5219\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u3002"))),(0,r.kt)("p",null,"\u70b9\u51fb\u201c\u90e8\u7f72\u201d\u6309\u94ae\uff0c\u60a8\u7684\u670d\u52a1\u5c06\u7acb\u5373\u5f00\u59cb\u90e8\u7f72\u3002\u4ee5\u4e0b\u754c\u9762\u51fa\u73b0\u8868\u793a\u90e8\u7f72\u5df2\u7ecf\u5f00\u59cb\uff1a  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/railway-deploying.png",alt:"railway-deploying"}),"  "),(0,r.kt)("p",null,"\u5f53\u90e8\u7f72\u8fc7\u7a0b\u663e\u793a\u4e3a\u6210\u529f\u540e\uff0c\u70b9\u51fb\u67e5\u770b\u65e5\u5fd7\uff0c\u5728\u90e8\u7f72\u65e5\u5fd7\u4e2d\u627e\u5230\u5fae\u4fe1\u767b\u5f55\u94fe\u63a5\uff1a  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/railway-deployed.png",alt:"railway-deployed"})),(0,r.kt)("p",null,"\u70b9\u51fb\u94fe\u63a5\uff0c\u4f7f\u7528\u51c6\u5907\u597d\u7684\u5fae\u4fe1\u626b\u7801\u767b\u5f55\u3002"),(0,r.kt)("p",null,"\u6210\u529f\u767b\u5f55\u5e76\u5f00\u59cb\u53d1\u9001\u548c\u63a5\u6536\u6d88\u606f\uff08\u6b64\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\uff09\uff1a  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/railway-succeed.png",alt:"railway-success"})))}m.isMDXComponent=!0}}]);
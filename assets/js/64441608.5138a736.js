"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[6867],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),i=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(t),d=a,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return t?r.createElement(g,p(p({ref:n},u),{},{components:t})):r.createElement(g,p({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,p=new Array(s);p[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<s;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const s={title:"\u4e2d\u95f4\u4ef6",date:new Date("2022-08-20T00:00:00.000Z"),authors:"Chengzihan",tags:["Node.js","Express"]},p=void 0,l={unversionedId:"BackEnd/Node.js/Express/Express4",id:"BackEnd/Node.js/Express/Express4",title:"\u4e2d\u95f4\u4ef6",description:"\u4ec0\u4e48\u662f\u4e2d\u95f4\u4ef6",source:"@site/docs/BackEnd/Node.js/Express/Express4.md",sourceDirName:"BackEnd/Node.js/Express",slug:"/BackEnd/Node.js/Express/Express4",permalink:"/docs/BackEnd/Node.js/Express/Express4",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/BackEnd/Node.js/Express/Express4.md",tags:[{label:"Node.js",permalink:"/docs/tags/node-js"},{label:"Express",permalink:"/docs/tags/express"}],version:"current",frontMatter:{title:"\u4e2d\u95f4\u4ef6",date:"2022-08-20T00:00:00.000Z",authors:"Chengzihan",tags:["Node.js","Express"]},sidebar:"tutorialSidebar",previous:{title:"\u8def\u7531",permalink:"/docs/BackEnd/Node.js/Express/Express3"},next:{title:"\u5b66\u4e60\u7b14\u8bb0",permalink:"/docs/category/\u5b66\u4e60\u7b14\u8bb0"}},o={},i=[{value:"\u4ec0\u4e48\u662f\u4e2d\u95f4\u4ef6",id:"\u4ec0\u4e48\u662f\u4e2d\u95f4\u4ef6",level:2},{value:"\u8c03\u7528\u6d41\u7a0b",id:"\u8c03\u7528\u6d41\u7a0b",level:2},{value:"\u683c\u5f0f",id:"\u683c\u5f0f",level:2},{value:"next \u51fd\u6570",id:"next-\u51fd\u6570",level:2},{value:"\u5b9a\u4e49\u4e2d\u95f4\u4ef6",id:"\u5b9a\u4e49\u4e2d\u95f4\u4ef6",level:2},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:2},{value:"\u7b80\u5316\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u7b80\u5316\u5168\u5c40\u4e2d\u95f4\u4ef6",level:3},{value:"\u591a\u4e2a\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u591a\u4e2a\u5168\u5c40\u4e2d\u95f4\u4ef6",level:3},{value:"\u4e2d\u95f4\u4ef6\u7684\u4f5c\u7528",id:"\u4e2d\u95f4\u4ef6\u7684\u4f5c\u7528",level:2},{value:"\u5c40\u90e8\u751f\u6548\u4e2d\u95f4\u4ef6",id:"\u5c40\u90e8\u751f\u6548\u4e2d\u95f4\u4ef6",level:2},{value:"\u591a\u4e2a\u5c40\u90e8\u4e2d\u95f4\u4ef6",id:"\u591a\u4e2a\u5c40\u90e8\u4e2d\u95f4\u4ef6",level:3},{value:"\u4e2d\u95f4\u4ef6\u6ce8\u610f\u4e8b\u9879",id:"\u4e2d\u95f4\u4ef6\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4e2d\u95f4\u4ef6\u5206\u7c7b",id:"\u4e2d\u95f4\u4ef6\u5206\u7c7b",level:2},{value:"\u5e94\u7528\u7ea7\u4e2d\u95f4\u4ef6",id:"\u5e94\u7528\u7ea7\u4e2d\u95f4\u4ef6",level:3},{value:"\u8def\u7531\u7ea7\u4e2d\u95f4\u4ef6",id:"\u8def\u7531\u7ea7\u4e2d\u95f4\u4ef6",level:3},{value:"\u9519\u8bef\u7ea7\u4e2d\u95f4\u4ef6",id:"\u9519\u8bef\u7ea7\u4e2d\u95f4\u4ef6",level:3},{value:"\u5185\u7f6e\u4e2d\u95f4\u4ef6",id:"\u5185\u7f6e\u4e2d\u95f4\u4ef6",level:3},{value:"\u4ece Apifox \u53d1\u9001\u4e00\u4e2a json \u6570\u636e\u5230\u670d\u52a1\u5668",id:"\u4ece-apifox-\u53d1\u9001\u4e00\u4e2a-json-\u6570\u636e\u5230\u670d\u52a1\u5668",level:4},{value:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",id:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",level:2}],u={toc:i};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u4e2d\u95f4\u4ef6"},"\u4ec0\u4e48\u662f\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u95f4\u4ef6"),"\uff08Middleware\uff09\uff0c\u662f\u4e1a\u52a1\u6d41\u7a0b\u7684\u4e2d\u95f4\u5904\u7406\u73af\u8282\u3002  "),(0,a.kt)("p",null,"\u5728\u6c61\u6c34\u5904\u7406\u65f6\u8981\u7ecf\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u7ea7\u5904\u7406\u3001\u4e8c\u7ea7\u5904\u7406\u3001\u4e09\u7ea7\u5904\u7406"),"\u624d\u80fd\u6392\u653e\u51fa\u7b26\u5408\u6807\u51c6\u7684\u6c61\u6c34\u3002\u8fd9\u4e09\u4e2a\u5904\u7406\u6362\u59d0\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u95f4\u4ef6"),"\uff0c\u4e2d\u95f4\u4ef6\u90fd\u9700\u8981",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\u548c\u8f93\u51fa"),"\u3002"),(0,a.kt)("h2",{id:"\u8c03\u7528\u6d41\u7a0b"},"\u8c03\u7528\u6d41\u7a0b"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u8bf7\u6c42\u5230\u8fbe Express \u670d\u52a1\u5668\u65f6\uff0c\u5728\u65e0\u6cd5\u76f4\u63a5\u5b8c\u6210\u5904\u7406\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u8c03\u7528\u591a\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u5bf9\u8fd9\u6b21\u7684\u8bf7\u6c42\u8fdb\u884c",(0,a.kt)("strong",{parentName:"p"},"\u9884\u5904\u7406"),"\u3002\u5f53\u6240\u6709\u5904\u7406\u5b8c\u6bd5\u540e\uff0c\u518d\u4ea4\u4ed8\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h2",{id:"\u683c\u5f0f"},"\u683c\u5f0f"),(0,a.kt)("p",null,"\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," \u5904\u7406\u51fd\u6570\uff0c\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"req"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"res"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u4e09\u4e2a\u53c2\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," \u53c2\u6570\u628a\u6d41\u8f6c\u5173\u7cfb\u4ea4\u7ed9\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u6216\u8def\u7531:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/',function(req,res,next){\n    // \u4e2d\u95f4\u4ef6\u51fd\u6570\n    next();\n})\n")),(0,a.kt)("h2",{id:"next-\u51fd\u6570"},"next \u51fd\u6570"),(0,a.kt)("p",null,"\u5b9e\u73b0\u591a\u4e2a\u4e2d\u95f4\u4ef6\u8fde\u7eed\u8c03\u7528\u7684\u5173\u952e\u3002\u5b83\u8868\u793a\u628a\u6d41\u8f6c\u5173\u7cfb\u8f6c\u4ea4\u7ed9\u4e0b\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u95f4\u4ef6"),"\u6216\u8005",(0,a.kt)("strong",{parentName:"p"},"\u8def\u7531"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/4b31d288d06ea910c7678d0362c33d2.jpg",alt:"1"})),(0,a.kt)("h2",{id:"\u5b9a\u4e49\u4e2d\u95f4\u4ef6"},"\u5b9a\u4e49\u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mw = function(req,res,next){\n    console.log("\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570");\n    // \u5fc5\u987b\u8c03\u7528next\u51fd\u6570\n    next();\n}\n')),(0,a.kt)("h2",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u53d1\u8d77\u4efb\u4f55\u8bf7\u6c42\u90fd\u4f1a\u51fa\u53d1\u7684\u4e2d\u95f4\u4ef6\u53eb\u505a\u5168\u5c40\u751f\u6548\u4e2d\u95f4\u4ef6\u3002\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.use")," \u5373\u53ef\u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u751f\u6548\u7684\u4e2d\u95f4\u4ef6\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use(mw)\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u811a\u672c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bfc\u5165express\nconst express = require("express");\n// \u521b\u5efa\u670d\u52a1\u5668\u5b9e\u4f8b\nconst app = express();\n\n// \u5bfc\u5165\u8def\u7531\u6a21\u5757\nconst router = require("./06.router");\n\n// \u5b9a\u4e49\u4e2d\u95f4\u4ef6\u51fd\u6570\nconst mw = function (req, res, next) {\n  console.log("\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570");\n  next();\n};\n\n// \u5c06mw\u6ce8\u518c\u4e3a\u5168\u5c40\u751f\u6548\u7684\u4e2d\u95f4\u4ef6\napp.use(mw);\n\napp.get("/", (req, res) => {\n  res.send("HomePage");\n});\n\napp.get("/user", (req, res) => {\n  res.send("UserPage");\n});\n\n// \u76d1\u542c\u63a5\u53e3\napp.listen(80, () => {\n  console.log("Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1");\n});\n')),(0,a.kt)("p",null,"\u5728\u7ec8\u7aef\u8fd0\u884c,\u5e76\u5728 Apifox \u4e2d\u8bf7\u6c42\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," \u63a5\u53e3\uff1a  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220820144339.png",alt:"1"})),(0,a.kt)("p",null,"\u63a7\u5236\u53f0\u8f93\u51fa\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[nodemon] 2.0.19\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json  \n[nodemon] starting `node .\\08.\u4e2d\u95f4\u4ef6.js` \nExpress\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1\n\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570\n")),(0,a.kt)("p",null,"\u8bf7\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"/user")," \u63a5\u53e3\uff1a  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220820144508.png",alt:"2"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[nodemon] 2.0.19\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json  \n[nodemon] starting `node .\\08.\u4e2d\u95f4\u4ef6.js`    \nExpress\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1\n\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570\n\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e2d\u95f4\u4ef6 mw \u8c03\u7528\u5b8c\u6210\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u51fd\u6570\u8c03\u7528\u4e86\u4e0b\u4e00\u4e2a\u8def\u7531\u3002"),(0,a.kt)("h3",{id:"\u7b80\u5316\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u7b80\u5316\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4e0a\u9762\u7684\u5b9a\u4e49\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u64cd\u4f5c\u662f\u53ef\u4ee5\u5408\u5e76\u7684\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.use(function (req, res, next) {\n  console.log("\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570");\n  next();\n});\n')),(0,a.kt)("h3",{id:"\u591a\u4e2a\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u591a\u4e2a\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u4f1a\u6309\u7167\u5b9a\u4e49\u7684\u987a\u5e8f\u8fdb\u884c\u4e2d\u95f4\u4ef6\u8c03\u7528\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.use(function (req, res, next) {\n  console.log("\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u65701");\n  next();\n});\napp.use(function (req, res, next) {\n  console.log("\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u65702");\n  next();\n});\n')),(0,a.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u7684\u4f5c\u7528"},"\u4e2d\u95f4\u4ef6\u7684\u4f5c\u7528"),(0,a.kt)("p",null,"\u5728\u591a\u4e2a\u4e2d\u95f4\u4ef6\u7684\u4e2d\u95f4\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5171\u4eab\u540c\u4e00\u4efdreq\u548cres"),"\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728\u4e0a\u6e38\u4e2d\u95f4\u4ef6\u4e2d\u7edf\u4e00\u4e3a",(0,a.kt)("strong",{parentName:"p"},"req\u548cres"),"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u4f9b\u4e0b\u6e38\u7684\u4e2d\u95f4\u4ef6\u548c\u8def\u7531\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5c06",(0,a.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u65f6\u95f4"),"\u62bd\u8c61\u6210\u4e00\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u5728\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u4e2d\uff0c\u6211\u4eec\u628a\u8bf7\u6c42\u5230\u8fbe\u7684\u65f6\u95f4\u6302\u8f7d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," \u5bf9\u8c61\u4e0a\uff0c\u8fd9\u6837\uff0c\u5728\u4e0b\u9762\u76d1\u542c\u8bf7\u6c42\u65f6\u5c31\u53ef\u4ee5\u4ece\u4e2d\u95f4\u4ef6\u83b7\u53d6\u8bf7\u6c42\u5230\u8fbe\u7684\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bfc\u5165express\nconst express = require("express");\n// \u521b\u5efa\u670d\u52a1\u5668\u5b9e\u4f8b\nconst app = express();\n\n// \u5bfc\u5165\u8def\u7531\u6a21\u5757\nconst router = require("./06.router");\n\n// \u5b9a\u4e49\u4e2d\u95f4\u4ef6\u51fd\u6570\nconst mw = function (req, res, next) {\n  // \u83b7\u53d6\u8bf7\u6c42\u5230\u8fbe\u670d\u52a1\u5668\u7684\u65f6\u95f4\n  const time = Date.now();\n  // \u6302\u8f7d\u5230req\n  // highlight-start\n  req.startTime = time;\n  // highlight-end\n  console.log("\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570");\n  next();\n};\n\n// \u5c06mw\u6ce8\u518c\u4e3a\u5168\u5c40\u751f\u6548\u7684\u4e2d\u95f4\u4ef6\napp.use(mw);\n\napp.get("/", (req, res) => {\n    // highlight-start\n  res.send("HomePage" + req.startTime);\n  // highlight-end\n});\n\napp.get("/user", (req, res) => {\n  res.send("UserPage" + req.startTime);\n});\n\n// \u76d1\u542c\u63a5\u53e3\napp.listen(80, () => {\n  console.log("Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1");\n});\n')),(0,a.kt)("p",null,"\u6267\u884c\u8fd9\u4e2a\u811a\u672c\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220820154318.png",alt:"1"})),(0,a.kt)("p",null,"\u4e0a\u9762\u5c31\u62ff\u5230\u4e86\u8be5\u65f6\u95f4\u3002  "),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u4e2d\u95f4\u4ef6\u53ef\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u7b80\u5316"),"\u4ee3\u7801\u7684\u4e66\u5199\u3002"),(0,a.kt)("h2",{id:"\u5c40\u90e8\u751f\u6548\u4e2d\u95f4\u4ef6"},"\u5c40\u90e8\u751f\u6548\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u4e0d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.use")," \u51fd\u6570\u6765\u58f0\u660e\u4e2d\u95f4\u4ef6\uff0c\u5c31\u4e0d\u4f1a\u662f\u5168\u5c40\u7684\u4e2d\u95f4\u4ef6\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bfc\u5165express\nconst express = require("express");\n// \u521b\u5efa\u670d\u52a1\u5668\u5b9e\u4f8b\nconst app = express();\n\n// \u5bfc\u5165\u8def\u7531\u6a21\u5757\nconst router = require("./06.router");\n\n// \u5b9a\u4e49\u4e2d\u95f4\u4ef6\u51fd\u6570\nconst mw = function (req, res, next) {\n  // \u83b7\u53d6\u8bf7\u6c42\u5230\u8fbe\u670d\u52a1\u5668\u7684\u65f6\u95f4\n  const time = Date.now();\n  // \u6302\u8f7d\u5230req\n\n  req.startTime = time;\n\n  console.log("\u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570");\n  next();\n};\n\n// \u5728\u4e0b\u9762\u589e\u52a0\u4e00\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u8c03\u7528\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u3002\n  // highlight-start\napp.get("/", mw, (req, res) => {\n    // highlight-end\n  res.send("HomePage" + req.startTime);\n});\n\napp.get("/user", (req, res) => {\n  res.send("UserPage" + req.startTime);\n});\n\n// \u76d1\u542c\u63a5\u53e3\napp.listen(80, () => {\n  console.log("Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1");\n});\n')),(0,a.kt)("h3",{id:"\u591a\u4e2a\u5c40\u90e8\u4e2d\u95f4\u4ef6"},"\u591a\u4e2a\u5c40\u90e8\u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.get("/", mw1 , mw2 , mw3 , (req, res) => {\n  res.send("HomePage" + req.startTime);\n});\n//\u6216\u8005\napp.get("/", [mw1 , mw2 , mw3] , (req, res) => {\n  res.send("HomePage" + req.startTime);\n});\n')),(0,a.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u6ce8\u610f\u4e8b\u9879"},"\u4e2d\u95f4\u4ef6\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5728\u8def\u7531\u4e4b\u524d\u5b9a\u4e49\u4e2d\u95f4\u4ef6\uff0c\u5426\u5219\u5c31\u4e0d\u4f1a\u751f\u6548"),(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8bf7\u6c42\u53ef\u4ee5\u8fde\u7eed\u8c03\u7528\u591a\u4e2a\u4e2d\u95f4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6\u7ed3\u675f ",(0,a.kt)("inlineCode",{parentName:"li"},"next()")," \u51fd\u6570\u4e0d\u53ef\u5ffd\u7565\uff0c\u5426\u5219\u8bf7\u6c42\u4e0d\u4f1a\u7ee7\u7eed"),(0,a.kt)("li",{parentName:"ul"},"\u9632\u6b62\u903b\u8f91\u6df7\u4e71\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"next()")," \u4e4b\u540e\u4e0d\u8981\u518d\u7f16\u5199\u5176\u4ed6\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u7eed\u8c03\u7528\u591a\u4e2a\u4e2d\u95f4\u4ef6\u65f6\uff0c\u516c\u7528 req \u548c res \u5bf9\u8c61")),(0,a.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u5206\u7c7b"},"\u4e2d\u95f4\u4ef6\u5206\u7c7b"),(0,a.kt)("p",null,"Express \u5c06\u4e2d\u95f4\u4ef6\u5206\u6210\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u4e94\u7c7b"),"\u7684\u4e2d\u95f4\u4ef6\uff1a  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u8def\u7531\u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u9519\u8bef\u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"Express \u5185\u7f6e\u4e2d\u95f4\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u65b9\u4e2d\u95f4\u4ef6")),(0,a.kt)("h3",{id:"\u5e94\u7528\u7ea7\u4e2d\u95f4\u4ef6"},"\u5e94\u7528\u7ea7\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u51e1\u662f\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.use()")," ",(0,a.kt)("inlineCode",{parentName:"p"},"app.get()")," ",(0,a.kt)("inlineCode",{parentName:"p"},"app.post()")," \u4e4b\u7c7b\u7ed1\u5b9a\u5230 app \u4e0a\u7684\u4e2d\u95f4\u4ef6\u90fd\u662f\u5e94\u7528\u7ea7\u7684\u4e2d\u95f4\u4ef6\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u7684\u5168\u5c40\u4e2d\u95f4\u4ef6\u548c\u5c40\u90e8\u4e2d\u95f4\u4ef6\u90fd\u662f\u5e94\u7528\u7ea7\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'app.get("/", mw1 , mw2 , mw3 , (req, res) => {\n  res.send("HomePage" + req.startTime);\n});\n')),(0,a.kt)("h3",{id:"\u8def\u7531\u7ea7\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u7ea7\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u7ed1\u5b9a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"express.Router()")," \u5b9e\u4f8b\u4e0a\u7684\u4e2d\u95f4\u4ef6\u90fd\u662f\u8def\u7531\u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'router.use(function(req,res,next){\n    console.log("\u8def\u7531\u7ea7\u4e2d\u95f4\u4ef6");0\n    next();\n})\n')),(0,a.kt)("h3",{id:"\u9519\u8bef\u7ea7\u4e2d\u95f4\u4ef6"},"\u9519\u8bef\u7ea7\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u7528\u4e8e\u6355\u83b7\u9879\u76ee\u4e2d\u53d1\u751f\u7684\u9519\u8bef\uff0c\u5305\u542b\u56db\u4e2a\u53c2\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"err,req,res,next"),":  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/'.function(req,res){\n    // \u4eba\u4e3a\u5236\u9020\u9519\u8bef\n    throw new Error('\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff01');\n    // \u56e0\u4e3a\u4e0a\u4e00\u884c\u53d1\u751f\u9519\u8bef\uff0c\u6240\u4ee5\u4e0d\u4f1a\u6267\u884c\u5230\u8fd9\u91cc\n    res.send('HomePage');\n})\napp.use(function(err,req,res,next){\n    console.log('\u53d1\u751f\u4e86\u9519\u8bef\u9519\u8bef'+err.message);\n    res.send('Error!'+err.message);\n})\n")),(0,a.kt)("h3",{id:"\u5185\u7f6e\u4e2d\u95f4\u4ef6"},"\u5185\u7f6e\u4e2d\u95f4\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"express.static"),"\u5feb\u901f\u6258\u7ba1\u9759\u6001\u8d44\u6e90\u7684\u4e2d\u95f4\u4ef6\uff08\u65e0\u517c\u5bb9\u6027\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"express.json")," \u89e3\u6790 json \u683c\u5f0f\u7684\u8bf7\u6c42\u4f53\u6570\u636e\uff084.16.0+)\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"express.urlencoded")," \u89e3\u6790 URL-encoded \u683c\u5f0f\u7684\u8bf7\u6c42\u4f53\u6570\u636e\uff084.16.0+)\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use(express.json())\napp.use(express.urlencoded({ extended: false }))\n")),(0,a.kt)("h4",{id:"\u4ece-apifox-\u53d1\u9001\u4e00\u4e2a-json-\u6570\u636e\u5230\u670d\u52a1\u5668"},"\u4ece Apifox \u53d1\u9001\u4e00\u4e2a json \u6570\u636e\u5230\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u5728 Apifox \u4e2d Body \u9762\u677f\u53d1\u9001\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1660983626411.png",alt:"1"}),"\n\u6a21\u62df\u4e00\u4e9b\u6570\u636e\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220820162629.png",alt:"3"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bfc\u5165express\nconst express = require("express");\n// \u521b\u5efa\u670d\u52a1\u5668\u5b9e\u4f8b\nconst app = express();\n\napp.post("/user", (req, res) => {\n  // \u4f7f\u7528 res.body \u63a5\u6536\u53d1\u6765\u7684\u8bf7\u6c42\u4f53\u6570\u636e\n  console.log(req.body);\n  res.send("UserPage");\n});\n\n// \u76d1\u542c\u63a5\u53e3\napp.listen(80, () => {\n  console.log("Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1");\n});\n')),(0,a.kt)("p",null,"\u63a7\u5236\u53f0\u6253\u5370\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1\nundefined\n")),(0,a.kt)("p",null,"\u6ca1\u6709\u914d\u7f6e\u89e3\u6790\u65b9\u5f0f\uff0c\u6240\u4ee5\u8fd9\u91cc\u65e0\u6cd5\u89e3\u6790\u8868\u5355\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u5bfc\u5165express\nconst express = require("express");\n// \u521b\u5efa\u670d\u52a1\u5668\u5b9e\u4f8b\nconst app = express();\n// highlight-start\napp.use(express.json());\n// highlight-end\napp.post("/user", (req, res) => {\n  // \u4f7f\u7528 res.body \u63a5\u6536\u53d1\u6765\u7684\u8bf7\u6c42\u4f53\u6570\u636e\n  console.log(req.body);\n  res.send("UserPage");\n});\n\n// \u76d1\u542c\u63a5\u53e3\napp.listen(80, () => {\n  console.log("Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1");\n});\n')),(0,a.kt)("p",null,"\u91cd\u65b0\u53d1\u9001\u8bf7\u6c42\uff0c\u63a7\u5236\u53f0\u6253\u5370\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1\n{ name: 'zs', age: 10 }\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"},"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"))}m.isMDXComponent=!0}}]);
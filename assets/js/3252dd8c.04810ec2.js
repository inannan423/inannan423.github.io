"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[3282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(r),m=s,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(7462),s=(r(7294),r(3905));const a={title:"\u8def\u7531",date:new Date("2022-08-20T00:00:00.000Z"),authors:"Chengzihan",tags:["Node.js","Express"]},l=void 0,p={unversionedId:"\u540e\u7aef/Node.js/Express/Express3",id:"\u540e\u7aef/Node.js/Express/Express3",title:"\u8def\u7531",description:"\u4ec0\u4e48\u662f\u8def\u7531",source:"@site/docs/\u540e\u7aef/Node.js/Express/Express3.md",sourceDirName:"\u540e\u7aef/Node.js/Express",slug:"/\u540e\u7aef/Node.js/Express/Express3",permalink:"/docs/\u540e\u7aef/Node.js/Express/Express3",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u540e\u7aef/Node.js/Express/Express3.md",tags:[{label:"Node.js",permalink:"/docs/tags/node-js"},{label:"Express",permalink:"/docs/tags/express"}],version:"current",frontMatter:{title:"\u8def\u7531",date:"2022-08-20T00:00:00.000Z",authors:"Chengzihan",tags:["Node.js","Express"]},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u4f7f\u7528",permalink:"/docs/\u540e\u7aef/Node.js/Express/Express2"},next:{title:"\u4e2d\u95f4\u4ef6",permalink:"/docs/\u540e\u7aef/Node.js/Express/Express4"}},o={},i=[{value:"\u4ec0\u4e48\u662f\u8def\u7531",id:"\u4ec0\u4e48\u662f\u8def\u7531",level:2},{value:"Express \u4e2d\u7684\u8def\u7531",id:"express-\u4e2d\u7684\u8def\u7531",level:2},{value:"\u7ec4\u6210",id:"\u7ec4\u6210",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u5339\u914d\u8fc7\u7a0b",id:"\u5339\u914d\u8fc7\u7a0b",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u6302\u8f7d\u5230 app",id:"\u6302\u8f7d\u5230-app",level:3},{value:"\u6a21\u5757\u5316\u8def\u7531",id:"\u6a21\u5757\u5316\u8def\u7531",level:3},{value:"\u521b\u5efa\u8def\u7531\u6a21\u5757",id:"\u521b\u5efa\u8def\u7531\u6a21\u5757",level:4},{value:"\u6ce8\u518c\u8def\u7531\u6a21\u5757",id:"\u6ce8\u518c\u8def\u7531\u6a21\u5757",level:4},{value:"\u8def\u7531\u524d\u7f00",id:"\u8def\u7531\u524d\u7f00",level:3}],u={toc:i};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4ec0\u4e48\u662f\u8def\u7531"},"\u4ec0\u4e48\u662f\u8def\u7531"),(0,s.kt)("p",null,"\u8def\u7531\u5c31\u662f",(0,s.kt)("strong",{parentName:"p"},"\u6620\u5c04\u5173\u7cfb"),"\u3002\u6bd4\u5982\u62e8\u6253 10086 \u65f6\uff0c\u4e0d\u540c\u7684\u6570\u5b57\u6309\u952e\u53ef\u4ee5\u6620\u5c04\u4e0d\u540c\u7684\u529f\u80fd\uff0c\u6570\u5b57\u6309\u952e\u548c\u529f\u80fd\u4e4b\u95f4\u7684\u5173\u7cfb\u5c31\u662f\u6620\u5c04\u5173\u7cfb\u3002"),(0,s.kt)("h2",{id:"express-\u4e2d\u7684\u8def\u7531"},"Express \u4e2d\u7684\u8def\u7531"),(0,s.kt)("h3",{id:"\u7ec4\u6210"},"\u7ec4\u6210"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Express \u4e2d\u7684\u8def\u7531")," \u6307",(0,s.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42"),"\u548c",(0,s.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u5904\u7406\u51fd\u6570"),"\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002Express \u4e2d\u7684\u8def\u7531\u7531\u4e0b\u9762\u7684\u4e09\u90e8\u5206\u7ec4\u6210\uff1a  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7684\u7c7b\u578b"),(0,s.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7684 URL \u5730\u5740"),(0,s.kt)("li",{parentName:"ul"},"\u5904\u7406\u51fd\u6570")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.METHOD(PATH,HANDLER)\n// Method \u6307\u8bf7\u6c42\u7684\u7c7b\u578b\uff0cPath\u6307\u8bf7\u6c42\u7684URL\u5730\u5740\uff0cHANDLER\u6307\u5904\u7406\u51fd\u6570\n")),(0,s.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,s.kt)("p",null,"\u5bf9\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u54cd\u5e94\u5c31\u662f\u4e00\u4e2a\u8def\u7531\u7684\u4f8b\u5b50\uff1a  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get(\"/user\", (req, res) => {\n  res.send('HelloWorld');\n});\n")),(0,s.kt)("h3",{id:"\u5339\u914d\u8fc7\u7a0b"},"\u5339\u914d\u8fc7\u7a0b"),(0,s.kt)("p",null,"\u6bcf\u6b21\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u9700\u8981\u5148\u8fdb\u884c\u8def\u7531\u5339\u914d\uff0c\u53ea\u6709\u5339\u914d\u6210\u529f\u624d\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684\u51fd\u6570\u3002\u5728\u8def\u7531\u5339\u914d\u65f6\uff0c\u4f1a\u6309\u7167\u51fd\u6570\u7f16\u5199\u7684\u987a\u5e8f",(0,s.kt)("strong",{parentName:"p"},"\u4ece\u4e0a\u5230\u4e0b"),"\u8fdb\u884c\u5339\u914d\uff0c\u76f4\u5230\u5339\u914d\u6210\u529f\u4e3a\u6b62\u3002",(0,s.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u7684\u7c7b\u578b\u548c\u8bf7\u6c42\u7684URL\u5730\u5740\u5fc5\u987b\u540c\u65f6\u6ee1\u8db3\u624d\u80fd\u5339\u914d\u6210\u529f"),"\u3002  "),(0,s.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,s.kt)("h3",{id:"\u6302\u8f7d\u5230-app"},"\u6302\u8f7d\u5230 app"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u6302\u8f7d\u5230get\napp.get(\"/user\", (req, res) => {\n  res.send('HelloWorld');\n});\n// \u6302\u8f7d\u5230post\napp.post(\"/user\", (req, res) => {\n  res.send('HelloWorld');\n});\n")),(0,s.kt)("h3",{id:"\u6a21\u5757\u5316\u8def\u7531"},"\u6a21\u5757\u5316\u8def\u7531"),(0,s.kt)("p",null,"\u4e3a\u4e86\u5bf9\u8def\u7531\u8fdb\u884c\u6a21\u5757\u5316\u7ba1\u7406\uff0cExpress \u4e0d\u5efa\u8bae\u50cf\u4e0a\u9762\u4e00\u6837\u76f4\u63a5\u5728 app \u4e0a\u6302\u8f7d\uff0c\u800c\u662f\u63a8\u8350\u5c06\u5176\u62bd\u79bb\u4e3a\u5355\u72ec\u7684\u6a21\u5757\u3002  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8def\u7531\u6a21\u5757\u5bf9\u5e94\u7684js\u6587\u4ef6"),(0,s.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"express.router()")," \u521b\u5efa\u8def\u7531\u5b9e\u4f8b\u5bf9\u8c61"),(0,s.kt)("li",{parentName:"ul"},"\u5411\u5b9e\u4f8b\u5bf9\u8c61\u6302\u8f7d\u5177\u4f53\u7684\u8def\u7531"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"module.exports")," \u5411\u5916\u5171\u4eab\u8def\u7531\u5bf9\u8c61"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"app.use")," \u51fd\u6570\u6ce8\u518c\u8def\u7531\u6a21\u5757")),(0,s.kt)("h4",{id:"\u521b\u5efa\u8def\u7531\u6a21\u5757"},"\u521b\u5efa\u8def\u7531\u6a21\u5757"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="router.js"',title:'"router.js"'},"// router.js\nconst express = require('express')\n// \u521b\u5efa\u8def\u7531\u5bf9\u8c61\nconst router = express.Router()\n\n// \u6302\u8f7d\u5177\u4f53\u8def\u7531\n// highlight-start\nrouter.get('/user/list', (req, res) => {\n  res.send('Get user list.')\n})\nrouter.post('/user/add', (req, res) => {\n  res.send('Add new user.')\n})\n// highlight-end\n// \u5411\u5916\u5bfc\u51fa\u8def\u7531\u5bf9\u8c61\nmodule.exports = router\n")),(0,s.kt)("h4",{id:"\u6ce8\u518c\u8def\u7531\u6a21\u5757"},"\u6ce8\u518c\u8def\u7531\u6a21\u5757"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="useRouter.js"',title:'"useRouter.js"'},'// \u5bfc\u5165express\nconst express = require("express");\n// \u521b\u5efa\u670d\u52a1\u5668\u5b9e\u4f8b\nconst app = express();\n\n// highlight-start\n// \u5bfc\u5165\u8def\u7531\u6a21\u5757\nconst router = require("./06.router");\n\n// \u6ce8\u518c\u8def\u7531\u6a21\u5757\napp.use(router);\n// highlight-end\n\n// \u76d1\u542c\u63a5\u53e3\napp.listen(80, () => {\n  console.log("Express\u670d\u52a1\u5668\u8fd0\u884c\u5728 http://127.0.0.1");\n});\n')),(0,s.kt)("p",null,"\u6b64\u65f6\uff0c\u4f7f\u7528 apifox \u8bf7\u6c42\u8fd9\u4e2a\u63a5\u53e3\u3002  "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220820125151.png",alt:"1"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220820125237.png",alt:"2"})),(0,s.kt)("p",null,"\u5f97\u5230\u4e86\u9884\u671f\u7ed3\u679c\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u91cc\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"router")," \u5c31\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u3002"),(0,s.kt)("h3",{id:"\u8def\u7531\u524d\u7f00"},"\u8def\u7531\u524d\u7f00"),(0,s.kt)("p",null,"\u7c7b\u4f3c\u524d\u9762\u7684\u6258\u7ba1\u9759\u6001\u8d44\u6e90\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4e3a\u8def\u7531\u6dfb\u52a0\u524d\u7f00\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.use('/api',router)\n")))}c.isMDXComponent=!0}}]);
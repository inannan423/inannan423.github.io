"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[3447],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),k=a,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||r;return t?l.createElement(m,o(o({ref:n},u),{},{components:t})):l.createElement(m,o({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const r={title:"fs \u6587\u4ef6\u7cfb\u7edf\u6a21\u5757",date:new Date("2022-08-11T00:00:00.000Z"),authors:"Chengzihan",tags:["Node.js"]},o=void 0,i={unversionedId:"\u540e\u7aef/Node.js/NodeBasic/NodejsFs",id:"\u540e\u7aef/Node.js/NodeBasic/NodejsFs",title:"fs \u6587\u4ef6\u7cfb\u7edf\u6a21\u5757",description:"fs \u6a21\u5757\u662f Node \u63d0\u4f9b\u7684\u7528\u6765\u64cd\u4f5c\u6587\u4ef6\u7684\u6a21\u5757\u3002\u7528\u6765\u6ee1\u8db3\u5bf9\u6587\u4ef6\u64cd\u4f5c\u7684\u9700\u6c42\u3002",source:"@site/docs/\u540e\u7aef/Node.js/NodeBasic/03.NodejsFs.md",sourceDirName:"\u540e\u7aef/Node.js/NodeBasic",slug:"/\u540e\u7aef/Node.js/NodeBasic/NodejsFs",permalink:"/docs/\u540e\u7aef/Node.js/NodeBasic/NodejsFs",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u540e\u7aef/Node.js/NodeBasic/03.NodejsFs.md",tags:[{label:"Node.js",permalink:"/docs/tags/node-js"}],version:"current",sidebarPosition:3,frontMatter:{title:"fs \u6587\u4ef6\u7cfb\u7edf\u6a21\u5757",date:"2022-08-11T00:00:00.000Z",authors:"Chengzihan",tags:["Node.js"]},sidebar:"tutorialSidebar",previous:{title:"Node.js \u8fd0\u884c",permalink:"/docs/\u540e\u7aef/Node.js/NodeBasic/Nodejs2"},next:{title:"path \u8def\u5f84\u6a21\u5757",permalink:"/docs/\u540e\u7aef/Node.js/NodeBasic/Nodepath"}},s={},p=[{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:2},{value:"\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u7684\u5185\u5bb9",id:"\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u7684\u5185\u5bb9",level:2},{value:"\u8bed\u6cd5\u683c\u5f0f",id:"\u8bed\u6cd5\u683c\u5f0f",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u8bfb\u53d6\u6210\u529f",id:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u8bfb\u53d6\u6210\u529f",level:3},{value:"\u5411\u6307\u5b9a\u6587\u4ef6\u5199\u5165\u5185\u5bb9",id:"\u5411\u6307\u5b9a\u6587\u4ef6\u5199\u5165\u5185\u5bb9",level:2},{value:"\u8bed\u6cd5\u683c\u5f0f",id:"\u8bed\u6cd5\u683c\u5f0f-1",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:3},{value:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5199\u5165\u6210\u529f",id:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5199\u5165\u6210\u529f",level:3},{value:"\u7ec3\u4e60-1",id:"\u7ec3\u4e60-1",level:2},{value:"\u8def\u5f84\u52a8\u6001\u62fc\u63a5",id:"\u8def\u5f84\u52a8\u6001\u62fc\u63a5",level:2},{value:"\u95ee\u9898\u4ea7\u751f",id:"\u95ee\u9898\u4ea7\u751f",level:3},{value:"\u95ee\u9898\u89e3\u51b3",id:"\u95ee\u9898\u89e3\u51b3",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fs")," \u6a21\u5757\u662f Node \u63d0\u4f9b\u7684\u7528\u6765\u64cd\u4f5c\u6587\u4ef6\u7684\u6a21\u5757\u3002\u7528\u6765\u6ee1\u8db3\u5bf9\u6587\u4ef6\u64cd\u4f5c\u7684\u9700\u6c42\u3002  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.readFile()"),"\u65b9\u6cd5\uff0c\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u7684\u5185\u5bb9\u3002  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.writeFile()")," \u65b9\u6cd5\uff0c\u5411\u6307\u5b9a\u6587\u4ef6\u5199\u5165\u5185\u5bb9\u3002  ")),(0,a.kt)("h2",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,a.kt)("p",null,"fs \u6587\u4ef6\u6a21\u5757\u662f Node \u81ea\u5e26\u7684\u6a21\u5757\uff0c\u56e0\u6b64\u53ea\u8981\u5bfc\u5165\u6a21\u5757\u5373\u53ef\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs=require('fs');\n")),(0,a.kt)("h2",{id:"\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u7684\u5185\u5bb9"},"\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u7684\u5185\u5bb9"),(0,a.kt)("h3",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fs.readFile(path [, options],callback);\n")),(0,a.kt)("p",null,"\u53c2\u6570\u89e3\u8bfb\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," : \u5fc5\u9009\u53c2\u6570\u3002\u5b57\u7b26\u4e32\uff0c\u6807\u660e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," : \u53ef\u9009\u53c2\u6570\u3002\u6807\u8bc6\u7f16\u7801\u683c\u5f0f\u3002  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callback")," : \u5fc5\u9009\u53c2\u6570\uff0c\u6587\u4ef6\u8bfb\u53d6\u5b8c\u6210\u540e\u8981\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u3002  ")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"utf8")," \u7f16\u7801\u683c\u5f0f\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u5e76\u6253\u5370 err \u548c dataStr \u7684\u503c\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs=require('fs');\nfs.readFile('./files/11.txt','utf8',function(err,dataStr){\n    // \u65e0\u8bba\u662f\u5426\u8bfb\u53d6\u6210\u529f\u90fd\u4f1a\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u6574\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\n    console.log(err);\n    console.log('----');// \u5206\u5272\u7ebf\n    console.log(dataStr);// \u8bfb\u53d6\u6210\u529f\u7684\u7ed3\u679c\n})\n")),(0,a.kt)("p",null,"\u7528 VScode \u521b\u5efa\u4e00\u4e2a\u5de5\u7a0b\u3002  "),(0,a.kt)("p",null,"\u521b\u5efa api.js \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nfs.readFile("11.txt", "utf8", function (err, dataStr) {\n  // \u65e0\u8bba\u662f\u5426\u8bfb\u53d6\u6210\u529f\u90fd\u4f1a\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u6574\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\n  console.log(err);\n  console.log("----"); // \u5206\u5272\u7ebf\n  console.log(dataStr); // \u8bfb\u53d6\u6210\u529f\u7684\u7ed3\u679c\n});\n')),(0,a.kt)("p",null,"\u5728\u540c\u5c42\u7ea7\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"11.txt")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1111\n")),(0,a.kt)("p",null,"\u5728\u7ec8\u7aef\u6267\u884c\u8fd9\u6bb5\u4ee3\u7801\uff1a  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220811105532.png",alt:"2"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u89c1\u5f97\uff0c\u8be5\u65b9\u6cd5\u6210\u529f\u8bfb\u53d6\u4e86\u8fd9\u4e2a\u6587\u672c\u6587\u4ef6\uff0c\u5e76\u8fd4\u56de\u4e86\u6b63\u786e\u7684\u503c\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"null\n----\n1111\n")),(0,a.kt)("p",null,"\u56e0\u4e3a\u6ca1\u6709\u53d1\u751f\u9519\u8bef\uff0c\u6240\u4ee5 err \u53c2\u6570\u503c\u4e3a null \u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4e0d\u59a8\u8bd5\u4e00\u4e0b\uff0c\u8ba9\u8fd9\u6bb5\u4ee3\u7801\u8bfb\u53d6\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\u3002\u8fd9\u6b21\u5e94\u8be5\u4f1a\u6709 err \u62a5\u9519\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nfs.readFile("no.txt", "utf8", function (err, dataStr) {\n  // \u65e0\u8bba\u662f\u5426\u8bfb\u53d6\u6210\u529f\u90fd\u4f1a\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u6574\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\n  console.log(err);\n  console.log("----"); // \u5206\u5272\u7ebf\n  console.log(dataStr); // \u8bfb\u53d6\u6210\u529f\u7684\u7ed3\u679c\n});\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220811105917.png",alt:"3"})),(0,a.kt)("p",null,"\u6b63\u5982\u9884\u671f\u7684\uff0c\u8fd4\u56de\u4e86\u9519\u8bef\u5bf9\u8c61\u4ee5\u53ca\u4e0d\u5b58\u5728\u6570\u636e\u503c\u3002"),(0,a.kt)("h3",{id:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u8bfb\u53d6\u6210\u529f"},"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u8bfb\u53d6\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\n\nfs.readFile('11.txt', 'utf8', function (err, dataStr) {\n    if (err) {\n        // \u5982\u679c\u8bfb\u53d6\u5931\u8d25\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\n        console.log(\"\u8bfb\u53d6\u5931\u8d25\"+ err.message);\n    }\n    else {\n        // \u5982\u679c\u8bfb\u53d6\u6210\u529f\u8fd4\u56de\u6570\u636e\n        console.log(\"\u8bfb\u53d6\u6210\u529f\" + dataStr);\n    }\n})\n")),(0,a.kt)("p",null,"\u6210\u529f\u72b6\u6001\u6267\u884c\u7ed3\u679c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u8bfb\u53d6\u6210\u529f1111\n")),(0,a.kt)("p",null,"\u5931\u8d25\u8fd4\u56de\u7ed3\u679c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u8bfb\u53d6\u5931\u8d25ENOENT: no such file or directory, open 'D:\\desk\\FrontEnd\\test\\8-11\\111.txt'\n")),(0,a.kt)("h2",{id:"\u5411\u6307\u5b9a\u6587\u4ef6\u5199\u5165\u5185\u5bb9"},"\u5411\u6307\u5b9a\u6587\u4ef6\u5199\u5165\u5185\u5bb9"),(0,a.kt)("h3",{id:"\u8bed\u6cd5\u683c\u5f0f-1"},"\u8bed\u6cd5\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fs.readFile(path , data , [, options], callback);\n")),(0,a.kt)("p",null,"\u53c2\u6570\u89e3\u8bfb\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," : \u5fc5\u9009\u53c2\u6570\u3002\u5b57\u7b26\u4e32\uff0c\u6807\u660e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data")," : \u5fc5\u9009\u53c2\u6570\uff0c\u5199\u5165\u7684\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," : \u53ef\u9009\u53c2\u6570\u3002\u6807\u8bc6\u7f16\u7801\u683c\u5f0f\u3002  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callback")," : \u5fc5\u9009\u53c2\u6570\uff0c\u6587\u4ef6\u8bfb\u53d6\u5b8c\u6210\u540e\u8981\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u3002  ")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nfs.writeFile("22.txt", "HelloWorld", "utf8", function (err) {\n  console.log(err);\n});\n')),(0,a.kt)("p",null,"\u5199\u5165\u6210\u529f\uff0c\u8fd4\u56de\u503c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"null\n")),(0,a.kt)("p",null,"\u6587\u4ef6\u5199\u5165\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220811111452.png",alt:"2"})),(0,a.kt)("p",null,"\u5411 F\u76d8 \u5199\u5165\u6570\u636e\u4f1a\u5bfc\u81f4\u5931\u8d25\uff0c\u6211\u4eec\u5c1d\u8bd5\u4e00\u4e0b\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="writefail.js"',title:'"writefail.js"'},'const fs = require("fs");\n\nfs.writeFile("f:/11.txt", "HelloWorld", "utf8", function (err) {\n  console.log(err);\n});\n')),(0,a.kt)("p",null,"\u6267\u884c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node writefail.js\n")),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Error: ENOENT: no such file or directory, open 'f:\\11.txt'] {\n  errno: -4058,\n  code: 'ENOENT',\n  syscall: 'open',\n  path: 'f:\\\\11.txt'\n}\n")),(0,a.kt)("h3",{id:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5199\u5165\u6210\u529f"},"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5199\u5165\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fs.writeFile("f:/11.txt", "HelloWorld", "utf8", function (err) {\n  if (err) {\n    return console.log("\u5199\u5165\u5931\u8d25" + err.message);\n  }\n  console.log("\u5199\u5165\u6210\u529f");\n});\n')),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u540c\u6837\u662f\u5199\u5165\u5931\u8d25\u3002"),(0,a.kt)("h2",{id:"\u7ec3\u4e60-1"},"\u7ec3\u4e60-1"),(0,a.kt)("p",null,"\u4f7f\u7528 fs \u7cfb\u7edf\u6a21\u5757\uff0c\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6210\u7ee9.txt")," \u4e2d\u7684\u8003\u8bd5\u6570\u636e\u6574\u7406\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6210\u7ee9-ok.txt")," \u4e2d\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u6210\u7ee9.txt"',title:'"\u6210\u7ee9.txt"'},"\u5c0f\u660e=90 \u5c0f\u7ea2=98 \u5c0f\u7eff=89 \u5c0f\u5170=90\n")),(0,a.kt)("p",null,"\u5e0c\u671b\u6574\u7406\u5b8c\u6bd5\u540e\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u6210\u7ee9-ok.txt"',title:'"\u6210\u7ee9-ok.txt"'},"\u5c0f\u660e\uff1a90\n\u5c0f\u7ea2\uff1a98\n\u5c0f\u7eff\uff1a89\n\u5c0f\u5170\uff1a90\n")),(0,a.kt)("admonition",{title:"\u6b65\u9aa4\u5206\u6790",type:"info"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u5bfc\u5165 fs \u6a21\u5757\u3002  "),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"readFile")," \u65b9\u6cd5\u8bfb\u53d6\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5224\u65ad\u8bfb\u53d6\u6210\u529f\u4e0e\u5426\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5904\u7406\u6210\u529f\u8bfb\u53d6\u7684\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5904\u7406\u5b8c\u7684\u6570\u636e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"writeFile")," \u65b9\u6cd5\u5199\u5165\u65b0\u6587\u4ef6\u3002"))),(0,a.kt)("p",null,"node \u4ee3\u7801\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nfs.readFile("\u6210\u7ee9.txt", "utf8", function (err, dataStr) {\n  // \u5224\u65ad\u662f\u5426\u8bfb\u53d6\u6210\u529f\n  if (err) {\n    return console.log("\u62b1\u6b49\uff0c\u6570\u636e\u8bf7\u6c42\u5931\u8d25 " + err.message);\n  }\n  // \u8bfb\u53d6\u6210\u529f\n  //   console.log("\u83b7\u5f97\u6210\u7ee9\u5217\u8868" + dataStr);\n  // \u5206\u5272\u6570\u636e\uff0c\u4f7f\u7528 split \u6309\u7167\u7a7a\u683c\u4e3a\u5206\u9694\u7b26\u5212\u5206\n  const arrOld = dataStr.split(" ");\n  console.log("\u5206\u5272\u540e\u7684\u6570\u7ec4 " + arrOld);\n  // \u521b\u5efa\u65b0\u7684\u6570\u7ec4\n  const arrNew = [];\n  // \u6267\u884c\u5faa\u73af\u904d\u5386\u6570\u7ec4\uff0c\u66ff\u6362 = \u4e3a \uff1a\n  arrOld.forEach((item) => {\n    arrNew.push(item.replace("=", ":"));\n    // push \u64cd\u4f5c\u52a0\u5165\u65b0\u6570\u7ec4\u4e2d\uff0c\u5e76\u5c06\u6bcf\u4e2a\u5143\u7d20\u7684 = \u66ff\u6362\u6210 \uff1a\n  });\n  console.log("\u66ff\u6362\u540e\u7684\u6570\u7ec4 " + arrNew);\n  // \u5408\u5e76\u6210\u65b0\u6570\u7ec4\n  const resStr = arrNew.join("\\r\\n");\n  //\u5728\u6bcf\u4e2a\u6570\u7ec4\u5143\u7d20\u4e4b\u95f4\u6dfb\u52a0\u6362\u884c\u7b26\u53f7\n  console.log("\u5904\u7406\u540e\u7684\u5b57\u7b26\u4e32\\n" + resStr);\n  fs.writeFile("\u6210\u7ee9-ok.txt", resStr, function (err) {\n    if (err) {\n      return console.log("\u5199\u5165\u9519\u8bef");\n    }\n    console.log("\u5199\u5165\u6210\u529f");\n  });\n});\n')),(0,a.kt)("p",null,"\u8981\u70b9\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readFile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"writeFile")," \u7684\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"li"},"split")," \u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replace")," \u64cd\u4f5c\u3002")),(0,a.kt)("p",null,"\u63a7\u5236\u53f0\u8f93\u51fa\u7ed3\u679c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u5206\u5272\u540e\u7684\u6570\u7ec4 \u5c0f\u660e=90,\u5c0f\u7ea2=98,\u5c0f\u7eff=89,\u5c0f\u5170=90\n\u66ff\u6362\u540e\u7684\u6570\u7ec4 \u5c0f\u660e:90,\u5c0f\u7ea2:98,\u5c0f\u7eff:89,\u5c0f\u5170:90\n\u5904\u7406\u540e\u7684\u5b57\u7b26\u4e32\n\u5c0f\u660e:90\n\u5c0f\u7ea2:98\n\u5c0f\u7eff:89\n\u5c0f\u5170:90\n\u5199\u5165\u6210\u529f\n")),(0,a.kt)("p",null,"\u5199\u5165\u7ed3\u679c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u6210\u7ee9-ok.txt"',title:'"\u6210\u7ee9-ok.txt"'},"\u5c0f\u660e:90\n\u5c0f\u7ea2:98\n\u5c0f\u7eff:89\n\u5c0f\u5170:90\n")),(0,a.kt)("h2",{id:"\u8def\u5f84\u52a8\u6001\u62fc\u63a5"},"\u8def\u5f84\u52a8\u6001\u62fc\u63a5"),(0,a.kt)("h3",{id:"\u95ee\u9898\u4ea7\u751f"},"\u95ee\u9898\u4ea7\u751f"),(0,a.kt)("p",null,"\u5728\u64cd\u4f5c\u6587\u4ef6\u65f6\u5019\uff0c\u5982\u679c\u64cd\u4f5c\u7684\u8def\u5f84\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"./")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"../")," \u7b49\u524d\u7f00\u7684\u76f8\u5bf9\u8def\u5f84\u7684\u65f6\u5019\uff0c\u5f88\u5bb9\u6613\u51fa\u73b0\u52a8\u6001\u8def\u5f84\u7684\u62fc\u63a5\u9519\u8bef\u3002\u5728\u6267\u884c\u4ee3\u7801\u7684\u65f6\u5019 node \u662f\u901a\u8fc7 node \u811a\u672c\u6240\u5904\u7684\u76ee\u5f55\u52a8\u6001\u62fc\u63a5\u7684\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\n\nfs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {\n    if (err) {\n        // \u5982\u679c\u8bfb\u53d6\u5931\u8d25\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\n        console.log(\"\u8bfb\u53d6\u5931\u8d25\"+ err.message);\n    }\n    else {\n        // \u5982\u679c\u8bfb\u53d6\u6210\u529f\u8fd4\u56de\u6570\u636e\n        console.log(\"\u8bfb\u53d6\u6210\u529f\" + dataStr);\n    }\n})\n")),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u4f60\u6b64\u65f6 cd \u4e86\u4e0a\u4e00\u5c42\u7684\u76ee\u5f55\uff0c\u8fd9\u65f6\u4f60\u7684 node \u811a\u672c\u4f1a\u6309\u7167\u4f60 cd \u7684\u76ee\u5f55\u4f5c\u4e3a\u524d\u7f00\u62fc\u63a5\uff0c\u5f88\u9057\u61be\uff0c\u4e0a\u4e00\u5c42\u76ee\u5f55\u662f\u4e0d\u80fd\u8bbf\u95ee\u5230\u8fd9\u4e2a file \u6587\u4ef6\u5939\u7684\uff0c\u6587\u4ef6\u4f1a\u8bfb\u53d6\u5931\u8d25\u3002  "),(0,a.kt)("h3",{id:"\u95ee\u9898\u89e3\u51b3"},"\u95ee\u9898\u89e3\u51b3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u8fd9\u4e2a\u95ee\u9898\u7684\u7b2c\u4e00\u4e2a\u65b9\u6cd5\u5c31\u662f\u63d0\u4f9b\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u5b8c\u6574\u7684\u6587\u4ef6\u8def\u5f84"),"\u3002\u4f46\u662f\u79fb\u690d\u6027\u5dee\uff0c\u4e0d\u6613\u4e8e\u7ef4\u62a4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u65b9\u6cd5\uff1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"__dirname")," \u8bbf\u95ee\u8def\u5f84\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u6d4b\u8bd5\u4e00\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"__dirname")," \u8fd4\u56de\u7ed3\u679c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="path.js"',title:'"path.js"'},"console.log(__dirname);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node path\n")),(0,a.kt)("p",null,"\u63a7\u5236\u53f0\u8fd4\u56de\u7ed3\u679c\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"D:\\desk\\FrontEnd\\test\\8-11\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u89e3\u51b3\u4e0a\u9762\u6240\u8bf4\u5230\u7684\u95ee\u9898\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\n\n//highlight-start\nfs.readFile(__dirname+'files/1.txt', 'utf8', function (err, dataStr) {\n//highlight-end\n    if (err) {\n        // \u5982\u679c\u8bfb\u53d6\u5931\u8d25\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\n        console.log(\"\u8bfb\u53d6\u5931\u8d25\"+ err.message);\n    }\n    else {\n        // \u5982\u679c\u8bfb\u53d6\u6210\u529f\u8fd4\u56de\u6570\u636e\n        console.log(\"\u8bfb\u53d6\u6210\u529f\" + dataStr);\n    }\n})\n")))}c.isMDXComponent=!0}}]);
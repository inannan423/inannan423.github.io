"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[9884],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={title:"\u4ecb\u7ecd\u548c\u5b89\u88c5",slug:"docus-introduction-and-installation",date:new Date("2022-07-14T00:00:00.000Z"),authors:"Chengzihan",tags:["React","Docusaurus"]},s=void 0,l={unversionedId:"FrontEnd/Docus/\u4ecb\u7ecd\u548c\u5b89\u88c5",id:"FrontEnd/Docus/\u4ecb\u7ecd\u548c\u5b89\u88c5",title:"\u4ecb\u7ecd\u548c\u5b89\u88c5",description:"\u7b80\u4ecb",source:"@site/docs/FrontEnd/05.Docus/01.\u4ecb\u7ecd\u548c\u5b89\u88c5.md",sourceDirName:"FrontEnd/05.Docus",slug:"/FrontEnd/Docus/docus-introduction-and-installation",permalink:"/docs/FrontEnd/Docus/docus-introduction-and-installation",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/05.Docus/01.\u4ecb\u7ecd\u548c\u5b89\u88c5.md",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Docusaurus",permalink:"/docs/tags/docusaurus"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ecb\u7ecd\u548c\u5b89\u88c5",slug:"docus-introduction-and-installation",date:"2022-07-14T00:00:00.000Z",authors:"Chengzihan",tags:["React","Docusaurus"]},sidebar:"tutorialSidebar",previous:{title:"\u501f\u52a9Docu\u6050\u9f99\u642d\u5efa\u535a\u5ba2",permalink:"/docs/category/\u501f\u52a9docu\u6050\u9f99\u642d\u5efa\u535a\u5ba2"},next:{title:"\u914d\u7f6e",permalink:"/docs/FrontEnd/Docus/docs-config"}},i={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5 Docusaurus",id:"\u5b89\u88c5-docusaurus",level:2},{value:"\u5b89\u88c5\u6216\u68c0\u67e5Node.js",id:"\u5b89\u88c5\u6216\u68c0\u67e5nodejs",level:3},{value:"\u5b89\u88c5Docusaurus",id:"\u5b89\u88c5docusaurus",level:3},{value:"\u67e5\u770b\u76ee\u5f55\u7ed3\u6784",id:"\u67e5\u770b\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u8fd0\u884c\u9879\u76ee",id:"\u8fd0\u884c\u9879\u76ee",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u9759\u6001\u7f51\u7ad9\u662f\u76f8\u5bf9\u4e8e\u52a8\u6001\u7f51\u7ad9\u800c\u8a00\u7684\uff0c\u52a8\u6001\u7f51\u7ad9\u5177\u6709\u5b9e\u65f6\u6027\u5f3a\u3001\u6570\u636e\u4ea4\u4e92\u5f3a\u7b49\u7279\u70b9\uff0c\u4f46\u662f\u9700\u8981\u90e8\u7f72\u540e\u7aef\u548c\u670d\u52a1\u5668\u7684\u6210\u672c\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e0d\u9700\u8981\u8fd9\u4e9b\u9700\u6c42\u7684\u7f51\u7ad9\uff0c\u9759\u6001\u7f51\u7ad9\u5c31\u53ef\u4ee5\u5b8c\u6210\u3002\u4e00\u4e2aWeb\u524d\u7aef\u5f00\u53d1\u7684\u5927\u4f5c\u4e1a\u5c31\u662f\u4e00\u4e2a\u9759\u6001\u7f51\u7ad9\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7f51\u7ad9\u6709\u7740\u76f8\u540c\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u6587\u6863\u7ad9\u3001\u535a\u5ba2\u7ad9\u3001\u5b98\u7f51\u7b49\u3002\u90a3\u4e48\u80fd\u4e0d\u80fd\u628a\u8fd9\u4e9b\u9700\u6c42\u62bd\u79bb\u51fa\u6765\uff0c\u521b\u9020\u4e00\u4e2a\u5de5\u5177\uff0c\u80fd\u591f\u8ba9\u5f00\u53d1\u8005\u901a\u8fc7\u8fd9\u4e2a\u5de5\u5177\u5c31\u5feb\u901f\u751f\u6210\u7f51\u7ad9\u5462\uff1f\u56e0\u6b64\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\u8bde\u751f\u4e86\u3002\u4ee5\u642d\u5efa\u535a\u5ba2\u4e3a\u4f8b\uff0c\u6211\u4eec\u90fd\u9700\u8981\u5b83\u80fd\u591f\u89e3\u6790\u6587\u672c\uff0c\u80fd\u591f\u751f\u6210\u76ee\u5f55\uff0c\u56e0\u6b64\uff0c\u524d\u7aef\u754c\u6839\u636e\u6b64\u9700\u6c42\u63a8\u51fa\u4e86\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\u3002\u53c8\u6839\u636e\u73b0\u6709\u7684\u6700\u6d41\u884c\u6280\u672f\uff0c\u521b\u9020\u4e86\u4e0d\u540c\u7684\u751f\u6210\u5668\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5e38\u89c1\u7684\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\u6709\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vuepress\uff0c\u57fa\u4e8evue.js\u6784\u5efa\uff0c\u652f\u6301\u6587\u6863\u7ad9\u3001\u535a\u5ba2\u7ad9\u7b49\u529f\u80fd\u3002\u540c\u65f6\u6709\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\u548c\u4e3b\u9898\uff0c\u5728\u56fd\u5185\u5f88\u5927\u4f17\u3002  "),(0,r.kt)("li",{parentName:"ul"},"Hugo,\u57fa\u4e8eGo\u8bed\u8a00\u7684\u751f\u6210\u5668\uff0c\u975e\u5e38\u6d41\u884c\uff0c\u70c2\u5927\u8857\u4e86\uff0c\u4e14\u4e0d\u597d\u770b\u3002  "),(0,r.kt)("li",{parentName:"ul"},"WordPress\uff0c\u66f4\u5927\u578b\u7684\u7c7b\u5bb9\u7ba1\u7406\u7f51\u7ad9\u751f\u6210\u5de5\u5177\uff0c\u5341\u5206\u6d41\u884c\uff0c\u4f46\u4e0d\u597d\u770b\u3002"),(0,r.kt)("li",{parentName:"ul"},"Docusaurus\uff0c\u57fa\u4e8eReact.js\u6784\u5efa\uff0c\u81ea\u6709\u529f\u80fd\u6bd4vuepress\u66f4\u52a0\u4e30\u5bcc\uff0c\u800c\u4e14\u597d\u770b\uff0c\u5728\u56fd\u5185\u5c0f\u4f17\u3002")),(0,r.kt)("p",null,"\u6211\u4e4b\u524d\u4f7f\u7528\u8fc7Vuepress\u642d\u5efa\u7f51\u7ad9\uff0c\u5176\u5b9e\u6211\u7684\u65e7\u7ad9\u5df2\u7ecf\u88ab\u6211\u6539\u7684\u81ea\u8ba4\u4e3a\u5f88\u597d\u770b\u4e86\u54c8\u54c8\u54c8\u3002\u4f46\u662f\u6211\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86Docusaurus\u5462\uff1f\u5176\u5b9e\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u5b83\u597d\u770b\u5e76\u4e14\u6bd4\u8f83\u5c0f\u4f17\u4e0d\u70c2\u5927\u8857\uff0c\u53e6\u5916\uff0c\u5b83\u7684\u70ed\u66f4\u65b0\u66f4\u52a0\u5f3a\u5927\u3002"),(0,r.kt)("admonition",{title:"\u4f4e\u4ee3\u7801\u5e73\u53f0",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u80fd\u4f60\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u57fa\u4e8eReact.js\u6784\u5efa"),"\u7684\u5b57\u773c\u5c31\u614c\u4e86\uff0c\u4f46\u662f\u5176\u5b9e\u4f60\u5e76\u4e0d\u9700\u8981\u53bb\u638c\u63e1React\uff0cDocusaurus\u7684\u9ad8\u5ea6\u8fbe\u5230\u4e86\u5728\u4f60\u6ca1\u6709\u638c\u63e1\u8fd9\u4e2a\u6280\u672f\u7684\u57fa\u7840\u4e0a\u80fd\u591f\u8ba9\u4f60\u4ece\u5b83\u7684\u6587\u6863\u51fa\u53d1\uff0c\u8c03\u7528API\u642d\u5efa\u8ba9\u4f60\u6ee1\u610f\u7684\u7f51\u7ad9\uff0c\u8fd9\u5c31\u662f\u4f4e\u4ee3\u7801\u5de5\u5177\u7684\u610f\u4e49\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5-docusaurus"},"\u5b89\u88c5 Docusaurus"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u6216\u68c0\u67e5nodejs"},"\u5b89\u88c5\u6216\u68c0\u67e5Node.js"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docusaurus"),"\u8981\u6c42\u60a8\u7684\u7535\u8111\u914d\u7f6e\u6709Node.js v16.14 \u6216\u4ee5\u4e0a\u7248\u672c\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u5b89\u88c5Nodejs\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/FrontEnd/FETricks/install-nodejs-and-npm"},"\u5b89\u88c5Node.js\u548cnpm"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7136\u540e\u6253\u5f00cmd\u68c0\u67e5\u5b89\u88c5\u60c5\u51b5\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,r.kt)("p",null,"\u5982\u679c\u5448\u73b0\u4e86v16.14\u4ee5\u4e0a\u7248\u672c\uff0c\u5c31\u8bf4\u660eNode.js\u90e8\u7f72\u597d\u4e86\u3002  "),(0,r.kt)("h3",{id:"\u5b89\u88c5docusaurus"},"\u5b89\u88c5Docusaurus"),(0,r.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u7b80\u5355\u5730\u5b89\u88c5 Docusaurus \u5e76\u642d\u5efa\u7f51\u7ad9\u6846\u67b6\u3002\u65b0\u5efa\u4e00\u4e2a\u7a7a\u6587\u4ef6\u5939\u5e76cd\u8fd9\u4e2a\u6587\u4ef6\u5939\uff0c\u6267\u884c\u4e0b\u9762\u7684\u6307\u4ee4\uff0c\u5b83\u4f1a\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u6a21\u677f\u6587\u4ef6\u7684\u65b0\u76ee\u5f55\u3002\uff08\u64cd\u4f5c\u63d0\u793a\uff0c\u5728\u6587\u4ef6\u5939\u7a7a\u767d\u5904\u6309\u4f4f",(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u6863\u952eShift\u548c\u9f20\u6807\u53f3\u952e"),"\uff0c\u6253\u5f00PowerShell\u7a97\u53e3\uff0c\u5e76\u4e14\u8bf7\u51c6\u5907\u597dLadder\uff09\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1657951738161.png",alt:"1"}),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus\n")),(0,r.kt)("p",null,"\u63a5\u7740\uff0c\u6839\u636e\u547d\u4ee4\u7a97\u53e3\u63d0\u793a\uff0c\u8f93\u5165\u4fe1\u606f\uff0c\u521b\u5efa\u9879\u76ee\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220716141425.png",alt:"2"}),"  "),(0,r.kt)("p",null,"\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"classic"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528TypeScript\u4f5c\u4e3a\u811a\u672c\u8bed\u8a00\uff0c\u8bf7\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"N"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220716141640.png",alt:"3"}),(0,r.kt)("br",{parentName:"p"}),"\n","\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"\u4e3a\u5305\u7ba1\u7406\u5668\u3002  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u9879\u76ee\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\u3002  ")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220716141916.png",alt:"4"}),"  "),(0,r.kt)("h2",{id:"\u67e5\u770b\u76ee\u5f55\u7ed3\u6784"},"\u67e5\u770b\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u547d\u540d\u4e3a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"myblog"),"\uff0c\u90a3\u4e48\u6587\u4ef6\u5939\u5de5\u7a0b\u5982\u4e0b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"myblog\n\u251c\u2500\u2500 blog    // \u5b58\u653e\u535a\u5ba2\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md  // \u5fc5\u987b\u4ee5\u65f6\u95f4-\u540d\u79f0\u547d\u540d\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs    // \u5b58\u653e\u7b14\u8bb0\u6587\u6863\n\u2502   \u251c\u2500\u2500 doc1.md // \u4ee5\u540d\u79f0\u547d\u540d\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 node_modules    // \u4f9d\u8d56\u6587\u4ef6\u5939\n\u251c\u2500\u2500 src // \u4ee3\u7801\u63a7\u5236\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 css \n\u2502   \u2502   \u2514\u2500\u2500 custom.css  // \u5168\u5c40\u6837\u5f0f\u6587\u4ef6\uff0c\u53ef\u8986\u76d6\u9ed8\u8ba4\u7684\u6837\u5f0f\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css   // \u4e3b\u9875\u6837\u5f0f\u6587\u4ef6\n\u2502       \u2514\u2500\u2500 index.js    // \u4e3b\u9875\u6587\u4ef6\n\u251c\u2500\u2500 static  // \u8d44\u6e90\u5b58\u653e\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js    // \u535a\u5ba2\u8bbe\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json    // \u5305\u7ba1\u7406\u6587\u4ef6\n\u251c\u2500\u2500 README.md   // Readme\u6587\u4ef6\n\u2514\u2500\u2500 sidebars.js // \u4fa7\u8fb9\u7ba1\u7406\u6587\u4ef6\uff08\u81ea\u52a8\u751f\u6210\uff09\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220716142449.png",alt:"5"}),"  "),(0,r.kt)("h2",{id:"\u8fd0\u884c\u9879\u76ee"},"\u8fd0\u884c\u9879\u76ee"),(0,r.kt)("p",null,"\u4f7f\u7528Visual Studio\u5de5\u7a0b\u6253\u5f00",(0,r.kt)("inlineCode",{parentName:"p"},"myblog"),"\u6587\u4ef6\u5939\u3002  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62c9\u8d77\u7ec8\u7aef\uff0c\u8f93\u5165\u4e0b\u9762\u7684\u6307\u4ee4\uff0c\u8fd0\u884c\u4ee3\u7801\u3002  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1657952892994.png",alt:"6"}),"  "),(0,r.kt)("p",null,"\u8fd0\u884c\u6210\u529f\uff1a  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220716142942.png",alt:"7"}),"  "),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220716143024.png",alt:"8"}),"  "),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u5c31\u90e8\u7f72\u5b8c\u6210\u5566\uff0c\u4e0b\u4e00\u7ae0\u6211\u4eec\u5c06\u8fdb\u884c\u521d\u59cb\u8bbe\u7f6e\u3002"))}p.isMDXComponent=!0}}]);
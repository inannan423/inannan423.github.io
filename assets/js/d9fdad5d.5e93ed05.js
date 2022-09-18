"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[9481],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(d,o(o({ref:e},k),{},{components:n})):a.createElement(d,o({ref:e},k))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8542:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u7eea\u8bba",date:new Date("2022-08-05T00:00:00.000Z"),authors:"Chengzihan",tags:["Nebula"]},o=void 0,i={unversionedId:"Notes/DataStruct/DSBasic",id:"Notes/DataStruct/DSBasic",title:"\u7eea\u8bba",description:"\u6570\u636e\u7ed3\u6784\u7684\u57fa\u672c\u6982\u5ff5",source:"@site/docs/Notes/01.DataStruct/01.DSBasic.md",sourceDirName:"Notes/01.DataStruct",slug:"/Notes/DataStruct/DSBasic",permalink:"/docs/Notes/DataStruct/DSBasic",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/Notes/01.DataStruct/01.DSBasic.md",tags:[{label:"Nebula",permalink:"/docs/tags/nebula"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u7eea\u8bba",date:"2022-08-05T00:00:00.000Z",authors:"Chengzihan",tags:["Nebula"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/docs/category/\u6570\u636e\u7ed3\u6784"},next:{title:"\u6570\u5a92\u57fa\u7840",permalink:"/docs/category/\u6570\u5a92\u57fa\u7840"}},p={},u=[{value:"\u6570\u636e\u7ed3\u6784\u7684\u57fa\u672c\u6982\u5ff5",id:"\u6570\u636e\u7ed3\u6784\u7684\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6570\u636e",id:"\u6570\u636e",level:3},{value:"\u6570\u636e\u5143\u7d20",id:"\u6570\u636e\u5143\u7d20",level:3},{value:"\u6570\u636e\u5bf9\u8c61",id:"\u6570\u636e\u5bf9\u8c61",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:3},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:3},{value:"\u6570\u636e\u7ed3\u6784\u7684\u4e09\u8981\u7d20",id:"\u6570\u636e\u7ed3\u6784\u7684\u4e09\u8981\u7d20",level:2},{value:"\u903b\u8f91\u7ed3\u6784",id:"\u903b\u8f91\u7ed3\u6784",level:3},{value:"\u7269\u7406\u7ed3\u6784",id:"\u7269\u7406\u7ed3\u6784",level:3},{value:"\u7b97\u6cd5\u7684\u6982\u5ff5",id:"\u7b97\u6cd5\u7684\u6982\u5ff5",level:2},{value:"\u7b97\u6cd5\u5b9a\u4e49",id:"\u7b97\u6cd5\u5b9a\u4e49",level:3},{value:"\u7b97\u6cd5\u7684\u7279\u70b9",id:"\u7b97\u6cd5\u7684\u7279\u70b9",level:3},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",level:2}],k={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784\u7684\u57fa\u672c\u6982\u5ff5"},"\u6570\u636e\u7ed3\u6784\u7684\u57fa\u672c\u6982\u5ff5"),(0,r.kt)("h3",{id:"\u6570\u636e"},"\u6570\u636e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u662f\u4fe1\u606f\u7684\u8f7d\u4f53"),"\uff0c\u662f\u63cf\u8ff0\u5ba2\u89c2\u4e8b\u7269\u5c5e\u6027\u7684\u6570\u3001\u5b57\u7b26\u4ee5\u53ca\u6240\u6709\u80fd\u8f93\u5165\u5230\u8ba1\u7b97\u673a\u4e2d\u5e76\u88ab\u7a0b\u5e8f\u8bc6\u522b\u548c\u5904\u7406\u7684\u7b26\u53f7\u7684\u96c6\u5408\u3002  ")),(0,r.kt)("h3",{id:"\u6570\u636e\u5143\u7d20"},"\u6570\u636e\u5143\u7d20"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5143\u7d20"),"\u662f\u6570\u636e\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u901a\u5e38\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u8fdb\u884c\u8003\u8651\u548c\u5904\u7406\u3002\u4e00\u4e2a\u6570\u636e\u5143\u7d20\u53ef\u7531\u82e5\u5e72\u6570\u636e\u9879\u7ec4\u6210\uff0c\u6570\u636e\u9879\u662f\u6784\u6210\u6570\u636e\u5143\u7d20\u7684\u4e0d\u53ef\u5206\u5272\u7684\u6700\u5c0f\u5355\u4f4d\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5b66\u751f\u8bb0\u5f55"),"\u5c31\u662f\u4e00\u4e2a\u6570\u636e\u5143\u7d20\uff0c\u5b83\u7531\u5b66\u53f7\u3001\u59d3\u540d\u3001\u6027\u522b\u7b49",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u9879"),"\u7ec4\u6210\u3002  ")),(0,r.kt)("h3",{id:"\u6570\u636e\u5bf9\u8c61"},"\u6570\u636e\u5bf9\u8c61"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u5bf9\u8c61\u662f\u5177\u6709\u76f8\u540c\u6027\u503c\u7684\u6570\u636e\u5143\u7d20\u7684\u96c6\u5408\uff0c\u662f\u6570\u636e\u7684\u4e00\u4e2a\u5b50\u96c6\u3002  ")),(0,r.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u7c7b\u578b\u662f\u4e00\u4e2a\u503c\u7684\u96c6\u5408\u548c\u5b9a\u4e49\u518d\u6b64\u96c6\u5408\u4e0a\u7684\u4e00\u7ec4\u64cd\u4f5c\u7684\u603b\u79f0\u3002  ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u539f\u5b50\u7c7b\u578b\u3002\u5176\u503c\u4e0d\u53ef\u518d\u5206\u7684\u6570\u636e\u7c7b\u578b\u3002\u5982bool \u548cint \u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7ed3\u6784\u7c7b\u578b\u3002\u5176\u503c\u53ef\u4ee5\u518d\u5206\u89e3\u4e3a\u82e5\u5e72\u6210\u5206\uff08\u5206\u91cf\uff09\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u62bd\u8c61\u6570\u636e\u7c7b\u578b\u3002\u62bd\u8c61\u6570\u636e\u7ec4\u7ec7\u53ca\u4e0e\u4e4b\u76f8\u5173\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("h3",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u7ed3\u6784\u662f\u76f8\u4e92\u4e4b\u95f4\u5b58\u5728\u4e00\u79cd\u6216\u591a\u79cd\u7279\u5b9a\u5173\u7cfb\u7684\u6570\u636e\u5143\u7d20\u7684\u96c6\u5408\u3002")),(0,r.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784\u7684\u4e09\u8981\u7d20"},"\u6570\u636e\u7ed3\u6784\u7684\u4e09\u8981\u7d20"),(0,r.kt)("h3",{id:"\u903b\u8f91\u7ed3\u6784"},"\u903b\u8f91\u7ed3\u6784"),(0,r.kt)("p",null,"\u903b\u8f91\u7ed3\u6784\u662f\u6307\u6570\u636e\u5143\u7d20\u4e4b\u95f4\u7684\u903b\u8f91\u5173\u7cfb\uff0c\u5373\u4ece",(0,r.kt)("strong",{parentName:"p"},"\u903b\u8f91\u5173\u7cfb\u4e0a"),"\u63cf\u8ff0\u6570\u636e\u3002  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u96c6\u5408\u7ed3\u6784"),"\uff1a\u7ed3\u6784\u4e2d\u7684\u6570\u636e\u5143\u7d20\u4e4b\u95f4\u9664\u201c\u540c\u5c5e\u4e00\u4e2a\u96c6\u5408\u201d\u5916\uff0c\u522b\u65e0\u5176\u5b83\u5173\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7ebf\u6027\u7ed3\u6784"),"\uff1a\u7ed3\u6784\u4e2d\u7684\u6570\u636e\u5143\u7d20\u4e4b\u95f4\u53ea\u5b58\u5728\u4e00\u5bf9\u4e00\u7684\u5173\u7cfb\uff0c\u9664\u4e86\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u6240\u6709\u5143\u7d20\u90fd\u6709\u552f\u4e00\u524d\u9a71\uff1b\u9664\u4e86\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u6240\u6709\u5143\u7d20\u90fd\u6709\u552f\u4e00\u540e\u7ee7\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6811\u5f62\u7ed3\u6784"),"\uff1a\u7ed3\u6784\u4e2d\u6570\u636e\u5143\u7d20\u4e4b\u95f4\u5b58\u5728\u4e00\u5bf9\u591a\u7684\u5173\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u56fe\u72b6\u7ed3\u6784"),"\uff1a\u6570\u636e\u5143\u7d20\u4e4b\u95f4\u662f\u591a\u5bf9\u591a\u7684\u5173\u7cfb\u3002")),(0,r.kt)("h3",{id:"\u7269\u7406\u7ed3\u6784"},"\u7269\u7406\u7ed3\u6784"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b58\u50a8\u7ed3\u6784\u662f\u6307\u6570\u636e\u7ed3\u6784\u5728\u8ba1\u7b97\u673a\u4e2d\u7684\u8868\u793a\uff08\u53c8\u79f0\u6620\u50cf\uff09\uff0c\u4e5f\u79f0\u7269\u7406\u7ed3\u6784\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u7ed3\u6784\u5305\u62ec"),"\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u987a\u5e8f\u5b58\u50a8"),"\uff1a\u628a\u903b\u8f91\u4e0a\u76f8\u90bb\u7684\u5143\u7d20\u5b58\u50a8\u5728\u7269\u7406\u4f4d\u7f6e\u4e5f\u76f8\u90bb\u7684\u5b58\u50a8\u5355\u5143\u4e2d\uff0c\u5143\u7d20\u4e4b\u95f4\u7684\u5173\u7cfb\u7531\u5b58\u50a8\u5355\u5143\u7684\u90bb\u63a5\u5173\u7cfb\u6765\u4f53\u73b0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u94fe\u5f0f\u5b58\u50a8"),"\uff1a\u903b\u8f91\u4e0a\u76f8\u90bb\u7684\u5143\u7d20\u5728\u7269\u7406\u4f4d\u7f6e\u4e0a\u53ef\u4ee5\u4e0d\u76f8\u90bb\uff0c\u501f\u52a9\u6307\u793a\u5143\u7d20\u5b58\u50a8\u5730\u5740\u7684\u6307\u9488\u6765\u8868\u793a\u5143\u7d20\u4e4b\u95f4\u7684\u903b\u8f91\u5173\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7d22\u5f15\u5b58\u50a8"),"\uff1a\u5728\u5b58\u50a8\u5143\u7d20\u4fe1\u606f\u7684\u540c\u65f6\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u8fd8\u5efa\u7acb\u9644\u52a0\u7684\u7d22\u5f15\u8868"),"\uff0c\u7d22\u5f15\u8868\u4e2d\u7684\u6bcf\u9879\u79f0\u4e3a\u7d22\u5f15\u9879\uff0c\u7d22\u5f15\u9879\u7684\u4e00\u822c\u5f62\u5f0f\u662f\uff08\u5173\u952e\u5b57\uff0c\u5730\u5740\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6563\u5217\u5b58\u50a8"),"\uff1a\u6839\u636e\u5143\u7d20\u7684",(0,r.kt)("strong",{parentName:"li"},"\u5173\u952e\u5b57"),"\u76f4\u63a5\u8ba1\u7b97\u51fa\u8be5\u5143\u7d20\u7684\u5b58\u50a8\u5730\u5740\uff0c\u53c8\u79f0",(0,r.kt)("strong",{parentName:"li"},"\u54c8\u5e0c"),"\uff08Hash\uff09\u5b58\u50a8\u3002")),(0,r.kt)("h2",{id:"\u7b97\u6cd5\u7684\u6982\u5ff5"},"\u7b97\u6cd5\u7684\u6982\u5ff5"),(0,r.kt)("h3",{id:"\u7b97\u6cd5\u5b9a\u4e49"},"\u7b97\u6cd5\u5b9a\u4e49"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u7b97\u6cd5"),"\uff08 algorithm )\u662f\u5bf9\u7279\u5b9a\u95ee\u9898\u6c42\u89e3\u6b65\u9aa4\u7684\u4e00\u79cd\u63cf\u8ff0\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5b83\u662f\u6307\u4ee4\u7684\u6709\u9650\u5e8f\u5217"),"\uff0c\u5176\u4e2d\u7684\u6bcf\u6761\u6307\u4ee4\u8868\u793a\u4e00\u4e2a\u6216\u591a\u4e2a\u64cd\u4f5c\u3002  ")),(0,r.kt)("h3",{id:"\u7b97\u6cd5\u7684\u7279\u70b9"},"\u7b97\u6cd5\u7684\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6709\u7a77\u6027\uff1a\u4e00\u4e2a\u7b97\u6cd5\u5fc5\u987b\u603b\u5728\u6267\u884c\u6709\u7a77\u6b65\u4e4b\u540e\u7ed3\u675f\uff0c\u4e14\u6bcf\u4e00\u6b65\u90fd\u53ef\u5728\u6709\u7a77\u65f6\u95f4\u5185\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u6027\uff1a\u7b97\u6cd5\u4e2d\u6bcf\u6761\u6307\u4ee4\u5fc5\u987b\u6709\u786e\u5b9a\u7684\u542b\u4e49\uff0c\u5bf9\u4e8e\u76f8\u540c\u7684\u8f93\u5165\u53ea\u80fd\u5f97\u5230\u76f8\u540c\u7684\u8f93\u51fa\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u884c\u6027\uff1a\u7b97\u6cd5\u4e2d\u63cf\u8ff0\u7684\u64cd\u4f5c\u90fd\u53ef\u4ee5\u901a\u8fc7\u5df2\u7ecf\u5b9e\u73b0\u7684\u57fa\u672c\u8fd0\u7b97\u6267\u884c\u6709\u9650\u6b21\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\uff1a\u4e00\u4e2a\u7b97\u6cd5\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u8f93\u5165\uff0c\u8fd9\u4e9b\u8f93\u5165\u53d6\u81ea\u4e8e\u67d0\u4e2a\u7279\u5b9a\u7684\u5bf9\u8c61\u7684\u96c6\u5408\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u51fa\uff1a\u4e00\u4e2a\u7b97\u6cd5\u6709\u4e00\u4e2a\u591a\u4e2a\u8f93\u51fa\uff0c\u8fd9\u4e9b\u8f93\u51fa\u662f\u4e0e\u8f93\u5165\u6709\u7740\u67d0\u79cd\u7279\u5b9a\u5173\u7cfb\u7684\u91cf\u3002")),(0,r.kt)("p",null,"\u597d\u7684\u7b97\u6cd5\u7684\u76ee\u6807\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6b63\u786e\u6027"),"\uff1a\u7b97\u6cd5\u5e94\u80fd\u591f\u6b63\u786e\u7684\u6c42\u63a5\u95ee\u9898\u3002\n\u53ef\u8bfb\u6027\uff1a\u7b97\u6cd5\u5e94\u5177\u6709\u826f\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u4ee5\u5e2e\u52a9\u4eba\u4eec\u7406\u89e3\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5065\u58ee\u6027"),"\uff1a\u8f93\u5165\u975e\u6cd5\u6570\u636e\u65f6\uff0c\u7b97\u6cd5\u80fd\u9002\u5f53\u5730\u505a\u51fa\u53cd\u5e94\u6216\u8fdb\u884c\u5904\u7406\uff0c\u800c\u4e0d\u4f1a\u4ea7\u751f\u83ab\u540d\u5947\u5999\u5730\u8f93\u51fa\u7ed3\u679c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6548\u7387\u4e0e\u4f4e\u5b58\u50a8\u91cf"),"\uff1a\u6548\u7387\u662f\u6307\u7b97\u6cd5\u6267\u884c\u7684\u65f6\u95f4\uff0c\u5b58\u50a8\u91cf\u9700\u6c42\u662f\u6307\u7b97\u6cd5\u6267\u884c\u8fc7\u7a0b\u4e2d\u6240\u9700\u8981\u7684\u6700\u5927\u5b58\u50a8\u7a7a\u95f4\uff0c\u8fd9\u4e24\u8005\u90fd\u4e0e\u95ee\u9898\u7684\u89c4\u6a21\u6709\u5173\u3002")),(0,r.kt)("h2",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7b97\u6cd5\u4e2d\u57fa",(0,r.kt)("strong",{parentName:"p"},"\u672c\u64cd\u4f5c\u91cd\u590d\u6267\u884c\u7684\u6b21\u6570"),"\u662f\u95ee\u9898\u89c4\u6a21 n \u7684\u67d0\u4e2a\u51fd\u6570f(n)\uff0c\u7b97\u6cd5\u7684\u65f6\u95f4\u91cf\u5ea6\u8bb0\u4f5c T\uff08n)=O(n) \uff0c\u5b83\u8868\u793a\u968f\u95ee\u9898\u89c4\u6a21n\u7684\u589e\u5927\u800c\u589e\u5927\uff0c\u7b97\u6cd5\u6267\u884c\u65f6\u95f4\u7684\u589e\u957f\u7387\u548c f(n) \u7684\u589e\u957f\u7387\u76f8\u540c\uff0c\u79f0\u4f5c",(0,r.kt)("strong",{parentName:"p"},"\u7b97\u6cd5\u7684\u6e10\u8fd1\u65f6\u95f4\u590d\u6742\u5ea6"),"\uff0c\u7b80\u79f0\u65f6\u95f4\u590d\u6742\u5ea6\u3002  "),(0,r.kt)("h2",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,r.kt)("p",null,"\u7b97\u6cd5\u7684\u7a7a\u95f4\u590d\u6742\u5ea6S(n)\u5b9a\u4e49\u4e3a\u8be5\u7b97\u6cd5\u6240\u8017\u8d39\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u5b83\u662f\u95ee\u9898\u89c4\u6a21n\u7684\u51fd\u6570\u3002\u8bb0\u4e3aS(n)=O(g(n))\u3002"),(0,r.kt)("div",{class:"time"},"\u6700\u540e\u66f4\u65b0\u4e8e\uff1a2022-08-05"))}c.isMDXComponent=!0}}]);
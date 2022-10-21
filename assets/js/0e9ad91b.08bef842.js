"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[7445],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),k=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},l=function(t){var e=k(t.components);return n.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,m=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),c=k(a),g=r,s=c["".concat(m,".").concat(g)]||c[g]||N[g]||p;return a?n.createElement(s,i(i({ref:e},l),{},{components:a})):n.createElement(s,i({ref:e},l))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,i=new Array(p);i[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var k=2;k<p;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4564:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>p,metadata:()=>o,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const p={title:"\u7f51\u7edc\u5206\u7c7b\u548c\u5206\u5c42\u67b6\u6784",slug:"network-classification-and-layered-architecture",date:new Date("2022-06-06T12:02:16.000Z"),permalink:"/pages/04c345/",categories:["\u6280\u672f\u6587\u6863","\u8ba1\u7b97\u673a\u7f51\u7edc"],tags:["\u8ba1\u7f51","\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6"],author:{name:"Chengzihan",link:null}},i=void 0,o={unversionedId:"Notes/ComputerNetwork/\u7f51\u7edc\u5206\u7c7b\u548c\u5206\u5c42\u67b6\u6784",id:"Notes/ComputerNetwork/\u7f51\u7edc\u5206\u7c7b\u548c\u5206\u5c42\u67b6\u6784",title:"\u7f51\u7edc\u5206\u7c7b\u548c\u5206\u5c42\u67b6\u6784",description:"\u4e00\u3001\u7f51\u7edc\u5206\u7c7b",source:"@site/docs/Notes/03.ComputerNetwork/02.\u7f51\u7edc\u5206\u7c7b\u548c\u5206\u5c42\u67b6\u6784.md",sourceDirName:"Notes/03.ComputerNetwork",slug:"/Notes/ComputerNetwork/network-classification-and-layered-architecture",permalink:"/docs/Notes/ComputerNetwork/network-classification-and-layered-architecture",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/Notes/03.ComputerNetwork/02.\u7f51\u7edc\u5206\u7c7b\u548c\u5206\u5c42\u67b6\u6784.md",tags:[{label:"\u8ba1\u7f51",permalink:"/docs/tags/\u8ba1\u7f51"},{label:"\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/tags/\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u7f51\u7edc\u5206\u7c7b\u548c\u5206\u5c42\u67b6\u6784",slug:"network-classification-and-layered-architecture",date:"2022-06-06T12:02:16.000Z",permalink:"/pages/04c345/",categories:["\u6280\u672f\u6587\u6863","\u8ba1\u7b97\u673a\u7f51\u7edc"],tags:["\u8ba1\u7f51","\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6"],author:{name:"Chengzihan",link:null}},sidebar:"tutorialSidebar",previous:{title:"\u4e2d\u82f1\u6587\u6982\u5ff5",permalink:"/docs/Notes/ComputerNetwork/chinese-english-concept"},next:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/Notes/ComputerNetwork/basic-knowledge"}},m={},k=[{value:"\u4e00\u3001\u7f51\u7edc\u5206\u7c7b",id:"\u4e00\u7f51\u7edc\u5206\u7c7b",level:3},{value:"1.\u6309\u5730\u7406\u8303\u56f4\u5212\u5206\uff1a\u4e2a\u4eba\u533a\u57df\u7f51\u3001\u5c40\u57df\u7f51\u3001\u57ce\u57df\u7f51\u3001\u5e7f\u57df\u7f51",id:"1\u6309\u5730\u7406\u8303\u56f4\u5212\u5206\u4e2a\u4eba\u533a\u57df\u7f51\u5c40\u57df\u7f51\u57ce\u57df\u7f51\u5e7f\u57df\u7f51",level:4},{value:"2.\u6309\u7f51\u7edc\u62d3\u6251\u7ed3\u6784\u5212\u5206\uff1a\u603b\u7ebf\u578b\u62d3\u6251\u3001\u661f\u578b\u62d3\u6251\u3001\u6811\u5f62\u62d3\u6251\u548c\u7f51\u72b6\u62d3\u6251",id:"2\u6309\u7f51\u7edc\u62d3\u6251\u7ed3\u6784\u5212\u5206\u603b\u7ebf\u578b\u62d3\u6251\u661f\u578b\u62d3\u6251\u6811\u5f62\u62d3\u6251\u548c\u7f51\u72b6\u62d3\u6251",level:4},{value:"3.\u6309\u670d\u52a1\u63d0\u4f9b\u5212\u5206\uff1a\u5171\u6709\u7f51\u7edc\u548c\u79c1\u6709\u7f51\u7edc",id:"3\u6309\u670d\u52a1\u63d0\u4f9b\u5212\u5206\u5171\u6709\u7f51\u7edc\u548c\u79c1\u6709\u7f51\u7edc",level:4},{value:"\u4e8c\u3001\u7f51\u7edc\u5206\u5c42\u67b6\u6784",id:"\u4e8c\u7f51\u7edc\u5206\u5c42\u67b6\u6784",level:3},{value:"1.ISO/OSI RM\u6a21\u578b",id:"1isoosi-rm\u6a21\u578b",level:3},{value:"2.TCP/IP\u534f\u8bae\u6808",id:"2tcpip\u534f\u8bae\u6808",level:3},{value:"3.\u6bcf\u5c42\u7684\u901a\u4fe1\u6807\u8bc6\uff08\u5730\u5740\uff09\u662f\u4ec0\u4e48\uff1f\u4f20\u8f93\u7684\u6570\u636e\u5355\u5143\u540d\u79f0\u662f\u4ec0\u4e48\uff1f",id:"3\u6bcf\u5c42\u7684\u901a\u4fe1\u6807\u8bc6\u5730\u5740\u662f\u4ec0\u4e48\u4f20\u8f93\u7684\u6570\u636e\u5355\u5143\u540d\u79f0\u662f\u4ec0\u4e48",level:3},{value:"4.\u5c01\u88c5\u3001\u89e3\u5c01\u88c5",id:"4\u5c01\u88c5\u89e3\u5c01\u88c5",level:3},{value:"5.\u590d\u7528\u7684\u6982\u5ff5",id:"5\u590d\u7528\u7684\u6982\u5ff5",level:3},{value:"6.\u6bcf\u5c42\u4f7f\u7528\u7684\u7f51\u7edc\u7269\u7406\u8bbe\u5907",id:"6\u6bcf\u5c42\u4f7f\u7528\u7684\u7f51\u7edc\u7269\u7406\u8bbe\u5907",level:3},{value:"\u7269\u7406\u5c42\u8bbe\u5907",id:"\u7269\u7406\u5c42\u8bbe\u5907",level:4},{value:"\u94fe\u8def\u5c42\u8bbe\u5907",id:"\u94fe\u8def\u5c42\u8bbe\u5907",level:4},{value:"\u7f51\u7edc\u5c42\u8bbe\u5907",id:"\u7f51\u7edc\u5c42\u8bbe\u5907",level:4},{value:"7.\u5206\u5c42\u7684\u57fa\u672c\u6982\u5ff5",id:"7\u5206\u5c42\u7684\u57fa\u672c\u6982\u5ff5",level:3}],l={toc:k};function N(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u4e00\u7f51\u7edc\u5206\u7c7b"},"\u4e00\u3001\u7f51\u7edc\u5206\u7c7b"),(0,r.kt)("h4",{id:"1\u6309\u5730\u7406\u8303\u56f4\u5212\u5206\u4e2a\u4eba\u533a\u57df\u7f51\u5c40\u57df\u7f51\u57ce\u57df\u7f51\u5e7f\u57df\u7f51"},"1.\u6309\u5730\u7406\u8303\u56f4\u5212\u5206\uff1a\u4e2a\u4eba\u533a\u57df\u7f51\u3001\u5c40\u57df\u7f51\u3001\u57ce\u57df\u7f51\u3001\u5e7f\u57df\u7f51"),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u6309\u5730\u7406\u8303\u56f4\u5212\u5206\u7684\u7f51\u7edc\u5206\u7c7b",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4e2a\u4eba\u533a\u57df\u7f51\uff1aPAN (Personal Area Network)"),"\uff0c\u8303\u56f4\u5f88\u5c0f\uff0c\u5927\u7ea6\u5728 10 \u7c73\u5de6\u53f3\u3002\u901a\u5e38\u5305\u542b\u4e00\u53f0\u8ba1\u7b97\u673a\u3001\u4e00\u4e2a\u624b\u673a\u6216\u8005\u4e00\u4e2a\u624b\u6301\u8ba1\u7b97\u8bbe\u5907\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u5e7f\u57df\u7f51 WAN (Wide Area Network)"),"\uff0c\u4f5c\u7528\u8303\u56f4\u901a\u5e38\u4e3a\u51e0\u5341\u5230\u51e0\u5343\u516c\u91cc\u3002\u4f5c\u7528\u8303\u56f4\u8f83\u5927\uff0c\u901a\u5e38\u6307\u56fd\u5bb6\u6216\u8005\u66f4\u5927\u7684\u533a\u57df",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u57ce\u57df\u7f51\uff1aMAN (Metropolitan Area Network)"),"\uff0c\u4f5c\u7528\u8ddd\u79bb\u7ea6\u4e3a  5 ~ 50 \u516c\u91cc\u3002\u4f5c\u7528\u8303\u56f4\u6b21\u5927\uff0c\u901a\u5e38\u6307\u4e00\u4e2a\u57ce\u5e02\u6216\u8005\u591a\u4e2a\u57ce\u5e02\u4e4b\u95f4\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u5c40\u57df\u7f51\uff1aLAN (Local Area Network)"),"\uff0c\u5c40\u9650\u5728\u8f83\u5c0f\u7684\u8303\u56f4\uff08\u5982 1 \u516c\u91cc\u5de6\u53f3\uff09\u3002\u5c40\u57df\u7f51\u662f\u6307\u5c40\u9650\u4e8e\u4e00\u4e2a\u5730\u70b9\u3001\u4e00\u680b\u5efa\u7b51\u6216\u4e00\u7ec4\u5efa\u7b51\u7684\u7f51\u7edc\u3002  ")),(0,r.kt)("h4",{id:"2\u6309\u7f51\u7edc\u62d3\u6251\u7ed3\u6784\u5212\u5206\u603b\u7ebf\u578b\u62d3\u6251\u661f\u578b\u62d3\u6251\u6811\u5f62\u62d3\u6251\u548c\u7f51\u72b6\u62d3\u6251"},"2.\u6309\u7f51\u7edc\u62d3\u6251\u7ed3\u6784\u5212\u5206\uff1a\u603b\u7ebf\u578b\u62d3\u6251\u3001\u661f\u578b\u62d3\u6251\u3001\u6811\u5f62\u62d3\u6251\u548c\u7f51\u72b6\u62d3\u6251"),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u603b\u7ebf\u578b\u62d3\u6251",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u603b\u7ebf\u62d3\u6251\u7ed3\u6784",(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709\u8bbe\u5907\u8fde\u63a5\u5230\u4e00\u6761\u8fde\u63a5\u4ecb\u8d28\u4e0a"),"\u3002\u603b\u7ebf\u7ed3\u6784\u6240\u9700\u8981\u7684",(0,r.kt)("strong",{parentName:"p"},"\u7535\u7f06\u6570\u91cf\u5c11\uff0c\u7ebf\u7f06\u957f\u5ea6\u77ed\uff0c\u6613\u4e8e\u5e03\u7ebf\u548c\u7ef4\u62a4"),"\u3002\u591a\u4e2a\u7ed3\u70b9\u5171\u7528 ",(0,r.kt)("em",{parentName:"p"},"\u4e00\u6761")," \u4f20\u8f93\u4fe1\u9053\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4fe1\u9053\u5229\u7528\u7387\u9ad8"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4f46\u4e0d\u5bb9\u6613\u8bca\u65ad\u6545\u969c"),"\u3002\u6240\u6709\u5165\u7f51\u8bbe\u5907\u5171\u7528\u4e00\u6761\u7269\u7406\u4f20\u8f93\u7ebf\u8def\uff0c\u6240\u6709\u7684\u6570\u636e\u53d1\u5f80\u540c\u4e00\u6761\u7ebf\u8def\uff0c\u5e76\u80fd\u591f\u7531\u9644\u63a5\u5728\u7ebf\u8def\u4e0a\u7684\u6240\u6709\u8bbe\u5907\u611f\u77e5\u3002\u5165\u7f51\u8bbe\u5907\u901a\u8fc7\u4e13\u7528\u7684\u5206\u63a5\u5934\u63a5\u5165\u7ebf\u8def\u3002\n",(0,r.kt)("strong",{parentName:"p"},"\u603b\u7ebf\u7f51\u62d3\u6251\u662f\u5c40\u57df\u7f51\u7684\u4e00\u79cd\u7ec4\u6210\u5f62\u5f0f\u3002")),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"\u7279\u70b9\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u591a\u53f0\u673a\u5668\u5171\u7528\u4e00\u6761\u4f20\u8f93\u4fe1\u9053\uff0c\u4fe1\u9053\u5229\u7528\u7387\u8f83\u9ad8\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u540c\u4e00\u65f6\u523b\u53ea\u80fd\u7531\u4e24\u53f0\u8ba1\u7b97\u673a\u901a\u4fe1\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u67d0\u4e2a\u7ed3\u70b9\u7684\u6545\u969c\u4e0d\u5f71\u54cd\u7f51\u7edc\u7684\u5de5\u4f5c\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u7f51\u7edc\u7684\u5ef6\u4f38\u8ddd\u79bb\u6709\u9650\uff0c\u7ed3\u70b9\u6570\u6709\u9650\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yegqpucij30dk066jry.jpg",alt:"image.png"}),"  "))),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u661f\u578b\u62d3\u6251",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u661f\u578b\u62d3\u6251"),"\u7ed3\u6784\u662f",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u4e2d\u5fc3\uff0c\u591a\u4e2a\u5206\u8282\u70b9"),"\u3002\u5b83\u7ed3\u6784\u7b80\u5355\uff0c\u8fde\u63a5\u65b9\u4fbf\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u548c\u7ef4\u62a4\u90fd\u76f8\u5bf9\u5bb9\u6613"),"\uff0c\u800c\u4e14\u6269\u5c55\u6027\u5f3a\u3002",(0,r.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u5ef6\u8fdf\u65f6\u95f4\u8f83\u5c0f\uff0c\u4f20\u8f93\u8bef\u5dee\u4f4e"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4e2d\u5fc3\u65e0\u6545\u969c\uff0c\u4e00\u822c\u7f51\u7edc\u6ca1\u95ee\u9898\u3002\u4e2d\u5fc3\u6545\u969c\uff0c\u7f51\u7edc\u5c31\u51fa\u95ee\u9898\uff0c\u540c\u65f6\u5171\u4eab\u80fd\u529b\u5dee\uff0c\u901a\u4fe1\u7ebf\u8def\u5229\u7528\u7387\u4e0d\u9ad8"),"\u3002\u4ee5\u4e00\u53f0",(0,r.kt)("strong",{parentName:"p"},"\u4e2d\u5fc3\u5904\u7406\u673a"),"(\u901a\u4fe1\u8bbe\u5907)\u4e3a\u4e3b\u800c\u6784\u6210\u7684\u7f51\u7edc\uff0c\u5176\u5b83\u5165\u7f51\u673a\u5668\u4ec5\u4e0e\u8be5\u4e2d\u5fc3\u5904\u7406\u673a\u4e4b\u95f4\u6709",(0,r.kt)("strong",{parentName:"p"},"\u76f4\u63a5"),"\u7684\u7269\u7406\u94fe\u8def\uff0c\u4e2d\u5fc3\u5904\u7406\u673a\u91c7\u7528",(0,r.kt)("strong",{parentName:"p"},"\u5206\u65f6\u6216\u8f6e\u8be2\u7684\u65b9\u6cd5"),"\u4e3a\u5165\u7f51\u673a\u5668\u670d\u52a1\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709\u7684\u6570\u636e\u5fc5\u987b\u7ecf\u8fc7\u4e2d\u5fc3\u5904\u7406\u673a"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9002\u7528\u573a\u5408\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5c40\u57df\u7f51\u3001\u5e7f\u57df\u7f51"),"\u3002  "),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"\u7279\u70b9\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u7ed3\u6784\u7b80\u5355"),"\uff0c\u4fbf\u4e8e\u7ba1\u7406(\u96c6\u4e2d\u5f0f)\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u6bcf\u53f0\u5165\u7f51\u673a\u5747\u9700\u7269\u7406\u7ebf\u8def\u4e0e\u5904\u7406\u673a\u4e92\u8fde\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u8def\u5229\u7528\u7387\u4f4e"),"\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u5904\u7406\u673a\u8d1f\u8f7d\u91cd(\u9700\u5904\u7406\u6240\u6709\u7684\u670d\u52a1)\uff0c\u56e0\u4e3a\u4efb\u4f55\u4e24\u53f0\u5165\u7f51\u673a\u4e4b\u95f4\u4ea4\u6362\u4fe1\u606f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u90fd\u5fc5\u987b\u901a\u8fc7\u4e2d\u5fc3\u5904\u7406\u673a"),"\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"\u5165\u7f51\u4e3b\u673a\u6545\u969c\u4e0d\u5f71\u54cd\u6574\u4e2a\u7f51\u7edc\u7684\u6b63\u5e38\u5de5\u4f5c\uff0c\u4e2d\u5fc3\u5904\u7406\u673a\u7684\u6545\u969c\u5c06\u5bfc\u81f4\u7f51\u7edc\u7684\u762b\u75ea"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yh7ztogbj308c07t0tc.jpg",alt:"image.png"}),"  "))),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u6811\u5f62\u62d3\u6251",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6811\u5f62\u62d3\u6251\u7ed3\u6784\u4ece",(0,r.kt)("strong",{parentName:"p"},"\u603b\u7ebf\u62d3\u6251\u6f14\u53d8\u800c\u6765"),"\u3002\u5f62\u72b6\u50cf\u4e00\u68f5\u5012\u7f6e\u7684\u6811,\u9876\u7aef\u662f\u6811\u6839\uff0c\u6811\u6839\u4ee5\u4e0b\u5e26\u5206\u652f\uff0c\u6bcf\u4e2a\u5206\u652f\u8fd8\u53ef\u518d\u5e26\u5b50\u5206\u652f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6811\u6839\u63a5\u6536\u5404\u7ad9\u70b9\u53d1\u9001\u7684\u6570\u636e\uff0c\u7136\u540e\u518d\u5e7f\u64ad\u53d1\u9001\u5230\u5168\u7f51"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u597d\u6269\u5c55\uff0c\u5bb9\u6613\u8bca\u65ad\u9519\u8bef\uff0c\u4f46\u5bf9\u6839\u90e8\u8981\u6c42\u9ad8\u3002"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yhbhqspkj30ch07g0u2.jpg",alt:"image.png"}),"  ")),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u73af\u5f62\u62d3\u6251",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u73af\u5f62\u62d3\u6251\u7ed3\u6784\u662f",(0,r.kt)("strong",{parentName:"p"},"\u8282\u70b9\u5f62\u6210\u4e00\u4e2a\u95ed\u5408\u73af"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u7ad9\u5c11\uff0c\u8282\u7ea6\u8bbe\u5907"),"\u3002\u5f53\u7136\uff0c\u8fd9\u6837\u5c31\u5bfc\u81f4\u4e00\u4e2a\u8282\u70b9\u51fa\u95ee\u9898\uff0c\u7f51\u7edc\u5c31\u4f1a\u51fa\u95ee\u9898\uff0c\u800c\u4e14",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u597d\u8bca\u65ad\u6545\u969c"),"\u3002\u5165\u7f51\u8bbe\u5907\u901a\u8fc7\u8f6c\u53d1\u5668\u63a5\u5165\u7f51\u7edc\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u8f6c\u53d1\u5668\u4ec5\u4e0e\u4e24\u4e2a\u76f8\u90bb\u7684\u8f6c\u53d1\u5668\u6709\u76f4\u63a5\u7684\u7269\u7406\u7ebf\u8def"),"\u3002\u73af\u5f62\u7f51\u7684\u6570\u636e\u4f20\u8f93\u5177\u6709",(0,r.kt)("strong",{parentName:"p"},"\u5355\u5411\u6027"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u8f6c\u53d1\u5668\u53d1\u51fa\u7684\u6570\u636e\u53ea\u80fd\u88ab\u53e6\u4e00\u4e2a\u8f6c\u53d1\u5668\u63a5\u6536\u5e76\u8f6c\u53d1"),"\u3002\u6240\u6709\u7684\u8f6c\u53d1\u5668\u53ca\u5176\u7269\u7406\u7ebf\u8def\u6784\u6210\u4e86\u4e00\u4e2a\u73af\u72b6\u7684\u7f51\u7edc\u7cfb\u7edf\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9002\u7528\u573a\u5408\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5c40\u57df\u7f51\u4ee5\u53ca\u5b9e\u65f6\u6027\u8981\u6c42\u9ad8\u7684\u73af\u5883"),"\u3002"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"\u7279\u70b9\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u5b9e\u65f6\u6027\u8f83\u597d(\u4fe1\u606f\u5728\u7f51\u4e2d\u4f20\u8f93\u7684\u6700\u5927\u65f6\u95f4\u56fa\u5b9a)\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u6bcf\u4e2a\u7ed3\u70b9\u53ea\u4e0e\u76f8\u90bb\u4e24\u4e2a\u7ed3\u70b9\u6709\u7269\u7406\u94fe\u8def\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f20\u8f93\u63a7\u5236\u673a\u5236\u6bd4\u8f83\u7b80\u5355\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u67d0\u4e2a\u7ed3\u70b9\u7684\u6545\u969c\u5c06\u5bfc\u81f4\u7269\u7406\u762b\u75ea\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u5355\u4e2a\u73af\u7f51\u7684\u7ed3\u70b9\u6570\u6709\u9650\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yhetihs1j306x08mt96.jpg",alt:"image.png"}),"  "))),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u7f51\u72b6\u62d3\u6251",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u7f51\u5f62\u62d3\u6251\u7ed3\u6784\u662f\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\uff0c\u5b83\u7684\u4f18\u70b9\u662f\u4e0d\u53d7\u74f6\u9888\u95ee\u9898\u548c\u5931\u6548\u95ee\u9898\u7684\u5f71\u54cd\uff0c\u4e00\u65e6\u7ebf\u8def\u51fa\u95ee\u9898\uff0c\u53ef\u4ee5\u505a\u5176\u4ed6\u7ebf\u8def\uff0c\u4f46\u592a\u590d\u6742\uff0c\u6210\u672c\u9ad8"),"\u3002\u5229\u7528",(0,r.kt)("strong",{parentName:"p"},"\u4e13\u95e8\u8d1f\u8d23\u6570\u636e\u901a\u4fe1\u548c\u4f20\u8f93\u7684\u7ed3\u70b9\u673a\u6784\u6210\u7684\u7f51\u72b6\u7f51\u7edc"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5165\u7f51\u8bbe\u5907\u76f4\u63a5\u63a5\u5165\u7ed3\u70b9\u673a"),"\u8fdb\u884c\u901a\u4fe1\u3002\u7f51\u72b6\u7f51\u7edc\u901a\u5e38\u5229\u7528\u5197\u4f59\u7684\u8bbe\u5907\u548c\u7ebf\u8def\u6765\u63d0\u9ad8\u7f51\u7edc\u7684\u53ef\u9760\u6027\uff0c\u56e0\u6b64\uff0c",(0,r.kt)("em",{parentName:"p"},"\u7ed3\u70b9\u673a\u53ef\u4ee5\u6839\u636e\u5f53\u524d\u7684\u7f51\u7edc\u4fe1\u606f\u6d41\u91cf\u6709\u9009\u62e9\u5730\u5c06\u6570\u636e\u53d1\u5f80\u4e0d\u540c\u7684\u7ebf\u8def"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9002\u7528\u573a\u5408\uff1a\u4e3b\u8981\u7528\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u5730\u57df\u8303\u56f4\u5927\u3001\u5165\u7f51\u4e3b\u673a\u591a"),"(\u673a\u578b\u591a)\u7684\u73af\u5883\uff0c\u5e38\u7528\u4e8e\u6784\u9020",(0,r.kt)("strong",{parentName:"p"},"\u5e7f\u57df\u7f51\u7edc"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yhgzmsosj30a007wdgt.jpg",alt:"image.png"}),"  ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/zenkin/article/details/120871891"},"\u8d44\u6599\u53c2\u8003\u6765\u6e90")),(0,r.kt)("h4",{id:"3\u6309\u670d\u52a1\u63d0\u4f9b\u5212\u5206\u5171\u6709\u7f51\u7edc\u548c\u79c1\u6709\u7f51\u7edc"},"3.\u6309\u670d\u52a1\u63d0\u4f9b\u5212\u5206\uff1a\u5171\u6709\u7f51\u7edc\u548c\u79c1\u6709\u7f51\u7edc"),(0,r.kt)("admonition",{title:"\ud83c\udf33 \u516c\u7f51\u4e0e\u79c1\u7f51  ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u516c\u7f51"),"\uff1a\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u516c\u5171\u7f51\u7edc\uff0c\u4e5f\u53eb\u505a\u5916\u7f51\uff0c\u6ca1\u6709\u9650\u5236\uff0c\u53ea\u8981\u80fd\u4e0a\u7f51\u7684\u7528\u6237\uff0c\u90fd\u53ef\u4ee5\u8bbf\u95ee\uff0c\u6bd4\u5982\u7c7b\u4f3c\u767e\u5ea6\uff0c\u65b0\u6d6a\u8fd9\u6837\u7684\u7f51\u7ad9\uff0c\u53ea\u8981\u4f60\u6709\u7f51\u7edc\uff0c\u4e0d\u7ba1\u4f60\u662f\u5bbd\u5e26\uff0c\u5149\u7ea4\uff0c\u8fd8\u662f5G\uff0cWIFI\uff0c\u90fd\u53ef\u4ee5\u8bbf\u95ee\u6253\u5f00\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u79c1\u7f51"),"\uff1a\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a\u5c40\u57df\u7f51\uff0c\u4e5f\u53eb\u505a\u79c1\u7f51\uff0c\u53ea\u6709\u5c5e\u4e8e\u5c40\u57df\u7f51\u5185\u90e8\u7684\u6210\u5458\uff0c\u624d\u53ef\u4ee5\u8bbf\u95ee\u3002\u6bd4\u5982\u516c\u53f8\u5185\u90e8\u670d\u52a1\u5668\u4e0a\u642d\u5efa\u7684FTP\u6587\u4ef6\u7cfb\u7edf\uff0c\u4f60\u53ea\u80fd\u4f7f\u7528\u516c\u53f8\u5185\u90e8\u7684\u7535\u8111\u624d\u53ef\u4ee5\u8bbf\u95ee\uff0c\u8131\u79bb\u4e86\u5185\u7f51\u73af\u5883\uff0c\u4f60\u5c31\u4e0d\u80fd\u8bbf\u95ee\u670d\u52a1\u5668\u4e0a\u7684\u4efb\u4f55\u6587\u4ef6\u4e86\u3002")),(0,r.kt)("h3",{id:"\u4e8c\u7f51\u7edc\u5206\u5c42\u67b6\u6784"},"\u4e8c\u3001\u7f51\u7edc\u5206\u5c42\u67b6\u6784"),(0,r.kt)("h3",{id:"1isoosi-rm\u6a21\u578b"},"1.ISO/OSI RM\u6a21\u578b"),(0,r.kt)("admonition",{title:"\ud83d\udd14 ISO/OSI\u6a21\u578b",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"OSI(Open System Interconnection)\uff0c\u5168\u79f0OSI/RM(Open System Interconnection Reference Model)\uff0c\u610f\u4e3a\u5f00\u653e\u7cfb\u7edf\u4e92\u8054\u53c2\u8003\u6a21\u578b\u3002\u8fd9\u4e2a\u6a21\u578b\u628a\u7f51\u7edc\u901a\u4fe1\u7684\u5de5\u4f5c\u5206\u4e3a7\u5c42\uff0c\u5b83\u4eec\u7531\u4f4e\u5230\u9ad8\u5206\u522b\u662f\u7269\u7406\u5c42(Physical Layer)\uff0c\u6570\u636e\u94fe\u8def\u5c42(Data Link Layer)\uff0c\u7f51\u7edc\u5c42(Network Layer)\uff0c\u4f20\u8f93\u5c42(Transport Layer)\uff0c\u4f1a\u8bdd\u5c42(Session Layer)\uff0c\u8868\u793a\u5c42(Presentation Layer)\u548c\u5e94\u7528\u5c42(Application Layer)\u3002Physical Layer\u5230Network Layer\u4e3aOSI/RM\u7684\u4f4e\u4e09\u5c42\uff0c\u8d1f\u8d23\u521b\u5efa\u7f51\u7edc\u901a\u4fe1\u8fde\u63a5\u7684\u94fe\u8def\uff1bTransport Layer\u5230Application Layer\u4e3aOSI/RM\u7684\u9ad8\u56db\u5c42\uff0c\u5177\u4f53\u8d1f\u8d23\u7aef\u5230\u7aef\u7684\u6570\u636e\u901a\u4fe1\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5c42\u6b21"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4e3b\u8981\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4e3b\u8981\u8bbe\u5907\u53ca\u534f\u8bae"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5e94\u7528\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b9e\u73b0\u5177\u4f53\u7684\u5e94\u7528\u529f\u80fd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DHCP\u3001FTP\u3001HTTP\u3001SMTP\u3001POP3\u3001TELNET\u3001DNS\u3001NTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8868\u793a\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u7684\u683c\u5f0f\u4e0e\u8868\u8fbe\u3001\u52a0\u5bc6\u3001\u538b\u7f29"),(0,r.kt)("td",{parentName:"tr",align:"center"},"HTTP\u3001HTML\u3001FTP\u3001Telnet\u3001ASN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4f1a\u8bdd\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5efa\u7acb\u3001\u7ba1\u7406\u548c\u7ec8\u6b62\u5bf9\u8bdd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ADSP\xb7ASP\xb7H.245\xb7ISO-SP\xb7iSNS\xb7NetBIOS\xb7PAP\xb7RPC\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4f20\u8f93\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7aef\u5230\u7aef\u7684\u8fde\u63a5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TCP\u3001UDP\u3001TLS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7f51\u7edc\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5206\u7ec4\u4f20\u8f93\u548c\u8def\u7531\u9009\u62e9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e09\u5c42\u4ea4\u6362\u673a\u3001\u8def\u7531\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u94fe\u8def\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4f20\u8f93\u4ee5\u5e27\u4e3a\u5355\u4f4d\u7684\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7f51\u6865\u3001\u4ea4\u6362\u673a\u3001\u7f51\u5361,PPTP\u3001L2TP\u3001SLIP\u3001PPP\u3001WIFI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7269\u7406\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e8c\u8fdb\u5236\u4f20\u8f93"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e2d\u7ee7\u5668\u3001\u96c6\u7ebf\u5668\u3001\u7f51\u5361\u3001\u5149\u7ea4\u3001\u53cc\u7ede\u7ebf\u3001\u540c\u8f74\u7535\u7f06")))),(0,r.kt)("h3",{id:"2tcpip\u534f\u8bae\u6808"},"2.TCP/IP\u534f\u8bae\u6808"),(0,r.kt)("admonition",{title:"\u26a0 TCP/IP\u534f\u8bae\u6808",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"TCP/IP\u534f\u8bae\u5e76\u4e0d\u662f\u6307\u67d0\u4e00\u4e2a\u5177\u4f53\u7684\u534f\u8bae\uff0c\u5b83\u662f\u6307\u4ee3\u4e00\u7cfb\u5217\u7684\u534f\u8bae\u6808\uff0c\u56e0\u6b64\u4e5f\u53ebTCP/IP\u534f\u8bae\u6808\u6216\u8005TCP/IP\u534f\u8bae\u7c07\uff0c\u4e0b\u56fe\u5c06\u5bf9\u6bd4TCP/IP\u534f\u8bae\u6808\u548cOSI\u6a21\u578b\u7684\u533a\u522b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yi1a69nlj30jm0b7419.jpg",alt:"image.png"})),(0,r.kt)("h3",{id:"3\u6bcf\u5c42\u7684\u901a\u4fe1\u6807\u8bc6\u5730\u5740\u662f\u4ec0\u4e48\u4f20\u8f93\u7684\u6570\u636e\u5355\u5143\u540d\u79f0\u662f\u4ec0\u4e48"},"3.\u6bcf\u5c42\u7684\u901a\u4fe1\u6807\u8bc6\uff08\u5730\u5740\uff09\u662f\u4ec0\u4e48\uff1f\u4f20\u8f93\u7684\u6570\u636e\u5355\u5143\u540d\u79f0\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5e8f\u53f7"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5c42"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4f20\u8f93\u5bf9\u8c61"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5730\u5740"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5e94\u7528\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u62a5\u6587\uff08Message\uff09"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4f20\u8f93\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uff081\uff09TCP \u62a5\u6587",(0,r.kt)("em",{parentName:"td"},"\u6bb5"),"\uff08Segment\uff09\uff082\uff09UDP \u6570\u636e\u62a5\uff08Segment\uff09"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7aef\u53e3\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7f51\u7edc\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5206\u7ec4 / \u6570\u636e\u5305\uff08Packet\uff09\u3001IP\u6570\u636e\u62a5\uff08Datagram\uff09"),(0,r.kt)("td",{parentName:"tr",align:"center"},"IP\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u94fe\u8def\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5e27\uff08Frame\uff09"),(0,r.kt)("td",{parentName:"tr",align:"center"},"MAC\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7269\u7406\u5c42"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bit\u6d41"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,r.kt)("h3",{id:"4\u5c01\u88c5\u89e3\u5c01\u88c5"},"4.\u5c01\u88c5\u3001\u89e3\u5c01\u88c5"),(0,r.kt)("admonition",{title:"\ud83c\udf33 \u5c01\u88c5\u3001\u89e3\u5c01\u88c5",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u5c01\u88c5"),"\uff1a\u5728\u6570\u636e\u53d8\u6210\u6bd4\u7279\u6d41\uff08\u7269\u7406\u5c42\uff09\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4ece\u4e0a\u5230\u4e0b\u6bcf\u5c42\u5f80\u6570\u636e",(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0\u5934\u90e8"),"\u7684\u64cd\u4f5c\u53eb\u505a\u5c01\u88c5\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u5c01\u88c5"),"\uff1a\u4ece\u7269\u7406\u5c42\u63a5\u6536\u5230\u7684\u6bd4\u7279\u6d41\u4ece\u4e0b\u5230\u4e0a\u6bcf\u5c42",(0,r.kt)("strong",{parentName:"p"},"\u53bb\u9664\u5934\u90e8"),"\u7684\u64cd\u4f5c\u53eb\u505a\u89e3\u5c01\u88c5\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yi92togag30ew0dln5l.gif",alt:"20200714124459982.gif"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/lln1540295459/article/details/107335373"},"\u56fe\u7247\u6765\u6e90")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TCP/IP\u534f\u8bae\u6808\u7684\u5c01\u88c5\u89e3\u5c01\u88c5\u8fc7\u7a0b\uff1a"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/mw690/006SHRs9gy1h2yie427boj30lo0exjvj.jpg",alt:"image.png"}),"  "),(0,r.kt)("h3",{id:"5\u590d\u7528\u7684\u6982\u5ff5"},"5.\u590d\u7528\u7684\u6982\u5ff5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u591a\u4e2a\u7528\u6237\u4f7f\u7528\u4e00\u4e2aIO\u8d44\u6e90 \u53d1\u9001\u6d88\u606f \u65f6\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u201c\u590d\u7528\u201d\u3002  ")),(0,r.kt)("admonition",{title:"\ud83c\udf33 \u590d\u7528\u4e3e\u4f8b",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5e94\u7528\u5c42"),"\uff1a\u64cd\u4f5c\u7cfb\u7edf\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u7ebf\u7a0b")," \u5229\u7528\u4e00\u4e2a\u7aef\u53e3",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728",(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u8f93\u5c42"),"\uff1a\u64cd\u4f5c\u7cfb\u7edf\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u8fdb\u7a0b\uff08\u8fd9\u91cc\u4e00\u4e2a\u7aef\u53e3\u8868\u793a\u4e00\u4e2a\u8fdb\u7a0b\uff09")," \u5229\u7528\u4e00\u4e2a\u8fd0\u8f93\u5c42\u534f\u8bae\uff08\u6216\u8005\u79f0\u4e3a\u8fd0\u8f93\u5c42\u63a5\u53e3\uff09\u53d1\u9001\u6570\u636e\u79f0\u4e3a\u590d\u7528",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728",(0,r.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u5c42"),"\uff1a\u5c40\u57df\u7f51\u5185",(0,r.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u4e3b\u673a\u5229\u7528\u4e00\u4e2a\u8def\u7531\u7f51\u5173\u53d1\u9001\u6d88\u606f\u7ed9\u4e92\u8054\u7f51\u7684\u5176\u4ed6\u4e3b\u673a"),"\u3002\u8fd9\u4e5f\u662f\u590d\u7528\u6280\u672f\u3002  "),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"\u76f8\u53cd\uff0c\u63a5\u6536\u5c31\u662f\u5206\u7528"))),(0,r.kt)("h3",{id:"6\u6bcf\u5c42\u4f7f\u7528\u7684\u7f51\u7edc\u7269\u7406\u8bbe\u5907"},"6.\u6bcf\u5c42\u4f7f\u7528\u7684\u7f51\u7edc\u7269\u7406\u8bbe\u5907"),(0,r.kt)("h4",{id:"\u7269\u7406\u5c42\u8bbe\u5907"},"\u7269\u7406\u5c42\u8bbe\u5907"),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u4e2d\u7ee7\u5668\u7684\u4f5c\u7528",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4fe1\u53f7\u653e\u5927\u5668"),"\uff0c\u4fe1\u53f7\u5728\u4f20\u8f93\u7684\u8fc7\u7a0b\u4e2d\u662f\u8981\u8870\u51cf\u7684\uff0c\u4e2d\u7ee7\u5668\u7684\u4f5c\u7528\u5c31\u662f\u5c06\u4fe1\u53f7\u653e\u5927\uff0c\u4f7f\u4fe1\u53f7\u80fd\u4f20\u7684\u66f4\u8fdc.")),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u96c6\u7ebf\u5668\u7684\u4f5c\u7528",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u5b83\u662f\u591a\u7aef\u53e3\u7684\u4e2d\u7ee7\u5668"),"\uff0c\u628a\u6bcf\u4e2a\u8f93\u5165\u7aef\u53e3\u7684\u4fe1\u53f7\u653e\u5927\u518d\u53d1\u5230\u522b\u7684\u7aef\u53e3\u53bb\uff0c\u53ef\u4ee5\u5b9e\u73b0\u591a\u53f0\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u4e92\u8054\uff0c\u56e0\u4e3a\u5b83\u6709\u5f88\u591a\u7684\u7aef\u53e3\uff0c\u6bcf\u4e2a\u53e3\u90fd\u80fd\u8fde\u8ba1\u7b97\u673a\u3002")),(0,r.kt)("h4",{id:"\u94fe\u8def\u5c42\u8bbe\u5907"},"\u94fe\u8def\u5c42\u8bbe\u5907"),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u4ea4\u6362\u673a\u7684\u4f5c\u7528",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5e38\u7528\u6765\u8fde\u63a5\u72ec\u7acb\u7684\u8ba1\u7b97\u673a\uff0c\u7aef\u53e3\u8f83\u7f51\u6865\u591a\uff0c\u6709\u865a\u62df\u5c40\u57df\u7f51\u7684\u5efa\u7acb\u529f\u80fd\u3002\u73b0\u4ee3\u4ea4\u6362\u673a\u662f\u8fd9\u6837\u5904\u7406\u6570\u636e\u5e27\u7684\uff1a\u4e00\u65e6\u76ee\u6807\u5934\u57df\uff08\u76ee\u6807\u5730\u5740\uff09\u5df2\u7ecf\u8fdb\u6765\u4e86\uff0c\u5c3d\u7ba1\u5e27\u7684\u5176\u4ed6\u90e8\u5206\u8fd8\u6ca1\u6709\u5230\u8fbe\uff0c\u5219\u53ea\u8981\u8f93\u51fa\u7ebf\u8def\u53ef\u4ee5\u4f7f\u7528\uff0c\u4ea4\u6362\u673a\u5c31\u5f00\u59cb\u8f6c\u53d1\u8be5\u5e27\uff0c\u800c\u4e0d\u9700\u7406\u4f1a\u5e27\u540e\u9762\u7684\u5185\u5bb9\uff0c\u4e5f\u5373\u662f\u8bf4\u4ea4\u6362\u673a\u5e76\u6ca1\u6709\u4f7f\u7528\u201c\u5b58\u50a8\u2014\u8f6c\u53d1\u201d\u4ea4\u6362\u65b9\u5f0f\u3010?\u3011\u3002  ")),(0,r.kt)("h4",{id:"\u7f51\u7edc\u5c42\u8bbe\u5907"},"\u7f51\u7edc\u5c42\u8bbe\u5907"),(0,r.kt)("admonition",{title:"\ud83d\udd14 \u8def\u7531\u5668\u7684\u4f5c\u7528",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u63d0\u4f9b\u7f51\u7edc\u5c42\u7684\u534f\u8bae\u8f6c\u6362\uff0c\u5e76\u5728",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u7f51\u7edc\u4e4b\u95f4\u5b58\u50a8\u548c\u8f6c\u53d1\u5206\u7ec4"),"\u3002\u628a\u6570\u636e\uff08IP\u62a5\u6587\uff09\u4f20\u9001\u5230\u6b63\u786e\u7684\u7f51\u7edc\u3002IP\u8def\u7531\u5668\u7684\u4e3b\u8981\u529f\u80fd\u5206\u4e3aIP\u6570\u636e\u5305\u7684\u8f6c\u53d1\u3001\u8def\u7531\u7684\u8ba1\u7b97\u548c\u66f4\u65b0\u3001ICMP\u6d88\u606f\u7684\u5904\u7406\u3001\u7f51\u7edc\u7ba1\u7406\u4ee5\u53ca\u5b89\u5168\u670d\u52a1\u4e94\u4e2a\u65b9\u9762\u3002")),(0,r.kt)("h3",{id:"7\u5206\u5c42\u7684\u57fa\u672c\u6982\u5ff5"},"7.\u5206\u5c42\u7684\u57fa\u672c\u6982\u5ff5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u5c42\u5229\u7528\u4e0b\u5c42\u63d0\u4f9b\u7684\u670d\u52a1\uff0c\u4ee5\u5b8c\u6210\u672c\u5c42\u6570\u636e\u5355\u5143\u7684\u4f20\u8f93")))}N.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[3799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=l.createContext({}),u=function(e){var t=l.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(k.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},o=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,k=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),o=u(n),N=a,s=o["".concat(k,".").concat(N)]||o[N]||m[N]||r;return n?l.createElement(s,i(i({ref:t},d),{},{components:n})):l.createElement(s,i({ref:t},d))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=o;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}o.displayName="MDXCreateElement"},19331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const r={title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93",date:new Date("2022-10-20T00:00:00.000Z"),authors:"Chengzihan",tags:["Sql"]},i=void 0,p={unversionedId:"BackEnd/MySql/relationdb",id:"BackEnd/MySql/relationdb",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93",description:"\u5173\u7cfb\u7684\u5f62\u5f0f\u5316\u5b9a\u4e49",source:"@site/docs/BackEnd/MySql/03.relationdb.md",sourceDirName:"BackEnd/MySql",slug:"/BackEnd/MySql/relationdb",permalink:"/docs/BackEnd/MySql/relationdb",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/BackEnd/MySql/03.relationdb.md",tags:[{label:"Sql",permalink:"/docs/tags/sql"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93",date:"2022-10-20T00:00:00.000Z",authors:"Chengzihan",tags:["Sql"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u7cfb\u7edf\u6982\u8ff0",permalink:"/docs/BackEnd/MySql/xulun"},next:{title:"Node.js",permalink:"/docs/category/nodejs"}},k={},u=[{value:"\u5173\u7cfb\u7684\u5f62\u5f0f\u5316\u5b9a\u4e49",id:"\u5173\u7cfb\u7684\u5f62\u5f0f\u5316\u5b9a\u4e49",level:2},{value:"\u57df",id:"\u57df",level:3},{value:"\u7b1b\u5361\u5c14\u79ef",id:"\u7b1b\u5361\u5c14\u79ef",level:3},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",level:3},{value:"\u5173\u7cfb\u6a21\u5f0f",id:"\u5173\u7cfb\u6a21\u5f0f",level:2},{value:"\u5173\u7cfb\u6570\u636e\u5e93",id:"\u5173\u7cfb\u6570\u636e\u5e93",level:2},{value:"\u5019\u9009\u7801\u3001\u4e3b\u7801\u548c\u5916\u7801",id:"\u5019\u9009\u7801\u4e3b\u7801\u548c\u5916\u7801",level:2},{value:"\u5019\u9009\u7801",id:"\u5019\u9009\u7801",level:3},{value:"\u4e3b\u7801",id:"\u4e3b\u7801",level:3},{value:"\u5916\u7801",id:"\u5916\u7801",level:3},{value:"\u5173\u7cfb\u7684\u5b8c\u6574\u6027",id:"\u5173\u7cfb\u7684\u5b8c\u6574\u6027",level:2},{value:"\u5b9e\u4f53\u5b8c\u6574\u6027",id:"\u5b9e\u4f53\u5b8c\u6574\u6027",level:3},{value:"\u53c2\u7167\u5b8c\u6574\u6027",id:"\u53c2\u7167\u5b8c\u6574\u6027",level:3},{value:"\u7528\u6237\u81ea\u5b9a\u4e49\u5b8c\u6574\u6027",id:"\u7528\u6237\u81ea\u5b9a\u4e49\u5b8c\u6574\u6027",level:3},{value:"\u5173\u7cfb\u4ee3\u6570",id:"\u5173\u7cfb\u4ee3\u6570",level:2},{value:"\u5173\u7cfb\u8fd0\u7b97\u7b26",id:"\u5173\u7cfb\u8fd0\u7b97\u7b26",level:3},{value:"\u4f20\u7edf\u7684\u96c6\u5408\u8fd0\u7b97",id:"\u4f20\u7edf\u7684\u96c6\u5408\u8fd0\u7b97",level:3},{value:"\u4e13\u95e8\u7684\u5173\u7cfb\u8fd0\u7b97",id:"\u4e13\u95e8\u7684\u5173\u7cfb\u8fd0\u7b97",level:3},{value:"\u5c5e\u6027\u5217",id:"\u5c5e\u6027\u5217",level:3},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5173\u7cfb\u7684\u5f62\u5f0f\u5316\u5b9a\u4e49"},"\u5173\u7cfb\u7684\u5f62\u5f0f\u5316\u5b9a\u4e49"),(0,a.kt)("h3",{id:"\u57df"},"\u57df"),(0,a.kt)("p",null,"\u57df\u662f\u4e00\u7ec4\u6709\u76f8\u540c\u6570\u636e\u7c7b\u578b\u7684\u503c\u7684\u96c6\u5408\uff0c\u4f8b\u5982\u6574\u6570\u57df\u3001\u5b9e\u6570\u57df\u3001\u5b57\u7b26\u4e32\u57df\u7b49\u3002\u4e00\u822c\u7528D\u8868\u793a\u57df\uff0cD\u4e2d\u7684\u5143\u7d20\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"(\u5206\u91cf)\u8868\u793a\u3002\u57df\u4e2d\u6240\u5305\u542b\u5143\u7d20\u7684\u4e2a\u6570\u88ab\u79f0\u4e3a\u57df\u7684\u57fa\u6570\uff0c\u8bb0\u4f5c",(0,a.kt)("inlineCode",{parentName:"p"},"m"),"\u3002\u5982\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"D = {1,2,3,4,5,6,7,8,9,0}\nm = 10\n")),(0,a.kt)("h3",{id:"\u7b1b\u5361\u5c14\u79ef"},"\u7b1b\u5361\u5c14\u79ef"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u7ec4\u57dfD1,D2,\u2026,Dn\uff0c\u5176\u7b1b\u5361\u5c14\u79efD1\xd7D2\xd7\u2026\xd7Dn\u662f\u7531D1\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20d1\u4e0eD2\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20d2,\u2026,Dn\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20dn\u7ec4\u6210\u7684\u6709\u5e8f\u5bf9(d1,d2,\u2026,dn)\u7684\u96c6\u5408\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"D1 = {1,2,3}\nD2 = {a,b,c}\nD1\xd7D2 = {(1,a),(1,b),(1,c),(2,a),(2,b),(2,c),(3,a),(3,b),(3,c)}\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6bcf\u4e2a\u5143\u7d20 (d1,d2,\u2026,dn) \u79f0\u4e3a\u4e00\u4e2a\u5143\u7ec4\uff0c\u5176\u4e2dd1\u79f0\u4e3a\u5143\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5206\u91cf\uff0cd2\u79f0\u4e3a\u5143\u7ec4\u7684\u7b2c\u4e8c\u4e2a\u5206\u91cf\uff0c\u2026\uff0cdn\u79f0\u4e3a\u5143\u7ec4\u7684\u7b2cn\u4e2a\u5206\u91cf\u3002\u8fd9\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"n-\u5143\u7ec4"),"\u3002  "),(0,a.kt)("p",null,"\u7b1b\u5361\u5c14\u79ef\u7684\u57fa\u6570\u4e3a\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"m = m1*m2*\u2026*mn\n")),(0,a.kt)("p",null,"\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u03a0(i=1,n)mi"),"\u3002\u5728\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"m = 3*3 = 9"),"\u3002  "),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u7b1b\u5361\u5c14\u79ef\u53ef\u4ee5\u8868\u793a\u6210\u4e00\u4e2a\u4e8c\u7ef4\u8868\u7684\u5f62\u5f0f\u3002\u8bbeD1={\u674e\u529b\uff0c\u738b\u5e73\uff0c\u5218\u4f1f}\uff0cD2={\u7537\uff0c\u5973}\uff0c\u5219D1\xd7D2\u7684\u7b1b\u5361\u5c14\u79ef\u4e3a\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"D1\xd7D2 = {(\u674e\u529b,\u7537),(\u674e\u529b,\u5973),(\u738b\u5e73,\u7537),(\u738b\u5e73,\u5973),(\u5218\u4f1f,\u7537),(\u5218\u4f1f,\u5973)}\n")),(0,a.kt)("p",null,"\u8868\u793a\u4e3a\u4e8c\u7ef4\u8868\uff1a  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6027\u522b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u674e\u529b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7537")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u674e\u529b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5973")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u738b\u5e73"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7537")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u738b\u5e73"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5973")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5218\u4f1f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7537")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5218\u4f1f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5973")))),(0,a.kt)("h3",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,a.kt)("p",null,"\u5728\u7b1b\u5361\u5c14\u79ef\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u5b50\u96c6\u79f0\u4e3a\u5b9a\u4e49\u5728\u7b1b\u5361\u5c14\u79ef\u4e0a\u7684\u4e00\u4e2a\u5173\u7cfb\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R(D1,D2) = {(\u674e\u529b,\u7537),(\u674e\u529b,\u5973),(\u738b\u5e73,\u7537),(\u738b\u5e73,\u5973),(\u5218\u4f1f,\u7537),(\u5218\u4f1f,\u5973)}\n")),(0,a.kt)("p",null,"\u7b1b\u5361\u5c14\u79ef",(0,a.kt)("inlineCode",{parentName:"p"},"D1\xd7D2\xd7\u2026\xd7Dn"),"\u4e0a\u7684\u5173\u7cfb",(0,a.kt)("inlineCode",{parentName:"p"},"R(D1,D2,\u2026,Dn)"),"\u88ab\u79f0\u4e3a\u5b9a\u4e49\u5728\u57df",(0,a.kt)("inlineCode",{parentName:"p"},"D1,D2,\u2026,Dn"),"\u4e0a\u7684n\u5143\u5173\u7cfb\u3002  "),(0,a.kt)("p",null,"\u5982\u4e0a\u9762\u7684\u4f8b\u5b50\u6709\u8fd9\u6837\u7684\u5173\u7cfb\uff1a  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6027\u522b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u674e\u529b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7537")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u738b\u5e73"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5973")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5218\u4f1f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7537")))),(0,a.kt)("p",null,"\u5173\u7cfb\u7684\u57fa\u6570\u662f\u5173\u7cfb\u4e2d\u5143\u7ec4\u7684\u4e2a\u6570\u3002  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"n=1\uff0c\u79f0\u4e3a\u4e00\u5143\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u662f\u5173\u7cfb\u4e2d\u7684\u5143\u7ec4\uff0c\u901a\u5e38\u7528 t \u6765\u8868\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u4e5f\u53ef\u4ee5\u770b\u4f5c\u4e00\u4e2a\u4e8c\u7ef4\u8868\uff0c\u6bcf\u4e2a\u5143\u7ec4\u5bf9\u5e94\u8868\u4e2d\u7684\u4e00\u884c\uff0c\u6bcf\u4e2a\u5206\u91cf\u5bf9\u5e94\u8868\u4e2d\u7684\u4e00\u5217\u3002  "),(0,a.kt)("li",{parentName:"ul"},"\u5177\u6709\u76f8\u540c",(0,a.kt)("strong",{parentName:"li"},"\u5173\u7cfb\u6846\u67b6"),"\u7684\u5173\u7cfb\u79f0\u4e3a\u540c\u7c7b\u5173\u7cfb\u3002  ")),(0,a.kt)("p",null,"\u5173\u7cfb\u53ef\u5206\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u7684\u5934"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u7684\u4f53"),"\u3002\u4e00\u822c\u5173\u7cfb\u7684\u5934\u4fdd\u6301\u4e0d\u53d8\uff0c\u5173\u7cfb\u7684\u4f53\u4e0d\u65ad\u589e\u957f\u3002\u5728\u4ea7\u751f\u7684\u5173\u7cfb\u4e2d\uff0c\u5e76\u4e0d\u662f\u6240\u6709\u7684\u5173\u7cfb\u7b26\u5408\u903b\u8f91\u3002"),(0,a.kt)("h2",{id:"\u5173\u7cfb\u6a21\u5f0f"},"\u5173\u7cfb\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5173\u7cfb\u6a21\u5f0f\u662f\u5bf9\u5173\u7cfb\u7684\u63cf\u8ff0\uff0c\u5173\u7cfb\u6a21\u5f0f\u9700\u8981\u6307\u51fa\u5143\u7ec4\u7684\u7ed3\u6784\uff0c\u5373\u7531\u54ea\u4e9b\u5c5e\u6027\u7ec4\u6210\uff0c\u5c5e\u6027\u53d6\u81ea\u54ea\u4e2a\u57df\uff0c\u5c5e\u6027\u548c\u57df\u4e4b\u95f4\u5b58\u5728\u6620\u5c04\u5173\u7cfb\u3002\u5173\u7cfb\u6a21\u5f0f\u53ef\u4ee5\u5f62\u5f0f\u5316\u4e3a\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R(U,D,DOM,F)\n")),(0,a.kt)("p",null,"\u5176\u4e2d\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"R\u662f\u5173\u7cfb\u7684\u540d\u79f0\uff0c\u662f\u4e00\u4e2a\u975e\u7a7a\u6709\u9650\u96c6\u5408\u3002  "),(0,a.kt)("li",{parentName:"ul"},"U\u662f\u5173\u7cfb\u7684\u5c5e\u6027\u96c6\u5408\uff0c\u662f\u4e00\u4e2a\u975e\u7a7a\u6709\u9650\u96c6\u5408\u3002"),(0,a.kt)("li",{parentName:"ul"},"D\u662f\u5c5e\u6027\u6765\u81ea\u7684\u57df\u3002"),(0,a.kt)("li",{parentName:"ul"},"DOM\u662f\u5c5e\u6027\u548c\u57df\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},"F\u662f\u5c5e\u6027\u6570\u636e\u7684\u4f9d\u8d56\u5173\u7cfb\u96c6\u5408\u3002  ")),(0,a.kt)("p",null,"\u7b80\u8bb0\u4e3a\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R(U)\u6216R(A1,A2,\u2026,An)\n// \u5176\u4e2d\uff0cA1,A2,\u2026,An\u662f\u5c5e\u6027\u7684\u540d\u79f0\n")),(0,a.kt)("p",null,"\u5173\u7cfb\u6a21\u5f0f\u662f\u578b\uff0c\u5173\u7cfb\u662f\u503c\u3002  "),(0,a.kt)("h2",{id:"\u5173\u7cfb\u6570\u636e\u5e93"},"\u5173\u7cfb\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u5728\u7ed9\u5b9a\u7684\u9886\u57df\u4e2d\uff0c\u6240\u6709\u5b9e\u4f53\u4ee5\u53ca\u5b9e\u4f53\u4e4b\u95f4\u7684\u8054\u7cfb\u6240\u5bf9\u5e94\u7684\u5173\u7cfb\u7684\u96c6\u5408\u6784\u6210\u4e00\u4e2a\u5173\u7cfb\u7684\u6570\u636e\u5e93\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"- \u5173\u7cfb\u6570\u636e\u5e93\n    - \u5173\u7cfb\u6a21\u5f0f\n    - \u5173\u7cfb\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u6570\u636e\u5e93\u7684\u6a21\u5f0f"),"\u662f\u5bf9\u5173\u7cfb\u6570\u636e\u5e93\u7684\u63cf\u8ff0\uff0c\u5173\u7cfb\u6570\u636e\u5e93\u7684\u6a21\u5f0f\u662f\u5173\u7cfb\u6a21\u5f0f\u7684",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u5408"),"\u3002  "),(0,a.kt)("h2",{id:"\u5019\u9009\u7801\u4e3b\u7801\u548c\u5916\u7801"},"\u5019\u9009\u7801\u3001\u4e3b\u7801\u548c\u5916\u7801"),(0,a.kt)("h3",{id:"\u5019\u9009\u7801"},"\u5019\u9009\u7801"),(0,a.kt)("p",null,"\u5173\u7cfb\u5019\u9009\u7801\u662f\u80fd\u591f\u6807\u8bc6\u5173\u7cfb\u4e2d\u5143\u7ec4\u552f\u4e00\u6027\u7684\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u6216\u5c5e\u6027\u7ec4\u5408"),"\u3002\u5019\u9009\u7801\u6709\u552f\u4e00\u6027\u548c\u6700\u5c0f\u6027\u3002  "),(0,a.kt)("p",null,"\u5982\u5b66\u751f\u8868\u4e2d\uff0c\u5b66\u53f7\u662f\u552f\u4e00\u7684\uff0c\u6240\u4ee5\u5b66\u53f7\u662f\u5019\u9009\u7801\u3002\u4f46\u662f\u5728\u9009\u8bfe\u5173\u7cfb\u4e2d\uff0c\u5b66\u53f7\u548c\u8bfe\u7a0b\u53f7\u7ec4\u5408\u8d77\u6765\u624d\u80fd\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u9009\u8bfe\u8bb0\u5f55\uff0c\u6240\u4ee5\u5b66\u53f7\u548c\u8bfe\u7a0b\u53f7",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u5408\u8d77\u6765"),"\u662f\u5019\u9009\u7801\u3002"),(0,a.kt)("h3",{id:"\u4e3b\u7801"},"\u4e3b\u7801"),(0,a.kt)("p",null,"\u4ece\u591a\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u5019\u9009\u7801"),"\u4e2d\u9009\u62e9\u4e00\u4e2a\u4f5c\u4e3a\u67e5\u8be2\u3001\u4fee\u6539\u3001\u5220\u9664\u8bb0\u5f55\u7684\u6700\u4e3b\u8981\u4f9d\u636e\uff0c\u79f0\u4e3a\u4e3b\u7801\u3002\u6bd4\u5982\u5b66\u751f\u8868\u4e2d\uff0c\u5b66\u53f7\u662f\u4e3b\u7801\u3002\u6216\u8005\u5728\u59d3\u540d\u4e0d\u91cd\u590d\u7684\u60c5\u51b5\u4e0b\uff0c\u59d3\u540d\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u4e3b\u7801\u3002  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e3b\u5c5e\u6027"),"\u3002\u5305\u542b\u5728\u4e3b\u7801\u4e2d\u7684\u5404\u4e2a\u5c5e\u6027\u79f0\u4e3a\u5173\u7cfb\u7684\u4e3b\u5c5e\u6027\u3002  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u4e3b\u5c5e\u6027"),"\u3002\u4e0d\u5305\u542b\u5728\u4e3b\u7801\u4e2d\u7684\u5c5e\u6027\u79f0\u4e3a\u975e\u4e3b\u5c5e\u6027\u3002  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5168\u7801"),"\u3002\u6240\u6709\u5c5e\u6027\u7684\u7ec4\u5408\u662f\u5173\u7cfb\u7684\u5019\u9009\u7801\u3002")),(0,a.kt)("p",null,"\u4e3e\u4e00\u4e2a\u5168\u7801\u7684\u4f8b\u5b50\uff0c\u5728\u6559\u5e08\u3001\u5b66\u751f\u3001\u8bfe\u7a0b\u4e09\u79cd\u5173\u7cfb\u4e2d\uff0c\u6559\u5e08\u53f7\u3001\u5b66\u53f7\u3001\u8bfe\u7a0b\u53f7\u4e09\u4e2a\u5c5e\u6027\u7684\u7ec4\u5408\u662f\u5168\u7801\u3002\u8fd9\u4e2a\u5168\u7801\u6784\u6210\u4e86\u6559\u5e08\u6559\u8bfe\u7684\u5173\u7cfb\u3001\u5b66\u751f\u9009\u8bfe\u7684\u5173\u7cfb\u3002"),(0,a.kt)("h3",{id:"\u5916\u7801"},"\u5916\u7801"),(0,a.kt)("p",null,"\u5982\u679c\u5173\u7cfbR2\u7684\u4e00\u4e2a\u6216\u4e00\u7ec4\u5c5e\u6027\u4e0d\u662f\u5173\u7cfbR2\u7684\u4e3b\u7801\uff0c\u800c\u662f\u53e6\u4e00\u4e2a\u5173\u7cfbR1\u7684\u4e3b\u7801\uff0c\u5219\u79f0\u8fd9\u4e2a\u5c5e\u6027\u6216\u5c5e\u6027\u7ec4\u5408\u4e3a\u5173\u7cfbR2\u7684\u5916\u7801\u3002  "),(0,a.kt)("h2",{id:"\u5173\u7cfb\u7684\u5b8c\u6574\u6027"},"\u5173\u7cfb\u7684\u5b8c\u6574\u6027"),(0,a.kt)("p",null,"\u5173\u7cfb\u7684\u5b8c\u6574\u6027\u6709\u4e09\u7c7b\u7ea6\u675f\uff1a\u5b9e\u4f53\u5b8c\u6574\u6027\u3001\u53c2\u7167\u5b8c\u6574\u6027\u548c\u7528\u6237\u81ea\u5b9a\u4e49\u5b8c\u6574\u6027\u3002  "),(0,a.kt)("h3",{id:"\u5b9e\u4f53\u5b8c\u6574\u6027"},"\u5b9e\u4f53\u5b8c\u6574\u6027"),(0,a.kt)("p",null,"\u4e3b\u7801\u7684\u503c\u4e0d\u80fd\u4e3a\u7a7a\u6216\u8005\u90e8\u5206\u4e3a\u7a7a\u3002\u5426\u5219\u5c31\u4f1a\u8fdd\u80cc\u73b0\u5b9e\u4e16\u754c\u7684\u60c5\u51b5\u3002"),(0,a.kt)("h3",{id:"\u53c2\u7167\u5b8c\u6574\u6027"},"\u53c2\u7167\u5b8c\u6574\u6027"),(0,a.kt)("p",null,"\u53c2\u7167\u7684\u5b8c\u6574\u6027\u8981\u6c42\u5173\u7cfb\u4e2d\u4e0d\u5141\u8bb8\u5f15\u7528\u4e0d\u5b58\u5728\u7684\u5b9e\u4f53\u3002\u4e0e\u5b9e\u4f53\u5b8c\u6574\u6027\u662f\u5173\u7cfb\u6a21\u578b\u5fc5\u987b\u6ee1\u8db3\u7684\u5b8c\u6574\u6027\u7ea6\u675f\u6761\u4ef6\uff0c\u76ee\u7684\u662f\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002\u53c2\u7167\u5b8c\u6574\u6027\u53c8\u79f0\u5f15\u7528\u5b8c\u6574\u6027\u3002  "),(0,a.kt)("h3",{id:"\u7528\u6237\u81ea\u5b9a\u4e49\u5b8c\u6574\u6027"},"\u7528\u6237\u81ea\u5b9a\u4e49\u5b8c\u6574\u6027"),(0,a.kt)("p",null,"\u7528\u6237\u81ea\u5b9a\u4e49\u5b8c\u6574\u6027\u662f\u7528\u6237\u6839\u636e\u5b9e\u9645\u9700\u8981\u5b9a\u4e49\u7684\u5b8c\u6574\u6027\u7ea6\u675f\u6761\u4ef6\u3002\u6bd4\u5982\u5728\u6210\u7ee9\u8868\u4e2d\uff0c\u6210\u7ee9\u4e0d\u80fd\u5c0f\u4e8e0\u6216\u8005\u5927\u4e8e100\u3002  "),(0,a.kt)("h2",{id:"\u5173\u7cfb\u4ee3\u6570"},"\u5173\u7cfb\u4ee3\u6570"),(0,a.kt)("p",null,"\u5173\u7cfb\u4ee3\u6570\u662f\u4e00\u79cd\u62bd\u8c61\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u5173\u7cfb\u4ee3\u6570\u7684\u8fd0\u7b97\u5bf9\u8c61\u548c\u8fd0\u7b97\u7ed3\u679c\u90fd\u662f\u5173\u7cfb\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u5173\u7cfb\u4ee3\u6570\u7684\u8fd0\u7b97\u7b26\u3002  "),(0,a.kt)("h3",{id:"\u5173\u7cfb\u8fd0\u7b97\u7b26"},"\u5173\u7cfb\u8fd0\u7b97\u7b26"),(0,a.kt)("p",null,"\u96c6\u5408\u8fd0\u7b97\u7b26\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e76\u8fd0\u7b97\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"R \u222a S")),(0,a.kt)("li",{parentName:"ul"},"\u4ea4\u8fd0\u7b97\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"R \u2229 S")),(0,a.kt)("li",{parentName:"ul"},"\u5dee\u8fd0\u7b97\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"R - S")),(0,a.kt)("li",{parentName:"ul"},"\u7b1b\u5361\u5c14\u79ef\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"R \xd7 S"))),(0,a.kt)("p",null,"\u5173\u7cfb\u8fd0\u7b97\u7b26\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u03c3")),(0,a.kt)("li",{parentName:"ul"},"\u6295\u5f71\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u03c0")),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u22c8")),(0,a.kt)("li",{parentName:"ul"},"\u9664\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\xf7"))),(0,a.kt)("p",null,"\u6bd4\u8f83\u8fd0\u7b97\u7b26\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b49\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"=")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u7b49\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u2260")),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"<")),(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u4e8e\u7b49\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u2264")),(0,a.kt)("li",{parentName:"ul"},"\u5927\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},">")),(0,a.kt)("li",{parentName:"ul"},"\u5927\u4e8e\u7b49\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265"))),(0,a.kt)("p",null,"\u903b\u8f91\u8fd0\u7b97\u7b26\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u2227")),(0,a.kt)("li",{parentName:"ul"},"\u6216\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u2228")),(0,a.kt)("li",{parentName:"ul"},"\u975e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\xac"))),(0,a.kt)("h3",{id:"\u4f20\u7edf\u7684\u96c6\u5408\u8fd0\u7b97"},"\u4f20\u7edf\u7684\u96c6\u5408\u8fd0\u7b97"),(0,a.kt)("p",null,"\u82e5\u5173\u7cfb R \u548c\u5173\u7cfb S \u6709\u76f8\u540c\u7684\u5ea6\u6570\u3002  "),(0,a.kt)("p",null,"\u5173\u7cfbR\u548c\u5173\u7cfbS\u7684\u5e76\u8fd0\u7b97\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R \u222a S = {r \u222a s | r \u2208 R, s \u2208 S}\n")),(0,a.kt)("p",null,"\u5173\u7cfbR\u548c\u5173\u7cfbS\u7684\u4ea4\u8fd0\u7b97\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R \u2229 S = {r \u2229 s | r \u2208 R, s \u2208 S}\n")),(0,a.kt)("p",null,"\u5173\u7cfbR\u548c\u5173\u7cfbS\u7684\u5dee\u8fd0\u7b97\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R - S = {r - s | r \u2208 R, s \u2208 S}\n")),(0,a.kt)("p",null,"\u5e7f\u4e49\u7b1b\u5361\u5c14\u79ef\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R \xd7 S = {r \xd7 s | r \u2208 R, s \u2208 S}\n")),(0,a.kt)("p",null,"\u4e3e\u4f8b\uff1a  "),(0,a.kt)("p",null,"R = {1, 2, 3}\uff0cS = {a, b, c}\uff0c\u5219\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"R \u222a S = {1, 2, 3, a, b, c}\nR \u2229 S = {}\nR - S = {1, 2, 3}\nR \xd7 S = {(1, a), (1, b), (1, c), (2, a), (2, b), (2, c), (3, a), (3, b), (3, c)}\n")),(0,a.kt)("h3",{id:"\u4e13\u95e8\u7684\u5173\u7cfb\u8fd0\u7b97"},"\u4e13\u95e8\u7684\u5173\u7cfb\u8fd0\u7b97"),(0,a.kt)("p",null,"\u8bbe\u5173\u7cfb\u6a21\u5f0f\u4e3aR(A1, A2, ..., An)\uff0c\u4ed6\u7684\u4e00\u4e2a\u5173\u7cfb\u4e3aR\uff0ct \u662f R \u7684\u4e00\u4e2a\u5143\u7ec4\uff0ct = (a1, a2, ..., an)\u3002t","[Ai]"," \u8868\u793a t \u7684\u7b2c i \u4e2a\u5206\u91cf\uff0c\u5373 ai\u3002  "),(0,a.kt)("h3",{id:"\u5c5e\u6027\u5217"},"\u5c5e\u6027\u5217"),(0,a.kt)("p",null,"\u82e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"A={Ai1, Ai2, ..., Ain}"),"\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Ai1, Ai2, ..., Ain")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"A1, A2, ..., An")," \u7684\u4e00\u90e8\u5206\uff0c\u90a3\u4e48 A \u5c31\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u5217"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"\u57df\u5217"),"\u3002A\u4e0a\u52a0\u4e00\u4e2a\u6ce2\u6d6a\u7ebf\u8868\u793a\u5728A1, A2, ..., An\u4e2d\u53bb\u9664A\u540e\u5269\u4e0b\u7684\u5c5e\u6027\u3002  "),(0,a.kt)("h3",{id:"\u8fde\u63a5"},"\u8fde\u63a5"),(0,a.kt)("p",null,"R\u4e3am\u76ee"))}m.isMDXComponent=!0}}]);
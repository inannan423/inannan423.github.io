"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[3767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"JSchallenger",date:new Date("2022-08-04T00:00:00.000Z"),authors:"Chengzihan",tags:["web","JavaScript"]},o=void 0,l={unversionedId:"\u524d\u7aef/web\u57fa\u7840/JavaScript/JSChallenger",id:"\u524d\u7aef/web\u57fa\u7840/JavaScript/JSChallenger",title:"JSchallenger",description:"Fundamentals",source:"@site/docs/\u524d\u7aef/08.web\u57fa\u7840/03.JavaScript/00.JSChallenger.md",sourceDirName:"\u524d\u7aef/08.web\u57fa\u7840/03.JavaScript",slug:"/\u524d\u7aef/web\u57fa\u7840/JavaScript/JSChallenger",permalink:"/docs/\u524d\u7aef/web\u57fa\u7840/JavaScript/JSChallenger",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u524d\u7aef/08.web\u57fa\u7840/03.JavaScript/00.JSChallenger.md",tags:[{label:"web",permalink:"/docs/tags/web"},{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",sidebarPosition:0,frontMatter:{title:"JSchallenger",date:"2022-08-04T00:00:00.000Z",authors:"Chengzihan",tags:["web","JavaScript"]},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docs/category/javascript"},next:{title:"\u4ec0\u4e48\u662f JavaScript",permalink:"/docs/\u524d\u7aef/web\u57fa\u7840/JavaScript/whatisjs"}},c={},s=[{value:"Fundamentals",id:"fundamentals",level:2},{value:"\u6bd4\u8f83\u5b57\u7b26",id:"\u6bd4\u8f83\u5b57\u7b26",level:3},{value:"\u5220\u9664\u5b57\u7b26\u4e32\u7684\u524d\u51e0\u4e2a\u5b57\u7b26",id:"\u5220\u9664\u5b57\u7b26\u4e32\u7684\u524d\u51e0\u4e2a\u5b57\u7b26",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fundamentals"},"Fundamentals"),(0,r.kt)("h3",{id:"\u6bd4\u8f83\u5b57\u7b26"},"\u6bd4\u8f83\u5b57\u7b26"),(0,r.kt)("admonition",{title:"Question",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Write a function that takes two values, say a and b, as arguments.Return true if the two values are equal and of the same type.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my code\nfunction myfunction(a,b){\n    let flag;\n    if (a===b){\n    flag=true;\n    }\n    else{\n    flag=false;\n    }\n    return flag;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Answer\nfunction myFunction(a, b) {\n  return a === b;\n}\n")),(0,r.kt)("admonition",{title:"Question",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Write a function that takes a string as argument\uff08\u53c2\u6570\uff09.Extract the last 3 characters \uff08\u8fd4\u56de\u6700\u540e\u4e09\u4e2a\u5b57\u7b26\uff09 from the string.Return the result.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my code\nfunction myFunction(str) {\n   let str1=str.substr(str.length-3,3);\n   return str1;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// answer\nfunction myFunction(str) {\n   return str.slice(-3);\n}\n")),(0,r.kt)("h3",{id:"\u5220\u9664\u5b57\u7b26\u4e32\u7684\u524d\u51e0\u4e2a\u5b57\u7b26"},"\u5220\u9664\u5b57\u7b26\u4e32\u7684\u524d\u51e0\u4e2a\u5b57\u7b26"),(0,r.kt)("admonition",{title:"Question",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Write a function that takes a string (a) as argument.Remove the first 3 characters of a.Return the result.")),(0,r.kt)("p",null,"Using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"slice"),":  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function myFunction(a) {\n   return a.slice(3);\n}\n")),(0,r.kt)("p",null,"Or using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"slicesubstring"),":  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function myFunction(a) {\n   return a.substring(3);\n}\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[2010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u5faa\u73af\u7ed3\u6784",date:new Date("2022-07-25T00:00:00.000Z"),authors:"Chengzihan",tags:["Java"]},i=void 0,o={unversionedId:"Java/cycling",id:"Java/cycling",title:"\u5faa\u73af\u7ed3\u6784",description:"Java\u4e2d\u6709\u4e09\u79cd\u4e3b\u8981\u7684\u5faa\u73af\u7ed3\u6784\uff1a",source:"@site/back/Java/05.cycling.md",sourceDirName:"Java",slug:"/Java/cycling",permalink:"/back/Java/cycling",draft:!1,editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/back/Java/05.cycling.md",tags:[{label:"Java",permalink:"/back/tags/java"}],version:"current",lastUpdatedBy:"inannan423",lastUpdatedAt:1660121731,formattedLastUpdatedAt:"2022\u5e748\u670810\u65e5",sidebarPosition:5,frontMatter:{title:"\u5faa\u73af\u7ed3\u6784",date:"2022-07-25T00:00:00.000Z",authors:"Chengzihan",tags:["Java"]},sidebar:"tutorialSidebar",previous:{title:"\u8fd0\u7b97\u7b26",permalink:"/back/Java/\u8fd0\u7b97\u7b26"},next:{title:"\ud83c\udf89Hello\ud83c\udf88",permalink:"/back/intro"}},p={},c=[{value:"while \u5faa\u73af",id:"while-\u5faa\u73af",level:2},{value:"do\u2026while \u5faa\u73af",id:"dowhile-\u5faa\u73af",level:2},{value:"for \u5faa\u73af",id:"for-\u5faa\u73af",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Java\u4e2d\u6709\u4e09\u79cd\u4e3b\u8981\u7684\u5faa\u73af\u7ed3\u6784\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"while\u5faa\u73af"),(0,r.kt)("li",{parentName:"ul"},"do\u2026while\u5faa\u73af"),(0,r.kt)("li",{parentName:"ul"},"for\u5faa\u73af")),(0,r.kt)("h2",{id:"while-\u5faa\u73af"},"while \u5faa\u73af"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"while")," \u662f\u6700\u57fa\u672c\u7684\u5faa\u73af\uff0c\u5b83\u7684\u7ed3\u6784\u4e3a\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"while( \u5e03\u5c14\u8868\u8fbe\u5f0f ) {\n  //\u5faa\u73af\u5185\u5bb9\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'},'public class Test {\n   public static void main(String[] args) {\n      int x = 10;\n      while( x < 20 ) {\n         System.out.print("value of x : " + x );\n         x++;\n         System.out.print("\\n");\n      }\n   }\n}\n')),(0,r.kt)("h2",{id:"dowhile-\u5faa\u73af"},"do\u2026while \u5faa\u73af"),(0,r.kt)("p",null,"\u5bf9\u4e8e while \u8bed\u53e5\u800c\u8a00\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5219\u4e0d\u80fd\u8fdb\u5165\u5faa\u73af\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4f46\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u5373\u4f7f\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u4e5f\u81f3\u5c11\u6267\u884c\u4e00\u6b21"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"do\u2026while")," \u5faa\u73af\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," \u5faa\u73af\u76f8\u4f3c\uff0c\u4e0d\u540c\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"do\u2026while")," \u5faa\u73af",(0,r.kt)("em",{parentName:"p"},"\u81f3\u5c11\u4f1a\u6267\u884c\u4e00\u6b21"),"\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"do {\n       //\u4ee3\u7801\u8bed\u53e5\n}while(\u5e03\u5c14\u8868\u8fbe\u5f0f);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5e03\u5c14\u8868\u8fbe\u5f0f\u5728\u5faa\u73af\u4f53\u7684\u540e\u9762\uff0c\u6240\u4ee5\u8bed\u53e5\u5757\u5728\u68c0\u6d4b\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e4b\u524d\u5df2\u7ecf\u6267\u884c\u4e86\u3002 \u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u7684\u503c\u4e3a true\uff0c\u5219\u8bed\u53e5\u5757\u4e00\u76f4\u6267\u884c\uff0c\u76f4\u5230\u5e03\u5c14\u8868\u8fbe\u5f0f\u7684\u503c\u4e3a false\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test {\n   public static void main(String[] args){\n      int x = 10;\n \n      do{\n         System.out.print("value of x : " + x );\n         x++;\n         System.out.print("\\n");\n      }while( x < 20 );\n   }\n}\n')),(0,r.kt)("h2",{id:"for-\u5faa\u73af"},"for \u5faa\u73af"),(0,r.kt)("p",null,"\u867d\u7136\u6240\u6709\u5faa\u73af\u7ed3\u6784\u90fd\u53ef\u4ee5\u7528 while \u6216\u8005 do...while\u8868\u793a\uff0c\u4f46 Java \u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u8bed\u53e5 \u2014\u2014 for \u5faa\u73af\uff0c\u4f7f\u4e00\u4e9b\u5faa\u73af\u7ed3\u6784\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","for\u5faa\u73af\u6267\u884c\u7684\u6b21\u6570\u662f\u5728\u6267\u884c\u524d\u5c31\u786e\u5b9a\u7684\u3002\u8bed\u6cd5\u683c\u5f0f\u5982\u4e0b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"for(\u521d\u59cb\u5316; \u5e03\u5c14\u8868\u8fbe\u5f0f; \u66f4\u65b0) {\n    //\u4ee3\u7801\u8bed\u53e5\n}\n")),(0,r.kt)("p",null,"\u5173\u4e8e for \u5faa\u73af\u6709\u4ee5\u4e0b\u51e0\u70b9\u8bf4\u660e\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u5148\u6267\u884c\u521d\u59cb\u5316\u6b65\u9aa4\u3002\u53ef\u4ee5\u58f0\u660e\u4e00\u79cd\u7c7b\u578b\uff0c\u4f46\u53ef\u521d\u59cb\u5316\u4e00\u4e2a\u6216\u591a\u4e2a\u5faa\u73af\u63a7\u5236\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u662f\u7a7a\u8bed\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7136\u540e\uff0c\u68c0\u6d4b\u5e03\u5c14\u8868\u8fbe\u5f0f\u7684\u503c\u3002\u5982\u679c\u4e3a true\uff0c\u5faa\u73af\u4f53\u88ab\u6267\u884c\u3002\u5982\u679c\u4e3afalse\uff0c\u5faa\u73af\u7ec8\u6b62\uff0c\u5f00\u59cb\u6267\u884c\u5faa\u73af\u4f53\u540e\u9762\u7684\u8bed\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e00\u6b21\u5faa\u73af\u540e\uff0c\u66f4\u65b0\u5faa\u73af\u63a7\u5236\u53d8\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u518d\u6b21\u68c0\u6d4b\u5e03\u5c14\u8868\u8fbe\u5f0f\u3002\u5faa\u73af\u6267\u884c\u4e0a\u9762\u7684\u8fc7\u7a0b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test {\n   public static void main(String[] args) {\n \n      for(int x = 10; x < 20; x = x+1) {\n         System.out.print("value of x : " + x );\n         System.out.print("\\n");\n      }\n   }\n}\n')))}s.isMDXComponent=!0}}]);
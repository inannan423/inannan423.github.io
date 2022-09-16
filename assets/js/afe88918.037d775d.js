"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[6417],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(t),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(k,p(p({ref:n},s),{},{components:t})):a.createElement(k,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const l={title:"\u6570\u636e\u7c7b\u578b\u548c\u51fd\u6570",date:new Date("2022-08-07T00:00:00.000Z"),authors:"Chengzihan",tags:["web","JavaScript"]},p=void 0,i={unversionedId:"FrontEnd/webBasis/JavaScript/languageJS",id:"FrontEnd/webBasis/JavaScript/languageJS",title:"\u6570\u636e\u7c7b\u578b\u548c\u51fd\u6570",description:"\u6570\u636e\u7c7b\u578b",source:"@site/docs/FrontEnd/08.webBasis/03.JavaScript/03.languageJS.md",sourceDirName:"FrontEnd/08.webBasis/03.JavaScript",slug:"/FrontEnd/webBasis/JavaScript/languageJS",permalink:"/docs/FrontEnd/webBasis/JavaScript/languageJS",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/08.webBasis/03.JavaScript/03.languageJS.md",tags:[{label:"web",permalink:"/docs/tags/web"},{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u6570\u636e\u7c7b\u578b\u548c\u51fd\u6570",date:"2022-08-07T00:00:00.000Z",authors:"Chengzihan",tags:["web","JavaScript"]},sidebar:"tutorialSidebar",previous:{title:"\u8f93\u51fa",permalink:"/docs/FrontEnd/webBasis/JavaScript/jsstart"},next:{title:"\u5bf9\u8c61",permalink:"/docs/FrontEnd/webBasis/JavaScript/duixiang"}},u={},o=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:3},{value:"\u6570\u636e\u7c7b\u578b\u7684\u6982\u5ff5",id:"\u6570\u636e\u7c7b\u578b\u7684\u6982\u5ff5",level:3},{value:"\u52a8\u6001\u6570\u636e\u7c7b\u578b",id:"\u52a8\u6001\u6570\u636e\u7c7b\u578b",level:3},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:3},{value:"\u6570\u503c",id:"\u6570\u503c",level:3},{value:"\u5e03\u5c14\u503c",id:"\u5e03\u5c14\u503c",level:3},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:3},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",level:3},{value:"typeof \u8fd0\u7b97",id:"typeof-\u8fd0\u7b97",level:3},{value:"Undefined",id:"undefined",level:3},{value:"\u7a7a\u503c",id:"\u7a7a\u503c",level:3},{value:"NULL",id:"null",level:3},{value:"Undefined \u4e0e Null \u7684\u533a\u522b",id:"undefined-\u4e0e-null-\u7684\u533a\u522b",level:3},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u51fd\u6570\u8bed\u6cd5",id:"\u51fd\u6570\u8bed\u6cd5",level:3},{value:"\u51fd\u6570\u8fd4\u56de",id:"\u51fd\u6570\u8fd4\u56de",level:3},{value:"() \u8fd0\u7b97\u7b26\u8c03\u7528\u51fd\u6570",id:"-\u8fd0\u7b97\u7b26\u8c03\u7528\u51fd\u6570",level:3}],s={toc:o};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("h3",{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,"JavaScript \u53d8\u91cf\u80fd\u591f\u4fdd\u5b58\u591a\u79cd\u6570\u636e\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u6570\u503c\u3001\u5b57\u7b26\u4e32\u503c\u3001\u6570\u7ec4\u3001\u5bf9\u8c61"),"\u7b49\u7b49\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var length = 7;                             // \u6570\u5b57\nvar lastName = "Gates";                      // \u5b57\u7b26\u4e32\nvar cars = ["Porsche", "Volvo", "BMW"];         // \u6570\u7ec4\nvar x = {firstName:"Bill", lastName:"Gates"};    // \u5bf9\u8c61\n')),(0,r.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b\u7684\u6982\u5ff5"},"\u6570\u636e\u7c7b\u578b\u7684\u6982\u5ff5"),(0,r.kt)("p",null,"\u5728\u7f16\u7a0b\u8fc7\u7a0b\u4e2d\uff0c\u6570\u636e\u7c7b\u578b\u662f\u91cd\u8981\u7684\u6982\u5ff5\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e3a\u4e86\u80fd\u591f\u64cd\u4f5c\u53d8\u91cf\uff0c\u4e86\u89e3\u6570\u636e\u7c7b\u578b\u662f\u5f88\u91cd\u8981\u7684\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u6ca1\u6709\u6570\u636e\u7c7b\u578b\uff0c\u8ba1\u7b97\u673a\u5c31\u65e0\u6cd5\u5b89\u5168\u5730\u89e3\u51b3\u8fd9\u9053\u9898\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var x = 911 + "Porsche";\n')),(0,r.kt)("p",null,"JavaScript \u4f1a\u8fd9\u6837\u5904\u7406\u4e0a\u9762\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var x = "911" + "Porsche";\n')),(0,r.kt)("p",null,"\u5f53\u6570\u503c\u548c\u5b57\u7b26\u4e32\u76f8\u52a0\u65f6\uff0cJavaScript \u5c06\u628a\u6570\u503c\u89c6\u4f5c\u5b57\u7b26\u4e32\u3002  "),(0,r.kt)("h3",{id:"\u52a8\u6001\u6570\u636e\u7c7b\u578b"},"\u52a8\u6001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,"\u76f8\u540c\u7684\u53d8\u91cf\u53ef\u4ee5\u7528\u4f5c\u4e0d\u540c\u7684\u7c7b\u578b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var x;               // \u73b0\u5728 x \u662f undefined\nvar x = 7;           // \u73b0\u5728 x \u662f\u6570\u503c\nvar x = "Bill";      // \u73b0\u5728 x \u662f\u5b57\u7b26\u4e32\u503c\n')),(0,r.kt)("h3",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,r.kt)("p",null,"\u5b9e\u4f8b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var carName = \"Porsche 911\";   // \u4f7f\u7528\u53cc\u5f15\u53f7\nvar carName = 'Porsche 911';   // \u4f7f\u7528\u5355\u5f15\u53f7\n")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u5b57\u7b26\u4e32\u5185\u4f7f\u7528\u5f15\u53f7\uff0c\u53ea\u8981\u8fd9\u4e9b\u5f15\u53f7\u4e0e\u5305\u56f4\u5b57\u7b26\u4e32\u7684\u5f15\u53f7\u4e0d\u5339\u914d\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var answer = "It\'s alright";             // \u53cc\u5f15\u53f7\u5185\u7684\u5355\u5f15\u53f7\nvar answer = "He is called \'Bill\'";    // \u53cc\u5f15\u53f7\u5185\u7684\u5355\u5f15\u53f7\nvar answer = \'He is called "Bill"\';    // \u5355\u5f15\u53f7\u5185\u7684\u53cc\u5f15\u53f7\n')),(0,r.kt)("h3",{id:"\u6570\u503c"},"\u6570\u503c"),(0,r.kt)("p",null,"JavaScript ",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u6709\u4e00\u79cd\u6570\u503c\u7c7b\u578b"),"\u3002  "),(0,r.kt)("p",null,"\u5199\u6570\u503c\u65f6\u7528\u4e0d\u7528\u5c0f\u6570\u70b9\u5747\u53ef\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var x1 = 34.00;     // \u5e26\u5c0f\u6570\u70b9\nvar x2 = 34;        // \u4e0d\u5e26\u5c0f\u6570\u70b9\n")),(0,r.kt)("p",null,"\u8d85\u5927\u6216\u8d85\u5c0f\u7684\u6570\u503c\u53ef\u4ee5\u7528\u79d1\u5b66\u8ba1\u6570\u6cd5\u6765\u5199\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var y = 123e5;      // 12300000\nvar z = 123e-5;     // 0.00123\n")),(0,r.kt)("h3",{id:"\u5e03\u5c14\u503c"},"\u5e03\u5c14\u503c"),(0,r.kt)("p",null,"\u5e03\u5c14\u503c\u53ea\u6709\u4e24\u4e2a\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var x = true;\nvar y = false;\n")),(0,r.kt)("h3",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,r.kt)("p",null,"JavaScript \u6570\u7ec4\u7528\u65b9\u62ec\u53f7\u4e66\u5199\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6570\u7ec4\u7684\u9879\u76ee\u7531\u9017\u53f7\u5206\u9694\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0b\u9762\u7684\u4ee3\u7801\u58f0\u660e\uff08\u521b\u5efa\uff09\u4e86\u540d\u4e3a cars \u7684\u6570\u7ec4\uff0c\u5305\u542b\u4e09\u4e2a\u9879\u76ee\uff08\u6c7d\u8f66\u54c1\u724c\uff09\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var cars = ["Porsche", "Volvo", "BMW"];\n')),(0,r.kt)("p",null,"\u6570\u7ec4\u7d22\u5f15\u57fa\u4e8e\u96f6\uff0c\u8fd9\u610f\u5473\u7740\u7b2c\u4e00\u4e2a\u9879\u76ee\u662f ","[0]","\uff0c\u7b2c\u4e8c\u4e2a\u9879\u76ee\u662f ","[1]","\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002  "),(0,r.kt)("h3",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),(0,r.kt)("p",null,"JavaScript \u5bf9\u8c61\u7528\u82b1\u62ec\u53f7\u6765\u4e66\u5199\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5bf9\u8c61\u5c5e\u6027\u662f name:value \u5bf9\uff0c\u7531\u9017\u53f7\u5206\u9694\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var person = {firstName:"Bill", lastName:"Gates", age:62, eyeColor:"blue"};\n')),(0,r.kt)("h3",{id:"typeof-\u8fd0\u7b97"},"typeof \u8fd0\u7b97"),(0,r.kt)("p",null,"\u60a8\u53ef\u4f7f\u7528 JavaScript \u7684 typeof \u6765\u786e\u5b9a JavaScript \u53d8\u91cf\u7684\u7c7b\u578b\uff1a  "),(0,r.kt)("p",null,"typeof \u8fd0\u7b97\u7b26\u8fd4\u56de\u53d8\u91cf\u6216\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'typeof ""                  // \u8fd4\u56de "string"\ntypeof "Bill"              // \u8fd4\u56de "string"\ntypeof "Bill Gates"          // \u8fd4\u56de "string"\ntypeof 0                   // \u8fd4\u56de "number"\ntypeof 314                 // \u8fd4\u56de "number"\ntypeof 3.14                // \u8fd4\u56de "number"\ntypeof (7)                 // \u8fd4\u56de "number"\ntypeof (7 + 8)             // \u8fd4\u56de "number"\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'typeof \u8fd0\u7b97\u7b26\u5bf9\u6570\u7ec4\u8fd4\u56de "object"\uff0c\u56e0\u4e3a\u5728 JavaScript \u4e2d',(0,r.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u5c5e\u4e8e\u5bf9\u8c61"),"\u3002")),(0,r.kt)("h3",{id:"undefined"},"Undefined"),(0,r.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u6ca1\u6709\u503c\u7684\u53d8\u91cf\uff0c\u5176\u503c\u662f undefined\u3002typeof \u4e5f\u8fd4\u56de undefined\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var person;                  // \u503c\u662f undefined\uff0c\u7c7b\u578b\u662f undefined\u3002\n")),(0,r.kt)("p",null,"\u4efb\u4f55\u53d8\u91cf\u5747\u53ef\u901a\u8fc7\u8bbe\u7f6e\u503c\u4e3a undefined \u8fdb\u884c\u6e05\u7a7a\u3002\u5176\u7c7b\u578b\u4e5f\u5c06\u662f undefined\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"person = undefined;          // \u503c\u662f undefined\uff0c\u7c7b\u578b\u662f undefined\u3002\n")),(0,r.kt)("h3",{id:"\u7a7a\u503c"},"\u7a7a\u503c"),(0,r.kt)("p",null,"\u7a7a\u503c\u4e0e undefined \u4e0d\u662f\u4e00\u56de\u4e8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7a7a\u7684\u5b57\u7b26\u4e32\u53d8\u91cf\u65e2\u6709\u503c\u4e5f\u6709\u7c7b\u578b\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var car = "";                // \u503c\u662f ""\uff0c\u7c7b\u578b\u662f "string"\n')),(0,r.kt)("h3",{id:"null"},"NULL"),(0,r.kt)("p",null,'\u5728 JavaScript \u4e2d\uff0cnull \u662f "nothing"\u3002\u5b83\u88ab\u770b\u505a\u4e0d\u5b58\u5728\u7684\u4e8b\u7269\u3002',(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0d\u5e78\u7684\u662f\uff0c\u5728 JavaScript \u4e2d\uff0cnull \u7684\u6570\u636e\u7c7b\u578b\u662f\u5bf9\u8c61\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u60a8\u53ef\u4ee5\u628a null \u5728 JavaScript \u4e2d\u662f\u5bf9\u8c61\u7406\u89e3\u4e3a\u4e00\u4e2a bug\u3002\u5b83\u672c\u5e94\u662f null\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u503c\u4e3a null \u6e05\u7a7a\u5bf9\u8c61\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var person = null;           // \u503c\u662f null\uff0c\u4f46\u662f\u7c7b\u578b\u4ecd\u7136\u662f\u5bf9\u8c61\n")),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u503c\u4e3a undefined \u6e05\u7a7a\u5bf9\u8c61\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var person = undefined;           // \u503c\u662f undefined\uff0c\u7c7b\u578b\u662f undefined\u3002\n")),(0,r.kt)("h3",{id:"undefined-\u4e0e-null-\u7684\u533a\u522b"},"Undefined \u4e0e Null \u7684\u533a\u522b"),(0,r.kt)("p",null,"Undefined \u4e0e null \u7684\u503c\u76f8\u7b49\uff0c\u4f46\u7c7b\u578b\u4e0d\u76f8\u7b49\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"typeof undefined              // undefined\ntypeof null                   // object\nnull === undefined            // false\nnull == undefined             // true\n")),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("p",null,"JavaScript \u51fd\u6570\u662f\u88ab\u8bbe\u8ba1\u4e3a\u6267\u884c\u7279\u5b9a\u4efb\u52a1\u7684\u4ee3\u7801\u5757\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","JavaScript \u51fd\u6570\u4f1a\u5728\u67d0\u4ee3\u7801\u8c03\u7528\u5b83\u65f6\u88ab\u6267\u884c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u51fd\u6570\u5b58\u5728\u7684\u610f\u4e49\uff1a\u4e00\u6b21\u4e66\u5199\uff0c\u591a\u6b21\u4f7f\u7528\uff0c\u6613\u4e8e\u7ef4\u62a4\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b"),"\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function myFunction(p1, p2) {\n    return p1 * p2;              // \u8be5\u51fd\u6570\u8fd4\u56de p1 \u548c p2 \u7684\u4e58\u79ef\n}\n")),(0,r.kt)("h3",{id:"\u51fd\u6570\u8bed\u6cd5"},"\u51fd\u6570\u8bed\u6cd5"),(0,r.kt)("p",null,"JS \u51fd\u6570\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," \u5173\u952e\u8bcd\u8fdb\u884c\u5b9a\u4e49\uff0c\u5176\u540e\u662f",(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\u540d"),"\u548c\u62ec\u53f7",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u51fd\u6570\u540d\u53ef\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u548c\u7f8e\u5143\u7b26\u53f7\uff08\u89c4\u5219\u4e0e\u53d8\u91cf\u540d\u76f8\u540c\uff09\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5706\u62ec\u53f7\u53ef\u5305\u62ec\u7531\u9017\u53f7\u5206\u9694\u7684\u53c2\u6570\uff1a  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(\u53c2\u6570 1, \u53c2\u6570 2, ...)")),(0,r.kt)("p",null,"\u7531\u51fd\u6570\u6267\u884c\u7684\u4ee3\u7801\u88ab\u653e\u7f6e\u5728\u82b1\u62ec\u53f7\u4e2d\uff1a{}  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function name(\u53c2\u6570 1, \u53c2\u6570 2, \u53c2\u6570 3) {\n    \u8981\u6267\u884c\u7684\u4ee3\u7801\n}\n")),(0,r.kt)("h3",{id:"\u51fd\u6570\u8fd4\u56de"},"\u51fd\u6570\u8fd4\u56de"),(0,r.kt)("p",null,"\u5f53 JavaScript \u5230\u8fbe ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u8bed\u53e5\uff0c\u51fd\u6570\u5c06\u505c\u6b62\u6267\u884c\u3002  "),(0,r.kt)("p",null,"\u5982\u679c\u51fd\u6570\u88ab\u67d0\u6761\u8bed\u53e5\u8c03\u7528\uff0cJavaScript \u5c06\u5728\u8c03\u7528\u8bed\u53e5\u4e4b\u540e\u201c\u8fd4\u56de\u201d\u6267\u884c\u4ee3\u7801\u3002  "),(0,r.kt)("p",null,"\u51fd\u6570\u901a\u5e38\u4f1a\u8ba1\u7b97\u51fa",(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),"\u3002\u8fd9\u4e2a\u8fd4\u56de\u503c\u4f1a\u8fd4\u56de\u7ed9\u8c03\u7528\u8005\uff1a  "),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\u5c06\u8fd4\u56de\u4e24\u4e2a\u503c\u76f8\u4e58\u7684\u7ed3\u679c\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var x = myFunction(7, 8);        // \u8c03\u7528\u51fd\u6570\uff0c\u8fd4\u56de\u503c\u88ab\u8d4b\u503c\u7ed9 x\n\nfunction myFunction(a, b) {\n    return a * b;                // \u51fd\u6570\u8fd4\u56de a \u548c b \u7684\u4e58\u79ef\n}\n")),(0,r.kt)("p",null,"\u5b9e\u4f8b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function toCelsius(fahrenheit) {\n    return (5/9) * (fahrenheit-32);\n}\n\ndocument.getElementById("demo").innerHTML = toCelsius(77);\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5c06\u4f1a\u628a  ",(0,r.kt)("inlineCode",{parentName:"p"},"toCelsius")," \u51fd\u6570\u7684\u8fd0\u7b97\u7ed3\u679c\u4ea4\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," \u7684 HTML \u5143\u7d20\u6e32\u67d3\u3002"),(0,r.kt)("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",width:"600",height:"300",scrolling:"no",src:"https://codepen.io/Orange423/full/KKoRLPE"}),(0,r.kt)("h3",{id:"-\u8fd0\u7b97\u7b26\u8c03\u7528\u51fd\u6570"},"() \u8fd0\u7b97\u7b26\u8c03\u7528\u51fd\u6570"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"toCelsius")," \u5f15\u7528\u7684\u662f\u51fd\u6570\u5bf9\u8c61\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"toCelsius()")," \u5f15\u7528\u7684\u662f\u51fd\u6570\u7ed3\u679c\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function toCelsius(fahrenheit) {\n    return (5/9) * (fahrenheit-32);\n}\n\ndocument.getElementById("demo").innerHTML = toCelsius;\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u5c06\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"toCelsius")," \u7684\u5b9a\u4e49\u3002  "),(0,r.kt)("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",width:"600",height:"300",scrolling:"no",src:"https://codepen.io/Orange423/full/NWYMVPO"}))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[1818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u4e86\u89e3React.js",date:new Date("2022-07-19T00:00:00.000Z"),authors:"Chengzihan",tags:["React"]},c=void 0,o={unversionedId:"\u524d\u7aef/React/\u4e86\u89e3React",id:"\u524d\u7aef/React/\u4e86\u89e3React",title:"\u4e86\u89e3React.js",description:"React\u662f\u4ec0\u4e48",source:"@site/docs/\u524d\u7aef/06.React/02.\u4e86\u89e3React.md",sourceDirName:"\u524d\u7aef/06.React",slug:"/\u524d\u7aef/React/\u4e86\u89e3React",permalink:"/docs/\u524d\u7aef/React/\u4e86\u89e3React",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u524d\u7aef/06.React/02.\u4e86\u89e3React.md",tags:[{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u4e86\u89e3React.js",date:"2022-07-19T00:00:00.000Z",authors:"Chengzihan",tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"React.js\u5f15\u5165",permalink:"/docs/\u524d\u7aef/React/\u5f15\u5165"},next:{title:"css",permalink:"/docs/category/css"}},p={},l=[{value:"React\u662f\u4ec0\u4e48",id:"react\u662f\u4ec0\u4e48",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"react\u662f\u4ec0\u4e48"},"React\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"React \u662f\u4e00\u4e2a\u58f0\u660e\u5f0f\uff0c\u9ad8\u6548\u4e14\u7075\u6d3b\u7684\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93\u3002\u4f7f\u7528 React \u53ef\u4ee5\u5c06\u4e00\u4e9b\u7b80\u77ed\u3001\u72ec\u7acb\u7684\u4ee3\u7801\u7247\u6bb5\u7ec4\u5408\u6210\u590d\u6742\u7684 UI \u754c\u9762\uff0c\u8fd9\u4e9b\u4ee3\u7801\u7247\u6bb5\u88ab\u79f0\u4f5c\u201c\u7ec4\u4ef6\u201d\u3002  "),(0,a.kt)("p",null,"React \u4e2d\u62e5\u6709\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u7ec4\u4ef6\uff0c\u6211\u4eec\u5148\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Component")," \u7684\u5b50\u7c7b\u5f00\u59cb\u4ecb\u7ecd\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class ShoppingList extends React.Component {\n  render() {\n    return (\n    //\u4ee5\u4e0b\u662f\u4e00\u4e2areact\u5143\u7d20 \n      <div className="shopping-list">\n        <h1>Shopping List for {this.props.name}</h1>\n        <ul>\n          <li>Instagram</li>\n          <li>WhatsApp</li>\n          <li>Oculus</li>\n        </ul>\n      </div>\n    );\n  }\n}\n\n// \u7528\u6cd5\u793a\u4f8b: <ShoppingList name="Mark" />\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u4f7f\u7528\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u7684\u5f62\u5f0f\u6765\u544a\u8bc9React\u6211\u4eec\u5e0c\u671b\u5728\u5c4f\u5e55\u4e0a\u5448\u73b0\u7684\u5185\u5bb9\u3002\u6b63\u662f\u56e0\u4e3a\u51fd\u6570\u5f0f\u58f0\u660e\uff0c\u4f7f\u5f97\u5728\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6React\u80fd\u591f\u9ad8\u6548\u5730\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002  "),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53eb",(0,a.kt)("inlineCode",{parentName:"p"},"ShoppingList"),"\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u7c7b"),"\uff0c\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e9b\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u88ab\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"props"),"\uff0c\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},'name="Mark"'),"\u5c31\u662f\u5c06\u53c2\u6570\u4f20\u5165\u7ec4\u4ef6\u7684\u8fc7\u7a0b\u3002\u7136\u540e\u518d\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"render"),"\u6e32\u67d3\u5230\u9875\u9762\u3002  "),(0,a.kt)("admonition",{title:"JSX\u8bed\u6cd5",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u7531React\u6269\u5c55\u7684Js\u8bed\u6cd5\uff0cJSX \u53ef\u4ee5\u8ba9\u4f60\u66f4\u8f7b\u677e\u5730\u4e66\u5199\u8fd9\u4e9b\u51fd\u6570\u5f0f\u58f0\u660e\u7ed3\u6784\u3002")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u8fd9\u4e9b\u4ee3\u7801\u7b49\u540c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"return React.createElement('div', {className: 'shopping-list'},\n  React.createElement('h1', /* ... h1 children ... */),\n  React.createElement('ul', /* ... ul children ... */)\n);\n")),(0,a.kt)("p",null,"\u5728 JSX \u4e2d\u4f60\u53ef\u4ee5\u4efb\u610f\u4f7f\u7528 JavaScript \u8868\u8fbe\u5f0f\uff0c\u53ea\u9700\u8981\u7528\u4e00\u4e2a\u5927\u62ec\u53f7\u628a\u8868\u8fbe\u5f0f\u62ec\u8d77\u6765\u3002\u6bcf\u4e00\u4e2a React \u5143\u7d20\u4e8b\u5b9e\u4e0a\u90fd\u662f\u4e00\u4e2a JavaScript \u5bf9\u8c61\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u7a0b\u5e8f\u4e2d\u628a\u5b83\u5f53\u4fdd\u5b58\u5728\u53d8\u91cf\u4e2d\u6216\u8005\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u3002  "),(0,a.kt)("p",null,"\u524d\u6587\u4e2d\u7684 ShoppingList \u7ec4\u4ef6\u53ea\u4f1a\u6e32\u67d3\u4e00\u4e9b\u5185\u7f6e\u7684 DOM \u7ec4\u4ef6\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"<div />"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"<li />"),"\u7b49\u3002\u4f46\u662f\u4f60\u4e5f\u53ef\u4ee5\u7ec4\u5408\u548c\u6e32\u67d3\u81ea\u5b9a\u4e49\u7684 React \u7ec4\u4ef6\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ShoppingList />")," \u6765\u8868\u793a\u6574\u4e2a\u8d2d\u7269\u6e05\u5355\u7ec4\u4ef6\u3002\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u662f\u5c01\u88c5\u597d\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u5355\u72ec\u8fd0\u884c\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7\u7ec4\u5408\u7b80\u5355\u7684\u7ec4\u4ef6\u6765\u6784\u5efa\u590d\u6742\u7684 UI \u754c\u9762\u3002"))}u.isMDXComponent=!0}}]);
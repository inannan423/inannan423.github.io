"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[6311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u7269\u7406\u5c42",slug:"physical-layer",date:new Date("2022-06-12T14:34:23.000Z"),permalink:"/pages/116k6a/",categories:["\u6280\u672f\u6587\u6863","\u8ba1\u7b97\u673a\u7f51\u7edc"],tags:["\u8ba1\u7f51","\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6"],author:{name:"Chengzihan",link:"https://github.com/inannan423/inannan423.github.io"}},i=void 0,l={unversionedId:"Notes/ComputerNetwork/\u7269\u7406\u5c42",id:"Notes/ComputerNetwork/\u7269\u7406\u5c42",title:"\u7269\u7406\u5c42",description:"\x3c!-- \u6570\u6a21\u8f6c\u6362/\u6a21\u6570\u8f6c\u6362\uff1a\u6570\u5b57\u4fe1\u53f7\u4e0e\u6a21\u62df\u4fe1\u53f7\u7684\u4e92\u8f6c",source:"@site/docs/Notes/03.ComputerNetwork/11.\u7269\u7406\u5c42.md",sourceDirName:"Notes/03.ComputerNetwork",slug:"/Notes/ComputerNetwork/physical-layer",permalink:"/docs/Notes/ComputerNetwork/physical-layer",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/Notes/03.ComputerNetwork/11.\u7269\u7406\u5c42.md",tags:[{label:"\u8ba1\u7f51",permalink:"/docs/tags/\u8ba1\u7f51"},{label:"\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/tags/\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6"}],version:"current",sidebarPosition:11,frontMatter:{title:"\u7269\u7406\u5c42",slug:"physical-layer",date:"2022-06-12T14:34:23.000Z",permalink:"/pages/116k6a/",categories:["\u6280\u672f\u6587\u6863","\u8ba1\u7b97\u673a\u7f51\u7edc"],tags:["\u8ba1\u7f51","\u8ba1\u7b97\u673a\u57fa\u7840\u77e5\u8bc6"],author:{name:"Chengzihan",link:"https://github.com/inannan423/inannan423.github.io"}},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u94fe\u8def\u5c42-\u4ee5\u592a\u7f51",permalink:"/docs/Notes/ComputerNetwork/data-link-layer-ethernet"},next:{title:"\u4e60\u9898",permalink:"/docs/Notes/ComputerNetwork/exercise-cn"}},p={},c=[{value:"\u5e38\u89c1\u4f20\u8f93\u4ecb\u8d28\u7684\u6bd4\u8f83",id:"\u5e38\u89c1\u4f20\u8f93\u4ecb\u8d28\u7684\u6bd4\u8f83",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5e38\u89c1\u4f20\u8f93\u4ecb\u8d28\u7684\u6bd4\u8f83"},"\u5e38\u89c1\u4f20\u8f93\u4ecb\u8d28\u7684\u6bd4\u8f83"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3euiiku7nj311v0ns0wx.jpg",alt:"image.png"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h3euk7e5p6j30nw0dkwhb.jpg",alt:"image.png"}),"  "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u8109\u51b2\u7f16\u7801\u8c03\u5236\u5c31\u662f\u6570\u6a21\u8f6c\u6362\uff0c\u4e3b\u8981\u7ecf\u8fc73\u4e2a\u8fc7\u7a0b\uff1a\u62bd\u6837\u3001\u91cf\u5316\u548c\u7f16\u7801\u3002\u62bd\u6837\u8fc7\u7a0b\u5c06\u8fde\u7eed\u65f6\u95f4\u6a21\u62df\u4fe1\u53f7\u53d8\u4e3a\u79bb\u6563\u65f6\u95f4\u3001\u8fde\u7eed\u5e45\u5ea6\u7684\u62bd\u6837\u4fe1\u53f7\uff0c\u91cf\u5316\u8fc7\u7a0b\u5c06\u62bd\u6837\u4fe1\u53f7\u53d8\u4e3a\u79bb\u6563\u65f6\u95f4\u3001\u79bb\u6563\u5e45\u5ea6\u7684\u6570\u5b57\u4fe1\u53f7\uff0c\u7f16\u7801\u8fc7\u7a0b\u5c06\u91cf\u5316\u540e\u7684\u4fe1\u53f7\u7f16\u7801\u6210\u4e3a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u7801\u7ec4\u8f93\u51fa\u3002  "),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"\ud83d\ude29",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6ca1\u8bb2\u8fc7\uff0c\u5199\u4e0d\u4e0b\u6765\uff0c\u770b",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/Beatrice_lovely/article/details/123810984?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-123810984-blog-100766125.pc_relevant_multi_platform_whitelistv1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-123810984-blog-100766125.pc_relevant_multi_platform_whitelistv1&utm_relevant_index=2"},"\u8fd9\u7bc7\u6587\u7ae0\u5427"))))}u.isMDXComponent=!0}}]);
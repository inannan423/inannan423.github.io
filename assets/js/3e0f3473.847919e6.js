"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[9511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u4f7f\u7528\u514d\u8d39\u7684\u5fae\u535a\u56fe\u5e8a",date:new Date("2022-06-05T11:51:15.000Z"),permalink:"/pages/4a1aa8/",categories:["\u6280\u672f\u6587\u6863","Github Pages"],tags:["\u56fe\u5e8a"],author:{name:"Chengzihan",link:null},secret:!1},o=void 0,l={unversionedId:"FrontEnd/FETricks/freeweibo",id:"FrontEnd/FETricks/freeweibo",title:"\u4f7f\u7528\u514d\u8d39\u7684\u5fae\u535a\u56fe\u5e8a",description:"\u524d\u8a00",source:"@site/docs/FrontEnd/02.FETricks/07.freeweibo.md",sourceDirName:"FrontEnd/02.FETricks",slug:"/FrontEnd/FETricks/freeweibo",permalink:"/docs/FrontEnd/FETricks/freeweibo",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/02.FETricks/07.freeweibo.md",tags:[{label:"\u56fe\u5e8a",permalink:"/docs/tags/\u56fe\u5e8a"}],version:"current",sidebarPosition:7,frontMatter:{title:"\u4f7f\u7528\u514d\u8d39\u7684\u5fae\u535a\u56fe\u5e8a",date:"2022-06-05T11:51:15.000Z",permalink:"/pages/4a1aa8/",categories:["\u6280\u672f\u6587\u6863","Github Pages"],tags:["\u56fe\u5e8a"],author:{name:"Chengzihan",link:null},secret:!1},sidebar:"tutorialSidebar",previous:{title:"\u60c5\u4fa3\u5546\u57ce\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u90e8\u7f72\u8be6\u7ec6\u6559\u7a0b",permalink:"/docs/FrontEnd/FETricks/mini-inannan"},next:{title:"\u4f7f\u7528 Nebula \u521b\u5efa\u5b87\u5b99\u661f\u7a7a",permalink:"/docs/FrontEnd/FETricks/createUniverse"}},c={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88c5\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6",id:"\u5b89\u88c5\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6",level:2},{value:"\u6253\u5f00\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6",id:"\u6253\u5f00\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u6211\u4eec\u90fd\u77e5\u9053\uff0cGithub\u670d\u52a1\u5668\u653e\u5728\u5883\u5916\uff0c\u5f53\u4f60\u628a\u4e2a\u4eba\u535a\u5ba2\u6258\u7ba1\u5230GithubPages\u4e4b\u540e\uff0c\u4f60\u4f1a\u53d1\u73b0\uff0c\u8bbf\u95ee\u901f\u5ea6\u975e\u5e38\u7f13\u6162\uff0c\u4f46\u662f\u5982\u679c\u4f60\u7684\u7f51\u7ad9\u4e0a\u51e0\u4e4e\u6ca1\u6709\u672c\u5730\u56fe\u7247\uff08\u4f8b\u5982\u672c\u7ad9\uff09\uff0c\u90a3\u4e48\u4f60\u4f1a\u53d1\u73b0\uff0c\u901f\u5ea6\u5728\u53ef\u63a5\u53d7\u8303\u56f4\u4e4b\u5185\u4e86\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u672c\u6587\u8bb2\u6388\u4e00\u79cd\u4f7f\u7528\u5fae\u535a\u56fe\u5e8a\u52a0\u5feb\u6587\u4ef6\u8bbf\u95ee\u7684\u65b9\u6cd5\u3002  "),(0,a.kt)("h2",{id:"\u5b89\u88c5\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6"},"\u5b89\u88c5\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/%E5%BE%AE%E5%8D%9A%E5%9B%BE%E5%BA%8A/pinjkilghdfhnkibhcangnpmcpdpmehk"},"\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6"),"\u8fdb\u884c\u4e0b\u8f7d"),(0,a.kt)("h2",{id:"\u6253\u5f00\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6"},"\u6253\u5f00\u5fae\u535a\u56fe\u5e8a\u63d2\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x8b859utj316u0op45r.jpg",alt:"image.png"}),(0,a.kt)("br",{parentName:"p"}),"\n","\u5b83\u53ef\u80fd\u9700\u8981\u4f60\u767b\u5f55\u5fae\u535a\uff0c\u90a3\u4e48\u8bbf\u95ee\u5fae\u535a\u5c31\u597d\u4e86\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528\u975e\u5e38\u7684\u4fbf\u6377\uff0c\u53ea\u8981\u5c06\u9700\u8981\u7684\u56fe\u7247\u590d\u5236\u8fdb\u5165\u7a97\u53e3\u5373\u53ef\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u56fe\uff0c\u4f60\u53ea\u9700\u8981\u4e0a\u4f20\u4e00\u5f20\u56fe\u7247\uff0c\u7136\u540e\u5728\u7a97\u53e3\u4e2d\u7c98\u8d34\u5373\u53ef\u3002\u53f3\u8fb9\u4f1a\u751f\u6210\u5404\u79cd\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u7c98\u8d34\u5230\u4f60\u7684\u5de5\u7a0b\u4e2d\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x8crjlfij30r40isjx3.jpg",alt:"image.png"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<img src="https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x8crjlfij30r40isjx3.jpg"/>\n')),(0,a.kt)("p",null,"\u5728\u4f60\u7684\u535a\u5ba2\u4e2d\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\u63d2\u5165\u56fe\u7247\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"![image.png](https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x8crjlfij30r40isjx3.jpg)\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u4ee5\u6765\uff0c\u4f60\u7684\u4ee3\u7801\u4ed3\u5e93\u4e2d\u5c31\u6ca1\u6709\u4ec0\u4e48\u56fe\u7247\u8d44\u6e90\u4e86\uff0c\u800c\u5fae\u535a\u662f\u56fd\u5185\u7ad9\u70b9\uff0c\u901f\u5ea6\u80af\u5b9a\u5feb\u5f97\u591a\u3002  "),(0,a.kt)("p",null,"\ud83d\udc40"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[6807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u5728vue\u4e2d\u5b89\u88c5threejs\u5f15\u64ce",slug:"install-threejs-in-vue",date:new Date("2022-06-30T16:56:28.000Z"),permalink:"/pages/a23dcc/",categories:["\u524d\u7aef","threejs\u5168\u666f\u56fe\u7f51\u7ad9"],tags:["threejs","vue"],author:{name:"Chengzihan",link:"https://github.com/inannan423/inannan423.github.io"}},s=void 0,i={unversionedId:"FrontEnd/threejsPano/\u5728vue\u4e2d\u5b89\u88c5threejs\u5f15\u64ce",id:"FrontEnd/threejsPano/\u5728vue\u4e2d\u5b89\u88c5threejs\u5f15\u64ce",title:"\u5728vue\u4e2d\u5b89\u88c5threejs\u5f15\u64ce",description:"\u5728vue\u5de5\u7a0b\u4e2d\u5b89\u88c5threejs",source:"@site/docs/FrontEnd/04.threejsPano/02.\u5728vue\u4e2d\u5b89\u88c5threejs\u5f15\u64ce.md",sourceDirName:"FrontEnd/04.threejsPano",slug:"/FrontEnd/threejsPano/install-threejs-in-vue",permalink:"/docs/FrontEnd/threejsPano/install-threejs-in-vue",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/04.threejsPano/02.\u5728vue\u4e2d\u5b89\u88c5threejs\u5f15\u64ce.md",tags:[{label:"threejs",permalink:"/docs/tags/threejs"},{label:"vue",permalink:"/docs/tags/vue"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u5728vue\u4e2d\u5b89\u88c5threejs\u5f15\u64ce",slug:"install-threejs-in-vue",date:"2022-06-30T16:56:28.000Z",permalink:"/pages/a23dcc/",categories:["\u524d\u7aef","threejs\u5168\u666f\u56fe\u7f51\u7ad9"],tags:["threejs","vue"],author:{name:"Chengzihan",link:"https://github.com/inannan423/inannan423.github.io"}},sidebar:"tutorialSidebar",previous:{title:"vue\u524d\u7aef",permalink:"/docs/FrontEnd/threejsPano/vue-front-pano"},next:{title:"\u521b\u5efa\u5168\u666f\u56fe\u89e3\u6790\u5f15\u64ce",permalink:"/docs/FrontEnd/threejsPano/create-pano-engine"}},l={},p=[{value:"\u5728vue\u5de5\u7a0b\u4e2d\u5b89\u88c5threejs",id:"\u5728vue\u5de5\u7a0b\u4e2d\u5b89\u88c5threejs",level:2},{value:"\u5728engine.vue\u4e2d\u58f0\u660ethreejs",id:"\u5728enginevue\u4e2d\u58f0\u660ethreejs",level:2},{value:"\u5b89\u88c5\u64cd\u4f5c\u63a7\u5236\u63d2\u4ef6OrbitControls.js",id:"\u5b89\u88c5\u64cd\u4f5c\u63a7\u5236\u63d2\u4ef6orbitcontrolsjs",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5728vue\u5de5\u7a0b\u4e2d\u5b89\u88c5threejs"},"\u5728vue\u5de5\u7a0b\u4e2d\u5b89\u88c5threejs"),(0,a.kt)("p",null,"\u4f7f\u7528npm\u6307\u4ee4\u5b89\u88c5\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-npm"},"npm install three\n")),(0,a.kt)("h2",{id:"\u5728enginevue\u4e2d\u58f0\u660ethreejs"},"\u5728engine.vue\u4e2d\u58f0\u660ethreejs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script>\nimport * as THREE from "three";\n...\n<\/script>\n')),(0,a.kt)("h2",{id:"\u5b89\u88c5\u64cd\u4f5c\u63a7\u5236\u63d2\u4ef6orbitcontrolsjs"},"\u5b89\u88c5\u64cd\u4f5c\u63a7\u5236\u63d2\u4ef6OrbitControls.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-npm"},"npm install three-orbit-controls\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728vue\u7ec4\u4ef6\u4e2d\u58f0\u660e\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<script>\nimport * as THREE from \"three\";\nconst OrbitControls = require('three-orbit-controls')(THREE);\n...\n<\/script>\n")),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u5b89\u88c5\u6a21\u578b\u6750\u8d28\u52a0\u8f7d\u63d2\u4ef6\u3001\u6027\u80fd\u68c0\u6d4b\u63d2\u4ef6\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-npm"},"npm i --save three-obj-mtl-loader\nnpm i three-fbx-loader\nnpm i three-stats\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c06\u5176\u914d\u7f6e\u5230vue\u9875\u9762\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<script>\n  import axios from 'axios';\n  import * as THREE from \"three\";\n  import * as TrackballControls from 'three-trackballcontrols'\n  import * as ThreeStats from 'three-stats'\n  import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader';\n  const OrbitControls = require('three-orbit-controls')(THREE);\n  \xb7\xb7\xb7\n<\/script>\n")),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc\uff0cthreejs\u5df2\u7ecf\u5b89\u88c5\u5b8c\u6210\u4e86\u3002  "),(0,a.kt)("admonition",{title:"\u53c2\u8003\u6587\u7ae0",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u3010vue+Three.js\u5feb\u901f\u5b9e\u73b0\u5168\u666f\u56fe\u3011\uff08",(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/b31cd297d333"},"https://www.jianshu.com/p/b31cd297d333"),"\uff09")))}u.isMDXComponent=!0}}]);
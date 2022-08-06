"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[4357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),v=n,k=u["".concat(o,".").concat(v)]||u[v]||m[v]||p;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<p;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const p={title:"\u4ec0\u4e48\u662f JavaScript",date:new Date("2022-08-01T00:00:00.000Z"),authors:"Chengzihan",tags:["web","JavaScript"]},i=void 0,l={unversionedId:"\u524d\u7aef/web\u57fa\u7840/JavaScript/whatisjs",id:"\u524d\u7aef/web\u57fa\u7840/JavaScript/whatisjs",title:"\u4ec0\u4e48\u662f JavaScript",description:"JavaScript \u5b9a\u4e49",source:"@site/docs/\u524d\u7aef/08.web\u57fa\u7840/03.JavaScript/01.whatisjs.md",sourceDirName:"\u524d\u7aef/08.web\u57fa\u7840/03.JavaScript",slug:"/\u524d\u7aef/web\u57fa\u7840/JavaScript/whatisjs",permalink:"/docs/\u524d\u7aef/web\u57fa\u7840/JavaScript/whatisjs",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u524d\u7aef/08.web\u57fa\u7840/03.JavaScript/01.whatisjs.md",tags:[{label:"web",permalink:"/docs/tags/web"},{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ec0\u4e48\u662f JavaScript",date:"2022-08-01T00:00:00.000Z",authors:"Chengzihan",tags:["web","JavaScript"]},sidebar:"tutorialSidebar",previous:{title:"JSchallenger",permalink:"/docs/\u524d\u7aef/web\u57fa\u7840/JavaScript/JSChallenger"},next:{title:"JS \u8d77\u6b65",permalink:"/docs/\u524d\u7aef/web\u57fa\u7840/JavaScript/jsstart"}},o={},c=[{value:"JavaScript \u5b9a\u4e49",id:"javascript-\u5b9a\u4e49",level:2},{value:"JavaScript \u53ef\u4ee5\u505a\u4e9b\u4ec0\u4e48",id:"javascript-\u53ef\u4ee5\u505a\u4e9b\u4ec0\u4e48",level:2},{value:"\u6d4f\u89c8\u5668 API",id:"\u6d4f\u89c8\u5668-api",level:3},{value:"\u7b2c\u4e09\u65b9 API",id:"\u7b2c\u4e09\u65b9-api",level:3},{value:"JavaScript \u5728\u9875\u9762\u4e0a\u505a\u4e86\u4ec0\u4e48",id:"javascript-\u5728\u9875\u9762\u4e0a\u505a\u4e86\u4ec0\u4e48",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"javascript-\u5b9a\u4e49"},"JavaScript \u5b9a\u4e49"),(0,n.kt)("p",null,"JavaScript \u662f\u4e00\u79cd\u811a\u672c\uff0c\u4e00\u95e8\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u53ef\u4ee5\u5728\u7f51\u9875\u4e0a",(0,n.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u590d\u6742\u7684\u529f\u80fd"),"\uff0c\u7f51\u9875\u5c55\u73b0\u7ed9\u4f60\u7684\u4e0d\u518d\u662f\u7b80\u5355\u7684\u9759\u6001\u4fe1\u606f\uff0c\u800c\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5b9e\u65f6"),"\u7684\u5185\u5bb9\u66f4\u65b0\uff0c\u4ea4\u4e92\u5f0f\u7684\u5730\u56fe\uff0c2D/3D \u52a8\u753b\uff0c\u6eda\u52a8\u64ad\u653e\u7684\u89c6\u9891\u7b49\u7b49\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220801153120.png",alt:"1"})),(0,n.kt)("h2",{id:"javascript-\u53ef\u4ee5\u505a\u4e9b\u4ec0\u4e48"},"JavaScript \u53ef\u4ee5\u505a\u4e9b\u4ec0\u4e48"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef"),"\uff08client-side\uff09JavaScript \u8bed\u8a00\u7684\u6838\u5fc3\u5305\u542b\u4e00\u4e9b\u666e\u904d\u7684\u7f16\u7a0b\u7279\u6027\uff0c\u4ee5\u8ba9\u4f60\u53ef\u4ee5\u505a\u5230\u5982\u4e0b\u7684\u4e8b\u60c5\uff1a  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5728\u53d8\u91cf\u4e2d\u50a8\u5b58\u6709\u7528\u7684\u503c"),"\u3002  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u64cd\u4f5c\u4e00\u6bb5\u6587\u672c"),"\uff08\u5728\u7f16\u7a0b\u4e2d\u79f0\u4e3a\u201c\u5b57\u7b26\u4e32\u201d\uff08string\uff09\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8fd0\u884c\u4ee3\u7801\u4ee5\u54cd\u5e94\u7f51\u9875\u4e2d\u53d1\u751f\u7684\u7279\u5b9a\u4e8b\u4ef6"),"\u3002\u6bd4\u5982\u70b9\u51fb\u4e8b\u4ef6\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u53ca\u66f4\u591a\uff01")),(0,n.kt)("p",null,"JavaScript \u8bed\u8a00\u6838\u5fc3\u4e4b\u4e0a\u6240\u6784\u5efa\u7684\u529f\u80fd\u66f4\u4ee4\u4eba\u5174\u594b\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3"),"\uff08Application Programming Interfaces\uff08API\uff09\uff09\u5c06\u4e3a\u4f60\u7684\u4ee3\u7801\u63d0\u4f9b\u989d\u5916\u7684\u8d85\u80fd\u529b\u3002  "),(0,n.kt)("p",null,"API \u662f",(0,n.kt)("strong",{parentName:"p"},"\u5df2\u7ecf\u5efa\u7acb\u597d"),"\u7684\u4e00\u5957\u4ee3\u7801\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u5b9e\u73b0\u539f\u672c\u5f88\u96be\u751a\u81f3\u65e0\u6cd5\u5b9e\u73b0\u7684\u7a0b\u5e8f\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5c31\u50cf\u73b0\u6210\u7684\u5bb6\u5177\u5957\u4ef6\u4e4b\u4e8e\u5bb6\u5c45\u5efa\u8bbe\uff0c\u7528\u4e00\u4e9b\u5df2\u7ecf\u5207\u597d\u7684\u6728\u677f\u7ec4\u88c5\u4e00\u4e2a\u4e66\u67dc\uff0c\u663e\u7136\u6bd4\u81ea\u5df1\u8bbe\u8ba1\uff0c\u5bfb\u627e\u5408\u9002\u7684\u6728\u6750\uff0c\u88c1\u5207\u81f3\u5408\u9002\u7684\u5c3a\u5bf8\u548c\u5f62\u72b6\uff0c\u627e\u5230\u6b63\u786e\u5c3a\u5bf8\u7684\u87ba\u9489\uff0c\u518d\u7ec4\u88c5\u6210\u4e66\u67dc\u8981\u7b80\u5355\u5f97\u591a"),"\u3002  "),(0,n.kt)("p",null,"API \u901a\u5e38\u5206\u4e3a\u4e24\u7c7b\u3002  "),(0,n.kt)("h3",{id:"\u6d4f\u89c8\u5668-api"},"\u6d4f\u89c8\u5668 API"),(0,n.kt)("p",null,"\u6d4f\u89c8\u5668 API \u5185\u5efa\u4e8e web \u6d4f\u89c8\u5668\u4e2d\uff0c\u5b83\u4eec\u53ef\u4ee5\u5c06\u6570\u636e\u4ece\u5468\u8fb9\u8ba1\u7b97\u673a\u73af\u5883\u4e2d\u7b5b\u9009\u51fa\u6765\uff0c\u8fd8\u53ef\u4ee5\u505a\u5b9e\u7528\u7684\u590d\u6742\u5de5\u4f5c\u3002\u4f8b\u5982\uff1a  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model"},(0,n.kt)("strong",{parentName:"a"},"\u6587\u6863\u5bf9\u8c61\u6a21\u578b")," API \ud83d\uddb1"),"\uff08",(0,n.kt)("strong",{parentName:"p"},"DOM"),"\uff08Document Object Model\uff09API\uff09 \u80fd\u901a\u8fc7\u521b\u5efa\u3001\u79fb\u9664\u548c\u4fee\u6539 HTML\uff0c\u4e3a\u9875\u9762\u52a8\u6001\u5e94\u7528\u65b0\u6837\u5f0f\u7b49\u624b\u6bb5\u6765\u64cd\u4f5c HTML \u548c CSS\u3002\u6bd4\u5982\u5f53\u67d0\u4e2a\u9875\u9762\u51fa\u73b0\u4e86\u4e00\u4e2a\u5f39\u7a97\uff0c\u6216\u8005\u663e\u793a\u4e86\u4e00\u4e9b\u65b0\u5185\u5bb9\uff0c\u8fd9\u5c31\u662f DOM \u5728\u8fd0\u884c\u3002  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation"},"\u5730\u7406\u4f4d\u7f6e API\ud83d\uddb1"),"\uff08Geolocation API\uff09 \u83b7\u53d6\u5730\u7406\u4fe1\u606f\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48 ",(0,n.kt)("strong",{parentName:"p"},"\u8c37\u6b4c\u5730\u56fe")," \u53ef\u4ee5\u627e\u5230\u4f60\u7684\u4f4d\u7f6e\uff0c\u800c\u4e14\u6807\u793a\u5728\u5730\u56fe\u4e0a\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API"},"\u753b\u5e03\uff08Canvas\uff09 \u548c WebGL API")," \u53ef\u4ee5\u521b\u5efa\u751f\u52a8\u7684 2D \u548c 3D \u56fe\u50cf\u3002\u4eba\u4eec\u6b63\u8fd0\u7528\u8fd9\u4e9b web \u6280\u672f\u5236\u4f5c\u4ee4\u4eba\u60ca\u53f9\u7684\u4f5c\u54c1\u3002\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://www.chromeexperiments.com/webgl"},"Chrome Experiments")," \u4ee5\u53ca ",(0,n.kt)("a",{parentName:"p",href:"https://webglsamples.org/"},"webglsamples"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8bf8\u5982 HTMLMediaElement \u548c WebRTC \u7b49 \u5f71\u97f3\u7c7b API \u8ba9\u4f60\u53ef\u4ee5\u5229\u7528\u591a\u5a92\u4f53\u505a\u4e00\u4e9b\u975e\u5e38\u6709\u8da3\u7684\u4e8b\uff0c\u6bd4\u5982\u5728\u7f51\u9875\u4e2d\u76f4\u63a5\u64ad\u653e\u97f3\u4e50\u548c\u5f71\u7247\uff0c\u6216\u7528\u81ea\u5df1\u7684\u7f51\u7edc\u6444\u50cf\u5934\u83b7\u53d6\u5f55\u50cf\uff0c\u7136\u540e\u5728\u5176\u4ed6\u4eba\u7684\u7535\u8111\u4e0a\u5c55\u793a\uff08\u8bd5\u7528\u7b80\u6613\u7248 \u622a\u56fe demo \u4ee5\u7406\u89e3\u8fd9\u4e2a\u6982\u5ff5\uff09\u3002"))),(0,n.kt)("h3",{id:"\u7b2c\u4e09\u65b9-api"},"\u7b2c\u4e09\u65b9 API"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u65b9 API")," \u5e76\u6ca1\u6709\u9ed8\u8ba4\u5d4c\u5165\u6d4f\u89c8\u5668\u4e2d\uff0c\u4e00\u822c\u8981\u4ece\u7f51\u4e0a\u53d6\u5f97\u5b83\u4eec\u7684\u4ee3\u7801\u548c\u4fe1\u606f\u3002\u6bd4\u5982\uff1a  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.twitter.com/overview/documentation"},"Twitter API"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"https://open.weibo.com/"},"\u65b0\u6d6a\u5fae\u535a API")," \u53ef\u4ee5\u5728\u7f51\u7ad9\u4e0a\u5c55\u793a\u6700\u65b0\u63a8\u6587\u4e4b\u7c7b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/maps/"},"\u8c37\u6b4c\u5730\u56fe API"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"https://lbs.amap.com/"},"\u9ad8\u5fb7\u5730\u56fe API")," \u53ef\u4ee5\u5728\u7f51\u7ad9\u5d4c\u5165\u5b9a\u5236\u7684\u5730\u56fe\u7b49\u7b49\u3002")),(0,n.kt)("h2",{id:"javascript-\u5728\u9875\u9762\u4e0a\u505a\u4e86\u4ec0\u4e48"},"JavaScript \u5728\u9875\u9762\u4e0a\u505a\u4e86\u4ec0\u4e48"),(0,n.kt)("p",null,"\u6d4f\u89c8\u5668\u5728\u8bfb\u53d6\u4e00\u4e2a\u7f51\u9875\u65f6\uff0c\u4ee3\u7801\uff08HTML, CSS \u548c JavaScript\uff09\u5c06\u5728\u4e00\u4e2a\u8fd0\u884c\u73af\u5883\uff08\u6d4f\u89c8\u5668\u6807\u7b7e\u9875\uff09\u4e2d\u5f97\u5230\u6267\u884c\u3002\u5c31\u50cf\u4e00\u95f4\u5de5\u5382\uff0c\u5c06\u539f\u6750\u6599\uff08\u4ee3\u7801\uff09\u52a0\u5de5\u4e3a\u4e00\u4ef6\u4ea7\u54c1\uff08\u7f51\u9875\uff09\u3002  "),(0,n.kt)("p",null,"\u5728 HTML \u548c CSS \u96c6\u5408\u7ec4\u88c5\u6210\u4e00\u4e2a\u7f51\u9875\u540e\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u7684 JavaScript \u5f15\u64ce\u5c06\u6267\u884c JavaScript \u4ee3\u7801"),"\u3002\u8fd9\u4fdd\u8bc1\u4e86\u5f53 JavaScript \u5f00\u59cb\u8fd0\u884c\u4e4b\u524d\uff0c\u7f51\u9875\u7684\u7ed3\u6784\u548c\u6837\u5f0f\u5df2\u7ecf\u5c31\u4f4d\u3002  "),(0,n.kt)("p",null,"\u8fd9\u6837\u5f88\u597d\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u56e0\u4e3a JavaScript \u6700\u666e\u904d\u7684\u7528\u5904\u662f\u901a\u8fc7 DOM API\uff08\u89c1\u4e0a\u6587\uff09\u52a8\u6001\u4fee\u6539 HTML \u548c CSS \u6765\u66f4\u65b0\u7528\u6237\u754c\u9762\uff08user interface\uff09"),"\u3002\u5982\u679c JavaScript \u5728 HTML \u548c CSS \u5c31\u4f4d\u4e4b\u524d\u52a0\u8f7d\u8fd0\u884c\uff0c",(0,n.kt)("em",{parentName:"p"},"\u5c31\u4f1a\u5f15\u53d1\u9519\u8bef"),"\uff08\u8fd9\u5728",(0,n.kt)("a",{parentName:"p",href:"/docs/%E5%89%8D%E7%AB%AF/threejs%E5%85%A8%E6%99%AF%E5%9B%BE%E7%BD%91%E7%AB%99/%E5%BC%82%E6%AD%A5%E6%B8%B2%E6%9F%93%E5%85%A8%E6%99%AF%E5%9B%BE"},"\u5f02\u6b65\u6e32\u67d3\u5168\u666f\u56fe"),"\u4e2d\u6709\u6240\u63d0\u53ca\u3002\uff09"),(0,n.kt)("div",{class:"time"},"\u6700\u540e\u66f4\u65b0\u4e8e\uff1a2022-8-01"))}m.isMDXComponent=!0}}]);
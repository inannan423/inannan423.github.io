"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[2907],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={title:"React.js\u5f15\u5165",slug:"react-introduction",date:new Date("2022-07-16T00:00:00.000Z"),authors:"Chengzihan",tags:["React"]},i=void 0,c={unversionedId:"FrontEnd/React/React-in/\u5f15\u5165",id:"FrontEnd/React/React-in/\u5f15\u5165",title:"React.js\u5f15\u5165",description:"React\u4ecb\u7ecd",source:"@site/docs/FrontEnd/06.React/React-in/01.\u5f15\u5165.md",sourceDirName:"FrontEnd/06.React/React-in",slug:"/FrontEnd/React/React-in/react-introduction",permalink:"/docs/FrontEnd/React/React-in/react-introduction",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/06.React/React-in/01.\u5f15\u5165.md",tags:[{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:1,frontMatter:{title:"React.js\u5f15\u5165",slug:"react-introduction",date:"2022-07-16T00:00:00.000Z",authors:"Chengzihan",tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"React.js\u57fa\u672c\u7528\u6cd5",permalink:"/docs/FrontEnd/React/React-in/ReactBasicuse"},next:{title:"React.js\u6982\u89c8",permalink:"/docs/FrontEnd/React/React-in/React.jsHello"}},l={},s=[{value:"React\u4ecb\u7ecd",id:"react\u4ecb\u7ecd",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"Create React App",id:"create-react-app",level:3}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"react\u4ecb\u7ecd"},"React\u4ecb\u7ecd"),(0,r.kt)("p",null,"React \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVASCRIPT")," \u5e93\u3002React \u4e3b\u8981\u7528\u4e8e\u6784\u5efa UI\uff0c\u5f88\u591a\u4eba\u8ba4\u4e3a React \u662f MVC \u4e2d\u7684 V\uff08\u89c6\u56fe\uff09\u3002React \u8d77\u6e90\u4e8e Facebook \u7684\u5185\u90e8\u9879\u76ee\uff0c\u7528\u6765\u67b6\u8bbe Instagram \u7684\u7f51\u7ad9\uff0c\u5e76\u4e8e 2013 \u5e74 5 \u6708\u5f00\u6e90\u3002React \u62e5\u6709\u8f83\u9ad8\u7684\u6027\u80fd\uff0c\u4ee3\u7801\u903b\u8f91\u975e\u5e38\u7b80\u5355\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u5df2\u5f00\u59cb\u5173\u6ce8\u548c\u4f7f\u7528\u5b83\u3002React\u5982\u4eca\u5df2\u6210\u4e3a\u548cvue\u3001Angular\u5e76\u5217\u5b58\u5728\u7684\u4e09\u5927\u6846\u67b6\u4e4b\u4e00\u3002  "),(0,r.kt)("p",null,"\u4e0b\u9762\u5c06\u8ddf\u968fReact\u5b98\u65b9\u7684\u6559\u7a0b\uff0c\u5b66\u4e60React\uff0c\u4e0b\u9762\u7684\u6d41\u7a0b\u5927\u90e8\u5206\u642c\u8fd0\u81ea",(0,r.kt)("a",{parentName:"p",href:"https://react.docschina.org/tutorial/tutorial.html#what-are-we-building"},"\u5b98\u65b9\u6559\u7a0b"),"\uff0c\u5f88\u591a\u4e5f\u662f\u81ea\u5df1\u7406\u89e3\u540e\u7f16\u5199\u7684\u3002  "),(0,r.kt)("admonition",{title:"\u8981\u505a\u51fa\u4ec0\u4e48\u4e1c\u897f\uff1f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4e00\u8d77\u7528 React \u5f00\u53d1\u4e00\u4e2a\u4e95\u5b57\u68cb\uff08tic-tac-toe\uff09\u3002\u4f60\u53ef\u4ee5\u63d0\u524d\u9884\u89c8\u6211\u4eec\u8981\u5199\u7684\u6e38\u620f\u7684",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/gaearon/pen/gWWZgR?editors=0010"},"\u6700\u7ec8\u6548\u679c"),"\u3002\u5982\u679c\u4f60\u770b\u4e0d\u61c2\u5176\u4e2d\u7684\u4ee3\u7801\uff0c\u6216\u4e0d\u719f\u6089\u8fd9\u4e9b\u8bed\u6cd5\uff0c\u522b\u62c5\u5fc3\uff01\u63a5\u4e0b\u6765\u7684\u6559\u7a0b\u4f1a\u4e00\u6b65\u4e00\u6b65\u5e2e\u52a9\u4f60\u7406\u89e3 React \u53ca\u5176\u8bed\u6cd5\u3002\u5728\u7ee7\u7eed\u540e\u9762\u7684\u6559\u7a0b\u4e4b\u524d\uff0c\u63a8\u8350\u4f60\u5148\u73a9\u4e00\u4e0b\u8fd9\u4e2a\u4e95\u5b57\u68cb\u3002\u5728\u6e38\u620f\u91cc\uff0c\u4f60\u4f1a\u770b\u5230\u6e38\u620f\u9762\u677f\u7684\u53f3\u8fb9\u6709\u4e00\u4e2a\u6807\u6709\u5e8f\u53f7\u7684\u5217\u8868\u3002\u8fd9\u4e2a\u5217\u8868\u8bb0\u5f55\u4e86\u6e38\u620f\u4e2d\u7684\u6bcf\u4e2a\u6b65\u9aa4\uff0c\u5e76\u4e14\u4f1a\u968f\u7740\u6e38\u620f\u7684\u8fdb\u884c\u4e0d\u65ad\u66f4\u65b0\u3002\u7b49\u4f60\u719f\u6089\u6e38\u620f\u529f\u80fd\uff0c\u4fbf\u53ef\u5173\u6389\u5b83\uff01\u6211\u4eec\u4f1a\u5728\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u677f\u4e0a\u5f00\u59cb\u5199\u8d77\u3002\u4e0b\u4e00\u6b65\u5c31\u662f\u5e2e\u505a\u597d\u51c6\u5907\u5de5\u4f5c\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u6e38\u620f\u5f00\u53d1\u4e86\u3002  ")),(0,r.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u524d\u7f6e\u6761\u4ef6\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4f60\u5b89\u88c5\u4e86\u8f83\u65b0\u7248\u672c\u7684 Node.js\u3002")),(0,r.kt)("h3",{id:"create-react-app"},"Create React App"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-app\n")),(0,r.kt)("p",null,"\u5220\u9664\u6389\u65b0\u9879\u76ee\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002  "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u5220\u9664\u6574\u4e2a src \u6587\u4ef6\u5939\uff0c\u5220\u9664\u91cc\u9762\u7684\u6e90\u6587\u4ef6\u3002\u6211\u4eec\u4f1a\u5728\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u4e2d\u4f7f\u7528\u793a\u4f8b\u4ee3\u7801\u66ff\u6362\u9ed8\u8ba4\u6e90\u6587\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\n# \u5982\u679c\u4f60\u4f7f\u7528 Windows:\ndel *\n# \u7136\u540e\u56de\u5230\u9879\u76ee\u6587\u4ef6\u5939\ncd ..\n")),(0,r.kt)("p",null,"\u5728 src/ \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a index.css \u7684\u6587\u4ef6\uff0c\u5e76\u62f7\u8d1d\u8fd9\u4e9b CSS \u4ee3\u7801\u3002  "),(0,r.kt)("details",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'body {\n  font: 14px "Century Gothic", Futura, sans-serif;\n  margin: 20px;\n}\n\nol, ul {\n  padding-left: 30px;\n}\n\n.board-row:after {\n  clear: both;\n  content: "";\n  display: table;\n}\n\n.status {\n  margin-bottom: 10px;\n}\n\n.square {\n  background: #fff;\n  border: 1px solid #999;\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 34px;\n}\n\n.square:focus {\n  outline: none;\n}\n\n.kbd-navigation .square:focus {\n  background: #ddd;\n}\n\n.game {\n  display: flex;\n  flex-direction: row;\n}\n\n.game-info {\n  margin-left: 20px;\n}\n\n'))),(0,r.kt)("p",null,"\u5728 src/ \u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a index.js \u7684\u6587\u4ef6\uff0c\u5e76\u62f7\u8d1d\u8fd9\u4e9b JS \u4ee3\u7801\u3002  "),(0,r.kt)("details",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class Square extends React.Component {\n  render() {\n    return (\n      <button className="square">\n        {/* TODO */}\n      </button>\n    );\n  }\n}\n\nclass Board extends React.Component {\n  renderSquare(i) {\n    return <Square />;\n  }\n\n  render() {\n    const status = \'Next player: X\';\n\n    return (\n      <div>\n        <div className="status">{status}</div>\n        <div className="board-row">\n          {this.renderSquare(0)}\n          {this.renderSquare(1)}\n          {this.renderSquare(2)}\n        </div>\n        <div className="board-row">\n          {this.renderSquare(3)}\n          {this.renderSquare(4)}\n          {this.renderSquare(5)}\n        </div>\n        <div className="board-row">\n          {this.renderSquare(6)}\n          {this.renderSquare(7)}\n          {this.renderSquare(8)}\n        </div>\n      </div>\n    );\n  }\n}\n\nclass Game extends React.Component {\n  render() {\n    return (\n      <div className="game">\n        <div className="game-board">\n          <Board />\n        </div>\n        <div className="game-info">\n          <div>{/* status */}</div>\n          <ol>{/* TODO */}</ol>\n        </div>\n      </div>\n    );\n  }\n}\n\n// ========================================\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render(<Game />);\n\n'))),(0,r.kt)("p",null,"\u62f7\u8d1d\u4ee5\u4e0b\u4e09\u884c\u4ee3\u7801\u5230 src/ \u6587\u4ef6\u5939\u4e0b\u7684 index.js \u6587\u4ef6\u7684\u9876\u90e8\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5728\u9879\u76ee\u6587\u4ef6\u5939\u4e0b\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," \u547d\u4ee4\uff0c\u7136\u540e\u5728\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"\u3002\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u770b\u89c1\u4e00\u4e2a\u7a7a\u7684\u4e95\u5b57\u68cb\u7684\u68cb\u76d8\u4e86\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220719164912.png",alt:"2"})))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[5750],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"React.js\u6982\u89c8",slug:"React.jsHello",date:new Date("2022-07-19T00:00:00.000Z"),authors:"Chengzihan",tags:["React"]},l=void 0,p={unversionedId:"FrontEnd/React/React-in/\u4e86\u89e3React",id:"FrontEnd/React/React-in/\u4e86\u89e3React",title:"React.js\u6982\u89c8",description:"React\u662f\u4ec0\u4e48",source:"@site/docs/FrontEnd/06.React/React-in/02.\u4e86\u89e3React.md",sourceDirName:"FrontEnd/06.React/React-in",slug:"/FrontEnd/React/React-in/React.jsHello",permalink:"/docs/FrontEnd/React/React-in/React.jsHello",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/06.React/React-in/02.\u4e86\u89e3React.md",tags:[{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:2,frontMatter:{title:"React.js\u6982\u89c8",slug:"React.jsHello",date:"2022-07-19T00:00:00.000Z",authors:"Chengzihan",tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"React.js\u5f15\u5165",permalink:"/docs/FrontEnd/React/React-in/react-introduction"},next:{title:"\u6e38\u620f\u5b8c\u5584",permalink:"/docs/FrontEnd/React/React-in/make-game-better"}},o={},s=[{value:"React\u662f\u4ec0\u4e48",id:"react\u662f\u4ec0\u4e48",level:2},{value:"\u9605\u8bfb\u521d\u59cb\u4ee3\u7801",id:"\u9605\u8bfb\u521d\u59cb\u4ee3\u7801",level:2},{value:"Square-\u68cb\u76d8\u683c",id:"square-\u68cb\u76d8\u683c",level:3},{value:"Board-\u68cb\u76d8",id:"board-\u68cb\u76d8",level:3},{value:"Game-\u6e38\u620f\u4e3b\u4f53",id:"game-\u6e38\u620f\u4e3b\u4f53",level:3},{value:"\u901a\u8fc7 Props \u4f20\u9012\u6570\u636e",id:"\u901a\u8fc7-props-\u4f20\u9012\u6570\u636e",level:2},{value:"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4ea4\u4e92\u529f\u80fd",id:"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4ea4\u4e92\u529f\u80fd",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"react\u662f\u4ec0\u4e48"},"React\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"React \u662f\u4e00\u4e2a\u58f0\u660e\u5f0f\uff0c\u9ad8\u6548\u4e14\u7075\u6d3b\u7684\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93\u3002\u4f7f\u7528 React \u53ef\u4ee5\u5c06\u4e00\u4e9b\u7b80\u77ed\u3001\u72ec\u7acb\u7684\u4ee3\u7801\u7247\u6bb5\u7ec4\u5408\u6210\u590d\u6742\u7684 UI \u754c\u9762\uff0c\u8fd9\u4e9b\u4ee3\u7801\u7247\u6bb5\u88ab\u79f0\u4f5c\u201c\u7ec4\u4ef6\u201d\u3002  "),(0,r.kt)("p",null,"React \u4e2d\u62e5\u6709\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u7ec4\u4ef6\uff0c\u6211\u4eec\u5148\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"React.Component")," \u7684\u5b50\u7c7b\u5f00\u59cb\u4ecb\u7ecd\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class ShoppingList extends React.Component {\n  render() {\n    return (\n    //\u4ee5\u4e0b\u662f\u4e00\u4e2areact\u5143\u7d20 \n      <div className="shopping-list">\n        <h1>Shopping List for {this.props.name}</h1>\n        <ul>\n          <li>Instagram</li>\n          <li>WhatsApp</li>\n          <li>Oculus</li>\n        </ul>\n      </div>\n    );\n  }\n}\n\n// \u7528\u6cd5\u793a\u4f8b: <ShoppingList name="Mark" />\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u4f7f\u7528\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u7684\u5f62\u5f0f\u6765\u544a\u8bc9React\u6211\u4eec\u5e0c\u671b\u5728\u5c4f\u5e55\u4e0a\u5448\u73b0\u7684\u5185\u5bb9\u3002\u6b63\u662f\u56e0\u4e3a\u51fd\u6570\u5f0f\u58f0\u660e\uff0c\u4f7f\u5f97\u5728\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6React\u80fd\u591f\u9ad8\u6548\u5730\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002  "),(0,r.kt)("p",null,"\u6211\u4eec\u9996\u5148\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"ShoppingList"),"\u7684",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u7c7b"),"\uff0c\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e9b\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u88ab\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"props"),"\uff0c\u4e0a\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},'name="Mark"'),"\u5c31\u662f\u5c06\u53c2\u6570\u4f20\u5165\u7ec4\u4ef6\u7684\u8fc7\u7a0b\u3002\u7136\u540e\u518d\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"render"),"\u6e32\u67d3\u5230\u9875\u9762\u3002  "),(0,r.kt)("admonition",{title:"JSX\u8bed\u6cd5",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7531React\u6269\u5c55\u7684Js\u8bed\u6cd5\uff0cJSX \u53ef\u4ee5\u8ba9\u4f60\u66f4\u8f7b\u677e\u5730\u4e66\u5199\u8fd9\u4e9b\u51fd\u6570\u5f0f\u58f0\u660e\u7ed3\u6784\u3002")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u8fd9\u4e9b\u4ee3\u7801\u7b49\u540c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"return React.createElement('div', {className: 'shopping-list'},\n  React.createElement('h1', /* ... h1 children ... */),\n  React.createElement('ul', /* ... ul children ... */)\n);\n")),(0,r.kt)("p",null,"\u5728 JSX \u4e2d\u4f60\u53ef\u4ee5\u4efb\u610f\u4f7f\u7528 JavaScript \u8868\u8fbe\u5f0f\uff0c\u53ea\u9700\u8981\u7528\u4e00\u4e2a\u5927\u62ec\u53f7\u628a\u8868\u8fbe\u5f0f\u62ec\u8d77\u6765\u3002\u6bcf\u4e00\u4e2a React \u5143\u7d20\u4e8b\u5b9e\u4e0a\u90fd\u662f\u4e00\u4e2a JavaScript \u5bf9\u8c61\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u7a0b\u5e8f\u4e2d\u628a\u5b83\u5f53\u4fdd\u5b58\u5728\u53d8\u91cf\u4e2d\u6216\u8005\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u3002  "),(0,r.kt)("p",null,"\u524d\u6587\u4e2d\u7684 ShoppingList \u7ec4\u4ef6\u53ea\u4f1a\u6e32\u67d3\u4e00\u4e9b\u5185\u7f6e\u7684 DOM \u7ec4\u4ef6\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"<div />"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"<li />"),"\u7b49\u3002\u4f46\u662f\u4f60\u4e5f\u53ef\u4ee5\u7ec4\u5408\u548c\u6e32\u67d3\u81ea\u5b9a\u4e49\u7684 React \u7ec4\u4ef6\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"<ShoppingList />")," \u6765\u8868\u793a\u6574\u4e2a\u8d2d\u7269\u6e05\u5355\u7ec4\u4ef6\u3002\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u662f\u5c01\u88c5\u597d\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u5355\u72ec\u8fd0\u884c\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7\u7ec4\u5408\u7b80\u5355\u7684\u7ec4\u4ef6\u6765\u6784\u5efa\u590d\u6742\u7684 UI \u754c\u9762\u3002"),(0,r.kt)("h2",{id:"\u9605\u8bfb\u521d\u59cb\u4ee3\u7801"},"\u9605\u8bfb\u521d\u59cb\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u524d\u9762\u6211\u4eec\u521d\u59cb\u5316\u7684\u6e90\u4ee3\u7801\u4e2d\uff0c\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js")," ,\u8fd9\u4e9b\u521d\u59cb\u4ee3\u7801\u662f\u6211\u4eec\u8981\u5f00\u53d1\u7684\u5c0f\u6e38\u620f\u7684\u57fa\u7840\u4ee3\u7801\u3002\u5728\u4e0a\u9762\u5df2\u7ecf\u63d0\u4f9b\u4e86 CSS \u6837\u5f0f\uff0c\u8fd9\u6837\u4f60\u53ea\u9700\u8981\u5173\u6ce8\u4f7f\u7528 React \u6765\u5f00\u53d1\u8fd9\u4e2a\u4e95\u5b57\u68cb\u4e86\u3002  "),(0,r.kt)("p",null,"\u901a\u8fc7\u9605\u8bfb\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\u4e09\u4e2a\u7ec4\u4ef6\uff1a  "),(0,r.kt)("h3",{id:"square-\u68cb\u76d8\u683c"},"Square-\u68cb\u76d8\u683c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'class Square extends React.Component {\n  render() {\n    return (\n      <button className="square">\n        {/* TODO */}\n      </button>\n    );\n  }\n}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0cSquare\u7ec4\u4ef6\u8fd4\u56de\u4e86\u4e00\u4e2a\u7c7b\u540d\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"square")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," \u6309\u94ae\u3002React \u5c06\u8fd9\u4e2a\u7c7b\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"square")," \u7ec4\u4ef6\u5c01\u88c5\u6210\u4e86\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u65b9\u4fbf\u540e\u9762\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u5728 css \u4ee3\u7801\u4e2d\uff0c\u5b83\u6709\u8fd9\u6837\u7684\u6837\u5f0f\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".square {\n background: #fff;\n border: 1px solid #999;\n float: left;\n font-size: 24px;\n font-weight: bold;\n line-height: 34px;\n height: 34px;\n margin-right: -1px;\n margin-top: -1px;\n padding: 0;\n text-align: center;\n width: 34px;\n}\n")),(0,r.kt)("h3",{id:"board-\u68cb\u76d8"},"Board-\u68cb\u76d8"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Board")," \u7684\u51fd\u6570\u4e2d\u5229\u7528\u4e0a\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Square")," \u7684\u7ec4\u4ef6\u521b\u5efa\u4e86\u4e00\u4e2a\u4e5d\u5bab\u683c,\u8fd9\u4e2a\u4e5d\u5bab\u683c\u7531\u4e09\u884c\u7ec4\u6210\uff0c\u6bcf\u884c\u7531\u4e09\u4e2a\u68cb\u76d8\u683c\u7ec4\u6210\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class Board extends React.Component {\n  renderSquare(i) {\n    return <Square />;\n  }\n\n  render() {\n    const status = \'Next player: X\';\n\n    return (\n      <div>\n        <div className="status">{status}</div>\n        <div className="board-row">\n          {this.renderSquare(0)}\n          {this.renderSquare(1)}\n          {this.renderSquare(2)}\n        </div>\n        <div className="board-row">\n          {this.renderSquare(3)}\n          {this.renderSquare(4)}\n          {this.renderSquare(5)}\n        </div>\n        <div className="board-row">\n          {this.renderSquare(6)}\n          {this.renderSquare(7)}\n          {this.renderSquare(8)}\n        </div>\n      </div>\n    );\n  }\n}\n')),(0,r.kt)("h3",{id:"game-\u6e38\u620f\u4e3b\u4f53"},"Game-\u6e38\u620f\u4e3b\u4f53"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\uff0c\u5229\u7528\u4e0a\u9762\u7684\u68cb\u76d8\u5c01\u88c5\u4e86\u4e00\u4e2a\u6e38\u620f\u754c\u9762\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class Game extends React.Component {\n  render() {\n    return (\n      <div className="game">\n        <div className="game-board">\n          <Board />\n        </div>\n        <div className="game-info">\n          <div>{/* status */}</div>\n          <ol>{/* TODO */}</ol>\n        </div>\n      </div>\n    );\n  }\n}\n')),(0,r.kt)("h2",{id:"\u901a\u8fc7-props-\u4f20\u9012\u6570\u636e"},"\u901a\u8fc7 Props \u4f20\u9012\u6570\u636e"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5b9a\u4e49\u7684\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7  ",(0,r.kt)("inlineCode",{parentName:"p"},"Props")," \u4f20\u9012\u53c2\u6570\u3002\u6211\u4eec\u5c1d\u8bd5\u5c06\u6570\u636e\u4ece Board \u7ec4\u4ef6\u4f20\u9012\u5230 Square \u7ec4\u4ef6\u4e2d\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Board")," \u7ec4\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"renderSquare")," \u65b9\u6cd5\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee3\u7801\u6539\u5199\u6210\u4e0b\u9762\u8fd9\u6837\uff0c\u4f20\u9012\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"prop")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Square")," \u5f53\u4e2d\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Board extends React.Component {\n  renderSquare(i) {\n    // highlight-start\n    return <Square value={i} />;\n    // highlight-end\n  }\n  \xb7\xb7\xb7\n}\n")),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"Square")," \u7ec4\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"{/*TODO*/}")," \u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"{this.props.value}")," \uff0c\u4ee5\u663e\u793a\u4e0a\u6587\u4e2d\u4f20\u5165\u7684\u503c\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class Square extends React.Component {\n  render() {\n    return (\n      <button className="square">\n      // highlight-start\n        {this.props.value}\n        // highlight-end\n      </button>\n    );\n  }\n}\n')),(0,r.kt)("p",null,"\u4fee\u6539\u524d:  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220723152431.png",alt:"1"}),"  "),(0,r.kt)("p",null,"\u4fee\u6539\u540e\uff0c\u6bcf\u4e2a\u683c\u5b50\u4e2d\u90fd\u4f1a\u5b58\u5728\u4e00\u4e2a\u6570\u5b57\uff1a  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220723152450.png",alt:"2"}),"  "),(0,r.kt)("p",null,"\u6211\u4eec\u521a\u521a\u6210\u529f\u5730\u628a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"prop")," \u4ece\u7236\u7ec4\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Board")," \u201c\u4f20\u9012\u201d\u7ed9\u4e86\u5b50\u7ec4\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Square")," \u3002\u5728 React \u5e94\u7528\u4e2d\uff0c\u6570\u636e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," \u7684\u4f20\u9012\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4ece\u7236\u7ec4\u4ef6\u6d41\u5411\u5b50\u7ec4\u4ef6"),"\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u6210\u529f Board \u4e2d\u4f20\u9012\u7684\u53c2\u6570\u503c\uff080~8\uff09\u7ed9\u4e86\u5b50\u7ec4\u4ef6\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u663e\u793a\u51fa\u6765\u3002  "),(0,r.kt)("h2",{id:"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4ea4\u4e92\u529f\u80fd"},"\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4ea4\u4e92\u529f\u80fd"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u8bd5\u7740\u8ba9\u68cb\u76d8\u7684\u6bcf\u4e00\u4e2a\u683c\u5b50\u5728\u70b9\u51fb\u4e4b\u540e\u80fd\u843d\u4e0b\u4e00\u9897 ",(0,r.kt)("strong",{parentName:"p"},"X")," \u4f5c\u4e3a\u68cb\u5b50\u3002 \u9996\u5148\uff0c\u6211\u4eec\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"Square")," \u7ec4\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"render()")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," \u6807\u7b7e\u4fee\u6539\u4e3a\u5982\u4e0b\u5185\u5bb9\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Square extends React.Component {\n  render() {\n    return (\n      // highlight-start\n      <button className=\"square\" onClick={function () { alert('click') }}>\n        {this.props.value}\n      </button>\n      // highlight-end\n    );\n  }\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u6b64\u523b\u70b9\u51fb\u67d0\u4e2a\u683c\u5b50\uff0c\u6d4f\u89c8\u5668\u4f1a\u5f39\u51fa",(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\u6846"),"\u3002\u89e6\u53d1\u4e8b\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," ,\u663e\u793a\u51fa\u63d0\u793a\uff1a\u201cclick\u201d\u3002\u5728\u8fd9\u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," \u662f\u5f39\u51fa\u4e8b\u4ef6\uff0c\u62ec\u53f7\u91cc\u9762\u7684\u662f\u5f39\u51fa\u53c2\u6570\u3002  "),(0,r.kt)("admonition",{title:"JavaScript \u7bad\u5934\u51fd\u6570",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u5c11\u8f93\u5165\u4ee3\u7801\uff0c\u540c\u65f6\u4e3a\u4e86\u907f\u514d ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u9020\u6210\u7684\u56f0\u6270\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u4f7f\u7528\u7bad\u5934\u51fd\u6570 \u6765\u8fdb\u884c\u4e8b\u4ef6\u5904\u7406\uff0c\u5982\u4e0b\u6240\u793a\uff1a  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"onClick={() => alert('click')}\n")),(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick={() => alert('click')}")," \u7684\u65b9\u5f0f\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," \u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"prop")," \u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u3002 React \u5c06\u5728\u5355\u51fb\u65f6\u8c03\u7528\u6b64\u51fd\u6570\u3002\u4f46\u5f88\u591a\u4eba\u7ecf\u5e38\u5fd8\u8bb0\u7f16\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"() =>"),"\uff0c\u800c\u5199\u6210\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick={alert('click')}"),"\uff0c\u8fd9\u79cd\u5e38\u89c1\u7684\u9519\u8bef\u4f1a\u5bfc\u81f4\u6bcf\u6b21\u8fd9\u4e2a\u7ec4\u4ef6\u6e32\u67d3\u7684\u65f6\u5019\u90fd\u4f1a\u89e6\u53d1\u5f39\u51fa\u6846\u3002")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5e0c\u671b ",(0,r.kt)("inlineCode",{parentName:"p"},"Square")," \u7ec4\u4ef6\u53ef\u4ee5\u201c\u8bb0\u4f4f\u201d\u5b83\u88ab\u70b9\u51fb\u8fc7\uff0c\u7136\u540e\u7528 \u201cX\u201d \u6765\u586b\u5145\u5bf9\u5e94\u7684\u65b9\u683c\u3002\u6211\u4eec\u7528 ",(0,r.kt)("strong",{parentName:"p"},"state")," \u6765\u5b9e\u73b0\u6240\u8c13\u201c\u8bb0\u5fc6\u201d\u7684\u529f\u80fd\u3002  "),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728 React \u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570\u4e2d\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"this.state")," \u6765\u521d\u59cb\u5316 state\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"this.state")," \u5e94\u8be5\u88ab\u89c6\u4e3a\u4e00\u4e2a\u7ec4\u4ef6\u7684\u79c1\u6709\u5c5e\u6027\u3002\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.state")," \u4e2d\u5b58\u50a8\u5f53\u524d\u6bcf\u4e2a\u65b9\u683c\uff08Square\uff09\u7684\u503c\uff0c\u5e76\u4e14\u5728\u6bcf\u6b21\u65b9\u683c",(0,r.kt)("strong",{parentName:"p"},"\u88ab\u70b9\u51fb\u7684\u65f6\u5019\u6539\u53d8\u8fd9\u4e2a\u503c"),"\u3002  "),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5411\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u521d\u59cb\u5316 state\uff1a  "),(0,r.kt)("admonition",{title:"React \u6784\u9020\u51fd\u6570",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"constructor \u51fd\u6570\u65f6\u7ec4\u4ef6\u6700\u5148\u6267\u884c\u7684\u51fd\u6570\u3002  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class childen extends react.Component{\n  // highlight-start\n   constructor(props){\n      super(props);\n      this.state={\n          attr1:"",\n      }\n  }\n  // highlight-end\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"spuer()\uff1a \u6ce8\u610f\u5728\u5b9a\u4e49\u7ec4\u4ef6\u7684\u65f6\u5019\u53ef\u4ee5\u6ca1\u7528constructor\u65b9\u6cd5\uff0c\u4e00\u65e6\u5b9a\u4e49\uff0c\u5c31\u5fc5\u987b\u4f7f\u7528spuer\u65b9\u6cd5\uff0c\u8fd9\u4e0d\u662freact\u89c4\u5b9a\u7684\u800c\u662fes6\u8981\u6c42\uff0c\u5177\u4f53\u539f\u56e0\u5982\u4e0b\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220723154441.png",alt:"3"}),"  ")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5411\u8fd9\u4e2a class \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u521d\u59cb\u5316 state\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class Square extends React.Component {\n  // highlight-start\n  constructor(props) {\n    super(props);\n    this.state = {\n      // \u7528\u4e8e\u8bb0\u5fc6\u72b6\u6001\n      value: null,\n    }\n  }\n  // highlight-end\n  render() {\n    return (\n      <button className="square" onClick={() => alert("Click!")}>\n        {this.props.value}\n      </button>\n    );\n  }\n}\n')),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u6765\u4fee\u6539\u4e00\u4e0b Square \u7ec4\u4ef6\u7684 render \u65b9\u6cd5\uff0c\u8fd9\u6837\uff0c\u6bcf\u5f53\u65b9\u683c\u88ab\u70b9\u51fb\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u663e\u793a\u5f53\u524d state \u7684\u503c\u4e86\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"<button>")," \u6807\u7b7e\u4e2d\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"li"},"this.props.value")," \u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"this.state.value"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick={...}")," \u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick={() => this.setState({value: 'X'})}"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u66f4\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"className")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"prop")," \u5206\u4e24\u884c\u4e66\u5199\u3002")),(0,r.kt)("p",null,"\u4fee\u6539\u4e4b\u540e\uff0cSquare \u7ec4\u4ef6\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," \u6807\u7b7e\u5c31\u53d8\u6210\u4e86\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class Square extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      // \u7528\u4e8e\u8bb0\u5fc6\u72b6\u6001\n      value: null,\n    }\n  }\n  render() {\n    return (\n      // highlight-start\n      <button\n        className=\"square\"\n        onClick={() => this.setState({ value: 'x' })}>\n        {this.state.value}\n      </button>\n      // highlight-end\n    );\n  }\n}\n\n")),(0,r.kt)("p",null,"\u6bcf\u6b21\u5728\u7ec4\u4ef6\u4e2d\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," \u65f6\uff0cReact \u90fd\u4f1a\u81ea\u52a8\u66f4\u65b0\u5176\u5b50\u7ec4\u4ef6\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220723155303.png",alt:"3"})))}u.isMDXComponent=!0}}]);
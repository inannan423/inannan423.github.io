"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[7222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(t),c=l,g=k["".concat(i,".").concat(c)]||k[c]||m[c]||r;return t?a.createElement(g,p(p({ref:n},u),{},{components:t})):a.createElement(g,p({ref:n},u))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=k;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={title:"Flask\uff08PythonWeb\uff09+MongoDB \u5b9e\u73b0\u7b80\u5355Web\u540e\u7aef",date:new Date("2022-10-27T00:00:00.000Z"),authors:"Chengzihan",tags:["Flask","MongoDB"]},p=void 0,o={permalink:"/blog/2022/10/27/flask-back",editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/blog/2022-10-27-flask-back.md",source:"@site/blog/2022-10-27-flask-back.md",title:"Flask\uff08PythonWeb\uff09+MongoDB \u5b9e\u73b0\u7b80\u5355Web\u540e\u7aef",description:"\u4ecb\u7ecd",date:"2022-10-27T00:00:00.000Z",formattedDate:"October 27, 2022",tags:[{label:"Flask",permalink:"/blog/tags/flask"},{label:"MongoDB",permalink:"/blog/tags/mongo-db"}],readingTime:14.62,hasTruncateMarker:!1,authors:[{name:"Chengzihan",title:"Orange Chengzihan",url:"https://github.com/inannan423",imageURL:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220710133634.png",key:"Chengzihan"}],frontMatter:{title:"Flask\uff08PythonWeb\uff09+MongoDB \u5b9e\u73b0\u7b80\u5355Web\u540e\u7aef",date:"2022-10-27T00:00:00.000Z",authors:"Chengzihan",tags:["Flask","MongoDB"]},nextItem:{title:"three.js \u57fa\u7840",permalink:"/blog/2022/10/18/threejs"}},i={authorsImageUrls:[void 0]},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u524d\u7aef\u90e8\u5206",id:"\u524d\u7aef\u90e8\u5206",level:2},{value:"Flask API\u63a5\u53e3",id:"flask-api\u63a5\u53e3",level:2},{value:"\u63a5\u53e3\u6d4b\u8bd5",id:"\u63a5\u53e3\u6d4b\u8bd5",level:2},{value:"\u5728\u524d\u7aef\u4e2d\u8bf7\u6c42\u63a5\u53e3",id:"\u5728\u524d\u7aef\u4e2d\u8bf7\u6c42\u63a5\u53e3",level:2},{value:"MongoDB \u6570\u636e\u5e93",id:"mongodb-\u6570\u636e\u5e93",level:2},{value:"\u6ce8\u518c MongoDB \u8d26\u53f7",id:"\u6ce8\u518c-mongodb-\u8d26\u53f7",level:3},{value:"\u8d26\u53f7\u6ce8\u518c",id:"\u8d26\u53f7\u6ce8\u518c",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:3},{value:"\u8fde\u63a5\u6570\u636e\u5e93",id:"\u8fde\u63a5\u6570\u636e\u5e93",level:3},{value:"\u521b\u5efa\u6570\u636e\u96c6",id:"\u521b\u5efa\u6570\u636e\u96c6",level:3},{value:"Flask \u591a\u4e2a\u63a5\u53e3",id:"flask-\u591a\u4e2a\u63a5\u53e3",level:2},{value:"\u6269\u5c55\u5e94\u7528",id:"\u6269\u5c55\u5e94\u7528",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u5f00\u6e90\u6e90\u4ee3\u7801",id:"\u5f00\u6e90\u6e90\u4ee3\u7801",level:2}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"Flask \u662f\u4e00\u4e2a\u57fa\u4e8e Python \u7684 Web \u540e\u7aef\u6846\u67b6\u3002\u901a\u8fc7 Flask \u53ef\u4ee5\u5feb\u901f\u5199\u51fa\u4e00\u4e2a API \u63a5\u53e3\u3002MongoDB \u662f\u4e00\u4e2a\u57fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Flask \u548c MongoDB \u5b9e\u73b0\u7b80\u5355\u7684 Web \u540e\u7aef\u3002  "),(0,l.kt)("h2",{id:"\u524d\u7aef\u90e8\u5206"},"\u524d\u7aef\u90e8\u5206"),(0,l.kt)("p",null,"\u7531\u4e8e\u6d89\u53ca\u63d2\u503c\u4ee5\u53ca\u6761\u4ef6\u6e32\u67d3\uff0c\u8fd9\u91cc\u7b80\u5355\u5730\u4f7f\u7528\u5230\u4e86 Vue.js \u6846\u67b6\u3002\u9996\u5148\u8fdb\u884c\u6846\u67b6\u5f15\u5165\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"><\/script>\n')),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u521b\u5efa\u57fa\u672c\u7684\u8f93\u5165\u6846\u548c\u6309\u94ae\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n    <div id="app" class="main">\n        <h1>\u8f93\u5165\u59d3\u540d\u67e5\u8be2\u5b66\u53f7</h1>\n        \x3c!-- \u503c\u7ed1\u5b9a\uff0c\u76d1\u542c\u8f93\u5165\u6846\u7684\u5185\u5bb9\u53d8\u5316\uff0c\u5982\u679c Input \u5185\u5185\u5bb9\u6539\u53d8\uff0cdata.id\u5c31\u6539\u53d8\u4e3a\u8fd9\u4e2a\u503c --\x3e\n        <input v-model="id" type="text" placeholder="\u5b66\u53f7" />\n        \x3c!-- @onclick \u89e6\u53d1\u4e8b\u4ef6\u540d\uff0c\u540e\u9762\u7684\u51fd\u6570\u5728 method \u4e2d --\x3e\n        <button class="button" id="signIn" @click="Query">\u67e5\u8be2</button>\n    </div>\n</body>\n')),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u6570\u636e\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-model")," \u65b9\u6cd5\u7ed1\u5b9a\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," \u4e4b\u4e0a\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," \u7684\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6570\u636e\u503c\u4e5f\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u5f53\u6211\u4eec\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"button")," \u65f6\uff0c\u6211\u4eec\u5c06\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Query")," \u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\uff0c\u521b\u9020 Vue \u5b9e\u4f8b\uff1a  "),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," \u88ab\u7ed1\u5b9a\u4e86\u5b9e\u4f8b\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"app"),"\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<div id="app" class="main">\n    \x3c!-- ... --\x3e\n</div>\n')),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c\u73b0\u5728\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," \u4e2d\u521b\u5efa Vue \u5b9e\u4f8b\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n    // \u521b\u5efavue\u5b9e\u4f8b\n    const app = new Vue({\n        // \u4ea4\u4ee3\u5bbf\u4e3b\u662f\u8c01\uff0cid\u7528 # \u67e5\u8be2\n        el: "#app",\n        // \u6570\u636e\u5bb9\u5668\n        data: {\n            id:"",\n            result:"",\n        },\n        // \u51fd\u6570\u65b9\u6cd5\n        methods: {\n            Query() {\n                // ... \u67e5\u8be2\u65b9\u6cd5\n            }\n        },\n    })\n<\/script>\n')),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," \u4e2d\u521d\u59cb\u5316\u4e86\u4e24\u4e2a\u53d8\u91cf\uff0c\u5206\u522b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u7528\u4e8e\u5b58\u50a8\u8f93\u5165\u6846\u7684\u503c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"result")," \u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," \u7684\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u7684\u503c\u4e5f\u4f1a\u8ddf\u8e2a\u53d1\u751f\u53d8\u5316\u3002  "),(0,l.kt)("p",null,"\u7528 VScode \u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Live Server")," \u542f\u52a8\u4e00\u4e2a\u672c\u5730\u670d\u52a1\u5668\uff0c\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\uff08\u6216\u76f4\u63a5\u6253\u5f00\uff09\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u754c\u9762\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221028101028.png",alt:"2"})),(0,l.kt)("h2",{id:"flask-api\u63a5\u53e3"},"Flask API\u63a5\u53e3"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a API \u63a5\u53e3\uff0c\u7528\u4e8e\u63a5\u6536\u524d\u7aef\u4f20\u6765\u7684\u6570\u636e\uff0c\u67e5\u8be2\u6570\u636e\u5e93\uff0c\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\u3002  "),(0,l.kt)("p",null,"\u5728 Python \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u7528\u4e8e\u5bfc\u5165\u6a21\u5757\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"from")," \u7528\u4e8e\u5bfc\u5165\u6a21\u5757\u4e2d\u7684\u67d0\u4e2a\u51fd\u6570\u3002\u8fd9\u91cc\u9700\u8981 Flask \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Flask")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"request")," \u51fd\u6570\uff0c\u7528\u4e8e\u5b9e\u73b0http\u670d\u52a1\u5668\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from flask import Flask, request\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u670d\u52a1\u5668\u80fd\u88ab\u76f4\u63a5\u8bbf\u95ee\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u8de8\u57df\u8bbf\u95ee\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from flask_cors import CORS\n\nCORS(app, resources=r'/*')  # \u6ce8\u518c CORS, \"/*\" \u5141\u8bb8\u8bbf\u95ee\u6240\u6709api\n")),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a Flask \u5b9e\u4f8b\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"app = Flask(__name__)\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8def\u7531\uff0c\u7528\u4e8e\u63a5\u6536\u524d\u7aef\u4f20\u6765\u7684\u6570\u636e\uff0c\u63a5\u53d7\u4f7f\u7528 GET \u8fdb\u884c\u8bbf\u95ee\uff0c\u8bbf\u95ee\u8def\u5f84\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/getname"),"\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@app.route('/getname', methods=['GET'])\n")),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u6211\u4eec\u9700\u8981\u83b7\u53d6\u524d\u7aef\u4f20\u6765\u7684\u6570\u636e\uff0c\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u7528\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"request")," \u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u83b7\u53d6\u524d\u7aef\u4f20\u6765\u7684\u6570\u636e\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def check():\n    # \u9ed8\u8ba4\u8fd4\u56de\u5185\u5bb9\uff0cresult\u662f\u6839\u636e\u67e5\u8be2\u7ed3\u679c\u8981\u8fd4\u56de\u7684\n    return_dict = {'return_code': '200', 'return_info': '\u5904\u7406\u6210\u529f', 'result': False}\n    # \u5224\u65ad\u5165\u53c2\u662f\u5426\u4e3a\u7a7a\n    if request.args is None:\n        return_dict['return_code'] = '5004'\n        return_dict['return_info'] = '\u8bf7\u6c42\u53c2\u6570\u4e3a\u7a7a'\n        # \u544a\u77e5\u524d\u7aef\uff0c\u67e5\u8be2\u5931\u8d25\n        return json.dumps(return_dict, ensure_ascii=False)\n    # \u83b7\u53d6\u4f20\u5165\u7684\u53c2\u6570\n    get_data = request.args.to_dict()\n    # \u83b7\u53d6\u53c2\u6570\u4e2d\u540d\u4e3a ID \u7684\u53c2\u6570\u503c\n    ID = get_data.get('ID')\n    # \u5bf9\u53c2\u6570\u8fdb\u884c\u64cd\u4f5c\uff0c\u7528 ID \u53bb\u67e5\u8be2\u6570\u636e\u5e93\n    return_dict['result'] = getMongo(ID)\n    # \u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\n    return json.dumps(return_dict, ensure_ascii=False)\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u8fd8\u6ca1\u6709\u5199\u67e5\u8be2\u6570\u636e\u5e93\u7684\u65b9\u6cd5\uff0c\u6211\u4eec\u5148\u628a\u8fd9\u4e2a\u65b9\u6cd5\u5199\u51fa\u6765\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7b54\uff0c\u7136\u540e\u4e00\u4f1a\u518d\u53bb\u5b9e\u73b0\u67e5\u8be2\u6570\u636e\u5e93\u7684\u65b9\u6cd5\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def getMongo(ID):\n    # \u8fd9\u91cc\u662f\u67e5\u8be2\u6570\u636e\u5e93\u7684\u65b9\u6cd5\n    # \u8fd9\u91cc\u5148\u8fd4\u56de\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7b54\n    return True\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u5728\u4e3b\u51fd\u6570\u4e2d\uff0c\u542f\u52a8 Flask \u670d\u52a1\u5668\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    app.run(debug=True)\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"debug=True")," \u662f\u4e3a\u4e86\u65b9\u4fbf\u8c03\u8bd5\uff0c\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u770b\u5230\u9519\u8bef\u4fe1\u606f\u3002\u5e76\u5728\u672c\u5730\u8fdb\u884c\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u63a5\u53e3\u6d4b\u8bd5"},"\u63a5\u53e3\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u5148\u4e0d\u7ba1\u6570\u636e\u5e93\uff0c\u5bf9\u63a5\u53e3\u8fdb\u884c\u7b80\u5355\u7684\u6d4b\u8bd5\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.apifox.cn/"},"Apifox"),"\uff0c\u8fdb\u884c\u63a5\u53e3\u6d4b\u8bd5\u3002\u4e0b\u8f7d\u540e\u6253\u5f00\u3002  "),(0,l.kt)("p",null,"\u70b9\u51fb\u65b0\u5efa\u56e2\u961f\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666923789380.png",alt:"1"})),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u65b0\u5efa\u9879\u76ee\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666923831156.png",alt:"2"})),(0,l.kt)("p",null,"\u6253\u5f00\u9879\u76ee\u540e\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u5feb\u6377\u8bf7\u6c42"),"\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666923863144.png",alt:"3"})),(0,l.kt)("p",null,"\u5728 Pycharm \u4e2d\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"getname.py"),"\u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221028102543.png",alt:"3"})),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e0b\u65b9\u63a7\u5236\u53f0\u63d0\u793a\uff0c\u670d\u52a1\u5668\u5df2\u7ecf\u542f\u52a8\u3002\u8bbf\u95ee\u5730\u5740\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.0:5000"),"\u3002\u6211\u4eec\u590d\u5236\u8fd9\u4e2a\u5730\u5740\uff0c\u7136\u540e\u5728 Apifox \u4e2d\uff0c\u7c98\u8d34\u5230\u5730\u5740\u680f\u4e2d\uff0c\u5728\u5730\u5740\u540e\u6dfb\u52a0\u8bbf\u95ee\u7684\u63a5\u53e3\u540d\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/getname"),"\uff0c\u586b\u5199 Params \u53c2\u6570 ID \u7684\u503c\uff0c\u968f\u4fbf\u586b\u4e00\u4e2a\uff0c\u56e0\u4e3a\u4e0a\u9762\u5199\u4e86\u65e0\u8bba\u4ec0\u4e48\u65f6\u5019\u90fd\u8fd4\u56de True\uff0c\u6240\u4ee5\u9884\u671f\u7ed3\u679c\u662f True\uff0c\u70b9\u51fb\u53d1\u9001\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666924468361.png",alt:"2"}),"  "),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e0b\u9762\u7684\u63a7\u5236\u53f0\u63d0\u793a\uff0c\u63a5\u53e3\u8c03\u7528\u6210\u529f\uff08200\uff0cOK\uff09\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a True\u3002  "),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u53ef\u4ee5\u5173\u95ed Apifox \u4e86\u3002"),(0,l.kt)("h2",{id:"\u5728\u524d\u7aef\u4e2d\u8bf7\u6c42\u63a5\u53e3"},"\u5728\u524d\u7aef\u4e2d\u8bf7\u6c42\u63a5\u53e3"),(0,l.kt)("p",null,"\u4e0a\u9762 Vue \u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u7a7a\u4e86\u4e00\u4e2a\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Query()"),"\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5c31\u662f\u7528\u6765\u8bf7\u6c42\u63a5\u53e3\u7684\u3002\u73b0\u5728\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," \u5bf9\u8c61\u6765\u8bf7\u6c42\u63a5\u53e3\u3002  "),(0,l.kt)("p",null,"\u9996\u5148\u521d\u59cb\u5316\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," \u5bf9\u8c61\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const request = new XMLHttpRequest();\n")),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u53bb\u53d1\u8d77\u8bf7\u6c42\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'request.open("GET", "http://127.0.0.1:5000/getname" +"?ID="+ this.id);\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u662f\u8bf7\u6c42\u65b9\u5f0f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:5000")," \u662f\u670d\u52a1\u5668\u5730\u5740\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"/getname")," \u662f\u63a5\u53e3\u540d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"?ID=")," \u662f\u53c2\u6570\u540d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"this.id")," \u662f\u53c2\u6570\u503c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"this.id")," \u662f\u5728 Vue \u4e2d\u8c03\u7528\u4e00\u4e2a\u53d8\u91cf\u7684\u65b9\u6cd5\u3002\u63a5\u7740\uff0c\u76d1\u542c\u8bf7\u6c42\u72b6\u6001\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"request.onreadystatechange = () => {\n    // readyState \u4e3a 4 \u65f6\uff0c\u8bf7\u6c42\u5df2\u5b8c\u6210\uff0crequest.status \u4e3a 200 \u65f6\uff0c\u8bf7\u6c42\u6210\u529f\n    if (request.readyState === 4 && request.status === 200) {\n        // \u683c\u5f0f\u5316\u8fd4\u56de\u503c\u4e3ajson\n        const obj = JSON.parse(request.responseText);\n        // \u6253\u5370\u6765\u770b\u770b\n        console.log(obj);\n        // \u8ba9 data \u91cc\u9762\u7684 result \u53d8\u6210\u8fd9\u4e2a\u503c\n        this.result = obj.result;\n        // \u6253\u5370\u6765\u770b\u770b\n        console.log(this.result);\n    }\n};\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u53d1\u9001\u8bf7\u6c42\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"request.send();\n")),(0,l.kt)("p",null,"\u5b8c\u6574\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Query()")," \u65b9\u6cd5\u5982\u4e0b\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'Query() {\n    console.log(this.id);\n    // \u5f00\u59cb http \u8bf7\u6c42\n    const request = new XMLHttpRequest();   // Ajax \u521d\u59cb\u5316\u5f02\u6b65\u8bf7\u6c42\n    // \u53d1\u8d77 http \u8bf7\u6c42\n    request.open("GET", "http://127.0.0.1:5000/getname" +"?ID="+ this.id);\n    request.onreadystatechange = () => {\n        if (request.readyState === 4 && request.status === 200) {\n            // \u683c\u5f0f\u5316\u8fd4\u56de\u503c\u4e3ajson\n            const obj = JSON.parse(request.responseText);\n            // \u8ba9 data \u91cc\u9762\u7684 result \u53d8\u6210\u8fd9\u4e2a\u503c\n            this.result = obj.result;\n            console.log(this.result);\n        }\n    };\n    request.send();\n    // end\n}\n')),(0,l.kt)("p",null,"\u5728\u4fdd\u6301 Pycharm \u8fd0\u884c\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\uff0c\u8f93\u5165 ID\uff0c\u70b9\u51fb\u67e5\u8be2\uff0c\u6309F12\u67e5\u770b\u63a7\u5236\u53f0\u6253\u5370\uff0c\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u5668\u5411\u524d\u7aef\u8fd4\u56de\u4e86 \u4e00\u6761\u5e94\u7b54\uff0c\u72b6\u6001\u7801\u4e3a 200\uff0cOK\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a True\u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666925074800.png",alt:"2"})),(0,l.kt)("h2",{id:"mongodb-\u6570\u636e\u5e93"},"MongoDB \u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u5018\u82e5\u4f60\u4e0d\u9700\u8981\u914d\u7f6e\u6570\u636e\u5e93\uff0c\u6216\u8005\u7528 csv \u672c\u5730\u6587\u4ef6\u4ee3\u66ff\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u8282\u3002\u4e0a\u9762\u5c31\u591f\u7528\u4e86\uff0c\u4f60\u53ea\u9700\u8981\u5c06 MongoDB \u51fd\u6570\u6539\u5199\u6210\u67e5\u8be2\u81ea\u5df1\u7684 csv \u6587\u4ef6\u5373\u53ef\u3002  "),(0,l.kt)("h3",{id:"\u6ce8\u518c-mongodb-\u8d26\u53f7"},"\u6ce8\u518c MongoDB \u8d26\u53f7"),(0,l.kt)("p",null,"MongoDB \u6570\u636e\u5e93\u4e3a\u6bcf\u4e2a\u7528\u6237\u63d0\u4f9b\u4e86 512MB \u7684\u514d\u8d39\u5b58\u50a8\u7a7a\u95f4\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/cloud/atlas"},"MongoDB Atlas")," \u4e0a\u6ce8\u518c\u4e00\u4e2a\u514d\u8d39\u7684\u6570\u636e\u5e93\u3002\uff08\u7528\u6765\u5b58\u50a8\u4f60\u7684\u4efb\u52a1\u6570\u636e\u5b8c\u5168\u8db3\u591f\u4e86\uff09",(0,l.kt)("br",{parentName:"p"}),"\n","Mongo Atlas \u63d0\u4f9b\u4e91\u6570\u636e\u5e93\u670d\u52a1\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5728\u8fdc\u7a0b\u8bbf\u95ee\u4f60\u7684\u6570\u636e\u5e93\uff0c\u800c\u4e0d\u9700\u8981\u5728\u672c\u5730\u642d\u5efa\u6570\u636e\u5e93\u3002  "),(0,l.kt)("h3",{id:"\u8d26\u53f7\u6ce8\u518c"},"\u8d26\u53f7\u6ce8\u518c"),(0,l.kt)("p",null,"\u4f60\u9996\u5148\u9700\u8981\u6ce8\u518c\u4e00\u4e2a MongoDB \u8d26\u53f7\uff0c\u70b9\u51fb ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/cloud/atlas/register"},"\u8fd9\u91cc")," \u6ce8\u518c\u3002\u8fd9\u53ef\u80fd\u9700\u8981\u4f60\u63d0\u4f9b\u90ae\u7bb1\u7b49\u4e2a\u4eba\u4fe1\u606f\u3002  "),(0,l.kt)("h3",{id:"\u521b\u5efa\u6570\u636e\u5e93"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u767b\u9646\u540e\uff0c\u4f60\u5c06\u770b\u5230\u4e0b\u9762\u7684\u754c\u9762\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221027084814.png",alt:"1"}),"  "),(0,l.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0a\u89d2 Create \u3002  "),(0,l.kt)("p",null,"\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"shared")," \u7c7b\u578b\u7684\u96c6\u7fa4\uff0c\u63a5\u7740\u9009\u62e9\u4e00\u5bb6\u670d\u52a1\u63d0\u4f9b\u5546\uff0c\u8fd9\u91cc\u662f\u4e9a\u9a6c\u900a\uff0c\u5f53\u7136\uff0c\u53ef\u4ee5\u8bd5\u4e00\u4e0b\u5fae\u8f6f\u7684 Azure \uff0c\u8bf4\u4e0d\u5b9a\u56fd\u5185\u8bbf\u95ee\u66f4\u5feb\u3002\u7136\u540e\u9009\u62e9\u4e00\u4e2a\u79bb\u4f60\u6700\u8fd1\u7684\u5730\u533a\uff0c\u6bd4\u5982\u4e2d\u56fd\u9999\u6e2f\uff0c\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Create Cluster")," \u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221027085107.png",alt:"3"}),"  "),(0,l.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Create Cluster")," \u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221027085308.png",alt:"2"}),"  "),(0,l.kt)("p",null,"\u5728\u51fa\u73b0\u7684\u7a97\u53e3\u4e2d\uff0c\u6dfb\u52a0\u8fde\u63a5 IP \u5730\u5740\u3002\u6211\u4eec\u9700\u8981\u5141\u8bb8\u4ece\u4efb\u4f55\u5730\u65b9\u8bbf\u95ee\u3002\u56e0\u6b64\uff0c\u5355\u51fb\u201c\u5141\u8bb8\u4ece\u4efb\u4f55\u5730\u65b9\u8bbf\u95ee\u201d\u6309\u94ae\uff0c\u7136\u540e\u5355\u51fb\u201c\u6dfb\u52a0 IP \u5730\u5740\u201d\u8fdb\u884c\u8bbe\u7f6e\u3002\u9009\u62e9\u4e91\u73af\u5883\uff0c\u5373Cloud Environment\uff0cIP \u5730\u5740\u586b\u5199\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"\u3002  "),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u7528\u6237\u6765\u8fde\u63a5\u5230\u6b64\u6570\u636e\u5e93\u3002\u5728\u201c\u521b\u5efa\u6570\u636e\u5e93\u7528\u6237\u201d\u7a97\u4f53\u4e0a\uff0c\u8f93\u5165\u81ea\u5b9a\u4e49\u7528\u6237\u540d\u3001\u5bc6\u7801\uff0c\u7136\u540e\u5355\u51fb\u201c\u521b\u5efa\u6570\u636e\u5e93\u7528\u6237\u201d\u3002\u8bf7\u8bb0\u4f4f\u8fd9\u4e2a\u5bc6\u7801\u3002"),(0,l.kt)("h3",{id:"\u8fde\u63a5\u6570\u636e\u5e93"},"\u8fde\u63a5\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Connect"),"\u6309\u94ae\uff0c\u8fde\u63a5\u6570\u636e\u5e93\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666832058438.png",alt:"2"})),(0,l.kt)("p",null,"\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"Connect your application")," \uff0c\u7136\u540e\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"Python")," \uff0c\u63a5\u7740\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"3.12 or later")," \u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666925390219.png",alt:"2"})),(0,l.kt)("p",null,'\u63a5\u7740\uff0c\u51fa\u73b0\u4e86\u4e00\u4e2a\u8fde\u63a5\u5730\u5740\uff0c\u4e0d\u52fe\u9009 "Include full example" \u8fd9\u4e2a\u5730\u5740\u5c31\u662f\u4f60\u7684\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740\uff0c\u4f60\u9700\u8981\u5c06\u5b83\u590d\u5236\u4e0b\u6765\uff0c\u7a0d\u540e\u4f1a\u7528\u5230\u3002\uff08\u8bf7\u4e00\u5b9a\u59a5\u5584\u4fdd\u5b58\uff09  '),(0,l.kt)("p",null,"\u94fe\u63a5\u683c\u5f0f\u5982\u4e0b\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"mongodb+srv://YourName:<password>@cluster0.xxxxxx.mongodb.net/?retryWrites=true&w=majority\n")),(0,l.kt)("p",null,"\u5c06\u5176\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"<password>")," \u66ff\u6362\u4e3a\u521a\u521a\u4f60\u8f93\u5165\u7684\u81ea\u5b9a\u4e49\u5bc6\u7801\u3002\u8fd9\u4e2a\u624d\u662f\u9700\u8981\u7528\u5230\u7684\u4ee3\u7801\uff0c\u8bf7\u59a5\u5584\u4fdd\u5b58\u3002  "),(0,l.kt)("p",null,"\u4e3e\u4f8b\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"mongodb+srv://inannan:12345678@cluster0.xxxxxx.mongodb.net/?retryWrites=true&w=majority\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u6570\u636e\u96c6"},"\u521b\u5efa\u6570\u636e\u96c6"),(0,l.kt)("p",null,"\u70b9\u51fb\u96c6\u7fa4\u540d Cluster0 \u8fdb\u5165\u96c6\u7fa4\u3002\u70b9\u51fb\u6dfb\u52a0\u6570\u636e\u5e93\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666832678590.png",alt:"2"}),"  "),(0,l.kt)("p",null,"\u56fe\u4e2d\u6709\u5176\u4ed6\u6570\u636e\u5e93\uff0c\u4e0d\u7528\u7ba1\u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221028105200.png",alt:"2"}),"  "),(0,l.kt)("p",null,"\u521b\u5efa\u6210\u529f\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666925551416.png",alt:"2"})),(0,l.kt)("p",null,"\u63d2\u5165\u51e0\u6761\u793a\u4f8b\u6570\u636e\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666925695569.png",alt:"3"})),(0,l.kt)("p",null,"\u91cd\u590d\u51e0\u6b21\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20221028105537.png",alt:"3"}),"  "),(0,l.kt)("p",null,"OK\u4e86\u3002  "),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u770b\u770b\u5982\u4f55\u5728 Python \u4e2d\u4f7f\u7528 MongoDB\u3002  "),(0,l.kt)("p",null,"\u9996\u5148\u5f15\u5165\u9700\u8981\u7684\u4f9d\u8d56\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import json\nfrom flask_cors import CORS\nimport pymongo\nfrom bson import json_util\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u8fc7\u7a0b\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def getMongo(ID):\n    # \u94fe\u63a5 MongoDB atlas\n    myclient = pymongo.MongoClient('mongodb+srv://inannan:12345678@cluster0.xxxxxx.mongodb.net/?retryWrites=true&w=majority') # \u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\uff0c\u6539\u6210\u4f60\u81ea\u5df1\u7684\n    mydb = myclient['mydb']  # \u6570\u636e\u5e93\u540d\u79f0\n    mycol = mydb['db1']  # \u96c6\u5408\u540d\u79f0\n    myquery = {\"id\": ID}    # \u67e5\u8be2\u6761\u4ef6\n    mydoc = mycol.find(myquery)     # \u67e5\u8be2\u7ed3\u679c\n    # \u53d6\u51fa\u5176\u4e2d\u7684\u6570\u636e\u683c\u5f0f\u4e3ajson\n    for x in mydoc:\n        # \u5c06x\u8f6c\u6362\u4e3a\u5bf9\u8c61\n        x = json.loads(json_util.dumps(x))\n        print(x)\n        return x\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002  "),(0,l.kt)("p",null,"\u91cd\u65b0\u6253\u5f00 Apifox\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u63a5\u53e3\uff0c\u63a5\u53e3\u5730\u5740\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/getname"),"\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"),"\u3002\u643a\u5e26\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID"),"\uff0c\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"201000000"),"\uff0c\u56e0\u4e3a\u4e0a\u9762\u5728 Mongodb \u4e2d\u63d2\u5165\u7684\u6570\u636e\u4e2d\uff0c\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"201000000")," \u7684\u6570\u636e\u3002\u6240\u4ee5\u8fd9\u91cc\u5c31\u7528\u8fd9\u4e2a\u503c\u6765\u6d4b\u8bd5\u3002  "),(0,l.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c\u6211\u4eec\u5df2\u7ecf\u6210\u529f\u7684\u4ece MongoDB \u4e2d\u67e5\u8be2\u5230\u4e86\u6570\u636e\u3002  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/1666926021403.png",alt:"2"}),"  "),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," \u6570\u636e\uff0c\u4f8b\u5982\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "return_code": "200", \n    "return_info": "\u5904\u7406\u6210\u529f", \n    "result": {\n        "_id": {"$oid": "635a918c1be53239a161f777"}, \n        "id": "201000000",\n        "name": "JZ", \n        "class": "\u6570\u5a9220"\n    }\n}\n')),(0,l.kt)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u7684\u503c\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"result.name\n")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4fee\u6539\u524d\u7aef\u9875\u9762\uff0c\u5c06\u6570\u636e\u5c55\u793a\u51fa\u6765\u3002\u9996\u5148\u521b\u5efa\u7ed3\u679c\u663e\u793a\u6846\uff0c\u4f7f\u7528\u6761\u4ef6\u6e32\u67d3\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," \u6709\u503c\u65f6\uff0c\u624d\u663e\u793a\u7ed3\u679c\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div v-if="result">\n    \u59d3\u540d\uff1a{{result.name}}\n    <br/>\n    \u73ed\u7ea7\uff1a{{result.class}}\n</div>\n')),(0,l.kt)("h2",{id:"flask-\u591a\u4e2a\u63a5\u53e3"},"Flask \u591a\u4e2a\u63a5\u53e3"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u63a5\u53e3\uff0c\u4f8b\u5982\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@app.route('/getname', methods=['GET'])\ndef getname():\n    ID = request.args.get('ID')\n    result = getMongo(ID)\n    return jsonify(result)\n\n@app.route('/getclass', methods=['GET'])\ndef getclass():\n    ID = request.args.get('ID')\n    result = getMongo(ID)\n    return jsonify(result)\n")),(0,l.kt)("p",null,"\u5728\u8bbf\u95ee\u65f6\uff0c\u53ea\u9700\u8981\u5728\u63a5\u53e3\u5730\u5740\u540e\u9762\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"/getname")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"/getclass")," \u5373\u53ef\u3002  "),(0,l.kt)("h2",{id:"\u6269\u5c55\u5e94\u7528"},"\u6269\u5c55\u5e94\u7528"),(0,l.kt)("p",null,"\u8fd9\u53ea\u662f\u6700\u7b80\u5355\u7684\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u57fa\u7840\u4e0a\u505a\u5f88\u591a\u4e8b\u60c5\u3002\u4f8b\u5982\uff1a  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 MongoDB \u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c\uff0c\u5b9e\u73b0\u6ce8\u518c\u3001\u767b\u5f55\u7b49\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u591a\u4e2a\u6570\u636e\u5b58\u50a8\u5230\u4e00\u4e2a\u96c6\u5408\u4e2d\uff0c\u5b9e\u73b0\u591a\u4e2a\u6570\u636e\u7684\u67e5\u8be2\u3002\u5982\u722c\u53d6\u7ed3\u679c\u3002")),(0,l.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43409302/article/details/85912717"},"\u817e\u8baf\u4e91\u670d\u52a1\u5668\u90e8\u7f72 Flask \u63a5\u53e3"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/1154/40495"},"\u817e\u8baf\u4e91 Serverless \u90e8\u7f72Flask\u63a5\u53e3"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/sdadx/p/10360208.html"},"Ubuntu Nginx \u90e8\u7f72 Flask \u63a5\u53e3"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_44406200/article/details/104117583"},"Windows Nginx \u90e8\u7f72 Flask \u63a5\u53e3"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://dev.to/andrewbaisden/how-to-deploy-a-python-flask-app-to-vercel-2o5k"},"Vercel \u90e8\u7f72 Flask \u63a5\u53e3")),(0,l.kt)("h2",{id:"\u5f00\u6e90\u6e90\u4ee3\u7801"},"\u5f00\u6e90\u6e90\u4ee3\u7801"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/inannan423/flask-mongodb-web"},"GitHub")))}m.isMDXComponent=!0}}]);
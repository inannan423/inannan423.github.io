"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[2414],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var r=a.createContext({}),p=function(n){var e=a.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=p(n.components);return a.createElement(r.Provider,{value:e},n.children)},v={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,i=n.originalType,r=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),d=p(t),m=l,u=d["".concat(r,".").concat(m)]||d[m]||v[m]||i;return t?a.createElement(u,o(o({ref:e},c),{},{components:t})):a.createElement(u,o({ref:e},c))}));function m(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=n,s.mdxType="string"==typeof n?n:l,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63468:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const i={title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1-\u6e90\u4ee3\u7801\u89e3\u8bfb",slug:"wxmini-source-code",date:new Date("2022-07-14T00:00:00.000Z"),authors:"Chengzihan",tags:["\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"]},o=void 0,s={unversionedId:"FrontEnd/WxMini/\u6e90\u4ee3\u7801\u89e3\u8bfb",id:"FrontEnd/WxMini/\u6e90\u4ee3\u7801\u89e3\u8bfb",title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1-\u6e90\u4ee3\u7801\u89e3\u8bfb",description:"\u5168\u5c40\u914d\u7f6e",source:"@site/docs/FrontEnd/03.WxMini/8.\u6e90\u4ee3\u7801\u89e3\u8bfb.md",sourceDirName:"FrontEnd/03.WxMini",slug:"/FrontEnd/WxMini/wxmini-source-code",permalink:"/docs/FrontEnd/WxMini/wxmini-source-code",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/FrontEnd/03.WxMini/8.\u6e90\u4ee3\u7801\u89e3\u8bfb.md",tags:[{label:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",permalink:"/docs/tags/\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"}],version:"current",sidebarPosition:8,frontMatter:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1-\u6e90\u4ee3\u7801\u89e3\u8bfb",slug:"wxmini-source-code",date:"2022-07-14T00:00:00.000Z",authors:"Chengzihan",tags:["\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"]},sidebar:"tutorialSidebar",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1-\u670d\u52a1\u5668\u6570\u636e\u4ea4\u4e92",permalink:"/docs/FrontEnd/WxMini/wxmini-server"},next:{title:"\u5b9e\u6218\uff1a\u4e91\u5f00\u53d1\u6570\u636e\u5e93",permalink:"/docs/FrontEnd/WxMini/DataBaseDemo"}},r={},p=[{value:"\u5168\u5c40\u914d\u7f6e",id:"\u5168\u5c40\u914d\u7f6e",level:2},{value:"app.json",id:"appjson",level:3},{value:"sitemap.json",id:"sitemapjson",level:3},{value:"app.js",id:"appjs",level:3},{value:"app.wxss",id:"appwxss",level:3},{value:"\u9875\u9762\u914d\u7f6e",id:"\u9875\u9762\u914d\u7f6e",level:2},{value:"\u4e3b\u9875-QA",id:"\u4e3b\u9875-qa",level:3},{value:"QA.json",id:"qajson",level:4},{value:"QA.wxml",id:"qawxml",level:4},{value:"QA.wxss",id:"qawxss",level:4},{value:"QA.js",id:"qajs",level:4},{value:"\u8868\u5355\u63d0\u4ea4\u9875\u9762",id:"\u8868\u5355\u63d0\u4ea4\u9875\u9762",level:3},{value:"form.wxml",id:"formwxml",level:4},{value:"form.js",id:"formjs",level:4}],c={toc:p};function v(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5168\u5c40\u914d\u7f6e"},"\u5168\u5c40\u914d\u7f6e"),(0,l.kt)("h3",{id:"appjson"},"app.json"),(0,l.kt)("p",null,"\u5168\u5c40\u9759\u6001\u914d\u7f6e\u6587\u4ef6\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "usingComponents": {\n    //\u5c0f\u7a0b\u5e8f\u5168\u5c40\u4f7f\u7528\u7684\u7ec4\u4ef6\n    "van-steps": "@vant/weapp/steps/index"  // vant\u8fdb\u5ea6\u6761\u7ec4\u4ef6\u58f0\u660e\n  },\n  "pages": [\n    //\u5c0f\u7a0b\u5e8f\u7684\u9875\u9762\u4fe1\u606f\n    "pages/QA/QA",  // \u7b2c\u4e00\u6761\u9ed8\u8ba4\u4e3a\u9996\u9875\n    "pages/form/form",\n    "pages/choose/choose",\n    "pages/success/success",\n    "pages/Feedback/Feedback"\n  ],\n  "window": {\n    // \u5168\u5c40\u7a97\u53e3\u548c\u5bfc\u822a\u680f\u7684\u6837\u5f0f\u4fe1\u606f\n    "backgroundTextStyle": "light", // \u4e0b\u62c9\u5237\u65b0\u6587\u5b57\u989c\u8272\n    "navigationBarBackgroundColor": "#fff", // \u5bfc\u822a\u680f\u80cc\u666f\u989c\u8272\n    "navigationBarTitleText": "\u5317\u6797\u8ba1\u534f",   // \u5bfc\u822a\u680f\u6587\u5b57\n    "navigationBarTextStyle": "black"   // \u5bfc\u822a\u680f\u6587\u5b57\u989c\u8272\n  },\n  "tabBar": {\n    //\u5e95\u90e8\u5bfc\u822a\u8bbe\u7f6e\n    "list": [\n      {\n        "pagePath": "pages/QA/QA",  // \u7b2c\u4e00\u4e2a\u9875\u9762\u4e3aQA\uff0c\u4e5f\u5c31\u662f\u95ee\u7b54\u9875\u9762\n        "text": "\u5e38\u89c1\u95ee\u9898", // Tabbar\u4e0b\u9762\u7684\u63cf\u8ff0\u6587\u5b57\n        "iconPath": "pages/images/QA-click.png",  //\u8bbe\u7f6e\u5f53\u524d\u5bfc\u822a\u7684Icon\u5730\u5740\n        "selectedIconPath": "pages/images/QA-noclick.png"   // \u9009\u4e2d\u540e\u7684Icon\u5730\u5740\n      },\n      {\n        "pagePath": "pages/choose/choose",\n        "text": "\u7ef4\u4fee\u7533\u8bf7",\n        "iconPath": "pages/images/form-click.png",\n        "selectedIconPath": "pages/images/form-noclick.png"\n      }\n    ]\n  },\n  "sitemapLocation": "sitemap.json"    // \u5fae\u4fe1\u7d22\u5f15\u6587\u4ef6\uff0c\u7528\u4e8e\u5728\u5fae\u4fe1\u5185\u641c\u7d22\u5c0f\u7a0b\u5e8f\n}\n')),(0,l.kt)("h3",{id:"sitemapjson"},"sitemap.json"),(0,l.kt)("p",null,"\u5fae\u4fe1\u641c\u7d22\u7d22\u5f15\u3002\u7528\u4e8e\u914d\u7f6e\u5728\u5fae\u4fe1\u4e2d\u641c\u7d22\u5c0f\u7a0b\u5e8f\u65f6\u5c55\u793a\u7684\u5185\u5bb9(\u4e0d\u91cd\u8981)\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "desc": "\u5173\u4e8e\u672c\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u6587\u6863 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",\n  "rules": [{\n  "action": "allow",\n  "page": "*"\n  }]\n}\n')),(0,l.kt)("h3",{id:"appjs"},"app.js"),(0,l.kt)("p",null,"\u5168\u5c40\u7684\u903b\u8f91\u51fd\u6570\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nApp({\n  onLaunch() {\n    // \u5c55\u793a\u672c\u5730\u5b58\u50a8\u80fd\u529b\n    const logs = wx.getStorageSync('logs') || []\n    logs.unshift(Date.now())\n    wx.setStorageSync('logs', logs)\n\n    // \u767b\u5f55\n    wx.login({\n      success: res => {\n        // \u53d1\u9001 res.code \u5230\u540e\u53f0\u6362\u53d6 openId, sessionKey, unionId\n      }\n    })\n  },\n  globalData: {\n    userInfo: null\n  }\n})\n\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u51b3\u5b9a\u4e86\u5c0f\u7a0b\u5e8f\u5728\u52a0\u8f7d\u65f6\u53cd\u9988\u672c\u5730\u5b58\u50a8\u80fd\u529b\uff0c\u5df2\u7ecf\u767b\u9646\u6210\u529f\u540e\u83b7\u53d6\u7528\u6237\u7684ID\u3002  "),(0,l.kt)("h3",{id:"appwxss"},"app.wxss"),(0,l.kt)("p",null,"\u5168\u5c40\u6837\u5f0f\uff0c\u5168\u5c40\u516c\u7528\u7684\u6837\u5f0f\u53ef\u4ee5\u653e\u5728\u8fd9\u91cc\uff0c\u5bf9\u6bcf\u4e2a\u9875\u9762\u90fd\u751f\u6548\u3002  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/**app.wxss**/\n.container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 200rpx 0;\n  box-sizing: border-box;\n} \n")),(0,l.kt)("h2",{id:"\u9875\u9762\u914d\u7f6e"},"\u9875\u9762\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u4e3b\u9875-qa"},"\u4e3b\u9875-QA"),(0,l.kt)("h4",{id:"qajson"},"QA.json"),(0,l.kt)("p",null,"\u6307\u51fa\u5728\u8fd9\u4e00\u754c\u9762\u4e2d\u7528\u5230\u7684vant\u7ec4\u4ef6\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "usingComponents": {\n    "van-collapse": "@vant/weapp/collapse/index",\n    "van-collapse-item": "@vant/weapp/collapse-item/index",\n    "van-tab": "@vant/weapp/tab/index",\n    "van-tabs": "@vant/weapp/tabs/index",\n    "van-icon": "@vant/weapp/icon/index"\n  }\n}\n')),(0,l.kt)("h4",{id:"qawxml"},"QA.wxml"),(0,l.kt)("p",null,"\u9875\u9762\u7684h5\u4ee3\u7801\uff0c\u521b\u5efa\u5143\u7d20\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/20220714143553.png",alt:"1"}),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\n<view class="part1">\n<van-icon class="icon0" name="question-o" />\n<view class="part0">\u5e38\u89c1\u95ee\u9898</view>\n  <van-collapse accordion value="{{ activeName }}" bind:change="onChange" >\n  <van-collapse-item title="\u6211\u7684\u7535\u8111C\u76d8\u5feb\u6ee1\u4e86\uff0c\u8be5\u600e\u4e48\u529e\uff1f" name="1">\n    <text>\xb7\xb7\xb7</text>\n  </van-collapse-item>\n\n  <van-collapse-item title="\u7b14\u8bb0\u672c\u73a9\u6e38\u620f\u6389\u5e27\u5361\u987f\u600e\u4e48\u529e\uff1f" name="2">\n  <text>\xb7\xb7\xb7</text>\n  </van-collapse-item>\n  <van-collapse-item title="\u6211\u7684\u7535\u8111\u8fde\u4e0d\u4e0a\u6821\u56ed\u7f51\u4e86\uff0c\u8be5\u600e\u4e48\u529e\uff1f" name="3">\n  <text>\xb7\xb7\xb7\n</text>\n  </van-collapse-item>\n  <van-collapse-item title="\u7535\u8111\u5185\u5b58\u5360\u7528\u8fc7\u9ad8" name="4">\n  <text>\xb7\xb7\xb7\n</text>\n  </van-collapse-item>\n</van-collapse>\n</view>\n\n<view class="box2">\n\n<van-icon class="icon0" name="label-o" />\n<view class="part0">\u95ee\u9898\u5bfc\u822a</view>\n<view class="part2">\n  <van-tabs class="tab" color="rgb(130, 240, 216)"  swipeable>\n    <van-tab color="#f2826a" title="\u5206\u7c7b1"class="tab-content">\n<van-collapse value="{{ activeNames }}" bind:change="onChange2">\n  <van-collapse-item title="\u7535\u8111\u7ecf\u5e38\u84dd\u5c4f\uff0c\u8be5\u600e\u4e48\u89e3\u51b3\uff1f" name="1">\n    <text> \xb7\xb7\xb7\n</text>\n  </van-collapse-item>\n  <van-collapse-item title="\u6b7b\u673a\u3001\u7cfb\u7edf\u81ea\u52a8\u91cd\u542f" name="2">\n    <text>\xb7\xb7\xb7</text>\n  </van-collapse-item>\n</van-collapse>\n    </van-tab>\n\n    <van-tab title="\u5206\u7c7b2" class="tab-content">\n<van-collapse value="{{ activeNames2 }}" bind:change="onChange3">\n  <van-collapse-item title="\u89e6\u63a7\u677f\u6545\u969c" name="1">\n    <text> \xb7\xb7\xb7 </text>\n  </van-collapse-item>\n  <van-collapse-item title="\u7535\u8111\u952e\u76d8\u5931\u7075\u600e\u4e48\u529e\uff1f" name="2">\n    <text>\xb7\xb7\xb7\n</text>\n  </van-collapse-item>\n</van-collapse>\n    </van-tab>\n\n    <van-tab title="\u5206\u7c7b3" class="tab-content">\n<van-collapse value="{{ activeNames3 }}" bind:change="onChange4">\n  <van-collapse-item title="\u5f00\u673a\u901f\u5ea6\u6162\u600e\u4e48\u529e\uff1f" name="1">\n    <text> \xb7\xb7\xb7\n</text>\n  </van-collapse-item>\n  <van-collapse-item title="\u7535\u8111\u5f88\u5361\u600e\u4e48\u529e\uff1f" name="2">\n    <text>\xb7\xb7\xb7\n</text>\n  </van-collapse-item>\n</van-collapse>\n    </van-tab>\n  </van-tabs>\n</view>\n</view>\n')),(0,l.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u5c06\u9875\u9762\u5206\u6210\u4e24\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u662f\u4e0a\u534a\u90e8\u5206\u7684\u6298\u53e0\u9762\u677f\u548c\u4e0b\u534a\u90e8\u5206\u7684\u6807\u7b7e\u9762\u677f+\u6298\u53e0\u9762\u677f\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://vant-contrib.gitee.io/vant-weapp/#/collapse"},"Vant\u6298\u53e0\u9762\u677f"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://vant-contrib.gitee.io/vant-weapp/#/tab"},"VantTab\u9762\u677f"),"  "),(0,l.kt)("h4",{id:"qawxss"},"QA.wxss"),(0,l.kt)("p",null,"\u89c4\u5b9a\u8be5\u9875\u9762\u7684\u6837\u5f0f\uff0c\u5404\u4e2a\u7ec4\u4ef6\u7684\u989c\u8272\u7b49\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"\n.part0{\n  margin:30rpx;\n  margin-left:38rpx;\n  margin-top:32rpx;\n  font-size:40rpx;\n  font-weight:400;\n  float:left;\n}\n.icon0{\n  width:40rpx;\n  height:40rpx;\n  float:left;\n  transform: scale(1.8);\n  margin-left: 40rpx;\n  margin-top: 40rpx;\n}\n\n.part1{\n  height:auto;\n  margin:15rpx;\n  width:auto;\n  clear:both;\n  margin-bottom: 100rpx;\n  background-color: rgb(130, 240, 216);\n  border-radius: 20rpx;\n}\n.van-cell{\n  background-color: rgb(224, 250, 244) !important;\n}\n.part2{\n height:auto;\n margin:50rpx;\n clear:both;\n}\n\n.tab-content{\n  margin:30rpx;\n}\n.van-collapse-item__content{\n  background-color: rgb(239, 253, 250) !important;\n}\n.box2{\n  /* background-color: rgb(130, 240, 216); */\n  margin: 15rpx;\n  border-radius: 20rpx;\n}\n.van-tabs{\n  width: 100%;\n  \n}\n.titlebox{\n  width: 100%;\n  display: block;\n}\n.tab{\n  padding: 0 !important;\n}\n")),(0,l.kt)("h4",{id:"qajs"},"QA.js"),(0,l.kt)("p",null,"\u7f16\u5199\u4e86\u672c\u9875\u9762\u7684\u903b\u8f91\uff1a  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  Page({\n\n  /**\n   * \u9875\u9762\u7684\u521d\u59cb\u6570\u636e\n   */\n  data: {\n    activeName: '0',    // \u521d\u59cb\u5316names\n    activeNames: ['0'],\n    activeNames2: ['0'],\n    activeNames3: ['0'],\n  },\n  onChange(event) {\n    //\u70b9\u51fb\u7b2c\u4e00\u4e2a\u4fbf\u7b7e\u65f6\u5c06\u6298\u53e0\u9762\u677f\u5207\u6362\u5230\u8fd9\u4e2a\u6807\u7b7e\u7684\u4f4d\u7f6e\n    this.setData({\n      activeName: event.detail,\n    });\n  },\n  onChange2(event) {\n    this.setData({\n      activeNames: event.detail,\n    });\n  },\n  onChange3(event) {\n    this.setData({\n      activeNames2: event.detail,\n    });\n  },\n  onChange4(event) {\n    this.setData({\n      activeNames3: event.detail,\n    });\n  }\n})\n")),(0,l.kt)("h3",{id:"\u8868\u5355\u63d0\u4ea4\u9875\u9762"},"\u8868\u5355\u63d0\u4ea4\u9875\u9762"),(0,l.kt)("h4",{id:"formwxml"},"form.wxml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<van-steps steps="{{ steps }}" active="{{ active }}" />\n\x3c!-- \u586b\u5199\u8fdb\u5ea6 --\x3e\n<van-divider contentPosition="left" fontSize="16" textColor="#1989fa">\u57fa\u672c\u4fe1\u606f</van-divider>\n\x3c!-- \u5206\u5272\u7ebf --\x3e\n<van-cell-group>\n    \x3c!-- \u5355\u5143\u683c\u7ec41\uff0c\u57fa\u672c\u4fe1\u606f --\x3e\n  <van-field\n    required\n    value="{{ username }}"\n    label="\u59d3\u540d"\n  />\n  \x3c!-- Field \u8f93\u5165\u6846 --\x3e\n  <van-field\n    required\n    value="{{ phone }}"\n    label="\u624b\u673a\u53f7"\n  />\n  <view wx:if="{{isStudent}}"> \n    <van-field\n      required\n      value="{{ id }}"\n      label="\u5b66\u53f7"\n    />\n    <van-field\n      required\n      value="{{ class }}"\n      label="\u73ed\u7ea7"\n    />\n  </view>\n</van-cell-group>\n\n<van-divider contentPosition="left" fontSize="16" textColor="#1989fa">\u7ef4\u4fee\u4fe1\u606f</van-divider>\n<van-cell-group>\n    \x3c!-- \u5355\u5143\u683c\u7ec42-\u7ef4\u4fee\u4fe1\u606f --\x3e\n  <van-field\n    value="{{ brand }}"\n    label="\u7535\u8111\u54c1\u724c"\n  />\n  <van-field\n    value="{{ modelnumber }}"\n    label="\u7535\u8111\u578b\u53f7"\n  />\n  <van-field\n      required\n      type = "textarea"\n      maxlength ="400"\n      show-word-limit\n      autosize\n      value="{{ description }}"\n      label="\u6545\u969c\u63cf\u8ff0"\n    />\n</van-cell-group>\n\n<van-divider contentPosition="left" fontSize="16" textColor="#1989fa">\u4e0a\u4f20\u6545\u969c\u7167\u7247</van-divider>\n<van-uploader\n  style="margin: 10px;"\n  file-list="{{ fileList }}"\n  bind:after-read="afterRead"\n  max-count="2"\n   />\n\n<view style="display:flex; flex-direction:row; min-height: 50px; padding: 10px; margin: 10px;">\n  <view style="flex: 4;"></view>\n  <van-button type="primary" size="normal" style=" flex: 2;" bind:click ="goSuccess">\u63d0\u4ea4</van-button>\n</view>\n')),(0,l.kt)("p",null,"\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://vant-contrib.gitee.io/vant-weapp/#/field"},"Field\u8f93\u5165\u6846"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://vant-contrib.gitee.io/vant-weapp/#/cell"},"Cell\u5355\u5143\u683c")),(0,l.kt)("h4",{id:"formjs"},"form.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Page({\n  data: {\n    name: '',   //\u521d\u59cb\u5316\u59d3\u540d\n    phone: '',  //\u521d\u59cb\u5316\u7535\u8bdd\u53f7\u7801\n    brand: '',  //\u521d\u59cb\u5316\u7535\u8111\u54c1\u724c\n    modelnumber: '',    //\u521d\u59cb\u5316\u7535\u8111\u578b\u53f7\n    description: '',    //\u521d\u59cb\u5316\u6545\u969c\u63cf\u8ff0\n    isStudent:false,    //\u521d\u59cb\u5316\uff0c\u662f\u5426\u662f\u5b66\u751f\uff0c\u5426\u5219\u662f\u8001\u5e08\n    id: '', //\u521d\u59cb\u5316\u5b66\u53f7\n    class: '',  //\u521d\u59cb\u5316\u73ed\u7ea7\n    fileList: [],   //\u521d\u59cb\u5316\u6587\u4ef6\u5217\u8868\n    steps: [\n      {\n        text: '\u9009\u62e9\u8eab\u4efd',   //\u8fdb\u5ea60\n        desc: '',\n      },\n      {\n        text: '\u586b\u5199\u4fe1\u606f',   //\u8fdb\u5ea61\n        desc: '',\n      },\n      {\n        text: '\u7533\u8bf7\u6210\u529f',   //\u8fdb\u5ea62\n        desc: '',\n      },\n    ],\n    active: ['1'],// \u8868\u660e\u5f53\u524d\u7684\u8fdb\u5ea6\u6761\u8fdb\u5ea6\u4e3a1\uff08\u4ece0\u5f00\u59cb\uff09\n  },\n  onChange(event) {\n    this.setData({\n      radio: event.detail,\n    });\n  },\n  afterRead(event) {\n    //\u8bfb\u53d6\u4e0a\u4f20\u7684\u56fe\u7247\n    const { file } = event.detail;\n    // \u5f53\u8bbe\u7f6e mutiple \u4e3a true \u65f6, file \u4e3a\u6570\u7ec4\u683c\u5f0f\uff0c\u5426\u5219\u4e3a\u5bf9\u8c61\u683c\u5f0f\n    wx.uploadFile({\n      url: 'https://example.weixin.qq.com/upload', // \u4ec5\u4e3a\u793a\u4f8b\uff0c\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n      filePath: file.url,\n      name: 'file',\n      formData: { user: 'test' },\n      success(res) {\n        // \u4e0a\u4f20\u5b8c\u6210\u9700\u8981\u66f4\u65b0 fileList\n        const { fileList = [] } = this.data;\n        fileList.push({ ...file, url: res.data });\n        this.setData({ fileList });\n      },\n    });\n  },\n \n  /**\n   * \u751f\u547d\u5468\u671f\u51fd\u6570--\u76d1\u542c\u9875\u9762\u52a0\u8f7d\n   */\n  onLoad: function (options) {\n    \n  },\n  goSuccess() {\n    wx.navigateTo({\n      url: '../success/success' //\u586b\u5199\u5b8c\u6bd5\u540e\u8df3\u8f6c\u5230\u6210\u529f\u754c\u9762\n    })\n  },\n})\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5176\u4ed6\u9875\u9762\u90fd\u5f88\u76f8\u4f3c\uff0c\u4e0d\u518d\u8d58\u8ff0\u3002")))}v.isMDXComponent=!0}}]);
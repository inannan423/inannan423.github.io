"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[5703],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(c,o(o({ref:e},s),{},{components:n})):a.createElement(c,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4601:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"Number \u548c Math \u7c7b",date:new Date("2022-07-28T00:00:00.000Z"),authors:"Chengzihan",tags:["Java"]},o=void 0,i={unversionedId:"\u540e\u7aef/Java/javanumber",id:"\u540e\u7aef/Java/javanumber",title:"Number \u548c Math \u7c7b",description:"Math \u7c7b",source:"@site/docs/\u540e\u7aef/Java/06.javanumber.md",sourceDirName:"\u540e\u7aef/Java",slug:"/\u540e\u7aef/Java/javanumber",permalink:"/docs/\u540e\u7aef/Java/javanumber",draft:!1,editUrl:"https://github.com/inannan423/inannan423.github.io/tree/main/docs/\u540e\u7aef/Java/06.javanumber.md",tags:[{label:"Java",permalink:"/docs/tags/java"}],version:"current",sidebarPosition:6,frontMatter:{title:"Number \u548c Math \u7c7b",date:"2022-07-28T00:00:00.000Z",authors:"Chengzihan",tags:["Java"]},sidebar:"tutorialSidebar",previous:{title:"\u5faa\u73af\u7ed3\u6784\u548c\u9009\u62e9\u7ed3\u6784",permalink:"/docs/\u540e\u7aef/Java/cycling"},next:{title:"Character \u7c7b",permalink:"/docs/\u540e\u7aef/Java/Character"}},p={},u=[{value:"Math \u7c7b",id:"math-\u7c7b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>xxxValue</code>",id:"xxxvalue",level:3},{value:"<code>compareTo</code>",id:"compareto",level:3},{value:"<code>equals</code>",id:"equals",level:3},{value:"<code>toString</code>",id:"tostring",level:3},{value:"<code>valueOf</code>",id:"valueof",level:3},{value:"<code>parseInt</code>",id:"parseint",level:3},{value:"<code>abs</code>",id:"abs",level:3},{value:"<code>ceil</code> \u548c <code>floor</code>",id:"ceil-\u548c-floor",level:3},{value:"<code>rint</code>",id:"rint",level:3},{value:"<code>round</code>",id:"round",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>exp</code>",id:"exp",level:3},{value:"<code>log</code>",id:"log",level:3},{value:"<code>pow</code>",id:"pow",level:3},{value:"<code>sqrt</code>",id:"sqrt",level:3},{value:"<code>sin</code>",id:"sin",level:3},{value:"<code>cos</code>",id:"cos",level:3},{value:"<code>tan</code>",id:"tan",level:3},{value:"<code>asin</code>",id:"asin",level:3},{value:"<code>acos</code>",id:"acos",level:3},{value:"<code>atan</code>",id:"atan",level:3},{value:"<code>toDegrees</code>",id:"todegrees",level:3},{value:"<code>toRadians</code>",id:"toradians",level:3},{value:"<code>random</code>",id:"random",level:3}],s={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"math-\u7c7b"},"Math \u7c7b"),(0,r.kt)("p",null,"Java \u7684 Math \u5305\u542b\u4e86\u7528\u4e8e\u6267\u884c\u57fa\u672c\u6570\u5b66\u8fd0\u7b97\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5982",(0,r.kt)("strong",{parentName:"p"},"\u521d\u7b49\u6307\u6570\u3001\u5bf9\u6570\u3001\u5e73\u65b9\u6839\u548c\u4e09\u89d2\u51fd\u6570"),"\u3002  "),(0,r.kt)("p",null,"Math \u7684\u65b9\u6cd5\u90fd\u88ab\u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," \u5f62\u5f0f\uff0c\u901a\u8fc7 Math \u7c7b\u53ef\u4ee5\u5728\u4e3b\u51fd\u6570\u4e2d\u76f4\u63a5\u8c03\u7528\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test {  \n    public static void main (String []args)  \n    {  \n        System.out.println("90 \u5ea6\u7684\u6b63\u5f26\u503c\uff1a" + Math.sin(Math.PI/2));  \n        System.out.println("0\u5ea6\u7684\u4f59\u5f26\u503c\uff1a" + Math.cos(0));  \n        System.out.println("60\u5ea6\u7684\u6b63\u5207\u503c\uff1a" + Math.tan(Math.PI/3));  \n        System.out.println("1\u7684\u53cd\u6b63\u5207\u503c\uff1a " + Math.atan(1));  \n        System.out.println("\u03c0/2\u7684\u89d2\u5ea6\u503c\uff1a" + Math.toDegrees(Math.PI/2));  \n        System.out.println(Math.PI);  \n    }  \n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"90 \u5ea6\u7684\u6b63\u5f26\u503c\uff1a1.0",(0,r.kt)("br",{parentName:"p"}),"\n","0\u5ea6\u7684\u4f59\u5f26\u503c\uff1a1.0",(0,r.kt)("br",{parentName:"p"}),"\n","60\u5ea6\u7684\u6b63\u5207\u503c\uff1a1.7320508075688767",(0,r.kt)("br",{parentName:"p"}),"\n","1\u7684\u53cd\u6b63\u5207\u503c\uff1a 0.7853981633974483",(0,r.kt)("br",{parentName:"p"}),"\n","\u03c0/2\u7684\u89d2\u5ea6\u503c\uff1a90.0",(0,r.kt)("br",{parentName:"p"}),"\n","3.141592653589793  ")),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"xxxvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"xxxValue")),(0,r.kt)("p",null,"xxxValue() \u65b9\u6cd5\u7528\u4e8e\u5c06 Number \u5bf9\u8c61\u8f6c\u6362\u4e3a xxx \u6570\u636e\u7c7b\u578b\u7684\u503c\u5e76\u8fd4\u56de\u3002  "),(0,r.kt)("p",null,"\u76f8\u5173\u7684\u65b9\u6cd5\u6709\uff1a  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5\u53ca\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"byte"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"byteValue()")," :\u4ee5 byte \u5f62\u5f0f\u8fd4\u56de\u6307\u5b9a\u7684\u6570\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"abstract double"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"doubleValue()")," :\u4ee5 double \u5f62\u5f0f\u8fd4\u56de\u6307\u5b9a\u7684\u6570\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"abstract float"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"floatValue()")," :\u4ee5 float \u5f62\u5f0f\u8fd4\u56de\u6307\u5b9a\u7684\u6570\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"abstract int"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"intValue()")," :\u4ee5 int \u5f62\u5f0f\u8fd4\u56de\u6307\u5b9a\u7684\u6570\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"abstract long"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"longValue()")," :\u4ee5 long \u5f62\u5f0f\u8fd4\u56de\u6307\u5b9a\u7684\u6570\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"short"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"shortValue()")," :\u4ee5 short \u5f62\u5f0f\u8fd4\u56de\u6307\u5b9a\u7684\u6570\u503c\u3002")))),(0,r.kt)("p",null,"\u5b9e\u4f8b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{ \n \n   public static void main(String args[]){\n      Integer x = 5;\n      // \u8fd4\u56de byte \u539f\u751f\u6570\u636e\u7c7b\u578b\n      System.out.println( x.byteValue() );\n \n      // \u8fd4\u56de double \u539f\u751f\u6570\u636e\u7c7b\u578b\n      System.out.println(x.doubleValue());\n \n      // \u8fd4\u56de long \u539f\u751f\u6570\u636e\u7c7b\u578b\n      System.out.println( x.longValue() );      \n   }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"5",(0,r.kt)("br",{parentName:"p"}),"\n","5.0",(0,r.kt)("br",{parentName:"p"}),"\n","5")),(0,r.kt)("h3",{id:"compareto"},(0,r.kt)("inlineCode",{parentName:"h3"},"compareTo")),(0,r.kt)("p",null,"compareTo() \u65b9\u6cd5\u7528\u4e8e\u5c06 Number \u5bf9\u8c61\u4e0e\u65b9\u6cd5\u7684\u53c2\u6570\u8fdb\u884c\u6bd4\u8f83\u3002\u53ef\u7528\u4e8e\u6bd4\u8f83 Byte, Long, Integer\u7b49\u3002  "),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u4e24\u4e2a\u76f8\u540c\u6570\u636e\u7c7b\u578b\u7684\u6bd4\u8f83\uff0c\u4e24\u4e2a\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u4e0d\u80fd\u7528\u6b64\u65b9\u6cd5\u6765\u6bd4\u8f83\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"public int compareTo( NumberSubClass referenceName )")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"  "),(0,r.kt)("p",null,"referenceName -- \u53ef\u4ee5\u662f\u4e00\u4e2a Byte, Double, Integer, Float, Long \u6216 Short \u7c7b\u578b\u7684\u53c2\u6570\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u7684\u6570\u4e0e\u53c2\u6570\u76f8\u7b49\u8fd4\u56de 0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u7684\u6570\u5c0f\u4e8e\u53c2\u6570\u8fd4\u56de -1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u7684\u6570\u5927\u4e8e\u53c2\u6570\u8fd4\u56de 1\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{ \n   public static void main(String args[]){\n      Integer x = 5;\n      System.out.println(x.compareTo(3));\n      System.out.println(x.compareTo(5));\n      System.out.println(x.compareTo(8));            \n     }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"1",(0,r.kt)("br",{parentName:"p"}),"\n","0",(0,r.kt)("br",{parentName:"p"}),"\n","-1")),(0,r.kt)("h3",{id:"equals"},(0,r.kt)("inlineCode",{parentName:"h3"},"equals")),(0,r.kt)("p",null,"equals() \u65b9\u6cd5\u7528\u4e8e\u5224\u65ad Number \u5bf9\u8c61\u4e0e\u65b9\u6cd5\u7684\u53c2\u6570\u8fdb\u662f\u5426\u76f8\u7b49\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"  "),(0,r.kt)("p",null,"o -- \u4efb\u4f55\u5bf9\u8c61\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),"  "),(0,r.kt)("p",null,"\u5982 Number \u5bf9\u8c61\u4e0d\u4e3a Null\uff0c\u4e14\u4e0e\u65b9\u6cd5\u7684\u53c2\u6570\u7c7b\u578b\u4e0e\u6570\u503c\u90fd\u76f8\u7b49\u8fd4\u56de True\uff0c\u5426\u5219\u8fd4\u56de False\u3002  "),(0,r.kt)("p",null,"Double \u548c Float \u5bf9\u8c61\u8fd8\u6709\u4e00\u4e9b\u989d\u5916\u7684\u6761\u4ef6\uff0c\u53ef\u4ee5\u53c2\u9605 API \u624b\u518c\uff1aJDK 1.6\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n        public static void main(String args[]){\n                Integer x = 5;\n                Integer y = 10;\n                Integer z =5;\n                Short a = 5;\n\n                System.out.println(x.equals(y));  \n                System.out.println(x.equals(z));\n                System.out.println(x.equals(a));\n        }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"false",(0,r.kt)("br",{parentName:"p"}),"\n","true",(0,r.kt)("br",{parentName:"p"}),"\n","false")),(0,r.kt)("h3",{id:"tostring"},(0,r.kt)("inlineCode",{parentName:"h3"},"toString")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        Integer x = 5;\n        System.out.println(x.toString());  \n        System.out.println(Integer.toString(12)); \n        //\u8f93\u51fa\u7684\u7ed3\u679c\u4e3a 5 /n 12 /n\n    }\n}\n")),(0,r.kt)("h3",{id:"valueof"},(0,r.kt)("inlineCode",{parentName:"h3"},"valueOf")),(0,r.kt)("p",null,"valueOf() \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de\u7ed9\u5b9a\u53c2\u6570\u7684\u539f\u751f Number \u5bf9\u8c61\u503c\uff0c\u53c2\u6570\u53ef\u4ee5\u662f\u539f\u751f\u6570\u636e\u7c7b\u578b, String\u7b49\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8be5\u65b9\u6cd5\u662f\u9759\u6001\u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\u4e00\u4e2a\u662f\u5b57\u7b26\u4e32\uff0c\u4e00\u4e2a\u662f\u57fa\u6570\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"static Integer valueOf(int i)",(0,r.kt)("br",{parentName:"p"}),"\n","static Integer valueOf(String s)",(0,r.kt)("br",{parentName:"p"}),"\n","static Integer valueOf(String s, int radix)  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"  "),(0,r.kt)("p",null,"i -- Integer \u5bf9\u8c61\u7684\u6574\u6570\u3002  "),(0,r.kt)("p",null,"s -- Integer \u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u3002  "),(0,r.kt)("p",null,"radix --\u5728\u89e3\u6790\u5b57\u7b26\u4e32 s \u65f6\u4f7f\u7528\u7684\u8fdb\u5236\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u4f7f\u7528\u7684\u8fdb\u5236\u6570\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),"  "),(0,r.kt)("p",null,"Integer valueOf(int i)\uff1a\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u6307\u5b9a\u7684 int \u503c\u7684 Integer \u5b9e\u4f8b\u3002  "),(0,r.kt)("p",null,"Integer valueOf(String s):\u8fd4\u56de\u4fdd\u5b58\u6307\u5b9a\u7684 String \u7684\u503c\u7684 Integer \u5bf9\u8c61\u3002  "),(0,r.kt)("p",null,"Integer valueOf(String s, int radix): \u8fd4\u56de\u4e00\u4e2a Integer \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u4e86\u7528\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63d0\u4f9b\u7684\u57fa\u6570\u8fdb\u884c\u89e3\u6790\u65f6\u4ece\u6307\u5b9a\u7684 String \u4e2d\u63d0\u53d6\u7684\u503c\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{\npublic static void main(String args[]){\n                Integer x =Integer.valueOf(9);\n                Double c = Double.valueOf(5);\n                Float a = Float.valueOf("80");              \n\n                Integer b = Integer.valueOf("444",16);   // \u4f7f\u7528 16 \u8fdb\u5236\n\n                System.out.println(x);\n                System.out.println(c);\n                System.out.println(a);\n                System.out.println(b);\n        }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"9",(0,r.kt)("br",{parentName:"p"}),"\n","5.0",(0,r.kt)("br",{parentName:"p"}),"\n","80.0",(0,r.kt)("br",{parentName:"p"}),"\n","1092")),(0,r.kt)("h3",{id:"parseint"},(0,r.kt)("inlineCode",{parentName:"h3"},"parseInt")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," \u65b9\u6cd5\u7528\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u5c06\u5b57\u7b26\u4e32\u53c2\u6570\u4f5c\u4e3a\u6709\u7b26\u53f7\u7684\u5341\u8fdb\u5236\u6574\u6570"),"\u8fdb\u884c\u89e3\u6790\u3002  "),(0,r.kt)("p",null,"\u5982\u679c\u65b9\u6cd5\u6709\u4e24\u4e2a\u53c2\u6570\uff0c \u4f7f\u7528\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6307\u5b9a\u7684\u57fa\u6570\uff0c\u5c06\u5b57\u7b26\u4e32\u53c2\u6570\u89e3\u6790\u4e3a\u6709\u7b26\u53f7\u7684\u6574\u6570\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"static int parseInt(String s)",(0,r.kt)("br",{parentName:"p"}),"\n","static int parseInt(String s, int radix)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"  "),(0,r.kt)("p",null,"s -- \u5341\u8fdb\u5236\u8868\u793a\u7684\u5b57\u7b26\u4e32\u3002  "),(0,r.kt)("p",null,"radix -- \u6307\u5b9a\u7684\u57fa\u6570\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),"  "),(0,r.kt)("p",null,"parseInt(String s): \u8fd4\u56de\u7528\u5341\u8fdb\u5236\u53c2\u6570\u8868\u793a\u7684\u6574\u6570\u503c\u3002  "),(0,r.kt)("p",null,"parseInt(int i): \u4f7f\u7528\u6307\u5b9a\u57fa\u6570\u7684\u5b57\u7b26\u4e32\u53c2\u6570\u8868\u793a\u7684\u6574\u6570 (\u57fa\u6570\u53ef\u4ee5\u662f 10, 2, 8, \u6216 16 \u7b49\u8fdb\u5236\u6570) \u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{\n    public static void main(String args[]){\n        int x =Integer.parseInt("9");\n        double c = Double.parseDouble("5");\n        int b = Integer.parseInt("444",16);\n\n        System.out.println(x);\n        System.out.println(c);\n        System.out.println(b);\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"9",(0,r.kt)("br",{parentName:"p"}),"\n","5.0",(0,r.kt)("br",{parentName:"p"}),"\n","1092")),(0,r.kt)("h3",{id:"abs"},(0,r.kt)("inlineCode",{parentName:"h3"},"abs")),(0,r.kt)("p",null,"\u53d6\u7edd\u5bf9\u503c\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        Integer a = -8;\n        double d = -100;\n        float f = -90f;    \n                                               \n        System.out.println(Math.abs(a));\n        System.out.println(Math.abs(d));    \n        System.out.println(Math.abs(f));    \n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"8",(0,r.kt)("br",{parentName:"p"}),"\n","100.0",(0,r.kt)("br",{parentName:"p"}),"\n","90.0")),(0,r.kt)("h3",{id:"ceil-\u548c-floor"},(0,r.kt)("inlineCode",{parentName:"h3"},"ceil")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h3"},"floor")),(0,r.kt)("p",null,"ceil() \u65b9\u6cd5\u53ef\u5bf9\u4e00\u4e2a\u6570\u8fdb\u884c\u4e0a\u820d\u5165\uff0c\u8fd4\u56de\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u7ed9\u5b9a\u7684\u53c2\u6570\uff0c\u7c7b\u578b\u4e3a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u578b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","floor() \u65b9\u6cd5\u53ef\u5bf9\u4e00\u4e2a\u6570\u8fdb\u884c\u4e0b\u820d\u5165\uff0c\u8fd4\u56de\u7ed9\u5b9a\u53c2\u6570\u6700\u5927\u7684\u6574\u6570\uff0c\u8be5\u6574\u6570\u5c0f\u4e8e\u6216\u7b49\u7ed9\u5b9a\u7684\u53c2\u6570\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double ceil(double d)",(0,r.kt)("br",{parentName:"p"}),"\n","double ceil(float f)",(0,r.kt)("br",{parentName:"p"}),"\n","double floor(double d)",(0,r.kt)("br",{parentName:"p"}),"\n","double floor(float f)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),(0,r.kt)("br",{parentName:"p"}),"\n","double \u6216 float \u7684\u539f\u751f\u6570\u636e\u7c7b\u578b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),(0,r.kt)("br",{parentName:"p"}),"\n","\u8fd4\u56de double \u7c7b\u578b\uff0c\u8fd4\u56de\u503c\u5927\u4e8e\u6216\u7b49\u4e8e(\u5c0f\u4e8e\u6216\u7b49\u4e8e\uff09\u7ed9\u5b9a\u7684\u53c2\u6570\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        double d = 100.675;\n        float f = -90;    \n \n        System.out.println(Math.ceil(d));\n        System.out.println(Math.ceil(f)); \n                     \n        System.out.println(Math.floor(d));\n        System.out.println(Math.floor(f)); \n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"101.0",(0,r.kt)("br",{parentName:"p"}),"\n","-90.0",(0,r.kt)("br",{parentName:"p"}),"\n","100.0",(0,r.kt)("br",{parentName:"p"}),"\n","-90.0")),(0,r.kt)("h3",{id:"rint"},(0,r.kt)("inlineCode",{parentName:"h3"},"rint")),(0,r.kt)("p",null,"rint() \u65b9\u6cd5\u8fd4\u56de\u6700\u63a5\u8fd1\u53c2\u6570\u7684\u6574\u6570\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bed\u6cd5"),(0,r.kt)("br",{parentName:"p"}),"\n","\u8be5\u65b9\u6cd5\u6709\u4ee5\u4e0b\u51e0\u79cd\u8bed\u6cd5\u683c\u5f0f\uff1a  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double rint(double d)  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),(0,r.kt)("br",{parentName:"p"}),"\n","double \u7c7b\u578b\u6570\u636e\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),(0,r.kt)("br",{parentName:"p"}),"\n","\u8fd4\u56de double \u7c7b\u578b\u6570\u7ec4\uff0c\u662f\u6700\u63a5\u8fd1\u53c2\u6570\u7684\u6574\u6570\u503c\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        double d = 100.675;\n        double e = 100.500;\n        double f = 100.200;\n \n        System.out.println(Math.rint(d));\n        System.out.println(Math.rint(e)); \n        System.out.println(Math.rint(f)); \n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"101.0",(0,r.kt)("br",{parentName:"p"}),"\n","100.0",(0,r.kt)("br",{parentName:"p"}),"\n","100.0")),(0,r.kt)("h3",{id:"round"},(0,r.kt)("inlineCode",{parentName:"h3"},"round")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"round()")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6700\u63a5\u8fd1\u7684 ",(0,r.kt)("strong",{parentName:"p"},"int\u3001long")," \u578b\u503c\uff0c\u56db\u820d\u4e94\u5165\u3002  "),(0,r.kt)("p",null,'round \u8868\u793a"\u56db\u820d\u4e94\u5165"\uff0c\u7b97\u6cd5\u4e3a ',(0,r.kt)("inlineCode",{parentName:"p"},"Math.floor(x+0.5)")," \uff0c\u5373\u5c06\u539f\u6765\u7684\u6570\u5b57\u52a0\u4e0a 0.5 \u540e\u518d\u5411\u4e0b\u53d6\u6574\uff0c\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.round(11.5)")," \u7684\u7ed3\u679c\u4e3a 12\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Math.round(-11.5)")," \u7684\u7ed3\u679c\u4e3a -11\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bed\u6cd5"),(0,r.kt)("br",{parentName:"p"}),"\n","\u8be5\u65b9\u6cd5\u6709\u4ee5\u4e0b\u51e0\u79cd\u8bed\u6cd5\u683c\u5f0f\uff1a  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"long round(double d)",(0,r.kt)("br",{parentName:"p"}),"\n","int round(float f)  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),(0,r.kt)("br",{parentName:"p"}),"\n","d -- double \u6216 float \u7684\u539f\u751f\u6570\u636e\u7c7b\u578b",(0,r.kt)("br",{parentName:"p"}),"\n","f -- float \u539f\u751f\u6570\u636e\u7c7b\u578b  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),(0,r.kt)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u4e00\u4e2a\u6700\u63a5\u8fd1\u7684int\u3001long\u578b\u503c\uff0c\u65b9\u6cd5\u4f1a\u6307\u5b9a\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        double d = 100.675;\n        double e = 100.500;\n        float f = 100;\n        float g = 90f;\n \n        System.out.println(Math.round(d));\n        System.out.println(Math.round(e)); \n        System.out.println(Math.round(f)); \n        System.out.println(Math.round(g)); \n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"101",(0,r.kt)("br",{parentName:"p"}),"\n","101",(0,r.kt)("br",{parentName:"p"}),"\n","100",(0,r.kt)("br",{parentName:"p"}),"\n","90")),(0,r.kt)("h3",{id:"min"},(0,r.kt)("inlineCode",{parentName:"h3"},"min")),(0,r.kt)("p",null,"\u8fd4\u56de\u6700\u5c0f\u503c\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double min(double arg1, double arg2)",(0,r.kt)("br",{parentName:"p"}),"\n","float min(float arg1, float arg2)",(0,r.kt)("br",{parentName:"p"}),"\n","int min(int arg1, int arg2)",(0,r.kt)("br",{parentName:"p"}),"\n","long min(long arg1, long arg2)  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        System.out.println(Math.min(12.123, 12.456));      \n        System.out.println(Math.min(23.12, 23.0));  \n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"12.123",(0,r.kt)("br",{parentName:"p"}),"\n","23.0")),(0,r.kt)("h3",{id:"max"},(0,r.kt)("inlineCode",{parentName:"h3"},"max")),(0,r.kt)("p",null,"\u8fd4\u56de\u6700\u5927\u503c\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double max(double arg1, double arg2)",(0,r.kt)("br",{parentName:"p"}),"\n","float max(float arg1, float arg2)",(0,r.kt)("br",{parentName:"p"}),"\n","int max(int arg1, int arg2)",(0,r.kt)("br",{parentName:"p"}),"\n","long max(long arg1, long arg2)  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        System.out.println(Math.max(12.123, 18.456));      \n        System.out.println(Math.max(23.12, 23.0));  \n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"18.456",(0,r.kt)("br",{parentName:"p"}),"\n","23.12  ")),(0,r.kt)("h3",{id:"exp"},(0,r.kt)("inlineCode",{parentName:"h3"},"exp")),(0,r.kt)("p",null,"exp() \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de\u81ea\u7136\u6570\u5e95\u6570e\u7684\u53c2\u6570\u6b21\u65b9\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double exp(double d)  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{ \n    public static void main(String args[]){\n        double x = 11.635;\n        double y = 2.76;\n\n        System.out.printf("e \u7684\u503c\u4e3a %.4f%n", Math.E);\n        System.out.printf("exp(%.3f) \u4e3a %.3f%n", x, Math.exp(x));  \n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"e \u7684\u503c\u4e3a 2.7183",(0,r.kt)("br",{parentName:"p"}),"\n","exp(11.635) \u4e3a 112983.831  ")),(0,r.kt)("h3",{id:"log"},(0,r.kt)("inlineCode",{parentName:"h3"},"log")),(0,r.kt)("p",null,"\u53d6\u5bf9\u6570\u503c\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double log(double d)  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{\n    public static void main(String args[]){\n        double x = 11.635;\n        double y = 2.76;\n\n        System.out.printf("e \u7684\u503c\u4e3a %.4f%n", Math.E);\n        System.out.printf("log(%.3f) \u4e3a %.3f%n", x, Math.log(x));\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"e \u7684\u503c\u4e3a 2.7183",(0,r.kt)("br",{parentName:"p"}),"\n","log(11.635) \u4e3a 2.454  ")),(0,r.kt)("h3",{id:"pow"},(0,r.kt)("inlineCode",{parentName:"h3"},"pow")),(0,r.kt)("p",null,"pow() \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6b21\u65b9"),"\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double pow(double base, double exponent)  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"base -- \u4efb\u4f55\u539f\u751f\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"exponent -- \u4efb\u4f55\u539f\u751f\u6570\u636e\u7c7b\u578b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{\n    public static void main(String args[]){\n        double x = 11.635;\n        double y = 2.76;\n\n        System.out.printf("e \u7684\u503c\u4e3a %.4f%n", Math.E);\n        System.out.printf("pow(%.3f, %.3f) \u4e3a %.3f%n", x, y, Math.pow(x, y));\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"e \u7684\u503c\u4e3a 2.7183",(0,r.kt)("br",{parentName:"p"}),"\n","pow(11.635, 2.760) \u4e3a 874.008")),(0,r.kt)("h3",{id:"sqrt"},(0,r.kt)("inlineCode",{parentName:"h3"},"sqrt")),(0,r.kt)("p",null,"\u5f00\u65b9\u3002  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"double sqrt(double d)  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{ \n    public static void main(String args[]){\n        double x = 11.635;\n        double y = 2.76;\n\n        System.out.printf("e \u7684\u503c\u4e3a %.4f%n", Math.E);\n        System.out.printf("sqrt(%.3f) \u4e3a %.3f%n", x, Math.sqrt(x));\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"e \u7684\u503c\u4e3a 2.7183",(0,r.kt)("br",{parentName:"p"}),"\n","sqrt(11.635) \u4e3a 3.411")),(0,r.kt)("h3",{id:"sin"},(0,r.kt)("inlineCode",{parentName:"h3"},"sin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{\n    public static void main(String args[]){\n    \n        double degrees = 45.0;\n        double radians = Math.toRadians(degrees);\n\n        System.out.format("pi \u7684\u503c\u4e3a %.4f%n", Math.PI);\n        System.out.format("%.1f \u5ea6\u7684\u6b63\u5f26\u503c\u4e3a %.4f%n", degrees, Math.sin(radians));\n\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pi \u7684\u503c\u4e3a 3.1416",(0,r.kt)("br",{parentName:"p"}),"\n","45.0 \u5ea6\u7684\u6b63\u5f26\u503c\u4e3a 0.7071")),(0,r.kt)("h3",{id:"cos"},(0,r.kt)("inlineCode",{parentName:"h3"},"cos")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{ \n    public static void main(String args[]){\n    \n        double degrees = 45.0;\n        double radians = Math.toRadians(degrees);\n\n        System.out.format("pi \u7684\u503c\u4e3a %.4f%n", Math.PI);\n        System.out.format("%.1f \u5ea6\u7684\u4f59\u5f26\u503c\u4e3a %.4f%n", degrees, Math.cos(radians));\n\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pi \u7684\u503c\u4e3a 3.1416",(0,r.kt)("br",{parentName:"p"}),"\n","45.0 \u5ea6\u7684\u4f59\u5f26\u503c\u4e3a 0.7071")),(0,r.kt)("h3",{id:"tan"},(0,r.kt)("inlineCode",{parentName:"h3"},"tan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{\n    public static void main(String args[]){\n\n        double degrees = 45.0;\n        double radians = Math.toRadians(degrees);\n\n        System.out.format("pi \u7684\u503c\u4e3a %.4f%n", Math.PI);\n        System.out.format("%.1f \u5ea6\u7684\u6b63\u5207\u503c\u662f %.4f%n", degrees, Math.tan(radians));\n\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pi \u7684\u503c\u4e3a 3.1416",(0,r.kt)("br",{parentName:"p"}),"\n","45.0 \u5ea6\u7684\u6b63\u5207\u503c\u662f 1.0000")),(0,r.kt)("h3",{id:"asin"},(0,r.kt)("inlineCode",{parentName:"h3"},"asin")),(0,r.kt)("p",null,"asin() \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de\u6307\u5b9adouble\u7c7b\u578b\u53c2\u6570\u7684\u53cd\u6b63\u5f26\u503c\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{ \n    public static void main(String args[]){\n\n        double degrees = 45.0;\n        double radians = Math.toRadians(degrees);\n\n        System.out.format("pi \u7684\u503c\u4e3a %.4f%n", Math.PI);\n        System.out.format("%.4f \u7684\u53cd\u6b63\u5f26\u503c\u4e3a %.4f \u5ea6 %n", Math.sin(radians), Math.toDegrees(Math.asin(Math.sin(radians))));\n\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pi \u7684\u503c\u4e3a 3.1416",(0,r.kt)("br",{parentName:"p"}),"\n","0.7071 \u7684\u53cd\u6b63\u5f26\u503c\u4e3a 45.0000 \u5ea6")),(0,r.kt)("h3",{id:"acos"},(0,r.kt)("inlineCode",{parentName:"h3"},"acos")),(0,r.kt)("p",null,"acos() \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de\u6307\u5b9a double \u7c7b\u578b\u53c2\u6570\u7684\u53cd\u4f59\u5f26\u503c\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class RunoobTest {\n    public static void main(String args[]){\n\n        double degrees = 45.0;\n        double radians = Math.toRadians(degrees);\n\n        System.out.format("pi \u7684\u503c\u4e3a %.4f%n", Math.PI);\n        System.out.format("%.4f \u7684\u53cd\u4f59\u5f26\u503c\u4e3a %.4f \u5ea6 %n", Math.cos(radians), Math.toDegrees(Math.acos(Math.sin(radians))));\n\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pi \u7684\u503c\u4e3a 3.1416",(0,r.kt)("br",{parentName:"p"}),"\n","0.7071 \u7684\u53cd\u4f59\u5f26\u503c\u4e3a 45.0000 \u5ea6")),(0,r.kt)("h3",{id:"atan"},(0,r.kt)("inlineCode",{parentName:"h3"},"atan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test{ \n    public static void main(String args[]){\n\n        double degrees = 45.0;\n        double radians = Math.toRadians(degrees);\n\n        System.out.format("pi \u7684\u503c\u4e3a %.4f%n", Math.PI);\n        System.out.format("%.4f \u7684\u53cd\u6b63\u5207\u503c %.4f \u5ea6 %n", Math.cos(radians), Math.toDegrees(Math.atan(Math.sin(radians))));\n\n    }\n}\n')),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pi \u7684\u503c\u4e3a 3.1416",(0,r.kt)("br",{parentName:"p"}),"\n","0.7071 \u7684\u53cd\u6b63\u5207\u503c 35.2644 \u5ea6")),(0,r.kt)("h3",{id:"todegrees"},(0,r.kt)("inlineCode",{parentName:"h3"},"toDegrees")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        double x = 45.0;\n        double y = 30.0;\n\n        System.out.println( Math.toDegrees(x) );\n        System.out.println( Math.toDegrees(y) );\n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"2578.3100780887044",(0,r.kt)("br",{parentName:"p"}),"\n","1718.8733853924698")),(0,r.kt)("h3",{id:"toradians"},(0,r.kt)("inlineCode",{parentName:"h3"},"toRadians")),(0,r.kt)("p",null,"toRadians() \u65b9\u6cd5\u7528\u4e8e\u5c06\u89d2\u5ea6\u8f6c\u6362\u4e3a\u5f27\u5ea6\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        double x = 45.0;\n        double y = 30.0;\n\n        System.out.println( Math.toRadians(x) );\n        System.out.println( Math.toRadians(y) );\n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"0.7853981633974483",(0,r.kt)("br",{parentName:"p"}),"\n","0.5235987755982988")),(0,r.kt)("h3",{id:"random"},(0,r.kt)("inlineCode",{parentName:"h3"},"random")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u6570\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test{\n    public static void main(String args[]){\n        System.out.println( Math.random() );\n        System.out.println( Math.random() );\n    }\n}\n")),(0,r.kt)("admonition",{title:"res",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"0.5444085967267008",(0,r.kt)("br",{parentName:"p"}),"\n","0.7960235983184115")))}m.isMDXComponent=!0}}]);
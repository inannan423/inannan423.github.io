(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[6767],{8874:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:(e,r,t)=>{var n=t(8874),a=t(6851),o=Object.hasOwnProperty,l=Object.create(null);for(var s in n)o.call(n,s)&&(l[n[s]]=s);var i=e.exports={to:{},get:{}};function h(e,r,t){return Math.min(Math.max(r,e),t)}function c(e){var r=Math.round(e).toString(16).toUpperCase();return r.length<2?"0"+r:r}i.get=function(e){var r,t;switch(e.substring(0,3).toLowerCase()){case"hsl":r=i.get.hsl(e),t="hsl";break;case"hwb":r=i.get.hwb(e),t="hwb";break;default:r=i.get.rgb(e),t="rgb"}return r?{model:t,value:r}:null},i.get.rgb=function(e){if(!e)return null;var r,t,a,l=[0,0,0,1];if(r=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=r[2],r=r[1],t=0;t<3;t++){var s=2*t;l[t]=parseInt(r.slice(s,s+2),16)}a&&(l[3]=parseInt(a,16)/255)}else if(r=e.match(/^#([a-f0-9]{3,4})$/i)){for(a=(r=r[1])[3],t=0;t<3;t++)l[t]=parseInt(r[t]+r[t],16);a&&(l[3]=parseInt(a+a,16)/255)}else if(r=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(t=0;t<3;t++)l[t]=parseInt(r[t+1],0);r[4]&&(r[5]?l[3]=.01*parseFloat(r[4]):l[3]=parseFloat(r[4]))}else{if(!(r=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(r=e.match(/^(\w+)$/))?"transparent"===r[1]?[0,0,0,0]:o.call(n,r[1])?((l=n[r[1]])[3]=1,l):null:null;for(t=0;t<3;t++)l[t]=Math.round(2.55*parseFloat(r[t+1]));r[4]&&(r[5]?l[3]=.01*parseFloat(r[4]):l[3]=parseFloat(r[4]))}for(t=0;t<3;t++)l[t]=h(l[t],0,255);return l[3]=h(l[3],0,1),l},i.get.hsl=function(e){if(!e)return null;var r=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(r){var t=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,h(parseFloat(r[2]),0,100),h(parseFloat(r[3]),0,100),h(isNaN(t)?1:t,0,1)]}return null},i.get.hwb=function(e){if(!e)return null;var r=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(r){var t=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,h(parseFloat(r[2]),0,100),h(parseFloat(r[3]),0,100),h(isNaN(t)?1:t,0,1)]}return null},i.to.hex=function(){var e=a(arguments);return"#"+c(e[0])+c(e[1])+c(e[2])+(e[3]<1?c(Math.round(255*e[3])):"")},i.to.rgb=function(){var e=a(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},i.to.rgb.percent=function(){var e=a(arguments),r=Math.round(e[0]/255*100),t=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+r+"%, "+t+"%, "+n+"%)":"rgba("+r+"%, "+t+"%, "+n+"%, "+e[3]+")"},i.to.hsl=function(){var e=a(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},i.to.hwb=function(){var e=a(arguments),r="";return e.length>=4&&1!==e[3]&&(r=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+r+")"},i.to.keyword=function(e){return l[e.slice(0,3)]}},6767:(e,r,t)=>{const n=t(9818),a=t(978),o=["keyword","gray","hex"],l={};for(const d of Object.keys(a))l[[...a[d].labels].sort().join("")]=d;const s={};function i(e,r){if(!(this instanceof i))return new i(e,r);if(r&&r in o&&(r=null),r&&!(r in a))throw new Error("Unknown model: "+r);let t,h;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof i)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if("string"==typeof e){const r=n.get(e);if(null===r)throw new Error("Unable to parse color from string: "+e);this.model=r.model,h=a[this.model].channels,this.color=r.value.slice(0,h),this.valpha="number"==typeof r.value[h]?r.value[h]:1}else if(e.length>0){this.model=r||"rgb",h=a[this.model].channels;const t=Array.prototype.slice.call(e,0,h);this.color=g(t,h),this.valpha="number"==typeof e[h]?e[h]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const r=Object.keys(e);"alpha"in e&&(r.splice(r.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);const n=r.sort().join("");if(!(n in l))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=l[n];const{labels:o}=a[this.model],s=[];for(t=0;t<o.length;t++)s.push(e[o[t]]);this.color=g(s)}if(s[this.model])for(h=a[this.model].channels,t=0;t<h;t++){const e=s[this.model][t];e&&(this.color[t]=e(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}i.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let r=this.model in n.to?this:this.rgb();r=r.round("number"==typeof e?e:1);const t=1===r.valpha?r.color:[...r.color,this.valpha];return n.to[r.model](t)},percentString(e){const r=this.rgb().round("number"==typeof e?e:1),t=1===r.valpha?r.color:[...r.color,this.valpha];return n.to.rgb.percent(t)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:r}=a[this.model],{labels:t}=a[this.model];for(let n=0;n<r;n++)e[t[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new i([...this.color.map(h(e)),this.valpha],this.model)},alpha(e){return void 0!==e?new i([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:c("rgb",0,u(255)),green:c("rgb",1,u(255)),blue:c("rgb",2,u(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:c("hsl",1,u(100)),lightness:c("hsl",2,u(100)),saturationv:c("hsv",1,u(100)),value:c("hsv",2,u(100)),chroma:c("hcg",1,u(100)),gray:c("hcg",2,u(100)),white:c("hwb",1,u(100)),wblack:c("hwb",2,u(100)),cyan:c("cmyk",0,u(100)),magenta:c("cmyk",1,u(100)),yellow:c("cmyk",2,u(100)),black:c("cmyk",3,u(100)),x:c("xyz",0,u(95.047)),y:c("xyz",1,u(100)),z:c("xyz",2,u(108.833)),l:c("lab",0,u(100)),a:c("lab",1),b:c("lab",2),keyword(e){return void 0!==e?new i(e):a[this.model].keyword(this.color)},hex(e){return void 0!==e?new i(e):n.to.hex(this.rgb().round().color)},hexa(e){if(void 0!==e)return new i(e);const r=this.rgb().round().color;let t=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===t.length&&(t="0"+t),n.to.hex(r)+t},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,r=[];for(const[t,n]of e.entries()){const e=n/255;r[t]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return.2126*r[0]+.7152*r[1]+.0722*r[2]},contrast(e){const r=this.luminosity(),t=e.luminosity();return r>t?(r+.05)/(t+.05):(t+.05)/(r+.05)},level(e){const r=this.contrast(e);return r>=7?"AAA":r>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(2126*e[0]+7152*e[1]+722*e[2])/1e4<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let r=0;r<3;r++)e.color[r]=255-e.color[r];return e},lighten(e){const r=this.hsl();return r.color[2]+=r.color[2]*e,r},darken(e){const r=this.hsl();return r.color[2]-=r.color[2]*e,r},saturate(e){const r=this.hsl();return r.color[1]+=r.color[1]*e,r},desaturate(e){const r=this.hsl();return r.color[1]-=r.color[1]*e,r},whiten(e){const r=this.hwb();return r.color[1]+=r.color[1]*e,r},blacken(e){const r=this.hwb();return r.color[2]+=r.color[2]*e,r},grayscale(){const e=this.rgb().color,r=.3*e[0]+.59*e[1]+.11*e[2];return i.rgb(r,r,r)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const r=this.hsl();let t=r.color[0];return t=(t+e)%360,t=t<0?360+t:t,r.color[0]=t,r},mix(e,r){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const t=e.rgb(),n=this.rgb(),a=void 0===r?.5:r,o=2*a-1,l=t.alpha()-n.alpha(),s=((o*l==-1?o:(o+l)/(1+o*l))+1)/2,h=1-s;return i.rgb(s*t.red()+h*n.red(),s*t.green()+h*n.green(),s*t.blue()+h*n.blue(),t.alpha()*a+n.alpha()*(1-a))}};for(const d of Object.keys(a)){if(o.includes(d))continue;const{channels:e}=a[d];i.prototype[d]=function(...e){return this.model===d?new i(this):e.length>0?new i(e,d):new i([...(r=a[this.model][d].raw(this.color),Array.isArray(r)?r:[r]),this.valpha],d);var r},i[d]=function(...r){let t=r[0];return"number"==typeof t&&(t=g(r,e)),new i(t,d)}}function h(e){return function(r){return function(e,r){return Number(e.toFixed(r))}(r,e)}}function c(e,r,t){e=Array.isArray(e)?e:[e];for(const n of e)(s[n]||(s[n]=[]))[r]=t;return e=e[0],function(n){let a;return void 0!==n?(t&&(n=t(n)),a=this[e](),a.color[r]=n,a):(a=this[e]().color[r],t&&(a=t(a)),a)}}function u(e){return function(r){return Math.max(0,Math.min(e,r))}}function g(e,r){for(let t=0;t<r;t++)"number"!=typeof e[t]&&(e[t]=0);return e}e.exports=i},2956:(e,r,t)=>{const n=t(8900),a={};for(const l of Object.keys(n))a[n[l]]=l;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=o;for(const l of Object.keys(o)){if(!("channels"in o[l]))throw new Error("missing channels property: "+l);if(!("labels"in o[l]))throw new Error("missing channel labels property: "+l);if(o[l].labels.length!==o[l].channels)throw new Error("channel and label counts mismatch: "+l);const{channels:e,labels:r}=o[l];delete o[l].channels,delete o[l].labels,Object.defineProperty(o[l],"channels",{value:e}),Object.defineProperty(o[l],"labels",{value:r})}o.rgb.hsl=function(e){const r=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.min(r,t,n),o=Math.max(r,t,n),l=o-a;let s,i;o===a?s=0:r===o?s=(t-n)/l:t===o?s=2+(n-r)/l:n===o&&(s=4+(r-t)/l),s=Math.min(60*s,360),s<0&&(s+=360);const h=(a+o)/2;return i=o===a?0:h<=.5?l/(o+a):l/(2-o-a),[s,100*i,100*h]},o.rgb.hsv=function(e){let r,t,n,a,o;const l=e[0]/255,s=e[1]/255,i=e[2]/255,h=Math.max(l,s,i),c=h-Math.min(l,s,i),u=function(e){return(h-e)/6/c+.5};return 0===c?(a=0,o=0):(o=c/h,r=u(l),t=u(s),n=u(i),l===h?a=n-t:s===h?a=1/3+r-n:i===h&&(a=2/3+t-r),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*h]},o.rgb.hwb=function(e){const r=e[0],t=e[1];let n=e[2];const a=o.rgb.hsl(e)[0],l=1/255*Math.min(r,Math.min(t,n));return n=1-1/255*Math.max(r,Math.max(t,n)),[a,100*l,100*n]},o.rgb.cmyk=function(e){const r=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.min(1-r,1-t,1-n);return[100*((1-r-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},o.rgb.keyword=function(e){const r=a[e];if(r)return r;let t,o=1/0;for(const a of Object.keys(n)){const r=n[a],i=(s=r,((l=e)[0]-s[0])**2+(l[1]-s[1])**2+(l[2]-s[2])**2);i<o&&(o=i,t=a)}var l,s;return t},o.keyword.rgb=function(e){return n[e]},o.rgb.xyz=function(e){let r=e[0]/255,t=e[1]/255,n=e[2]/255;r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;return[100*(.4124*r+.3576*t+.1805*n),100*(.2126*r+.7152*t+.0722*n),100*(.0193*r+.1192*t+.9505*n)]},o.rgb.lab=function(e){const r=o.rgb.xyz(e);let t=r[0],n=r[1],a=r[2];t/=95.047,n/=100,a/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*n-16,500*(t-n),200*(n-a)]},o.hsl.rgb=function(e){const r=e[0]/360,t=e[1]/100,n=e[2]/100;let a,o,l;if(0===t)return l=255*n,[l,l,l];a=n<.5?n*(1+t):n+t-n*t;const s=2*n-a,i=[0,0,0];for(let h=0;h<3;h++)o=r+1/3*-(h-1),o<0&&o++,o>1&&o--,l=6*o<1?s+6*(a-s)*o:2*o<1?a:3*o<2?s+(a-s)*(2/3-o)*6:s,i[h]=255*l;return i},o.hsl.hsv=function(e){const r=e[0];let t=e[1]/100,n=e[2]/100,a=t;const o=Math.max(n,.01);n*=2,t*=n<=1?n:2-n,a*=o<=1?o:2-o;return[r,100*(0===n?2*a/(o+a):2*t/(n+t)),100*((n+t)/2)]},o.hsv.rgb=function(e){const r=e[0]/60,t=e[1]/100;let n=e[2]/100;const a=Math.floor(r)%6,o=r-Math.floor(r),l=255*n*(1-t),s=255*n*(1-t*o),i=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,i,l];case 1:return[s,n,l];case 2:return[l,n,i];case 3:return[l,s,n];case 4:return[i,l,n];case 5:return[n,l,s]}},o.hsv.hsl=function(e){const r=e[0],t=e[1]/100,n=e[2]/100,a=Math.max(n,.01);let o,l;l=(2-t)*n;const s=(2-t)*a;return o=t*a,o/=s<=1?s:2-s,o=o||0,l/=2,[r,100*o,100*l]},o.hwb.rgb=function(e){const r=e[0]/360;let t=e[1]/100,n=e[2]/100;const a=t+n;let o;a>1&&(t/=a,n/=a);const l=Math.floor(6*r),s=1-n;o=6*r-l,0!=(1&l)&&(o=1-o);const i=t+o*(s-t);let h,c,u;switch(l){default:case 6:case 0:h=s,c=i,u=t;break;case 1:h=i,c=s,u=t;break;case 2:h=t,c=s,u=i;break;case 3:h=t,c=i,u=s;break;case 4:h=i,c=t,u=s;break;case 5:h=s,c=t,u=i}return[255*h,255*c,255*u]},o.cmyk.rgb=function(e){const r=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},o.xyz.rgb=function(e){const r=e[0]/100,t=e[1]/100,n=e[2]/100;let a,o,l;return a=3.2406*r+-1.5372*t+-.4986*n,o=-.9689*r+1.8758*t+.0415*n,l=.0557*r+-.204*t+1.057*n,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),[255*a,255*o,255*l]},o.xyz.lab=function(e){let r=e[0],t=e[1],n=e[2];r/=95.047,t/=100,n/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;return[116*t-16,500*(r-t),200*(t-n)]},o.lab.xyz=function(e){let r,t,n;t=(e[0]+16)/116,r=e[1]/500+t,n=t-e[2]/200;const a=t**3,o=r**3,l=n**3;return t=a>.008856?a:(t-16/116)/7.787,r=o>.008856?o:(r-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,r*=95.047,t*=100,n*=108.883,[r,t,n]},o.lab.lch=function(e){const r=e[0],t=e[1],n=e[2];let a;a=360*Math.atan2(n,t)/2/Math.PI,a<0&&(a+=360);return[r,Math.sqrt(t*t+n*n),a]},o.lch.lab=function(e){const r=e[0],t=e[1],n=e[2]/360*2*Math.PI;return[r,t*Math.cos(n),t*Math.sin(n)]},o.rgb.ansi16=function(e,r=null){const[t,n,a]=e;let l=null===r?o.rgb.hsv(e)[2]:r;if(l=Math.round(l/50),0===l)return 30;let s=30+(Math.round(a/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return 2===l&&(s+=60),s},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){const r=e[0],t=e[1],n=e[2];if(r===t&&t===n)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;return 16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},o.ansi16.rgb=function(e){let r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),r=r/10.5*255,[r,r,r];const t=.5*(1+~~(e>50));return[(1&r)*t*255,(r>>1&1)*t*255,(r>>2&1)*t*255]},o.ansi256.rgb=function(e){if(e>=232){const r=10*(e-232)+8;return[r,r,r]}let r;e-=16;return[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},o.rgb.hex=function(e){const r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},o.hex.rgb=function(e){const r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];let t=r[0];3===r[0].length&&(t=t.split("").map((e=>e+e)).join(""));const n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},o.rgb.hcg=function(e){const r=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.max(Math.max(r,t),n),o=Math.min(Math.min(r,t),n),l=a-o;let s,i;return s=l<1?o/(1-l):0,i=l<=0?0:a===r?(t-n)/l%6:a===t?2+(n-r)/l:4+(r-t)/l,i/=6,i%=1,[360*i,100*l,100*s]},o.hsl.hcg=function(e){const r=e[1]/100,t=e[2]/100,n=t<.5?2*r*t:2*r*(1-t);let a=0;return n<1&&(a=(t-.5*n)/(1-n)),[e[0],100*n,100*a]},o.hsv.hcg=function(e){const r=e[1]/100,t=e[2]/100,n=r*t;let a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},o.hcg.rgb=function(e){const r=e[0]/360,t=e[1]/100,n=e[2]/100;if(0===t)return[255*n,255*n,255*n];const a=[0,0,0],o=r%1*6,l=o%1,s=1-l;let i=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return i=(1-t)*n,[255*(t*a[0]+i),255*(t*a[1]+i),255*(t*a[2]+i)]},o.hcg.hsv=function(e){const r=e[1]/100,t=r+e[2]/100*(1-r);let n=0;return t>0&&(n=r/t),[e[0],100*n,100*t]},o.hcg.hsl=function(e){const r=e[1]/100,t=e[2]/100*(1-r)+.5*r;let n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},o.hcg.hwb=function(e){const r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},o.hwb.hcg=function(e){const r=e[1]/100,t=1-e[2]/100,n=t-r;let a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=function(e){return[0,0,e[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){const r=255&Math.round(e[0]/100*255),t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},978:(e,r,t)=>{const n=t(2956),a=t(7774),o={};Object.keys(n).forEach((e=>{o[e]={},Object.defineProperty(o[e],"channels",{value:n[e].channels}),Object.defineProperty(o[e],"labels",{value:n[e].labels});const r=a(e);Object.keys(r).forEach((t=>{const n=r[t];o[e][t]=function(e){const r=function(...r){const t=r[0];if(null==t)return t;t.length>1&&(r=t);const n=e(r);if("object"==typeof n)for(let e=n.length,a=0;a<e;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(r.conversion=e.conversion),r}(n),o[e][t].raw=function(e){const r=function(...r){const t=r[0];return null==t?t:(t.length>1&&(r=t),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}(n)}))})),e.exports=o},7774:(e,r,t)=>{const n=t(2956);function a(e){const r=function(){const e={},r=Object.keys(n);for(let t=r.length,n=0;n<t;n++)e[r[n]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;){const e=t.pop(),a=Object.keys(n[e]);for(let n=a.length,o=0;o<n;o++){const n=a[o],l=r[n];-1===l.distance&&(l.distance=r[e].distance+1,l.parent=e,t.unshift(n))}}return r}function o(e,r){return function(t){return r(e(t))}}function l(e,r){const t=[r[e].parent,e];let a=n[r[e].parent][e],l=r[e].parent;for(;r[l].parent;)t.unshift(r[l].parent),a=o(n[r[l].parent][l],a),l=r[l].parent;return a.conversion=t,a}e.exports=function(e){const r=a(e),t={},n=Object.keys(r);for(let a=n.length,o=0;o<a;o++){const e=n[o];null!==r[e].parent&&(t[e]=l(e,r))}return t}},8900:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},6851:(e,r,t)=>{"use strict";var n=t(9594),a=Array.prototype.concat,o=Array.prototype.slice,l=e.exports=function(e){for(var r=[],t=0,l=e.length;t<l;t++){var s=e[t];n(s)?r=a.call(r,o.call(s)):r.push(s)}return r};l.wrap=function(e){return function(){return e(l(arguments))}}},9594:e=>{e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}}}]);
"use strict";(self.webpackChunkjetzihan=self.webpackChunkjetzihan||[]).push([[5647],{35647:(t,s,i)=>{i.d(s,{wV:()=>q});var e=i(67294),n=Object.defineProperty,a=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,s,i)=>s in t?n(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,c=(t,s)=>{for(var i in s||(s={}))h.call(s,i)&&o(t,i,s[i]);if(a)for(var i of a(s))r.call(s,i)&&o(t,i,s[i]);return t},l=(t,s)=>{var i={};for(var e in t)h.call(t,e)&&s.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&a)for(var e of a(t))s.indexOf(e)<0&&r.call(t,e)&&(i[e]=t[e]);return i};const d={starsCount:400,starsColor:"#FFFFFF",starsRotationSpeed:3,cometFrequence:15,nebulasIntensity:10,bgColor:"rgb(8,8,8)",sunScale:1,planetsScale:1,solarSystemOrbite:65,solarSystemSpeedOrbit:100},g=t=>Object.assign({},d,t),f=t=>{const s=(t.includes("#")?function(t){let s="0",i="0",e="0";t.length<=5?(s="0x"+t[1]+t[1],i="0x"+t[2]+t[2],e="0x"+t[3]+t[3]):t.length>=7&&(s="0x"+t[1]+t[2],i="0x"+t[3]+t[4],e="0x"+t[5]+t[6]);return"rgb("+ +s+","+ +i+","+ +e+")"}(t):t).split(/[\(|,|\)]/);return[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10)]};const u=(t,s)=>`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${s})`;class x{constructor({ctx:t}){this.ctx=t}getCanvasWidth(){return this.ctx.canvas.width}getCanvasHeight(){return this.ctx.canvas.height}get canvasMinSide(){return Math.min(this.getCanvasHeight(),this.getCanvasWidth())}get canvasMaxSide(){return Math.max(this.getCanvasHeight(),this.getCanvasWidth())}}class p extends x{constructor({ctx:t,width:s,speed:i,distance:e,rgb:n,origin:a,startAngle:h=360*Math.random()}){super({ctx:t}),this.relativeWidth=s,this.rgb=n,this.speed=i,this.relativeDistance=e,this.origin=a,this.angle=Math.PI/180*(null!=h?h:0)}rotate(){this.angle=(this.angle+Math.PI/180*this.speed)%360}get width(){return this.relativeWidth/100*this.canvasMinSide}get distance(){return this.relativeDistance/100*this.canvasMinSide}getAngle(){return this.angle}getRefAngle(){var t,s;return this.getAngle()+(null!=(s=null==(t=this.origin)?void 0:t.getAngle())?s:0)}getWidth(){return this.width}getOriginCoords(){if(this.origin){const t=this.origin.getOriginCoords();return[t[0]+Math.cos(this.origin.getAngle()+this.angle)*(this.distance+this.origin.getWidth()),t[1]+Math.sin(this.origin.getAngle()+this.angle)*(this.distance+this.origin.getWidth())]}{const t=[this.getCanvasWidth()/2,this.getCanvasHeight()/2];return[t[0]+Math.cos(this.angle)*this.distance,t[1]+Math.sin(this.angle)*this.distance]}}}const w=t=>[Math.round(t[0]),Math.round(t[1])];class b extends p{constructor(t){var s=l(t,[]);super(c({},s)),this.draw=()=>{this.rotate(),this.ctx.shadowBlur=0,this.ctx.beginPath();const t=w(this.getOriginCoords());this.ctx.arc(...t,Math.round(this.width),0,2*Math.PI),this.ctx.closePath(),this.ctx.fillStyle=`rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, 1)`,this.ctx.fill()}}}const C=(t,s)=>t+Math.random()*(s-t),v=(t,s,i)=>("%"===i&&(s*=t),t-s+Math.random()*s*2),M=t=>{const s=t.slice();for(let i=s.length-1;i>0;i--){const t=Math.floor(Math.random()*(i+1)),e=s[i];s[i]=s[t],s[t]=e}return s},m=({canvas:t,drawings:s,bgColor:i,fps:e=0})=>{const n=t.width,a=t.height,h=t.getContext("2d");if(!h)return()=>{};let r;h.save();let o=0,c=1e3/e;const l=()=>{if(e){r=requestAnimationFrame(l);const t=Date.now();if(t-o<c)return;o=t}h.clearRect(0,0,n,a),i&&(h.fillStyle=i,h.fillRect(0,0,n,a)),s.forEach((t=>t.draw()))};return l(),()=>{h.restore(),r&&cancelAnimationFrame(r)}};class y extends p{constructor(t){var s=l(t,[]);super(c({},s)),this.draw=()=>{this.rotate(),this.ctx.shadowBlur=0,this.ctx.beginPath();const t=w(this.getOriginCoords());this.ctx.arc(...t,Math.round(this.width),0,2*Math.PI),this.ctx.fillStyle="white",this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.arc(...t,Math.round(5*this.width),0,2*Math.PI),this.ctx.closePath(),this.ctx.fillStyle=this.getGradiant(),this.ctx.fill()}}getGradiant(){const t=w(this.getOriginCoords()),s=this.ctx.createRadialGradient(...t,0,...t,Math.round(5*this.width));return s.addColorStop(0,u(this.rgb,.2)),s.addColorStop(.1,u(this.rgb,.3)),s.addColorStop(.16,u(this.rgb,.6)),s.addColorStop(.2,u(this.rgb,1)),s.addColorStop(.2,u(this.rgb,.4)),s.addColorStop(.23,u(this.rgb,.08)),s.addColorStop(.5,u(this.rgb,.02)),s.addColorStop(.9,u(this.rgb,.005)),s.addColorStop(1,u(this.rgb,0)),s}}class S extends p{constructor(t){var s=l(t,[]);super(c({},s)),this.draw=()=>{this.rotate(),this.ctx.shadowBlur=0,this.ctx.beginPath();const t=w(this.getOriginCoords());this.ctx.arc(...t,Math.round(this.width),0,2*Math.PI),this.ctx.fillStyle="black",this.ctx.fill(),this.ctx.closePath();const s=this.ctx.createRadialGradient(Math.round(t[0]-.4*this.width*Math.cos(this.getRefAngle())),Math.round(t[1]-.4*this.width*Math.sin(this.getRefAngle())),0,...t,Math.round(this.width));s.addColorStop(0,u(this.rgb,1)),s.addColorStop(1,u(this.rgb,.5)),this.ctx.fillStyle=s,this.ctx.fill()}}}class A extends x{constructor({ctx:t,frequence:s}){super({ctx:t}),this.speed=115,this.x=0,this.y=0,this.opacity=0,this.draw=()=>{if(this.move(),!this.showConfig)return;this.ctx.save(),this.ctx.ellipse(this.x,this.y,this.showConfig.width,90,this.showConfig.direction+Math.PI/2,0,2*Math.PI),this.ctx.globalAlpha=this.opacity;const t=this.ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,90);t.addColorStop(0,u(this.showConfig.rgb,1)),t.addColorStop(1,u(this.showConfig.rgb,0)),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore()},this.ctx=t,this.frequence=s}move(){if(this.showConfig){this.x+=this.speed*Math.cos(this.showConfig.direction),this.y+=this.speed*Math.sin(this.showConfig.direction);const{x:t,y:s}=this.showConfig.startCoords,i=Math.sqrt(Math.pow(this.x-t,2)+Math.pow(this.y-s,2)),e=i/this.showConfig.distanceToTarget;return this.opacity=Math.max(.7,Math.min(e<.3?e:1-e,1)),void(i>this.showConfig.distanceToTarget&&(this.showConfig=void 0))}if(Math.random()>1-this.frequence/100/40){const t=C(0,2*Math.PI),s=Math.max(this.getCanvasHeight(),this.getCanvasWidth());this.showConfig={startCoords:{x:v(Math.cos(t)*s/3,.5,"%")+this.getCanvasWidth()/2,y:v(Math.sin(t)*s/3,.5,"%")+this.getCanvasHeight()/2},direction:C(t+Math.PI-Math.PI/6,t+Math.PI+Math.PI/6),distanceToTarget:v(.6*s,.3),speed:v(115,.15,"%"),rgb:f("rgb(255,207,207)"),width:C(.2,.8),startOpacity:0},this.x=this.showConfig.startCoords.x,this.y=this.showConfig.startCoords.y}}}const P=["rgb(6,2,122)","rgb(6,66,18)","#57046e"];class I extends x{constructor({ctx:t,intensity:s}){super({ctx:t}),this.draw=()=>{const t=this.ctx.getImageData(0,0,this.getCanvasWidth(),this.getCanvasHeight()),s=this.getCanvasWidth(),i=Array.from(t.data);for(let e=0;e<i.length;e+=4){const t=e/4,n=t%s,a=Math.floor(t/s);this.colorations.forEach((t=>{const s=W(t,n,a)*this.intensity;if(s>0)for(let n=0;n<3;n++)i[e+n]=s*t.rgb[n]+i[n+e]*(1-s)}));for(let s=0;s<3;s++){const t=i[e+s];t>0&&(i[e+s]=Math.round(t-1+Math.random()))}}t.data.set(i),this.ctx.putImageData(t,0,0)},this.intensity=.025*s;const i=O(3*P.length);this.colorations=P.flatMap((t=>new Array(3).fill(0).map((()=>{const s=i.pop();return{coords:{x:s.x*this.getCanvasWidth(),y:s.y*this.getCanvasHeight()},rgb:f(t),ratio:v(Math.PI/4,.2),width:C(5,8)*this.canvasMinSide*.08}}))))}setIntensity(t){this.intensity=.025*t}}const O=t=>{const s=2*Math.PI*Math.random(),i=new Array(t).fill(0).map(((i,e)=>{const n=s+v(e*Math.PI*2/t,.32),a=C(.8,1.1);return{x:(Math.cos(n)*a+1)/2,y:(Math.sin(n)*a+1)/2}}));return M(i)},W=(t,s,i)=>{const e=s-t.coords.x,n=i-t.coords.y,a=Math.sqrt(Math.pow(e*Math.cos(t.ratio),2)+Math.pow(n*Math.sin(t.ratio),2)),h=(t.width-a)/t.width;return Math.max(h,0)},R="width: 100%;height: 100%;position:absolute;will-change:transform;top: 0;left:0;";class E{constructor({config:t,element:s}){this.cancelAnimations=[],this.stars=[],this.comets=[],this.planets=[],this.onResize=()=>{this.styleCanvas(),this.init()},this.styleCanvas=()=>{this.bgCanvas.setAttribute("style",R),this.bgCanvas.width=this.element.offsetWidth/3,this.bgCanvas.height=this.element.offsetHeight/3,this.canvas.setAttribute("style",R),this.canvas.width=2*this.element.offsetWidth,this.canvas.height=2*this.element.offsetHeight},this.element=s,this.bgCanvas=document.createElement("CANVAS"),this.canvas=document.createElement("CANVAS"),s.append(this.bgCanvas),s.append(this.canvas),this.styleCanvas(),window.addEventListener("resize",this.onResize),this.config=g(t),this.setConfig(t)}setConfig(t){this.config=g(t),this.coloration=(({ctx:t,coloration:s,intensity:i})=>s?(s.setIntensity(i),s):new I({ctx:t,intensity:i}))({coloration:this.coloration,ctx:this.bgCanvas.getContext("2d"),intensity:this.config.nebulasIntensity}),this.stars=(({stars:t,count:s,color:i,rotationSpeed:e,ctx:n})=>{let a;const h=s-t.length;if(h<=0)a=t.slice(0,s);else{const s=new Array(h).fill(0).map((()=>new b({ctx:n,width:C(.03,.1),distance:120*Math.pow(Math.random()*Math.random(),.5),speed:v(.015*e,.005),rgb:f(i)})));a=t.concat(s)}return a.map((t=>(t.speed=v(.015*e,.005),t)))})({stars:this.stars,ctx:this.canvas.getContext("2d"),color:this.config.starsColor,count:this.config.starsCount,rotationSpeed:this.config.starsRotationSpeed}),this.planets=(({planets:t,sunScale:s,scale:i,rotationSpeed:e,distance:n,ctx:a})=>{const h=new y({ctx:a,width:1.9*s,distance:n/2,startAngle:0,speed:.0033*e,rgb:f("rgb(208,141,16)")}),r=new S({ctx:a,width:.48*i,distance:5*i,speed:.01*e,rgb:f("rgb(19,102,150)"),origin:h});return[h,new S({ctx:a,width:.15*i,distance:4.2,speed:.017*e,rgb:f("rgb(180, 144, 88)"),origin:h}),r,new S({ctx:a,width:.12*i,distance:1.6*i,speed:.0212*e,rgb:f("rgb(200, 200, 200)"),origin:r}),new S({ctx:a,width:.32*i,distance:6.4*i,speed:.0066*e,rgb:f("rgb(233, 88, 26)"),origin:h}),new S({ctx:a,width:.72*i,distance:8.8*i,speed:.0046*e,rgb:f("rgb(169, 109, 45)"),origin:h}),new S({ctx:a,width:.6*i,distance:11*i,speed:.004*e,rgb:f("rgb(164,127,84)"),origin:h}),new S({ctx:a,width:.38*i,distance:12.6*i,speed:.0037*e,rgb:f("rgb(84,149,164)"),origin:h}),new S({ctx:a,width:.31*i,distance:13.6*i,speed:.0033*e,rgb:f("rgb(36,82,154)"),origin:h})]})({planets:this.planets,sunScale:this.config.sunScale,scale:this.config.planetsScale,ctx:this.canvas.getContext("2d"),rotationSpeed:this.config.solarSystemSpeedOrbit,distance:this.config.solarSystemOrbite}),this.comets=(({ctx:t,frequence:s})=>new Array(1).fill(0).flatMap((()=>[new A({ctx:t,frequence:s})])))({ctx:this.canvas.getContext("2d"),frequence:this.config.cometFrequence}),this.init()}init(){this.draw()}draw(){this.cancelAnimations.forEach((t=>t())),this.cancelAnimations=[m({canvas:this.bgCanvas,drawings:[this.coloration],bgColor:this.config.bgColor}),m({canvas:this.canvas,drawings:[...this.stars,...this.comets,...this.planets],fps:40})]}destroy(){var t,s;window.removeEventListener("resize",this.onResize),this.cancelAnimations.forEach((t=>t())),this.cancelAnimations=[],null==(t=this.bgCanvas.parentElement)||t.removeChild(this.bgCanvas),null==(s=this.canvas.parentElement)||s.removeChild(this.canvas)}}const q=({config:t={}})=>{const s=(0,e.useRef)(),i=(0,e.useRef)(null);return(0,e.useLayoutEffect)((()=>{var i;s.current&&(null==(i=s.current)||i.setConfig(t))}),[t]),(0,e.useLayoutEffect)((()=>(s.current||(s.current=new E({config:t,element:i.current})),()=>{var t;null==(t=s.current)||t.destroy(),s.current=void 0})),[]),e.createElement("div",{ref:i,style:{overflow:"hidden",background:"#0a1929",height:"100%",width:"100%",position:"absolute"}})}}}]);
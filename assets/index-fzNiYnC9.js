(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cl(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ve={},Pr=[],wt=()=>{},oy=()=>!1,Fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ll=t=>t.startsWith("onUpdate:"),Ke=Object.assign,ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ay=Object.prototype.hasOwnProperty,oe=(t,e)=>ay.call(t,e),W=Array.isArray,Cr=t=>Uo(t)==="[object Map]",_f=t=>Uo(t)==="[object Set]",X=t=>typeof t=="function",Ve=t=>typeof t=="string",Jr=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",yf=t=>(Ae(t)||X(t))&&X(t.then)&&X(t.catch),vf=Object.prototype.toString,Uo=t=>vf.call(t),cy=t=>Uo(t).slice(8,-1),Ef=t=>Uo(t)==="[object Object]",hl=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ki=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ly=/-(\w)/g,Mr=Bo(t=>t.replace(ly,(e,n)=>n?n.toUpperCase():"")),uy=/\B([A-Z])/g,Xr=Bo(t=>t.replace(uy,"-$1").toLowerCase()),If=Bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Na=Bo(t=>t?`on${If(t)}`:""),kn=(t,e)=>!Object.is(t,e),Wi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zu;const wf=()=>zu||(zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?py(r):dl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ve(t)||Ae(t))return t}const hy=/;(?![^(]*\))/g,dy=/:([^]+)/,fy=/\/\*[^]*?\*\//g;function py(t){const e={};return t.replace(fy,"").split(hy).forEach(n=>{if(n){const r=n.split(dy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oi(t){let e="";if(Ve(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=oi(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",my=cl(gy);function Tf(t){return!!t||t===""}const Dn=t=>Ve(t)?t:t==null?"":W(t)||Ae(t)&&(t.toString===vf||!X(t.toString))?JSON.stringify(t,Af,2):String(t),Af=(t,e)=>e&&e.__v_isRef?Af(t,e.value):Cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ma(r,i)+" =>"]=s,n),{})}:_f(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ma(n))}:Jr(e)?Ma(e):Ae(e)&&!W(e)&&!Ef(e)?String(e):e,Ma=(t,e="")=>{var n;return Jr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class Rf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sf(t){return new Rf(t)}function _y(t,e=gt){e&&e.active&&e.effects.push(t)}function Pf(){return gt}function yy(t){gt&&gt.cleanups.push(t)}let Jn;class fl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,_y(this,s)}get dirty(){if(this._dirtyLevel===1){cr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(vy(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),lr()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Tn,n=Jn;try{return Tn=!0,Jn=this,this._runnings++,Gu(this),this.fn()}finally{Qu(this),this._runnings--,Jn=n,Tn=e}}stop(){var e;this.active&&(Gu(this),Qu(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function vy(t){return t.value}function Gu(t){t._trackId++,t._depsLength=0}function Qu(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Cf(t.deps[e],t);t.deps.length=t._depsLength}}function Cf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Tn=!0,dc=0;const bf=[];function cr(){bf.push(Tn),Tn=!1}function lr(){const t=bf.pop();Tn=t===void 0?!0:t}function pl(){dc++}function gl(){for(dc--;!dc&&fc.length;)fc.shift()()}function kf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Cf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const fc=[];function Df(t,e,n){pl();for(const r of t.keys())if(r._dirtyLevel<e&&t.get(r)===r._trackId){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(r._shouldSchedule=!0,r.trigger())}Of(t),gl()}function Of(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,fc.push(e.scheduler))}const Vf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},lo=new WeakMap,Xn=Symbol(""),pc=Symbol("");function dt(t,e,n){if(Tn&&Jn){let r=lo.get(t);r||lo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Vf(()=>r.delete(n))),kf(Jn,s)}}function Zt(t,e,n,r,s,i){const o=lo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Jr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?hl(n)&&a.push(o.get("length")):(a.push(o.get(Xn)),Cr(t)&&a.push(o.get(pc)));break;case"delete":W(t)||(a.push(o.get(Xn)),Cr(t)&&a.push(o.get(pc)));break;case"set":Cr(t)&&a.push(o.get(Xn));break}pl();for(const c of a)c&&Df(c,2);gl()}function Ey(t,e){var n;return(n=lo.get(t))==null?void 0:n.get(e)}const Iy=cl("__proto__,__v_isRef,__isVue"),Nf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jr)),Yu=wy();function wy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ae(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){cr(),pl();const r=ae(this)[e].apply(this,n);return gl(),lr(),r}}),t}function Ty(t){const e=ae(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Mf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xy:Uf:i?Ff:Lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!s){if(o&&oe(Yu,n))return Reflect.get(Yu,n,r);if(n==="hasOwnProperty")return Ty}const a=Reflect.get(e,n,r);return(Jr(n)?Nf.has(n):Iy(n))||(s||dt(e,"get",n),i)?a:Ne(a)?o&&hl(n)?a:a.value:Ae(a)?s?jf(a):ai(a):a}}class xf extends Mf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=xr(i);if(!uo(r)&&!xr(r)&&(i=ae(i),r=ae(r)),!W(e)&&Ne(i)&&!Ne(r))return c?!1:(i.value=r,!0)}const o=W(e)&&hl(n)?Number(n)<e.length:oe(e,n),a=Reflect.set(e,n,r,s);return e===ae(s)&&(o?kn(r,i)&&Zt(e,"set",n,r):Zt(e,"add",n,r)),a}deleteProperty(e,n){const r=oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Zt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jr(n)||!Nf.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",W(e)?"length":Xn),Reflect.ownKeys(e)}}class Ay extends Mf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ry=new xf,Sy=new Ay,Py=new xf(!0),ml=t=>t,jo=t=>Reflect.getPrototypeOf(t);function ki(t,e,n=!1,r=!1){t=t.__v_raw;const s=ae(t),i=ae(e);n||(kn(e,i)&&dt(s,"get",e),dt(s,"get",i));const{has:o}=jo(s),a=r?ml:n?vl:Ms;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Di(t,e=!1){const n=this.__v_raw,r=ae(n),s=ae(t);return e||(kn(t,s)&&dt(r,"has",t),dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oi(t,e=!1){return t=t.__v_raw,!e&&dt(ae(t),"iterate",Xn),Reflect.get(t,"size",t)}function Ju(t){t=ae(t);const e=ae(this);return jo(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Xu(t,e){e=ae(e);const n=ae(this),{has:r,get:s}=jo(n);let i=r.call(n,t);i||(t=ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?kn(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Zu(t){const e=ae(this),{has:n,get:r}=jo(e);let s=n.call(e,t);s||(t=ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Zt(e,"delete",t,void 0),i}function eh(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function Vi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ae(o),c=e?ml:t?vl:Ms;return!t&&dt(a,"iterate",Xn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ni(t,e,n){return function(...r){const s=this.__v_raw,i=ae(s),o=Cr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ml:e?vl:Ms;return!e&&dt(i,"iterate",c?pc:Xn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cy(){const t={get(i){return ki(this,i)},get size(){return Oi(this)},has:Di,add:Ju,set:Xu,delete:Zu,clear:eh,forEach:Vi(!1,!1)},e={get(i){return ki(this,i,!1,!0)},get size(){return Oi(this)},has:Di,add:Ju,set:Xu,delete:Zu,clear:eh,forEach:Vi(!1,!0)},n={get(i){return ki(this,i,!0)},get size(){return Oi(this,!0)},has(i){return Di.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Vi(!0,!1)},r={get(i){return ki(this,i,!0,!0)},get size(){return Oi(this,!0)},has(i){return Di.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ni(i,!1,!1),n[i]=Ni(i,!0,!1),e[i]=Ni(i,!1,!0),r[i]=Ni(i,!0,!0)}),[t,n,e,r]}const[by,ky,Dy,Oy]=Cy();function _l(t,e){const n=e?t?Oy:Dy:t?ky:by;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(oe(n,s)&&s in r?n:r,s,i)}const Vy={get:_l(!1,!1)},Ny={get:_l(!1,!0)},My={get:_l(!0,!1)},Lf=new WeakMap,Ff=new WeakMap,Uf=new WeakMap,xy=new WeakMap;function Ly(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ly(cy(t))}function ai(t){return xr(t)?t:yl(t,!1,Ry,Vy,Lf)}function Bf(t){return yl(t,!1,Py,Ny,Ff)}function jf(t){return yl(t,!0,Sy,My,Uf)}function yl(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Fy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function An(t){return xr(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function xr(t){return!!(t&&t.__v_isReadonly)}function uo(t){return!!(t&&t.__v_isShallow)}function $f(t){return An(t)||xr(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function $o(t){return co(t,"__v_skip",!0),t}const Ms=t=>Ae(t)?ai(t):t,vl=t=>Ae(t)?jf(t):t;class qf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fl(()=>e(this._value),()=>zi(this,1),()=>this.dep&&Of(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ae(this);return(!e._cacheable||e.effect.dirty)&&kn(e._value,e._value=e.effect.run())&&zi(e,2),Hf(e),e.effect._dirtyLevel>=1&&zi(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Uy(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=wt):(r=t.get,s=t.set),new qf(r,s,i||!s,n)}function Hf(t){Tn&&Jn&&(t=ae(t),kf(Jn,t.dep||(t.dep=Vf(()=>t.dep=void 0,t instanceof qf?t:void 0))))}function zi(t,e=2,n){t=ae(t);const r=t.dep;r&&Df(r,e)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function qo(t){return Kf(t,!1)}function By(t){return Kf(t,!0)}function Kf(t,e){return Ne(t)?t:new jy(t,e)}class jy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Ms(e)}get value(){return Hf(this),this._value}set value(e){const n=this.__v_isShallow||uo(e)||xr(e);e=n?e:ae(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ms(e),zi(this,2))}}function xe(t){return Ne(t)?t.value:t}const $y={get:(t,e,n)=>xe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Wf(t){return An(t)?t:new Proxy(t,$y)}function qy(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Ky(t,n);return e}class Hy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ey(ae(this._object),this._key)}}function Ky(t,e,n){const r=t[e];return Ne(r)?r:new Hy(t,e,n)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ho(i,e,n)}return s}function Pt(t,e,n,r){if(X(t)){const i=Rn(t,e,n,r);return i&&yf(i)&&i.catch(o=>{Ho(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pt(t[i],e,n,r));return s}function Ho(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rn(c,null,10,[t,o,a]);return}}Wy(t,n,s,r)}function Wy(t,e,n,r=!0){console.error(t)}let xs=!1,gc=!1;const Je=[];let Lt=0;const br=[];let pn=null,Hn=0;const zf=Promise.resolve();let El=null;function Il(t){const e=El||zf;return t?e.then(this?t.bind(this):t):e}function zy(t){let e=Lt+1,n=Je.length;for(;e<n;){const r=e+n>>>1,s=Je[r],i=Ls(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function wl(t){(!Je.length||!Je.includes(t,xs&&t.allowRecurse?Lt+1:Lt))&&(t.id==null?Je.push(t):Je.splice(zy(t.id),0,t),Gf())}function Gf(){!xs&&!gc&&(gc=!0,El=zf.then(Yf))}function Gy(t){const e=Je.indexOf(t);e>Lt&&Je.splice(e,1)}function Qy(t){W(t)?br.push(...t):(!pn||!pn.includes(t,t.allowRecurse?Hn+1:Hn))&&br.push(t),Gf()}function th(t,e,n=xs?Lt+1:0){for(;n<Je.length;n++){const r=Je[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Je.splice(n,1),n--,r()}}}function Qf(t){if(br.length){const e=[...new Set(br)].sort((n,r)=>Ls(n)-Ls(r));if(br.length=0,pn){pn.push(...e);return}for(pn=e,Hn=0;Hn<pn.length;Hn++)pn[Hn]();pn=null,Hn=0}}const Ls=t=>t.id==null?1/0:t.id,Yy=(t,e)=>{const n=Ls(t)-Ls(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yf(t){gc=!1,xs=!0,Je.sort(Yy);try{for(Lt=0;Lt<Je.length;Lt++){const e=Je[Lt];e&&e.active!==!1&&Rn(e,null,14)}}finally{Lt=0,Je.length=0,Qf(),xs=!1,El=null,(Je.length||br.length)&&Yf()}}function Jy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ve;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||ve;d&&(s=n.map(g=>Ve(g)?g.trim():g)),h&&(s=n.map(hc))}let a,c=r[a=Na(e)]||r[a=Na(Mr(e))];!c&&i&&(c=r[a=Na(Xr(e))]),c&&Pt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,s)}}function Jf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Jf(l,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Ke(o,i),Ae(t)&&r.set(t,o),o)}function Ko(t,e){return!t||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Xr(e))||oe(t,e))}let ht=null,Wo=null;function ho(t){const e=ht;return ht=t,Wo=t&&t.type.__scopeId||null,e}function Xf(t){Wo=t}function Zf(){Wo=null}function Xy(t,e=ht,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hh(-1);const i=ho(e);let o;try{o=t(...s)}finally{ho(i),r._d&&hh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:E,inheritAttrs:R}=t;let T,P;const M=ho(t);try{if(n.shapeFlag&4){const z=s||r,Z=z;T=xt(u.call(Z,z,h,i,g,d,E)),P=c}else{const z=e;T=xt(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),P=e.props?c:Zy(c)}}catch(z){As.length=0,Ho(z,t,1),T=it(tr)}let F=T;if(P&&R!==!1){const z=Object.keys(P),{shapeFlag:Z}=F;z.length&&Z&7&&(o&&z.some(ll)&&(P=ev(P,o)),F=Lr(F,P))}return n.dirs&&(F=Lr(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),T=F,ho(M),T}const Zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fo(n))&&((e||(e={}))[n]=t[n]);return e},ev=(t,e)=>{const n={};for(const r in t)(!ll(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ko(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nh(r,o,l):!0:!!o;return!1}function nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ko(n,i))return!0}return!1}function nv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const rv=Symbol.for("v-ndc"),sv=t=>t.__isSuspense;function iv(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Qy(t)}const ov=Symbol.for("v-scx"),av=()=>Ct(ov),Mi={};function ws(t,e,n){return ep(t,e,n)}function ep(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ve){if(e&&i){const $=e;e=(...de)=>{$(...de),Z()}}const c=Ze,l=$=>r===!0?$:Wn($,r===!1?1:void 0);let u,h=!1,d=!1;if(Ne(t)?(u=()=>t.value,h=uo(t)):An(t)?(u=()=>l(t),h=!0):W(t)?(d=!0,h=t.some($=>An($)||uo($)),u=()=>t.map($=>{if(Ne($))return $.value;if(An($))return l($);if(X($))return Rn($,c,2)})):X(t)?e?u=()=>Rn(t,c,2):u=()=>(g&&g(),Pt(t,c,3,[E])):u=wt,e&&r){const $=u;u=()=>Wn($())}let g,E=$=>{g=F.onStop=()=>{Rn($,c,4),g=F.onStop=void 0}},R;if(Yo)if(E=wt,e?n&&Pt(e,c,3,[u(),d?[]:void 0,E]):u(),s==="sync"){const $=av();R=$.__watcherHandles||($.__watcherHandles=[])}else return wt;let T=d?new Array(t.length).fill(Mi):Mi;const P=()=>{if(!(!F.active||!F.dirty))if(e){const $=F.run();(r||h||(d?$.some((de,te)=>kn(de,T[te])):kn($,T)))&&(g&&g(),Pt(e,c,3,[$,T===Mi?void 0:d&&T[0]===Mi?[]:T,E]),T=$)}else F.run()};P.allowRecurse=!!e;let M;s==="sync"?M=P:s==="post"?M=()=>lt(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),M=()=>wl(P));const F=new fl(u,wt,M),z=Pf(),Z=()=>{F.stop(),z&&ul(z.effects,F)};return e?n?P():T=F.run():s==="post"?lt(F.run.bind(F),c&&c.suspense):F.run(),R&&R.push(Z),Z}function cv(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?tp(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=ci(this),a=ep(s,i.bind(r),n);return o(),a}function tp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Wn(t,e,n=0,r){if(!Ae(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ne(t))Wn(t.value,e,n,r);else if(W(t))for(let s=0;s<t.length;s++)Wn(t[s],e,n,r);else if(_f(t)||Cr(t))t.forEach(s=>{Wn(s,e,n,r)});else if(Ef(t))for(const s in t)Wn(t[s],e,n,r);return t}function Gi(t,e){if(ht===null)return t;const n=Jo(ht)||ht.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ve]=e[s];i&&(X(i)&&(i={mounted:i,updated:i}),i.deep&&Wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(cr(),Pt(c,n,8,[t.el,a,t,e]),lr())}}/*! #__NO_SIDE_EFFECTS__ */function Tl(t,e){return X(t)?Ke({name:t.name},e,{setup:t}):t}const Qi=t=>!!t.type.__asyncLoader,np=t=>t.type.__isKeepAlive;function lv(t,e){rp(t,"a",e)}function uv(t,e){rp(t,"da",e)}function rp(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)np(s.parent.vnode)&&hv(r,e,n,s),s=s.parent}}function hv(t,e,n,r){const s=zo(e,t,r,!0);Al(()=>{ul(r[e],s)},n)}function zo(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;cr();const a=ci(n),c=Pt(e,n,t,o);return a(),lr(),c});return r?s.unshift(i):s.push(i),i}}const an=t=>(e,n=Ze)=>(!Yo||t==="sp")&&zo(t,(...r)=>e(...r),n),dv=an("bm"),sp=an("m"),fv=an("bu"),pv=an("u"),gv=an("bum"),Al=an("um"),mv=an("sp"),_v=an("rtg"),yv=an("rtc");function vv(t,e=Ze){zo("ec",t,e)}function ip(t,e,n,r){let s;const i=n&&n[r];if(W(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const mc=t=>t?vp(t)?Jo(t)||t.proxy:mc(t.parent):null,Ts=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mc(t.parent),$root:t=>mc(t.root),$emit:t=>t.emit,$options:t=>Rl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wl(t.update)}),$nextTick:t=>t.n||(t.n=Il.bind(t.proxy)),$watch:t=>cv.bind(t)}),La=(t,e)=>t!==ve&&!t.__isScriptSetup&&oe(t,e),Ev={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(La(r,e))return o[e]=1,r[e];if(s!==ve&&oe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==ve&&oe(n,e))return o[e]=4,n[e];_c&&(o[e]=0)}}const u=Ts[e];let h,d;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return La(s,e)?(s[e]=n,!0):r!==ve&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&oe(t,o)||La(e,o)||(a=i[0])&&oe(a,o)||oe(r,o)||oe(Ts,o)||oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rh(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _c=!0;function Iv(t){const e=Rl(t),n=t.proxy,r=t.ctx;_c=!1,e.beforeCreate&&sh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:E,activated:R,deactivated:T,beforeDestroy:P,beforeUnmount:M,destroyed:F,unmounted:z,render:Z,renderTracked:$,renderTriggered:de,errorCaptured:te,serverPrefetch:ee,expose:_e,inheritAttrs:We,components:ft,directives:_t,filters:Bn}=e;if(l&&wv(l,r,null),o)for(const ge in o){const ue=o[ge];X(ue)&&(r[ge]=ue.bind(n))}if(s){const ge=s.call(n,n);Ae(ge)&&(t.data=ai(ge))}if(_c=!0,i)for(const ge in i){const ue=i[ge],Gt=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):wt,ln=!X(ue)&&X(ue.set)?ue.set.bind(n):wt,Vt=vt({get:Gt,set:ln});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:ct=>Vt.value=ct})}if(a)for(const ge in a)op(a[ge],r,n,ge);if(c){const ge=X(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ue=>{Yi(ue,ge[ue])})}u&&sh(u,t,"c");function ce(ge,ue){W(ue)?ue.forEach(Gt=>ge(Gt.bind(n))):ue&&ge(ue.bind(n))}if(ce(dv,h),ce(sp,d),ce(fv,g),ce(pv,E),ce(lv,R),ce(uv,T),ce(vv,te),ce(yv,$),ce(_v,de),ce(gv,M),ce(Al,z),ce(mv,ee),W(_e))if(_e.length){const ge=t.exposed||(t.exposed={});_e.forEach(ue=>{Object.defineProperty(ge,ue,{get:()=>n[ue],set:Gt=>n[ue]=Gt})})}else t.exposed||(t.exposed={});Z&&t.render===wt&&(t.render=Z),We!=null&&(t.inheritAttrs=We),ft&&(t.components=ft),_t&&(t.directives=_t)}function wv(t,e,n=wt){W(t)&&(t=yc(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Ct(s.from||r,s.default,!0):i=Ct(s.from||r):i=Ct(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sh(t,e,n){Pt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function op(t,e,n,r){const s=r.includes(".")?tp(n,r):()=>n[r];if(Ve(t)){const i=e[t];X(i)&&ws(s,i)}else if(X(t))ws(s,t.bind(n));else if(Ae(t))if(W(t))t.forEach(i=>op(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&ws(s,i,t)}}function Rl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>fo(c,l,o,!0)),fo(c,e,o)),Ae(e)&&i.set(e,c),c}function fo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fo(t,i,n,!0),s&&s.forEach(o=>fo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Tv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tv={data:ih,props:oh,emits:oh,methods:ps,computed:ps,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:ps,directives:ps,watch:Rv,provide:ih,inject:Av};function ih(t,e){return e?t?function(){return Ke(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Av(t,e){return ps(yc(t),yc(e))}function yc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function ps(t,e){return t?Ke(Object.create(null),t,e):e}function oh(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ke(Object.create(null),rh(t),rh(e??{})):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const r in e)n[r]=st(t[r],e[r]);return n}function ap(){return{app:null,config:{isNativeTag:oy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sv=0;function Pv(t,e){return function(r,s=null){X(r)||(r=Ke({},r)),s!=null&&!Ae(s)&&(s=null);const i=ap(),o=new WeakSet;let a=!1;const c=i.app={_uid:Sv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=it(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Jo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Fs=c;try{return l()}finally{Fs=null}}};return c}}let Fs=null;function Yi(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function Ct(t,e,n=!1){const r=Ze||ht;if(r||Fs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e}}function Cv(){return!!(Ze||ht||Fs)}function bv(t,e,n,r=!1){const s={},i={};co(i,Qo,1),t.propsDefaults=Object.create(null),cp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Bf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ae(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ko(t.emitsOptions,d))continue;const g=e[d];if(c)if(oe(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const E=Mr(d);s[E]=vc(c,a,E,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{cp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Xr(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=vc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&Zt(t,"set","$attrs")}function cp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ki(c))continue;const l=e[c];let u;s&&oe(s,u=Mr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ko(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ae(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=vc(s,c,h,l[h],t,!oe(l,h))}}return o}function vc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ci(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}function lp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,g]=lp(h,e,!0);Ke(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ae(t)&&r.set(t,Pr),Pr;if(W(i))for(let u=0;u<i.length;u++){const h=Mr(i[u]);ah(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Mr(u);if(ah(h)){const d=i[u],g=o[h]=W(d)||X(d)?{type:d}:Ke({},d);if(g){const E=uh(Boolean,g.type),R=uh(String,g.type);g[0]=E>-1,g[1]=R<0||E<R,(E>-1||oe(g,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&r.set(t,l),l}function ah(t){return t[0]!=="$"}function ch(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lh(t,e){return ch(t)===ch(e)}function uh(t,e){return W(e)?e.findIndex(n=>lh(n,t)):X(e)&&lh(e,t)?0:-1}const up=t=>t[0]==="_"||t==="$stable",Sl=t=>W(t)?t.map(xt):[xt(t)],Dv=(t,e,n)=>{if(e._n)return e;const r=Xy((...s)=>Sl(e(...s)),n);return r._c=!1,r},hp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(up(s))continue;const i=t[s];if(X(i))e[s]=Dv(s,i,r);else if(i!=null){const o=Sl(i);e[s]=()=>o}}},dp=(t,e)=>{const n=Sl(e);t.slots.default=()=>n},Ov=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),co(e,"_",n)):hp(e,t.slots={})}else t.slots={},e&&dp(t,e);co(t.slots,Qo,1)},Vv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ke(s,e),!n&&a===1&&delete s._):(i=!e.$stable,hp(e,s)),o=e}else e&&(dp(t,e),o={default:1});if(i)for(const a in s)!up(a)&&o[a]==null&&delete s[a]};function Ec(t,e,n,r,s=!1){if(W(t)){t.forEach((d,g)=>Ec(d,e&&(W(e)?e[g]:e),n,r,s));return}if(Qi(r)&&!s)return;const i=r.shapeFlag&4?Jo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),X(c))Rn(c,a,12,[o,u]);else{const d=Ve(c),g=Ne(c),E=t.f;if(d||g){const R=()=>{if(E){const T=d?oe(h,c)?h[c]:u[c]:c.value;s?W(T)&&ul(T,i):W(T)?T.includes(i)||T.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};s||E?R():(R.id=-1,lt(R,n))}}}const lt=iv;function Nv(t){return Mv(t)}function Mv(t,e){const n=wf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=wt,insertStaticContent:E}=t,R=(f,p,m,I=null,_=null,C=null,V=void 0,S=null,b=!!p.dynamicChildren)=>{if(f===p)return;f&&!ls(f,p)&&(I=y(f),ct(f,_,C,!0),f=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:A,ref:L,shapeFlag:q}=p;switch(A){case Go:T(f,p,m,I);break;case tr:P(f,p,m,I);break;case Ua:f==null&&M(p,m,I,V);break;case At:ft(f,p,m,I,_,C,V,S,b);break;default:q&1?Z(f,p,m,I,_,C,V,S,b):q&6?_t(f,p,m,I,_,C,V,S,b):(q&64||q&128)&&A.process(f,p,m,I,_,C,V,S,b,U)}L!=null&&_&&Ec(L,f&&f.ref,C,p||f,!p)},T=(f,p,m,I)=>{if(f==null)r(p.el=a(p.children),m,I);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},P=(f,p,m,I)=>{f==null?r(p.el=c(p.children||""),m,I):p.el=f.el},M=(f,p,m,I)=>{[f.el,f.anchor]=E(f.children,p,m,I,f.el,f.anchor)},F=({el:f,anchor:p},m,I)=>{let _;for(;f&&f!==p;)_=d(f),r(f,m,I),f=_;r(p,m,I)},z=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},Z=(f,p,m,I,_,C,V,S,b)=>{p.type==="svg"?V="svg":p.type==="math"&&(V="mathml"),f==null?$(p,m,I,_,C,V,S,b):ee(f,p,_,C,V,S,b)},$=(f,p,m,I,_,C,V,S)=>{let b,A;const{props:L,shapeFlag:q,transition:B,dirs:Q}=f;if(b=f.el=o(f.type,C,L&&L.is,L),q&8?u(b,f.children):q&16&&te(f.children,b,null,I,_,Fa(f,C),V,S),Q&&jn(f,null,I,"created"),de(b,f,f.scopeId,V,I),L){for(const me in L)me!=="value"&&!Ki(me)&&i(b,me,null,L[me],C,f.children,I,_,ze);"value"in L&&i(b,"value",null,L.value,C),(A=L.onVnodeBeforeMount)&&Mt(A,I,f)}Q&&jn(f,null,I,"beforeMount");const ne=xv(_,B);ne&&B.beforeEnter(b),r(b,p,m),((A=L&&L.onVnodeMounted)||ne||Q)&&lt(()=>{A&&Mt(A,I,f),ne&&B.enter(b),Q&&jn(f,null,I,"mounted")},_)},de=(f,p,m,I,_)=>{if(m&&g(f,m),I)for(let C=0;C<I.length;C++)g(f,I[C]);if(_){let C=_.subTree;if(p===C){const V=_.vnode;de(f,V,V.scopeId,V.slotScopeIds,_.parent)}}},te=(f,p,m,I,_,C,V,S,b=0)=>{for(let A=b;A<f.length;A++){const L=f[A]=S?gn(f[A]):xt(f[A]);R(null,L,p,m,I,_,C,V,S)}},ee=(f,p,m,I,_,C,V)=>{const S=p.el=f.el;let{patchFlag:b,dynamicChildren:A,dirs:L}=p;b|=f.patchFlag&16;const q=f.props||ve,B=p.props||ve;let Q;if(m&&$n(m,!1),(Q=B.onVnodeBeforeUpdate)&&Mt(Q,m,p,f),L&&jn(p,f,m,"beforeUpdate"),m&&$n(m,!0),A?_e(f.dynamicChildren,A,S,m,I,Fa(p,_),C):V||ue(f,p,S,null,m,I,Fa(p,_),C,!1),b>0){if(b&16)We(S,p,q,B,m,I,_);else if(b&2&&q.class!==B.class&&i(S,"class",null,B.class,_),b&4&&i(S,"style",q.style,B.style,_),b&8){const ne=p.dynamicProps;for(let me=0;me<ne.length;me++){const Te=ne[me],Me=q[Te],Tt=B[Te];(Tt!==Me||Te==="value")&&i(S,Te,Me,Tt,_,f.children,m,I,ze)}}b&1&&f.children!==p.children&&u(S,p.children)}else!V&&A==null&&We(S,p,q,B,m,I,_);((Q=B.onVnodeUpdated)||L)&&lt(()=>{Q&&Mt(Q,m,p,f),L&&jn(p,f,m,"updated")},I)},_e=(f,p,m,I,_,C,V)=>{for(let S=0;S<p.length;S++){const b=f[S],A=p[S],L=b.el&&(b.type===At||!ls(b,A)||b.shapeFlag&70)?h(b.el):m;R(b,A,L,null,I,_,C,V,!0)}},We=(f,p,m,I,_,C,V)=>{if(m!==I){if(m!==ve)for(const S in m)!Ki(S)&&!(S in I)&&i(f,S,m[S],null,V,p.children,_,C,ze);for(const S in I){if(Ki(S))continue;const b=I[S],A=m[S];b!==A&&S!=="value"&&i(f,S,A,b,V,p.children,_,C,ze)}"value"in I&&i(f,"value",m.value,I.value,V)}},ft=(f,p,m,I,_,C,V,S,b)=>{const A=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:B,slotScopeIds:Q}=p;Q&&(S=S?S.concat(Q):Q),f==null?(r(A,m,I),r(L,m,I),te(p.children||[],m,L,_,C,V,S,b)):q>0&&q&64&&B&&f.dynamicChildren?(_e(f.dynamicChildren,B,m,_,C,V,S),(p.key!=null||_&&p===_.subTree)&&fp(f,p,!0)):ue(f,p,m,L,_,C,V,S,b)},_t=(f,p,m,I,_,C,V,S,b)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?_.ctx.activate(p,m,I,V,b):Bn(p,m,I,_,C,V,b):yt(f,p,b)},Bn=(f,p,m,I,_,C,V)=>{const S=f.component=Kv(f,I,_);if(np(f)&&(S.ctx.renderer=U),Wv(S),S.asyncDep){if(_&&_.registerDep(S,ce),!f.el){const b=S.subTree=it(tr);P(null,b,p,m)}}else ce(S,f,p,m,_,C,V)},yt=(f,p,m)=>{const I=p.component=f.component;if(tv(f,p,m))if(I.asyncDep&&!I.asyncResolved){ge(I,p,m);return}else I.next=p,Gy(I.update),I.effect.dirty=!0,I.update();else p.el=f.el,I.vnode=p},ce=(f,p,m,I,_,C,V)=>{const S=()=>{if(f.isMounted){let{next:L,bu:q,u:B,parent:Q,vnode:ne}=f;{const mr=pp(f);if(mr){L&&(L.el=ne.el,ge(f,L,V)),mr.asyncDep.then(()=>{f.isUnmounted||S()});return}}let me=L,Te;$n(f,!1),L?(L.el=ne.el,ge(f,L,V)):L=ne,q&&Wi(q),(Te=L.props&&L.props.onVnodeBeforeUpdate)&&Mt(Te,Q,L,ne),$n(f,!0);const Me=xa(f),Tt=f.subTree;f.subTree=Me,R(Tt,Me,h(Tt.el),y(Tt),f,_,C),L.el=Me.el,me===null&&nv(f,Me.el),B&&lt(B,_),(Te=L.props&&L.props.onVnodeUpdated)&&lt(()=>Mt(Te,Q,L,ne),_)}else{let L;const{el:q,props:B}=p,{bm:Q,m:ne,parent:me}=f,Te=Qi(p);if($n(f,!1),Q&&Wi(Q),!Te&&(L=B&&B.onVnodeBeforeMount)&&Mt(L,me,p),$n(f,!0),q&&we){const Me=()=>{f.subTree=xa(f),we(q,f.subTree,f,_,null)};Te?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Me()):Me()}else{const Me=f.subTree=xa(f);R(null,Me,m,I,f,_,C),p.el=Me.el}if(ne&&lt(ne,_),!Te&&(L=B&&B.onVnodeMounted)){const Me=p;lt(()=>Mt(L,me,Me),_)}(p.shapeFlag&256||me&&Qi(me.vnode)&&me.vnode.shapeFlag&256)&&f.a&&lt(f.a,_),f.isMounted=!0,p=m=I=null}},b=f.effect=new fl(S,wt,()=>wl(A),f.scope),A=f.update=()=>{b.dirty&&b.run()};A.id=f.uid,$n(f,!0),A()},ge=(f,p,m)=>{p.component=f;const I=f.vnode.props;f.vnode=p,f.next=null,kv(f,p.props,I,m),Vv(f,p.children,m),cr(),th(f),lr()},ue=(f,p,m,I,_,C,V,S,b=!1)=>{const A=f&&f.children,L=f?f.shapeFlag:0,q=p.children,{patchFlag:B,shapeFlag:Q}=p;if(B>0){if(B&128){ln(A,q,m,I,_,C,V,S,b);return}else if(B&256){Gt(A,q,m,I,_,C,V,S,b);return}}Q&8?(L&16&&ze(A,_,C),q!==A&&u(m,q)):L&16?Q&16?ln(A,q,m,I,_,C,V,S,b):ze(A,_,C,!0):(L&8&&u(m,""),Q&16&&te(q,m,I,_,C,V,S,b))},Gt=(f,p,m,I,_,C,V,S,b)=>{f=f||Pr,p=p||Pr;const A=f.length,L=p.length,q=Math.min(A,L);let B;for(B=0;B<q;B++){const Q=p[B]=b?gn(p[B]):xt(p[B]);R(f[B],Q,m,null,_,C,V,S,b)}A>L?ze(f,_,C,!0,!1,q):te(p,m,I,_,C,V,S,b,q)},ln=(f,p,m,I,_,C,V,S,b)=>{let A=0;const L=p.length;let q=f.length-1,B=L-1;for(;A<=q&&A<=B;){const Q=f[A],ne=p[A]=b?gn(p[A]):xt(p[A]);if(ls(Q,ne))R(Q,ne,m,null,_,C,V,S,b);else break;A++}for(;A<=q&&A<=B;){const Q=f[q],ne=p[B]=b?gn(p[B]):xt(p[B]);if(ls(Q,ne))R(Q,ne,m,null,_,C,V,S,b);else break;q--,B--}if(A>q){if(A<=B){const Q=B+1,ne=Q<L?p[Q].el:I;for(;A<=B;)R(null,p[A]=b?gn(p[A]):xt(p[A]),m,ne,_,C,V,S,b),A++}}else if(A>B)for(;A<=q;)ct(f[A],_,C,!0),A++;else{const Q=A,ne=A,me=new Map;for(A=ne;A<=B;A++){const pt=p[A]=b?gn(p[A]):xt(p[A]);pt.key!=null&&me.set(pt.key,A)}let Te,Me=0;const Tt=B-ne+1;let mr=!1,Hu=0;const cs=new Array(Tt);for(A=0;A<Tt;A++)cs[A]=0;for(A=Q;A<=q;A++){const pt=f[A];if(Me>=Tt){ct(pt,_,C,!0);continue}let Nt;if(pt.key!=null)Nt=me.get(pt.key);else for(Te=ne;Te<=B;Te++)if(cs[Te-ne]===0&&ls(pt,p[Te])){Nt=Te;break}Nt===void 0?ct(pt,_,C,!0):(cs[Nt-ne]=A+1,Nt>=Hu?Hu=Nt:mr=!0,R(pt,p[Nt],m,null,_,C,V,S,b),Me++)}const Ku=mr?Lv(cs):Pr;for(Te=Ku.length-1,A=Tt-1;A>=0;A--){const pt=ne+A,Nt=p[pt],Wu=pt+1<L?p[pt+1].el:I;cs[A]===0?R(null,Nt,m,Wu,_,C,V,S,b):mr&&(Te<0||A!==Ku[Te]?Vt(Nt,m,Wu,2):Te--)}}},Vt=(f,p,m,I,_=null)=>{const{el:C,type:V,transition:S,children:b,shapeFlag:A}=f;if(A&6){Vt(f.component.subTree,p,m,I);return}if(A&128){f.suspense.move(p,m,I);return}if(A&64){V.move(f,p,m,U);return}if(V===At){r(C,p,m);for(let q=0;q<b.length;q++)Vt(b[q],p,m,I);r(f.anchor,p,m);return}if(V===Ua){F(f,p,m);return}if(I!==2&&A&1&&S)if(I===0)S.beforeEnter(C),r(C,p,m),lt(()=>S.enter(C),_);else{const{leave:q,delayLeave:B,afterLeave:Q}=S,ne=()=>r(C,p,m),me=()=>{q(C,()=>{ne(),Q&&Q()})};B?B(C,ne,me):me()}else r(C,p,m)},ct=(f,p,m,I=!1,_=!1)=>{const{type:C,props:V,ref:S,children:b,dynamicChildren:A,shapeFlag:L,patchFlag:q,dirs:B}=f;if(S!=null&&Ec(S,null,m,f,!0),L&256){p.ctx.deactivate(f);return}const Q=L&1&&B,ne=!Qi(f);let me;if(ne&&(me=V&&V.onVnodeBeforeUnmount)&&Mt(me,p,f),L&6)bi(f.component,m,I);else{if(L&128){f.suspense.unmount(m,I);return}Q&&jn(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,m,_,U,I):A&&(C!==At||q>0&&q&64)?ze(A,p,m,!1,!0):(C===At&&q&384||!_&&L&16)&&ze(b,p,m),I&&pr(f)}(ne&&(me=V&&V.onVnodeUnmounted)||Q)&&lt(()=>{me&&Mt(me,p,f),Q&&jn(f,null,p,"unmounted")},m)},pr=f=>{const{type:p,el:m,anchor:I,transition:_}=f;if(p===At){gr(m,I);return}if(p===Ua){z(f);return}const C=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:V,delayLeave:S}=_,b=()=>V(m,C);S?S(f.el,C,b):b()}else C()},gr=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},bi=(f,p,m)=>{const{bum:I,scope:_,update:C,subTree:V,um:S}=f;I&&Wi(I),_.stop(),C&&(C.active=!1,ct(V,f,p,m)),S&&lt(S,p),lt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ze=(f,p,m,I=!1,_=!1,C=0)=>{for(let V=C;V<f.length;V++)ct(f[V],p,m,I,_)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let x=!1;const O=(f,p,m)=>{f==null?p._vnode&&ct(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,m),x||(x=!0,th(),Qf(),x=!1),p._vnode=f},U={p:R,um:ct,m:Vt,r:pr,mt:Bn,mc:te,pc:ue,pbc:_e,n:y,o:t};let he,we;return e&&([he,we]=e(U)),{render:O,hydrate:he,createApp:Pv(O,he)}}function Fa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fp(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gn(s[i]),a.el=o.el),n||fp(o,a)),a.type===Go&&(a.el=o.el)}}function Lv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}const Fv=t=>t.__isTeleport,At=Symbol.for("v-fgt"),Go=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),As=[];let Rt=null;function Xe(t=!1){As.push(Rt=t?null:[])}function Uv(){As.pop(),Rt=As[As.length-1]||null}let Us=1;function hh(t){Us+=t}function gp(t){return t.dynamicChildren=Us>0?Rt||Pr:null,Uv(),Us>0&&Rt&&Rt.push(t),t}function ut(t,e,n,r,s,i){return gp(Re(t,e,n,r,s,i,!0))}function mp(t,e,n,r,s){return gp(it(t,e,n,r,s,!0))}function Ic(t){return t?t.__v_isVNode===!0:!1}function ls(t,e){return t.type===e.type&&t.key===e.key}const Qo="__vInternal",_p=({key:t})=>t??null,Ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||Ne(t)||X(t)?{i:ht,r:t,k:e,f:!!n}:t:null);function Re(t,e=null,n=null,r=0,s=null,i=t===At?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&Ji(e),scopeId:Wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ht};return a?(Pl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Us>0&&!o&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const it=Bv;function Bv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===rv)&&(t=tr),Ic(t)){const a=Lr(t,e,!0);return n&&Pl(a,n),Us>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(Yv(t)&&(t=t.__vccOpts),e){e=jv(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=oi(a)),Ae(c)&&($f(c)&&!W(c)&&(c=Ke({},c)),e.style=dl(c))}const o=Ve(t)?1:sv(t)?128:Fv(t)?64:Ae(t)?4:X(t)?2:0;return Re(t,e,n,r,s,o,i,!0)}function jv(t){return t?$f(t)||Qo in t?Ke({},t):t:null}function Lr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?$v(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_p(a),ref:e&&e.ref?n&&s?W(s)?s.concat(Ji(e)):[s,Ji(e)]:Ji(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lr(t.ssContent),ssFallback:t.ssFallback&&Lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yp(t=" ",e=0){return it(Go,null,t,e)}function Ar(t="",e=!1){return e?(Xe(),mp(tr,null,t)):it(tr,null,t)}function xt(t){return t==null||typeof t=="boolean"?it(tr):W(t)?it(At,null,t.slice()):typeof t=="object"?gn(t):it(Go,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lr(t)}function Pl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Qo in e)?e._ctx=ht:s===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),r&64?(n=16,e=[yp(e)]):n=8);t.children=e,t.shapeFlag|=n}function $v(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oi([e.class,r.class]));else if(s==="style")e.style=dl([e.style,r.style]);else if(Fo(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Mt(t,e,n,r=null){Pt(t,e,7,[n,r])}const qv=ap();let Hv=0;function Kv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qv,i={uid:Hv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,s),emitsOptions:Jf(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),t.ce&&t.ce(i),i}let Ze=null,po,wc;{const t=wf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};po=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),wc=e("__VUE_SSR_SETTERS__",n=>Yo=n)}const ci=t=>{const e=Ze;return po(t),t.scope.on(),()=>{t.scope.off(),po(e)}},dh=()=>{Ze&&Ze.scope.off(),po(null)};function vp(t){return t.vnode.shapeFlag&4}let Yo=!1;function Wv(t,e=!1){e&&wc(e);const{props:n,children:r}=t.vnode,s=vp(t);bv(t,n,s,e),Ov(t,r);const i=s?zv(t,e):void 0;return e&&wc(!1),i}function zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$o(new Proxy(t.ctx,Ev));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Qv(t):null,i=ci(t);cr();const o=Rn(r,t,0,[t.props,s]);if(lr(),i(),yf(o)){if(o.then(dh,dh),e)return o.then(a=>{fh(t,a,e)}).catch(a=>{Ho(a,t,0)});t.asyncDep=o}else fh(t,o,e)}else Ep(t,e)}function fh(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Wf(e)),Ep(t,n)}let ph;function Ep(t,e,n){const r=t.type;if(!t.render){if(!e&&ph&&!r.render){const s=r.template||Rl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ke(Ke({isCustomElement:i,delimiters:a},o),c);r.render=ph(s,l)}}t.render=r.render||wt}{const s=ci(t);cr();try{Iv(t)}finally{lr(),s()}}}function Gv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function Qv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Gv(t)},slots:t.slots,emit:t.emit,expose:e}}function Jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wf($o(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ts)return Ts[n](t)},has(e,n){return n in e||n in Ts}}))}function Yv(t){return X(t)&&"__vccOpts"in t}const vt=(t,e)=>Uy(t,e,Yo);function Ip(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!W(e)?Ic(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ic(n)&&(n=[n]),it(t,e,n))}const Jv="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Xv="http://www.w3.org/2000/svg",Zv="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,gh=mn&&mn.createElement("template"),eE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mn.createElementNS(Xv,t):e==="mathml"?mn.createElementNS(Zv,t):mn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=gh.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tE=Symbol("_vtc");function nE(t,e,n){const r=t[tE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rE=Symbol("_vod"),sE=Symbol("");function iE(t,e,n){const r=t.style,s=r.display,i=Ve(n);if(n&&!i){if(e&&!Ve(e))for(const o in e)n[o]==null&&Tc(r,o,"");for(const o in n)Tc(r,o,n[o])}else if(i){if(e!==n){const o=r[sE];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");rE in t&&(r.display=s)}const mh=/\s*!important$/;function Tc(t,e,n){if(W(n))n.forEach(r=>Tc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=oE(t,e);mh.test(n)?t.setProperty(Xr(r),n.replace(mh,""),"important"):t[r]=n}}const _h=["Webkit","Moz","ms"],Ba={};function oE(t,e){const n=Ba[e];if(n)return n;let r=Mr(e);if(r!=="filter"&&r in t)return Ba[e]=r;r=If(r);for(let s=0;s<_h.length;s++){const i=_h[s]+r;if(i in t)return Ba[e]=i}return e}const yh="http://www.w3.org/1999/xlink";function aE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yh,e.slice(6,e.length)):t.setAttributeNS(yh,e,n);else{const i=my(e);n==null||i&&!Tf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function cE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function vr(t,e,n,r){t.addEventListener(e,n,r)}function lE(t,e,n,r){t.removeEventListener(e,n,r)}const vh=Symbol("_vei");function uE(t,e,n,r,s=null){const i=t[vh]||(t[vh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=hE(e);if(r){const l=i[e]=pE(r,s);vr(t,a,l,c)}else o&&(lE(t,a,o,c),i[e]=void 0)}}const Eh=/(?:Once|Passive|Capture)$/;function hE(t){let e;if(Eh.test(t)){e={};let r;for(;r=t.match(Eh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let ja=0;const dE=Promise.resolve(),fE=()=>ja||(dE.then(()=>ja=0),ja=Date.now());function pE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(gE(r,n.value),e,5,[r])};return n.value=t,n.attached=fE(),n}function gE(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ih=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mE=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?nE(t,r,l):e==="style"?iE(t,n,r):Fo(e)?ll(e)||uE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_E(t,e,r,l))?cE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),aE(t,e,r,l))};function _E(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ih(e)&&X(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ih(e)&&Ve(n)?!1:e in t}const wh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Wi(e,n):e};function yE(t){t.target.composing=!0}function Th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $a=Symbol("_assign"),Xi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[$a]=wh(s);const i=r||s.props&&s.props.type==="number";vr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hc(a)),t[$a](a)}),n&&vr(t,"change",()=>{t.value=t.value.trim()}),e||(vr(t,"compositionstart",yE),vr(t,"compositionend",Th),vr(t,"change",Th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[$a]=wh(i),t.composing)return;const o=s||t.type==="number"?hc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},vE=["ctrl","shift","alt","meta"],EE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vE.some(n=>t[`${n}Key`]&&!e.includes(n))},wp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=EE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},IE=Ke({patchProp:mE},eE);let Ah;function wE(){return Ah||(Ah=Nv(IE))}const TE=(...t)=>{const e=wE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=RE(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,AE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function AE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function RE(t){return Ve(t)?document.querySelector(t):t}var SE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Tp;const Xo=t=>Tp=t,Ap=Symbol();function Ac(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Rs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Rs||(Rs={}));function PE(){const t=Sf(!0),e=t.run(()=>qo({}));let n=[],r=[];const s=$o({install(i){Xo(s),s._a=i,i.provide(Ap,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!SE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Rp=()=>{};function Rh(t,e,n,r=Rp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Pf()&&yy(s),s}function _r(t,...e){t.slice().forEach(n=>{n(...e)})}const CE=t=>t();function Rc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ac(s)&&Ac(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!An(r)?t[n]=Rc(s,r):t[n]=r}return t}const bE=Symbol();function kE(t){return!Ac(t)||!t.hasOwnProperty(bE)}const{assign:fn}=Object;function DE(t){return!!(Ne(t)&&t.effect)}function OE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=qy(n.state.value[t]);return fn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=$o(vt(()=>{Xo(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=Sp(t,l,e,n,r,!0),c}function Sp(t,e,n={},r,s,i){let o;const a=fn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),qo({});let R;function T(te){let ee;l=u=!1,typeof te=="function"?(te(r.state.value[t]),ee={type:Rs.patchFunction,storeId:t,events:g}):(Rc(r.state.value[t],te),ee={type:Rs.patchObject,payload:te,storeId:t,events:g});const _e=R=Symbol();Il().then(()=>{R===_e&&(l=!0)}),u=!0,_r(h,ee,r.state.value[t])}const P=i?function(){const{state:ee}=n,_e=ee?ee():{};this.$patch(We=>{fn(We,_e)})}:Rp;function M(){o.stop(),h=[],d=[],r._s.delete(t)}function F(te,ee){return function(){Xo(r);const _e=Array.from(arguments),We=[],ft=[];function _t(ce){We.push(ce)}function Bn(ce){ft.push(ce)}_r(d,{args:_e,name:te,store:Z,after:_t,onError:Bn});let yt;try{yt=ee.apply(this&&this.$id===t?this:Z,_e)}catch(ce){throw _r(ft,ce),ce}return yt instanceof Promise?yt.then(ce=>(_r(We,ce),ce)).catch(ce=>(_r(ft,ce),Promise.reject(ce))):(_r(We,yt),yt)}}const z={_p:r,$id:t,$onAction:Rh.bind(null,d),$patch:T,$reset:P,$subscribe(te,ee={}){const _e=Rh(h,te,ee.detached,()=>We()),We=o.run(()=>ws(()=>r.state.value[t],ft=>{(ee.flush==="sync"?u:l)&&te({storeId:t,type:Rs.direct,events:g},ft)},fn({},c,ee)));return _e},$dispose:M},Z=ai(z);r._s.set(t,Z);const de=(r._a&&r._a.runWithContext||CE)(()=>r._e.run(()=>(o=Sf()).run(e)));for(const te in de){const ee=de[te];if(Ne(ee)&&!DE(ee)||An(ee))i||(E&&kE(ee)&&(Ne(ee)?ee.value=E[te]:Rc(ee,E[te])),r.state.value[t][te]=ee);else if(typeof ee=="function"){const _e=F(te,ee);de[te]=_e,a.actions[te]=ee}}return fn(Z,de),fn(ae(Z),de),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:te=>{T(ee=>{fn(ee,te)})}}),r._p.forEach(te=>{fn(Z,o.run(()=>te({store:Z,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(Z.$state,E),l=!0,u=!0,Z}function Pp(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Cv();return a=a||(l?Ct(Ap,null):null),a&&Xo(a),a=Tp,a._s.has(r)||(i?Sp(r,e,s,a):OE(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Er=typeof window<"u";function VE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function qa(t,e){const n={};for(const r in e){const s=e[r];n[r]=bt(s)?s.map(t):t(s)}return n}const Ss=()=>{},bt=Array.isArray,NE=/\/$/,ME=t=>t.replace(NE,"");function Ha(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=UE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fr(e.matched[r],n.matched[s])&&Cp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return bt(t)?Ph(t,e):bt(e)?Ph(e,t):t===e}function Ph(t,e){return bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Bs;(function(t){t.pop="pop",t.push="push"})(Bs||(Bs={}));var Ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ps||(Ps={}));function BE(t){if(!t)if(Er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ME(t)}const jE=/^[^#]+#/;function $E(t,e){return t.replace(jE,"#")+e}function qE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zo=()=>({left:window.pageXOffset,top:window.pageYOffset});function HE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ch(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function KE(t,e){Sc.set(t,e)}function WE(t){const e=Sc.get(t);return Sc.delete(t),e}let zE=()=>location.protocol+"//"+location.host;function bp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Sh(c,"")}return Sh(n,t)+r+s}function GE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=bp(t,location),E=n.value,R=e.value;let T=0;if(d){if(n.value=g,e.value=d,o&&o===E){o=null;return}T=R?d.position-R.position:0}else r(g);s.forEach(P=>{P(n.value,E,{delta:T,type:Bs.pop,direction:T?T>0?Ps.forward:Ps.back:Ps.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:Zo()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function bh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zo():null}}function QE(t){const{history:e,location:n}=window,r={value:bp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:zE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,bh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Zo()});i(u.current,u,!0);const h=fe({},bh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function YE(t){t=BE(t);const e=QE(t),n=GE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:$E.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JE(t){return typeof t=="string"||t&&typeof t=="object"}function kp(t){return typeof t=="string"||typeof t=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dp=Symbol("");var kh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kh||(kh={}));function Ur(t,e){return fe(new Error,{type:t,[Dp]:!0},e)}function Qt(t,e){return t instanceof Error&&Dp in t&&(e==null||!!(t.type&e))}const Dh="[^/]+?",XE={sensitive:!1,strict:!1,start:!0,end:!0},ZE=/[.+*?^${}()[\]/\\]/g;function eI(t,e){const n=fe({},XE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(ZE,"\\$&"),g+=40;else if(d.type===1){const{value:E,repeatable:R,optional:T,regexp:P}=d;i.push({name:E,repeatable:R,optional:T});const M=P||Dh;if(M!==Dh){g+=10;try{new RegExp(`(${M})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${E}" (${M}): `+z.message)}}let F=R?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(F=T&&l.length<2?`(?:/${F})`:"/"+F),T&&(F+="?"),s+=F,g+=20,T&&(g+=-8),R&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",E=i[d-1];h[E.name]=g&&E.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:R,optional:T}=g,P=E in l?l[E]:"";if(bt(P)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const M=bt(P)?P.join("/"):P;if(!M)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function tI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=tI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Oh(r))return 1;if(Oh(s))return-1}return s.length-r.length}function Oh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rI={type:0,value:""},sI=/[a-zA-Z0-9_]/;function iI(t){if(!t)return[[]];if(t==="/")return[[rI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:sI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function oI(t,e,n){const r=eI(iI(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aI(t,e){const n=[],r=new Map;e=Mh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,E=cI(u);E.aliasOf=d&&d.record;const R=Mh(e,u),T=[E];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of F)T.push(fe({},E,{components:d?d.record.components:E.components,path:z,aliasOf:d?d.record:E}))}let P,M;for(const F of T){const{path:z}=F;if(h&&z[0]!=="/"){const Z=h.record.path,$=Z[Z.length-1]==="/"?"":"/";F.path=h.record.path+(z&&$+z)}if(P=oI(F,h,R),d?d.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),g&&u.name&&!Nh(P)&&o(u.name)),E.children){const Z=E.children;for(let $=0;$<Z.length;$++)i(Z[$],P,d&&d.children[$])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return M?()=>{o(M)}:Ss}function o(u){if(kp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&nI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Op(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nh(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},E,R;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Ur(1,{location:u});R=d.record.name,g=fe(Vh(h.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Vh(u.params,d.keys.map(M=>M.name))),E=d.stringify(g)}else if("path"in u)E=u.path,d=n.find(M=>M.re.test(E)),d&&(g=d.parse(E),R=d.record.name);else{if(d=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!d)throw Ur(1,{location:u,currentLocation:h});R=d.record.name,g=fe({},h.params,u.params),E=d.stringify(g)}const T=[];let P=d;for(;P;)T.unshift(P.record),P=P.parent;return{name:R,path:E,params:g,matched:T,meta:uI(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uI(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Mh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Op(t,e){return e.children.some(n=>n===t||Op(t,n))}const Vp=/#/g,hI=/&/g,dI=/\//g,fI=/=/g,pI=/\?/g,Np=/\+/g,gI=/%5B/g,mI=/%5D/g,Mp=/%5E/g,_I=/%60/g,xp=/%7B/g,yI=/%7C/g,Lp=/%7D/g,vI=/%20/g;function Cl(t){return encodeURI(""+t).replace(yI,"|").replace(gI,"[").replace(mI,"]")}function EI(t){return Cl(t).replace(xp,"{").replace(Lp,"}").replace(Mp,"^")}function Pc(t){return Cl(t).replace(Np,"%2B").replace(vI,"+").replace(Vp,"%23").replace(hI,"%26").replace(_I,"`").replace(xp,"{").replace(Lp,"}").replace(Mp,"^")}function II(t){return Pc(t).replace(fI,"%3D")}function wI(t){return Cl(t).replace(Vp,"%23").replace(pI,"%3F")}function TI(t){return t==null?"":wI(t).replace(dI,"%2F")}function go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function AI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Np," "),o=i.indexOf("="),a=go(o<0?i:i.slice(0,o)),c=o<0?null:go(i.slice(o+1));if(a in e){let l=e[a];bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function xh(t){let e="";for(let n in t){const r=t[n];if(n=II(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(r)?r.map(i=>i&&Pc(i)):[r&&Pc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function RI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const SI=Symbol(""),Lh=Symbol(""),ea=Symbol(""),Fp=Symbol(""),Cc=Symbol("");function us(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _n(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ur(4,{from:n,to:e})):h instanceof Error?a(h):JE(h)?a(Ur(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ka(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(PI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(_n(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=VE(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&_n(d,n,r,i,o)()}))}}return s}function PI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fh(t){const e=Ct(ea),n=Ct(Fp),r=vt(()=>e.resolve(xe(t.to))),s=vt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Fr.bind(null,u));if(d>-1)return d;const g=Uh(c[l-2]);return l>1&&Uh(u)===g&&h[h.length-1].path!==g?h.findIndex(Fr.bind(null,c[l-2])):d}),i=vt(()=>s.value>-1&&DI(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&Cp(n.params,r.value.params));function a(c={}){return kI(c)?e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(Ss):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const CI=Tl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fh,setup(t,{slots:e}){const n=ai(Fh(t)),{options:r}=Ct(ea),s=vt(()=>({[Bh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ip("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bI=CI;function kI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!bt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Uh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bh=(t,e,n)=>t??e??n,OI=Tl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ct(Cc),s=vt(()=>t.route||r.value),i=Ct(Lh,0),o=vt(()=>{let l=xe(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=vt(()=>s.value.matched[o.value]);Yi(Lh,vt(()=>o.value+1)),Yi(SI,a),Yi(Cc,s);const c=qo();return ws(()=>[c.value,a.value,t.name],([l,u,h],[d,g,E])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Fr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return jh(n.default,{Component:d,route:l});const g=h.props[u],E=g?g===!0?l.params:typeof g=="function"?g(l):g:null,T=Ip(d,fe({},E,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return jh(n.default,{Component:T,route:l})||T}}});function jh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Up=OI;function VI(t){const e=aI(t.routes,t),n=t.parseQuery||AI,r=t.stringifyQuery||xh,s=t.history,i=us(),o=us(),a=us(),c=By(hn);let l=hn;Er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qa.bind(null,y=>""+y),h=qa.bind(null,TI),d=qa.bind(null,go);function g(y,x){let O,U;return kp(y)?(O=e.getRecordMatcher(y),U=x):U=y,e.addRoute(U,O)}function E(y){const x=e.getRecordMatcher(y);x&&e.removeRoute(x)}function R(){return e.getRoutes().map(y=>y.record)}function T(y){return!!e.getRecordMatcher(y)}function P(y,x){if(x=fe({},x||c.value),typeof y=="string"){const p=Ha(n,y,x.path),m=e.resolve({path:p.path},x),I=s.createHref(p.fullPath);return fe(p,m,{params:d(m.params),hash:go(p.hash),redirectedFrom:void 0,href:I})}let O;if("path"in y)O=fe({},y,{path:Ha(n,y.path,x.path).path});else{const p=fe({},y.params);for(const m in p)p[m]==null&&delete p[m];O=fe({},y,{params:h(p)}),x.params=h(x.params)}const U=e.resolve(O,x),he=y.hash||"";U.params=u(d(U.params));const we=xE(r,fe({},y,{hash:EI(he),path:U.path})),f=s.createHref(we);return fe({fullPath:we,hash:he,query:r===xh?RI(y.query):y.query||{}},U,{redirectedFrom:void 0,href:f})}function M(y){return typeof y=="string"?Ha(n,y,c.value.path):fe({},y)}function F(y,x){if(l!==y)return Ur(8,{from:x,to:y})}function z(y){return de(y)}function Z(y){return z(fe(M(y),{replace:!0}))}function $(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let U=typeof O=="function"?O(y):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),fe({query:y.query,hash:y.hash,params:"path"in U?{}:y.params},U)}}function de(y,x){const O=l=P(y),U=c.value,he=y.state,we=y.force,f=y.replace===!0,p=$(O);if(p)return de(fe(M(p),{state:typeof p=="object"?fe({},he,p.state):he,force:we,replace:f}),x||O);const m=O;m.redirectedFrom=x;let I;return!we&&LE(r,U,O)&&(I=Ur(16,{to:m,from:U}),Vt(U,U,!0,!1)),(I?Promise.resolve(I):_e(m,U)).catch(_=>Qt(_)?Qt(_,2)?_:ln(_):ue(_,m,U)).then(_=>{if(_){if(Qt(_,2))return de(fe({replace:f},M(_.to),{state:typeof _.to=="object"?fe({},he,_.to.state):he,force:we}),x||m)}else _=ft(m,U,!0,f,he);return We(m,U,_),_})}function te(y,x){const O=F(y,x);return O?Promise.reject(O):Promise.resolve()}function ee(y){const x=gr.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(y):y()}function _e(y,x){let O;const[U,he,we]=NI(y,x);O=Ka(U.reverse(),"beforeRouteLeave",y,x);for(const p of U)p.leaveGuards.forEach(m=>{O.push(_n(m,y,x))});const f=te.bind(null,y,x);return O.push(f),ze(O).then(()=>{O=[];for(const p of i.list())O.push(_n(p,y,x));return O.push(f),ze(O)}).then(()=>{O=Ka(he,"beforeRouteUpdate",y,x);for(const p of he)p.updateGuards.forEach(m=>{O.push(_n(m,y,x))});return O.push(f),ze(O)}).then(()=>{O=[];for(const p of we)if(p.beforeEnter)if(bt(p.beforeEnter))for(const m of p.beforeEnter)O.push(_n(m,y,x));else O.push(_n(p.beforeEnter,y,x));return O.push(f),ze(O)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),O=Ka(we,"beforeRouteEnter",y,x),O.push(f),ze(O))).then(()=>{O=[];for(const p of o.list())O.push(_n(p,y,x));return O.push(f),ze(O)}).catch(p=>Qt(p,8)?p:Promise.reject(p))}function We(y,x,O){a.list().forEach(U=>ee(()=>U(y,x,O)))}function ft(y,x,O,U,he){const we=F(y,x);if(we)return we;const f=x===hn,p=Er?history.state:{};O&&(U||f?s.replace(y.fullPath,fe({scroll:f&&p&&p.scroll},he)):s.push(y.fullPath,he)),c.value=y,Vt(y,x,O,f),ln()}let _t;function Bn(){_t||(_t=s.listen((y,x,O)=>{if(!bi.listening)return;const U=P(y),he=$(U);if(he){de(fe(he,{replace:!0}),U).catch(Ss);return}l=U;const we=c.value;Er&&KE(Ch(we.fullPath,O.delta),Zo()),_e(U,we).catch(f=>Qt(f,12)?f:Qt(f,2)?(de(f.to,U).then(p=>{Qt(p,20)&&!O.delta&&O.type===Bs.pop&&s.go(-1,!1)}).catch(Ss),Promise.reject()):(O.delta&&s.go(-O.delta,!1),ue(f,U,we))).then(f=>{f=f||ft(U,we,!1),f&&(O.delta&&!Qt(f,8)?s.go(-O.delta,!1):O.type===Bs.pop&&Qt(f,20)&&s.go(-1,!1)),We(U,we,f)}).catch(Ss)}))}let yt=us(),ce=us(),ge;function ue(y,x,O){ln(y);const U=ce.list();return U.length?U.forEach(he=>he(y,x,O)):console.error(y),Promise.reject(y)}function Gt(){return ge&&c.value!==hn?Promise.resolve():new Promise((y,x)=>{yt.add([y,x])})}function ln(y){return ge||(ge=!y,Bn(),yt.list().forEach(([x,O])=>y?O(y):x()),yt.reset()),y}function Vt(y,x,O,U){const{scrollBehavior:he}=t;if(!Er||!he)return Promise.resolve();const we=!O&&WE(Ch(y.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return Il().then(()=>he(y,x,we)).then(f=>f&&HE(f)).catch(f=>ue(f,y,x))}const ct=y=>s.go(y);let pr;const gr=new Set,bi={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,hasRoute:T,getRoutes:R,resolve:P,options:t,push:z,replace:Z,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:Gt,install(y){const x=this;y.component("RouterLink",bI),y.component("RouterView",Up),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(c)}),Er&&!pr&&c.value===hn&&(pr=!0,z(s.location).catch(he=>{}));const O={};for(const he in hn)Object.defineProperty(O,he,{get:()=>c.value[he],enumerable:!0});y.provide(ea,x),y.provide(Fp,Bf(O)),y.provide(Cc,c);const U=y.unmount;gr.add(y),y.unmount=function(){gr.delete(y),gr.size<1&&(l=hn,_t&&_t(),_t=null,c.value=hn,pr=!1,ge=!1),U()}}};function ze(y){return y.reduce((x,O)=>x.then(()=>ee(O)),Promise.resolve())}return bi}function NI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Fr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Fr(l,c))||s.push(c))}return[n,r,s]}function Bp(){return Ct(ea)}const MI=Tl({__name:"App",setup(t){return(e,n)=>(Xe(),mp(xe(Up)))}});var $h={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new LI;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FI=function(t){const e=jp(t);return $p.encodeByteArray(e,!0)},mo=function(t){return FI(t).replace(/\./g,"")},qp=function(t){try{return $p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=()=>UI().__FIREBASE_DEFAULTS__,jI=()=>{if(typeof process>"u"||typeof $h>"u")return;const t=$h.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$I=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qp(t[1]);return e&&JSON.parse(e)},ta=()=>{try{return BI()||jI()||$I()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hp=t=>{var e,n;return(n=(e=ta())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qI=t=>{const e=Hp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kp=()=>{var t;return(t=ta())===null||t===void 0?void 0:t.config},Wp=t=>{var e;return(e=ta())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mo(JSON.stringify(n)),mo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function zI(){var t;const e=(t=ta())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YI(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JI(){return!zI()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zp(){try{return typeof indexedDB=="object"}catch{return!1}}function XI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZI,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ew(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function ew(t,e){return t.replace(tw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tw=/\{\$([^}]+)}/g;function nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qh(i)&&qh(o)){if(!_o(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rw(t,e){const n=new sw(t,e);return n.subscribe.bind(n)}class sw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wa),s.error===void 0&&(s.error=Wa),s.complete===void 0&&(s.complete=Wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cw(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aw(t){return t===qn?void 0:t}function cw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ow(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const uw={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},hw=se.INFO,dw={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},fw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=hw,this._logHandler=fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const pw=(t,e)=>e.some(n=>t instanceof n);let Hh,Kh;function gw(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mw(){return Kh||(Kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gp=new WeakMap,bc=new WeakMap,Qp=new WeakMap,za=new WeakMap,kl=new WeakMap;function _w(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gp.set(n,t)}).catch(()=>{}),kl.set(e,t),e}function yw(t){if(bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vw(t){kc=t(kc)}function Ew(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ga(this),e,...n);return Qp.set(r,e.sort?e.sort():[e]),Sn(r)}:mw().includes(t)?function(...e){return t.apply(Ga(this),e),Sn(Gp.get(this))}:function(...e){return Sn(t.apply(Ga(this),e))}}function Iw(t){return typeof t=="function"?Ew(t):(t instanceof IDBTransaction&&yw(t),pw(t,gw())?new Proxy(t,kc):t)}function Sn(t){if(t instanceof IDBRequest)return _w(t);if(za.has(t))return za.get(t);const e=Iw(t);return e!==t&&(za.set(t,e),kl.set(e,t)),e}const Ga=t=>kl.get(t);function ww(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Sn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Tw=["get","getKey","getAll","getAllKeys","count"],Aw=["put","add","delete","clear"],Qa=new Map;function Wh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Aw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Qa.set(e,i),i}vw(t=>({...t,get:(e,n,r)=>Wh(e,n)||t.get(e,n,r),has:(e,n)=>!!Wh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",zh="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new bl("@firebase/app"),Pw="@firebase/app-compat",Cw="@firebase/analytics-compat",bw="@firebase/analytics",kw="@firebase/app-check-compat",Dw="@firebase/app-check",Ow="@firebase/auth",Vw="@firebase/auth-compat",Nw="@firebase/database",Mw="@firebase/database-compat",xw="@firebase/functions",Lw="@firebase/functions-compat",Fw="@firebase/installations",Uw="@firebase/installations-compat",Bw="@firebase/messaging",jw="@firebase/messaging-compat",$w="@firebase/performance",qw="@firebase/performance-compat",Hw="@firebase/remote-config",Kw="@firebase/remote-config-compat",Ww="@firebase/storage",zw="@firebase/storage-compat",Gw="@firebase/firestore",Qw="@firebase/firestore-compat",Yw="firebase",Jw="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="[DEFAULT]",Xw={[Dc]:"fire-core",[Pw]:"fire-core-compat",[bw]:"fire-analytics",[Cw]:"fire-analytics-compat",[Dw]:"fire-app-check",[kw]:"fire-app-check-compat",[Ow]:"fire-auth",[Vw]:"fire-auth-compat",[Nw]:"fire-rtdb",[Mw]:"fire-rtdb-compat",[xw]:"fire-fn",[Lw]:"fire-fn-compat",[Fw]:"fire-iid",[Uw]:"fire-iid-compat",[Bw]:"fire-fcm",[jw]:"fire-fcm-compat",[$w]:"fire-perf",[qw]:"fire-perf-compat",[Hw]:"fire-rc",[Kw]:"fire-rc-compat",[Ww]:"fire-gcs",[zw]:"fire-gcs-compat",[Gw]:"fire-fst",[Qw]:"fire-fst-compat","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map,Vc=new Map;function Zw(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Vc.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of yo.values())Zw(n,t);return!0}function Dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new li("app","Firebase",eT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=Jw;function Yp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=Kp()),!n)throw Pn.create("no-options");const i=yo.get(s);if(i){if(_o(n,i.options)&&_o(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const o=new lw(s);for(const c of Vc.values())o.addComponent(c);const a=new tT(n,r,o);return yo.set(s,a),a}function Jp(t=Oc){const e=yo.get(t);if(!e&&t===Oc&&Kp())return Yp();if(!e)throw Pn.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let s=(r=Xw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}Br(new nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="firebase-heartbeat-database",rT=1,js="firebase-heartbeat-store";let Ya=null;function Xp(){return Ya||(Ya=ww(nT,rT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(js)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Ya}async function sT(t){try{return await(await Xp()).transaction(js).objectStore(js).get(Zp(t))}catch(e){if(e instanceof cn)rr.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Gh(t,e){try{const r=(await Xp()).transaction(js,"readwrite");await r.objectStore(js).put(e,Zp(t)),await r.done}catch(n){if(n instanceof cn)rr.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function Zp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=1024,oT=30*24*60*60*1e3;class aT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=oT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qh(),{heartbeatsToSend:r,unsentEntries:s}=cT(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qh(){return new Date().toISOString().substring(0,10)}function cT(t,e=iT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zp()?XI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yh(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){Br(new nr("platform-logger",e=>new Rw(e),"PRIVATE")),Br(new nr("heartbeat",e=>new aT(e),"PRIVATE")),Cn(Dc,zh,t),Cn(Dc,zh,"esm2017"),Cn("fire-js","")}uT("");function Ol(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hT=eg,tg=new li("auth","Firebase",eg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new bl("@firebase/auth");function dT(t,...e){vo.logLevel<=se.WARN&&vo.warn(`Auth (${Zr}): ${t}`,...e)}function Zi(t,...e){vo.logLevel<=se.ERROR&&vo.error(`Auth (${Zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw Vl(t,...e)}function jt(t,...e){return Vl(t,...e)}function fT(t,e,n){const r=Object.assign(Object.assign({},hT()),{[e]:n});return new li("auth","Firebase",r).create(e,{appName:t.name})}function Vl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tg.create(t,...e)}function H(t,e,...n){if(!t)throw Vl(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zi(e),new Error(e)}function nn(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pT(){return Jh()==="http:"||Jh()==="https:"}function Jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pT()||GI()||"connection"in navigator)?navigator.onLine:!0}function mT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=WI()||QI()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=new hi(3e4,6e4);function Mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xn(t,e,n,r,s={}){return rg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ui(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ng.fetch()(sg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function rg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_T),e);try{const s=new ET(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fT(t,u,l);kt(t,u)}}catch(s){if(s instanceof cn)throw s;kt(t,"network-request-failed",{message:String(s)})}}async function di(t,e,n,r,s={}){const i=await xn(t,e,n,r,s);return"mfaPendingCredential"in i&&kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nl(t.config,s):`${t.config.apiScheme}://${s}`}function vT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ET{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),yT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=jt(t,e,r);return s.customData._tokenResponse=n,s}function Xh(t){return t!==void 0&&t.enterprise!==void 0}class IT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function wT(t,e){return xn(t,"GET","/v2/recaptchaConfig",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(t,e){return xn(t,"POST","/v1/accounts:delete",e)}async function AT(t,e){return xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RT(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=Ml(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Cs(Ja(s.auth_time)),issuedAtTime:Cs(Ja(s.iat)),expirationTime:Cs(Ja(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ja(t){return Number(t)*1e3}function Ml(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=qp(n);return s?JSON.parse(s):(Zi("Failed to decode base64 JWT payload"),null)}catch(s){return Zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ST(t){const e=Ml(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&PT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $s(t,AT(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DT(i.providerUserInfo):[],a=kT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ig(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function bT(t){const e=nt(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DT(t){return t.map(e=>{var{providerId:n}=e,r=Ol(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(t,e){const n=await rg(t,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=sg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ng.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VT(t,e){return xn(t,"POST","/v2/accounts:revokeToken",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ST(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qs;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qs,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ig(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RT(this,e)}reload(){return bT(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $s(this,TT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:z,isAnonymous:Z,providerData:$,stsTokenManager:de}=n;H(F&&de,e,"internal-error");const te=qs.fromJSON(this.name,de);H(typeof F=="string",e,"internal-error"),dn(h,e.name),dn(d,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof Z=="boolean",e,"internal-error"),dn(g,e.name),dn(E,e.name),dn(R,e.name),dn(T,e.name),dn(P,e.name),dn(M,e.name);const ee=new Zn({uid:F,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:Z,photoURL:E,phoneNumber:g,tenantId:R,stsTokenManager:te,createdAt:P,lastLoginAt:M});return $&&Array.isArray($)&&(ee.providerData=$.map(_e=>Object.assign({},_e))),T&&(ee._redirectEventId=T),ee}static async _fromIdTokenResponse(e,n,r=!1){const s=new qs;s.updateFromServerResponse(n);const i=new Zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Eo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Map;function Jt(t){nn(t instanceof Function,"Expected a class definition");let e=Zh.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}og.type="NONE";const ed=og;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){return`firebase:${t}:${e}:${n}`}class kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new kr(Jt(ed),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Jt(ed);const o=eo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Zn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new kr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new kr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hg(e))return"Blackberry";if(dg(e))return"Webos";if(xl(e))return"Safari";if((e.includes("chrome/")||cg(e))&&!e.includes("edge/"))return"Chrome";if(ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ag(t=De()){return/firefox\//i.test(t)}function xl(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cg(t=De()){return/crios\//i.test(t)}function lg(t=De()){return/iemobile/i.test(t)}function ug(t=De()){return/android/i.test(t)}function hg(t=De()){return/blackberry/i.test(t)}function dg(t=De()){return/webos/i.test(t)}function na(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NT(t=De()){var e;return na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MT(){return YI()&&document.documentMode===10}function fg(t=De()){return na(t)||ug(t)||dg(t)||hg(t)||/windows phone/i.test(t)||lg(t)}function xT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e=[]){let n;switch(t){case"Browser":n=td(De());break;case"Worker":n=`${td(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e={}){return xn(t,"GET","/v2/passwordPolicy",Mn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=6;class BT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.beforeStateQueue=new LT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FT(this),n=new BT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ln(t){return nt(t)}class nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=rw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$T().appendChild(r)})}function qT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const HT="https://www.google.com/recaptcha/enterprise.js?render=",KT="recaptcha-enterprise",WT="NO_RECAPTCHA";class zT{constructor(e){this.type=KT,this.auth=Ln(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{wT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new IT(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Xh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(WT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Xh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gg(HT+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function rd(t,e,n,r=!1){const s=new zT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await rd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await rd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e){const n=Dl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_o(i,e??{}))return s;kt(s,"already-initialized")}return n.initialize({options:e})}function QT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YT(t,e,n){const r=Ln(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=mg(e),{host:o,port:a}=JT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||XT()}function mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JT(t){const e=mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sd(o)}}}function sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function ZT(t,e){return xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e){return di(t,"POST","/v1/accounts:signInWithPassword",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){return di(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}async function nA(t,e){return di(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Ll{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mc(e,n,"signInWithPassword",eA);case"emailLink":return tA(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mc(e,r,"signUpPassword",ZT);case"emailLink":return nA(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e){return di(t,"POST","/v1/accounts:signInWithIdp",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="http://localhost";class sr extends Ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ol(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:rA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iA(t){const e=gs(ms(t)).link,n=e?gs(ms(e)).deep_link_id:null,r=gs(ms(t)).deep_link_id;return(r?gs(ms(r)).link:null)||r||n||e||t}class Fl{constructor(e){var n,r,s,i,o,a;const c=gs(ms(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=sA((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iA(e);try{return new Fl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return Hs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fl.parseLink(n);return H(r,"argument-error"),Hs._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends _g{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends fi{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends fi{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends fi{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t,e){return di(t,"POST","/v1/accounts:signUp",Mn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zn._fromIdTokenResponse(e,r,s),o=id(r);return new rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=id(r);return new rn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t){var e;const n=Ln(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await yg(n,{returnSecureToken:!0}),s=await rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Io(e,n,r,s)}}function Eg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,i,e,r):i})}async function oA(t,e,n=!1){const r=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await $s(t,Eg(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Ml(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),rn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e,n=!1){const r="signIn",s=await Eg(t,r,e),i=await rn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cA(t,e){return Ig(Ln(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t){const e=Ln(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lA(t,e,n){const r=Ln(t),o=await Mc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yg).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&wg(t),c}),a=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function uA(t,e,n){return cA(nt(t),es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wg(t),r})}function hA(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function dA(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function Ul(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function fA(t){return nt(t).signOut()}const wo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){const t=De();return xl(t)||na(t)}const gA=1e3,mA=10;class Ag extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pA()&&xT(),this.fallbackToPolling=fg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);MT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ag.type="LOCAL";const _A=Ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rg.type="SESSION";const Sg=Rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await yA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Bl("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function EA(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function IA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TA(){return Pg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebaseLocalStorageDb",AA=1,To="firebaseLocalStorage",bg="fbase_key";class pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(t,e){return t.transaction([To],e?"readwrite":"readonly").objectStore(To)}function RA(){const t=indexedDB.deleteDatabase(Cg);return new pi(t).toPromise()}function xc(){const t=indexedDB.open(Cg,AA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(To,{keyPath:bg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(To)?e(r):(r.close(),await RA(),e(await xc()))})})}async function od(t,e,n){const r=sa(t,!0).put({[bg]:e,value:n});return new pi(r).toPromise()}async function SA(t,e){const n=sa(t,!1).get(e),r=await new pi(n).toPromise();return r===void 0?null:r.value}function ad(t,e){const n=sa(t,!0).delete(e);return new pi(n).toPromise()}const PA=800,CA=3;class kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(TA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IA(),!this.activeServiceWorker)return;this.sender=new vA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await od(e,wo,"1"),await ad(e,wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>od(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sa(s,!1).getAll();return new pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kg.type="LOCAL";const bA=kg;new hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t,e){return e?Jt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DA(t){return Ig(t.auth,new jl(t),t.bypassAuthState)}function OA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),aA(n,new jl(t),t.bypassAuthState)}async function VA(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),oA(n,new jl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DA;case"linkViaPopup":case"linkViaRedirect":return VA;case"reauthViaPopup":case"reauthViaRedirect":return OA;default:kt(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new hi(2e3,1e4);class Rr extends Dg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NA.get())};e()}}Rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="pendingRedirect",to=new Map;class xA extends Dg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const r=await LA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LA(t,e){const n=BA(e),r=UA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function FA(t,e){to.set(t._key(),e)}function UA(t){return Jt(t._redirectPersistence)}function BA(t){return eo(MA,t.config.apiKey,t.name)}async function jA(t,e,n=!1){const r=Ln(t),s=kA(r,e),o=await new xA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=10*60*1e3;class qA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Og(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$A&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(e))}saveEventToCache(e){this.cachedEventUids.add(cd(e)),this.lastProcessedEventTime=Date.now()}}function cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Og({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Og(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(t,e={}){return xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zA=/^https?/;async function GA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KA(t);for(const n of e)try{if(QA(n))return}catch{}kt(t,"unauthorized-domain")}function QA(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zA.test(n))return!1;if(WA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new hi(3e4,6e4);function ld(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JA(t){return new Promise((e,n)=>{var r,s,i;function o(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(jt(t,"network-request-failed"))},timeout:YA.get()})}if(!((s=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=qT("iframefcb");return $t()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},gg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw no=null,e})}let no=null;function XA(t){return no=no||JA(t),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new hi(5e3,15e3),e0="__/auth/iframe",t0="emulator/auth/iframe",n0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s0(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nl(e,t0):`https://${t.config.authDomain}/${e0}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},s=r0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ui(r).slice(1)}`}async function i0(t){const e=await XA(t),n=$t().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:s0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},ZA.get());function c(){$t().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a0=500,c0=600,l0="_blank",u0="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h0(t,e,n,r=a0,s=c0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},o0),{width:r.toString(),height:s.toString(),top:i,left:o}),l=De().toLowerCase();n&&(a=cg(l)?l0:n),ag(l)&&(e=e||u0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,E])=>`${d}${g}=${E},`,"");if(NT(l)&&a!=="_self")return d0(e||"",a),new ud(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new ud(h)}function d0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="__/auth/handler",p0="emulator/auth/handler",g0=encodeURIComponent("fac");async function hd(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:s};if(e instanceof _g){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof fi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${g0}=${encodeURIComponent(c)}`:"";return`${m0(t)}?${ui(a).slice(1)}${l}`}function m0({config:t}){return t.emulator?Nl(t,p0):`https://${t.authDomain}/${f0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="webStorageSupport";class _0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sg,this._completeRedirectFn=jA,this._overrideRedirectResult=FA}async _openPopup(e,n,r,s){var i;nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hd(e,n,r,Nc(),s);return h0(e,o,Bl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hd(e,n,r,Nc(),s);return EA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await i0(e),r=new qA(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xa];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fg()||xl()||na()}}const y0=_0;var dd="@firebase/auth",fd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function I0(t){Br(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pg(t)},l=new jT(r,s,i,c);return QT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new nr("auth-internal",e=>{const n=Ln(e.getProvider("auth").getImmediate());return(r=>new v0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(dd,fd,E0(t)),Cn(dd,fd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=5*60,T0=Wp("authIdTokenMaxAge")||w0;let pd=null;const A0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>T0)return;const s=n==null?void 0:n.token;pd!==s&&(pd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jr(t=Jp()){const e=Dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GT(t,{popupRedirectResolver:y0,persistence:[bA,_A,Sg]}),r=Wp("authTokenSyncURL");if(r){const i=A0(r);dA(n,i,()=>i(n.currentUser)),hA(n,o=>i(o))}const s=Hp("auth");return s&&YT(n,`http://${s}`),n}I0("Browser");const ia=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},R0=t=>(Xf("data-v-817092d2"),t=t(),Zf(),t),S0={class:"chat-container"},P0={class:"messages"},C0={key:0},b0=R0(()=>Re("button",{type:"submit"},"Send",-1)),k0={__name:"ChatBox",props:{messages:Array,onSendMessage:Function,canSendMessage:Boolean,currentUserId:String},setup(t){const e=t,n=qo(""),r=s=>{console.log("message",s),e.onSendMessage(s),n.value="",console.log("currentUserId",e.currentUserId)};return(s,i)=>(Xe(),ut("div",S0,[Re("div",P0,[(Xe(!0),ut(At,null,ip(t.messages,o=>(Xe(),ut("div",{key:o.id,class:oi([{"my-message":o.userId===t.currentUserId,"other-message":o.userId!==t.currentUserId},"message"])},[Re("strong",null,Dn(o.username)+":",1),yp(),Re("span",null,Dn(o.text),1)],2))),128))]),t.canSendMessage?(Xe(),ut("div",C0,[Re("form",{onSubmit:i[1]||(i[1]=wp(o=>r(n.value),["prevent"]))},[Gi(Re("input",{"onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o),placeholder:"Type a message"},null,512),[[Xi,n.value]]),b0],32)])):Ar("",!0)]))}},D0=ia(k0,[["__scopeId","data-v-817092d2"]]),O0=t=>(Xf("data-v-b3b873a9"),t=t(),Zf(),t),V0={id:"sidebar"},N0=O0(()=>Re("div",{class:"title"},"Chat Channels",-1)),M0=["onClick"],x0={class:"name"},L0={class:"about"},F0={__name:"Sidebar",props:{chats:Array,selectedChatId:String},emits:["selectChat"],setup(t,{emit:e}){const n=e,r=s=>{n("selectChat",s)};return(s,i)=>(Xe(),ut("div",V0,[N0,(Xe(!0),ut(At,null,ip(t.chats,o=>(Xe(),ut("div",{key:o.id,class:oi(["chat-item",{"selected-chat":o.id===t.selectedChatId}]),onClick:a=>r(o.id)},[Re("span",x0,Dn(o.name),1),Re("span",L0,Dn(o.about),1)],10,M0))),128))]))}},U0=ia(F0,[["__scopeId","data-v-b3b873a9"]]);var B0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,$l=$l||{},G=B0||self;function oa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function gi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function j0(t){return Object.prototype.hasOwnProperty.call(t,Za)&&t[Za]||(t[Za]=++$0)}var Za="closure_uid_"+(1e9*Math.random()>>>0),$0=0;function q0(t,e,n){return t.call.apply(t.bind,arguments)}function H0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=q0:et=H0,et.apply(null,arguments)}function Li(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Fn(){this.s=this.s,this.o=this.o}var K0=0;Fn.prototype.s=!1;Fn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),K0!=0)&&j0(this)};Fn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ql(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(oa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var W0=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function Ks(t){return/^[\s\xa0]*$/.test(t)}function aa(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return aa().indexOf(t)!=-1}function Hl(t){return Hl[" "](t),t}Hl[" "]=function(){};function z0(t,e){var n=UR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var G0=Ft("Opera"),$r=Ft("Trident")||Ft("MSIE"),Ng=Ft("Edge"),Lc=Ng||$r,Mg=Ft("Gecko")&&!(aa().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),Q0=aa().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function xg(){var t=G.document;return t?t.documentMode:void 0}var Fc;e:{var ec="",tc=function(){var t=aa();if(Mg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ng)return/Edge\/([\d\.]+)/.exec(t);if($r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Q0)return/WebKit\/(\S+)/.exec(t);if(G0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tc&&(ec=tc?tc[1]:""),$r){var nc=xg();if(nc!=null&&nc>parseFloat(ec)){Fc=String(nc);break e}}Fc=ec}var Uc;if(G.document&&$r){var md=xg();Uc=md||parseInt(Fc,10)||void 0}else Uc=void 0;var Y0=Uc;function Ws(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mg){e:{try{Hl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:J0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ws.$.h.call(this)}}Ue(Ws,tt);var J0={2:"touch",3:"pen",4:"mouse"};Ws.prototype.h=function(){Ws.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var mi="closure_listenable_"+(1e6*Math.random()|0),X0=0;function Z0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++X0,this.fa=this.ia=!1}function ca(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Kl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function eR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Lg(t){const e={};for(const n in t)e[n]=t[n];return e}const _d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<_d.length;i++)n=_d[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function la(t){this.src=t,this.g={},this.h=0}la.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=jc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Z0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Bc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Vg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Wl="closure_lm_"+(1e6*Math.random()|0),rc={};function Ug(t,e,n,r,s){if(r&&r.once)return jg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ug(t,e[i],n,r,s);return null}return n=Ql(n),t&&t[mi]?t.O(e,n,gi(r)?!!r.capture:!!r,s):Bg(t,e,n,!1,r,s)}function Bg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=gi(s)?!!s.capture:!!s,a=Gl(t);if(a||(t[Wl]=a=new la(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=tR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)W0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(qg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tR(){function t(n){return e.call(t.src,t.listener,n)}const e=nR;return t}function jg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)jg(t,e[i],n,r,s);return null}return n=Ql(n),t&&t[mi]?t.P(e,n,gi(r)?!!r.capture:!!r,s):Bg(t,e,n,!0,r,s)}function $g(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)$g(t,e[i],n,r,s);else r=gi(r)?!!r.capture:!!r,n=Ql(n),t&&t[mi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=jc(i,n,r,s),-1<n&&(ca(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jc(e,n,r,s)),(n=-1<t?e[t]:null)&&zl(n))}function zl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[mi])Bc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(qg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gl(e))?(Bc(n,t),n.h==0&&(n.src=null,e[Wl]=null)):ca(t)}}}function qg(t){return t in rc?rc[t]:rc[t]="on"+t}function nR(t,e){if(t.fa)t=!0;else{e=new Ws(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zl(t),t=n.call(r,e)}return t}function Gl(t){return t=t[Wl],t instanceof la?t:null}var sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ql(t){return typeof t=="function"?t:(t[sc]||(t[sc]=function(e){return t.handleEvent(e)}),t[sc])}function Fe(){Fn.call(this),this.i=new la(this),this.S=this,this.J=null}Ue(Fe,Fn);Fe.prototype[mi]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){$g(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var s=e;e=new tt(r,t),Fg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Fi(o,r,!0,e)&&s}if(o=e.g=t,s=Fi(o,r,!0,e)&&s,s=Fi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Fi(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ca(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Bc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Yl=G.JSON.stringify;class rR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sR(){var t=Jl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class iR{constructor(){this.h=this.g=null}add(e,n){const r=Hg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hg=new rR(()=>new oR,t=>t.reset());class oR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function cR(t){G.setTimeout(()=>{throw t},0)}let zs,Gs=!1,Jl=new iR,Kg=()=>{const t=G.Promise.resolve(void 0);zs=()=>{t.then(lR)}};var lR=()=>{for(var t;t=sR();){try{t.h.call(t.g)}catch(n){cR(n)}var e=Hg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gs=!1};function ua(t,e){Fe.call(this),this.h=t||1,this.g=e||G,this.j=et(this.qb,this),this.l=Date.now()}Ue(ua,Fe);D=ua.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(Xl(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){ua.$.N.call(this),Xl(this),delete this.g};function Zl(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function Wg(t){t.g=Zl(()=>{t.g=null,t.i&&(t.i=!1,Wg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class uR extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qs(t){Fn.call(this),this.h=t,this.g={}}Ue(Qs,Fn);var yd=[];function zg(t,e,n,r){Array.isArray(n)||(n&&(yd[0]=n.toString()),n=yd);for(var s=0;s<n.length;s++){var i=Ug(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gg(t){Kl(t.g,function(e,n){this.g.hasOwnProperty(n)&&zl(e)},t),t.g={}}Qs.prototype.N=function(){Qs.$.N.call(this),Gg(this)};Qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ha(){this.g=!0}ha.prototype.Ea=function(){this.g=!1};function hR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function dR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Sr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pR(t,n)+(r?" "+r:"")})}function fR(t,e){t.info(function(){return"TIMEOUT: "+e})}ha.prototype.info=function(){};function pR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Yl(n)}catch{return e}}var ur={},vd=null;function da(){return vd=vd||new Fe}ur.Ta="serverreachability";function Qg(t){tt.call(this,ur.Ta,t)}Ue(Qg,tt);function Ys(t){const e=da();qe(e,new Qg(e))}ur.STAT_EVENT="statevent";function Yg(t,e){tt.call(this,ur.STAT_EVENT,t),this.stat=e}Ue(Yg,tt);function ot(t){const e=da();qe(e,new Yg(e,t))}ur.Ua="timingevent";function Jg(t,e){tt.call(this,ur.Ua,t),this.size=e}Ue(Jg,tt);function _i(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var fa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eu(){}eu.prototype.h=null;function Ed(t){return t.h||(t.h=t.i())}function Zg(){}var yi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tu(){tt.call(this,"d")}Ue(tu,tt);function nu(){tt.call(this,"c")}Ue(nu,tt);var $c;function pa(){}Ue(pa,eu);pa.prototype.g=function(){return new XMLHttpRequest};pa.prototype.i=function(){return{}};$c=new pa;function vi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qs(this),this.P=gR,t=Lc?125:void 0,this.V=new ua(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new em}function em(){this.i=null,this.g="",this.h=!1}var gR=45e3,tm={},qc={};D=vi.prototype;D.setTimeout=function(t){this.P=t};function Hc(t,e,n){t.L=1,t.A=ma(sn(e)),t.u=n,t.S=!0,nm(t,null)}function nm(t,e){t.G=Date.now(),Ei(t),t.B=sn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),um(n.i,"t",r),t.o=0,n=t.l.J,t.h=new em,t.g=Dm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new uR(et(t.Pa,t,t.g),t.O)),zg(t.U,t.g,"readystatechange",t.nb),e=t.I?Lg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ys(),hR(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&Ut(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=Ut(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Lc||this.g&&(this.h.h||this.g.ja()||Ad(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ys(3):Ys(2)),ga(this);var n=this.g.da();this.ca=n;t:if(rm(this)){var r=Ad(this.g);t="";var s=r.length,i=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),bs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dR(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ks(a)){var l=a;break t}}l=null}if(n=l)Sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kc(this,n);else{this.i=!1,this.s=3,ot(12),zn(this),bs(this);break e}}this.S?(sm(this,u,o),Lc&&this.i&&u==3&&(zg(this.U,this.V,"tick",this.mb),this.V.start())):(Sr(this.j,this.m,o,null),Kc(this,o)),u==4&&zn(this),this.i&&!this.J&&(u==4?Pm(this.l,this):(this.i=!1,Ei(this)))}else xR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),zn(this),bs(this)}}}catch{}finally{}};function rm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function sm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=mR(t,n),s==qc){e==4&&(t.s=4,ot(14),r=!1),Sr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==tm){t.s=4,ot(15),Sr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Sr(t.j,t.m,s,null),Kc(t,s);rm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),cu(e),e.M=!0,ot(11))):(Sr(t.j,t.m,n,"[Invalid Chunked Response]"),zn(t),bs(t))}D.mb=function(){if(this.g){var t=Ut(this.g),e=this.g.ja();this.o<e.length&&(ga(this),sm(this,t,e),this.i&&t!=4&&Ei(this))}};function mR(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?qc:(n=Number(e.substring(n,r)),isNaN(n)?tm:(r+=1,r+n>e.length?qc:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,zn(this)};function Ei(t){t.Y=Date.now()+t.P,im(t,t.P)}function im(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=_i(et(t.lb,t),e)}function ga(t){t.C&&(G.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(fR(this.j,this.B),this.L!=2&&(Ys(),ot(17)),zn(this),this.s=2,bs(this)):im(this,this.Y-t)};function bs(t){t.l.H==0||t.J||Pm(t.l,t)}function zn(t){ga(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xl(t.V),Gg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Kc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Wc(n.i,t))){if(!t.K&&Wc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)So(n),Ea(n);else break e;au(n),ot(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=_i(et(n.ib,n),6e3));if(1>=fm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Gn(n,11)}else if((t.K||n.g==t)&&So(n),!Ks(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ru(i,i.h),i.h=null))}if(r.F){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,Ee(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=km(r,r.J?r.pa:null,r.Y),o.K){pm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ga(a),Ei(a)),r.g=o}else Rm(r);0<n.j.length&&Ia(n)}else l[0]!="stop"&&l[0]!="close"||Gn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Gn(n,7):ou(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ys(4)}catch{}}function _R(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(oa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function yR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(oa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function om(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(oa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yR(t),r=_R(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function er(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof er){this.h=t.h,Ao(this,t.j),this.s=t.s,this.g=t.g,Ro(this,t.m),this.l=t.l;var e=t.i,n=new Js;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Id(this,n),this.o=t.o}else t&&(e=String(t).match(am))?(this.h=!1,Ao(this,e[1]||"",!0),this.s=_s(e[2]||""),this.g=_s(e[3]||"",!0),Ro(this,e[4]),this.l=_s(e[5]||"",!0),Id(this,e[6]||"",!0),this.o=_s(e[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ys(e,wd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ys(e,wd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ys(n,n.charAt(0)=="/"?wR:IR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ys(n,AR)),t.join("")};function sn(t){return new er(t)}function Ao(t,e,n){t.j=n?_s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Id(t,e,n){e instanceof Js?(t.i=e,RR(t.i,t.h)):(n||(e=ys(e,TR)),t.i=new Js(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function ma(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ER),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ER(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wd=/[#\/\?@]/g,IR=/[#\?:]/g,wR=/[#\?]/g,TR=/[#\?@]/g,AR=/#/g;function Js(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Map,t.h=0,t.i&&vR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Js.prototype;D.add=function(t,e){Un(this),this.i=null,t=ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cm(t,e){Un(t),e=ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lm(t,e){return Un(t),e=ts(t,e),t.g.has(e)}D.forEach=function(t,e){Un(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){Un(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){Un(this);let e=[];if(typeof t=="string")lm(this,t)&&(e=e.concat(this.g.get(ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Un(this),this.i=null,t=ts(this,t),lm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function um(t,e,n){cm(t,e),0<n.length&&(t.i=null,t.g.set(ts(t,e),ql(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RR(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(cm(this,r),um(this,s,n))},t)),t.j=e}var SR=class{constructor(t,e){this.g=t,this.map=e}};function hm(t){this.l=t||PR,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PR=10;function dm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fm(t){return t.h?1:t.g?t.g.size:0}function Wc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ru(t,e){t.g?t.g.add(e):t.h=e}function pm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hm.prototype.cancel=function(){if(this.i=gm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ql(t.i)}var CR=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function bR(){this.g=new CR}function kR(t,e,n){const r=n||"";try{om(t,function(s,i){let o=s;gi(s)&&(o=Yl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function DR(t,e){const n=new ha;if(G.Image){const r=new Image;r.onload=Li(Ui,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Li(Ui,n,r,"TestLoadImage: error",!1,e),r.onabort=Li(Ui,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Li(Ui,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ui(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function _a(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(_a,eu);_a.prototype.g=function(){return new ya(this.l,this.j)};_a.prototype.i=function(t){return function(){return t}}({});function ya(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=su,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(ya,Fe);var su=0;D=ya.prototype;D.open=function(t,e){if(this.readyState!=su)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=su};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ii(this):Xs(this),this.readyState==3&&mm(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,Ii(this))};D.Ya=function(t){this.g&&(this.response=t,Ii(this))};D.ka=function(){this.g&&Ii(this)};function Ii(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OR=G.JSON.parse;function Pe(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_m,this.L=this.M=!1}Ue(Pe,Fe);var _m="",VR=/^https?$/i,NR=["POST","PUT"];D=Pe.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$c.g(),this.C=this.u?Ed(this.u):Ed($c),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Td(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=Vg(NR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Em(this),0<this.B&&((this.L=MR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Zl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Td(this,i)}};function MR(t){return $r&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof $l<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ym(t),va(t)}function ym(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),va(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),va(this,!0)),Pe.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?vm(this):this.kb())};D.kb=function(){vm(this)};function vm(t){if(t.h&&typeof $l<"u"&&(!t.C[1]||Ut(t)!=4||t.da()!=2)){if(t.v&&Ut(t)==4)Zl(t.La,0,t);else if(qe(t,"readystatechange"),Ut(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(am)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!VR.test(s?s.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var i=2<Ut(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",ym(t)}}finally{va(t)}}}}function va(t,e){if(t.g){Em(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Em(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Ut(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OR(e)}};function Ad(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case _m:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xR(t){const e={};t=(t.g&&2<=Ut(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ks(t[r]))continue;var n=aR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}eR(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Im(t){let e="";return Kl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function iu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Im(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wm(t){this.Ga=0,this.j=[],this.l=new ha,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=hs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=hs("baseRetryDelayMs",5e3,t),this.hb=hs("retryDelaySeedMs",1e4,t),this.eb=hs("forwardChannelMaxRetries",2,t),this.xa=hs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new hm(t&&t.concurrentRequestLimit),this.Ja=new bR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=wm.prototype;D.ra=8;D.H=1;function ou(t){if(Tm(t),t.H==3){var e=t.W++,n=sn(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),wi(t,n),e=new vi(t,t.l,e),e.L=2,e.A=ma(sn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=Dm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ei(e)}bm(t)}function Ea(t){t.g&&(cu(t),t.g.cancel(),t.g=null)}function Tm(t){Ea(t),t.u&&(G.clearTimeout(t.u),t.u=null),So(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Ia(t){if(!dm(t.i)&&!t.m){t.m=!0;var e=t.Na;zs||Kg(),Gs||(zs(),Gs=!0),Jl.add(e,t),t.C=0}}function LR(t,e){return fm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_i(et(t.Na,t,e),Cm(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new vi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Lg(i),Fg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Am(this,s,e),n=sn(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),wi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Im(i)))+"&"+e:this.o&&iu(n,this.o,i)),ru(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,Hc(s,n,null)):Hc(s,n,e),this.H=2}}else this.H==3&&(t?Rd(this,t):this.j.length==0||dm(this.i)||Rd(this))};function Rd(t,e){var n;e?n=e.m:n=t.W++;const r=sn(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),wi(t,r),t.o&&t.s&&iu(r,t.o,t.s),n=new vi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Am(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ru(t.i,n),Hc(n,r,e)}function wi(t,e){t.na&&Kl(t.na,function(n,r){Ee(e,r,n)}),t.h&&om({},function(n,r){Ee(e,r,n)})}function Am(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{kR(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Rm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zs||Kg(),Gs||(zs(),Gs=!0),Jl.add(e,t),t.A=0}}function au(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_i(et(t.Ma,t),Cm(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Sm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_i(et(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Ea(this),Sm(this))};function cu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Sm(t){t.g=new vi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sn(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),wi(t,e),t.o&&t.s&&iu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ma(sn(e)),n.u=null,n.S=!0,nm(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Ea(this),au(this),ot(19))};function So(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Pm(t,e){var n=null;if(t.g==e){So(t),cu(t),t.g=null;var r=2}else if(Wc(t.i,e))n=e.F,pm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=da(),qe(r,new Jg(r,n)),Ia(t)}else Rm(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&LR(t,e)||r==2&&au(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Gn(t,5);break;case 4:Gn(t,10);break;case 3:Gn(t,6);break;default:Gn(t,2)}}}function Cm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Gn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new er("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Ao(n,"https"),ma(n)),DR(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),bm(t),Tm(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function bm(t){if(t.H=0,t.ma=[],t.h){const e=gm(t.i);(e.length!=0||t.j.length!=0)&&(gd(t.ma,e),gd(t.ma,t.j),t.i.i.length=0,ql(t.j),t.j.length=0),t.h.ya()}}function km(t,e,n){var r=n instanceof er?sn(n):new er(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ro(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new er(null);r&&Ao(i,r),e&&(i.g=e),s&&Ro(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),wi(t,r),r}function Dm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new _a({ob:n})):new Pe(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Om(){}D=Om.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Po(){if($r&&!(10<=Number(Y0)))throw Error("Environmental error: no available transport.")}Po.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Fe.call(this),this.g=new wm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ks(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ks(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ns(this)}Ue(mt,Fe);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=km(t,null,t.Y),Ia(t)};mt.prototype.close=function(){ou(this.g)};mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yl(t),t=n);e.j.push(new SR(e.fb++,t)),e.H==3&&Ia(e)};mt.prototype.N=function(){this.g.h=null,delete this.j,ou(this.g),delete this.g,mt.$.N.call(this)};function Vm(t){tu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(Vm,tu);function Nm(){nu.call(this),this.status=1}Ue(Nm,nu);function ns(t){this.g=t}Ue(ns,Om);ns.prototype.Ba=function(){qe(this.g,"a")};ns.prototype.Aa=function(t){qe(this.g,new Vm(t))};ns.prototype.za=function(t){qe(this.g,new Nm)};ns.prototype.ya=function(){qe(this.g,"b")};function FR(){this.blockSize=-1}function Dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(Dt,FR);Dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ic(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Dt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ic(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ic(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ic(this,r),s=0;break}}this.h=s,this.i+=e};Dt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var UR={};function lu(t){return-128<=t&&128>t?z0(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return Or;if(0>t)return je(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=zc;return new pe(e,0)}function Mm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return je(Mm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=Or,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var zc=4294967296,Or=lu(0),Gc=lu(1),Sd=lu(16777216);D=pe.prototype;D.ea=function(){if(Et(this))return-je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:zc+r)*e,e*=zc}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xt(this))return"0";if(Et(this))return"-"+je(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=bo(n,e).g;n=Co(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Xt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Et(t){return t.h==-1}D.X=function(t){return t=Co(this,t),Et(t)?-1:Xt(t)?0:1};function je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(Gc)}D.abs=function(){return Et(this)?je(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Co(t,e){return t.add(je(e))}D.R=function(t){if(Xt(this)||Xt(t))return Or;if(Et(this))return Et(t)?je(this).R(je(t)):je(je(this).R(t));if(Et(t))return je(this.R(je(t)));if(0>this.X(Sd)&&0>t.X(Sd))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Bi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Bi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Bi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Bi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function Bi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ds(t,e){this.g=t,this.h=e}function bo(t,e){if(Xt(e))throw Error("division by zero");if(Xt(t))return new ds(Or,Or);if(Et(t))return e=bo(je(t),e),new ds(je(e.g),je(e.h));if(Et(e))return e=bo(t,je(e)),new ds(je(e.g),e.h);if(30<t.g.length){if(Et(t)||Et(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Gc,r=e;0>=r.X(t);)n=Pd(n),r=Pd(r);var s=yr(n,1),i=yr(r,1);for(r=yr(r,2),n=yr(n,2);!Xt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=yr(r,1),n=yr(n,1)}return e=Co(t,s.R(e)),new ds(s,e)}for(s=Or;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);Et(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);Xt(i)&&(i=Gc),s=s.add(i),t=Co(t,o)}return new ds(s,t)}D.gb=function(t){return bo(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function Pd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new pe(s,t.h)}Po.prototype.createWebChannel=Po.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;fa.NO_ERROR=0;fa.TIMEOUT=8;fa.HTTP_ERROR=6;Xg.COMPLETE="complete";Zg.EventType=yi;yi.OPEN="a";yi.CLOSE="b";yi.ERROR="c";yi.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Dt.prototype.digest=Dt.prototype.l;Dt.prototype.reset=Dt.prototype.reset;Dt.prototype.update=Dt.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Bt;pe.fromString=Mm;var BR=function(){return new Po},jR=function(){return da()},oc=fa,$R=Xg,qR=ur,Cd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ji=Zg,HR=Pe,KR=Dt,Vr=pe;const bd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new bl("@firebase/firestore");function fs(){return ir.logLevel}function k(t,...e){if(ir.logLevel<=se.DEBUG){const n=e.map(uu);ir.debug(`Firestore (${rs}): ${t}`,...n)}}function Wt(t,...e){if(ir.logLevel<=se.ERROR){const n=e.map(uu);ir.error(`Firestore (${rs}): ${t}`,...n)}}function qr(t,...e){if(ir.logLevel<=se.WARN){const n=e.map(uu);ir.warn(`Firestore (${rs}): ${t}`,...n)}}function uu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function ye(t,e){t||K()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class zR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GR{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new en;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new en,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new en)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new xm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Qe(e)}}class QR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new QR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new JR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ZR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Oe(0,0))}static max(){return new Y(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Zs{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const eS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Zs{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return eS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new N(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new N(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}static empty(){return new j(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}function tS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new On(s,j.empty(),e)}function nS(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new On(Y.min(),j.empty(),-1)}static max(){return new On(Y.max(),j.empty(),-1)}}function rS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==sS)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(s=>s?w.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new w((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new w((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new en,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ks(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=du(r.target.error);this.V.reject(new ks(e,s))}}static open(e,n,r,s){try{return new hu(n,e.transaction(s,r))}catch(i){throw new ks(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(k("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new aS(n)}}class Qn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Qn.S(De())===12.2&&Wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return k("SimpleDb","Removing database:",e),Kn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!zp())return!1;if(Qn.C())return!0;const e=De(),n=Qn.S(e),r=0<n&&n<10,s=Qn.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(k("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ks(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new N(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new N(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ks(e,o))},s.onupgradeneeded=i=>{k("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{k("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=hu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(k("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oS{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Kn(this.k.delete())}}class ks extends N{constructor(e,n){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ai(t){return t.name==="IndexedDbTransactionError"}class aS{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(k("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(k("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Kn(r)}add(e){return k("SimpleDb","ADD",this.store.name,e,e),Kn(this.store.add(e))}get(e){return Kn(this.store.get(e)).next(n=>(n===void 0&&(n=null),k("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return k("SimpleDb","DELETE",this.store.name,e),Kn(this.store.delete(e))}count(){return k("SimpleDb","COUNT",this.store.name),Kn(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new w((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){k("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new w((r,s)=>{n.onerror=i=>{const o=du(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new w((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new oS(a),l=n(a.primaryKey,a.value,c);if(l instanceof w){const u=l.catch(h=>(c.done(),w.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Kn(t){return new w((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=du(r.target.error);n(s)}})}let kd=!1;function du(t){const e=Qn.S(De());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return kd||(kd=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}fu._e=-1;function wa(t){return t==null}function ko(t){return t===0&&1/t==-1/0}function cS(t){return typeof t=="number"&&Number.isInteger(t)&&!ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Od(this.data.getIterator())}getIteratorFrom(e){return new Od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new St([])}unionWith(e){let n=new He($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Um("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const lS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(ye(!!t),typeof t=="string"){let e=0;const n=lS.exec(t);if(ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gu(t){const e=t.mapValue.fields.__previous_value__;return pu(e)?gu(e):e}function ei(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pu(t)?4:hS(t)?9007199254740991:10:K()}function zt(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ei(t).isEqual(ei(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vn(s.timestampValue),a=Vn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return or(s.bytesValue).isEqual(or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),a=be(i.doubleValue);return o===a?ko(o)===ko(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Dd(o)!==Dd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!zt(o[c],a[c])))return!1;return!0}(t,e);default:return K()}}function ni(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function Kr(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=be(i.integerValue||i.doubleValue),c=be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Vd(t.timestampValue,e.timestampValue);case 4:return Vd(ei(t),ei(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,o){const a=or(i),c=or(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=le(a[l],c[l]);if(u!==0)return u}return le(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=le(be(i.latitude),be(o.latitude));return a!==0?a:le(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Kr(a[l],c[l]);if(u)return u}return le(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===qi.mapValue&&o===qi.mapValue)return 0;if(i===qi.mapValue)return 1;if(o===qi.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=le(c[h],u[h]);if(d!==0)return d;const g=Kr(a[c[h]],l[u[h]]);if(g!==0)return g}return le(c.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Vd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Vn(t),r=Vn(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function Wr(t){return Qc(t)}function Qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qc(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function Nd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yc(t){return!!t&&"integerValue"in t}function mu(t){return!!t&&"arrayValue"in t}function Md(t){return!!t&&"nullValue"in t}function xd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ro(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Ds(this.value))}}function Bm(t){const e=[];return ss(t.fields,(n,r)=>{const s=new $e([n]);if(ro(r)){const i=Bm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,Y.min(),Y.min(),Y.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new Ye(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new Ye(e,2,n,Y.min(),Y.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,Y.min(),Y.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.position=e,this.inclusive=n}}function Ld(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Kr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function dS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{}class ke extends jm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pS(e,n,r):n==="array-contains"?new _S(e,r):n==="in"?new yS(e,r):n==="not-in"?new vS(e,r):n==="array-contains-any"?new ES(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gS(e,r):new mS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends jm{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ot(e,n)}matches(e){return $m(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function $m(t){return t.op==="and"}function qm(t){return fS(t)&&$m(t)}function fS(t){for(const e of t.filters)if(e instanceof Ot)return!1;return!0}function Jc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Wr(t.value);if(qm(t))return t.filters.map(e=>Jc(e)).join(",");{const e=t.filters.map(n=>Jc(n)).join(",");return`${t.op}(${e})`}}function Hm(t,e){return t instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.field.isEqual(s.field)&&zt(r.value,s.value)}(t,e):t instanceof Ot?function(r,s){return s instanceof Ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Hm(o,s.filters[a]),!0):!1}(t,e):void K()}function Km(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Wr(n.value)}`}(t):t instanceof Ot?function(n){return n.op.toString()+" {"+n.getFilters().map(Km).join(" ,")+"}"}(t):"Filter"}class pS extends ke{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class gS extends ke{constructor(e,n){super(e,"in",n),this.keys=Wm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mS extends ke{constructor(e,n){super(e,"not-in",n),this.keys=Wm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class _S extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mu(n)&&ni(n.arrayValue,this.value)}}class yS extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ni(this.value.arrayValue,n)}}class vS extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ni(this.value.arrayValue,n)}}class ES extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ni(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Ud(t,e=null,n=[],r=[],s=null,i=null,o=null){return new IS(t,e,n,r,s,i,o)}function _u(t){const e=J(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wr(r)).join(",")),e.ce=n}return e.ce}function yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fd(t.startAt,e.startAt)&&Fd(t.endAt,e.endAt)}function Xc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function wS(t,e,n,r,s,i,o,a){return new is(t,e,n,r,s,i,o,a)}function Ta(t){return new is(t)}function Bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zm(t){return t.collectionGroup!==null}function Os(t){const e=J(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new He($e.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ri(i,r))}),n.has($e.keyField().canonicalString())||e.le.push(new ri($e.keyField(),r))}return e.le}function qt(t){const e=J(t);return e.he||(e.he=TS(e,Os(t))),e.he}function TS(t,e){if(t.limitType==="F")return Ud(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ri(s.field,i)});const n=t.endAt?new Do(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Do(t.startAt.position,t.startAt.inclusive):null;return Ud(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zc(t,e){const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function el(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Aa(t,e){return yu(qt(t),qt(e))&&t.limitType===e.limitType}function Gm(t){return`${_u(qt(t))}|lt:${t.limitType}`}function Ir(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Km(s)).join(", ")}]`),wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Wr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Wr(s)).join(",")),`Target(${r})`}(qt(t))}; limitType=${t.limitType})`}function Ra(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Os(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Ld(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Os(r),s)||r.endAt&&!function(o,a,c){const l=Ld(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Os(r),s))}(t,e)}function AS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qm(t){return(e,n)=>{let r=!1;for(const s of Os(t)){const i=RS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RS(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Kr(c,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Fm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new Se(j.comparator);function on(){return SS}const Ym=new Se(j.comparator);function vs(...t){let e=Ym;for(const n of t)e=e.insert(n.key,n);return e}function Jm(t){let e=Ym;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yn(){return Vs()}function Xm(){return Vs()}function Vs(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const PS=new Se(j.comparator),CS=new He(j.comparator);function re(...t){let e=CS;for(const n of t)e=e.add(n);return e}const bS=new He(le);function kS(){return bS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(e)?"-0":e}}function e_(t){return{integerValue:""+t}}function DS(t,e){return cS(e)?e_(e):Zm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this._=void 0}}function OS(t,e,n){return t instanceof Oo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pu(i)&&(i=gu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof si?n_(t,e):t instanceof ii?r_(t,e):function(s,i){const o=t_(s,i),a=jd(o)+jd(s.Ie);return Yc(o)&&Yc(s.Ie)?e_(a):Zm(s.serializer,a)}(t,e)}function VS(t,e,n){return t instanceof si?n_(t,e):t instanceof ii?r_(t,e):n}function t_(t,e){return t instanceof Vo?function(r){return Yc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Oo extends Sa{}class si extends Sa{constructor(e){super(),this.elements=e}}function n_(t,e){const n=s_(e);for(const r of t.elements)n.some(s=>zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ii extends Sa{constructor(e){super(),this.elements=e}}function r_(t,e){let n=s_(e);for(const r of t.elements)n=n.filter(s=>!zt(s,r));return{arrayValue:{values:n}}}class Vo extends Sa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function jd(t){return be(t.integerValue||t.doubleValue)}function s_(t){return mu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof si&&s instanceof si||r instanceof ii&&s instanceof ii?Hr(r.elements,s.elements,zt):r instanceof Vo&&s instanceof Vo?zt(r.Ie,s.Ie):r instanceof Oo&&s instanceof Oo}(t.transform,e.transform)}class MS{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function so(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pa{}function i_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new a_(t.key,Ht.none()):new Ri(t.key,t.data,Ht.none());{const n=t.data,r=It.empty();let s=new He($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hr(t.key,r,new St(s.toArray()),Ht.none())}}function xS(t,e,n){t instanceof Ri?function(s,i,o){const a=s.value.clone(),c=qd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(s,i,o){if(!so(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=qd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(o_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ns(t,e,n,r){return t instanceof Ri?function(i,o,a,c){if(!so(i.precondition,o))return a;const l=i.value.clone(),u=Hd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,o,a,c){if(!so(i.precondition,o))return a;const l=Hd(i.fieldTransforms,c,o),u=o.data;return u.setAll(o_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return so(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function LS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=t_(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function $d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,o)=>NS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ri extends Pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hr extends Pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function o_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qd(t,e,n){const r=new Map;ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,VS(o,a,n[s]))}return r}function Hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OS(i,o,e))}return r}class a_ extends Pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FS extends Pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ns(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ns(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=i_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,r)=>$d(n,r))&&Hr(this.baseMutations,e.baseMutations,(n,r)=>$d(n,r))}}class vu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ye(e.mutations.length===r.length);let s=function(){return PS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ie;function $S(t){switch(t){default:return K();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function c_(t){if(t===void 0)return Wt("GRPC error has no .code"),v.UNKNOWN;switch(t){case Ce.OK:return v.OK;case Ce.CANCELLED:return v.CANCELLED;case Ce.UNKNOWN:return v.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return v.INTERNAL;case Ce.UNAVAILABLE:return v.UNAVAILABLE;case Ce.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ce.NOT_FOUND:return v.NOT_FOUND;case Ce.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ce.ABORTED:return v.ABORTED;case Ce.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ce.DATA_LOSS:return v.DATA_LOSS;default:return K()}}(ie=Ce||(Ce={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Vr([4294967295,4294967295],0);function Kd(t){const e=qS().encode(t),n=new KR;return n.update(e),new Uint8Array(n.digest())}function Wd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([s,i],0)]}class Eu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Es(`Invalid padding: ${n}`);if(r<0)throw new Es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Es(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Es(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Vr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Vr.fromNumber(r)));return s.compare(HS)===1&&(s=new Vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Kd(e),[r,s]=Wd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Eu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Kd(e),[r,s]=Wd(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ca(Y.min(),s,new Se(le),on(),re())}}class Si{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Si(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class l_{constructor(e,n){this.targetId=e,this.fe=n}}class u_{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zd{constructor(){this.ge=0,this.pe=Qd(),this.ye=rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Si(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Qd()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ye(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class KS{constructor(e){this.Le=e,this.ke=new Map,this.qe=on(),this.Qe=Gd(),this.Ke=new Se(le)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Xc(i))if(r===0){const o=new j(i.path);this.We(n,o,Ye.newNoDocument(o,Y.min()))}else ye(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=or(r).toUint8Array()}catch(c){if(c instanceof Um)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Eu(o,s,i)}catch(c){return qr(c instanceof Es?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Xc(a.target)){const c=new j(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Ye.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ca(e,n,this.Ke,this.qe,r);return this.qe=on(),this.Qe=Gd(),this.Ke=new Se(le),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new zd,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new He(le),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new zd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gd(){return new Se(j.comparator)}function Qd(){return new Se(j.comparator)}const WS={asc:"ASCENDING",desc:"DESCENDING"},zS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GS={and:"AND",or:"OR"};class QS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tl(t,e){return t.useProto3Json||wa(e)?e:{value:e}}function No(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function h_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YS(t,e){return No(t,e.toTimestamp())}function Kt(t){return ye(!!t),Y.fromTimestamp(function(n){const r=Vn(n);return new Oe(r.seconds,r.nanos)}(t))}function Iu(t,e){return nl(t,e).canonicalString()}function nl(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function d_(t){const e=Ie.fromString(t);return ye(__(e)),e}function rl(t,e){return Iu(t.databaseId,e.path)}function ac(t,e){const n=d_(e);if(n.get(1)!==t.databaseId.projectId)throw new N(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(p_(n))}function f_(t,e){return Iu(t.databaseId,e)}function JS(t){const e=d_(t);return e.length===4?Ie.emptyPath():p_(e)}function sl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function p_(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yd(t,e,n){return{name:rl(t,e),fields:n.value.mapValue.fields}}function XS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ye(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?v.UNKNOWN:c_(l.code);return new N(u,l.message||"")}(o);n=new u_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ac(t,r.document.name),i=Kt(r.document.updateTime),o=r.document.createTime?Kt(r.document.createTime):Y.min(),a=new It({mapValue:{fields:r.document.fields}}),c=Ye.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new io(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ac(t,r.document),i=r.readTime?Kt(r.readTime):Y.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ac(t,r.document),i=r.removedTargetIds||[];n=new io([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jS(s,i),a=r.targetId;n=new l_(a,o)}}return n}function ZS(t,e){let n;if(e instanceof Ri)n={update:Yd(t,e.key,e.value)};else if(e instanceof a_)n={delete:rl(t,e.key)};else if(e instanceof hr)n={update:Yd(t,e.key,e.data),updateMask:cP(e.fieldMask)};else{if(!(e instanceof FS))return K();n={verify:rl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ii)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function eP(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Kt(s.updateTime):Kt(i);return o.isEqual(Y.min())&&(o=Kt(i)),new MS(o,s.transformResults||[])}(n,e))):[]}function tP(t,e){return{documents:[f_(t,e.path)]}}function nP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=f_(t,s);const i=function(l){if(l.length!==0)return m_(Ot.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:wr(d.field),direction:iP(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=tl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function rP(t){let e=JS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=g_(h);return d instanceof Ot&&qm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new ri(Tr(E.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,wa(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new Do(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new Do(g,d)}(n.endAt)),wS(e,s,o,i,a,"F",c,l)}function sP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Tr(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tr(n.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tr(n.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Tr(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(Tr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ot.create(n.compositeFilter.filters.map(r=>g_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function iP(t){return WS[t]}function oP(t){return zS[t]}function aP(t){return GS[t]}function wr(t){return{fieldPath:t.canonicalString()}}function Tr(t){return $e.fromServerFormat(t.fieldPath)}function m_(t){return t instanceof ke?function(n){if(n.op==="=="){if(xd(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NAN"}};if(Md(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xd(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NOT_NAN"}};if(Md(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(n.field),op:oP(n.op),value:n.value}}}(t):t instanceof Ot?function(n){const r=n.getFilters().map(s=>m_(s));return r.length===1?r[0]:{compositeFilter:{op:aP(n.op),filters:r}}}(t):K()}function cP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function __(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.ct=e}}function uP(t){const e=rP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?el(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this._n=new dP}addToCollectionParentIndex(e,n){return this._n.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(On.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class dP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new zr(0)}static Bn(){return new zr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ns(r.mutation,s,St.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=vs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=on();const o=Vs(),a=function(){return Vs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof hr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ns(u.mutation,l,u.mutation.getFieldMask(),Oe.now())):o.set(l.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new pP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Vs();let s=new Se((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||St.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Xm();u.forEach(d=>{if(!i.has(d)){const g=i_(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):w.resolve(Yn());let a=-1,c=i;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Jm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let s=vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=vs();return this.indexManager.getCollectionParents(e,i).next(a=>w.forEach(a,c=>{const l=function(h,d){return new is(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Ye.newInvalidDocument(u)))});let a=vs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Ns(u.mutation,l,St.empty(),Oe.now()),Ra(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return w.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Kt(s.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:uP(s.bundledQuery),readTime:Kt(s.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.overlays=new Se(j.comparator),this.hr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yn();return w.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const s=Yn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return w.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BS(n,r));let i=this.hr.get(n);i===void 0&&(i=re(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.Pr=new He(Le.Ir),this.Tr=new He(Le.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Le(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new j(new Ie([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new j(new Ie([])),r=new Le(n,e),s=new Le(n,e+1);let i=re();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return j.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new He(Le.Ir)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new US(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(le);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),w.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Le(new j(i),0);let a=new He(le);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),w.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ye(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return w.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Le(n,0),s=this.wr.firstAfterOrEqual(r);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.vr=e,this.docs=function(){return new Se(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=on();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=on();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||rS(nS(u),r)<=0||(s.has(u.key)||Ra(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}Fr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EP(this)}getSize(e){return w.resolve(this.size)}}class EP extends fP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.persistence=e,this.Mr=new os(n=>_u(n),yu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new wu,this.targetCount=0,this.Br=zr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),w.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new zr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.qn(n),w.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.Lr={},this.overlays={},this.kr=new fu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new IP(this),this.indexManager=new hP,this.remoteDocumentCache=function(s){return new vP(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new lP(n),this.$r=new mP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _P,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new yP(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){k("MemoryPersistence","Starting transaction:",e);const s=new TP(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return w.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class TP extends iS{constructor(e){super(),this.currentSequenceNumber=e}}class Tu{constructor(e){this.persistence=e,this.zr=new wu,this.jr=null}static Hr(e){return new Tu(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),w.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Jr,r=>{const s=j.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return w.or([()=>w.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Au(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return JI()?8:Qn.v(De())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AP;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(fs()<=se.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ir(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),w.resolve()):(fs()<=se.DEBUG&&k("QueryEngine","Query:",Ir(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(fs()<=se.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ir(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):w.resolve())}ji(e,n){if(Bd(n))return w.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=el(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,el(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Bd(n)||s.isEqual(Y.min())?w.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?w.resolve(null):(fs()<=se.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ir(n)),this.es(e,o,n,tS(s,-1)).next(a=>a))})}Zi(e,n){let r=new He(Qm(e));return n.forEach((s,i)=>{Ra(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return fs()<=se.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ir(n)),this.zi.getDocumentsMatchingQuery(e,n,On.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Se(le),this.rs=new os(i=>_u(i),yu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function PP(t,e,n,r){return new SP(t,e,n,r)}async function y_(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function CP(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let g=w.resolve();return d.forEach(E=>{g=g.next(()=>u.getEntry(c,E)).next(R=>{const T=l.docVersions.get(E);ye(T!==null),R.version.compareTo(T)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function v_(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function bP(t,e){const n=J(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(rt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(R,T,P){return R.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=on(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(kP(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(Y.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function kP(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=on();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function DP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,w.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function il(t,e,n){const r=J(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Jd(t,e,n){const r=J(t);let s=Y.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=J(c),d=h.rs.get(u);return d!==void 0?w.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,qt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:re())).next(a=>(VP(r,AS(e),a),{documents:a,hs:i})))}function VP(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Xd{constructor(){this.activeTargetIds=kS()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NP{constructor(){this.no=new Xd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi=null;function cc(){return Hi===null?Hi=function(){return 268435456+Math.round(2147483648*Math.random())}():Hi++,"0x"+Hi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class FP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=cc(),c=this.bo(n,r.toUriEncodedString());k("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(k("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=xP[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=cc();return new Promise((o,a)=>{const c=new HR;c.setWithCredentials(!0),c.listenOnce($R.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case oc.NO_ERROR:const u=c.getResponseJson();k(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case oc.TIMEOUT:k(Ge,`RPC '${e}' ${i} timed out`),a(new N(v.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const h=c.getStatus();if(k(Ge,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const E=function(T){const P=T.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(P)>=0?P:v.UNKNOWN}(g.status);a(new N(E,g.message))}else a(new N(v.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new N(v.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{k(Ge,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);k(Ge,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=cc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BR(),a=jR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");k(Ge,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const E=new LP({lo:T=>{g?k(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(d||(k(Ge,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),k(Ge,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},ho:()=>h.close()}),R=(T,P,M)=>{T.listen(P,F=>{try{M(F)}catch(z){setTimeout(()=>{throw z},0)}})};return R(h,ji.EventType.OPEN,()=>{g||k(Ge,`RPC '${e}' stream ${s} transport opened.`)}),R(h,ji.EventType.CLOSE,()=>{g||(g=!0,k(Ge,`RPC '${e}' stream ${s} transport closed`),E.Vo())}),R(h,ji.EventType.ERROR,T=>{g||(g=!0,qr(Ge,`RPC '${e}' stream ${s} transport errored:`,T),E.Vo(new N(v.UNAVAILABLE,"The operation could not be completed")))}),R(h,ji.EventType.MESSAGE,T=>{var P;if(!g){const M=T.data[0];ye(!!M);const F=M,z=F.error||((P=F[0])===null||P===void 0?void 0:P.error);if(z){k(Ge,`RPC '${e}' stream ${s} received error:`,z);const Z=z.status;let $=function(ee){const _e=Ce[ee];if(_e!==void 0)return c_(_e)}(Z),de=z.message;$===void 0&&($=v.INTERNAL,de="Unknown error status: "+Z+" with message "+z.message),g=!0,E.Vo(new N($,de)),h.close()}else k(Ge,`RPC '${e}' stream ${s} received:`,M),E.mo(M)}}),R(a,qR.STAT_EVENT,T=>{T.stat===Cd.PROXY?k(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Cd.NOPROXY&&k(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){return new QS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new E_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new N(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UP extends I_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=XS(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Kt(o.readTime):Y.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=sl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Xc(c)?{documents:tP(i,c)}:{query:nP(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=h_(i,o.resumeToken);const l=tl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=No(i,o.snapshotVersion.toTimestamp());const l=tl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=sP(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=sl(this.serializer),n.removeTarget=e,this.t_(n)}}class BP extends I_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=eP(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.T_(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=sl(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZS(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new N(v.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,nl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(v.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,nl(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(v.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class $P{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Wt(n),this.g_=!1):k("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{dr(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=J(c);l.v_.add(4),await Pi(l),l.x_.set("Unknown"),l.v_.delete(4),await ka(l)}(this))})}),this.x_=new $P(r,s)}}async function ka(t){if(dr(t))for(const e of t.F_)await e(!0)}async function Pi(t){for(const e of t.F_)await e(!1)}function w_(t,e){const n=J(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Pu(n)?Su(n):as(n).Jo()&&Ru(n,e))}function T_(t,e){const n=J(t),r=as(n);n.C_.delete(e),r.Jo()&&A_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():dr(n)&&n.x_.set("Unknown"))}function Ru(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}as(t).c_(e)}function A_(t,e){t.O_.Oe(e),as(t).l_(e)}function Su(t){t.O_=new KS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),as(t).start(),t.x_.p_()}function Pu(t){return dr(t)&&!as(t).Ho()&&t.C_.size>0}function dr(t){return J(t).v_.size===0}function R_(t){t.O_=void 0}async function HP(t){t.C_.forEach((e,n)=>{Ru(t,e)})}async function KP(t,e){R_(t),Pu(t)?(t.x_.S_(e),Su(t)):t.x_.set("Unknown")}async function WP(t,e,n){if(t.x_.set("Online"),e instanceof u_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(t,r)}else if(e instanceof io?t.O_.$e(e):e instanceof l_?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(Y.min()))try{const r=await v_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(rt.EMPTY_BYTE_STRING,u.snapshotVersion)),A_(i,c);const h=new wn(u.target,c,l,u.sequenceNumber);Ru(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await Mo(t,r)}}async function Mo(t,e,n){if(!Ai(e))throw e;t.v_.add(1),await Pi(t),t.x_.set("Offline"),n||(n=()=>v_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await ka(t)})}function S_(t,e){return e().catch(n=>Mo(t,n,e))}async function Da(t){const e=J(t),n=Nn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;zP(e);)try{const s=await DP(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,GP(e,s)}catch(s){await Mo(e,s)}P_(e)&&C_(e)}function zP(t){return dr(t)&&t.D_.length<10}function GP(t,e){t.D_.push(e);const n=Nn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function P_(t){return dr(t)&&!Nn(t).Ho()&&t.D_.length>0}function C_(t){Nn(t).start()}async function QP(t){Nn(t).d_()}async function YP(t){const e=Nn(t);for(const n of t.D_)e.I_(n.mutations)}async function JP(t,e,n){const r=t.D_.shift(),s=vu.from(r,e,n);await S_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Da(t)}async function XP(t,e){e&&Nn(t).P_&&await async function(r,s){if(function(o){return $S(o)&&o!==v.ABORTED}(s.code)){const i=r.D_.shift();Nn(r).Zo(),await S_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Da(r)}}(t,e),P_(t)&&C_(t)}async function ef(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=dr(n);n.v_.add(3),await Pi(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await ka(n)}async function ZP(t,e){const n=J(t);e?(n.v_.delete(2),await ka(n)):e||(n.v_.add(2),await Pi(n),n.x_.set("Unknown"))}function as(t){return t.N_||(t.N_=function(n,r,s){const i=J(n);return i.R_(),new UP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:HP.bind(null,t),To:KP.bind(null,t),u_:WP.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Pu(t)?Su(t):t.x_.set("Unknown")):(await t.N_.stop(),R_(t))})),t.N_}function Nn(t){return t.B_||(t.B_=function(n,r,s){const i=J(n);return i.R_(),new BP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:QP.bind(null,t),To:XP.bind(null,t),E_:YP.bind(null,t),T_:JP.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Da(t)):(await t.B_.stop(),t.D_.length>0&&(k("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Cu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bu(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),Ai(t))return new N(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=vs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.L_=new Se(j.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):K():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gr(e,n,Nr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.q_=void 0,this.Q_=[]}}class tC{constructor(){this.queries=new os(e=>Gm(e),Aa),this.onlineState="Unknown",this.K_=new Set}}async function b_(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new eC),s)try{i.q_=await n.onListen(r)}catch(o){const a=bu(o,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&ku(n)}async function k_(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function nC(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&ku(n)}function rC(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function ku(t){t.K_.forEach(e=>{e.next()})}class D_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.key=e}}class V_{constructor(e){this.key=e}}class sC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=re(),this.mutatedKeys=re(),this.ua=Qm(e),this.ca=new Nr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new tf,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Ra(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;d&&g?d.data.isEqual(g.data)?E!==R&&(r.track({type:3,doc:g}),T=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),T=!0,(c&&this.ua(g,c)>0||l&&this.ua(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),T=!0):d&&!g&&(r.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(g?(o=o.add(g),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(g,E){const R=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return R(g)-R(E)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new Gr(this.query,e.ca,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new tf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=re(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new V_(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new O_(r))}),n}Ra(e){this.oa=e.hs,this.aa=re();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Gr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class iC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oC{constructor(e){this.key=e,this.ma=!1}}class aC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new os(a=>Gm(a),Aa),this.pa=new Map,this.ya=new Set,this.wa=new Se(j.comparator),this.Sa=new Map,this.ba=new wu,this.Da={},this.Ca=new Map,this.va=zr.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function cC(t,e){const n=yC(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await OP(n.localStore,qt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await lC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&w_(n.remoteStore,o)}return s}async function lC(t,e,n,r,s){t.Ma=(h,d,g)=>async function(R,T,P,M){let F=T.view.ha(P);F.Xi&&(F=await Jd(R.localStore,T.query,!1).then(({documents:de})=>T.view.ha(de,F)));const z=M&&M.targetChanges.get(T.targetId),Z=M&&M.targetMismatches.get(T.targetId)!=null,$=T.view.applyChanges(F,R.isPrimaryClient,z,Z);return rf(R,T.targetId,$.da),$.snapshot}(t,h,d,g);const i=await Jd(t.localStore,e,!0),o=new sC(e,i.hs),a=o.ha(i.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);rf(t,n,l.da);const u=new iC(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function uC(t,e){const n=J(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Aa(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await il(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),T_(n.remoteStore,r.targetId),ol(n,r.targetId)}).catch(Ti)):(ol(n,r.targetId),await il(n.localStore,r.targetId,!0))}async function hC(t,e,n){const r=vC(t);try{const s=await function(o,a){const c=J(o),l=Oe.now(),u=a.reduce((g,E)=>g.add(E.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=on(),R=re();return c.os.getEntries(g,u).next(T=>{E=T,E.forEach((P,M)=>{M.isValidDocument()||(R=R.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,E)).next(T=>{h=T;const P=[];for(const M of a){const F=LS(M,h.get(M.key).overlayedDocument);F!=null&&P.push(new hr(M.key,F,Bm(F.value.mapValue),Ht.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,P,a)}).next(T=>{d=T;const P=T.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(g,T.batchId,P)})}).then(()=>({batchId:d.batchId,changes:Jm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Se(le)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ci(r,s.changes),await Da(r.remoteStore)}catch(s){const i=bu(s,"Failed to persist write");n.reject(i)}}async function N_(t,e){const n=J(t);try{const r=await bP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?ye(o.ma):s.removedDocuments.size>0&&(ye(o.ma),o.ma=!1))}),await Ci(n,r,e)}catch(r){await Ti(r)}}function nf(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(l=!0)}),l&&ku(c)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dC(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Se(j.comparator);o=o.insert(i,Ye.newNoDocument(i,Y.min()));const a=re().add(i),c=new Ca(Y.min(),new Map,new Se(le),o,a);await N_(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Du(r)}else await il(r.localStore,e,!1).then(()=>ol(r,e,n)).catch(Ti)}async function fC(t,e){const n=J(t),r=e.batch.batchId;try{const s=await CP(n.localStore,e);x_(n,r,null),M_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(n,s)}catch(s){await Ti(s)}}async function pC(t,e,n){const r=J(t);try{const s=await function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ye(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);x_(r,e,n),M_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ci(r,s)}catch(s){await Ti(s)}}function M_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function x_(t,e,n){const r=J(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||L_(t,r)})}function L_(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(T_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Du(t))}function rf(t,e,n){for(const r of n)r instanceof O_?(t.ba.addReference(r.key,e),gC(t,r)):r instanceof V_?(k("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||L_(t,r.key)):K()}function gC(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(k("SyncEngine","New document in limbo: "+n),t.ya.add(r),Du(t))}function Du(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new j(Ie.fromString(e)),r=t.va.next();t.Sa.set(r,new oC(n)),t.wa=t.wa.insert(n,r),w_(t.remoteStore,new wn(qt(Ta(n.path)),r,"TargetPurposeLimboResolution",fu._e))}}async function Ci(t,e,n){const r=J(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Au.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,l){const u=J(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(l,d=>w.forEach(d.qi,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>w.forEach(d.Qi,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!Ai(h))throw h;k("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.ns.get(d),E=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(E);u.ns=u.ns.insert(d,R)}}}(r.localStore,i))}async function mC(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await y_(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new N(v.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ci(n,r.us)}}function _C(t,e){const n=J(t),r=n.Sa.get(e);if(r&&r.ma)return re().add(r.key);{let s=re();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function yC(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=N_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_C.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dC.bind(null,e),e.fa.u_=nC.bind(null,e.eventManager),e.fa.xa=rC.bind(null,e.eventManager),e}function vC(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pC.bind(null,e),e}class sf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ba(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return PP(this.persistence,new RP,e.initialUser,this.serializer)}createPersistence(e){return new wP(Tu.Hr,this.serializer)}createSharedClientState(e){return new NP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mC.bind(null,this.syncEngine),await ZP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tC}()}createDatastore(e){const n=ba(e.databaseInfo.databaseId),r=function(i){return new FP(i)}(e.databaseInfo);return function(i,o,a,c){return new jP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new qP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>nf(this.syncEngine,n,0),function(){return Zd.D()?new Zd:new MP}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new aC(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=J(r);k("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Pi(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=Lm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await y_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function of(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TC(t);k("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ef(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ef(e.remoteStore,s)),t._onlineComponents=e}function wC(t){return t.name==="FirebaseError"?t.code===v.FAILED_PRECONDITION||t.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function TC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!wC(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new sf)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await uc(t,new sf);return t._offlineComponents}async function U_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await of(t,t._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await of(t,new EC))),t._onlineComponents}function AC(t){return U_(t).then(e=>e.syncEngine)}async function al(t){const e=await U_(t),n=e.eventManager;return n.onListen=cC.bind(null,e.syncEngine),n.onUnlisten=uC.bind(null,e.syncEngine),n}function RC(t,e,n={}){const r=new en;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new F_({next:d=>{o.enqueueAndForget(()=>k_(i,h));const g=d.docs.has(a);!g&&d.fromCache?l.reject(new N(v.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&c&&c.source==="server"?l.reject(new N(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new D_(Ta(a.path),u,{includeMetadataChanges:!0,Z_:!0});return b_(i,h)}(await al(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t,e,n){if(!n)throw new N(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SC(t,e,n,r){if(e===!0&&r===!0)throw new N(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cf(t){if(!j.isDocumentKey(t))throw new N(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lf(t){if(j.isDocumentKey(t))throw new N(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oa(t);throw new N(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new N(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new N(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new N(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Va{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WR;switch(r.type){case"firstParty":return new YR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=af.get(n);r&&(k("ComponentProvider","Removing Datastore"),af.delete(n),r.terminate())}(this),Promise.resolve()}}function PC(t,e,n,r={}){var s;const i=(t=tn(t,Va))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Qe.MOCK_USER;else{a=KI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new N(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Qe(l)}t._authCredentials=new zR(new xm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fr(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class bn extends fr{constructor(e,n,r){super(e,n,Ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new j(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function hf(t,e,...n){if(t=nt(t),j_("collection","path",e),t instanceof Va){const r=Ie.fromString(e,...n);return lf(r),new bn(t,null,r)}{if(!(t instanceof at||t instanceof bn))throw new N(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return lf(r),new bn(t.firestore,null,r)}}function xo(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Lm.newId()),j_("doc","path",e),t instanceof Va){const r=Ie.fromString(e,...n);return cf(r),new at(t,null,new j(r))}{if(!(t instanceof at||t instanceof bn))throw new N(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return cf(r),new at(t.firestore,t instanceof bn?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new E_(this,"async_queue_retry"),this._u=()=>{const n=lc();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new en;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Ai(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const s=Cu.createAndSchedule(this,e,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&K()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function df(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Qr extends Va{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new CC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$_(this),this._firestoreClient.terminate()}}function oo(t,e){const n=typeof t=="object"?t:Jp(),r=typeof t=="string"?t:e||"(default)",s=Dl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qI("firestore");i&&PC(s,...i)}return s}function Ou(t){return t._firestoreClient||$_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new uS(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,B_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new IC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(rt.fromBase64String(e))}catch(n){throw new N(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=/^__.*__$/;class kC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ri(e,this.data,n,this.fieldTransforms)}}function H_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Mu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Mu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Lo(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(H_(this.du)&&bC.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class DC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ba(e)}Su(e,n,r,s=!1){return new Mu({du:e,methodName:n,wu:r,path:$e.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xu(t){const e=t._freezeSettings(),n=ba(t._databaseId);return new DC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function K_(t,e,n,r,s,i={}){const o=t.Su(i.merge||i.mergeFields?2:0,e,n,s);G_("Data must be an object, but it was:",o,r);const a=W_(r,o);let c,l;if(i.merge)c=new St(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=VC(e,h,n);if(!o.contains(d))throw new N(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MC(u,d)||u.push(d)}c=new St(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new kC(new It(a),c,l)}function OC(t,e,n,r=!1){return Lu(n,t.Su(r?4:3,e))}function Lu(t,e){if(z_(t=nt(t)))return G_("Unsupported field value:",e,t),W_(t,e);if(t instanceof q_)return function(r,s){if(!H_(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Lu(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:No(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:No(s.serializer,i)}}if(r instanceof Nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yr)return{bytesValue:h_(s.serializer,r._byteString)};if(r instanceof at){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Oa(r)}`)}(t,e)}function W_(t,e){const n={};return Fm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,s)=>{const i=Lu(s,e.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function z_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Nu||t instanceof Yr||t instanceof at||t instanceof q_)}function G_(t,e,n){if(!z_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Oa(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function VC(t,e,n){if((e=nt(e))instanceof Vu)return e._internalPath;if(typeof e=="string")return Q_(t,e);throw Lo("Field path arguments must be of type string or ",t,!1,void 0,n)}const NC=new RegExp("[~\\*/\\[\\]]");function Q_(t,e,n){if(e.search(NC)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vu(...e.split("."))._internalPath}catch{throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new N(v.INVALID_ARGUMENT,a+t+c)}function MC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xC extends Y_{data(){return super.data()}}function Fu(t,e){return typeof e=="string"?Q_(t,e):e instanceof Vu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class J_ extends Uu{}function FC(t,e,...n){let r=[];e instanceof Uu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof ju).length,a=i.filter(c=>c instanceof Bu).length;if(o>1||o>0&&a>0)throw new N(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Bu extends J_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bu(e,n,r)}_apply(e){const n=this._parse(e);return X_(e._query,n),new fr(e.firestore,e.converter,Zc(e._query,n))}_parse(e){const n=xu(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new N(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){pf(h,u);const g=[];for(const E of h)g.push(ff(c,i,E));d={arrayValue:{values:g}}}else d=ff(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||pf(h,u),d=OC(a,o,h,u==="in"||u==="not-in");return ke.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ju extends Uu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ju(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ot.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)X_(o,c),o=Zc(o,c)}(e._query,n),new fr(e.firestore,e.converter,Zc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $u extends J_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $u(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new N(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ri(i,o)}(e._query,this._field,this._direction);return new fr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new is(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function UC(t,e="asc"){const n=e,r=Fu("orderBy",t);return $u._create(r,n)}function ff(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new N(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zm(e)&&n.indexOf("/")!==-1)throw new N(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(r))throw new N(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nd(t,new j(r))}if(n instanceof at)return Nd(t,n._key);throw new N(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oa(n)}.`)}function pf(t,e){if(!Array.isArray(t)||t.length===0)throw new N(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function X_(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class BC{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Nu(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ei(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ye(__(r));const s=new ti(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ey extends Y_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ao extends ey{data(e={}){return super.data(e)}}class jC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Is(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ao(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Is(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Is(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:$C(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $C(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){t=tn(t,at);const e=tn(t.firestore,Qr);return RC(Ou(e),t._key).then(n=>ry(e,t,n))}class ty extends BC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function qC(t,e,n){t=tn(t,at);const r=tn(t.firestore,Qr),s=Z_(t.converter,e,n);return ny(r,[K_(xu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function HC(t,e){const n=tn(t.firestore,Qr),r=xo(t),s=Z_(t.converter,e);return ny(n,[K_(xu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function KC(t,...e){var n,r,s;t=nt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||df(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(df(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof at)l=tn(t.firestore,Qr),u=Ta(t._key.path),c={next:h=>{e[o]&&e[o](ry(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=tn(t,fr);l=tn(h.firestore,Qr),u=h._query;const d=new ty(l);c={next:g=>{e[o]&&e[o](new jC(l,d,h,g))},error:e[o+1],complete:e[o+2]},LC(t._query)}return function(d,g,E,R){const T=new F_(R),P=new D_(g,T,E);return d.asyncQueue.enqueueAndForget(async()=>b_(await al(d),P)),()=>{T.La(),d.asyncQueue.enqueueAndForget(async()=>k_(await al(d),P))}}(Ou(l),u,a,c)}function ny(t,e){return function(r,s){const i=new en;return r.asyncQueue.enqueueAndForget(async()=>hC(await AC(r),s,i)),i.promise}(Ou(t),e)}function ry(t,e,n){const r=n.docs.get(e._key),s=new ty(t);return new ey(t,s,e._key,r,new Is(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){rs=s})(Zr),Br(new nr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Qr(new GR(r.getProvider("auth-internal")),new XR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new N(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Cn(bd,"4.4.1",e),Cn(bd,"4.4.1","esm2017")})();const WC=Pp("chatStore",{state:()=>({chats:[{id:"cats",name:"Cats",about:"On the Cat Chat channel, fellow cat enthusiasts often share heartwarming stories of their feline friends"},{id:"dogs",name:"Dogs",about:"In the Dog Chat channel, members joyfully post photos of their dogs adventures, showcasing their playful and loyal nature."},{id:"books",name:"Books",about:"The Book Chat channel is a haven for bibliophiles, where they delve into discussions about their latest reads and timeless classics"},{id:"travel",name:"Travel",about:"The Travel Chat channel is filled with vibrant stories and tips from globetrotters sharing their experiences from different corners of the world"}],selectedChat:null,messages:[],currentUser:null,currentUserId:null,currentUserUsername:""}),actions:{selectChat(t){this.selectedChat=this.chats.find(e=>e.id===t),this.fetchMessages(t)},async fetchMessages(t){const e=oo(),n=hf(e,`chats/${t}/messages`),r=FC(n,UC("createdAt"));KC(r,s=>{this.messages=s.docs.map(i=>({id:i.id,...i.data(),createdAt:i.data().createdAt.toDate()}))})},async sendMessage(t){if(!t.trim()||!this.selectedChat)return;const e=oo(),r=jr().currentUser;if(!r)throw new Error("No authenticated user found.");const s=xo(e,"users",r.uid),i=await gf(s),o=i.exists()?i.data().username:"Anonymous";await HC(hf(e,`chats/${this.selectedChat.id}/messages`),{text:t,createdAt:new Date,userId:r.uid,username:o})},initializeAuthState(){const t=jr();Ul(t,e=>{if(e){this.currentUserId=e.uid;const n=xo(oo(),"users",e.uid);gf(n).then(r=>{r.exists()&&(this.currentUserUsername=r.data().username)})}else this.currentUserId=null,this.currentUserUsername=""})},canSendMessage(){return this.currentUserUsername!=="Anonymous"&&this.currentUserUsername!==""}}}),zC={id:"chat-layout"},GC={class:"left"},QC={class:"right"},YC={key:0},JC={__name:"ChatView",setup(t){const e=Bp(),n=jr(),r=WC();r.initializeAuthState(),Ul(n,i=>{i?r.currentUser=i:r.currentUser=null});const s=async()=>{try{await fA(n),e.push("/login")}catch(i){console.error("Logout failed:",i)}};return sp(()=>{r.chats.length>0&&r.selectChat(r.chats[0].id)}),Al(()=>{unsubscribe&&unsubscribe()}),(i,o)=>{var a;return Xe(),ut("div",zC,[Re("div",GC,[it(U0,{chats:xe(r).chats,selectedChatId:(a=xe(r).selectedChat)==null?void 0:a.id,onSelectChat:xe(r).selectChat},null,8,["chats","selectedChatId","onSelectChat"]),Re("button",{onClick:s},"Logout")]),Re("div",QC,[xe(r).selectedChat&&xe(r).currentUser?(Xe(),ut("h2",YC,Dn(xe(r).currentUser.email)+" | "+Dn(xe(r).selectedChat.name)+" Channel ",1)):Ar("",!0),it(D0,{messages:xe(r).messages,currentUserId:xe(r).currentUserId,onSendMessage:xe(r).sendMessage,canSendMessage:xe(r).canSendMessage()},null,8,["messages","currentUserId","onSendMessage","canSendMessage"])])])}}},XC=ia(JC,[["__scopeId","data-v-9b860072"]]);var ZC="firebase",eb="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(ZC,eb,"app");const tb={apiKey:"AIzaSyBIl-7WJ3mpH-ki6AcahjdSQpQSzp3G2RQ",authDomain:"chat-app-vue-9ca58.firebaseapp.com",projectId:"chat-app-vue-9ca58",storageBucket:"chat-app-vue-9ca58.appspot.com",messagingSenderId:"787531609366",appId:"1:787531609366:web:fc31d70b02c3cd25cdcc37"},sy=Yp(tb),nb=Pp("user",{state:()=>({email:"",password:"",username:"",isSignUp:!1,isGuest:!1}),actions:{updateEmail(t){this.email=t},updatePassword(t){this.password=t},updateUsername(t){this.username=t},toggleSignUp(){this.isSignUp=!this.isSignUp},async signInAsGuest(){const t=jr(sy);try{await vg(t),this.isGuest=!0}catch(e){console.error("Guest login error:",e),this.isGuest=!1}},setErrorMessage(t){this.errorMessage=t},clearErrorMessage(){this.errorMessage=""}}});function mf(t){switch(t){case"auth/invalid-email":return"The email address is invalid.";case"auth/user-disabled":return"This user has been disabled.";case"auth/user-not-found":return"User not found. Please sign up.";case"auth/wrong-password":return"Incorrect password. Please try again.";case"auth/invalid-credential":return"Invalid credential. Please try again.";default:return"An unexpected error occurred. Please try again later."}}const rb={name:"LoginView",setup(){const t=Bp(),e=jr(sy),n=nb();return{handleSubmit:async()=>{try{if(n.isSignUp){const i=await lA(e,n.email,n.password),o=xo(oo(),"users",i.user.uid);await qC(o,{username:n.username})}else await uA(e,n.email,n.password);t.push("/chat")}catch(i){console.error("Authentication error:",i);const o=mf(i.code);n.setErrorMessage(o)}},handleGuestLogin:async()=>{try{await vg(e),t.push("/chat")}catch(i){console.error("Guest login error:",i);const o=mf(i.code);n.setErrorMessage(o)}},userStore:n}}},sb={id:"login"},ib=Re("h1",{class:"title"},"WELCOME TO CHAT APP",-1),ob={key:0},ab={key:1,class:"error-message"},cb={key:2,type:"submit"},lb={key:3,type:"submit"};function ub(t,e,n,r,s,i){return Xe(),ut("div",sb,[ib,Re("form",{onSubmit:e[5]||(e[5]=wp((...o)=>r.handleSubmit&&r.handleSubmit(...o),["prevent"]))},[r.userStore.isSignUp?(Xe(),ut("div",ob,[Gi(Re("input",{placeholder:"username",type:"text",id:"username","onUpdate:modelValue":e[0]||(e[0]=o=>r.userStore.username=o),required:""},null,512),[[Xi,r.userStore.username]])])):Ar("",!0),Re("div",null,[Gi(Re("input",{placeholder:"email",type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=o=>r.userStore.email=o),required:""},null,512),[[Xi,r.userStore.email]])]),Re("div",null,[Gi(Re("input",{placeholder:"password",type:"password",id:"password","onUpdate:modelValue":e[2]||(e[2]=o=>r.userStore.password=o),required:""},null,512),[[Xi,r.userStore.password]])]),r.userStore.errorMessage?(Xe(),ut("div",ab,Dn(r.userStore.errorMessage),1)):Ar("",!0),r.userStore.isSignUp?Ar("",!0):(Xe(),ut("button",cb,"Login")),r.userStore.isSignUp?(Xe(),ut("button",lb,"Sign Up")):Ar("",!0),Re("button",{onClick:e[3]||(e[3]=(...o)=>r.userStore.toggleSignUp&&r.userStore.toggleSignUp(...o))},Dn(r.userStore.isSignUp?"Already have an account? Login":"Need an account? Sign Up"),1),Re("button",{onClick:e[4]||(e[4]=(...o)=>r.handleGuestLogin&&r.handleGuestLogin(...o))},"Login as Guest")],32)])}const hb=ia(rb,[["render",ub]]),db=[{path:"/chat",name:"chat",component:XC,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:hb},{path:"/",redirect:"/login"}],iy=VI({history:YE("/chat-app/"),routes:db});iy.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=jr();Ul(s,i=>{r&&!i?n("/login"):!r&&i?n("/chat"):n()})});const qu=TE(MI);qu.use(PE());qu.use(iy);qu.mount("#app");

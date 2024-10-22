import{n as pt,s as me,t as wt}from"./scheduler.CZZ0BjDO.js";new URL("sveltekit-internal://");function ye(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function _e(t){return t.split("%25").map(decodeURI).join("%25")}function we(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function gt({href:t}){return t.split("#")[0]}const be=["href","pathname","search","toString","toJSON"];function ve(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of be)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const Ae="/__data.json",ke=".html__data.json";function Se(t){return t.endsWith(".html")?t.replace(/\.html$/,ke):t.replace(/\/$/,"")+Ae}function Ee(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Re(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Ht=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(St(t)),Ht(t,n));const M=new Map;function Ie(t,n){const e=St(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&M.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Re(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Le(t,n,e){if(M.size>0){const r=St(t,e),a=M.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);M.delete(r)}}return window.fetch(n,e)}function St(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Ee(...a)}"]`}return r}const Ue=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Te(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${xe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return mt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return mt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Ue.exec(c),[,h,g,u,m]=d;return n.push({name:u,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return mt(c)}).join("")}).join("")}/?$`),params:n}}function Pe(t){return!/^\([^)]+\)$/.test(t)}function xe(t){return t.slice(1).split("/").filter(Pe)}function Ne(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function mt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ce({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,d]])=>{const{pattern:h,params:g}=Te(s),u={id:s,exec:m=>{const f=h.exec(m);if(f)return Ne(f,g,r)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Kt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Ct(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const O=[];function ln(t,n){return{subscribe:at(t,n).subscribe}}function at(t,n=pt){let e;const r=new Set;function a(s){if(me(t,s)&&(t=s,e)){const c=!O.length;for(const l of r)l[1](),O.push(l,t);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){a(s(t))}function i(s,c=pt){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||pt),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}var Gt;const U=((Gt=globalThis.__sveltekit_gtga52)==null?void 0:Gt.base)??"";var Mt;const Oe=((Mt=globalThis.__sveltekit_gtga52)==null?void 0:Mt.assets)??U,je="1729585773467",Yt="sveltekit:snapshot",zt="sveltekit:scroll",Jt="sveltekit:states",$e="sveltekit:pageurl",D="sveltekit:history",K="sveltekit:navigation",Z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Wt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function Et(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Ot={...Z,"":Z.hover};function Xt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Zt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Xt(t)}}function bt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||ot(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===W&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Q(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),e===null&&(e=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Xt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ot[r??"off"],preload_data:Ot[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function jt(t){const n=at(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function De(){const{set:t,subscribe:n}=at(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Oe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==je;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function ot(t,n){return t.origin!==W||!t.pathname.startsWith(n)}function $t(t){const n=Ve(t),e=new ArrayBuffer(n.length),r=new DataView(e);for(let a=0;a<e.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return e}const Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ve(t){t.length%4===0&&(t=t.replace(/==?$/,""));let n="",e=0,r=0;for(let a=0;a<t.length;a++)e<<=6,e|=Fe.indexOf(t[a]),r+=6,r===24&&(n+=String.fromCharCode((e&16711680)>>16),n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255),e=r=0);return r===12?(e>>=4,n+=String.fromCharCode(e)):r===18&&(e>>=2,n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255)),n}const Be=-1,qe=-2,Ge=-3,Me=-4,He=-5,Ke=-6;function fn(t,n){return Qt(JSON.parse(t),n)}function Qt(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Be)return;if(o===Ge)return NaN;if(o===Me)return 1/0;if(o===He)return-1/0;if(o===Ke)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let u=1;u<s.length;u+=2)g[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],m=s[1],f=$t(m),y=new u(f);r[o]=y;break}case"ArrayBuffer":{const u=s[1],m=$t(u);r[o]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==qe&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const te=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...te];const Ye=new Set([...te]);[...Ye];function ze(t){return t.filter(n=>n!=null)}class st{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class ee{constructor(n,e){this.status=n,this.location=e}}class Rt extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Je="x-sveltekit-invalidated",We="x-sveltekit-trailing-slash";function tt(t){return t instanceof st||t instanceof Rt?t.status:500}function Xe(t){return t instanceof Rt?t.text:"Internal Error"}const C=Kt(zt)??{},Y=Kt(Yt)??{},P={url:jt({}),page:jt({}),navigating:at(null),updated:De()};function It(t){C[t]=Et()}function Ze(t,n){let e=t+1;for(;C[e];)delete C[e],e+=1;for(e=n+1;Y[e];)delete Y[e],e+=1}function V(t){return location.href=t.href,new Promise(()=>{})}function Dt(){}let it,vt,et,T,At,q;const ne=[],nt=[];let I=null;const re=[],Qe=[];let $=[],_={branch:[],error:null,url:null},Lt=!1,rt=!1,Ft=!0,z=!1,G=!1,ae=!1,ct=!1,N,S,L,E,B;const H=new Set;let yt;async function un(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),q=t,it=Ce(t),T=document.documentElement,At=n,vt=t.nodes[0],et=t.nodes[1],vt(),et(),S=(a=history.state)==null?void 0:a[D],L=(o=history.state)==null?void 0:o[K],S||(S=L=Date.now(),history.replaceState({...history.state,[D]:S,[K]:L},""));const r=C[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await sn(At,e):an(location.href,{replaceState:!0}),on()}async function tn(){if(await(yt||(yt=Promise.resolve())),!yt)return;yt=null;const t=ut(_.url,!0);I=null;const n=B={},e=t&&await Pt(t);if(!(!e||n!==B)){if(e.type==="redirect")return lt(new URL(e.location,_.url).href,{},1,n);e.props.page&&(E=e.props.page),_=e.state,oe(),N.$set(e.props)}}function oe(){ne.length=0,ct=!1}function se(t){nt.some(n=>n==null?void 0:n.snapshot)&&(Y[t]=nt.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ie(t){var n;(n=Y[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=nt[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Vt(){It(S),Ct(zt,C),se(L),Ct(Yt,Y)}async function lt(t,n,e,r){return X({type:"goto",url:Wt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(ct=!0)}})}async function en(t){if(t.id!==(I==null?void 0:I.id)){const n={};H.add(n),I={id:t.id,token:n,promise:Pt({...t,preload:n}).then(e=>(H.delete(n),e.type==="loaded"&&e.state.error&&(I=null),e))}}return I.promise}async function _t(t){const n=it.find(e=>e.exec(fe(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ce(t,n,e){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),E=t.props.page,N=new q.root({target:n,props:{...t.props,stores:P,components:nt},hydrate:e,sync:!1}),ie(L);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(i=>i(a)),rt=!0}function J({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(U&&(t.pathname===U||t.pathname===U+"/"))s="always";else for(const u of e)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=ye(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:ze(e).map(u=>u.node.component),page:E}};i!==void 0&&(c.props.form=i);let l={},d=!E,h=0;for(let u=0;u<Math.max(e.length,_.branch.length);u+=1){const m=e[u],f=_.branch[u];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==E.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:E.data}),c}async function Ut({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var d,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const y of f){const{href:v}=new URL(y,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,y)=>(s&&(c.route=!0),f[y])}),params:new Proxy(r,{get:(f,y)=>(s&&c.params.add(y),f[y])}),data:(o==null?void 0:o.data)??null,url:ve(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,y){let v;f instanceof Request?(v=f.url,y={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...y}):v=f;const R=new URL(v,e);return s&&u(R.href),R.origin===e.origin&&(v=R.href.slice(e.origin.length)),rt?Le(v,R.href,y):Ie(v,y)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Bt(t,n,e,r,a,o){if(ct)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(ne.some(s=>s(new URL(i))))return!0;return!1}function Tt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function nn(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function qt({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:E,constructors:[]}}}async function Pt({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===t)return H.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?t!==_.url.pathname+_.url.search:!1,g=_.route?a.id!==_.route.id:!1,u=nn(_.url,e);let m=!1;const f=l.map((p,b)=>{var x;const A=_.branch[b],k=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||Bt(m,g,h,u,(x=A.server)==null?void 0:x.uses,r));return k&&(m=!0),k});if(f.some(Boolean)){try{d=await he(e,f)}catch(p){const b=await F(p,{url:e,params:r,route:{id:t}});return H.has(o)?qt({error:b,url:e,params:r,route:a}):ft({status:tt(p),error:b,url:e,route:a})}if(d.type==="redirect")return d}const y=d==null?void 0:d.nodes;let v=!1;const R=l.map(async(p,b)=>{var dt;if(!p)return;const A=_.branch[b],k=y==null?void 0:y[b];if((!k||k.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!Bt(v,g,h,u,(dt=A.universal)==null?void 0:dt.uses,r))return A;if(v=!0,(k==null?void 0:k.type)==="error")throw k;return Ut({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Nt;const xt={};for(let ht=0;ht<b;ht+=1)Object.assign(xt,(Nt=await R[ht])==null?void 0:Nt.data);return xt},server_data_node:Tt(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of R)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await R[p])}catch(b){if(b instanceof ee)return{type:"redirect",location:b.location};if(H.has(o))return qt({error:await F(b,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let A=tt(b),k;if(y!=null&&y.includes(b))A=b.status??A,k=b.error;else if(b instanceof st)k=b.body;else{if(await P.updated.check())return await V(e);k=await F(b,{params:r,url:e,route:{id:a.id}})}const x=await le(p,w,i);return x?J({url:e,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:a}):await de(e,{id:a.id},k,A)}else w.push(void 0);return J({url:e,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function le(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ft({status:t,error:n,url:e,route:r}){const a={};let o=null;if(q.server_loads[0]===0)try{const l=await he(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==W||e.pathname!==location.pathname||Lt)&&await V(e)}const s=await Ut({loader:vt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Tt(o)}),c={node:await et(),loader:et,universal:null,server:null,data:null};return J({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function ut(t,n){if(!t||ot(t,U))return;let e;try{e=q.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=fe(e);for(const a of it){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:we(o),url:t}}}function fe(t){return _e(t.slice(U.length)||"/")}function ue({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ge(_,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return z||re.forEach(s=>s(i)),a?null:o}async function X({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Dt,block:d=Dt}){const h=ut(n,!1),g=ue({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){d();return}const u=S,m=L;l(),z=!0,rt&&P.navigating.set(g.navigation),B=c;let f=h&&await Pt(h);if(!f){if(ot(n,U))return await V(n);f=await de(n,{id:null},await F(new Rt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,B!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ft({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return lt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await P.updated.check()&&await V(n);if(oe(),It(u),se(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const w=o?0:1,p={[D]:S+=w,[K]:L+=w,[Jt]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Ze(S,L)}if(I=null,f.props.page.state=i,rt){_=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Qe.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){$=$.filter(b=>!w.includes(b))};w.push(p),$.push(...w)}N.$set(f.props),ae=!0}else ce(f,At,!1);const{activeElement:y}=document;await wt();const v=e?e.scroll:a?Et():null;if(Ft){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==y&&document.activeElement!==document.body;!r&&!R&&kt(),Ft=!0,f.props.page&&(E=f.props.page),z=!1,t==="popstate"&&ie(L),g.fulfil(void 0),$.forEach(w=>w(g.navigation)),P.navigating.set(null)}async function de(t,n,e,r){return t.origin===W&&t.pathname===location.pathname&&!Lt?await ft({status:r,error:e,url:t,route:n}):await V(t)}function rn(){let t;T.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(_t(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Zt(o,T);if(!s)return;const{url:c,external:l,download:d}=bt(s,U);if(l||d)return;const h=Q(s);if(!h.reload)if(i<=h.preload_data){const g=ut(c,!1);g&&en(g)}else i<=h.preload_code&&_t(c.pathname)}function a(){e.disconnect();for(const o of T.querySelectorAll("a")){const{url:i,external:s,download:c}=bt(o,U);if(s||c)continue;const l=Q(o);l.reload||(l.preload_code===Z.viewport&&e.observe(o),l.preload_code===Z.eager&&_t(i.pathname))}}$.push(a),a()}function F(t,n){if(t instanceof st)return t.body;const e=tt(t),r=Xe(t);return q.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function an(t,n={}){return t=Wt(t),t.origin!==W?Promise.reject(new Error("goto: invalid URL")):lt(t,n,0)}function dn(){return ct=!0,tn()}async function hn(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:r}=_;if(!r)return;const a=await le(_.branch.length,e,r.errors);if(a){const o=J({url:n,params:_.params,branch:e.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});_=o.state,N.$set(o.props),wt().then(kt)}}else t.type==="redirect"?lt(t.location,{invalidateAll:!0},0):(N.$set({form:null,page:{...E,form:t.data,status:t.status}}),await wt(),N.$set({form:t.data}),t.type==="success"&&kt())}function on(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Vt(),!z){const a=ge(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};re.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Vt()}),(n=navigator.connection)!=null&&n.saveData||rn(),T.addEventListener("click",async e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Zt(e.composedPath()[0],T);if(!r)return;const{url:a,external:o,target:i,download:s}=bt(r,U);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Q(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ue({url:a,type:"link"})?z=!0:e.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===gt(location)){const[,u]=_.url.href.split("#");if(u===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(G=!0,It(S),t(a),!c.replace_state)return;G=!1}e.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),X({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),T.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ot(s,U))return;const c=e.target,l=Q(c);if(l.reload)return;e.preventDefault(),e.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),X({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[D]){const a=e.state[D];if(B={},a===S)return;const o=C[a],i=e.state[Jt]??{},s=new URL(e.state[$e]??location.href),c=e.state[K],l=gt(location)===gt(_.url);if(c===L&&(ae||l)){t(s),C[S]=Et(),o&&scrollTo(o.x,o.y),i!==E.state&&(E={...E,state:i},N.$set({page:E})),S=a;return}const h=a-S;await X({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,L=c},block:()=>{history.go(-h)},nav_token:B})}else if(!G){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[D]:++S,[K]:L},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&P.navigating.set(null)});function t(e){_.url=e,P.page.set({...E,url:e}),P.page.notify()}}async function sn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Lt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ut(c,!1)||{});let l;try{const d=r.map(async(u,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=pe(f.uses)),Ut({loader:q.nodes[u],url:c,params:a,route:o,parent:async()=>{const y={};for(let v=0;v<m;v+=1)Object.assign(y,(await d[v]).data);return y},server_data_node:Tt(f)})}),h=await Promise.all(d),g=it.find(({id:u})=>u===o.id);if(g){const u=g.layouts;for(let m=0;m<u.length;m++)u[m]||h.splice(m,0,void 0)}l=J({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(d){if(d instanceof ee){await V(new URL(d.location,location.href));return}l=await ft({status:tt(d),error:await F(d,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),ce(l,t,!0)}async function he(t,n){var a;const e=new URL(t);e.pathname=Se(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(We,"1"),e.searchParams.append(Je,n.map(o=>o?"1":"0").join(""));const r=await Ht(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new st(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Qt(g,{Promise:u=>new Promise((m,f)=>{i.set(u,{fulfil:m,reject:f})})})}let d="";for(;;){const{done:g,value:u}=await s.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const m=d.indexOf(`
`);if(m===-1)break;const f=JSON.parse(d.slice(0,m));if(d=d.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=pe(y.uses),y.data=l(y.data))}),o(f);else if(f.type==="chunk"){const{id:y,data:v,error:R}=f,w=i.get(y);i.delete(y),R?w.reject(l(R)):w.fulfil(l(v))}}}})}function pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function kt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ge(t,n,e,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{hn as a,un as b,dn as i,fn as p,ln as r,P as s};

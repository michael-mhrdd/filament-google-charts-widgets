(()=>{var H=window,L=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),X=new WeakMap,M=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(L&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&X.set(e,t))}return t}toString(){return this.cssText}},tt=r=>new M(typeof r=="string"?r:r+"",void 0,D),W=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new M(e,r,D)},B=(r,t)=>{L?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},z=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return tt(e)})(r):r;var V,q=window,et=q.trustedTypes,Ct=et?et.emptyScript:"",st=q.reactiveElementPolyfillSupport,K={toAttribute(r,t){switch(t){case Boolean:r=r?Ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},it=(r,t)=>t!==r&&(t==t||r==r),G={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:it},g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(z(i))}else t!==void 0&&e.push(z(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return B(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=G){var i;let o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){let n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:K).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){let n=i.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:K;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||it)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},st==null||st({ReactiveElement:g}),((V=q.reactiveElementVersions)!==null&&V!==void 0?V:q.reactiveElementVersions=[]).push("1.4.2");var J,I=window,b=I.trustedTypes,rt=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+$,xt=`<${ot}>`,w=document,P=(r="")=>w.createComment(r),O=r=>r===null||typeof r!="object"&&typeof r!="function",nt=Array.isArray,Tt=r=>nt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,at=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,dt=/"/g,ct=/^(?:script|style|textarea|title)$/i,pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),ut=pt(1),zt=pt(2),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),vt=new WeakMap,E=w.createTreeWalker(w,129,null,!1),Pt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":"",n=R;for(let l=0;l<e;l++){let a=r[l],m,h,c=-1,v=0;for(;v<a.length&&(n.lastIndex=v,h=n.exec(a),h!==null);)v=n.lastIndex,n===R?h[1]==="!--"?n=lt:h[1]!==void 0?n=at:h[2]!==void 0?(ct.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=_):h[3]!==void 0&&(n=_):n===_?h[0]===">"?(n=i??R,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,m=h[1],n=h[3]===void 0?_:h[3]==='"'?dt:ht):n===dt||n===ht?n=_:n===lt||n===at?n=R:(n=_,i=void 0);let k=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===R?a+xt:c>=0?(s.push(m),a.slice(0,c)+"$lit$"+a.slice(c)+$+k):a+$+(c===-2?(s.push(void 0),l):k)}let d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[rt!==void 0?rt.createHTML(d):d,s]},C=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,d=t.length-1,l=this.parts,[a,m]=Pt(t,e);if(this.el=C.createElement(a,s),E.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=E.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith($)){let v=m[n++];if(h.push(c),v!==void 0){let k=i.getAttribute(v.toLowerCase()+"$lit$").split($),N=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:N[2],strings:k,ctor:N[1]==="."?ft:N[1]==="?"?mt:N[1]==="@"?yt:j})}else l.push({type:6,index:o})}for(let c of h)i.removeAttribute(c)}if(ct.test(i.tagName)){let h=i.textContent.split($),c=h.length-1;if(c>0){i.textContent=b?b.emptyScript:"";for(let v=0;v<c;v++)i.append(h[v],P()),E.nextNode(),l.push({type:2,index:++o});i.append(h[c],P())}}}else if(i.nodeType===8)if(i.data===ot)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)l.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(t,e){let s=w.createElement("template");return s.innerHTML=t,s}};function x(r,t,e=r,s){var i,o,n,d;if(t===A)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,a=O(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=x(r,l._$AS(r,t.values),l,s)),t}var gt=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;let{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:w).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let m;a.type===2?m=new T(n,n.nextSibling,this,t):a.type===1?m=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(m=new $t(n,this,t)),this.u.push(m),a=i[++l]}d!==(a==null?void 0:a.index)&&(n=E.nextNode(),d++)}return o}p(t){let e=0;for(let s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},T=class{constructor(t,e,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),O(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(s);else{let n=new gt(o,this),d=n.v(this.options);n.p(s),this.T(d),this._$AH=n}}_$AC(t){let e=vt.get(t.strings);return e===void 0&&vt.set(t.strings,e=new C(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new T(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},j=class{constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=x(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{let d=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=x(this,d[s+l],e,l),a===A&&(a=this._$AH[l]),n||(n=!O(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ft=class extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Ot=b?b.emptyScript:"",mt=class extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Ot):this.element.removeAttribute(this.name)}},yt=class extends j{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=x(this,t,e,0))!==null&&s!==void 0?s:p)===A)return;let i=this._$AH,o=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},$t=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var _t=I.litHtmlPolyfillSupport;_t==null||_t(C,T),((J=I.litHtmlVersions)!==null&&J!==void 0?J:I.litHtmlVersions=[]).push("2.4.0");var At=(r,t,e)=>{var s,i;let o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new T(t.insertBefore(P(),d),d,void 0,e??{})}return n._$AI(r),n};var Z,F;var S=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=At(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}};S.finalized=!0,S._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:S});var St=globalThis.litElementPolyfillSupport;St==null||St({LitElement:S});((F=globalThis.litElementVersions)!==null&&F!==void 0?F:globalThis.litElementVersions=[]).push("3.2.2");var Rt=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function f(r){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(r,t,e):Rt(r,t)}var Y,pe=((Y=window.HTMLSlotElement)===null||Y===void 0?void 0:Y.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var jt=new Promise((r,t)=>{if(typeof google!="undefined"&&google.charts&&typeof google.charts.load=="function")r();else{let e=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');if(!e){e=document.createElement("script");let s={createScriptURL:i=>"https://www.gstatic.com/charts/loader.js"};typeof trustedTypes!="undefined"&&(s=trustedTypes.createPolicy("google-chart",s)),e.src=s.createScriptURL(""),document.head.appendChild(e)}e.addEventListener("load",r),e.addEventListener("error",t)}});async function bt(r={}){await jt;let{version:t="current",packages:e=["corechart"],language:s=document.documentElement.lang||"en",mapsApiKey:i}=r;return google.charts.load(t,{packages:e,language:s,mapsApiKey:i})}async function Q(r){if(await bt(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function wt(r){return await bt(),new google.visualization.ChartWrapper({container:r})}var y=function(r,t,e,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,s);else for(var d=r.length-1;d>=0;d--)(n=r[d])&&(o=(i<3?n(o):i>3?n(t,e,o):n(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Et=["ready","select"],Ut={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},u=class extends S{constructor(){super(...arguments);this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return ut`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){wt(this.shadowRoot.getElementById("chartdiv")).then(t=>{this.chartWrapper=t,this.typeChanged(),google.visualization.events.addListener(t,"ready",()=>{this.drawn=!0}),google.visualization.events.addListener(t,"select",()=>{this.selection=t.getChart().getSelection()}),this.propagateEvents(Et,t)})}updated(t){t.has("type")&&this.typeChanged(),(t.has("rows")||t.has("cols"))&&this.rowsOrColumnsChanged(),t.has("data")&&this.dataChanged(),t.has("view")&&this.viewChanged(),(t.has("_data")||t.has("options"))&&this.redraw(),t.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Ut[this.type]||this.type);let t=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{let e=this.chartWrapper.getChart();e!==t&&this.propagateEvents(this.events.filter(i=>!Et.includes(i)),e);let s=this.shadowRoot.getElementById("styles");s.children.length||this.localizeGlobalStylesheets(s),this.selection&&this.selectionChanged()}),this.redraw()}propagateEvents(t,e){for(let s of t)google.visualization.events.addListener(e,s,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${s}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;let t=this.chartWrapper.getChart();if(t!=null&&t.setSelection){if(this.type==="timeline"){let e=JSON.stringify(t.getSelection());if(JSON.stringify(this.selection)===e)return}t.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;let t=this.chartWrapper.getChart();return t&&t.getImageURI()}viewChanged(){!this.view||(this._data=this.view)}async rowsOrColumnsChanged(){let{rows:t,cols:e}=this;if(!(!t||!e))try{let s=await Q({cols:e});s.addRows(t),this._data=s}catch(s){this.shadowRoot.getElementById("chartdiv").textContent=String(s)}}dataChanged(){let t=this.data,e;if(!t)return;let s=!1;try{t=JSON.parse(t)}catch(i){s=typeof t=="string"||t instanceof String}s?e=fetch(t).then(i=>i.json()):e=Promise.resolve(t),e.then(Q).then(i=>{this._data=i})}localizeGlobalStylesheets(t){let e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(let s of e){let i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",s.getAttribute("href")),t.appendChild(i)}}};u.styles=W`
    :host {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin: 0;
      padding: 0;
      width: 400px;
      height: 300px;
    }

    :host([hidden]) {
      display: none;
    }

    :host([type="gauge"]) {
      width: 300px;
      height: 300px;
    }

    #chartdiv {
      width: 100%;
    }

    /* Workaround for slow initial ready event for tables. */
    .google-visualization-table-loadtest {
      padding-left: 6px;
    }
  `;y([f({type:String,reflect:!0})],u.prototype,"type",void 0);y([f({type:Array})],u.prototype,"events",void 0);y([f({type:Object,hasChanged:()=>!0})],u.prototype,"options",void 0);y([f({type:Array})],u.prototype,"cols",void 0);y([f({type:Array})],u.prototype,"rows",void 0);y([f({type:String})],u.prototype,"data",void 0);y([f({type:Object})],u.prototype,"view",void 0);y([f({type:Array})],u.prototype,"selection",void 0);y([f({type:Object})],u.prototype,"_data",void 0);customElements.define("google-chart",u);window.updateChart=function(r){let t=document.getElementById("filament-google-charts");!t||(t.rows=r)};Livewire.on("updateChart",r=>{window.updateChart(r)});})();
/**
 * @license
 * Copyright 2014-2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
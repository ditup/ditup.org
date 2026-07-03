var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=globalThis,u=l.ShadowRoot&&(l.ShadyCSS===void 0||l.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,d=Symbol(),f=new WeakMap,p=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(u&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=f.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&f.set(t,e))}return e}toString(){return this.cssText}},m=e=>new p(typeof e==`string`?e:e+``,void 0,d),h=(e,...t)=>new p(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,d),g=(e,t)=>{if(u)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=l.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},_=u?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return m(t)})(e):e,{is:v,defineProperty:y,getOwnPropertyDescriptor:b,getOwnPropertyNames:x,getOwnPropertySymbols:S,getPrototypeOf:C}=Object,w=globalThis,T=w.trustedTypes,E=T?T.emptyScript:``,D=w.reactiveElementPolyfillSupport,O=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?E:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},A=(e,t)=>!v(e,t),ee={attribute:!0,type:String,converter:k,reflect:!1,useDefault:!1,hasChanged:A};Symbol.metadata??=Symbol(`metadata`),w.litPropertyMetadata??=new WeakMap;var j=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&y(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ee}static _$Ei(){if(this.hasOwnProperty(O(`elementProperties`)))return;let e=C(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O(`properties`))){let e=this.properties,t=[...x(e),...S(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(_(e))}else e!==void 0&&t.push(_(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return g(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?k:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?k:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??A)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};j.elementStyles=[],j.shadowRootOptions={mode:`open`},j[O(`elementProperties`)]=new Map,j[O(`finalized`)]=new Map,D?.({ReactiveElement:j}),(w.reactiveElementVersions??=[]).push(`2.1.2`);var M=globalThis,N=e=>e,P=M.trustedTypes,te=P?P.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,F=`$lit$`,I=`lit$${Math.random().toFixed(9).slice(2)}$`,ne=`?`+I,re=`<${ne}>`,L=document,ie=()=>L.createComment(``),ae=e=>e===null||typeof e!=`object`&&typeof e!=`function`,oe=Array.isArray,se=e=>oe(e)||typeof e?.[Symbol.iterator]==`function`,ce=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,de=/>/g,fe=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),pe=/'/g,me=/"/g,he=/^(?:script|style|textarea|title)$/i,R=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ge=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),_e=new WeakMap,B=L.createTreeWalker(L,129);function ve(e,t){if(!oe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return te===void 0?t:te.createHTML(t)}var V=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=le;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===le?c[1]===`!--`?o=ue:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=fe):(he.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=fe):o=de:o===fe?c[0]===`>`?(o=i??le,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?fe:c[3]===`"`?me:pe):o===me||o===pe?o=fe:o===ue||o===de?o=le:(o=fe,i=void 0);let d=o===fe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===le?n+re:l>=0?(r.push(s),n.slice(0,l)+F+n.slice(l)+I+d):n+I+(l===-2?t:d)}return[ve(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},ye=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=V(t,n);if(this.el=e.createElement(l,r),B.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=B.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(F)){let t=u[o++],n=i.getAttribute(e).split(I),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?we:r[1]===`?`?Te:r[1]===`@`?Ee:Ce}),i.removeAttribute(e)}else e.startsWith(I)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(he.test(i.tagName)){let e=i.textContent.split(I),t=e.length-1;if(t>0){i.textContent=P?P.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ie()),B.nextNode(),c.push({type:2,index:++a});i.append(e[t],ie())}}}else if(i.nodeType===8)if(i.data===ne)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(I,e+1))!==-1;)c.push({type:7,index:a}),e+=I.length-1}a++}}static createElement(e,t){let n=L.createElement(`template`);return n.innerHTML=e,n}};function be(e,t,n=e,r){if(t===ge)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ae(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=be(e,i._$AS(e,t.values),i,r)),t}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??L).importNode(t,!0);B.currentNode=r;let i=B.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Se(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new De(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=B.nextNode(),a++)}return B.currentNode=L,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Se=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=be(this,e,t),ae(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==ge&&this._(e):e._$litType$===void 0?e.nodeType===void 0?se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ye.createElement(ve(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new ye(e)),t}k(t){oe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ie()),this.O(ie()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=N(e).nextSibling;N(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ce=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=be(this,e,t,0),a=!ae(e)||e!==this._$AH&&e!==ge,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=be(this,r[n+o],t,o),s===ge&&(s=this._$AH[o]),a||=!ae(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},we=class extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},Te=class extends Ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},Ee=class extends Ce{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=be(this,e,t,0)??z)===ge)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},De=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){be(this,e)}},Oe={M:F,P:I,A:ne,C:1,L:V,R:xe,D:se,V:be,I:Se,H:Ce,N:Te,U:Ee,B:we,F:De},ke=M.litHtmlPolyfillSupport;ke?.(ye,Se),(M.litHtmlVersions??=[]).push(`3.3.3`);var Ae=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Se(t.insertBefore(ie(),e),e,void 0,n??{})}return i._$AI(e),i},je=globalThis,Me=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ae(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ge}};Me._$litElement$=!0,Me.finalized=!0,je.litElementHydrateSupport?.({LitElement:Me});var Ne=je.litElementPolyfillSupport;Ne?.({LitElement:Me}),(je.litElementVersions??=[]).push(`4.2.2`);var Pe=h`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`,Fe=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Le=e=>{throw TypeError(e)},H=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ie(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Fe(t,n,i),i},Re=(e,t,n)=>t.has(e)||Le(`Cannot `+n),ze=(e,t,n)=>(Re(e,t,`read from private field`),n?n.call(e):t.get(e)),Be=(e,t,n)=>t.has(e)?Le(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ve=(e,t,n,r)=>(Re(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),U=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},He={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:A},Ue=(e=He,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function W(e){return(t,n)=>typeof n==`object`?Ue(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function We(e){return W({...e,state:!0,attribute:!1})}var Ge=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Ke(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ge(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ge(n,r,{get(){return a(this)}})}}var qe=h`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,Je=/;\s+$/;function Ye(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Xe(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(Je)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var Ze,Qe=class extends Me{constructor(){super(),Be(this,Ze,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[qe,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){ze(this,Ze)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Ve(this,Ze,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=Xe({property:Ye(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=Xe({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Ze=new WeakMap,H([W()],Qe.prototype,`dir`,2),H([W()],Qe.prototype,`lang`,2),H([W({type:Boolean,reflect:!0,attribute:`did-ssr`})],Qe.prototype,`didSSR`,2);var $e=new Set,et=new Map,tt,nt=`ltr`,rt=`en`,it=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(it){let e=new MutationObserver(ot);nt=document.documentElement.dir||`ltr`,rt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function at(...e){e.map(e=>{let t=e.$code.toLowerCase();et.has(t)?et.set(t,Object.assign(Object.assign({},et.get(t)),e)):et.set(t,e),tt||=e}),ot()}function ot(){it&&(nt=document.documentElement.dir||`ltr`,rt=document.documentElement.lang||navigator.language),[...$e.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var st=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){$e.add(this.host)}hostDisconnected(){$e.delete(this.host)}dir(){return`${this.host.dir||nt}`.toLowerCase()}lang(){return`${this.host.lang||rt}`.toLowerCase()}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=et.get(`${n}-${r}`),a=et.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&tt&&tt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(tt&&tt[e])i=tt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},ct={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,captions:`Captions`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseYear:`Choose year`,clearEntry:`Clear entry`,close:`Close`,closeCalendar:`Close calendar`,createOption:e=>`Create "${e}"`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,incompleteDate:`Enter a valid date.`,dropFileHere:`Drop file here or click to browse`,decrement:`Decrement`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,error:`Error`,enterFullscreen:`Enter fullscreen`,exitFullscreen:`Exit fullscreen`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,increment:`Increment`,loading:`Loading`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,play:`Play`,playbackSpeed:`Playback speed`,playlist:`Playlist`,playAnimation:`Play animation`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectionCleared:`Selection cleared`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,startDate:`Start date`,today:`Today`,toggleColorFormat:`Toggle color format`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,currentlyPlaying:`currently playing`,unmute:`Unmute`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`,am:`AM`,chooseTime:`Choose time`,closeTimeInput:`Close time picker`,dayPeriod:`AM/PM`,hour:`Hour`,minute:`Minute`,now:`Now`,pm:`PM`,second:`Second`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`};at(ct);var lt=ct,ut=class extends st{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};at(lt);var dt=class extends Qe{constructor(){super(...arguments),this.localize=new ut(this)}render(){return R`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term(`loading`)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};dt.css=Pe,dt=H([U(`wa-spinner`)],dt);var ft=new TextEncoder,pt=new TextDecoder;function mt(...e){let t=e.reduce((e,{length:t})=>e+t,0),n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}function ht(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r>127)throw TypeError(`non-ASCII string encountered in encode()`);t[n]=r}return t}function gt(e){if(Uint8Array.prototype.toBase64)return e.toBase64();let t=32768,n=[];for(let r=0;r<e.length;r+=t)n.push(String.fromCharCode.apply(null,e.subarray(r,r+t)));return btoa(n.join(``))}function _t(e){if(Uint8Array.fromBase64)return Uint8Array.fromBase64(e);let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function vt(e){if(Uint8Array.fromBase64)return Uint8Array.fromBase64(typeof e==`string`?e:pt.decode(e),{alphabet:`base64url`});let t=e;t instanceof Uint8Array&&(t=pt.decode(t)),t=t.replace(/-/g,`+`).replace(/_/g,`/`);try{return _t(t)}catch{throw TypeError(`The input to be decoded is not correctly encoded.`)}}function yt(e){let t=e;return typeof t==`string`&&(t=ft.encode(t)),Uint8Array.prototype.toBase64?t.toBase64({alphabet:`base64url`,omitPadding:!0}):gt(t).replace(/=/g,``).replace(/\+/g,`-`).replace(/\//g,`_`)}var bt=(e,t=`algorithm.name`)=>TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`),xt=(e,t)=>e.name===t;function St(e){return parseInt(e.name.slice(4),10)}function Ct(e,t){if(St(e.hash)!==t)throw bt(`SHA-${t}`,`algorithm.hash`)}function wt(e){switch(e){case`ES256`:return`P-256`;case`ES384`:return`P-384`;case`ES512`:return`P-521`;default:throw Error(`unreachable`)}}function Tt(e,t){if(t&&!e.usages.includes(t))throw TypeError(`CryptoKey does not support this operation, its usages must include ${t}.`)}function Et(e,t,n){switch(t){case`HS256`:case`HS384`:case`HS512`:if(!xt(e.algorithm,`HMAC`))throw bt(`HMAC`);Ct(e.algorithm,parseInt(t.slice(2),10));break;case`RS256`:case`RS384`:case`RS512`:if(!xt(e.algorithm,`RSASSA-PKCS1-v1_5`))throw bt(`RSASSA-PKCS1-v1_5`);Ct(e.algorithm,parseInt(t.slice(2),10));break;case`PS256`:case`PS384`:case`PS512`:if(!xt(e.algorithm,`RSA-PSS`))throw bt(`RSA-PSS`);Ct(e.algorithm,parseInt(t.slice(2),10));break;case`Ed25519`:case`EdDSA`:if(!xt(e.algorithm,`Ed25519`))throw bt(`Ed25519`);break;case`ML-DSA-44`:case`ML-DSA-65`:case`ML-DSA-87`:if(!xt(e.algorithm,t))throw bt(t);break;case`ES256`:case`ES384`:case`ES512`:{if(!xt(e.algorithm,`ECDSA`))throw bt(`ECDSA`);let n=wt(t);if(e.algorithm.namedCurve!==n)throw bt(n,`algorithm.namedCurve`);break}default:throw TypeError(`CryptoKey does not support this operation`)}Tt(e,n)}function Dt(e,t,...n){if(n=n.filter(Boolean),n.length>2){let t=n.pop();e+=`one of type ${n.join(`, `)}, or ${t}.`}else n.length===2?e+=`one of type ${n[0]} or ${n[1]}.`:e+=`of type ${n[0]}.`;return t==null?e+=` Received ${t}`:typeof t==`function`&&t.name?e+=` Received function ${t.name}`:typeof t==`object`&&t&&t.constructor?.name&&(e+=` Received an instance of ${t.constructor.name}`),e}var Ot=(e,...t)=>Dt(`Key must be `,e,...t),kt=(e,t,...n)=>Dt(`Key for the ${e} algorithm must be `,t,...n),At=class extends Error{static code=`ERR_JOSE_GENERIC`;code=`ERR_JOSE_GENERIC`;constructor(e,t){super(e,t),this.name=this.constructor.name,Error.captureStackTrace?.(this,this.constructor)}},jt=class extends At{static code=`ERR_JWT_CLAIM_VALIDATION_FAILED`;code=`ERR_JWT_CLAIM_VALIDATION_FAILED`;claim;reason;payload;constructor(e,t,n=`unspecified`,r=`unspecified`){super(e,{cause:{claim:n,reason:r,payload:t}}),this.claim=n,this.reason=r,this.payload=t}},Mt=class extends At{static code=`ERR_JWT_EXPIRED`;code=`ERR_JWT_EXPIRED`;claim;reason;payload;constructor(e,t,n=`unspecified`,r=`unspecified`){super(e,{cause:{claim:n,reason:r,payload:t}}),this.claim=n,this.reason=r,this.payload=t}},Nt=class extends At{static code=`ERR_JOSE_ALG_NOT_ALLOWED`;code=`ERR_JOSE_ALG_NOT_ALLOWED`},Pt=class extends At{static code=`ERR_JOSE_NOT_SUPPORTED`;code=`ERR_JOSE_NOT_SUPPORTED`},G=class extends At{static code=`ERR_JWS_INVALID`;code=`ERR_JWS_INVALID`},Ft=class extends At{static code=`ERR_JWT_INVALID`;code=`ERR_JWT_INVALID`},It=class extends At{static code=`ERR_JWKS_INVALID`;code=`ERR_JWKS_INVALID`},Lt=class extends At{static code=`ERR_JWKS_NO_MATCHING_KEY`;code=`ERR_JWKS_NO_MATCHING_KEY`;constructor(e=`no applicable key found in the JSON Web Key Set`,t){super(e,t)}},Rt=class extends At{[Symbol.asyncIterator];static code=`ERR_JWKS_MULTIPLE_MATCHING_KEYS`;code=`ERR_JWKS_MULTIPLE_MATCHING_KEYS`;constructor(e=`multiple matching keys found in the JSON Web Key Set`,t){super(e,t)}},zt=class extends At{static code=`ERR_JWKS_TIMEOUT`;code=`ERR_JWKS_TIMEOUT`;constructor(e=`request timed out`,t){super(e,t)}},Bt=class extends At{static code=`ERR_JWS_SIGNATURE_VERIFICATION_FAILED`;code=`ERR_JWS_SIGNATURE_VERIFICATION_FAILED`;constructor(e=`signature verification failed`,t){super(e,t)}},Vt=e=>{if(e?.[Symbol.toStringTag]===`CryptoKey`)return!0;try{return e instanceof CryptoKey}catch{return!1}},Ht=e=>e?.[Symbol.toStringTag]===`KeyObject`,Ut=e=>Vt(e)||Ht(e);function Wt(e,t){if(e)throw TypeError(`${t} can only be called once`)}function Gt(e,t,n){try{return vt(e)}catch{throw new n(`Failed to base64url decode the ${t}`)}}var Kt=e=>typeof e==`object`&&!!e;function qt(e){if(!Kt(e)||Object.prototype.toString.call(e)!==`[object Object]`)return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Jt(...e){let t=e.filter(Boolean);if(t.length===0||t.length===1)return!0;let n;for(let e of t){let t=Object.keys(e);if(!n||n.size===0){n=new Set(t);continue}for(let e of t){if(n.has(e))return!1;n.add(e)}}return!0}var Yt=e=>qt(e)&&typeof e.kty==`string`,Xt=e=>e.kty!==`oct`&&(e.kty===`AKP`&&typeof e.priv==`string`||typeof e.d==`string`),Zt=e=>e.kty!==`oct`&&e.d===void 0&&e.priv===void 0,Qt=e=>e.kty===`oct`&&typeof e.k==`string`;function $t(e,t){if(e.startsWith(`RS`)||e.startsWith(`PS`)){let{modulusLength:n}=t.algorithm;if(typeof n!=`number`||n<2048)throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)}}function en(e,t){let n=`SHA-${e.slice(-3)}`;switch(e){case`HS256`:case`HS384`:case`HS512`:return{hash:n,name:`HMAC`};case`PS256`:case`PS384`:case`PS512`:return{hash:n,name:`RSA-PSS`,saltLength:parseInt(e.slice(-3),10)>>3};case`RS256`:case`RS384`:case`RS512`:return{hash:n,name:`RSASSA-PKCS1-v1_5`};case`ES256`:case`ES384`:case`ES512`:return{hash:n,name:`ECDSA`,namedCurve:t.namedCurve};case`Ed25519`:case`EdDSA`:return{name:`Ed25519`};case`ML-DSA-44`:case`ML-DSA-65`:case`ML-DSA-87`:return{name:e};default:throw new Pt(`alg ${e} is not supported either by JOSE or your javascript runtime`)}}async function tn(e,t,n){if(t instanceof Uint8Array){if(!e.startsWith(`HS`))throw TypeError(Ot(t,`CryptoKey`,`KeyObject`,`JSON Web Key`));return crypto.subtle.importKey(`raw`,t,{hash:`SHA-${e.slice(-3)}`,name:`HMAC`},!1,[n])}return Et(t,e,n),t}async function nn(e,t,n){let r=await tn(e,t,`sign`);$t(e,r);let i=await crypto.subtle.sign(en(e,r.algorithm),r,n);return new Uint8Array(i)}async function rn(e,t,n,r){let i=await tn(e,t,`verify`);$t(e,i);let a=en(e,i.algorithm);try{return await crypto.subtle.verify(a,i,n,r)}catch{return!1}}var an=`Invalid or unsupported JWK "alg" (Algorithm) Parameter value`;function on(e){let t,n;switch(e.kty){case`AKP`:switch(e.alg){case`ML-DSA-44`:case`ML-DSA-65`:case`ML-DSA-87`:t={name:e.alg},n=e.priv?[`sign`]:[`verify`];break;default:throw new Pt(an)}break;case`RSA`:switch(e.alg){case`PS256`:case`PS384`:case`PS512`:t={name:`RSA-PSS`,hash:`SHA-${e.alg.slice(-3)}`},n=e.d?[`sign`]:[`verify`];break;case`RS256`:case`RS384`:case`RS512`:t={name:`RSASSA-PKCS1-v1_5`,hash:`SHA-${e.alg.slice(-3)}`},n=e.d?[`sign`]:[`verify`];break;case`RSA-OAEP`:case`RSA-OAEP-256`:case`RSA-OAEP-384`:case`RSA-OAEP-512`:t={name:`RSA-OAEP`,hash:`SHA-${parseInt(e.alg.slice(-3),10)||1}`},n=e.d?[`decrypt`,`unwrapKey`]:[`encrypt`,`wrapKey`];break;default:throw new Pt(an)}break;case`EC`:switch(e.alg){case`ES256`:case`ES384`:case`ES512`:t={name:`ECDSA`,namedCurve:{ES256:`P-256`,ES384:`P-384`,ES512:`P-521`}[e.alg]},n=e.d?[`sign`]:[`verify`];break;case`ECDH-ES`:case`ECDH-ES+A128KW`:case`ECDH-ES+A192KW`:case`ECDH-ES+A256KW`:t={name:`ECDH`,namedCurve:e.crv},n=e.d?[`deriveBits`]:[];break;default:throw new Pt(an)}break;case`OKP`:switch(e.alg){case`Ed25519`:case`EdDSA`:t={name:`Ed25519`},n=e.d?[`sign`]:[`verify`];break;case`ECDH-ES`:case`ECDH-ES+A128KW`:case`ECDH-ES+A192KW`:case`ECDH-ES+A256KW`:t={name:e.crv},n=e.d?[`deriveBits`]:[];break;default:throw new Pt(an)}break;default:throw new Pt(`Invalid or unsupported JWK "kty" (Key Type) Parameter value`)}return{algorithm:t,keyUsages:n}}async function sn(e){if(!e.alg)throw TypeError(`"alg" argument is required when "jwk.alg" is not present`);let{algorithm:t,keyUsages:n}=on(e),r={...e};return r.kty!==`AKP`&&delete r.alg,delete r.use,crypto.subtle.importKey(`jwk`,r,t,e.ext??!(e.d||e.priv),e.key_ops??n)}var cn=`given KeyObject instance cannot be used for this algorithm`,ln,un=async(e,t,n,r=!1)=>{ln||=new WeakMap;let i=ln.get(e);if(i?.[n])return i[n];let a=await sn({...t,alg:n});return r&&Object.freeze(e),i?i[n]=a:ln.set(e,{[n]:a}),a},dn=(e,t)=>{ln||=new WeakMap;let n=ln.get(e);if(n?.[t])return n[t];let r=e.type===`public`,i=!!r,a;if(e.asymmetricKeyType===`x25519`){switch(t){case`ECDH-ES`:case`ECDH-ES+A128KW`:case`ECDH-ES+A192KW`:case`ECDH-ES+A256KW`:break;default:throw TypeError(cn)}a=e.toCryptoKey(e.asymmetricKeyType,i,r?[]:[`deriveBits`])}if(e.asymmetricKeyType===`ed25519`){if(t!==`EdDSA`&&t!==`Ed25519`)throw TypeError(cn);a=e.toCryptoKey(e.asymmetricKeyType,i,[r?`verify`:`sign`])}switch(e.asymmetricKeyType){case`ml-dsa-44`:case`ml-dsa-65`:case`ml-dsa-87`:if(t!==e.asymmetricKeyType.toUpperCase())throw TypeError(cn);a=e.toCryptoKey(e.asymmetricKeyType,i,[r?`verify`:`sign`])}if(e.asymmetricKeyType===`rsa`){let n;switch(t){case`RSA-OAEP`:n=`SHA-1`;break;case`RS256`:case`PS256`:case`RSA-OAEP-256`:n=`SHA-256`;break;case`RS384`:case`PS384`:case`RSA-OAEP-384`:n=`SHA-384`;break;case`RS512`:case`PS512`:case`RSA-OAEP-512`:n=`SHA-512`;break;default:throw TypeError(cn)}if(t.startsWith(`RSA-OAEP`))return e.toCryptoKey({name:`RSA-OAEP`,hash:n},i,r?[`encrypt`]:[`decrypt`]);a=e.toCryptoKey({name:t.startsWith(`PS`)?`RSA-PSS`:`RSASSA-PKCS1-v1_5`,hash:n},i,[r?`verify`:`sign`])}if(e.asymmetricKeyType===`ec`){let n=new Map([[`prime256v1`,`P-256`],[`secp384r1`,`P-384`],[`secp521r1`,`P-521`]]).get(e.asymmetricKeyDetails?.namedCurve);if(!n)throw TypeError(cn);let o={ES256:`P-256`,ES384:`P-384`,ES512:`P-521`};o[t]&&n===o[t]&&(a=e.toCryptoKey({name:`ECDSA`,namedCurve:n},i,[r?`verify`:`sign`])),t.startsWith(`ECDH-ES`)&&(a=e.toCryptoKey({name:`ECDH`,namedCurve:n},i,r?[]:[`deriveBits`]))}if(!a)throw TypeError(cn);return n?n[t]=a:ln.set(e,{[t]:a}),a};async function fn(e,t){if(e instanceof Uint8Array||Vt(e))return e;if(Ht(e)){if(e.type===`secret`)return e.export();if(`toCryptoKey`in e&&typeof e.toCryptoKey==`function`)try{return dn(e,t)}catch(e){if(e instanceof TypeError)throw e}return un(e,e.export({format:`jwk`}),t)}if(Yt(e))return e.k?vt(e.k):un(e,e,t,!0);throw Error(`unreachable`)}async function pn(e,t,n){if(!qt(e))throw TypeError(`JWK must be an object`);let r;switch(t??=e.alg,r??=n?.extractable??e.ext,e.kty){case`oct`:if(typeof e.k!=`string`||!e.k)throw TypeError(`missing "k" (Key Value) Parameter value`);return vt(e.k);case`RSA`:if(`oth`in e&&e.oth!==void 0)throw new Pt(`RSA JWK "oth" (Other Primes Info) Parameter value is not supported`);return sn({...e,alg:t,ext:r});case`AKP`:if(typeof e.alg!=`string`||!e.alg)throw TypeError(`missing "alg" (Algorithm) Parameter value`);if(t!==void 0&&t!==e.alg)throw TypeError(`JWK alg and alg option value mismatch`);return sn({...e,ext:r});case`EC`:case`OKP`:return sn({...e,alg:t,ext:r});default:throw new Pt(`Unsupported "kty" (Key Type) Parameter value`)}}async function mn(e){if(Ht(e))if(e.type===`secret`)e=e.export();else return e.export({format:`jwk`});if(e instanceof Uint8Array)return{kty:`oct`,k:yt(e)};if(!Vt(e))throw TypeError(Ot(e,`CryptoKey`,`KeyObject`,`Uint8Array`));if(!e.extractable)throw TypeError(`non-extractable CryptoKey cannot be exported as a JWK`);let{ext:t,key_ops:n,alg:r,use:i,...a}=await crypto.subtle.exportKey(`jwk`,e);return a.kty===`AKP`&&(a.alg=r),a}async function hn(e){return mn(e)}function gn(e,t,n,r,i){if(i.crit!==void 0&&r?.crit===void 0)throw new e(`"crit" (Critical) Header Parameter MUST be integrity protected`);if(!r||r.crit===void 0)return new Set;if(!Array.isArray(r.crit)||r.crit.length===0||r.crit.some(e=>typeof e!=`string`||e.length===0))throw new e(`"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present`);let a;a=n===void 0?t:new Map([...Object.entries(n),...t.entries()]);for(let t of r.crit){if(!a.has(t))throw new Pt(`Extension Header Parameter "${t}" is not recognized`);if(i[t]===void 0)throw new e(`Extension Header Parameter "${t}" is missing`);if(a.get(t)&&r[t]===void 0)throw new e(`Extension Header Parameter "${t}" MUST be integrity protected`)}return new Set(r.crit)}function _n(e,t){if(t!==void 0&&(!Array.isArray(t)||t.some(e=>typeof e!=`string`)))throw TypeError(`"${e}" option must be an array of strings`);if(t)return new Set(t)}var vn=e=>e?.[Symbol.toStringTag],yn=(e,t,n)=>{if(t.use!==void 0){let e;switch(n){case`sign`:case`verify`:e=`sig`;break;case`encrypt`:case`decrypt`:e=`enc`;break}if(t.use!==e)throw TypeError(`Invalid key for this operation, its "use" must be "${e}" when present`)}if(t.alg!==void 0&&t.alg!==e)throw TypeError(`Invalid key for this operation, its "alg" must be "${e}" when present`);if(Array.isArray(t.key_ops)){let r;switch(!0){case n===`sign`||n===`verify`:case e===`dir`:case e.includes(`CBC-HS`):r=n;break;case e.startsWith(`PBES2`):r=`deriveBits`;break;case/^A\d{3}(?:GCM)?(?:KW)?$/.test(e):r=!e.includes(`GCM`)&&e.endsWith(`KW`)?n===`encrypt`?`wrapKey`:`unwrapKey`:n;break;case n===`encrypt`&&e.startsWith(`RSA`):r=`wrapKey`;break;case n===`decrypt`:r=e.startsWith(`RSA`)?`unwrapKey`:`deriveBits`;break}if(r&&t.key_ops?.includes?.(r)===!1)throw TypeError(`Invalid key for this operation, its "key_ops" must include "${r}" when present`)}return!0},bn=(e,t,n)=>{if(!(t instanceof Uint8Array)){if(Yt(t)){if(Qt(t)&&yn(e,t,n))return;throw TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`)}if(!Ut(t))throw TypeError(kt(e,t,`CryptoKey`,`KeyObject`,`JSON Web Key`,`Uint8Array`));if(t.type!==`secret`)throw TypeError(`${vn(t)} instances for symmetric algorithms must be of type "secret"`)}},xn=(e,t,n)=>{if(Yt(t))switch(n){case`decrypt`:case`sign`:if(Xt(t)&&yn(e,t,n))return;throw TypeError(`JSON Web Key for this operation must be a private JWK`);case`encrypt`:case`verify`:if(Zt(t)&&yn(e,t,n))return;throw TypeError(`JSON Web Key for this operation must be a public JWK`)}if(!Ut(t))throw TypeError(kt(e,t,`CryptoKey`,`KeyObject`,`JSON Web Key`));if(t.type===`secret`)throw TypeError(`${vn(t)} instances for asymmetric algorithms must not be of type "secret"`);if(t.type===`public`)switch(n){case`sign`:throw TypeError(`${vn(t)} instances for asymmetric algorithm signing must be of type "private"`);case`decrypt`:throw TypeError(`${vn(t)} instances for asymmetric algorithm decryption must be of type "private"`)}if(t.type===`private`)switch(n){case`verify`:throw TypeError(`${vn(t)} instances for asymmetric algorithm verifying must be of type "public"`);case`encrypt`:throw TypeError(`${vn(t)} instances for asymmetric algorithm encryption must be of type "public"`)}};function Sn(e,t,n){switch(e.substring(0,2)){case`A1`:case`A2`:case`di`:case`HS`:case`PB`:bn(e,t,n);break;default:xn(e,t,n)}}async function Cn(e,t,n){if(!qt(e))throw new G(`Flattened JWS must be an object`);if(e.protected===void 0&&e.header===void 0)throw new G(`Flattened JWS must have either of the "protected" or "header" members`);if(e.protected!==void 0&&typeof e.protected!=`string`)throw new G(`JWS Protected Header incorrect type`);if(e.payload===void 0)throw new G(`JWS Payload missing`);if(typeof e.signature!=`string`)throw new G(`JWS Signature missing or incorrect type`);if(e.header!==void 0&&!qt(e.header))throw new G(`JWS Unprotected Header incorrect type`);let r={};if(e.protected)try{let t=vt(e.protected);r=JSON.parse(pt.decode(t))}catch{throw new G(`JWS Protected Header is invalid`)}if(!Jt(r,e.header))throw new G(`JWS Protected and JWS Unprotected Header Parameter names must be disjoint`);let i={...r,...e.header},a=gn(G,new Map([[`b64`,!0]]),n?.crit,r,i),o=!0;if(a.has(`b64`)&&(o=r.b64,typeof o!=`boolean`))throw new G(`The "b64" (base64url-encode payload) Header Parameter must be a boolean`);let{alg:s}=i;if(typeof s!=`string`||!s)throw new G(`JWS "alg" (Algorithm) Header Parameter missing or invalid`);let c=n&&_n(`algorithms`,n.algorithms);if(c&&!c.has(s))throw new Nt(`"alg" (Algorithm) Header Parameter value not allowed`);if(o){if(typeof e.payload!=`string`)throw new G(`JWS Payload must be a string`)}else if(typeof e.payload!=`string`&&!(e.payload instanceof Uint8Array))throw new G(`JWS Payload must be a string or an Uint8Array instance`);let l=!1;typeof t==`function`&&(t=await t(r,e),l=!0),Sn(s,t,`verify`);let u=mt(e.protected===void 0?new Uint8Array:ht(e.protected),ht(`.`),typeof e.payload==`string`?o?ht(e.payload):ft.encode(e.payload):e.payload),d=Gt(e.signature,`signature`,G),f=await fn(t,s);if(!await rn(s,f,d,u))throw new Bt;let p;p=o?Gt(e.payload,`payload`,G):typeof e.payload==`string`?ft.encode(e.payload):e.payload;let m={payload:p};return e.protected!==void 0&&(m.protectedHeader=r),e.header!==void 0&&(m.unprotectedHeader=e.header),l?{...m,key:f}:m}async function wn(e,t,n){if(e instanceof Uint8Array&&(e=pt.decode(e)),typeof e!=`string`)throw new G(`Compact JWS must be a string or Uint8Array`);let{0:r,1:i,2:a,length:o}=e.split(`.`);if(o!==3)throw new G(`Invalid Compact JWS`);let s=await Cn({payload:i,protected:r,signature:a},t,n),c={payload:s.payload,protectedHeader:s.protectedHeader};return typeof t==`function`?{...c,key:s.key}:c}var Tn=e=>Math.floor(e.getTime()/1e3),En=60,Dn=En*60,On=Dn*24,kn=On*7,An=On*365.25,jn=/^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;function Mn(e){let t=jn.exec(e);if(!t||t[4]&&t[1])throw TypeError(`Invalid time period format`);let n=parseFloat(t[2]),r=t[3].toLowerCase(),i;switch(r){case`sec`:case`secs`:case`second`:case`seconds`:case`s`:i=Math.round(n);break;case`minute`:case`minutes`:case`min`:case`mins`:case`m`:i=Math.round(n*En);break;case`hour`:case`hours`:case`hr`:case`hrs`:case`h`:i=Math.round(n*Dn);break;case`day`:case`days`:case`d`:i=Math.round(n*On);break;case`week`:case`weeks`:case`w`:i=Math.round(n*kn);break;default:i=Math.round(n*An);break}return t[1]===`-`||t[4]===`ago`?-i:i}function Nn(e,t){if(!Number.isFinite(t))throw TypeError(`Invalid ${e} input`);return t}var Pn=e=>e.includes(`/`)?e.toLowerCase():`application/${e.toLowerCase()}`,Fn=(e,t)=>typeof e==`string`?t.includes(e):Array.isArray(e)?t.some(Set.prototype.has.bind(new Set(e))):!1;function In(e,t,n={}){let r;try{r=JSON.parse(pt.decode(t))}catch{}if(!qt(r))throw new Ft(`JWT Claims Set must be a top-level JSON object`);let{typ:i}=n;if(i&&(typeof e.typ!=`string`||Pn(e.typ)!==Pn(i)))throw new jt(`unexpected "typ" JWT header value`,r,`typ`,`check_failed`);let{requiredClaims:a=[],issuer:o,subject:s,audience:c,maxTokenAge:l}=n,u=[...a];l!==void 0&&u.push(`iat`),c!==void 0&&u.push(`aud`),s!==void 0&&u.push(`sub`),o!==void 0&&u.push(`iss`);for(let e of new Set(u.reverse()))if(!(e in r))throw new jt(`missing required "${e}" claim`,r,e,`missing`);if(o&&!(Array.isArray(o)?o:[o]).includes(r.iss))throw new jt(`unexpected "iss" claim value`,r,`iss`,`check_failed`);if(s&&r.sub!==s)throw new jt(`unexpected "sub" claim value`,r,`sub`,`check_failed`);if(c&&!Fn(r.aud,typeof c==`string`?[c]:c))throw new jt(`unexpected "aud" claim value`,r,`aud`,`check_failed`);let d;switch(typeof n.clockTolerance){case`string`:d=Mn(n.clockTolerance);break;case`number`:d=n.clockTolerance;break;case`undefined`:d=0;break;default:throw TypeError(`Invalid clockTolerance option type`)}let{currentDate:f}=n,p=Tn(f||new Date);if((r.iat!==void 0||l)&&typeof r.iat!=`number`)throw new jt(`"iat" claim must be a number`,r,`iat`,`invalid`);if(r.nbf!==void 0){if(typeof r.nbf!=`number`)throw new jt(`"nbf" claim must be a number`,r,`nbf`,`invalid`);if(r.nbf>p+d)throw new jt(`"nbf" claim timestamp check failed`,r,`nbf`,`check_failed`)}if(r.exp!==void 0){if(typeof r.exp!=`number`)throw new jt(`"exp" claim must be a number`,r,`exp`,`invalid`);if(r.exp<=p-d)throw new Mt(`"exp" claim timestamp check failed`,r,`exp`,`check_failed`)}if(l){let e=p-r.iat,t=typeof l==`number`?l:Mn(l);if(e-d>t)throw new Mt(`"iat" claim timestamp check failed (too far in the past)`,r,`iat`,`check_failed`);if(e<0-d)throw new jt(`"iat" claim timestamp check failed (it should be in the past)`,r,`iat`,`check_failed`)}return r}var Ln=class{#e;constructor(e){if(!qt(e))throw TypeError(`JWT Claims Set MUST be an object`);this.#e=structuredClone(e)}data(){return ft.encode(JSON.stringify(this.#e))}get iss(){return this.#e.iss}set iss(e){this.#e.iss=e}get sub(){return this.#e.sub}set sub(e){this.#e.sub=e}get aud(){return this.#e.aud}set aud(e){this.#e.aud=e}set jti(e){this.#e.jti=e}set nbf(e){typeof e==`number`?this.#e.nbf=Nn(`setNotBefore`,e):e instanceof Date?this.#e.nbf=Nn(`setNotBefore`,Tn(e)):this.#e.nbf=Tn(new Date)+Mn(e)}set exp(e){typeof e==`number`?this.#e.exp=Nn(`setExpirationTime`,e):e instanceof Date?this.#e.exp=Nn(`setExpirationTime`,Tn(e)):this.#e.exp=Tn(new Date)+Mn(e)}set iat(e){e===void 0?this.#e.iat=Tn(new Date):e instanceof Date?this.#e.iat=Nn(`setIssuedAt`,Tn(e)):typeof e==`string`?this.#e.iat=Nn(`setIssuedAt`,Tn(new Date)+Mn(e)):this.#e.iat=Nn(`setIssuedAt`,e)}};async function Rn(e,t,n){let r=await wn(e,t,n);if(r.protectedHeader.crit?.includes(`b64`)&&r.protectedHeader.b64===!1)throw new Ft(`JWTs MUST NOT use unencoded payload`);let i={payload:In(r.protectedHeader,r.payload,n),protectedHeader:r.protectedHeader};return typeof t==`function`?{...i,key:r.key}:i}var zn=class{#e;#t;#n;constructor(e){if(!(e instanceof Uint8Array))throw TypeError(`payload must be an instance of Uint8Array`);this.#e=e}setProtectedHeader(e){return Wt(this.#t,`setProtectedHeader`),this.#t=e,this}setUnprotectedHeader(e){return Wt(this.#n,`setUnprotectedHeader`),this.#n=e,this}async sign(e,t){if(!this.#t&&!this.#n)throw new G(`either setProtectedHeader or setUnprotectedHeader must be called before #sign()`);if(!Jt(this.#t,this.#n))throw new G(`JWS Protected and JWS Unprotected Header Parameter names must be disjoint`);let n={...this.#t,...this.#n},r=gn(G,new Map([[`b64`,!0]]),t?.crit,this.#t,n),i=!0;if(r.has(`b64`)&&(i=this.#t.b64,typeof i!=`boolean`))throw new G(`The "b64" (base64url-encode payload) Header Parameter must be a boolean`);let{alg:a}=n;if(typeof a!=`string`||!a)throw new G(`JWS "alg" (Algorithm) Header Parameter missing or invalid`);Sn(a,e,`sign`);let o,s;i?(o=yt(this.#e),s=ht(o)):(s=this.#e,o=``);let c,l;this.#t?(c=yt(JSON.stringify(this.#t)),l=ht(c)):(c=``,l=new Uint8Array);let u=mt(l,ht(`.`),s),d={signature:yt(await nn(a,await fn(e,a),u)),payload:o};return this.#n&&(d.header=this.#n),this.#t&&(d.protected=c),d}},Bn=class{#e;constructor(e){this.#e=new zn(e)}setProtectedHeader(e){return this.#e.setProtectedHeader(e),this}async sign(e,t){let n=await this.#e.sign(e,t);if(n.payload===void 0)throw TypeError(`use the flattened module for creating JWS with b64: false`);return`${n.protected}.${n.payload}.${n.signature}`}},Vn=class{#e;#t;constructor(e={}){this.#t=new Ln(e)}setIssuer(e){return this.#t.iss=e,this}setSubject(e){return this.#t.sub=e,this}setAudience(e){return this.#t.aud=e,this}setJti(e){return this.#t.jti=e,this}setNotBefore(e){return this.#t.nbf=e,this}setExpirationTime(e){return this.#t.exp=e,this}setIssuedAt(e){return this.#t.iat=e,this}setProtectedHeader(e){return this.#e=e,this}async sign(e,t){let n=new Bn(this.#t.data());if(n.setProtectedHeader(this.#e),Array.isArray(this.#e?.crit)&&this.#e.crit.includes(`b64`)&&this.#e.b64===!1)throw new Ft(`JWTs MUST NOT use unencoded payload`);return n.sign(e,t)}};function Hn(e){switch(typeof e==`string`&&e.slice(0,2)){case`RS`:case`PS`:return`RSA`;case`ES`:return`EC`;case`Ed`:return`OKP`;case`ML`:return`AKP`;default:throw new Pt(`Unsupported "alg" value for a JSON Web Key Set`)}}function Un(e){return e&&typeof e==`object`&&Array.isArray(e.keys)&&e.keys.every(Wn)}function Wn(e){return qt(e)}var Gn=class{#e;#t=new WeakMap;constructor(e){if(!Un(e))throw new It(`JSON Web Key Set malformed`);this.#e=structuredClone(e)}jwks(){return this.#e}async getKey(e,t){let{alg:n,kid:r}={...e,...t?.header},i=Hn(n),a=this.#e.keys.filter(e=>{let t=i===e.kty;if(t&&typeof r==`string`&&(t=r===e.kid),t&&(typeof e.alg==`string`||i===`AKP`)&&(t=n===e.alg),t&&typeof e.use==`string`&&(t=e.use===`sig`),t&&Array.isArray(e.key_ops)&&(t=e.key_ops.includes(`verify`)),t)switch(n){case`ES256`:t=e.crv===`P-256`;break;case`ES384`:t=e.crv===`P-384`;break;case`ES512`:t=e.crv===`P-521`;break;case`Ed25519`:case`EdDSA`:t=e.crv===`Ed25519`;break}return t}),{0:o,length:s}=a;if(s===0)throw new Lt;if(s!==1){let e=new Rt,t=this.#t;throw e[Symbol.asyncIterator]=async function*(){for(let e of a)try{yield await Kn(t,e,n)}catch{}},e}return Kn(this.#t,o,n)}};async function Kn(e,t,n){let r=e.get(t)||e.set(t,{}).get(t);if(r[n]===void 0){let e=await pn({...t,ext:!0},n);if(e instanceof Uint8Array||e.type!==`public`)throw new It(`JSON Web Key Set members must be public keys`);r[n]=e}return r[n]}function qn(e){let t=new Gn(e),n=async(e,n)=>t.getKey(e,n);return Object.defineProperties(n,{jwks:{value:()=>structuredClone(t.jwks()),enumerable:!1,configurable:!1,writable:!1}}),n}function Jn(){return typeof WebSocketPair<`u`||typeof navigator<`u`&&navigator.userAgent===`Cloudflare-Workers`||typeof EdgeRuntime<`u`&&EdgeRuntime===`vercel`}var Yn;(typeof navigator>`u`||!navigator.userAgent?.startsWith?.(`Mozilla/5.0 `))&&(Yn=`jose/v6.2.3`);var Xn=Symbol();async function Zn(e,t,n,r=fetch){let i=await r(e,{method:`GET`,signal:n,redirect:`manual`,headers:t}).catch(e=>{throw e.name===`TimeoutError`?new zt:e});if(i.status!==200)throw new At(`Expected 200 OK from the JSON Web Key Set HTTP response`);try{return await i.json()}catch{throw new At(`Failed to parse the JSON Web Key Set HTTP response as JSON`)}}var Qn=Symbol();function $n(e,t){return!(typeof e!=`object`||!e||!(`uat`in e)||typeof e.uat!=`number`||Date.now()-e.uat>=t||!(`jwks`in e)||!qt(e.jwks)||!Array.isArray(e.jwks.keys)||!Array.prototype.every.call(e.jwks.keys,qt))}var er=class{#e;#t;#n;#r;#i;#a;#o;#s;#c;#l;constructor(e,t){if(!(e instanceof URL))throw TypeError(`url must be an instance of URL`);this.#e=new URL(e.href),this.#t=typeof t?.timeoutDuration==`number`?t?.timeoutDuration:5e3,this.#n=typeof t?.cooldownDuration==`number`?t?.cooldownDuration:3e4,this.#r=typeof t?.cacheMaxAge==`number`?t?.cacheMaxAge:6e5,this.#o=new Headers(t?.headers),Yn&&!this.#o.has(`User-Agent`)&&this.#o.set(`User-Agent`,Yn),this.#o.has(`accept`)||(this.#o.set(`accept`,`application/json`),this.#o.append(`accept`,`application/jwk-set+json`)),this.#s=t?.[Xn],t?.[Qn]!==void 0&&(this.#l=t?.[Qn],$n(t?.[Qn],this.#r)&&(this.#i=this.#l.uat,this.#c=qn(this.#l.jwks)))}pendingFetch(){return!!this.#a}coolingDown(){return typeof this.#i==`number`?Date.now()<this.#i+this.#n:!1}fresh(){return typeof this.#i==`number`?Date.now()<this.#i+this.#r:!1}jwks(){return this.#c?.jwks()}async getKey(e,t){(!this.#c||!this.fresh())&&await this.reload();try{return await this.#c(e,t)}catch(n){if(n instanceof Lt&&this.coolingDown()===!1)return await this.reload(),this.#c(e,t);throw n}}async reload(){this.#a&&Jn()&&(this.#a=void 0),this.#a||=Zn(this.#e.href,this.#o,AbortSignal.timeout(this.#t),this.#s).then(e=>{this.#c=qn(e),this.#l&&(this.#l.uat=Date.now(),this.#l.jwks=e),this.#i=Date.now(),this.#a=void 0}).catch(e=>{throw this.#a=void 0,e}),await this.#a}};function tr(e,t){let n=new er(e,t),r=async(e,t)=>n.getKey(e,t);return Object.defineProperties(r,{coolingDown:{get:()=>n.coolingDown(),enumerable:!0,configurable:!1},fresh:{get:()=>n.fresh(),enumerable:!0,configurable:!1},reload:{value:()=>n.reload(),enumerable:!0,configurable:!1,writable:!1},reloading:{get:()=>n.pendingFetch(),enumerable:!0,configurable:!1},jwks:{value:()=>n.jwks(),enumerable:!0,configurable:!1,writable:!1}}),r}function nr(e){let t=e?.modulusLength??2048;if(typeof t!=`number`||t<2048)throw new Pt(`Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used`);return t}async function rr(e,t){let n,r;switch(e){case`PS256`:case`PS384`:case`PS512`:n={name:`RSA-PSS`,hash:`SHA-${e.slice(-3)}`,publicExponent:Uint8Array.of(1,0,1),modulusLength:nr(t)},r=[`sign`,`verify`];break;case`RS256`:case`RS384`:case`RS512`:n={name:`RSASSA-PKCS1-v1_5`,hash:`SHA-${e.slice(-3)}`,publicExponent:Uint8Array.of(1,0,1),modulusLength:nr(t)},r=[`sign`,`verify`];break;case`RSA-OAEP`:case`RSA-OAEP-256`:case`RSA-OAEP-384`:case`RSA-OAEP-512`:n={name:`RSA-OAEP`,hash:`SHA-${parseInt(e.slice(-3),10)||1}`,publicExponent:Uint8Array.of(1,0,1),modulusLength:nr(t)},r=[`decrypt`,`unwrapKey`,`encrypt`,`wrapKey`];break;case`ES256`:n={name:`ECDSA`,namedCurve:`P-256`},r=[`sign`,`verify`];break;case`ES384`:n={name:`ECDSA`,namedCurve:`P-384`},r=[`sign`,`verify`];break;case`ES512`:n={name:`ECDSA`,namedCurve:`P-521`},r=[`sign`,`verify`];break;case`Ed25519`:case`EdDSA`:r=[`sign`,`verify`],n={name:`Ed25519`};break;case`ML-DSA-44`:case`ML-DSA-65`:case`ML-DSA-87`:r=[`sign`,`verify`],n={name:e};break;case`ECDH-ES`:case`ECDH-ES+A128KW`:case`ECDH-ES+A192KW`:case`ECDH-ES+A256KW`:{r=[`deriveBits`];let e=t?.crv??`P-256`;switch(e){case`P-256`:case`P-384`:case`P-521`:n={name:`ECDH`,namedCurve:e};break;case`X25519`:n={name:`X25519`};break;default:throw new Pt(`Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, and X25519`)}break}default:throw new Pt(`Invalid or unsupported JWK "alg" (Algorithm) Parameter value`)}return crypto.subtle.generateKey(n,t?.extractable??!1,r)}var ir=[];for(let e=0;e<256;++e)ir.push((e+256).toString(16).slice(1));function ar(e,t=0){return(ir[e[t+0]]+ir[e[t+1]]+ir[e[t+2]]+ir[e[t+3]]+`-`+ir[e[t+4]]+ir[e[t+5]]+`-`+ir[e[t+6]]+ir[e[t+7]]+`-`+ir[e[t+8]]+ir[e[t+9]]+`-`+ir[e[t+10]]+ir[e[t+11]]+ir[e[t+12]]+ir[e[t+13]]+ir[e[t+14]]+ir[e[t+15]]).toLowerCase()}var or=new Uint8Array(16);function sr(){return crypto.getRandomValues(or)}function cr(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():lr(e,t,n)}function lr(e,t,n){e||={};let r=e.random??e.rng?.()??sr();if(r.length<16)throw Error(`Random bytes length must be >= 16`);if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n||=0,n<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=r[e];return t}return ar(r)}var ur=`solidClientAuthn:`,dr=[`ES256`,`RS256`],K={ERROR:`error`,LOGIN:`login`,LOGOUT:`logout`,NEW_REFRESH_TOKEN:`newRefreshToken`,NEW_TOKENS:`newTokens`,AUTHORIZATION_REQUEST:`authorizationRequest`,SESSION_EXPIRED:`sessionExpired`,SESSION_EXTENDED:`sessionExtended`,SESSION_RESTORED:`sessionRestore`,TIMEOUT_SET:`timeoutSet`},fr=[`openid`,`offline_access`,`webid`],pr=class{handleables;constructor(e){this.handleables=e,this.handleables=e}async getProperHandler(e){let t=await Promise.all(this.handleables.map(t=>t.canHandle(...e)));for(let e=0;e<t.length;e+=1)if(t[e])return this.handleables[e];return null}async canHandle(...e){return await this.getProperHandler(e)!==null}async handle(...e){let t=await this.getProperHandler(e);if(t)return t.handle(...e);throw Error(`[${this.constructor.name}] cannot find a suitable handler for: ${e.map(e=>{try{return JSON.stringify(e)}catch{return e.toString()}}).join(`, `)}`)}};async function mr(e,t,n,r){let i,a;try{let{payload:a}=await Rn(e,tr(new URL(t)),{issuer:n,audience:r});i=a}catch(e){throw Error(`Token verification failed: ${e.stack}`)}if(typeof i.azp==`string`&&(a=i.azp),typeof i.webid==`string`)return{webId:i.webid,clientId:a};if(typeof i.sub!=`string`)throw Error(`The token ${JSON.stringify(i)} is invalid: it has no 'webid' claim and no 'sub' claim.`);try{return new URL(i.sub),{webId:i.sub,clientId:a}}catch(e){throw Error(`The token has no 'webid' claim, and its 'sub' claim of [${i.sub}] is invalid as a URL - error [${e}].`)}}function hr(e){return Array.isArray(e)?Array.from(new Set([...fr,...e.filter(e=>typeof e==`string`&&!e.includes(` `))])):fr}function gr(e){try{let t=new URL(e),n=!t.searchParams.has(`code`)&&!t.searchParams.has(`state`),r=t.hash===``;return n&&r}catch{return!1}}function _r(e){let t=new URL(e);return t.searchParams.delete(`state`),t.searchParams.delete(`code`),t.searchParams.delete(`error`),t.searchParams.delete(`error_description`),t.searchParams.delete(`iss`),t}function vr(e,t){return typeof e==`boolean`?!!e:!!t}var yr=class{storageUtility;redirector;constructor(e,t){this.storageUtility=e,this.redirector=t,this.storageUtility=e,this.redirector=t}parametersGuard=e=>e.issuerConfiguration.grantTypesSupported!==void 0&&e.issuerConfiguration.grantTypesSupported.indexOf(`authorization_code`)>-1&&e.redirectUrl!==void 0;async canHandle(e){return this.parametersGuard(e)}async setupRedirectHandler({oidcLoginOptions:e,state:t,codeVerifier:n,targetUrl:r}){if(!this.parametersGuard(e))throw Error(`The authorization code grant requires a redirectUrl.`);await Promise.all([this.storageUtility.setForUser(t,{sessionId:e.sessionId}),this.storageUtility.setForUser(e.sessionId,{codeVerifier:n,issuer:e.issuer.toString(),redirectUrl:e.redirectUrl,dpop:(!!e.dpop).toString(),keepAlive:vr(e.keepAlive,!0).toString()})]),this.redirector.redirect(r,{handleRedirect:e.handleRedirect})}},br=class{sessionInfoManager;constructor(e){this.sessionInfoManager=e,this.sessionInfoManager=e}async canHandle(){return!0}async handle(e){await this.sessionInfoManager.clear(e)}},xr=class{redirector;constructor(e){this.redirector=e,this.redirector=e}async canHandle(e,t){return t?.logoutType===`idp`}async handle(e,t){if(t?.logoutType!==`idp`)throw Error(`Attempting to call idp logout handler to perform app logout`);if(t.toLogoutUrl===void 0)throw Error(`Cannot perform IDP logout. Did you log in using the OIDC authentication flow?`);this.redirector.redirect(t.toLogoutUrl(t),{handleRedirect:t.handleRedirect})}},Sr=class{handlers;constructor(e,t){this.handlers=[new br(e),new xr(t)]}async canHandle(){return!0}async handle(e,t){for(let n of this.handlers)await n.canHandle(e,t)&&await n.handle(e,t)}};function Cr(){return{isLoggedIn:!1,sessionId:cr(),fetch:(...e)=>fetch(...e)}}async function wr(e,t){await Promise.all([t.deleteAllUserData(e,{secure:!1}),t.deleteAllUserData(e,{secure:!0})])}var Tr=class{storageUtility;constructor(e){this.storageUtility=e,this.storageUtility=e}update(e,t){throw Error(`Not Implemented`)}set(e,t){throw Error(`Not Implemented`)}get(e){throw Error(`Not implemented`)}async getAll(){throw Error(`Not implemented`)}async clear(e){return wr(e,this.storageUtility)}async register(e){throw Error(`Not implemented`)}async getRegisteredSessionIdAll(){throw Error(`Not implemented`)}async clearAll(){throw Error(`Not implemented`)}async setOidcContext(e,t){throw Error(`Not implemented`)}};function Er({endSessionEndpoint:e,idTokenHint:t,postLogoutRedirectUri:n,state:r}){let i=new URL(e);return t!==void 0&&i.searchParams.append(`id_token_hint`,t),n!==void 0&&(i.searchParams.append(`post_logout_redirect_uri`,n),r!==void 0&&i.searchParams.append(`state`,r)),i.toString()}function Dr({endSessionEndpoint:e,idTokenHint:t}){if(e!==void 0)return function({state:n,postLogoutUrl:r}){return Er({endSessionEndpoint:e,idTokenHint:t,state:n,postLogoutRedirectUri:r})}}function Or(e){return typeof e==`string`&&[`DPoP`,`Bearer`].includes(e)}function kr(e){try{return new URL(e),!0}catch{return!1}}function Ar(e,t){return t.find(t=>e.includes(t))??null}function jr(e){return e.clientId!==void 0&&!kr(e.clientId)}function Mr(e,t){return t.scopesSupported.includes(`webid`)&&e.clientId!==void 0&&kr(e.clientId)}function Nr(e){return typeof e==`string`&&[`dynamic`,`static`,`solid-oidc`].includes(e)}async function Pr(e,t,n,r){let i;if(Mr(e,t))i={clientId:e.clientId,clientName:e.clientName,clientType:`solid-oidc`};else if(jr(e))i={clientId:e.clientId,clientSecret:e.clientSecret,clientName:e.clientName,clientType:`static`};else return r.getClient({sessionId:e.sessionId,clientName:e.clientName,redirectUrl:e.redirectUrl},t);let a={clientId:i.clientId,clientType:i.clientType};return i.clientType===`static`&&(a.clientSecret=i.clientSecret),i.clientName&&(a.clientName=i.clientName),await n.setForUser(e.sessionId,a),i}var Fr=(e,t)=>fetch(e,t),Ir=class{loginHandler;redirectHandler;logoutHandler;sessionInfoManager;issuerConfigFetcher;boundLogout;constructor(e,t,n,r,i){this.loginHandler=e,this.redirectHandler=t,this.logoutHandler=n,this.sessionInfoManager=r,this.issuerConfigFetcher=i,this.loginHandler=e,this.redirectHandler=t,this.logoutHandler=n,this.sessionInfoManager=r,this.issuerConfigFetcher=i}fetch=Fr;logout=async(e,t)=>{await this.logoutHandler.handle(e,t?.logoutType===`idp`?{...t,toLogoutUrl:this.boundLogout}:t),this.fetch=Fr,delete this.boundLogout};getSessionInfo=async e=>this.sessionInfoManager.get(e);getAllSessionInfo=async()=>this.sessionInfoManager.getAll()};async function Lr(e,t,n){try{let[r,i,a,o,s]=await Promise.all([t.getForUser(e,`issuer`,{errorIfNull:!0}),t.getForUser(e,`codeVerifier`),t.getForUser(e,`redirectUrl`),t.getForUser(e,`dpop`,{errorIfNull:!0}),t.getForUser(e,`keepAlive`)]);return await t.deleteForUser(e,`codeVerifier`),{codeVerifier:i,redirectUrl:a,issuerConfig:await n.fetchConfig(r),dpop:o===`true`,keepAlive:typeof s==`string`?s===`true`:!0}}catch(t){throw Error(`Failed to retrieve OIDC context from storage associated with session [${e}]: ${t}`)}}async function Rr(e,t,n,r,i,a,o,s){a!==void 0&&await e.setForUser(t,{refreshToken:a},{secure:o}),n!==void 0&&await e.setForUser(t,{webId:n},{secure:o}),r!==void 0&&await e.setForUser(t,{clientId:r},{secure:o}),i!==void 0&&await e.setForUser(t,{isLoggedIn:i},{secure:o}),s!==void 0&&await e.setForUser(t,{publicKey:JSON.stringify(s.publicKey),privateKey:JSON.stringify(await hn(s.privateKey))},{secure:o})}var zr=class{secureStorage;insecureStorage;constructor(e,t){this.secureStorage=e,this.insecureStorage=t,this.secureStorage=e,this.insecureStorage=t}getKey(e){return`solidClientAuthenticationUser:${e}`}async getUserData(e,t){let n=await(t?this.secureStorage:this.insecureStorage).get(this.getKey(e));if(n===void 0)return{};try{return JSON.parse(n)}catch{throw Error(`Data for user [${e}] in [${t?`secure`:`unsecure`}] storage is corrupted - expected valid JSON, but got: ${n}`)}}async setUserData(e,t,n){await(n?this.secureStorage:this.insecureStorage).set(this.getKey(e),JSON.stringify(t))}async get(e,t){let n=await(t?.secure?this.secureStorage:this.insecureStorage).get(e);if(n===void 0&&t?.errorIfNull)throw Error(`[${e}] is not stored`);return n}async set(e,t,n){return(n?.secure?this.secureStorage:this.insecureStorage).set(e,t)}async delete(e,t){return(t?.secure?this.secureStorage:this.insecureStorage).delete(e)}async getForUser(e,t,n){let r=await this.getUserData(e,n?.secure),i;if((!r||!r[t])&&(i=void 0),i=r[t],i===void 0&&n?.errorIfNull)throw Error(`Field [${t}] for user [${e}] is not stored`);return i||void 0}async setForUser(e,t,n){let r;try{r=await this.getUserData(e,n?.secure)}catch{r={}}await this.setUserData(e,{...r,...t},n?.secure)}async deleteForUser(e,t,n){let r=await this.getUserData(e,n?.secure);delete r[t],await this.setUserData(e,r,n?.secure)}async deleteAllUserData(e,t){await(t?.secure?this.secureStorage:this.insecureStorage).delete(this.getKey(e))}},Br=class{map={};async get(e){return this.map[e]||void 0}async set(e,t){this.map[e]=t}async delete(e){delete this.map[e]}},Vr=class extends Error{constructor(e){super(e)}},Hr=class extends Error{missingFields;constructor(e){super(`Invalid response from OIDC provider: missing fields ${e}`),this.missingFields=e}},Ur=class extends Error{error;errorDescription;constructor(e,t,n){super(e),this.error=t,this.errorDescription=n}};function Wr(e){let t=new URL(e);return new URL(t.pathname,t.origin).toString()}async function Gr(e,t,n){return new Vn({htu:Wr(e),htm:t.toUpperCase(),jti:cr()}).setProtectedHeader({alg:dr[0],jwk:n.publicKey,typ:`dpop+jwt`}).setIssuedAt().sign(n.privateKey,{})}async function Kr(){let{privateKey:e,publicKey:t}=await rr(dr[0],{extractable:!0}),n={privateKey:e,publicKey:await hn(t)};return[n.publicKey.alg]=dr,n}var qr=600;function Jr(e){return[401,403].includes(e)}async function Yr(e,t,n,r){let i=new Headers(r?.headers);return i.set(`Authorization`,`DPoP ${t}`),i.set(`DPoP`,await Gr(e,r?.method??`get`,n)),{...r,headers:i}}async function Xr(e,t,n,r){if(n!==void 0)return Yr(e,t,n,r);let i=new Headers(r?.headers);return i.set(`Authorization`,`Bearer ${t}`),{...r,headers:i}}async function Zr(e,t,n,r,i=fetch){return i(t,await Xr(t.toString(),e,r,n))}async function Qr(e,t,n){let r=await e.tokenRefresher.refresh(e.sessionId,e.refreshToken,t);return n?.emit(K.SESSION_EXTENDED,r.expiresIn??qr),{accessToken:r.accessToken,refreshToken:r.refreshToken,expiresIn:r.expiresIn}}var $r=e=>e===void 0?qr:e-5>0?e-5:e;function ei(e,t){let n=e,r,i=t?.refreshOptions,a=t?.eventEmitter;if(t!==void 0&&i!==void 0){let e=async()=>{try{let{accessToken:o,refreshToken:s,expiresIn:c}=await Qr(i,t.dpopKey,a);n=o,s!==void 0&&(i.refreshToken=s),clearTimeout(r),r=setTimeout(e,$r(c)*1e3),t.eventEmitter?.emit(K.TIMEOUT_SET,r)}catch(e){e instanceof Ur&&(a?.emit(K.ERROR,e.error,e.errorDescription),a?.emit(K.SESSION_EXPIRED)),e instanceof Hr&&e.missingFields.includes(`access_token`)&&a?.emit(K.SESSION_EXPIRED)}};r=setTimeout(e,$r(t.expiresIn)*1e3),a?.emit(K.TIMEOUT_SET,r)}else if(a!==void 0){let e=setTimeout(()=>{a.emit(K.SESSION_EXPIRED)},$r(t?.expiresIn)*1e3);a.emit(K.TIMEOUT_SET,e)}return async(e,r)=>{let i=await Zr(n,e,r,t?.dpopKey,t?.fetch),a=!i.ok&&!Jr(i.status);return i.ok||a||i.url!==e&&t?.dpopKey!==void 0&&(i=await Zr(n,i.url,r,t.dpopKey,t.fetch)),i}}var ti=o(((e,t)=>{var n=typeof Reflect==`object`?Reflect:null,r=n&&typeof n.apply==`function`?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},i=n&&typeof n.ownKeys==`function`?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};function a(e){console&&console.warn&&console.warn(e)}var o=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}t.exports=s,t.exports.once=y,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function l(e){if(typeof e!=`function`)throw TypeError(`The "listener" argument must be of type Function. Received type `+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received `+e+`.`);c=e}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received `+e+`.`);return this._maxListeners=e,this};function u(e){return e._maxListeners===void 0?s.defaultMaxListeners:e._maxListeners}s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===`error`,a=this._events;if(a!==void 0)i&&=a.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=Error(`Unhandled error.`+(o?` (`+o.message+`)`:``));throw s.context=o,s}var c=a[e];if(c===void 0)return!1;if(typeof c==`function`)r(c,this,t);else for(var l=c.length,u=g(c,l),n=0;n<l;++n)r(u[n],this,t);return!0};function d(e,t,n,r){var i,o,s;if(l(n),o=e._events,o===void 0?(o=e._events=Object.create(null),e._eventsCount=0):(o.newListener!==void 0&&(e.emit(`newListener`,t,n.listener?n.listener:n),o=e._events),s=o[t]),s===void 0)s=o[t]=n,++e._eventsCount;else if(typeof s==`function`?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=u(e),i>0&&s.length>i&&!s.warned){s.warned=!0;var c=Error(`Possible EventEmitter memory leak detected. `+s.length+` `+String(t)+` listeners added. Use emitter.setMaxListeners() to increase limit`);c.name=`MaxListenersExceededWarning`,c.emitter=e,c.type=t,c.count=s.length,a(c)}return e}s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)};function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}s.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,a,o;if(l(t),r=this._events,r===void 0||(n=r[e],n===void 0))return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit(`removeListener`,e,n.listener||t));else if(typeof n!=`function`){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():_(n,i),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit(`removeListener`,e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n=this._events,r;if(n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(r=0;r<i.length;++r)a=i[r],a!==`removeListener`&&this.removeAllListeners(a);return this.removeAllListeners(`removeListener`),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t==`function`)this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function m(e,t,n){var r=e._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i==`function`?n?[i.listener||i]:[i]:n?v(i):g(i,i.length)}s.prototype.listeners=function(e){return m(this,e,!0)},s.prototype.rawListeners=function(e){return m(this,e,!1)},s.listenerCount=function(e,t){return typeof e.listenerCount==`function`?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h;function h(e){var t=this._events;if(t!==void 0){var n=t[e];if(typeof n==`function`)return 1;if(n!==void 0)return n.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};function g(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function _(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function v(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function y(e,t){return new Promise(function(n,r){function i(n){e.removeListener(t,a),r(n)}function a(){typeof e.removeListener==`function`&&e.removeListener(`error`,i),n([].slice.call(arguments))}x(e,t,a,{once:!0}),t!==`error`&&b(e,i,{once:!0})})}function b(e,t,n){typeof e.on==`function`&&x(e,`error`,t,n)}function x(e,t,n,r){if(typeof e.on==`function`)r.once?e.once(t,n):e.on(t,n);else if(typeof e.addEventListener==`function`)e.addEventListener(t,function i(a){r.once&&e.removeEventListener(t,i),n(a)});else throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type `+typeof e)}})),ni=c(ti(),1),ri=class extends Error{};ri.prototype.name=`InvalidTokenError`;function ii(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n=`0`+n),`%`+n}))}function ai(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`);switch(t.length%4){case 0:break;case 2:t+=`==`;break;case 3:t+=`=`;break;default:throw Error(`base64 string is not of the correct length`)}try{return ii(t)}catch{return atob(t)}}function oi(e,t){if(typeof e!=`string`)throw new ri(`Invalid token specified: must be a string`);t||={};let n=t.header===!0?0:1,r=e.split(`.`)[n];if(typeof r!=`string`)throw new ri(`Invalid token specified: missing part #${n+1}`);let i;try{i=ai(r)}catch(e){throw new ri(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new ri(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}var si={debug:()=>void 0,info:()=>void 0,warn:()=>void 0,error:()=>void 0},ci,li,ui=(e=>(e[e.NONE=0]=`NONE`,e[e.ERROR=1]=`ERROR`,e[e.WARN=2]=`WARN`,e[e.INFO=3]=`INFO`,e[e.DEBUG=4]=`DEBUG`,e))(ui||{});(e=>{function t(){ci=3,li=si}e.reset=t;function n(e){if(!(0<=e&&e<=4))throw Error(`Invalid log level`);ci=e}e.setLevel=n;function r(e){li=e}e.setLogger=r})(ui||={});var di=class e{constructor(e){this._name=e}debug(...t){ci>=4&&li.debug(e._format(this._name,this._method),...t)}info(...t){ci>=3&&li.info(e._format(this._name,this._method),...t)}warn(...t){ci>=2&&li.warn(e._format(this._name,this._method),...t)}error(...t){ci>=1&&li.error(e._format(this._name,this._method),...t)}throw(e){throw this.error(e),e}create(e){let t=Object.create(this);return t._method=e,t.debug(`begin`),t}static createStatic(t,n){let r=new e(`${t}.${n}`);return r.debug(`begin`),r}static _format(e,t){let n=`[${e}]`;return t?`${n} ${t}:`:n}static debug(t,...n){ci>=4&&li.debug(e._format(t),...n)}static info(t,...n){ci>=3&&li.info(e._format(t),...n)}static warn(t,...n){ci>=2&&li.warn(e._format(t),...n)}static error(t,...n){ci>=1&&li.error(e._format(t),...n)}};ui.reset();var fi=class{static decode(e){try{return oi(e)}catch(e){throw di.error(`JwtUtils.decode`,e),e}}static async generateSignedJwt(e,t,n){let r=`${gi.encodeBase64Url(new TextEncoder().encode(JSON.stringify(e)))}.${gi.encodeBase64Url(new TextEncoder().encode(JSON.stringify(t)))}`,i=await window.crypto.subtle.sign({name:`ECDSA`,hash:{name:`SHA-256`}},n,new TextEncoder().encode(r));return`${r}.${gi.encodeBase64Url(new Uint8Array(i))}`}static async generateSignedJwtWithHmac(e,t,n){let r=`${gi.encodeBase64Url(new TextEncoder().encode(JSON.stringify(e)))}.${gi.encodeBase64Url(new TextEncoder().encode(JSON.stringify(t)))}`,i=await window.crypto.subtle.sign(`HMAC`,n,new TextEncoder().encode(r));return`${r}.${gi.encodeBase64Url(new Uint8Array(i))}`}},pi=`10000000-1000-4000-8000-100000000000`,mi=e=>btoa([...new Uint8Array(e)].map(e=>String.fromCharCode(e)).join(``)),hi=class e{static _randomWord(){let e=new Uint32Array(1);return crypto.getRandomValues(e),e[0]}static generateUUIDv4(){return pi.replace(/[018]/g,t=>(t^e._randomWord()&15>>t/4).toString(16)).replace(/-/g,``)}static generateCodeVerifier(){return e.generateUUIDv4()+e.generateUUIDv4()+e.generateUUIDv4()}static async generateCodeChallenge(e){if(!crypto.subtle)throw Error(`Crypto.subtle is available only in secure contexts (HTTPS).`);try{let t=new TextEncoder().encode(e);return mi(await crypto.subtle.digest(`SHA-256`,t)).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}catch(e){throw di.error(`CryptoUtils.generateCodeChallenge`,e),e}}static generateBasicAuth(e,t){return mi(new TextEncoder().encode([e,t].join(`:`)))}static async hash(e,t){let n=new TextEncoder().encode(t),r=await crypto.subtle.digest(e,n);return new Uint8Array(r)}static async customCalculateJwkThumbprint(t){let n;switch(t.kty){case`RSA`:n={e:t.e,kty:t.kty,n:t.n};break;case`EC`:n={crv:t.crv,kty:t.kty,x:t.x,y:t.y};break;case`OKP`:n={crv:t.crv,kty:t.kty,x:t.x};break;case`oct`:n={crv:t.k,kty:t.kty};break;default:throw Error(`Unknown jwk type`)}let r=await e.hash(`SHA-256`,JSON.stringify(n));return e.encodeBase64Url(r)}static async generateDPoPProof({url:t,accessToken:n,httpMethod:r,keyPair:i,nonce:a}){let o,s,c={jti:window.crypto.randomUUID(),htm:r??`GET`,htu:t,iat:Math.floor(Date.now()/1e3)};n&&(o=await e.hash(`SHA-256`,n),s=e.encodeBase64Url(o),c.ath=s),a&&(c.nonce=a);try{let e=await crypto.subtle.exportKey(`jwk`,i.publicKey),t={alg:`ES256`,typ:`dpop+jwt`,jwk:{crv:e.crv,kty:e.kty,x:e.x,y:e.y}};return await fi.generateSignedJwt(t,c,i.privateKey)}catch(e){throw e instanceof TypeError?Error(`Error exporting dpop public key: ${e.message}`):e}}static async generateDPoPJkt(t){try{let n=await crypto.subtle.exportKey(`jwk`,t.publicKey);return await e.customCalculateJwkThumbprint(n)}catch(e){throw e instanceof TypeError?Error(`Could not retrieve dpop keys from storage: ${e.message}`):e}}static async generateDPoPKeys(){return await window.crypto.subtle.generateKey({name:`ECDSA`,namedCurve:`P-256`},!1,[`sign`,`verify`])}static async generateClientAssertionJwt(t,n,r,i=`HS256`){let a=Math.floor(Date.now()/1e3),o={alg:i,typ:`JWT`},s={iss:t,sub:t,aud:r,jti:e.generateUUIDv4(),exp:a+300,iat:a},c={HS256:`SHA-256`,HS384:`SHA-384`,HS512:`SHA-512`}[i];if(!c)throw Error(`Unsupported algorithm: ${i}. Supported algorithms are: HS256, HS384, HS512`);let l=new TextEncoder,u=await crypto.subtle.importKey(`raw`,l.encode(n),{name:`HMAC`,hash:c},!1,[`sign`]);return await fi.generateSignedJwtWithHmac(o,s,u)}};hi.encodeBase64Url=e=>mi(e).replace(/=/g,``).replace(/\+/g,`-`).replace(/\//g,`_`);var gi=hi,_i=class{constructor(e){this._name=e,this._callbacks=[],this._logger=new di(`Event('${this._name}')`)}addHandler(e){return this._callbacks.push(e),()=>this.removeHandler(e)}removeHandler(e){let t=this._callbacks.lastIndexOf(e);t>=0&&this._callbacks.splice(t,1)}async raise(...e){this._logger.debug(`raise:`,...e);for(let t of this._callbacks)await t(...e)}},vi=class e extends _i{constructor(){super(...arguments),this._logger=new di(`Timer('${this._name}')`),this._timerHandle=null,this._expiration=0,this._callback=()=>{let t=this._expiration-e.getEpochTime();this._logger.debug(`timer completes in`,t),this._expiration<=e.getEpochTime()&&(this.cancel(),super.raise())}}static getEpochTime(){return Math.floor(Date.now()/1e3)}init(t){let n=this._logger.create(`init`);t=Math.max(Math.floor(t),1);let r=e.getEpochTime()+t;if(this.expiration===r&&this._timerHandle){n.debug(`skipping since already initialized for expiration at`,this.expiration);return}this.cancel(),n.debug(`using duration`,t),this._expiration=r;let i=Math.min(t,5);this._timerHandle=setInterval(this._callback,i*1e3)}get expiration(){return this._expiration}cancel(){this._logger.create(`cancel`),this._timerHandle&&=(clearInterval(this._timerHandle),null)}},yi=class{static readParams(e,t=`query`){if(!e)throw TypeError(`Invalid URL`);let n=new URL(e,`http://127.0.0.1`)[t===`fragment`?`hash`:`search`];return new URLSearchParams(n.slice(1))}},bi=`;`,xi=class extends Error{constructor(e,t){if(super(e.error_description||e.error||``),this.form=t,this.name=`ErrorResponse`,!e.error)throw di.error(`ErrorResponse`,`No error passed`),Error(`No error passed`);this.error=e.error,this.error_description=e.error_description??null,this.error_uri=e.error_uri??null,this.state=e.userState,this.session_state=e.session_state??null,this.url_state=e.url_state}},Si=class extends Error{constructor(e){super(e),this.name=`ErrorTimeout`}},Ci=class{constructor(){this._logger=new di(`InMemoryWebStorage`),this._data={}}clear(){this._logger.create(`clear`),this._data={}}getItem(e){return this._logger.create(`getItem('${e}')`),this._data[e]}setItem(e,t){this._logger.create(`setItem('${e}')`),this._data[e]=t}removeItem(e){this._logger.create(`removeItem('${e}')`),delete this._data[e]}get length(){return Object.getOwnPropertyNames(this._data).length}key(e){return Object.getOwnPropertyNames(this._data)[e]}},wi=class extends Error{constructor(e,t){super(t),this.name=`ErrorDPoPNonce`,this.nonce=e}},Ti=class{constructor(e=[],t=null,n={}){this._jwtHandler=t,this._extraHeaders=n,this._logger=new di(`JsonService`),this._contentTypes=[],this._contentTypes.push(...e,`application/json`),t&&this._contentTypes.push(`application/jwt`)}async fetchWithTimeout(e,t={}){let{timeoutInSeconds:n,...r}=t;if(!n)return await fetch(e,r);let i=new AbortController,a=setTimeout(()=>i.abort(),n*1e3);try{return await fetch(e,{...t,signal:i.signal})}catch(e){throw e instanceof DOMException&&e.name===`AbortError`?new Si(`Network timed out`):e}finally{clearTimeout(a)}}async getJson(e,{token:t,credentials:n,timeoutInSeconds:r}={}){let i=this._logger.create(`getJson`),a={Accept:this._contentTypes.join(`, `)};t&&(i.debug(`token passed, setting Authorization header`),a.Authorization=`Bearer `+t),this._appendExtraHeaders(a);let o;try{i.debug(`url:`,e),o=await this.fetchWithTimeout(e,{method:`GET`,headers:a,timeoutInSeconds:r,credentials:n})}catch(e){throw i.error(`Network Error`),e}i.debug(`HTTP response received, status`,o.status);let s=o.headers.get(`Content-Type`);if(s&&!this._contentTypes.find(e=>s.startsWith(e))&&i.throw(Error(`Invalid response Content-Type: ${s??`undefined`}, from URL: ${e}`)),o.ok&&this._jwtHandler&&s?.startsWith(`application/jwt`))return await this._jwtHandler(await o.text());let c;try{c=await o.json()}catch(e){throw i.error(`Error parsing JSON response`,e),o.ok?e:Error(`${o.statusText} (${o.status})`)}if(!o.ok)throw i.error(`Error from server:`,c),c.error?new xi(c):Error(`${o.statusText} (${o.status}): ${JSON.stringify(c)}`);return c}async postForm(e,{body:t,basicAuth:n,timeoutInSeconds:r,initCredentials:i,extraHeaders:a}){let o=this._logger.create(`postForm`),s={Accept:this._contentTypes.join(`, `),"Content-Type":`application/x-www-form-urlencoded`,...a};n!==void 0&&(s.Authorization=`Basic `+n),this._appendExtraHeaders(s);let c;try{o.debug(`url:`,e),c=await this.fetchWithTimeout(e,{method:`POST`,headers:s,body:t,timeoutInSeconds:r,credentials:i})}catch(e){throw o.error(`Network error`),e}o.debug(`HTTP response received, status`,c.status);let l=c.headers.get(`Content-Type`);if(l&&!this._contentTypes.find(e=>l.startsWith(e)))throw Error(`Invalid response Content-Type: ${l??`undefined`}, from URL: ${e}`);let u=await c.text(),d={};if(u)try{d=JSON.parse(u)}catch(e){throw o.error(`Error parsing JSON response`,e),c.ok?e:Error(`${c.statusText} (${c.status})`)}if(!c.ok)throw o.error(`Error from server:`,d),c.headers.has(`dpop-nonce`)?new wi(c.headers.get(`dpop-nonce`),`${JSON.stringify(d)}`):d.error?new xi(d,t):Error(`${c.statusText} (${c.status}): ${JSON.stringify(d)}`);return d}_appendExtraHeaders(e){let t=this._logger.create(`appendExtraHeaders`),n=Object.keys(this._extraHeaders),r=[`accept`,`content-type`],i=[`authorization`];n.length!==0&&n.forEach(n=>{if(r.includes(n.toLocaleLowerCase())){t.warn(`Protected header could not be set`,n,r);return}if(i.includes(n.toLocaleLowerCase())&&Object.keys(e).includes(n)){t.warn(`Header could not be overridden`,n,i);return}let a=typeof this._extraHeaders[n]==`function`?this._extraHeaders[n]():this._extraHeaders[n];a&&a!==``&&(e[n]=a)})}},Ei=class{constructor(e){this._settings=e,this._logger=new di(`MetadataService`),this._signingKeys=null,this._metadata=null,this._metadataUrl=this._settings.metadataUrl,this._jsonService=new Ti([`application/jwk-set+json`],null,this._settings.extraHeaders),this._settings.signingKeys&&(this._logger.debug(`using signingKeys from settings`),this._signingKeys=this._settings.signingKeys),this._settings.metadata&&(this._logger.debug(`using metadata from settings`),this._metadata=this._settings.metadata),this._settings.fetchRequestCredentials&&(this._logger.debug(`using fetchRequestCredentials from settings`),this._fetchRequestCredentials=this._settings.fetchRequestCredentials)}resetSigningKeys(){this._signingKeys=null}async getMetadata(){let e=this._logger.create(`getMetadata`);if(this._metadata)return e.debug(`using cached values`),this._metadata;if(!this._metadataUrl)throw e.throw(Error(`No authority or metadataUrl configured on settings`)),null;e.debug(`getting metadata from`,this._metadataUrl);let t=await this._jsonService.getJson(this._metadataUrl,{credentials:this._fetchRequestCredentials,timeoutInSeconds:this._settings.requestTimeoutInSeconds});return e.debug(`merging remote JSON with seed metadata`),this._metadata=Object.assign({},t,this._settings.metadataSeed),this._metadata}getIssuer(){return this._getMetadataProperty(`issuer`)}getAuthorizationEndpoint(){return this._getMetadataProperty(`authorization_endpoint`)}getUserInfoEndpoint(){return this._getMetadataProperty(`userinfo_endpoint`)}getTokenEndpoint(e=!0){return this._getMetadataProperty(`token_endpoint`,e)}getCheckSessionIframe(){return this._getMetadataProperty(`check_session_iframe`,!0)}getEndSessionEndpoint(){return this._getMetadataProperty(`end_session_endpoint`,!0)}getRevocationEndpoint(e=!0){return this._getMetadataProperty(`revocation_endpoint`,e)}getKeysEndpoint(e=!0){return this._getMetadataProperty(`jwks_uri`,e)}async _getMetadataProperty(e,t=!1){let n=this._logger.create(`_getMetadataProperty('${e}')`),r=await this.getMetadata();if(n.debug(`resolved`),r[e]===void 0){if(t===!0){n.warn(`Metadata does not contain optional property`);return}n.throw(Error(`Metadata does not contain property `+e))}return r[e]}async getSigningKeys(){let e=this._logger.create(`getSigningKeys`);if(this._signingKeys)return e.debug(`returning signingKeys from cache`),this._signingKeys;let t=await this.getKeysEndpoint(!1);e.debug(`got jwks_uri`,t);let n=await this._jsonService.getJson(t,{timeoutInSeconds:this._settings.requestTimeoutInSeconds});if(e.debug(`got key set`,n),!Array.isArray(n.keys))throw e.throw(Error(`Missing keys on keyset`)),null;return this._signingKeys=n.keys,this._signingKeys}},Di=class{constructor({prefix:e=`oidc.`,store:t=localStorage}={}){this._logger=new di(`WebStorageStateStore`),this._store=t,this._prefix=e}async set(e,t){this._logger.create(`set('${e}')`),e=this._prefix+e,await this._store.setItem(e,t)}async get(e){return this._logger.create(`get('${e}')`),e=this._prefix+e,await this._store.getItem(e)}async remove(e){this._logger.create(`remove('${e}')`),e=this._prefix+e;let t=await this._store.getItem(e);return await this._store.removeItem(e),t}async getAllKeys(){this._logger.create(`getAllKeys`);let e=await this._store.length,t=[];for(let n=0;n<e;n++){let e=await this._store.key(n);e&&e.indexOf(this._prefix)===0&&t.push(e.substr(this._prefix.length))}return t}},Oi=`code`,ki=`openid`,Ai=`client_secret_post`,ji=900,Mi=class{constructor({authority:e,metadataUrl:t,metadata:n,signingKeys:r,metadataSeed:i,client_id:a,client_secret:o,response_type:s=Oi,scope:c=ki,redirect_uri:l,post_logout_redirect_uri:u,client_authentication:d=Ai,token_endpoint_auth_signing_alg:f=`HS256`,prompt:p,display:m,max_age:h,ui_locales:g,acr_values:_,resource:v,response_mode:y,filterProtocolClaims:b=!0,loadUserInfo:x=!1,requestTimeoutInSeconds:S,staleStateAgeInSeconds:C=ji,mergeClaimsStrategy:w={array:`replace`},disablePKCE:T=!1,stateStore:E,revokeTokenAdditionalContentTypes:D,fetchRequestCredentials:O,refreshTokenAllowedScope:k,extraQueryParams:A={},extraTokenParams:ee={},extraHeaders:j={},dpop:M,omitScopeWhenRequesting:N=!1}){if(this.authority=e,t?this.metadataUrl=t:(this.metadataUrl=e,e&&(this.metadataUrl.endsWith(`/`)||(this.metadataUrl+=`/`),this.metadataUrl+=`.well-known/openid-configuration`)),this.metadata=n,this.metadataSeed=i,this.signingKeys=r,this.client_id=a,this.client_secret=o,this.response_type=s,this.scope=c,this.redirect_uri=l,this.post_logout_redirect_uri=u,this.client_authentication=d,this.token_endpoint_auth_signing_alg=f,this.prompt=p,this.display=m,this.max_age=h,this.ui_locales=g,this.acr_values=_,this.resource=v,this.response_mode=y,this.filterProtocolClaims=b??!0,this.loadUserInfo=!!x,this.staleStateAgeInSeconds=C,this.mergeClaimsStrategy=w,this.omitScopeWhenRequesting=N,this.disablePKCE=!!T,this.revokeTokenAdditionalContentTypes=D,this.fetchRequestCredentials=O||`same-origin`,this.requestTimeoutInSeconds=S,E)this.stateStore=E;else{let e=typeof window<`u`?window.localStorage:new Ci;this.stateStore=new Di({store:e})}if(this.refreshTokenAllowedScope=k,this.extraQueryParams=A,this.extraTokenParams=ee,this.extraHeaders=j,this.dpop=M,this.dpop&&!this.dpop?.store)throw Error(`A DPoPStore is required when dpop is enabled`)}},Ni=class{constructor(e,t){this._settings=e,this._metadataService=t,this._logger=new di(`UserInfoService`),this._getClaimsFromJwt=async e=>{let t=this._logger.create(`_getClaimsFromJwt`);try{let n=fi.decode(e);return t.debug(`JWT decoding successful`),n}catch(e){throw t.error(`Error parsing JWT response`),e}},this._jsonService=new Ti(void 0,this._getClaimsFromJwt,this._settings.extraHeaders)}async getClaims(e){let t=this._logger.create(`getClaims`);e||this._logger.throw(Error(`No token passed`));let n=await this._metadataService.getUserInfoEndpoint();t.debug(`got userinfo url`,n);let r=await this._jsonService.getJson(n,{token:e,credentials:this._settings.fetchRequestCredentials,timeoutInSeconds:this._settings.requestTimeoutInSeconds});return t.debug(`got claims`,r),r}},Pi=class{constructor(e,t){this._settings=e,this._metadataService=t,this._logger=new di(`TokenClient`),this._jsonService=new Ti(this._settings.revokeTokenAdditionalContentTypes,null,this._settings.extraHeaders)}async exchangeCode({grant_type:e=`authorization_code`,redirect_uri:t=this._settings.redirect_uri,client_id:n=this._settings.client_id,client_secret:r=this._settings.client_secret,extraHeaders:i,...a}){let o=this._logger.create(`exchangeCode`);n||o.throw(Error(`A client_id is required`)),t||o.throw(Error(`A redirect_uri is required`)),a.code||o.throw(Error(`A code is required`));let s=new URLSearchParams({grant_type:e,redirect_uri:t});for(let[e,t]of Object.entries(a))t!=null&&s.set(e,t);if((this._settings.client_authentication===`client_secret_basic`||this._settings.client_authentication===`client_secret_jwt`)&&r==null)throw o.throw(Error(`A client_secret is required`)),null;let c,l=await this._metadataService.getTokenEndpoint(!1);switch(this._settings.client_authentication){case`client_secret_basic`:c=gi.generateBasicAuth(n,r);break;case`client_secret_post`:s.append(`client_id`,n),r&&s.append(`client_secret`,r);break;case`client_secret_jwt`:{let e=await gi.generateClientAssertionJwt(n,r,l,this._settings.token_endpoint_auth_signing_alg);s.append(`client_id`,n),s.append(`client_assertion_type`,`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`),s.append(`client_assertion`,e);break}}o.debug(`got token endpoint`);let u=await this._jsonService.postForm(l,{body:s,basicAuth:c,timeoutInSeconds:this._settings.requestTimeoutInSeconds,initCredentials:this._settings.fetchRequestCredentials,extraHeaders:i});return o.debug(`got response`),u}async exchangeCredentials({grant_type:e=`password`,client_id:t=this._settings.client_id,client_secret:n=this._settings.client_secret,scope:r=this._settings.scope,...i}){let a=this._logger.create(`exchangeCredentials`);t||a.throw(Error(`A client_id is required`));let o=new URLSearchParams({grant_type:e});this._settings.omitScopeWhenRequesting||o.set(`scope`,r);for(let[e,t]of Object.entries(i))t!=null&&o.set(e,t);if((this._settings.client_authentication===`client_secret_basic`||this._settings.client_authentication===`client_secret_jwt`)&&n==null)throw a.throw(Error(`A client_secret is required`)),null;let s,c=await this._metadataService.getTokenEndpoint(!1);switch(this._settings.client_authentication){case`client_secret_basic`:s=gi.generateBasicAuth(t,n);break;case`client_secret_post`:o.append(`client_id`,t),n&&o.append(`client_secret`,n);break;case`client_secret_jwt`:{let e=await gi.generateClientAssertionJwt(t,n,c,this._settings.token_endpoint_auth_signing_alg);o.append(`client_id`,t),o.append(`client_assertion_type`,`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`),o.append(`client_assertion`,e);break}}a.debug(`got token endpoint`);let l=await this._jsonService.postForm(c,{body:o,basicAuth:s,timeoutInSeconds:this._settings.requestTimeoutInSeconds,initCredentials:this._settings.fetchRequestCredentials});return a.debug(`got response`),l}async exchangeRefreshToken({grant_type:e=`refresh_token`,client_id:t=this._settings.client_id,client_secret:n=this._settings.client_secret,timeoutInSeconds:r,extraHeaders:i,...a}){let o=this._logger.create(`exchangeRefreshToken`);t||o.throw(Error(`A client_id is required`)),a.refresh_token||o.throw(Error(`A refresh_token is required`));let s=new URLSearchParams({grant_type:e});for(let[e,t]of Object.entries(a))Array.isArray(t)?t.forEach(t=>s.append(e,t)):t!=null&&s.set(e,t);if((this._settings.client_authentication===`client_secret_basic`||this._settings.client_authentication===`client_secret_jwt`)&&n==null)throw o.throw(Error(`A client_secret is required`)),null;let c,l=await this._metadataService.getTokenEndpoint(!1);switch(this._settings.client_authentication){case`client_secret_basic`:c=gi.generateBasicAuth(t,n);break;case`client_secret_post`:s.append(`client_id`,t),n&&s.append(`client_secret`,n);break;case`client_secret_jwt`:{let e=await gi.generateClientAssertionJwt(t,n,l,this._settings.token_endpoint_auth_signing_alg);s.append(`client_id`,t),s.append(`client_assertion_type`,`urn:ietf:params:oauth:client-assertion-type:jwt-bearer`),s.append(`client_assertion`,e);break}}o.debug(`got token endpoint`);let u=await this._jsonService.postForm(l,{body:s,basicAuth:c,timeoutInSeconds:r,initCredentials:this._settings.fetchRequestCredentials,extraHeaders:i});return o.debug(`got response`),u}async revoke(e){let t=this._logger.create(`revoke`);e.token||t.throw(Error(`A token is required`));let n=await this._metadataService.getRevocationEndpoint(!1);t.debug(`got revocation endpoint, revoking ${e.token_type_hint??`default token type`}`);let r=new URLSearchParams;for(let[t,n]of Object.entries(e))n!=null&&r.set(t,n);r.set(`client_id`,this._settings.client_id),this._settings.client_secret&&r.set(`client_secret`,this._settings.client_secret),await this._jsonService.postForm(n,{body:r,timeoutInSeconds:this._settings.requestTimeoutInSeconds}),t.debug(`got response`)}},Fi=class{constructor(e,t,n){this._settings=e,this._metadataService=t,this._claimsService=n,this._logger=new di(`ResponseValidator`),this._userInfoService=new Ni(this._settings,this._metadataService),this._tokenClient=new Pi(this._settings,this._metadataService)}async validateSigninResponse(e,t,n){let r=this._logger.create(`validateSigninResponse`);this._processSigninState(e,t),r.debug(`state processed`),await this._processCode(e,t,n),r.debug(`code processed`),e.isOpenId&&this._validateIdTokenAttributes(e,``,t.nonce),r.debug(`tokens validated`),await this._processClaims(e,t?.skipUserInfo,e.isOpenId),r.debug(`claims processed`)}async validateCredentialsResponse(e,t){let n=this._logger.create(`validateCredentialsResponse`),r=e.isOpenId&&!!e.id_token;r&&this._validateIdTokenAttributes(e),n.debug(`tokens validated`),await this._processClaims(e,t,r),n.debug(`claims processed`)}async validateRefreshResponse(e,t){let n=this._logger.create(`validateRefreshResponse`);e.userState=t.data,e.session_state??=t.session_state,e.scope??=t.scope,e.isOpenId&&e.id_token&&(this._validateIdTokenAttributes(e,t.id_token),n.debug(`ID Token validated`)),e.id_token||(e.id_token=t.id_token,e.profile=t.profile);let r=e.isOpenId&&!!e.id_token;await this._processClaims(e,!1,r),n.debug(`claims processed`)}validateSignoutResponse(e,t){let n=this._logger.create(`validateSignoutResponse`);if(t.id!==e.state&&n.throw(Error(`State does not match`)),n.debug(`state validated`),e.userState=t.data,e.error)throw n.warn(`Response was error`,e.error),new xi(e)}_processSigninState(e,t){let n=this._logger.create(`_processSigninState`);if(t.id!==e.state&&n.throw(Error(`State does not match`)),t.client_id||n.throw(Error(`No client_id on state`)),t.authority||n.throw(Error(`No authority on state`)),this._settings.authority!==t.authority&&n.throw(Error(`authority mismatch on settings vs. signin state`)),this._settings.client_id&&this._settings.client_id!==t.client_id&&n.throw(Error(`client_id mismatch on settings vs. signin state`)),n.debug(`state validated`),e.userState=t.data,e.url_state=t.url_state,e.scope??=t.scope,e.error)throw n.warn(`Response was error`,e.error),new xi(e);t.code_verifier&&!e.code&&n.throw(Error(`Expected code in response`))}async _processClaims(e,t=!1,n=!0){let r=this._logger.create(`_processClaims`);if(e.profile=this._claimsService.filterProtocolClaims(e.profile),t||!this._settings.loadUserInfo||!e.access_token){r.debug(`not loading user info`);return}r.debug(`loading user info`);let i=await this._userInfoService.getClaims(e.access_token);r.debug(`user info claims received from user info endpoint`),n&&i.sub!==e.profile.sub&&r.throw(Error(`subject from UserInfo response does not match subject in ID Token`)),e.profile=this._claimsService.mergeClaims(e.profile,this._claimsService.filterProtocolClaims(i)),r.debug(`user info claims received, updated profile:`,e.profile)}async _processCode(e,t,n){let r=this._logger.create(`_processCode`);if(e.code){r.debug(`Validating code`);let i=await this._tokenClient.exchangeCode({client_id:t.client_id,client_secret:t.client_secret,code:e.code,redirect_uri:t.redirect_uri,code_verifier:t.code_verifier,extraHeaders:n,...t.extraTokenParams});Object.assign(e,i)}else r.debug(`No code to process`)}_validateIdTokenAttributes(e,t,n){let r=this._logger.create(`_validateIdTokenAttributes`);r.debug(`decoding ID Token JWT`);let i=fi.decode(e.id_token??``);if(i.sub||r.throw(Error(`ID Token is missing a subject claim`)),n&&i.nonce!==n&&r.throw(Error(`nonce in id_token does not match nonce in client storage`)),t){let e=fi.decode(t);i.sub!==e.sub&&r.throw(Error(`sub in id_token does not match current sub`)),i.auth_time&&i.auth_time!==e.auth_time&&r.throw(Error(`auth_time in id_token does not match original auth_time`)),i.azp&&i.azp!==e.azp&&r.throw(Error(`azp in id_token does not match original azp`)),!i.azp&&e.azp&&r.throw(Error(`azp not in id_token, but present in original id_token`))}e.profile=i}},Ii=class e{constructor(e){this.id=e.id||gi.generateUUIDv4(),this.data=e.data,e.created&&e.created>0?this.created=e.created:this.created=vi.getEpochTime(),this.request_type=e.request_type,this.url_state=e.url_state}toStorageString(){return new di(`State`).create(`toStorageString`),JSON.stringify({id:this.id,data:this.data,created:this.created,request_type:this.request_type,url_state:this.url_state})}static fromStorageString(t){return di.createStatic(`State`,`fromStorageString`),Promise.resolve(new e(JSON.parse(t)))}static async clearStaleState(t,n){let r=di.createStatic(`State`,`clearStaleState`),i=vi.getEpochTime()-n,a=await t.getAllKeys();r.debug(`got keys`,a);for(let n=0;n<a.length;n++){let o=a[n],s=await t.get(o),c=!1;if(s)try{let t=await e.fromStorageString(s);r.debug(`got item from key:`,o,t.created),t.created<=i&&(c=!0)}catch(e){r.error(`Error parsing state for key:`,o,e),c=!0}else r.debug(`no item in storage for key:`,o),c=!0;c&&(r.debug(`removed item for key:`,o),t.remove(o))}}},Li=class e extends Ii{constructor(e){super(e),this.code_verifier=e.code_verifier,this.code_challenge=e.code_challenge,this.authority=e.authority,this.client_id=e.client_id,this.redirect_uri=e.redirect_uri,this.scope=e.scope,this.client_secret=e.client_secret,this.extraTokenParams=e.extraTokenParams,this.response_mode=e.response_mode,this.skipUserInfo=e.skipUserInfo,this.nonce=e.nonce}static async create(t){let n=t.code_verifier===!0?gi.generateCodeVerifier():t.code_verifier||void 0,r=n?await gi.generateCodeChallenge(n):void 0;return new e({...t,code_verifier:n,code_challenge:r})}toStorageString(){return new di(`SigninState`).create(`toStorageString`),JSON.stringify({id:this.id,data:this.data,created:this.created,request_type:this.request_type,url_state:this.url_state,code_verifier:this.code_verifier,authority:this.authority,client_id:this.client_id,redirect_uri:this.redirect_uri,scope:this.scope,client_secret:this.client_secret,extraTokenParams:this.extraTokenParams,response_mode:this.response_mode,skipUserInfo:this.skipUserInfo,nonce:this.nonce})}static fromStorageString(t){di.createStatic(`SigninState`,`fromStorageString`);let n=JSON.parse(t);return e.create(n)}},Ri=class e{constructor(e){this.url=e.url,this.state=e.state}static async create({url:t,authority:n,client_id:r,redirect_uri:i,response_type:a,scope:o,state_data:s,response_mode:c,request_type:l,client_secret:u,nonce:d,url_state:f,resource:p,skipUserInfo:m,extraQueryParams:h,extraTokenParams:g,disablePKCE:_,dpopJkt:v,omitScopeWhenRequesting:y,...b}){if(!t)throw this._logger.error(`create: No url passed`),Error(`url`);if(!r)throw this._logger.error(`create: No client_id passed`),Error(`client_id`);if(!i)throw this._logger.error(`create: No redirect_uri passed`),Error(`redirect_uri`);if(!a)throw this._logger.error(`create: No response_type passed`),Error(`response_type`);if(!o)throw this._logger.error(`create: No scope passed`),Error(`scope`);if(!n)throw this._logger.error(`create: No authority passed`),Error(`authority`);let x=await Li.create({data:s,request_type:l,url_state:f,code_verifier:!_,client_id:r,authority:n,redirect_uri:i,response_mode:c,client_secret:u,scope:o,extraTokenParams:g,skipUserInfo:m,nonce:d}),S=new URL(t);S.searchParams.append(`client_id`,r),S.searchParams.append(`redirect_uri`,i),S.searchParams.append(`response_type`,a),y||S.searchParams.append(`scope`,o),d&&S.searchParams.append(`nonce`,d),v&&S.searchParams.append(`dpop_jkt`,v);let C=x.id;f&&(C=`${C}${bi}${f}`),S.searchParams.append(`state`,C),x.code_challenge&&(S.searchParams.append(`code_challenge`,x.code_challenge),S.searchParams.append(`code_challenge_method`,`S256`)),p&&(Array.isArray(p)?p:[p]).forEach(e=>S.searchParams.append(`resource`,e));for(let[e,t]of Object.entries({response_mode:c,...b,...h}))t!=null&&S.searchParams.append(e,t.toString());return new e({url:S.href,state:x})}};Ri._logger=new di(`SigninRequest`);var zi=Ri,Bi=`openid`,Vi=class{constructor(e){if(this.access_token=``,this.token_type=``,this.profile={},this.state=e.get(`state`),this.session_state=e.get(`session_state`),this.state){let e=decodeURIComponent(this.state).split(bi);this.state=e[0],e.length>1&&(this.url_state=e.slice(1).join(bi))}this.error=e.get(`error`),this.error_description=e.get(`error_description`),this.error_uri=e.get(`error_uri`),this.code=e.get(`code`)}get expires_in(){if(this.expires_at!==void 0)return this.expires_at-vi.getEpochTime()}set expires_in(e){typeof e==`string`&&(e=Number(e)),e!==void 0&&e>=0&&(this.expires_at=Math.floor(e)+vi.getEpochTime())}get isOpenId(){return this.scope?.split(` `).includes(Bi)||!!this.id_token}},Hi=class{constructor({url:e,state_data:t,id_token_hint:n,post_logout_redirect_uri:r,extraQueryParams:i,request_type:a,client_id:o,url_state:s}){if(this._logger=new di(`SignoutRequest`),!e)throw this._logger.error(`ctor: No url passed`),Error(`url`);let c=new URL(e);if(n&&c.searchParams.append(`id_token_hint`,n),o&&c.searchParams.append(`client_id`,o),r&&(c.searchParams.append(`post_logout_redirect_uri`,r),t||s)){this.state=new Ii({data:t,request_type:a,url_state:s});let e=this.state.id;s&&(e=`${e}${bi}${s}`),c.searchParams.append(`state`,e)}for(let[e,t]of Object.entries({...i}))t!=null&&c.searchParams.append(e,t.toString());this.url=c.href}},Ui=class{constructor(e){if(this.state=e.get(`state`),this.state){let e=decodeURIComponent(this.state).split(bi);this.state=e[0],e.length>1&&(this.url_state=e.slice(1).join(bi))}this.error=e.get(`error`),this.error_description=e.get(`error_description`),this.error_uri=e.get(`error_uri`)}},Wi=[`nbf`,`jti`,`auth_time`,`nonce`,`acr`,`amr`,`azp`,`at_hash`],Gi=[`sub`,`iss`,`aud`,`exp`,`iat`],Ki=class{constructor(e){this._settings=e,this._logger=new di(`ClaimsService`)}filterProtocolClaims(e){let t={...e};if(this._settings.filterProtocolClaims){let e;e=Array.isArray(this._settings.filterProtocolClaims)?this._settings.filterProtocolClaims:Wi;for(let n of e)Gi.includes(n)||delete t[n]}return t}mergeClaims(e,t){let n={...e};for(let[e,r]of Object.entries(t))if(n[e]!==r)if(Array.isArray(n[e])||Array.isArray(r))if(this._settings.mergeClaimsStrategy.array==`replace`)n[e]=r;else{let t=Array.isArray(n[e])?n[e]:[n[e]];for(let e of Array.isArray(r)?r:[r])t.includes(e)||t.push(e);n[e]=t}else typeof n[e]==`object`&&typeof r==`object`?n[e]=this.mergeClaims(n[e],r):n[e]=r;return n}},qi=class{constructor(e,t){this.keys=e,this.nonce=t}},Ji=class{constructor(e,t){this._logger=new di(`OidcClient`),this.settings=e instanceof Mi?e:new Mi(e),this.metadataService=t??new Ei(this.settings),this._claimsService=new Ki(this.settings),this._validator=new Fi(this.settings,this.metadataService,this._claimsService),this._tokenClient=new Pi(this.settings,this.metadataService)}async createSigninRequest({state:e,request:t,request_uri:n,request_type:r,id_token_hint:i,login_hint:a,skipUserInfo:o,nonce:s,url_state:c,response_type:l=this.settings.response_type,scope:u=this.settings.scope,redirect_uri:d=this.settings.redirect_uri,prompt:f=this.settings.prompt,display:p=this.settings.display,max_age:m=this.settings.max_age,ui_locales:h=this.settings.ui_locales,acr_values:g=this.settings.acr_values,resource:_=this.settings.resource,response_mode:v=this.settings.response_mode,extraQueryParams:y=this.settings.extraQueryParams,extraTokenParams:b=this.settings.extraTokenParams,dpopJkt:x,omitScopeWhenRequesting:S=this.settings.omitScopeWhenRequesting}){let C=this._logger.create(`createSigninRequest`);if(l!==`code`)throw Error(`Only the Authorization Code flow (with PKCE) is supported`);let w=await this.metadataService.getAuthorizationEndpoint();C.debug(`Received authorization endpoint`,w);let T=await zi.create({url:w,authority:this.settings.authority,client_id:this.settings.client_id,redirect_uri:d,response_type:l,scope:u,state_data:e,url_state:c,prompt:f,display:p,max_age:m,ui_locales:h,id_token_hint:i,login_hint:a,acr_values:g,dpopJkt:x,resource:_,request:t,request_uri:n,extraQueryParams:y,extraTokenParams:b,request_type:r,response_mode:v,client_secret:this.settings.client_secret,skipUserInfo:o,nonce:s,disablePKCE:this.settings.disablePKCE,omitScopeWhenRequesting:S});await this.clearStaleState();let E=T.state;return await this.settings.stateStore.set(E.id,E.toStorageString()),T}async readSigninResponseState(e,t=!1){let n=this._logger.create(`readSigninResponseState`),r=new Vi(yi.readParams(e,this.settings.response_mode));if(!r.state)throw n.throw(Error(`No state in response`)),null;let i=await this.settings.stateStore[t?`remove`:`get`](r.state);if(!i)throw n.throw(Error(`No matching state found in storage`)),null;return{state:await Li.fromStorageString(i),response:r}}async processSigninResponse(e,t,n=!0){let r=this._logger.create(`processSigninResponse`),{state:i,response:a}=await this.readSigninResponseState(e,n);if(r.debug(`received state from storage; validating response`),this.settings.dpop&&this.settings.dpop.store){let e=await this.getDpopProof(this.settings.dpop.store);t={...t,DPoP:e}}try{await this._validator.validateSigninResponse(a,i,t)}catch(e){if(e instanceof wi&&this.settings.dpop){let n=await this.getDpopProof(this.settings.dpop.store,e.nonce);t.DPoP=n,await this._validator.validateSigninResponse(a,i,t)}else throw e}return a}async getDpopProof(e,t){let n,r;return(await e.getAllKeys()).includes(this.settings.client_id)?(r=await e.get(this.settings.client_id),r.nonce!==t&&t&&(r.nonce=t,await e.set(this.settings.client_id,r))):(n=await gi.generateDPoPKeys(),r=new qi(n,t),await e.set(this.settings.client_id,r)),await gi.generateDPoPProof({url:await this.metadataService.getTokenEndpoint(!1),httpMethod:`POST`,keyPair:r.keys,nonce:r.nonce})}async processResourceOwnerPasswordCredentials({username:e,password:t,skipUserInfo:n=!1,extraTokenParams:r={}}){let i=await this._tokenClient.exchangeCredentials({username:e,password:t,...r}),a=new Vi(new URLSearchParams);return Object.assign(a,i),await this._validator.validateCredentialsResponse(a,n),a}async useRefreshToken({state:e,redirect_uri:t,resource:n,timeoutInSeconds:r,extraHeaders:i,extraTokenParams:a}){let o=this._logger.create(`useRefreshToken`),s;if(this.settings.refreshTokenAllowedScope===void 0)s=e.scope;else{let t=this.settings.refreshTokenAllowedScope.split(` `);s=(e.scope?.split(` `)||[]).filter(e=>t.includes(e)).join(` `)}if(this.settings.dpop&&this.settings.dpop.store){let e=await this.getDpopProof(this.settings.dpop.store);i={...i,DPoP:e}}let c;try{c=await this._tokenClient.exchangeRefreshToken({refresh_token:e.refresh_token,scope:s,redirect_uri:t,resource:n,timeoutInSeconds:r,extraHeaders:i,...a})}catch(o){if(o instanceof wi&&this.settings.dpop)i.DPoP=await this.getDpopProof(this.settings.dpop.store,o.nonce),c=await this._tokenClient.exchangeRefreshToken({refresh_token:e.refresh_token,scope:s,redirect_uri:t,resource:n,timeoutInSeconds:r,extraHeaders:i,...a});else throw o}let l=new Vi(new URLSearchParams);return Object.assign(l,c),o.debug(`validating response`,l),await this._validator.validateRefreshResponse(l,{...e,scope:s}),l}async createSignoutRequest({state:e,id_token_hint:t,client_id:n,request_type:r,url_state:i,post_logout_redirect_uri:a=this.settings.post_logout_redirect_uri,extraQueryParams:o=this.settings.extraQueryParams}={}){let s=this._logger.create(`createSignoutRequest`),c=await this.metadataService.getEndSessionEndpoint();if(!c)throw s.throw(Error(`No end session endpoint`)),null;s.debug(`Received end session endpoint`,c),!n&&a&&!t&&(n=this.settings.client_id);let l=new Hi({url:c,id_token_hint:t,client_id:n,post_logout_redirect_uri:a,state_data:e,extraQueryParams:o,request_type:r,url_state:i});await this.clearStaleState();let u=l.state;return u&&(s.debug(`Signout request has state to persist`),await this.settings.stateStore.set(u.id,u.toStorageString())),l}async readSignoutResponseState(e,t=!1){let n=this._logger.create(`readSignoutResponseState`),r=new Ui(yi.readParams(e,this.settings.response_mode));if(!r.state){if(n.debug(`No state in response`),r.error)throw n.warn(`Response was error:`,r.error),new xi(r);return{state:void 0,response:r}}let i=await this.settings.stateStore[t?`remove`:`get`](r.state);if(!i)throw n.throw(Error(`No matching state found in storage`)),null;return{state:await Ii.fromStorageString(i),response:r}}async processSignoutResponse(e){let t=this._logger.create(`processSignoutResponse`),{state:n,response:r}=await this.readSignoutResponseState(e,!0);return n?(t.debug(`Received state from storage; validating response`),this._validator.validateSignoutResponse(r,n)):t.debug(`No state from storage; skipping response validation`),r}clearStaleState(){return this._logger.create(`clearStaleState`),Ii.clearStaleState(this.settings.stateStore,this.settings.staleStateAgeInSeconds)}async revokeToken(e,t){return this._logger.create(`revokeToken`),await this._tokenClient.revoke({token:e,token_type_hint:t})}};function Yi(e,t){throw e.error===`invalid_redirect_uri`?Error(`Dynamic client registration failed: the provided redirect uri [${t.redirectUrl?.toString()}] is invalid - ${e.error_description??``}`):e.error===`invalid_client_metadata`?Error(`Dynamic client registration failed: the provided client metadata ${JSON.stringify(t)} is invalid - ${e.error_description??``}`):Error(`Dynamic client registration failed: ${e.error} - ${e.error_description??``}`)}function Xi(e){return typeof e.client_id==`string`}function Zi(e){return Array.isArray(e.redirect_uris)&&e.redirect_uris.every(e=>typeof e==`string`)}function Qi(e,t){if(!Xi(e))throw Error(`Dynamic client registration failed: no client_id has been found on ${JSON.stringify(e)}`);if(t.redirectUrl&&Zi(e)&&e.redirect_uris[0]!==t.redirectUrl.toString())throw Error(`Dynamic client registration failed: the returned redirect URIs ${JSON.stringify(e.redirect_uris)} don't match the provided ${JSON.stringify([t.redirectUrl.toString()])}`);return!0}async function $i(e,t){if(!t.registrationEndpoint)throw Error(`Dynamic Registration could not be completed because the issuer has no registration endpoint.`);if(!Array.isArray(t.idTokenSigningAlgValuesSupported))throw Error(`The OIDC issuer discovery profile is missing the 'id_token_signing_alg_values_supported' value, which is mandatory.`);let n=Ar(t.idTokenSigningAlgValuesSupported,dr),r={client_name:e.clientName,application_type:`web`,redirect_uris:[e.redirectUrl?.toString()],subject_type:`public`,token_endpoint_auth_method:`client_secret_basic`,id_token_signed_response_alg:n,grant_types:[`authorization_code`,`refresh_token`]},i=await fetch(t.registrationEndpoint.toString(),{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)});if(i.ok){let t=await i.json();return Qi(t,e),{clientId:t.client_id,clientSecret:t.client_secret,expiresAt:t.client_secret_expires_at,idTokenSignedResponseAlg:t.id_token_signed_response_alg,clientType:`dynamic`}}throw i.status===400&&Yi(await i.json(),e),Error(`Dynamic client registration failed: the server returned ${i.status} ${i.statusText} - ${await i.text()}`)}function ea(e){return e.error!==void 0&&typeof e.error==`string`}function ta(e){return e.error_description!==void 0&&typeof e.error_description==`string`}function na(e){return e.error_uri!==void 0&&typeof e.error_uri==`string`}function ra(e){return e.access_token!==void 0&&typeof e.access_token==`string`}function ia(e){return e.id_token!==void 0&&typeof e.id_token==`string`}function aa(e){return e.refresh_token!==void 0&&typeof e.refresh_token==`string`}function oa(e){return e.token_type!==void 0&&typeof e.token_type==`string`}function sa(e){return e.expires_in===void 0||typeof e.expires_in==`number`}function ca(e,t){if(t.grantType&&(!e.grantTypesSupported||!e.grantTypesSupported.includes(t.grantType)))throw Error(`The issuer [${e.issuer}] does not support the [${t.grantType}] grant`);if(!e.tokenEndpoint)throw Error(`This issuer [${e.issuer}] does not have a token endpoint`)}function la(e,t){if(ea(e))throw new Ur(`Token endpoint returned error [${e.error}]${ta(e)?`: ${e.error_description}`:``}${na(e)?` (see ${e.error_uri})`:``}`,e.error,ta(e)?e.error_description:void 0);if(!ra(e))throw new Hr([`access_token`]);if(!ia(e))throw new Hr([`id_token`]);if(!oa(e))throw new Hr([`token_type`]);if(!sa(e))throw new Hr([`expires_in`]);if(!t&&e.token_type.toLowerCase()!==`bearer`)throw Error(`Invalid token endpoint response: requested a [Bearer] token, but got a 'token_type' value of [${e.token_type}].`);return e}async function ua(e,t,n,r){ca(e,n);let i={"content-type":`application/x-www-form-urlencoded`},a;r&&(a=await Kr(),i.DPoP=await Gr(e.tokenEndpoint,`POST`,a)),t.clientSecret&&(i.Authorization=`Basic ${btoa(`${t.clientId}:${t.clientSecret}`)}`);let o={grant_type:n.grantType,redirect_uri:n.redirectUrl,code:n.code,code_verifier:n.codeVerifier,client_id:t.clientId},s={method:`POST`,headers:i,body:new URLSearchParams(o).toString()},c=la(await(await fetch(e.tokenEndpoint,s)).json(),r),{webId:l,clientId:u}=await mr(c.id_token,e.jwksUri,e.issuer,t.clientId);return{accessToken:c.access_token,idToken:c.id_token,refreshToken:aa(c)?c.refresh_token:void 0,webId:l,clientId:u,dpopKey:a,expiresIn:c.expires_in}}var da=e=>{try{return new URL(e),!0}catch{return!1}};async function fa(e,t,n,r){if(n.clientId===void 0)throw Error(`No client ID available when trying to refresh the access token.`);let i={grant_type:`refresh_token`,refresh_token:e},a={};r!==void 0&&(a={DPoP:await Gr(t.tokenEndpoint,`POST`,r)});let o={};n.clientSecret===void 0?da(n.clientId)&&(i.client_id=n.clientId):o={Authorization:`Basic ${btoa(`${n.clientId}:${n.clientSecret}`)}`};let s=await fetch(t.tokenEndpoint,{method:`POST`,body:new URLSearchParams(i).toString(),headers:{...a,...o,"Content-Type":`application/x-www-form-urlencoded`}}),c;try{c=await s.json()}catch{throw Error(`The token endpoint of issuer ${t.issuer} returned a malformed response.`)}let l=la(c,r!==void 0),{webId:u}=await mr(l.id_token,t.jwksUri,t.issuer,n.clientId);return{accessToken:l.access_token,idToken:l.id_token,refreshToken:typeof l.refresh_token==`string`?l.refresh_token:void 0,webId:u,dpopKey:r,expiresIn:l.expires_in}}function pa(e){let t=_r(e);return t.hash=``,e.includes(`${t.origin}/`)?t.href:`${t.origin}${t.href.substring(t.origin.length+1)}`}async function ma(){let e=new Di({});await Ii.clearStaleState(e,900);let t=window.localStorage,n=[];for(let e=0;e<=t.length;e+=1){let r=t.key(e);r&&(r.match(/^oidc\..+$/)||r.match(/^solidClientAuthenticationUser:.+$/))&&n.push(r)}n.forEach(e=>t.removeItem(e))}var ha=class extends zr{constructor(e,t){super(e,t)}};function ga(e){return e.clientExpiresAt===void 0||e.clientExpiresAt===0?!1:e.clientExpiresAt<Math.floor(Date.now()/1e3)}var _a=class extends Ir{login=async(e,t)=>{e.prompt!==`none`&&await this.sessionInfoManager.clear(e.sessionId);let n=e.redirectUrl??pa(window.location.href);if(!gr(n))throw Error(`${n} is not a valid redirect URL, it is either a malformed IRI, includes a hash fragment, or reserved query parameters ('code' or 'state').`);await this.loginHandler.handle({...e,redirectUrl:n,clientName:e.clientName??e.clientId,eventEmitter:t})};validateCurrentSession=async e=>{let t=await this.sessionInfoManager.get(e);return t===void 0||t.clientAppId===void 0||t.issuer===void 0||ga(t)?null:t};handleIncomingRedirect=async(e,t)=>{try{let n=await this.redirectHandler.handle(e,t,void 0);return this.fetch=n.fetch.bind(window),this.boundLogout=n.getLogoutUrl,await this.cleanUrlAfterRedirect(e),{isLoggedIn:n.isLoggedIn,webId:n.webId,sessionId:n.sessionId,expirationDate:n.expirationDate,clientAppId:n.clientAppId}}catch(n){await this.cleanUrlAfterRedirect(e),t.emit(K.ERROR,`redirect`,n);return}};async cleanUrlAfterRedirect(e){let t=_r(e).href;for(window.history.replaceState(null,``,t);window.location.href!==t;)await new Promise(e=>{setTimeout(()=>e(),1)})}};function va(e){return typeof e.oidcIssuer==`string`}function ya(e){return typeof e.redirectUrl==`string`}var ba=class{storageUtility;oidcHandler;issuerConfigFetcher;clientRegistrar;constructor(e,t,n,r){this.storageUtility=e,this.oidcHandler=t,this.issuerConfigFetcher=n,this.clientRegistrar=r,this.storageUtility=e,this.oidcHandler=t,this.issuerConfigFetcher=n,this.clientRegistrar=r}async canHandle(e){return va(e)&&ya(e)}async handle(e){if(!va(e))throw new Vr(`OidcLoginHandler requires an OIDC issuer: missing property 'oidcIssuer' in ${JSON.stringify(e)}`);if(!ya(e))throw new Vr(`OidcLoginHandler requires a redirect URL: missing property 'redirectUrl' in ${JSON.stringify(e)}`);let t=await this.issuerConfigFetcher.fetchConfig(e.oidcIssuer),n=await Pr(e,t,this.storageUtility,this.clientRegistrar),r={issuer:t.issuer,dpop:e.tokenType.toLowerCase()===`dpop`,...e,issuerConfiguration:t,client:n,scopes:hr(e.customScopes)};return this.oidcHandler.handle(r)}},xa=class extends yr{async handle(e){let t=e.redirectUrl??``,n=new Ji({authority:e.issuer.toString(),client_id:e.client.clientId,client_secret:e.client.clientSecret,redirect_uri:t,response_type:`code`,scope:e.scopes.join(` `),filterProtocolClaims:!0,loadUserInfo:!1,prompt:e.prompt??`consent`});try{let t=await n.createSigninRequest({});return await this.setupRedirectHandler({oidcLoginOptions:e,state:t.state.id,codeVerifier:t.state.code_verifier??``,targetUrl:t.url.toString()})}catch(e){console.error(e)}}},Sa=`.well-known/openid-configuration`,Ca={issuer:{toKey:`issuer`,convertToUrl:!0},authorization_endpoint:{toKey:`authorizationEndpoint`,convertToUrl:!0},token_endpoint:{toKey:`tokenEndpoint`,convertToUrl:!0},userinfo_endpoint:{toKey:`userinfoEndpoint`,convertToUrl:!0},jwks_uri:{toKey:`jwksUri`,convertToUrl:!0},registration_endpoint:{toKey:`registrationEndpoint`,convertToUrl:!0},end_session_endpoint:{toKey:`endSessionEndpoint`,convertToUrl:!0},scopes_supported:{toKey:`scopesSupported`},response_types_supported:{toKey:`responseTypesSupported`},response_modes_supported:{toKey:`responseModesSupported`},grant_types_supported:{toKey:`grantTypesSupported`},acr_values_supported:{toKey:`acrValuesSupported`},subject_types_supported:{toKey:`subjectTypesSupported`},id_token_signing_alg_values_supported:{toKey:`idTokenSigningAlgValuesSupported`},id_token_encryption_alg_values_supported:{toKey:`idTokenEncryptionAlgValuesSupported`},id_token_encryption_enc_values_supported:{toKey:`idTokenEncryptionEncValuesSupported`},userinfo_signing_alg_values_supported:{toKey:`userinfoSigningAlgValuesSupported`},userinfo_encryption_alg_values_supported:{toKey:`userinfoEncryptionAlgValuesSupported`},userinfo_encryption_enc_values_supported:{toKey:`userinfoEncryptionEncValuesSupported`},request_object_signing_alg_values_supported:{toKey:`requestObjectSigningAlgValuesSupported`},request_object_encryption_alg_values_supported:{toKey:`requestObjectEncryptionAlgValuesSupported`},request_object_encryption_enc_values_supported:{toKey:`requestObjectEncryptionEncValuesSupported`},token_endpoint_auth_methods_supported:{toKey:`tokenEndpointAuthMethodsSupported`},token_endpoint_auth_signing_alg_values_supported:{toKey:`tokenEndpointAuthSigningAlgValuesSupported`},display_values_supported:{toKey:`displayValuesSupported`},claim_types_supported:{toKey:`claimTypesSupported`},claims_supported:{toKey:`claimsSupported`},service_documentation:{toKey:`serviceDocumentation`},claims_locales_supported:{toKey:`claimsLocalesSupported`},ui_locales_supported:{toKey:`uiLocalesSupported`},claims_parameter_supported:{toKey:`claimsParameterSupported`},request_parameter_supported:{toKey:`requestParameterSupported`},request_uri_parameter_supported:{toKey:`requestUriParameterSupported`},require_request_uri_registration:{toKey:`requireRequestUriRegistration`},op_policy_uri:{toKey:`opPolicyUri`,convertToUrl:!0},op_tos_uri:{toKey:`opTosUri`,convertToUrl:!0}};function wa(e){let t={};return Object.keys(e).forEach(n=>{Ca[n]&&(t[Ca[n].toKey]=e[n])}),Array.isArray(t.scopesSupported)||(t.scopesSupported=[`openid`]),t}var Ta=class e{storageUtility;constructor(e){this.storageUtility=e,this.storageUtility=e}static getLocalStorageKey(e){return`issuerConfig:${e}`}async fetchConfig(t){let n,r=new URL(Sa,t.endsWith(`/`)?t:`${t}/`).href,i=await fetch(r);try{n=wa(await i.json())}catch(e){throw new Vr(`[${t.toString()}] has an invalid configuration: ${e.message}`)}return await this.storageUtility.set(e.getLocalStorageKey(t),JSON.stringify(n)),n}};async function Ea(e,t){await wr(e,t),await ma()}var Da=class extends Tr{async get(e){let[t,n,r,i,a,o,s,c,l]=await Promise.all([this.storageUtility.getForUser(e,`isLoggedIn`,{secure:!0}),this.storageUtility.getForUser(e,`webId`,{secure:!0}),this.storageUtility.getForUser(e,`clientId`,{secure:!1}),this.storageUtility.getForUser(e,`clientSecret`,{secure:!1}),this.storageUtility.getForUser(e,`redirectUrl`,{secure:!1}),this.storageUtility.getForUser(e,`refreshToken`,{secure:!0}),this.storageUtility.getForUser(e,`issuer`,{secure:!1}),this.storageUtility.getForUser(e,`tokenType`,{secure:!1}),this.storageUtility.getForUser(e,`expiresAt`,{secure:!1})]);if(typeof a==`string`&&!gr(a)){await Promise.all([this.storageUtility.deleteAllUserData(e,{secure:!1}),this.storageUtility.deleteAllUserData(e,{secure:!0})]);return}if(c!==void 0&&!Or(c))throw Error(`Tokens of type [${c}] are not supported.`);if(!(r===void 0&&t===void 0&&n===void 0&&o===void 0))return{sessionId:e,webId:n,isLoggedIn:t===`true`,redirectUrl:a,refreshToken:o,issuer:s,clientAppId:r,clientAppSecret:i,tokenType:c??`DPoP`,clientExpiresAt:l===void 0?void 0:Number.parseInt(l,10)}}async clear(e){return Ea(e,this.storageUtility)}},Oa=class{async canHandle(e){try{return new URL(e),!0}catch(t){throw Error(`[${e}] is not a valid URL, and cannot be used as a redirect URL: ${t}`)}}async handle(e){return Cr()}},ka=class{storageUtility;sessionInfoManager;issuerConfigFetcher;clientRegistrar;tokerRefresher;constructor(e,t,n,r,i){this.storageUtility=e,this.sessionInfoManager=t,this.issuerConfigFetcher=n,this.clientRegistrar=r,this.tokerRefresher=i,this.storageUtility=e,this.sessionInfoManager=t,this.issuerConfigFetcher=n,this.clientRegistrar=r,this.tokerRefresher=i}async canHandle(e){try{let t=new URL(e);return t.searchParams.get(`code`)!==null&&t.searchParams.get(`state`)!==null}catch(t){throw Error(`[${e}] is not a valid URL, and cannot be used as a redirect URL: ${t}`)}}async handle(e,t){if(!await this.canHandle(e))throw Error(`AuthCodeRedirectHandler cannot handle [${e}]: it is missing one of [code, state].`);let n=new URL(e),r=n.searchParams.get(`state`),i=await this.storageUtility.getForUser(r,`sessionId`,{errorIfNull:!0}),{issuerConfig:a,codeVerifier:o,redirectUrl:s,dpop:c}=await Lr(i,this.storageUtility,this.issuerConfigFetcher),l=n.searchParams.get(`iss`);if(typeof l==`string`&&l!==a.issuer)throw Error(`The value of the iss parameter (${l}) does not match the issuer identifier of the authorization server (${a.issuer}). See [rfc9207](https://www.rfc-editor.org/rfc/rfc9207.html#section-2.3-3.1.1)`);if(o===void 0)throw Error(`The code verifier for session ${i} is missing from storage.`);if(s===void 0)throw Error(`The redirect URL for session ${i} is missing from storage.`);let u=await this.clientRegistrar.getClient({sessionId:i},a),d=Date.now(),f=await ua(a,u,{grantType:`authorization_code`,code:n.searchParams.get(`code`),codeVerifier:o,redirectUrl:s},c);window.localStorage.removeItem(`oidc.${r}`);let p;f.refreshToken!==void 0&&(p={sessionId:i,refreshToken:f.refreshToken,tokenRefresher:this.tokerRefresher});let m=ei(f.accessToken,{dpopKey:f.dpopKey,refreshOptions:p,eventEmitter:t,expiresIn:f.expiresIn});await Rr(this.storageUtility,i,f.webId,f.clientId,`true`,void 0,!0);let h=await this.sessionInfoManager.get(i);if(!h)throw Error(`Could not retrieve session: [${i}].`);return Object.assign(h,{fetch:m,getLogoutUrl:Dr({idTokenHint:f.idToken,endSessionEndpoint:a.endSessionEndpoint}),expirationDate:typeof f.expiresIn==`number`?d+f.expiresIn*1e3:void 0})}},Aa=class extends pr{constructor(e){super(e)}},ja=class{get storage(){return window.localStorage}async get(e){return this.storage.getItem(e)||void 0}async set(e,t){this.storage.setItem(e,t)}async delete(e){this.storage.removeItem(e)}},Ma=class{redirect(e,t){t&&t.handleRedirect?t.handleRedirect(e):t&&t.redirectByReplacingState?window.history.replaceState({},``,e):window.location.href=e}},Na=class{storageUtility;constructor(e){this.storageUtility=e,this.storageUtility=e}async getClient(e,t){let[n,r,i,a,o]=await Promise.all([this.storageUtility.getForUser(e.sessionId,`clientId`,{secure:!1}),this.storageUtility.getForUser(e.sessionId,`clientSecret`,{secure:!1}),this.storageUtility.getForUser(e.sessionId,`expiresAt`,{secure:!1}),this.storageUtility.getForUser(e.sessionId,`clientName`,{secure:!1}),this.storageUtility.getForUser(e.sessionId,`clientType`,{secure:!1})]),s=i===void 0?-1:Number.parseInt(i,10),c=r!==void 0&&s!==0&&Math.floor(Date.now()/1e3)>s;if(n&&Nr(o)&&!c)return r===void 0?{clientId:n,clientName:a,clientType:o}:{clientId:n,clientSecret:r,clientName:a,clientType:`dynamic`,expiresAt:s};try{let n=await $i(e,t),r={clientId:n.clientId,clientType:`dynamic`};return n.clientSecret!==void 0&&(r.clientSecret=n.clientSecret,r.expiresAt=String(n.expiresAt)),n.idTokenSignedResponseAlg&&(r.idTokenSignedResponseAlg=n.idTokenSignedResponseAlg),await this.storageUtility.setForUser(e.sessionId,r,{secure:!1}),n}catch(e){throw Error(`Client registration failed.`,{cause:e})}}},Pa=class{async canHandle(e){try{return new URL(e).searchParams.has(`error`)}catch(t){throw Error(`[${e}] is not a valid URL, and cannot be used as a redirect URL: ${t}`)}}async handle(e,t){if(t!==void 0){let n=new URL(e),r=n.searchParams.get(`error`),i=n.searchParams.get(`error_description`);t.emit(K.ERROR,r,i)}return Cr()}},Fa=class{storageUtility;issuerConfigFetcher;clientRegistrar;constructor(e,t,n){this.storageUtility=e,this.issuerConfigFetcher=t,this.clientRegistrar=n,this.storageUtility=e,this.issuerConfigFetcher=t,this.clientRegistrar=n}async refresh(e,t,n,r){let i=await Lr(e,this.storageUtility,this.issuerConfigFetcher),a=await this.clientRegistrar.getClient({sessionId:e},i.issuerConfig);if(t===void 0)throw Error(`Session [${e}] has no refresh token to allow it to refresh its access token.`);if(i.dpop&&n===void 0)throw Error(`For session [${e}], the key bound to the DPoP access token must be provided to refresh said access token.`);let o=await fa(t,i.issuerConfig,a,n);return o.refreshToken!==void 0&&r?.emit(K.NEW_REFRESH_TOKEN,o.refreshToken),o}};function Ia(e){let t=new Br,n=new ha(e.secureStorage||t,e.insecureStorage||new ja),r=new Ta(n),i=new Na(n),a=new Da(n),o=new Fa(n,r,i),s=new Ma;return new _a(new ba(n,new xa(n,s),r,i),new Aa([new Pa,new ka(n,a,r,i,o),new Oa]),new Sr(a,s),a,r)}var La=`${ur}currentSession`,Ra=`${ur}currentUrl`;async function za(e,t,n){let r=await t.validateCurrentSession(e);return r===null?!1:(window.localStorage.setItem(Ra,window.location.href),await t.login({sessionId:e,prompt:`none`,oidcIssuer:r.issuer,redirectUrl:r.redirectUrl,clientId:r.clientAppId,clientSecret:r.clientAppSecret,tokenType:r.tokenType??`DPoP`},n.events),!0)}function Ba(e){return!!e?.isLoggedIn}var Va=class{info;events;clientAuthentication;tokenRequestInProgress=!1;constructor(e={},t=void 0){this.events=new ni.default,e.clientAuthentication?this.clientAuthentication=e.clientAuthentication:e.secureStorage&&e.insecureStorage?this.clientAuthentication=Ia({secureStorage:e.secureStorage,insecureStorage:e.insecureStorage}):this.clientAuthentication=Ia({}),e.sessionInfo?this.info={sessionId:e.sessionInfo.sessionId,isLoggedIn:!1,webId:e.sessionInfo.webId,clientAppId:e.sessionInfo.clientAppId}:this.info={sessionId:t??cr(),isLoggedIn:!1},this.events.on(K.LOGIN,()=>window.localStorage.setItem(La,this.info.sessionId)),this.events.on(K.SESSION_EXPIRED,()=>this.internalLogout(!1)),this.events.on(K.ERROR,()=>this.internalLogout(!1))}login=async e=>(await this.clientAuthentication.login({sessionId:this.info.sessionId,...e,tokenType:e.tokenType??`DPoP`},this.events),new Promise(()=>{}));fetch=(e,t)=>this.clientAuthentication.fetch(e,t);internalLogout=async(e,t)=>{window.localStorage.removeItem(La),await this.clientAuthentication.logout(this.info.sessionId,t),this.info.isLoggedIn=!1,e&&this.events.emit(K.LOGOUT)};logout=async e=>this.internalLogout(!0,e);handleIncomingRedirect=async(e={})=>{if(this.info.isLoggedIn)return this.info;if(this.tokenRequestInProgress)return;let t=typeof e==`string`?{url:e}:e,n=t.url??window.location.href;this.tokenRequestInProgress=!0;let r=await this.clientAuthentication.handleIncomingRedirect(n,this.events);if(Ba(r)){this.setSessionInfo(r);let e=window.localStorage.getItem(Ra);e===null?this.events.emit(K.LOGIN):(window.localStorage.removeItem(Ra),this.events.emit(K.SESSION_RESTORED,e))}else if(t.restorePreviousSession===!0){let e=window.localStorage.getItem(La);if(e!==null&&await za(e,this.clientAuthentication,this))return new Promise(()=>{})}return this.tokenRequestInProgress=!1,r};setSessionInfo(e){this.info.isLoggedIn=e.isLoggedIn,this.info.webId=e.webId,this.info.sessionId=e.sessionId,this.info.clientAppId=e.clientAppId,this.info.expirationDate=e.expirationDate,this.events.on(K.SESSION_EXTENDED,e=>{this.info.expirationDate=Date.now()+e*1e3})}},Ha;function Ua(){return Ha===void 0&&(Ha=new Va),Ha}function Wa(...e){return Ua().fetch(...e)}function Ga(...e){return Ua().login(...e)}function Ka(...e){return Ua().logout(...e)}function qa(...e){return Ua().handleIncomingRedirect(...e)}var q=e=>e??z,Ja=new Set;function Ya(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Xa(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function Za(e){if(Ja.add(e),!document.documentElement.classList.contains(`wa-scroll-lock`)){let e=Ya()+Xa(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--wa-scroll-lock-gutter`,t),document.documentElement.classList.add(`wa-scroll-lock`),document.documentElement.style.setProperty(`--wa-scroll-lock-size`,`${e}px`)}}function Qa(e){Ja.delete(e),Ja.size===0&&(document.documentElement.classList.remove(`wa-scroll-lock`),document.documentElement.style.removeProperty(`--wa-scroll-lock-size`))}function $a(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}var eo=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},to=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},no=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},ro=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},io=h`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`,ao=[];function oo(e){ao.push(e)}function so(e){for(let t=ao.length-1;t>=0;t--)if(ao[t]===e){ao.splice(t,1);break}}function co(e){return ao.length>0&&ao[ao.length-1]===e}var lo=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}};function uo(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}function fo(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var po={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mo=e=>(...t)=>({_$litDirective$:e,values:t}),ho=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},go=mo(class extends ho{constructor(e){if(super(e),e.type!==po.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ge}}),_o=class extends Qe{constructor(){super(...arguments),this.localize=new ut(this),this.hasSlotController=new lo(this,`footer`,`header-actions`,`label`),this.open=!1,this.label=``,this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&co(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Za(this))}disconnectedCallback(){super.disconnectedCallback(),Qa(this),this.removeOpenListeners()}async requestClose(e){let t=new to({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,uo(this.dialog,`pulse`);return}this.removeOpenListeners(),await uo(this.dialog,`hide`),this.open=!1,this.dialog.close(),Qa(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.dispatchEvent(new ro)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown),oo(this)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),so(this)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains(`hide`)&&e.target===this.dialog&&co(this)&&this.requestClose(this.dialog)}handleDialogClick(e){let t=e.target.closest(`[data-dialog="close"]`);t&&(e.stopPropagation(),this.requestClose(t))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await uo(this.dialog,`pulse`))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){let e=new eo;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Za(this),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus():this.dialog.focus()}),await uo(this.dialog,`show`),this.dispatchEvent(new no)}render(){let e=!this.withoutHeader,t=this.hasSlotController.test(`footer`,`withFooter`);return R`
      <dialog
        part="dialog"
        class=${go({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?R`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:`​`} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${e=>this.requestClose(e.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term(`close`)}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:``}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <footer part="footer" class="footer" ?hidden=${!t}>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    `}};_o.css=io,H([Ke(`.dialog`)],_o.prototype,`dialog`,2),H([W({type:Boolean,reflect:!0})],_o.prototype,`open`,2),H([W({reflect:!0})],_o.prototype,`label`,2),H([W({attribute:`without-header`,type:Boolean,reflect:!0})],_o.prototype,`withoutHeader`,2),H([W({attribute:`light-dismiss`,type:Boolean})],_o.prototype,`lightDismiss`,2),H([W({attribute:`with-footer`,type:Boolean})],_o.prototype,`withFooter`,2),H([fo(`open`,{waitUntilFirstUpdate:!0})],_o.prototype,`handleOpenChange`,1),_o=H([U(`wa-dialog`)],_o),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-dialog]`);if(t instanceof Element){let[e,n]=$a(t.getAttribute(`data-dialog`)||``);if(e===`open`&&n?.length){let e=t.getRootNode().getElementById(n);e?.localName===`wa-dialog`?e.open=!0:console.warn(`A dialog with an ID of "${n}" could not be found in this document.`)}}}),document.addEventListener(`pointerdown`,()=>{});var vo=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),yo=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},bo=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),xo=class extends Qe{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new yo))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[bo()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};xo.formAssociated=!0,H([W({reflect:!0})],xo.prototype,`name`,2),H([W({type:Boolean})],xo.prototype,`disabled`,2),H([W({state:!0,attribute:!1})],xo.prototype,`valueHasChanged`,2),H([W({state:!0,attribute:!1})],xo.prototype,`hasInteracted`,2),H([W({attribute:`custom-error`,reflect:!0})],xo.prototype,`customError`,2),H([W({attribute:!1,state:!0,type:Object})],xo.prototype,`validity`,1);var So={small:`s`,medium:`m`,large:`l`},Co=new Set;function wo(e,t){t in So&&!Co.has(`${e}:${t}`)&&(Co.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${So[t]}" instead. The long-form value will be removed in the next major version.`))}var To=h`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`,Eo=h`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`,Do=h`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`,Oo=Symbol.for(``),ko=e=>{if(e?.r===Oo)return e?._$litStatic$},Ao=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Oo}),jo=new Map,Mo=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=ko(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=jo.get(e))===void 0&&(o.raw=o,jo.set(e,t=o)),n=s}return e(t,...n)})(R),J=class extends xo{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new lo(this,`[default]`,`start`,`end`),this.localize=new ut(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,vo()]}handleSizeChange(){wo(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new yo)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Ao`a`:Ao`button`;return Mo`
      <${t}
        part="base"
        class=${go({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${q(e?void 0:this.disabled)}
        type=${q(e?void 0:this.type)}
        title=${this.title}
        name=${q(e?void 0:this.name)}
        value=${q(e?void 0:this.value)}
        href=${q(e?this.href:void 0)}
        target=${q(e?this.target:void 0)}
        download=${q(e?this.download:void 0)}
        rel=${q(e&&this.rel?this.rel:void 0)}
        role=${q(e?void 0:`button`)}
        aria-disabled=${q(e&&this.disabled?`true`:void 0)}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Mo`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Mo`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};J.shadowRootOptions={...xo.shadowRootOptions,delegatesFocus:!0},J.css=[Eo,Do,To],H([Ke(`.button`)],J.prototype,`button`,2),H([Ke(`slot:not([name])`)],J.prototype,`labelSlot`,2),H([We()],J.prototype,`invalid`,2),H([We()],J.prototype,`isIconButton`,2),H([W()],J.prototype,`title`,2),H([W({reflect:!0})],J.prototype,`variant`,2),H([W({reflect:!0})],J.prototype,`appearance`,2),H([W({reflect:!0})],J.prototype,`size`,2),H([fo(`size`)],J.prototype,`handleSizeChange`,1),H([W({attribute:`with-caret`,type:Boolean,reflect:!0})],J.prototype,`withCaret`,2),H([W({attribute:`with-start`,type:Boolean})],J.prototype,`withStart`,2),H([W({attribute:`with-end`,type:Boolean})],J.prototype,`withEnd`,2),H([W({type:Boolean})],J.prototype,`disabled`,2),H([W({type:Boolean,reflect:!0})],J.prototype,`loading`,2),H([W({type:Boolean,reflect:!0})],J.prototype,`pill`,2),H([W()],J.prototype,`type`,2),H([W({reflect:!0})],J.prototype,`name`,2),H([W({reflect:!0})],J.prototype,`value`,2),H([W({reflect:!0})],J.prototype,`href`,2),H([W()],J.prototype,`target`,2),H([W()],J.prototype,`rel`,2),H([W()],J.prototype,`download`,2),H([W({attribute:`formaction`})],J.prototype,`formAction`,2),H([W({attribute:`formenctype`})],J.prototype,`formEnctype`,2),H([W({attribute:`formmethod`})],J.prototype,`formMethod`,2),H([W({attribute:`formnovalidate`,type:Boolean})],J.prototype,`formNoValidate`,2),H([W({attribute:`formtarget`})],J.prototype,`formTarget`,2),H([fo(`disabled`,{waitUntilFirstUpdate:!0})],J.prototype,`handleDisabledChange`,1),H([fo(`href`)],J.prototype,`handleHrefChange`,1),H([fo(`loading`,{waitUntilFirstUpdate:!0})],J.prototype,`handleLoadingChange`,1),J=H([U(`wa-button`)],J),J.disableWarning?.(`change-in-update`);var No=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Po=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Fo=h`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    fill: currentColor;
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`,Io=``,Lo=``;function Ro(){return Io.replace(/\/$/,``)}function zo(e){Lo=e}function Bo(){if(!Lo){let e=document.querySelector(`[data-fa-kit-code]`);e&&zo(e.getAttribute(`data-fa-kit-code`)||``)}return Lo}var Vo=`7.3.0`;function Ho(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Uo(e,t,n){let r=Ho(e,t,n),i=Ro();if(i)return`${i}/${r}/${e}.svg`;let a=Bo();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Vo}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Vo}/svgs/${r}/${e}.svg`}var Wo={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Uo(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};function Go(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Ko={solid:{backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},qo={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Ko[n][e]??Ko.regular[e]??Ko.regular[`circle-question`];return r?Go(r):``}},Jo=`classic`,Yo=[Wo,qo],Xo=new Set;function Zo(e){Xo.add(e)}function Qo(e){Xo.delete(e)}function $o(e){return Yo.find(t=>t.name===e)}function es(){return Jo}var{I:ts}=Oe,ns=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,rs=Symbol(),is=Symbol(),as,os=new Map,ss=class extends Qe{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=R`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?rs:is}catch{return is}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return rs;as||=new DOMParser;let r=as.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):rs}catch{return rs}}}connectedCallback(){super.connectedCallback(),Zo(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qo(this)}async getIconSource(){let e=$o(this.library),t=this.family||es();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?$o(this.library):void 0;if(!e){this.svg=null;return}let r=os.get(e);r||(r=this.resolveIcon(e,n),os.set(e,r));let i=await r;if(i===is&&os.delete(e),e===(await this.getIconSource()).url){if(ns(i)){this.svg=i;return}switch(i){case is:case rs:this.svg=null,this.dispatchEvent(new No);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Po)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=$o(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:R`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};ss.css=Fo,H([We()],ss.prototype,`svg`,2),H([W({reflect:!0})],ss.prototype,`name`,2),H([W({reflect:!0})],ss.prototype,`family`,2),H([W({reflect:!0})],ss.prototype,`variant`,2),H([W({reflect:!0})],ss.prototype,`canvas`,2),H([W({attribute:`auto-width`,type:Boolean,reflect:!0})],ss.prototype,`autoWidth`,2),H([W({attribute:`swap-opacity`,type:Boolean,reflect:!0})],ss.prototype,`swapOpacity`,2),H([W()],ss.prototype,`src`,2),H([W()],ss.prototype,`label`,2),H([W({reflect:!0})],ss.prototype,`library`,2),H([W({type:Number,reflect:!0})],ss.prototype,`rotate`,2),H([W({type:String,reflect:!0})],ss.prototype,`flip`,2),H([W({type:String,reflect:!0})],ss.prototype,`animation`,2),H([fo(`label`)],ss.prototype,`handleLabelChange`,1),H([fo([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],ss.prototype,`setIcon`,1),ss=H([U(`wa-icon`)],ss);var cs=class extends ho{constructor(e){if(super(e),this.it=z,e.type!==po.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===z||e==null)return this._t=void 0,this.it=e;if(e===ge)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};cs.directiveName=`unsafeHTML`,cs.resultType=1;var ls=mo(cs),us=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
  viewBox="0 0 164.98936 240.00001"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <metadata>
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g transform="translate(-317.40707,-420.21956)">
    <g transform="matrix(0.89526548,0,0,0.89526548,-11.212902,63.476514)">
      <path
        id="stalk"
        d="m 520.62695,590.04102 c 0.0953,-6.07416 0.70828,-18.58321 0.5918,-31.9629 -0.11369,-13.05772 -0.94675,-26.94319 -1.58984,-36.48437 -0.38151,-5.66028 -1.57307,-6.04267 -4.39649,-6.03516 -2.82342,0.008 -4.66066,1.25838 -4.68945,6.17188 -0.0504,8.60421 0.89605,21.43369 0.74805,34.5625 -0.13089,11.61039 -1.32712,23.33898 -1.48047,34.28125 -0.21838,15.58279 -11.47455,20.36575 -17.24219,20.73024 -10.04624,0.63487 -20.0913,-12.53202 -21.05664,-34.07399 -1.10596,-24.67974 -3.85922,-55.26933 -7.84375,-77.93164 -0.24039,-1.36722 -3.29551,-32.43398 -1.33203,-42.79688 0.64336,-3.39556 3.36845,-9.00219 -3.78906,-9.59961 -6.5191,-0.54414 -4.36743,7.41117 -5.32422,11.5293 -2.20573,9.49367 0.0775,33.05609 1.52539,47.75391 2.09454,21.26158 8.28525,44.39928 5.61328,80.52929 -1.43137,19.3548 -8.95104,24.74208 -22.67144,24.94655 -10.76892,0.16048 -20.97804,-5.92655 -26.67377,-21.48316 -1.93578,-5.28716 -0.94595,-17.18737 -5.03174,-38.58448 -3.47796,-18.21397 -4.47557,-41.26337 -4.09376,-48.46094 0.22371,-4.21726 -0.14667,-6.09224 -4.18164,-5.88867 -4.03497,0.20358 -4.20852,0.62542 -4.21679,5.3418 -0.0185,10.52527 1.78815,31.06074 4.30273,49.74414 2.57288,19.11649 1.14337,36.49684 0.35891,37.74219 -3.78843,6.01421 -18.01528,10.84255 -25.178,19.91468 -9.99006,12.65318 -6.50591,29.8061 5.24506,40.61459 3.5424,2.87674 12.02408,9.74058 22.36724,8.74308 9.87888,-0.95273 21.45587,-9.74176 32.04932,-8.33619 14.08082,1.86828 22.58994,16.03079 36.11801,15.47117 16.07163,-0.66483 30.61051,-10.79421 37.05584,-10.34788 25.76735,4.56347 44.66475,-10.64623 45.41428,-24.2109 1.64417,-29.7555 -25.69561,-22.11809 -30.59863,-41.8798 z m -117.0957,18.24023 c 5.1278,-0.29706 6.56217,7.10509 8.25391,12.65234 4.12408,13.52295 0.46732,14.9713 -8.21289,13.57227 -11.24829,-1.81294 -17.35537,-5.1681 -16.11329,-11.95898 1.26269,-6.90356 5.52562,-8.22448 10.8086,-11.9961 2.10139,-1.50022 3.82789,-2.18635 5.26367,-2.26953 z m 114.68359,3.72461 c 4.92594,-0.22589 14.62313,5.31318 14.64258,11.42773 0.0115,3.60503 -0.12924,6.95497 -11.42969,11.07227 -4.63317,1.68809 -13.92773,1.82748 -13.92773,-4.28711 0,-6.11458 2.92658,-17.85576 10.71484,-18.21289 z m -47.61328,5.0918 c 6.4484,0.38679 11.8835,12.13573 13.6836,17.4082 3.30013,9.66608 -6.2352,14.28516 -13.92774,14.28516 -7.69254,0 -16.78515,-2.26045 -16.78515,-8.57227 -10e-6,-6.31183 7.30745,-20.35741 15,-22.85742 0.68586,-0.2229 1.36222,-0.30369 2.02929,-0.26367 z"
      />
      <g id="caps">
        <path
          d="m 425.52675,498.54606 c 0.84637,5.4724 -7.01336,6.06091 -20.70812,6.06091 -0.48563,0 -3.73186,-1.06843 1.75423,-1.59317 3.51626,-0.33633 14.51824,-1.34096 14.59237,-2.71118 0.14789,-2.73369 -21.23411,-5.12155 -22.65996,-5.16004 -4.0146,-0.10838 -16.48086,-0.0665 -16.39507,3.28729 0.0437,1.70839 5.03248,3.33269 8.15007,4.38687 3.1176,1.05419 1.66148,1.84278 1.42364,1.81032 -7.4534,-1.01731 -11.45875,-4.29192 -12.62417,-7.34369 -5.27669,-13.81756 8.27891,-40.48529 21.46574,-40.15357 13.69304,0.34445 22.22805,23.48532 25.00127,41.41626 z"
        />
        <path
          d="m 496.57469,455.5282 c -0.39638,6.78103 -4.68667,4.34013 -24.19376,4.34013 -5.74251,0 -10.11397,-3.54219 -0.0266,-3.78457 5.03003,-0.12086 17.64961,1.37291 17.7552,-1.33648 0.15186,-3.89666 -30.24629,-9.56808 -32.2773,-9.62291 -5.71847,-0.15438 -35.34495,-2.87262 -35.22275,1.90456 0.0623,2.43347 18.28003,6.76746 22.72079,8.26906 4.44077,1.50161 2.36665,2.62489 2.02786,2.57866 -10.61677,-1.44908 -29.45387,-3.3351 -29.8291,-12.31801 -0.13897,-3.32684 11.33018,-21.33152 22.85821,-36.45096 5.72227,-7.50499 14.69089,-10.71405 21.08023,-10.55333 6.69795,0.16849 15.6453,6.40023 20.48814,14.55822 5.04761,8.50294 14.99949,35.90812 14.6191,42.41563 z"
        />
        <path
          d="m 548.26371,518.84668 c 0.13739,4.19673 -13.76959,4.51867 -22.13522,5.05438 -0.61834,0.0396 -6.72567,-2.07746 0.27388,-2.74696 4.4863,-0.42911 17.09486,-0.10375 17.01087,-2.74484 -0.11102,-3.49117 -20.48488,-4.74873 -28.55409,-4.97641 -5.12194,-0.14453 -30.49176,0.27234 -30.3823,3.47988 0.0744,2.17913 15.88508,3.00209 19.86273,4.34709 3.97766,1.34501 3.90556,3.42258 0.56638,3.02403 -9.53011,-1.13749 -25.47105,-3.59576 -25.57111,-7.76248 -0.15199,-6.32924 12.3886,-35.47992 19.38145,-42.94839 4.50982,-4.81655 11.21654,-7.76839 15.86324,-7.74675 6.08165,0.0283 16.46627,6.33051 21.03239,16.31168 6.88311,15.04589 12.49491,31.91748 12.65178,36.70877 z"
        />
      </g>
    </g>
  </g>
</svg>
`;function Y(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var ds=class extends Me{render(){return R`<div class="logo">${ls(us)}</div> `}static{this.styles=h`
    :host {
      --size: 150px;
    }

    .logo svg {
      height: var(--size);
      fill: var(--color-text);
    }

    .logo svg #caps {
      fill: var(--color-primary);
    }
  `}};ds=Y([U(`dtp-logo`)],ds);var fs=`lastOidcIssuer`,ps=class extends Me{render(){return R`
      <form @submit=${this._submit}>
        <input
          required
          type="url"
          name="webidOrIdp"
          value=${q(this.defaultValue)}
        />
        <button type="submit">continue</button>
      </form>
    `}_submit(e){e.preventDefault();let t=e.target,n=new FormData(t),r=Object.fromEntries(n.entries()),i=new CustomEvent(`confirm`,{detail:{data:r}});this.dispatchEvent(i)}};Y([W()],ps.prototype,`defaultValue`,void 0),ps=Y([U(`dtp-signin-ui`)],ps);var ms=class extends Me{connectedCallback(){super.connectedCallback(),this._defaultValue=globalThis.localStorage.getItem(fs)??void 0}render(){return R`<dtp-signin-ui
      @confirm=${this._confirm}
      defaultValue=${q(this._defaultValue)}
    ></dtp-signin-ui>`}async _confirm(e){globalThis.sessionStorage.setItem(`previousUrl`,window.location.href);try{globalThis.localStorage.setItem(fs,e.detail.data.webidOrIdp),await Ga({oidcIssuer:e.detail.data.webidOrIdp,redirectUrl:new URL(`/`,window.location.href).toString(),clientName:`ditup`,clientId:new URL(`/clientid.jsonld`,window.location.href).toJSON()})}catch(e){console.error(e),globalThis.localStorage.removeItem(fs)}}};Y([We()],ms.prototype,`_defaultValue`,void 0),ms=Y([U(`dtp-signin`)],ms);var hs=h`
  /*
https://github.com/tailwindlabs/tailwindcss/blob/a1f533a0e04ab7f94a31ced50843e638dc99ecac/packages/tailwindcss/preflight.css

MIT License

Copyright (c) Tailwind Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }

  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

  html,
  :host {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    tab-size: 4; /* 3 */
    font-family: --theme(
      --default-font-family,
      ui-sans-serif,
      system-ui,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ); /* 4 */
    font-feature-settings: --theme(
      --default-font-feature-settings,
      normal
    ); /* 5 */
    font-variation-settings: --theme(
      --default-font-variation-settings,
      normal
    ); /* 6 */
    -webkit-tap-highlight-color: transparent; /* 7 */
  }

  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
    border-top-width: 1px; /* 3 */
  }

  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  /*
  Remove the default font size and weight for headings.
*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }

  /*
  Add the correct font weight in Edge and Safari.
*/

  b,
  strong {
    font-weight: bolder;
  }

  /*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

  code,
  kbd,
  samp,
  pre {
    font-family: --theme(
      --default-mono-font-family,
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      'Liberation Mono',
      'Courier New',
      monospace
    ); /* 1 */
    font-feature-settings: --theme(
      --default-mono-font-feature-settings,
      normal
    ); /* 2 */
    font-variation-settings: --theme(
      --default-mono-font-variation-settings,
      normal
    ); /* 3 */
    font-size: 1em; /* 4 */
  }

  /*
  Add the correct font size in all browsers.
*/

  small {
    font-size: 80%;
  }

  /*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
    border-collapse: collapse; /* 3 */
  }

  /*
  Use the modern Firefox focus style for all focusable elements.
*/

  :-moz-focusring {
    outline: auto;
  }

  /*
  Add the correct vertical alignment in Chrome and Firefox.
*/

  progress {
    vertical-align: baseline;
  }

  /*
  Add the correct display in Chrome and Safari.
*/

  summary {
    display: list-item;
  }

  /*
  Make lists unstyled by default.
*/

  ol,
  ul,
  menu {
    list-style: none;
  }

  /*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    border-radius: 0; /* 2 */
    background-color: transparent; /* 3 */
    opacity: 1; /* 4 */
  }

  /*
  Restore default font weight.
*/

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  /*
  Restore indentation.
*/

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  /*
  Restore space after button.
*/

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  /*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

  ::placeholder {
    opacity: 1;
  }

  /*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(…)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
    (contain-intrinsic-size: 1px) /* Safari 17+ */ {
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }

  /*
  Prevent resizing textareas horizontally by default.
*/

  textarea {
    resize: vertical;
  }

  /*
  Remove the inner padding in Chrome and Safari on macOS.
*/

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

  ::-webkit-date-and-time-value {
    min-height: 1lh; /* 1 */
    text-align: inherit; /* 2 */
  }

  /*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  /*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  /*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }

  /*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /*
  Correct the inability to style the border radius in iOS Safari.
*/

  button,
  input:where([type='button'], [type='reset'], [type='submit']),
  ::file-selector-button {
    appearance: button;
  }

  /*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

  [hidden]:where(:not([hidden='until-found'])) {
    display: none !important;
  }
`,gs=class extends Me{render(){return R`
      <h1>ditup</h1>
      <p class="subtitle">do it together</p>
      <p class="tagline">turn ideas into collaborative action</p>
      <dtp-logo></dtp-logo>
      <a class="button primary" href="https://docs.ditup.org">learn more</a>
      <button class="button" @click=${this._startSignin}>sign in</button>

      <wa-dialog label="Sign in" id="signin-dialog">
        <dtp-signin></dtp-signin>
      </wa-dialog>
    `}_startSignin(){this._signinDialog&&(this._signinDialog.open=!0)}static{this.styles=[hs,h`
      #signin-dialog,
      ::part(dialog) {
        color: var(--color-text);
      }

      :host {
        /* margin: 0 auto; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        min-height: 100vh;
      }

      h1 {
        font-size: 2rem;
        color: var(--color-primary);
      }

      .subtitle,
      .tagline {
        font-size: 1.25rem;
      }

      .logo svg {
        height: 150px;
        fill: var(--color-text);
      }

      .logo svg #caps {
        fill: var(--color-primary);
      }

      .button {
        padding: 0.5rem 1rem;
        background-color: var(--color-surface);
        border-radius: var(--border-radius);
        font-size: 1.25rem;
        cursor: pointer;
      }

      .button:hover {
        filter: brightness(0.9);
      }

      .button.primary {
        background-color: var(--color-primary);
      }
    `]}};Y([Ke(`#signin-dialog`)],gs.prototype,`_signinDialog`,void 0),gs=Y([U(`dtp-landing`)],gs);var _s=c(o(((e,t)=>{t.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}))(),1),vs=class{constructor(e){this.cache=new Map,this.subscribers=new Map,this.inflight=new Set,this.redirectsTo=new Map,this.redirectsFrom=new Map,this.fetch=e}_key(e,t){return`${e}|${t}`}subscribe(e,t,n){let r=this._key(e,t.accept??``);this.subscribers.has(r)||this.subscribers.set(r,new Set),this.subscribers.get(r).add(n);let i=this.cache.get(r);return i?n(i):this.inflight.has(r)?n({loading:!0}):this._fetch(e,t.accept??``,r),()=>{this.subscribers.get(r)?.delete(n)}}async _fetch(e,t,n){this.inflight.add(n);let r=this.subscribers.get(n)||new Set;for(let e of r)e({loading:!0});try{let i=await this.fetch(e,{headers:{Accept:t}});if(!i.ok)throw Error(`HTTP ${i.status}: ${i.statusText}`);let a=i.headers.get(`content-type`)||`text/plain`,o;o=a.includes(`application/json`)||a.includes(`application/ld+json`)?await i.json():a.includes(`image/`)?await i.blob():await i.text();let s=i.url;s!==e&&(this.redirectsTo.set(e,s),this.redirectsFrom.has(s)||this.redirectsFrom.set(s,new Set),this.redirectsFrom.get(s).add(e));let c={loading:!1,finalUrl:s,headers:i.headers,contentType:a,data:o};this.cache.set(n,c),this.inflight.delete(n);for(let e of r)e(c)}catch(e){let t={loading:!1,error:e instanceof Error?e:Error(String(e))};this.cache.set(n,t),this.inflight.delete(n);for(let e of r)e(t)}}_findRelatedUrls(e){let t=new Set([e]),n=this.redirectsTo.get(e);n&&t.add(n);let r=this.redirectsFrom.get(e);if(r)for(let e of r)t.add(e);return t}invalidate(e,t){let n=this._findRelatedUrls(e);for(let e of n)if(t){let n=this._key(e,t.accept??``);this.cache.delete(n),this.subscribers.has(n)&&!this.inflight.has(n)&&this._fetch(e,t.accept??``,n)}else{let t=Array.from(this.cache.keys()).filter(t=>t.startsWith(e+`|`));for(let n of t){this.cache.delete(n);let[,t]=n.split(`|`);t&&this.subscribers.has(n)&&!this.inflight.has(n)&&this._fetch(e,t,n)}}}},ys=new vs(Wa),bs=new vs(globalThis.fetch.bind(globalThis)),xs=h`
  :host {
    --size: 3rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--wa-color-neutral-on-normal);
    font: inherit;
    font-size: calc(var(--size) * 0.4);
    vertical-align: middle;
    background-color: var(--wa-color-neutral-fill-normal);
    border-radius: var(--wa-border-radius-circle);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([shape='square']) {
    border-radius: 0;
  }

  :host([shape='rounded']) {
    border-radius: var(--wa-border-radius-m);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: inherit;
  }
`,Ss=class extends Qe{constructor(){super(...arguments),this.hasError=!1,this.image=``,this.label=``,this.initials=``,this.loading=`eager`,this.shape=`circle`}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new No)}connectedCallback(){if(super.connectedCallback(),this.didSSR){let e=this.shadowRoot?.querySelector?.(`img`);e&&e.complete&&e.naturalWidth<=0&&this.updateComplete.then(()=>{this.handleImageLoadError()})}}render(){let e=R`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `,t=R``;return t=this.initials?R`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:R`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,R` ${this.image&&!this.hasError?e:t} `}};Ss.css=xs,H([We()],Ss.prototype,`hasError`,2),H([W()],Ss.prototype,`image`,2),H([W()],Ss.prototype,`label`,2),H([W()],Ss.prototype,`initials`,2),H([W()],Ss.prototype,`loading`,2),H([W({reflect:!0})],Ss.prototype,`shape`,2),H([fo(`image`)],Ss.prototype,`handleImageChange`,1),Ss=H([U(`wa-avatar`)],Ss);var Cs=o((e=>{e.byteLength=c,e.toByteArray=u,e.fromByteArray=p;for(var t=[],n=[],r=typeof Uint8Array<`u`?Uint8Array:Array,i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,a=0,o=i.length;a<o;++a)t[a]=i[a],n[i.charCodeAt(a)]=a;n[45]=62,n[95]=63;function s(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function c(e){var t=s(e),n=t[0],r=t[1];return(n+r)*3/4-r}function l(e,t,n){return(t+n)*3/4-n}function u(e){var t,i=s(e),a=i[0],o=i[1],c=new r(l(e,a,o)),u=0,d=o>0?a-4:a,f;for(f=0;f<d;f+=4)t=n[e.charCodeAt(f)]<<18|n[e.charCodeAt(f+1)]<<12|n[e.charCodeAt(f+2)]<<6|n[e.charCodeAt(f+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=t&255;return o===2&&(t=n[e.charCodeAt(f)]<<2|n[e.charCodeAt(f+1)]>>4,c[u++]=t&255),o===1&&(t=n[e.charCodeAt(f)]<<10|n[e.charCodeAt(f+1)]<<4|n[e.charCodeAt(f+2)]>>2,c[u++]=t>>8&255,c[u++]=t&255),c}function d(e){return t[e>>18&63]+t[e>>12&63]+t[e>>6&63]+t[e&63]}function f(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(d(r));return i.join(``)}function p(e){for(var n,r=e.length,i=r%3,a=[],o=16383,s=0,c=r-i;s<c;s+=o)a.push(f(e,s,s+o>c?c:s+o));return i===1?(n=e[r-1],a.push(t[n>>2]+t[n<<4&63]+`==`)):i===2&&(n=(e[r-2]<<8)+e[r-1],a.push(t[n>>10]+t[n>>4&63]+t[n<<2&63]+`=`)),a.join(``)}})),ws=o((e=>{e.read=function(e,t,n,r,i){var a,o,s=i*8-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,p=e[t+d];for(d+=f,a=p&(1<<-u)-1,p>>=-u,u+=s;u>0;a=a*256+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;u>0;o=o*256+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else if(a===c)return o?NaN:(p?-1:1)*(1/0);else o+=2**r,a-=l;return(p?-1:1)*o*2**(a-r)},e.write=function(e,t,n,r,i,a){var o,s,c,l=a*8-i-1,u=(1<<l)-1,d=u>>1,f=i===23?2**-24-2**-77:0,p=r?0:a-1,m=r?1:-1,h=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=2**-o)<1&&(o--,c*=2),o+d>=1?t+=f/c:t+=f*2**(1-d),t*c>=2&&(o++,c/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*c-1)*2**i,o+=d):(s=t*2**(d-1)*2**i,o=0));i>=8;e[n+p]=s&255,p+=m,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;e[n+p]=o&255,p+=m,o/=256,l-=8);e[n+p-m]|=h*128}})),Ts=o((e=>{var t=Cs(),n=ws(),r=typeof Symbol==`function`&&typeof Symbol.for==`function`?Symbol.for(`nodejs.util.inspect.custom`):null;e.Buffer=s,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50;var i=2147483647;e.kMaxLength=i,s.TYPED_ARRAY_SUPPORT=a(),!s.TYPED_ARRAY_SUPPORT&&typeof console<`u`&&typeof console.error==`function`&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function o(e){if(e>i)throw RangeError(`The value "`+e+`" is invalid for option "size"`);let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,n){if(typeof e==`number`){if(typeof t==`string`)throw TypeError(`The "string" argument must be of type string. Received type number`);return d(e)}return c(e,t,n)}s.poolSize=8192;function c(e,t,n){if(typeof e==`string`)return f(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e);if(B(e,ArrayBuffer)||e&&B(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<`u`&&(B(e,SharedArrayBuffer)||e&&B(e.buffer,SharedArrayBuffer)))return h(e,t,n);if(typeof e==`number`)throw TypeError(`The "value" argument must not be of type number. Received type number`);let r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return s.from(r,t,n);let i=g(e);if(i)return i;if(typeof Symbol<`u`&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]==`function`)return s.from(e[Symbol.toPrimitive](`string`),t,n);throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e)}s.from=function(e,t,n){return c(e,t,n)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function l(e){if(typeof e!=`number`)throw TypeError(`"size" argument must be of type number`);if(e<0)throw RangeError(`The value "`+e+`" is invalid for option "size"`)}function u(e,t,n){return l(e),e<=0||t===void 0?o(e):typeof n==`string`?o(e).fill(t,n):o(e).fill(t)}s.alloc=function(e,t,n){return u(e,t,n)};function d(e){return l(e),o(e<0?0:_(e)|0)}s.allocUnsafe=function(e){return d(e)},s.allocUnsafeSlow=function(e){return d(e)};function f(e,t){if((typeof t!=`string`||t===``)&&(t=`utf8`),!s.isEncoding(t))throw TypeError(`Unknown encoding: `+t);let n=y(e,t)|0,r=o(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}function p(e){let t=e.length<0?0:_(e.length)|0,n=o(t);for(let r=0;r<t;r+=1)n[r]=e[r]&255;return n}function m(e){if(B(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return p(e)}function h(e,t,n){if(t<0||e.byteLength<t)throw RangeError(`"offset" is outside of buffer bounds`);if(e.byteLength<t+(n||0))throw RangeError(`"length" is outside of buffer bounds`);let r;return r=t===void 0&&n===void 0?new Uint8Array(e):n===void 0?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,s.prototype),r}function g(e){if(s.isBuffer(e)){let t=_(e.length)|0,n=o(t);return n.length===0||e.copy(n,0,0,t),n}if(e.length!==void 0)return typeof e.length!=`number`||ve(e.length)?o(0):p(e);if(e.type===`Buffer`&&Array.isArray(e.data))return p(e.data)}function _(e){if(e>=i)throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x`+i.toString(16)+` bytes`);return e|0}function v(e){return+e!=e&&(e=0),s.alloc(+e)}s.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==s.prototype},s.compare=function(e,t){if(B(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),B(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,a=Math.min(n,r);i<a;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},s.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`latin1`:case`binary`:case`base64`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw TypeError(`"list" argument must be an Array of Buffers`);if(e.length===0)return s.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let r=s.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){let t=e[n];if(B(t,Uint8Array))i+t.length>r.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else if(s.isBuffer(t))t.copy(r,i);else throw TypeError(`"list" argument must be an Array of Buffers`);i+=t.length}return r};function y(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||B(e,ArrayBuffer))return e.byteLength;if(typeof e!=`string`)throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type `+typeof e);let n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let i=!1;for(;;)switch(t){case`ascii`:case`latin1`:case`binary`:return n;case`utf8`:case`utf-8`:return he(e).length;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return n*2;case`hex`:return n>>>1;case`base64`:return z(e).length;default:if(i)return r?-1:he(e).length;t=(``+t).toLowerCase(),i=!0}}s.byteLength=y;function b(e,t,n){let r=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,t>>>=0,n<=t))return``;for(e||=`utf8`;;)switch(e){case`hex`:return P(this,t,n);case`utf8`:case`utf-8`:return A(this,t,n);case`ascii`:return M(this,t,n);case`latin1`:case`binary`:return N(this,t,n);case`base64`:return k(this,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return te(this,t,n);default:if(r)throw TypeError(`Unknown encoding: `+e);e=(e+``).toLowerCase(),r=!0}}s.prototype._isBuffer=!0;function x(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError(`Buffer size must be a multiple of 16-bits`);for(let t=0;t<e;t+=2)x(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError(`Buffer size must be a multiple of 32-bits`);for(let t=0;t<e;t+=4)x(this,t,t+3),x(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError(`Buffer size must be a multiple of 64-bits`);for(let t=0;t<e;t+=8)x(this,t,t+7),x(this,t+1,t+6),x(this,t+2,t+5),x(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return e===0?``:arguments.length===0?A(this,0,e):b.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError(`Argument must be a Buffer`);return this===e?!0:s.compare(this,e)===0},s.prototype.inspect=function(){let t=``,n=e.INSPECT_MAX_BYTES;return t=this.toString(`hex`,0,n).replace(/(.{2})/g,`$1 `).trim(),this.length>n&&(t+=` ... `),`<Buffer `+t+`>`},r&&(s.prototype[r]=s.prototype.inspect),s.prototype.compare=function(e,t,n,r,i){if(B(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type `+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),i===void 0&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError(`out of range index`);if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;let a=i-r,o=n-t,c=Math.min(a,o),l=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<c;++e)if(l[e]!==u[e]){a=l[e],o=u[e];break}return a<o?-1:+(o<a)};function S(e,t,n,r,i){if(e.length===0)return-1;if(typeof n==`string`?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,ve(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0)if(i)n=0;else return-1;if(typeof t==`string`&&(t=s.from(t,r)),s.isBuffer(t))return t.length===0?-1:C(e,t,n,r,i);if(typeof t==`number`)return t&=255,typeof Uint8Array.prototype.indexOf==`function`?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):C(e,[t],n,r,i);throw TypeError(`val must be string, number or Buffer`)}function C(e,t,n,r,i){let a=1,o=e.length,s=t.length;if(r!==void 0&&(r=String(r).toLowerCase(),r===`ucs2`||r===`ucs-2`||r===`utf16le`||r===`utf-16le`)){if(e.length<2||t.length<2)return-1;a=2,o/=2,s/=2,n/=2}function c(e,t){return a===1?e[t]:e.readUInt16BE(t*a)}let l;if(i){let r=-1;for(l=n;l<o;l++)if(c(e,l)===c(t,r===-1?0:l-r)){if(r===-1&&(r=l),l-r+1===s)return r*a}else r!==-1&&(l-=l-r),r=-1}else for(n+s>o&&(n=o-s),l=n;l>=0;l--){let n=!0;for(let r=0;r<s;r++)if(c(e,l+r)!==c(t,r)){n=!1;break}if(n)return l}return-1}s.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},s.prototype.indexOf=function(e,t,n){return S(this,e,t,n,!0)},s.prototype.lastIndexOf=function(e,t,n){return S(this,e,t,n,!1)};function w(e,t,n,r){n=Number(n)||0;let i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;let a=t.length;r>a/2&&(r=a/2);let o;for(o=0;o<r;++o){let r=parseInt(t.substr(o*2,2),16);if(ve(r))return o;e[n+o]=r}return o}function T(e,t,n,r){return _e(he(t,e.length-n),e,n,r)}function E(e,t,n,r){return _e(R(t),e,n,r)}function D(e,t,n,r){return _e(z(t),e,n,r)}function O(e,t,n,r){return _e(ge(t,e.length-n),e,n,r)}s.prototype.write=function(e,t,n,r){if(t===void 0)r=`utf8`,n=this.length,t=0;else if(n===void 0&&typeof t==`string`)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,r===void 0&&(r=`utf8`)):(r=n,n=void 0);else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);let i=this.length-t;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError(`Attempt to write outside buffer bounds`);r||=`utf8`;let a=!1;for(;;)switch(r){case`hex`:return w(this,e,t,n);case`utf8`:case`utf-8`:return T(this,e,t,n);case`ascii`:case`latin1`:case`binary`:return E(this,e,t,n);case`base64`:return D(this,e,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return O(this,e,t,n);default:if(a)throw TypeError(`Unknown encoding: `+r);r=(``+r).toLowerCase(),a=!0}},s.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}};function k(e,n,r){return n===0&&r===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(n,r))}function A(e,t,n){n=Math.min(e.length,n);let r=[],i=t;for(;i<n;){let t=e[i],a=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,s,c;switch(o){case 1:t<128&&(a=t);break;case 2:n=e[i+1],(n&192)==128&&(c=(t&31)<<6|n&63,c>127&&(a=c));break;case 3:n=e[i+1],r=e[i+2],(n&192)==128&&(r&192)==128&&(c=(t&15)<<12|(n&63)<<6|r&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:n=e[i+1],r=e[i+2],s=e[i+3],(n&192)==128&&(r&192)==128&&(s&192)==128&&(c=(t&15)<<18|(n&63)<<12|(r&63)<<6|s&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,o=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|a&1023),r.push(a),i+=o}return j(r)}var ee=4096;function j(e){let t=e.length;if(t<=ee)return String.fromCharCode.apply(String,e);let n=``,r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=ee));return n}function M(e,t,n){let r=``;n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]&127);return r}function N(e,t,n){let r=``;n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function P(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i=``;for(let r=t;r<n;++r)i+=V[e[r]];return i}function te(e,t,n){let r=e.slice(t,n),i=``;for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+r[e+1]*256);return i}s.prototype.slice=function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,s.prototype),r};function F(e,t,n){if(e%1!=0||e<0)throw RangeError(`offset is not uint`);if(e+t>n)throw RangeError(`Trying to access beyond buffer length`)}s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||F(e,t,this.length);let r=this[e],i=1,a=0;for(;++a<t&&(i*=256);)r+=this[e+a]*i;return r},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||F(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||F(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||F(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||F(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||F(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||F(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=ye(function(e){e>>>=0,de(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&fe(e,this.length-8);let r=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=ye(function(e){e>>>=0,de(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&fe(e,this.length-8);let r=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||F(e,t,this.length);let r=this[e],i=1,a=0;for(;++a<t&&(i*=256);)r+=this[e+a]*i;return i*=128,r>=i&&(r-=2**(8*t)),r},s.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||F(e,t,this.length);let r=t,i=1,a=this[e+--r];for(;r>0&&(i*=256);)a+=this[e+--r]*i;return i*=128,a>=i&&(a-=2**(8*t)),a},s.prototype.readInt8=function(e,t){return e>>>=0,t||F(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||F(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(e,t){e>>>=0,t||F(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||F(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||F(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=ye(function(e){e>>>=0,de(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&fe(e,this.length-8);let r=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),s.prototype.readBigInt64BE=ye(function(e){e>>>=0,de(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&fe(e,this.length-8);let r=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||F(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||F(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||F(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||F(e,8,this.length),n.read(this,e,!1,52,8)};function I(e,t,n,r,i,a){if(!s.isBuffer(e))throw TypeError(`"buffer" argument must be a Buffer instance`);if(t>i||t<a)throw RangeError(`"value" argument is out of bounds`);if(n+r>e.length)throw RangeError(`Index out of range`)}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=2**(8*n)-1;I(this,e,t,n,r,0)}let i=1,a=0;for(this[t]=e&255;++a<n&&(i*=256);)this[t+a]=e/i&255;return t+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=2**(8*n)-1;I(this,e,t,n,r,0)}let i=n-1,a=1;for(this[t+i]=e&255;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,1,255,0),this[t]=e&255,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ne(e,t,n,r,i){ue(t,r,i,e,n,7);let a=Number(t&BigInt(4294967295));e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function re(e,t,n,r,i){ue(t,r,i,e,n,7);let a=Number(t&BigInt(4294967295));e[n+7]=a,a>>=8,e[n+6]=a,a>>=8,e[n+5]=a,a>>=8,e[n+4]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}s.prototype.writeBigUInt64LE=ye(function(e,t=0){return ne(this,e,t,BigInt(0),BigInt(`0xffffffffffffffff`))}),s.prototype.writeBigUInt64BE=ye(function(e,t=0){return re(this,e,t,BigInt(0),BigInt(`0xffffffffffffffff`))}),s.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=2**(8*n-1);I(this,e,t,n,r-1,-r)}let i=0,a=1,o=0;for(this[t]=e&255;++i<n&&(a*=256);)e<0&&o===0&&this[t+i-1]!==0&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+n},s.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=2**(8*n-1);I(this,e,t,n,r-1,-r)}let i=n-1,a=1,o=0;for(this[t+i]=e&255;--i>=0&&(a*=256);)e<0&&o===0&&this[t+i+1]!==0&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+n},s.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},s.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},s.prototype.writeBigInt64LE=ye(function(e,t=0){return ne(this,e,t,-BigInt(`0x8000000000000000`),BigInt(`0x7fffffffffffffff`))}),s.prototype.writeBigInt64BE=ye(function(e,t=0){return re(this,e,t,-BigInt(`0x8000000000000000`),BigInt(`0x7fffffffffffffff`))});function L(e,t,n,r,i,a){if(n+r>e.length||n<0)throw RangeError(`Index out of range`)}function ie(e,t,r,i,a){return t=+t,r>>>=0,a||L(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}s.prototype.writeFloatLE=function(e,t,n){return ie(this,e,t,!0,n)},s.prototype.writeFloatBE=function(e,t,n){return ie(this,e,t,!1,n)};function ae(e,t,r,i,a){return t=+t,r>>>=0,a||L(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}s.prototype.writeDoubleLE=function(e,t,n){return ae(this,e,t,!0,n)},s.prototype.writeDoubleBE=function(e,t,n){return ae(this,e,t,!1,n)},s.prototype.copy=function(e,t,n,r){if(!s.isBuffer(e))throw TypeError(`argument should be a Buffer`);if(n||=0,!r&&r!==0&&(r=this.length),t>=e.length&&(t=e.length),t||=0,r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(t<0)throw RangeError(`targetStart out of bounds`);if(n<0||n>=this.length)throw RangeError(`Index out of range`);if(r<0)throw RangeError(`sourceEnd out of bounds`);r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let i=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin==`function`?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},s.prototype.fill=function(e,t,n,r){if(typeof e==`string`){if(typeof t==`string`?(r=t,t=0,n=this.length):typeof n==`string`&&(r=n,n=this.length),r!==void 0&&typeof r!=`string`)throw TypeError(`encoding must be a string`);if(typeof r==`string`&&!s.isEncoding(r))throw TypeError(`Unknown encoding: `+r);if(e.length===1){let t=e.charCodeAt(0);(r===`utf8`&&t<128||r===`latin1`)&&(e=t)}}else typeof e==`number`?e&=255:typeof e==`boolean`&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError(`Out of range index`);if(n<=t)return this;t>>>=0,n=n===void 0?this.length:n>>>0,e||=0;let i;if(typeof e==`number`)for(i=t;i<n;++i)this[i]=e;else{let a=s.isBuffer(e)?e:s.from(e,r),o=a.length;if(o===0)throw TypeError(`The value "`+e+`" is invalid for argument "value"`);for(i=0;i<n-t;++i)this[i+t]=a[i%o]}return this};var oe={};function se(e,t,n){oe[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}se(`ERR_BUFFER_OUT_OF_BOUNDS`,function(e){return e?`${e} is outside of buffer bounds`:`Attempt to access memory outside buffer bounds`},RangeError),se(`ERR_INVALID_ARG_TYPE`,function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),se(`ERR_OUT_OF_RANGE`,function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=ce(String(n)):typeof n==`bigint`&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=ce(i)),i+=`n`),r+=` It must be ${t}. Received ${i}`,r},RangeError);function ce(e){let t=``,n=e.length,r=+(e[0]===`-`);for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function le(e,t,n){de(t,`offset`),(e[t]===void 0||e[t+n]===void 0)&&fe(t,e.length-(n+1))}function ue(e,t,n,r,i,a){if(e>n||e<t){let r=typeof t==`bigint`?`n`:``,i;throw i=a>3?t===0||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${(a+1)*8}${r}`:`>= -(2${r} ** ${(a+1)*8-1}${r}) and < 2 ** ${(a+1)*8-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new oe.ERR_OUT_OF_RANGE(`value`,i,e)}le(r,i,a)}function de(e,t){if(typeof e!=`number`)throw new oe.ERR_INVALID_ARG_TYPE(t,`number`,e)}function fe(e,t,n){throw Math.floor(e)===e?t<0?new oe.ERR_BUFFER_OUT_OF_BOUNDS:new oe.ERR_OUT_OF_RANGE(n||`offset`,`>= ${+!!n} and <= ${t}`,e):(de(e,n),new oe.ERR_OUT_OF_RANGE(n||`offset`,`an integer`,e))}var pe=/[^+/0-9A-Za-z-_]/g;function me(e){if(e=e.split(`=`)[0],e=e.trim().replace(pe,``),e.length<2)return``;for(;e.length%4!=0;)e+=`=`;return e}function he(e,t){t||=1/0;let n,r=e.length,i=null,a=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}else if(o+1===r){(t-=3)>-1&&a.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,n<128){if(--t<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw Error(`Invalid code point`)}return a}function R(e){let t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n)&255);return t}function ge(e,t){let n,r,i,a=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,a.push(i),a.push(r);return a}function z(e){return t.toByteArray(me(e))}function _e(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function B(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function ve(e){return e!==e}var V=(function(){let e=`0123456789abcdef`,t=Array(256);for(let n=0;n<16;++n){let r=n*16;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t})();function ye(e){return typeof BigInt>`u`?be:e}function be(){throw Error(`BigInt not supported`)}})),Es=`http://www.w3.org/1999/02/22-rdf-syntax-ns#`,Ds=`http://www.w3.org/2001/XMLSchema#`,Os=`http://www.w3.org/2000/10/swap/`,ks={xsd:{decimal:`${Ds}decimal`,boolean:`${Ds}boolean`,double:`${Ds}double`,integer:`${Ds}integer`,string:`${Ds}string`},rdf:{type:`${Es}type`,nil:`${Es}nil`,first:`${Es}first`,rest:`${Es}rest`,langString:`${Es}langString`},owl:{sameAs:`http://www.w3.org/2002/07/owl#sameAs`},r:{forSome:`${Os}reify#forSome`,forAll:`${Os}reify#forAll`},log:{implies:`${Os}log#implies`,isImpliedBy:`${Os}log#isImpliedBy`}},As=Ts(),{xsd:js}=ks,Ms=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g,Ns={"\\":`\\`,"'":`'`,'"':`"`,n:`
`,r:`\r`,t:`	`,f:`\f`,b:`\b`,_:`_`,"~":`~`,".":`.`,"-":`-`,"!":`!`,$:`$`,"&":`&`,"(":`(`,")":`)`,"*":`*`,"+":`+`,",":`,`,";":`;`,"=":`=`,"/":`/`,"?":`?`,"#":`#`,"@":`@`,"%":`%`},Ps=/[\x00-\x20<>\\"\{\}\|\^\`]/,Fs={_iri:!0,_unescapedIri:!0,_simpleQuotedString:!0,_langcode:!0,_blank:!0,_newline:!0,_comment:!0,_whitespace:!0,_endOfFile:!0},Is=/$0^/,Ls=class{constructor(e){if(this._iri=/^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/,this._unescapedIri=/^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/,this._simpleQuotedString=/^"([^"\\\r\n]*)"(?=[^"])/,this._simpleApostropheString=/^'([^'\\\r\n]*)'(?=[^'])/,this._langcode=/^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i,this._prefix=/^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/,this._prefixed=/^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/,this._variable=/^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/,this._blank=/^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/,this._number=/^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/,this._boolean=/^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/,this._keyword=/^@[a-z]+(?=[\s#<:])/i,this._sparqlKeyword=/^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i,this._shortPredicates=/^a(?=[\s#()\[\]\{\}"'<>])/,this._newline=/^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/,this._comment=/#([^\n\r]*)/,this._whitespace=/^[ \t]+/,this._endOfFile=/^(?:#[^\n\r]*)?$/,e||={},this._isImpliedBy=e.isImpliedBy,this._lineMode=!!e.lineMode){this._n3Mode=!1;for(let e in this)!(e in Fs)&&this[e]instanceof RegExp&&(this[e]=Is)}else this._n3Mode=e.n3!==!1;this.comments=!!e.comments,this._literalClosingPos=0}_tokenizeToEnd(e,t){let n=this._input,r=n.length;for(;;){let e,o;for(;e=this._newline.exec(n);)this.comments&&(o=this._comment.exec(e[0]))&&i(`comment`,o[1],``,this._line,e[0].length),n=n.substr(e[0].length,n.length),r=n.length,this._line++;if(!e&&(e=this._whitespace.exec(n))&&(n=n.substr(e[0].length,n.length)),this._endOfFile.test(n))return t&&(this.comments&&(o=this._comment.exec(n))&&i(`comment`,o[1],``,this._line,n.length),n=null,i(`eof`,``,``,this._line,0)),this._input=n;let s=this._line,c=n[0],l=``,u=``,d=``,f=null,p=0,m=!1;switch(c){case`^`:if(n.length<3)break;if(n[1]===`^`){if(this._previousMarker=`^^`,n=n.substr(2),n[0]!==`<`){m=!0;break}}else{this._n3Mode&&(p=1,l=`^`);break}case`<`:if(f=this._unescapedIri.exec(n))l=`IRI`,u=f[1];else if(f=this._iri.exec(n)){if(u=this._unescape(f[1]),u===null||Ps.test(u))return a(this);l=`IRI`}else n.length>1&&n[1]===`<`?(l=`<<`,p=2):this._n3Mode&&n.length>1&&n[1]===`=`&&(p=2,this._isImpliedBy?(l=`abbreviation`,u=`<`):(l=`inverse`,u=`>`));break;case`>`:n.length>1&&n[1]===`>`&&(l=`>>`,p=2);break;case`_`:((f=this._blank.exec(n))||t&&(f=this._blank.exec(`${n} `)))&&(l=`blank`,d=`_`,u=f[1]);break;case`"`:if(f=this._simpleQuotedString.exec(n))u=f[1];else if({value:u,matchLength:p}=this._parseLiteral(n),u===null)return a(this);(f!==null||p!==0)&&(l=`literal`,this._literalClosingPos=0);break;case`'`:if(!this._lineMode){if(f=this._simpleApostropheString.exec(n))u=f[1];else if({value:u,matchLength:p}=this._parseLiteral(n),u===null)return a(this);(f!==null||p!==0)&&(l=`literal`,this._literalClosingPos=0)}break;case`?`:this._n3Mode&&(f=this._variable.exec(n))&&(l=`var`,u=f[0]);break;case`@`:this._previousMarker===`literal`&&(f=this._langcode.exec(n))?(l=`langcode`,u=f[1]):(f=this._keyword.exec(n))&&(l=f[0]);break;case`.`:if(n.length===1?t:n[1]<`0`||n[1]>`9`){l=`.`,p=1;break}case`0`:case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:case`+`:case`-`:(f=this._number.exec(n)||t&&(f=this._number.exec(`${n} `)))&&(l=`literal`,u=f[0],d=typeof f[1]==`string`?js.double:typeof f[2]==`string`?js.decimal:js.integer);break;case`B`:case`b`:case`p`:case`P`:case`G`:case`g`:(f=this._sparqlKeyword.exec(n))?l=f[0].toUpperCase():m=!0;break;case`f`:case`t`:(f=this._boolean.exec(n))?(l=`literal`,u=f[0],d=js.boolean):m=!0;break;case`a`:(f=this._shortPredicates.exec(n))?(l=`abbreviation`,u=`a`):m=!0;break;case`=`:this._n3Mode&&n.length>1&&(l=`abbreviation`,n[1]===`>`?(p=2,u=`>`):(p=1,u=`=`));break;case`!`:if(!this._n3Mode)break;case`,`:case`;`:case`[`:case`]`:case`(`:case`)`:case`}`:this._lineMode||(p=1,l=c);break;case`{`:!this._lineMode&&n.length>=2&&(n[1]===`|`?(l=`{|`,p=2):(l=c,p=1));break;case`|`:n.length>=2&&n[1]===`}`&&(l=`|}`,p=2);break;default:m=!0}if(m&&((this._previousMarker===`@prefix`||this._previousMarker===`PREFIX`)&&(f=this._prefix.exec(n))?(l=`prefix`,u=f[1]||``):((f=this._prefixed.exec(n))||t&&(f=this._prefixed.exec(`${n} `)))&&(l=`prefixed`,d=f[1]||``,u=this._unescape(f[2]))),this._previousMarker===`^^`)switch(l){case`prefixed`:l=`type`;break;case`IRI`:l=`typeIRI`;break;default:l=``}if(!l)return t||!/^'''|^"""/.test(n)&&/\n|\r/.test(n)?a(this):this._input=n;let h=p||f[0].length,g=i(l,u,d,s,h);this.previousToken=g,this._previousMarker=l,n=n.substr(h,n.length)}function i(t,i,a,o,s){let c=n?r-n.length:r,l={type:t,value:i,prefix:a,line:o,start:c,end:c+s};return e(null,l),l}function a(t){e(t._syntaxError(/^\S*/.exec(n)[0]))}}_unescape(e){let t=!1,n=e.replace(Ms,(e,n,r,i)=>{if(typeof n==`string`)return String.fromCharCode(Number.parseInt(n,16));if(typeof r==`string`){let e=Number.parseInt(r,16);return e<=65535?String.fromCharCode(Number.parseInt(r,16)):String.fromCharCode(55296+((e-=65536)>>10),56320+(e&1023))}return i in Ns?Ns[i]:(t=!0,``)});return t?null:n}_parseLiteral(e){if(e.length>=3){let t=e.match(/^(?:"""|"|'''|'|)/)[0],n=t.length,r=Math.max(this._literalClosingPos,n);for(;(r=e.indexOf(t,r))>0;){let t=0;for(;e[r-t-1]===`\\`;)t++;if(t%2==0){let t=e.substring(n,r),i=t.split(/\r\n|\r|\n/).length-1,a=r+n;if(n===1&&i!==0||n===3&&this._lineMode)break;return this._line+=i,{value:this._unescape(t),matchLength:a}}r++}this._literalClosingPos=e.length-n+1}return{value:``,matchLength:0}}_syntaxError(e){this._input=null;let t=Error(`Unexpected "${e}" on line ${this._line}.`);return t.context={token:void 0,line:this._line,previousToken:this.previousToken},t}_readStartingBom(e){return e.startsWith(`﻿`)?e.substr(1):e}tokenize(e,t){if(this._line=1,typeof e==`string`)if(this._input=this._readStartingBom(e),typeof t==`function`)queueMicrotask(()=>this._tokenizeToEnd(t,!0));else{let e=[],t;if(this._tokenizeToEnd((n,r)=>n?t=n:e.push(r),!0),t)throw t;return e}else this._pendingBuffer=null,typeof e.setEncoding==`function`&&e.setEncoding(`utf8`),e.on(`data`,e=>{this._input!==null&&e.length!==0&&(this._pendingBuffer&&=(e=As.Buffer.concat([this._pendingBuffer,e]),null),e[e.length-1]&128?this._pendingBuffer=e:(this._input===void 0?this._input=this._readStartingBom(typeof e==`string`?e:e.toString()):this._input+=e,this._tokenizeToEnd(t,!1)))}),e.on(`end`,()=>{typeof this._input==`string`&&this._tokenizeToEnd(t,!0)}),e.on(`error`,t)}},{rdf:Rs,xsd:zs}=ks,Bs,Vs=0,Hs={namedNode:Zs,blankNode:Qs,variable:ec,literal:$s,defaultGraph:tc,quad:nc,triple:nc,fromTerm:rc,fromQuad:ic},Us=class e{constructor(e){this.id=e}get value(){return this.id}equals(t){return t instanceof e?this.id===t.id:!!t&&this.termType===t.termType&&this.value===t.value}hashCode(){return 0}toJSON(){return{termType:this.termType,value:this.value}}},Ws=class extends Us{get termType(){return`NamedNode`}},Gs=class e extends Us{get termType(){return`Literal`}get value(){return this.id.substring(1,this.id.lastIndexOf(`"`))}get language(){let e=this.id,t=e.lastIndexOf(`"`)+1;return t<e.length&&e[t++]===`@`?e.substr(t).toLowerCase():``}get datatype(){return new Ws(this.datatypeString)}get datatypeString(){let e=this.id,t=e.lastIndexOf(`"`)+1,n=t<e.length?e[t]:``;return n===`^`?e.substr(t+2):n===`@`?Rs.langString:zs.string}equals(t){return t instanceof e?this.id===t.id:!!t&&!!t.datatype&&this.termType===t.termType&&this.value===t.value&&this.language===t.language&&this.datatype.value===t.datatype.value}toJSON(){return{termType:this.termType,value:this.value,language:this.language,datatype:{termType:`NamedNode`,value:this.datatypeString}}}},Ks=class extends Us{constructor(e){super(`_:${e}`)}get termType(){return`BlankNode`}get value(){return this.id.substr(2)}},qs=class extends Us{constructor(e){super(`?${e}`)}get termType(){return`Variable`}get value(){return this.id.substr(1)}};Bs=new class extends Us{constructor(){return super(``),Bs||this}get termType(){return`DefaultGraph`}equals(e){return this===e||!!e&&this.termType===e.termType}};function Js(e,t,n){if(t||=Hs,!e)return t.defaultGraph();switch(e[0]){case`?`:return t.variable(e.substr(1));case`_`:return t.blankNode(e.substr(2));case`"`:if(t===Hs)return new Gs(e);if(e[e.length-1]===`"`)return t.literal(e.substr(1,e.length-2));let r=e.lastIndexOf(`"`,e.length-1);return t.literal(e.substr(1,r-1),e[r+1]===`@`?e.substr(r+2):t.namedNode(e.substr(r+3)));case`[`:e=JSON.parse(e);break;default:if(!n||!Array.isArray(e))return t.namedNode(e)}return t.quad(Js(e[0],t,!0),Js(e[1],t,!0),Js(e[2],t,!0),e[3]&&Js(e[3],t,!0))}function Ys(e,t){if(typeof e==`string`)return e;if(e instanceof Us&&e.termType!==`Quad`)return e.id;if(!e)return Bs.id;switch(e.termType){case`NamedNode`:return e.value;case`BlankNode`:return`_:${e.value}`;case`Variable`:return`?${e.value}`;case`DefaultGraph`:return``;case`Literal`:return`"${e.value}"${e.language?`@${e.language}`:e.datatype&&e.datatype.value!==zs.string?`^^${e.datatype.value}`:``}`;case`Quad`:let n=[Ys(e.subject,!0),Ys(e.predicate,!0),Ys(e.object,!0)];return e.graph&&e.graph.termType!==`DefaultGraph`&&n.push(Ys(e.graph,!0)),t?n:JSON.stringify(n);default:throw Error(`Unexpected termType: ${e.termType}`)}}var Xs=class extends Us{constructor(e,t,n,r){super(``),this._subject=e,this._predicate=t,this._object=n,this._graph=r||Bs}get termType(){return`Quad`}get subject(){return this._subject}get predicate(){return this._predicate}get object(){return this._object}get graph(){return this._graph}toJSON(){return{termType:this.termType,subject:this._subject.toJSON(),predicate:this._predicate.toJSON(),object:this._object.toJSON(),graph:this._graph.toJSON()}}equals(e){return!!e&&this._subject.equals(e.subject)&&this._predicate.equals(e.predicate)&&this._object.equals(e.object)&&this._graph.equals(e.graph)}};function Zs(e){return new Ws(e)}function Qs(e){return new Ks(e||`n3-${Vs++}`)}function $s(e,t){if(typeof t==`string`)return new Gs(`"${e}"@${t.toLowerCase()}`);let n=t?t.value:``;return n===``&&(typeof e==`boolean`?n=zs.boolean:typeof e==`number`&&(Number.isFinite(e)?n=Number.isInteger(e)?zs.integer:zs.double:(n=zs.double,Number.isNaN(e)||(e=e>0?`INF`:`-INF`)))),n===``||n===zs.string?new Gs(`"${e}"`):new Gs(`"${e}"^^${n}`)}function ec(e){return new qs(e)}function tc(){return Bs}function nc(e,t,n,r){return new Xs(e,t,n,r)}function rc(e){if(e instanceof Us)return e;switch(e.termType){case`NamedNode`:return Zs(e.value);case`BlankNode`:return Qs(e.value);case`Variable`:return ec(e.value);case`DefaultGraph`:return Bs;case`Literal`:return $s(e.value,e.language||e.datatype);case`Quad`:return ic(e);default:throw Error(`Unexpected termType: ${e.termType}`)}}function ic(e){if(e instanceof Xs)return e;if(e.termType!==`Quad`)throw Error(`Unexpected termType: ${e.termType}`);return nc(rc(e.subject),rc(e.predicate),rc(e.object),rc(e.graph))}var ac=0,oc=class{constructor(e){this._contextStack=[],this._graph=null,e||={},this._setBase(e.baseIRI),e.factory&&cc(this,e.factory);let t=typeof e.format==`string`?e.format.match(/\w*$/)[0].toLowerCase():``,n=/turtle/.test(t),r=/trig/.test(t),i=/triple/.test(t),a=/quad/.test(t),o=this._n3Mode=/n3/.test(t),s=i||a;(this._supportsNamedGraphs=!(n||o))||(this._readPredicateOrNamedGraph=this._readPredicate),this._supportsQuads=!(n||r||i||o),this._isImpliedBy=e.isImpliedBy,this._supportsRDFStar=t===``||/star|\*$/.test(t),s&&(this._resolveRelativeIRI=e=>null),this._blankNodePrefix=typeof e.blankNodePrefix==`string`?e.blankNodePrefix.replace(/^(?!_:)/,`_:`):``,this._lexer=e.lexer||new Ls({lineMode:s,n3:o,isImpliedBy:this._isImpliedBy}),this._explicitQuantifiers=!!e.explicitQuantifiers}static _resetBlankNodePrefix(){ac=0}_setBase(e){if(!e)this._base=``,this._basePath=``;else{let t=e.indexOf(`#`);t>=0&&(e=e.substr(0,t)),this._base=e,this._basePath=e.indexOf(`/`)<0?e:e.replace(/[^\/?]*(?:\?.*)?$/,``),e=e.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i),this._baseRoot=e[0],this._baseScheme=e[1]}}_saveContext(e,t,n,r,i){let a=this._n3Mode;this._contextStack.push({type:e,subject:n,predicate:r,object:i,graph:t,inverse:a?this._inversePredicate:!1,blankPrefix:a?this._prefixes._:``,quantified:a?this._quantified:null}),a&&(this._inversePredicate=!1,this._prefixes._=this._graph?`${this._graph.value}.`:`.`,this._quantified=Object.create(this._quantified))}_restoreContext(e,t){let n=this._contextStack.pop();if(!n||n.type!==e)return this._error(`Unexpected ${t.type}`,t);this._subject=n.subject,this._predicate=n.predicate,this._object=n.object,this._graph=n.graph,this._n3Mode&&(this._inversePredicate=n.inverse,this._prefixes._=n.blankPrefix,this._quantified=n.quantified)}_readInTopContext(e){switch(e.type){case`eof`:return this._graph===null?(delete this._prefixes._,this._callback(null,null,this._prefixes)):this._error(`Unclosed graph`,e);case`PREFIX`:this._sparqlStyle=!0;case`@prefix`:return this._readPrefix;case`BASE`:this._sparqlStyle=!0;case`@base`:return this._readBaseIRI;case`{`:if(this._supportsNamedGraphs)return this._graph=``,this._subject=null,this._readSubject;case`GRAPH`:if(this._supportsNamedGraphs)return this._readNamedGraphLabel;default:return this._readSubject(e)}}_readEntity(e,t){let n;switch(e.type){case`IRI`:case`typeIRI`:let t=this._resolveIRI(e.value);if(t===null)return this._error(`Invalid IRI`,e);n=this._factory.namedNode(t);break;case`type`:case`prefixed`:let r=this._prefixes[e.prefix];if(r===void 0)return this._error(`Undefined prefix "${e.prefix}:"`,e);n=this._factory.namedNode(r+e.value);break;case`blank`:n=this._factory.blankNode(this._prefixes[e.prefix]+e.value);break;case`var`:n=this._factory.variable(e.value.substr(1));break;default:return this._error(`Expected entity but got ${e.type}`,e)}return!t&&this._n3Mode&&n.id in this._quantified&&(n=this._quantified[n.id]),n}_readSubject(e){switch(this._predicate=null,e.type){case`[`:return this._saveContext(`blank`,this._graph,this._subject=this._factory.blankNode(),null,null),this._readBlankNodeHead;case`(`:return this._saveContext(`list`,this._graph,this.RDF_NIL,null,null),this._subject=null,this._readListItem;case`{`:return this._n3Mode?(this._saveContext(`formula`,this._graph,this._graph=this._factory.blankNode(),null,null),this._readSubject):this._error(`Unexpected graph`,e);case`}`:return this._readPunctuation(e);case`@forSome`:return this._n3Mode?(this._subject=null,this._predicate=this.N3_FORSOME,this._quantifier=`blankNode`,this._readQuantifierList):this._error(`Unexpected "@forSome"`,e);case`@forAll`:return this._n3Mode?(this._subject=null,this._predicate=this.N3_FORALL,this._quantifier=`variable`,this._readQuantifierList):this._error(`Unexpected "@forAll"`,e);case`literal`:if(!this._n3Mode)return this._error(`Unexpected literal`,e);if(e.prefix.length===0)return this._literalValue=e.value,this._completeSubjectLiteral;this._subject=this._factory.literal(e.value,this._factory.namedNode(e.prefix));break;case`<<`:return this._supportsRDFStar?(this._saveContext(`<<`,this._graph,null,null,null),this._graph=null,this._readSubject):this._error(`Unexpected RDF-star syntax`,e);default:if((this._subject=this._readEntity(e))===void 0)return;if(this._n3Mode)return this._getPathReader(this._readPredicateOrNamedGraph)}return this._readPredicateOrNamedGraph}_readPredicate(e){let t=e.type;switch(t){case`inverse`:this._inversePredicate=!0;case`abbreviation`:this._predicate=this.ABBREVIATIONS[e.value];break;case`.`:case`]`:case`}`:return this._predicate===null?this._error(`Unexpected ${t}`,e):(this._subject=null,t===`]`?this._readBlankNodeTail(e):this._readPunctuation(e));case`;`:return this._predicate===null?this._error(`Expected predicate but got ;`,e):this._readPredicate;case`[`:if(this._n3Mode)return this._saveContext(`blank`,this._graph,this._subject,this._subject=this._factory.blankNode(),null),this._readBlankNodeHead;case`blank`:if(!this._n3Mode)return this._error(`Disallowed blank node as predicate`,e);default:if((this._predicate=this._readEntity(e))===void 0)return}return this._readObject}_readObject(e){switch(e.type){case`literal`:if(e.prefix.length===0)return this._literalValue=e.value,this._readDataTypeOrLang;this._object=this._factory.literal(e.value,this._factory.namedNode(e.prefix));break;case`[`:return this._saveContext(`blank`,this._graph,this._subject,this._predicate,this._subject=this._factory.blankNode()),this._readBlankNodeHead;case`(`:return this._saveContext(`list`,this._graph,this._subject,this._predicate,this.RDF_NIL),this._subject=null,this._readListItem;case`{`:return this._n3Mode?(this._saveContext(`formula`,this._graph,this._subject,this._predicate,this._graph=this._factory.blankNode()),this._readSubject):this._error(`Unexpected graph`,e);case`<<`:return this._supportsRDFStar?(this._saveContext(`<<`,this._graph,this._subject,this._predicate,null),this._graph=null,this._readSubject):this._error(`Unexpected RDF-star syntax`,e);default:if((this._object=this._readEntity(e))===void 0)return;if(this._n3Mode)return this._getPathReader(this._getContextEndReader())}return this._getContextEndReader()}_readPredicateOrNamedGraph(e){return e.type===`{`?this._readGraph(e):this._readPredicate(e)}_readGraph(e){return e.type===`{`?(this._graph=this._subject,this._subject=null,this._readSubject):this._error(`Expected graph but got ${e.type}`,e)}_readBlankNodeHead(e){return e.type===`]`?(this._subject=null,this._readBlankNodeTail(e)):(this._predicate=null,this._readPredicate(e))}_readBlankNodeTail(e){if(e.type!==`]`)return this._readBlankNodePunctuation(e);this._subject!==null&&this._emit(this._subject,this._predicate,this._object,this._graph);let t=this._predicate===null;return this._restoreContext(`blank`,e),this._object===null?this._predicate===null?t?this._readPredicateOrNamedGraph:this._readPredicateAfterBlank:this._readObject:this._getContextEndReader()}_readPredicateAfterBlank(e){switch(e.type){case`.`:case`}`:return this._subject=null,this._readPunctuation(e);default:return this._readPredicate(e)}}_readListItem(e){let t=null,n=null,r=this._readListItem,i=this._subject,a=this._contextStack,o=a[a.length-1];switch(e.type){case`[`:this._saveContext(`blank`,this._graph,n=this._factory.blankNode(),this.RDF_FIRST,this._subject=t=this._factory.blankNode()),r=this._readBlankNodeHead;break;case`(`:this._saveContext(`list`,this._graph,n=this._factory.blankNode(),this.RDF_FIRST,this.RDF_NIL),this._subject=null;break;case`)`:if(this._restoreContext(`list`,e),a.length!==0&&a[a.length-1].type===`list`&&this._emit(this._subject,this._predicate,this._object,this._graph),this._predicate===null){if(r=this._readPredicate,this._subject===this.RDF_NIL)return r}else if(r=this._getContextEndReader(),this._object===this.RDF_NIL)return r;n=this.RDF_NIL;break;case`literal`:e.prefix.length===0?(this._literalValue=e.value,r=this._readListItemDataTypeOrLang):(t=this._factory.literal(e.value,this._factory.namedNode(e.prefix)),r=this._getContextEndReader());break;case`{`:return this._n3Mode?(this._saveContext(`formula`,this._graph,this._subject,this._predicate,this._graph=this._factory.blankNode()),this._readSubject):this._error(`Unexpected graph`,e);default:if((t=this._readEntity(e))===void 0)return}if(n===null&&(this._subject=n=this._factory.blankNode()),i===null?o.predicate===null?o.subject=n:o.object=n:this._emit(i,this.RDF_REST,n,this._graph),t!==null){if(this._n3Mode&&(e.type===`IRI`||e.type===`prefixed`))return this._saveContext(`item`,this._graph,n,this.RDF_FIRST,t),this._subject=t,this._predicate=null,this._getPathReader(this._readListItem);this._emit(n,this.RDF_FIRST,t,this._graph)}return r}_readDataTypeOrLang(e){return this._completeObjectLiteral(e,!1)}_readListItemDataTypeOrLang(e){return this._completeObjectLiteral(e,!0)}_completeLiteral(e){let t=this._factory.literal(this._literalValue);switch(e.type){case`type`:case`typeIRI`:let n=this._readEntity(e);if(n===void 0)return;t=this._factory.literal(this._literalValue,n),e=null;break;case`langcode`:t=this._factory.literal(this._literalValue,e.value),e=null;break}return{token:e,literal:t}}_completeSubjectLiteral(e){return this._subject=this._completeLiteral(e).literal,this._readPredicateOrNamedGraph}_completeObjectLiteral(e,t){let n=this._completeLiteral(e);if(n)return this._object=n.literal,t&&this._emit(this._subject,this.RDF_FIRST,this._object,this._graph),n.token===null?this._getContextEndReader():(this._readCallback=this._getContextEndReader(),this._readCallback(n.token))}_readFormulaTail(e){return e.type===`}`?(this._subject!==null&&this._emit(this._subject,this._predicate,this._object,this._graph),this._restoreContext(`formula`,e),this._object===null?this._readPredicate:this._getContextEndReader()):this._readPunctuation(e)}_readPunctuation(e){let t,n=this._graph,r=this._subject,i=this._inversePredicate;switch(e.type){case`}`:if(this._graph===null)return this._error(`Unexpected graph closing`,e);if(this._n3Mode)return this._readFormulaTail(e);this._graph=null;case`.`:this._subject=null,t=this._contextStack.length?this._readSubject:this._readInTopContext,i&&(this._inversePredicate=!1);break;case`;`:t=this._readPredicate;break;case`,`:t=this._readObject;break;case`{|`:if(!this._supportsRDFStar)return this._error(`Unexpected RDF-star syntax`,e);let a=this._predicate,o=this._object;this._subject=this._factory.quad(r,a,o,this.DEFAULTGRAPH),t=this._readPredicate;break;case`|}`:if(this._subject.termType!==`Quad`)return this._error(`Unexpected asserted triple closing`,e);this._subject=null,t=this._readPunctuation;break;default:if(this._supportsQuads&&this._graph===null&&(n=this._readEntity(e))!==void 0){t=this._readQuadPunctuation;break}return this._error(`Expected punctuation to follow "${this._object.id}"`,e)}if(r!==null){let e=this._predicate,t=this._object;i?this._emit(t,e,r,n):this._emit(r,e,t,n)}return t}_readBlankNodePunctuation(e){let t;switch(e.type){case`;`:t=this._readPredicate;break;case`,`:t=this._readObject;break;default:return this._error(`Expected punctuation to follow "${this._object.id}"`,e)}return this._emit(this._subject,this._predicate,this._object,this._graph),t}_readQuadPunctuation(e){return e.type===`.`?this._readInTopContext:this._error(`Expected dot to follow quad`,e)}_readPrefix(e){return e.type===`prefix`?(this._prefix=e.value,this._readPrefixIRI):this._error(`Expected prefix to follow @prefix`,e)}_readPrefixIRI(e){if(e.type!==`IRI`)return this._error(`Expected IRI to follow prefix "${this._prefix}:"`,e);let t=this._readEntity(e);return this._prefixes[this._prefix]=t.value,this._prefixCallback(this._prefix,t),this._readDeclarationPunctuation}_readBaseIRI(e){let t=e.type===`IRI`&&this._resolveIRI(e.value);return t?(this._setBase(t),this._readDeclarationPunctuation):this._error(`Expected valid IRI to follow base declaration`,e)}_readNamedGraphLabel(e){switch(e.type){case`IRI`:case`blank`:case`prefixed`:return this._readSubject(e),this._readGraph;case`[`:return this._readNamedGraphBlankLabel;default:return this._error(`Invalid graph label`,e)}}_readNamedGraphBlankLabel(e){return e.type===`]`?(this._subject=this._factory.blankNode(),this._readGraph):this._error(`Invalid graph label`,e)}_readDeclarationPunctuation(e){return this._sparqlStyle?(this._sparqlStyle=!1,this._readInTopContext(e)):e.type===`.`?this._readInTopContext:this._error(`Expected declaration to end with a dot`,e)}_readQuantifierList(e){let t;switch(e.type){case`IRI`:case`prefixed`:if((t=this._readEntity(e,!0))!==void 0)break;default:return this._error(`Unexpected ${e.type}`,e)}return this._explicitQuantifiers?(this._subject===null?this._emit(this._graph||this.DEFAULTGRAPH,this._predicate,this._subject=this._factory.blankNode(),this.QUANTIFIERS_GRAPH):this._emit(this._subject,this.RDF_REST,this._subject=this._factory.blankNode(),this.QUANTIFIERS_GRAPH),this._emit(this._subject,this.RDF_FIRST,t,this.QUANTIFIERS_GRAPH)):this._quantified[t.id]=this._factory[this._quantifier](this._factory.blankNode().value),this._readQuantifierPunctuation}_readQuantifierPunctuation(e){return e.type===`,`?this._readQuantifierList:(this._explicitQuantifiers&&(this._emit(this._subject,this.RDF_REST,this.RDF_NIL,this.QUANTIFIERS_GRAPH),this._subject=null),this._readCallback=this._getContextEndReader(),this._readCallback(e))}_getPathReader(e){return this._afterPath=e,this._readPath}_readPath(e){switch(e.type){case`!`:return this._readForwardPath;case`^`:return this._readBackwardPath;default:let t=this._contextStack,n=t.length&&t[t.length-1];if(n&&n.type===`item`){let t=this._subject;this._restoreContext(`item`,e),this._emit(this._subject,this.RDF_FIRST,t,this._graph)}return this._afterPath(e)}}_readForwardPath(e){let t,n,r=this._factory.blankNode();if((n=this._readEntity(e))!==void 0)return this._predicate===null?(t=this._subject,this._subject=r):(t=this._object,this._object=r),this._emit(t,n,r,this._graph),this._readPath}_readBackwardPath(e){let t=this._factory.blankNode(),n,r;if((n=this._readEntity(e))!==void 0)return this._predicate===null?(r=this._subject,this._subject=t):(r=this._object,this._object=t),this._emit(t,n,r,this._graph),this._readPath}_readRDFStarTailOrGraph(e){return e.type===`>>`?this._readRDFStarTail(e):this._supportsQuads&&this._graph===null&&(this._graph=this._readEntity(e))!==void 0?this._readRDFStarTail:this._error(`Expected >> to follow "${this._object.id}"`,e)}_readRDFStarTail(e){if(e.type!==`>>`)return this._error(`Expected >> but got ${e.type}`,e);let t=this._factory.quad(this._subject,this._predicate,this._object,this._graph||this.DEFAULTGRAPH);return this._restoreContext(`<<`,e),this._subject===null?(this._subject=t,this._readPredicate):(this._object=t,this._getContextEndReader())}_getContextEndReader(){let e=this._contextStack;if(!e.length)return this._readPunctuation;switch(e[e.length-1].type){case`blank`:return this._readBlankNodeTail;case`list`:return this._readListItem;case`formula`:return this._readFormulaTail;case`<<`:return this._readRDFStarTailOrGraph}}_emit(e,t,n,r){this._callback(null,this._factory.quad(e,t,n,r||this.DEFAULTGRAPH))}_error(e,t){let n=Error(`${e} on line ${t.line}.`);n.context={token:t,line:t.line,previousToken:this._lexer.previousToken},this._callback(n),this._callback=sc}_resolveIRI(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)?e:this._resolveRelativeIRI(e)}_resolveRelativeIRI(e){if(!e.length)return this._base;switch(e[0]){case`#`:return this._base+e;case`?`:return this._base.replace(/(?:\?.*)?$/,e);case`/`:return(e[1]===`/`?this._baseScheme:this._baseRoot)+this._removeDotSegments(e);default:return/^[^/:]*:/.test(e)?null:this._removeDotSegments(this._basePath+e)}}_removeDotSegments(e){if(!/(^|\/)\.\.?($|[/#?])/.test(e))return e;let t=e.length,n=``,r=-1,i=-1,a=0,o=`/`;for(;r<t;){switch(o){case`:`:if(i<0&&e[++r]===`/`&&e[++r]===`/`)for(;(i=r+1)<t&&e[i]!==`/`;)r=i;break;case`?`:case`#`:r=t;break;case`/`:if(e[r+1]===`.`)switch(o=e[++r+1],o){case`/`:n+=e.substring(a,r-1),a=r+1;break;case void 0:case`?`:case`#`:return n+e.substring(a,r)+e.substr(r+1);case`.`:if(o=e[++r+1],o===void 0||o===`/`||o===`?`||o===`#`){if(n+=e.substring(a,r-2),(a=n.lastIndexOf(`/`))>=i&&(n=n.substr(0,a)),o!==`/`)return`${n}/${e.substr(r+1)}`;a=r+1}}}o=e[++r]}return n+e.substring(a)}parse(e,t,n){let r,i,a;if(t&&(t.onQuad||t.onPrefix||t.onComment)?(r=t.onQuad,i=t.onPrefix,a=t.onComment):(r=t,i=n),this._readCallback=this._readInTopContext,this._sparqlStyle=!1,this._prefixes=Object.create(null),this._prefixes._=this._blankNodePrefix?this._blankNodePrefix.substr(2):`b${ac++}_`,this._prefixCallback=i||sc,this._inversePredicate=!1,this._quantified=Object.create(null),!r){let t=[],n;if(this._callback=(e,r)=>{e?n=e:r&&t.push(r)},this._lexer.tokenize(e).every(e=>this._readCallback=this._readCallback(e)),n)throw n;return t}let o=(e,t)=>{e===null?this._readCallback&&=this._readCallback(t):(this._callback(e),this._callback=sc)};a&&(this._lexer.comments=!0,o=(e,t)=>{e===null?this._readCallback&&(t.type===`comment`?a(t.value):this._readCallback=this._readCallback(t)):(this._callback(e),this._callback=sc)}),this._callback=r,this._lexer.tokenize(e,o)}};function sc(){}function cc(e,t){e._factory=t,e.DEFAULTGRAPH=t.defaultGraph(),e.RDF_FIRST=t.namedNode(ks.rdf.first),e.RDF_REST=t.namedNode(ks.rdf.rest),e.RDF_NIL=t.namedNode(ks.rdf.nil),e.N3_FORALL=t.namedNode(ks.r.forAll),e.N3_FORSOME=t.namedNode(ks.r.forSome),e.ABBREVIATIONS={a:t.namedNode(ks.rdf.type),"=":t.namedNode(ks.owl.sameAs),">":t.namedNode(ks.log.implies),"<":t.namedNode(ks.log.isImpliedBy)},e.QUANTIFIERS_GRAPH=t.namedNode(`urn:n3:quantifiers`)}cc(oc.prototype,Hs);function lc(e){return!!e&&e.termType===`DefaultGraph`}function uc(e){return e.replace(/[\]\/\(\)\*\+\?\.\\\$]/g,`\\$&`)}var dc=/^:?[^:?#]*(?:[?#]|$)|^file:|^[^:]*:\/*[^?#]+?\/(?:\.\.?(?:\/|$)|\/)/i,fc=/^(?:(?:[^/?#]{3,}|\.?[^/?#.]\.?)(?:\/[^/?#]{3,}|\.?[^/?#.]\.?)*\/?)?(?:[?#]|$)/,pc=`./`,mc=`../`,hc=`?`,gc=`#`,_c=class e{constructor(e){this.base=e,this._baseLength=0,this._baseMatcher=null,this._pathReplacements=Array(e.length+1)}static supports(e){return!dc.test(e)}_getBaseMatcher(){if(this._baseMatcher)return this._baseMatcher;if(!e.supports(this.base))return this._baseMatcher=/.^/;let t=/^[^:]*:\/*/.exec(this.base)[0],n=[`^`,uc(t)],r=[],i=[],a=/[^/?#]*([/?#])/y,o,s=0,c=0,l=a.lastIndex=t.length;for(;!s&&!c&&(o=a.exec(this.base));)o[1]===gc?c=a.lastIndex-1:(n.push(uc(o[0]),`(?:`),r.push(`)?`),o[1]===hc?(s=l=a.lastIndex,c=this.base.indexOf(gc,s),this._pathReplacements[s]=hc):i.push(l=a.lastIndex));for(let e=0;e<i.length;e++)this._pathReplacements[i[e]]=mc.repeat(i.length-e-1);return this._pathReplacements[i[i.length-1]]=pc,this._baseLength=c>0?c:this.base.length,n.push(uc(this.base.substring(l,this._baseLength)),s?`(?:#|$)`:`(?:[?#]|$)`),this._baseMatcher=new RegExp([...n,...r].join(``))}toRelative(e){let t=this._getBaseMatcher().exec(e);if(!t)return e;let n=t[0].length;if(n===this._baseLength&&n===e.length)return``;let r=this._pathReplacements[n];if(r){let t=e.substring(n);return r!==hc&&!fc.test(t)?e:r===pc&&/^[^?#]/.test(t)?t:r+t}return e.substring(n-1)}},vc=Hs.defaultGraph(),{rdf:yc,xsd:bc}=ks,xc=/["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,Sc=/["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,Cc={"\\":`\\\\`,'"':`\\"`,"	":`\\t`,"\n":`\\n`,"\r":`\\r`,"\b":`\\b`,"\f":`\\f`},wc=class extends Us{equals(e){return e===this}},Tc=class{constructor(e,t){if(this._prefixRegex=/$0^/,e&&typeof e.write!=`function`&&(t=e,e=null),t||={},this._lists=t.lists,e)this._outputStream=e,this._endStream=t.end===void 0?!0:!!t.end;else{let e=``;this._outputStream={write(t,n,r){e+=t,r&&r()},end:t=>{t&&t(null,e)}},this._endStream=!0}this._subject=null,/triple|quad/i.test(t.format)?(this._lineMode=!0,this._writeQuad=this._writeQuadLine):(this._lineMode=!1,this._graph=vc,this._prefixIRIs=Object.create(null),t.prefixes&&this.addPrefixes(t.prefixes),t.baseIRI&&(this._baseIri=new _c(t.baseIRI)))}get _inDefaultGraph(){return vc.equals(this._graph)}_write(e,t){this._outputStream.write(e,`utf8`,t)}_writeQuad(e,t,n,r,i){try{r.equals(this._graph)||(this._write((this._subject===null?``:this._inDefaultGraph?`.
`:`
}
`)+(vc.equals(r)?``:`${this._encodeIriOrBlank(r)} {\n`)),this._graph=r,this._subject=null),e.equals(this._subject)?t.equals(this._predicate)?this._write(`, ${this._encodeObject(n)}`,i):this._write(`;\n    ${this._encodePredicate(this._predicate=t)} ${this._encodeObject(n)}`,i):this._write(`${(this._subject===null?``:`.
`)+this._encodeSubject(this._subject=e)} ${this._encodePredicate(this._predicate=t)} ${this._encodeObject(n)}`,i)}catch(e){i&&i(e)}}_writeQuadLine(e,t,n,r,i){delete this._prefixMatch,this._write(this.quadToString(e,t,n,r),i)}quadToString(e,t,n,r){return`${this._encodeSubject(e)} ${this._encodeIriOrBlank(t)} ${this._encodeObject(n)}${r&&r.value?` ${this._encodeIriOrBlank(r)} .\n`:` .
`}`}quadsToString(e){let t=``;for(let n of e)t+=this.quadToString(n.subject,n.predicate,n.object,n.graph);return t}_encodeSubject(e){return e.termType===`Quad`?this._encodeQuad(e):this._encodeIriOrBlank(e)}_encodeIriOrBlank(e){if(e.termType!==`NamedNode`)return this._lists&&e.value in this._lists&&(e=this.list(this._lists[e.value])),`id`in e?e.id:`_:${e.value}`;let t=e.value;this._baseIri&&(t=this._baseIri.toRelative(t)),xc.test(t)&&(t=t.replace(Sc,Ec));let n=this._prefixRegex.exec(t);return n?n[1]?this._prefixIRIs[n[1]]+n[2]:t:`<${t}>`}_encodeLiteral(e){let t=e.value;if(xc.test(t)&&(t=t.replace(Sc,Ec)),e.language)return`"${t}"@${e.language}`;if(this._lineMode){if(e.datatype.value===bc.string)return`"${t}"`}else switch(e.datatype.value){case bc.string:return`"${t}"`;case bc.boolean:if(t===`true`||t===`false`)return t;break;case bc.integer:if(/^[+-]?\d+$/.test(t))return t;break;case bc.decimal:if(/^[+-]?\d*\.\d+$/.test(t))return t;break;case bc.double:if(/^[+-]?(?:\d+\.\d*|\.?\d+)[eE][+-]?\d+$/.test(t))return t;break}return`"${t}"^^${this._encodeIriOrBlank(e.datatype)}`}_encodePredicate(e){return e.value===yc.type?`a`:this._encodeIriOrBlank(e)}_encodeObject(e){switch(e.termType){case`Quad`:return this._encodeQuad(e);case`Literal`:return this._encodeLiteral(e);default:return this._encodeIriOrBlank(e)}}_encodeQuad({subject:e,predicate:t,object:n,graph:r}){return`<<${this._encodeSubject(e)} ${this._encodePredicate(t)} ${this._encodeObject(n)}${lc(r)?``:` ${this._encodeIriOrBlank(r)}`}>>`}_blockedWrite(){throw Error(`Cannot write because the writer has been closed.`)}addQuad(e,t,n,r,i){n===void 0?this._writeQuad(e.subject,e.predicate,e.object,e.graph,t):typeof r==`function`?this._writeQuad(e,t,n,vc,r):this._writeQuad(e,t,n,r||vc,i)}addQuads(e){for(let t=0;t<e.length;t++)this.addQuad(e[t])}addPrefix(e,t,n){let r={};r[e]=t,this.addPrefixes(r,n)}addPrefixes(e,t){if(!this._prefixIRIs)return t&&t();let n=!1;for(let t in e){let r=e[t];typeof r!=`string`&&(r=r.value),n=!0,this._subject!==null&&(this._write(this._inDefaultGraph?`.
`:`
}
`),this._subject=null,this._graph=``),this._prefixIRIs[r]=t+=`:`,this._write(`@prefix ${t} <${r}>.\n`)}if(n){let e=``,t=``;for(let n in this._prefixIRIs)e+=e?`|${n}`:n,t+=(t?`|`:``)+this._prefixIRIs[n];e=uc(e,/[\]\/\(\)\*\+\?\.\\\$]/g,`\\$&`),this._prefixRegex=RegExp(`^(?:${t})[^\/]*$|^(${e})([_a-zA-Z0-9][\\-_a-zA-Z0-9]*)$`)}this._write(n?`
`:``,t)}blank(e,t){let n=e,r,i;switch(e===void 0?n=[]:e.termType?n=[{predicate:e,object:t}]:`length`in e||(n=[e]),i=n.length){case 0:return new wc(`[]`);case 1:if(r=n[0],!(r.object instanceof wc))return new wc(`[ ${this._encodePredicate(r.predicate)} ${this._encodeObject(r.object)} ]`);default:let t=`[`;for(let a=0;a<i;a++)r=n[a],r.predicate.equals(e)?t+=`, ${this._encodeObject(r.object)}`:(t+=`${(a?`;
  `:`
  `)+this._encodePredicate(r.predicate)} ${this._encodeObject(r.object)}`,e=r.predicate);return new wc(`${t}\n]`)}}list(e){let t=e&&e.length||0,n=Array(t);for(let r=0;r<t;r++)n[r]=this._encodeObject(e[r]);return new wc(`(${n.join(` `)})`)}end(e){this._subject!==null&&(this._write(this._inDefaultGraph?`.
`:`
}
`),this._subject=null),this._write=this._blockedWrite;let t=e&&((n,r)=>{t=null,e(n,r)});if(this._endStream)try{return this._outputStream.end(t)}catch{}t&&t()}};function Ec(e){let t=Cc[e];return t===void 0&&(e.length===1?(t=e.charCodeAt(0).toString(16),t=`\\u0000`.substr(0,6-t.length)+t):(t=((e.charCodeAt(0)-55296)*1024+e.charCodeAt(1)+9216).toString(16),t=`\\U00000000`.substr(0,10-t.length)+t)),t}var X=o(((e,t)=>{t.exports={AggregateError:class extends Error{constructor(e){if(!Array.isArray(e))throw TypeError(`Expected input to be an Array, got ${typeof e}`);let t=``;for(let n=0;n<e.length;n++)t+=`    ${e[n].stack}\n`;super(t),this.name=`AggregateError`,this.errors=e}},ArrayIsArray(e){return Array.isArray(e)},ArrayPrototypeIncludes(e,t){return e.includes(t)},ArrayPrototypeIndexOf(e,t){return e.indexOf(t)},ArrayPrototypeJoin(e,t){return e.join(t)},ArrayPrototypeMap(e,t){return e.map(t)},ArrayPrototypePop(e,t){return e.pop(t)},ArrayPrototypePush(e,t){return e.push(t)},ArrayPrototypeSlice(e,t,n){return e.slice(t,n)},Error,FunctionPrototypeCall(e,t,...n){return e.call(t,...n)},FunctionPrototypeSymbolHasInstance(e,t){return Function.prototype[Symbol.hasInstance].call(e,t)},MathFloor:Math.floor,Number,NumberIsInteger:Number.isInteger,NumberIsNaN:Number.isNaN,NumberMAX_SAFE_INTEGER:2**53-1,NumberMIN_SAFE_INTEGER:-(2**53-1),NumberParseInt:Number.parseInt,ObjectDefineProperties(e,t){return Object.defineProperties(e,t)},ObjectDefineProperty(e,t,n){return Object.defineProperty(e,t,n)},ObjectGetOwnPropertyDescriptor(e,t){return Object.getOwnPropertyDescriptor(e,t)},ObjectKeys(e){return Object.keys(e)},ObjectSetPrototypeOf(e,t){return Object.setPrototypeOf(e,t)},Promise,PromisePrototypeCatch(e,t){return e.catch(t)},PromisePrototypeThen(e,t,n){return e.then(t,n)},PromiseReject(e){return Promise.reject(e)},PromiseResolve(e){return Promise.resolve(e)},ReflectApply:Reflect.apply,RegExpPrototypeTest(e,t){return e.test(t)},SafeSet:Set,String,StringPrototypeSlice(e,t,n){return e.slice(t,n)},StringPrototypeToLowerCase(e){return e.toLowerCase()},StringPrototypeToUpperCase(e){return e.toUpperCase()},StringPrototypeTrim(e){return e.trim()},Symbol,SymbolFor:Symbol.for,SymbolAsyncIterator:Symbol.asyncIterator,SymbolHasInstance:Symbol.hasInstance,SymbolIterator:Symbol.iterator,SymbolDispose:Symbol.dispose||Symbol(`Symbol.dispose`),SymbolAsyncDispose:Symbol.asyncDispose||Symbol(`Symbol.asyncDispose`),TypedArrayPrototypeSet(e,t,n){return e.set(t,n)},Boolean,Uint8Array}})),Dc=o(((e,t)=>{t.exports={format(e,...t){return e.replace(/%([sdifj])/g,function(...[e,n]){let r=t.shift();return n===`f`?r.toFixed(6):n===`j`?JSON.stringify(r):n===`s`&&typeof r==`object`?`${r.constructor===Object?``:r.constructor.name} {}`.trim():r.toString()})},inspect(e){switch(typeof e){case`string`:if(e.includes(`'`)){if(!e.includes(`"`))return`"${e}"`;if(!e.includes("`")&&!e.includes("${"))return`\`${e}\``}return`'${e}'`;case`number`:return isNaN(e)?`NaN`:Object.is(e,-0)?String(e):e;case`bigint`:return`${String(e)}n`;case`boolean`:case`undefined`:return String(e);case`object`:return`{}`}}}})),Oc=o(((e,t)=>{var{format:n,inspect:r}=Dc(),{AggregateError:i}=X(),a=globalThis.AggregateError||i,o=Symbol(`kIsNodeError`),s=[`string`,`function`,`number`,`object`,`Function`,`Object`,`boolean`,`bigint`,`symbol`],c=/^([A-Z][a-z0-9]*)+$/,l=`__node_internal_`,u={};function d(e,t){if(!e)throw new u.ERR_INTERNAL_ASSERTION(t)}function f(e){let t=``,n=e.length,r=+(e[0]===`-`);for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function p(e,t,r){if(typeof t==`function`)return d(t.length<=r.length,`Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`),t(...r);let i=(t.match(/%[dfijoOs]/g)||[]).length;return d(i===r.length,`Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${i}).`),r.length===0?t:n(t,...r)}function m(e,t,n){n||=Error;class r extends n{constructor(...n){super(p(e,t,n))}toString(){return`${this.name} [${e}]: ${this.message}`}}Object.defineProperties(r.prototype,{name:{value:n.name,writable:!0,enumerable:!1,configurable:!0},toString:{value(){return`${this.name} [${e}]: ${this.message}`},writable:!0,enumerable:!1,configurable:!0}}),r.prototype.code=e,r.prototype[o]=!0,u[e]=r}function h(e){let t=l+e.name;return Object.defineProperty(e,"name",{value:t}),e}function g(e,t){if(e&&t&&e!==t){if(Array.isArray(t.errors))return t.errors.push(e),t;let n=new a([t,e],t.message);return n.code=t.code,n}return e||t}var _=class extends Error{constructor(e=`The operation was aborted`,t=void 0){if(t!==void 0&&typeof t!=`object`)throw new u.ERR_INVALID_ARG_TYPE(`options`,`Object`,t);super(e,t),this.code=`ABORT_ERR`,this.name=`AbortError`}};m(`ERR_ASSERTION`,`%s`,Error),m(`ERR_INVALID_ARG_TYPE`,(e,t,n)=>{d(typeof e==`string`,`'name' must be a string`),Array.isArray(t)||(t=[t]);let i=`The `;e.endsWith(` argument`)?i+=`${e} `:i+=`"${e}" ${e.includes(`.`)?`property`:`argument`} `,i+=`must be `;let a=[],o=[],l=[];for(let e of t)d(typeof e==`string`,`All expected entries have to be of type string`),s.includes(e)?a.push(e.toLowerCase()):c.test(e)?o.push(e):(d(e!==`object`,`The value "object" should be written as "Object"`),l.push(e));if(o.length>0){let e=a.indexOf(`object`);e!==-1&&(a.splice(a,e,1),o.push(`Object`))}if(a.length>0){switch(a.length){case 1:i+=`of type ${a[0]}`;break;case 2:i+=`one of type ${a[0]} or ${a[1]}`;break;default:{let e=a.pop();i+=`one of type ${a.join(`, `)}, or ${e}`}}(o.length>0||l.length>0)&&(i+=` or `)}if(o.length>0){switch(o.length){case 1:i+=`an instance of ${o[0]}`;break;case 2:i+=`an instance of ${o[0]} or ${o[1]}`;break;default:{let e=o.pop();i+=`an instance of ${o.join(`, `)}, or ${e}`}}l.length>0&&(i+=` or `)}switch(l.length){case 0:break;case 1:l[0].toLowerCase()!==l[0]&&(i+=`an `),i+=`${l[0]}`;break;case 2:i+=`one of ${l[0]} or ${l[1]}`;break;default:{let e=l.pop();i+=`one of ${l.join(`, `)}, or ${e}`}}if(n==null)i+=`. Received ${n}`;else if(typeof n==`function`&&n.name)i+=`. Received function ${n.name}`;else if(typeof n==`object`){var u;if((u=n.constructor)!=null&&u.name)i+=`. Received an instance of ${n.constructor.name}`;else{let e=r(n,{depth:-1});i+=`. Received ${e}`}}else{let e=r(n,{colors:!1});e.length>25&&(e=`${e.slice(0,25)}...`),i+=`. Received type ${typeof n} (${e})`}return i},TypeError),m(`ERR_INVALID_ARG_VALUE`,(e,t,n=`is invalid`)=>{let i=r(t);return i.length>128&&(i=i.slice(0,128)+`...`),`The ${e.includes(`.`)?`property`:`argument`} '${e}' ${n}. Received ${i}`},TypeError),m(`ERR_INVALID_RETURN_VALUE`,(e,t,n)=>{var r;return`Expected ${e} to be returned from the "${t}" function but got ${n!=null&&(r=n.constructor)!=null&&r.name?`instance of ${n.constructor.name}`:`type ${typeof n}`}.`},TypeError),m(`ERR_MISSING_ARGS`,(...e)=>{d(e.length>0,`At least one arg needs to be specified`);let t,n=e.length;switch(e=(Array.isArray(e)?e:[e]).map(e=>`"${e}"`).join(` or `),n){case 1:t+=`The ${e[0]} argument`;break;case 2:t+=`The ${e[0]} and ${e[1]} arguments`;break;default:{let n=e.pop();t+=`The ${e.join(`, `)}, and ${n} arguments`}break}return`${t} must be specified`},TypeError),m(`ERR_OUT_OF_RANGE`,(e,t,n)=>{d(t,`Missing "range" argument`);let i;if(Number.isInteger(n)&&Math.abs(n)>2**32)i=f(String(n));else if(typeof n==`bigint`){i=String(n);let e=BigInt(2)**BigInt(32);(n>e||n<-e)&&(i=f(i)),i+=`n`}else i=r(n);return`The value of "${e}" is out of range. It must be ${t}. Received ${i}`},RangeError),m(`ERR_MULTIPLE_CALLBACK`,`Callback called multiple times`,Error),m(`ERR_METHOD_NOT_IMPLEMENTED`,`The %s method is not implemented`,Error),m(`ERR_STREAM_ALREADY_FINISHED`,`Cannot call %s after a stream was finished`,Error),m(`ERR_STREAM_CANNOT_PIPE`,`Cannot pipe, not readable`,Error),m(`ERR_STREAM_DESTROYED`,`Cannot call %s after a stream was destroyed`,Error),m(`ERR_STREAM_NULL_VALUES`,`May not write null values to stream`,TypeError),m(`ERR_STREAM_PREMATURE_CLOSE`,`Premature close`,Error),m(`ERR_STREAM_PUSH_AFTER_EOF`,`stream.push() after EOF`,Error),m(`ERR_STREAM_UNSHIFT_AFTER_END_EVENT`,`stream.unshift() after end event`,Error),m(`ERR_STREAM_WRITE_AFTER_END`,`write after end`,Error),m(`ERR_UNKNOWN_ENCODING`,`Unknown encoding: %s`,TypeError),t.exports={AbortError:_,aggregateTwoErrors:h(g),hideStackFrames:h,codes:u}})),kc=o(((e,t)=>{var{AbortController:n,AbortSignal:r}=typeof self<`u`?self:typeof window<`u`?window:void 0;t.exports=n,t.exports.AbortSignal=r,t.exports.default=n})),Ac=o(((e,t)=>{var n=Ts(),{format:r,inspect:i}=Dc(),{codes:{ERR_INVALID_ARG_TYPE:a}}=Oc(),{kResistStopPropagation:o,AggregateError:s,SymbolDispose:c}=X(),l=globalThis.AbortSignal||kc().AbortSignal,u=globalThis.AbortController||kc().AbortController,d=Object.getPrototypeOf(async function(){}).constructor,f=globalThis.Blob||n.Blob,p=f===void 0?function(e){return!1}:function(e){return e instanceof f},m=(e,t)=>{if(e!==void 0&&(typeof e!=`object`||!e||!(`aborted`in e)))throw new a(t,`AbortSignal`,e)},h=(e,t)=>{if(typeof e!=`function`)throw new a(t,`Function`,e)};t.exports={AggregateError:s,kEmptyObject:Object.freeze({}),once(e){let t=!1;return function(...n){t||(t=!0,e.apply(this,n))}},createDeferredPromise:function(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}},promisify(e){return new Promise((t,n)=>{e((e,...r)=>e?n(e):t(...r))})},debuglog(){return function(){}},format:r,inspect:i,types:{isAsyncFunction(e){return e instanceof d},isArrayBufferView(e){return ArrayBuffer.isView(e)}},isBlob:p,deprecate(e,t){return e},addAbortListener:ti().addAbortListener||function(e,t){if(e===void 0)throw new a(`signal`,`AbortSignal`,e);m(e,`signal`),h(t,`listener`);let n;return e.aborted?queueMicrotask(()=>t()):(e.addEventListener(`abort`,t,{__proto__:null,once:!0,[o]:!0}),n=()=>{e.removeEventListener(`abort`,t)}),{__proto__:null,[c](){var e;(e=n)==null||e()}}},AbortSignalAny:l.any||function(e){if(e.length===1)return e[0];let t=new u,n=()=>t.abort();return e.forEach(e=>{m(e,`signals`),e.addEventListener(`abort`,n,{once:!0})}),t.signal.addEventListener(`abort`,()=>{e.forEach(e=>e.removeEventListener(`abort`,n))},{once:!0}),t.signal}},t.exports.promisify.custom=Symbol.for(`nodejs.util.promisify.custom`)})),jc=o(((e,t)=>{var{ArrayIsArray:n,ArrayPrototypeIncludes:r,ArrayPrototypeJoin:i,ArrayPrototypeMap:a,NumberIsInteger:o,NumberIsNaN:s,NumberMAX_SAFE_INTEGER:c,NumberMIN_SAFE_INTEGER:l,NumberParseInt:u,ObjectPrototypeHasOwnProperty:d,RegExpPrototypeExec:f,String:p,StringPrototypeToUpperCase:m,StringPrototypeTrim:h}=X(),{hideStackFrames:g,codes:{ERR_SOCKET_BAD_PORT:_,ERR_INVALID_ARG_TYPE:v,ERR_INVALID_ARG_VALUE:y,ERR_OUT_OF_RANGE:b,ERR_UNKNOWN_SIGNAL:x}}=Oc(),{normalizeEncoding:S}=Ac(),{isAsyncFunction:C,isArrayBufferView:w}=Ac().types,T={};function E(e){return e===(e|0)}function D(e){return e===e>>>0}var O=/^[0-7]+$/,k=`must be a 32-bit unsigned integer or an octal string`;function A(e,t,n){if(e===void 0&&(e=n),typeof e==`string`){if(f(O,e)===null)throw new y(t,e,k);e=u(e,8)}return M(e,t),e}var ee=g((e,t,n=l,r=c)=>{if(typeof e!=`number`)throw new v(t,`number`,e);if(!o(e))throw new b(t,`an integer`,e);if(e<n||e>r)throw new b(t,`>= ${n} && <= ${r}`,e)}),j=g((e,t,n=-2147483648,r=2147483647)=>{if(typeof e!=`number`)throw new v(t,`number`,e);if(!o(e))throw new b(t,`an integer`,e);if(e<n||e>r)throw new b(t,`>= ${n} && <= ${r}`,e)}),M=g((e,t,n=!1)=>{if(typeof e!=`number`)throw new v(t,`number`,e);if(!o(e))throw new b(t,`an integer`,e);let r=+!!n,i=4294967295;if(e<r||e>i)throw new b(t,`>= ${r} && <= ${i}`,e)});function N(e,t){if(typeof e!=`string`)throw new v(t,`string`,e)}function P(e,t,n=void 0,r){if(typeof e!=`number`)throw new v(t,`number`,e);if(n!=null&&e<n||r!=null&&e>r||(n!=null||r!=null)&&s(e))throw new b(t,`${n==null?``:`>= ${n}`}${n!=null&&r!=null?` && `:``}${r==null?``:`<= ${r}`}`,e)}var te=g((e,t,n)=>{if(!r(n,e))throw new y(t,e,`must be one of: `+i(a(n,e=>typeof e==`string`?`'${e}'`:p(e)),`, `))});function F(e,t){if(typeof e!=`boolean`)throw new v(t,`boolean`,e)}function I(e,t,n){return e==null||!d(e,t)?n:e[t]}var ne=g((e,t,r=null)=>{let i=I(r,`allowArray`,!1),a=I(r,`allowFunction`,!1);if(!I(r,`nullable`,!1)&&e===null||!i&&n(e)||typeof e!=`object`&&(!a||typeof e!=`function`))throw new v(t,`Object`,e)}),re=g((e,t)=>{if(e!=null&&typeof e!=`object`&&typeof e!=`function`)throw new v(t,`a dictionary`,e)}),L=g((e,t,r=0)=>{if(!n(e))throw new v(t,`Array`,e);if(e.length<r)throw new y(t,e,`must be longer than ${r}`)});function ie(e,t){L(e,t);for(let n=0;n<e.length;n++)N(e[n],`${t}[${n}]`)}function ae(e,t){L(e,t);for(let n=0;n<e.length;n++)F(e[n],`${t}[${n}]`)}function oe(e,t){L(e,t);for(let n=0;n<e.length;n++){let r=e[n],i=`${t}[${n}]`;if(r==null)throw new v(i,`AbortSignal`,r);de(r,i)}}function se(e,t=`signal`){if(N(e,t),T[e]===void 0)throw T[m(e)]===void 0?new x(e):new x(e+` (signals must use all capital letters)`)}var ce=g((e,t=`buffer`)=>{if(!w(e))throw new v(t,[`Buffer`,`TypedArray`,`DataView`],e)});function le(e,t){let n=S(t),r=e.length;if(n===`hex`&&r%2!=0)throw new y(`encoding`,t,`is invalid for data of length ${r}`)}function ue(e,t=`Port`,n=!0){if(typeof e!=`number`&&typeof e!=`string`||typeof e==`string`&&h(e).length===0||+e!=e>>>0||e>65535||e===0&&!n)throw new _(t,e,n);return e|0}var de=g((e,t)=>{if(e!==void 0&&(typeof e!=`object`||!e||!(`aborted`in e)))throw new v(t,`AbortSignal`,e)}),fe=g((e,t)=>{if(typeof e!=`function`)throw new v(t,`Function`,e)}),pe=g((e,t)=>{if(typeof e!=`function`||C(e))throw new v(t,`Function`,e)}),me=g((e,t)=>{if(e!==void 0)throw new v(t,`undefined`,e)});function he(e,t,n){if(!r(n,e))throw new v(t,`('${i(n,`|`)}')`,e)}var R=/^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;function ge(e,t){if(e===void 0||!f(R,e))throw new y(t,e,`must be an array or string of format "</styles.css>; rel=preload; as=style"`)}function z(e){if(typeof e==`string`)return ge(e,`hints`),e;if(n(e)){let t=e.length,n=``;if(t===0)return n;for(let r=0;r<t;r++){let i=e[r];ge(i,`hints`),n+=i,r!==t-1&&(n+=`, `)}return n}throw new y(`hints`,e,`must be an array or string of format "</styles.css>; rel=preload; as=style"`)}t.exports={isInt32:E,isUint32:D,parseFileMode:A,validateArray:L,validateStringArray:ie,validateBooleanArray:ae,validateAbortSignalArray:oe,validateBoolean:F,validateBuffer:ce,validateDictionary:re,validateEncoding:le,validateFunction:fe,validateInt32:j,validateInteger:ee,validateNumber:P,validateObject:ne,validateOneOf:te,validatePlainFunction:pe,validatePort:ue,validateSignalName:se,validateString:N,validateUint32:M,validateUndefined:me,validateUnion:he,validateAbortSignal:de,validateLinkHeaderValue:z}})),Mc=o(((e,t)=>{var n=t.exports={},r,i;function a(){throw Error(`setTimeout has not been defined`)}function o(){throw Error(`clearTimeout has not been defined`)}(function(){try{r=typeof setTimeout==`function`?setTimeout:a}catch{r=a}try{i=typeof clearTimeout==`function`?clearTimeout:o}catch{i=o}})();function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch{try{return r.call(null,e,0)}catch{return r.call(this,e,0)}}}function c(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch{try{return i.call(null,e)}catch{return i.call(this,e)}}}var l=[],u=!1,d,f=-1;function p(){!u||!d||(u=!1,d.length?l=d.concat(l):f=-1,l.length&&m())}function m(){if(!u){var e=s(p);u=!0;for(var t=l.length;t;){for(d=l,l=[];++f<t;)d&&d[f].run();f=-1,t=l.length}d=null,u=!1,c(e)}}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),l.length===1&&!u&&s(m)};function h(e,t){this.fun=e,this.array=t}h.prototype.run=function(){this.fun.apply(null,this.array)},n.title=`browser`,n.browser=!0,n.env={},n.argv=[],n.version=``,n.versions={};function g(){}n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(e){return[]},n.binding=function(e){throw Error(`process.binding is not supported`)},n.cwd=function(){return`/`},n.chdir=function(e){throw Error(`process.chdir is not supported`)},n.umask=function(){return 0}})),Nc=o(((e,t)=>{var{SymbolAsyncIterator:n,SymbolIterator:r,SymbolFor:i}=X(),a=i(`nodejs.stream.destroyed`),o=i(`nodejs.stream.errored`),s=i(`nodejs.stream.readable`),c=i(`nodejs.stream.writable`),l=i(`nodejs.stream.disturbed`),u=i(`nodejs.webstream.isClosedPromise`),d=i(`nodejs.webstream.controllerErrorFunction`);function f(e,t=!1){return!!(e&&typeof e.pipe==`function`&&typeof e.on==`function`&&(!t||typeof e.pause==`function`&&typeof e.resume==`function`)&&(!e._writableState||e._readableState?.readable!==!1)&&(!e._writableState||e._readableState))}function p(e){return!!(e&&typeof e.write==`function`&&typeof e.on==`function`&&(!e._readableState||e._writableState?.writable!==!1))}function m(e){return!!(e&&typeof e.pipe==`function`&&e._readableState&&typeof e.on==`function`&&typeof e.write==`function`)}function h(e){return e&&(e._readableState||e._writableState||typeof e.write==`function`&&typeof e.on==`function`||typeof e.pipe==`function`&&typeof e.on==`function`)}function g(e){return!!(e&&!h(e)&&typeof e.pipeThrough==`function`&&typeof e.getReader==`function`&&typeof e.cancel==`function`)}function _(e){return!!(e&&!h(e)&&typeof e.getWriter==`function`&&typeof e.abort==`function`)}function v(e){return!!(e&&!h(e)&&typeof e.readable==`object`&&typeof e.writable==`object`)}function y(e){return g(e)||_(e)||v(e)}function b(e,t){return e==null?!1:t===!0?typeof e[n]==`function`:t===!1?typeof e[r]==`function`:typeof e[n]==`function`||typeof e[r]==`function`}function x(e){if(!h(e))return null;let t=e._writableState,n=e._readableState,r=t||n;return!!(e.destroyed||e[a]||r!=null&&r.destroyed)}function S(e){if(!p(e))return null;if(e.writableEnded===!0)return!0;let t=e._writableState;return t!=null&&t.errored?!1:typeof t?.ended==`boolean`?t.ended:null}function C(e,t){if(!p(e))return null;if(e.writableFinished===!0)return!0;let n=e._writableState;return n!=null&&n.errored?!1:typeof n?.finished==`boolean`?!!(n.finished||t===!1&&n.ended===!0&&n.length===0):null}function w(e){if(!f(e))return null;if(e.readableEnded===!0)return!0;let t=e._readableState;return!t||t.errored?!1:typeof t?.ended==`boolean`?t.ended:null}function T(e,t){if(!f(e))return null;let n=e._readableState;return n!=null&&n.errored?!1:typeof n?.endEmitted==`boolean`?!!(n.endEmitted||t===!1&&n.ended===!0&&n.length===0):null}function E(e){return e&&e[s]!=null?e[s]:typeof e?.readable==`boolean`?x(e)?!1:f(e)&&e.readable&&!T(e):null}function D(e){return e&&e[c]!=null?e[c]:typeof e?.writable==`boolean`?x(e)?!1:p(e)&&e.writable&&!S(e):null}function O(e,t){return h(e)?x(e)?!0:!(t?.readable!==!1&&E(e)||t?.writable!==!1&&D(e)):null}function k(e){return h(e)?e.writableErrored?e.writableErrored:e._writableState?.errored??null:null}function A(e){return h(e)?e.readableErrored?e.readableErrored:e._readableState?.errored??null:null}function ee(e){if(!h(e))return null;if(typeof e.closed==`boolean`)return e.closed;let t=e._writableState,n=e._readableState;return typeof t?.closed==`boolean`||typeof n?.closed==`boolean`?t?.closed||n?.closed:typeof e._closed==`boolean`&&j(e)?e._closed:null}function j(e){return typeof e._closed==`boolean`&&typeof e._defaultKeepAlive==`boolean`&&typeof e._removedConnection==`boolean`&&typeof e._removedContLen==`boolean`}function M(e){return typeof e._sent100==`boolean`&&j(e)}function N(e){return typeof e._consuming==`boolean`&&typeof e._dumped==`boolean`&&e.req?.upgradeOrConnect===void 0}function P(e){if(!h(e))return null;let t=e._writableState,n=e._readableState,r=t||n;return!r&&M(e)||!!(r&&r.autoDestroy&&r.emitClose&&r.closed===!1)}function te(e){return!!(e&&(e[l]??(e.readableDidRead||e.readableAborted)))}function F(e){return!!(e&&(e[o]??e.readableErrored??e.writableErrored??e._readableState?.errorEmitted??e._writableState?.errorEmitted??e._readableState?.errored??e._writableState?.errored))}t.exports={isDestroyed:x,kIsDestroyed:a,isDisturbed:te,kIsDisturbed:l,isErrored:F,kIsErrored:o,isReadable:E,kIsReadable:s,kIsClosedPromise:u,kControllerErrorFunction:d,kIsWritable:c,isClosed:ee,isDuplexNodeStream:m,isFinished:O,isIterable:b,isReadableNodeStream:f,isReadableStream:g,isReadableEnded:w,isReadableFinished:T,isReadableErrored:A,isNodeStream:h,isWebStream:y,isWritable:D,isWritableNodeStream:p,isWritableStream:_,isWritableEnded:S,isWritableFinished:C,isWritableErrored:k,isServerRequest:N,isServerResponse:M,willEmitClose:P,isTransformStream:v}})),Pc=o(((e,t)=>{var n=Mc(),{AbortError:r,codes:i}=Oc(),{ERR_INVALID_ARG_TYPE:a,ERR_STREAM_PREMATURE_CLOSE:o}=i,{kEmptyObject:s,once:c}=Ac(),{validateAbortSignal:l,validateFunction:u,validateObject:d,validateBoolean:f}=jc(),{Promise:p,PromisePrototypeThen:m,SymbolDispose:h}=X(),{isClosed:g,isReadable:_,isReadableNodeStream:v,isReadableStream:y,isReadableFinished:b,isReadableErrored:x,isWritable:S,isWritableNodeStream:C,isWritableStream:w,isWritableFinished:T,isWritableErrored:E,isNodeStream:D,willEmitClose:O,kIsClosedPromise:k}=Nc(),A;function ee(e){return e.setHeader&&typeof e.abort==`function`}var j=()=>{};function M(e,t,i){if(arguments.length===2?(i=t,t=s):t==null?t=s:d(t,`options`),u(i,`callback`),l(t.signal,`options.signal`),i=c(i),y(e)||w(e))return N(e,t,i);if(!D(e))throw new a(`stream`,[`ReadableStream`,`WritableStream`,`Stream`],e);let f=t.readable??v(e),p=t.writable??C(e),m=e._writableState,k=e._readableState,M=()=>{e.writable||F()},P=O(e)&&v(e)===f&&C(e)===p,te=T(e,!1),F=()=>{te=!0,e.destroyed&&(P=!1),!(P&&(!e.readable||f))&&(!f||I)&&i.call(e)},I=b(e,!1),ne=()=>{I=!0,e.destroyed&&(P=!1),!(P&&(!e.writable||p))&&(!p||te)&&i.call(e)},re=t=>{i.call(e,t)},L=g(e),ie=()=>{L=!0;let t=E(e)||x(e);if(t&&typeof t!=`boolean`)return i.call(e,t);if(f&&!I&&v(e,!0)&&!b(e,!1)||p&&!te&&!T(e,!1))return i.call(e,new o);i.call(e)},ae=()=>{L=!0;let t=E(e)||x(e);if(t&&typeof t!=`boolean`)return i.call(e,t);i.call(e)},oe=()=>{e.req.on(`finish`,F)};ee(e)?(e.on(`complete`,F),P||e.on(`abort`,ie),e.req?oe():e.on(`request`,oe)):p&&!m&&(e.on(`end`,M),e.on(`close`,M)),!P&&typeof e.aborted==`boolean`&&e.on(`aborted`,ie),e.on(`end`,ne),e.on(`finish`,F),t.error!==!1&&e.on(`error`,re),e.on(`close`,ie),L?n.nextTick(ie):m!=null&&m.errorEmitted||k!=null&&k.errorEmitted?P||n.nextTick(ae):(!f&&(!P||_(e))&&(te||S(e)===!1)||!p&&(!P||S(e))&&(I||_(e)===!1)||k&&e.req&&e.aborted)&&n.nextTick(ae);let se=()=>{i=j,e.removeListener(`aborted`,ie),e.removeListener(`complete`,F),e.removeListener(`abort`,ie),e.removeListener(`request`,oe),e.req&&e.req.removeListener(`finish`,F),e.removeListener(`end`,M),e.removeListener(`close`,M),e.removeListener(`finish`,F),e.removeListener(`end`,ne),e.removeListener(`error`,re),e.removeListener(`close`,ie)};if(t.signal&&!L){let a=()=>{let n=i;se(),n.call(e,new r(void 0,{cause:t.signal.reason}))};if(t.signal.aborted)n.nextTick(a);else{A||=Ac().addAbortListener;let n=A(t.signal,a),r=i;i=c((...t)=>{n[h](),r.apply(e,t)})}}return se}function N(e,t,i){let a=!1,o=j;if(t.signal)if(o=()=>{a=!0,i.call(e,new r(void 0,{cause:t.signal.reason}))},t.signal.aborted)n.nextTick(o);else{A||=Ac().addAbortListener;let n=A(t.signal,o),r=i;i=c((...t)=>{n[h](),r.apply(e,t)})}let s=(...t)=>{a||n.nextTick(()=>i.apply(e,t))};return m(e[k].promise,s,s),j}function P(e,t){var n;let r=!1;return t===null&&(t=s),(n=t)!=null&&n.cleanup&&(f(t.cleanup,`cleanup`),r=t.cleanup),new p((n,i)=>{let a=M(e,t,e=>{r&&a(),e?i(e):n()})})}t.exports=M,t.exports.finished=P})),Fc=o(((e,t)=>{var n=Mc(),{aggregateTwoErrors:r,codes:{ERR_MULTIPLE_CALLBACK:i},AbortError:a}=Oc(),{Symbol:o}=X(),{kIsDestroyed:s,isDestroyed:c,isFinished:l,isServerRequest:u}=Nc(),d=o(`kDestroy`),f=o(`kConstruct`);function p(e,t,n){e&&(e.stack,t&&!t.errored&&(t.errored=e),n&&!n.errored&&(n.errored=e))}function m(e,t){let n=this._readableState,i=this._writableState,a=i||n;return i!=null&&i.destroyed||n!=null&&n.destroyed?(typeof t==`function`&&t(),this):(p(e,i,n),i&&(i.destroyed=!0),n&&(n.destroyed=!0),a.constructed?h(this,e,t):this.once(d,function(n){h(this,r(n,e),t)}),this)}function h(e,t,r){let i=!1;function a(t){if(i)return;i=!0;let a=e._readableState,o=e._writableState;p(t,o,a),o&&(o.closed=!0),a&&(a.closed=!0),typeof r==`function`&&r(t),t?n.nextTick(g,e,t):n.nextTick(_,e)}try{e._destroy(t||null,a)}catch(e){a(e)}}function g(e,t){v(e,t),_(e)}function _(e){let t=e._readableState,n=e._writableState;n&&(n.closeEmitted=!0),t&&(t.closeEmitted=!0),(n!=null&&n.emitClose||t!=null&&t.emitClose)&&e.emit(`close`)}function v(e,t){let n=e._readableState,r=e._writableState;r!=null&&r.errorEmitted||n!=null&&n.errorEmitted||(r&&(r.errorEmitted=!0),n&&(n.errorEmitted=!0),e.emit(`error`,t))}function y(){let e=this._readableState,t=this._writableState;e&&(e.constructed=!0,e.closed=!1,e.closeEmitted=!1,e.destroyed=!1,e.errored=null,e.errorEmitted=!1,e.reading=!1,e.ended=e.readable===!1,e.endEmitted=e.readable===!1),t&&(t.constructed=!0,t.destroyed=!1,t.closed=!1,t.closeEmitted=!1,t.errored=null,t.errorEmitted=!1,t.finalCalled=!1,t.prefinished=!1,t.ended=t.writable===!1,t.ending=t.writable===!1,t.finished=t.writable===!1)}function b(e,t,r){let i=e._readableState,a=e._writableState;if(a!=null&&a.destroyed||i!=null&&i.destroyed)return this;i!=null&&i.autoDestroy||a!=null&&a.autoDestroy?e.destroy(t):t&&(t.stack,a&&!a.errored&&(a.errored=t),i&&!i.errored&&(i.errored=t),r?n.nextTick(v,e,t):v(e,t))}function x(e,t){if(typeof e._construct!=`function`)return;let r=e._readableState,i=e._writableState;r&&(r.constructed=!1),i&&(i.constructed=!1),e.once(f,t),!(e.listenerCount(f)>1)&&n.nextTick(S,e)}function S(e){let t=!1;function r(r){if(t){b(e,r??new i);return}t=!0;let a=e._readableState,o=e._writableState,s=o||a;a&&(a.constructed=!0),o&&(o.constructed=!0),s.destroyed?e.emit(d,r):r?b(e,r,!0):n.nextTick(C,e)}try{e._construct(e=>{n.nextTick(r,e)})}catch(e){n.nextTick(r,e)}}function C(e){e.emit(f)}function w(e){return e?.setHeader&&typeof e.abort==`function`}function T(e){e.emit(`close`)}function E(e,t){e.emit(`error`,t),n.nextTick(T,e)}function D(e,t){!e||c(e)||(!t&&!l(e)&&(t=new a),u(e)?(e.socket=null,e.destroy(t)):w(e)?e.abort():w(e.req)?e.req.abort():typeof e.destroy==`function`?e.destroy(t):typeof e.close==`function`?e.close():t?n.nextTick(E,e,t):n.nextTick(T,e),e.destroyed||(e[s]=!0))}t.exports={construct:x,destroyer:D,destroy:m,undestroy:y,errorOrDestroy:b}})),Ic=o(((e,t)=>{var{ArrayIsArray:n,ObjectSetPrototypeOf:r}=X(),{EventEmitter:i}=ti();function a(e){i.call(this,e)}r(a.prototype,i.prototype),r(a,i),a.prototype.pipe=function(e,t){let n=this;function r(t){e.writable&&e.write(t)===!1&&n.pause&&n.pause()}n.on(`data`,r);function a(){n.readable&&n.resume&&n.resume()}e.on(`drain`,a),!e._isStdio&&(!t||t.end!==!1)&&(n.on(`end`,c),n.on(`close`,l));let s=!1;function c(){s||(s=!0,e.end())}function l(){s||(s=!0,typeof e.destroy==`function`&&e.destroy())}function u(e){d(),i.listenerCount(this,`error`)===0&&this.emit(`error`,e)}o(n,`error`,u),o(e,`error`,u);function d(){n.removeListener(`data`,r),e.removeListener(`drain`,a),n.removeListener(`end`,c),n.removeListener(`close`,l),n.removeListener(`error`,u),e.removeListener(`error`,u),n.removeListener(`end`,d),n.removeListener(`close`,d),e.removeListener(`close`,d)}return n.on(`end`,d),n.on(`close`,d),e.on(`close`,d),e.emit(`pipe`,n),e};function o(e,t,r){if(typeof e.prependListener==`function`)return e.prependListener(t,r);!e._events||!e._events[t]?e.on(t,r):n(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]}t.exports={Stream:a,prependListener:o}})),Lc=o(((e,t)=>{var{SymbolDispose:n}=X(),{AbortError:r,codes:i}=Oc(),{isNodeStream:a,isWebStream:o,kControllerErrorFunction:s}=Nc(),c=Pc(),{ERR_INVALID_ARG_TYPE:l}=i,u,d=(e,t)=>{if(typeof e!=`object`||!(`aborted`in e))throw new l(t,`AbortSignal`,e)};t.exports.addAbortSignal=function(e,n){if(d(e,`signal`),!a(n)&&!o(n))throw new l(`stream`,[`ReadableStream`,`WritableStream`,`Stream`],n);return t.exports.addAbortSignalNoValidate(e,n)},t.exports.addAbortSignalNoValidate=function(e,t){if(typeof e!=`object`||!(`aborted`in e))return t;let i=a(t)?()=>{t.destroy(new r(void 0,{cause:e.reason}))}:()=>{t[s](new r(void 0,{cause:e.reason}))};return e.aborted?i():(u||=Ac().addAbortListener,c(t,u(e,i)[n])),t}})),Rc=o(((e,t)=>{var{StringPrototypeSlice:n,SymbolIterator:r,TypedArrayPrototypeSet:i,Uint8Array:a}=X(),{Buffer:o}=Ts(),{inspect:s}=Ac();t.exports=class{constructor(){this.head=null,this.tail=null,this.length=0}push(e){let t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}unshift(e){let t={data:e,next:this.head};this.length===0&&(this.tail=t),this.head=t,++this.length}shift(){if(this.length===0)return;let e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}clear(){this.head=this.tail=null,this.length=0}join(e){if(this.length===0)return``;let t=this.head,n=``+t.data;for(;(t=t.next)!==null;)n+=e+t.data;return n}concat(e){if(this.length===0)return o.alloc(0);let t=o.allocUnsafe(e>>>0),n=this.head,r=0;for(;n;)i(t,n.data,r),r+=n.data.length,n=n.next;return t}consume(e,t){let n=this.head.data;if(e<n.length){let t=n.slice(0,e);return this.head.data=n.slice(e),t}return e===n.length?this.shift():t?this._getString(e):this._getBuffer(e)}first(){return this.head.data}*[r](){for(let e=this.head;e;e=e.next)yield e.data}_getString(e){let t=``,r=this.head,i=0;do{let a=r.data;if(e>a.length)t+=a,e-=a.length;else{e===a.length?(t+=a,++i,r.next?this.head=r.next:this.head=this.tail=null):(t+=n(a,0,e),this.head=r,r.data=n(a,e));break}++i}while((r=r.next)!==null);return this.length-=i,t}_getBuffer(e){let t=o.allocUnsafe(e),n=e,r=this.head,s=0;do{let o=r.data;if(e>o.length)i(t,o,n-e),e-=o.length;else{e===o.length?(i(t,o,n-e),++s,r.next?this.head=r.next:this.head=this.tail=null):(i(t,new a(o.buffer,o.byteOffset,e),n-e),this.head=r,r.data=o.slice(e));break}++s}while((r=r.next)!==null);return this.length-=s,t}[Symbol.for(`nodejs.util.inspect.custom`)](e,t){return s(this,{...t,depth:0,customInspect:!1})}}})),zc=o(((e,t)=>{var{MathFloor:n,NumberIsInteger:r}=X(),{validateInteger:i}=jc(),{ERR_INVALID_ARG_VALUE:a}=Oc().codes,o=16*1024,s=16;function c(e,t,n){return e.highWaterMark==null?t?e[n]:null:e.highWaterMark}function l(e){return e?s:o}function u(e,t){i(t,`value`,0),e?s=t:o=t}function d(e,t,i,o){let s=c(t,o,i);if(s!=null){if(!r(s)||s<0)throw new a(o?`options.${i}`:`options.highWaterMark`,s);return n(s)}return l(e.objectMode)}t.exports={getHighWaterMark:d,getDefaultHighWaterMark:l,setDefaultHighWaterMark:u}})),Bc=o(((e,t)=>{var n=Ts(),r=n.Buffer;function i(e,t){for(var n in e)t[n]=e[n]}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?t.exports=n:(i(n,e),e.Buffer=a);function a(e,t,n){return r(e,t,n)}a.prototype=Object.create(r.prototype),i(r,a),a.from=function(e,t,n){if(typeof e==`number`)throw TypeError(`Argument must not be a number`);return r(e,t,n)},a.alloc=function(e,t,n){if(typeof e!=`number`)throw TypeError(`Argument must be a number`);var i=r(e);return t===void 0?i.fill(0):typeof n==`string`?i.fill(t,n):i.fill(t),i},a.allocUnsafe=function(e){if(typeof e!=`number`)throw TypeError(`Argument must be a number`);return r(e)},a.allocUnsafeSlow=function(e){if(typeof e!=`number`)throw TypeError(`Argument must be a number`);return n.SlowBuffer(e)}})),Vc=o((e=>{var t=Bc().Buffer,n=t.isEncoding||function(e){switch(e=``+e,e&&e.toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`binary`:case`base64`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:case`raw`:return!0;default:return!1}};function r(e){if(!e)return`utf8`;for(var t;;)switch(e){case`utf8`:case`utf-8`:return`utf8`;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return`utf16le`;case`latin1`:case`binary`:return`latin1`;case`base64`:case`ascii`:case`hex`:return e;default:if(t)return;e=(``+e).toLowerCase(),t=!0}}function i(e){var i=r(e);if(typeof i!=`string`&&(t.isEncoding===n||!n(e)))throw Error(`Unknown encoding: `+e);return i||e}e.StringDecoder=a;function a(e){this.encoding=i(e);var n;switch(this.encoding){case`utf16le`:this.text=f,this.end=p,n=4;break;case`utf8`:this.fillLast=l,n=4;break;case`base64`:this.text=m,this.end=h,n=3;break;default:this.write=g,this.end=_;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=t.allocUnsafe(n)}a.prototype.write=function(e){if(e.length===0)return``;var t,n;if(this.lastNeed){if(t=this.fillLast(e),t===void 0)return``;n=this.lastNeed,this.lastNeed=0}else n=0;return n<e.length?t?t+this.text(e,n):this.text(e,n):t||``},a.prototype.end=d,a.prototype.text=u,a.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length};function o(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function s(e,t,n){var r=t.length-1;if(r<n)return 0;var i=o(t[r]);return i>=0?(i>0&&(e.lastNeed=i-1),i):--r<n||i===-2?0:(i=o(t[r]),i>=0?(i>0&&(e.lastNeed=i-2),i):--r<n||i===-2?0:(i=o(t[r]),i>=0?(i>0&&(i===2?i=0:e.lastNeed=i-3),i):0))}function c(e,t,n){if((t[0]&192)!=128)return e.lastNeed=0,`�`;if(e.lastNeed>1&&t.length>1){if((t[1]&192)!=128)return e.lastNeed=1,`�`;if(e.lastNeed>2&&t.length>2&&(t[2]&192)!=128)return e.lastNeed=2,`�`}}function l(e){var t=this.lastTotal-this.lastNeed,n=c(this,e,t);if(n!==void 0)return n;if(this.lastNeed<=e.length)return e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,t,0,e.length),this.lastNeed-=e.length}function u(e,t){var n=s(this,e,t);if(!this.lastNeed)return e.toString(`utf8`,t);this.lastTotal=n;var r=e.length-(n-this.lastNeed);return e.copy(this.lastChar,0,r),e.toString(`utf8`,t,r)}function d(e){var t=e&&e.length?this.write(e):``;return this.lastNeed?t+`�`:t}function f(e,t){if((e.length-t)%2==0){var n=e.toString(`utf16le`,t);if(n){var r=n.charCodeAt(n.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString(`utf16le`,t,e.length-1)}function p(e){var t=e&&e.length?this.write(e):``;if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return t+this.lastChar.toString(`utf16le`,0,n)}return t}function m(e,t){var n=(e.length-t)%3;return n===0?e.toString(`base64`,t):(this.lastNeed=3-n,this.lastTotal=3,n===1?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString(`base64`,t,e.length-n))}function h(e){var t=e&&e.length?this.write(e):``;return this.lastNeed?t+this.lastChar.toString(`base64`,0,3-this.lastNeed):t}function g(e){return e.toString(this.encoding)}function _(e){return e&&e.length?this.write(e):``}})),Hc=o(((e,t)=>{var n=Mc(),{PromisePrototypeThen:r,SymbolAsyncIterator:i,SymbolIterator:a}=X(),{Buffer:o}=Ts(),{ERR_INVALID_ARG_TYPE:s,ERR_STREAM_NULL_VALUES:c}=Oc().codes;function l(e,t,l){let u;if(typeof t==`string`||t instanceof o)return new e({objectMode:!0,...l,read(){this.push(t),this.push(null)}});let d;if(t&&t[i])d=!0,u=t[i]();else if(t&&t[a])d=!1,u=t[a]();else throw new s(`iterable`,[`Iterable`],t);let f=new e({objectMode:!0,highWaterMark:1,...l}),p=!1;f._read=function(){p||(p=!0,h())},f._destroy=function(e,t){r(m(e),()=>n.nextTick(t,e),r=>n.nextTick(t,r||e))};async function m(e){let t=e!=null,n=typeof u.throw==`function`;if(t&&n){let{value:t,done:n}=await u.throw(e);if(await t,n)return}if(typeof u.return==`function`){let{value:e}=await u.return();await e}}async function h(){for(;;){try{let{value:e,done:t}=d?await u.next():u.next();if(t)f.push(null);else{let t=e&&typeof e.then==`function`?await e:e;if(t===null)throw p=!1,new c;if(f.push(t))continue;p=!1}}catch(e){f.destroy(e)}break}}return f}t.exports=l})),Uc=o(((e,t)=>{var n=Mc(),{ArrayPrototypeIndexOf:r,NumberIsInteger:i,NumberIsNaN:a,NumberParseInt:o,ObjectDefineProperties:s,ObjectKeys:c,ObjectSetPrototypeOf:l,Promise:u,SafeSet:d,SymbolAsyncDispose:f,SymbolAsyncIterator:p,Symbol:m}=X();t.exports=V,V.ReadableState=ve;var{EventEmitter:h}=ti(),{Stream:g,prependListener:_}=Ic(),{Buffer:v}=Ts(),{addAbortSignal:y}=Lc(),b=Pc(),x=Ac().debuglog(`stream`,e=>{x=e}),S=Rc(),C=Fc(),{getHighWaterMark:w,getDefaultHighWaterMark:T}=zc(),{aggregateTwoErrors:E,codes:{ERR_INVALID_ARG_TYPE:D,ERR_METHOD_NOT_IMPLEMENTED:O,ERR_OUT_OF_RANGE:k,ERR_STREAM_PUSH_AFTER_EOF:A,ERR_STREAM_UNSHIFT_AFTER_END_EVENT:ee},AbortError:j}=Oc(),{validateObject:M}=jc(),N=m(`kPaused`),{StringDecoder:P}=Vc(),te=Hc();l(V.prototype,g.prototype),l(V,g);var F=()=>{},{errorOrDestroy:I}=C,ne=1,re=2,L=4,ie=8,ae=16,oe=32,se=64,ce=128,le=256,ue=512,de=1024,fe=2048,pe=4096,me=8192,he=16384,R=32768,ge=65536,z=1<<17,_e=1<<18;function B(e){return{enumerable:!1,get(){return(this.state&e)!==0},set(t){t?this.state|=e:this.state&=~e}}}s(ve.prototype,{objectMode:B(ne),ended:B(re),endEmitted:B(L),reading:B(ie),constructed:B(ae),sync:B(oe),needReadable:B(se),emittedReadable:B(ce),readableListening:B(le),resumeScheduled:B(ue),errorEmitted:B(de),emitClose:B(fe),autoDestroy:B(pe),destroyed:B(me),closed:B(he),closeEmitted:B(R),multiAwaitDrain:B(ge),readingMore:B(z),dataEmitted:B(_e)});function ve(e,t,n){typeof n!=`boolean`&&(n=t instanceof Kc()),this.state=6192,e&&e.objectMode&&(this.state|=ne),n&&e&&e.readableObjectMode&&(this.state|=ne),this.highWaterMark=e?w(this,e,`readableHighWaterMark`,n):T(!1),this.buffer=new S,this.length=0,this.pipes=[],this.flowing=null,this[N]=null,e&&e.emitClose===!1&&(this.state&=-2049),e&&e.autoDestroy===!1&&(this.state&=-4097),this.errored=null,this.defaultEncoding=e&&e.defaultEncoding||`utf8`,this.awaitDrainWriters=null,this.decoder=null,this.encoding=null,e&&e.encoding&&(this.decoder=new P(e.encoding),this.encoding=e.encoding)}function V(e){if(!(this instanceof V))return new V(e);let t=this instanceof Kc();this._readableState=new ve(e,this,t),e&&(typeof e.read==`function`&&(this._read=e.read),typeof e.destroy==`function`&&(this._destroy=e.destroy),typeof e.construct==`function`&&(this._construct=e.construct),e.signal&&!t&&y(e.signal,this)),g.call(this,e),C.construct(this,()=>{this._readableState.needReadable&&De(this,this._readableState)})}V.prototype.destroy=C.destroy,V.prototype._undestroy=C.undestroy,V.prototype._destroy=function(e,t){t(e)},V.prototype[h.captureRejectionSymbol]=function(e){this.destroy(e)},V.prototype[f]=function(){let e;return this.destroyed||(e=this.readableEnded?null:new j,this.destroy(e)),new u((t,n)=>b(this,r=>r&&r!==e?n(r):t(null)))},V.prototype.push=function(e,t){return ye(this,e,t,!1)},V.prototype.unshift=function(e,t){return ye(this,e,t,!0)};function ye(e,t,n,r){x(`readableAddChunk`,t);let i=e._readableState,a;if((i.state&ne)===0&&(typeof t==`string`?(n||=i.defaultEncoding,i.encoding!==n&&(r&&i.encoding?t=v.from(t,n).toString(i.encoding):(t=v.from(t,n),n=``))):t instanceof v?n=``:g._isUint8Array(t)?(t=g._uint8ArrayToBuffer(t),n=``):t!=null&&(a=new D(`chunk`,[`string`,`Buffer`,`Uint8Array`],t))),a)I(e,a);else if(t===null)i.state&=-9,we(e,i);else if((i.state&ne)!==0||t&&t.length>0)if(r)if((i.state&L)!==0)I(e,new ee);else if(i.destroyed||i.errored)return!1;else be(e,i,t,!0);else if(i.ended)I(e,new A);else if(i.destroyed||i.errored)return!1;else i.state&=-9,i.decoder&&!n?(t=i.decoder.write(t),i.objectMode||t.length!==0?be(e,i,t,!1):De(e,i)):be(e,i,t,!1);else r||(i.state&=-9,De(e,i));return!i.ended&&(i.length<i.highWaterMark||i.length===0)}function be(e,t,n,r){t.flowing&&t.length===0&&!t.sync&&e.listenerCount(`data`)>0?((t.state&ge)===0?t.awaitDrainWriters=null:t.awaitDrainWriters.clear(),t.dataEmitted=!0,e.emit(`data`,n)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),(t.state&se)!==0&&Te(e)),De(e,t)}V.prototype.isPaused=function(){let e=this._readableState;return e[N]===!0||e.flowing===!1},V.prototype.setEncoding=function(e){let t=new P(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;let n=this._readableState.buffer,r=``;for(let e of n)r+=t.write(e);return n.clear(),r!==``&&n.push(r),this._readableState.length=r.length,this};var xe=1073741824;function Se(e){if(e>xe)throw new k(`size`,`<= 1GiB`,e);return e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++,e}function Ce(e,t){return e<=0||t.length===0&&t.ended?0:(t.state&ne)===0?a(e)?t.flowing&&t.length?t.buffer.first().length:t.length:e<=t.length?e:t.ended?t.length:0:1}V.prototype.read=function(e){x(`read`,e),e===void 0?e=NaN:i(e)||(e=o(e,10));let t=this._readableState,n=e;if(e>t.highWaterMark&&(t.highWaterMark=Se(e)),e!==0&&(t.state&=-129),e===0&&t.needReadable&&((t.highWaterMark===0?t.length>0:t.length>=t.highWaterMark)||t.ended))return x(`read: emitReadable`,t.length,t.ended),t.length===0&&t.ended?H(this):Te(this),null;if(e=Ce(e,t),e===0&&t.ended)return t.length===0&&H(this),null;let r=(t.state&se)!==0;if(x(`need readable`,r),(t.length===0||t.length-e<t.highWaterMark)&&(r=!0,x(`length less than watermark`,r)),t.ended||t.reading||t.destroyed||t.errored||!t.constructed)r=!1,x(`reading, ended or constructing`,r);else if(r){x(`do read`),t.state|=40,t.length===0&&(t.state|=se);try{this._read(t.highWaterMark)}catch(e){I(this,e)}t.state&=-33,t.reading||(e=Ce(n,t))}let a;return a=e>0?Le(e,t):null,a===null?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.multiAwaitDrain?t.awaitDrainWriters.clear():t.awaitDrainWriters=null),t.length===0&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&H(this)),a!==null&&!t.errorEmitted&&!t.closeEmitted&&(t.dataEmitted=!0,this.emit(`data`,a)),a};function we(e,t){if(x(`onEofChunk`),!t.ended){if(t.decoder){let e=t.decoder.end();e&&e.length&&(t.buffer.push(e),t.length+=t.objectMode?1:e.length)}t.ended=!0,t.sync?Te(e):(t.needReadable=!1,t.emittedReadable=!0,Ee(e))}}function Te(e){let t=e._readableState;x(`emitReadable`,t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(x(`emitReadable`,t.flowing),t.emittedReadable=!0,n.nextTick(Ee,e))}function Ee(e){let t=e._readableState;x(`emitReadable_`,t.destroyed,t.length,t.ended),!t.destroyed&&!t.errored&&(t.length||t.ended)&&(e.emit(`readable`),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,Pe(e)}function De(e,t){!t.readingMore&&t.constructed&&(t.readingMore=!0,n.nextTick(Oe,e,t))}function Oe(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&t.length===0);){let n=t.length;if(x(`maybeReadMore read 0`),e.read(0),n===t.length)break}t.readingMore=!1}V.prototype._read=function(e){throw new O(`_read()`)},V.prototype.pipe=function(e,t){let r=this,i=this._readableState;i.pipes.length===1&&(i.multiAwaitDrain||(i.multiAwaitDrain=!0,i.awaitDrainWriters=new d(i.awaitDrainWriters?[i.awaitDrainWriters]:[]))),i.pipes.push(e),x(`pipe count=%d opts=%j`,i.pipes.length,t);let a=(!t||t.end!==!1)&&e!==n.stdout&&e!==n.stderr?s:v;i.endEmitted?n.nextTick(a):r.once(`end`,a),e.on(`unpipe`,o);function o(e,t){x(`onunpipe`),e===r&&t&&t.hasUnpiped===!1&&(t.hasUnpiped=!0,u())}function s(){x(`onend`),e.end()}let c,l=!1;function u(){x(`cleanup`),e.removeListener(`close`,h),e.removeListener(`finish`,g),c&&e.removeListener(`drain`,c),e.removeListener(`error`,m),e.removeListener(`unpipe`,o),r.removeListener(`end`,s),r.removeListener(`end`,v),r.removeListener(`data`,p),l=!0,c&&i.awaitDrainWriters&&(!e._writableState||e._writableState.needDrain)&&c()}function f(){l||(i.pipes.length===1&&i.pipes[0]===e?(x(`false write response, pause`,0),i.awaitDrainWriters=e,i.multiAwaitDrain=!1):i.pipes.length>1&&i.pipes.includes(e)&&(x(`false write response, pause`,i.awaitDrainWriters.size),i.awaitDrainWriters.add(e)),r.pause()),c||(c=ke(r,e),e.on(`drain`,c))}r.on(`data`,p);function p(t){x(`ondata`);let n=e.write(t);x(`dest.write`,n),n===!1&&f()}function m(t){if(x(`onerror`,t),v(),e.removeListener(`error`,m),e.listenerCount(`error`)===0){let n=e._writableState||e._readableState;n&&!n.errorEmitted?I(e,t):e.emit(`error`,t)}}_(e,`error`,m);function h(){e.removeListener(`finish`,g),v()}e.once(`close`,h);function g(){x(`onfinish`),e.removeListener(`close`,h),v()}e.once(`finish`,g);function v(){x(`unpipe`),r.unpipe(e)}return e.emit(`pipe`,r),e.writableNeedDrain===!0?f():i.flowing||(x(`pipe resume`),r.resume()),e};function ke(e,t){return function(){let n=e._readableState;n.awaitDrainWriters===t?(x(`pipeOnDrain`,1),n.awaitDrainWriters=null):n.multiAwaitDrain&&(x(`pipeOnDrain`,n.awaitDrainWriters.size),n.awaitDrainWriters.delete(t)),(!n.awaitDrainWriters||n.awaitDrainWriters.size===0)&&e.listenerCount(`data`)&&e.resume()}}V.prototype.unpipe=function(e){let t=this._readableState,n={hasUnpiped:!1};if(t.pipes.length===0)return this;if(!e){let e=t.pipes;t.pipes=[],this.pause();for(let t=0;t<e.length;t++)e[t].emit(`unpipe`,this,{hasUnpiped:!1});return this}let i=r(t.pipes,e);return i===-1?this:(t.pipes.splice(i,1),t.pipes.length===0&&this.pause(),e.emit(`unpipe`,this,n),this)},V.prototype.on=function(e,t){let r=g.prototype.on.call(this,e,t),i=this._readableState;return e===`data`?(i.readableListening=this.listenerCount(`readable`)>0,i.flowing!==!1&&this.resume()):e===`readable`&&!i.endEmitted&&!i.readableListening&&(i.readableListening=i.needReadable=!0,i.flowing=!1,i.emittedReadable=!1,x(`on readable`,i.length,i.reading),i.length?Te(this):i.reading||n.nextTick(je,this)),r},V.prototype.addListener=V.prototype.on,V.prototype.removeListener=function(e,t){let r=g.prototype.removeListener.call(this,e,t);return e===`readable`&&n.nextTick(Ae,this),r},V.prototype.off=V.prototype.removeListener,V.prototype.removeAllListeners=function(e){let t=g.prototype.removeAllListeners.apply(this,arguments);return(e===`readable`||e===void 0)&&n.nextTick(Ae,this),t};function Ae(e){let t=e._readableState;t.readableListening=e.listenerCount(`readable`)>0,t.resumeScheduled&&t[N]===!1?t.flowing=!0:e.listenerCount(`data`)>0?e.resume():t.readableListening||(t.flowing=null)}function je(e){x(`readable nexttick read 0`),e.read(0)}V.prototype.resume=function(){let e=this._readableState;return e.flowing||(x(`resume`),e.flowing=!e.readableListening,Me(this,e)),e[N]=!1,this};function Me(e,t){t.resumeScheduled||(t.resumeScheduled=!0,n.nextTick(Ne,e,t))}function Ne(e,t){x(`resume`,t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit(`resume`),Pe(e),t.flowing&&!t.reading&&e.read(0)}V.prototype.pause=function(){return x(`call pause flowing=%j`,this._readableState.flowing),this._readableState.flowing!==!1&&(x(`pause`),this._readableState.flowing=!1,this.emit(`pause`)),this._readableState[N]=!0,this};function Pe(e){let t=e._readableState;for(x(`flow`,t.flowing);t.flowing&&e.read()!==null;);}V.prototype.wrap=function(e){let t=!1;e.on(`data`,n=>{!this.push(n)&&e.pause&&(t=!0,e.pause())}),e.on(`end`,()=>{this.push(null)}),e.on(`error`,e=>{I(this,e)}),e.on(`close`,()=>{this.destroy()}),e.on(`destroy`,()=>{this.destroy()}),this._read=()=>{t&&e.resume&&(t=!1,e.resume())};let n=c(e);for(let t=1;t<n.length;t++){let r=n[t];this[r]===void 0&&typeof e[r]==`function`&&(this[r]=e[r].bind(e))}return this},V.prototype[p]=function(){return Fe(this)},V.prototype.iterator=function(e){return e!==void 0&&M(e,`options`),Fe(this,e)};function Fe(e,t){typeof e.read!=`function`&&(e=V.wrap(e,{objectMode:!0}));let n=Ie(e,t);return n.stream=e,n}async function*Ie(e,t){let n=F;function r(t){this===e?(n(),n=F):n=t}e.on(`readable`,r);let i,a=b(e,{writable:!1},e=>{i=e?E(i,e):null,n(),n=F});try{for(;;){let t=e.destroyed?null:e.read();if(t!==null)yield t;else if(i)throw i;else if(i===null)return;else await new u(r)}}catch(e){throw i=E(i,e),i}finally{(i||t?.destroyOnReturn!==!1)&&(i===void 0||e._readableState.autoDestroy)?C.destroyer(e,null):(e.off(`readable`,r),a())}}s(V.prototype,{readable:{__proto__:null,get(){let e=this._readableState;return!!e&&e.readable!==!1&&!e.destroyed&&!e.errorEmitted&&!e.endEmitted},set(e){this._readableState&&(this._readableState.readable=!!e)}},readableDidRead:{__proto__:null,enumerable:!1,get:function(){return this._readableState.dataEmitted}},readableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._readableState.readable!==!1&&(this._readableState.destroyed||this._readableState.errored)&&!this._readableState.endEmitted)}},readableHighWaterMark:{__proto__:null,enumerable:!1,get:function(){return this._readableState.highWaterMark}},readableBuffer:{__proto__:null,enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}},readableFlowing:{__proto__:null,enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}},readableLength:{__proto__:null,enumerable:!1,get(){return this._readableState.length}},readableObjectMode:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.objectMode:!1}},readableEncoding:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.encoding:null}},errored:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.errored:null}},closed:{__proto__:null,get(){return this._readableState?this._readableState.closed:!1}},destroyed:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.destroyed:!1},set(e){this._readableState&&(this._readableState.destroyed=e)}},readableEnded:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.endEmitted:!1}}}),s(ve.prototype,{pipesCount:{__proto__:null,get(){return this.pipes.length}},paused:{__proto__:null,get(){return this[N]!==!1},set(e){this[N]=!!e}}}),V._fromList=Le;function Le(e,t){if(t.length===0)return null;let n;return t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(``):t.buffer.length===1?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):n=t.buffer.consume(e,t.decoder),n}function H(e){let t=e._readableState;x(`endReadable`,t.endEmitted),t.endEmitted||(t.ended=!0,n.nextTick(Re,t,e))}function Re(e,t){if(x(`endReadableNT`,e.endEmitted,e.length),!e.errored&&!e.closeEmitted&&!e.endEmitted&&e.length===0){if(e.endEmitted=!0,t.emit(`end`),t.writable&&t.allowHalfOpen===!1)n.nextTick(ze,t);else if(e.autoDestroy){let e=t._writableState;(!e||e.autoDestroy&&(e.finished||e.writable===!1))&&t.destroy()}}}function ze(e){e.writable&&!e.writableEnded&&!e.destroyed&&e.end()}V.from=function(e,t){return te(V,e,t)};var Be;function Ve(){return Be===void 0&&(Be={}),Be}V.fromWeb=function(e,t){return Ve().newStreamReadableFromReadableStream(e,t)},V.toWeb=function(e,t){return Ve().newReadableStreamFromStreamReadable(e,t)},V.wrap=function(e,t){return new V({objectMode:e.readableObjectMode??e.objectMode??!0,...t,destroy(t,n){C.destroyer(e,t),n(t)}}).wrap(e)}})),Wc=o(((e,t)=>{var n=Mc(),{ArrayPrototypeSlice:r,Error:i,FunctionPrototypeSymbolHasInstance:a,ObjectDefineProperty:o,ObjectDefineProperties:s,ObjectSetPrototypeOf:c,StringPrototypeToLowerCase:l,Symbol:u,SymbolHasInstance:d}=X();t.exports=M,M.WritableState=ee;var{EventEmitter:f}=ti(),p=Ic().Stream,{Buffer:m}=Ts(),h=Fc(),{addAbortSignal:g}=Lc(),{getHighWaterMark:_,getDefaultHighWaterMark:v}=zc(),{ERR_INVALID_ARG_TYPE:y,ERR_METHOD_NOT_IMPLEMENTED:b,ERR_MULTIPLE_CALLBACK:x,ERR_STREAM_CANNOT_PIPE:S,ERR_STREAM_DESTROYED:C,ERR_STREAM_ALREADY_FINISHED:w,ERR_STREAM_NULL_VALUES:T,ERR_STREAM_WRITE_AFTER_END:E,ERR_UNKNOWN_ENCODING:D}=Oc().codes,{errorOrDestroy:O}=h;c(M.prototype,p.prototype),c(M,p);function k(){}var A=u(`kOnFinished`);function ee(e,t,n){typeof n!=`boolean`&&(n=t instanceof Kc()),this.objectMode=!!(e&&e.objectMode),n&&(this.objectMode=this.objectMode||!!(e&&e.writableObjectMode)),this.highWaterMark=e?_(this,e,`writableHighWaterMark`,n):v(!1),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;let r=!!(e&&e.decodeStrings===!1);this.decodeStrings=!r,this.defaultEncoding=e&&e.defaultEncoding||`utf8`,this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=I.bind(void 0,t),this.writecb=null,this.writelen=0,this.afterWriteTickInfo=null,j(this),this.pendingcb=0,this.constructed=!0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!e||e.emitClose!==!1,this.autoDestroy=!e||e.autoDestroy!==!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this[A]=[]}function j(e){e.buffered=[],e.bufferedIndex=0,e.allBuffers=!0,e.allNoop=!0}ee.prototype.getBuffer=function(){return r(this.buffered,this.bufferedIndex)},o(ee.prototype,`bufferedRequestCount`,{__proto__:null,get(){return this.buffered.length-this.bufferedIndex}});function M(e){let t=this instanceof Kc();if(!t&&!a(M,this))return new M(e);this._writableState=new ee(e,this,t),e&&(typeof e.write==`function`&&(this._write=e.write),typeof e.writev==`function`&&(this._writev=e.writev),typeof e.destroy==`function`&&(this._destroy=e.destroy),typeof e.final==`function`&&(this._final=e.final),typeof e.construct==`function`&&(this._construct=e.construct),e.signal&&g(e.signal,this)),p.call(this,e),h.construct(this,()=>{let e=this._writableState;e.writing||ie(this,e),ce(this,e)})}o(M,d,{__proto__:null,value:function(e){return a(this,e)?!0:this===M?e&&e._writableState instanceof ee:!1}}),M.prototype.pipe=function(){O(this,new S)};function N(e,t,r,i){let a=e._writableState;if(typeof r==`function`)i=r,r=a.defaultEncoding;else{if(!r)r=a.defaultEncoding;else if(r!==`buffer`&&!m.isEncoding(r))throw new D(r);typeof i!=`function`&&(i=k)}if(t===null)throw new T;if(!a.objectMode)if(typeof t==`string`)a.decodeStrings!==!1&&(t=m.from(t,r),r=`buffer`);else if(t instanceof m)r=`buffer`;else if(p._isUint8Array(t))t=p._uint8ArrayToBuffer(t),r=`buffer`;else throw new y(`chunk`,[`string`,`Buffer`,`Uint8Array`],t);let o;return a.ending?o=new E:a.destroyed&&(o=new C(`write`)),o?(n.nextTick(i,o),O(e,o,!0),o):(a.pendingcb++,P(e,a,t,r,i))}M.prototype.write=function(e,t,n){return N(this,e,t,n)===!0},M.prototype.cork=function(){this._writableState.corked++},M.prototype.uncork=function(){let e=this._writableState;e.corked&&(e.corked--,e.writing||ie(this,e))},M.prototype.setDefaultEncoding=function(e){if(typeof e==`string`&&(e=l(e)),!m.isEncoding(e))throw new D(e);return this._writableState.defaultEncoding=e,this};function P(e,t,n,r,i){let a=t.objectMode?1:n.length;t.length+=a;let o=t.length<t.highWaterMark;return o||(t.needDrain=!0),t.writing||t.corked||t.errored||!t.constructed?(t.buffered.push({chunk:n,encoding:r,callback:i}),t.allBuffers&&r!==`buffer`&&(t.allBuffers=!1),t.allNoop&&i!==k&&(t.allNoop=!1)):(t.writelen=a,t.writecb=i,t.writing=!0,t.sync=!0,e._write(n,r,t.onwrite),t.sync=!1),o&&!t.errored&&!t.destroyed}function te(e,t,n,r,i,a,o){t.writelen=r,t.writecb=o,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new C(`write`)):n?e._writev(i,t.onwrite):e._write(i,a,t.onwrite),t.sync=!1}function F(e,t,n,r){--t.pendingcb,r(n),L(t),O(e,n)}function I(e,t){let r=e._writableState,i=r.sync,a=r.writecb;if(typeof a!=`function`){O(e,new x);return}r.writing=!1,r.writecb=null,r.length-=r.writelen,r.writelen=0,t?(t.stack,r.errored||=t,e._readableState&&!e._readableState.errored&&(e._readableState.errored=t),i?n.nextTick(F,e,r,t,a):F(e,r,t,a)):(r.buffered.length>r.bufferedIndex&&ie(e,r),i?r.afterWriteTickInfo!==null&&r.afterWriteTickInfo.cb===a?r.afterWriteTickInfo.count++:(r.afterWriteTickInfo={count:1,cb:a,stream:e,state:r},n.nextTick(ne,r.afterWriteTickInfo)):re(e,r,1,a))}function ne({stream:e,state:t,count:n,cb:r}){return t.afterWriteTickInfo=null,re(e,t,n,r)}function re(e,t,n,r){for(!t.ending&&!e.destroyed&&t.length===0&&t.needDrain&&(t.needDrain=!1,e.emit(`drain`));n-->0;)t.pendingcb--,r();t.destroyed&&L(t),ce(e,t)}function L(e){if(e.writing)return;for(let t=e.bufferedIndex;t<e.buffered.length;++t){let{chunk:n,callback:r}=e.buffered[t],i=e.objectMode?1:n.length;e.length-=i,r(e.errored??new C(`write`))}let t=e[A].splice(0);for(let n=0;n<t.length;n++)t[n](e.errored??new C(`end`));j(e)}function ie(e,t){if(t.corked||t.bufferProcessing||t.destroyed||!t.constructed)return;let{buffered:n,bufferedIndex:i,objectMode:a}=t,o=n.length-i;if(!o)return;let s=i;if(t.bufferProcessing=!0,o>1&&e._writev){t.pendingcb-=o-1;let i=t.allNoop?k:e=>{for(let t=s;t<n.length;++t)n[t].callback(e)},a=t.allNoop&&s===0?n:r(n,s);a.allBuffers=t.allBuffers,te(e,t,!0,t.length,a,``,i),j(t)}else{do{let{chunk:r,encoding:i,callback:o}=n[s];n[s++]=null,te(e,t,!1,a?1:r.length,r,i,o)}while(s<n.length&&!t.writing);s===n.length?j(t):s>256?(n.splice(0,s),t.bufferedIndex=0):t.bufferedIndex=s}t.bufferProcessing=!1}M.prototype._write=function(e,t,n){if(this._writev)this._writev([{chunk:e,encoding:t}],n);else throw new b(`_write()`)},M.prototype._writev=null,M.prototype.end=function(e,t,r){let a=this._writableState;typeof e==`function`?(r=e,e=null,t=null):typeof t==`function`&&(r=t,t=null);let o;if(e!=null){let n=N(this,e,t);n instanceof i&&(o=n)}return a.corked&&(a.corked=1,this.uncork()),o||(!a.errored&&!a.ending?(a.ending=!0,ce(this,a,!0),a.ended=!0):a.finished?o=new w(`end`):a.destroyed&&(o=new C(`end`))),typeof r==`function`&&(o||a.finished?n.nextTick(r,o):a[A].push(r)),this};function ae(e){return e.ending&&!e.destroyed&&e.constructed&&e.length===0&&!e.errored&&e.buffered.length===0&&!e.finished&&!e.writing&&!e.errorEmitted&&!e.closeEmitted}function oe(e,t){let r=!1;function i(i){if(r){O(e,i??x());return}if(r=!0,t.pendingcb--,i){let n=t[A].splice(0);for(let e=0;e<n.length;e++)n[e](i);O(e,i,t.sync)}else ae(t)&&(t.prefinished=!0,e.emit(`prefinish`),t.pendingcb++,n.nextTick(le,e,t))}t.sync=!0,t.pendingcb++;try{e._final(i)}catch(e){i(e)}t.sync=!1}function se(e,t){!t.prefinished&&!t.finalCalled&&(typeof e._final==`function`&&!t.destroyed?(t.finalCalled=!0,oe(e,t)):(t.prefinished=!0,e.emit(`prefinish`)))}function ce(e,t,r){ae(t)&&(se(e,t),t.pendingcb===0&&(r?(t.pendingcb++,n.nextTick((e,t)=>{ae(t)?le(e,t):t.pendingcb--},e,t)):ae(t)&&(t.pendingcb++,le(e,t))))}function le(e,t){t.pendingcb--,t.finished=!0;let n=t[A].splice(0);for(let e=0;e<n.length;e++)n[e]();if(e.emit(`finish`),t.autoDestroy){let t=e._readableState;(!t||t.autoDestroy&&(t.endEmitted||t.readable===!1))&&e.destroy()}}s(M.prototype,{closed:{__proto__:null,get(){return this._writableState?this._writableState.closed:!1}},destroyed:{__proto__:null,get(){return this._writableState?this._writableState.destroyed:!1},set(e){this._writableState&&(this._writableState.destroyed=e)}},writable:{__proto__:null,get(){let e=this._writableState;return!!e&&e.writable!==!1&&!e.destroyed&&!e.errored&&!e.ending&&!e.ended},set(e){this._writableState&&(this._writableState.writable=!!e)}},writableFinished:{__proto__:null,get(){return this._writableState?this._writableState.finished:!1}},writableObjectMode:{__proto__:null,get(){return this._writableState?this._writableState.objectMode:!1}},writableBuffer:{__proto__:null,get(){return this._writableState&&this._writableState.getBuffer()}},writableEnded:{__proto__:null,get(){return this._writableState?this._writableState.ending:!1}},writableNeedDrain:{__proto__:null,get(){let e=this._writableState;return e?!e.destroyed&&!e.ending&&e.needDrain:!1}},writableHighWaterMark:{__proto__:null,get(){return this._writableState&&this._writableState.highWaterMark}},writableCorked:{__proto__:null,get(){return this._writableState?this._writableState.corked:0}},writableLength:{__proto__:null,get(){return this._writableState&&this._writableState.length}},errored:{__proto__:null,enumerable:!1,get(){return this._writableState?this._writableState.errored:null}},writableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._writableState.writable!==!1&&(this._writableState.destroyed||this._writableState.errored)&&!this._writableState.finished)}}});var ue=h.destroy;M.prototype.destroy=function(e,t){let r=this._writableState;return!r.destroyed&&(r.bufferedIndex<r.buffered.length||r[A].length)&&n.nextTick(L,r),ue.call(this,e,t),this},M.prototype._undestroy=h.undestroy,M.prototype._destroy=function(e,t){t(e)},M.prototype[f.captureRejectionSymbol]=function(e){this.destroy(e)};var de;function fe(){return de===void 0&&(de={}),de}M.fromWeb=function(e,t){return fe().newStreamWritableFromWritableStream(e,t)},M.toWeb=function(e){return fe().newWritableStreamFromStreamWritable(e)}})),Gc=o(((e,t)=>{var n=Mc(),r=Ts(),{isReadable:i,isWritable:a,isIterable:o,isNodeStream:s,isReadableNodeStream:c,isWritableNodeStream:l,isDuplexNodeStream:u,isReadableStream:d,isWritableStream:f}=Nc(),p=Pc(),{AbortError:m,codes:{ERR_INVALID_ARG_TYPE:h,ERR_INVALID_RETURN_VALUE:g}}=Oc(),{destroyer:_}=Fc(),v=Kc(),y=Uc(),b=Wc(),{createDeferredPromise:x}=Ac(),S=Hc(),C=globalThis.Blob||r.Blob,w=C===void 0?function(e){return!1}:function(e){return e instanceof C},T=globalThis.AbortController||kc().AbortController,{FunctionPrototypeCall:E}=X(),D=class extends v{constructor(e){super(e),e?.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),e?.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)}};t.exports=function e(t,r){if(u(t))return t;if(c(t))return k({readable:t});if(l(t))return k({writable:t});if(s(t))return k({writable:!1,readable:!1});if(d(t))return k({readable:y.fromWeb(t)});if(f(t))return k({writable:b.fromWeb(t)});if(typeof t==`function`){let{value:e,write:i,final:a,destroy:s}=O(t);if(o(e))return S(D,e,{objectMode:!0,write:i,final:a,destroy:s});let c=e?.then;if(typeof c==`function`){let t,r=E(c,e,e=>{if(e!=null)throw new g(`nully`,`body`,e)},e=>{_(t,e)});return t=new D({objectMode:!0,readable:!1,write:i,final(e){a(async()=>{try{await r,n.nextTick(e,null)}catch(t){n.nextTick(e,t)}})},destroy:s})}throw new g(`Iterable, AsyncIterable or AsyncFunction`,r,e)}if(w(t))return e(t.arrayBuffer());if(o(t))return S(D,t,{objectMode:!0,writable:!1});if(d(t?.readable)&&f(t?.writable))return D.fromWeb(t);if(typeof t?.writable==`object`||typeof t?.readable==`object`)return k({readable:t!=null&&t.readable?c(t?.readable)?t?.readable:e(t.readable):void 0,writable:t!=null&&t.writable?l(t?.writable)?t?.writable:e(t.writable):void 0});let i=t?.then;if(typeof i==`function`){let e;return E(i,t,t=>{t!=null&&e.push(t),e.push(null)},t=>{_(e,t)}),e=new D({objectMode:!0,writable:!1,read(){}})}throw new h(r,[`Blob`,`ReadableStream`,`WritableStream`,`Stream`,`Iterable`,`AsyncIterable`,`Function`,`{ readable, writable } pair`,`Promise`],t)};function O(e){let{promise:t,resolve:r}=x(),i=new T,a=i.signal;return{value:e((async function*(){for(;;){let e=t;t=null;let{chunk:i,done:o,cb:s}=await e;if(n.nextTick(s),o)return;if(a.aborted)throw new m(void 0,{cause:a.reason});({promise:t,resolve:r}=x()),yield i}})(),{signal:a}),write(e,t,n){let i=r;r=null,i({chunk:e,done:!1,cb:n})},final(e){let t=r;r=null,t({done:!0,cb:e})},destroy(e,t){i.abort(),t(e)}}}function k(e){let t=e.readable&&typeof e.readable.read!=`function`?y.wrap(e.readable):e.readable,n=e.writable,r=!!i(t),o=!!a(n),s,c,l,u,d;function f(e){let t=u;u=null,t?t(e):e&&d.destroy(e)}return d=new D({readableObjectMode:!!(t!=null&&t.readableObjectMode),writableObjectMode:!!(n!=null&&n.writableObjectMode),readable:r,writable:o}),o&&(p(n,e=>{o=!1,e&&_(t,e),f(e)}),d._write=function(e,t,r){n.write(e,t)?r():s=r},d._final=function(e){n.end(),c=e},n.on(`drain`,function(){if(s){let e=s;s=null,e()}}),n.on(`finish`,function(){if(c){let e=c;c=null,e()}})),r&&(p(t,e=>{r=!1,e&&_(t,e),f(e)}),t.on(`readable`,function(){if(l){let e=l;l=null,e()}}),t.on(`end`,function(){d.push(null)}),d._read=function(){for(;;){let e=t.read();if(e===null){l=d._read;return}if(!d.push(e))return}}),d._destroy=function(e,r){!e&&u!==null&&(e=new m),l=null,s=null,c=null,u===null?r(e):(u=r,_(n,e),_(t,e))},d}})),Kc=o(((e,t)=>{var{ObjectDefineProperties:n,ObjectGetOwnPropertyDescriptor:r,ObjectKeys:i,ObjectSetPrototypeOf:a}=X();t.exports=c;var o=Uc(),s=Wc();a(c.prototype,o.prototype),a(c,o);{let e=i(s.prototype);for(let t=0;t<e.length;t++){let n=e[t];c.prototype[n]||(c.prototype[n]=s.prototype[n])}}function c(e){if(!(this instanceof c))return new c(e);o.call(this,e),s.call(this,e),e?(this.allowHalfOpen=e.allowHalfOpen!==!1,e.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),e.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)):this.allowHalfOpen=!0}n(c.prototype,{writable:{__proto__:null,...r(s.prototype,`writable`)},writableHighWaterMark:{__proto__:null,...r(s.prototype,`writableHighWaterMark`)},writableObjectMode:{__proto__:null,...r(s.prototype,`writableObjectMode`)},writableBuffer:{__proto__:null,...r(s.prototype,`writableBuffer`)},writableLength:{__proto__:null,...r(s.prototype,`writableLength`)},writableFinished:{__proto__:null,...r(s.prototype,`writableFinished`)},writableCorked:{__proto__:null,...r(s.prototype,`writableCorked`)},writableEnded:{__proto__:null,...r(s.prototype,`writableEnded`)},writableNeedDrain:{__proto__:null,...r(s.prototype,`writableNeedDrain`)},destroyed:{__proto__:null,get(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set(e){this._readableState&&this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}});var l;function u(){return l===void 0&&(l={}),l}c.fromWeb=function(e,t){return u().newStreamDuplexFromReadableWritablePair(e,t)},c.toWeb=function(e){return u().newReadableWritablePairFromDuplex(e)};var d;c.from=function(e){return d||=Gc(),d(e,`body`)}})),qc=o(((e,t)=>{var{ObjectSetPrototypeOf:n,Symbol:r}=X();t.exports=c;var{ERR_METHOD_NOT_IMPLEMENTED:i}=Oc().codes,a=Kc(),{getHighWaterMark:o}=zc();n(c.prototype,a.prototype),n(c,a);var s=r(`kCallback`);function c(e){if(!(this instanceof c))return new c(e);let t=e?o(this,e,`readableHighWaterMark`,!0):null;t===0&&(e={...e,highWaterMark:null,readableHighWaterMark:t,writableHighWaterMark:e.writableHighWaterMark||0}),a.call(this,e),this._readableState.sync=!1,this[s]=null,e&&(typeof e.transform==`function`&&(this._transform=e.transform),typeof e.flush==`function`&&(this._flush=e.flush)),this.on(`prefinish`,u)}function l(e){typeof this._flush==`function`&&!this.destroyed?this._flush((t,n)=>{if(t){e?e(t):this.destroy(t);return}n!=null&&this.push(n),this.push(null),e&&e()}):(this.push(null),e&&e())}function u(){this._final!==l&&l.call(this)}c.prototype._final=l,c.prototype._transform=function(e,t,n){throw new i(`_transform()`)},c.prototype._write=function(e,t,n){let r=this._readableState,i=this._writableState,a=r.length;this._transform(e,t,(e,t)=>{if(e){n(e);return}t!=null&&this.push(t),i.ended||a===r.length||r.length<r.highWaterMark?n():this[s]=n})},c.prototype._read=function(){if(this[s]){let e=this[s];this[s]=null,e()}}})),Jc=o(((e,t)=>{var{ObjectSetPrototypeOf:n}=X();t.exports=i;var r=qc();n(i.prototype,r.prototype),n(i,r);function i(e){if(!(this instanceof i))return new i(e);r.call(this,e)}i.prototype._transform=function(e,t,n){n(null,e)}})),Yc=o(((e,t)=>{var n=Mc(),{ArrayIsArray:r,Promise:i,SymbolAsyncIterator:a,SymbolDispose:o}=X(),s=Pc(),{once:c}=Ac(),l=Fc(),u=Kc(),{aggregateTwoErrors:d,codes:{ERR_INVALID_ARG_TYPE:f,ERR_INVALID_RETURN_VALUE:p,ERR_MISSING_ARGS:m,ERR_STREAM_DESTROYED:h,ERR_STREAM_PREMATURE_CLOSE:g},AbortError:_}=Oc(),{validateFunction:v,validateAbortSignal:y}=jc(),{isIterable:b,isReadable:x,isReadableNodeStream:S,isNodeStream:C,isTransformStream:w,isWebStream:T,isReadableStream:E,isReadableFinished:D}=Nc(),O=globalThis.AbortController||kc().AbortController,k,A,ee;function j(e,t,n){let r=!1;return e.on(`close`,()=>{r=!0}),{destroy:t=>{r||(r=!0,l.destroyer(e,t||new h(`pipe`)))},cleanup:s(e,{readable:t,writable:n},e=>{r=!e})}}function M(e){return v(e[e.length-1],`streams[stream.length - 1]`),e.pop()}function N(e){if(b(e))return e;if(S(e))return P(e);throw new f(`val`,[`Readable`,`Iterable`,`AsyncIterable`],e)}async function*P(e){A||=Uc(),yield*A.prototype[a].call(e)}async function te(e,t,n,{end:r}){let a,o=null,c=e=>{if(e&&(a=e),o){let e=o;o=null,e()}},l=()=>new i((e,t)=>{a?t(a):o=()=>{a?t(a):e()}});t.on(`drain`,c);let u=s(t,{readable:!1},c);try{t.writableNeedDrain&&await l();for await(let n of e)t.write(n)||await l();r&&(t.end(),await l()),n()}catch(e){n(a===e?e:d(a,e))}finally{u(),t.off(`drain`,c)}}async function F(e,t,n,{end:r}){w(t)&&(t=t.writable);let i=t.getWriter();try{for await(let t of e)await i.ready,i.write(t).catch(()=>{});await i.ready,r&&await i.close(),n()}catch(e){try{await i.abort(e),n(e)}catch(e){n(e)}}}function I(...e){return ne(e,c(M(e)))}function ne(e,t,i){if(e.length===1&&r(e[0])&&(e=e[0]),e.length<2)throw new m(`streams`);let a=new O,s=a.signal,c=i?.signal,l=[];y(c,`options.signal`);function d(){P(new _)}ee||=Ac().addAbortListener;let h;c&&(h=ee(c,d));let g,v,D=[],A=0;function M(e){P(e,--A===0)}function P(e,r){var i;if(e&&(!g||g.code===`ERR_STREAM_PREMATURE_CLOSE`)&&(g=e),!(!g&&!r)){for(;D.length;)D.shift()(g);(i=h)==null||i[o](),a.abort(),r&&(g||l.forEach(e=>e()),n.nextTick(t,g,v))}}let I;for(let t=0;t<e.length;t++){let r=e[t],a=t<e.length-1,o=t>0,c=a||i?.end!==!1,d=t===e.length-1;if(C(r)){if(c){let{destroy:e,cleanup:t}=j(r,a,o);D.push(e),x(r)&&d&&l.push(t)}function e(e){e&&e.name!==`AbortError`&&e.code!==`ERR_STREAM_PREMATURE_CLOSE`&&M(e)}r.on(`error`,e),x(r)&&d&&l.push(()=>{r.removeListener(`error`,e)})}if(t===0)if(typeof r==`function`){if(I=r({signal:s}),!b(I))throw new p(`Iterable, AsyncIterable or Stream`,`source`,I)}else I=b(r)||S(r)||w(r)?r:u.from(r);else if(typeof r==`function`)if(I=w(I)?N(I?.readable):N(I),I=r(I,{signal:s}),a){if(!b(I,!0))throw new p(`AsyncIterable`,`transform[${t-1}]`,I)}else{k||=Jc();let e=new k({objectMode:!0}),t=I?.then;if(typeof t==`function`)A++,t.call(I,t=>{v=t,t!=null&&e.write(t),c&&e.end(),n.nextTick(M)},t=>{e.destroy(t),n.nextTick(M,t)});else if(b(I,!0))A++,te(I,e,M,{end:c});else if(E(I)||w(I)){let t=I.readable||I;A++,te(t,e,M,{end:c})}else throw new p(`AsyncIterable or Promise`,`destination`,I);I=e;let{destroy:r,cleanup:i}=j(I,!1,!0);D.push(r),d&&l.push(i)}else if(C(r)){if(S(I)){A+=2;let e=re(I,r,M,{end:c});x(r)&&d&&l.push(e)}else if(w(I)||E(I)){let e=I.readable||I;A++,te(e,r,M,{end:c})}else if(b(I))A++,te(I,r,M,{end:c});else throw new f(`val`,[`Readable`,`Iterable`,`AsyncIterable`,`ReadableStream`,`TransformStream`],I);I=r}else if(T(r)){if(S(I))A++,F(N(I),r,M,{end:c});else if(E(I)||b(I))A++,F(I,r,M,{end:c});else if(w(I))A++,F(I.readable,r,M,{end:c});else throw new f(`val`,[`Readable`,`Iterable`,`AsyncIterable`,`ReadableStream`,`TransformStream`],I);I=r}else I=u.from(r)}return(s!=null&&s.aborted||c!=null&&c.aborted)&&n.nextTick(d),I}function re(e,t,r,{end:i}){let a=!1;if(t.on(`close`,()=>{a||r(new g)}),e.pipe(t,{end:!1}),i){function r(){a=!0,t.end()}D(e)?n.nextTick(r):e.once(`end`,r)}else r();return s(e,{readable:!0,writable:!1},t=>{let n=e._readableState;t&&t.code===`ERR_STREAM_PREMATURE_CLOSE`&&n&&n.ended&&!n.errored&&!n.errorEmitted?e.once(`end`,r).once(`error`,r):r(t)}),s(t,{readable:!1,writable:!0},r)}t.exports={pipelineImpl:ne,pipeline:I}})),Xc=o(((e,t)=>{var{pipeline:n}=Yc(),r=Kc(),{destroyer:i}=Fc(),{isNodeStream:a,isReadable:o,isWritable:s,isWebStream:c,isTransformStream:l,isWritableStream:u,isReadableStream:d}=Nc(),{AbortError:f,codes:{ERR_INVALID_ARG_VALUE:p,ERR_MISSING_ARGS:m}}=Oc(),h=Pc();t.exports=function(...e){if(e.length===0)throw new m(`streams`);if(e.length===1)return r.from(e[0]);let t=[...e];if(typeof e[0]==`function`&&(e[0]=r.from(e[0])),typeof e[e.length-1]==`function`){let t=e.length-1;e[t]=r.from(e[t])}for(let n=0;n<e.length;++n)if(!(!a(e[n])&&!c(e[n]))){if(n<e.length-1&&!(o(e[n])||d(e[n])||l(e[n])))throw new p(`streams[${n}]`,t[n],`must be readable`);if(n>0&&!(s(e[n])||u(e[n])||l(e[n])))throw new p(`streams[${n}]`,t[n],`must be writable`)}let g,_,v,y,b;function x(e){let t=y;y=null,t?t(e):e?b.destroy(e):!T&&!w&&b.destroy()}let S=e[0],C=n(e,x),w=!!(s(S)||u(S)||l(S)),T=!!(o(C)||d(C)||l(C));if(b=new r({writableObjectMode:!!(S!=null&&S.writableObjectMode),readableObjectMode:!!(C!=null&&C.readableObjectMode),writable:w,readable:T}),w){if(a(S))b._write=function(e,t,n){S.write(e,t)?n():g=n},b._final=function(e){S.end(),_=e},S.on(`drain`,function(){if(g){let e=g;g=null,e()}});else if(c(S)){let e=(l(S)?S.writable:S).getWriter();b._write=async function(t,n,r){try{await e.ready,e.write(t).catch(()=>{}),r()}catch(e){r(e)}},b._final=async function(t){try{await e.ready,e.close().catch(()=>{}),_=t}catch(e){t(e)}}}h(l(C)?C.readable:C,()=>{if(_){let e=_;_=null,e()}})}if(T){if(a(C))C.on(`readable`,function(){if(v){let e=v;v=null,e()}}),C.on(`end`,function(){b.push(null)}),b._read=function(){for(;;){let e=C.read();if(e===null){v=b._read;return}if(!b.push(e))return}};else if(c(C)){let e=(l(C)?C.readable:C).getReader();b._read=async function(){for(;;)try{let{value:t,done:n}=await e.read();if(!b.push(t))return;if(n){b.push(null);return}}catch{return}}}}return b._destroy=function(e,t){!e&&y!==null&&(e=new f),v=null,g=null,_=null,y===null?t(e):(y=t,a(C)&&i(C,e))},b}})),Zc=o(((e,t)=>{var n=globalThis.AbortController||kc().AbortController,{codes:{ERR_INVALID_ARG_VALUE:r,ERR_INVALID_ARG_TYPE:i,ERR_MISSING_ARGS:a,ERR_OUT_OF_RANGE:o},AbortError:s}=Oc(),{validateAbortSignal:c,validateInteger:l,validateObject:u}=jc(),d=X().Symbol(`kWeak`),f=X().Symbol(`kResistStopPropagation`),{finished:p}=Pc(),m=Xc(),{addAbortSignalNoValidate:h}=Lc(),{isWritable:g,isNodeStream:_}=Nc(),{deprecate:v}=Ac(),{ArrayPrototypePush:y,Boolean:b,MathFloor:x,Number:S,NumberIsNaN:C,Promise:w,PromiseReject:T,PromiseResolve:E,PromisePrototypeThen:D,Symbol:O}=X(),k=O(`kEmpty`),A=O(`kEof`);function ee(e,t){if(t!=null&&u(t,`options`),t?.signal!=null&&c(t.signal,`options.signal`),_(e)&&!g(e))throw new r(`stream`,e,`must be writable`);let n=m(this,e);return t!=null&&t.signal&&h(t.signal,n),n}function j(e,t){if(typeof e!=`function`)throw new i(`fn`,[`Function`,`AsyncFunction`],e);t!=null&&u(t,`options`),t?.signal!=null&&c(t.signal,`options.signal`);let n=1;t?.concurrency!=null&&(n=x(t.concurrency));let r=n-1;return t?.highWaterMark!=null&&(r=x(t.highWaterMark)),l(n,`options.concurrency`,1),l(r,`options.highWaterMark`,0),r+=n,async function*(){let i=Ac().AbortSignalAny([t?.signal].filter(b)),a=this,o=[],c={signal:i},l,u,d=!1,f=0;function p(){d=!0,m()}function m(){--f,h()}function h(){u&&!d&&f<n&&o.length<r&&(u(),u=null)}async function g(){try{for await(let t of a){if(d)return;if(i.aborted)throw new s;try{if(t=e(t,c),t===k)continue;t=E(t)}catch(e){t=T(e)}f+=1,D(t,m,p),o.push(t),l&&=(l(),null),!d&&(o.length>=r||f>=n)&&await new w(e=>{u=e})}o.push(A)}catch(e){let t=T(e);D(t,m,p),o.push(t)}finally{d=!0,l&&=(l(),null)}}g();try{for(;;){for(;o.length>0;){let e=await o[0];if(e===A)return;if(i.aborted)throw new s;e!==k&&(yield e),o.shift(),h()}await new w(e=>{l=e})}}finally{d=!0,u&&=(u(),null)}}.call(this)}function M(e=void 0){return e!=null&&u(e,`options`),e?.signal!=null&&c(e.signal,`options.signal`),async function*(){let t=0;for await(let r of this){var n;if(e!=null&&(n=e.signal)!=null&&n.aborted)throw new s({cause:e.signal.reason});yield[t++,r]}}.call(this)}async function N(e,t=void 0){for await(let n of I.call(this,e,t))return!0;return!1}async function P(e,t=void 0){if(typeof e!=`function`)throw new i(`fn`,[`Function`,`AsyncFunction`],e);return!await N.call(this,async(...t)=>!await e(...t),t)}async function te(e,t){for await(let n of I.call(this,e,t))return n}async function F(e,t){if(typeof e!=`function`)throw new i(`fn`,[`Function`,`AsyncFunction`],e);async function n(t,n){return await e(t,n),k}for await(let e of j.call(this,n,t));}function I(e,t){if(typeof e!=`function`)throw new i(`fn`,[`Function`,`AsyncFunction`],e);async function n(t,n){return await e(t,n)?t:k}return j.call(this,n,t)}var ne=class extends a{constructor(){super(`reduce`),this.message=`Reduce of an empty stream requires an initial value`}};async function re(e,t,r){var a;if(typeof e!=`function`)throw new i(`reducer`,[`Function`,`AsyncFunction`],e);r!=null&&u(r,`options`),r?.signal!=null&&c(r.signal,`options.signal`);let o=arguments.length>1;if(r!=null&&(a=r.signal)!=null&&a.aborted){let e=new s(void 0,{cause:r.signal.reason});throw this.once(`error`,()=>{}),await p(this.destroy(e)),e}let l=new n,m=l.signal;if(r!=null&&r.signal){let e={once:!0,[d]:this,[f]:!0};r.signal.addEventListener(`abort`,()=>l.abort(),e)}let h=!1;try{for await(let n of this){var g;if(h=!0,r!=null&&(g=r.signal)!=null&&g.aborted)throw new s;o?t=await e(t,n,{signal:m}):(t=n,o=!0)}if(!h&&!o)throw new ne}finally{l.abort()}return t}async function L(e){e!=null&&u(e,`options`),e?.signal!=null&&c(e.signal,`options.signal`);let t=[];for await(let r of this){var n;if(e!=null&&(n=e.signal)!=null&&n.aborted)throw new s(void 0,{cause:e.signal.reason});y(t,r)}return t}function ie(e,t){let n=j.call(this,e,t);return async function*(){for await(let e of n)yield*e}.call(this)}function ae(e){if(e=S(e),C(e))return 0;if(e<0)throw new o(`number`,`>= 0`,e);return e}function oe(e,t=void 0){return t!=null&&u(t,`options`),t?.signal!=null&&c(t.signal,`options.signal`),e=ae(e),async function*(){var n;if(t!=null&&(n=t.signal)!=null&&n.aborted)throw new s;for await(let n of this){var r;if(t!=null&&(r=t.signal)!=null&&r.aborted)throw new s;e--<=0&&(yield n)}}.call(this)}function se(e,t=void 0){return t!=null&&u(t,`options`),t?.signal!=null&&c(t.signal,`options.signal`),e=ae(e),async function*(){var n;if(t!=null&&(n=t.signal)!=null&&n.aborted)throw new s;for await(let n of this){var r;if(t!=null&&(r=t.signal)!=null&&r.aborted)throw new s;if(e-->0&&(yield n),e<=0)return}}.call(this)}t.exports.streamReturningOperators={asIndexedPairs:v(M,`readable.asIndexedPairs will be removed in a future version.`),drop:oe,filter:I,flatMap:ie,map:j,take:se,compose:ee},t.exports.promiseReturningOperators={every:P,forEach:F,reduce:re,toArray:L,some:N,find:te}})),Qc=o(((e,t)=>{var{ArrayPrototypePop:n,Promise:r}=X(),{isIterable:i,isNodeStream:a,isWebStream:o}=Nc(),{pipelineImpl:s}=Yc(),{finished:c}=Pc();$c();function l(...e){return new r((t,r)=>{let c,l,u=e[e.length-1];if(u&&typeof u==`object`&&!a(u)&&!i(u)&&!o(u)){let t=n(e);c=t.signal,l=t.end}s(e,(e,n)=>{e?r(e):t(n)},{signal:c,end:l})})}t.exports={finished:c,pipeline:l}})),$c=o(((e,t)=>{var{Buffer:n}=Ts(),{ObjectDefineProperty:r,ObjectKeys:i,ReflectApply:a}=X(),{promisify:{custom:o}}=Ac(),{streamReturningOperators:s,promiseReturningOperators:c}=Zc(),{codes:{ERR_ILLEGAL_CONSTRUCTOR:l}}=Oc(),u=Xc(),{setDefaultHighWaterMark:d,getDefaultHighWaterMark:f}=zc(),{pipeline:p}=Yc(),{destroyer:m}=Fc(),h=Pc(),g=Qc(),_=Nc(),v=t.exports=Ic().Stream;v.isDestroyed=_.isDestroyed,v.isDisturbed=_.isDisturbed,v.isErrored=_.isErrored,v.isReadable=_.isReadable,v.isWritable=_.isWritable,v.Readable=Uc();for(let e of i(s)){let t=s[e];function n(...e){if(new.target)throw l();return v.Readable.from(a(t,this,e))}r(n,`name`,{__proto__:null,value:t.name}),r(n,`length`,{__proto__:null,value:t.length}),r(v.Readable.prototype,e,{__proto__:null,value:n,enumerable:!1,configurable:!0,writable:!0})}for(let e of i(c)){let t=c[e];function n(...e){if(new.target)throw l();return a(t,this,e)}r(n,`name`,{__proto__:null,value:t.name}),r(n,`length`,{__proto__:null,value:t.length}),r(v.Readable.prototype,e,{__proto__:null,value:n,enumerable:!1,configurable:!0,writable:!0})}v.Writable=Wc(),v.Duplex=Kc(),v.Transform=qc(),v.PassThrough=Jc(),v.pipeline=p;var{addAbortSignal:y}=Lc();v.addAbortSignal=y,v.finished=h,v.destroy=m,v.compose=u,v.setDefaultHighWaterMark=d,v.getDefaultHighWaterMark=f,r(v,`promises`,{__proto__:null,configurable:!0,enumerable:!0,get(){return g}}),r(p,o,{__proto__:null,enumerable:!0,get(){return g.pipeline}}),r(h,o,{__proto__:null,enumerable:!0,get(){return g.finished}}),v.Stream=v,v._isUint8Array=function(e){return e instanceof Uint8Array},v._uint8ArrayToBuffer=function(e){return n.from(e.buffer,e.byteOffset,e.byteLength)}})),el=o(((e,t)=>{var n=$c(),r=Qc(),i=n.Readable.destroy;t.exports=n.Readable,t.exports._uint8ArrayToBuffer=n._uint8ArrayToBuffer,t.exports._isUint8Array=n._isUint8Array,t.exports.isDisturbed=n.isDisturbed,t.exports.isErrored=n.isErrored,t.exports.isReadable=n.isReadable,t.exports.Readable=n.Readable,t.exports.Writable=n.Writable,t.exports.Duplex=n.Duplex,t.exports.Transform=n.Transform,t.exports.PassThrough=n.PassThrough,t.exports.addAbortSignal=n.addAbortSignal,t.exports.finished=n.finished,t.exports.destroy=n.destroy,t.exports.destroy=i,t.exports.pipeline=n.pipeline,t.exports.compose=n.compose,Object.defineProperty(n,"promises",{configurable:!0,enumerable:!0,get(){return r}}),t.exports.Stream=n.Stream,t.exports.default=t.exports}))(),tl=Symbol(`iter`);function nl(e,t,n=4){if(n===0)return Object.assign(e,t);for(let r in t)e[r]=nl(e[r]||Object.create(null),t[r],n-1);return e}function rl(e,t,n=4){let r=!1;for(let i in e)if(i in t){let a=n===0?null:rl(e[i],t[i],n-1);if(a!==!1)r||=Object.create(null),r[i]=a;else if(n===3)return!1}return r}function il(e,t,n=4){let r=!1;for(let i in e)if(!(i in t))r||=Object.create(null),r[i]=n===0?null:nl({},e[i],n-1);else if(n!==0){let a=il(e[i],t[i],n-1);if(a!==!1)r||=Object.create(null),r[i]=a;else if(n===3)return!1}return r}var al=class{constructor(e={}){this._id=1,this._ids=Object.create(null),this._ids[``]=1,this._entities=Object.create(null),this._entities[1]=``,this._blankNodeIndex=0,this._factory=e.factory||Hs}_termFromId(e){if(e[0]===`.`){let t=this._entities,n=e.split(`.`);return this._factory.quad(this._termFromId(t[n[1]]),this._termFromId(t[n[2]]),this._termFromId(t[n[3]]),n[4]&&this._termFromId(t[n[4]]))}return Js(e,this._factory)}_termToNumericId(e){if(e.termType===`Quad`){let t=this._termToNumericId(e.subject),n=this._termToNumericId(e.predicate),r=this._termToNumericId(e.object),i;return t&&n&&r&&(lc(e.graph)||(i=this._termToNumericId(e.graph)))&&this._ids[i?`.${t}.${n}.${r}.${i}`:`.${t}.${n}.${r}`]}return this._ids[Ys(e)]}_termToNewNumericId(e){let t=e&&e.termType===`Quad`?`.${this._termToNewNumericId(e.subject)}.${this._termToNewNumericId(e.predicate)}.${this._termToNewNumericId(e.object)}${lc(e.graph)?``:`.${this._termToNewNumericId(e.graph)}`}`:Ys(e);return this._ids[t]||(this._ids[this._entities[++this._id]=t]=this._id)}createBlankNode(e){let t,n;if(e)for(t=e=`_:${e}`,n=1;this._ids[t];)t=e+n++;else do t=`_:b${this._blankNodeIndex++}`;while(this._ids[t]);return this._ids[t]=++this._id,this._entities[this._id]=t,this._factory.blankNode(t.substr(2))}},ol=class e{constructor(e,t){this._size=0,this._graphs=Object.create(null),!t&&e&&!e[0]&&typeof e.match!=`function`&&(t=e,e=null),t||={},this._factory=t.factory||Hs,this._entityIndex=t.entityIndex||new al({factory:this._factory}),this._entities=this._entityIndex._entities,this._termFromId=this._entityIndex._termFromId.bind(this._entityIndex),this._termToNumericId=this._entityIndex._termToNumericId.bind(this._entityIndex),this._termToNewNumericId=this._entityIndex._termToNewNumericId.bind(this._entityIndex),e&&this.addAll(e)}get size(){let e=this._size;if(e!==null)return e;e=0;let t=this._graphs,n,r;for(let i in t)for(let a in n=t[i].subjects)for(let t in r=n[a])e+=Object.keys(r[t]).length;return this._size=e}_addToIndex(e,t,n,r){let i=e[t]||(e[t]={}),a=i[n]||(i[n]={}),o=r in a;return o||(a[r]=null),!o}_removeFromIndex(e,t,n,r){let i=e[t],a=i[n];delete a[r];for(let e in a)return;delete i[n];for(let e in i)return;delete e[t]}*_findInIndex(e,t,n,r,i,a,o,s){let c,l,u,d=this._entities,f=this._termFromId(d[s]),p={subject:null,predicate:null,object:null};t&&((c=e,e={})[t]=c[t]);for(let t in e)if(l=e[t]){p[i]=this._termFromId(d[t]),n&&((c=l,l={})[n]=c[n]);for(let e in l)if(u=l[e]){p[a]=this._termFromId(d[e]);let t=r?r in u?[r]:[]:Object.keys(u);for(let e=0;e<t.length;e++)p[o]=this._termFromId(d[t[e]]),yield this._factory.quad(p.subject,p.predicate,p.object,f)}}}_loop(e,t){for(let n in e)t(n)}_loopByKey0(e,t,n){let r,i;if(r=e[t])for(i in r)n(i)}_loopByKey1(e,t,n){let r,i;for(r in e)i=e[r],i[t]&&n(r)}_loopBy2Keys(e,t,n,r){let i,a,o;if((i=e[t])&&(a=i[n]))for(o in a)r(o)}_countInIndex(e,t,n,r){let i=0,a,o,s;t&&((a=e,e={})[t]=a[t]);for(let t in e)if(o=e[t]){n&&((a=o,o={})[n]=a[n]);for(let e in o)(s=o[e])&&(r?r in s&&i++:i+=Object.keys(s).length)}return i}_getGraphs(e){return e=e===``?1:e&&(this._termToNumericId(e)||-1),typeof e==`number`?{[e]:this._graphs[e]}:this._graphs}_uniqueEntities(e){let t=Object.create(null);return n=>{n in t||(t[n]=!0,e(this._termFromId(this._entities[n],this._factory)))}}add(e){return this.addQuad(e),this}addQuad(e,t,n,r){t||(r=e.graph,n=e.object,t=e.predicate,e=e.subject),r=r?this._termToNewNumericId(r):1;let i=this._graphs[r];return i||(i=this._graphs[r]={subjects:{},predicates:{},objects:{}},Object.freeze(i)),e=this._termToNewNumericId(e),t=this._termToNewNumericId(t),n=this._termToNewNumericId(n),this._addToIndex(i.subjects,e,t,n)?(this._addToIndex(i.predicates,t,n,e),this._addToIndex(i.objects,n,e,t),this._size=null,!0):!1}addQuads(e){for(let t=0;t<e.length;t++)this.addQuad(e[t])}delete(e){return this.removeQuad(e),this}has(e,t,n,r){return e&&e.subject&&({subject:e,predicate:t,object:n,graph:r}=e),!this.readQuads(e,t,n,r).next().done}import(e){return e.on(`data`,e=>{this.addQuad(e)}),e}removeQuad(e,t,n,r){t||({subject:e,predicate:t,object:n,graph:r}=e),r=r?this._termToNumericId(r):1;let i=this._graphs,a,o,s;if(!(e&&=this._termToNumericId(e))||!(t&&=this._termToNumericId(t))||!(n&&=this._termToNumericId(n))||!(a=i[r])||!(o=a.subjects[e])||!(s=o[t])||!(n in s))return!1;for(e in this._removeFromIndex(a.subjects,e,t,n),this._removeFromIndex(a.predicates,t,n,e),this._removeFromIndex(a.objects,n,e,t),this._size!==null&&this._size--,a.subjects)return!0;return delete i[r],!0}removeQuads(e){for(let t=0;t<e.length;t++)this.removeQuad(e[t])}remove(e){return e.on(`data`,e=>{this.removeQuad(e)}),e}removeMatches(e,t,n,r){let i=new el.Readable({objectMode:!0}),a=this.readQuads(e,t,n,r);return i._read=e=>{for(;--e>=0;){let{done:e,value:t}=a.next();if(e){i.push(null);return}i.push(t)}},this.remove(i)}deleteGraph(e){return this.removeMatches(null,null,null,e)}getQuads(e,t,n,r){return[...this.readQuads(e,t,n,r)]}*readQuads(e,t,n,r){let i=this._getGraphs(r),a,o,s,c;if(!(e&&!(o=this._termToNumericId(e))||t&&!(s=this._termToNumericId(t))||n&&!(c=this._termToNumericId(n))))for(let e in i)(a=i[e])&&(o?c?yield*this._findInIndex(a.objects,c,o,s,`object`,`subject`,`predicate`,e):yield*this._findInIndex(a.subjects,o,s,null,`subject`,`predicate`,`object`,e):s?yield*this._findInIndex(a.predicates,s,c,null,`predicate`,`object`,`subject`,e):c?yield*this._findInIndex(a.objects,c,null,null,`object`,`subject`,`predicate`,e):yield*this._findInIndex(a.subjects,null,null,null,`subject`,`predicate`,`object`,e))}match(e,t,n,r){return new cl(this,e,t,n,r,{entityIndex:this._entityIndex})}countQuads(e,t,n,r){let i=this._getGraphs(r),a=0,o,s,c,l;if(e&&!(s=this._termToNumericId(e))||t&&!(c=this._termToNumericId(t))||n&&!(l=this._termToNumericId(n)))return 0;for(let r in i)(o=i[r])&&(e?n?a+=this._countInIndex(o.objects,l,s,c):a+=this._countInIndex(o.subjects,s,c,l):t?a+=this._countInIndex(o.predicates,c,l,s):a+=this._countInIndex(o.objects,l,s,c));return a}forEach(e,t,n,r,i){this.some(t=>(e(t,this),!1),t,n,r,i)}every(e,t,n,r,i){return!this.some(t=>!e(t,this),t,n,r,i)}some(e,t,n,r,i){for(let a of this.readQuads(t,n,r,i))if(e(a,this))return!0;return!1}getSubjects(e,t,n){let r=[];return this.forSubjects(e=>{r.push(e)},e,t,n),r}forSubjects(e,t,n,r){let i=this._getGraphs(r),a,o,s;if(e=this._uniqueEntities(e),!(t&&!(o=this._termToNumericId(t))||n&&!(s=this._termToNumericId(n))))for(r in i)(a=i[r])&&(o?s?this._loopBy2Keys(a.predicates,o,s,e):this._loopByKey1(a.subjects,o,e):s?this._loopByKey0(a.objects,s,e):this._loop(a.subjects,e))}getPredicates(e,t,n){let r=[];return this.forPredicates(e=>{r.push(e)},e,t,n),r}forPredicates(e,t,n,r){let i=this._getGraphs(r),a,o,s;if(e=this._uniqueEntities(e),!(t&&!(o=this._termToNumericId(t))||n&&!(s=this._termToNumericId(n))))for(r in i)(a=i[r])&&(o?s?this._loopBy2Keys(a.objects,s,o,e):this._loopByKey0(a.subjects,o,e):s?this._loopByKey1(a.predicates,s,e):this._loop(a.predicates,e))}getObjects(e,t,n){let r=[];return this.forObjects(e=>{r.push(e)},e,t,n),r}forObjects(e,t,n,r){let i=this._getGraphs(r),a,o,s;if(e=this._uniqueEntities(e),!(t&&!(o=this._termToNumericId(t))||n&&!(s=this._termToNumericId(n))))for(r in i)(a=i[r])&&(o?s?this._loopBy2Keys(a.subjects,o,s,e):this._loopByKey1(a.objects,o,e):s?this._loopByKey0(a.predicates,s,e):this._loop(a.objects,e))}getGraphs(e,t,n){let r=[];return this.forGraphs(e=>{r.push(e)},e,t,n),r}forGraphs(e,t,n,r){for(let i in this._graphs)this.some(t=>(e(t.graph),!0),t,n,r,this._termFromId(this._entities[i]))}createBlankNode(e){return this._entityIndex.createBlankNode(e)}extractLists({remove:e=!1,ignoreErrors:t=!1}={}){let n={},r=t?(()=>!0):((e,t)=>{throw Error(`${e.value} ${t}`)}),i=this.getQuads(null,ks.rdf.rest,ks.rdf.nil,null),a=e?[...i]:[];return i.forEach(t=>{let i=[],o=!1,s,c,l=t.graph,u=t.subject;for(;u&&!o;){let e=this.getQuads(null,null,u,null),t=this.getQuads(u,null,null,null),n,d=null,f=null,p=null;for(let i=0;i<t.length&&!o;i++)n=t[i],n.graph.equals(l)?s?o=r(u,`has non-list arcs out`):n.predicate.value===ks.rdf.first?d?o=r(u,`has multiple rdf:first arcs`):a.push(d=n):n.predicate.value===ks.rdf.rest?f?o=r(u,`has multiple rdf:rest arcs`):a.push(f=n):e.length?o=r(u,`can't be subject and object`):(s=n,c=`subject`):o=r(u,`not confined to single graph`);for(let t=0;t<e.length&&!o;++t)n=e[t],s?o=r(u,`can't have coreferences`):n.predicate.value===ks.rdf.rest?p?o=r(u,`has incoming rdf:rest arcs`):p=n:(s=n,c=`object`);d?i.unshift(d.object):o=r(u,`has no list head`),u=p&&p.subject}o?e=!1:s&&(n[s[c].value]=i)}),e&&this.removeQuads(a),n}addAll(t){if(t instanceof cl&&(t=t.filtered),Array.isArray(t))this.addQuads(t);else if(t instanceof e&&t._entityIndex===this._entityIndex)t._size!==0&&(this._graphs=nl(this._graphs,t._graphs),this._size=null);else for(let e of t)this.add(e);return this}contains(t){if(t instanceof cl&&(t=t.filtered),t===this)return!0;if(!(t instanceof e)||this._entityIndex!==t._entityIndex)return t.every(e=>this.has(e));let n=this._graphs,r=t._graphs,i,a,o,s,c;for(let e in r){if(!(i=n[e]))return!1;i=i.subjects;for(let t in a=r[e].subjects){if(!(o=i[t]))return!1;for(let e in s=a[t]){if(!(c=o[e]))return!1;for(let t in s[e])if(!(t in c))return!1}}}return!0}deleteMatches(e,t,n,r){for(let i of this.match(e,t,n,r))this.removeQuad(i);return this}difference(t){if(t&&t instanceof cl&&(t=t.filtered),t===this)return new e({entityIndex:this._entityIndex});if(t instanceof e&&t._entityIndex===this._entityIndex){let n=new e({entityIndex:this._entityIndex}),r=il(this._graphs,t._graphs);return r&&(n._graphs=r,n._size=null),n}return this.filter(e=>!t.has(e))}equals(e){return e instanceof cl&&(e=e.filtered),e===this||this.size===e.size&&this.contains(e)}filter(t){let n=new e({entityIndex:this._entityIndex});for(let e of this)t(e,this)&&n.add(e);return n}intersection(t){if(t instanceof cl&&(t=t.filtered),t===this){let t=new e({entityIndex:this._entityIndex});return t._graphs=nl(Object.create(null),this._graphs),t._size=this._size,t}else if(t instanceof e&&this._entityIndex===t._entityIndex){let n=new e({entityIndex:this._entityIndex}),r=rl(t._graphs,this._graphs);return r&&(n._graphs=r,n._size=null),n}return this.filter(e=>t.has(e))}map(t){let n=new e({entityIndex:this._entityIndex});for(let e of this)n.add(t(e,this));return n}reduce(e,t){let n=this.readQuads(),r=t===void 0?n.next().value:t;for(let t of n)r=e(r,t,this);return r}toArray(){return this.getQuads()}toCanonical(){throw Error(`not implemented`)}toStream(){return this.match()}toString(){return new Tc().quadsToString(this)}union(t){let n=new e({entityIndex:this._entityIndex});return n._graphs=nl(Object.create(null),this._graphs),n._size=this._size,n.addAll(t),n}*[Symbol.iterator](){yield*this.readQuads()}};function sl(e,t,n=0){let r=t[n];if(r&&!(r in e))return!1;let i=!1;for(let a in r?{[r]:e[r]}:e){let r=n===2?null:sl(e[a],t,n+1);r!==!1&&(i||=Object.create(null),i[a]=r)}return i}var cl=class e extends el.Readable{constructor(e,t,n,r,i,a){super({objectMode:!0}),Object.assign(this,{n3Store:e,subject:t,predicate:n,object:r,graph:i,options:a})}get filtered(){if(!this._filtered){let{n3Store:e,graph:t,object:n,predicate:r,subject:i}=this,a=this._filtered=new ol({factory:e._factory,entityIndex:this.options.entityIndex}),o,s,c;if(i&&!(o=a._termToNumericId(i))||r&&!(s=a._termToNumericId(r))||n&&!(c=a._termToNumericId(n)))return a;let l=e._getGraphs(t);for(let e in l){let t,n,r,i;(i=l[e])&&(!o&&s?(n=sl(i.predicates,[s,c,o]))&&(t=sl(i.subjects,[o,s,c]),r=sl(i.objects,[c,o,s])):c?(r=sl(i.objects,[c,o,s]))&&(t=sl(i.subjects,[o,s,c]),n=sl(i.predicates,[s,c,o])):(t=sl(i.subjects,[o,s,c]))&&(n=sl(i.predicates,[s,c,o]),r=sl(i.objects,[c,o,s])),t&&(a._graphs[e]={subjects:t,predicates:n,objects:r}))}a._size=null}return this._filtered}get size(){return this.filtered.size}_read(e){e>0&&!this[tl]&&(this[tl]=this[Symbol.iterator]());let t=this[tl];for(;--e>=0;){let{done:e,value:n}=t.next();if(e){this.push(null);return}this.push(n)}}addAll(e){return this.filtered.addAll(e)}contains(e){return this.filtered.contains(e)}deleteMatches(e,t,n,r){return this.filtered.deleteMatches(e,t,n,r)}difference(e){return this.filtered.difference(e)}equals(e){return this.filtered.equals(e)}every(e,t,n,r,i){return this.filtered.every(e,t,n,r,i)}filter(e){return this.filtered.filter(e)}forEach(e,t,n,r,i){return this.filtered.forEach(e,t,n,r,i)}import(e){return this.filtered.import(e)}intersection(e){return this.filtered.intersection(e)}map(e){return this.filtered.map(e)}some(e,t,n,r,i){return this.filtered.some(e,t,n,r,i)}toCanonical(){return this.filtered.toCanonical()}toStream(){return this._filtered?this._filtered.toStream():this.n3Store.match(this.subject,this.predicate,this.object,this.graph)}union(e){return this._filtered?this._filtered.union(e):this.n3Store.match(this.subject,this.predicate,this.object,this.graph).addAll(e)}toArray(){return this._filtered?this._filtered.toArray():this.n3Store.getQuads(this.subject,this.predicate,this.object,this.graph)}reduce(e,t){return this.filtered.reduce(e,t)}toString(){return new Tc().quadsToString(this)}add(e){return this.filtered.add(e)}delete(e){return this.filtered.delete(e)}has(e){return this.filtered.has(e)}match(t,n,r,i){return new e(this.filtered,t,n,r,i,this.options)}*[Symbol.iterator](){yield*this._filtered||this.n3Store.readQuads(this.subject,this.predicate,this.object,this.graph)}},ll=e=>{let t=new URL(e);return t.hash=``,t.toString()},ul=(e,t)=>{let n=new oc(t),r=Hs.namedNode(t.baseIRI);return n.parse(e).map(({subject:e,predicate:t,object:n})=>Hs.quad(e,t,n,r))},dl=e=>JSON.stringify(e.toJSON()),fl;(function(e){e.subject=`subject`,e.predicate=`predicate`,e.object=`object`,e.graph=`graph`})(fl||={});var pl=Object.values(fl),ml=class{constructor(){this.list=new Set,this.providedByVariable=new Map,this.provideVariable=new Map,this.byQuad={}}add(e){var t,n,r,i;this.list.add(e);for(let[n,r]of e.from)for(let[i]of r)this.providedByVariable.has(n)||this.providedByVariable.set(n,new Map),this.providedByVariable.get(n).has(i)||(t=this.providedByVariable.get(n))==null||t.set(i,new Set),this.providedByVariable.get(n).get(i).add(e);for(let[t,r]of e.to)for(let[i]of r)this.provideVariable.has(t)||this.provideVariable.set(t,new Map),this.provideVariable.get(t).has(i)||(n=this.provideVariable.get(t))==null||n.set(i,new Set),this.provideVariable.get(t).get(i).add(e);e.quad&&((r=this.byQuad)[i=dl(e.quad)]??(r[i]=new Set),this.byQuad[dl(e.quad)].add(e))}remove(e){this.list.delete(e),e.from.forEach((t,n)=>{t.forEach((t,r)=>{var i;(i=this.providedByVariable.get(n)?.get(r))==null||i.delete(e)})}),e.to.forEach((t,n)=>{t.forEach((t,r)=>{var i;(i=this.provideVariable.get(n)?.get(r))==null||i.delete(e)})}),e.quad&&this.byQuad[dl(e.quad)].delete(e)}print(){let e=[];for(let t of this.list){let n=this.formatVariableMap(t.from),r=this.formatVariableMap(t.to);e.push(`${n} ==> ${r}`)}return e.join(`
`)}formatVariableMap(e){let t=[];for(let[n,r]of e)for(let[,e]of r)t.push(`${n}:${e.id}`);return t.join(`, `)}},hl=class{constructor(e,t,n=new ol,r={}){var i;this.moves=new ml,this.variables=new Map,this.graphs=new Map,this.coloredVariables=new Map,this.onNeedResource=r.onNeedResource,this.onDropResource=r.onDropResource,this.onQuadsChanged=r.onQuadsChanged,this.onQueryComplete=r.onQueryComplete,this.onVariableAdded=r.onVariableAdded,this.onVariableRemoved=r.onVariableRemoved,this.store=n,this.query=e;for(let n in t){let r;if(!_l(n,e)&&!gl(n))return;if(_l(n,e)?r=`?${n}`:gl(n)&&(r=n),r)for(let e of t[n])try{new URL(e);let t=new Ws(e);this.moves.add({step:-1,from:new Map,to:new Map([[r,new Map([[yl(t),t]])]])}),this.addVariable(r,t)}catch{}}this.getMissingResources().size===0&&((i=this.onQueryComplete)==null||i.call(this))}getMissingResources(){return this.getGraphs(!1)}addGraph(e,t,n){var r,i;let a=ll(e),o=n&&ll(n),s=this.graphs.get(a)??{uri:a,term:new Ws(a),added:!1,sourceVariables:new Map,redirectsFrom:new Set};if(o&&o!==a){let e=this.graphs.get(o);e&&(e.added=!0,e.redirectTo=a),s.redirectsFrom.add(o)}let c=this.store.getQuads(null,null,null,s.term),l=t.map(e=>new Xs(e.subject,e.predicate,e.object,s.term)),u=l.filter(e=>!c.some(t=>e.equals(t))),d=c.filter(e=>!l.some(t=>e.equals(t)));u.forEach(e=>this.addQuad(e)),d.forEach(e=>this.removeQuad(e)),u.length+d.length>0&&((r=this.onQuadsChanged)==null||r.call(this)),s.added=!0,this.graphs.set(a,s);let f=this.getMissingResources();return f.size===0&&((i=this.onQueryComplete)==null||i.call(this)),{missing:f,notNeeded:`TODO`,added:!0}}isVariablePresent(e,t){return!!this.variables.get(e)?.has(yl(t))}addQuad(e){this.store.addQuad(e);let t=(e,t,n)=>{let r=t[n],i=e[n];return!!(!r||gl(r)&&this.isVariablePresent(r,i)||r===i.value)};this.query.forEach((n,r)=>{if(n.type!==`match`||!pl.every(r=>t(e,n,r)))return;let i=new Map;for(let t of pl){let r=n[t];gl(r)&&(i.has(r)||i.set(r,new Map),i.get(r).set(yl(e[t]),e[t]))}let a=new Map([[n.target,new Map([[yl(e[n.pick]),e[n.pick]]])]]);this.moves.add({step:r,from:i,to:a,quad:e}),this.addVariable(n.target,e[n.pick])})}removeQuad(e){this.store.removeQuad(e),(this.moves.byQuad[dl(e)]??new Set).forEach(e=>this.removeMove(e))}removeMove(e){this.moves.remove(e),e.to.forEach((e,t)=>{e.forEach((e,n)=>{let r=this.moves.provideVariable.get(t)?.get(n);!r||r.size===0?this.removeVariable(t,e):this.detectAndRemoveOrphans(t,e)})})}colorDependents(e,t){var n;if(this.coloredVariables.get(e)?.has(yl(t)))return;this.coloredVariables.has(e)||this.coloredVariables.set(e,new Map),(n=this.coloredVariables.get(e))==null||n.set(yl(t),t);let r=this.moves.providedByVariable.get(e)?.get(yl(t));if(r)for(let e of r)e.to.forEach((e,t)=>{e.forEach(e=>{this.colorDependents(t,e)})})}detectAndRemoveOrphans(e,t){this.coloredVariables=new Map,this.colorDependents(e,t);let n=!1;for(let[e,t]of this.coloredVariables){for(let[r]of t){let t=this.moves.provideVariable.get(e)?.get(r);if(t){for(let e of t){let t=!0;for(let[n,r]of e.from){for(let[e]of r)if(this.coloredVariables.get(n)?.has(e)){t=!1;break}if(!t)break}if(t){n=!0;break}}if(n)break}}if(n)break}if(!n)for(let[e,t]of this.coloredVariables)for(let[,n]of t)this.removeVariable(e,n)}removeVariable(e,t){var n,r,i;if((n=this.variables.get(e))==null||n.delete(yl(t)),(r=this.onVariableRemoved)==null||r.call(this,e,t,this.getVariable(e)),this.variables.get(e)?.size===0&&this.variables.delete(e),t.termType===`NamedNode`){let n=new Ws(ll(t.value)),r=this.graphs.get(n.value);(i=r?.sourceVariables.get(e))==null||i.delete(yl(t)),new Set(r?.sourceVariables.values().flatMap(e=>e.values())).size===0&&this.removeGraph(n.value)}let a=this.moves.providedByVariable.get(e)?.get(yl(t));if(a)for(let e of a)this.removeMove(e)}removeGraph(e){var t,n,r,i;let a=ll(e),o=this.graphs.get(a),s=o?.redirectsFrom??new Set,c=o?.redirectTo;(t=this.onDropResource)==null||t.call(this,a),this.graphs.delete(a);for(let e of s)(n=this.onDropResource)==null||n.call(this,e),this.graphs.delete(e);c&&((r=this.onDropResource)==null||r.call(this,c),this.graphs.delete(c));let l=this.store.getQuads(null,null,null,new Ws(e)),u=l.length>0;l.forEach(e=>this.removeQuad(e)),u&&((i=this.onQuadsChanged)==null||i.call(this))}hopFromVariable(e,t){this.query.forEach((n,r)=>{if(n.type===`transform variable`){if(n.source!==e)return;let i=n.transform(t);i&&(this.moves.add({from:new Map([[n.source,new Map([[yl(t),t]])]]),to:new Map([[n.target,new Map([[yl(i),i]])]]),step:r}),this.addVariable(n.target,i))}else if(n.type===`match`){if(pl.every(t=>n[t]!==e))return;let i=(n,r)=>{let i=new Set,a=n[r];if(!a)i.add(null);else if(!gl(a))i.add(new Ws(a));else if(a===e)i.add(t);else{let e=this.getVariable(a)?.values();i=new Set(e)}return i},a=Object.fromEntries(pl.map(e=>[e,i(n,e)]));for(let e of a.subject)for(let t of a.predicate)for(let i of a.object)for(let o of a.graph){let a=this.store.getQuads(e,t,i,o);for(let e of a){let t=n.target,i=e[n.pick],a=new Map;for(let t of pl)gl(n[t])&&(a.has(n[t])||a.set(n[t],new Map),a.get(n[t]).set(yl(e[t]),e[t]));let o=new Map([[t,new Map([[yl(i),i]])]]);this.moves.add({from:a,to:o,step:r,quad:e}),this.addVariable(t,i)}}}})}addVariable(e,t){var n,r;if(this.isVariablePresent(e,t))return;this.variables.has(e)||this.variables.set(e,new Map),this.variables.get(e).set(yl(t),t);let i=this.query.some(t=>t.type===`add resources`&&t.variable===e),a=this.query.some(t=>t.type===`match`&&pl.some(n=>t[n]===e));if((i||a)&&t.termType===`NamedNode`){let r=ll(t.value);this.graphs.has(r)||(this.graphs.set(r,{added:!1,uri:r,term:t,sourceVariables:new Map,redirectsFrom:new Set}),(n=this.onNeedResource)==null||n.call(this,r));let i=this.graphs.get(r);i.sourceVariables.has(e)||i.sourceVariables.set(e,new Map),i.sourceVariables.get(e).set(yl(t),t)}(r=this.onVariableAdded)==null||r.call(this,e,t,this.getVariable(e)),this.hopFromVariable(e,t)}getVariable(e){let t=_l(e,this.query)?`?${e}`:e;return new Set(this.variables.get(t)?.values())}getVariableAsStringSet(e){return vl(this.getVariable(e))}getAllVariables(){return Object.fromEntries(this.variables.entries().map(([e,t])=>[e,new Set(t.values())]))}getAllVariableNames(){return bl(this.query)}getAllPlainVariables(){let e=this.getAllVariables(),t=this.getAllVariableNames(),n={};for(let r of t)n[r.substring(1)]=e[r]??new Set;return n}getAllVariablesAsStringSets(){return Object.fromEntries(this.variables.entries().map(([e,t])=>[e,vl(new Set(t.values()))]))}getGraphs(e){if(typeof e!=`boolean`)return new Set(this.graphs.keys());let t=new Set;return this.graphs.forEach((n,r)=>{n.added===e&&t.add(r)}),t}};function gl(e){return typeof e==`string`&&e.startsWith(`?`)}function _l(e,t){let n=`?${e}`;return typeof e==`string`&&t.some(e=>{switch(e.type){case`match`:return e.subject===n||e.predicate===n||e.object===n||e.graph===n||e.target===n;case`add resources`:return e.variable===n;case`transform variable`:return e.source===n||e.target===n;default:return!1}})}var vl=e=>new Set([...e].map(e=>e.value)),yl=e=>`${e.termType}:${e.id}`;function bl(e){return e.reduce((e,t)=>{switch(t.type){case`match`:gl(t.graph)&&e.add(t.graph),gl(t.subject)&&e.add(t.subject),gl(t.predicate)&&e.add(t.predicate),gl(t.object)&&e.add(t.object),gl(t.target)&&e.add(t.target);break;case`add resources`:e.add(t.variable);break;case`transform variable`:e.add(t.source),e.add(t.target);break;default:}return e},new Set)}Object.fromEntries(Object.entries({meta:`https://ldhop.example/meta`,status:`https://ldhop.example/status`,missing:`https://ldhop.example/status/missing`,added:`https://ldhop.example/status/added`,failed:`https://ldhop.example/status/failed`,resource:`https://ldhop.example/resource`,variable:`https://ldhop.example/variable`}).map(([e,t])=>[e,new Ws(t)]));var xl=Object.freeze({Agent:`http://xmlns.com/foaf/0.1/Agent`,Document:`http://xmlns.com/foaf/0.1/Document`,Group:`http://xmlns.com/foaf/0.1/Group`,Image:`http://xmlns.com/foaf/0.1/Image`,LabelProperty:`http://xmlns.com/foaf/0.1/LabelProperty`,OnlineAccount:`http://xmlns.com/foaf/0.1/OnlineAccount`,OnlineChatAccount:`http://xmlns.com/foaf/0.1/OnlineChatAccount`,OnlineEcommerceAccount:`http://xmlns.com/foaf/0.1/OnlineEcommerceAccount`,OnlineGamingAccount:`http://xmlns.com/foaf/0.1/OnlineGamingAccount`,Organization:`http://xmlns.com/foaf/0.1/Organization`,Person:`http://xmlns.com/foaf/0.1/Person`,PersonalProfileDocument:`http://xmlns.com/foaf/0.1/PersonalProfileDocument`,Project:`http://xmlns.com/foaf/0.1/Project`,account:`http://xmlns.com/foaf/0.1/account`,accountName:`http://xmlns.com/foaf/0.1/accountName`,accountServiceHomepage:`http://xmlns.com/foaf/0.1/accountServiceHomepage`,age:`http://xmlns.com/foaf/0.1/age`,aimChatID:`http://xmlns.com/foaf/0.1/aimChatID`,based_near:`http://xmlns.com/foaf/0.1/based_near`,birthday:`http://xmlns.com/foaf/0.1/birthday`,currentProject:`http://xmlns.com/foaf/0.1/currentProject`,depiction:`http://xmlns.com/foaf/0.1/depiction`,depicts:`http://xmlns.com/foaf/0.1/depicts`,dnaChecksum:`http://xmlns.com/foaf/0.1/dnaChecksum`,familyName:`http://xmlns.com/foaf/0.1/familyName`,family_name:`http://xmlns.com/foaf/0.1/family_name`,firstName:`http://xmlns.com/foaf/0.1/firstName`,focus:`http://xmlns.com/foaf/0.1/focus`,fundedBy:`http://xmlns.com/foaf/0.1/fundedBy`,geekcode:`http://xmlns.com/foaf/0.1/geekcode`,gender:`http://xmlns.com/foaf/0.1/gender`,givenName:`http://xmlns.com/foaf/0.1/givenName`,givenname:`http://xmlns.com/foaf/0.1/givenname`,holdsAccount:`http://xmlns.com/foaf/0.1/holdsAccount`,homepage:`http://xmlns.com/foaf/0.1/homepage`,icqChatID:`http://xmlns.com/foaf/0.1/icqChatID`,img:`http://xmlns.com/foaf/0.1/img`,interest:`http://xmlns.com/foaf/0.1/interest`,isPrimaryTopicOf:`http://xmlns.com/foaf/0.1/isPrimaryTopicOf`,jabberID:`http://xmlns.com/foaf/0.1/jabberID`,knows:`http://xmlns.com/foaf/0.1/knows`,lastName:`http://xmlns.com/foaf/0.1/lastName`,logo:`http://xmlns.com/foaf/0.1/logo`,made:`http://xmlns.com/foaf/0.1/made`,maker:`http://xmlns.com/foaf/0.1/maker`,mbox:`http://xmlns.com/foaf/0.1/mbox`,mbox_sha1sum:`http://xmlns.com/foaf/0.1/mbox_sha1sum`,member:`http://xmlns.com/foaf/0.1/member`,membershipClass:`http://xmlns.com/foaf/0.1/membershipClass`,msnChatID:`http://xmlns.com/foaf/0.1/msnChatID`,myersBriggs:`http://xmlns.com/foaf/0.1/myersBriggs`,name:`http://xmlns.com/foaf/0.1/name`,nick:`http://xmlns.com/foaf/0.1/nick`,openid:`http://xmlns.com/foaf/0.1/openid`,page:`http://xmlns.com/foaf/0.1/page`,pastProject:`http://xmlns.com/foaf/0.1/pastProject`,phone:`http://xmlns.com/foaf/0.1/phone`,plan:`http://xmlns.com/foaf/0.1/plan`,primaryTopic:`http://xmlns.com/foaf/0.1/primaryTopic`,publications:`http://xmlns.com/foaf/0.1/publications`,schoolHomepage:`http://xmlns.com/foaf/0.1/schoolHomepage`,sha1:`http://xmlns.com/foaf/0.1/sha1`,skypeID:`http://xmlns.com/foaf/0.1/skypeID`,status:`http://xmlns.com/foaf/0.1/status`,surname:`http://xmlns.com/foaf/0.1/surname`,theme:`http://xmlns.com/foaf/0.1/theme`,thumbnail:`http://xmlns.com/foaf/0.1/thumbnail`,tipjar:`http://xmlns.com/foaf/0.1/tipjar`,title:`http://xmlns.com/foaf/0.1/title`,topic:`http://xmlns.com/foaf/0.1/topic`,topic_interest:`http://xmlns.com/foaf/0.1/topic_interest`,weblog:`http://xmlns.com/foaf/0.1/weblog`,workInfoHomepage:`http://xmlns.com/foaf/0.1/workInfoHomepage`,workplaceHomepage:`http://xmlns.com/foaf/0.1/workplaceHomepage`,yahooChatID:`http://xmlns.com/foaf/0.1/yahooChatID`}),Sl=Object.freeze({Resource:`http://www.w3.org/2000/01/rdf-schema#Resource`,Class:`http://www.w3.org/2000/01/rdf-schema#Class`,subClassOf:`http://www.w3.org/2000/01/rdf-schema#subClassOf`,subPropertyOf:`http://www.w3.org/2000/01/rdf-schema#subPropertyOf`,comment:`http://www.w3.org/2000/01/rdf-schema#comment`,label:`http://www.w3.org/2000/01/rdf-schema#label`,domain:`http://www.w3.org/2000/01/rdf-schema#domain`,range:`http://www.w3.org/2000/01/rdf-schema#range`,seeAlso:`http://www.w3.org/2000/01/rdf-schema#seeAlso`,isDefinedBy:`http://www.w3.org/2000/01/rdf-schema#isDefinedBy`,Literal:`http://www.w3.org/2000/01/rdf-schema#Literal`,Container:`http://www.w3.org/2000/01/rdf-schema#Container`,ContainerMembershipProperty:`http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty`,member:`http://www.w3.org/2000/01/rdf-schema#member`,Datatype:`http://www.w3.org/2000/01/rdf-schema#Datatype`}),Cl=Object.freeze({ControlledStorage:`http://www.w3.org/ns/pim/space#ControlledStorage`,PersonalStorage:`http://www.w3.org/ns/pim/space#PersonalStorage`,PublicStorage:`http://www.w3.org/ns/pim/space#PublicStorage`,Storage:`http://www.w3.org/ns/pim/space#Storage`,Workspace:`http://www.w3.org/ns/pim/space#Workspace`,masterWorkspace:`http://www.w3.org/ns/pim/space#masterWorkspace`,preferencesFile:`http://www.w3.org/ns/pim/space#preferencesFile`,storage:`http://www.w3.org/ns/pim/space#storage`,uriPrefix:`http://www.w3.org/ns/pim/space#uriPrefix`,workspace:`http://www.w3.org/ns/pim/space#workspace`}),wl=Object.freeze({Acquaintance:`http://www.w3.org/2006/vcard/ns#Acquaintance`,Address:`http://www.w3.org/2006/vcard/ns#Address`,Agent:`http://www.w3.org/2006/vcard/ns#Agent`,BBS:`http://www.w3.org/2006/vcard/ns#BBS`,Car:`http://www.w3.org/2006/vcard/ns#Car`,Cell:`http://www.w3.org/2006/vcard/ns#Cell`,Child:`http://www.w3.org/2006/vcard/ns#Child`,Colleague:`http://www.w3.org/2006/vcard/ns#Colleague`,Contact:`http://www.w3.org/2006/vcard/ns#Contact`,Coresident:`http://www.w3.org/2006/vcard/ns#Coresident`,Coworker:`http://www.w3.org/2006/vcard/ns#Coworker`,Crush:`http://www.w3.org/2006/vcard/ns#Crush`,Date__workaround:`http://www.w3.org/2006/vcard/ns#Date`,Dom:`http://www.w3.org/2006/vcard/ns#Dom`,Email:`http://www.w3.org/2006/vcard/ns#Email`,Emergency:`http://www.w3.org/2006/vcard/ns#Emergency`,Fax:`http://www.w3.org/2006/vcard/ns#Fax`,Female:`http://www.w3.org/2006/vcard/ns#Female`,Friend:`http://www.w3.org/2006/vcard/ns#Friend`,Gender:`http://www.w3.org/2006/vcard/ns#Gender`,Group:`http://www.w3.org/2006/vcard/ns#Group`,Home:`http://www.w3.org/2006/vcard/ns#Home`,ISDN:`http://www.w3.org/2006/vcard/ns#ISDN`,Individual:`http://www.w3.org/2006/vcard/ns#Individual`,Internet:`http://www.w3.org/2006/vcard/ns#Internet`,Intl__workaround:`http://www.w3.org/2006/vcard/ns#Intl`,Kin:`http://www.w3.org/2006/vcard/ns#Kin`,Kind:`http://www.w3.org/2006/vcard/ns#Kind`,Label:`http://www.w3.org/2006/vcard/ns#Label`,Location:`http://www.w3.org/2006/vcard/ns#Location`,Male:`http://www.w3.org/2006/vcard/ns#Male`,Me:`http://www.w3.org/2006/vcard/ns#Me`,Met:`http://www.w3.org/2006/vcard/ns#Met`,Modem:`http://www.w3.org/2006/vcard/ns#Modem`,Msg:`http://www.w3.org/2006/vcard/ns#Msg`,Muse:`http://www.w3.org/2006/vcard/ns#Muse`,Name:`http://www.w3.org/2006/vcard/ns#Name`,Neighbor:`http://www.w3.org/2006/vcard/ns#Neighbor`,None:`http://www.w3.org/2006/vcard/ns#None`,Organization:`http://www.w3.org/2006/vcard/ns#Organization`,Other:`http://www.w3.org/2006/vcard/ns#Other`,PCS:`http://www.w3.org/2006/vcard/ns#PCS`,Pager:`http://www.w3.org/2006/vcard/ns#Pager`,Parcel:`http://www.w3.org/2006/vcard/ns#Parcel`,Parent:`http://www.w3.org/2006/vcard/ns#Parent`,Postal:`http://www.w3.org/2006/vcard/ns#Postal`,Pref:`http://www.w3.org/2006/vcard/ns#Pref`,RelatedType:`http://www.w3.org/2006/vcard/ns#RelatedType`,Sibling:`http://www.w3.org/2006/vcard/ns#Sibling`,Spouse:`http://www.w3.org/2006/vcard/ns#Spouse`,Sweetheart:`http://www.w3.org/2006/vcard/ns#Sweetheart`,Tel:`http://www.w3.org/2006/vcard/ns#Tel`,TelephoneType:`http://www.w3.org/2006/vcard/ns#TelephoneType`,Text:`http://www.w3.org/2006/vcard/ns#Text`,TextPhone:`http://www.w3.org/2006/vcard/ns#TextPhone`,Type:`http://www.w3.org/2006/vcard/ns#Type`,Unknown:`http://www.w3.org/2006/vcard/ns#Unknown`,VCard:`http://www.w3.org/2006/vcard/ns#VCard`,Video:`http://www.w3.org/2006/vcard/ns#Video`,Voice:`http://www.w3.org/2006/vcard/ns#Voice`,Work:`http://www.w3.org/2006/vcard/ns#Work`,X400:`http://www.w3.org/2006/vcard/ns#X400`,adr:`http://www.w3.org/2006/vcard/ns#adr`,agent:`http://www.w3.org/2006/vcard/ns#agent`,anniversary:`http://www.w3.org/2006/vcard/ns#anniversary`,bday:`http://www.w3.org/2006/vcard/ns#bday`,category:`http://www.w3.org/2006/vcard/ns#category`,class__workaround:`http://www.w3.org/2006/vcard/ns#class`,email:`http://www.w3.org/2006/vcard/ns#email`,fn:`http://www.w3.org/2006/vcard/ns#fn`,geo:`http://www.w3.org/2006/vcard/ns#geo`,hasAdditionalName:`http://www.w3.org/2006/vcard/ns#hasAdditionalName`,hasAddress:`http://www.w3.org/2006/vcard/ns#hasAddress`,hasCalendarBusy:`http://www.w3.org/2006/vcard/ns#hasCalendarBusy`,hasCalendarLink:`http://www.w3.org/2006/vcard/ns#hasCalendarLink`,hasCalendarRequest:`http://www.w3.org/2006/vcard/ns#hasCalendarRequest`,hasCategory:`http://www.w3.org/2006/vcard/ns#hasCategory`,hasCountryName:`http://www.w3.org/2006/vcard/ns#hasCountryName`,hasEmail:`http://www.w3.org/2006/vcard/ns#hasEmail`,hasFN:`http://www.w3.org/2006/vcard/ns#hasFN`,hasFamilyName:`http://www.w3.org/2006/vcard/ns#hasFamilyName`,hasGender:`http://www.w3.org/2006/vcard/ns#hasGender`,hasGeo:`http://www.w3.org/2006/vcard/ns#hasGeo`,hasGivenName:`http://www.w3.org/2006/vcard/ns#hasGivenName`,hasHonorificPrefix:`http://www.w3.org/2006/vcard/ns#hasHonorificPrefix`,hasHonorificSuffix:`http://www.w3.org/2006/vcard/ns#hasHonorificSuffix`,hasInstantMessage:`http://www.w3.org/2006/vcard/ns#hasInstantMessage`,hasKey:`http://www.w3.org/2006/vcard/ns#hasKey`,hasLanguage:`http://www.w3.org/2006/vcard/ns#hasLanguage`,hasLocality:`http://www.w3.org/2006/vcard/ns#hasLocality`,hasLogo:`http://www.w3.org/2006/vcard/ns#hasLogo`,hasMember:`http://www.w3.org/2006/vcard/ns#hasMember`,hasName:`http://www.w3.org/2006/vcard/ns#hasName`,hasNickname:`http://www.w3.org/2006/vcard/ns#hasNickname`,hasNote:`http://www.w3.org/2006/vcard/ns#hasNote`,hasOrganizationName:`http://www.w3.org/2006/vcard/ns#hasOrganizationName`,hasOrganizationUnit:`http://www.w3.org/2006/vcard/ns#hasOrganizationUnit`,hasPhoto:`http://www.w3.org/2006/vcard/ns#hasPhoto`,hasPostalCode:`http://www.w3.org/2006/vcard/ns#hasPostalCode`,hasRegion:`http://www.w3.org/2006/vcard/ns#hasRegion`,hasRelated:`http://www.w3.org/2006/vcard/ns#hasRelated`,hasRole:`http://www.w3.org/2006/vcard/ns#hasRole`,hasSound:`http://www.w3.org/2006/vcard/ns#hasSound`,hasSource:`http://www.w3.org/2006/vcard/ns#hasSource`,hasStreetAddress:`http://www.w3.org/2006/vcard/ns#hasStreetAddress`,hasTelephone:`http://www.w3.org/2006/vcard/ns#hasTelephone`,hasTitle:`http://www.w3.org/2006/vcard/ns#hasTitle`,hasUID:`http://www.w3.org/2006/vcard/ns#hasUID`,hasURL:`http://www.w3.org/2006/vcard/ns#hasURL`,hasValue:`http://www.w3.org/2006/vcard/ns#hasValue`,key:`http://www.w3.org/2006/vcard/ns#key`,label:`http://www.w3.org/2006/vcard/ns#label`,language:`http://www.w3.org/2006/vcard/ns#language`,latitude:`http://www.w3.org/2006/vcard/ns#latitude`,locality:`http://www.w3.org/2006/vcard/ns#locality`,logo:`http://www.w3.org/2006/vcard/ns#logo`,longitude:`http://www.w3.org/2006/vcard/ns#longitude`,mailer:`http://www.w3.org/2006/vcard/ns#mailer`,n:`http://www.w3.org/2006/vcard/ns#n`,nickname:`http://www.w3.org/2006/vcard/ns#nickname`,note:`http://www.w3.org/2006/vcard/ns#note`,org:`http://www.w3.org/2006/vcard/ns#org`,photo:`http://www.w3.org/2006/vcard/ns#photo`,prodid:`http://www.w3.org/2006/vcard/ns#prodid`,region:`http://www.w3.org/2006/vcard/ns#region`,rev:`http://www.w3.org/2006/vcard/ns#rev`,role:`http://www.w3.org/2006/vcard/ns#role`,sound:`http://www.w3.org/2006/vcard/ns#sound`,tel:`http://www.w3.org/2006/vcard/ns#tel`,title:`http://www.w3.org/2006/vcard/ns#title`,tz:`http://www.w3.org/2006/vcard/ns#tz`,url:`http://www.w3.org/2006/vcard/ns#url`,value:`http://www.w3.org/2006/vcard/ns#value`}),Tl=xl,El=Sl,Dl=Cl,Ol=wl,kl=class{get engine(){return this._engine}constructor(e,t,n={}){this.subscriptions=new Map,this.getStore=e,this.query=t,this.callbacks=n}run(e){this.destroy(),this._engine=new hl(this.query,e,void 0,{onNeedResource:e=>this.subscribeToResource(e),onDropResource:e=>this.unsubscribeFromResource(e),onVariableAdded:this.callbacks.onVariableAdded,onVariableRemoved:this.callbacks.onVariableRemoved,onQueryComplete:this.callbacks.onQueryComplete})}destroy(){for(let e of this.subscriptions.values())e();this.subscriptions.clear(),this._engine=void 0}async subscribeToResource(e){await new Promise(e=>setTimeout(e,0)),this.subscriptions.has(e)&&this.subscriptions.get(e)?.();let t=this.getStore().subscribe(e,{accept:`text/turtle`},t=>{if(!t.loading)if(t.error)this._engine?.addGraph(e,[]);else{let n=ul(t.data,{baseIRI:t.finalUrl,format:t.headers.get(`content-type`)??void 0});this._engine?.addGraph(t.finalUrl,n,e)}});this.subscriptions.set(e,t)}unsubscribeFromResource(e){this.subscriptions.get(e)?.(),this.subscriptions.delete(e)}};function Al(e){for(let t of e)if(t.termType===`Literal`)return t.value}function jl(e){for(let t of e)if(t.termType===`NamedNode`)return t.value}var Ml=[{type:`match`,subject:`?webid`,predicate:El.seeAlso,pick:`object`,target:`?profileDocument`},{type:`add resources`,variable:`?profileDocument`},{type:`match`,subject:`?webid`,predicate:Dl.preferencesFile,pick:`object`,target:`?preferencesFile`},{type:`add resources`,variable:`?preferencesFile`},{type:`match`,subject:`?webid`,predicate:Ol.hasPhoto,pick:`object`,target:`?photo`},{type:`match`,subject:`?webid`,predicate:Ol.fn,pick:`object`,target:`?name`},{type:`match`,subject:`?webid`,predicate:Tl.name,pick:`object`,target:`?name`}],Nl=class extends Me{constructor(...e){super(...e),this.shape=`circle`,this.runner=new kl(()=>this.store,Ml,{onVariableAdded:(e,t,n)=>this.handleVariable(e,n),onVariableRemoved:(e,t,n)=>this.handleVariable(e,n)})}handleVariable(e,t){e===`?name`&&(this._name=Al(t)),e===`?photo`&&(this._photo=jl(t))}updated(e){if((e.has(`webid`)||e.has(`store`))&&(this._name=void 0,this._photo=void 0,this.webid?this.runner.run({"?webid":new Set([this.webid])}):this.runner.destroy()),e.has(`_photo`)&&this.updatePhoto(),e.has(`_photoBlobUrl`)){let t=e.get(`_photoBlobUrl`);t&&URL.revokeObjectURL(t)}}updatePhoto(){this.photoUnsub?.(),this.photoUnsub=void 0,this._photo?this.photoUnsub=this.store.subscribe(this._photo,{accept:`image/*`},e=>{!e.loading&&!e.error&&(this._photoBlobUrl=URL.createObjectURL(e.data))}):this._photoBlobUrl=void 0}disconnectedCallback(){super.disconnectedCallback(),this.runner.destroy(),this.photoUnsub?.(),this._photoBlobUrl&&URL.revokeObjectURL(this._photoBlobUrl)}render(){let e=this._name?.split(/\s+/).map(e=>e[0]).join(``);return R`<wa-avatar
      initials=${q(e)}
      image=${q(this._photoBlobUrl)}
      label="Avatar of ${q(this._name)}"
      shape=${this.shape}
    ></wa-avatar>`}static{this.styles=h`
    :host {
      --avatar-size: var(--size);
    }

    wa-avatar {
      --size: var(--avatar-size, 3rem);
    }
  `}};Y([W()],Nl.prototype,`webid`,void 0),Y([W()],Nl.prototype,`shape`,void 0),Y([W({attribute:!1})],Nl.prototype,`store`,void 0),Y([We()],Nl.prototype,`_name`,void 0),Y([We()],Nl.prototype,`_photo`,void 0),Y([We()],Nl.prototype,`_photoBlobUrl`,void 0),Nl=Y([U(`dtp-avatar`)],Nl);var Pl=class extends Me{constructor(...e){super(...e),this.webid=``}render(){return R`<header class="header">
        <a href="/"><dtp-logo class="logo"></dtp-logo></a>
        <a href="/profile/${(0,_s.default)(this.webid)}">
          <dtp-avatar webid=${this.webid} .store=${ys}></dtp-avatar>
        </a>
        <button @click=${this._signout}>sign out</button>
      </header>
      <main>
        <slot></slot>
      </main>`}_signout(){Ka()}static{this.styles=h`
    .logo {
      --size: 2rem;
      justify-self: flex-start;
    }

    dtp-avatar {
      --size: 2rem;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      padding: 1rem;
    }

    .header > :first-child {
      margin-right: auto;
    }
  `}};Y([W()],Pl.prototype,`webid`,void 0),Pl=Y([U(`dtp-layout`)],Pl);var Fl=new WeakMap,Il=e=>{if((e=>e.pattern!==void 0)(e))return e.pattern;let t=Fl.get(e);return t===void 0&&Fl.set(e,t=new URLPattern({pathname:e.path})),t},Ll=class{constructor(e,t,n){this.routes=[],this.o=[],this.t={},this.i=e=>{if(e.routes===this)return;let t=e.routes;this.o.push(t),t.h=this,e.stopImmediatePropagation(),e.onDisconnect=()=>{this.o?.splice(this.o.indexOf(t)>>>0,1)};let n=Rl(this.t);n!==void 0&&t.goto(n)},(this.l=e).addController(this),this.routes=[...t],this.fallback=n?.fallback}link(e){if(e?.startsWith(`/`))return e;if(e?.startsWith(`.`))throw Error(`Not implemented`);return e??=this.u,(this.h?.link()??``)+e}async goto(e){let t;if(this.routes.length===0&&this.fallback===void 0)t=e,this.u=``,this.t={0:t};else{let n=this.p(e);if(n===void 0)throw Error(`No route found for `+e);let r=Il(n).exec({pathname:e})?.pathname.groups??{};if(t=Rl(r),typeof n.enter==`function`&&!1===await n.enter(r))return;this.v=n,this.t=r,this.u=t===void 0?e:e.substring(0,e.length-t.length)}if(t!==void 0)for(let e of this.o)e.goto(t);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(e){let t=this.routes.find((t=>Il(t).test({pathname:e})));return t||this.fallback===void 0?t:this.fallback?{...this.fallback,path:`/*`}:void 0}hostConnected(){this.l.addEventListener(zl.eventName,this.i);let e=new zl(this);this.l.dispatchEvent(e),this._=e.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}},Rl=e=>{let t;for(let n of Object.keys(e))/\d+/.test(n)&&(t===void 0||n>t)&&(t=n);return t&&e[t]},zl=class e extends Event{constructor(t){super(e.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}};zl.eventName=`lit-routes-connected`;var Bl=location.origin||location.protocol+`//`+location.host,Vl=class extends Ll{constructor(){super(...arguments),this.m=e=>{let t=e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||t)return;let n=e.composedPath().find((e=>e.tagName===`A`));if(n===void 0||n.target!==``||n.hasAttribute(`download`)||n.getAttribute(`rel`)===`external`)return;let r=n.href;if(r===``||r.startsWith(`mailto:`))return;let i=window.location;n.origin===Bl&&(e.preventDefault(),r!==i.href&&(window.history.pushState({},``,r),this.goto(n.pathname)))},this.R=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener(`click`,this.m),window.addEventListener(`popstate`,this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener(`click`,this.m),window.removeEventListener(`popstate`,this.R)}},Hl=class extends Event{constructor(e){super(`wa-copy`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Ul=h`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .copy-button__trigger {
    position: relative;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    height: calc(var(--wa-form-control-height) * 0.8);
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  /* Icon swap animation */
  .show {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .hide {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing) reverse;
  }

  @keyframes copy-button-icon-show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .show,
    .hide {
      animation-duration: 1ms;
    }
  }
`,Wl=h`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Gl=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`,Kl=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=Gl[n[e]&63];return t};function ql(e=``){return`${e}${Kl()}`}var Jl=`wa-internal-tooltip`,Yl=`__waCopyButtonAssignedId`,Z=class extends Qe{constructor(){super(...arguments),this.localize=new ut(this),this.isCopying=!1,this.status=`rest`,this.hasCustomTrigger=!1,this.liveAnnouncement=``,this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value=``,this.from=``,this.disabled=!1,this.copyLabel=``,this.successLabel=``,this.errorLabel=``,this.feedbackDuration=1e3,this.tooltipPlacement=`top`,this.tooltip=`full`,this.handleDefaultSlotChange=()=>{let e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement)??null;e!==this.customTriggerEl&&(this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=e),this.hasCustomTrigger=e!==null,e&&this.tooltip!==`none`?(e.id||(e.id=ql(`wa-copy-button-trigger-`),e[Yl]=!0),this.ensureLightTooltip()):this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){return this.status===`success`?this.successLabel||this.localize.term(`copied`):this.status===`error`?this.errorLabel||this.localize.term(`error`):this.copyLabel||this.localize.term(`copy`)}firstUpdated(){this.didSSR?this.updateComplete.then(()=>{this.handleDefaultSlotChange()}):this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){this.customStates.set(`success`,this.status===`success`),this.customStates.set(`error`,this.status===`error`),this.syncTooltipText(),this.status===`success`||this.status===`error`?this.liveAnnouncement=this.currentLabel:this.liveAnnouncement=``}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){this.lightTooltip&&(this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled)}handleTooltipModeChange(e){this.tooltip===`none`?this.removeLightTooltip():e===`none`?this.handleDefaultSlotChange():this.lightTooltip&&this.lightTooltip.setAttribute(`trigger`,this.tooltip===`copy`?`manual`:`hover focus`)}releaseAssignedId(e){e&&e[Yl]&&(e.removeAttribute(`id`),delete e[Yl])}ensureLightTooltip(){if(!this.customTriggerEl)return;let e=this.tooltip===`copy`?`manual`:`hover focus`;if(this.lightTooltip)this.lightTooltip.setAttribute(`for`,this.customTriggerEl.id),this.lightTooltip.setAttribute(`trigger`,e),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel;else{let t=document.createElement(`wa-tooltip`);t.setAttribute(`slot`,Jl),t.setAttribute(`part`,`feedback`),t.setAttribute(`trigger`,e),t.dataset.copyButtonTooltip=``,t.setAttribute(`for`,this.customTriggerEl.id),t.placement=this.tooltipPlacement,t.disabled=this.disabled,t.textContent=this.currentLabel,this.appendChild(t),this.lightTooltip=t}}removeLightTooltip(){this.lightTooltip&&=(this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),null)}syncTooltipText(){this.lightTooltip&&(this.lightTooltip.textContent=this.currentLabel)}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){let t=this.getRootNode(),n=this.from.includes(`.`),r=this.from.includes(`[`)&&this.from.includes(`]`),i=this.from,a=``;n?[i,a]=this.from.trim().split(`.`):r&&([i,a]=this.from.trim().replace(/\]$/,``).split(`[`));let o=`getElementById`in t?t.getElementById(i):null;o?e=r?o.getAttribute(a)||``:n?o[a]||``:o.textContent||``:(this.showStatus(`error`),this.dispatchEvent(new No))}if(!e)this.showStatus(`error`),this.dispatchEvent(new No);else try{await navigator.clipboard.writeText(e),this.showStatus(`success`),this.dispatchEvent(new Hl({value:e}))}catch{this.showStatus(`error`),this.dispatchEvent(new No)}}async showStatus(e){if(this.status=e,this.copyIcon){let t=e===`success`?this.successIcon:this.errorIcon;await uo(this.copyIcon,`hide`),this.copyIcon.hidden=!0,t.hidden=!1,await uo(t,`show`)}await this.updateComplete;let t=this.tooltip===`none`?null:this.activeTooltip,n=null;t&&(t.show(),n=new Promise(e=>{t.addEventListener(`wa-after-hide`,()=>{this.feedbackTimeout!==null&&(clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null),e()},{once:!0})}),this.feedbackTimeout=window.setTimeout(async()=>{this.feedbackTimeout=null,await t.hide()},this.feedbackDuration)),setTimeout(async()=>{if(n&&await n,this.copyIcon){let t=e===`success`?this.successIcon:this.errorIcon;await uo(t,`hide`),t.hidden=!0,this.copyIcon.hidden=!1,await uo(this.copyIcon,`show`)}this.status=`rest`,this.isCopying=!1},this.feedbackDuration)}render(){let e=!this.hasCustomTrigger&&this.tooltip!==`none`,t=this.tooltip===`copy`?`manual`:`hover focus`;return this.didSSR&&!this.hasUpdated&&(e=!1),R`
      <div class="copy-button__trigger" @click=${this.handleCopy}>
        <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        <button
          class="button"
          part="button"
          type="button"
          id="copy-button"
          aria-label=${this.currentLabel}
          ?disabled=${this.disabled}
          ?hidden=${this.hasCustomTrigger}
        >
          <slot part="copy-icon" name="copy-icon">
            <wa-icon library="system" name="copy" variant="regular"></wa-icon>
          </slot>
          <slot part="success-icon" name="success-icon" variant="solid" hidden>
            <wa-icon library="system" name="check"></wa-icon>
          </slot>
          <slot part="error-icon" name="error-icon" variant="solid" hidden>
            <wa-icon library="system" name="xmark"></wa-icon>
          </slot>
        </button>

        ${e?R`
              <wa-tooltip
                part="feedback"
                for="copy-button"
                placement=${this.tooltipPlacement}
                trigger=${t}
                class=${go({"copy-button-tooltip":!0,"copy-button-tooltip-success":this.status===`success`,"copy-button-tooltip-error":this.status===`error`})}
                ?disabled=${this.disabled}
                >${this.currentLabel}</wa-tooltip
              >
            `:``}
        <slot name="${Jl}"></slot>
        <div class="wa-visually-hidden" role="status" aria-live="polite">${this.liveAnnouncement}</div>
      </div>
    `}};Z.css=[qe,Wl,Ul],H([Ke(`slot[name="copy-icon"]`)],Z.prototype,`copyIcon`,2),H([Ke(`slot[name="success-icon"]`)],Z.prototype,`successIcon`,2),H([Ke(`slot[name="error-icon"]`)],Z.prototype,`errorIcon`,2),H([Ke(`slot:not([name])`)],Z.prototype,`defaultSlot`,2),H([Ke(`wa-tooltip[part="feedback"]`)],Z.prototype,`shadowTooltip`,2),H([We()],Z.prototype,`isCopying`,2),H([We()],Z.prototype,`status`,2),H([We()],Z.prototype,`hasCustomTrigger`,2),H([We()],Z.prototype,`liveAnnouncement`,2),H([W()],Z.prototype,`value`,2),H([W()],Z.prototype,`from`,2),H([W({type:Boolean,reflect:!0})],Z.prototype,`disabled`,2),H([W({attribute:`copy-label`})],Z.prototype,`copyLabel`,2),H([W({attribute:`success-label`})],Z.prototype,`successLabel`,2),H([W({attribute:`error-label`})],Z.prototype,`errorLabel`,2),H([W({attribute:`feedback-duration`,type:Number})],Z.prototype,`feedbackDuration`,2),H([W({attribute:`tooltip-placement`,reflect:!0})],Z.prototype,`tooltipPlacement`,2),H([W({reflect:!0})],Z.prototype,`tooltip`,2),H([fo(`status`)],Z.prototype,`handleStatusChange`,1),H([fo([`copyLabel`,`successLabel`,`errorLabel`])],Z.prototype,`handleLabelChange`,1),H([fo([`tooltipPlacement`,`disabled`],{waitUntilFirstUpdate:!0})],Z.prototype,`handleTooltipOptionsChange`,1),H([fo(`tooltip`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleTooltipModeChange`,1),Z=H([U(`wa-copy-button`)],Z);var Xl=h`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`,Zl=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Ql=h`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`,$l=Math.min,eu=Math.max,tu=Math.round,nu=Math.floor,ru=e=>({x:e,y:e}),iu={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function au(e,t,n){return eu(e,$l(t,n))}function ou(e,t){return typeof e==`function`?e(t):e}function su(e){return e.split(`-`)[0]}function cu(e){return e.split(`-`)[1]}function lu(e){return e===`x`?`y`:`x`}function uu(e){return e===`y`?`height`:`width`}function du(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function fu(e){return lu(du(e))}function pu(e,t,n){n===void 0&&(n=!1);let r=cu(e),i=fu(e),a=uu(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Su(o)),[o,Su(o)]}function mu(e){let t=Su(e);return[hu(e),t,hu(t)]}function hu(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var gu=[`left`,`right`],_u=[`right`,`left`],vu=[`top`,`bottom`],yu=[`bottom`,`top`];function bu(e,t,n){switch(e){case`top`:case`bottom`:return n?t?_u:gu:t?gu:_u;case`left`:case`right`:return t?vu:yu;default:return[]}}function xu(e,t,n,r){let i=cu(e),a=bu(su(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(hu)))),a}function Su(e){let t=su(e);return iu[t]+e.slice(t.length)}function Cu(e){return{top:0,right:0,bottom:0,left:0,...e}}function wu(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Cu(e)}function Tu(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Eu(e,t,n){let{reference:r,floating:i}=e,a=du(t),o=fu(t),s=uu(o),c=su(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(cu(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function Du(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=ou(t,e),p=wu(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Tu(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Tu(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Ou=50,ku=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Du},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Eu(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Ou&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Eu(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Au=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=ou(e,t)||{};if(l==null)return{};let d=wu(u),f={x:n,y:r},p=fu(i),m=uu(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=$l(d[_],T),D=$l(d[v],T),O=E,k=C-h[m]-D,A=C/2-h[m]/2+w,ee=au(O,A,k),j=!c.arrow&&cu(i)!=null&&A!==ee&&a.reference[m]/2-(A<O?E:D)-h[m]/2<0,M=j?A<O?A-O:A-k:0;return{[p]:f[p]+M,data:{[p]:ee,centerOffset:A-ee-M,...j&&{alignmentOffset:M}},reset:j}}}),ju=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=ou(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=su(r),_=du(o),v=su(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Su(o)]:mu(o)),x=p!==`none`;!d&&x&&b.push(...xu(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=pu(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==du(t))||T.every(e=>du(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=du(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Mu=new Set([`left`,`top`]);async function Nu(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=su(n),s=cu(n),c=du(n)===`y`,l=Mu.has(o)?-1:1,u=a&&c?-1:1,d=ou(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Pu=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Nu(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Fu=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=ou(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=du(su(i)),p=lu(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=au(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=au(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},Iu=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=ou(e,t),u=await o.detectOverflow(t,l),d=su(i),f=cu(i),p=du(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=$l(h-u[g],v),x=$l(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=eu(u.left,0),t=eu(u.right,0),n=eu(u.top,0),r=eu(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:eu(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:eu(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function Lu(){return typeof window<`u`}function Ru(e){return Vu(e)?(e.nodeName||``).toLowerCase():`#document`}function zu(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Bu(e){return((Vu(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Vu(e){return Lu()?e instanceof Node||e instanceof zu(e).Node:!1}function Hu(e){return Lu()?e instanceof Element||e instanceof zu(e).Element:!1}function Uu(e){return Lu()?e instanceof HTMLElement||e instanceof zu(e).HTMLElement:!1}function Wu(e){return!Lu()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof zu(e).ShadowRoot}function Gu(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=nd(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Ku(e){return/^(table|td|th)$/.test(Ru(e))}function qu(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Ju=/transform|translate|scale|rotate|perspective|filter/,Yu=/paint|layout|strict|content/,Xu=e=>!!e&&e!==`none`,Zu;function Qu(e){let t=Hu(e)?nd(e):e;return Xu(t.transform)||Xu(t.translate)||Xu(t.scale)||Xu(t.rotate)||Xu(t.perspective)||!ed()&&(Xu(t.backdropFilter)||Xu(t.filter))||Ju.test(t.willChange||``)||Yu.test(t.contain||``)}function $u(e){let t=id(e);for(;Uu(t)&&!td(t);){if(Qu(t))return t;if(qu(t))return null;t=id(t)}return null}function ed(){return Zu??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Zu}function td(e){return/^(html|body|#document)$/.test(Ru(e))}function nd(e){return zu(e).getComputedStyle(e)}function rd(e){return Hu(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function id(e){if(Ru(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Wu(e)&&e.host||Bu(e);return Wu(t)?t.host:t}function ad(e){let t=id(e);return td(t)?e.ownerDocument?e.ownerDocument.body:e.body:Uu(t)&&Gu(t)?t:ad(t)}function od(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ad(e),i=r===e.ownerDocument?.body,a=zu(r);if(i){let e=sd(a);return t.concat(a,a.visualViewport||[],Gu(r)?r:[],e&&n?od(e):[])}else return t.concat(r,od(r,[],n))}function sd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function cd(e){let t=nd(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Uu(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=tu(n)!==a||tu(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ld(e){return Hu(e)?e:e.contextElement}function ud(e){let t=ld(e);if(!Uu(t))return ru(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=cd(t),o=(a?tu(n.width):n.width)/r,s=(a?tu(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var dd=ru(0);function fd(e){let t=zu(e);return!ed()||!t.visualViewport?dd:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function pd(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==zu(e)?!1:t}function md(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ld(e),o=ru(1);t&&(r?Hu(r)&&(o=ud(r)):o=ud(e));let s=pd(a,n,r)?fd(a):ru(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=zu(a),t=r&&Hu(r)?zu(r):r,n=e,i=sd(n);for(;i&&r&&t!==n;){let e=ud(i),t=i.getBoundingClientRect(),r=nd(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=zu(i),i=sd(n)}}return Tu({width:u,height:d,x:c,y:l})}function hd(e,t){let n=rd(e).scrollLeft;return t?t.left+n:md(Bu(e)).left+n}function gd(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-hd(e,n),y:n.top+t.scrollTop}}function _d(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Bu(r),s=t?qu(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=ru(1),u=ru(0),d=Uu(r);if((d||!d&&!a)&&((Ru(r)!==`body`||Gu(o))&&(c=rd(r)),d)){let e=md(r);l=ud(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?gd(o,c):ru(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function vd(e){return Array.from(e.getClientRects())}function yd(e){let t=Bu(e),n=rd(e),r=e.ownerDocument.body,i=eu(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=eu(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+hd(e),s=-n.scrollTop;return nd(r).direction===`rtl`&&(o+=eu(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var bd=25;function xd(e,t){let n=zu(e),r=Bu(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=ed();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=hd(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=bd&&(a-=o)}else l<=bd&&(a+=l);return{width:a,height:o,x:s,y:c}}function Sd(e,t){let n=md(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Uu(e)?ud(e):ru(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Cd(e,t,n){let r;if(t===`viewport`)r=xd(e,n);else if(t===`document`)r=yd(Bu(e));else if(Hu(t))r=Sd(t,n);else{let n=fd(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Tu(r)}function wd(e,t){let n=id(e);return n===t||!Hu(n)||td(n)?!1:nd(n).position===`fixed`||wd(n,t)}function Td(e,t){let n=t.get(e);if(n)return n;let r=od(e,[],!1).filter(e=>Hu(e)&&Ru(e)!==`body`),i=null,a=nd(e).position===`fixed`,o=a?id(e):e;for(;Hu(o)&&!td(o);){let t=nd(o),n=Qu(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||Gu(o)&&!n&&wd(e,o))?r=r.filter(e=>e!==o):i=t,o=id(o)}return t.set(e,r),r}function Ed(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?qu(t)?[]:Td(t,this._c):[].concat(n),r],o=Cd(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Cd(t,a[e],i);s=eu(n.top,s),c=$l(n.right,c),l=$l(n.bottom,l),u=eu(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Dd(e){let{width:t,height:n}=cd(e);return{width:t,height:n}}function Od(e,t,n){let r=Uu(t),i=Bu(t),a=n===`fixed`,o=md(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=ru(0);function l(){c.x=hd(i)}if(r||!r&&!a)if((Ru(t)!==`body`||Gu(i))&&(s=rd(t)),r){let e=md(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?gd(i,s):ru(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function kd(e){return nd(e).position===`static`}function Ad(e,t){if(!Uu(e)||nd(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Bu(e)===n&&(n=n.ownerDocument.body),n}function jd(e,t){let n=zu(e);if(qu(e))return n;if(!Uu(e)){let t=id(e);for(;t&&!td(t);){if(Hu(t)&&!kd(t))return t;t=id(t)}return n}let r=Ad(e,t);for(;r&&Ku(r)&&kd(r);)r=Ad(r,t);return r&&td(r)&&kd(r)&&!Qu(r)?n:r||$u(e)||n}var Md=async function(e){let t=this.getOffsetParent||jd,n=this.getDimensions,r=await n(e.floating);return{reference:Od(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Nd(e){return nd(e).direction===`rtl`}var Pd={convertOffsetParentRelativeRectToViewportRelativeRect:_d,getDocumentElement:Bu,getClippingRect:Ed,getOffsetParent:jd,getElementRects:Md,getClientRects:vd,getDimensions:Dd,getScale:ud,isElement:Hu,isRTL:Nd};function Fd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Id(e,t){let n=null,r,i=Bu(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=nu(d),h=nu(i.clientWidth-(u+f)),g=nu(i.clientHeight-(d+p)),_=nu(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:eu(0,$l(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Fd(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function Ld(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ld(e),u=i||a?[...l?od(l):[],...t?od(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Id(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?md(e):null;c&&g();function g(){let t=md(e);h&&!Fd(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Rd=Pu,zd=Fu,Bd=ju,Vd=Iu,Hd=Au,Ud=(e,t,n)=>{let r=new Map,i={platform:Pd,...n},a={...i.platform,_c:r};return ku(e,t,{...i,platform:a})};function Wd(e){return Kd(e)}function Gd(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Kd(e){for(let t=e;t;t=Gd(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Gd(e);t;t=Gd(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Qu(e)||t.tagName===`BODY`))return t}return null}function qd(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Jd=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),Q=class extends Qe{constructor(){super(...arguments),this.localize=new ut(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Jd,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||qd(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Ld(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Rd({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Vd({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!qd(this.anchor)&&this.boundary===`scroll`&&(t=od(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Bd({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(zd({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Vd({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Hd({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>Pd.getOffsetParent(e,Wd):Pd.getOffsetParent;Ud(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...Pd,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Zl)}render(){return R`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${go({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${go({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?R`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};Q.css=Ql,H([Ke(`.popup`)],Q.prototype,`popup`,2),H([Ke(`.arrow`)],Q.prototype,`arrowEl`,2),H([W({attribute:!1,type:Boolean})],Q.prototype,`SUPPORTS_POPOVER`,2),H([W()],Q.prototype,`anchor`,2),H([W({type:Boolean,reflect:!0})],Q.prototype,`active`,2),H([W({reflect:!0})],Q.prototype,`placement`,2),H([W()],Q.prototype,`boundary`,2),H([W({type:Number})],Q.prototype,`distance`,2),H([W({type:Number})],Q.prototype,`skidding`,2),H([W({type:Boolean})],Q.prototype,`arrow`,2),H([W({attribute:`arrow-placement`})],Q.prototype,`arrowPlacement`,2),H([W({attribute:`arrow-padding`,type:Number})],Q.prototype,`arrowPadding`,2),H([W({type:Boolean})],Q.prototype,`flip`,2),H([W({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],Q.prototype,`flipFallbackPlacements`,2),H([W({attribute:`flip-fallback-strategy`})],Q.prototype,`flipFallbackStrategy`,2),H([W({type:Object})],Q.prototype,`flipBoundary`,2),H([W({attribute:`flip-padding`,type:Number})],Q.prototype,`flipPadding`,2),H([W({type:Boolean})],Q.prototype,`shift`,2),H([W({type:Object})],Q.prototype,`shiftBoundary`,2),H([W({attribute:`shift-padding`,type:Number})],Q.prototype,`shiftPadding`,2),H([W({attribute:`auto-size`})],Q.prototype,`autoSize`,2),H([W()],Q.prototype,`sync`,2),H([W({type:Object})],Q.prototype,`autoSizeBoundary`,2),H([W({attribute:`auto-size-padding`,type:Number})],Q.prototype,`autoSizePadding`,2),H([W({attribute:`hover-bridge`,type:Boolean})],Q.prototype,`hoverBridge`,2),Q=H([U(`wa-popup`)],Q);function Yd(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}var $=class extends Qe{constructor(){super(...arguments),this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&co(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{if(this.hasTrigger(`hover`)){let t=e.relatedTarget,n=!!(t&&this.anchor?.contains(t)),r=!!(t&&this.contains(t));if(n||r)return;clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)}}}connectedCallback(){super.connectedCallback(),typeof document<`u`&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener(`mouseout`,this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=ql(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),so(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new eo;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),oo(this),this.body.hidden=!1,this.popup.active=!0,await uo(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new no)}else{let e=new to;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),so(this),await uo(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new ro)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,n=this.anchor;if(t===n)return;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Yd(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Yd(this,`wa-after-hide`)}render(){return R`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${go({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};$.css=Xl,$.dependencies={"wa-popup":Q},H([Ke(`slot:not([name])`)],$.prototype,`defaultSlot`,2),H([Ke(`.body`)],$.prototype,`body`,2),H([Ke(`wa-popup`)],$.prototype,`popup`,2),H([W()],$.prototype,`placement`,2),H([W({type:Boolean,reflect:!0})],$.prototype,`disabled`,2),H([W({type:Number})],$.prototype,`distance`,2),H([W({type:Boolean,reflect:!0})],$.prototype,`open`,2),H([W({type:Number})],$.prototype,`skidding`,2),H([W({attribute:`show-delay`,type:Number})],$.prototype,`showDelay`,2),H([W({attribute:`hide-delay`,type:Number})],$.prototype,`hideDelay`,2),H([W()],$.prototype,`trigger`,2),H([W({attribute:`without-arrow`,type:Boolean,reflect:!0})],$.prototype,`withoutArrow`,2),H([W()],$.prototype,`for`,2),H([We()],$.prototype,`anchor`,2),H([fo(`open`,{waitUntilFirstUpdate:!0})],$.prototype,`handleOpenChange`,1),H([fo(`for`)],$.prototype,`handleForChange`,1),H([fo([`distance`,`placement`,`skidding`])],$.prototype,`handleOptionsChange`,1),H([fo(`disabled`)],$.prototype,`handleDisabledChange`,1),$=H([U(`wa-tooltip`)],$);var Xd=h`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --popup-border-width: var(--wa-panel-border-width);
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border-top: none;
      border-left: none;
      border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      box-shadow: none;
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: min(var(--max-width), 100vw);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
    user-select: none;
    -webkit-user-select: none;
  }
`,Zd=new Set,Qd=class extends Qe{constructor(){super(...arguments),this.anchor=null,this.placement=`top`,this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest(`[data-popover="close"]`)&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&co(this)&&(e.preventDefault(),e.stopPropagation(),this.open=!1,this.anchor&&typeof this.anchor.focus==`function`&&this.anchor.focus())},this.handleDocumentClick=e=>{this.anchor&&e.composedPath().includes(this.anchor)||e.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||=ql(`wa-popover-`),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),so(this),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has(`open`)&&this.customStates.set(`open`,this.open)}async handleOpenChange(){if(this.open){let e=new eo;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}Zd.forEach(e=>e.open=!1),document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,Zd.add(this),oo(this),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus():this.dialog.focus()}),await uo(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new no)}else{let e=new to;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Zd.delete(this),so(this),await uo(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new ro)}}handleForChange(){let e=this.getRootNode();if(!e)return;let t=this.for?e.getElementById(this.for):null,n=this.anchor;if(t===n)return;let{signal:r}=this.eventController;t&&t.addEventListener(`click`,this.handleAnchorClick,{signal:r}),n&&n.removeEventListener(`click`,this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Yd(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Yd(this,`wa-after-hide`)}render(){return R`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${go({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          shift-padding="8"
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};Qd.css=Xd,Qd.dependencies={"wa-popup":Q},H([Ke(`dialog`)],Qd.prototype,`dialog`,2),H([Ke(`.body`)],Qd.prototype,`body`,2),H([Ke(`wa-popup`)],Qd.prototype,`popup`,2),H([We()],Qd.prototype,`anchor`,2),H([W()],Qd.prototype,`placement`,2),H([W({type:Boolean,reflect:!0})],Qd.prototype,`open`,2),H([W({type:Number})],Qd.prototype,`distance`,2),H([W({type:Number})],Qd.prototype,`skidding`,2),H([W()],Qd.prototype,`for`,2),H([W({attribute:`without-arrow`,type:Boolean,reflect:!0})],Qd.prototype,`withoutArrow`,2),H([fo(`open`,{waitUntilFirstUpdate:!0})],Qd.prototype,`handleOpenChange`,1),H([fo(`for`)],Qd.prototype,`handleForChange`,1),H([fo([`distance`,`placement`,`skidding`])],Qd.prototype,`handleOptionsChange`,1),Qd=H([U(`wa-popover`)],Qd);function $d(e){return`uri`in e}function ef({id:e,uri:t,data:n,language:r}){if(!n||!n.entities)return{};let i=n.entities[e];if(!i)return{};let a=i.labels[r]?.value,o=i.descriptions[r]?.value,s=(i.claims.P18??[]).map(e=>e.mainsnak.datavalue?.value)[0],c=(i.claims.P154??[]).map(e=>e.mainsnak.datavalue?.value)[0],l=s&&`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(s)}?width=300`,u=c&&`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(c)}?width=300`,d=(i.claims.P856??[]).map(e=>e.mainsnak.datavalue?.value)[0];return{id:e,uri:t,label:a,aliases:(i.aliases[r]??[]).map(({value:e})=>e),description:o,officialWebsite:d,image:u||l}}var tf=/^https?:\/\/(w{3}\.)?wikidata\.org\/entity\/([A-Z0-9]*)\/?$/,nf=[{type:`match`,subject:`?webid`,predicate:El.seeAlso,pick:`object`,target:`?profileDocument`},{type:`add resources`,variable:`?profileDocument`},{type:`match`,subject:`?webid`,predicate:Dl.preferencesFile,pick:`object`,target:`?preferencesFile`},{type:`add resources`,variable:`?preferencesFile`},{type:`match`,subject:`?webid`,predicate:Tl.topic_interest,pick:`object`,target:`?interest`}],rf=class extends Me{constructor(...e){super(...e),this.handleVariable=(e,t,n)=>{e===`?interest`&&(this._interests=Array.from(n))},this._runner=new kl(()=>this.store,nf,{onVariableAdded:this.handleVariable,onVariableRemoved:this.handleVariable})}async updated(e){(e.has(`webid`)||e.has(`store`))&&(this._interests=[],this.webid?this._runner.run({"?webid":new Set([this.webid])}):this._runner.destroy())}disconnectedCallback(){super.disconnectedCallback(),this._runner.destroy()}render(){return R`${Array.from(this._interests??new Set).map(e=>e.termType===`NamedNode`?R`<dtp-topic
              uri=${e.id}
              .store=${bs}
            ></dtp-topic>`:void 0)}`}static{this.styles=h`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem 1rem;
    }
  `}};Y([W()],rf.prototype,`webid`,void 0),Y([We()],rf.prototype,`_interests`,void 0),Y([W({attribute:!1})],rf.prototype,`store`,void 0),rf=Y([U(`dtp-interests`)],rf);var af=class extends Me{constructor(...e){super(...e),this.language=`en`,this._data={uri:this.uri,aliases:[]},this._unsubscribes=new Map}async updated(e){if(e.has(`uri`)||e.has(`store`)||e.has(`language`)){if(!this.store)return;this._data={uri:this.uri,aliases:[]};let e=this.uri.match(tf)?.[2]??``;if(!e)return;let t=`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${e}&languages=${this.language}&format=json&origin=*`,n=this.store?.subscribe(t,{},t=>{if(!t.loading&&!t.error){let n=ef({id:e,uri:this.uri,data:t.data,language:this.language});$d(n)&&(this._data=n)}});this._unsubscribes.get(t)?.(),this._unsubscribes.set(t,n)}}disconnectedCallback(){super.disconnectedCallback();let e=this._unsubscribes.values();for(let t of e)t()}render(){return R`
      <button id="interest">
        ${this._data.label??this.uri.split(`/`).pop()}
      </button>
      <wa-popover for="interest">
        <div>
          <img src=${q(this._data.image)} alt="" />
          <header>
            <h3>
              ${this._data.label}
              <a href=${q(this._data?.uri)}>link</a>
            </h3>
            ${this._data.aliases.length>0?R`<div>${this._data.aliases.join(`, `)}</div>`:z}
            ${this._data.officialWebsite?R`<a
                    href=${q(this._data.officialWebsite)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ${this._data.officialWebsite}
                  </a>`:z}
          </header>
          <section>${this._data.description}</section>
        </div>
      </wa-popover>
    `}};Y([W()],af.prototype,`uri`,void 0),Y([W()],af.prototype,`language`,void 0),Y([We()],af.prototype,`_data`,void 0),Y([We()],af.prototype,`store`,void 0),af=Y([U(`dtp-topic`)],af);var of=[{type:`match`,subject:`?webid`,predicate:El.seeAlso,pick:`object`,target:`?profileDocument`},{type:`add resources`,variable:`?profileDocument`},{type:`match`,subject:`?webid`,predicate:Dl.preferencesFile,pick:`object`,target:`?preferencesFile`},{type:`add resources`,variable:`?preferencesFile`},{type:`match`,subject:`?webid`,predicate:Ol.fn,pick:`object`,target:`?name`},{type:`match`,subject:`?webid`,predicate:Tl.name,pick:`object`,target:`?name`}],sf=class extends Me{constructor(...e){super(...e),this.runner=new kl(()=>this.store,of,{onVariableAdded:(e,t,n)=>this.handleVariable(e,n),onVariableRemoved:(e,t,n)=>this.handleVariable(e,n)})}handleVariable(e,t){e===`?name`&&(this._name=Al(t))}updated(e){(e.has(`webid`)||e.has(`store`))&&(this._name=void 0,this.webid?this.runner.run({"?webid":new Set([this.webid])}):this.runner.destroy())}disconnectedCallback(){super.disconnectedCallback(),this.runner.destroy()}render(){return R`${q(this._name)}`}};Y([W()],sf.prototype,`webid`,void 0),Y([We()],sf.prototype,`_name`,void 0),Y([W({attribute:!1})],sf.prototype,`store`,void 0),sf=Y([U(`dtp-name`)],sf);var cf=class extends Me{render(){return R`
      <dtp-name webid=${q(this.webid)} .store=${ys}></dtp-name>
      <div>
        ${this.webid}
        <wa-copy-button value=${q(this.webid)}></wa-copy-button>
      </div>
      <!-- <wa-qr-code value=${q(this.webid)}></wa-qr-code> -->
      <dtp-avatar
        webid=${q(this.webid)}
        shape="square"
        .store=${ys}
      ></dtp-avatar>
      <dtp-interests
        webid=${q(this.webid)}
        .store=${ys}
      ></dtp-interests>
    `}static{this.styles=h`
    dtp-avatar {
      --size: 200px;
    }

    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  `}};Y([W()],cf.prototype,`webid`,void 0),cf=Y([U(`dtp-profile`)],cf);var lf=class extends Me{constructor(...e){super(...e),this._routes=new Vl(this,[{path:`/`,render:()=>R`<div>home</div>`},{path:`/profile`,render:()=>R`/profile`},{path:`/profile/:webid`,render:({webid:e})=>R`<dtp-profile webid=${decodeURIComponent(e)}></dtp-profile>`},{path:`/*`,render:()=>R`404`}])}render(){return R`${this._routes.outlet()}`}};lf=Y([U(`dtp-router`)],lf);var uf=class extends Me{constructor(...e){super(...e),this._updateSessionInfo=()=>{this._info={...Ua().info}},this._redirectFromSessionStorage=()=>{let e=globalThis.sessionStorage.getItem(`previousUrl`);globalThis.sessionStorage.removeItem(`previousUrl`),this._redirect(e)}}connectedCallback(){super.connectedCallback(),qa({restorePreviousSession:!0}).then(e=>{this._info=e}),this._session=Ua(),this._session.events.addListener(K.LOGOUT,this._updateSessionInfo),this._session.events.addListener(K.SESSION_RESTORED,this._redirect),this._session.events.addListener(K.LOGIN,this._redirectFromSessionStorage),this._session.events.addListener(K.ERROR,this._clearPreviousUrl)}_redirect(e){e&&new URL(e).hostname===globalThis.location.hostname&&globalThis.history.replaceState(null,``,e)}_clearPreviousUrl(){globalThis.sessionStorage.removeItem(`previousUrl`)}disconnectedCallback(){super.disconnectedCallback(),this._session?.events.removeListener(K.LOGOUT,this._updateSessionInfo),this._session?.events.removeListener(K.SESSION_RESTORED,this._redirect),this._session?.events.removeListener(K.LOGIN,this._redirectFromSessionStorage),this._session?.events.removeListener(K.ERROR,this._clearPreviousUrl)}render(){if(!this._info)return R`<wa-spinner></wa-spinner>`;if(!this._info.isLoggedIn)return R`<dtp-landing></dtp-landing>`;if(this._info.isLoggedIn)return R`<dtp-layout webid=${q(this._info.webId)}
        ><dtp-router></dtp-router
      ></dtp-layout>`;throw Error(`Unexpected session state`)}};Y([We()],uf.prototype,`_info`,void 0),uf=Y([U(`dtp-main`)],uf);
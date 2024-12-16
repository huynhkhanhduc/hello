(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var Yu={exports:{}},tl={},Xu={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),vc=Symbol.for("react.memo"),yc=Symbol.for("react.lazy"),Fo=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Zu={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Ku}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=ln.prototype;function Bi(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Ku}var Vi=Bi.prototype=new Ju;Vi.constructor=Bi;Gu(Vi,ln.prototype);Vi.isPureReactComponent=!0;var Uo=Array.isArray,qu=Object.prototype.hasOwnProperty,Hi={current:null},bu={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)qu.call(t,r)&&!bu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Gn,type:e,key:i,ref:o,props:l,_owner:Hi.current}}function wc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function kc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $o=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gn:case sc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Sl(o,0):r,Uo(l)?(n="",e!=null&&(n=e.replace($o,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(Wi(l)&&(l=wc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace($o,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Uo(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+Sl(i,u);o+=wr(i,t,n,s,l)}else if(s=gc(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+Sl(i,u++),o+=wr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Sc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},kr={transition:null},xc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Hi};function ts(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=ln;T.Fragment=ac;T.Profiler=dc;T.PureComponent=Bi;T.StrictMode=cc;T.Suspense=hc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;T.act=ts;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Hi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)qu.call(t,s)&&!bu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Gn,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};T.createElement=es;T.createFactory=function(e){var t=es.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:mc,render:e}};T.isValidElement=Wi;T.lazy=function(e){return{$$typeof:yc,_payload:{_status:-1,_result:e},_init:Sc}};T.memo=function(e,t){return{$$typeof:vc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};T.unstable_act=ts;T.useCallback=function(e,t){return ue.current.useCallback(e,t)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,t){return ue.current.useEffect(e,t)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ue.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";Xu.exports=T;var je=Xu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=je,Cc=Symbol.for("react.element"),zc=Symbol.for("react.fragment"),_c=Object.prototype.hasOwnProperty,Nc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_c.call(t,r)&&!Pc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Cc,type:e,key:i,ref:o,props:l,_owner:Nc.current}}tl.Fragment=zc;tl.jsx=ns;tl.jsxs=ns;Yu.exports=tl;var N=Yu.exports,rs={exports:{}},ge={},ls={exports:{}},is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var L=E.length;E.push(P);e:for(;0<L;){var W=L-1>>>1,G=E[W];if(0<l(G,P))E[W]=P,E[L]=G,L=W;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],L=E.pop();if(L!==P){E[0]=L;e:for(var W=0,G=E.length,er=G>>>1;W<er;){var vt=2*(W+1)-1,kl=E[vt],yt=vt+1,tr=E[yt];if(0>l(kl,L))yt<G&&0>l(tr,kl)?(E[W]=tr,E[yt]=L,W=yt):(E[W]=kl,E[vt]=L,W=vt);else if(yt<G&&0>l(tr,L))E[W]=tr,E[yt]=L,W=yt;else break e}}return P}function l(E,P){var L=E.sortIndex-P.sortIndex;return L!==0?L:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],c=[],h=1,m=null,p=3,g=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=E)r(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(c)}}function v(E){if(k=!1,f(E),!w)if(n(s)!==null)w=!0,gl(x);else{var P=n(c);P!==null&&wl(v,P.startTime-E)}}function x(E,P){w=!1,k&&(k=!1,d(_),_=-1),g=!0;var L=p;try{for(f(P),m=n(s);m!==null&&(!(m.expirationTime>P)||E&&!_e());){var W=m.callback;if(typeof W=="function"){m.callback=null,p=m.priorityLevel;var G=W(m.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(s)&&r(s),f(P)}else r(s);m=n(s)}if(m!==null)var er=!0;else{var vt=n(c);vt!==null&&wl(v,vt.startTime-P),er=!1}return er}finally{m=null,p=L,g=!1}}var C=!1,z=null,_=-1,H=5,j=-1;function _e(){return!(e.unstable_now()-j<H)}function an(){if(z!==null){var E=e.unstable_now();j=E;var P=!0;try{P=z(!0,E)}finally{P?cn():(C=!1,z=null)}}else C=!1}var cn;if(typeof a=="function")cn=function(){a(an)};else if(typeof MessageChannel<"u"){var Io=new MessageChannel,uc=Io.port2;Io.port1.onmessage=an,cn=function(){uc.postMessage(null)}}else cn=function(){F(an,0)};function gl(E){z=E,C||(C=!0,cn())}function wl(E,P){_=F(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,gl(x))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var L=p;p=P;try{return E()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=p;p=E;try{return P()}finally{p=L}},e.unstable_scheduleCallback=function(E,P,L){var W=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?W+L:W):L=W,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=L+G,E={id:h++,callback:P,priorityLevel:E,startTime:L,expirationTime:G,sortIndex:-1},L>W?(E.sortIndex=L,t(c,E),n(s)===null&&E===n(c)&&(k?(d(_),_=-1):k=!0,wl(v,L-W))):(E.sortIndex=G,t(s,E),w||g||(w=!0,gl(x))),E},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(E){var P=p;return function(){var L=p;p=P;try{return E.apply(this,arguments)}finally{p=L}}}})(is);ls.exports=is;var Lc=ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=je,ye=Lc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var os=new Set,Mn={};function Tt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)os.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ao={},Bo={};function Mc(e){return Kl.call(Bo,e)?!0:Kl.call(Ao,e)?!1:jc.test(e)?Bo[e]=!0:(Ao[e]=!0,!1)}function Rc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,t,n,r){if(t===null||typeof t>"u"||Rc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function Yi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,Yi);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,Yi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,Yi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dc(t,n,l,r)&&(n=null),r||l===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),ss=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Vo=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,xl;function wn(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Oc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Rt:return"Portal";case Gl:return"Profiler";case Ki:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zi:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Ic(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fc(e){var t=cs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Fc(e))}function ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fs(e,t){t=t.checked,t!=null&&Xi(e,"checked",t,!1)}function ei(e,t){fs(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ps(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Uc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function ys(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $c=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function li(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oi=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Yt=null,Xt=null;function Xo(e){if(e=qn(e)){if(typeof ui!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ol(t),ui(e.stateNode,e.type,t))}}function gs(e){Yt?Xt?Xt.push(e):Xt=[e]:Yt=e}function ws(){if(Yt){var e=Yt,t=Xt;if(Xt=Yt=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function ks(e,t){return e(t)}function Ss(){}var zl=!1;function xs(e,t,n){if(zl)return e(t,n);zl=!0;try{return ks(e,t,n)}finally{zl=!1,(Yt!==null||Xt!==null)&&(Ss(),ws())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var si=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){si=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{si=!1}function Ac(e,t,n,r,l,i,o,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Cn=!1,Mr=null,Rr=!1,ai=null,Bc={onError:function(e){Cn=!0,Mr=e}};function Vc(e,t,n,r,l,i,o,u,s){Cn=!1,Mr=null,Ac.apply(Bc,arguments)}function Hc(e,t,n,r,l,i,o,u,s){if(Vc.apply(this,arguments),Cn){if(Cn){var c=Mr;Cn=!1,Mr=null}else throw Error(y(198));Rr||(Rr=!0,ai=c)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Es(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(jt(e)!==e)throw Error(y(188))}function Wc(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ko(l),e;if(i===r)return Ko(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Cs(e){return e=Wc(e),e!==null?zs(e):null}function zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zs(e);if(t!==null)return t;e=e.sibling}return null}var _s=ye.unstable_scheduleCallback,Go=ye.unstable_cancelCallback,Qc=ye.unstable_shouldYield,Yc=ye.unstable_requestPaint,Q=ye.unstable_now,Xc=ye.unstable_getCurrentPriorityLevel,qi=ye.unstable_ImmediatePriority,Ns=ye.unstable_UserBlockingPriority,Dr=ye.unstable_NormalPriority,Kc=ye.unstable_LowPriority,Ps=ye.unstable_IdlePriority,nl=null,Ue=null;function Gc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:qc,Zc=Math.log,Jc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Zc(e)/Jc|0)|0}var or=64,ur=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=Sn(u):(i&=o,i!==0&&(r=Sn(i)))}else o=n&~l,o!==0?r=Sn(o):i!==0&&(r=Sn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function bc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),u=1<<o,s=l[o];s===-1?(!(u&n)||u&r)&&(l[o]=bc(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var js,eo,Ms,Rs,Ds,di=!1,sr=[],rt=null,lt=null,it=null,On=new Map,In=new Map,be=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zo(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&eo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rd(e,t,n,r,l){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,l),!0;case"dragenter":return lt=pn(lt,e,t,n,r,l),!0;case"mouseover":return it=pn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,pn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,In.set(i,pn(In.get(i)||null,e,t,n,r,l)),!0}return!1}function Os(e){var t=kt(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Es(n),t!==null){e.blockedOn=t,Ds(e.priority,function(){Ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oi=r,n.target.dispatchEvent(r),oi=null}else return t=qn(n),t!==null&&eo(t),e.blockedOn=n,!1;t.shift()}return!0}function Jo(e,t,n){Sr(e)&&n.delete(t)}function ld(){di=!1,rt!==null&&Sr(rt)&&(rt=null),lt!==null&&Sr(lt)&&(lt=null),it!==null&&Sr(it)&&(it=null),On.forEach(Jo),In.forEach(Jo)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ld)))}function Fn(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&mn(rt,e),lt!==null&&mn(lt,e),it!==null&&mn(it,e),On.forEach(t),In.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Os(n),n.blockedOn===null&&be.shift()}var Kt=Ge.ReactCurrentBatchConfig,Ir=!0;function id(e,t,n,r){var l=R,i=Kt.transition;Kt.transition=null;try{R=1,to(e,t,n,r)}finally{R=l,Kt.transition=i}}function od(e,t,n,r){var l=R,i=Kt.transition;Kt.transition=null;try{R=4,to(e,t,n,r)}finally{R=l,Kt.transition=i}}function to(e,t,n,r){if(Ir){var l=fi(e,t,n,r);if(l===null)Il(e,t,r,Fr,n),Zo(e,r);else if(rd(l,e,t,n,r))r.stopPropagation();else if(Zo(e,r),t&4&&-1<nd.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&js(i),i=fi(e,t,n,r),i===null&&Il(e,t,r,Fr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Fr=null;function fi(e,t,n,r){if(Fr=null,e=Ji(r),e=kt(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Es(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case qi:return 1;case Ns:return 4;case Dr:case Kc:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var tt=null,no=null,xr=null;function Fs(){if(xr)return xr;var e,t=no,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return xr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function qo(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:qo,this.isPropagationStopped=qo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=we(on),Jn=B({},on,{view:0,detail:0}),ud=we(Jn),Nl,Pl,hn,rl=B({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Nl=e.screenX-hn.screenX,Pl=e.screenY-hn.screenY):Pl=Nl=0,hn=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),bo=we(rl),sd=B({},rl,{dataTransfer:0}),ad=we(sd),cd=B({},Jn,{relatedTarget:0}),Ll=we(cd),dd=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=we(dd),pd=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=we(pd),hd=B({},on,{data:0}),eu=we(hd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gd[e])?!!t[e]:!1}function lo(){return wd}var kd=B({},Jn,{key:function(e){if(e.key){var t=vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=we(kd),xd=B({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=we(xd),Ed=B({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),Cd=we(Ed),zd=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=we(zd),Nd=B({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=we(Nd),Ld=[9,13,27,32],io=Qe&&"CompositionEvent"in window,zn=null;Qe&&"documentMode"in document&&(zn=document.documentMode);var Td=Qe&&"TextEvent"in window&&!zn,Us=Qe&&(!io||zn&&8<zn&&11>=zn),nu=" ",ru=!1;function $s(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function jd(e,t){switch(e){case"compositionend":return As(t);case"keypress":return t.which!==32?null:(ru=!0,nu);case"textInput":return e=t.data,e===nu&&ru?null:e;default:return null}}function Md(e,t){if(Ot)return e==="compositionend"||!io&&$s(e,t)?(e=Fs(),xr=no=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rd[e.type]:t==="textarea"}function Bs(e,t,n,r){gs(r),t=Ur(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Un=null;function Dd(e){qs(e,0)}function ll(e){var t=Ut(e);if(ds(t))return e}function Od(e,t){if(e==="change")return t}var Vs=!1;if(Qe){var Tl;if(Qe){var jl="oninput"in document;if(!jl){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),jl=typeof iu.oninput=="function"}Tl=jl}else Tl=!1;Vs=Tl&&(!document.documentMode||9<document.documentMode)}function ou(){_n&&(_n.detachEvent("onpropertychange",Hs),Un=_n=null)}function Hs(e){if(e.propertyName==="value"&&ll(Un)){var t=[];Bs(t,Un,e,Ji(e)),xs(Dd,t)}}function Id(e,t,n){e==="focusin"?(ou(),_n=t,Un=n,_n.attachEvent("onpropertychange",Hs)):e==="focusout"&&ou()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Un)}function Ud(e,t){if(e==="click")return ll(t)}function $d(e,t){if(e==="input"||e==="change")return ll(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Ad;function $n(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Kl.call(t,l)||!De(e[l],t[l]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qs(){for(var e=window,t=jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=Qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ws(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=su(n,i);var o=su(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=Qe&&"documentMode"in document&&11>=document.documentMode,It=null,pi=null,Nn=null,mi=!1;function au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mi||It==null||It!==jr(r)||(r=It,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&$n(Nn,r)||(Nn=r,r=Ur(pi,"onSelect"),0<r.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=It)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ml={},Ys={};Qe&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function il(e){if(Ml[e])return Ml[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ys)return Ml[e]=t[n];return e}var Xs=il("animationend"),Ks=il("animationiteration"),Gs=il("animationstart"),Zs=il("transitionend"),Js=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Js.set(e,t),Tt(t,[e])}for(var Rl=0;Rl<cu.length;Rl++){var Dl=cu[Rl],Hd=Dl.toLowerCase(),Wd=Dl[0].toUpperCase()+Dl.slice(1);pt(Hd,"on"+Wd)}pt(Xs,"onAnimationEnd");pt(Ks,"onAnimationIteration");pt(Gs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Zs,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hc(r,t,void 0,e),e.currentTarget=null}function qs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;du(l,u,c),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;du(l,u,c),i=s}}}if(Rr)throw e=ai,Rr=!1,ai=null,e}function O(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(bs(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),bs(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[dr]){e[dr]=!0,os.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ol("selectionchange",!1,t))}}function bs(e,t,n,r){switch(Is(t)){case 1:var l=id;break;case 4:l=od;break;default:l=to}n=l.bind(null,t,n,e),l=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=kt(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}xs(function(){var c=i,h=Ji(n),m=[];e:{var p=Js.get(e);if(p!==void 0){var g=ro,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":g=Sd;break;case"focusin":w="focus",g=Ll;break;case"focusout":w="blur",g=Ll;break;case"beforeblur":case"afterblur":g=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cd;break;case Xs:case Ks:case Gs:g=fd;break;case Zs:g=_d;break;case"scroll":g=ud;break;case"wheel":g=Pd;break;case"copy":case"cut":case"paste":g=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=tu}var k=(t&4)!==0,F=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var a=c,f;a!==null;){f=a;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Dn(a,d),v!=null&&k.push(Bn(a,v,f)))),F)break;a=a.return}0<k.length&&(p=new g(p,w,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==oi&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Ye]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?kt(w):null,w!==null&&(F=jt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(k=bo,v="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=tu,v="onPointerLeave",d="onPointerEnter",a="pointer"),F=g==null?p:Ut(g),f=w==null?p:Ut(w),p=new k(v,a+"leave",g,n,h),p.target=F,p.relatedTarget=f,v=null,kt(h)===c&&(k=new k(d,a+"enter",w,n,h),k.target=f,k.relatedTarget=F,v=k),F=v,g&&w)t:{for(k=g,d=w,a=0,f=k;f;f=Mt(f))a++;for(f=0,v=d;v;v=Mt(v))f++;for(;0<a-f;)k=Mt(k),a--;for(;0<f-a;)d=Mt(d),f--;for(;a--;){if(k===d||d!==null&&k===d.alternate)break t;k=Mt(k),d=Mt(d)}k=null}else k=null;g!==null&&fu(m,p,g,k,!1),w!==null&&F!==null&&fu(m,F,w,k,!0)}}e:{if(p=c?Ut(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var x=Od;else if(lu(p))if(Vs)x=$d;else{x=Fd;var C=Id}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=Ud);if(x&&(x=x(e,c))){Bs(m,x,n,h);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ti(p,"number",p.value)}switch(C=c?Ut(c):window,e){case"focusin":(lu(C)||C.contentEditable==="true")&&(It=C,pi=c,Nn=null);break;case"focusout":Nn=pi=It=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,au(m,n,h);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":au(m,n,h)}var z;if(io)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ot?$s(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Us&&n.locale!=="ko"&&(Ot||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ot&&(z=Fs()):(tt=h,no="value"in tt?tt.value:tt.textContent,Ot=!0)),C=Ur(c,_),0<C.length&&(_=new eu(_,e,null,n,h),m.push({event:_,listeners:C}),z?_.data=z:(z=As(n),z!==null&&(_.data=z)))),(z=Td?jd(e,n):Md(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(h=new eu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=z))}qs(m,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Bn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Bn(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=Dn(n,i),s!=null&&o.unshift(Bn(n,s,u))):l||(s=Dn(n,i),s!=null&&o.push(Bn(n,s,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Yd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Xd,"")}function fr(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(y(425))}function $r(){}var hi=null,vi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(Zd)}:gi;function Zd(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Fe="__reactFiber$"+un,Vn="__reactProps$"+un,Ye="__reactContainer$"+un,wi="__reactEvents$"+un,Jd="__reactListeners$"+un,qd="__reactHandles$"+un;function kt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Fe])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ol(e){return e[Vn]||null}var ki=[],$t=-1;function mt(e){return{current:e}}function I(e){0>$t||(e.current=ki[$t],ki[$t]=null,$t--)}function D(e,t){$t++,ki[$t]=e.current,e.current=t}var ft={},le=mt(ft),de=mt(!1),zt=ft;function qt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Ar(){I(de),I(le)}function vu(e,t,n){if(le.current!==ft)throw Error(y(168));D(le,t),D(de,n)}function ea(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Ic(e)||"Unknown",l));return B({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,zt=le.current,D(le,e),D(de,de.current),!0}function yu(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ea(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,I(de),I(le),D(le,e)):I(de),D(de,n)}var Be=null,ul=!1,Ul=!1;function ta(e){Be===null?Be=[e]:Be.push(e)}function bd(e){ul=!0,ta(e)}function ht(){if(!Ul&&Be!==null){Ul=!0;var e=0,t=R;try{var n=Be;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,ul=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),_s(qi,ht),l}finally{R=t,Ul=!1}}return null}var At=[],Bt=0,Vr=null,Hr=0,ke=[],Se=0,_t=null,Ve=1,He="";function gt(e,t){At[Bt++]=Hr,At[Bt++]=Vr,Vr=e,Hr=t}function na(e,t,n){ke[Se++]=Ve,ke[Se++]=He,ke[Se++]=_t,_t=e;var r=Ve;e=He;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Me(t)+l|n<<l|r,He=i+e}else Ve=1<<i|n<<l|r,He=e}function uo(e){e.return!==null&&(gt(e,1),na(e,1,0))}function so(e){for(;e===Vr;)Vr=At[--Bt],At[Bt]=null,Hr=At[--Bt],At[Bt]=null;for(;e===_t;)_t=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null,Ve=ke[--Se],ke[Se]=null}var ve=null,he=null,U=!1,Te=null;function ra(e,t){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,he=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xi(e){if(U){var t=he;if(t){var n=t;if(!gu(e,t)){if(Si(e))throw Error(y(418));t=ot(n.nextSibling);var r=ve;t&&gu(e,t)?ra(r,n):(e.flags=e.flags&-4097|2,U=!1,ve=e)}}else{if(Si(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,ve=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function pr(e){if(e!==ve)return!1;if(!U)return wu(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=he)){if(Si(e))throw la(),Error(y(418));for(;t;)ra(e,t),t=ot(t.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ve?ot(e.stateNode.nextSibling):null;return!0}function la(){for(var e=he;e;)e=ot(e.nextSibling)}function bt(){he=ve=null,U=!1}function ao(e){Te===null?Te=[e]:Te.push(e)}var ef=Ge.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function ia(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=ct(d,a),d.index=0,d.sibling=null,d}function i(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,v){return a===null||a.tag!==6?(a=Ql(f,d.mode,v),a.return=d,a):(a=l(a,f),a.return=d,a)}function s(d,a,f,v){var x=f.type;return x===Dt?h(d,a,f.props.children,v,f.key):a!==null&&(a.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Je&&ku(x)===a.type)?(v=l(a,f.props),v.ref=vn(d,a,f),v.return=d,v):(v=Tr(f.type,f.key,f.props,null,d.mode,v),v.ref=vn(d,a,f),v.return=d,v)}function c(d,a,f,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Yl(f,d.mode,v),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function h(d,a,f,v,x){return a===null||a.tag!==7?(a=Ct(f,d.mode,v,x),a.return=d,a):(a=l(a,f),a.return=d,a)}function m(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ql(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return f=Tr(a.type,a.key,a.props,null,d.mode,f),f.ref=vn(d,null,a),f.return=d,f;case Rt:return a=Yl(a,d.mode,f),a.return=d,a;case Je:var v=a._init;return m(d,v(a._payload),f)}if(kn(a)||dn(a))return a=Ct(a,d.mode,f,null),a.return=d,a;mr(d,a)}return null}function p(d,a,f,v){var x=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:u(d,a,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===x?s(d,a,f,v):null;case Rt:return f.key===x?c(d,a,f,v):null;case Je:return x=f._init,p(d,a,x(f._payload),v)}if(kn(f)||dn(f))return x!==null?null:h(d,a,f,v,null);mr(d,f)}return null}function g(d,a,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(a,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return d=d.get(v.key===null?f:v.key)||null,s(a,d,v,x);case Rt:return d=d.get(v.key===null?f:v.key)||null,c(a,d,v,x);case Je:var C=v._init;return g(d,a,f,C(v._payload),x)}if(kn(v)||dn(v))return d=d.get(f)||null,h(a,d,v,x,null);mr(a,v)}return null}function w(d,a,f,v){for(var x=null,C=null,z=a,_=a=0,H=null;z!==null&&_<f.length;_++){z.index>_?(H=z,z=null):H=z.sibling;var j=p(d,z,f[_],v);if(j===null){z===null&&(z=H);break}e&&z&&j.alternate===null&&t(d,z),a=i(j,a,_),C===null?x=j:C.sibling=j,C=j,z=H}if(_===f.length)return n(d,z),U&&gt(d,_),x;if(z===null){for(;_<f.length;_++)z=m(d,f[_],v),z!==null&&(a=i(z,a,_),C===null?x=z:C.sibling=z,C=z);return U&&gt(d,_),x}for(z=r(d,z);_<f.length;_++)H=g(z,d,_,f[_],v),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?_:H.key),a=i(H,a,_),C===null?x=H:C.sibling=H,C=H);return e&&z.forEach(function(_e){return t(d,_e)}),U&&gt(d,_),x}function k(d,a,f,v){var x=dn(f);if(typeof x!="function")throw Error(y(150));if(f=x.call(f),f==null)throw Error(y(151));for(var C=x=null,z=a,_=a=0,H=null,j=f.next();z!==null&&!j.done;_++,j=f.next()){z.index>_?(H=z,z=null):H=z.sibling;var _e=p(d,z,j.value,v);if(_e===null){z===null&&(z=H);break}e&&z&&_e.alternate===null&&t(d,z),a=i(_e,a,_),C===null?x=_e:C.sibling=_e,C=_e,z=H}if(j.done)return n(d,z),U&&gt(d,_),x;if(z===null){for(;!j.done;_++,j=f.next())j=m(d,j.value,v),j!==null&&(a=i(j,a,_),C===null?x=j:C.sibling=j,C=j);return U&&gt(d,_),x}for(z=r(d,z);!j.done;_++,j=f.next())j=g(z,d,_,j.value,v),j!==null&&(e&&j.alternate!==null&&z.delete(j.key===null?_:j.key),a=i(j,a,_),C===null?x=j:C.sibling=j,C=j);return e&&z.forEach(function(an){return t(d,an)}),U&&gt(d,_),x}function F(d,a,f,v){if(typeof f=="object"&&f!==null&&f.type===Dt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var x=f.key,C=a;C!==null;){if(C.key===x){if(x=f.type,x===Dt){if(C.tag===7){n(d,C.sibling),a=l(C,f.props.children),a.return=d,d=a;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Je&&ku(x)===C.type){n(d,C.sibling),a=l(C,f.props),a.ref=vn(d,C,f),a.return=d,d=a;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===Dt?(a=Ct(f.props.children,d.mode,v,f.key),a.return=d,d=a):(v=Tr(f.type,f.key,f.props,null,d.mode,v),v.ref=vn(d,a,f),v.return=d,d=v)}return o(d);case Rt:e:{for(C=f.key;a!==null;){if(a.key===C)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Yl(f,d.mode,v),a.return=d,d=a}return o(d);case Je:return C=f._init,F(d,a,C(f._payload),v)}if(kn(f))return w(d,a,f,v);if(dn(f))return k(d,a,f,v);mr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=Ql(f,d.mode,v),a.return=d,d=a),o(d)):n(d,a)}return F}var en=ia(!0),oa=ia(!1),Wr=mt(null),Qr=null,Vt=null,co=null;function fo(){co=Vt=Qr=null}function po(e){var t=Wr.current;I(Wr),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Qr=e,co=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(co!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Qr===null)throw Error(y(308));Vt=e,Qr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var St=null;function mo(e){St===null?St=[e]:St.push(e)}function ua(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,mo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,mo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,h=c=s=null,u=i;do{var p=u.lane,g=u.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,k=u;switch(p=t,g=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(g,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(g,m,p):w,p==null)break e;m=B({},m,p);break e;case 2:qe=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else g={eventTime:g,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=g,s=m):h=h.next=g,o|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=m}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var bn={},$e=mt(bn),Hn=mt(bn),Wn=mt(bn);function xt(e){if(e===bn)throw Error(y(174));return e}function vo(e,t){switch(D(Wn,t),D(Hn,e),D($e,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}I($e),D($e,t)}function tn(){I($e),I(Hn),I(Wn)}function aa(e){xt(Wn.current);var t=xt($e.current),n=ri(t,e.type);t!==n&&(D(Hn,e),D($e,n))}function yo(e){Hn.current===e&&(I($e),I(Hn))}var $=mt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function go(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var zr=Ge.ReactCurrentDispatcher,Al=Ge.ReactCurrentBatchConfig,Nt=0,A=null,X=null,Z=null,Kr=!1,Pn=!1,Qn=0,tf=0;function te(){throw Error(y(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,l,i){if(Nt=i,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?of:uf,e=n(r,l),Pn){i=0;do{if(Pn=!1,Qn=0,25<=i)throw Error(y(301));i+=1,Z=X=null,t.updateQueue=null,zr.current=sf,e=n(r,l)}while(Pn)}if(zr.current=Gr,t=X!==null&&X.next!==null,Nt=0,Z=X=A=null,Kr=!1,t)throw Error(y(300));return e}function So(){var e=Qn!==0;return Qn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?A.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(X===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?A.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?A.memoizedState=Z=e:Z=Z.next=e}return Z}function Yn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,c=i;do{var h=c.lane;if((Nt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=m,o=r):s=s.next=m,A.lanes|=h,Pt|=h}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=u,De(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,A.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);De(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ca(){}function da(e,t){var n=A,r=ze(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,xo(ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Xn(9,pa.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));Nt&30||fa(n,t,l)}return l}function fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pa(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&va(e)}function ma(e,t,n){return n(function(){ha(t)&&va(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function va(e){var t=Xe(e,1);t!==null&&Re(t,e,1,-1)}function Eu(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,A,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ya(){return ze().memoizedState}function _r(e,t,n,r){var l=Ie();A.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&wo(r,o.deps)){l.memoizedState=Xn(t,n,i,r);return}}A.flags|=e,l.memoizedState=Xn(1|t,n,i,r)}function Cu(e,t){return _r(8390656,8,e,t)}function xo(e,t){return sl(2048,8,e,t)}function ga(e,t){return sl(4,2,e,t)}function wa(e,t){return sl(4,4,e,t)}function ka(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sa(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,ka.bind(null,t,e),n)}function Eo(){}function xa(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ea(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ca(e,t,n){return Nt&21?(De(n,t)||(n=Ls(),A.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function nf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{R=n,Al.transition=r}}function za(){return ze().memoizedState}function rf(e,t,n){var r=at(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_a(e))Na(t,n);else if(n=ua(e,t,n,r),n!==null){var l=oe();Re(n,e,r,l),Pa(n,t,r)}}function lf(e,t,n){var r=at(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_a(e))Na(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,De(u,o)){var s=t.interleaved;s===null?(l.next=l,mo(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=ua(e,t,l,r),n!==null&&(l=oe(),Re(n,e,r,l),Pa(n,t,r))}}function _a(e){var t=e.alternate;return e===A||t!==null&&t===A}function Na(e,t){Pn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}var Gr={readContext:Ce,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},of={readContext:Ce,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,ka.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:Eu,useDebugValue:Eo,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Eu(!1),t=e[0];return e=nf.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,l=Ie();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));Nt&30||fa(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Cu(ma.bind(null,r,i,e),[e]),r.flags|=2048,Xn(9,pa.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=J.identifierPrefix;if(U){var n=He,r=Ve;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uf={readContext:Ce,useCallback:xa,useContext:Ce,useEffect:xo,useImperativeHandle:Sa,useInsertionEffect:ga,useLayoutEffect:wa,useMemo:Ea,useReducer:Bl,useRef:ya,useState:function(){return Bl(Yn)},useDebugValue:Eo,useDeferredValue:function(e){var t=ze();return Ca(t,X.memoizedState,e)},useTransition:function(){var e=Bl(Yn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:za,unstable_isNewReconciler:!1},sf={readContext:Ce,useCallback:xa,useContext:Ce,useEffect:xo,useImperativeHandle:Sa,useInsertionEffect:ga,useLayoutEffect:wa,useMemo:Ea,useReducer:Vl,useRef:ya,useState:function(){return Vl(Yn)},useDebugValue:Eo,useDeferredValue:function(e){var t=ze();return X===null?t.memoizedState=e:Ca(t,X.memoizedState,e)},useTransition:function(){var e=Vl(Yn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:za,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=at(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=at(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Re(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=at(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Re(t,e,r,n),Cr(t,e,r))}};function zu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,i):!0}function La(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=fe(t)?zt:le.current,r=t.contextTypes,i=(r=r!=null)?qt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function zi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ho(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=fe(t)?zt:le.current,l.context=qt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Oc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var af=typeof WeakMap=="function"?WeakMap:Map;function Ta(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Ii=r),_i(e,t)},n}function ja(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new af;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ef.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var cf=Ge.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?oa(t,null,n,r):en(t,e.child,n,r)}function Tu(e,t,n,r,l){n=n.render;var i=t.ref;return Gt(t,l),r=ko(e,t,n,r,i,l),n=So(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(U&&n&&uo(t),t.flags|=1,ie(e,t,r,l),t.child)}function ju(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!jo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ma(e,t,i,r,l)):(e=Tr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(o,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ma(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if($n(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return Ni(e,t,n,r,l)}function Ra(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Wt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Wt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Wt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Wt,me),me|=r;return ie(e,t,l,n),t.child}function Da(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ni(e,t,n,r,l){var i=fe(n)?zt:le.current;return i=qt(t,i),Gt(t,l),n=ko(e,t,n,r,i,l),r=So(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(U&&r&&uo(t),t.flags|=1,ie(e,t,n,l),t.child)}function Mu(e,t,n,r,l){if(fe(n)){var i=!0;Br(t)}else i=!1;if(Gt(t,l),t.stateNode===null)Nr(e,t),La(t,n,r),zi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=fe(n)?zt:le.current,c=qt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==c)&&_u(t,o,r,c),qe=!1;var p=t.memoizedState;o.state=p,Yr(t,r,o,l),s=t.memoizedState,u!==r||p!==s||de.current||qe?(typeof h=="function"&&(Ci(t,n,h,r),s=t.memoizedState),(u=qe||zu(t,n,u,r,p,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,sa(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Pe(t.type,u),o.props=c,m=t.pendingProps,p=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=fe(n)?zt:le.current,s=qt(t,s));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==s)&&_u(t,o,r,s),qe=!1,p=t.memoizedState,o.state=p,Yr(t,r,o,l);var w=t.memoizedState;u!==m||p!==w||de.current||qe?(typeof g=="function"&&(Ci(t,n,g,r),w=t.memoizedState),(c=qe||zu(t,n,c,r,p,w,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,i,l)}function Pi(e,t,n,r,l,i){Da(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&yu(t,n,!1),Ke(e,t,i);r=t.stateNode,cf.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,u,i)):ie(e,t,u,i),t.memoizedState=r.state,l&&yu(t,n,!0),t.child}function Oa(e){var t=e.stateNode;t.pendingContext?vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vu(e,t.context,!1),vo(e,t.containerInfo)}function Ru(e,t,n,r,l){return bt(),ao(l),t.flags|=256,ie(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ia(e,t,n){var r=t.pendingProps,l=$.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D($,l&1),e===null)return xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=Ct(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ti(n),t.memoizedState=Li,e):Co(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return df(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ct(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ct(u,i):(i=Ct(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ti(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Co(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ao(r),en(t,e.child,null,n),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(y(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=Ct(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=Ti(o),t.memoizedState=Li,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(y(419)),r=Hl(i,r,void 0),hr(e,t,o,r)}if(u=(o&e.childLanes)!==0,ce||u){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Re(r,e,l,-1))}return To(),r=Hl(Error(y(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=ot(l.nextSibling),ve=t,U=!0,Te=null,e!==null&&(ke[Se++]=Ve,ke[Se++]=He,ke[Se++]=_t,Ve=e.id,He=e.overflow,_t=t),t=Co(t,r.children),t.flags|=4096,t)}function Du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Wl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Fa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,n,t);else if(e.tag===19)Du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,i);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Oa(t),bt();break;case 5:aa(t);break;case 1:fe(t.type)&&Br(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Ia(e,t,n):(D($,$.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);D($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Ra(e,t,n)}return Ke(e,t,n)}var Ua,ji,$a,Aa;Ua=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ji=function(){};$a=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,xt($e.current);var i=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ni(e,l),r=ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}li(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&O("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Aa=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pf(e,t,n){var r=t.pendingProps;switch(so(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Ar(),ne(t),null;case 3:return r=t.stateNode,tn(),I(de),I(le),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&($i(Te),Te=null))),ji(e,t),ne(t),null;case 5:yo(t);var l=xt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)$a(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=xt($e.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<xn.length;l++)O(xn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ho(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Qo(r,i),O("invalid",r)}li(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",""+u]):Mn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":lr(r),Wo(r,i,!0);break;case"textarea":lr(r),Yo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Ua(e,t,!1,!1),t.stateNode=e;e:{switch(o=ii(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<xn.length;l++)O(xn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Ho(e,r),l=bl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),O("invalid",e);break;case"textarea":Qo(e,r),l=ni(e,r),O("invalid",e);break;default:l=r}li(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?ys(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Rn(e,s):typeof s=="number"&&Rn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&O("scroll",e):s!=null&&Xi(e,i,s,o))}switch(n){case"input":lr(e),Wo(e,r,!1);break;case"textarea":lr(e),Yo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Aa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=xt(Wn.current),xt($e.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(I($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&he!==null&&t.mode&1&&!(t.flags&128))la(),bt(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Fe]=t}else bt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Te!==null&&($i(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?K===0&&(K=3):To())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),ji(e,t),e===null&&An(t.stateNode.containerInfo),ne(t),null;case 10:return po(t.type._context),ne(t),null;case 17:return fe(t.type)&&Ar(),ne(t),null;case 19:if(I($),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)yn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,yn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>rn&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ne(t),null}else 2*Q()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=$.current,D($,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Lo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function mf(e,t){switch(so(t),t.tag){case 1:return fe(t.type)&&Ar(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),I(de),I(le),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yo(t),null;case 13:if(I($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));bt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I($),null;case 4:return tn(),null;case 10:return po(t.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var vr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Mi(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ou=!1;function vf(e,t){if(hi=Ir,e=Qs(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,s=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var g;m!==n||l!==0&&m.nodeType!==3||(u=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)p=m,m=g;for(;;){if(m===e)break t;if(p===n&&++c===l&&(u=o),p===i&&++h===r&&(s=o),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vi={focusedElem:e,selectionRange:n},Ir=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pe(t.type,k),F);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Ou,Ou=!1,w}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Mi(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ba(e){var t=e.alternate;t!==null&&(e.alternate=null,Ba(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[wi],delete t[Jd],delete t[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Va(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Va(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}var q=null,Le=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Ha(e,t,n),n=n.sibling}function Ha(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:re||Ht(n,t);case 6:var r=q,l=Le;q=null,Ze(e,t,n),q=r,Le=l,q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),Fn(e)):Fl(q,n.stateNode));break;case 4:r=q,l=Le,q=n.stateNode.containerInfo,Le=!0,Ze(e,t,n),q=r,Le=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mi(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!re&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){V(n,t,u)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(r){var l=zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ne(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,Le=!1;break e;case 3:q=u.stateNode.containerInfo,Le=!0;break e;case 4:q=u.stateNode.containerInfo,Le=!0;break e}u=u.return}if(q===null)throw Error(y(160));Ha(i,o,l),q=null,Le=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wa(t,e),t=t.sibling}function Wa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),Oe(e),r&4){try{Ln(3,e,e.return),cl(3,e)}catch(k){V(e,e.return,k)}try{Ln(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Ne(t,e),Oe(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(Ne(t,e),Oe(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var l=e.stateNode;try{Rn(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&fs(l,i),ii(u,o);var c=ii(u,i);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?ys(l,m):h==="dangerouslySetInnerHTML"?hs(l,m):h==="children"?Rn(l,m):Xi(l,h,m,c)}switch(u){case"input":ei(l,i);break;case"textarea":ps(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Qt(l,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(k){V(e,e.return,k)}}break;case 6:if(Ne(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(Ne(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Ne(t,e),Oe(e);break;case 13:Ne(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(No=Q())),r&4&&Fu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,Ne(t,e),re=c):Ne(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(m=S=h;S!==null;){switch(p=S,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ln(4,p,p.return);break;case 1:Ht(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:Ht(p,p.return);break;case 22:if(p.memoizedState!==null){$u(m);continue}}g!==null?(g.return=p,S=g):$u(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=vs("display",o))}catch(k){V(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){V(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ne(t,e),Oe(e),r&4&&Fu(e);break;case 21:break;default:Ne(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Va(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Rn(l,""),r.flags&=-33);var i=Iu(e);Oi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Iu(e);Di(e,u,o);break;default:throw Error(y(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e,t,n){S=e,Qa(e)}function Qa(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||vr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||re;u=vr;var c=re;if(vr=o,(re=s)&&!c)for(S=l;S!==null;)o=S,s=o.child,o.tag===22&&o.memoizedState!==null?Au(l):s!==null?(s.return=o,S=s):Au(l);for(;i!==null;)S=i,Qa(i),i=i.sibling;S=l,vr=u,re=c}Uu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Uu(e)}}function Uu(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Fn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Ri(t)}catch(p){V(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function $u(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Au(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){V(t,l,s)}}var i=t.return;try{Ri(t)}catch(s){V(t,i,s)}break;case 5:var o=t.return;try{Ri(t)}catch(s){V(t,o,s)}}}catch(s){V(t,t.return,s)}if(t===e){S=null;break}var u=t.sibling;if(u!==null){u.return=t.return,S=u;break}S=t.return}}var gf=Math.ceil,Zr=Ge.ReactCurrentDispatcher,zo=Ge.ReactCurrentOwner,Ee=Ge.ReactCurrentBatchConfig,M=0,J=null,Y=null,b=0,me=0,Wt=mt(0),K=0,Kn=null,Pt=0,dl=0,_o=0,Tn=null,ae=null,No=0,rn=1/0,Ae=null,Jr=!1,Ii=null,st=null,yr=!1,nt=null,qr=0,jn=0,Fi=null,Pr=-1,Lr=0;function oe(){return M&6?Q():Pr!==-1?Pr:Pr=Q()}function at(e){return e.mode&1?M&2&&b!==0?b&-b:ef.transition!==null?(Lr===0&&(Lr=Ls()),Lr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e):1}function Re(e,t,n,r){if(50<jn)throw jn=0,Fi=null,Error(y(185));Zn(e,n,r),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(dl|=n),K===4&&et(e,b)),pe(e,r),n===1&&M===0&&!(t.mode&1)&&(rn=Q()+500,ul&&ht()))}function pe(e,t){var n=e.callbackNode;ed(e,t);var r=Or(e,e===J?b:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?bd(Bu.bind(null,e)):ta(Bu.bind(null,e)),Gd(function(){!(M&6)&&ht()}),n=null;else{switch(Ts(r)){case 1:n=qi;break;case 4:n=Ns;break;case 16:n=Dr;break;case 536870912:n=Ps;break;default:n=Dr}n=ba(n,Ya.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ya(e,t){if(Pr=-1,Lr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Or(e,e===J?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=M;M|=2;var i=Ka();(J!==e||b!==t)&&(Ae=null,rn=Q()+500,Et(e,t));do try{Sf();break}catch(u){Xa(e,u)}while(!0);fo(),Zr.current=i,M=l,Y!==null?t=0:(J=null,b=0,t=K)}if(t!==0){if(t===2&&(l=ci(e),l!==0&&(r=l,t=Ui(e,l))),t===1)throw n=Kn,Et(e,0),et(e,r),pe(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!wf(l)&&(t=br(e,r),t===2&&(i=ci(e),i!==0&&(r=i,t=Ui(e,i))),t===1))throw n=Kn,Et(e,0),et(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,ae,Ae);break;case 3:if(et(e,r),(r&130023424)===r&&(t=No+500-Q(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(wt.bind(null,e,ae,Ae),t);break}wt(e,ae,Ae);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gf(r/1960))-r,10<r){e.timeoutHandle=gi(wt.bind(null,e,ae,Ae),r);break}wt(e,ae,Ae);break;case 5:wt(e,ae,Ae);break;default:throw Error(y(329))}}}return pe(e,Q()),e.callbackNode===n?Ya.bind(null,e):null}function Ui(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=br(e,t),e!==2&&(t=ae,ae=n,t!==null&&$i(t)),e}function $i(e){ae===null?ae=e:ae.push.apply(ae,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~_o,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Bu(e){if(M&6)throw Error(y(327));Zt();var t=Or(e,0);if(!(t&1))return pe(e,Q()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=ci(e);r!==0&&(t=r,n=Ui(e,r))}if(n===1)throw n=Kn,Et(e,0),et(e,t),pe(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ae,Ae),pe(e,Q()),null}function Po(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(rn=Q()+500,ul&&ht())}}function Lt(e){nt!==null&&nt.tag===0&&!(M&6)&&Zt();var t=M;M|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,M=t,!(M&6)&&ht()}}function Lo(){me=Wt.current,I(Wt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(so(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ar();break;case 3:tn(),I(de),I(le),go();break;case 5:yo(r);break;case 4:tn();break;case 13:I($);break;case 19:I($);break;case 10:po(r.type._context);break;case 22:case 23:Lo()}n=n.return}if(J=e,Y=e=ct(e.current,null),b=me=t,K=0,Kn=null,_o=dl=Pt=0,ae=Tn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function Xa(e,t){do{var n=Y;try{if(fo(),zr.current=Gr,Kr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(Nt=0,Z=X=A=null,Pn=!1,Qn=0,zo.current=null,n===null||n.return===null){K=1,Kn=t,Y=null;break}e:{var i=e,o=n.return,u=n,s=t;if(t=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Pu(o);if(g!==null){g.flags&=-257,Lu(g,o,u,i,t),g.mode&1&&Nu(i,c,t),t=g,s=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){Nu(i,c,t),To();break e}s=Error(y(426))}}else if(U&&u.mode&1){var F=Pu(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Lu(F,o,u,i,t),ao(nn(s,u));break e}}i=s=nn(s,u),K!==4&&(K=2),Tn===null?Tn=[i]:Tn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ta(i,s,t);Su(i,d);break e;case 1:u=s;var a=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=ja(i,u,t);Su(i,v);break e}}i=i.return}while(i!==null)}Za(n)}catch(x){t=x,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ka(){var e=Zr.current;return Zr.current=Gr,e===null?Gr:e}function To(){(K===0||K===3||K===2)&&(K=4),J===null||!(Pt&268435455)&&!(dl&268435455)||et(J,b)}function br(e,t){var n=M;M|=2;var r=Ka();(J!==e||b!==t)&&(Ae=null,Et(e,t));do try{kf();break}catch(l){Xa(e,l)}while(!0);if(fo(),M=n,Zr.current=r,Y!==null)throw Error(y(261));return J=null,b=0,K}function kf(){for(;Y!==null;)Ga(Y)}function Sf(){for(;Y!==null&&!Qc();)Ga(Y)}function Ga(e){var t=qa(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Za(e):Y=t,zo.current=null}function Za(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(n=pf(n,t,me),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);K===0&&(K=5)}function wt(e,t,n){var r=R,l=Ee.transition;try{Ee.transition=null,R=1,xf(e,t,n,r)}finally{Ee.transition=l,R=r}return null}function xf(e,t,n,r){do Zt();while(nt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(td(e,i),e===J&&(Y=J=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,ba(Dr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=R;R=1;var u=M;M|=4,zo.current=null,vf(e,n),Wa(n,e),Bd(vi),Ir=!!hi,vi=hi=null,e.current=n,yf(n),Yc(),M=u,R=o,Ee.transition=i}else e.current=n;if(yr&&(yr=!1,nt=e,qr=l),i=e.pendingLanes,i===0&&(st=null),Gc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Ii,Ii=null,e;return qr&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Fi?jn++:(jn=0,Fi=e):jn=0,ht(),null}function Zt(){if(nt!==null){var e=Ts(qr),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,qr=0,M&6)throw Error(y(331));var l=M;for(M|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(S=c;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:Ln(8,h,i)}var m=h.child;if(m!==null)m.return=h,S=m;else for(;S!==null;){h=S;var p=h.sibling,g=h.return;if(Ba(h),h===c){S=null;break}if(p!==null){p.return=g,S=p;break}S=g}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,S=d;break e}S=i.return}}var a=e.current;for(S=a;S!==null;){o=S;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,S=f;else e:for(o=a;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:cl(9,u)}}catch(x){V(u,u.return,x)}if(u===o){S=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,S=v;break e}S=u.return}}if(M=l,ht(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function Vu(e,t,n){t=nn(n,t),t=Ta(e,t,1),e=ut(e,t,1),t=oe(),e!==null&&(Zn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=ja(t,e,1),t=ut(t,e,1),e=oe(),t!==null&&(Zn(t,1,e),pe(t,e));break}}t=t.return}}function Ef(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(b&n)===n&&(K===4||K===3&&(b&130023424)===b&&500>Q()-No?Et(e,0):_o|=n),pe(e,t)}function Ja(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=oe();e=Xe(e,t),e!==null&&(Zn(e,t,n),pe(e,n))}function Cf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ja(e,n)}function zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Ja(e,n)}var qa;qa=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,ff(e,t,n);ce=!!(e.flags&131072)}else ce=!1,U&&t.flags&1048576&&na(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nr(e,t),e=t.pendingProps;var l=qt(t,le.current);Gt(t,n),l=ko(null,t,r,e,l,n);var i=So();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,Br(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ho(t),l.updater=al,t.stateNode=l,l._reactInternals=t,zi(t,r,e,n),t=Pi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&uo(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nf(r),e=Pe(r,e),l){case 0:t=Ni(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=Tu(null,t,r,e,n);break e;case 14:t=ju(null,t,r,Pe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ni(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Mu(e,t,r,l,n);case 3:e:{if(Oa(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,sa(e,t),Yr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(y(423)),t),t=Ru(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(y(424)),t),t=Ru(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ve=t,U=!0,Te=null,n=oa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bt(),r===l){t=Ke(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return aa(t),e===null&&xi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,yi(r,l)?o=null:i!==null&&yi(r,i)&&(t.flags|=32),Da(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&xi(t),null;case 13:return Ia(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Tu(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(Wr,r._currentValue),r._currentValue=o,i!==null)if(De(i.value,o)){if(i.children===l.children&&!de.current){t=Ke(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=We(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ei(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ei(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gt(t,n),l=Ce(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),ju(e,t,r,l,n);case 15:return Ma(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Nr(e,t),t.tag=1,fe(r)?(e=!0,Br(t)):e=!1,Gt(t,n),La(t,r,l),zi(t,r,l,n),Pi(null,t,r,!0,e,n);case 19:return Fa(e,t,n);case 22:return Ra(e,t,n)}throw Error(y(156,t.tag))};function ba(e,t){return _s(e,t)}function _f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,n,r){return new _f(e,t,n,r)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Zi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")jo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return Ct(n.children,l,i,t);case Ki:o=8,l|=8;break;case Gl:return e=xe(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Zl:return e=xe(13,n,t,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=xe(19,n,t,l),e.elementType=Jl,e.lanes=i,e;case as:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:o=10;break e;case ss:o=9;break e;case Gi:o=11;break e;case Zi:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=xe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ct(e,t,n,r){return e=xe(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=xe(22,e,r,t),e.elementType=as,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=xe(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Mo(e,t,n,r,l,i,o,u,s){return e=new Pf(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(i),e}function Lf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return ft;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(fe(n))return ea(e,n,t)}return t}function tc(e,t,n,r,l,i,o,u,s){return e=Mo(n,r,!0,e,l,i,o,u,s),e.context=ec(null),n=e.current,r=oe(),l=at(n),i=We(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Zn(e,l,r),pe(e,r),e}function pl(e,t,n,r){var l=t.current,i=oe(),o=at(l);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,o),e!==null&&(Re(e,l,o,i),Cr(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}function Tf(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}ml.prototype.render=Do.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};ml.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){pl(null,e,null,null)}),t[Ye]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Os(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function jf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=el(o);i.call(c)}}var o=tc(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=o,e[Ye]=o.current,An(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=el(s);u.call(c)}}var s=Mo(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Ye]=s.current,An(e.nodeType===8?e.parentNode:e),Lt(function(){pl(t,s,n,r)}),s}function vl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=el(o);u.call(s)}}pl(t,o,e,l)}else o=jf(n,t,e,l,r);return el(o)}js=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(bi(t,n|1),pe(t,Q()),!(M&6)&&(rn=Q()+500,ht()))}break;case 13:Lt(function(){var r=Xe(e,1);if(r!==null){var l=oe();Re(r,e,1,l)}}),Ro(e,1)}};eo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=oe();Re(t,e,134217728,n)}Ro(e,134217728)}};Ms=function(e){if(e.tag===13){var t=at(e),n=Xe(e,t);if(n!==null){var r=oe();Re(n,e,t,r)}Ro(e,t)}};Rs=function(){return R};Ds=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};ui=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(y(90));ds(r),ei(r,l)}}}break;case"textarea":ps(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};ks=Po;Ss=Lt;var Mf={usingClientEntryPoint:!1,Events:[qn,Ut,ol,gs,ws,Po]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cs(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{nl=gr.inject(Rf),Ue=gr}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(y(200));return Lf(e,t,null,n)};ge.createRoot=function(e,t){if(!Oo(e))throw Error(y(299));var n=!1,r="",l=nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Mo(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,An(e.nodeType===8?e.parentNode:e),new Do(t)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Cs(t),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return Lt(e)};ge.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return vl(null,e,t,!0,n)};ge.hydrateRoot=function(e,t,n){if(!Oo(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=nc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=tc(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};ge.render=function(e,t,n){if(!hl(t))throw Error(y(200));return vl(null,e,t,!1,n)};ge.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ge.unstable_batchedUpdates=Po;ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return vl(e,t,n,!1,r)};ge.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),rs.exports=ge;var Df=rs.exports,lc,Qu=Df;lc=Qu.createRoot,Qu.hydrateRoot;function yl(...e){return e.map(t=>typeof t=="string"?t:typeof t=="object"?Object.entries(t).filter(([,n])=>n).map(([n])=>n).join(" "):"").filter(Boolean).join(" ")}const ic=({children:e,className:t,...n})=>N.jsx("div",{className:yl("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",t),...n,children:e});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Of={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),sn=(e,t)=>{const n=je.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:u="",children:s,...c},h)=>je.createElement("svg",{ref:h,...Of,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${If(e)}`,u].join(" "),...c},[...t.map(([m,p])=>je.createElement(m,p)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=sn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=sn("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=sn("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=sn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=sn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=sn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Hf=()=>N.jsxs("div",{className:"relative overflow-hidden bg-gray-900 py-24 sm:py-32",children:[N.jsx("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75')] bg-cover bg-center bg-no-repeat opacity-20"}),N.jsx(ic,{className:"relative",children:N.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[N.jsx("div",{className:"mb-8 flex justify-center",children:N.jsx("div",{className:"rounded-full bg-indigo-500/10 p-2 ring-2 ring-indigo-500/20",children:N.jsx($f,{className:"h-8 w-8 text-indigo-400"})})}),N.jsx("h1",{className:"text-4xl font-bold tracking-tight text-white sm:text-6xl",children:"Beautiful CSS Loading Animations"}),N.jsx("p",{className:"mt-6 text-lg leading-8 text-gray-300",children:"Discover and customize stunning loading animations for your web projects. No dependencies, just pure CSS magic."}),N.jsx("div",{className:"mt-10 flex items-center justify-center gap-x-6"})]})})]}),Ai=({children:e,className:t,variant:n="primary",size:r="md",...l})=>N.jsx("button",{className:yl("rounded-lg font-medium transition-colors",{"bg-indigo-600 text-white hover:bg-indigo-700":n==="primary","bg-gray-100 text-gray-900 hover:bg-gray-200":n==="secondary","text-gray-600 hover:bg-gray-100":n==="ghost","px-3 py-1.5 text-sm":r==="sm","px-4 py-2":r==="md","px-6 py-3 text-lg":r==="lg"},t),...l,children:e}),Wf=({loader:e,onFavorite:t,isFavorite:n})=>{const r=()=>{navigator.clipboard.writeText(`${e.code.html}

${e.code.css}`)};return N.jsxs("div",{className:"group relative rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800",children:[N.jsxs("div",{className:"mb-3 aspect-square rounded-md bg-gray-50 p-3 dark:bg-gray-700",children:[N.jsx("div",{dangerouslySetInnerHTML:{__html:e.code.html}}),N.jsx("style",{dangerouslySetInnerHTML:{__html:e.code.css}})]}),N.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-white",children:e.name}),N.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[N.jsx("span",{className:"inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",children:e.category}),N.jsxs("div",{className:"flex gap-1",children:[N.jsx(Ai,{variant:"ghost",size:"sm",onClick:()=>t==null?void 0:t(e.id),"aria-label":n?"Remove from favorites":"Add to favorites",children:N.jsx(Uf,{className:yl("h-4 w-4",{"fill-current text-red-500":n})})}),N.jsx(Ai,{variant:"ghost",size:"sm",onClick:r,"aria-label":"Copy code",children:N.jsx(Ff,{className:"h-4 w-4"})})]})]})]})},Qf=({loaders:e,onFavorite:t,favorites:n})=>N.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",children:e.map(r=>N.jsx(Wf,{loader:r,onFavorite:t,isFavorite:n==null?void 0:n.has(r.id)},r.id))}),Yf=({onSearch:e})=>N.jsxs("div",{className:"relative",children:[N.jsx(Bf,{className:"absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"}),N.jsx("input",{type:"text",placeholder:"Search loaders...",onChange:t=>e(t.target.value),className:"w-full rounded-lg border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"})]}),Xf=({selectedCategory:e,onCategoryChange:t})=>{const n=[{id:"minimalist",label:"Minimalist"},{id:"3d-effect",label:"3D Effect"},{id:"morphing",label:"Morphing"},{id:"text-based",label:"Text Based"},{id:"circular",label:"Circular"},{id:"bar",label:"Bars"},{id:"particle",label:"Particles"},{id:"nature",label:"Nature"},{id:"neon",label:"Neon"},{id:"abstract",label:"Abstract"}];return N.jsx("nav",{className:"sticky top-0 z-10 bg-white/80 py-4 backdrop-blur-sm dark:bg-gray-900/80",children:N.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 sm:pb-0",children:n.map(({id:r,label:l})=>N.jsx("button",{onClick:()=>t(r===e?void 0:r),className:yl("rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",{"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200":r===e,"bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700":r!==e}),children:l},r))})})};function oc(e,t){const[n,r]=je.useState(()=>{try{const l=window.localStorage.getItem(e);return l?JSON.parse(l):t}catch(l){return console.error(l),t}});return je.useEffect(()=>{try{window.localStorage.setItem(e,JSON.stringify(n))}catch(l){console.error(l)}},[e,n]),[n,r]}const Kf=[{id:"simple-dots",name:"Simple Dots",category:"minimalist",code:{html:`<div class="loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,css:`.loader {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  animation: fade 1s infinite;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes fade {
  50% { opacity: 0.3; }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-circle",name:"Minimal Circle",category:"minimalist",code:{html:'<div class="circle"></div>',css:`.circle {
  width: 2rem;
  height: 2rem;
  border: 2px solid #6366f1;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  50% { transform: scale(0.8); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-line",name:"Minimal Line",category:"minimalist",code:{html:'<div class="line"></div>',css:`.line {
  width: 2rem;
  height: 2px;
  background: #6366f1;
  animation: expand 1s infinite;
}

@keyframes expand {
  0%, 100% { transform: scaleX(0.25); }
  50% { transform: scaleX(1); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-square",name:"Minimal Square",category:"minimalist",code:{html:'<div class="square"></div>',css:`.square {
  width: 2rem;
  height: 2rem;
  border: 2px solid #6366f1;
  animation: rotate 2s infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-fade",name:"Minimal Fade",category:"minimalist",code:{html:'<div class="fade"></div>',css:`.fade {
  width: 2rem;
  height: 2rem;
  background: #6366f1;
  animation: fade 1.5s infinite;
}

@keyframes fade {
  50% { opacity: 0.2; }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-dash",name:"Minimal Dash",category:"minimalist",code:{html:'<div class="dash"></div>',css:`.dash {
  width: 2rem;
  height: 2px;
  background: #6366f1;
  animation: slide 1.5s infinite;
}

@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-pulse-ring",name:"Minimal Pulse Ring",category:"minimalist",code:{html:'<div class="pulse-ring"></div>',css:`.pulse-ring {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid #6366f1;
  animation: pulse-ring 1.5s infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-dots-flow",name:"Minimal Dots Flow",category:"minimalist",code:{html:`<div class="dots-flow">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,css:`.dots-flow {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  animation: flow 1s infinite;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes flow {
  50% { transform: translateY(-0.5rem); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-cross",name:"Minimal Cross",category:"minimalist",code:{html:`<div class="cross">
  <div class="line-1"></div>
  <div class="line-2"></div>
</div>`,css:`.cross {
  width: 2rem;
  height: 2rem;
  position: relative;
  animation: spin 2s infinite;
}

.line-1, .line-2 {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #6366f1;
  top: 50%;
  left: 0;
  transform-origin: center;
}

.line-1 { transform: translateY(-50%); }
.line-2 { transform: translateY(-50%) rotate(90deg); }

@keyframes spin {
  100% { transform: rotate(360deg); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"minimal-square-dots",name:"Minimal Square Dots",category:"minimalist",code:{html:`<div class="square-dots">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,css:`.square-dots {
  width: 2rem;
  height: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  animation: fade 1.5s infinite;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
.dot:nth-child(4) { animation-delay: 0.6s; }

@keyframes fade {
  50% { opacity: 0.2; }
}`},customization:{color:!0,size:!0,speed:!0}}],Gf=[{id:"3d-cube",name:"3D Cube",category:"3d-effect",code:{html:'<div class="cube"></div>',css:`.cube {
  width: 2rem;
  height: 2rem;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 2s infinite linear;
}

.cube::before,
.cube::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #6366f1;
  opacity: 0.8;
}

.cube::before {
  transform: rotateY(90deg) translateZ(1rem);
}

.cube::after {
  transform: translateZ(1rem);
}

@keyframes rotate {
  to { transform: rotateY(360deg) rotateX(360deg); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"3d-flip-panel",name:"3D Flip Panel",category:"3d-effect",code:{html:'<div class="flip-panel"></div>',css:`.flip-panel {
  width: 2rem;
  height: 2rem;
  position: relative;
  transform-style: preserve-3d;
  animation: flip 1.5s infinite;
}

.flip-panel::before,
.flip-panel::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #6366f1;
  backface-visibility: hidden;
}

.flip-panel::after {
  transform: rotateY(180deg);
}

@keyframes flip {
  0%, 100% { transform: rotateY(0); }
  50% { transform: rotateY(180deg); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"3d-pyramid",name:"3D Pyramid",category:"3d-effect",code:{html:'<div class="pyramid"></div>',css:`.pyramid {
  width: 2rem;
  height: 2rem;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 2s infinite linear;
}

.pyramid::before,
.pyramid::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #6366f1;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

.pyramid::before {
  transform: rotateY(90deg) translateZ(1rem) rotateX(30deg);
}

.pyramid::after {
  transform: translateZ(1rem) rotateX(30deg);
}

@keyframes spin {
  to { transform: rotateY(360deg); }
}`},customization:{color:!0,size:!0,speed:!0}}],Zf=[{id:"shape-morph",name:"Shape Morph",category:"morphing",code:{html:'<div class="morph"></div>',css:`.morph {
  width: 2rem;
  height: 2rem;
  background: #6366f1;
  animation: morph 2s infinite;
}

@keyframes morph {
  0% { border-radius: 0; }
  50% { border-radius: 50%; }
  100% { border-radius: 0; }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"triangle-circle",name:"Triangle to Circle",category:"morphing",code:{html:'<div class="morph-triangle"></div>',css:`.morph-triangle {
  width: 2rem;
  height: 2rem;
  background: #6366f1;
  animation: morphTriangle 2s infinite;
}

@keyframes morphTriangle {
  0% {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  50% {
    clip-path: circle(50% at 50% 50%);
  }
  100% {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"square-star",name:"Square to Star",category:"morphing",code:{html:'<div class="morph-star"></div>',css:`.morph-star {
  width: 2rem;
  height: 2rem;
  background: #6366f1;
  animation: morphStar 2s infinite;
}

@keyframes morphStar {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}`},customization:{color:!0,size:!0,speed:!0}}],Jf=[{id:"typing-dots",name:"Typing Dots",category:"text-based",code:{html:'<div class="typing">Loading<span>.</span><span>.</span><span>.</span></div>',css:`.typing {
  font-family: monospace;
  font-size: 1.2rem;
  color: #6366f1;
}

.typing span {
  opacity: 0;
  animation: dot 1.5s infinite;
}

.typing span:nth-child(2) { animation-delay: 0.2s; }
.typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes dot {
  0%, 20% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}`},customization:{color:!0,speed:!0}},{id:"typewriter",name:"Typewriter",category:"text-based",code:{html:'<div class="typewriter">Loading...</div>',css:`.typewriter {
  font-family: monospace;
  font-size: 1.2rem;
  color: #6366f1;
  width: fit-content;
  border-right: 2px solid #6366f1;
  animation: typing 2s steps(10) infinite;
  white-space: nowrap;
  overflow: hidden;
}

@keyframes typing {
  0%, 100% { width: 0 }
  50% { width: 7ch }
}`},customization:{color:!0,speed:!0}},{id:"glitch-text",name:"Glitch Text",category:"text-based",code:{html:'<div class="glitch">Loading</div>',css:`.glitch {
  font-family: monospace;
  font-size: 1.2rem;
  color: #6366f1;
  position: relative;
}

.glitch::before,
.glitch::after {
  content: 'Loading';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch 2s infinite;
  color: #ef4444;
  z-index: -1;
}

.glitch::after {
  animation: glitch 2s infinite reverse;
  color: #3b82f6;
  z-index: -2;
}

@keyframes glitch {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}`},customization:{color:!0,speed:!0}}],qf=[{id:"gradient-spinner",name:"Gradient Spinner",category:"circular",code:{html:'<div class="spinner"></div>',css:`.spinner {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: conic-gradient(#6366f1 0%, transparent 65%);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"dual-ring",name:"Dual Ring",category:"circular",code:{html:'<div class="dual-ring"></div>',css:`.dual-ring {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #6366f1;
  border-bottom-color: #6366f1;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"orbital",name:"Orbital",category:"circular",code:{html:`<div class="orbital">
  <div class="planet"></div>
  <div class="moon"></div>
</div>`,css:`.orbital {
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
}

.planet {
  width: 1rem;
  height: 1rem;
  background: #6366f1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.moon {
  width: 0.5rem;
  height: 0.5rem;
  background: #818cf8;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: 50% 1.25rem;
  animation: orbit 1.5s linear infinite;
}

@keyframes orbit {
  to { transform: translateX(-50%) rotate(360deg); }
}`},customization:{color:!0,size:!0,speed:!0}}],bf=[{id:"progress-bar",name:"Progress Bar",category:"bar",code:{html:'<div class="progress"></div>',css:`.progress {
  width: 12rem;
  height: 0.25rem;
  background: #e5e7eb;
  overflow: hidden;
  position: relative;
}

.progress::after {
  content: '';
  position: absolute;
  width: 40%;
  height: 100%;
  background: #6366f1;
  animation: progress 1.5s ease-in-out infinite;
}

@keyframes progress {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}`},customization:{color:!0,size:!0,speed:!0}}],ep=[{id:"floating-particles",name:"Floating Particles",category:"particle",code:{html:`<div class="particles">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>`,css:`.particles {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.particle {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  animation: float 1.5s infinite;
}

.particle:nth-child(1) { left: 0; top: 50%; }
.particle:nth-child(2) { left: 50%; top: 0; animation-delay: 0.2s; }
.particle:nth-child(3) { right: 0; top: 50%; animation-delay: 0.4s; }
.particle:nth-child(4) { left: 50%; bottom: 0; animation-delay: 0.6s; }

@keyframes float {
  50% {
    transform: scale(0.7) translate(20%, 20%);
    opacity: 0.5;
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"particle-explosion",name:"Particle Explosion",category:"particle",code:{html:`<div class="explosion">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>`,css:`.explosion {
  width: 2rem;
  height: 2rem;
  position: relative;
}

.particle {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background: #6366f1;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: explode 1.5s infinite;
}

@keyframes explode {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(
      calc(-50% + var(--x, 0) * 1rem),
      calc(-50% + var(--y, 0) * 1rem)
    ) scale(0);
    opacity: 0;
  }
}

.particle:nth-child(1) { --x: 1; --y: 1; }
.particle:nth-child(2) { --x: 1; --y: -1; }
.particle:nth-child(3) { --x: -1; --y: 1; }
.particle:nth-child(4) { --x: -1; --y: -1; }
.particle:nth-child(5) { --x: 1.4; --y: 0; }
.particle:nth-child(6) { --x: -1.4; --y: 0; }
.particle:nth-child(7) { --x: 0; --y: 1.4; }
.particle:nth-child(8) { --x: 0; --y: -1.4; }`},customization:{color:!0,size:!0,speed:!0}},{id:"particle-orbit",name:"Particle Orbit",category:"particle",code:{html:`<div class="orbit">
  <div class="center"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>`,css:`.orbit {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.center {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.particle {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background: #6366f1;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  animation: orbit 2s linear infinite;
}

.particle:nth-child(2) { animation-delay: -0.66s; }
.particle:nth-child(3) { animation-delay: -1.33s; }

@keyframes orbit {
  from { transform: rotate(0deg) translateX(1.25rem); }
  to { transform: rotate(360deg) translateX(1.25rem); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"particle-wave",name:"Particle Wave",category:"particle",code:{html:`<div class="wave">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>`,css:`.wave {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.particle {
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  animation: wave 1.5s ease-in-out infinite;
}

.particle:nth-child(2) { animation-delay: 0.1s; }
.particle:nth-child(3) { animation-delay: 0.2s; }
.particle:nth-child(4) { animation-delay: 0.3s; }
.particle:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
  50% { transform: translateY(-1rem); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"particle-pulse",name:"Particle Pulse",category:"particle",code:{html:`<div class="pulse-container">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>`,css:`.pulse-container {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.particle {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.particle:nth-child(1) { top: 0; left: 0; }
.particle:nth-child(2) { top: 0; right: 0; animation-delay: 0.5s; }
.particle:nth-child(3) { bottom: 0; left: 0; animation-delay: 1s; }
.particle:nth-child(4) { bottom: 0; right: 0; animation-delay: 1.5s; }

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(2); opacity: 0; }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"particle-trail",name:"Particle Trail",category:"particle",code:{html:`<div class="trail">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>`,css:`.trail {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.particle {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  animation: trail 2s infinite;
  opacity: 0.2;
}

.particle:nth-child(1) { animation-delay: 0s; }
.particle:nth-child(2) { animation-delay: 0.4s; }
.particle:nth-child(3) { animation-delay: 0.8s; }
.particle:nth-child(4) { animation-delay: 1.2s; }
.particle:nth-child(5) { animation-delay: 1.6s; }

@keyframes trail {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(2rem, 2rem);
    opacity: 0;
  }
}`},customization:{color:!0,size:!0,speed:!0}}],tp=[{id:"water-ripple",name:"Water Ripple",category:"nature",code:{html:'<div class="ripple"></div>',css:`.ripple {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.ripple::before,
.ripple::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid #6366f1;
  border-radius: 50%;
  animation: ripple 2s infinite ease-out;
}

.ripple::after {
  animation-delay: 1s;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"rain-drops",name:"Rain Drops",category:"nature",code:{html:`<div class="rain">
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
</div>`,css:`.rain {
  width: 2rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.drop {
  width: 0.2rem;
  height: 0.2rem;
  background: #6366f1;
  border-radius: 50%;
  animation: rain 1s infinite;
}

.drop:nth-child(2) { animation-delay: 0.2s; }
.drop:nth-child(3) { animation-delay: 0.4s; }

@keyframes rain {
  0% {
    transform: translateY(0) scaleX(1);
  }
  70% {
    transform: translateY(2rem) scaleX(1);
  }
  100% {
    transform: translateY(2rem) scaleX(3);
    opacity: 0;
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"leaf-fall",name:"Falling Leaf",category:"nature",code:{html:'<div class="leaf"></div>',css:`.leaf {
  width: 1rem;
  height: 1rem;
  background: #6366f1;
  clip-path: path('M8 1.5c4 0 6.5 3.5 6.5 3.5s-2.5 3.5-6.5 3.5S1.5 5 1.5 5 4 1.5 8 1.5z');
  animation: fall 3s infinite linear;
}

@keyframes fall {
  0% {
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateY(150%) rotate(360deg);
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"wave-motion",name:"Wave Motion",category:"nature",code:{html:`<div class="wave">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>`,css:`.wave {
  width: 3rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.line {
  height: 2px;
  background: #6366f1;
  animation: wave 2s infinite ease-in-out;
}

.line:nth-child(2) { animation-delay: 0.2s; }
.line:nth-child(3) { animation-delay: 0.4s; }

@keyframes wave {
  0%, 100% { transform: scaleX(0.25); }
  50% { transform: scaleX(1); }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"firefly",name:"Firefly",category:"nature",code:{html:`<div class="firefly-container">
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
</div>`,css:`.firefly-container {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.firefly {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: #6366f1;
  border-radius: 50%;
  filter: blur(2px);
  animation: glow 3s infinite;
}

.firefly:nth-child(1) { animation-delay: 0s; }
.firefly:nth-child(2) { animation-delay: 1s; }
.firefly:nth-child(3) { animation-delay: 2s; }

@keyframes glow {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.2;
  }
  50% {
    transform: translate(1rem, -1rem);
    opacity: 1;
  }
}`},customization:{color:!0,size:!0,speed:!0}}],np=[{id:"neon-pulse",name:"Neon Pulse",category:"neon",code:{html:'<div class="neon"></div>',css:`.neon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #6366f1;
  box-shadow: 0 0 15px #6366f1,
              0 0 30px #6366f1,
              0 0 45px #6366f1;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 20px #6366f1,
                0 0 40px #6366f1,
                0 0 60px #6366f1;
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"neon-ring",name:"Neon Ring",category:"neon",code:{html:'<div class="neon-ring"></div>',css:`.neon-ring {
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid #6366f1;
  border-radius: 50%;
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px #6366f1,
                inset 0 0 5px #6366f1;
  }
  to {
    box-shadow: 0 0 20px #6366f1,
                inset 0 0 20px #6366f1;
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"neon-bars",name:"Neon Bars",category:"neon",code:{html:`<div class="neon-bars">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>`,css:`.neon-bars {
  display: flex;
  gap: 0.5rem;
  height: 2.5rem;
}

.bar {
  width: 0.5rem;
  background: #6366f1;
  animation: neon-wave 1s ease-in-out infinite;
  box-shadow: 0 0 10px #6366f1;
}

.bar:nth-child(2) { animation-delay: 0.2s; }
.bar:nth-child(3) { animation-delay: 0.4s; }

@keyframes neon-wave {
  50% {
    height: 100%;
    box-shadow: 0 0 20px #6366f1;
  }
}`},customization:{color:!0,size:!0,speed:!0}}],rp=[{id:"abstract-flow",name:"Abstract Flow",category:"abstract",code:{html:'<div class="flow"></div>',css:`.flow {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(45deg, #6366f1, #818cf8);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: flow 2s infinite;
}

@keyframes flow {
  50% {
    clip-path: polygon(100% 50%, 50% 100%, 0% 50%, 50% 0%);
    transform: rotate(180deg);
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"abstract-waves",name:"Abstract Waves",category:"abstract",code:{html:`<div class="waves">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>`,css:`.waves {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.wave {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: wave 1.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}

.wave:nth-child(2) {
  animation-delay: 0.2s;
  transform: rotate(60deg);
}

.wave:nth-child(3) {
  animation-delay: 0.4s;
  transform: rotate(-60deg);
}

@keyframes wave {
  50% {
    transform: scale(1.5) rotate(360deg);
    opacity: 0.5;
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"abstract-morph",name:"Abstract Morph",category:"abstract",code:{html:'<div class="morph"></div>',css:`.morph {
  width: 3rem;
  height: 3rem;
  background: #6366f1;
  animation: morph 4s infinite;
}

@keyframes morph {
  0%, 100% {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  25% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: circle(50% at 50% 50%);
  }
  75% {
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"abstract-pulse",name:"Abstract Pulse",category:"abstract",code:{html:`<div class="pulse-container">
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
</div>`,css:`.pulse-container {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.shape {
  position: absolute;
  inset: 0;
  border: 2px solid #6366f1;
  animation: pulse 2s infinite;
}

.shape:nth-child(1) { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); }
.shape:nth-child(2) { clip-path: circle(50% at 50% 50%); animation-delay: 0.5s; }
.shape:nth-child(3) { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); animation-delay: 1s; }

@keyframes pulse {
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
}`},customization:{color:!0,size:!0,speed:!0}},{id:"abstract-spiral",name:"Abstract Spiral",category:"abstract",code:{html:`<div class="spiral">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>`,css:`.spiral {
  width: 3rem;
  height: 3rem;
  position: relative;
}

.line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #6366f1;
  top: 50%;
  left: 0;
  transform-origin: center;
  animation: spiral 2s infinite linear;
}

.line:nth-child(2) { animation-delay: 0.5s; }
.line:nth-child(3) { animation-delay: 1s; }
.line:nth-child(4) { animation-delay: 1.5s; }

@keyframes spiral {
  from {
    transform: rotate(0deg) translateY(0);
  }
  to {
    transform: rotate(360deg) translateY(-1rem);
  }
}`},customization:{color:!0,size:!0,speed:!0}}],Xl=[...Kf,...Gf,...Zf,...Jf,...qf,...bf,...ep,...tp,...np,...rp];function lp(){const[e,t]=je.useState({}),[n,r]=oc("favorites",[]),l=je.useMemo(()=>Xl.filter(u=>{if(e.category&&u.category!==e.category)return!1;if(e.search){const s=e.search.toLowerCase();return u.name.toLowerCase().includes(s)||u.category.toLowerCase().includes(s)}return!0}),[e]),i=u=>{r(s=>s.includes(u)?s.filter(c=>c!==u):[...s,u])},o=()=>{const u=Math.floor(Math.random()*Xl.length);return Xl[u]};return{loaders:l,filters:e,setFilters:t,favorites:new Set(n),toggleFavorite:i,getRandomLoader:o}}function ip(){const[e,t]=oc("darkMode",!1);return je.useEffect(()=>{const n=window.document.documentElement;e?n.classList.add("dark"):n.classList.remove("dark")},[e]),[e,t]}const op=()=>{const[e,t]=ip();return N.jsx(Ai,{variant:"ghost",size:"sm",onClick:()=>t(!e),"aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?N.jsx(Vf,{className:"h-5 w-5 text-gray-400"}):N.jsx(Af,{className:"h-5 w-5 text-gray-600"})})};function up(){const{loaders:e,filters:t,setFilters:n,favorites:r,toggleFavorite:l}=lp();return N.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[N.jsx("div",{className:"fixed right-4 top-4 z-50",children:N.jsx(op,{})}),N.jsx(Hf,{}),N.jsxs(ic,{children:[N.jsx(Xf,{selectedCategory:t.category,onCategoryChange:i=>n({...t,category:i})}),N.jsxs("div",{className:"py-8",children:[N.jsx(Yf,{onSearch:i=>n({...t,search:i})}),N.jsx("div",{className:"mt-8",children:N.jsx(Qf,{loaders:e,onFavorite:l,favorites:r})})]})]})]})}lc(document.getElementById("root")).render(N.jsx(je.StrictMode,{children:N.jsx(up,{})}));

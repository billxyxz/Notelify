function PS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function J_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z_={exports:{}},Mc={},e1={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),bS=Symbol.for("react.portal"),NS=Symbol.for("react.fragment"),DS=Symbol.for("react.strict_mode"),OS=Symbol.for("react.profiler"),LS=Symbol.for("react.provider"),MS=Symbol.for("react.context"),VS=Symbol.for("react.forward_ref"),FS=Symbol.for("react.suspense"),jS=Symbol.for("react.memo"),US=Symbol.for("react.lazy"),Ry=Symbol.iterator;function $S(t){return t===null||typeof t!="object"?null:(t=Ry&&t[Ry]||t["@@iterator"],typeof t=="function"?t:null)}var t1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n1=Object.assign,r1={};function eo(t,e,n){this.props=t,this.context=e,this.refs=r1,this.updater=n||t1}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i1(){}i1.prototype=eo.prototype;function Bp(t,e,n){this.props=t,this.context=e,this.refs=r1,this.updater=n||t1}var Hp=Bp.prototype=new i1;Hp.constructor=Bp;n1(Hp,eo.prototype);Hp.isPureReactComponent=!0;var Py=Array.isArray,s1=Object.prototype.hasOwnProperty,Wp={current:null},o1={key:!0,ref:!0,__self:!0,__source:!0};function a1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s1.call(e,r)&&!o1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:el,type:t,key:s,ref:o,props:i,_owner:Wp.current}}function zS(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function BS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var by=/\/+/g;function Gd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BS(""+t.key):e.toString(36)}function gu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case bS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gd(o,0):r,Py(i)?(n="",t!=null&&(n=t.replace(by,"$&/")+"/"),gu(i,e,n,"",function(u){return u})):i!=null&&(qp(i)&&(i=zS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(by,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Py(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gd(s,a);o+=gu(s,e,n,l,i)}else if(l=$S(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gd(s,a++),o+=gu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ll(t,e,n){if(t==null)return t;var r=[],i=0;return gu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},yu={transition:null},WS={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:yu,ReactCurrentOwner:Wp};se.Children={map:Ll,forEach:function(t,e,n){Ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ll(t,function(){e++}),e},toArray:function(t){return Ll(t,function(e){return e})||[]},only:function(t){if(!qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=eo;se.Fragment=NS;se.Profiler=OS;se.PureComponent=Bp;se.StrictMode=DS;se.Suspense=FS;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=n1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)s1.call(e,l)&&!o1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:el,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:MS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LS,_context:t},t.Consumer=t};se.createElement=a1;se.createFactory=function(t){var e=a1.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:VS,render:t}};se.isValidElement=qp;se.lazy=function(t){return{$$typeof:US,_payload:{_status:-1,_result:t},_init:HS}};se.memo=function(t,e){return{$$typeof:jS,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=yu.transition;yu.transition={};try{t()}finally{yu.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return xt.current.useCallback(t,e)};se.useContext=function(t){return xt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};se.useEffect=function(t,e){return xt.current.useEffect(t,e)};se.useId=function(){return xt.current.useId()};se.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return xt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};se.useRef=function(t){return xt.current.useRef(t)};se.useState=function(t){return xt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return xt.current.useTransition()};se.version="18.2.0";e1.exports=se;var A=e1.exports;const Vc=J_(A),qS=PS({__proto__:null,default:Vc},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=A,GS=Symbol.for("react.element"),QS=Symbol.for("react.fragment"),YS=Object.prototype.hasOwnProperty,XS=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JS={key:!0,ref:!0,__self:!0,__source:!0};function l1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YS.call(e,r)&&!JS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GS,type:t,key:s,ref:o,props:i,_owner:XS.current}}Mc.Fragment=QS;Mc.jsx=l1;Mc.jsxs=l1;Z_.exports=Mc;var y=Z_.exports,Zf={},u1={exports:{}},Ht={},c1={exports:{}},d1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,q){var Z=O.length;O.push(q);e:for(;0<Z;){var ke=Z-1>>>1,Ue=O[ke];if(0<i(Ue,q))O[ke]=q,O[Z]=Ue,Z=ke;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var q=O[0],Z=O.pop();if(Z!==q){O[0]=Z;e:for(var ke=0,Ue=O.length,Gi=Ue>>>1;ke<Gi;){var ge=2*(ke+1)-1,Mn=O[ge],wn=ge+1,Qi=O[wn];if(0>i(Mn,Z))wn<Ue&&0>i(Qi,Mn)?(O[ke]=Qi,O[wn]=Z,ke=wn):(O[ke]=Mn,O[ge]=Z,ke=ge);else if(wn<Ue&&0>i(Qi,Z))O[ke]=Qi,O[wn]=Z,ke=wn;else break e}}return q}function i(O,q){var Z=O.sortIndex-q.sortIndex;return Z!==0?Z:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=O)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function m(O){if(w=!1,v(O),!_)if(n(l)!==null)_=!0,Mt(I);else{var q=n(u);q!==null&&_n(m,q.startTime-O)}}function I(O,q){_=!1,w&&(w=!1,g(D),D=-1),p=!0;var Z=f;try{for(v(q),d=n(l);d!==null&&(!(d.expirationTime>q)||O&&!Je());){var ke=d.callback;if(typeof ke=="function"){d.callback=null,f=d.priorityLevel;var Ue=ke(d.expirationTime<=q);q=t.unstable_now(),typeof Ue=="function"?d.callback=Ue:d===n(l)&&r(l),v(q)}else r(l);d=n(l)}if(d!==null)var Gi=!0;else{var ge=n(u);ge!==null&&_n(m,ge.startTime-q),Gi=!1}return Gi}finally{d=null,f=Z,p=!1}}var x=!1,C=null,D=-1,W=5,z=-1;function Je(){return!(t.unstable_now()-z<W)}function me(){if(C!==null){var O=t.unstable_now();z=O;var q=!0;try{q=C(!0,O)}finally{q?vn():(x=!1,C=null)}}else x=!1}var vn;if(typeof h=="function")vn=function(){h(me)};else if(typeof MessageChannel<"u"){var cr=new MessageChannel,dr=cr.port2;cr.port1.onmessage=me,vn=function(){dr.postMessage(null)}}else vn=function(){E(me,0)};function Mt(O){C=O,x||(x=!0,vn())}function _n(O,q){D=E(function(){O(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Mt(I))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Z=f;f=q;try{return O()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=f;f=O;try{return q()}finally{f=Z}},t.unstable_scheduleCallback=function(O,q,Z){var ke=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ke+Z:ke):Z=ke,O){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=Z+Ue,O={id:c++,callback:q,priorityLevel:O,startTime:Z,expirationTime:Ue,sortIndex:-1},Z>ke?(O.sortIndex=Z,e(u,O),n(l)===null&&O===n(u)&&(w?(g(D),D=-1):w=!0,_n(m,Z-ke))):(O.sortIndex=Ue,e(l,O),_||p||(_=!0,Mt(I))),O},t.unstable_shouldYield=Je,t.unstable_wrapCallback=function(O){var q=f;return function(){var Z=f;f=q;try{return O.apply(this,arguments)}finally{f=Z}}}})(d1);c1.exports=d1;var ZS=c1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=A,zt=ZS;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h1=new Set,fa={};function zi(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(fa[t]=e,t=0;t<e.length;t++)h1.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=Object.prototype.hasOwnProperty,eA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ny={},Dy={};function tA(t){return eh.call(Dy,t)?!0:eh.call(Ny,t)?!1:eA.test(t)?Dy[t]=!0:(Ny[t]=!0,!1)}function nA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rA(t,e,n,r){if(e===null||typeof e>"u"||nA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kp=/[\-:]([a-z])/g;function Gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kp,Gp);ut[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kp,Gp);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kp,Gp);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qp(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rA(e,n,i,r)&&(n=null),r||i===null?tA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),p1=Symbol.for("react.provider"),m1=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),rh=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),g1=Symbol.for("react.offscreen"),Oy=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=Oy&&t[Oy]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Qd;function Oo(t){if(Qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qd=e&&e[1]||""}return`
`+Qd+t}var Yd=!1;function Xd(t,e){if(!t||Yd)return"";Yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function iA(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=Xd(t.type,!1),t;case 11:return t=Xd(t.type.render,!1),t;case 1:return t=Xd(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case ns:return"Portal";case th:return"Profiler";case Yp:return"StrictMode";case nh:return"Suspense";case rh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m1:return(t.displayName||"Context")+".Consumer";case p1:return(t._context.displayName||"Context")+".Provider";case Xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jp:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function sA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oA(t){var e=y1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vl(t){t._valueTracker||(t._valueTracker=oA(t))}function v1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=y1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sh(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ly(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _1(t,e){e=e.checked,e!=null&&Qp(t,"checked",e,!1)}function oh(t,e){_1(t,e);var n=zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&ah(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function My(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ah(t,e,n){(e!=="number"||ju(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Lo(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function w1(t,e){var n=zr(e.value),r=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,T1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aA=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){aA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function I1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function S1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=I1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lA=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(lA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fh=null;function Zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,Es=null,Ts=null;function jy(t){if(t=rl(t)){if(typeof hh!="function")throw Error(b(280));var e=t.stateNode;e&&(e=zc(e),hh(t.stateNode,t.type,e))}}function A1(t){Es?Ts?Ts.push(t):Ts=[t]:Es=t}function k1(){if(Es){var t=Es,e=Ts;if(Ts=Es=null,jy(t),e)for(t=0;t<e.length;t++)jy(e[t])}}function x1(t,e){return t(e)}function C1(){}var Jd=!1;function R1(t,e,n){if(Jd)return t(e,n);Jd=!0;try{return x1(t,e,n)}finally{Jd=!1,(Es!==null||Ts!==null)&&(C1(),k1())}}function pa(t,e){var n=t.stateNode;if(n===null)return null;var r=zc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var ph=!1;if(Gn)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){ph=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{ph=!1}function uA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Go=!1,Uu=null,$u=!1,mh=null,cA={onError:function(t){Go=!0,Uu=t}};function dA(t,e,n,r,i,s,o,a,l){Go=!1,Uu=null,uA.apply(cA,arguments)}function fA(t,e,n,r,i,s,o,a,l){if(dA.apply(this,arguments),Go){if(Go){var u=Uu;Go=!1,Uu=null}else throw Error(b(198));$u||($u=!0,mh=u)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uy(t){if(Bi(t)!==t)throw Error(b(188))}function hA(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Uy(i),t;if(s===r)return Uy(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function b1(t){return t=hA(t),t!==null?N1(t):null}function N1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=N1(t);if(e!==null)return e;t=t.sibling}return null}var D1=zt.unstable_scheduleCallback,$y=zt.unstable_cancelCallback,pA=zt.unstable_shouldYield,mA=zt.unstable_requestPaint,je=zt.unstable_now,gA=zt.unstable_getCurrentPriorityLevel,em=zt.unstable_ImmediatePriority,O1=zt.unstable_UserBlockingPriority,zu=zt.unstable_NormalPriority,yA=zt.unstable_LowPriority,L1=zt.unstable_IdlePriority,Fc=null,Rn=null;function vA(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:EA,_A=Math.log,wA=Math.LN2;function EA(t){return t>>>=0,t===0?32:31-(_A(t)/wA|0)|0}var jl=64,Ul=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mo(a):(s&=o,s!==0&&(r=Mo(s)))}else o=n&~i,o!==0?r=Mo(o):s!==0&&(r=Mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function TA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function M1(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function Zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function SA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function V1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F1,nm,j1,U1,$1,yh=!1,$l=[],Rr=null,Pr=null,br=null,ma=new Map,ga=new Map,_r=[],AA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zy(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function Eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&nm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kA(t,e,n,r,i){switch(e){case"focusin":return Rr=Eo(Rr,t,e,n,r,i),!0;case"dragenter":return Pr=Eo(Pr,t,e,n,r,i),!0;case"mouseover":return br=Eo(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ma.set(s,Eo(ma.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ga.set(s,Eo(ga.get(s)||null,t,e,n,r,i)),!0}return!1}function z1(t){var e=fi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=P1(n),e!==null){t.blockedOn=e,$1(t.priority,function(){j1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fh=r,n.target.dispatchEvent(r),fh=null}else return e=rl(n),e!==null&&nm(e),t.blockedOn=n,!1;e.shift()}return!0}function By(t,e,n){vu(t)&&n.delete(e)}function xA(){yh=!1,Rr!==null&&vu(Rr)&&(Rr=null),Pr!==null&&vu(Pr)&&(Pr=null),br!==null&&vu(br)&&(br=null),ma.forEach(By),ga.forEach(By)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,yh||(yh=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,xA)))}function ya(t){function e(i){return To(i,t)}if(0<$l.length){To($l[0],t);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&To(Rr,t),Pr!==null&&To(Pr,t),br!==null&&To(br,t),ma.forEach(e),ga.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)z1(n),n.blockedOn===null&&_r.shift()}var Is=sr.ReactCurrentBatchConfig,Hu=!0;function CA(t,e,n,r){var i=de,s=Is.transition;Is.transition=null;try{de=1,rm(t,e,n,r)}finally{de=i,Is.transition=s}}function RA(t,e,n,r){var i=de,s=Is.transition;Is.transition=null;try{de=4,rm(t,e,n,r)}finally{de=i,Is.transition=s}}function rm(t,e,n,r){if(Hu){var i=vh(t,e,n,r);if(i===null)cf(t,e,r,Wu,n),zy(t,r);else if(kA(i,t,e,n,r))r.stopPropagation();else if(zy(t,r),e&4&&-1<AA.indexOf(t)){for(;i!==null;){var s=rl(i);if(s!==null&&F1(s),s=vh(t,e,n,r),s===null&&cf(t,e,r,Wu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cf(t,e,r,null,n)}}var Wu=null;function vh(t,e,n,r){if(Wu=null,t=Zp(r),t=fi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function B1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gA()){case em:return 1;case O1:return 4;case zu:case yA:return 16;case L1:return 536870912;default:return 16}default:return 16}}var Sr=null,im=null,_u=null;function H1(){if(_u)return _u;var t,e=im,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _u=i.slice(t,1<r?1-r:void 0)}function wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function Hy(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:Hy,this.isPropagationStopped=Hy,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sm=Wt(to),nl=Ne({},to,{view:0,detail:0}),PA=Wt(nl),ef,tf,Io,jc=Ne({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:om,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(ef=t.screenX-Io.screenX,tf=t.screenY-Io.screenY):tf=ef=0,Io=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),Wy=Wt(jc),bA=Ne({},jc,{dataTransfer:0}),NA=Wt(bA),DA=Ne({},nl,{relatedTarget:0}),nf=Wt(DA),OA=Ne({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),LA=Wt(OA),MA=Ne({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VA=Wt(MA),FA=Ne({},to,{data:0}),qy=Wt(FA),jA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$A={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$A[t])?!!e[t]:!1}function om(){return zA}var BA=Ne({},nl,{key:function(t){if(t.key){var e=jA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:om,charCode:function(t){return t.type==="keypress"?wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HA=Wt(BA),WA=Ne({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ky=Wt(WA),qA=Ne({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:om}),KA=Wt(qA),GA=Ne({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),QA=Wt(GA),YA=Ne({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XA=Wt(YA),JA=[9,13,27,32],am=Gn&&"CompositionEvent"in window,Qo=null;Gn&&"documentMode"in document&&(Qo=document.documentMode);var ZA=Gn&&"TextEvent"in window&&!Qo,W1=Gn&&(!am||Qo&&8<Qo&&11>=Qo),Gy=String.fromCharCode(32),Qy=!1;function q1(t,e){switch(t){case"keyup":return JA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function ek(t,e){switch(t){case"compositionend":return K1(e);case"keypress":return e.which!==32?null:(Qy=!0,Gy);case"textInput":return t=e.data,t===Gy&&Qy?null:t;default:return null}}function tk(t,e){if(is)return t==="compositionend"||!am&&q1(t,e)?(t=H1(),_u=im=Sr=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W1&&e.locale!=="ko"?null:e.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nk[t.type]:e==="textarea"}function G1(t,e,n,r){A1(r),e=qu(e,"onChange"),0<e.length&&(n=new sm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yo=null,va=null;function rk(t){sw(t,0)}function Uc(t){var e=as(t);if(v1(e))return t}function ik(t,e){if(t==="change")return e}var Q1=!1;if(Gn){var rf;if(Gn){var sf="oninput"in document;if(!sf){var Xy=document.createElement("div");Xy.setAttribute("oninput","return;"),sf=typeof Xy.oninput=="function"}rf=sf}else rf=!1;Q1=rf&&(!document.documentMode||9<document.documentMode)}function Jy(){Yo&&(Yo.detachEvent("onpropertychange",Y1),va=Yo=null)}function Y1(t){if(t.propertyName==="value"&&Uc(va)){var e=[];G1(e,va,t,Zp(t)),R1(rk,e)}}function sk(t,e,n){t==="focusin"?(Jy(),Yo=e,va=n,Yo.attachEvent("onpropertychange",Y1)):t==="focusout"&&Jy()}function ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(va)}function ak(t,e){if(t==="click")return Uc(e)}function lk(t,e){if(t==="input"||t==="change")return Uc(e)}function uk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:uk;function _a(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eh.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function Zy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ev(t,e){var n=Zy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zy(n)}}function X1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J1(){for(var t=window,e=ju();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ju(t.document)}return e}function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ck(t){var e=J1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X1(n.ownerDocument.documentElement,n)){if(r!==null&&lm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ev(n,s);var o=ev(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dk=Gn&&"documentMode"in document&&11>=document.documentMode,ss=null,_h=null,Xo=null,wh=!1;function tv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wh||ss==null||ss!==ju(r)||(r=ss,"selectionStart"in r&&lm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xo&&_a(Xo,r)||(Xo=r,r=qu(_h,"onSelect"),0<r.length&&(e=new sm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function Bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},of={},Z1={};Gn&&(Z1=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function $c(t){if(of[t])return of[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z1)return of[t]=e[n];return t}var ew=$c("animationend"),tw=$c("animationiteration"),nw=$c("animationstart"),rw=$c("transitionend"),iw=new Map,nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){iw.set(t,e),zi(e,[t])}for(var af=0;af<nv.length;af++){var lf=nv[af],fk=lf.toLowerCase(),hk=lf[0].toUpperCase()+lf.slice(1);Yr(fk,"on"+hk)}Yr(ew,"onAnimationEnd");Yr(tw,"onAnimationIteration");Yr(nw,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(rw,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fA(r,e,void 0,t),t.currentTarget=null}function sw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;rv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;rv(i,a,u),s=l}}}if($u)throw t=mh,$u=!1,mh=null,t}function ve(t,e){var n=e[Ah];n===void 0&&(n=e[Ah]=new Set);var r=t+"__bubble";n.has(r)||(ow(e,t,2,!1),n.add(r))}function uf(t,e,n){var r=0;e&&(r|=4),ow(n,t,r,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[Hl]){t[Hl]=!0,h1.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||uf(n,!1,t),uf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,uf("selectionchange",!1,e))}}function ow(t,e,n,r){switch(B1(e)){case 1:var i=CA;break;case 4:i=RA;break;default:i=rm}n=i.bind(null,e,n,t),i=void 0,!ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}R1(function(){var u=s,c=Zp(n),d=[];e:{var f=iw.get(t);if(f!==void 0){var p=sm,_=t;switch(t){case"keypress":if(wu(n)===0)break e;case"keydown":case"keyup":p=HA;break;case"focusin":_="focus",p=nf;break;case"focusout":_="blur",p=nf;break;case"beforeblur":case"afterblur":p=nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Wy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=NA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=KA;break;case ew:case tw:case nw:p=LA;break;case rw:p=QA;break;case"scroll":p=PA;break;case"wheel":p=XA;break;case"copy":case"cut":case"paste":p=VA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ky}var w=(e&4)!==0,E=!w&&t==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,v;h!==null;){v=h;var m=v.stateNode;if(v.tag===5&&m!==null&&(v=m,g!==null&&(m=pa(h,g),m!=null&&w.push(Ea(h,m,v)))),E)break;h=h.return}0<w.length&&(f=new p(f,_,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==fh&&(_=n.relatedTarget||n.fromElement)&&(fi(_)||_[Qn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?fi(_):null,_!==null&&(E=Bi(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(w=Wy,m="onMouseLeave",g="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=Ky,m="onPointerLeave",g="onPointerEnter",h="pointer"),E=p==null?f:as(p),v=_==null?f:as(_),f=new w(m,h+"leave",p,n,c),f.target=E,f.relatedTarget=v,m=null,fi(c)===u&&(w=new w(g,h+"enter",_,n,c),w.target=v,w.relatedTarget=E,m=w),E=m,p&&_)t:{for(w=p,g=_,h=0,v=w;v;v=Yi(v))h++;for(v=0,m=g;m;m=Yi(m))v++;for(;0<h-v;)w=Yi(w),h--;for(;0<v-h;)g=Yi(g),v--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=Yi(w),g=Yi(g)}w=null}else w=null;p!==null&&iv(d,f,p,w,!1),_!==null&&E!==null&&iv(d,E,_,w,!0)}}e:{if(f=u?as(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var I=ik;else if(Yy(f))if(Q1)I=lk;else{I=ok;var x=sk}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=ak);if(I&&(I=I(t,u))){G1(d,I,n,c);break e}x&&x(t,f,u),t==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&ah(f,"number",f.value)}switch(x=u?as(u):window,t){case"focusin":(Yy(x)||x.contentEditable==="true")&&(ss=x,_h=u,Xo=null);break;case"focusout":Xo=_h=ss=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,tv(d,n,c);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":tv(d,n,c)}var C;if(am)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else is?q1(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(W1&&n.locale!=="ko"&&(is||D!=="onCompositionStart"?D==="onCompositionEnd"&&is&&(C=H1()):(Sr=c,im="value"in Sr?Sr.value:Sr.textContent,is=!0)),x=qu(u,D),0<x.length&&(D=new qy(D,t,null,n,c),d.push({event:D,listeners:x}),C?D.data=C:(C=K1(n),C!==null&&(D.data=C)))),(C=ZA?ek(t,n):tk(t,n))&&(u=qu(u,"onBeforeInput"),0<u.length&&(c=new qy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}sw(d,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=pa(t,n),s!=null&&r.unshift(Ea(t,s,i)),s=pa(t,e),s!=null&&r.push(Ea(t,s,i))),t=t.return}return r}function Yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function iv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=pa(n,s),l!=null&&o.unshift(Ea(n,l,a))):i||(l=pa(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function sv(t){return(typeof t=="string"?t:""+t).replace(mk,`
`).replace(gk,"")}function Wl(t,e,n){if(e=sv(e),sv(t)!==e&&n)throw Error(b(425))}function Ku(){}var Eh=null,Th=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,yk=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,vk=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(t){return ov.resolve(null).then(t).catch(_k)}:Sh;function _k(t){setTimeout(function(){throw t})}function df(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function av(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),In="__reactFiber$"+no,Ta="__reactProps$"+no,Qn="__reactContainer$"+no,Ah="__reactEvents$"+no,wk="__reactListeners$"+no,Ek="__reactHandles$"+no;function fi(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=av(t);t!==null;){if(n=t[In])return n;t=av(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[In]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function zc(t){return t[Ta]||null}var kh=[],ls=-1;function Xr(t){return{current:t}}function Te(t){0>ls||(t.current=kh[ls],kh[ls]=null,ls--)}function ye(t,e){ls++,kh[ls]=t.current,t.current=e}var Br={},Et=Xr(Br),Nt=Xr(!1),xi=Br;function Os(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function Gu(){Te(Nt),Te(Et)}function lv(t,e,n){if(Et.current!==Br)throw Error(b(168));ye(Et,e),ye(Nt,n)}function aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,sA(t)||"Unknown",i));return Ne({},n,r)}function Qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,xi=Et.current,ye(Et,t),ye(Nt,Nt.current),!0}function uv(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=aw(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,Te(Nt),Te(Et),ye(Et,t)):Te(Nt),ye(Nt,n)}var Un=null,Bc=!1,ff=!1;function lw(t){Un===null?Un=[t]:Un.push(t)}function Tk(t){Bc=!0,lw(t)}function Jr(){if(!ff&&Un!==null){ff=!0;var t=0,e=de;try{var n=Un;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,Bc=!1}catch(i){throw Un!==null&&(Un=Un.slice(t+1)),D1(em,Jr),i}finally{de=e,ff=!1}}return null}var us=[],cs=0,Yu=null,Xu=0,Yt=[],Xt=0,Ci=null,$n=1,zn="";function li(t,e){us[cs++]=Xu,us[cs++]=Yu,Yu=t,Xu=e}function uw(t,e,n){Yt[Xt++]=$n,Yt[Xt++]=zn,Yt[Xt++]=Ci,Ci=t;var r=$n;t=zn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$n=1<<32-fn(e)+i|n<<i|r,zn=s+t}else $n=1<<s|n<<i|r,zn=t}function um(t){t.return!==null&&(li(t,1),uw(t,1,0))}function cm(t){for(;t===Yu;)Yu=us[--cs],us[cs]=null,Xu=us[--cs],us[cs]=null;for(;t===Ci;)Ci=Yt[--Xt],Yt[Xt]=null,zn=Yt[--Xt],Yt[Xt]=null,$n=Yt[--Xt],Yt[Xt]=null}var $t=null,Ft=null,Ae=!1,cn=null;function cw(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Ft=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:$n,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Ft=null,!0):!1;default:return!1}}function xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(Ae){var e=Ft;if(e){var n=e;if(!cv(t,e)){if(xh(t))throw Error(b(418));e=Nr(n.nextSibling);var r=$t;e&&cv(t,e)?cw(r,n):(t.flags=t.flags&-4097|2,Ae=!1,$t=t)}}else{if(xh(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ae=!1,$t=t}}}function dv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function ql(t){if(t!==$t)return!1;if(!Ae)return dv(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=Ft)){if(xh(t))throw dw(),Error(b(418));for(;e;)cw(t,e),e=Nr(e.nextSibling)}if(dv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=$t?Nr(t.stateNode.nextSibling):null;return!0}function dw(){for(var t=Ft;t;)t=Nr(t.nextSibling)}function Ls(){Ft=$t=null,Ae=!1}function dm(t){cn===null?cn=[t]:cn.push(t)}var Ik=sr.ReactCurrentBatchConfig;function an(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ju=Xr(null),Zu=null,ds=null,fm=null;function hm(){fm=ds=Zu=null}function pm(t){var e=Ju.current;Te(Ju),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Zu=t,fm=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(fm!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Zu===null)throw Error(b(308));ds=t,Zu.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var hi=null;function mm(t){hi===null?hi=[t]:hi.push(t)}function fw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function gm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,mm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function Eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}function fv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(f=e,p=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Ne({},d,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=d}}function hv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var pw=new f1.Component().refs;function Ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Lr(t),s=qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(hn(e,t,i,r),Eu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Lr(t),s=qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(hn(e,t,i,r),Eu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Lr(t),i=qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dr(t,i,r),e!==null&&(hn(e,t,r,n),Eu(e,t,r))}};function pv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,r)||!_a(i,s):!0}function mw(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Dt(e)?xi:Et.current,r=e.contextTypes,s=(r=r!=null)?Os(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=pw,gm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Dt(e)?xi:Et.current,i.context=Os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ph(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hc.enqueueReplaceState(i,i.state,null),ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===pw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Kl(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gv(t){var e=t._init;return e(t._payload)}function gw(t){function e(g,h){if(t){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!t)return null;for(;h!==null;)e(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Mr(g,h),g.index=0,g.sibling=null,g}function s(g,h,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,h,v,m){return h===null||h.tag!==6?(h=_f(v,g.mode,m),h.return=g,h):(h=i(h,v),h.return=g,h)}function l(g,h,v,m){var I=v.type;return I===rs?c(g,h,v.props.children,m,v.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===yr&&gv(I)===h.type)?(m=i(h,v.props),m.ref=So(g,h,v),m.return=g,m):(m=xu(v.type,v.key,v.props,null,g.mode,m),m.ref=So(g,h,v),m.return=g,m)}function u(g,h,v,m){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=wf(v,g.mode,m),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function c(g,h,v,m,I){return h===null||h.tag!==7?(h=Ii(v,g.mode,m,I),h.return=g,h):(h=i(h,v),h.return=g,h)}function d(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=_f(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ml:return v=xu(h.type,h.key,h.props,null,g.mode,v),v.ref=So(g,null,h),v.return=g,v;case ns:return h=wf(h,g.mode,v),h.return=g,h;case yr:var m=h._init;return d(g,m(h._payload),v)}if(Lo(h)||_o(h))return h=Ii(h,g.mode,v,null),h.return=g,h;Kl(g,h)}return null}function f(g,h,v,m){var I=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(g,h,""+v,m);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ml:return v.key===I?l(g,h,v,m):null;case ns:return v.key===I?u(g,h,v,m):null;case yr:return I=v._init,f(g,h,I(v._payload),m)}if(Lo(v)||_o(v))return I!==null?null:c(g,h,v,m,null);Kl(g,v)}return null}function p(g,h,v,m,I){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(v)||null,a(h,g,""+m,I);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ml:return g=g.get(m.key===null?v:m.key)||null,l(h,g,m,I);case ns:return g=g.get(m.key===null?v:m.key)||null,u(h,g,m,I);case yr:var x=m._init;return p(g,h,v,x(m._payload),I)}if(Lo(m)||_o(m))return g=g.get(v)||null,c(h,g,m,I,null);Kl(h,m)}return null}function _(g,h,v,m){for(var I=null,x=null,C=h,D=h=0,W=null;C!==null&&D<v.length;D++){C.index>D?(W=C,C=null):W=C.sibling;var z=f(g,C,v[D],m);if(z===null){C===null&&(C=W);break}t&&C&&z.alternate===null&&e(g,C),h=s(z,h,D),x===null?I=z:x.sibling=z,x=z,C=W}if(D===v.length)return n(g,C),Ae&&li(g,D),I;if(C===null){for(;D<v.length;D++)C=d(g,v[D],m),C!==null&&(h=s(C,h,D),x===null?I=C:x.sibling=C,x=C);return Ae&&li(g,D),I}for(C=r(g,C);D<v.length;D++)W=p(C,g,D,v[D],m),W!==null&&(t&&W.alternate!==null&&C.delete(W.key===null?D:W.key),h=s(W,h,D),x===null?I=W:x.sibling=W,x=W);return t&&C.forEach(function(Je){return e(g,Je)}),Ae&&li(g,D),I}function w(g,h,v,m){var I=_o(v);if(typeof I!="function")throw Error(b(150));if(v=I.call(v),v==null)throw Error(b(151));for(var x=I=null,C=h,D=h=0,W=null,z=v.next();C!==null&&!z.done;D++,z=v.next()){C.index>D?(W=C,C=null):W=C.sibling;var Je=f(g,C,z.value,m);if(Je===null){C===null&&(C=W);break}t&&C&&Je.alternate===null&&e(g,C),h=s(Je,h,D),x===null?I=Je:x.sibling=Je,x=Je,C=W}if(z.done)return n(g,C),Ae&&li(g,D),I;if(C===null){for(;!z.done;D++,z=v.next())z=d(g,z.value,m),z!==null&&(h=s(z,h,D),x===null?I=z:x.sibling=z,x=z);return Ae&&li(g,D),I}for(C=r(g,C);!z.done;D++,z=v.next())z=p(C,g,D,z.value,m),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?D:z.key),h=s(z,h,D),x===null?I=z:x.sibling=z,x=z);return t&&C.forEach(function(me){return e(g,me)}),Ae&&li(g,D),I}function E(g,h,v,m){if(typeof v=="object"&&v!==null&&v.type===rs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ml:e:{for(var I=v.key,x=h;x!==null;){if(x.key===I){if(I=v.type,I===rs){if(x.tag===7){n(g,x.sibling),h=i(x,v.props.children),h.return=g,g=h;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===yr&&gv(I)===x.type){n(g,x.sibling),h=i(x,v.props),h.ref=So(g,x,v),h.return=g,g=h;break e}n(g,x);break}else e(g,x);x=x.sibling}v.type===rs?(h=Ii(v.props.children,g.mode,m,v.key),h.return=g,g=h):(m=xu(v.type,v.key,v.props,null,g.mode,m),m.ref=So(g,h,v),m.return=g,g=m)}return o(g);case ns:e:{for(x=v.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else e(g,h);h=h.sibling}h=wf(v,g.mode,m),h.return=g,g=h}return o(g);case yr:return x=v._init,E(g,h,x(v._payload),m)}if(Lo(v))return _(g,h,v,m);if(_o(v))return w(g,h,v,m);Kl(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=_f(v,g.mode,m),h.return=g,g=h),o(g)):n(g,h)}return E}var Ms=gw(!0),yw=gw(!1),il={},Pn=Xr(il),Ia=Xr(il),Sa=Xr(il);function pi(t){if(t===il)throw Error(b(174));return t}function ym(t,e){switch(ye(Sa,e),ye(Ia,t),ye(Pn,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uh(e,t)}Te(Pn),ye(Pn,e)}function Vs(){Te(Pn),Te(Ia),Te(Sa)}function vw(t){pi(Sa.current);var e=pi(Pn.current),n=uh(e,t.type);e!==n&&(ye(Ia,t),ye(Pn,n))}function vm(t){Ia.current===t&&(Te(Pn),Te(Ia))}var Re=Xr(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hf=[];function _m(){for(var t=0;t<hf.length;t++)hf[t]._workInProgressVersionPrimary=null;hf.length=0}var Tu=sr.ReactCurrentDispatcher,pf=sr.ReactCurrentBatchConfig,Ri=0,be=null,Ge=null,et=null,nc=!1,Jo=!1,Aa=0,Sk=0;function dt(){throw Error(b(321))}function wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function Em(t,e,n,r,i,s){if(Ri=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tu.current=t===null||t.memoizedState===null?Ck:Rk,t=n(r,i),Jo){s=0;do{if(Jo=!1,Aa=0,25<=s)throw Error(b(301));s+=1,et=Ge=null,e.updateQueue=null,Tu.current=Pk,t=n(r,i)}while(Jo)}if(Tu.current=rc,e=Ge!==null&&Ge.next!==null,Ri=0,et=Ge=be=null,nc=!1,e)throw Error(b(300));return t}function Tm(){var t=Aa!==0;return Aa=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?be.memoizedState=et=t:et=et.next=t,et}function nn(){if(Ge===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?be.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(b(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?be.memoizedState=et=t:et=et.next=t}return et}function ka(t,e){return typeof e=="function"?e(t):e}function mf(t){var e=nn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ri&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,be.lanes|=c,Pi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,mn(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gf(t){var e=nn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _w(){}function ww(t,e){var n=be,r=nn(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,Im(Iw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,xa(9,Tw.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(b(349));Ri&30||Ew(n,e,i)}return i}function Ew(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tw(t,e,n,r){e.value=n,e.getSnapshot=r,Sw(e)&&Aw(t)}function Iw(t,e,n){return n(function(){Sw(e)&&Aw(t)})}function Sw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function Aw(t){var e=Yn(t,1);e!==null&&hn(e,t,1,-1)}function yv(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=xk.bind(null,be,t),[e.memoizedState,t]}function xa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kw(){return nn().memoizedState}function Iu(t,e,n,r){var i=Tn();be.flags|=t,i.memoizedState=xa(1|e,n,void 0,r===void 0?null:r)}function Wc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&wm(r,o.deps)){i.memoizedState=xa(e,n,s,r);return}}be.flags|=t,i.memoizedState=xa(1|e,n,s,r)}function vv(t,e){return Iu(8390656,8,t,e)}function Im(t,e){return Wc(2048,8,t,e)}function xw(t,e){return Wc(4,2,t,e)}function Cw(t,e){return Wc(4,4,t,e)}function Rw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pw(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,Rw.bind(null,e,t),n)}function Sm(){}function bw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Nw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dw(t,e,n){return Ri&21?(mn(n,e)||(n=M1(),be.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function Ak(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=pf.transition;pf.transition={};try{t(!1),e()}finally{de=n,pf.transition=r}}function Ow(){return nn().memoizedState}function kk(t,e,n){var r=Lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lw(t))Mw(e,n);else if(n=fw(t,e,n,r),n!==null){var i=kt();hn(n,t,r,i),Vw(n,e,r)}}function xk(t,e,n){var r=Lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lw(t))Mw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mn(a,o)){var l=e.interleaved;l===null?(i.next=i,mm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=fw(t,e,i,r),n!==null&&(i=kt(),hn(n,t,r,i),Vw(n,e,r))}}function Lw(t){var e=t.alternate;return t===be||e!==null&&e===be}function Mw(t,e){Jo=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}var rc={readContext:tn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Ck={readContext:tn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:vv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4194308,4,Rw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Iu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Iu(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kk.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:yv,useDebugValue:Sm,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=yv(!1),e=t[0];return t=Ak.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Tn();if(Ae){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),tt===null)throw Error(b(349));Ri&30||Ew(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vv(Iw.bind(null,r,s,t),[t]),r.flags|=2048,xa(9,Tw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=tt.identifierPrefix;if(Ae){var n=zn,r=$n;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rk={readContext:tn,useCallback:bw,useContext:tn,useEffect:Im,useImperativeHandle:Pw,useInsertionEffect:xw,useLayoutEffect:Cw,useMemo:Nw,useReducer:mf,useRef:kw,useState:function(){return mf(ka)},useDebugValue:Sm,useDeferredValue:function(t){var e=nn();return Dw(e,Ge.memoizedState,t)},useTransition:function(){var t=mf(ka)[0],e=nn().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:ww,useId:Ow,unstable_isNewReconciler:!1},Pk={readContext:tn,useCallback:bw,useContext:tn,useEffect:Im,useImperativeHandle:Pw,useInsertionEffect:xw,useLayoutEffect:Cw,useMemo:Nw,useReducer:gf,useRef:kw,useState:function(){return gf(ka)},useDebugValue:Sm,useDeferredValue:function(t){var e=nn();return Ge===null?e.memoizedState=t:Dw(e,Ge.memoizedState,t)},useTransition:function(){var t=gf(ka)[0],e=nn().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:ww,useId:Ow,unstable_isNewReconciler:!1};function Fs(t,e){try{var n="",r=e;do n+=iA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bk=typeof WeakMap=="function"?WeakMap:Map;function Fw(t,e,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sc||(sc=!0,zh=r),Nh(t,e)},n}function jw(t,e,n){n=qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nh(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _v(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wk.bind(null,t,e,n),e.then(t,t))}function wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ev(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qn(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var Nk=sr.ReactCurrentOwner,bt=!1;function St(t,e,n,r){e.child=t===null?yw(e,null,n,r):Ms(e,t.child,n,r)}function Tv(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=Em(t,e,n,r,s,i),n=Tm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ae&&n&&um(e),e.flags|=1,St(t,e,r,i),e.child)}function Iv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uw(t,e,s,r,i)):(t=xu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Uw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_a(s,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Dh(t,e,n,r,i)}function $w(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(hs,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(hs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(hs,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(hs,Vt),Vt|=r;return St(t,e,i,n),e.child}function zw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dh(t,e,n,r,i){var s=Dt(n)?xi:Et.current;return s=Os(e,s),Ss(e,i),n=Em(t,e,n,r,s,i),r=Tm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ae&&r&&um(e),e.flags|=1,St(t,e,n,i),e.child)}function Sv(t,e,n,r,i){if(Dt(n)){var s=!0;Qu(e)}else s=!1;if(Ss(e,i),e.stateNode===null)Su(t,e),mw(e,n,r),bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Dt(n)?xi:Et.current,u=Os(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&mv(e,o,r,u),vr=!1;var f=e.memoizedState;o.state=f,ec(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Nt.current||vr?(typeof c=="function"&&(Ph(e,n,c,r),l=e.memoizedState),(a=vr||pv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:an(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=Dt(n)?xi:Et.current,l=Os(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&mv(e,o,r,l),vr=!1,f=e.memoizedState,o.state=f,ec(e,r,o,i);var _=e.memoizedState;a!==d||f!==_||Nt.current||vr?(typeof p=="function"&&(Ph(e,n,p,r),_=e.memoizedState),(u=vr||pv(e,n,u,r,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Oh(t,e,n,r,s,i)}function Oh(t,e,n,r,i,s){zw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&uv(e,n,!1),Xn(t,e,s);r=e.stateNode,Nk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,a,s)):St(t,e,a,s),e.memoizedState=r.state,i&&uv(e,n,!0),e.child}function Bw(t){var e=t.stateNode;e.pendingContext?lv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lv(t,e.context,!1),ym(t,e.containerInfo)}function Av(t,e,n,r,i){return Ls(),dm(i),e.flags|=256,St(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hw(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Re,i&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=Lh,t):Am(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Dk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Mr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return s=t.child,t=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Am(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gl(t,e,n,r){return r!==null&&dm(r),Ms(e,t.child,null,n),t=Am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yf(Error(b(422))),Gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return Gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=yf(s,r,void 0),Gl(t,e,o,r)}if(a=(o&t.childLanes)!==0,bt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),hn(r,t,i,-1))}return bm(),r=yf(Error(b(421))),Gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Nr(i.nextSibling),$t=e,Ae=!0,cn=null,t!==null&&(Yt[Xt++]=$n,Yt[Xt++]=zn,Yt[Xt++]=Ci,$n=t.id,zn=t.overflow,Ci=e),e=Am(e,r.children),e.flags|=4096,e)}function kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rh(t.return,e,n)}function vf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ww(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(St(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,n,e);else if(t.tag===19)kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vf(e,!0,n,null,s);break;case"together":vf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Su(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ok(t,e,n){switch(e.tag){case 3:Bw(e),Ls();break;case 5:vw(e);break;case 1:Dt(e.type)&&Qu(e);break;case 4:ym(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Ju,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?Hw(t,e,n):(ye(Re,Re.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);ye(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ww(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,$w(t,e,n)}return Xn(t,e,n)}var qw,Vh,Kw,Gw;qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vh=function(){};Kw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pi(Pn.current);var s=null;switch(n){case"input":i=sh(t,i),r=sh(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=lh(t,i),r=lh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ku)}ch(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ao(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Dt(e.type)&&Gu(),ft(e),null;case 3:return r=e.stateNode,Vs(),Te(Nt),Te(Et),_m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(Wh(cn),cn=null))),Vh(t,e),ft(e),null;case 5:vm(e);var i=pi(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Kw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return ft(e),null}if(t=pi(Pn.current),ql(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Ly(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Vy(r,s),ve("invalid",r)}ch(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Vl(r),My(r,s,!0);break;case"textarea":Vl(r),Fy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ku)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[Ta]=r,qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=dh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)ve(Vo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Ly(t,r),i=sh(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Vy(t,r),i=lh(t,r),ve("invalid",t);break;default:i=r}ch(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?S1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&Qp(t,s,l,o))}switch(n){case"input":Vl(t),My(t,r,!1);break;case"textarea":Vl(t),Fy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Gw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=pi(Sa.current),pi(Pn.current),ql(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:Wl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return ft(e),null;case 13:if(Te(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Ft!==null&&e.mode&1&&!(e.flags&128))dw(),Ls(),e.flags|=98560,s=!1;else if(s=ql(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[In]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else cn!==null&&(Wh(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Qe===0&&(Qe=3):bm())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Vs(),Vh(t,e),t===null&&wa(e.stateNode.containerInfo),ft(e),null;case 10:return pm(e.type._context),ft(e),null;case 17:return Dt(e.type)&&Gu(),ft(e),null;case 19:if(Te(Re),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ao(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,Ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>js&&(e.flags|=128,r=!0,Ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return ft(e),null}else 2*je()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,r=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=Re.current,ye(Re,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Pm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Mk(t,e){switch(cm(e),e.tag){case 1:return Dt(e.type)&&Gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),Te(Nt),Te(Et),_m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vm(e),null;case 13:if(Te(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Re),null;case 4:return Vs(),null;case 10:return pm(e.type._context),null;case 22:case 23:return Pm(),null;case 24:return null;default:return null}}var Ql=!1,mt=!1,Vk=typeof WeakSet=="function"?WeakSet:Set,V=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Fh(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var xv=!1;function Fk(t,e){if(Eh=Hu,t=J1(),lm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Th={focusedElem:t,selectionRange:n},Hu=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,E=_.memoizedState,g=e.stateNode,h=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:an(e.type,w),E);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(m){Oe(e,e.return,m)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return _=xv,xv=!1,_}function Zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fh(e,n,s)}i=i.next}while(i!==r)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qw(t){var e=t.alternate;e!==null&&(t.alternate=null,Qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Ta],delete e[Ah],delete e[wk],delete e[Ek])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yw(t){return t.tag===5||t.tag===3||t.tag===4}function Cv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ku));else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}var it=null,ln=!1;function pr(t,e,n){for(n=n.child;n!==null;)Xw(t,e,n),n=n.sibling}function Xw(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:mt||fs(n,e);case 6:var r=it,i=ln;it=null,pr(t,e,n),it=r,ln=i,it!==null&&(ln?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(ln?(t=it,n=n.stateNode,t.nodeType===8?df(t.parentNode,n):t.nodeType===1&&df(t,n),ya(t)):df(it,n.stateNode));break;case 4:r=it,i=ln,it=n.stateNode.containerInfo,ln=!0,pr(t,e,n),it=r,ln=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fh(n,e,o),i=i.next}while(i!==r)}pr(t,e,n);break;case 1:if(!mt&&(fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,pr(t,e,n),mt=r):pr(t,e,n);break;default:pr(t,e,n)}}function Rv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vk),e.forEach(function(r){var i=Kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,ln=!1;break e;case 3:it=a.stateNode.containerInfo,ln=!0;break e;case 4:it=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(it===null)throw Error(b(160));Xw(s,o,i),it=null,ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jw(e,t),e=e.sibling}function Jw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),En(t),r&4){try{Zo(3,t,t.return),qc(3,t)}catch(w){Oe(t,t.return,w)}try{Zo(5,t,t.return)}catch(w){Oe(t,t.return,w)}}break;case 1:on(e,t),En(t),r&512&&n!==null&&fs(n,n.return);break;case 5:if(on(e,t),En(t),r&512&&n!==null&&fs(n,n.return),t.flags&32){var i=t.stateNode;try{ha(i,"")}catch(w){Oe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_1(i,s),dh(a,o);var u=dh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?S1(i,d):c==="dangerouslySetInnerHTML"?T1(i,d):c==="children"?ha(i,d):Qp(i,c,d,u)}switch(a){case"input":oh(i,s);break;case"textarea":w1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ws(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ws(i,!!s.multiple,s.defaultValue,!0):ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ta]=s}catch(w){Oe(t,t.return,w)}}break;case 6:if(on(e,t),En(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Oe(t,t.return,w)}}break;case 3:if(on(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(w){Oe(t,t.return,w)}break;case 4:on(e,t),En(t);break;case 13:on(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cm=je())),r&4&&Rv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(u=mt)||c,on(e,t),mt=u):on(e,t),En(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(d=V=c;V!==null;){switch(f=V,p=f.child,f.tag){case 0:case 11:case 14:case 15:Zo(4,f,f.return);break;case 1:fs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Oe(r,n,w)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){bv(d);continue}}p!==null?(p.return=f,V=p):bv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=I1("display",o))}catch(w){Oe(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Oe(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:on(e,t),En(t),r&4&&Rv(t);break;case 21:break;default:on(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yw(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var s=Cv(t);$h(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Cv(t);Uh(t,a,o);break;default:throw Error(b(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jk(t,e,n){V=t,Zw(t)}function Zw(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ql;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||mt;a=Ql;var u=mt;if(Ql=o,(mt=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?Nv(i):l!==null?(l.return=o,V=l):Nv(i);for(;s!==null;)V=s,Zw(s),s=s.sibling;V=i,Ql=a,mt=u}Pv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):Pv(t)}}function Pv(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ya(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}mt||e.flags&512&&jh(e)}catch(f){Oe(e,e.return,f)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function bv(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Nv(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{jh(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{jh(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var Uk=Math.ceil,ic=sr.ReactCurrentDispatcher,km=sr.ReactCurrentOwner,en=sr.ReactCurrentBatchConfig,le=0,tt=null,He=null,at=0,Vt=0,hs=Xr(0),Qe=0,Ca=null,Pi=0,Kc=0,xm=0,ea=null,Rt=null,Cm=0,js=1/0,jn=null,sc=!1,zh=null,Or=null,Yl=!1,Ar=null,oc=0,ta=0,Bh=null,Au=-1,ku=0;function kt(){return le&6?je():Au!==-1?Au:Au=je()}function Lr(t){return t.mode&1?le&2&&at!==0?at&-at:Ik.transition!==null?(ku===0&&(ku=M1()),ku):(t=de,t!==0||(t=window.event,t=t===void 0?16:B1(t.type)),t):1}function hn(t,e,n,r){if(50<ta)throw ta=0,Bh=null,Error(b(185));tl(t,n,r),(!(le&2)||t!==tt)&&(t===tt&&(!(le&2)&&(Kc|=n),Qe===4&&wr(t,at)),Ot(t,r),n===1&&le===0&&!(e.mode&1)&&(js=je()+500,Bc&&Jr()))}function Ot(t,e){var n=t.callbackNode;IA(t,e);var r=Bu(t,t===tt?at:0);if(r===0)n!==null&&$y(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$y(n),e===1)t.tag===0?Tk(Dv.bind(null,t)):lw(Dv.bind(null,t)),vk(function(){!(le&6)&&Jr()}),n=null;else{switch(V1(r)){case 1:n=em;break;case 4:n=O1;break;case 16:n=zu;break;case 536870912:n=L1;break;default:n=zu}n=aE(n,eE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function eE(t,e){if(Au=-1,ku=0,le&6)throw Error(b(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var r=Bu(t,t===tt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ac(t,r);else{e=r;var i=le;le|=2;var s=nE();(tt!==t||at!==e)&&(jn=null,js=je()+500,Ti(t,e));do try{Bk();break}catch(a){tE(t,a)}while(1);hm(),ic.current=s,le=i,He!==null?e=0:(tt=null,at=0,e=Qe)}if(e!==0){if(e===2&&(i=gh(t),i!==0&&(r=i,e=Hh(t,i))),e===1)throw n=Ca,Ti(t,0),wr(t,r),Ot(t,je()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!$k(i)&&(e=ac(t,r),e===2&&(s=gh(t),s!==0&&(r=s,e=Hh(t,s))),e===1))throw n=Ca,Ti(t,0),wr(t,r),Ot(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:ui(t,Rt,jn);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Cm+500-je(),10<e)){if(Bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sh(ui.bind(null,t,Rt,jn),e);break}ui(t,Rt,jn);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uk(r/1960))-r,10<r){t.timeoutHandle=Sh(ui.bind(null,t,Rt,jn),r);break}ui(t,Rt,jn);break;case 5:ui(t,Rt,jn);break;default:throw Error(b(329))}}}return Ot(t,je()),t.callbackNode===n?eE.bind(null,t):null}function Hh(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Ti(t,e).flags|=256),t=ac(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Wh(e)),t}function Wh(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function $k(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~xm,e&=~Kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function Dv(t){if(le&6)throw Error(b(327));As();var e=Bu(t,0);if(!(e&1))return Ot(t,je()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var r=gh(t);r!==0&&(e=r,n=Hh(t,r))}if(n===1)throw n=Ca,Ti(t,0),wr(t,e),Ot(t,je()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,Rt,jn),Ot(t,je()),null}function Rm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(js=je()+500,Bc&&Jr())}}function bi(t){Ar!==null&&Ar.tag===0&&!(le&6)&&As();var e=le;le|=1;var n=en.transition,r=de;try{if(en.transition=null,de=1,t)return t()}finally{de=r,en.transition=n,le=e,!(le&6)&&Jr()}}function Pm(){Vt=hs.current,Te(hs)}function Ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yk(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gu();break;case 3:Vs(),Te(Nt),Te(Et),_m();break;case 5:vm(r);break;case 4:Vs();break;case 13:Te(Re);break;case 19:Te(Re);break;case 10:pm(r.type._context);break;case 22:case 23:Pm()}n=n.return}if(tt=t,He=t=Mr(t.current,null),at=Vt=e,Qe=0,Ca=null,xm=Kc=Pi=0,Rt=ea=null,hi!==null){for(e=0;e<hi.length;e++)if(n=hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hi=null}return t}function tE(t,e){do{var n=He;try{if(hm(),Tu.current=rc,nc){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nc=!1}if(Ri=0,et=Ge=be=null,Jo=!1,Aa=0,km.current=null,n===null||n.return===null){Qe=1,Ca=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=at,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=wv(o);if(p!==null){p.flags&=-257,Ev(p,o,a,s,e),p.mode&1&&_v(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){_v(s,u,e),bm();break e}l=Error(b(426))}}else if(Ae&&a.mode&1){var E=wv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ev(E,o,a,s,e),dm(Fs(l,a));break e}}s=l=Fs(l,a),Qe!==4&&(Qe=2),ea===null?ea=[s]:ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Fw(s,l,e);fv(s,g);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Or===null||!Or.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=jw(s,a,e);fv(s,m);break e}}s=s.return}while(s!==null)}iE(n)}catch(I){e=I,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function nE(){var t=ic.current;return ic.current=rc,t===null?rc:t}function bm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(Pi&268435455)&&!(Kc&268435455)||wr(tt,at)}function ac(t,e){var n=le;le|=2;var r=nE();(tt!==t||at!==e)&&(jn=null,Ti(t,e));do try{zk();break}catch(i){tE(t,i)}while(1);if(hm(),le=n,ic.current=r,He!==null)throw Error(b(261));return tt=null,at=0,Qe}function zk(){for(;He!==null;)rE(He)}function Bk(){for(;He!==null&&!pA();)rE(He)}function rE(t){var e=oE(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?iE(t):He=e,km.current=null}function iE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mk(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,He=null;return}}else if(n=Lk(n,e,Vt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Qe===0&&(Qe=5)}function ui(t,e,n){var r=de,i=en.transition;try{en.transition=null,de=1,Hk(t,e,n,r)}finally{en.transition=i,de=r}return null}function Hk(t,e,n,r){do As();while(Ar!==null);if(le&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(SA(t,s),t===tt&&(He=tt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,aE(zu,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=de;de=1;var a=le;le|=4,km.current=null,Fk(t,n),Jw(n,t),ck(Th),Hu=!!Eh,Th=Eh=null,t.current=n,jk(n),mA(),le=a,de=o,en.transition=s}else t.current=n;if(Yl&&(Yl=!1,Ar=t,oc=i),s=t.pendingLanes,s===0&&(Or=null),vA(n.stateNode),Ot(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sc)throw sc=!1,t=zh,zh=null,t;return oc&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===Bh?ta++:(ta=0,Bh=t):ta=0,Jr(),null}function As(){if(Ar!==null){var t=V1(oc),e=en.transition,n=de;try{if(en.transition=null,de=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,oc=0,le&6)throw Error(b(331));var i=le;for(le|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:Zo(8,c,s)}var d=c.child;if(d!==null)d.return=c,V=d;else for(;V!==null;){c=V;var f=c.sibling,p=c.return;if(Qw(c),c===u){V=null;break}if(f!==null){f.return=p,V=f;break}V=p}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,V=g;break e}V=s.return}}var h=t.current;for(V=h;V!==null;){o=V;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,V=v;else e:for(o=h;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qc(9,a)}}catch(I){Oe(a,a.return,I)}if(a===o){V=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,V=m;break e}V=a.return}}if(le=i,Jr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Fc,t)}catch{}r=!0}return r}finally{de=n,en.transition=e}}return!1}function Ov(t,e,n){e=Fs(n,e),e=Fw(t,e,1),t=Dr(t,e,1),e=kt(),t!==null&&(tl(t,1,e),Ot(t,e))}function Oe(t,e,n){if(t.tag===3)Ov(t,t,n);else for(;e!==null;){if(e.tag===3){Ov(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=Fs(n,t),t=jw(e,t,1),e=Dr(e,t,1),t=kt(),e!==null&&(tl(e,1,t),Ot(e,t));break}}e=e.return}}function Wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(at&n)===n&&(Qe===4||Qe===3&&(at&130023424)===at&&500>je()-Cm?Ti(t,0):xm|=n),Ot(t,e)}function sE(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=kt();t=Yn(t,e),t!==null&&(tl(t,e,n),Ot(t,n))}function qk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sE(t,n)}function Kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),sE(t,n)}var oE;oE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,Ok(t,e,n);bt=!!(t.flags&131072)}else bt=!1,Ae&&e.flags&1048576&&uw(e,Xu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Su(t,e),t=e.pendingProps;var i=Os(e,Et.current);Ss(e,n),i=Em(null,e,r,t,i,n);var s=Tm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,Qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gm(e),i.updater=Hc,e.stateNode=i,i._reactInternals=e,bh(e,r,t,n),e=Oh(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&um(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Su(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qk(r),t=an(r,t),i){case 0:e=Dh(null,e,r,t,n);break e;case 1:e=Sv(null,e,r,t,n);break e;case 11:e=Tv(null,e,r,t,n);break e;case 14:e=Iv(null,e,r,an(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Dh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Sv(t,e,r,i,n);case 3:e:{if(Bw(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hw(t,e),ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fs(Error(b(423)),e),e=Av(t,e,r,n,i);break e}else if(r!==i){i=Fs(Error(b(424)),e),e=Av(t,e,r,n,i);break e}else for(Ft=Nr(e.stateNode.containerInfo.firstChild),$t=e,Ae=!0,cn=null,n=yw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===i){e=Xn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return vw(e),t===null&&Ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ih(r,i)?o=null:s!==null&&Ih(r,s)&&(e.flags|=32),zw(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return Hw(t,e,n);case 4:return ym(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Tv(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Ju,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=tn(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),Iv(t,e,r,i,n);case 15:return Uw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Su(t,e),e.tag=1,Dt(r)?(t=!0,Qu(e)):t=!1,Ss(e,n),mw(e,r,i),bh(e,r,i,n),Oh(null,e,r,!0,t,n);case 19:return Ww(t,e,n);case 22:return $w(t,e,n)}throw Error(b(156,e.tag))};function aE(t,e){return D1(t,e)}function Gk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new Gk(t,e,n,r)}function Nm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return Nm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xp)return 11;if(t===Jp)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Ii(n.children,i,s,e);case Yp:o=8,i|=8;break;case th:return t=Zt(12,n,e,i|2),t.elementType=th,t.lanes=s,t;case nh:return t=Zt(13,n,e,i),t.elementType=nh,t.lanes=s,t;case rh:return t=Zt(19,n,e,i),t.elementType=rh,t.lanes=s,t;case g1:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p1:o=10;break e;case m1:o=9;break e;case Xp:o=11;break e;case Jp:o=14;break e;case yr:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=g1,t.lanes=n,t.stateNode={isHidden:!1},t}function _f(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function wf(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zd(0),this.expirationTimes=Zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dm(t,e,n,r,i,s,o,a,l){return t=new Yk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gm(s),t}function Xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lE(t){if(!t)return Br;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Dt(n))return aw(t,n,e)}return e}function uE(t,e,n,r,i,s,o,a,l){return t=Dm(n,r,!0,t,i,s,o,a,l),t.context=lE(null),n=t.current,r=kt(),i=Lr(n),s=qn(r,i),s.callback=e??null,Dr(n,s,i),t.current.lanes=i,tl(t,i,r),Ot(t,r),t}function Qc(t,e,n,r){var i=e.current,s=kt(),o=Lr(i);return n=lE(n),e.context===null?e.context=n:e.pendingContext=n,e=qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dr(i,e,o),t!==null&&(hn(t,i,o,s),Eu(t,i,o)),o}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Om(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function Jk(){return null}var cE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lm(t){this._internalRoot=t}Yc.prototype.render=Lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Qc(t,e,null,null)};Yc.prototype.unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){Qc(null,t,null,null)}),e[Qn]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=U1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&z1(t)}};function Mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mv(){}function Zk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=lc(o);s.call(u)}}var o=uE(e,r,t,0,null,!1,!1,"",Mv);return t._reactRootContainer=o,t[Qn]=o.current,wa(t.nodeType===8?t.parentNode:t),bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lc(l);a.call(u)}}var l=Dm(t,0,!1,null,null,!1,!1,"",Mv);return t._reactRootContainer=l,t[Qn]=l.current,wa(t.nodeType===8?t.parentNode:t),bi(function(){Qc(e,l,n,r)}),l}function Jc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=lc(o);a.call(l)}}Qc(e,o,t,i)}else o=Zk(n,e,t,i,r);return lc(o)}F1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(tm(e,n|1),Ot(e,je()),!(le&6)&&(js=je()+500,Jr()))}break;case 13:bi(function(){var r=Yn(t,1);if(r!==null){var i=kt();hn(r,t,1,i)}}),Om(t,1)}};nm=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=kt();hn(e,t,134217728,n)}Om(t,134217728)}};j1=function(t){if(t.tag===13){var e=Lr(t),n=Yn(t,e);if(n!==null){var r=kt();hn(n,t,e,r)}Om(t,e)}};U1=function(){return de};$1=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};hh=function(t,e,n){switch(e){case"input":if(oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zc(r);if(!i)throw Error(b(90));v1(r),oh(r,i)}}}break;case"textarea":w1(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};x1=Rm;C1=bi;var ex={usingClientEntryPoint:!1,Events:[rl,as,zc,A1,k1,Rm]},ko={findFiberByHostInstance:fi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tx={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b1(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Fc=Xl.inject(tx),Rn=Xl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mm(e))throw Error(b(200));return Xk(t,e,null,n)};Ht.createRoot=function(t,e){if(!Mm(t))throw Error(b(299));var n=!1,r="",i=cE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dm(t,1,!1,null,null,n,!1,r,i),t[Qn]=e.current,wa(t.nodeType===8?t.parentNode:t),new Lm(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=b1(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return bi(t)};Ht.hydrate=function(t,e,n){if(!Xc(e))throw Error(b(200));return Jc(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Mm(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=cE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uE(e,null,t,1,n??null,i,!1,s,o),t[Qn]=e.current,wa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yc(e)};Ht.render=function(t,e,n){if(!Xc(e))throw Error(b(200));return Jc(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Xc(t))throw Error(b(40));return t._reactRootContainer?(bi(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Rm;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xc(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Jc(t,e,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function dE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dE)}catch(t){console.error(t)}}dE(),u1.exports=Ht;var nx=u1.exports,Vv=nx;Zf.createRoot=Vv.createRoot,Zf.hydrateRoot=Vv.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ce(){return Ce=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ce.apply(this,arguments)}var ze;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ze||(ze={}));const Fv="popstate";function rx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ra("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ni(i)}return sx(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Us(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ix(){return Math.random().toString(36).substr(2,8)}function jv(t,e){return{usr:t.state,key:t.key,idx:e}}function Ra(t,e,n,r){return n===void 0&&(n=null),Ce({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?or(e):e,{state:n,key:e&&e.key||r||ix()})}function Ni(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function or(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ze.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ce({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ze.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:g})}function f(E,g){a=ze.Push;let h=Ra(w.location,E,g);n&&n(h,E),u=c()+1;let v=jv(h,u),m=w.createHref(h);try{o.pushState(v,"",m)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(m)}s&&l&&l({action:a,location:w.location,delta:1})}function p(E,g){a=ze.Replace;let h=Ra(w.location,E,g);n&&n(h,E),u=c();let v=jv(h,u),m=w.createHref(h);o.replaceState(v,"",m),s&&l&&l({action:a,location:w.location,delta:0})}function _(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:Ni(E);return ne(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fv,d),l=E,()=>{i.removeEventListener(Fv,d),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let g=_(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(E){return o.go(E)}};return w}var Fe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fe||(Fe={}));const ox=new Set(["lazy","caseSensitive","path","id","index","children"]);function ax(t){return t.index===!0}function qh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ne(i.index!==!0||!i.children,"Cannot specify children on an index route"),ne(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),ax(i)){let l=Ce({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ce({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=qh(i.children,e,o,r)),l}})}function ps(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?or(e):e,i=ro(r.pathname||"/",n);if(i==null)return null;let s=fE(t);ux(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=vx(s[a],Ex(i));return o}function lx(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function fE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:gx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of hE(s.path))i(s,o,l)}),e}function hE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=hE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ux(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cx=/^:\w+$/,dx=3,fx=2,hx=1,px=10,mx=-2,Uv=t=>t==="*";function gx(t,e){let n=t.split("/"),r=n.length;return n.some(Uv)&&(r+=mx),e&&(r+=fx),n.filter(i=>!Uv(i)).reduce((i,s)=>i+(cx.test(s)?dx:s===""?hx:px),r)}function yx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=_x({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:Ax(Kn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function _x(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Tx(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Us(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ex(t){try{return decodeURI(t)}catch(e){return Us(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tx(t,e){try{return decodeURIComponent(t)}catch(n){return Us(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ro(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ix(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?or(t):t;return{pathname:n?n.startsWith("/")?n:Sx(n,e):e,search:kx(r),hash:xx(i)}}function Sx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ef(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=or(t):(i=Ce({},t),ne(!i.pathname||!i.pathname.includes("?"),Ef("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Ef("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Ef("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=Ix(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),Ax=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Fm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mE=["post","put","patch","delete"],Cx=new Set(mE),Rx=["get",...mE],Px=new Set(Rx),bx=new Set([301,302,303,307,308]),Nx=new Set([307,308]),Tf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Dx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},gE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ox=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function Lx(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ne(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=S=>({hasErrorBoundary:T(S)})}else i=Ox;let s={},o=qh(t.routes,i,void 0,s),a,l=t.basename||"/",u=Ce({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,p=null,_=null,w=t.hydrationData!=null,E=ps(o,t.history.location,l),g=null;if(E==null){let T=Qt(404,{pathname:t.history.location.pathname}),{matches:S,route:R}=Gv(o);E=S,g={[R.id]:T}}let h=!E.some(T=>T.route.lazy)&&(!E.some(T=>T.route.loader)||t.hydrationData!=null),v,m={historyAction:t.history.action,location:t.history.location,matches:E,initialized:h,navigation:Tf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},I=ze.Pop,x=!1,C,D=!1,W=!1,z=[],Je=[],me=new Map,vn=0,cr=-1,dr=new Map,Mt=new Set,_n=new Map,O=new Map,q=new Map,Z=!1;function ke(){return c=t.history.listen(T=>{let{action:S,location:R,delta:M}=T;if(Z){Z=!1;return}Us(q.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=Ay({currentLocation:m.location,nextLocation:R,historyAction:S});if(X&&M!=null){Z=!0,t.history.go(M*-1),Dl(X,{state:"blocked",location:R,proceed(){Dl(X,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),t.history.go(M)},reset(){let Q=new Map(m.blockers);Q.set(X,xo),ge({blockers:Q})}});return}return si(S,R)}),m.initialized||si(ze.Pop,m.location),v}function Ue(){c&&c(),d.clear(),C&&C.abort(),m.fetchers.forEach((T,S)=>$d(S)),m.blockers.forEach((T,S)=>Sy(S))}function Gi(T){return d.add(T),()=>d.delete(T)}function ge(T){m=Ce({},m,T),d.forEach(S=>S(m))}function Mn(T,S){var R,M;let X=m.actionData!=null&&m.navigation.formMethod!=null&&un(m.navigation.formMethod)&&m.navigation.state==="loading"&&((R=T.state)==null?void 0:R._isRedirect)!==!0,Q;S.actionData?Object.keys(S.actionData).length>0?Q=S.actionData:Q=null:X?Q=m.actionData:Q=null;let ee=S.loaderData?Kv(m.loaderData,S.loaderData,S.matches||[],S.errors):m.loaderData,K=m.blockers;K.size>0&&(K=new Map(K),K.forEach((xe,ct)=>K.set(ct,xo)));let B=x===!0||m.navigation.formMethod!=null&&un(m.navigation.formMethod)&&((M=T.state)==null?void 0:M._isRedirect)!==!0;a&&(o=a,a=void 0),D||I===ze.Pop||(I===ze.Push?t.history.push(T,T.state):I===ze.Replace&&t.history.replace(T,T.state)),ge(Ce({},S,{actionData:Q,loaderData:ee,historyAction:I,location:T,initialized:!0,navigation:Tf,revalidation:"idle",restoreScrollPosition:xy(T,S.matches||m.matches),preventScrollReset:B,blockers:K})),I=ze.Pop,x=!1,D=!1,W=!1,z=[],Je=[]}async function wn(T,S){if(typeof T=="number"){t.history.go(T);return}let R=Kh(m.location,m.matches,l,u.v7_prependBasename,T,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:M,submission:X,error:Q}=$v(u.v7_normalizeFormMethod,!1,R,S),ee=m.location,K=Ra(m.location,M,S&&S.state);K=Ce({},K,t.history.encodeLocation(K));let B=S&&S.replace!=null?S.replace:void 0,xe=ze.Push;B===!0?xe=ze.Replace:B===!1||X!=null&&un(X.formMethod)&&X.formAction===m.location.pathname+m.location.search&&(xe=ze.Replace);let ct=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,ue=Ay({currentLocation:ee,nextLocation:K,historyAction:xe});if(ue){Dl(ue,{state:"blocked",location:K,proceed(){Dl(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),wn(T,S)},reset(){let pe=new Map(m.blockers);pe.set(ue,xo),ge({blockers:pe})}});return}return await si(xe,K,{submission:X,pendingError:Q,preventScrollReset:ct,replace:S&&S.replace})}function Qi(){if(Ud(),ge({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){si(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}si(I||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function si(T,S,R){C&&C.abort(),C=null,I=T,D=(R&&R.startUninterruptedRevalidation)===!0,xS(m.location,m.matches),x=(R&&R.preventScrollReset)===!0;let M=a||o,X=R&&R.overrideNavigation,Q=ps(M,S,l);if(!Q){let pe=Qt(404,{pathname:S.pathname}),{matches:Ve,route:oi}=Gv(M);zd(),Mn(S,{matches:Ve,loaderData:{},errors:{[oi.id]:pe}});return}if(m.initialized&&!W&&Ux(m.location,S)&&!(R&&R.submission&&un(R.submission.formMethod))){Mn(S,{matches:Q});return}C=new AbortController;let ee=Ro(t.history,S,C.signal,R&&R.submission),K,B;if(R&&R.pendingError)B={[ms(Q).route.id]:R.pendingError};else if(R&&R.submission&&un(R.submission.formMethod)){let pe=await wS(ee,S,R.submission,Q,{replace:R.replace});if(pe.shortCircuited)return;K=pe.pendingActionData,B=pe.pendingActionError,X=If(S,R.submission),ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:xe,loaderData:ct,errors:ue}=await ES(ee,S,Q,X,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,K,B);xe||(C=null,Mn(S,Ce({matches:Q},K?{actionData:K}:{},{loaderData:ct,errors:ue})))}async function wS(T,S,R,M,X){X===void 0&&(X={}),Ud();let Q=Hx(S,R);ge({navigation:Q});let ee,K=Qh(M,S);if(!K.route.action&&!K.route.lazy)ee={type:Fe.error,error:Qt(405,{method:T.method,pathname:S.pathname,routeId:K.route.id})};else if(ee=await Co("action",T,K,M,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(ks(ee)){let B;return X&&X.replace!=null?B=X.replace:B=ee.location===m.location.pathname+m.location.search,await go(m,ee,{submission:R,replace:B}),{shortCircuited:!0}}if(na(ee)){let B=ms(M,K.route.id);return(X&&X.replace)!==!0&&(I=ze.Push),{pendingActionData:{},pendingActionError:{[B.route.id]:ee.error}}}if(mi(ee))throw Qt(400,{type:"defer-action"});return{pendingActionData:{[K.route.id]:ee.data}}}async function ES(T,S,R,M,X,Q,ee,K,B){let xe=M||If(S,X),ct=X||Q||Xv(xe),ue=a||o,[pe,Ve]=zv(t.history,m,R,ct,S,W,z,Je,_n,Mt,ue,l,K,B);if(zd(he=>!(R&&R.some(sn=>sn.route.id===he))||pe&&pe.some(sn=>sn.route.id===he)),cr=++vn,pe.length===0&&Ve.length===0){let he=Ty();return Mn(S,Ce({matches:R,loaderData:{},errors:B||null},K?{actionData:K}:{},he?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!D){Ve.forEach(sn=>{let hr=m.fetchers.get(sn.key),Kd=Po(void 0,hr?hr.data:void 0);m.fetchers.set(sn.key,Kd)});let he=K||m.actionData;ge(Ce({navigation:xe},he?Object.keys(he).length===0?{actionData:null}:{actionData:he}:{},Ve.length>0?{fetchers:new Map(m.fetchers)}:{}))}Ve.forEach(he=>{me.has(he.key)&&fr(he.key),he.controller&&me.set(he.key,he.controller)});let oi=()=>Ve.forEach(he=>fr(he.key));C&&C.signal.addEventListener("abort",oi);let{results:ai,loaderResults:yo,fetcherResults:Bd}=await wy(m.matches,R,pe,Ve,T);if(T.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",oi),Ve.forEach(he=>me.delete(he.key));let Vn=Qv(ai);if(Vn){if(Vn.idx>=pe.length){let he=Ve[Vn.idx-pe.length].key;Mt.add(he)}return await go(m,Vn.result,{replace:ee}),{shortCircuited:!0}}let{loaderData:Fn,errors:Ol}=qv(m,R,pe,yo,B,Ve,Bd,O);O.forEach((he,sn)=>{he.subscribe(hr=>{(hr||he.done)&&O.delete(sn)})});let Hd=Ty(),Wd=Iy(cr),qd=Hd||Wd||Ve.length>0;return Ce({loaderData:Fn,errors:Ol},qd?{fetchers:new Map(m.fetchers)}:{})}function _y(T){return m.fetchers.get(T)||Dx}function TS(T,S,R,M){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");me.has(T)&&fr(T);let X=a||o,Q=Kh(m.location,m.matches,l,u.v7_prependBasename,R,S,M==null?void 0:M.relative),ee=ps(X,Q,l);if(!ee){Nl(T,S,Qt(404,{pathname:Q}));return}let{path:K,submission:B,error:xe}=$v(u.v7_normalizeFormMethod,!0,Q,M);if(xe){Nl(T,S,xe);return}let ct=Qh(ee,K);if(x=(M&&M.preventScrollReset)===!0,B&&un(B.formMethod)){IS(T,S,K,ct,ee,B);return}_n.set(T,{routeId:S,path:K}),SS(T,S,K,ct,ee,B)}async function IS(T,S,R,M,X,Q){if(Ud(),_n.delete(T),!M.route.action&&!M.route.lazy){let Ke=Qt(405,{method:Q.formMethod,pathname:R,routeId:S});Nl(T,S,Ke);return}let ee=m.fetchers.get(T),K=Wx(Q,ee);m.fetchers.set(T,K),ge({fetchers:new Map(m.fetchers)});let B=new AbortController,xe=Ro(t.history,R,B.signal,Q);me.set(T,B);let ct=vn,ue=await Co("action",xe,M,X,s,i,l);if(xe.signal.aborted){me.get(T)===B&&me.delete(T);return}if(ks(ue))if(me.delete(T),cr>ct){let Ke=Ji(void 0);m.fetchers.set(T,Ke),ge({fetchers:new Map(m.fetchers)});return}else{Mt.add(T);let Ke=Po(Q);return m.fetchers.set(T,Ke),ge({fetchers:new Map(m.fetchers)}),go(m,ue,{fetcherSubmission:Q})}if(na(ue)){Nl(T,S,ue.error);return}if(mi(ue))throw Qt(400,{type:"defer-action"});let pe=m.navigation.location||m.location,Ve=Ro(t.history,pe,B.signal),oi=a||o,ai=m.navigation.state!=="idle"?ps(oi,m.navigation.location,l):m.matches;ne(ai,"Didn't find any matches after fetcher action");let yo=++vn;dr.set(T,yo);let Bd=Po(Q,ue.data);m.fetchers.set(T,Bd);let[Vn,Fn]=zv(t.history,m,ai,Q,pe,W,z,Je,_n,Mt,oi,l,{[M.route.id]:ue.data},void 0);Fn.filter(Ke=>Ke.key!==T).forEach(Ke=>{let vo=Ke.key,Cy=m.fetchers.get(vo),RS=Po(void 0,Cy?Cy.data:void 0);m.fetchers.set(vo,RS),me.has(vo)&&fr(vo),Ke.controller&&me.set(vo,Ke.controller)}),ge({fetchers:new Map(m.fetchers)});let Ol=()=>Fn.forEach(Ke=>fr(Ke.key));B.signal.addEventListener("abort",Ol);let{results:Hd,loaderResults:Wd,fetcherResults:qd}=await wy(m.matches,ai,Vn,Fn,Ve);if(B.signal.aborted)return;B.signal.removeEventListener("abort",Ol),dr.delete(T),me.delete(T),Fn.forEach(Ke=>me.delete(Ke.key));let he=Qv(Hd);if(he){if(he.idx>=Vn.length){let Ke=Fn[he.idx-Vn.length].key;Mt.add(Ke)}return go(m,he.result)}let{loaderData:sn,errors:hr}=qv(m,m.matches,Vn,Wd,void 0,Fn,qd,O);if(m.fetchers.has(T)){let Ke=Ji(ue.data);m.fetchers.set(T,Ke)}let Kd=Iy(yo);m.navigation.state==="loading"&&yo>cr?(ne(I,"Expected pending action"),C&&C.abort(),Mn(m.navigation.location,{matches:ai,loaderData:sn,errors:hr,fetchers:new Map(m.fetchers)})):(ge(Ce({errors:hr,loaderData:Kv(m.loaderData,sn,ai,hr)},Kd||Fn.length>0?{fetchers:new Map(m.fetchers)}:{})),W=!1)}async function SS(T,S,R,M,X,Q){let ee=m.fetchers.get(T),K=Po(Q,ee?ee.data:void 0);m.fetchers.set(T,K),ge({fetchers:new Map(m.fetchers)});let B=new AbortController,xe=Ro(t.history,R,B.signal);me.set(T,B);let ct=vn,ue=await Co("loader",xe,M,X,s,i,l);if(mi(ue)&&(ue=await _E(ue,xe.signal,!0)||ue),me.get(T)===B&&me.delete(T),xe.signal.aborted)return;if(ks(ue))if(cr>ct){let Ve=Ji(void 0);m.fetchers.set(T,Ve),ge({fetchers:new Map(m.fetchers)});return}else{Mt.add(T),await go(m,ue);return}if(na(ue)){let Ve=ms(m.matches,S);m.fetchers.delete(T),ge({fetchers:new Map(m.fetchers),errors:{[Ve.route.id]:ue.error}});return}ne(!mi(ue),"Unhandled fetcher deferred data");let pe=Ji(ue.data);m.fetchers.set(T,pe),ge({fetchers:new Map(m.fetchers)})}async function go(T,S,R){let{submission:M,fetcherSubmission:X,replace:Q}=R===void 0?{}:R;S.revalidate&&(W=!0);let ee=Ra(T.location,S.location,{_isRedirect:!0});if(ne(ee,"Expected a location on the redirect navigation"),n){let pe=!1;if(S.reloadDocument)pe=!0;else if(gE.test(S.location)){const Ve=t.history.createURL(S.location);pe=Ve.origin!==e.location.origin||ro(Ve.pathname,l)==null}if(pe){Q?e.location.replace(S.location):e.location.assign(S.location);return}}C=null;let K=Q===!0?ze.Replace:ze.Push,{formMethod:B,formAction:xe,formEncType:ct}=T.navigation;!M&&!X&&B&&xe&&ct&&(M=Xv(T.navigation));let ue=M||X;if(Nx.has(S.status)&&ue&&un(ue.formMethod))await si(K,ee,{submission:Ce({},ue,{formAction:S.location}),preventScrollReset:x});else{let pe=If(ee,M);await si(K,ee,{overrideNavigation:pe,fetcherSubmission:X,preventScrollReset:x})}}async function wy(T,S,R,M,X){let Q=await Promise.all([...R.map(B=>Co("loader",X,B,S,s,i,l)),...M.map(B=>B.matches&&B.match&&B.controller?Co("loader",Ro(t.history,B.path,B.controller.signal),B.match,B.matches,s,i,l):{type:Fe.error,error:Qt(404,{pathname:B.path})})]),ee=Q.slice(0,R.length),K=Q.slice(R.length);return await Promise.all([Yv(T,R,ee,ee.map(()=>X.signal),!1,m.loaderData),Yv(T,M.map(B=>B.match),K,M.map(B=>B.controller?B.controller.signal:null),!0)]),{results:Q,loaderResults:ee,fetcherResults:K}}function Ud(){W=!0,z.push(...zd()),_n.forEach((T,S)=>{me.has(S)&&(Je.push(S),fr(S))})}function Nl(T,S,R){let M=ms(m.matches,S);$d(T),ge({errors:{[M.route.id]:R},fetchers:new Map(m.fetchers)})}function $d(T){let S=m.fetchers.get(T);me.has(T)&&!(S&&S.state==="loading"&&dr.has(T))&&fr(T),_n.delete(T),dr.delete(T),Mt.delete(T),m.fetchers.delete(T)}function fr(T){let S=me.get(T);ne(S,"Expected fetch controller: "+T),S.abort(),me.delete(T)}function Ey(T){for(let S of T){let R=_y(S),M=Ji(R.data);m.fetchers.set(S,M)}}function Ty(){let T=[],S=!1;for(let R of Mt){let M=m.fetchers.get(R);ne(M,"Expected fetcher: "+R),M.state==="loading"&&(Mt.delete(R),T.push(R),S=!0)}return Ey(T),S}function Iy(T){let S=[];for(let[R,M]of dr)if(M<T){let X=m.fetchers.get(R);ne(X,"Expected fetcher: "+R),X.state==="loading"&&(fr(R),dr.delete(R),S.push(R))}return Ey(S),S.length>0}function AS(T,S){let R=m.blockers.get(T)||xo;return q.get(T)!==S&&q.set(T,S),R}function Sy(T){m.blockers.delete(T),q.delete(T)}function Dl(T,S){let R=m.blockers.get(T)||xo;ne(R.state==="unblocked"&&S.state==="blocked"||R.state==="blocked"&&S.state==="blocked"||R.state==="blocked"&&S.state==="proceeding"||R.state==="blocked"&&S.state==="unblocked"||R.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+S.state);let M=new Map(m.blockers);M.set(T,S),ge({blockers:M})}function Ay(T){let{currentLocation:S,nextLocation:R,historyAction:M}=T;if(q.size===0)return;q.size>1&&Us(!1,"A router only supports one blocker at a time");let X=Array.from(q.entries()),[Q,ee]=X[X.length-1],K=m.blockers.get(Q);if(!(K&&K.state==="proceeding")&&ee({currentLocation:S,nextLocation:R,historyAction:M}))return Q}function zd(T){let S=[];return O.forEach((R,M)=>{(!T||T(M))&&(R.cancel(),S.push(M),O.delete(M))}),S}function kS(T,S,R){if(f=T,_=S,p=R||null,!w&&m.navigation===Tf){w=!0;let M=xy(m.location,m.matches);M!=null&&ge({restoreScrollPosition:M})}return()=>{f=null,_=null,p=null}}function ky(T,S){return p&&p(T,S.map(M=>lx(M,m.loaderData)))||T.key}function xS(T,S){if(f&&_){let R=ky(T,S);f[R]=_()}}function xy(T,S){if(f){let R=ky(T,S),M=f[R];if(typeof M=="number")return M}return null}function CS(T){s={},a=qh(T,i,void 0,s)}return v={get basename(){return l},get state(){return m},get routes(){return o},initialize:ke,subscribe:Gi,enableScrollRestoration:kS,navigate:wn,fetch:TS,revalidate:Qi,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:_y,deleteFetcher:$d,dispose:Ue,getBlocker:AS,deleteBlocker:Sy,_internalFetchControllers:me,_internalActiveDeferreds:O,_internalSetRoutes:CS},v}function Mx(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Kh(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Vm(i||".",Zc(a).map(c=>c.pathnameBase),ro(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!jm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Kn([n,u.pathname])),Ni(u)}function $v(t,e,n,r){if(!r||!Mx(r))return{path:n};if(r.formMethod&&!Bx(r.formMethod))return{path:n,error:Qt(405,{method:r.formMethod})};let i=()=>({path:n,error:Qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=vE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!un(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,_)=>{let[w,E]=_;return""+p+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!un(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Gh(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Gh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Wv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Wv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(un(c.formMethod))return{path:n,submission:c};let d=or(n);return e&&d.search&&jm(d.search)&&l.append("index",""),d.search="?"+l,{path:Ni(d),submission:c}}function Vx(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function zv(t,e,n,r,i,s,o,a,l,u,c,d,f,p){let _=p?Object.values(p)[0]:f?Object.values(f)[0]:void 0,w=t.createURL(e.location),E=t.createURL(i),g=p?Object.keys(p)[0]:void 0,v=Vx(n,g).filter((I,x)=>{if(I.route.lazy)return!0;if(I.route.loader==null)return!1;if(Fx(e.loaderData,e.matches[x],I)||o.some(W=>W===I.route.id))return!0;let C=e.matches[x],D=I;return Bv(I,Ce({currentUrl:w,currentParams:C.params,nextUrl:E,nextParams:D.params},r,{actionResult:_,defaultShouldRevalidate:s||w.pathname+w.search===E.pathname+E.search||w.search!==E.search||yE(C,D)}))}),m=[];return l.forEach((I,x)=>{if(!n.some(Je=>Je.route.id===I.routeId))return;let C=ps(c,I.path,d);if(!C){m.push({key:x,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let D=e.fetchers.get(x),W=Qh(C,I.path),z=!1;u.has(x)?z=!1:a.includes(x)?z=!0:D&&D.state!=="idle"&&D.data===void 0?z=s:z=Bv(W,Ce({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:s})),z&&m.push({key:x,routeId:I.routeId,path:I.path,matches:C,match:W,controller:new AbortController})}),[v,m]}function Fx(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function yE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Bv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Hv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ne(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Us(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!ox.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ce({},e(i),{lazy:void 0}))}async function Co(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=_=>{let w,E=new Promise((g,h)=>w=h);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([_({request:e,params:n.params,context:a.requestContext}),E])};try{let _=n.route[t];if(n.route.lazy)if(_){let w,E=await Promise.all([d(_).catch(g=>{w=g}),Hv(n.route,s,i)]);if(w)throw w;u=E[0]}else if(await Hv(n.route,s,i),_=n.route[t],_)u=await d(_);else if(t==="action"){let w=new URL(e.url),E=w.pathname+w.search;throw Qt(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:Fe.data,data:void 0};else if(_)u=await d(_);else{let w=new URL(e.url),E=w.pathname+w.search;throw Qt(404,{pathname:E})}ne(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(_){l=Fe.error,u=_}finally{c&&e.signal.removeEventListener("abort",c)}if(zx(u)){let _=u.status;if(bx.has(_)){let g=u.headers.get("Location");if(ne(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!gE.test(g))g=Kh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let h=new URL(e.url),v=g.startsWith("//")?new URL(h.protocol+g):new URL(g),m=ro(v.pathname,o)!=null;v.origin===h.origin&&m&&(g=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Fe.redirect,status:_,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Fe.error?Fe.error:Fe.data,response:u};let w,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?w=await u.json():w=await u.text(),l===Fe.error?{type:l,error:new Fm(_,u.statusText,w),headers:u.headers}:{type:Fe.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Fe.error)return{type:l,error:u};if($x(u)){var f,p;return{type:Fe.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((p=u.init)==null?void 0:p.headers)&&new Headers(u.init.headers)}}return{type:Fe.data,data:u}}function Ro(t,e,n,r){let i=t.createURL(vE(e)).toString(),s={signal:n};if(r&&un(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Gh(r.formData):s.body=r.formData}return new Request(i,s)}function Gh(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Wv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function jx(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(ne(!ks(c),"Cannot handle redirect results in processLoaderData"),na(c)){let p=ms(t,f),_=c.error;r&&(_=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=_),s[f]=void 0,l||(l=!0,a=pE(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else mi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function qv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=jx(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:p}=s[c];ne(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let _=o[c];if(!(p&&p.signal.aborted))if(na(_)){let w=ms(t.matches,f==null?void 0:f.route.id);u&&u[w.route.id]||(u=Ce({},u,{[w.route.id]:_.error})),t.fetchers.delete(d)}else if(ks(_))ne(!1,"Unhandled fetcher revalidation redirect");else if(mi(_))ne(!1,"Unhandled fetcher deferred data");else{let w=Ji(_.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function Kv(t,e,n,r){let i=Ce({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ms(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Gv(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Qt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Fm(t||500,o,new Error(a),!0)}function Qv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ks(n))return{result:n,idx:e}}}function vE(t){let e=typeof t=="string"?or(t):t;return Ni(Ce({},e,{hash:""}))}function Ux(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function mi(t){return t.type===Fe.deferred}function na(t){return t.type===Fe.error}function ks(t){return(t&&t.type)===Fe.redirect}function $x(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function zx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Bx(t){return Px.has(t.toLowerCase())}function un(t){return Cx.has(t.toLowerCase())}async function Yv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!yE(u,l)&&(s&&s[l.route.id])!==void 0;if(mi(a)&&(i||c)){let d=r[o];ne(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await _E(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function _E(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Fe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Fe.error,error:i}}return{type:Fe.data,data:t.deferredData.data}}}function jm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Qh(t,e){let n=typeof e=="string"?or(e).search:e.search;if(t[t.length-1].route.index&&jm(n||""))return t[t.length-1];let r=Zc(t);return r[r.length-1]}function Xv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function If(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Hx(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Po(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Wx(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Ji(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uc(){return uc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uc.apply(this,arguments)}const ed=A.createContext(null),Um=A.createContext(null),Hi=A.createContext(null),td=A.createContext(null),Zr=A.createContext({outlet:null,matches:[],isDataRoute:!1}),wE=A.createContext(null);function qx(t,e){let{relative:n}=e===void 0?{}:e;sl()||ne(!1);let{basename:r,navigator:i}=A.useContext(Hi),{hash:s,pathname:o,search:a}=$m(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function sl(){return A.useContext(td)!=null}function ol(){return sl()||ne(!1),A.useContext(td).location}function EE(t){A.useContext(Hi).static||A.useLayoutEffect(t)}function io(){let{isDataRoute:t}=A.useContext(Zr);return t?oC():Kx()}function Kx(){sl()||ne(!1);let t=A.useContext(ed),{basename:e,navigator:n}=A.useContext(Hi),{matches:r}=A.useContext(Zr),{pathname:i}=ol(),s=JSON.stringify(Zc(r).map(l=>l.pathnameBase)),o=A.useRef(!1);return EE(()=>{o.current=!0}),A.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Vm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Kn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Gx=A.createContext(null);function Qx(t){let e=A.useContext(Zr).outlet;return e&&A.createElement(Gx.Provider,{value:t},e)}function $m(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=A.useContext(Zr),{pathname:i}=ol(),s=JSON.stringify(Zc(r).map(o=>o.pathnameBase));return A.useMemo(()=>Vm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Yx(t,e,n){sl()||ne(!1);let{navigator:r}=A.useContext(Hi),{matches:i}=A.useContext(Zr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ol(),u;if(e){var c;let w=typeof e=="string"?or(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ne(!1),u=w}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",p=ps(t,{pathname:f}),_=tC(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Kn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Kn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&_?A.createElement(td.Provider,{value:{location:uc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ze.Pop}},_):_}function Xx(){let t=sC(),e=pE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,s)}const Jx=A.createElement(Xx,null);class Zx extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?A.createElement(Zr.Provider,{value:this.props.routeContext},A.createElement(wE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eC(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(ed);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(Zr.Provider,{value:e},r)}function tC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Jx);let f=e.concat(s.slice(0,u+1)),p=()=>{let _;return c?_=d:l.route.Component?_=A.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,A.createElement(eC,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?A.createElement(Zx,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var TE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(TE||{}),cc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cc||{});function nC(t){let e=A.useContext(ed);return e||ne(!1),e}function rC(t){let e=A.useContext(Um);return e||ne(!1),e}function iC(t){let e=A.useContext(Zr);return e||ne(!1),e}function IE(t){let e=iC(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function sC(){var t;let e=A.useContext(wE),n=rC(cc.UseRouteError),r=IE(cc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function oC(){let{router:t}=nC(TE.UseNavigateStable),e=IE(cc.UseNavigateStable),n=A.useRef(!1);return EE(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,uc({fromRouteId:e},s)))},[t,e])}const aC="startTransition",Jv=qS[aC];function lC(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=A.useState(n.state),{v7_startTransition:o}=r||{},a=A.useCallback(d=>{o&&Jv?Jv(()=>s(d)):s(d)},[s,o]);A.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=A.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,p)=>n.navigate(d,{state:f,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(d,f,p)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),u=n.basename||"/",c=A.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return A.createElement(A.Fragment,null,A.createElement(ed.Provider,{value:c},A.createElement(Um.Provider,{value:i},A.createElement(cC,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?A.createElement(uC,{routes:n.routes,state:i}):e))),null)}function uC(t){let{routes:e,state:n}=t;return Yx(e,void 0,n)}function zm(t){return Qx(t.context)}function Gt(t){ne(!1)}function cC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ze.Pop,navigator:s,static:o=!1}=t;sl()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=A.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=or(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:p="default"}=r,_=A.useMemo(()=>{let w=ro(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:f,key:p},navigationType:i}},[a,u,c,d,f,p,i]);return _==null?null:A.createElement(Hi.Provider,{value:l},A.createElement(td.Provider,{children:n,value:_}))}new Promise(()=>{});function Yh(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,Yh(r.props.children,s));return}r.type!==Gt&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yh(r.props.children,s)),n.push(o)}),n}function dC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:A.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:A.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$s.apply(this,arguments)}function SE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hC(t,e){return t.button===0&&(!e||e==="_self")&&!fC(t)}const pC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],mC=["aria-current","caseSensitive","className","end","style","to","children"];function gC(t,e){return Lx({basename:e==null?void 0:e.basename,future:$s({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:rx({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||yC(),routes:t,mapRouteProperties:dC}).initialize()}function yC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=$s({},e,{errors:vC(e.errors)})),e}function vC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Fm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const _C=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kr=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=SE(e,pC),{basename:f}=A.useContext(Hi),p,_=!1;if(typeof u=="string"&&wC.test(u)&&(p=u,_C))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),m=ro(v.pathname,f);v.origin===h.origin&&m!=null?u=m+v.search+v.hash:_=!0}catch{}let w=qx(u,{relative:i}),E=EC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(h){r&&r(h),h.defaultPrevented||E(h)}return A.createElement("a",$s({},d,{href:p||w,onClick:_||s?r:g,ref:n,target:l}))}),Sf=A.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=SE(e,mC),d=$m(l,{relative:c.relative}),f=ol(),p=A.useContext(Um),{navigator:_}=A.useContext(Hi),w=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,E=f.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(E=E.toLowerCase(),g=g?g.toLowerCase():null,w=w.toLowerCase());let h=E===w||!o&&E.startsWith(w)&&E.charAt(w.length)==="/",v=g!=null&&(g===w||!o&&g.startsWith(w)&&g.charAt(w.length)==="/"),m=h?r:void 0,I;typeof s=="function"?I=s({isActive:h,isPending:v}):I=[s,h?"active":null,v?"pending":null].filter(Boolean).join(" ");let x=typeof a=="function"?a({isActive:h,isPending:v}):a;return A.createElement(kr,$s({},c,{"aria-current":m,className:I,ref:n,style:x,to:l}),typeof u=="function"?u({isActive:h,isPending:v}):u)});var Zv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Zv||(Zv={}));var e0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(e0||(e0={}));function EC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=io(),l=ol(),u=$m(t,{relative:o});return A.useCallback(c=>{if(hC(c,n)){c.preventDefault();let d=r!==void 0?r:Ni(l)===Ni(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const AE=A.createContext(),qt=()=>A.useContext(AE),TC=({children:t})=>{const[e,n]=A.useState(!1);function r(){n(!e)}return y.jsx(AE.Provider,{value:{darkMode:e,toggleSwitch:r},children:t})},kE=()=>{const{darkMode:t,toggleSwitch:e}=qt();return y.jsx("div",{onClick:()=>e(),className:`w-10 h-5 rounded-full border flex items-center cursor-pointer ${t?"":"bg-dark border-dark"}`,children:y.jsx("div",{className:`w-1/2 h-5 rounded-full bg-white transition-all ease-linear shadow-sm ${t?"translate-x-full":""}`})})};function t0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t0(Object(n),!0).forEach(function(r){Xe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):t0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dc(t){"@babel/helpers - typeof";return dc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dc(t)}function IC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function SC(t,e,n){return e&&n0(t.prototype,e),n&&n0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bm(t,e){return kC(t)||CC(t,e)||xE(t,e)||PC()}function al(t){return AC(t)||xC(t)||xE(t)||RC()}function AC(t){if(Array.isArray(t))return Xh(t)}function kC(t){if(Array.isArray(t))return t}function xC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function CC(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function xE(t,e){if(t){if(typeof t=="string")return Xh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xh(t,e)}}function Xh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function RC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r0=function(){},Hm={},CE={},RE=null,PE={mark:r0,measure:r0};try{typeof window<"u"&&(Hm=window),typeof document<"u"&&(CE=document),typeof MutationObserver<"u"&&(RE=MutationObserver),typeof performance<"u"&&(PE=performance)}catch{}var bC=Hm.navigator||{},i0=bC.userAgent,s0=i0===void 0?"":i0,Hr=Hm,Ie=CE,o0=RE,Jl=PE;Hr.document;var ar=!!Ie.documentElement&&!!Ie.head&&typeof Ie.addEventListener=="function"&&typeof Ie.createElement=="function",bE=~s0.indexOf("MSIE")||~s0.indexOf("Trident/"),Zl,eu,tu,nu,ru,Jn="___FONT_AWESOME___",Jh=16,NE="fa",DE="svg-inline--fa",Di="data-fa-i2svg",Zh="data-fa-pseudo-element",NC="data-fa-pseudo-element-pending",Wm="data-prefix",qm="data-icon",a0="fontawesome-i2svg",DC="async",OC=["HTML","HEAD","STYLE","SCRIPT"],OE=function(){try{return!0}catch{return!1}}(),_e="classic",Le="sharp",Km=[_e,Le];function ll(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[_e]}})}var Pa=ll((Zl={},Xe(Zl,_e,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Xe(Zl,Le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Zl)),ba=ll((eu={},Xe(eu,_e,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Xe(eu,Le,{solid:"fass",regular:"fasr",light:"fasl"}),eu)),Na=ll((tu={},Xe(tu,_e,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Xe(tu,Le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),tu)),LC=ll((nu={},Xe(nu,_e,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Xe(nu,Le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),nu)),MC=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,LE="fa-layers-text",VC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,FC=ll((ru={},Xe(ru,_e,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Xe(ru,Le,{900:"fass",400:"fasr",300:"fasl"}),ru)),ME=[1,2,3,4,5,6,7,8,9,10],jC=ME.concat([11,12,13,14,15,16,17,18,19,20]),UC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Da=new Set;Object.keys(ba[_e]).map(Da.add.bind(Da));Object.keys(ba[Le]).map(Da.add.bind(Da));var $C=[].concat(Km,al(Da),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gi.GROUP,gi.SWAP_OPACITY,gi.PRIMARY,gi.SECONDARY]).concat(ME.map(function(t){return"".concat(t,"x")})).concat(jC.map(function(t){return"w-".concat(t)})),ra=Hr.FontAwesomeConfig||{};function zC(t){var e=Ie.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function BC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ie&&typeof Ie.querySelector=="function"){var HC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];HC.forEach(function(t){var e=Bm(t,2),n=e[0],r=e[1],i=BC(zC(n));i!=null&&(ra[r]=i)})}var VE={styleDefault:"solid",familyDefault:"classic",cssPrefix:NE,replacementClass:DE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ra.familyPrefix&&(ra.cssPrefix=ra.familyPrefix);var zs=L(L({},VE),ra);zs.autoReplaceSvg||(zs.observeMutations=!1);var U={};Object.keys(VE).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){zs[t]=n,ia.forEach(function(r){return r(U)})},get:function(){return zs[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){zs.cssPrefix=e,ia.forEach(function(n){return n(U)})},get:function(){return zs.cssPrefix}});Hr.FontAwesomeConfig=U;var ia=[];function WC(t){return ia.push(t),function(){ia.splice(ia.indexOf(t),1)}}var mr=Jh,kn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qC(t){if(!(!t||!ar)){var e=Ie.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ie.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ie.head.insertBefore(e,r),t}}var KC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oa(){for(var t=12,e="";t-- >0;)e+=KC[Math.random()*62|0];return e}function so(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gm(t){return t.classList?so(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function FE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function GC(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(FE(t[n]),'" ')},"").trim()}function nd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Qm(t){return t.size!==kn.size||t.x!==kn.x||t.y!==kn.y||t.rotate!==kn.rotate||t.flipX||t.flipY}function QC(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function YC(t){var e=t.transform,n=t.width,r=n===void 0?Jh:n,i=t.height,s=i===void 0?Jh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&bE?l+="translate(".concat(e.x/mr-r/2,"em, ").concat(e.y/mr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/mr,"em), calc(-50% + ").concat(e.y/mr,"em)) "):l+="translate(".concat(e.x/mr,"em, ").concat(e.y/mr,"em) "),l+="scale(".concat(e.size/mr*(e.flipX?-1:1),", ").concat(e.size/mr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var XC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jE(){var t=NE,e=DE,n=U.cssPrefix,r=U.replacementClass,i=XC;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var l0=!1;function Af(){U.autoAddCss&&!l0&&(qC(jE()),l0=!0)}var JC={mixout:function(){return{dom:{css:jE,insertCss:Af}}},hooks:function(){return{beforeDOMElementCreation:function(){Af()},beforeI2svg:function(){Af()}}}},Zn=Hr||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var dn=Zn[Jn],UE=[],ZC=function t(){Ie.removeEventListener("DOMContentLoaded",t),fc=1,UE.map(function(e){return e()})},fc=!1;ar&&(fc=(Ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ie.readyState),fc||Ie.addEventListener("DOMContentLoaded",ZC));function eR(t){ar&&(fc?setTimeout(t,0):UE.push(t))}function ul(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?FE(t):"<".concat(e," ").concat(GC(r),">").concat(s.map(ul).join(""),"</").concat(e,">")}function u0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var tR=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},kf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?tR(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function nR(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ep(t){var e=nR(t);return e.length===1?e[0].toString(16):null}function rR(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function c0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function tp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=c0(e);typeof dn.hooks.addPack=="function"&&!i?dn.hooks.addPack(t,c0(e)):dn.styles[t]=L(L({},dn.styles[t]||{}),s),t==="fas"&&tp("fa",e)}var iu,su,ou,gs=dn.styles,iR=dn.shims,sR=(iu={},Xe(iu,_e,Object.values(Na[_e])),Xe(iu,Le,Object.values(Na[Le])),iu),Ym=null,$E={},zE={},BE={},HE={},WE={},oR=(su={},Xe(su,_e,Object.keys(Pa[_e])),Xe(su,Le,Object.keys(Pa[Le])),su);function aR(t){return~$C.indexOf(t)}function lR(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!aR(i)?i:null}var qE=function(){var e=function(s){return kf(gs,function(o,a,l){return o[l]=kf(a,s,{}),o},{})};$E=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),zE=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),WE=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in gs||U.autoFetchSvg,r=kf(iR,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});BE=r.names,HE=r.unicodes,Ym=rd(U.styleDefault,{family:U.familyDefault})};WC(function(t){Ym=rd(t.styleDefault,{family:U.familyDefault})});qE();function Xm(t,e){return($E[t]||{})[e]}function uR(t,e){return(zE[t]||{})[e]}function yi(t,e){return(WE[t]||{})[e]}function KE(t){return BE[t]||{prefix:null,iconName:null}}function cR(t){var e=HE[t],n=Xm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return Ym}var Jm=function(){return{prefix:null,iconName:null,rest:[]}};function rd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?_e:n,i=Pa[r][t],s=ba[r][t]||ba[r][i],o=t in dn.styles?t:null;return s||o||null}var d0=(ou={},Xe(ou,_e,Object.keys(Na[_e])),Xe(ou,Le,Object.keys(Na[Le])),ou);function id(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Xe(e,_e,"".concat(U.cssPrefix,"-").concat(_e)),Xe(e,Le,"".concat(U.cssPrefix,"-").concat(Le)),e),o=null,a=_e;(t.includes(s[_e])||t.some(function(u){return d0[_e].includes(u)}))&&(a=_e),(t.includes(s[Le])||t.some(function(u){return d0[Le].includes(u)}))&&(a=Le);var l=t.reduce(function(u,c){var d=lR(U.cssPrefix,c);if(gs[c]?(c=sR[a].includes(c)?LC[a][c]:c,o=c,u.prefix=c):oR[a].indexOf(c)>-1?(o=c,u.prefix=rd(c,{family:a})):d?u.iconName=d:c!==U.replacementClass&&c!==s[_e]&&c!==s[Le]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?KE(u.iconName):{},p=yi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!gs.far&&gs.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},Jm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Le&&(gs.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=yi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Wr()||"fas"),l}var dR=function(){function t(){IC(this,t),this.definitions={}}return SC(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),tp(a,o[a]);var l=Na[_e][a];l&&tp(l,o[a]),qE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),f0=[],ys={},xs={},fR=Object.keys(xs);function hR(t,e){var n=e.mixoutsTo;return f0=t,ys={},Object.keys(xs).forEach(function(r){fR.indexOf(r)===-1&&delete xs[r]}),f0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),dc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ys[o]||(ys[o]=[]),ys[o].push(s[o])})}r.provides&&r.provides(xs)}),n}function np(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ys[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Oi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ys[t]||[];i.forEach(function(s){s.apply(null,n)})}function er(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return xs[t]?xs[t].apply(null,e):void 0}function rp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wr();if(e)return e=yi(n,e)||e,u0(GE.definitions,n,e)||u0(dn.styles,n,e)}var GE=new dR,pR=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Oi("noAuto")},mR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ar?(Oi("beforeI2svg",e),er("pseudoElements2svg",e),er("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,eR(function(){yR({autoReplaceSvgRoot:n}),Oi("watch",e)})}},gR={icon:function(e){if(e===null)return null;if(dc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:yi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=rd(e[0]);return{prefix:r,iconName:yi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.cssPrefix,"-"))>-1||e.match(MC))){var i=id(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wr(),iconName:yi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Wr();return{prefix:s,iconName:yi(s,e)||e}}}},Kt={noAuto:pR,config:U,dom:mR,parse:gR,library:GE,findIconDefinition:rp,toHtml:ul},yR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ie:n;(Object.keys(dn.styles).length>0||U.autoFetchSvg)&&ar&&U.autoReplaceSvg&&Kt.dom.i2svg({node:r})};function sd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ul(r)})}}),Object.defineProperty(t,"node",{get:function(){if(ar){var r=Ie.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function vR(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Qm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=nd(L(L({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function _R(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Zm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,p=f===void 0?!1:f,_=r.found?r:n,w=_.width,E=_.height,g=i==="fak",h=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),v={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},m=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};p&&(v.attributes[Di]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||Oa())},children:[l]}),delete v.attributes.title);var I=L(L({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:L(L({},m),d.styles)}),x=r.found&&n.found?er("generateAbstractMask",I)||{children:[],attributes:{}}:er("generateAbstractIcon",I)||{children:[],attributes:{}},C=x.children,D=x.attributes;return I.children=C,I.attributes=D,a?_R(I):vR(I)}function h0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Di]="");var c=L({},o.styles);Qm(i)&&(c.transform=YC({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=nd(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function wR(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=nd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xf=dn.styles;function ip(t){var e=t[0],n=t[1],r=t.slice(4),i=Bm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(gi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(gi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var ER={found:!1,width:512,height:512};function TR(t,e){!OE&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function sp(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=Wr()),new Promise(function(r,i){if(er("missingIconAbstract"),n==="fa"){var s=KE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&xf[e]&&xf[e][t]){var o=xf[e][t];return r(ip(o))}TR(t,e),r(L(L({},ER),{},{icon:U.showMissingIcons&&t?er("missingIconAbstract")||{}:{}}))})}var p0=function(){},op=U.measurePerformance&&Jl&&Jl.mark&&Jl.measure?Jl:{mark:p0,measure:p0},Fo='FA "6.4.2"',IR=function(e){return op.mark("".concat(Fo," ").concat(e," begins")),function(){return QE(e)}},QE=function(e){op.mark("".concat(Fo," ").concat(e," ends")),op.measure("".concat(Fo," ").concat(e),"".concat(Fo," ").concat(e," begins"),"".concat(Fo," ").concat(e," ends"))},eg={begin:IR,end:QE},Cu=function(){};function m0(t){var e=t.getAttribute?t.getAttribute(Di):null;return typeof e=="string"}function SR(t){var e=t.getAttribute?t.getAttribute(Wm):null,n=t.getAttribute?t.getAttribute(qm):null;return e&&n}function AR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function kR(){if(U.autoReplaceSvg===!0)return Ru.replace;var t=Ru[U.autoReplaceSvg];return t||Ru.replace}function xR(t){return Ie.createElementNS("http://www.w3.org/2000/svg",t)}function CR(t){return Ie.createElement(t)}function YE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?xR:CR:n;if(typeof t=="string")return Ie.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(YE(o,{ceFn:r}))}),i}function RR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ru={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(YE(i),n)}),n.getAttribute(Di)===null&&U.keepOriginalSource){var r=Ie.createComment(RR(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Gm(n).indexOf(U.replacementClass))return Ru.replace(e);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ul(a)}).join(`
`);n.setAttribute(Di,""),n.innerHTML=o}};function g0(t){t()}function XE(t,e){var n=typeof e=="function"?e:Cu;if(t.length===0)n();else{var r=g0;U.mutateApproach===DC&&(r=Hr.requestAnimationFrame||g0),r(function(){var i=kR(),s=eg.begin("mutate");t.map(i),s(),n()})}}var tg=!1;function JE(){tg=!0}function ap(){tg=!1}var hc=null;function y0(t){if(o0&&U.observeMutations){var e=t.treeCallback,n=e===void 0?Cu:e,r=t.nodeCallback,i=r===void 0?Cu:r,s=t.pseudoElementsCallback,o=s===void 0?Cu:s,a=t.observeMutationsRoot,l=a===void 0?Ie:a;hc=new o0(function(u){if(!tg){var c=Wr();so(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!m0(d.addedNodes[0])&&(U.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&m0(d.target)&&~UC.indexOf(d.attributeName))if(d.attributeName==="class"&&SR(d.target)){var f=id(Gm(d.target)),p=f.prefix,_=f.iconName;d.target.setAttribute(Wm,p||c),_&&d.target.setAttribute(qm,_)}else AR(d.target)&&i(d.target)})}}),ar&&hc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function PR(){hc&&hc.disconnect()}function bR(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function NR(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=id(Gm(t));return i.prefix||(i.prefix=Wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uR(i.prefix,t.innerText)||Xm(i.prefix,ep(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function DR(t){var e=so(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||Oa()):(e["aria-hidden"]="true",e.focusable="false")),e}function OR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:kn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=NR(t),r=n.iconName,i=n.prefix,s=n.rest,o=DR(t),a=np("parseNodeAttributes",{},t),l=e.styleParser?bR(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:kn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var LR=dn.styles;function ZE(t){var e=U.autoReplaceSvg==="nest"?v0(t,{styleParser:!1}):v0(t);return~e.extra.classes.indexOf(LE)?er("generateLayersText",t,e):er("generateSvgReplacementMutation",t,e)}var qr=new Set;Km.map(function(t){qr.add("fa-".concat(t))});Object.keys(Pa[_e]).map(qr.add.bind(qr));Object.keys(Pa[Le]).map(qr.add.bind(qr));qr=al(qr);function _0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ar)return Promise.resolve();var n=Ie.documentElement.classList,r=function(d){return n.add("".concat(a0,"-").concat(d))},i=function(d){return n.remove("".concat(a0,"-").concat(d))},s=U.autoFetchSvg?qr:Km.map(function(c){return"fa-".concat(c)}).concat(Object.keys(LR));s.includes("fa")||s.push("fa");var o=[".".concat(LE,":not([").concat(Di,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Di,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=so(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=eg.begin("onTree"),u=a.reduce(function(c,d){try{var f=ZE(d);f&&c.push(f)}catch(p){OE||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){XE(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function MR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ZE(t).then(function(n){n&&XE([n],e)})}function VR(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:rp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:rp(i||{})),t(r,L(L({},n),{},{mask:i}))}}var FR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?kn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,p=n.titleId,_=p===void 0?null:p,w=n.classes,E=w===void 0?[]:w,g=n.attributes,h=g===void 0?{}:g,v=n.styles,m=v===void 0?{}:v;if(e){var I=e.prefix,x=e.iconName,C=e.icon;return sd(L({type:"icon"},e),function(){return Oi("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(f?h["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(_||Oa()):(h["aria-hidden"]="true",h.focusable="false")),Zm({icons:{main:ip(C),mask:l?ip(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:x,transform:L(L({},kn),i),symbol:o,title:f,maskId:c,titleId:_,extra:{attributes:h,styles:m,classes:E}})})}},jR={mixout:function(){return{icon:VR(FR)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_0,n.nodeCallback=MR,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ie:r,s=n.callback,o=s===void 0?function(){}:s;return _0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(p,_){Promise.all([sp(i,a),c.iconName?sp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=Bm(w,2),g=E[0],h=E[1];p([n,Zm({icons:{main:g,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=nd(a);l.length>0&&(i.style=l);var u;return Qm(o)&&(u=er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},UR={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return sd({type:"layer"},function(){Oi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(al(s)).join(" ")},children:o}]})}}}},$R={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return sd({type:"counter",content:n},function(){return Oi("beforeDOMElementCreation",{content:n,params:r}),wR({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(al(a))}})})}}}},zR={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?kn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return sd({type:"text",content:n},function(){return Oi("beforeDOMElementCreation",{content:n,params:r}),h0({content:n,transform:L(L({},kn),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(U.cssPrefix,"-layers-text")].concat(al(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(bE){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,h0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},BR=new RegExp('"',"ug"),w0=[1105920,1112319];function HR(t){var e=t.replace(BR,""),n=rR(e,0),r=n>=w0[0]&&n<=w0[1],i=e.length===2?e[0]===e[1]:!1;return{value:ep(i?e[0]:e),isSecondary:r||i}}function E0(t,e){var n="".concat(NC).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=so(t.children),o=s.filter(function(C){return C.getAttribute(Zh)===e})[0],a=Hr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(VC),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Le:_e,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ba[f][l[2].toLowerCase()]:FC[f][u],_=HR(d),w=_.value,E=_.isSecondary,g=l[0].startsWith("FontAwesome"),h=Xm(p,w),v=h;if(g){var m=cR(w);m.iconName&&m.prefix&&(h=m.iconName,p=m.prefix)}if(h&&!E&&(!o||o.getAttribute(Wm)!==p||o.getAttribute(qm)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var I=OR(),x=I.extra;x.attributes[Zh]=e,sp(h,p).then(function(C){var D=Zm(L(L({},I),{},{icons:{main:C,mask:Jm()},prefix:p,iconName:v,extra:x,watchable:!0})),W=Ie.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=D.map(function(z){return ul(z)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function WR(t){return Promise.all([E0(t,"::before"),E0(t,"::after")])}function qR(t){return t.parentNode!==document.head&&!~OC.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function T0(t){if(ar)return new Promise(function(e,n){var r=so(t.querySelectorAll("*")).filter(qR).map(WR),i=eg.begin("searchPseudoElements");JE(),Promise.all(r).then(function(){i(),ap(),e()}).catch(function(){i(),ap(),n()})})}var KR={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=T0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ie:r;U.searchPseudoElements&&T0(i)}}},I0=!1,GR={mixout:function(){return{dom:{unwatch:function(){JE(),I0=!0}}}},hooks:function(){return{bootstrap:function(){y0(np("mutationObserverCallbacks",{}))},noAuto:function(){PR()},watch:function(n){var r=n.observeMutationsRoot;I0?ap():y0(np("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},S0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},QR={mixout:function(){return{parse:{transform:function(n){return S0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=S0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:f};return{tag:"g",attributes:L({},p.outer),children:[{tag:"g",attributes:L({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),p.path)}]}]}}}},Cf={x:0,y:0,width:"100%",height:"100%"};function A0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function YR(t){return t.tag==="g"?t.children:[t]}var XR={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?id(i.split(" ").map(function(o){return o.trim()})):Jm();return s.prefix||(s.prefix=Wr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,p=QC({transform:l,containerWidth:d,iconWidth:u}),_={tag:"rect",attributes:L(L({},Cf),{},{fill:"white"})},w=c.children?{children:c.children.map(A0)}:{},E={tag:"g",attributes:L({},p.inner),children:[A0(L({tag:c.tag,attributes:L(L({},c.attributes),p.path)},w))]},g={tag:"g",attributes:L({},p.outer),children:[E]},h="mask-".concat(a||Oa()),v="clip-".concat(a||Oa()),m={tag:"mask",attributes:L(L({},Cf),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,g]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:YR(f)},m]};return r.push(I,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Cf)}),{children:r,attributes:i}}}},JR={provides:function(e){var n=!1;Hr.matchMedia&&(n=Hr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ZR={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},eP=[JC,jR,UR,$R,zR,KR,GR,QR,XR,JR,ZR];hR(eP,{mixoutsTo:Kt});Kt.noAuto;Kt.config;Kt.library;Kt.dom;var lp=Kt.parse;Kt.findIconDefinition;Kt.toHtml;var tP=Kt.icon;Kt.layer;Kt.text;Kt.counter;var eT={exports:{}},nP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rP=nP,iP=rP;function tT(){}function nT(){}nT.resetWarningCache=tT;var sP=function(){function t(r,i,s,o,a,l){if(l!==iP){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:nT,resetWarningCache:tT};return n.PropTypes=n,n};eT.exports=sP();var oP=eT.exports;const re=J_(oP);function k0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k0(Object(n),!0).forEach(function(r){vs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pc(t){"@babel/helpers - typeof";return pc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pc(t)}function vs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lP(t,e){if(t==null)return{};var n=aP(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function up(t){return uP(t)||cP(t)||dP(t)||fP()}function uP(t){if(Array.isArray(t))return cp(t)}function cP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dP(t,e){if(t){if(typeof t=="string")return cp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cp(t,e)}}function cp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hP(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,_=t.border,w=t.listItem,E=t.flip,g=t.size,h=t.rotation,v=t.pull,m=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":_,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},vs(e,"fa-".concat(g),typeof g<"u"&&g!==null),vs(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),vs(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),vs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(m).map(function(I){return m[I]?I:null}).filter(function(I){return I})}function pP(t){return t=t-0,t===t}function rT(t){return pP(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var mP=["style"];function gP(t){return t.charAt(0).toUpperCase()+t.slice(1)}function yP(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=rT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[gP(i)]=s:e[i]=s,e},{})}function iT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return iT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=yP(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[rT(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=lP(n,mP);return i.attrs.style=xr(xr({},i.attrs.style),o),t.apply(void 0,[e.tag,xr(xr({},i.attrs),a)].concat(up(r)))}var sT=!1;try{sT=!0}catch{}function vP(){if(!sT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function x0(t){if(t&&pc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(lp.icon)return lp.icon(t);if(t===null)return null;if(t&&pc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Rf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?vs({},t,e):{}}var Pe=Vc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=x0(n),c=Rf("classes",[].concat(up(hP(t)),up(s.split(" ")))),d=Rf("transform",typeof t.transform=="string"?lp.transform(t.transform):t.transform),f=Rf("mask",x0(r)),p=tP(u,xr(xr(xr(xr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return vP("Could not find icon",u),null;var _=p.abstract,w={ref:e};return Object.keys(t).forEach(function(E){Pe.defaultProps.hasOwnProperty(E)||(w[E]=t[E])}),_P(_[0],w)});Pe.displayName="FontAwesomeIcon";Pe.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};Pe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var _P=iT.bind(null,Vc.createElement),ng={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},wP={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},EP={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},oT={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},TP={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},IP={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},SP={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},AP={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},kP={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},xP={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},CP={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};const RP=()=>{const[t,e]=A.useState(!1),{darkMode:n}=qt();return y.jsxs("header",{className:`flex justify-between items-center h-16 lg:h-20 md:h-[70px] w-full pr-12 pl-12 lg:px-36 fixed top-0 left-0 z-40 border-b border-gray-400 ${n?"dark":"bg-light"}`,children:[y.jsx(kr,{onClick:()=>e(!1),to:"/",children:y.jsxs("h3",{className:" text-3xl font-logo font-semibold text-[#1450A3] flex items-center gap-1",children:[y.jsx("span",{children:"Notelify"}),y.jsx("span",{children:y.jsx(Pe,{icon:ng,className:"text-2xl"})})]})}),y.jsx("nav",{className:"font-navlinks text-sm font-medium",children:y.jsxs("ul",{className:`flex flex-col sm:flex-row justify-center items-center gap-10 py-16 md:py-0 absolute md:relative left-0 md:left-auto md:top-auto w-full md:w-auto md:z-auto min-h-[50vh] -z-10 bg-[#1450A3] text-gray-50 md:text-inherit md:bg-transparent transition-all ease-in duration-150 opacity-0 md:opacity-100 ${t?"top-16 opacity-100":"-translate-y-[150%]"} sm:translate-y-0`,children:[y.jsx("li",{children:y.jsx(Sf,{onClick:()=>e(!1),to:"faqs",children:"FAQs"})}),y.jsx("li",{children:y.jsx(Sf,{onClick:()=>e(!1),to:"contact",children:"Contact Us"})}),y.jsx("li",{children:y.jsx(Sf,{children:"Support Forum"})}),y.jsx(kE,{})]})}),y.jsxs("div",{onClick:()=>e(!t),className:"flex flex-col gap-1 md:hidden cursor-pointer",children:[y.jsx("div",{className:`w-7 h-1 bg-[#1450A3] rounded-2xl transition-all duration-300 ${t?"rotate-45 translate-y-3 translate-x-1":""}`}),y.jsx("div",{className:`w-8 h-1 bg-[#1450A3] rounded-2xl transition-all ${t?"opacity-0":""}`}),y.jsx("div",{className:`w-7 h-1 self-end bg-[#1450A3] rounded-2xl transition-all duration-300 ${t?"-rotate-45 -translate-y-1":""}`})]})]})},PP=()=>{const{darkMode:t}=qt();return y.jsxs("footer",{className:`w-full flex flex-col gap-1 text-center border-t p-5 ${t?"bg-dark text-light/[0.7]":""}`,children:[y.jsx("nav",{children:y.jsxs("ul",{className:"flex justify-center items-center flex-wrap gap-4 md:gap-7",children:[y.jsx(kr,{to:"/",children:"Home"}),y.jsx(kr,{to:"/faqs",children:"FAQs"}),y.jsx(kr,{to:"/contact",children:"Contact Us"}),y.jsx(kr,{to:"/contact",children:"Support Forum"})]})}),y.jsx("a",{href:"mailto:erobagacollins@gmail.com",children:"erobagacollins@gmail.com"}),y.jsx("a",{href:"tel:+2348064417586",children:"+234-806-441-7586"}),y.jsx("p",{className:" text-gray-500 pt-4 border-t border-gray-400 mt-2 w-full max-w-md mx-auto",children:"© Copyright 2023 Notelify. All Rights Reserved"})]})},bP=()=>y.jsxs(y.Fragment,{children:[y.jsx(RP,{}),y.jsx(zm,{}),y.jsx(PP,{})]}),NP="/assets/note-85a421ac.png",DP="/assets/mockup-84583ee6.png",OP=()=>{const t=io(),{darkMode:e}=qt();return A.useEffect(()=>{window.scrollTo(0,0)},[]),y.jsxs("section",{className:`w-full min-h-screen py-24 md:pt-32 px-12 lg:px-36 text-center flex flex-col items-center ${e?"dark":""}`,children:[y.jsx("div",{className:"w-[250px] sm:w-[300px] md:w-[400px] mx-auto absolute left-0 md:left-[15%] top-[30%] sm:top-[20%] md:flex -z-10",children:y.jsx("img",{src:NP})}),y.jsxs("article",{className:"max-w-lg mx-auto mb-5 md:mb-7 font-article",children:[y.jsx("h3",{className:" font-bold text-[40px] md:text-[55px] leading-tight mb-4 md:mb-6",children:"The simplest way to keep notes"}),y.jsx("p",{className:` tracking-wide\r
        `,children:"Notelify, where note-taking meets simplicity and efficiency. Take charge of your ideas, lectures, and to-dos with our intuitive online notes platform."})]}),y.jsx("button",{onClick:()=>t("/signup"),className:"px-5 md:px-7 py-2 md:py-3 bg-[#1450A3] text-white rounded-[4px] text-[17px] md:text-[18px]",children:"Get Started"}),y.jsx("img",{src:DP,alt:"",className:"w-full md:w-auto"})]})},LP=()=>{const{darkMode:t}=qt();return y.jsx("section",{className:`w-full h-screen py-24 pt-28 md:pt-32 md:px-32 px-12 lg:px-36 text-center font-article ${t?"dark":""}`,children:y.jsx(zm,{})})},aT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=";/**
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
 */const lT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},uT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new VP;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FP=function(t){const e=lT(t);return uT.encodeByteArray(e,!0)},mc=function(t){return FP(t).replace(/\./g,"")},cT=function(t){try{return uT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UP=()=>jP().__FIREBASE_DEFAULTS__,$P=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cT(t[1]);return e&&JSON.parse(e)},rg=()=>{try{return UP()||$P()||zP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dT=t=>{var e,n;return(n=(e=rg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BP=t=>{const e=dT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fT=()=>{var t;return(t=rg())===null||t===void 0?void 0:t.config},hT=t=>{var e;return(e=rg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class HP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function WP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mc(JSON.stringify(n)),mc(JSON.stringify(o)),a].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function KP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QP(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YP(){try{return typeof indexedDB=="object"}catch{return!1}}function XP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const JP="FirebaseError";class lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JP,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cl.prototype.create)}}class cl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lr(i,a,r)}}function ZP(t,e){return t.replace(eb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eb=/\{\$([^}]+)}/g;function tb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(C0(s)&&C0(o)){if(!gc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C0(t){return t!==null&&typeof t=="object"}/**
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
 */function dl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nb(t,e){const n=new rb(t,e);return n.subscribe.bind(n)}class rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ib(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pf),i.error===void 0&&(i.error=Pf),i.complete===void 0&&(i.complete=Pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ib(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pf(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Li{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class sb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ab(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ob(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ob(t){return t===ci?void 0:t}function ab(t){return t.instantiationMode==="EAGER"}/**
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
 */class lb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const ub={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},cb=oe.INFO,db={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=db[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ig{constructor(e){this.name=e,this._logLevel=cb,this._logHandler=fb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ub[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const hb=(t,e)=>e.some(n=>t instanceof n);let R0,P0;function pb(){return R0||(R0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mb(){return P0||(P0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pT=new WeakMap,dp=new WeakMap,mT=new WeakMap,bf=new WeakMap,sg=new WeakMap;function gb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pT.set(n,t)}).catch(()=>{}),sg.set(e,t),e}function yb(t){if(dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dp.set(t,e)}let fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vb(t){fp=t(fp)}function _b(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nf(this),e,...n);return mT.set(r,e.sort?e.sort():[e]),Vr(r)}:mb().includes(t)?function(...e){return t.apply(Nf(this),e),Vr(pT.get(this))}:function(...e){return Vr(t.apply(Nf(this),e))}}function wb(t){return typeof t=="function"?_b(t):(t instanceof IDBTransaction&&yb(t),hb(t,pb())?new Proxy(t,fp):t)}function Vr(t){if(t instanceof IDBRequest)return gb(t);if(bf.has(t))return bf.get(t);const e=wb(t);return e!==t&&(bf.set(t,e),sg.set(e,t)),e}const Nf=t=>sg.get(t);function Eb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vr(o.result),l.oldVersion,l.newVersion,Vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Tb=["get","getKey","getAll","getAllKeys","count"],Ib=["put","add","delete","clear"],Df=new Map;function b0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Df.get(e))return Df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ib.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Tb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Df.set(e,s),s}vb(t=>({...t,get:(e,n,r)=>b0(e,n)||t.get(e,n,r),has:(e,n)=>!!b0(e,n)||t.has(e,n)}));/**
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
 */class Sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ab(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ab(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",N0="0.9.19";/**
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
 */const Mi=new ig("@firebase/app"),kb="@firebase/app-compat",xb="@firebase/analytics-compat",Cb="@firebase/analytics",Rb="@firebase/app-check-compat",Pb="@firebase/app-check",bb="@firebase/auth",Nb="@firebase/auth-compat",Db="@firebase/database",Ob="@firebase/database-compat",Lb="@firebase/functions",Mb="@firebase/functions-compat",Vb="@firebase/installations",Fb="@firebase/installations-compat",jb="@firebase/messaging",Ub="@firebase/messaging-compat",$b="@firebase/performance",zb="@firebase/performance-compat",Bb="@firebase/remote-config",Hb="@firebase/remote-config-compat",Wb="@firebase/storage",qb="@firebase/storage-compat",Kb="@firebase/firestore",Gb="@firebase/firestore-compat",Qb="firebase",Yb="10.4.0";/**
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
 */const pp="[DEFAULT]",Xb={[hp]:"fire-core",[kb]:"fire-core-compat",[Cb]:"fire-analytics",[xb]:"fire-analytics-compat",[Pb]:"fire-app-check",[Rb]:"fire-app-check-compat",[bb]:"fire-auth",[Nb]:"fire-auth-compat",[Db]:"fire-rtdb",[Ob]:"fire-rtdb-compat",[Lb]:"fire-fn",[Mb]:"fire-fn-compat",[Vb]:"fire-iid",[Fb]:"fire-iid-compat",[jb]:"fire-fcm",[Ub]:"fire-fcm-compat",[$b]:"fire-perf",[zb]:"fire-perf-compat",[Bb]:"fire-rc",[Hb]:"fire-rc-compat",[Wb]:"fire-gcs",[qb]:"fire-gcs-compat",[Kb]:"fire-fst",[Gb]:"fire-fst-compat","fire-js":"fire-js",[Qb]:"fire-js-all"};/**
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
 */const yc=new Map,mp=new Map;function Jb(t,e){try{t.container.addComponent(e)}catch(n){Mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bs(t){const e=t.name;if(mp.has(e))return Mi.debug(`There were multiple attempts to register component ${e}.`),!1;mp.set(e,t);for(const n of yc.values())Jb(n,t);return!0}function og(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Zb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fr=new cl("app","Firebase",Zb);/**
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
 */class eN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const oo=Yb;function gT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=fT()),!n)throw Fr.create("no-options");const s=yc.get(i);if(s){if(gc(n,s.options)&&gc(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new lb(i);for(const l of mp.values())o.addComponent(l);const a=new eN(n,r,o);return yc.set(i,a),a}function yT(t=pp){const e=yc.get(t);if(!e&&t===pp&&fT())return gT();if(!e)throw Fr.create("no-app",{appName:t});return e}function jr(t,e,n){var r;let i=(r=Xb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mi.warn(a.join(" "));return}Bs(new Li(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tN="firebase-heartbeat-database",nN=1,La="firebase-heartbeat-store";let Of=null;function vT(){return Of||(Of=Eb(tN,nN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(La)}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Of}async function rN(t){try{return await(await vT()).transaction(La).objectStore(La).get(_T(t))}catch(e){if(e instanceof lr)Mi.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mi.warn(n.message)}}}async function D0(t,e){try{const r=(await vT()).transaction(La,"readwrite");await r.objectStore(La).put(e,_T(t)),await r.done}catch(n){if(n instanceof lr)Mi.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mi.warn(r.message)}}}function _T(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iN=1024,sN=30*24*60*60*1e3;class oN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=O0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=sN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=O0(),{heartbeatsToSend:n,unsentEntries:r}=aN(this._heartbeatsCache.heartbeats),i=mc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function O0(){return new Date().toISOString().substring(0,10)}function aN(t,e=iN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YP()?XP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L0(t){return mc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uN(t){Bs(new Li("platform-logger",e=>new Sb(e),"PRIVATE")),Bs(new Li("heartbeat",e=>new oN(e),"PRIVATE")),jr(hp,N0,t),jr(hp,N0,"esm2017"),jr("fire-js","")}uN("");var cN="firebase",dN="10.4.0";/**
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
 */jr(cN,dN,"app");function ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function M0(t){return t!==void 0&&t.enterprise!==void 0}class fN{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function wT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hN=wT,ET=new cl("auth","Firebase",wT());/**
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
 */const vc=new ig("@firebase/auth");function pN(t,...e){vc.logLevel<=oe.WARN&&vc.warn(`Auth (${oo}): ${t}`,...e)}function Pu(t,...e){vc.logLevel<=oe.ERROR&&vc.error(`Auth (${oo}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw lg(t,...e)}function bn(t,...e){return lg(t,...e)}function TT(t,e,n){const r=Object.assign(Object.assign({},hN()),{[e]:n});return new cl("auth","Firebase",r).create(e,{appName:t.name})}function mN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(t,"argument-error"),TT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ET.create(t,...e)}function H(t,e,...n){if(!t)throw lg(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pu(e),new Error(e)}function tr(t,e){t||Bn(e)}/**
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
 */function gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gN(){return V0()==="http:"||V0()==="https:"}function V0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gN()||KP()||"connection"in navigator)?navigator.onLine:!0}function vN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=qP()||GP()}get(){return yN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ug(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class IT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wN=new fl(3e4,6e4);function ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ti(t,e,n,r,i={}){return ST(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=dl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),IT.fetch()(AT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ST(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_N),e);try{const i=new EN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw au(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw TT(t,c,u);rn(t,c)}}catch(i){if(i instanceof lr)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function hl(t,e,n,r,i={}){const s=await ti(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ug(t.config,i):`${t.config.apiScheme}://${i}`}class EN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),wN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}async function TN(t,e){return ti(t,"GET","/v2/recaptchaConfig",ei(t,e))}/**
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
 */async function IN(t,e){return ti(t,"POST","/v1/accounts:delete",e)}async function SN(t,e){return ti(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function sa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=cg(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:sa(Lf(i.auth_time)),issuedAtTime:sa(Lf(i.iat)),expirationTime:sa(Lf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lf(t){return Number(t)*1e3}function cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const i=cT(n);return i?JSON.parse(i):(Pu("Failed to decode base64 JWT payload"),null)}catch(i){return Pu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kN(t){const e=cg(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lr&&xN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sa(this.lastLoginAt),this.creationTime=sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _c(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ma(t,SN(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bN(s.providerUserInfo):[],a=PN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function RN(t){const e=qe(t);await _c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bN(t){return t.map(e=>{var{providerId:n}=e,r=ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NN(t,e){const n=await ST(t,{},async()=>{const r=dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",IT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Va;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Va,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
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
 */function gr(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Si{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ma(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return RN(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _c(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ma(this,IN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:m,isAnonymous:I,providerData:x,stsTokenManager:C}=n;H(v&&C,e,"internal-error");const D=Va.fromJSON(this.name,C);H(typeof v=="string",e,"internal-error"),gr(d,e.name),gr(f,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof I=="boolean",e,"internal-error"),gr(p,e.name),gr(_,e.name),gr(w,e.name),gr(E,e.name),gr(g,e.name),gr(h,e.name);const W=new Si({uid:v,auth:e,email:f,emailVerified:m,displayName:d,isAnonymous:I,photoURL:_,phoneNumber:p,tenantId:w,stsTokenManager:D,createdAt:g,lastLoginAt:h});return x&&Array.isArray(x)&&(W.providerData=x.map(z=>Object.assign({},z))),E&&(W._redirectEventId=E),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Va;i.updateFromServerResponse(n);const s=new Si({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _c(s),s}}/**
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
 */const F0=new Map;function Hn(t){tr(t instanceof Function,"Expected a class definition");let e=F0.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,F0.set(t,e),e)}/**
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
 */class xT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xT.type="NONE";const j0=xT;/**
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
 */function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bu(this.userKey,i.apiKey,s),this.fullPersistenceKey=bu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs(Hn(j0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Hn(j0);const o=bu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Si._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Cs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Cs(s,e,r))}}/**
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
 */function U0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(NT(e))return"Blackberry";if(DT(e))return"Webos";if(dg(e))return"Safari";if((e.includes("chrome/")||RT(e))&&!e.includes("edge/"))return"Chrome";if(bT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CT(t=Tt()){return/firefox\//i.test(t)}function dg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RT(t=Tt()){return/crios\//i.test(t)}function PT(t=Tt()){return/iemobile/i.test(t)}function bT(t=Tt()){return/android/i.test(t)}function NT(t=Tt()){return/blackberry/i.test(t)}function DT(t=Tt()){return/webos/i.test(t)}function od(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DN(t=Tt()){var e;return od(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ON(){return QP()&&document.documentMode===10}function OT(t=Tt()){return od(t)||bT(t)||DT(t)||NT(t)||/windows phone/i.test(t)||PT(t)}function LN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function LT(t,e=[]){let n;switch(t){case"Browser":n=U0(Tt());break;case"Worker":n=`${U0(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oo}/${r}`}/**
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
 */class MN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VN(t,e={}){return ti(t,"GET","/v2/passwordPolicy",ei(t,e))}/**
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
 */const FN=6;class jN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class UN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $0(this),this.idTokenSubscription=new $0(this),this.beforeStateQueue=new MN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ET,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _c(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VN(this),n=new jN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ur(t){return qe(t)}class $0{constructor(e){this.auth=e,this.observer=null,this.addObserver=nb(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function $N(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function MT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$N().appendChild(r)})}function zN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BN="https://www.google.com/recaptcha/enterprise.js?render=",HN="recaptcha-enterprise",WN="NO_RECAPTCHA";class qN{constructor(e){this.type=HN,this.auth=ur(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{TN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new fN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;M0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(WN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&M0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}MT(BN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hs(t,e,n,r=!1){const i=new qN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function KN(t,e){const n=og(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gc(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function GN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QN(t,e,n){const r=ur(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=VT(e),{host:o,port:a}=YN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||XN()}function VT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YN(t){const e=VT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:z0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:z0(o)}}}function z0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function JN(t,e){return ti(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Mf(t,e){return hl(t,"POST","/v1/accounts:signInWithPassword",ei(t,e))}async function FT(t,e){return ti(t,"POST","/v1/accounts:sendOobCode",ei(t,e))}async function ZN(t,e){return FT(t,e)}async function Vf(t,e){return FT(t,e)}/**
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
 */async function e4(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}async function t4(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}/**
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
 */class Fa extends fg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hs(e,r,"signInWithPassword");return Mf(e,i)}else return Mf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hs(e,r,"signInWithPassword");return Mf(e,s)}else return Promise.reject(i)});case"emailLink":return e4(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return JN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return t4(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return hl(t,"POST","/v1/accounts:signInWithIdp",ei(t,e))}/**
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
 */const n4="http://localhost";class Vi extends fg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:n4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dl(n)}return e}}/**
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
 */function r4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i4(t){const e=jo(Uo(t)).link,n=e?jo(Uo(e)).deep_link_id:null,r=jo(Uo(t)).deep_link_id;return(r?jo(Uo(r)).link:null)||r||n||e||t}class hg{constructor(e){var n,r,i,s,o,a;const l=jo(Uo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=r4((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=i4(e);try{return new hg(n)}catch{return null}}}/**
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
 */class ao{constructor(){this.providerId=ao.PROVIDER_ID}static credential(e,n){return Fa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hg.parseLink(n);return H(r,"argument-error"),Fa._fromEmailAndCode(e,r.code,r.tenantId)}}ao.PROVIDER_ID="password";ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pl extends pg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends pl{constructor(){super("facebook.com")}static credential(e){return Vi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vi._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class Tr extends pl{constructor(){super("github.com")}static credential(e){return Vi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
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
 */class Ir extends pl{constructor(){super("twitter.com")}static credential(e,n){return Vi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */async function Ff(t,e){return hl(t,"POST","/v1/accounts:signUp",ei(t,e))}/**
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
 */class Fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Si._fromIdTokenResponse(e,r,i),o=B0(r);return new Fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=B0(r);return new Fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function B0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wc extends lr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wc(e,n,r,i)}}function jT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(t,s,e,r):s})}async function s4(t,e,n=!1){const r=await Ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fi._forOperation(t,"link",r)}/**
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
 */async function o4(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ma(t,jT(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=cg(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
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
 */async function UT(t,e,n=!1){const r="signIn",i=await jT(t,r,e),s=await Fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function a4(t,e){return UT(ur(t),e)}/**
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
 */function Nu(t,e,n){var r;H(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function $T(t){const e=ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function l4(t,e,n){var r;const i=ur(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Hs(i,s,"getOobCode",!0);n&&Nu(i,o,n),await Vf(i,o)}else n&&Nu(i,s,n),await Vf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Hs(i,s,"getOobCode",!0);n&&Nu(i,a,n),await Vf(i,a)}else return Promise.reject(o)})}async function u4(t,e,n){var r;const i=ur(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Hs(i,s,"signUpPassword");o=Ff(i,u)}else o=Ff(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Hs(i,s,"signUpPassword");return Ff(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$T(t),u}),l=await Fi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function c4(t,e,n){return a4(qe(t),ao.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$T(t),r})}async function d4(t,e){const n=qe(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Nu(n.auth,i,e);const{email:s}=await ZN(n.auth,i);s!==t.email&&await t.reload()}function f4(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function h4(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function p4(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function m4(t){return qe(t).signOut()}const Ec="__sak";/**
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
 */class zT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function g4(){const t=Tt();return dg(t)||od(t)}const y4=1e3,v4=10;class BT extends zT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=g4()&&LN(),this.fallbackToPolling=OT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ON()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,v4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BT.type="LOCAL";const _4=BT;/**
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
 */class HT extends zT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HT.type="SESSION";const WT=HT;/**
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
 */function w4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ad(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await w4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ad.receivers=[];/**
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
 */function mg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class E4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=mg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function T4(t){Nn().location.href=t}/**
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
 */function qT(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function I4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A4(){return qT()?self:null}/**
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
 */const KT="firebaseLocalStorageDb",k4=1,Tc="firebaseLocalStorage",GT="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ld(t,e){return t.transaction([Tc],e?"readwrite":"readonly").objectStore(Tc)}function x4(){const t=indexedDB.deleteDatabase(KT);return new ml(t).toPromise()}function yp(){const t=indexedDB.open(KT,k4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tc,{keyPath:GT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tc)?e(r):(r.close(),await x4(),e(await yp()))})})}async function H0(t,e,n){const r=ld(t,!0).put({[GT]:e,value:n});return new ml(r).toPromise()}async function C4(t,e){const n=ld(t,!1).get(e),r=await new ml(n).toPromise();return r===void 0?null:r.value}function W0(t,e){const n=ld(t,!0).delete(e);return new ml(n).toPromise()}const R4=800,P4=3;class QT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>P4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ad._getInstance(A4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await I4(),!this.activeServiceWorker)return;this.sender=new E4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yp();return await H0(e,Ec,"1"),await W0(e,Ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>H0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>C4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ld(i,!1).getAll();return new ml(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QT.type="LOCAL";const b4=QT;new fl(3e4,6e4);/**
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
 */function YT(t,e){return e?Hn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gg extends fg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function N4(t){return UT(t.auth,new gg(t),t.bypassAuthState)}function D4(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),o4(n,new gg(t),t.bypassAuthState)}async function O4(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),s4(n,new gg(t),t.bypassAuthState)}/**
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
 */class XT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N4;case"linkViaPopup":case"linkViaRedirect":return O4;case"reauthViaPopup":case"reauthViaRedirect":return D4;default:rn(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L4=new fl(2e3,1e4);async function JT(t,e,n){const r=ur(t);mN(t,e,pg);const i=YT(r,n);return new vi(r,"signInViaPopup",e,i).executeNotNull()}class vi extends XT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=mg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L4.get())};e()}}vi.currentPopupAction=null;/**
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
 */const M4="pendingRedirect",Du=new Map;class V4 extends XT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const r=await F4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F4(t,e){const n=$4(e),r=U4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function j4(t,e){Du.set(t._key(),e)}function U4(t){return Hn(t._redirectPersistence)}function $4(t){return bu(M4,t.config.apiKey,t.name)}async function z4(t,e,n=!1){const r=ur(t),i=YT(r,e),o=await new V4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const B4=10*60*1e3;class H4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B4&&this.cachedEventUids.clear(),this.cachedEventUids.has(q0(e))}saveEventToCache(e){this.cachedEventUids.add(q0(e)),this.lastProcessedEventTime=Date.now()}}function q0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZT(t);default:return!1}}/**
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
 */async function q4(t,e={}){return ti(t,"GET","/v1/projects",e)}/**
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
 */const K4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G4=/^https?/;async function Q4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await q4(t);for(const n of e)try{if(Y4(n))return}catch{}rn(t,"unauthorized-domain")}function Y4(t){const e=gp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!G4.test(n))return!1;if(K4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const X4=new fl(3e4,6e4);function K0(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J4(t){return new Promise((e,n)=>{var r,i,s;function o(){K0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K0(),n(bn(t,"network-request-failed"))},timeout:X4.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=zN("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},MT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ou=null,e})}let Ou=null;function Z4(t){return Ou=Ou||J4(t),Ou}/**
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
 */const eD=new fl(5e3,15e3),tD="__/auth/iframe",nD="emulator/auth/iframe",rD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sD(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ug(e,nD):`https://${t.config.authDomain}/${tD}`,r={apiKey:e.apiKey,appName:t.name,v:oo},i=iD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${dl(r).slice(1)}`}async function oD(t){const e=await Z4(t),n=Nn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:sD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},eD.get());function l(){Nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lD=500,uD=600,cD="_blank",dD="http://localhost";class G0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fD(t,e,n,r=lD,i=uD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=RT(u)?cD:n),CT(u)&&(e=e||dD,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(DN(u)&&a!=="_self")return hD(e||"",a),new G0(null);const d=window.open(e||"",a,c);H(d,t,"popup-blocked");try{d.focus()}catch{}return new G0(d)}function hD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pD="__/auth/handler",mD="emulator/auth/handler",gD=encodeURIComponent("fac");async function Q0(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oo,eventId:i};if(e instanceof pg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof pl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${gD}=${encodeURIComponent(l)}`:"";return`${yD(t)}?${dl(a).slice(1)}${u}`}function yD({config:t}){return t.emulator?ug(t,mD):`https://${t.authDomain}/${pD}`}/**
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
 */const jf="webStorageSupport";class vD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WT,this._completeRedirectFn=z4,this._overrideRedirectResult=j4}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Q0(e,n,r,gp(),i);return fD(e,o,mg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Q0(e,n,r,gp(),i);return T4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oD(e),r=new H4(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jf,{type:jf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jf];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Q4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OT()||dg()||od()}}const _D=vD;var Y0="@firebase/auth",X0="1.3.0";/**
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
 */class wD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ED(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TD(t){Bs(new Li("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LT(t)},u=new UN(r,i,s,l);return GN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bs(new Li("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new wD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jr(Y0,X0,ED(t)),jr(Y0,X0,"esm2017")}/**
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
 */const ID=5*60,SD=hT("authIdTokenMaxAge")||ID;let J0=null;const AD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SD)return;const i=n==null?void 0:n.token;J0!==i&&(J0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kD(t=yT()){const e=og(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KN(t,{popupRedirectResolver:_D,persistence:[b4,_4,WT]}),r=hT("authTokenSyncURL");if(r){const s=AD(r);h4(n,s,()=>s(n.currentUser)),f4(n,o=>s(o))}const i=dT("auth");return i&&QN(n,`http://${i}`),n}TD("Browser");var xD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,yg=yg||{},Y=xD||self;function ud(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function gl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CD(t){return Object.prototype.hasOwnProperty.call(t,Uf)&&t[Uf]||(t[Uf]=++RD)}var Uf="closure_uid_"+(1e9*Math.random()>>>0),RD=0;function PD(t,e,n){return t.call.apply(t.bind,arguments)}function bD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=PD:vt=bD,vt.apply(null,arguments)}function lu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ni(){this.s=this.s,this.o=this.o}var ND=0;ni.prototype.s=!1;ni.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ND!=0)&&CD(this)};ni.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Z0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ud(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var DD=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function ja(t){return/^[\s\xa0]*$/.test(t)}function cd(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function An(t){return cd().indexOf(t)!=-1}function _g(t){return _g[" "](t),t}_g[" "]=function(){};function OD(t,e){var n=k3;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var LD=An("Opera"),Ws=An("Trident")||An("MSIE"),tI=An("Edge"),vp=tI||Ws,nI=An("Gecko")&&!(cd().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),MD=cd().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function rI(){var t=Y.document;return t?t.documentMode:void 0}var _p;e:{var $f="",zf=function(){var t=cd();if(nI)return/rv:([^\);]+)(\)|;)/.exec(t);if(tI)return/Edge\/([\d\.]+)/.exec(t);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MD)return/WebKit\/(\S+)/.exec(t);if(LD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zf&&($f=zf?zf[1]:""),Ws){var Bf=rI();if(Bf!=null&&Bf>parseFloat($f)){_p=String(Bf);break e}}_p=$f}var wp;if(Y.document&&Ws){var e_=rI();wp=e_||parseInt(_p,10)||void 0}else wp=void 0;var VD=wp;function Ua(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nI){e:{try{_g(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ua.$.h.call(this)}}rt(Ua,_t);var FD={2:"touch",3:"pen",4:"mouse"};Ua.prototype.h=function(){Ua.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yl="closure_listenable_"+(1e6*Math.random()|0),jD=0;function UD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++jD,this.fa=this.ia=!1}function dd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function wg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $D(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function iI(t){const e={};for(const n in t)e[n]=t[n];return e}const t_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<t_.length;s++)n=t_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fd(t){this.src=t,this.g={},this.h=0}fd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Tp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new UD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ep(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=eI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Eg="closure_lm_"+(1e6*Math.random()|0),Hf={};function oI(t,e,n,r,i){if(r&&r.once)return lI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)oI(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[yl]?t.O(e,n,gl(r)?!!r.capture:!!r,i):aI(t,e,n,!1,r,i)}function aI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=gl(i)?!!i.capture:!!i,a=Ig(t);if(a||(t[Eg]=a=new fd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=zD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(cI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zD(){function t(n){return e.call(t.src,t.listener,n)}const e=BD;return t}function lI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lI(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[yl]?t.P(e,n,gl(r)?!!r.capture:!!r,i):aI(t,e,n,!0,r,i)}function uI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)uI(t,e[s],n,r,i);else r=gl(r)?!!r.capture:!!r,n=Sg(n),t&&t[yl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Tp(s,n,r,i),-1<n&&(dd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ig(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tp(e,n,r,i)),(n=-1<t?e[t]:null)&&Tg(n))}function Tg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[yl])Ep(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ig(e))?(Ep(n,t),n.h==0&&(n.src=null,e[Eg]=null)):dd(t)}}}function cI(t){return t in Hf?Hf[t]:Hf[t]="on"+t}function BD(t,e){if(t.fa)t=!0;else{e=new Ua(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Tg(t),t=n.call(r,e)}return t}function Ig(t){return t=t[Eg],t instanceof fd?t:null}var Wf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sg(t){return typeof t=="function"?t:(t[Wf]||(t[Wf]=function(e){return t.handleEvent(e)}),t[Wf])}function nt(){ni.call(this),this.i=new fd(this),this.S=this,this.J=null}rt(nt,ni);nt.prototype[yl]=!0;nt.prototype.removeEventListener=function(t,e,n,r){uI(this,t,e,n,r)};function lt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(r,t),sI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=uu(o,r,!0,e)&&i}if(o=e.g=t,i=uu(o,r,!0,e)&&i,i=uu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=uu(o,r,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dd(n[r]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ep(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ag=Y.JSON.stringify;class HD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function WD(){var t=kg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qD{constructor(){this.h=this.g=null}add(e,n){const r=dI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dI=new HD(()=>new KD,t=>t.reset());class KD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function QD(t){Y.setTimeout(()=>{throw t},0)}let $a,za=!1,kg=new qD,fI=()=>{const t=Y.Promise.resolve(void 0);$a=()=>{t.then(YD)}};var YD=()=>{for(var t;t=WD();){try{t.h.call(t.g)}catch(n){QD(n)}var e=dI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}za=!1};function hd(t,e){nt.call(this),this.h=t||1,this.g=e||Y,this.j=vt(this.qb,this),this.l=Date.now()}rt(hd,nt);N=hd.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lt(this,"tick"),this.ga&&(xg(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){hd.$.N.call(this),xg(this),delete this.g};function Cg(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function hI(t){t.g=Cg(()=>{t.g=null,t.i&&(t.i=!1,hI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XD extends ni{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hI(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ba(t){ni.call(this),this.h=t,this.g={}}rt(Ba,ni);var n_=[];function pI(t,e,n,r){Array.isArray(n)||(n&&(n_[0]=n.toString()),n=n_);for(var i=0;i<n.length;i++){var s=oI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function mI(t){wg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Tg(e)},t),t.g={}}Ba.prototype.N=function(){Ba.$.N.call(this),mI(this)};Ba.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pd(){this.g=!0}pd.prototype.Ea=function(){this.g=!1};function JD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _s(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+t3(t,n)+(r?" "+r:"")})}function e3(t,e){t.info(function(){return"TIMEOUT: "+e})}pd.prototype.info=function(){};function t3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ag(n)}catch{return e}}var Wi={},r_=null;function md(){return r_=r_||new nt}Wi.Ta="serverreachability";function gI(t){_t.call(this,Wi.Ta,t)}rt(gI,_t);function Ha(t){const e=md();lt(e,new gI(e))}Wi.STAT_EVENT="statevent";function yI(t,e){_t.call(this,Wi.STAT_EVENT,t),this.stat=e}rt(yI,_t);function At(t){const e=md();lt(e,new yI(e,t))}Wi.Ua="timingevent";function vI(t,e){_t.call(this,Wi.Ua,t),this.size=e}rt(vI,_t);function vl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var gd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_I={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rg(){}Rg.prototype.h=null;function i_(t){return t.h||(t.h=t.i())}function wI(){}var _l={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pg(){_t.call(this,"d")}rt(Pg,_t);function bg(){_t.call(this,"c")}rt(bg,_t);var Ip;function yd(){}rt(yd,Rg);yd.prototype.g=function(){return new XMLHttpRequest};yd.prototype.i=function(){return{}};Ip=new yd;function wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ba(this),this.P=n3,t=vp?125:void 0,this.V=new hd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new EI}function EI(){this.i=null,this.g="",this.h=!1}var n3=45e3,Sp={},Ic={};N=wl.prototype;N.setTimeout=function(t){this.P=t};function Ap(t,e,n){t.L=1,t.v=_d(nr(e)),t.s=n,t.S=!0,TI(t,null)}function TI(t,e){t.G=Date.now(),El(t),t.A=nr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),PI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new EI,t.g=XI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new XD(vt(t.Pa,t,t.g),t.O)),pI(t.U,t.g,"readystatechange",t.nb),e=t.I?iI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ha(),JD(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&xn(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=xn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||vp||this.g&&(this.h.h||this.g.ja()||l_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Ha(3):Ha(2)),vd(this);var n=this.g.da();this.ca=n;t:if(II(this)){var r=l_(this.g);t="";var i=r.length,s=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_i(this),oa(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ZD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ja(a)){var u=a;break t}}u=null}if(n=u)_s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kp(this,n);else{this.i=!1,this.o=3,At(12),_i(this),oa(this);break e}}this.S?(SI(this,c,o),vp&&this.i&&c==3&&(pI(this.U,this.V,"tick",this.mb),this.V.start())):(_s(this.j,this.m,o,null),kp(this,o)),c==4&&_i(this),this.i&&!this.J&&(c==4?KI(this.l,this):(this.i=!1,El(this)))}else I3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),_i(this),oa(this)}}}catch{}finally{}};function II(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function SI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=r3(t,n),i==Ic){e==4&&(t.o=4,At(14),r=!1),_s(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Sp){t.o=4,At(15),_s(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _s(t.j,t.m,i,null),kp(t,i);II(t)&&i!=Ic&&i!=Sp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vg(e),e.M=!0,At(11))):(_s(t.j,t.m,n,"[Invalid Chunked Response]"),_i(t),oa(t))}N.mb=function(){if(this.g){var t=xn(this.g),e=this.g.ja();this.C<e.length&&(vd(this),SI(this,t,e),this.i&&t!=4&&El(this))}};function r3(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ic:(n=Number(e.substring(n,r)),isNaN(n)?Sp:(r+=1,r+n>e.length?Ic:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,_i(this)};function El(t){t.Y=Date.now()+t.P,AI(t,t.P)}function AI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vl(vt(t.lb,t),e)}function vd(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(e3(this.j,this.A),this.L!=2&&(Ha(),At(17)),_i(this),this.o=2,oa(this)):AI(this,this.Y-t)};function oa(t){t.l.H==0||t.J||KI(t.l,t)}function _i(t){vd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,xg(t.V),mI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function kp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xp(n.i,t))){if(!t.K&&xp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)kc(n),Id(n);else break e;Mg(n),At(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=vl(vt(n.ib,n),6e3));if(1>=DI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else wi(n,11)}else if((t.K||n.g==t)&&kc(n),!ja(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ng(s,s.h),s.h=null))}if(r.F){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,we(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=YI(r,r.J?r.pa:null,r.Y),o.K){OI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(vd(a),El(a)),r.g=o}else WI(r);0<n.j.length&&Sd(n)}else u[0]!="stop"&&u[0]!="close"||wi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?wi(n,7):Lg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ha(4)}catch{}}function i3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ud(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function s3(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ud(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function kI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ud(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=s3(t),r=i3(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var xI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ai(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ai){this.h=t.h,Sc(this,t.j),this.s=t.s,this.g=t.g,Ac(this,t.m),this.l=t.l;var e=t.i,n=new Wa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),s_(this,n),this.o=t.o}else t&&(e=String(t).match(xI))?(this.h=!1,Sc(this,e[1]||"",!0),this.s=$o(e[2]||""),this.g=$o(e[3]||"",!0),Ac(this,e[4]),this.l=$o(e[5]||"",!0),s_(this,e[6]||"",!0),this.o=$o(e[7]||"")):(this.h=!1,this.i=new Wa(null,this.h))}Ai.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zo(e,o_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(zo(e,o_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(zo(n,n.charAt(0)=="/"?u3:l3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zo(n,d3)),t.join("")};function nr(t){return new Ai(t)}function Sc(t,e,n){t.j=n?$o(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ac(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function s_(t,e,n){e instanceof Wa?(t.i=e,f3(t.i,t.h)):(n||(e=zo(e,c3)),t.i=new Wa(e,t.h))}function we(t,e,n){t.i.set(e,n)}function _d(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $o(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,a3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function a3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var o_=/[#\/\?@]/g,l3=/[#\?:]/g,u3=/[#\?]/g,c3=/[#\?@]/g,d3=/#/g;function Wa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ri(t){t.g||(t.g=new Map,t.h=0,t.i&&o3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Wa.prototype;N.add=function(t,e){ri(this),this.i=null,t=lo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function CI(t,e){ri(t),e=lo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function RI(t,e){return ri(t),e=lo(t,e),t.g.has(e)}N.forEach=function(t,e){ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){ri(this);let e=[];if(typeof t=="string")RI(this,t)&&(e=e.concat(this.g.get(lo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return ri(this),this.i=null,t=lo(this,t),RI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function PI(t,e,n){CI(t,e),0<n.length&&(t.i=null,t.g.set(lo(t,e),vg(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function lo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function f3(t,e){e&&!t.j&&(ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(CI(this,r),PI(this,i,n))},t)),t.j=e}var h3=class{constructor(t,e){this.g=t,this.map=e}};function bI(t){this.l=t||p3,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var p3=10;function NI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function DI(t){return t.h?1:t.g?t.g.size:0}function xp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ng(t,e){t.g?t.g.add(e):t.h=e}function OI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bI.prototype.cancel=function(){if(this.i=LI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function LI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return vg(t.i)}var m3=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function g3(){this.g=new m3}function y3(t,e,n){const r=n||"";try{kI(t,function(i,s){let o=i;gl(i)&&(o=Ag(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function v3(t,e){const n=new pd;if(Y.Image){const r=new Image;r.onload=lu(cu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lu(cu,n,r,"TestLoadImage: error",!1,e),r.onabort=lu(cu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lu(cu,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function cu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wd(t){this.l=t.ec||null,this.j=t.ob||!1}rt(wd,Rg);wd.prototype.g=function(){return new Ed(this.l,this.j)};wd.prototype.i=function(t){return function(){return t}}({});function Ed(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Dg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(Ed,nt);var Dg=0;N=Ed.prototype;N.open=function(t,e){if(this.readyState!=Dg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qa(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tl(this)),this.readyState=Dg};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qa(this)),this.g&&(this.readyState=3,qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;MI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function MI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Tl(this):qa(this),this.readyState==3&&MI(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Tl(this))};N.Ya=function(t){this.g&&(this.response=t,Tl(this))};N.ka=function(){this.g&&Tl(this)};function Tl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qa(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ed.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _3=Y.JSON.parse;function Me(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=VI,this.L=this.M=!1}rt(Me,nt);var VI="",w3=/^https?$/i,E3=["POST","PUT"];N=Me.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ip.g(),this.C=this.u?i_(this.u):i_(Ip),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){a_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=eI(E3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{UI(this),0<this.B&&((this.L=T3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=Cg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){a_(this,s)}};function T3(t){return Ws&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof yg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function a_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,FI(t),Td(t)}function FI(t){t.F||(t.F=!0,lt(t,"complete"),lt(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),Td(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Td(this,!0)),Me.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?jI(this):this.kb())};N.kb=function(){jI(this)};function jI(t){if(t.h&&typeof yg<"u"&&(!t.C[1]||xn(t)!=4||t.da()!=2)){if(t.v&&xn(t)==4)Cg(t.La,0,t);else if(lt(t,"readystatechange"),xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(xI)[1]||null;!i&&Y.self&&Y.self.location&&(i=Y.self.location.protocol.slice(0,-1)),r=!w3.test(i?i.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var s=2<xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",FI(t)}}finally{Td(t)}}}}function Td(t,e){if(t.g){UI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function UI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function xn(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_3(e)}};function l_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case VI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function I3(t){const e={};t=(t.g&&2<=xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ja(t[r]))continue;var n=GD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}$D(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $I(t){let e="";return wg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Og(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$I(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function bo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zI(t){this.Ga=0,this.j=[],this.l=new pd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bo("baseRetryDelayMs",5e3,t),this.hb=bo("retryDelaySeedMs",1e4,t),this.eb=bo("forwardChannelMaxRetries",2,t),this.xa=bo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bI(t&&t.concurrentRequestLimit),this.Ja=new g3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=zI.prototype;N.ra=8;N.H=1;function Lg(t){if(BI(t),t.H==3){var e=t.W++,n=nr(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),Il(t,n),e=new wl(t,t.l,e),e.L=2,e.v=_d(nr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=XI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),El(e)}QI(t)}function Id(t){t.g&&(Vg(t),t.g.cancel(),t.g=null)}function BI(t){Id(t),t.u&&(Y.clearTimeout(t.u),t.u=null),kc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Sd(t){if(!NI(t.i)&&!t.m){t.m=!0;var e=t.Na;$a||fI(),za||($a(),za=!0),kg.add(e,t),t.C=0}}function S3(t,e){return DI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=vl(vt(t.Na,t,e),GI(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new wl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=iI(s),sI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=HI(this,i,e),n=nr(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Il(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($I(s)))+"&"+e:this.o&&Og(n,this.o,s)),Ng(this.i,i),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),i.aa=!0,Ap(i,n,null)):Ap(i,n,e),this.H=2}}else this.H==3&&(t?u_(this,t):this.j.length==0||NI(this.i)||u_(this))};function u_(t,e){var n;e?n=e.m:n=t.W++;const r=nr(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),Il(t,r),t.o&&t.s&&Og(r,t.o,t.s),n=new wl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=HI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ng(t.i,n),Ap(n,r,e)}function Il(t,e){t.na&&wg(t.na,function(n,r){we(e,r,n)}),t.h&&kI({},function(n,r){we(e,r,n)})}function HI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?vt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{y3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function WI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;$a||fI(),za||($a(),za=!0),kg.add(e,t),t.A=0}}function Mg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=vl(vt(t.Ma,t),GI(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,qI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=vl(vt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),Id(this),qI(this))};function Vg(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function qI(t){t.g=new wl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nr(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),Il(t,e),t.o&&t.s&&Og(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=_d(nr(e)),n.s=null,n.S=!0,TI(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Id(this),Mg(this),At(19))};function kc(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function KI(t,e){var n=null;if(t.g==e){kc(t),Vg(t),t.g=null;var r=2}else if(xp(t.i,e))n=e.F,OI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=md(),lt(r,new vI(r,n)),Sd(t)}else WI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&S3(t,e)||r==2&&Mg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:wi(t,5);break;case 4:wi(t,10);break;case 3:wi(t,6);break;default:wi(t,2)}}}function GI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function wi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=vt(t.pb,t);n||(n=new Ai("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Sc(n,"https"),_d(n)),v3(n.toString(),r)}else At(2);t.H=0,t.h&&t.h.za(e),QI(t),BI(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function QI(t){if(t.H=0,t.ma=[],t.h){const e=LI(t.i);(e.length!=0||t.j.length!=0)&&(Z0(t.ma,e),Z0(t.ma,t.j),t.i.i.length=0,vg(t.j),t.j.length=0),t.h.ya()}}function YI(t,e,n){var r=n instanceof Ai?nr(n):new Ai(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ac(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ai(null);r&&Sc(s,r),e&&(s.g=e),i&&Ac(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),Il(t,r),r}function XI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Me(new wd({ob:!0})):new Me(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function JI(){}N=JI.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function xc(){if(Ws&&!(10<=Number(VD)))throw Error("Environmental error: no available transport.")}xc.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){nt.call(this),this.g=new zI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ja(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ja(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new uo(this)}rt(Bt,nt);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=YI(t,null,t.Y),Sd(t)};Bt.prototype.close=function(){Lg(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ag(t),t=n);e.j.push(new h3(e.fb++,t)),e.H==3&&Sd(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,Lg(this.g),delete this.g,Bt.$.N.call(this)};function ZI(t){Pg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(ZI,Pg);function e2(){bg.call(this),this.status=1}rt(e2,bg);function uo(t){this.g=t}rt(uo,JI);uo.prototype.Ba=function(){lt(this.g,"a")};uo.prototype.Aa=function(t){lt(this.g,new ZI(t))};uo.prototype.za=function(t){lt(this.g,new e2)};uo.prototype.ya=function(){lt(this.g,"b")};function A3(){this.blockSize=-1}function gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(gn,A3);gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}gn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)qf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){qf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){qf(this,r),i=0;break}}this.h=i,this.i+=e};gn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var k3={};function Fg(t){return-128<=t&&128>t?OD(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return Ps;if(0>t)return ot(Cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cp;return new fe(e,0)}function t2(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ot(t2(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),r=Ps,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Cn(Math.pow(e,s)),r=r.R(s).add(Cn(o))):(r=r.R(n),r=r.add(Cn(o)))}return r}var Cp=4294967296,Ps=Fg(0),Rp=Fg(1),c_=Fg(16777216);N=fe.prototype;N.ea=function(){if(Jt(this))return-ot(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cp+r)*e,e*=Cp}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(Jt(this))return"-"+ot(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,r="";;){var i=Rc(n,e).g;n=Cc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Wn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Jt(t){return t.h==-1}N.X=function(t){return t=Cc(this,t),Jt(t)?-1:Wn(t)?0:1};function ot(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(Rp)}N.abs=function(){return Jt(this)?ot(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function Cc(t,e){return t.add(ot(e))}N.R=function(t){if(Wn(this)||Wn(t))return Ps;if(Jt(this))return Jt(t)?ot(this).R(ot(t)):ot(ot(this).R(t));if(Jt(t))return ot(this.R(ot(t)));if(0>this.X(c_)&&0>t.X(c_))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,du(n,2*r+2*i),n[2*r+2*i+1]+=s*l,du(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,du(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,du(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function du(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function No(t,e){this.g=t,this.h=e}function Rc(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new No(Ps,Ps);if(Jt(t))return e=Rc(ot(t),e),new No(ot(e.g),ot(e.h));if(Jt(e))return e=Rc(t,ot(e)),new No(ot(e.g),e.h);if(30<t.g.length){if(Jt(t)||Jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Rp,r=e;0>=r.X(t);)n=d_(n),r=d_(r);var i=Xi(n,1),s=Xi(r,1);for(r=Xi(r,2),n=Xi(n,2);!Wn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Xi(r,1),n=Xi(n,1)}return e=Cc(t,i.R(e)),new No(i,e)}for(i=Ps;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Cn(n),o=s.R(e);Jt(o)||0<o.X(t);)n-=r,s=Cn(n),o=s.R(e);Wn(s)&&(s=Rp),i=i.add(s),t=Cc(t,o)}return new No(i,t)}N.gb=function(t){return Rc(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function d_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function Xi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new fe(i,t.h)}xc.prototype.createWebChannel=xc.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;gd.NO_ERROR=0;gd.TIMEOUT=8;gd.HTTP_ERROR=6;_I.COMPLETE="complete";wI.EventType=_l;_l.OPEN="a";_l.CLOSE="b";_l.ERROR="c";_l.MESSAGE="d";nt.prototype.listen=nt.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;gn.prototype.digest=gn.prototype.l;gn.prototype.reset=gn.prototype.reset;gn.prototype.update=gn.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=Cn;fe.fromString=t2;var x3=function(){return new xc},C3=function(){return md()},Kf=gd,R3=_I,P3=Wi,f_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fu=wI,b3=Me,N3=gn,bs=fe;const h_="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let co="10.4.0";/**
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
 */const ji=new ig("@firebase/firestore");function Do(){return ji.logLevel}function j(t,...e){if(ji.logLevel<=oe.DEBUG){const n=e.map(jg);ji.debug(`Firestore (${co}): ${t}`,...n)}}function rr(t,...e){if(ji.logLevel<=oe.ERROR){const n=e.map(jg);ji.error(`Firestore (${co}): ${t}`,...n)}}function qs(t,...e){if(ji.logLevel<=oe.WARN){const n=e.map(jg);ji.warn(`Firestore (${co}): ${t}`,...n)}}function jg(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: `+t;throw rr(e),new Error(e)}function Se(t,e){t||G()}function te(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ki{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class n2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class O3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L3{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ki,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ki)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new n2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new pt(e)}}class M3{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V3{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new M3(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j3{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new F3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function U3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class r2{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=U3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Ks(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ye(0,0))}static max(){return new J(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ka{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ka.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ka?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Ka{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const $3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Ka{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return $3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Ee.fromString(e))}static fromName(e){return new $(Ee.fromString(e).popFirst(5))}static empty(){return new $(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Ee(e.slice()))}}function z3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Kr(i,$.empty(),e)}function B3(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(J.min(),$.empty(),-1)}static max(){return new Kr(J.max(),$.empty(),-1)}}function H3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const W3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sl(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==W3)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Al(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ug{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ug.ae=-1;function Ad(t){return t==null}function Pc(t){return t===0&&1/t==-1/0}function K3(t){return typeof t=="number"&&Number.isInteger(t)&&!Pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function p_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function i2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hu(this.root,e,this.comparator,!0)}}class hu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new m_(this.data.getIterator())}getIteratorFrom(e){return new m_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class m_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new jt([])}unionWith(e){let n=new wt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class s2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new s2("Invalid base64 string: "+s):s}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const G3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=G3.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function $g(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zg(t){const e=t.mapValue.fields.__previous_value__;return $g(e)?zg(e):e}function Ga(t){const e=Gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class Q3{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$g(t)?4:Y3(t)?9007199254740991:10:G()}function Ln(t,e){if(t===e)return!0;const n=$i(t);if(n!==$i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Gr(i.timestampValue),a=Gr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ui(i.bytesValue).isEqual(Ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?Pc(o)===Pc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(p_(o)!==p_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ln(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function Ya(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=$i(t),r=$i(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return g_(t.timestampValue,e.timestampValue);case 4:return g_(Ga(t),Ga(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ui(s),l=Ui(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Be(s.latitude),Be(o.latitude));return a!==0?a:ce(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Gs(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===pu.mapValue&&o===pu.mapValue)return 0;if(s===pu.mapValue)return 1;if(o===pu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=ce(l[d],c[d]);if(f!==0)return f;const p=Gs(a[l[d]],u[c[d]]);if(p!==0)return p}return ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function g_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Gr(t),r=Gr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Qs(t){return Pp(t)}function Pp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Pp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Pp(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function y_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bp(t){return!!t&&"integerValue"in t}function Bg(t){return!!t&&"arrayValue"in t}function v_(t){return!!t&&"nullValue"in t}function __(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lu(t){return!!t&&"mapValue"in t}function aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Y3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(n)}setAll(e){let n=yt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=aa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(aa(this.value))}}function o2(t){const e=[];return qi(t.fields,(n,r)=>{const i=new yt([n]);if(Lu(r)){const s=o2(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
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
 */class gt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,J.min(),J.min(),J.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,J.min(),J.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,J.min(),J.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bc{constructor(e,n){this.position=e,this.inclusive=n}}function w_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function E_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function X3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class a2{}class We extends a2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Z3(e,n,r):n==="array-contains"?new nO(e,r):n==="in"?new rO(e,r):n==="not-in"?new iO(e,r):n==="array-contains-any"?new sO(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eO(e,r):new tO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&$i(this.value)===$i(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yn extends a2{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new yn(e,n)}matches(e){return l2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function l2(t){return t.op==="and"}function u2(t){return J3(t)&&l2(t)}function J3(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Np(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(u2(t))return t.filters.map(e=>Np(e)).join(",");{const e=t.filters.map(n=>Np(n)).join(",");return`${t.op}(${e})`}}function c2(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Ln(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&c2(o,i.filters[a]),!0):!1}(t,e):void G()}function d2(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(d2).join(" ,")+"}"}(t):"Filter"}class Z3 extends We{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class eO extends We{constructor(e,n){super(e,"in",n),this.keys=f2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tO extends We{constructor(e,n){super(e,"not-in",n),this.keys=f2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function f2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class nO extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bg(n)&&Ya(n.arrayValue,this.value)}}class rO extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ya(this.value.arrayValue,n)}}class iO extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ya(this.value.arrayValue,n)}}class sO extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ya(this.value.arrayValue,r))}}/**
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
 */class oO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function T_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oO(t,e,n,r,i,s,o)}function Hg(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Np(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ad(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.he=n}return e.he}function Wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!X3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!E_(t.startAt,e.startAt)&&E_(t.endAt,e.endAt)}function Dp(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class kl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function aO(t,e,n,r,i,s,o,a){return new kl(t,e,n,r,i,s,o,a)}function qg(t){return new kl(t)}function I_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function p2(t){return t.collectionGroup!==null}function ua(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=Kg(e),r=h2(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new la(n)),e.Pe.push(new la(yt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new la(yt.keyField(),s))}}}return e.Pe}function Dn(t){const e=te(t);return e.Ie||(e.Ie=lO(e,ua(t))),e.Ie}function lO(t,e){if(t.limitType==="F")return T_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new la(i.field,s)});const n=t.endAt?new bc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bc(t.startAt.position,t.startAt.inclusive):null;return T_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Op(t,e){e.getFirstInequalityField(),Kg(t);const n=t.filters.concat([e]);return new kl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lp(t,e,n){return new kl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kd(t,e){return Wg(Dn(t),Dn(e))&&t.limitType===e.limitType}function m2(t){return`${Hg(Dn(t))}|lt:${t.limitType}`}function Zi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>d2(i)).join(", ")}]`),Ad(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qs(i)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function xd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ua(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=w_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ua(r),i)||r.endAt&&!function(o,a,l){const u=w_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ua(r),i))}(t,e)}function uO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g2(t){return(e,n)=>{let r=!1;for(const i of ua(t)){const s=cO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cO(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Gs(l,u):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class fo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return i2(this.inner)}size(){return this.innerSize}}/**
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
 */const dO=new De($.comparator);function ir(){return dO}const y2=new De($.comparator);function Bo(...t){let e=y2;for(const n of t)e=e.insert(n.key,n);return e}function v2(t){let e=y2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ei(){return ca()}function _2(){return ca()}function ca(){return new fo(t=>t.toString(),(t,e)=>t.isEqual(e))}const fO=new De($.comparator),hO=new wt($.comparator);function ie(...t){let e=hO;for(const n of t)e=e.add(n);return e}const pO=new wt(ce);function mO(){return pO}/**
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
 */function w2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function E2(t){return{integerValue:""+t}}function gO(t,e){return K3(e)?E2(e):w2(t,e)}/**
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
 */class Cd{constructor(){this._=void 0}}function yO(t,e,n){return t instanceof Xa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$g(s)&&(s=zg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ja?I2(t,e):t instanceof Za?S2(t,e):function(i,s){const o=T2(i,s),a=S_(o)+S_(i.Te);return bp(o)&&bp(i.Te)?E2(a):w2(i.serializer,a)}(t,e)}function vO(t,e,n){return t instanceof Ja?I2(t,e):t instanceof Za?S2(t,e):n}function T2(t,e){return t instanceof Nc?function(r){return bp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xa extends Cd{}class Ja extends Cd{constructor(e){super(),this.elements=e}}function I2(t,e){const n=A2(e);for(const r of t.elements)n.some(i=>Ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class Za extends Cd{constructor(e){super(),this.elements=e}}function S2(t,e){let n=A2(e);for(const r of t.elements)n=n.filter(i=>!Ln(i,r));return{arrayValue:{values:n}}}class Nc extends Cd{constructor(e,n){super(),this.serializer=e,this.Te=n}}function S_(t){return Be(t.integerValue||t.doubleValue)}function A2(t){return Bg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class _O{constructor(e,n){this.field=e,this.transform=n}}function wO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ja&&i instanceof Ja||r instanceof Za&&i instanceof Za?Ks(r.elements,i.elements,Ln):r instanceof Nc&&i instanceof Nc?Ln(r.Te,i.Te):r instanceof Xa&&i instanceof Xa}(t.transform,e.transform)}class EO{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rd{}function k2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gg(t.key,pn.none()):new xl(t.key,t.data,pn.none());{const n=t.data,r=Pt.empty();let i=new wt(yt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ii(t.key,r,new jt(i.toArray()),pn.none())}}function TO(t,e,n){t instanceof xl?function(i,s,o){const a=i.value.clone(),l=k_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ii?function(i,s,o){if(!Mu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=k_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(x2(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function da(t,e,n,r){return t instanceof xl?function(s,o,a,l){if(!Mu(s.precondition,o))return a;const u=s.value.clone(),c=x_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ii?function(s,o,a,l){if(!Mu(s.precondition,o))return a;const u=x_(s.fieldTransforms,l,o),c=o.data;return c.setAll(x2(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Mu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function IO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=T2(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function A_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ks(r,i,(s,o)=>wO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xl extends Rd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ii extends Rd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function x2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function k_(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vO(o,a,n[i]))}return r}function x_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yO(s,o,e))}return r}class Gg extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SO extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_2();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=k2(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>A_(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>A_(n,r))}}class Qg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return fO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qg(e,n,r,i)}}/**
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
 */class kO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ae;function CO(t){switch(t){default:return G();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function C2(t){if(t===void 0)return rr("GRPC error has no .code"),k.UNKNOWN;switch(t){case $e.OK:return k.OK;case $e.CANCELLED:return k.CANCELLED;case $e.UNKNOWN:return k.UNKNOWN;case $e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case $e.INTERNAL:return k.INTERNAL;case $e.UNAVAILABLE:return k.UNAVAILABLE;case $e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case $e.NOT_FOUND:return k.NOT_FOUND;case $e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case $e.ABORTED:return k.ABORTED;case $e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case $e.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(ae=$e||($e={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RO(){return new TextEncoder}/**
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
 */const PO=new bs([4294967295,4294967295],0);function C_(t){const e=RO().encode(t),n=new N3;return n.update(e),new Uint8Array(n.digest())}function R_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bs([n,r],0),new bs([i,s],0)]}class Yg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(r<0)throw new Ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=bs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(bs.fromNumber(r)));return i.compare(PO)===1&&(i=new bs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=C_(e),[r,i]=R_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Yg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=C_(e),[r,i]=R_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pd(J.min(),i,new De(ce),ir(),ie())}}class Cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cl(r,n,ie(),ie(),ie())}}/**
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
 */class Vu{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class R2{constructor(e,n){this.targetId=e,this.ye=n}}class P2{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class P_{constructor(){this.we=0,this.Se=N_(),this.be=It.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ie(),n=ie(),r=ie();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Cl(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=N_()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class bO{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=ir(),this.Ue=b_(),this.We=new De(ce)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Dp(s))if(r===0){const o=new $(s.path);this.je(n,o,gt.newNoDocument(o,J.min()))}else Se(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ui(r).toUint8Array()}catch(l){if(l instanceof s2)return qs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Yg(o,i,s)}catch(l){return qs(l instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Dp(a.target)){const l=new $(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,gt.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=ie();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Pd(e,n,this.We,this.$e,r);return this.$e=ir(),this.Ue=b_(),this.We=new De(ce),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new P_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new wt(ce),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new P_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function b_(){return new De($.comparator)}function N_(){return new De($.comparator)}const NO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),OO=(()=>({and:"AND",or:"OR"}))();class LO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mp(t,e){return t.useProto3Json||Ad(e)?e:{value:e}}function Dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MO(t,e){return Dc(t,e.toTimestamp())}function On(t){return Se(!!t),J.fromTimestamp(function(n){const r=Gr(n);return new Ye(r.seconds,r.nanos)}(t))}function Xg(t,e){return function(r){return new Ee(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function N2(t){const e=Ee.fromString(t);return Se(M2(e)),e}function Vp(t,e){return Xg(t.databaseId,e.path)}function Gf(t,e){const n=N2(e);if(n.get(1)!==t.databaseId.projectId)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(D2(n))}function Fp(t,e){return Xg(t.databaseId,e)}function VO(t){const e=N2(t);return e.length===4?Ee.emptyPath():D2(e)}function jp(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function D2(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function D_(t,e,n){return{name:Vp(t,e),fields:n.value.mapValue.fields}}function FO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Se(c===void 0||typeof c=="string"),It.fromBase64String(c||"")):(Se(c===void 0||c instanceof Uint8Array),It.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:C2(u.code);return new F(c,u.message||"")}(o);n=new P2(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gf(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):J.min(),a=new Pt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Vu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gf(t,r.document),s=r.readTime?On(r.readTime):J.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gf(t,r.document),s=r.removedTargetIds||[];n=new Vu([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xO(i,s),a=r.targetId;n=new R2(a,o)}}return n}function jO(t,e){let n;if(e instanceof xl)n={update:D_(t,e.key,e.value)};else if(e instanceof Gg)n={delete:Vp(t,e.key)};else if(e instanceof ii)n={update:D_(t,e.key,e.data),updateMask:GO(e.fieldMask)};else{if(!(e instanceof SO))return G();n={verify:Vp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Za)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function UO(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(J.min())&&(o=On(s)),new EO(o,i.transformResults||[])}(n,e))):[]}function $O(t,e){return{documents:[Fp(t,e.path)]}}function zO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return L2(yn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:es(d.field),direction:WO(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Mp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function BO(t){let e=VO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=O2(d);return f instanceof yn&&u2(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(_){return new la(ts(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,Ad(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new bc(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,p=d.values||[];return new bc(p,f)}(n.endAt)),aO(e,i,o,s,a,"F",l,u)}function HO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ts(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>O2(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function WO(t){return NO[t]}function qO(t){return DO[t]}function KO(t){return OO[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return yt.fromServerFormat(t.fieldPath)}function L2(t){return t instanceof We?function(n){if(n.op==="=="){if(__(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NAN"}};if(v_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(__(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NAN"}};if(v_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(n.field),op:qO(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>L2(i));return r.length===1?r[0]:{compositeFilter:{op:KO(n.op),filters:r}}}(t):G()}function GO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function M2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Cr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QO{constructor(e){this.ht=e}}function YO(t){const e=BO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lp(e,e.limit,"L"):e}/**
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
 */class XO{constructor(){this.an=new JO}addToCollectionParentIndex(e,n){return this.an.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Kr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class JO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new wt(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new wt(Ee.comparator)).toArray()}}/**
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
 */class Ys{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ys(0)}static Ln(){return new Ys(-1)}}/**
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
 */class ZO{constructor(){this.changes=new fo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&da(r.mutation,i,jt.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ir();const o=ca(),a=function(){return ca()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ii)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),da(c.mutation,u,c.mutation.getFieldMask(),Ye.now())):o.set(u.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new eL(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ca();let i=new De((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||jt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=_2();c.forEach(f=>{if(!s.has(f)){const p=k2(n.get(f),r.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(Ei());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ie())).next(c=>({batchId:a,changes:v2(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Bo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Bo();return this.indexManager.getCollectionParents(e,s).next(a=>P.forEach(a,l=>{const u=function(d,f){return new kl(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,gt.newInvalidDocument(c)))});let a=Bo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&da(c.mutation,u,jt.empty(),Ye.now()),xd(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class nL{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return P.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:YO(i.bundledQuery),readTime:On(i.readTime)}}(n)),P.resolve()}}/**
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
 */class rL{constructor(){this.overlays=new De($.comparator),this.Pr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ei();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=Ei(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ei(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ei(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kO(n,r));let s=this.Pr.get(n);s===void 0&&(s=ie(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class Jg{constructor(){this.Ir=new wt(Ze.dr),this.Tr=new wt(Ze.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ze(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new $(new Ee([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new $(new Ee([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=ie();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return $.comparator(e.key,n.key)||ce(e.yr,n.yr)}static Er(e,n){return ce(e.yr,n.yr)||$.comparator(e.key,n.key)}}/**
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
 */class iL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new wt(Ze.dr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(ce);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new $(s),0);let a=new wt(ce);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),P.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return P.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.Sr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sL{constructor(e){this.Fr=e,this.docs=function(){return new De($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ir();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||H3(B3(c),r)<=0||(i.has(c.key)||xd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Mr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oL(this)}getSize(e){return P.resolve(this.size)}}class oL extends ZO{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class aL{constructor(e){this.persistence=e,this.Or=new fo(n=>Hg(n),Wg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Jg,this.targetCount=0,this.Lr=Ys.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),P.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Qn(n),P.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Br.containsKey(n))}}/**
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
 */class lL{constructor(e,n){this.kr={},this.overlays={},this.qr=new Ug(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new aL(this),this.indexManager=new XO,this.remoteDocumentCache=function(i){return new sL(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new QO(n),this.Ur=new nL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new iL(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new uL(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return P.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class uL extends q3{constructor(e){super(),this.currentSequenceNumber=e}}class Zg{constructor(e){this.persistence=e,this.jr=new Jg,this.Hr=null}static Jr(e){return new Zg(e)}get Yr(){if(this.Hr)return this.Hr;throw G()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),P.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Yr,r=>{const i=$.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return P.or([()=>P.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class ey{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ey(e,n.fromCache,r,i)}}/**
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
 */class cL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dL{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cL;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(Do()<=oe.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Zi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),P.resolve()):(Do()<=oe.DEBUG&&j("QueryEngine","Query:",Zi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(Do()<=oe.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Zi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):P.resolve())}Hi(e,n){if(I_(n))return P.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lp(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,Lp(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return I_(n)||i.isEqual(J.min())?P.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?P.resolve(null):(Do()<=oe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zi(n)),this.ts(e,o,n,z3(i,-1)).next(a=>a))})}Xi(e,n){let r=new wt(g2(e));return n.forEach((i,s)=>{xd(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return Do()<=oe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Zi(n)),this.ji.getDocumentsMatchingQuery(e,n,Kr.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class fL{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new De(ce),this.ss=new fo(s=>Hg(s),Wg),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tL(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function hL(t,e,n,r){return new fL(t,e,n,r)}async function V2(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function pL(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let p=P.resolve();return f.forEach(_=>{p=p.next(()=>c.getEntry(l,_)).next(w=>{const E=u.docVersions.get(_);Se(E!==null),w.version.compareTo(E)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function F2(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function mL(t,e){const n=te(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,d)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(It.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(w,E,g){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,c)&&a.push(n.Kr.updateTargetData(s,p))});let l=ir(),u=ie();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(gL(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(J.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(d=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function gL(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ir();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function yL(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Up(t,e,n){const r=te(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Al(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function O_(t,e,n){const r=te(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=te(l),f=d.ss.get(c);return f!==void 0?P.resolve(d.rs.get(f)):d.Kr.getTargetData(u,c)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(a=>(_L(r,uO(e),a),{documents:a,Ps:s})))}function _L(t,e,n){let r=t.os.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class L_{constructor(){this.activeTargetIds=mO()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wL{constructor(){this.ro=new L_,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new L_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EL{so(e){}shutdown(){}}/**
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
 */class M_{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mu=null;function Qf(){return mu===null?mu=function(){return 268435456+Math.round(2147483648*Math.random())}():mu++,"0x"+mu.toString(16)}/**
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
 */const TL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IL{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const ht="WebChannelConnection";class SL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Qf(),l=this.Do(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(j("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw qs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=TL[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Qf();return new Promise((o,a)=>{const l=new b3;l.setWithCredentials(!0),l.listenOnce(R3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Kf.NO_ERROR:const c=l.getResponseJson();j(ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Kf.TIMEOUT:j(ht,`RPC '${e}' ${s} timed out`),a(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case Kf.HTTP_ERROR:const d=l.getStatus();if(j(ht,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const _=function(E){const g=E.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(g)>=0?g:k.UNKNOWN}(p.status);a(new F(_,p.message))}else a(new F(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{j(ht,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);j(ht,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Qf(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=x3(),a=C3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");j(ht,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,p=!1;const _=new IL({ho:E=>{p?j(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(f||(j(ht,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),j(ht,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},Po:()=>d.close()}),w=(E,g,h)=>{E.listen(g,v=>{try{h(v)}catch(m){setTimeout(()=>{throw m},0)}})};return w(d,fu.EventType.OPEN,()=>{p||j(ht,`RPC '${e}' stream ${i} transport opened.`)}),w(d,fu.EventType.CLOSE,()=>{p||(p=!0,j(ht,`RPC '${e}' stream ${i} transport closed`),_.mo())}),w(d,fu.EventType.ERROR,E=>{p||(p=!0,qs(ht,`RPC '${e}' stream ${i} transport errored:`,E),_.mo(new F(k.UNAVAILABLE,"The operation could not be completed")))}),w(d,fu.EventType.MESSAGE,E=>{var g;if(!p){const h=E.data[0];Se(!!h);const v=h,m=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(m){j(ht,`RPC '${e}' stream ${i} received error:`,m);const I=m.status;let x=function(W){const z=$e[W];if(z!==void 0)return C2(z)}(I),C=m.message;x===void 0&&(x=k.INTERNAL,C="Unknown error status: "+I+" with message "+m.message),p=!0,_.mo(new F(x,C)),d.close()}else j(ht,`RPC '${e}' stream ${i} received:`,h),_.fo(h)}}),w(a,P3.STAT_EVENT,E=>{E.stat===f_.PROXY?j(ht,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===f_.NOPROXY&&j(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Vo()},0),_}}function Yf(){return typeof document<"u"?document:null}/**
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
 */function bd(t){return new LO(t,!0)}/**
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
 */class j2{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class U2{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new j2(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new F(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AL extends U2{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=FO(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?On(o.readTime):J.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=jp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Dp(l)?{documents:$O(s,l)}:{query:zO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=b2(s,o.resumeToken);const u=Mp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Dc(s,o.snapshotVersion.toTimestamp());const u=Mp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=HO(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=jp(this.serializer),n.removeTarget=e,this.n_(n)}}class kL extends U2{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=UO(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.T_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=jp(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jO(this.serializer,r))};this.n_(n)}}/**
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
 */class xL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(k.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(k.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class CL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(rr(n),this.p_=!1):j("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class RL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=te(l);u.F_.add(4),await Rl(u),u.O_.set("Unknown"),u.F_.delete(4),await Nd(u)}(this))})}),this.O_=new CL(r,i)}}async function Nd(t){if(Ki(t))for(const e of t.M_)await e(!0)}async function Rl(t){for(const e of t.M_)await e(!1)}function $2(t,e){const n=te(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),ry(n)?ny(n):ho(n).Yo()&&ty(n,e))}function z2(t,e){const n=te(t),r=ho(n);n.v_.delete(e),r.Yo()&&B2(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ki(n)&&n.O_.set("Unknown"))}function ty(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ho(t).l_(e)}function B2(t,e){t.N_.Le(e),ho(t).h_(e)}function ny(t){t.N_=new bO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),ho(t).start(),t.O_.y_()}function ry(t){return Ki(t)&&!ho(t).Jo()&&t.v_.size>0}function Ki(t){return te(t).F_.size===0}function H2(t){t.N_=void 0}async function PL(t){t.v_.forEach((e,n)=>{ty(t,e)})}async function bL(t,e){H2(t),ry(t)?(t.O_.b_(e),ny(t)):t.O_.set("Unknown")}async function NL(t,e,n){if(t.O_.set("Online"),e instanceof P2&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oc(t,r)}else if(e instanceof Vu?t.N_.Ge(e):e instanceof R2?t.N_.Xe(e):t.N_.He(e),!n.isEqual(J.min()))try{const r=await F2(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),B2(s,l);const d=new Cr(c.target,l,u,c.sequenceNumber);ty(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Oc(t,r)}}async function Oc(t,e,n){if(!Al(e))throw e;t.F_.add(1),await Rl(t),t.O_.set("Offline"),n||(n=()=>F2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Nd(t)})}function W2(t,e){return e().catch(n=>Oc(t,n,e))}async function Dd(t){const e=te(t),n=Qr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;DL(e);)try{const i=await yL(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,OL(e,i)}catch(i){await Oc(e,i)}q2(e)&&K2(e)}function DL(t){return Ki(t)&&t.C_.length<10}function OL(t,e){t.C_.push(e);const n=Qr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function q2(t){return Ki(t)&&!Qr(t).Jo()&&t.C_.length>0}function K2(t){Qr(t).start()}async function LL(t){Qr(t).A_()}async function ML(t){const e=Qr(t);for(const n of t.C_)e.d_(n.mutations)}async function VL(t,e,n){const r=t.C_.shift(),i=Qg.from(r,e,n);await W2(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dd(t)}async function FL(t,e){e&&Qr(t).I_&&await async function(r,i){if(function(o){return CO(o)&&o!==k.ABORTED}(i.code)){const s=r.C_.shift();Qr(r).Xo(),await W2(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dd(r)}}(t,e),q2(t)&&K2(t)}async function V_(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Ki(n);n.F_.add(3),await Rl(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Nd(n)}async function jL(t,e){const n=te(t);e?(n.F_.delete(2),await Nd(n)):e||(n.F_.add(2),await Rl(n),n.O_.set("Unknown"))}function ho(t){return t.B_||(t.B_=function(n,r,i){const s=te(n);return s.V_(),new AL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:PL.bind(null,t),Eo:bL.bind(null,t),c_:NL.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),ry(t)?ny(t):t.O_.set("Unknown")):(await t.B_.stop(),H2(t))})),t.B_}function Qr(t){return t.L_||(t.L_=function(n,r,i){const s=te(n);return s.V_(),new kL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:LL.bind(null,t),Eo:FL.bind(null,t),E_:ML.bind(null,t),T_:VL.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Dd(t)):(await t.L_.stop(),t.C_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class iy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new iy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sy(t,e){if(rr("AsyncQueue",`${e}: ${t}`),Al(t))return new F(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Bo(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class F_{constructor(){this.k_=new De($.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):G():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xs(e,n,Ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class UL{constructor(){this.Q_=void 0,this.listeners=[]}}class $L{constructor(){this.queries=new fo(e=>m2(e),kd),this.onlineState="Unknown",this.K_=new Set}}async function zL(t,e){const n=te(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new UL),i)try{s.Q_=await n.onListen(r)}catch(o){const a=sy(o,`Initialization of query '${Zi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&oy(n)}async function BL(t,e){const n=te(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function HL(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&oy(n)}function WL(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function oy(t){t.K_.forEach(e=>{e.next()})}class qL{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class G2{constructor(e){this.key=e}}class Q2{constructor(e){this.key=e}}class KL{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ie(),this.mutatedKeys=ie(),this.ua=g2(e),this.ca=new Ns(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new F_,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),p=xd(this.query,d)?d:null,_=!!f&&this.mutatedKeys.has(f.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?_!==w&&(r.track({type:3,doc:p}),E=!0):this.Ia(f,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.ua(p,l)>0||u&&this.ua(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),E=!0):f&&!p&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(f,p){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return _(f)-_(p)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new Xs(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new F_,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ie(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Q2(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new G2(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ie();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Xs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class GL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QL{constructor(e){this.key=e,this.ma=!1}}class YL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new fo(a=>m2(a),kd),this.pa=new Map,this.ya=new Set,this.wa=new De($.comparator),this.Sa=new Map,this.ba=new Jg,this.Da={},this.Ca=new Map,this.va=Ys.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function XL(t,e){const n=aM(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await vL(n.localStore,Dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await JL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&$2(n.remoteStore,o)}return i}async function JL(t,e,n,r,i){t.Ma=(d,f,p)=>async function(w,E,g,h){let v=E.view.ha(g);v.es&&(v=await O_(w.localStore,E.query,!1).then(({documents:x})=>E.view.ha(x,v)));const m=h&&h.targetChanges.get(E.targetId),I=E.view.applyChanges(v,w.isPrimaryClient,m);return U_(w,E.targetId,I.Ea),I.snapshot}(t,d,f,p);const s=await O_(t.localStore,e,!0),o=new KL(e,s.Ps),a=o.ha(s.documents),l=Cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);U_(t,n,u.Ea);const c=new GL(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function ZL(t,e){const n=te(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!kd(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Up(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),z2(n.remoteStore,r.targetId),$p(n,r.targetId)}).catch(Sl)):($p(n,r.targetId),await Up(n.localStore,r.targetId,!0))}async function eM(t,e,n){const r=lM(t);try{const i=await function(o,a){const l=te(o),u=Ye.now(),c=a.reduce((p,_)=>p.add(_.key),ie());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=ir(),w=ie();return l._s.getEntries(p,c).next(E=>{_=E,_.forEach((g,h)=>{h.isValidDocument()||(w=w.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,_)).next(E=>{d=E;const g=[];for(const h of a){const v=IO(h,d.get(h.key).overlayedDocument);v!=null&&g.push(new ii(h.key,v,o2(v.value.mapValue),pn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(E=>{f=E;const g=E.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(p,E.batchId,g)})}).then(()=>({batchId:f.batchId,changes:v2(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new De(ce)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Pl(r,i.changes),await Dd(r.remoteStore)}catch(i){const s=sy(i,"Failed to persist write");n.reject(s)}}async function Y2(t,e){const n=te(t);try{const r=await mL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?Se(o.ma):i.removedDocuments.size>0&&(Se(o.ma),o.ma=!1))}),await Pl(n,r,e)}catch(r){await Sl(r)}}function j_(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.listeners)f.U_(a)&&(u=!0)}),u&&oy(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tM(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new De($.comparator);o=o.insert(s,gt.newNoDocument(s,J.min()));const a=ie().add(s),l=new Pd(J.min(),new Map,new De(ce),o,a);await Y2(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),ay(r)}else await Up(r.localStore,e,!1).then(()=>$p(r,e,n)).catch(Sl)}async function nM(t,e){const n=te(t),r=e.batch.batchId;try{const i=await pL(n.localStore,e);J2(n,r,null),X2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pl(n,i)}catch(i){await Sl(i)}}async function rM(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Se(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);J2(r,e,n),X2(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pl(r,i)}catch(i){await Sl(i)}}function X2(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function J2(t,e,n){const r=te(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function $p(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Z2(t,r)})}function Z2(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(z2(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),ay(t))}function U_(t,e,n){for(const r of n)r instanceof G2?(t.ba.addReference(r.key,e),iM(t,r)):r instanceof Q2?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Z2(t,r.key)):G()}function iM(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ya.add(r),ay(t))}function ay(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new $(Ee.fromString(e)),r=t.va.next();t.Sa.set(r,new QL(n)),t.wa=t.wa.insert(n,r),$2(t.remoteStore,new Cr(Dn(qg(n.path)),r,"TargetPurposeLimboResolution",Ug.ae))}}async function Pl(t,e,n){const r=te(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ey.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=te(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>P.forEach(u,f=>P.forEach(f.Qi,p=>c.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>P.forEach(f.Ki,p=>c.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!Al(d))throw d;j("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const p=c.rs.get(f),_=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(_);c.rs=c.rs.insert(f,w)}}}(r.localStore,s))}async function sM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await V2(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new F(k.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pl(n,r.cs)}}function oM(t,e){const n=te(t),r=n.Sa.get(e);if(r&&r.ma)return ie().add(r.key);{let i=ie();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function aM(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tM.bind(null,e),e.fa.c_=HL.bind(null,e.eventManager),e.fa.xa=WL.bind(null,e.eventManager),e}function lM(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rM.bind(null,e),e}class $_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hL(this.persistence,new dL,e.initialUser,this.serializer)}createPersistence(e){return new lL(Zg.Jr,this.serializer)}createSharedClientState(e){return new wL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sM.bind(null,this.syncEngine),await jL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $L}()}createDatastore(e){const n=bd(e.databaseInfo.databaseId),r=function(s){return new SL(s)}(e.databaseInfo);return function(s,o,a,l){return new xL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new RL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>j_(this.syncEngine,n,0),function(){return M_.C()?new M_:new EL}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new YL(i,s,o,a,l,u);return c&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);j("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Rl(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class cM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class dM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=r2.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xf(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await V2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function z_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hM(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>V_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>V_(e.remoteStore,s)),t._onlineComponents=e}function fM(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function hM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fM(n))throw n;qs("Error using user provided cache. Falling back to memory cache: "+n),await Xf(t,new $_)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Xf(t,new $_);return t._offlineComponents}async function eS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await z_(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await z_(t,new uM))),t._onlineComponents}function pM(t){return eS(t).then(e=>e.syncEngine)}async function B_(t){const e=await eS(t),n=e.eventManager;return n.onListen=XL.bind(null,e.syncEngine),n.onUnlisten=ZL.bind(null,e.syncEngine),n}/**
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
 */function tS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const H_=new Map;/**
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
 */function nS(t,e,n){if(!n)throw new F(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mM(t,e,n,r){if(e===!0&&r===!0)throw new F(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W_(t){if(!$.isDocumentKey(t))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if($.isDocumentKey(t))throw new F(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Od(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Od(t);throw new F(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class K_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ld{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new D3;switch(r.type){case"firstParty":return new V3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H_.get(n);r&&(j("ComponentProvider","Removing Datastore"),H_.delete(n),r.terminate())}(this),Promise.resolve()}}function gM(t,e,n,r={}){var i;const s=(t=Ur(t,Ld))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=pt.MOCK_USER;else{a=WP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new F(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(u)}t._authCredentials=new O3(new n2(a,l))}}/**
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
 */class po{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new po(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class $r extends po{constructor(e,n,r){super(e,n,qg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new $(e))}withConverter(e){return new $r(this.firestore,e,this._path)}}function ly(t,e,...n){if(t=qe(t),nS("collection","path",e),t instanceof Ld){const r=Ee.fromString(e,...n);return q_(r),new $r(t,null,r)}{if(!(t instanceof Lt||t instanceof $r))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return q_(r),new $r(t.firestore,null,r)}}function Wo(t,e,...n){if(t=qe(t),arguments.length===1&&(e=r2.V()),nS("doc","path",e),t instanceof Ld){const r=Ee.fromString(e,...n);return W_(r),new Lt(t,null,new $(r))}{if(!(t instanceof Lt||t instanceof $r))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return W_(r),new Lt(t.firestore,t instanceof $r?t.converter:null,new $(r))}}/**
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
 */class yM{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new j2(this,"async_queue_retry"),this.ou=()=>{const n=Yf();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Yf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new ki;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Al(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=iy.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&G()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function G_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Js extends Ld{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new yM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iS(this),this._firestoreClient.terminate()}}function vM(t,e){const n=typeof t=="object"?t:yT(),r=typeof t=="string"?t:e||"(default)",i=og(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=BP("firestore");s&&gM(i,...s)}return i}function rS(t){return t._firestoreClient||iS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Q3(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,tS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new dM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zs(It.fromBase64String(e))}catch(n){throw new F(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zs(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Md{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vd{constructor(e){this._methodName=e}}/**
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
 */class uy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const _M=/^__.*__$/;class wM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new xl(e,this.data,n,this.fieldTransforms)}}class sS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class cy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new cy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Lc(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(oS(this.Tu)&&_M.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class EM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bd(e)}wu(e,n,r,i=!1){return new cy({Tu:e,methodName:n,yu:r,path:yt.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dy(t){const e=t._freezeSettings(),n=bd(t._databaseId);return new EM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TM(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);hy("Data must be an object, but it was:",o,r);const a=aS(r,o);let l,u;if(s.merge)l=new jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=zp(e,d,n);if(!o.contains(f))throw new F(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);uS(c,f)||c.push(f)}l=new jt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new wM(new Pt(a),l,u)}class Fd extends Vd{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fd}}class fy extends Vd{_toFieldTransform(e){return new _O(e.path,new Xa)}isEqual(e){return e instanceof fy}}function IM(t,e,n,r){const i=t.wu(1,e,n);hy("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();qi(r,(l,u)=>{const c=py(e,l,n);u=qe(u);const d=i.mu(c);if(u instanceof Fd)s.push(c);else{const f=bl(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new jt(s);return new sS(o,a,i.fieldTransforms)}function SM(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[zp(e,r,n)],l=[i];if(s.length%2!=0)throw new F(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(zp(e,s[f])),l.push(s[f+1]);const u=[],c=Pt.empty();for(let f=a.length-1;f>=0;--f)if(!uS(u,a[f])){const p=a[f];let _=l[f];_=qe(_);const w=o.mu(p);if(_ instanceof Fd)u.push(p);else{const E=bl(_,w);E!=null&&(u.push(p),c.set(p,E))}}const d=new jt(u);return new sS(c,d,o.fieldTransforms)}function AM(t,e,n,r=!1){return bl(n,t.wu(r?4:3,e))}function bl(t,e){if(lS(t=qe(t)))return hy("Unsupported field value:",e,t),aS(t,e);if(t instanceof Vd)return function(r,i){if(!oS(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=bl(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Dc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dc(i.serializer,s)}}if(r instanceof uy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zs)return{bytesValue:b2(i.serializer,r._byteString)};if(r instanceof Lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Od(r)}`)}(t,e)}function aS(t,e){const n={};return i2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(t,(r,i)=>{const s=bl(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof uy||t instanceof Zs||t instanceof Lt||t instanceof Vd)}function hy(t,e,n){if(!lS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Od(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function zp(t,e,n){if((e=qe(e))instanceof Md)return e._internalPath;if(typeof e=="string")return py(t,e);throw Lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const kM=new RegExp("[~\\*/\\[\\]]");function py(t,e,n){if(e.search(kM)>=0)throw Lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Md(...e.split("."))._internalPath}catch{throw Lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(k.INVALID_ARGUMENT,a+t+l)}function uS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(my("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xM extends cS{data(){return super.data()}}function my(t,e){return typeof e=="string"?py(t,e):e instanceof Md?e._internalPath:e._delegate._internalPath}/**
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
 */function CM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gy{}class RM extends gy{}function PM(t,e,...n){let r=[];e instanceof gy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof yy).length,a=s.filter(l=>l instanceof jd).length;if(o>1||o>0&&a>0)throw new F(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jd extends RM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jd(e,n,r)}_apply(e){const n=this._parse(e);return dS(e._query,n),new po(e.firestore,e.converter,Op(e._query,n))}_parse(e){const n=dy(e.firestore);return function(s,o,a,l,u,c,d){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new F(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Y_(d,c);const p=[];for(const _ of d)p.push(Q_(l,s,_));f={arrayValue:{values:p}}}else f=Q_(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Y_(d,c),f=AM(a,o,d,c==="in"||c==="not-in");return We.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bM(t,e,n){const r=e,i=my("where",t);return jd._create(i,r,n)}class yy extends gy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)dS(o,l),o=Op(o,l)}(e._query,n),new po(e.firestore,e.converter,Op(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Q_(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new F(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!p2(e)&&n.indexOf("/")!==-1)throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!$.isDocumentKey(r))throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return y_(t,new $(r))}if(n instanceof Lt)return y_(t,n._key);throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Od(n)}.`)}function Y_(t,e){if(!Array.isArray(t)||t.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dS(t,e){if(e.isInequality()){const r=Kg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new F(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=h2(t);s!==null&&NM(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function NM(t,e,n){if(!n.isEqual(e))throw new F(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class DM{convertValue(e,n="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new uy(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);Se(M2(r));const i=new Qa(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||rr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function OM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fS extends cS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(my("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fu extends fS{data(e={}){return super.data(e)}}class LM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fu(this._firestore,this._userDataWriter,r.key,r,new qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Fu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Fu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:MM(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function MM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class hS extends DM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function Jf(t,e,n,...r){t=Ur(t,Lt);const i=Ur(t.firestore,Js),s=dy(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof Md?SM(s,"updateDoc",t._key,e,n,r):IM(s,"updateDoc",t._key,e),vy(i,[o.toMutation(t._key,pn.exists(!0))])}function VM(t){return vy(Ur(t.firestore,Js),[new Gg(t._key,pn.none())])}function FM(t,e){const n=Ur(t.firestore,Js),r=Wo(t),i=OM(t.converter,e);return vy(n,[TM(dy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function pS(t,...e){var n,r,i;t=qe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||G_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(G_(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Lt)u=Ur(t.firestore,Js),c=qg(t._key.path),l={next:d=>{e[o]&&e[o](jM(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Ur(t,po);u=Ur(d.firestore,Js),c=d._query;const f=new hS(u);l={next:p=>{e[o]&&e[o](new LM(u,f,d,p))},error:e[o+1],complete:e[o+2]},CM(t._query)}return function(f,p,_,w){const E=new cM(w),g=new qL(p,E,_);return f.asyncQueue.enqueueAndForget(async()=>zL(await B_(f),g)),()=>{E.La(),f.asyncQueue.enqueueAndForget(async()=>BL(await B_(f),g))}}(rS(u),c,a,l)}function vy(t,e){return function(r,i){const s=new ki;return r.asyncQueue.enqueueAndForget(async()=>eM(await pM(r),i,s)),s.promise}(rS(t),e)}function jM(t,e,n){const r=n.docs.get(e._key),i=new hS(t);return new fS(t,i,e._key,r,new qo(n.hasPendingWrites,n.fromCache),e.converter)}function X_(){return new fy("serverTimestamp")}(function(e,n=!0){(function(i){co=i})(oo),Bs(new Li("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Js(new L3(r.getProvider("auth-internal")),new j3(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),jr(h_,"4.2.0",e),jr(h_,"4.2.0","esm2017")})();const UM={apiKey:"AIzaSyAapbXI_JNUFg4B6SSxGAeiaqQ5tkKMgjg",authDomain:"notes-3e6c6.firebaseapp.com",projectId:"notes-3e6c6",storageBucket:"notes-3e6c6.appspot.com",messagingSenderId:"293943718012",appId:"1:293943718012:web:e7ff1bb8ae2df9f5ec59f9"},mS=gT(UM),Ut=kD(mS),di=vM(mS);var gS={prefix:"far",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"]},$M={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},yS={prefix:"far",iconName:"eye",icon:[576,512,[128065],"f06e","M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]};const zM=()=>{const[t,e]=A.useState({email:"",password:"",confirmPassword:""}),[n,r]=A.useState(!1),[i,s]=A.useState(""),o=A.useRef(),a=A.useRef(),l=io(),u=new Sn,c=()=>{n?(o.current.type="password",a.current.type="password",r(!1)):(o.current.type="text",a.current.type="text",r(!0))};function d(_){const{name:w,value:E}=_.target;e(g=>({...g,[w]:E}))}async function f(_){if(_.preventDefault(),o.current.value===a.current.value)await u4(Ut,t.email,t.password).then(w=>(d4(Ut.currentUser).then(()=>{alert("Verification Link has been sent to your email")}),w)).catch(w=>console.log(w.message)),s("");else{s("Passwords do not match");return}}async function p(){await JT(Ut,u).then(_=>(l("/board"),_)).catch(_=>console.log(_.message))}return y.jsxs("div",{className:"w-full max-w-sm mx-auto",children:[y.jsxs("h4",{className:" text-3xl font-semibold mb-7",children:["Welcome to ",y.jsx("span",{className:"text-[#1450A3]",children:"Notelify"})]}),y.jsxs("form",{onSubmit:f,className:"flex flex-col gap-3",children:[y.jsxs("div",{className:"text-left w-full",children:[y.jsx("label",{htmlFor:"email",className:" font-medium",children:"Email"}),y.jsx("input",{required:!0,id:"email",name:"email",type:"email",value:t.email,onChange:d,placeholder:"Enter email address",className:"block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark"})]}),y.jsxs("div",{className:"relative text-left w-full",children:[y.jsx("label",{htmlFor:"password",className:" font-medium",children:"Password"}),y.jsx("input",{required:!0,ref:o,id:"password",name:"password",type:"password",value:t.password,onChange:d,placeholder:"Enter a password",className:"block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark"}),n?y.jsx(Pe,{onClick:c,icon:yS,className:"absolute bottom-0 right-0 text-dark p-[14px] bg-inherit cursor-pointer"}):y.jsx(Pe,{onClick:c,icon:gS,className:"absolute bottom-0 right-0 text-dark p-[14px] bg-inherit cursor-pointer"})]}),y.jsxs("div",{className:"text-left w-full",children:[y.jsx("label",{htmlFor:"confirm-password",className:" font-medium",children:"Confirm Password"}),y.jsx("input",{required:!0,ref:a,id:"confirm-password",name:"confirm-password",type:"password",onChange:d,placeholder:"Re-enter password",className:"block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark"}),i&&y.jsx("p",{className:" text-red-700 text-sm",children:i})]}),y.jsx("button",{className:"py-[10px] px-7 bg-[#1450A3] text-gray-50 self-center rounded mt-4 mb-1",children:"Create an account"})]}),y.jsxs("p",{className:"text-[15px]",children:["Already have an account? ",y.jsx(kr,{to:"signin",className:" hover:text-[#337CCF] hover:underline underline-offset-2",children:"Login"})]}),y.jsxs("div",{className:"w-full flex items-center justify-center gap-2 my-4",children:[y.jsx("span",{className:"w-1/2 h-[2px] bg-gray-500"}),y.jsx("span",{children:"OR"}),y.jsx("span",{className:"w-1/2 h-[2px] bg-gray-500"})]}),y.jsxs("button",{onClick:p,className:"w-full max-w-[300px] mx-auto flex items-center justify-center bg-[#1450A3] text-gray-50 py-3 rounded",children:[y.jsx("img",{src:aT,alt:"Google",className:" w-7 mr-7"}),"Continue with Goggle"]})]})},BM=()=>{const[t,e]=A.useState({email:"",password:""}),[n,r]=A.useState(""),[i,s]=A.useState(!1),o=A.useRef(),a=io(),l=()=>{i?(o.current.type="password",s(!1)):(o.current.type="text",s(!0))};function u(p){const{name:_,value:w}=p.target;e(E=>({...E,[_]:w})),console.log(Ut)}async function c(p){p.preventDefault(),await c4(Ut,t.email,t.password).then(_=>(a("/board"),_)).catch(_=>{_.message.replace("Firebase: Error ","")=="(auth/invalid-login-credentials)."?r("invalid-login-credentials"):r("failed-network-request")})}const d=new Sn;async function f(){await JT(Ut,d).then(p=>(a("/board"),p)).catch(p=>console.log(p.message))}return y.jsxs("div",{className:"w-full max-w-sm mx-auto",children:[y.jsx("h4",{className:" text-3xl font-semibold mb-7",children:"Log in to your account"}),n&&y.jsx("p",{className:" mb-3 text-red-600",children:n}),y.jsxs("form",{onSubmit:c,className:"flex flex-col gap-3",children:[y.jsxs("div",{className:"text-left w-full",children:[y.jsx("label",{htmlFor:"email",className:" font-medium",children:"Email"}),y.jsx("input",{required:!0,id:"email",name:"email",type:"email",value:t.email,onChange:u,placeholder:"Enter email address",className:"block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark"})]}),y.jsxs("div",{className:"relative text-left w-full",children:[y.jsx("label",{htmlFor:"password",className:" font-medium",children:"Password"}),y.jsx("input",{required:!0,ref:o,id:"password",name:"password",type:"password",value:t.password,onChange:u,placeholder:"Enter your password",className:"block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark"}),i?y.jsx(Pe,{onClick:l,icon:yS,className:"absolute bottom-0 right-0 text-dark p-[14px] bg-inherit cursor-pointer"}):y.jsx(Pe,{onClick:l,icon:gS,className:"absolute bottom-0 right-0 text-dark p-[14px] bg-inherit cursor-pointer"})]}),y.jsx("p",{onClick:()=>a("/signup/pswrd-reset"),className:"text-[13px] text-left text-[#FF6969] -mt-3 cursor-pointer",children:"Forgot password?"}),y.jsx("button",{className:"py-[10px] px-7 bg-[#1450A3] text-gray-50 self-center rounded mt-4",children:"Log In"}),y.jsxs("p",{className:"text-[15px]",children:["Don't have an account? ",y.jsx(kr,{to:"/signup",className:" hover:text-[#337CCF] hover:underline underline-offset-2",children:"Signup"})]})]}),y.jsxs("div",{className:"w-full flex items-center justify-center gap-2 my-4",children:[y.jsx("span",{className:"w-1/2 h-[2px] bg-gray-500"}),y.jsx("span",{children:"OR"}),y.jsx("span",{className:"w-1/2 h-[2px] bg-gray-500"})]}),y.jsxs("button",{onClick:f,className:"w-full max-w-[300px] mx-auto flex items-center justify-center bg-[#1450A3] text-gray-50 py-3 rounded",children:[y.jsx("img",{src:aT,alt:"Google",className:" w-7 mr-7"}),"Continue with Goggle"]})]})},vS=A.createContext(),mo=()=>A.useContext(vS),HM=({children:t})=>{const[e,n]=A.useState({title:"",body:"",favorite:!1}),[r,i]=A.useState(!1),[s,o]=A.useState(null),[a,l]=A.useState(!1);A.useState("");const u=ly(di,"notes");function c(m,I,x){n(C=>({...C,title:m,body:I})),i(!0),o(x)}function d(){i(!1),o(null)}function f(m="",I="",x=!1){n(C=>({...C,title:m,body:I,favorite:x})),i(!0)}function p(m){const{name:I,value:x}=m.target;n(C=>({...C,[I]:x}))}async function _(){await FM(u,{...e,author:{id:Ut.currentUser.uid},createdAt:X_()}).then(()=>{i(!1)}).catch(m=>console.log(m.message))}async function w(){const m=Wo(di,"notes",s);await Jf(m,{...e,author:{id:Ut.currentUser.uid},createdAt:X_()}).then(()=>{o(null),i(!1)}).catch(I=>console.log(I.message))}const E=async m=>{const I=Wo(di,"notes",m);await Jf(I,{favorite:!0}).then(()=>{}).catch(x=>console.log(x.message))},g=async m=>{const I=Wo(di,"notes",m);await Jf(I,{favorite:!1}).then(()=>{}).catch(x=>console.log(err.message))},h=async m=>{const I=Wo(di,"notes",m);await VM(I).then(()=>{i(!1),o(null)}).catch(x=>console.log(x.message))},v=()=>{m4(Ut)};return A.useEffect(()=>{p4(Ut,m=>m)},[]),y.jsx(vS.Provider,{value:{showSideBar:a,setShowSideBar:l,noteTexts:e,noteId:s,showNoteEditor:r,closeNoteEditor:d,openCurrentNoteEditor:c,openNewNoteEditor:f,addNewNote:_,updateNote:w,addToFavorite:E,removeFromFavorite:g,deleteNote:h,handleTextChange:p,logOut:v},children:t})},WM=({handleShow:t})=>{const{deleteNote:e,noteId:n}=mo();return y.jsx("div",{className:"absolute top-0 left-0 w-full h-full flex justify-center items-start",children:y.jsxs("div",{className:"relative w-full max-w-xs py-9 rounded shadow bg-light text-dark text-center mt-[40%] md:mt-[16%]",children:[y.jsx("button",{onClick:()=>t(!1),className:"absolute top-0 left-0 p-3 text-xl",children:y.jsx(Pe,{icon:kP})}),y.jsx("h6",{className:"mb-3",children:"Sure you want to delete?"}),y.jsx("button",{onClick:()=>e(n),className:" p-2 px-4 rounded border border-[#D80032] bg-transparent hover:bg-[#D80032]/[0.7] hover:text-light transition-all",children:"Confirm"})]})})},qM=()=>{const{darkMode:t}=qt(),{noteTexts:e,handleTextChange:n,closeNoteEditor:r,addNewNote:i,noteId:s,updateNote:o}=mo(),[a,l]=A.useState(!1);return A.useEffect(()=>{window.scrollTo(0,0)},[]),y.jsxs("section",{className:`absolute z-20 top-0 left-0 w-full h-full flex justify-center items-start pt-10 px-10 md:px-24  ${t?"bg-dark":"bg-light"}`,children:[a&&y.jsx(WM,{handleShow:l}),y.jsxs("div",{className:"w-full max-w-lg mx-auto flex flex-col",children:[y.jsxs("div",{className:"mb-5",children:[y.jsx("label",{htmlFor:"title",children:"Title"}),y.jsx("input",{onChange:n,value:e.title,name:"title",type:"text",id:"title",placeholder:"Give note a title",className:`w-full py-3 px-5 border rounded-[4px] mt-1 outline-none ${t?"bg-transparent":"bg-[#F1F5F9] border-dark"}`})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"body",children:"Body"}),y.jsx("textarea",{onChange:n,value:e.body,name:"body",id:"body",placeholder:"What's on your mind? ...",className:`resize-none w-full h-[300px] p-5 border rounded-[4px] mt-1 outline-none ${t?"bg-transparent":"bg-[#F1F5F9] border-dark"}`})]}),s&&y.jsx("button",{onClick:()=>l(!0),className:" self-end group",children:y.jsx(Pe,{icon:TP,className:"w-4 h-4 p-2 text-[#D80032] group-hover:text-[#D80032]/[0.6]"})}),y.jsxs("div",{className:"flex justify-center gap-7 mt-5",children:[y.jsx("button",{onClick:()=>r(),className:`border bg-transparent  rounded py-2 px-5 transition-all ${t?"":"border-dark"}`,children:"Cancel"}),s?y.jsx("button",{onClick:()=>o(),className:"border border-[#1A5D1A] bg-transparent hover:bg-[#1A5D1A]/[0.5] hover:text-light rounded py-2 px-6 transition-all",children:"Save Edit"}):y.jsx("button",{onClick:()=>i(),className:"border border-[#1A5D1A] bg-transparent hover:bg-[#1A5D1A]/[0.5] hover:text-light rounded py-2 px-6 transition-all",children:"Save"})]})]})]})},KM=()=>{const{darkMode:t}=qt(),{logOut:e,showSideBar:n,setShowSideBar:r}=mo(),i=io(),s=()=>(e(),i("/")),o=()=>{i("/board"),r(!1)},a=()=>{i("favorites"),r(!1)};return y.jsxs("section",{className:`absolute top-0 right-full md:right-auto md:bg-transparent z-20 md:z-auto md:relative w-4/5 md:w-full h-screen border-r-2 md:translate-x-0 transition-all ease-linear duration-300 ${n?"translate-x-full":""} ${t?"bg-dark":"bg-light"}`,children:[y.jsxs("header",{className:"p-[22px] md:p-7  md:py-[30px] border-b flex justify-between items-center",children:[y.jsxs("h3",{className:"text-2xl font-logo font-medium cursor-default text-[#1450A3] flex items-center gap-1",children:[y.jsx("span",{className:" font-semibold",children:"Notelify"}),y.jsx("span",{children:y.jsx(Pe,{icon:ng,className:" text-[21px]"})})]}),y.jsx(kE,{})]}),y.jsxs("nav",{className:"p-5 md:p-7 py-9 flex flex-col gap-7 h-5/6 items-start",children:[y.jsxs("div",{className:`w-full border border-gray-400 rounded-md px-4 py-2 flex items-center gap-3 ${t?"text-light":"text-dark"}`,children:[y.jsx(Pe,{icon:IP}),y.jsx("input",{disabled:!0,type:"search",placeholder:"Search",className:"w-full  outline-none bg-transparent"})]}),y.jsxs("button",{onClick:o,className:`w-full text-left px-4 py-2 flex items-center gap-3 border border-gray-400 rounded-md ${t?"text-[#E4F1FF]":"bg-[#BEFFF7]"}`,children:[y.jsx(Pe,{icon:CP}),y.jsx("span",{children:"All Notes"})]}),y.jsxs("button",{onClick:a,className:`w-full text-left px-4 py-2 flex items-center gap-3 border border-gray-400 rounded-md ${t?"text-[#E4F1FF]":"bg-[#BEFFF7]"}`,children:[y.jsx(Pe,{icon:oT}),y.jsx("span",{children:"Favorites"})]}),y.jsxs("button",{onClick:s,className:"flex items-center font-medium gap-2 mt-auto text-[#FF6969] ",children:[y.jsx(Pe,{icon:EP}),y.jsx("span",{children:"Logout"})]})]})]})},GM=()=>{const{darkMode:t}=qt(),{showNoteEditor:e,showSideBar:n,setShowSideBar:r}=mo(),[i,s]=A.useState(""),o=()=>{const a=new Date().getHours();a<12?s("Good Morning!"):a>12&&a<18?s("Good AfterNoon!"):s("Good Evening!")};return A.useEffect(()=>{o()},[]),y.jsxs("section",{className:`relative w-full min-h-screen grid grid-cols-4 font-article ${t?"dark":""}`,children:[y.jsx(KM,{}),e&&y.jsx(qM,{}),y.jsxs("div",{className:" col-span-4 md:col-span-3",children:[y.jsxs("header",{className:"p-5 md:p-7 px-8 md:px-10 border-b flex justify-between md:justify-start items-baseline",children:[y.jsx("h3",{className:"text-3xl font-medium font-['Alegreya']",children:i}),y.jsx("button",{onClick:()=>r(!n),className:"md:hidden",children:y.jsx(Pe,{icon:wP,className:" text-2xl"})})]}),y.jsx(zm,{})]})]})},QM=[{question:"Is the note-taking service free to use?",answer:"Yes, our note-taking service is free for all users."},{question:"Is my data secure and private?",answer:"Yes, we prioritize the security and privacy of your data. Our platform follows industry best practices to keep your notes safe and secure."},{question:"Is there a limit to the number of notes I can create?",answer:"No, there are no limits to the number of notes you can create."},{question:"How do I create an account and start using the note-taking platform?",answer:"To get started, simply visit our website and click on the 'Sign Up' button. Follow the instructions to create an account, and you'll be ready to start taking notes."},{question:"Can I access my notes on different devices?",answer:"Absolutely! Our platform is designed to sync your notes seamlessly across all your devices, including smartphones, tablets, and computers. Just log in to your account to access your notes from anywhere."},{question:"How do I get support or assistance if I have a problem?",answer:"You can reach out to our customer support team through the 'Contact Us' section on our website. We're here to help you with any questions or concerns you may have."}],YM=({question:t,answer:e})=>{const[n,r]=A.useState(!1),{darkMode:i}=qt();return y.jsxs("div",{className:`p-3 border-b-2 flex flex-col gap-3 shadow-md ${i?"":"border-[#1450A3]"}`,children:[y.jsxs("div",{className:"flex justify-between items-start font-semibold",children:[y.jsx("h5",{children:t}),y.jsx("button",{onClick:()=>r(!n),className:"p-1",children:y.jsx(Pe,{icon:SP,className:`transition-all duration-200 ${n?" -scale-100":""}`})})]}),n&&y.jsxs("article",{children:[" ",y.jsx("p",{children:e})," "]})]})},XM=()=>y.jsx("div",{className:"text-left w-full max-w-md mx-auto flex flex-col gap-1",children:QM.map((t,e)=>y.jsx(YM,{answer:t.answer,question:t.question},e))}),JM=()=>{const{darkMode:t}=qt();return A.useEffect(()=>{window.scrollTo(0,0)},[]),y.jsxs("section",{className:`w-full min-h-screen py-24 md:pt-32 lg:pt-32 px-12 lg:px-36 text-center ${t?"dark":""}`,children:[y.jsx("h3",{className:" font-semibold text-4xl md:text-4xl mb-7 md:mb-14 leading-normal",children:"Frequently Asked Questions"}),y.jsx(XM,{})]})},_S=({note:t,num:e})=>{const{darkMode:n}=qt(),{openCurrentNoteEditor:r,addToFavorite:i,removeFromFavorite:s}=mo(),[o]=A.useState(t.id),[a,l]=A.useState(t.favorite),u=e%2==0?"bg-[#BEFFF7]":"bg-[#FDE5D4]",c=e%2==0?"bg-[#FDE5EC]":"bg-[#E4F1FF]";function d(){l(!1),s(o)}function f(){l(!0),i(o)}return y.jsxs("article",{className:`relative w-[200px] aspect-square p-5 rounded-lg group cursor-pointer overflow-hidden text-dark ${n?c:u}`,children:[y.jsx("div",{className:"absolute w-full h-full top-0 left-0 z-10 bg-[#E4F1FF]/[0.8] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all duration-500",children:y.jsxs("button",{onClick:()=>r(t.title,t.body,o),className:"p-2 border border-dark rounded full flex items-center gap-2 opacity-0 group-hover:opacity-100",children:[y.jsx("span",{children:"Open"}),y.jsx(Pe,{icon:ng,className:" w-5 h-5 text-dark/[0.8] group-hover:text-dark transition-all  ease-linear"})]})}),y.jsx("h4",{className:" text-lg font-medium mb-1",children:t.title}),y.jsx("p",{className:" line-clamp-3 text-ellipsis overflow-hidden whitespace-break-spaces",children:t.body}),t.favorite?y.jsxs("button",{onClick:d,className:"absolute z-10 right-0 bottom-0 px-5 py-5 pb-3 cursor-default group",children:[" ",y.jsx(Pe,{icon:oT,className:" w-5 h-5 text-[#D80032] transition-all ease-linear"})]}):y.jsxs("button",{onClick:f,className:"absolute z-10 right-0 bottom-0 px-5 py-5 pb-3 cursor-default group",children:[" ",y.jsx(Pe,{icon:$M,className:" w-5 h-5 text-[#D80032] transition-all ease-linear"})]})]})},ZM=()=>{const[t,e]=A.useState([]),{darkMode:n}=qt(),{openNewNoteEditor:r,noteTexts:i}=mo(),s=ly(di,"notes"),o=()=>{pS(s,l=>{const u=l.docs.filter(c=>c.data().author.id==Ut.currentUser.uid);e(u.map(c=>({...c.data(),id:c.id})))})},a=t==null?void 0:t.sort((l,u)=>u.createdAt.seconds-l.createdAt.seconds);return A.useEffect(()=>{o()},[]),y.jsxs("section",{className:"w-full p-10 px-7 md:px-18",children:[y.jsxs("button",{onClick:()=>r(),className:`flex gap-3 items-center py-2 px-3 rounded-full ${n?"bg-[#E4F1FF] text-dark":"bg-[#BEFFF7]"}`,children:[y.jsx(Pe,{icon:AP}),y.jsx("span",{children:"Create new note"})]}),y.jsx("h4",{className:"my-5 text-2xl font-semibold",children:"Notes"}),y.jsx("div",{className:"flex justify-center md:justify-normal gap-3 md:gap-4 flex-wrap",children:t.length<1?y.jsx("h4",{children:"You have no notes"}):a.map((l,u)=>y.jsx(_S,{num:u,note:l},u))})]})},e5=()=>{const[t,e]=A.useState([]),n=ly(di,"notes"),r=PM(n,bM("favorite","==",!0)),i=()=>{pS(r,s=>{const o=s.docs.filter(a=>a.data().author.id==Ut.currentUser.uid);e(o.map(a=>({...a.data(),id:a.id})))})};return A.useEffect(()=>{i()},[]),y.jsxs("section",{className:"w-full p-3 px-7 md:px-18",children:[y.jsx("h4",{className:"my-5 text-2xl font-medium",children:"Favorite Notes"}),y.jsx("div",{className:"w-full flex justify-center md:justify-normal gap-3 md:gap-4 flex-wrap",children:t.length<1?y.jsx("h4",{children:"You have no favorite notes"}):t.map((s,o)=>y.jsx(_S,{num:o,note:s},o))})]})},t5=()=>{const t=A.useRef(),{darkMode:e}=qt(),n=r=>{r.preventDefault(),new FormData(t.current),t.current.reset()};return A.useEffect(()=>{window.scrollTo(0,0)},[]),y.jsxs("section",{className:`w-full min-h-screen py-24 md:pt-32 lg:pt-32 px-12 lg:px-36 font-article text-center ${e?"dark":""}`,children:[y.jsx("h4",{className:"text-3xl font-medium mb-7",children:"Got Inquries? Contact Us"}),y.jsxs("article",{className:"flex flex-col gap-2 mb-7",children:[y.jsx("p",{className:" max-w-md mx-auto",children:"For any assistance or inquiries related to our products or services, please contact our customer support team:"}),y.jsxs("ul",{className:"flex flex-col gap-1 tracking-[1px]",children:[y.jsx("li",{children:y.jsx("a",{href:"mailto:erobagacollins@gmail.com",children:"erobagacollins@gmail.com"})}),y.jsx("li",{children:y.jsx("a",{href:"tel:+2348064417586",children:"+234-806-6441-7586"})})]})]}),y.jsxs("div",{className:"w-full max-w-md mx-auto flex flex-col gap-10",children:[y.jsx("h5",{className:"text-2xl",children:"Send a Message"}),y.jsxs("form",{ref:t,onSubmit:n,className:"flex flex-col gap-7",children:[y.jsxs("div",{className:"w-full text-left",children:[y.jsx("label",{htmlFor:"email",children:"Email"}),y.jsx("input",{type:"email",name:"senderEmail",id:"email",className:`w-full py-3 px-5 border-b mt-1 bg-transparent outline-none ${e?"":"border-dark"}`})]}),y.jsxs("div",{className:"w-full text-left",children:[y.jsx("label",{htmlFor:"message",children:"Message"}),y.jsx("textarea",{name:"senderMessage",id:"message",className:`w-full h-[130px] py-3 px-5 border-b mt-1 bg-transparent outline-none resize-none ${e?"":"border-dark"}`})]}),y.jsx("button",{className:" self-center p-3 px-7 bg-[#1450A3] text-light",children:"SEND"})]})]})]})},n5=()=>{const[t,e]=A.useState(""),n=io(),r=async i=>{i.preventDefault(),l4(Ut,t).then(()=>{alert("Check your email for password reset link!"),e(""),n("..")}).catch(s=>console.log(s.message))};return y.jsxs("section",{className:"flex flex-col -mt-5 w-full max-w-[350px] mx-auto",children:[y.jsx(Pe,{onClick:()=>n(".."),icon:xP,className:" self-start text-xl p-2 mb-7 cursor-pointer"}),y.jsxs("form",{onSubmit:r,className:"flex flex-col gap-4 w-full",children:[y.jsx("p",{className:"text-left text-sm",children:"Enter the email address associated with your account and we'll send you a link to reset your password."}),y.jsxs("div",{className:"text-left w-full",children:[y.jsx("label",{htmlFor:"email",children:"Email"}),y.jsx("input",{required:!0,type:"email",id:"email",name:"email",value:t,onChange:i=>e(i.target.value),placeholder:"Enter email address",className:"block mt-1 border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark"})]}),y.jsx("button",{className:"bg-[#1450A3] py-3 rounded text-light",children:"Continue"})]})]})},r5=gC(Yh(y.jsxs(y.Fragment,{children:[y.jsxs(Gt,{path:"/",element:y.jsx(bP,{}),children:[y.jsx(Gt,{index:!0,element:y.jsx(OP,{})}),y.jsx(Gt,{path:"faqs",element:y.jsx(JM,{})}),y.jsx(Gt,{path:"contact",element:y.jsx(t5,{})}),y.jsxs(Gt,{path:"signup",element:y.jsx(LP,{}),children:[y.jsx(Gt,{index:!0,element:y.jsx(zM,{})}),y.jsx(Gt,{path:"signin",element:y.jsx(BM,{})}),y.jsx(Gt,{path:"pswrd-reset",element:y.jsx(n5,{})})]})]}),y.jsxs(Gt,{path:"/board",element:y.jsx(GM,{}),children:[y.jsx(Gt,{index:!0,element:y.jsx(ZM,{})}),y.jsx(Gt,{path:"favorites",element:y.jsx(e5,{})})]})]})));function i5(){return y.jsx(TC,{children:y.jsx(HM,{children:y.jsx(lC,{router:r5})})})}Zf.createRoot(document.getElementById("root")).render(y.jsx(Vc.StrictMode,{children:y.jsx(i5,{})}));

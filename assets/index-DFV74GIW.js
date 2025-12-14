(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function fy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gd={exports:{}},Oo={};var qx;function dy(){if(qx)return Oo;qx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var jx;function hy(){return jx||(jx=1,gd.exports=dy()),gd.exports}var j=hy(),vd={exports:{}},ot={};var Wx;function py(){if(Wx)return ot;Wx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function v(N,te,ye){this.props=N,this.context=te,this.refs=M,this.updater=ye||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,te){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,te,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=v.prototype;function w(N,te,ye){this.props=N,this.context=te,this.refs=M,this.updater=ye||b}var P=w.prototype=new U;P.constructor=w,E(P,v.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(N,te,ye){var Te=ye.ref;return{$$typeof:s,type:N,key:te,ref:Te!==void 0?Te:null,props:ye}}function C(N,te){return D(N.type,te,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ne(N){var te={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return te[ye]})}var le=/\/+/g;function fe(N,te){return typeof N=="object"&&N!==null&&N.key!=null?ne(""+N.key):te.toString(36)}function me(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(te){N.status==="pending"&&(N.status="fulfilled",N.value=te)},function(te){N.status==="pending"&&(N.status="rejected",N.reason=te)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,te,ye,Te,Pe){var ae=typeof N;(ae==="undefined"||ae==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case s:case e:ue=!0;break;case g:return ue=N._init,B(ue(N._payload),te,ye,Te,Pe)}}if(ue)return Pe=Pe(N),ue=Te===""?"."+fe(N,0):Te,G(Pe)?(ye="",ue!=null&&(ye=ue.replace(le,"$&/")+"/"),B(Pe,te,ye,"",function(qe){return qe})):Pe!=null&&(k(Pe)&&(Pe=C(Pe,ye+(Pe.key==null||N&&N.key===Pe.key?"":(""+Pe.key).replace(le,"$&/")+"/")+ue)),te.push(Pe)),1;ue=0;var De=Te===""?".":Te+":";if(G(N))for(var Ge=0;Ge<N.length;Ge++)Te=N[Ge],ae=De+fe(Te,Ge),ue+=B(Te,te,ye,ae,Pe);else if(Ge=y(N),typeof Ge=="function")for(N=Ge.call(N),Ge=0;!(Te=N.next()).done;)Te=Te.value,ae=De+fe(Te,Ge++),ue+=B(Te,te,ye,ae,Pe);else if(ae==="object"){if(typeof N.then=="function")return B(me(N),te,ye,Te,Pe);throw te=String(N),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ue}function $(N,te,ye){if(N==null)return N;var Te=[],Pe=0;return B(N,Te,"","",function(ae){return te.call(ye,ae,Pe++)}),Te}function W(N){if(N._status===-1){var te=N._result;te=te(),te.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=te)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Se={map:$,forEach:function(N,te,ye){$(N,function(){te.apply(this,arguments)},ye)},count:function(N){var te=0;return $(N,function(){te++}),te},toArray:function(N){return $(N,function(te){return te})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ot.Activity=x,ot.Children=Se,ot.Component=v,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=w,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},ot.cache=function(N){return function(){return N.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(N,te,ye){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Te=E({},N.props),Pe=N.key;if(te!=null)for(ae in te.key!==void 0&&(Pe=""+te.key),te)!Z.call(te,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&te.ref===void 0||(Te[ae]=te[ae]);var ae=arguments.length-2;if(ae===1)Te.children=ye;else if(1<ae){for(var ue=Array(ae),De=0;De<ae;De++)ue[De]=arguments[De+2];Te.children=ue}return D(N.type,Pe,Te)},ot.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ot.createElement=function(N,te,ye){var Te,Pe={},ae=null;if(te!=null)for(Te in te.key!==void 0&&(ae=""+te.key),te)Z.call(te,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Pe[Te]=te[Te]);var ue=arguments.length-2;if(ue===1)Pe.children=ye;else if(1<ue){for(var De=Array(ue),Ge=0;Ge<ue;Ge++)De[Ge]=arguments[Ge+2];Pe.children=De}if(N&&N.defaultProps)for(Te in ue=N.defaultProps,ue)Pe[Te]===void 0&&(Pe[Te]=ue[Te]);return D(N,ae,Pe)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(N){return{$$typeof:h,render:N}},ot.isValidElement=k,ot.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:W}},ot.memo=function(N,te){return{$$typeof:p,type:N,compare:te===void 0?null:te}},ot.startTransition=function(N){var te=z.T,ye={};z.T=ye;try{var Te=N(),Pe=z.S;Pe!==null&&Pe(ye,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(L,pe)}catch(ae){pe(ae)}finally{te!==null&&ye.types!==null&&(te.types=ye.types),z.T=te}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(N){return z.H.use(N)},ot.useActionState=function(N,te,ye){return z.H.useActionState(N,te,ye)},ot.useCallback=function(N,te){return z.H.useCallback(N,te)},ot.useContext=function(N){return z.H.useContext(N)},ot.useDebugValue=function(){},ot.useDeferredValue=function(N,te){return z.H.useDeferredValue(N,te)},ot.useEffect=function(N,te){return z.H.useEffect(N,te)},ot.useEffectEvent=function(N){return z.H.useEffectEvent(N)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(N,te,ye){return z.H.useImperativeHandle(N,te,ye)},ot.useInsertionEffect=function(N,te){return z.H.useInsertionEffect(N,te)},ot.useLayoutEffect=function(N,te){return z.H.useLayoutEffect(N,te)},ot.useMemo=function(N,te){return z.H.useMemo(N,te)},ot.useOptimistic=function(N,te){return z.H.useOptimistic(N,te)},ot.useReducer=function(N,te,ye){return z.H.useReducer(N,te,ye)},ot.useRef=function(N){return z.H.useRef(N)},ot.useState=function(N){return z.H.useState(N)},ot.useSyncExternalStore=function(N,te,ye){return z.H.useSyncExternalStore(N,te,ye)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.0",ot}var Yx;function Yh(){return Yx||(Yx=1,vd.exports=py()),vd.exports}var he=Yh();const fv=fy(he);var _d={exports:{}},Po={},Sd={exports:{}},yd={};var Zx;function my(){return Zx||(Zx=1,(function(s){function e(B,$){var W=B.length;B.push($);e:for(;0<W;){var pe=W-1>>>1,Se=B[pe];if(0<l(Se,$))B[pe]=$,B[W]=Se,W=pe;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var $=B[0],W=B.pop();if(W!==$){B[0]=W;e:for(var pe=0,Se=B.length,N=Se>>>1;pe<N;){var te=2*(pe+1)-1,ye=B[te],Te=te+1,Pe=B[Te];if(0>l(ye,W))Te<Se&&0>l(Pe,ye)?(B[pe]=Pe,B[Te]=W,pe=Te):(B[pe]=ye,B[te]=W,pe=te);else if(Te<Se&&0>l(Pe,W))B[pe]=Pe,B[Te]=W,pe=Te;else break e}}return $}function l(B,$){var W=B.sortIndex-$.sortIndex;return W!==0?W:B.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,x=null,_=3,y=!1,b=!1,E=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var $=i(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=B)r(p),$.sortIndex=$.expirationTime,e(m,$);else break;$=i(p)}}function G(B){if(E=!1,P(B),!b)if(i(m)!==null)b=!0,L||(L=!0,ne());else{var $=i(p);$!==null&&me(G,$.startTime-B)}}var L=!1,z=-1,Z=5,D=-1;function C(){return M?!0:!(s.unstable_now()-D<Z)}function k(){if(M=!1,L){var B=s.unstable_now();D=B;var $=!0;try{e:{b=!1,E&&(E=!1,U(z),z=-1),y=!0;var W=_;try{t:{for(P(B),x=i(m);x!==null&&!(x.expirationTime>B&&C());){var pe=x.callback;if(typeof pe=="function"){x.callback=null,_=x.priorityLevel;var Se=pe(x.expirationTime<=B);if(B=s.unstable_now(),typeof Se=="function"){x.callback=Se,P(B),$=!0;break t}x===i(m)&&r(m),P(B)}else r(m);x=i(m)}if(x!==null)$=!0;else{var N=i(p);N!==null&&me(G,N.startTime-B),$=!1}}break e}finally{x=null,_=W,y=!1}$=void 0}}finally{$?ne():L=!1}}}var ne;if(typeof w=="function")ne=function(){w(k)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,fe=le.port2;le.port1.onmessage=k,ne=function(){fe.postMessage(null)}}else ne=function(){v(k,0)};function me(B,$){z=v(function(){B(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(B){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var W=_;_=$;try{return B()}finally{_=W}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=_;_=B;try{return $()}finally{_=W}},s.unstable_scheduleCallback=function(B,$,W){var pe=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pe+W:pe):W=pe,B){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=W+Se,B={id:g++,callback:$,priorityLevel:B,startTime:W,expirationTime:Se,sortIndex:-1},W>pe?(B.sortIndex=W,e(p,B),i(m)===null&&B===i(p)&&(E?(U(z),z=-1):E=!0,me(G,W-pe))):(B.sortIndex=Se,e(m,B),b||y||(b=!0,L||(L=!0,ne()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var $=_;return function(){var W=_;_=$;try{return B.apply(this,arguments)}finally{_=W}}}})(yd)),yd}var Qx;function xy(){return Qx||(Qx=1,Sd.exports=my()),Sd.exports}var Md={exports:{}},Un={};var Kx;function gy(){if(Kx)return Un;Kx=1;var s=Yh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Un.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.0",Un}var Jx;function vy(){if(Jx)return Md.exports;Jx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Md.exports=gy(),Md.exports}var $x;function _y(){if($x)return Po;$x=1;var s=xy(),e=Yh(),i=vy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,o=d;break}if(T===o){S=!0,o=u,a=d;break}T=T.sibling}if(!S){for(T=d.child;T;){if(T===a){S=!0,a=d,o=u;break}if(T===o){S=!0,o=d,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),w=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case L:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case w:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var me=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pe=[],Se=-1;function N(t){return{current:t}}function te(t){0>Se||(t.current=pe[Se],pe[Se]=null,Se--)}function ye(t,n){Se++,pe[Se]=t.current,t.current=n}var Te=N(null),Pe=N(null),ae=N(null),ue=N(null);function De(t,n){switch(ye(ae,n),ye(Pe,t),ye(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?px(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=px(n),t=mx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Te),ye(Te,t)}function Ge(){te(Te),te(Pe),te(ae)}function qe(t){t.memoizedState!==null&&ye(ue,t);var n=Te.current,a=mx(n,t.type);n!==a&&(ye(Pe,t),ye(Te,a))}function ct(t){Pe.current===t&&(te(Te),te(Pe)),ue.current===t&&(te(ue),Do._currentValue=W)}var an,ht;function Rt(t){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+t+ht}var F=!1;function pt(t,n){if(!t||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(oe){var ie=oe}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(oe){ie=oe}t.call(ve.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],T=d[1];if(S&&T){var I=S.split(`
`),J=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===J.length)for(o=I.length-1,u=J.length-1;1<=o&&0<=u&&I[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==J[u]){var de=`
`+I[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Rt(a):""}function xt(t,n){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return Rt("Activity");default:return""}}function Bt(t){try{var n="",a=null;do n+=xt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ve=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,Ze=s.unstable_cancelCallback,rt=s.unstable_shouldYield,O=s.unstable_requestPaint,A=s.unstable_now,K=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,ce=s.unstable_NormalPriority,We=s.unstable_LowPriority,Ne=s.unstable_IdlePriority,Je=s.log,je=s.unstable_setDisableYieldValue,be=null,Ee=null;function Ye(t){if(typeof Je=="function"&&je(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,t)}catch{}}var ke=Math.clz32?Math.clz32:H,Be=Math.log,it=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Be(t)/it|0)|0}var Ue=256,Ce=262144,we=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=Ae(o):(S&=T,S!==0?u=Ae(S):a||(a=T&~t,a!==0&&(u=Ae(a))))):(T=o&~d,T!==0?u=Ae(T):S!==0?u=Ae(S):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function Ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qn(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var de=31-ke(a),ve=1<<de;T[de]=0,I[de]=-1;var ie=J[de];if(ie!==null)for(J[de]=null,de=0;de<ie.length;de++){var oe=ie[de];oe!==null&&(oe.lane&=-536870913)}a&=~ve}o!==0&&rl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function rl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Gs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ke(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Vs(t,n){var a=n&-n;return a=(a&42)!==0?1:vi(a),(a&(t.suspendedLanes|n))!==0?0:a}function vi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ks(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:Ix(t.type))}function Xs(t,n){var a=$.p;try{return $.p=t,n()}finally{$.p=a}}var jn=Math.random().toString(36).slice(2),ln="__reactFiber$"+jn,pn="__reactProps$"+jn,Hi="__reactContainer$"+jn,Fr="__reactEvents$"+jn,uu="__reactListeners$"+jn,fu="__reactHandles$"+jn,sl="__reactResources$"+jn,sr="__reactMarker$"+jn;function qs(t){delete t[ln],delete t[pn],delete t[Fr],delete t[uu],delete t[fu]}function Ma(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Mx(t);t!==null;){if(a=t[ln])return a;t=Mx(t)}return n}t=a,a=t.parentNode}return null}function R(t){if(t=t[ln]||t[Hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function re(t){var n=t[sl];return n||(n=t[sl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ee(t){t[sr]=!0}var Y=new Set,Re={};function Le(t,n){ze(t,n),ze(t+"Capture",n)}function ze(t,n){for(Re[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},nt={};function Qe(t){return Ve.call(nt,t)?!0:Ve.call(et,t)?!1:Fe.test(t)?nt[t]=!0:(et[t]=!0,!1)}function ut(t,n,a){if(Qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Tt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function wt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Mt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=Pt(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function bt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Sn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ba=/[\n"\\]/g;function Wt(t){return t.replace(ba,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gi(t,n,a,o,u,d,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Mt(n)):t.value!==""+Mt(n)&&(t.value=""+Mt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yn(t,S,Mt(n)):a!=null?yn(t,S,Mt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Mt(T):t.removeAttribute("name")}function Yt(t,n,a,o,u,d,S,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){qt(t);return}a=a!=null?""+Mt(a):"",n=n!=null?""+Mt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),qt(t)}function yn(t,n,a){n==="number"&&Sn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Mt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Mn(t,n,a){if(n!=null&&(n=""+Mt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Mt(a):""}function En(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(me(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Mt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function Ri(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function dp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&fp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&fp(t,d,n[d])}function du(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),l_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(t){return l_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var hu=null;function pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,Gr=null;function hp(t){var n=R(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Gi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[pn]||null;if(!u)throw Error(r(90));Gi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&bt(o)}break e;case"textarea":Mn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(t,!!a.multiple,n,!1)}}}var mu=!1;function pp(t,n,a){if(mu)return t(n,a);mu=!0;try{var o=t(n);return o}finally{if(mu=!1,(Hr!==null||Gr!==null)&&(Yl(),Hr&&(n=Hr,t=Gr,Gr=Hr=null,hp(n),t)))for(n=0;n<t.length;n++)hp(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Xi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{xu=!1}var Aa=null,gu=null,ll=null;function mp(){if(ll)return ll;var t,n=gu,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return ll=u.slice(t,1<o?1-o:void 0)}function cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function xp(){return!1}function zn(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ul:xp,this.isPropagationStopped=xp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=zn(or),Ys=x({},or,{view:0,detail:0}),c_=zn(Ys),vu,_u,Zs,dl=x({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(vu=t.screenX-Zs.screenX,_u=t.screenY-Zs.screenY):_u=vu=0,Zs=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),gp=zn(dl),u_=x({},dl,{dataTransfer:0}),f_=zn(u_),d_=x({},Ys,{relatedTarget:0}),Su=zn(d_),h_=x({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),p_=zn(h_),m_=x({},or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x_=zn(m_),g_=x({},or,{data:0}),vp=zn(g_),v_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},__={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=S_[t])?!!n[t]:!1}function yu(){return y_}var M_=x({},Ys,{key:function(t){if(t.key){var n=v_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?__[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b_=zn(M_),A_=x({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=zn(A_),E_=x({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),T_=zn(E_),R_=x({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=zn(R_),w_=x({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D_=zn(w_),U_=x({},or,{newState:0,oldState:0}),L_=zn(U_),N_=[9,13,27,32],Mu=Xi&&"CompositionEvent"in window,Qs=null;Xi&&"documentMode"in document&&(Qs=document.documentMode);var O_=Xi&&"TextEvent"in window&&!Qs,Sp=Xi&&(!Mu||Qs&&8<Qs&&11>=Qs),yp=" ",Mp=!1;function bp(t,n){switch(t){case"keyup":return N_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function P_(t,n){switch(t){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(Mp=!0,yp);case"textInput":return t=n.data,t===yp&&Mp?null:t;default:return null}}function B_(t,n){if(Vr)return t==="compositionend"||!Mu&&bp(t,n)?(t=mp(),ll=gu=Aa=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sp&&n.locale!=="ko"?null:n.data;default:return null}}var z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!z_[t.type]:n==="textarea"}function Tp(t,n,a,o){Hr?Gr?Gr.push(o):Gr=[o]:Hr=o,n=tc(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ks=null,Js=null;function I_(t){lx(t,0)}function hl(t){var n=X(t);if(bt(n))return t}function Rp(t,n){if(t==="change")return n}var Cp=!1;if(Xi){var bu;if(Xi){var Au="oninput"in document;if(!Au){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Au=typeof wp.oninput=="function"}bu=Au}else bu=!1;Cp=bu&&(!document.documentMode||9<document.documentMode)}function Dp(){Ks&&(Ks.detachEvent("onpropertychange",Up),Js=Ks=null)}function Up(t){if(t.propertyName==="value"&&hl(Js)){var n=[];Tp(n,Js,t,pu(t)),pp(I_,n)}}function F_(t,n,a){t==="focusin"?(Dp(),Ks=n,Js=a,Ks.attachEvent("onpropertychange",Up)):t==="focusout"&&Dp()}function H_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(Js)}function G_(t,n){if(t==="click")return hl(n)}function V_(t,n){if(t==="input"||t==="change")return hl(n)}function k_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:k_;function $s(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ve.call(n,u)||!Wn(t[u],n[u]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,n){var a=Lp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function Op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Sn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Sn(t.document)}return n}function Eu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var X_=Xi&&"documentMode"in document&&11>=document.documentMode,kr=null,Tu=null,eo=null,Ru=!1;function Bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||kr==null||kr!==Sn(o)||(o=kr,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$s(eo,o)||(eo=o,o=tc(Tu,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=kr)))}function lr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},Cu={},zp={};Xi&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function cr(t){if(Cu[t])return Cu[t];if(!Xr[t])return t;var n=Xr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Cu[t]=n[a];return t}var Ip=cr("animationend"),Fp=cr("animationiteration"),Hp=cr("animationstart"),q_=cr("transitionrun"),j_=cr("transitionstart"),W_=cr("transitioncancel"),Gp=cr("transitionend"),Vp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function _i(t,n){Vp.set(t,n),Le(n,[t])}var pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],qr=0,Du=0;function ml(){for(var t=qr,n=Du=qr=0;n<t;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var d=ri[n];if(ri[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&kp(a,u,d)}}function xl(t,n,a,o){ri[qr++]=t,ri[qr++]=n,ri[qr++]=a,ri[qr++]=o,Du|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uu(t,n,a,o){return xl(t,n,a,o),gl(t)}function ur(t,n){return xl(t,null,null,n),gl(t)}function kp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-ke(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function gl(t){if(50<bo)throw bo=0,Gf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function Y_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,o){return new Y_(t,n,a,o)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vl(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Lu(t)&&(S=1);else if(typeof t=="string")S=$S(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Yn(31,a,n,u),t.elementType=D,t.lanes=d,t;case E:return fr(a.children,u,d,n);case M:S=8,u|=24;break;case v:return t=Yn(12,a,n,u|2),t.elementType=v,t.lanes=d,t;case G:return t=Yn(13,a,n,u),t.elementType=G,t.lanes=d,t;case L:return t=Yn(19,a,n,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:S=10;break e;case U:S=9;break e;case P:S=11;break e;case z:S=14;break e;case Z:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Yn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function fr(t,n,a,o){return t=Yn(7,t,o,n),t.lanes=a,t}function Nu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function qp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Ou(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=jp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Bt(n)},jp.set(t,n),n)}return{value:t,source:n,stack:Bt(n)}}var Wr=[],Yr=0,_l=null,to=0,oi=[],li=0,Ea=null,Ci=1,wi="";function ji(t,n){Wr[Yr++]=to,Wr[Yr++]=_l,_l=t,to=n}function Wp(t,n,a){oi[li++]=Ci,oi[li++]=wi,oi[li++]=Ea,Ea=t;var o=Ci;t=wi;var u=32-ke(o)-1;o&=~(1<<u),a+=1;var d=32-ke(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ci=1<<32-ke(n)+u|a<<u|o,wi=d+t}else Ci=1<<d|a<<u|o,wi=t}function Pu(t){t.return!==null&&(ji(t,1),Wp(t,1,0))}function Bu(t){for(;t===_l;)_l=Wr[--Yr],Wr[Yr]=null,to=Wr[--Yr],Wr[Yr]=null;for(;t===Ea;)Ea=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null,Ci=oi[--li],oi[li]=null}function Yp(t,n){oi[li++]=Ci,oi[li++]=wi,oi[li++]=Ea,Ci=n.id,wi=n.overflow,Ea=t}var Tn=null,Zt=null,At=!1,Ta=null,ci=!1,zu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(si(n,t)),zu}function Zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[pn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)vt(Eo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Yt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||dx(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(t,!0)}function Qp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Zr(t){if(t!==Tn)return!1;if(!At)return Qp(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nd(t.type,t.memoizedProps)),a=!a),a&&Zt&&Ra(t),Qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=yx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=yx(t)}else n===27?(n=Zt,Ga(t.type)?(t=od,od=null,Zt=t):Zt=n):Zt=Tn?fi(t.stateNode.nextSibling):null;return!0}function dr(){Zt=Tn=null,At=!1}function Iu(){var t=Ta;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),Ta=null),t}function no(t){Ta===null?Ta=[t]:Ta.push(t)}var Fu=N(null),hr=null,Wi=null;function Ca(t,n,a){ye(Fu,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=Fu.current,te(Fu)}function Hu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Gu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Hu(d.return,a,t),o||(S=null);break e}d=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Hu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Qr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Wn(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===ue.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Gu(n,t,a,o),n.flags|=262144}function Sl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){hr=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Kp(hr,t)}function yl(t,n){return hr===null&&pr(t),Kp(t,n)}function Kp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(t===null)throw Error(r(308));Wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Wi=Wi.next=n;return a}var Z_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Q_=s.unstable_scheduleCallback,K_=s.unstable_NormalPriority,cn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new Z_,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&Q_(K_,function(){t.controller.abort()})}var ao=null,ku=0,Kr=0,Jr=null;function J_(t,n){if(ao===null){var a=ao=[];ku=0,Kr=Wf(),Jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,n.then(Jp,Jp),n}function Jp(){if(--ku===0&&ao!==null){Jr!==null&&(Jr.status="fulfilled");var t=ao;ao=null,Kr=0,Jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var $p=B.S;B.S=function(t,n){B0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&J_(t,n),$p!==null&&$p(t,n)};var mr=N(null);function Xu(){var t=mr.current;return t!==null?t:jt.pooledCache}function Ml(t,n){n===null?ye(mr,mr.current):ye(mr,n.pool)}function em(){var t=Xu();return t===null?null:{parent:cn._currentValue,pool:t}}var $r=Error(r(460)),qu=Error(r(474)),bl=Error(r(542)),Al={then:function(){}};function tm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t}throw gr=n,$r}}function xr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,$r):a}}var gr=null;function im(){if(gr===null)throw Error(r(459));var t=gr;return gr=null,t}function am(t){if(t===$r||t===bl)throw Error(r(483))}var es=null,ro=0;function El(t){var n=ro;return ro+=1,es===null&&(es=[]),nm(es,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){function n(q,V){if(t){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function o(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=qi(q,V),q.index=0,q.sibling=null,q}function d(q,V,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function S(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,Q,xe){return V===null||V.tag!==6?(V=Nu(Q,q.mode,xe),V.return=q,V):(V=u(V,Q),V.return=q,V)}function I(q,V,Q,xe){var Ke=Q.type;return Ke===E?de(q,V,Q.props.children,xe,Q.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&xr(Ke)===V.type)?(V=u(V,Q.props),so(V,Q),V.return=q,V):(V=vl(Q.type,Q.key,Q.props,null,q.mode,xe),so(V,Q),V.return=q,V)}function J(q,V,Q,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Ou(Q,q.mode,xe),V.return=q,V):(V=u(V,Q.children||[]),V.return=q,V)}function de(q,V,Q,xe,Ke){return V===null||V.tag!==7?(V=fr(Q,q.mode,xe,Ke),V.return=q,V):(V=u(V,Q),V.return=q,V)}function ve(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Nu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Q=vl(V.type,V.key,V.props,null,q.mode,Q),so(Q,V),Q.return=q,Q;case b:return V=Ou(V,q.mode,Q),V.return=q,V;case Z:return V=xr(V),ve(q,V,Q)}if(me(V)||ne(V))return V=fr(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return ve(q,El(V),Q);if(V.$$typeof===w)return ve(q,yl(q,V),Q);Tl(q,V)}return null}function ie(q,V,Q,xe){var Ke=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ke!==null?null:T(q,V,""+Q,xe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Ke?I(q,V,Q,xe):null;case b:return Q.key===Ke?J(q,V,Q,xe):null;case Z:return Q=xr(Q),ie(q,V,Q,xe)}if(me(Q)||ne(Q))return Ke!==null?null:de(q,V,Q,xe,null);if(typeof Q.then=="function")return ie(q,V,El(Q),xe);if(Q.$$typeof===w)return ie(q,V,yl(q,Q),xe);Tl(q,Q)}return null}function oe(q,V,Q,xe,Ke){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return q=q.get(Q)||null,T(V,q,""+xe,Ke);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case y:return q=q.get(xe.key===null?Q:xe.key)||null,I(V,q,xe,Ke);case b:return q=q.get(xe.key===null?Q:xe.key)||null,J(V,q,xe,Ke);case Z:return xe=xr(xe),oe(q,V,Q,xe,Ke)}if(me(xe)||ne(xe))return q=q.get(Q)||null,de(V,q,xe,Ke,null);if(typeof xe.then=="function")return oe(q,V,Q,El(xe),Ke);if(xe.$$typeof===w)return oe(q,V,Q,yl(V,xe),Ke);Tl(V,xe)}return null}function He(q,V,Q,xe){for(var Ke=null,Dt=null,Xe=V,ft=V=0,yt=null;Xe!==null&&ft<Q.length;ft++){Xe.index>ft?(yt=Xe,Xe=null):yt=Xe.sibling;var Ut=ie(q,Xe,Q[ft],xe);if(Ut===null){Xe===null&&(Xe=yt);break}t&&Xe&&Ut.alternate===null&&n(q,Xe),V=d(Ut,V,ft),Dt===null?Ke=Ut:Dt.sibling=Ut,Dt=Ut,Xe=yt}if(ft===Q.length)return a(q,Xe),At&&ji(q,ft),Ke;if(Xe===null){for(;ft<Q.length;ft++)Xe=ve(q,Q[ft],xe),Xe!==null&&(V=d(Xe,V,ft),Dt===null?Ke=Xe:Dt.sibling=Xe,Dt=Xe);return At&&ji(q,ft),Ke}for(Xe=o(Xe);ft<Q.length;ft++)yt=oe(Xe,q,ft,Q[ft],xe),yt!==null&&(t&&yt.alternate!==null&&Xe.delete(yt.key===null?ft:yt.key),V=d(yt,V,ft),Dt===null?Ke=yt:Dt.sibling=yt,Dt=yt);return t&&Xe.forEach(function(ja){return n(q,ja)}),At&&ji(q,ft),Ke}function tt(q,V,Q,xe){if(Q==null)throw Error(r(151));for(var Ke=null,Dt=null,Xe=V,ft=V=0,yt=null,Ut=Q.next();Xe!==null&&!Ut.done;ft++,Ut=Q.next()){Xe.index>ft?(yt=Xe,Xe=null):yt=Xe.sibling;var ja=ie(q,Xe,Ut.value,xe);if(ja===null){Xe===null&&(Xe=yt);break}t&&Xe&&ja.alternate===null&&n(q,Xe),V=d(ja,V,ft),Dt===null?Ke=ja:Dt.sibling=ja,Dt=ja,Xe=yt}if(Ut.done)return a(q,Xe),At&&ji(q,ft),Ke;if(Xe===null){for(;!Ut.done;ft++,Ut=Q.next())Ut=ve(q,Ut.value,xe),Ut!==null&&(V=d(Ut,V,ft),Dt===null?Ke=Ut:Dt.sibling=Ut,Dt=Ut);return At&&ji(q,ft),Ke}for(Xe=o(Xe);!Ut.done;ft++,Ut=Q.next())Ut=oe(Xe,q,ft,Ut.value,xe),Ut!==null&&(t&&Ut.alternate!==null&&Xe.delete(Ut.key===null?ft:Ut.key),V=d(Ut,V,ft),Dt===null?Ke=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Xe.forEach(function(uy){return n(q,uy)}),At&&ji(q,ft),Ke}function Vt(q,V,Q,xe){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:e:{for(var Ke=Q.key;V!==null;){if(V.key===Ke){if(Ke=Q.type,Ke===E){if(V.tag===7){a(q,V.sibling),xe=u(V,Q.props.children),xe.return=q,q=xe;break e}}else if(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&xr(Ke)===V.type){a(q,V.sibling),xe=u(V,Q.props),so(xe,Q),xe.return=q,q=xe;break e}a(q,V);break}else n(q,V);V=V.sibling}Q.type===E?(xe=fr(Q.props.children,q.mode,xe,Q.key),xe.return=q,q=xe):(xe=vl(Q.type,Q.key,Q.props,null,q.mode,xe),so(xe,Q),xe.return=q,q=xe)}return S(q);case b:e:{for(Ke=Q.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),xe=u(V,Q.children||[]),xe.return=q,q=xe;break e}else{a(q,V);break}else n(q,V);V=V.sibling}xe=Ou(Q,q.mode,xe),xe.return=q,q=xe}return S(q);case Z:return Q=xr(Q),Vt(q,V,Q,xe)}if(me(Q))return He(q,V,Q,xe);if(ne(Q)){if(Ke=ne(Q),typeof Ke!="function")throw Error(r(150));return Q=Ke.call(Q),tt(q,V,Q,xe)}if(typeof Q.then=="function")return Vt(q,V,El(Q),xe);if(Q.$$typeof===w)return Vt(q,V,yl(q,Q),xe);Tl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),xe=u(V,Q),xe.return=q,q=xe):(a(q,V),xe=Nu(Q,q.mode,xe),xe.return=q,q=xe),S(q)):a(q,V)}return function(q,V,Q,xe){try{ro=0;var Ke=Vt(q,V,Q,xe);return es=null,Ke}catch(Xe){if(Xe===$r||Xe===bl)throw Xe;var Dt=Yn(29,Xe,null,q.mode);return Dt.lanes=xe,Dt.return=q,Dt}finally{}}}var vr=rm(!0),sm=rm(!1),wa=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(t),kp(t,null,a),n}return xl(t,o,n,a),gl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Gs(t,a)}}function Yu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Zu=!1;function lo(){if(Zu){var t=Jr;if(t!==null)throw t}}function co(t,n,a,o){Zu=!1;var u=t.updateQueue;wa=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,J=I.next;I.next=null,S===null?d=J:S.next=J,S=I;var de=t.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==S&&(T===null?de.firstBaseUpdate=J:T.next=J,de.lastBaseUpdate=I))}if(d!==null){var ve=u.baseState;S=0,de=J=I=null,T=d;do{var ie=T.lane&-536870913,oe=ie!==T.lane;if(oe?(St&ie)===ie:(o&ie)===ie){ie!==0&&ie===Kr&&(Zu=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var He=t,tt=T;ie=n;var Vt=a;switch(tt.tag){case 1:if(He=tt.payload,typeof He=="function"){ve=He.call(Vt,ve,ie);break e}ve=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=tt.payload,ie=typeof He=="function"?He.call(Vt,ve,ie):He,ie==null)break e;ve=x({},ve,ie);break e;case 2:wa=!0}}ie=T.callback,ie!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?(J=de=oe,I=ve):de=de.next=oe,S|=ie;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;oe=T,T=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);de===null&&(I=ve),u.baseState=I,u.firstBaseUpdate=J,u.lastBaseUpdate=de,d===null&&(u.shared.lanes=0),Ba|=S,t.lanes=S,t.memoizedState=ve}}function om(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)om(a[t],n)}var ts=N(null),Rl=N(0);function cm(t,n){t=ia,ye(Rl,t),ye(ts,n),ia=t|n.baseLanes}function Qu(){ye(Rl,ia),ye(ts,ts.current)}function Ku(){ia=Rl.current,te(ts),te(Rl)}var Zn=N(null),ui=null;function La(t){var n=t.alternate;ye(rn,rn.current&1),ye(Zn,t),ui===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(ui=t)}function Ju(t){ye(rn,rn.current),ye(Zn,t),ui===null&&(ui=t)}function um(t){t.tag===22?(ye(rn,rn.current),ye(Zn,t),ui===null&&(ui=t)):Na()}function Na(){ye(rn,rn.current),ye(Zn,Zn.current)}function Qn(t){te(Zn),ui===t&&(ui=null),te(rn)}var rn=N(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||sd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,lt=null,Ht=null,un=null,wl=!1,ns=!1,_r=!1,Dl=0,uo=0,is=null,eS=0;function en(){throw Error(r(321))}function $u(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function ef(t,n,a,o,u,d){return Zi=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Wm:xf,_r=!1,d=a(o,u),_r=!1,ns&&(d=dm(n,a,o,u)),fm(t),d}function fm(t){B.H=po;var n=Ht!==null&&Ht.next!==null;if(Zi=0,un=Ht=lt=null,wl=!1,uo=0,is=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Sl(t)&&(fn=!0))}function dm(t,n,a,o){lt=t;var u=0;do{if(ns&&(is=null),uo=0,ns=!1,25<=u)throw Error(r(301));if(u+=1,un=Ht=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=Ym,d=n(a,o)}while(ns);return d}function tS(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(lt.flags|=1024),n}function tf(){var t=Dl!==0;return Dl=0,t}function nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function af(t){if(wl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}wl=!1}Zi=0,un=Ht=lt=null,ns=!1,uo=Dl=0,is=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?lt.memoizedState=un=t:un=un.next=t,un}function sn(){if(Ht===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=un===null?lt.memoizedState:un.next;if(n!==null)un=n,Ht=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},un===null?lt.memoizedState=un=t:un=un.next=t}return un}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,is===null&&(is=[]),t=nm(is,t,n),n=lt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Wm:xf),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===w)return Rn(t)}throw Error(r(438,String(t)))}function rf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Qi(t,n){return typeof n=="function"?n(t):n}function Nl(t){var n=sn();return sf(n,Ht,t)}function sf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var T=S=null,I=null,J=n,de=!1;do{var ve=J.lane&-536870913;if(ve!==J.lane?(St&ve)===ve:(Zi&ve)===ve){var ie=J.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ve===Kr&&(de=!0);else if((Zi&ie)===ie){J=J.next,ie===Kr&&(de=!0);continue}else ve={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(T=I=ve,S=d):I=I.next=ve,lt.lanes|=ie,Ba|=ie;ve=J.action,_r&&a(d,ve),d=J.hasEagerState?J.eagerState:a(d,ve)}else ie={lane:ve,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(T=I=ie,S=d):I=I.next=ie,lt.lanes|=ve,Ba|=ve;J=J.next}while(J!==null&&J!==n);if(I===null?S=d:I.next=T,!Wn(d,t.memoizedState)&&(fn=!0,de&&(a=Jr,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=I,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function of(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Wn(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function hm(t,n,a){var o=lt,u=sn(),d=At;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((Ht||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,uf(xm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,as(9,{destroy:void 0},mm.bind(null,o,u,a,n),null),jt===null)throw Error(r(349));d||(Zi&127)!==0||pm(o,n,a)}return a}function pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Ul(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mm(t,n,a,o){n.value=a,n.getSnapshot=o,gm(n)&&vm(t)}function xm(t,n,a){return a(function(){gm(n)&&vm(t)})}function gm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function vm(t){var n=ur(t,2);n!==null&&Vn(n,t,2)}function lf(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),_r){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},n}function _m(t,n,a,o){return t.baseState=a,sf(t,Ht,typeof o=="function"?o:Qi)}function nS(t,n,a,o,u){if(Bl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Sm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Sm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=B.T,S={};B.T=S;try{var T=a(u,o),I=B.S;I!==null&&I(S,T),ym(t,n,T)}catch(J){cf(t,n,J)}finally{d!==null&&S.types!==null&&(d.types=S.types),B.T=d}}else try{d=a(u,o),ym(t,n,d)}catch(J){cf(t,n,J)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mm(t,n,o)},function(o){return cf(t,n,o)}):Mm(t,n,a)}function Mm(t,n,a){n.status="fulfilled",n.value=a,bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sm(t,a)))}function cf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==o)}t.action=null}function bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Am(t,n){return n}function Em(t,n){if(At){var a=jt.formState;if(a!==null){e:{var o=lt;if(At){if(Zt){t:{for(var u=Zt,d=ci;u.nodeType!==8;){if(!d){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Zt=fi(u.nextSibling),o=u.data==="F!";break e}}Ra(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=o,a=Xm.bind(null,lt,o),o.dispatch=a,o=lf(!1),d=mf.bind(null,lt,!1,o.queue),o=On(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=nS.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Tm(t){var n=sn();return Rm(n,Ht,t)}function Rm(t,n,a){if(n=sf(t,n,Am)[0],t=Nl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(S){throw S===$r?bl:S}else o=n;n=sn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,as(9,{destroy:void 0},iS.bind(null,u,a),null)),[o,d,t]}function iS(t,n){t.action=n}function Cm(t){var n=sn(),a=Ht;if(a!==null)return Rm(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function as(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Ul(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function wm(){return sn().memoizedState}function Ol(t,n,a,o){var u=On();lt.flags|=t,u.memoizedState=as(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(t,n,a,o){var u=sn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ht!==null&&o!==null&&$u(o,Ht.memoizedState.deps)?u.memoizedState=as(n,d,a,o):(lt.flags|=t,u.memoizedState=as(1|n,d,a,o))}function Dm(t,n){Ol(8390656,8,t,n)}function uf(t,n){Pl(2048,8,t,n)}function aS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Ul(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Um(t){var n=sn().memoizedState;return aS({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Lm(t,n){return Pl(4,2,t,n)}function Nm(t,n){return Pl(4,4,t,n)}function Om(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pm(t,n,a){a=a!=null?a.concat([t]):null,Pl(4,4,Om.bind(null,n,t),a)}function ff(){}function Bm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&$u(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function zm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&$u(n,o[1]))return o[0];if(o=t(),_r){Ye(!0);try{t()}finally{Ye(!1)}}return a.memoizedState=[o,n],o}function df(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=I0(),lt.lanes|=t,Ba|=t,a)}function Im(t,n,a,o){return Wn(a,n)?a:ts.current!==null?(t=df(t,a,o),Wn(t,n)||(fn=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(St&261930)===0?(fn=!0,t.memoizedState=a):(t=I0(),lt.lanes|=t,Ba|=t,n)}function Fm(t,n,a,o,u){var d=$.p;$.p=d!==0&&8>d?d:8;var S=B.T,T={};B.T=T,mf(t,!1,n,a);try{var I=u(),J=B.S;if(J!==null&&J(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=$_(I,o);ho(t,n,de,$n(t))}else ho(t,n,o,$n(t))}catch(ve){ho(t,n,{then:function(){},status:"rejected",reason:ve},$n())}finally{$.p=d,S!==null&&T.types!==null&&(S.types=T.types),B.T=S}}function rS(){}function hf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Hm(t).queue;Fm(t,u,n,W,a===null?rS:function(){return Gm(t),a(o)})}function Hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gm(t){var n=Hm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},$n())}function pf(){return Rn(Do)}function Vm(){return sn().memoizedState}function km(){return sn().memoizedState}function sS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Da(a);var o=Ua(n,t,a);o!==null&&(Vn(o,n,a),oo(o,n,a)),n={cache:Vu()},t.payload=n;return}n=n.return}}function oS(t,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(t)?qm(n,a):(a=Uu(t,n,a,o),a!==null&&(Vn(a,t,o),jm(a,n,o)))}function Xm(t,n,a){var o=$n();ho(t,n,a,o)}function ho(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(t))qm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,T=d(S,a);if(u.hasEagerState=!0,u.eagerState=T,Wn(T,S))return xl(t,n,u,0),jt===null&&ml(),!1}catch{}finally{}if(a=Uu(t,n,u,o),a!==null)return Vn(a,t,o),jm(a,n,o),!0}return!1}function mf(t,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(t)){if(n)throw Error(r(479))}else n=Uu(t,a,o,2),n!==null&&Vn(n,t,2)}function Bl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function qm(t,n){ns=wl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Gs(t,a)}}var po={readContext:Rn,use:Ll,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};po.useEffectEvent=en;var Wm={readContext:Rn,use:Ll,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,Om.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var o=t();if(_r){Ye(!0);try{t()}finally{Ye(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=On();if(a!==void 0){var u=a(n);if(_r){Ye(!0);try{a(n)}finally{Ye(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=oS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=lf(t);var n=t.queue,a=Xm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ff,useDeferredValue:function(t,n){var a=On();return df(a,t,n)},useTransition:function(){var t=lf(!1);return t=Fm.bind(null,lt,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=On();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(St&127)!==0||pm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Dm(xm.bind(null,o,d,t),[t]),o.flags|=2048,as(9,{destroy:void 0},mm.bind(null,o,d,a,n),null),a},useId:function(){var t=On(),n=jt.identifierPrefix;if(At){var a=wi,o=Ci;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=eS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:pf,useFormState:Em,useActionState:Em,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:rf,useCacheRefresh:function(){return On().memoizedState=sS.bind(null,lt)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Rn,use:Ll,useCallback:Bm,useContext:Rn,useEffect:uf,useImperativeHandle:Pm,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:zm,useReducer:Nl,useRef:wm,useState:function(){return Nl(Qi)},useDebugValue:ff,useDeferredValue:function(t,n){var a=sn();return Im(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Nl(Qi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:pf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var a=sn();return _m(a,Ht,t,n)},useMemoCache:rf,useCacheRefresh:km};xf.useEffectEvent=Um;var Ym={readContext:Rn,use:Ll,useCallback:Bm,useContext:Rn,useEffect:uf,useImperativeHandle:Pm,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:zm,useReducer:of,useRef:wm,useState:function(){return of(Qi)},useDebugValue:ff,useDeferredValue:function(t,n){var a=sn();return Ht===null?df(a,t,n):Im(a,Ht.memoizedState,t,n)},useTransition:function(){var t=of(Qi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:pf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=sn();return Ht!==null?_m(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:km};Ym.useEffectEvent=Um;function gf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=$n(),u=Da(o);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(Vn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=$n(),u=Da(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(Vn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),o=Da(a);o.tag=2,n!=null&&(o.callback=n),n=Ua(t,o,a),n!==null&&(Vn(n,t,a),oo(n,t,a))}};function Zm(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,d):!0}function Qm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function Sr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Km(t){pl(t)}function Jm(t){console.error(t)}function $m(t){pl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function e0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function t0(t){return t=Da(t),t.tag=3,t}function n0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){e0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){e0(n,a,o),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function lS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qr(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Zl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(t,o,u)),!1;case 22:return a.flags|=65536,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(t,o,u)),!1}throw Error(r(435,a.tag))}return Xf(t,o,u),Zl(),!1}if(At)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(t=Error(r(422),{cause:o}),no(si(t,a)))):(o!==zu&&(n=Error(r(423),{cause:o}),no(si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=si(o,a),u=_f(t.stateNode,o,u),Yu(t,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=si(d,a),Mo===null?Mo=[d]:Mo.push(d),tn!==4&&(tn=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=_f(a.stateNode,o,t),Yu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(za===null||!za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=t0(u),n0(u,t,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var Sf=Error(r(461)),fn=!1;function Cn(t,n,a,o){n.child=t===null?sm(n,null,a,o):vr(n,t.child,a,o)}function i0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return pr(n),o=ef(t,n,a,S,d,u),T=tf(),t!==null&&!fn?(nf(t,n,u),Ki(t,n,u)):(At&&T&&Pu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function a0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Lu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,r0(t,n,d,o,u)):(t=vl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Cf(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(S,o)&&t.ref===n.ref)return Ki(t,n,u)}return n.flags|=1,t=qi(d,o),t.ref=n.ref,t.return=n,n.child=t}function r0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if($s(d,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=d,Cf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,Ki(t,n,u)}return yf(t,n,a,o,u)}function s0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return o0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,d!==null?d.cachePool:null),d!==null?cm(n,d):Qu(),um(n);else return o=n.lanes=536870912,o0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ml(n,d.cachePool),cm(n,d),Na(),n.memoizedState=null):(t!==null&&Ml(n,null),Qu(),Na());return Cn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function o0(t,n,a,o,u){var d=Xu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ml(n,null),Qu(),um(n),t!==null&&Qr(t,n,o,!0),n.childLanes=u,null}function Il(t,n){return n=Hl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function l0(t,n,a){return vr(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function cS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Il(n,o),n.lanes=536870912,mo(null,t);if(Ju(n),(t=Zt)?(t=Sx(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Il(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(Ju(n),u)if(n.flags&256)n.flags&=-257,n=l0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Qr(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=jt,o!==null&&(S=Vs(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,ur(t,S),Vn(o,t,S),Sf;Zl(),n=l0(t,n,a)}else t=d.treeContext,Zt=fi(S.nextSibling),Tn=n,At=!0,Ta=null,ci=!1,t!==null&&Yp(n,t),n=Il(n,o),n.flags|=4096;return n}return t=qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Fl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function yf(t,n,a,o,u){return pr(n),a=ef(t,n,a,o,void 0,u),o=tf(),t!==null&&!fn?(nf(t,n,u),Ki(t,n,u)):(At&&o&&Pu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function c0(t,n,a,o,u,d){return pr(n),n.updateQueue=null,a=dm(n,o,a,u),fm(t),o=tf(),t!==null&&!fn?(nf(t,n,d),Ki(t,n,d)):(At&&o&&Pu(n),n.flags|=1,Cn(t,n,a,d),n.child)}function u0(t,n,a,o,u){if(pr(n),n.stateNode===null){var d=jr,S=a.contextType;typeof S=="object"&&S!==null&&(d=Rn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ju(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Rn(S):jr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(gf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&vf.enqueueReplaceState(d,d.state,null),co(n,o,d,u),lo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var T=n.memoizedProps,I=Sr(a,T);d.props=I;var J=d.context,de=a.contextType;S=jr,typeof de=="object"&&de!==null&&(S=Rn(de));var ve=a.getDerivedStateFromProps;de=typeof ve=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||J!==S)&&Qm(n,d,o,S),wa=!1;var ie=n.memoizedState;d.state=ie,co(n,o,d,u),lo(),J=n.memoizedState,T||ie!==J||wa?(typeof ve=="function"&&(gf(n,a,ve,o),J=n.memoizedState),(I=wa||Zm(n,a,I,o,ie,J,S))?(de||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),d.props=o,d.state=J,d.context=S,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Wu(t,n),S=n.memoizedProps,de=Sr(a,S),d.props=de,ve=n.pendingProps,ie=d.context,J=a.contextType,I=jr,typeof J=="object"&&J!==null&&(I=Rn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==ve||ie!==I)&&Qm(n,d,o,I),wa=!1,ie=n.memoizedState,d.state=ie,co(n,o,d,u),lo();var oe=n.memoizedState;S!==ve||ie!==oe||wa||t!==null&&t.dependencies!==null&&Sl(t.dependencies)?(typeof T=="function"&&(gf(n,a,T,o),oe=n.memoizedState),(de=wa||Zm(n,a,de,o,ie,oe,I)||t!==null&&t.dependencies!==null&&Sl(t.dependencies))?(J||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,oe,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,oe,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),d.props=o,d.state=oe,d.context=I,o=de):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Fl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=vr(n,t.child,null,u),n.child=vr(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Ki(t,n,u),t}function f0(t,n,a,o){return dr(),n.flags|=256,Cn(t,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:em()}}function Af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function d0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?La(n):Na(),(t=Zt)?(t=Sx(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Ra(n);return sd(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Na(),u=n.mode,T=Hl({mode:"hidden",children:T},u),o=fr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=bf(a),o.childLanes=Af(t,S,a),n.memoizedState=Mf,mo(null,o)):(La(n),Ef(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(d)n.flags&256?(La(n),n.flags&=-257,n=Tf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),T=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),T=fr(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,vr(n,t.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Af(t,S,a),n.memoizedState=Mf,n=mo(null,o));else if(La(n),sd(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,o=Error(r(419)),o.stack="",o.digest=S,no({value:o,source:null,stack:null}),n=Tf(t,n,a)}else if(fn||Qr(t,n,a,!1),S=(a&t.childLanes)!==0,fn||S){if(S=jt,S!==null&&(o=Vs(S,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,ur(t,o),Vn(S,t,o),Sf;rd(T)||Zl(),n=Tf(t,n,a)}else rd(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Zt=fi(T.nextSibling),Tn=n,At=!0,Ta=null,ci=!1,t!==null&&Yp(n,t),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Na(),T=o.fallback,u=n.mode,I=t.child,J=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,J!==null?T=qi(J,T):(T=fr(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,mo(null,o),o=n.child,T=t.child.memoizedState,T===null?T=bf(a):(u=T.cachePool,u!==null?(I=cn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=em(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=Af(t,S,a),n.memoizedState=Mf,mo(t.child,o)):(La(n),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Ef(t,n){return n=Hl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function Tf(t,n,a){return vr(n,t.child,null,a),t=Ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function h0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Hu(t.return,n,a)}function Rf(t,n,a,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function p0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=rn.current,T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,ye(rn,S),Cn(t,n,o,a),o=At?to:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,a,n);else if(t.tag===19)h0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Rf(n,!0,a,null,d,o);break;case"together":Rf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Qr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sl(t)))}function uS(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Ca(n,cn,t.memoizedState.cache),dr();break;case 27:case 5:qe(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?d0(t,n,a):(La(n),t=Ki(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return p0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(rn,rn.current),o)break;return null;case 22:return n.lanes=0,s0(t,n,a,n.pendingProps);case 24:Ca(n,cn,t.memoizedState.cache)}return Ki(t,n,a)}function m0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Cf(t,a)&&(n.flags&128)===0)return fn=!1,uS(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,At&&(n.flags&1048576)!==0&&Wp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=xr(n.elementType),n.type=t,typeof t=="function")Lu(t)?(o=Sr(t,o),n.tag=1,n=u0(null,n,t,o,a)):(n.tag=0,n=yf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=i0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=a0(null,n,t,o,a);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return yf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Sr(o,n.pendingProps),u0(t,n,o,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Wu(t,n),co(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ca(n,cn,o),o!==d.cache&&Gu(n,[cn],a,!0),lo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=f0(t,n,o,a);break e}else if(o!==u){u=si(Error(r(424)),n),no(u),n=f0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=fi(t.firstChild),Tn=n,At=!0,Ta=null,ci=!0,a=sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dr(),o===u){n=Ki(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Fl(t,n),t===null?(a=Tx(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=nc(ae.current).createElement(a),o[ln]=n,o[pn]=t,wn(o,a,t),ee(o),n.stateNode=o):n.memoizedState=Tx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&At&&(o=n.stateNode=bx(n.type,n.pendingProps,ae.current),Tn=n,ci=!0,u=Zt,Ga(n.type)?(od=u,Zt=fi(o.firstChild)):Zt=u),Cn(t,n,n.pendingProps.children,a),Fl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Zt)&&(o=HS(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Tn=n,Zt=fi(o.firstChild),ci=!1,u=!0):u=!1),u||Ra(n)),qe(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,nd(u,d)?o=null:S!==null&&nd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(t,n,tS,null,null,a),Do._currentValue=u),Fl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Zt)&&(a=GS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Zt=null,t=!0):t=!1),t||Ra(n)),null;case 13:return d0(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=vr(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return i0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return a0(t,n,n.type,n.pendingProps,a);case 15:return r0(t,n,n.type,n.pendingProps,a);case 19:return p0(t,n,a);case 31:return cS(t,n,a);case 22:return s0(t,n,a,n.pendingProps);case 24:return pr(n),o=Rn(cn),t===null?(u=Xu(),u===null&&(u=jt,d=Vu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ju(n),Ca(n,cn,u)):((t.lanes&a)!==0&&(Wu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,cn,o)):(o=d.cache,Ca(n,cn,o),o!==u.cache&&Gu(n,[cn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(t){t.flags|=4}function wf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(V0())t.flags|=8192;else throw gr=Al,qu}else t.flags&=-16777217}function x0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ux(n))if(V0())t.flags|=8192;else throw gr=Al,qu}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,ls|=n)}function xo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function fS(t,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(cn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Iu())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Ji(n),d!==null?(Qt(n),x0(n,d)):(Qt(n),wf(n,u,null,o,a))):d?d!==t.memoizedState?(Ji(n),Qt(n),x0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ji(n),Qt(n),wf(n,u,t,o,a)),null;case 27:if(ct(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Te.current,Zr(n)?Zp(n):(t=bx(u,o,a),n.stateNode=t,Ji(n))}return Qt(n),null;case 5:if(ct(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(d=Te.current,Zr(n))Zp(n);else{var S=nc(ae.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[ln]=n,d[pn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ji(n)}}return Qt(n),wf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Zr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||dx(t.nodeValue,a)),t||Ra(n,!0)}else t=nc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Zr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Qt(n),null);case 4:return Ge(),t===null&&Kf(n.stateNode.containerInfo),Qt(n),null;case 10:return Yi(n.type),Qt(n),null;case 19:if(te(rn),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)xo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Cl(t),d!==null){for(n.flags|=128,xo(o,!1),t=d.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xp(a,t),a=a.sibling;return ye(rn,rn.current&1|2),At&&ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>jl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Cl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return Qt(n),null}else 2*A()-o.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,a=rn.current,ye(rn,u?a&1|2:a&1),At&&ji(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return Qn(n),Ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&te(mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(cn),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function dS(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(cn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(rn),null;case 4:return Ge(),null;case 10:return Yi(n.type),null;case 22:case 23:return Qn(n),Ku(),t!==null&&te(mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(cn),null;case 25:return null;default:return null}}function g0(t,n){switch(Bu(n),n.tag){case 3:Yi(cn),Ge();break;case 26:case 27:case 5:ct(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:te(rn);break;case 10:Yi(n.type);break;case 22:case 23:Qn(n),Ku(),t!==null&&te(mr);break;case 24:Yi(cn)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(T){It(n,n.return,T)}}function Oa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var I=a,J=T;try{J()}catch(de){It(u,I,de)}}}o=o.next}while(o!==d)}}catch(de){It(n,n.return,de)}}function v0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lm(n,a)}catch(o){It(t,t.return,o)}}}function _0(t,n,a){a.props=Sr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function S0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function Df(t,n,a){try{var o=t.stateNode;OS(o,t.type,a,n),o[pn]=n}catch(u){It(t,t.return,u)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function Vl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Vl(t,n,a),t=t.sibling;t!==null;)Vl(t,n,a),t=t.sibling}function M0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[ln]=t,n[pn]=a}catch(d){It(t,t.return,d)}}var $i=!1,dn=!1,Nf=!1,b0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function hS(t,n){if(t=t.containerInfo,ed=cc,t=Pp(t),Eu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,T=-1,I=-1,J=0,de=0,ve=t,ie=null;t:for(;;){for(var oe;ve!==a||u!==0&&ve.nodeType!==3||(T=S+u),ve!==d||o!==0&&ve.nodeType!==3||(I=S+o),ve.nodeType===3&&(S+=ve.nodeValue.length),(oe=ve.firstChild)!==null;)ie=ve,ve=oe;for(;;){if(ve===t)break t;if(ie===a&&++J===u&&(T=S),ie===d&&++de===o&&(I=S),(oe=ve.nextSibling)!==null)break;ve=ie,ie=ve.parentNode}ve=oe}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(td={focusedElem:t,selectionRange:a},cc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var He=Sr(a.type,u);t=o.getSnapshotBeforeUpdate(He,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){It(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ad(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function A0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),o&4&&go(5,a);break;case 1:if(ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){It(a,a.return,S)}else{var u=Sr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){It(a,a.return,S)}}o&64&&v0(a),o&512&&vo(a,a.return);break;case 3:if(ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lm(t,n)}catch(S){It(a,a.return,S)}}break;case 27:n===null&&o&4&&M0(a);case 26:case 5:ta(t,a),n===null&&o&4&&S0(a),o&512&&vo(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),o&4&&R0(t,a);break;case 13:ta(t,a),o&4&&C0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=MS.bind(null,a),VS(t,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||dn,u=$i;var d=dn;$i=o,(dn=n)&&!d?na(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),$i=u,dn=d}break;case 30:break;default:ta(t,a)}}function E0(t){var n=t.alternate;n!==null&&(t.alternate=null,E0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,In=!1;function ea(t,n,a){for(a=a.child;a!==null;)T0(t,n,a),a=a.sibling}function T0(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:dn||Di(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Di(a,n);var o=Kt,u=In;Ga(a.type)&&(Kt=a.stateNode,In=!1),ea(t,n,a),Ro(a.stateNode),Kt=o,In=u;break;case 5:dn||Di(a,n);case 6:if(o=Kt,u=In,Kt=null,ea(t,n,a),Kt=o,In=u,Kt!==null)if(In)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(d){It(a,n,d)}else try{Kt.removeChild(a.stateNode)}catch(d){It(a,n,d)}break;case 18:Kt!==null&&(In?(t=Kt,vx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):vx(Kt,a.stateNode));break;case 4:o=Kt,u=In,Kt=a.stateNode.containerInfo,In=!0,ea(t,n,a),Kt=o,In=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),dn||Oa(4,a,n),ea(t,n,a);break;case 1:dn||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&_0(a,n,o)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ea(t,n,a),dn=o;break;default:ea(t,n,a)}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){It(n,n.return,a)}}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){It(n,n.return,a)}}function pS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new b0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new b0),n;default:throw Error(r(435,t.tag))}}function kl(t,n){var a=pS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=bS.bind(null,t,o);o.then(u,u)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Ga(T.type)){Kt=T.stateNode,In=!1;break e}break;case 5:Kt=T.stateNode,In=!1;break e;case 3:case 4:Kt=T.stateNode.containerInfo,In=!0;break e}T=T.return}if(Kt===null)throw Error(r(160));T0(d,S,u),Kt=null,In=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,t),n=n.sibling}var Si=null;function w0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),o&4&&(Oa(3,t,t.return),go(3,t),Oa(5,t,t.return));break;case 1:Fn(n,t),Hn(t),o&512&&(dn||a===null||Di(a,a.return)),o&64&&$i&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Si;if(Fn(n,t),Hn(t),o&512&&(dn||a===null||Di(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[sr]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[ln]=t,ee(d),o=d;break e;case"link":var S=wx("link","href",u).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(d=S[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=wx("meta","content",u).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(d=S[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[ln]=t,ee(d),o=d}t.stateNode=o}else Dx(u,t.type,t.stateNode);else t.stateNode=Cx(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Dx(u,t.type,t.stateNode):Cx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Df(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),o&512&&(dn||a===null||Di(a,a.return)),a!==null&&o&4&&Df(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),o&512&&(dn||a===null||Di(a,a.return)),t.flags&32){u=t.stateNode;try{Ri(u,"")}catch(He){It(t,t.return,He)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Df(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(Fn(n,t),Hn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(He){It(t,t.return,He)}}break;case 3:if(rc=null,u=Si,Si=ic(n.containerInfo),Fn(n,t),Si=u,Hn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(He){It(t,t.return,He)}Nf&&(Nf=!1,D0(t));break;case 4:o=Si,Si=ic(t.stateNode.containerInfo),Fn(n,t),Hn(t),Si=o;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=$i,de=dn;if($i=J||u,dn=de||I,Fn(n,t),dn=de,$i=J,Hn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||$i||dn||yr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var ve=I.memoizedProps.style,ie=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(He){It(I,I.return,He)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(He){It(I,I.return,He)}}}else if(n.tag===18){if(a===null){I=n;try{var oe=I.stateNode;u?_x(oe,!0):_x(I.stateNode,!1)}catch(He){It(I,I.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(t,a))));break;case 19:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(y0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Uf(t);Vl(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ri(S,""),a.flags&=-33);var T=Uf(t);Vl(t,T,S);break;case 3:case 4:var I=a.stateNode.containerInfo,J=Uf(t);Lf(t,J,I);break;default:throw Error(r(161))}}catch(de){It(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A0(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),yr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_0(n,n.return,a),yr(n);break;case 27:Ro(n.stateNode);case 26:case 5:Di(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:na(u,d,a),go(4,d);break;case 1:if(na(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){It(o,o.return,J)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)om(I[u],T)}catch(J){It(o,o.return,J)}}a&&S&64&&v0(d),vo(d,d.return);break;case 27:M0(d);case 26:case 5:na(u,d,a),a&&o===null&&S&4&&S0(d),vo(d,d.return);break;case 12:na(u,d,a);break;case 31:na(u,d,a),a&&S&4&&R0(u,d);break;case 13:na(u,d,a),a&&S&4&&C0(u,d);break;case 22:d.memoizedState===null&&na(u,d,a),vo(d,d.return);break;case 30:break;default:na(u,d,a)}n=n.sibling}}function Of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function Pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function yi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(t,n,a,o),n=n.sibling}function U0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,o),u&2048&&go(9,n);break;case 1:yi(t,n,a,o);break;case 3:yi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){yi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,T=d.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){It(n,n.return,I)}}else yi(t,n,a,o);break;case 31:yi(t,n,a,o);break;case 13:yi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?yi(t,n,a,o):_o(t,n):d._visibility&2?yi(t,n,a,o):(d._visibility|=2,rs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Of(S,n);break;case 24:yi(t,n,a,o),u&2048&&Pf(n.alternate,n);break;default:yi(t,n,a,o)}}function rs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,T=a,I=o,J=S.flags;switch(S.tag){case 0:case 11:case 15:rs(d,S,T,I,u),go(8,S);break;case 23:break;case 22:var de=S.stateNode;S.memoizedState!==null?de._visibility&2?rs(d,S,T,I,u):_o(d,S):(de._visibility|=2,rs(d,S,T,I,u)),u&&J&2048&&Of(S.alternate,S);break;case 24:rs(d,S,T,I,u),u&&J&2048&&Pf(S.alternate,S);break;default:rs(d,S,T,I,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:_o(a,o),u&2048&&Of(o.alternate,o);break;case 24:_o(a,o),u&2048&&Pf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var So=8192;function ss(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)L0(t,n,a),t=t.sibling}function L0(t,n,a){switch(t.tag){case 26:ss(t,n,a),t.flags&So&&t.memoizedState!==null&&ey(a,Si,t.memoizedState,t.memoizedProps);break;case 5:ss(t,n,a);break;case 3:case 4:var o=Si;Si=ic(t.stateNode.containerInfo),ss(t,n,a),Si=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,ss(t,n,a),So=o):ss(t,n,a));break;default:ss(t,n,a)}}function N0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,P0(o,t)}N0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O0(t),t=t.sibling}function O0(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):yo(t);break;default:yo(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,P0(o,t)}N0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function P0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(E0(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var mS={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},xS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,jt=null,gt=null,St=0,zt=0,Kn=null,Pa=!1,os=!1,Bf=!1,ia=0,tn=0,Ba=0,Mr=0,zf=0,Jn=0,ls=0,Mo=null,Gn=null,If=!1,ql=0,B0=0,jl=1/0,Wl=null,za=null,xn=0,Ia=null,cs=null,aa=0,Ff=0,Hf=null,z0=null,bo=0,Gf=null;function $n(){return(Nt&2)!==0&&St!==0?St&-St:B.T!==null?Wf():ks()}function I0(){if(Jn===0)if((St&536870912)===0||At){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Vn(t,n,a){(t===jt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(us(t,0),Fa(t,St,Jn,!1)),Dn(t,a),((Nt&2)===0||t!==jt)&&(t===jt&&((Nt&2)===0&&(Mr|=a),tn===4&&Fa(t,St,Jn,!1)),Ui(t))}function F0(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ie(t,n),u=o?_S(t,n):kf(t,n,!0),d=o;do{if(u===0){os&&!o&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!gS(a)){u=kf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var T=t;u=Mo;var I=T.current.memoizedState.isDehydrated;if(I&&(us(T,S).flags|=256),S=kf(T,S,!1),S!==2){if(Bf&&!I){T.errorRecoveryDisabledLanes|=d,Mr|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){us(t,0),Fa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(o,n,Jn,!Pa);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ql+300-A(),10<u)){if(Fa(o,n,Jn,!Pa),_e(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=xx(H0.bind(null,o,a,Gn,Wl,If,n,Jn,Mr,ls,Pa,d,"Throttled",-0,0),u);break e}H0(o,a,Gn,Wl,If,n,Jn,Mr,ls,Pa,d,null,-0,0)}}break}while(!0);Ui(t)}function H0(t,n,a,o,u,d,S,T,I,J,de,ve,ie,oe){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},L0(n,d,ve);var He=(d&62914560)===d?ql-A():(d&4194048)===d?B0-A():0;if(He=ty(ve,He),He!==null){aa=d,t.cancelPendingCommit=He(Y0.bind(null,t,n,d,a,o,u,S,T,I,de,ve,null,ie,oe)),Fa(t,d,S,!J);return}}Y0(t,n,d,a,o,u,S,T,I)}function gS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Wn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,o){n&=~zf,n&=~Mr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-ke(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&rl(t,a,n)}function Yl(){return(Nt&6)===0?(Ao(0),!1):!0}function Vf(){if(gt!==null){if(zt===0)var t=gt.return;else t=gt,Wi=hr=null,af(t),es=null,ro=0,t=gt;for(;t!==null;)g0(t.alternate,t),t=t.return;gt=null}}function us(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,zS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,Vf(),jt=t,gt=a=qi(t.current,null),St=n,zt=0,Kn=null,Pa=!1,os=Ie(t,n),Bf=!1,ls=Jn=zf=Mr=Ba=tn=0,Gn=Mo=null,If=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ke(o),d=1<<u;n|=t[u],o&=~d}return ia=n,ml(),a}function G0(t,n){lt=null,B.H=po,n===$r||n===bl?(n=im(),zt=3):n===qu?(n=im(),zt=4):zt=n===Sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,gt===null&&(tn=1,zl(t,si(n,t.current)))}function V0(){var t=Zn.current;return t===null?!0:(St&4194048)===St?ui===null:(St&62914560)===St||(St&536870912)!==0?t===ui:!1}function k0(){var t=B.H;return B.H=po,t===null?po:t}function X0(){var t=B.A;return B.A=mS,t}function Zl(){tn=4,Pa||(St&4194048)!==St&&Zn.current!==null||(os=!0),(Ba&134217727)===0&&(Mr&134217727)===0||jt===null||Fa(jt,St,Jn,!1)}function kf(t,n,a){var o=Nt;Nt|=2;var u=k0(),d=X0();(jt!==t||St!==n)&&(Wl=null,us(t,n)),n=!1;var S=tn;e:do try{if(zt!==0&&gt!==null){var T=gt,I=Kn;switch(zt){case 8:Vf(),S=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=zt;if(zt=0,Kn=null,fs(t,T,I,J),a&&os){S=0;break e}break;default:J=zt,zt=0,Kn=null,fs(t,T,I,J)}}vS(),S=tn;break}catch(de){G0(t,de)}while(!0);return n&&t.shellSuspendCounter++,Wi=hr=null,Nt=o,B.H=u,B.A=d,gt===null&&(jt=null,St=0,ml()),S}function vS(){for(;gt!==null;)q0(gt)}function _S(t,n){var a=Nt;Nt|=2;var o=k0(),u=X0();jt!==t||St!==n?(Wl=null,jl=A()+500,us(t,n)):os=Ie(t,n);e:do try{if(zt!==0&&gt!==null){n=gt;var d=Kn;t:switch(zt){case 1:zt=0,Kn=null,fs(t,n,d,1);break;case 2:case 9:if(tm(d)){zt=0,Kn=null,j0(n);break}n=function(){zt!==2&&zt!==9||jt!==t||(zt=7),Ui(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:tm(d)?(zt=0,Kn=null,j0(n)):(zt=0,Kn=null,fs(t,n,d,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var T=gt;if(S?Ux(S):T.stateNode.complete){zt=0,Kn=null;var I=T.sibling;if(I!==null)gt=I;else{var J=T.return;J!==null?(gt=J,Ql(J)):gt=null}break t}}zt=0,Kn=null,fs(t,n,d,5);break;case 6:zt=0,Kn=null,fs(t,n,d,6);break;case 8:Vf(),tn=6;break e;default:throw Error(r(462))}}SS();break}catch(de){G0(t,de)}while(!0);return Wi=hr=null,B.H=o,B.A=u,Nt=a,gt!==null?0:(jt=null,St=0,ml(),tn)}function SS(){for(;gt!==null&&!rt();)q0(gt)}function q0(t){var n=m0(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Ql(t):gt=n}function j0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=c0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=c0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:af(n);default:g0(a,n),n=gt=Xp(n,ia),n=m0(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Ql(t):gt=n}function fs(t,n,a,o){Wi=hr=null,af(n),es=null,ro=0;var u=n.return;try{if(lS(t,u,n,a,St)){tn=1,zl(t,si(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;tn=1,zl(t,si(a,t.current)),gt=null;return}n.flags&32768?(At||o===1?t=!0:os||(St&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),W0(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){W0(n,Pa);return}t=n.return;var a=fS(n.alternate,n,ia);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);tn===0&&(tn=5)}function W0(t,n){do{var a=dS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);tn=6,gt=null}function Y0(t,n,a,o,u,d,S,T,I){t.cancelPendingCommit=null;do Kl();while(xn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Du,qn(t,a,d,S,T,I),t===jt&&(gt=jt=null,St=0),cs=n,Ia=t,aa=a,Ff=d,Hf=u,z0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,AS(ce,function(){return $0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=$.p,$.p=2,S=Nt,Nt|=4;try{hS(t,n,a)}finally{Nt=S,$.p=u,B.T=o}}xn=1,Z0(),Q0(),K0()}}function Z0(){if(xn===1){xn=0;var t=Ia,n=cs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=$.p;$.p=2;var u=Nt;Nt|=4;try{w0(n,t);var d=td,S=Pp(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(S!==T&&T&&T.ownerDocument&&Op(T.ownerDocument.documentElement,T)){if(I!==null&&Eu(T)){var J=I.start,de=I.end;if(de===void 0&&(de=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(de,T.value.length);else{var ve=T.ownerDocument||document,ie=ve&&ve.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),He=T.textContent.length,tt=Math.min(I.start,He),Vt=I.end===void 0?tt:Math.min(I.end,He);!oe.extend&&tt>Vt&&(S=Vt,Vt=tt,tt=S);var q=Np(T,tt),V=Np(T,Vt);if(q&&V&&(oe.rangeCount!==1||oe.anchorNode!==q.node||oe.anchorOffset!==q.offset||oe.focusNode!==V.node||oe.focusOffset!==V.offset)){var Q=ve.createRange();Q.setStart(q.node,q.offset),oe.removeAllRanges(),tt>Vt?(oe.addRange(Q),oe.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),oe.addRange(Q))}}}}for(ve=[],oe=T;oe=oe.parentNode;)oe.nodeType===1&&ve.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ve.length;T++){var xe=ve[T];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}cc=!!ed,td=ed=null}finally{Nt=u,$.p=o,B.T=a}}t.current=n,xn=2}}function Q0(){if(xn===2){xn=0;var t=Ia,n=cs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=$.p;$.p=2;var u=Nt;Nt|=4;try{A0(t,n.alternate,n)}finally{Nt=u,$.p=o,B.T=a}}xn=3}}function K0(){if(xn===4||xn===3){xn=0,O();var t=Ia,n=cs,a=aa,o=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,cs=Ia=null,J0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(za=null),rr(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=$.p,$.p=2,B.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];d(T.value,{componentStack:T.stack})}}finally{B.T=n,$.p=u}}(aa&3)!==0&&Kl(),Ui(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Gf?bo++:(bo=0,Gf=t):bo=0,Ao(0)}}function J0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Kl(){return Z0(),Q0(),K0(),$0()}function $0(){if(xn!==5)return!1;var t=Ia,n=Ff;Ff=0;var a=rr(aa),o=B.T,u=$.p;try{$.p=32>a?32:a,B.T=null,a=Hf,Hf=null;var d=Ia,S=aa;if(xn=0,cs=Ia=null,aa=0,(Nt&6)!==0)throw Error(r(331));var T=Nt;if(Nt|=4,O0(d.current),U0(d,d.current,S,a),Nt=T,Ao(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,d)}catch{}return!0}finally{$.p=u,B.T=o,J0(t,n)}}function ex(t,n,a){n=si(a,n),n=_f(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Dn(t,2),Ui(t))}function It(t,n,a){if(t.tag===3)ex(t,t,a);else for(;n!==null;){if(n.tag===3){ex(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){t=si(a,t),a=t0(2),o=Ua(n,a,2),o!==null&&(n0(a,o,n,t),Dn(o,2),Ui(o));break}}n=n.return}}function Xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new xS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),t=yS.bind(null,t,n,a),n.then(t,t))}function yS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>A()-ql?(Nt&2)===0&&us(t,0):zf|=a,ls===St&&(ls=0)),Ui(t)}function tx(t,n){n===0&&(n=Ft()),t=ur(t,n),t!==null&&(Dn(t,n),Ui(t))}function MS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),tx(t,a)}function bS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),tx(t,a)}function AS(t,n){return Xt(t,n)}var Jl=null,ds=null,qf=!1,$l=!1,jf=!1,Ha=0;function Ui(t){t!==ds&&t.next===null&&(ds===null?Jl=ds=t:ds=ds.next=t),$l=!0,qf||(qf=!0,TS())}function Ao(t,n){if(!jf&&$l){jf=!0;do for(var a=!1,o=Jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-ke(42|t)+1)-1,d&=u&~(S&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,rx(o,d))}else d=St,d=_e(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ie(o,d)||(a=!0,rx(o,d));o=o.next}while(a);jf=!1}}function ES(){nx()}function nx(){$l=qf=!1;var t=0;Ha!==0&&BS()&&(t=Ha);for(var n=A(),a=null,o=Jl;o!==null;){var u=o.next,d=ix(o,n);d===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(ds=a)):(a=o,(t!==0||(d&3)!==0)&&($l=!0)),o=u}xn!==0&&xn!==5||Ao(t),Ha!==0&&(Ha=0)}function ix(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-ke(d),T=1<<S,I=u[S];I===-1?((T&a)===0||(T&o)!==0)&&(u[S]=at(T,n)):I<=n&&(t.expiredLanes|=T),d&=~T}if(n=jt,a=St,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ie(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ze(o),rr(a)){case 2:case 8:a=Me;break;case 32:a=ce;break;case 268435456:a=Ne;break;default:a=ce}return o=ax.bind(null,t),a=Xt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ze(o),t.callbackPriority=2,t.callbackNode=null,2}function ax(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var o=St;return o=_e(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(F0(t,o,n),ix(t,A()),t.callbackNode!=null&&t.callbackNode===a?ax.bind(null,t):null)}function rx(t,n){if(Kl())return null;F0(t,n,!0)}function TS(){IS(function(){(Nt&6)!==0?Xt(ge,ES):nx()})}function Wf(){if(Ha===0){var t=Kr;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Ha=t}return Ha}function sx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ol(""+t)}function ox(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function RS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=sx((u[pn]||null).action),S=o.submitter;S&&(n=(n=S[pn]||null)?sx(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var T=new fl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var I=S?ox(u,S):new FormData(u);hf(a,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=S?ox(u,S):new FormData(u),hf(a,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var Yf=0;Yf<wu.length;Yf++){var Zf=wu[Yf],CS=Zf.toLowerCase(),wS=Zf[0].toUpperCase()+Zf.slice(1);_i(CS,"on"+wS)}_i(Ip,"onAnimationEnd"),_i(Fp,"onAnimationIteration"),_i(Hp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(q_,"onTransitionRun"),_i(j_,"onTransitionStart"),_i(W_,"onTransitionCancel"),_i(Gp,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Le("onBeforeInput",["compositionend","keypress","textInput","paste"]),Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function lx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],I=T.instance,J=T.currentTarget;if(T=T.listener,I!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=J;try{d(u)}catch(de){pl(de)}u.currentTarget=null,d=I}else for(S=0;S<o.length;S++){if(T=o[S],I=T.instance,J=T.currentTarget,T=T.listener,I!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=J;try{d(u)}catch(de){pl(de)}u.currentTarget=null,d=I}}}}function vt(t,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var o=t+"__bubble";a.has(o)||(cx(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),cx(a,t,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Kf(t){if(!t[ec]){t[ec]=!0,Y.forEach(function(a){a!=="selectionchange"&&(DS.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ec]||(n[ec]=!0,Qf("selectionchange",!1,n))}}function cx(t,n,a,o){switch(Ix(n)){case 2:var u=ay;break;case 8:u=ry;break;default:u=dd}a=u.bind(null,n,a,t),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Jf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Ma(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=d=S;continue e}T=T.parentNode}}o=o.return}pp(function(){var J=d,de=pu(a),ve=[];e:{var ie=Vp.get(t);if(ie!==void 0){var oe=fl,He=t;switch(t){case"keypress":if(cl(a)===0)break e;case"keydown":case"keyup":oe=b_;break;case"focusin":He="focus",oe=Su;break;case"focusout":He="blur",oe=Su;break;case"beforeblur":case"afterblur":oe=Su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=f_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=T_;break;case Ip:case Fp:case Hp:oe=p_;break;case Gp:oe=C_;break;case"scroll":case"scrollend":oe=c_;break;case"wheel":oe=D_;break;case"copy":case"cut":case"paste":oe=x_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=_p;break;case"toggle":case"beforetoggle":oe=L_}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),q=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var V=J,Q;V!==null;){var xe=V;if(Q=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||Q===null||q===null||(xe=js(V,q),xe!=null&&tt.push(To(V,xe,Q))),Vt)break;V=V.return}0<tt.length&&(ie=new oe(ie,He,null,a,de),ve.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ie&&a!==hu&&(He=a.relatedTarget||a.fromElement)&&(Ma(He)||He[Hi]))break e;if((oe||ie)&&(ie=de.window===de?de:(ie=de.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(He=a.relatedTarget||a.toElement,oe=J,He=He?Ma(He):null,He!==null&&(Vt=c(He),tt=He.tag,He!==Vt||tt!==5&&tt!==27&&tt!==6)&&(He=null)):(oe=null,He=J),oe!==He)){if(tt=gp,xe="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=_p,xe="onPointerLeave",q="onPointerEnter",V="pointer"),Vt=oe==null?ie:X(oe),Q=He==null?ie:X(He),ie=new tt(xe,V+"leave",oe,a,de),ie.target=Vt,ie.relatedTarget=Q,xe=null,Ma(de)===J&&(tt=new tt(q,V+"enter",He,a,de),tt.target=Q,tt.relatedTarget=Vt,xe=tt),Vt=xe,oe&&He)t:{for(tt=US,q=oe,V=He,Q=0,xe=q;xe;xe=tt(xe))Q++;xe=0;for(var Ke=V;Ke;Ke=tt(Ke))xe++;for(;0<Q-xe;)q=tt(q),Q--;for(;0<xe-Q;)V=tt(V),xe--;for(;Q--;){if(q===V||V!==null&&q===V.alternate){tt=q;break t}q=tt(q),V=tt(V)}tt=null}else tt=null;oe!==null&&ux(ve,ie,oe,tt,!1),He!==null&&Vt!==null&&ux(ve,Vt,He,tt,!0)}}e:{if(ie=J?X(J):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var Dt=Rp;else if(Ep(ie))if(Cp)Dt=V_;else{Dt=H_;var Xe=F_}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?J&&du(J.elementType)&&(Dt=Rp):Dt=G_;if(Dt&&(Dt=Dt(t,J))){Tp(ve,Dt,a,de);break e}Xe&&Xe(t,ie,J),t==="focusout"&&J&&ie.type==="number"&&J.memoizedProps.value!=null&&yn(ie,"number",ie.value)}switch(Xe=J?X(J):window,t){case"focusin":(Ep(Xe)||Xe.contentEditable==="true")&&(kr=Xe,Tu=J,eo=null);break;case"focusout":eo=Tu=kr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Bp(ve,a,de);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":Bp(ve,a,de)}var ft;if(Mu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Vr?bp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Sp&&a.locale!=="ko"&&(Vr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Vr&&(ft=mp()):(Aa=de,gu="value"in Aa?Aa.value:Aa.textContent,Vr=!0)),Xe=tc(J,yt),0<Xe.length&&(yt=new vp(yt,t,null,a,de),ve.push({event:yt,listeners:Xe}),ft?yt.data=ft:(ft=Ap(a),ft!==null&&(yt.data=ft)))),(ft=O_?P_(t,a):B_(t,a))&&(yt=tc(J,"onBeforeInput"),0<yt.length&&(Xe=new vp("onBeforeInput","beforeinput",null,a,de),ve.push({event:Xe,listeners:yt}),Xe.data=ft)),RS(ve,t,J,a,de)}lx(ve,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=js(t,a),u!=null&&o.unshift(To(t,u,d)),u=js(t,n),u!=null&&o.push(To(t,u,d))),t.tag===3)return o;t=t.return}return[]}function US(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ux(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var T=a,I=T.alternate,J=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||J===null||(I=J,u?(J=js(a,d),J!=null&&S.unshift(To(a,J,I))):u||(J=js(a,d),J!=null&&S.push(To(a,J,I)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var LS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function fx(t){return(typeof t=="string"?t:""+t).replace(LS,`
`).replace(NS,"")}function dx(t,n){return n=fx(n),fx(t)===n}function Gt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ri(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ri(t,""+o);break;case"className":Tt(t,"class",o);break;case"tabIndex":Tt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(t,a,o);break;case"style":dp(t,o,d);break;case"data":if(n!=="object"){Tt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ol(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ol(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ki);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ol(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),ut(t,"popover",o);break;case"xlinkActuate":wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":wt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":wt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":wt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":wt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ut(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=o_.get(a)||a,ut(t,a,o))}}function $f(t,n,a,o,u,d){switch(a){case"style":dp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ri(t,o):(typeof o=="number"||typeof o=="bigint")&&Ri(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[pn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ut(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,d,S,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var T=d=S=u=null,I=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":S=de;break;case"checked":I=de;break;case"defaultChecked":J=de;break;case"value":d=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Gt(t,n,o,de,a,null)}}Yt(t,d,T,I,J,S,u,!1);return;case"select":vt("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Gt(t,n,u,T,a,null)}n=d,a=S,t.multiple=!!o,n!=null?mn(t,!!o,n,!1):a!=null&&mn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Gt(t,n,S,T,a,null)}En(t,o,u,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,I,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)vt(Eo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,J,o,a,null)}return;default:if(du(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&$f(t,n,de,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Gt(t,n,T,o,a,null))}function OS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,T=null,I=null,J=null,de=null;for(oe in a){var ve=a[oe];if(a.hasOwnProperty(oe)&&ve!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":I=ve;default:o.hasOwnProperty(oe)||Gt(t,n,oe,null,o,ve)}}for(var ie in o){var oe=o[ie];if(ve=a[ie],o.hasOwnProperty(ie)&&(oe!=null||ve!=null))switch(ie){case"type":d=oe;break;case"name":u=oe;break;case"checked":J=oe;break;case"defaultChecked":de=oe;break;case"value":S=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ve&&Gt(t,n,ie,oe,o,ve)}}Gi(t,S,T,I,J,de,d,u);return;case"select":oe=S=T=ie=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":oe=I;default:o.hasOwnProperty(d)||Gt(t,n,d,null,o,I)}for(u in o)if(d=o[u],I=a[u],o.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":ie=d;break;case"defaultValue":T=d;break;case"multiple":S=d;default:d!==I&&Gt(t,n,u,d,o,I)}n=T,a=S,o=oe,ie!=null?mn(t,!!a,ie,!1):!!o!=!!a&&(n!=null?mn(t,!!a,n,!0):mn(t,!!a,a?[]:"",!1));return;case"textarea":oe=ie=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Gt(t,n,T,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ie=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Gt(t,n,S,u,o,d)}Mn(t,ie,oe);return;case"option":for(var He in a)if(ie=a[He],a.hasOwnProperty(He)&&ie!=null&&!o.hasOwnProperty(He))switch(He){case"selected":t.selected=!1;break;default:Gt(t,n,He,null,o,ie)}for(I in o)if(ie=o[I],oe=a[I],o.hasOwnProperty(I)&&ie!==oe&&(ie!=null||oe!=null))switch(I){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Gt(t,n,I,ie,o,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ie=a[tt],a.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,ie);for(J in o)if(ie=o[J],oe=a[J],o.hasOwnProperty(J)&&ie!==oe&&(ie!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Gt(t,n,J,ie,o,oe)}return;default:if(du(n)){for(var Vt in a)ie=a[Vt],a.hasOwnProperty(Vt)&&ie!==void 0&&!o.hasOwnProperty(Vt)&&$f(t,n,Vt,void 0,o,ie);for(de in o)ie=o[de],oe=a[de],!o.hasOwnProperty(de)||ie===oe||ie===void 0&&oe===void 0||$f(t,n,de,ie,o,oe);return}}for(var q in a)ie=a[q],a.hasOwnProperty(q)&&ie!=null&&!o.hasOwnProperty(q)&&Gt(t,n,q,null,o,ie);for(ve in o)ie=o[ve],oe=a[ve],!o.hasOwnProperty(ve)||ie===oe||ie==null&&oe==null||Gt(t,n,ve,ie,o,oe)}function hx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,T=u.duration;if(d&&T&&hx(S)){for(S=0,T=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],J=I.startTime;if(J>T)break;var de=I.transferSize,ve=I.initiatorType;de&&hx(ve)&&(I=I.responseEnd,S+=de*(I<T?1:(T-J)/(I-J)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ed=null,td=null;function nc(t){return t.nodeType===9?t:t.ownerDocument}function px(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function nd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function BS(){var t=window.event;return t&&t.type==="popstate"?t===id?!1:(id=t,!0):(id=null,!1)}var xx=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,gx=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof gx<"u"?function(t){return gx.resolve(null).then(t).catch(FS)}:xx;function FS(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function vx(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var d=a.firstChild;d;){var S=d.nextSibling,T=d.nodeName;d[sr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);xs(n)}function _x(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ad(a),qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function HS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function GS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Sx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$?"||t.data==="$~"}function sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var od=null;function yx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Mx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function bx(t,n,a){switch(n=nc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qs(t)}var di=new Map,Ax=new Set;function ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=$.d;$.d={f:kS,r:XS,D:qS,C:jS,L:WS,m:YS,X:QS,S:ZS,M:KS};function kS(){var t=ra.f(),n=Yl();return t||n}function XS(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?Gm(n):ra.r(t)}var hs=typeof document>"u"?null:document;function Ex(t,n,a){var o=hs;if(o&&typeof n=="string"&&n){var u=Wt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ax.has(u)||(Ax.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),ee(n),o.head.appendChild(n)))}}function qS(t){ra.D(t),Ex("dns-prefetch",t,null)}function jS(t,n){ra.C(t,n),Ex("preconnect",t,n)}function WS(t,n,a){ra.L(t,n,a);var o=hs;if(o&&t&&n){var u='link[rel="preload"][as="'+Wt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Wt(a.imageSizes)+'"]')):u+='[href="'+Wt(t)+'"]';var d=u;switch(n){case"style":d=ps(t);break;case"script":d=ms(t)}di.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(d))||n==="script"&&o.querySelector(wo(d))||(n=o.createElement("link"),wn(n,"link",t),ee(n),o.head.appendChild(n)))}}function YS(t,n){ra.m(t,n);var a=hs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Wt(o)+'"][href="'+Wt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ms(t)}if(!di.has(d)&&(t=x({rel:"modulepreload",href:t},n),di.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(d)))return}o=a.createElement("link"),wn(o,"link",t),ee(o),a.head.appendChild(o)}}}function ZS(t,n,a){ra.S(t,n,a);var o=hs;if(o&&t){var u=re(o).hoistableStyles,d=ps(t);n=n||"default";var S=u.get(d);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(Co(d)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(d))&&ld(t,a);var I=S=o.createElement("link");ee(I),wn(I,"link",t),I._p=new Promise(function(J,de){I.onload=J,I.onerror=de}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ac(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(d,S)}}}function QS(t,n){ra.X(t,n);var a=hs;if(a&&t){var o=re(a).hoistableScripts,u=ms(t),d=o.get(u);d||(d=a.querySelector(wo(u)),d||(t=x({src:t,async:!0},n),(n=di.get(u))&&cd(t,n),d=a.createElement("script"),ee(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function KS(t,n){ra.M(t,n);var a=hs;if(a&&t){var o=re(a).hoistableScripts,u=ms(t),d=o.get(u);d||(d=a.querySelector(wo(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=di.get(u))&&cd(t,n),d=a.createElement("script"),ee(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Tx(t,n,a,o){var u=(u=ae.current)?ic(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=re(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ps(a.href);var d=re(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Co(t)))&&!d._p&&(S.instance=d,S.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),d||JS(u,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=re(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ps(t){return'href="'+Wt(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function Rx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function JS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),ee(n),t.head.appendChild(n))}function ms(t){return'[src="'+Wt(t)+'"]'}function wo(t){return"script[async]"+t}function Cx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(o)return n.instance=o,ee(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ee(o),wn(o,"style",u),ac(o,a.precedence,t),n.instance=o;case"stylesheet":u=ps(a.href);var d=t.querySelector(Co(u));if(d)return n.state.loading|=4,n.instance=d,ee(d),d;o=Rx(a),(u=di.get(u))&&ld(o,u),d=(t.ownerDocument||t).createElement("link"),ee(d);var S=d;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),wn(d,"link",o),n.state.loading|=4,ac(d,a.precedence,t),n.instance=d;case"script":return d=ms(a.src),(u=t.querySelector(wo(d)))?(n.instance=u,ee(u),u):(o=a,(u=di.get(d))&&(o=x({},a),cd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ee(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,t));return n.instance}function ac(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function wx(t,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[sr]||d[ln]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(d):o.set(S,[d])}}return o}function Dx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function $S(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ux(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ey(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ps(o.href),d=n.querySelector(Co(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,ee(d);return}d=n.ownerDocument||n,o=Rx(o),(u=di.get(u))&&ld(o,u),d=d.createElement("link"),ee(d);var S=d;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ud=0;function ty(t,n){return t.stylesheets&&t.count===0&&lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&ud===0&&(ud=62500*PS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>ud?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oc=null;function lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(ny,t),oc=null,sc.call(t))}function ny(t,n){if(!(n.state.loading&4)){var a=oc.get(t);if(a)var o=a.get(null);else{a=new Map,oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:w,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function iy(t,n,a,o,u,d,S,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Lx(t,n,a,o,u,d,S,T,I,J,de,ve){return t=new iy(t,n,a,S,I,J,de,ve,T),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),t.current=d,d.stateNode=t,n=Vu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ju(d),t}function Nx(t){return t?(t=jr,t):jr}function Ox(t,n,a,o,u,d){u=Nx(u),o.context===null?o.context=u:o.pendingContext=u,o=Da(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ua(t,o,n),a!==null&&(Vn(a,t,n),oo(a,t,n))}function Px(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function fd(t,n){Px(t,n),(t=t.alternate)&&Px(t,n)}function Bx(t){if(t.tag===13||t.tag===31){var n=ur(t,67108864);n!==null&&Vn(n,t,67108864),fd(t,67108864)}}function zx(t){if(t.tag===13||t.tag===31){var n=$n();n=vi(n);var a=ur(t,n);a!==null&&Vn(a,t,n),fd(t,n)}}var cc=!0;function ay(t,n,a,o){var u=B.T;B.T=null;var d=$.p;try{$.p=2,dd(t,n,a,o)}finally{$.p=d,B.T=u}}function ry(t,n,a,o){var u=B.T;B.T=null;var d=$.p;try{$.p=8,dd(t,n,a,o)}finally{$.p=d,B.T=u}}function dd(t,n,a,o){if(cc){var u=hd(o);if(u===null)Jf(t,n,o,uc,a),Fx(t,o);else if(oy(u,t,n,a,o))o.stopPropagation();else if(Fx(t,o),n&4&&-1<sy.indexOf(t)){for(;u!==null;){var d=R(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ae(d.pendingLanes);if(S!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-ke(S);T.entanglements[1]|=I,S&=~I}Ui(d),(Nt&6)===0&&(jl=A()+500,Ao(0))}}break;case 31:case 13:T=ur(d,2),T!==null&&Vn(T,d,2),Yl(),fd(d,2)}if(d=hd(o),d===null&&Jf(t,n,o,uc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Jf(t,n,o,null,a)}}function hd(t){return t=pu(t),pd(t)}var uc=null;function pd(t){if(uc=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function Ix(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case ge:return 2;case Me:return 8;case ce:case We:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var md=!1,Va=null,ka=null,Xa=null,Uo=new Map,Lo=new Map,qa=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fx(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Bx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function oy(t,n,a,o,u){switch(n){case"focusin":return Va=No(Va,t,n,a,o,u),!0;case"dragenter":return ka=No(ka,t,n,a,o,u),!0;case"mouseover":return Xa=No(Xa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Uo.set(d,No(Uo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Lo.set(d,No(Lo.get(d)||null,t,n,a,o,u)),!0}return!1}function Hx(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){zx(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){zx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=hd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return n=R(a),n!==null&&Bx(n),t.blockedOn=a,!1;n.shift()}return!0}function Gx(t,n,a){fc(t)&&a.delete(n)}function ly(){md=!1,Va!==null&&fc(Va)&&(Va=null),ka!==null&&fc(ka)&&(ka=null),Xa!==null&&fc(Xa)&&(Xa=null),Uo.forEach(Gx),Lo.forEach(Gx)}function dc(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ly)))}var hc=null;function Vx(t){hc!==t&&(hc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(pd(o||a)===null)continue;break}var d=R(a);d!==null&&(t.splice(n,3),n-=3,hf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(I){return dc(I,t)}Va!==null&&dc(Va,t),ka!==null&&dc(ka,t),Xa!==null&&dc(Xa,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Hx(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[pn]||null;if(typeof d=="function")S||Vx(a);else if(S){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[pn]||null)T=S.formAction;else if(pd(u)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Vx(a)}}}function kx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xd(t){this._internalRoot=t}pc.prototype.render=xd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();Ox(a,o,t,n,null,null)},pc.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ox(t.current,2,null,t,null,null),Yl(),n[Hi]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&Hx(t)}};var Xx=e.version;if(Xx!=="19.2.0")throw Error(r(527,Xx,"19.2.0"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var cy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{be=mc.inject(cy),Ee=mc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Km,d=Jm,S=$m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Lx(t,1,!1,null,null,a,o,null,u,d,S,kx),t[Hi]=n.current,Kf(t),new xd(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=Km,S=Jm,T=$m,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Lx(t,1,!0,n,a??null,o,u,I,d,S,T,kx),n.context=Nx(null),a=n.current,o=$n(),o=vi(o),u=Da(o),u.callback=null,Ua(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Ui(n),t[Hi]=n.current,Kf(t),new pc(n)},Po.version="19.2.0",Po}var eg;function Sy(){if(eg)return _d.exports;eg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_d.exports=_y(),_d.exports}var yy=Sy();var tg="popstate";function My(s={}){function e(l,c){let{pathname:f="/",search:h="",hash:m=""}=Br(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),nh("",{pathname:f,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:qo(c))}function r(l,c){gi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Ay(e,i,r,s)}function Jt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function gi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function by(){return Math.random().toString(36).substring(2,10)}function ng(s,e){return{usr:s.state,key:s.key,idx:e}}function nh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Br(e):e,state:i,key:e&&e.key||r||by()}}function qo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Br(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Ay(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function x(){h="POP";let M=g(),v=M==null?null:M-p;p=M,m&&m({action:h,location:E.location,delta:v})}function _(M,v){h="PUSH";let U=nh(E.location,M,v);i&&i(U,M),p=g()+1;let w=ng(U,p),P=E.createHref(U);try{f.pushState(w,"",P)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(P)}c&&m&&m({action:h,location:E.location,delta:1})}function y(M,v){h="REPLACE";let U=nh(E.location,M,v);i&&i(U,M),p=g();let w=ng(U,p),P=E.createHref(U);f.replaceState(w,"",P),c&&m&&m({action:h,location:E.location,delta:0})}function b(M){return Ey(M)}let E={get action(){return h},get location(){return s(l,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(tg,x),m=M,()=>{l.removeEventListener(tg,x),m=null}},createHref(M){return e(l,M)},createURL:b,encodeLocation(M){let v=b(M);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:y,go(M){return f.go(M)}};return E}function Ey(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:qo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function dv(s,e,i="/"){return Ty(s,e,i,!1)}function Ty(s,e,i,r){let l=typeof e=="string"?Br(e):e,c=_a(l.pathname||"/",i);if(c==null)return null;let f=hv(s);Ry(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=Iy(c);h=By(f[m],p,r)}return h}function hv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Jt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let x=xa([r,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),hv(f.children,e,_,x,m)),!(f.path==null&&!f.index)&&e.push({path:x,score:Oy(x,f.index),routesMeta:_})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of pv(f.path))c(f,h,!0,m)}),e}function pv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=pv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ry(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Py(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Cy=/^:[\w-]+$/,wy=3,Dy=2,Uy=1,Ly=10,Ny=-2,ig=s=>s==="*";function Oy(s,e){let i=s.split("/"),r=i.length;return i.some(ig)&&(r+=Ny),e&&(r+=Dy),i.filter(l=>!ig(l)).reduce((l,c)=>l+(Cy.test(c)?wy:c===""?Uy:Ly),r)}function Py(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function By(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",x=Qc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),_=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Qc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:xa([c,x.pathname]),pathnameBase:ky(xa([c,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(c=xa([c,x.pathnameBase]))}return f}function Qc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=zy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},_)=>{if(g==="*"){let b=h[_]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const y=h[_];return x&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function zy(s,e=!1,i=!0){gi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Iy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function _a(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hy=s=>Fy.test(s);function Gy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Br(s):s,c;if(i)if(Hy(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),gi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=ag(i.substring(1),"/"):c=ag(i,e)}else c=e;return{pathname:c,search:Xy(r),hash:qy(l)}}function ag(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function bd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function mv(s){let e=Vy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function xv(s,e,i,r=!1){let l;typeof s=="string"?l=Br(s):(l={...s},Jt(!l.pathname||!l.pathname.includes("?"),bd("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),bd("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),bd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let x=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),x-=1;l.pathname=_.join("/")}h=x>=0?e[x]:"/"}let m=Gy(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var xa=s=>s.join("/").replace(/\/\/+/g,"/"),ky=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Xy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,qy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function jy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var gv=["POST","PUT","PATCH","DELETE"];new Set(gv);var Wy=["GET",...gv];new Set(Wy);var Is=he.createContext(null);Is.displayName="DataRouter";var au=he.createContext(null);au.displayName="DataRouterState";he.createContext(!1);var vv=he.createContext({isTransitioning:!1});vv.displayName="ViewTransition";var Yy=he.createContext(new Map);Yy.displayName="Fetchers";var Zy=he.createContext(null);Zy.displayName="Await";var Fi=he.createContext(null);Fi.displayName="Navigation";var Ko=he.createContext(null);Ko.displayName="Location";var ya=he.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var Zh=he.createContext(null);Zh.displayName="RouteError";function Qy(s,{relative:e}={}){Jt(Jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=he.useContext(Fi),{hash:l,pathname:c,search:f}=$o(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:xa([i,c])),r.createHref({pathname:h,search:f,hash:l})}function Jo(){return he.useContext(Ko)!=null}function ar(){return Jt(Jo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(Ko).location}var _v="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sv(s){he.useContext(Fi).static||he.useLayoutEffect(s)}function Ky(){let{isDataRoute:s}=he.useContext(ya);return s?uM():Jy()}function Jy(){Jt(Jo(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(Is),{basename:e,navigator:i}=he.useContext(Fi),{matches:r}=he.useContext(ya),{pathname:l}=ar(),c=JSON.stringify(mv(r)),f=he.useRef(!1);return Sv(()=>{f.current=!0}),he.useCallback((m,p={})=>{if(gi(f.current,_v),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=xv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:xa([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,s])}he.createContext(null);function $o(s,{relative:e}={}){let{matches:i}=he.useContext(ya),{pathname:r}=ar(),l=JSON.stringify(mv(i));return he.useMemo(()=>xv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function $y(s,e){return yv(s,e)}function yv(s,e,i,r,l){Jt(Jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=he.useContext(Fi),{matches:f}=he.useContext(ya),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let U=x&&x.path||"";Mv(p,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let _=ar(),y;if(e){let U=typeof e=="string"?Br(e):e;Jt(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=_;let b=y.pathname||"/",E=b;if(g!=="/"){let U=g.replace(/^\//,"").split("/");E="/"+b.replace(/^\//,"").split("/").slice(U.length).join("/")}let M=dv(s,{pathname:E});gi(x||M!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),gi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=aM(M&&M.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:xa([g,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:xa([g,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),f,i,r,l);return e&&v?he.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function eM(){let s=cM(),e=jy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:c},"ErrorBoundary")," or"," ",he.createElement("code",{style:c},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,f)}var tM=he.createElement(eM,null),nM=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?he.createElement(ya.Provider,{value:this.props.routeContext},he.createElement(Zh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function iM({routeContext:s,match:e,children:i}){let r=he.useContext(Is);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(ya.Provider,{value:s},i)}function aM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let g=c.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);Jt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:_,errors:y}=i,b=x.route.loader&&!_.hasOwnProperty(x.route.id)&&(!y||y[x.route.id]===void 0);if(x.route.lazy||b){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(g,x)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:x})}:void 0;return c.reduceRight((g,x,_)=>{let y,b=!1,E=null,M=null;i&&(y=f&&x.route.id?f[x.route.id]:void 0,E=x.route.errorElement||tM,h&&(m<0&&_===0?(Mv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,M=null):m===_&&(b=!0,M=x.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,_+1)),U=()=>{let w;return y?w=E:b?w=M:x.route.Component?w=he.createElement(x.route.Component,null):x.route.element?w=x.route.element:w=g,he.createElement(iM,{match:x,routeContext:{outlet:g,matches:v,isDataRoute:i!=null},children:w})};return i&&(x.route.ErrorBoundary||x.route.errorElement||_===0)?he.createElement(nM,{location:i.location,revalidation:i.revalidation,component:E,error:y,children:U(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):U()},null)}function Qh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rM(s){let e=he.useContext(Is);return Jt(e,Qh(s)),e}function sM(s){let e=he.useContext(au);return Jt(e,Qh(s)),e}function oM(s){let e=he.useContext(ya);return Jt(e,Qh(s)),e}function Kh(s){let e=oM(s),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function lM(){return Kh("useRouteId")}function cM(){let s=he.useContext(Zh),e=sM("useRouteError"),i=Kh("useRouteError");return s!==void 0?s:e.errors?.[i]}function uM(){let{router:s}=rM("useNavigate"),e=Kh("useNavigate"),i=he.useRef(!1);return Sv(()=>{i.current=!0}),he.useCallback(async(l,c={})=>{gi(i.current,_v),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var rg={};function Mv(s,e,i){!e&&!rg[s]&&(rg[s]=!0,gi(!1,i))}he.memo(fM);function fM({routes:s,future:e,state:i,unstable_onError:r}){return yv(s,void 0,i,r,e)}function wr(s){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Jt(!Jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=he.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Br(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:_="default"}=i,y=he.useMemo(()=>{let b=_a(m,f);return b==null?null:{location:{pathname:b,search:p,hash:g,state:x,key:_},navigationType:r}},[f,m,p,g,x,_,r]);return gi(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:he.createElement(Fi.Provider,{value:h},he.createElement(Ko.Provider,{children:e,value:y}))}function hM({children:s,location:e}){return $y(ih(s),e)}function ih(s,e=[]){let i=[];return he.Children.forEach(s,(r,l)=>{if(!he.isValidElement(r))return;let c=[...e,l];if(r.type===he.Fragment){i.push.apply(i,ih(r.props.children,c));return}Jt(r.type===wr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=ih(r.props.children,c)),i.push(f)}),i}var Vc="get",kc="application/x-www-form-urlencoded";function ru(s){return s!=null&&typeof s.tagName=="string"}function pM(s){return ru(s)&&s.tagName.toLowerCase()==="button"}function mM(s){return ru(s)&&s.tagName.toLowerCase()==="form"}function xM(s){return ru(s)&&s.tagName.toLowerCase()==="input"}function gM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function vM(s,e){return s.button===0&&(!e||e==="_self")&&!gM(s)}var xc=null;function _M(){if(xc===null)try{new FormData(document.createElement("form"),0),xc=!1}catch{xc=!0}return xc}var SM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(s){return s!=null&&!SM.has(s)?(gi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kc}"`),null):s}function yM(s,e){let i,r,l,c,f;if(mM(s)){let h=s.getAttribute("action");r=h?_a(h,e):null,i=s.getAttribute("method")||Vc,l=Ad(s.getAttribute("enctype"))||kc,c=new FormData(s)}else if(pM(s)||xM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?_a(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Vc,l=Ad(s.getAttribute("formenctype"))||Ad(h.getAttribute("enctype"))||kc,c=new FormData(h,s),!_M()){let{name:p,type:g,value:x}=s;if(g==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,x)}}else{if(ru(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vc,r=null,l=kc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function MM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&_a(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function bM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function AM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function EM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await bM(c,i);return f.links?f.links():[]}return[]}));return wM(r.flat(1).filter(AM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function sg(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function TM(s,e,{includeHydrateFallback:i}={}){return RM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function RM(s){return[...new Set(s)]}function CM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function wM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(CM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function bv(){let s=he.useContext(Is);return Jh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function DM(){let s=he.useContext(au);return Jh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var $h=he.createContext(void 0);$h.displayName="FrameworkContext";function Av(){let s=he.useContext($h);return Jh(s,"You must render this element inside a <HydratedRouter> element"),s}function UM(s,e){let i=he.useContext($h),[r,l]=he.useState(!1),[c,f]=he.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,_=he.useRef(null);he.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let E=v=>{v.forEach(U=>{f(U.isIntersecting)})},M=new IntersectionObserver(E,{threshold:.5});return _.current&&M.observe(_.current),()=>{M.disconnect()}}},[s]),he.useEffect(()=>{if(r){let E=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(E)}}},[r]);let y=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:Bo(h,y),onBlur:Bo(m,b),onMouseEnter:Bo(p,y),onMouseLeave:Bo(g,b),onTouchStart:Bo(x,y)}]:[!1,_,{}]}function Bo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function LM({page:s,...e}){let{router:i}=bv(),r=he.useMemo(()=>dv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?he.createElement(OM,{page:s,matches:r,...e}):null}function NM(s){let{manifest:e,routeModules:i}=Av(),[r,l]=he.useState([]);return he.useEffect(()=>{let c=!1;return EM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function OM({page:s,matches:e,...i}){let r=ar(),{manifest:l,routeModules:c}=Av(),{basename:f}=bv(),{loaderData:h,matches:m}=DM(),p=he.useMemo(()=>sg(s,e,m,l,r,"data"),[s,e,m,l,r]),g=he.useMemo(()=>sg(s,e,m,l,r,"assets"),[s,e,m,l,r]),x=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,E=!1;if(e.forEach(v=>{let U=l.routes[v.route.id];!U||!U.hasLoader||(!p.some(w=>w.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||U.hasClientLoader?E=!0:b.add(v.route.id))}),b.size===0)return[];let M=MM(s,f,"data");return E&&b.size>0&&M.searchParams.set("_routes",e.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[M.pathname+M.search]},[f,h,r,l,p,e,s,c]),_=he.useMemo(()=>TM(g,l),[g,l]),y=NM(g);return he.createElement(he.Fragment,null,x.map(b=>he.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),_.map(b=>he.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),y.map(({key:b,link:E})=>he.createElement("link",{key:b,nonce:i.nonce,...E})))}function PM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ev&&(window.__reactRouterVersion="7.9.6")}catch{}function BM({basename:s,children:e,window:i}){let r=he.useRef();r.current==null&&(r.current=My({window:i,v5Compat:!0}));let l=r.current,[c,f]=he.useState({action:l.action,location:l.location}),h=he.useCallback(m=>{he.startTransition(()=>f(m))},[f]);return he.useLayoutEffect(()=>l.listen(h),[l,h]),he.createElement(dM,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var Tv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$a=he.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:x,..._},y){let{basename:b}=he.useContext(Fi),E=typeof p=="string"&&Tv.test(p),M,v=!1;if(typeof p=="string"&&E&&(M=p,Ev))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),k=_a(C.pathname,b);C.origin===D.origin&&k!=null?p=k+C.search+C.hash:v=!0}catch{gi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=Qy(p,{relative:l}),[w,P,G]=UM(r,_),L=HM(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:x});function z(D){e&&e(D),D.defaultPrevented||L(D)}let Z=he.createElement("a",{..._,...G,href:M||U,onClick:v||c?e:z,ref:PM(y,P),target:m,"data-discover":!E&&i==="render"?"true":void 0});return w&&!E?he.createElement(he.Fragment,null,Z,he.createElement(LM,{page:U})):Z});$a.displayName="Link";var zM=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let x=$o(f,{relative:p.relative}),_=ar(),y=he.useContext(au),{navigator:b,basename:E}=he.useContext(Fi),M=y!=null&&qM(x)&&h===!0,v=b.encodeLocation?b.encodeLocation(x).pathname:x.pathname,U=_.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(U=U.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&E&&(w=_a(w,E)||w);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let G=U===v||!l&&U.startsWith(v)&&U.charAt(P)==="/",L=w!=null&&(w===v||!l&&w.startsWith(v)&&w.charAt(v.length)==="/"),z={isActive:G,isPending:L,isTransitioning:M},Z=G?e:void 0,D;typeof r=="function"?D=r(z):D=[r,G?"active":null,L?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(z):c;return he.createElement($a,{...p,"aria-current":Z,className:D,ref:g,style:C,to:f,viewTransition:h},typeof m=="function"?m(z):m)});zM.displayName="NavLink";var IM=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Vc,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,..._},y)=>{let b=kM(),E=XM(h,{relative:p}),M=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&Tv.test(h),U=w=>{if(m&&m(w),w.defaultPrevented)return;w.preventDefault();let P=w.nativeEvent.submitter,G=P?.getAttribute("formmethod")||f;b(P||w.currentTarget,{fetcherKey:e,method:G,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:x})};return he.createElement("form",{ref:y,method:M,action:E,onSubmit:r?m:U,..._,"data-discover":!v&&s==="render"?"true":void 0})});IM.displayName="Form";function FM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rv(s){let e=he.useContext(Is);return Jt(e,FM(s)),e}function HM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=Ky(),m=ar(),p=$o(s,{relative:c});return he.useCallback(g=>{if(vM(g,e)){g.preventDefault();let x=i!==void 0?i:qo(m)===qo(p);h(s,{replace:x,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,i,r,e,s,l,c,f])}var GM=0,VM=()=>`__${String(++GM)}__`;function kM(){let{router:s}=Rv("useSubmit"),{basename:e}=he.useContext(Fi),i=lM();return he.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=yM(r,e);if(l.navigate===!1){let g=l.fetcherKey||VM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function XM(s,{relative:e}={}){let{basename:i}=he.useContext(Fi),r=he.useContext(ya);Jt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...$o(s||".",{relative:e})},f=ar();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:xa([i,c.pathname])),qo(c)}function qM(s,{relative:e}={}){let i=he.useContext(vv);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Rv("useViewTransitionState"),l=$o(s,{relative:e});if(!i.isTransitioning)return!1;let c=_a(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Qc(l.pathname,f)!=null||Qc(l.pathname,c)!=null}const jM="/react-app/assets/Profile-vN1MJFJA.jpg";function WM(){return he.useEffect(()=>{const s=["a Software Developer","an AI Enthusiast","a Tech Learner"];let e=0,i=0,r="",l="";const c=document.querySelector(".typing");let f=!0;function h(){f&&(e===s.length&&(e=0),r=s[e],l=r.slice(0,++i),c&&(c.textContent=l),l.length===r.length?(e++,i=0,setTimeout(h,1500)):setTimeout(h,100))}return h(),()=>{f=!1}},[]),j.jsxs("main",{className:"home",children:[j.jsx("h1",{className:"one",children:"Hi👋 Myself Kanishkaa"}),j.jsxs("h2",{children:["I'm ",j.jsx("span",{className:"typing"})]}),j.jsxs("div",{className:"social-icons",children:[j.jsx("a",{href:"https://www.linkedin.com/in/kanishkaa-maheshkumar-874927327",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:j.jsx("i",{className:"fab fa-linkedin-in"})}),j.jsx("a",{href:"https://github.com/Kanishkaa-M",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:j.jsx("i",{className:"fab fa-github"})}),j.jsxs("a",{href:"mailto:kanishkaamaheshkumar@gmail.com",target:"_blank",rel:"noreferrer","aria-label":"Gmail",children:[j.jsx("i",{className:"fas fa-envelope"})," "]}),j.jsx("a",{href:"https://wa.me/919788086531",target:"_blank",rel:"noreferrer","aria-label":"WhatsApp",children:j.jsx("i",{className:"fab fa-whatsapp"})}),j.jsx("a",{href:"https://instagram.com/kanishkaamaheshkumar",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:j.jsx("i",{className:"fab fa-instagram"})})]}),j.jsx("a",{href:"/Kanishkaa_Resume.pdf",download:!0,className:"download-btn-glow",children:"Download CV"})]})}function YM(){return j.jsxs("div",{className:"about",children:[j.jsx("h2",{children:"About Me"}),j.jsxs("div",{className:"about-container",children:[j.jsx("div",{className:"about-image",children:j.jsx("img",{src:jM,alt:"Profile"})}),j.jsxs("div",{className:"about-content",children:[j.jsx("p",{children:"I am a Computer Science Engineering student passionate about Software Development and Artificial Intelligence. I love coding, problem-solving, and constantly learning new technologies. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems."}),j.jsxs("div",{className:"about-details",children:[j.jsxs("div",{className:"detail-item",children:[j.jsx("span",{className:"label",children:"Birthday:"}),j.jsx("span",{className:"value",children:"10 May 2007"})]}),j.jsxs("div",{className:"detail-item",children:[j.jsx("span",{className:"label",children:"Phone:"}),j.jsx("span",{className:"value",children:"+91 9788086531"})]}),j.jsxs("div",{className:"detail-item",children:[j.jsx("span",{className:"label",children:"City:"}),j.jsx("span",{className:"value",children:"Namakkal"})]}),j.jsxs("div",{className:"detail-item",children:[j.jsx("span",{className:"label",children:"Email:"}),j.jsx("span",{className:"value",children:"kanishkaamaheshkumar@gmail.com"})]})]})]})]}),j.jsx("h2",{children:"Interests---------"}),j.jsxs("div",{children:[j.jsx("h3",{className:"box",children:"💻 Software Development"}),j.jsx("h3",{className:"box",children:"🤖 Artificial Intelligence"}),j.jsx("h3",{className:"box",children:"⚙ Machine Learning"})]}),j.jsxs("div",{children:[j.jsx("h3",{className:"box",children:"🕸 Deep Learning"}),j.jsx("h3",{className:"box",children:"🌐 Web Development"}),j.jsx("h3",{className:"box",children:"📷 Computer Vision"})]})]})}const ZM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACUCAMAAADS8YkpAAAAY1BMVEX///8AAAD7+/ttbW3w8PA7OztHR0fq6ur19fXCwsLV1dWwsLCamprm5ubg4OCfn5+Ojo7Pz8+EhIQxMTEnJycRERFWVlbJyckdHR12dnZeXl6UlJSqqqoXFxe8vLy2trZOTk4EYlJcAAAHDUlEQVR4nO1c6ZqjIBCMeIIHiifqqO//lOsRpc1hTNTE/T7qz2QSB2uh6G7Kzl4uEhISEhISEhISEhISEhISEv8l3Nr9NYX1QCRXFCUn6NdEVsGsVGVAXp1/kk2aKAKJc27GJguVOUJm/prUM2iBKmjmgrgaaL+m9gBanU8M9YJcSGFMv+f12SZZc4Rsw9Lr33NtXQi5OBNjl8UjsdjAIowh3IgPmPdDhgAz2fL05tOUi0lW098LWbMB21a29yAOYGz/VhYWFZsqK5/FWteOpqsMx/oqQwDk8olGlFeL1+JcUFbdXyRqDbMF2d4jBamE428L2bLzaedndF1lQ+g0x3FefpMxKvSJbfjGnbVSzHHof0kVFhFCiHL85l9DITNy/N6zMP+bhODj9+cIpb6QhYoPZkzzia1SeJ+tKPLopKa/hO7MENzHFPeJQ3uL/FAtNkDsHBLfWtmKiMDrzbeoeHakkGsxfOyne0xIK+RpyD9e7zCiGNoWdZay3/Ihl06jxs0mgcFRzUKMmpT7DDrBBhuYmdspt6s2Dfi3g2zvb1CJAKlsVhpWxa7wg2OCpUXEAmbqct20jBKkXf/IytV0RKLWP4vIiIDNkNOjkz0qgZBXFlAQIGsqrPpGMWWBAjVi7wm5AlUJ/0JVMgDNKqnVEdm0xcqExXfPAsgJRaIu12wZAqSvflxVo4/XBB5gI+eVkE1w/P7o1GJ6QU19xtXPDZK2ZBXry5eHAWzfqRaRZQa2wxNdD6PouqAbzg/IE4z1xSvHq/KXPqilma5HcF36eSM2J0CzKai4kxu3eNmYzTL1mdg1j6R1SQumJiKbPALfEFbMcsqr2eKFgRBE40DGSCNVu+Kqmhj6w+m8Rf65XWY6jZBDsHwtShtQMHmWF2DK2xWPF+eyR5xlYagn3KfYMz+eXOSJIPxnrDkgpkxfYHWPyEhyzphTpWRzHtSwiGb6ChdmALTontPsptIpKxx47k75WitfmYfPAHPcDf4Szuw08ExTs3ZNfhaYpfh9IxPnULJ6nrOyCg4rKmHIfWUePoFmAL48PbLqmZmH7EVIeDoI5Nsd3Y5ibJViKeMPat8rer56JUQVsSMYW6DS1rfMycD3xqLb+QxnBT6Q7bvm4Rwj3zaHFMIsUav9GFvgbLzdhZn4tvAcIeRmr8Nc2Ww3DwEg3xYV2HzFZo8HuQ4Ybxdv54bvBYyvxNuEjAI2y0ebuXZ4xDcTzq1qfzwyNA+zQ/mqJnAljI+iD7INkTipqR7Lt/0JnQ3/zW2C3Fvz8GC+Hb2ZRcfeeIaBsDAPY153q4O+wPfGoltdnVTQPLy6MN/h21EGPkW0IiIjCp69FVPB/DW+NxbdsrPx3Dz8It95GRix59k/ZaACmbswX+U7Px1GzWOLrkqgeXg7wHf5dnekwIe464EwS/GhXtzH6+/z7Sw6YHjNjomvzcNf8L216Mb4hjlseXicC3/Dt0tcQsh9jxTsjVL403ruV3wv8x60CAghcRbsiR/ynfsdy7I9B995M1p//aveyR/zvXQ9quOJOuSvu2l/z7f9w6ITclKscdXOwLfrsaYrG9h35Gs1H/Ndj/34uk5Xrcb2tKrn5huM7lkyGvun5usJ20y/cjwzXwTDKBveOzPftC9ZVd5nWH1QxJn52ldyWtLvuf69M/Ptza2uku1dM6d/78x8++Nh9zip7F4MHSpn5lv3uiVm0Ok4GwrwM/MlfTjTB2ddH1LGmflehE0/yuH/4Xvt6ete5ns/cbHyffjCfMGHtwZJbx96hl548eZhzD5RhEp/CkuG9ziY691QggnZgCC88ux+6kMpS5QxKO+Hvcbs45nfvujkFQ3P9QepxXt+bcmLd9oU/TJ1Bh4FIsC9fatv6cicA/dRM9v2mLADYuMyBSIfj0EjZvsENXRtMPe3D9WXOXrXPKD1+2FcsNF1WtV5twzTnkefTXC7f7napTXUb7zp7DiaTrqzaY8g0cHCNpO9XLdt3/CGuk2WTeRQOQZl/WnH10uYpTqdXvbpWq/FLpsqtfFm4BtvDSXozedZiNBEPHVpdupX6XQaD9u2ussSNvxGtKLSlKzqN9JcktKZW7W+ZfYVdJF6SXwnMq2em2R/jeo7Ng5c7cFsI6S5AbadQm3mLWxqvV8XdDdeMqyV162/ccNDI75ygzgKjSZJVM6Y7xeO4xS+zxhXk6Qxwuiu287fswtaA3HG6ufywVQE3FjVmHiHyOAfdhQ9Q7/dDGpjXNlD4HkYvayUsuQ9zmHC6P5fiyju7vNsZyCXYKo2D5jdw+AUk0O+i0Xv7rWY4pGlmdj2k/BxT2AWJr6N9+4GnBFo5nfOVudMzfU80sqorusKY+Lt1lq5DKvyp/7mOHc++Nrj12GSoKaU1oSc6X8WkJCQkJCQkJCQkJCQkJCQaPEPtgZaMW0uNgEAAAAASUVORK5CYII=",QM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAACUCAMAAAAH411kAAAAZlBMVEX///8AAAD+/v7n5+d0dHT5+flxcXGysrLw8PBRUVHIyMjj4+OAgIA/Pz/Q0ND19fUYGBg3NzfX19cgICDAwMCmpqaLi4ubm5tYWFgsLCyUlJQICAjd3d26uroPDw9fX19nZ2dHR0dCMauHAAALo0lEQVR4nO1cC7uqKhBFEMFHmiY+Snf2///kZQAVyx57Z6e8X+t+p42myHJgZjHQReiLL7744osv/kfA+N0tWAYYoD+x5rRmZiMbBP/1597bqD8Dr7fpM5BU+EmcdqciJ1SdoHjFnQ0jmjoKqSeCOC7LZMVsEKIbx4bH0YrJnLNxk3c36Clcsvmf2WbFdIDN4f9jm1TEcZxHxrV5CV0tG9nwxKfwBydB6fpd2aw4oAKbUzKIGQig6yUDSHzjk5VQW7FllGKmJ7rq6D8B3x/2/N2NWAhJXks/VufQ2VZsIDWhQU1kokzU6HGzSkJYjxhxGoLmSejRs0Y6ygjh0RDRf44hWqtxECKF4nDoGtR0WtnsyTptg2jrmw4GsiwxXa5q6bsb9gsMGQ0SKWsc3MZ807j6RERM/FyBg9NsEGJ6EpAGVHct+Y8GWnVumDpehSJQdDLdyXYCGedmXJnYqfN+thoyCJMS4qWzdeM+6CBtDIRi7we+qgVZQd5GNb2tdCdjSR9A8zZvDJ+EpcYbfHosVZ2HR1sd+olRy1mV+q6fVo0Z/ESLg23EPzv4wEyG1frVx4YLLWtpI4Eoq0tq+MTaeDvGPzf4QNMzT3st03AgUxGR4QI3glTWWe3xuuxTZwpgmFKPCc8YRjY0rkKUcRpRnqFQGqxfKIhdPbbKj0vf9C44OCl/tQuS8Qt378kjWssP7u2j8aYkUM765xSYKz8G9uDeFfa8LPRJQ2XPquEjI35ofceLne0u/nWjrwGawk3s152s/0J2tASyNSQNIbdOwTcMN0HwMdqAfxAd2Y7MU245Fdx+zxgFlcjln/JUwgGrgvEmSKlxoQba1ss+qLNxHfvl7BL3MV8BbMPle2d+lMkDzqe2gYvNzLQuPyZvQIXnuVHlyOh+7m8zX7KJj3pkcO430zvh4tapItfzxGdNFFqHX45m6pauzm5I07ild34TzBzUW/gc6BDCHHIhVDDKuwxxeO2Uo6zLz+5UHsJhaFit/gBYbC4alUQuimKUoThCbnTem9Ss7sPYaACbGXD3mCW0okl2dGcXCIHN52GOjXrjwvcKUXi+mJ87r4oN9KVWCNH2E4RzrIeNPSDwlcGxFjYYjdtr+izN5fTsrWzwFfRsLCEwWsLiYPHR3w8+ba7SN8FiwwmA06FIEtkw2hch9OgrLDbvavZV9D0tifxKooOUs1DFCoJmcFRFAcnpDkp+pKdBnz1uuE6lpZCk0Xnon1YGfaZmck4hpXOjZ6i+FppvYaO6cRKGJJwHET2b6pzNFoRYqzM5BSSkTA6qZyOu1Skxo/2WYpMUm81pM4vTqf4zm/p0tdJNkbyKDRLOTfyVzS0cxIvYoPw2mavj5gob/xE2jpMvnaPStTU/j7GpnJ+fn56NLP7sNBsoSi+g2EDxIdtIH9JYbViEjVJb/p3HGjaUCQUYv0GpitCeRpXKQAZPri9g9CE2jj8303iODObRvaea6ImGOD6J6mcCB+N+49BdNk7EFxUGD3iAkU2/6GxnO86051jrQ2ycZT2BUmG/YDNpLZqubFjNepiNUnKLENFPzR54pBk3vTizdJrKCxAjzhAei4+ycbLe3s/SgdcaVo+zSVwlyLwQUlOqeIScoK3TPFUcdNoDqEK0xFqcGgXce+SJt3Sa9NBGp/063mjoTcfP0gHL0Pvu7CabZ7TAgIgusBD3oDsb2eBR2WC6IJtFHJuMCvGDj7vUaSMb/DwbJ5av50k2sPafb7o8uIe4+LPqLOK7tefdJm+W6Gnyn3+RpJyBNVs7HA69bWTxoHXaDoo9Gyj+ZrZGIx8tsJUFyNBfsaGtVmFKp2lFBu5V6zQBSx5cKbmy7XXaA3kBOT2nS6gbyEooNmazDDr3k31Ym8lAzeZs7CKADJH+rN7hHFa2oQvp6NE2c9X154acjQ5zg9Yc9WYv0swlg05j6G7tms0iGNhgNDERnvTk3jaWDhtLF+ps/N4eN1aVvXrVR69gcxODbYgRZ3jMp8FuOzIk0YxOI+e2udWEpdlw7UchOR5qrwnvTTvQEFleIKqOx+roqXyaLB6PXQBLuB0UjU47wvlo9ALynK4ITuhoEMoLifb9/AVsslMNYNDIHZQc6AZbKO1KepFPqy2dBs1llk7Ta762h6alqnILL8hRVQJtpp54yl7AJk6NwEC41MFZPVphb7P5dfQENntTpaxTl8pBUqXxy9gcbDbDo5djg0c2CInDytmgf8rG+RubUXXSO2yQzebVPe2BcXOu05wtSBe2dXqdll3qtCs97XVsyL4AwBazXJUieLQqFe3IBo86TU4mxJBPC3udho1OEy0d4w1tdUVQZaRKAWxuUyXY3r40m9lgbof1Sy0wL87mVgrnEj0TUbG4bXoROGQb7C3N2NICQ84Mm6n8mCkcL0BTnWblqoZ025AIwK+zjb1uaaUC8URDqxaZx0N/mojWsZmoZzPoZUv128XlbZM0GQCGA1GlTCXaFMjFjCCANHPIWNgEOMkJ4i2DkJ6LmOKgsfubts1llTDAVKlJXuHT/FSihhcpaihu4dGqVNvKRiGujxWXd5xYucEkzRMv3UjfVNanlFFfXLChpa4IvtiqkgBzq5P+v1I2c/EGQc8o6phjr8oIV2yCfJfzyg22jBc1n2Pzrz30jBa4zqZx0pZu4TcRpXPaOPHeT1BZlTVBrUOqW2zQ+5TNGD3PvADswM3SPbDZsXIblyeCiqPYhvJ9E7V/aMIGfwSbq7Zpc+FkxUawuEyR7GnZrmB12aRR63tJ5YJHsNm8wTa1GTcYX0jE4pwNO6RRQtztLmcdJscAifQnSlCwOXghdTd1ec6muBBLw4ygfgWbxvUkYDMjbjsoVvCdp06yMw8NO1LlLTThmCYYJzLEJGo/JHziJEmspmkPzWSVXdfBgKpUla2sMlfPgZ+KvUzZzMe383FzCxjNR0+E7Lg60TjLs7HXL1GvVcbFTLun3U3jWVdo25xV1j/GfL7UNr2SmmT6JmxQfBvXbWMvkI6VLz5u6LDqh3kIpRCePC76TbwAdba34Fi1a9uYXBVUqSuHKsdHvsBD/0A7VM5GbWpQPu1w2P5slTudjpvOHRFFkfrnRv2Z7sw24PRlPYcDnNCVq5yNeidvnUkjLaGp2XNn3rl5y3yw75TNm2bSD0VPtSnn5Et0MXz6VVypv3EHn6f8urJBH6Fsznua2WCQ6p1G21znOHJtX2ZPQT+HzQ3baDYbzWanf9Y1snm/bXplc19DA26zuTpu8OW4eYmyCSOlYkZlo2SIN8iQX7G5mHvqKj34ohuVjToXhS9QNiCvlMKS0UQX4dHm5Jmy+S0bjPsqx+fg4Tn4BVrgQgH0y2Pmz3Ns+rpn/j+L+AVs+lQLHvyR+RmtSTY92dP65lt0ejKvyEDdxVNs7jbhy+ZKVV82L2Fzb9p0F+BQtBe4CTT8Cm84vB09hytv/WJlqE2xuT8JfIDMQ7Y5izfXlM2mt8146eO2WYANeklPs/Aom2k24Y9IOOd+RPg9JMJppoeAtNVsWs2mNXOkxLqymR7Og0Q+VPosGVxKpbTbeHfh+k43PQRs9SLoz1HvFqj0xMB3rSu76eEVbHbyo3y6p3XO56D7spmwKT33Y/B8T3vy/mXxfLx53ssvg89pyRdffPHFF1988cUXvwb+NJ38HOx18tUjXiCx8zmInv+l3geheGLc4JvDDs+Uh+261295qqMUf79VrR3BHqd+aceA9gfqu5k87Fk1EwbPzTD/zkY/N9T/Cwcaosw0DSFCdClr7aX0/pY4b0geh0EeNHnI8wA1mbxSlmIOP1Z6k22gZRmLS8FDnrGOVTlnPGQNi4XL85aGguVNg1DA4ChoM/OTyCImLN/nmdiLPBIsaooyiQKxb0tWtgI95WKfYYN4FDZFXIiwiGWLSFnuGWsFadtsn4uItEWBUVMQkbO9YEWbo7iUficKKC0JKkjp7Uses4xRty08STtyg8ut+b/Afy9S0OkDMNCpAAAAAElFTkSuQmCC",KM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAY1BMVEX///8hISEAAAAiIiIaGhoRERFxcXHNzc3v7+85OTkWFhYcHBzf399UVFSLi4u9vb1cXFxHR0f39/cnJyfGxsbp6elPT08JCQkzMzNpaWnX19eEhISjo6NAQEB4eHiYmJitra2lm1k3AAAIHElEQVR4nO2ci5aqIBSGFSUTvIUXvKbv/5SHDWrWpKVlus7ynzmzyiy/gH1hg0fTDh06dOjQoUOHVpfj7VdOBxmFaL8Ko5aywLqxV+m4aClPWNf3ySm48GlIuXXPPtUjJan9/akmD5TI+oEvmSsLHZTf0kH5PY1ROtnWzkcqcyYpM3BR2wtlU5SObW4NKEXs+CUl3VaCwLSdV5RbB2/jHUrixuctFbvkNaWB3fPHLuQTnV1svG7LHVD+L215UL6l/5QyXlXsA8qbjbM6cIPV5LqFM0Y5x8ZLhMmaQsEXepydsLFmRmGY6dPGnDkua7RqUxLkPh2ZMynPRbKqsnx5jw8iJFvXxkcc3hEhv6eD8nv6jyiPLPgt/Uc9fqNk5cVerKoZScy+Tdl8khNh1PyE8rOcyEDXhY0508ZrRHXxA7/dvxkPUT1CwayyjCaG/kwbP58QXyxUxM8h8oBijIPxculsG2cfaIQhSjmUq3DYfI3y+/JDosYtQf5uKR0bIDEHTDt6fs52lOdzDIU8K4FVOp5dgZWk/lkdX0C5QhyPy6BK7Sq5hFDDxaez5kFh3NQvSWWnVVDfGdpGcTxOODYpNU2TypYEphNgUpPAcYKS4Qxomx6P71YUeCY/nRWE3mIGvwxacxtKPwQQVTLn6NTOwWMPob6MruPmE8pv+MkaLDq00zAM08DvX2f+yYZDdig4+el2/tw6URO4C+Q9BB2wFDLmHDXYj0ENnt1RzrGehTnRY5pRiEvRCco8pQYelIzm5kR8UTZE0/vGfNWWVvqnLefViZYs/egouLe+BT0+hzJetnJqP6Q7YD1DG479pvEHzR3pgnKu9XyeEz20lScoSU9pBQYXXyUM+taNDDEu57bltyOkGHZirHaZhUexdJCUIK+9TC6uScPbkNgiQlqQqpmpamDmIdpbGTq1B+UWnLQZUP469jQywUClelZCSkQ5xjITRp466oNfJ6TcjNJPIUdDKnZrcQXtSk51eeXiEQ1VksFUhkSbjShzmfSia7+cYAh7liMwAmDutZZWwEAw2313v7YedpVJ+amz+gu5dT7kICRoHRLziMDEqs6+1HpYbo1MCKflABYt+o8TzNRoPykOiE6rfpGihDBq5C3lgh6PTuCrL+X8FraEWZCB9wXHmXTTaNHOdBAAMtxFqEWUfgqBUsfd7pkZkp7w5mI0BD6pD2zQln2OHtlUpO7RUkorJV1CHcxtzTM00AATPE43wbUElpl0A8kHMyNVNy7nUjK4kHBm0r8Ngu178iETN/u6lidsnKix6ATic3GX4zVceFWKlWEtsHHHAI8bXCGCUPJ8GWlCMtZ0l9dyaclVbVnlBSyJt+3qy4iECtZRzrXxhugirWKak5i60XmR98U8aE3adjPzoGNMTMSvnKipk6IUWpJf2/cs6PEat3DCvxndt52DWUIwxBf1bDidNHiizFF6Vap3Hv4jykikNlwFEcv3Z7jPGjyh3o4Vx+3SDYou7bEYvCqu+wZYQOnDJyQdLpQko4vJcei9j1kM80tWVhiyDW73/SJydX35vEd90dZ75JDbwPBqZIJIZgzRh1w9burr1WtuzndRrn5v4yr5S3IXGkR45MhU7tOUDvmtYeo9zChgCjB8Brn6A+XsOG5BnYRINnEpqyLiuXxSx/XpWluvQaWXnJpDfjY7UypQW88h17Pvgs8IExj9F1fMX3havAxIMB83p+bj9ifz8VYx7SYBbqDLyp6ndmmaEN5pnyOOylOUz6oz8tiH83HNL4oiS/uZihqSkHgXN7dHXkZ3sB4aXIMsy4qB0WhOU4hD7jX7rE7kQ8aG77fgUuQKX+mEagLDOXnt6Rv4moQLBySGSNr7Bt9GsAQiDstRfkc5w3rYict9pbpBiYEJLONgktbKsScE47T2r39qV38VB7C6ZagfitSNMKwkMGLkC7rRbgOe0Za3HvdUvxJEr02RpISmgdelrXFZwGM2tg1sKEsfFJza1KM0blNe8fLQuOZWYCpZUanqiGnMsaIoHzKNrug8wcxkXKRIZkiw0uNTOQFGRMXKu5rNbBsXaM7Spdk7MZFziClPLescqG4ghaOmlweQzD/kg9utpChKSHdlJimbltcimScLKVfZEdFRajXtc6JaG6XcaEdET6mVpglWbVKw9eVtuTKl1mCExa+cOO+XElbSgtbL7phyCPSfU8J9FMsq1RM64wlK6/7ct+6j0KldfP2W4AK8+HNKPbw+nAtVj9d3zsi1VmJ2fwYP2z8PB944QQZI+pxSXO7uDW/e37OSKP9LGZDn55JJyvNl2XrZW5T4fUp+OU9Qan6lh2tIn+jxJ2dfVCo3ej+kE60hKD6MWU/aWH/ObyceP75rk015ovFK3q8pZ3j1gQ7KJ/oWJfdjZ0XhUeuhaTR25djnD5S0Si4rio57IqMae1NS0cf/fQF2Ja2nKa8+fmW5u/COcnX1EZLlORtSTgt39faSr3tTlBBQkhbNs9N2/VTFHnPqjZh3NRvWrHd7Watb5uYEiNJ2Z5sal8nkOwd7tVe/Q7iPPbKqDOVl/2bjk28d81IrqPeXUdXaAIF18lf+8sdqKVmjKkPS5JHH9kgZslom7dwNZK+jwtkjZQFVIkqyOC7kfh0cCG+/M0pdljEph31ErNZlhRio90YpR6NaymMlaR36DinJbQ+WleKdUpLhTr1c2dCeKFVdNbgDcuQ69J4oUwLLEw+BBNb4jcF2nc1VI4T+rrKxEg5vwfNcLPKeTlnyemKF8tChQ4cOHTp06Ff6B2EWPqdDSi+RAAAAAElFTkSuQmCC",JM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8AAAAREiSJiYkGDRMAAA3x8fHY2Nj4+Pi1tbXHx8f8/PxPT0/b29tAQEC+vr5tbW1mZmbp6ek4ODgmJiaQkJCioqKcnJxUVFQTExOAgIAZGRl6enodHR2qqqrOzs4uLi5dXV1ISEgAABsUFhoeIiVOT1kiIzEZGShBQUwAABU1NTtLS1FZWV5ZWWN4eIBoaHBjZk9yAAAJXElEQVR4nO1bi5abOBKlhraEZB5CvDFvJ5nt7GR6/v/rVhJvm053Ygw+s77nJIe2jXwpVV1VlWRNe+KJJ574fwHnezNYAGN7M7iGdTpZe3O4gglg7s3hEiUI0L1ZTIF4aUtSdsnR3lxa0CiNT9DhFKfRbvYyRqfGcAE8vGUZm5JyqvH7yjmncnjDaIpNSdkw+T5nysmZvl5t5mKI6NKtWTTYhCQ9pYT0r+GIib+9tNiG1zG9ch6zJzVKldW9wrbyq0x+Wz5yQnZPyh7tYlXyBXcjSp0V3NEE3OtJeeOq3BoUL91/F1DwG2hGo2BfzpycQ39ivhqaCraLvzDDiNSjUShA4yDkNNOVhteE41TfjNRx+K+FE3cGwrHz/qc2Blq8fOKJJ1YBx2Vp3RBayCpLvG4RhjO5uiVxMJMdZOHSIUUUBPqAIIgK4pR4/gDHIJaJhJ2tt+oYAUCdBUFqgk+1I8dOlI0Z8Ps4xVnkYH7UqA9mGgRZDRCslTQwMEmkp3pECZyK1PuQzQwipToBoWoAYsJKJWsgOHVEAnJQWUvl58nPiLRIcr/K5cWBBB1BwSpYgxM++TocXhQgqtXYTA8LhzoSZAnyDeoUoc7U09QRtPcfQPdPa/hVBl8Un6Q6wcGr20f2PbsxYzcNwrAoJAeqIEkWRRgGqRubje35rT1r7wCnKlHMvkB2OyejfUiZm2DBqDqAmUH1ickbcRA5aI1lZtMOdbuvU2g5SY3BlZpCDIRbVimmJwpSVn9IUNxUyTnjLasVqvugHah1BFP4loik2bDow2gUvtQWFLgd63ZXZ3Ig8MSVw9yv6kGdaXGn8eoTlvrqMnmPpwa7XRVqNU6kaTrE7hdltAtSn7DUyxc3BpEZqyiE+mZSrhqHaCgBjnNFigCZfOBTpHLMIUEaUYPdXnalahxH4wkUJJHXFpnVKJ8ilZACEi4KeTlAejOpoiMlTAbeixR0y4Fw8oGxEh1x6WaHF0/VpS2p28su3E2fhlguBFRPJalp/CyRimcykepC13Im8oZ2+m6XdCWerWmw43AtBEyBTVKYJVLZLIcINe44ikkI64jnMYZZFBeAS4inpJprUtGM1DhdUl9mN/8u5NMdYPiTQGnBpGWmofiaFMlnfw2flQv7zCF/F+VJmnzIZIVIcYBp+Vlfk6ITSyWjqnE5e6dSux3t/EUjqUKQmvTxDXZNyhod3WtGUsFas9fKMNT9UBQCNJ0R7ZgtkBov43pYKY/17PFug1K/fmQstA9m+qdfcaonHeOMDRJAlfauw0mJ+iBNOGFaMtvxuCalT0jpbEg11ezdLucdD7Xkdb5tVbV2Am/i6cEVqYJOrt2qc0DULoIrkWrlpYtk3pjHBqYhFF6RKidNbFo3vP/cKmlLDxnKfY/VqD2ewlRsims/J8NlYtl1K2pC+afScjtk/tILM0usCKYLDbnkVPFxRnOes577KlnLCOlV/faBDlS4TD46VXmZpMdoVAkXQ9v2RBWs6VEtkyEAC1E2wKzj6l+QyrRx5SmczsIq9NZty8rIOeQqjMSjSxrjRKDL7CnQxmsctDJl5YcxgteCCp1YuulRuHwtnWV47zL1JCMpn8cgvY/HsNJSPAWSNRuYqZACAE1uJowJyWXuYo2rTC2WJOF1qSnvblZvHaui9CCX4gywVAFz+Ip0zimZiERgCQ+zQPUi7rHFXPeVJIFIZQHD4n8hVJU2Bp8Tisns6tl4fU7ieVUnIA+pKNwq9eUdLrZG9eMQfL4hcoQwb1sIdzm2oHf9CblXpWzRexWak3KsQSNqVdO3t91nl4ZXXZdKVFwqDej30S5KBz5KvON0jamXQ3WnozCtb8jSL22rha7+nqd5NnL7yxzJGDis1NVYhso94CsThIxIfWuXRc7yhIyP3iUmtmFf4WV93RwgLCKWVCRNVnRrS8uKTle/YliNc6uQBhKWe4HsbntsQtZV7sHzpg97JdLTdkJOBg9ztUbpvojb1cV8hEiyQaNYmooYnXViGen1SMofr4XHC0NhKpL85H5nTWSAB7YIOg7NsXckX8ez4xLDVOpGI+zKPVvMp3fHzUkV7I3yqkBzRx4mXCM+BsqjVJySj8e+gVXTLi/CZiX6eQeWl619hBWbu3ISEYjajNsB37J+0u3MS6Hr7epoGJvtbqciFbfetxXm1Wol3udhuOBh7i5Tqjn2pkc8NoOsDohWLLTM7PAoIiLb5TSAIep100LEnE1iYhJkmVIQ9uAkUIpYrCky5GYec10mtwQNRGsRb2s0oX4TSK7LNgtL46hglCGT8xnte5DDqhfcfPejscZlKSpy4L05LXSC7pXO/Qr4RXc4fogj4NxvOOdll2D5D8FJNjhKpQ6PREqzwbcHAbX3ZtOhnOwv5Duq5hzRSGqlLvkKEMlVP33Ox5/eCE7i+snpwUiJqqWq2jT0zonvLyBKijw2H8unkO05oLdJqP0oBz1FFR8BrR9n5VPJC+PgHfscxt09cVFlXWRkQAdSDxCBBCqshbKamhQ2e4egmC6uq9bhtB27KyVZ9yUi9Yzdup72E3b1K+FPFnbCQNfTLEtTecwzdLDc5dqPEwdgWRCFxQRhFGQM1tzX+yVGxVIDaIBZ7MCLfnhCydv8l2Ky9+ogA5PAdeu4aWyFpolr1w0IRkjo1x17ios4qt80ucKtaWldoKTC9V1pSLbtzy5kI8jrs2B5HLeHnyddvpds3gwSpEp17juMdFabtnd9HNXG/vakKGtM2WgJ5EFdyS7SM9dLdiYV+7GXX9pnb0uZDInKWHg21Zc6snuROh4RpsFCg3EfUhqDMmaaFbzftbYtf9MfliM5Ya4fl9jiqCS6u+RcOUs8nW6Xsk+aP54dszRlsf2Oy99jN3sZ4rtM8z0ag6Vs04w3zGESqNKIUOoUkTCSaVcDv7yym5qlUeFQSqK0gmRDUgK+HaeEClHgaAb5CiVpbKtm6MakevhmrTK9UGi6yO9qc9aZ3YnUz7Edqc9z2tDRycJ502Vkm5aAqIxSN67ekYW8it00KvdodhjIwtRxiiDNGHMFGMvSoHAcii30ANsOTzzxxBNPPPHEvw/6A0I7PCC0Px4QS6S+n8/d1fmP88L7d4ckdf72539eD+cz/HX+fjgf/ptm3/4C+P4dXn/A36870GpJ/fjz7e3129vbP3+/ffsnSps38g/58cN506PX162YnLt/Av8Df2Scnqpm3HYAAAAASUVORK5CYII=";function $M({forwardRef:s,side:e="left",title:i,institute:r,period:l,details:c,delay:f}){const h=f?{transitionDelay:`${f}ms`}:void 0;return j.jsx("div",{className:`timeline-item ${e} hidden`,ref:s,style:h,children:j.jsxs("div",{className:"content",children:[j.jsx("h3",{children:i}),j.jsx("p",{className:"institute",children:r}),l&&j.jsx("p",{className:"period",children:l}),c&&c.map((m,p)=>j.jsx("p",{className:"detail",children:m},p))]})})}function eb(){const s=[{side:"left",title:"Undergraduate — B.E. Computer Science",institute:"K.S.R College of Engineering",period:"2024 - 2028",details:["CGPA: 8.7"]},{side:"right",title:"Higher Secondary (HSC)",institute:"Kongunadu Matric Higher Secondary School",period:"2023 - 2024",details:["Percentage: 82.3%"]},{side:"left",title:"Secondary (SSLC)",institute:"Kongunadu Matric Higher Secondary School",period:"2021 - 2022",details:["Percentage: 89.4%"]},{side:"right",title:"Achievements",list:["Presented project paper at TechAura'25 (IEEE).","Won/participated in college Hackathons and Debugging events.","Active participant in national-level web development workshop (Oct 2025)."]},{side:"left",title:"Certifications",list:["NPTEL — Internet of Things (IoT) — Score: 90","How To CSS — Codekaro","GDG Campus Solution Challenge — Certificate of Achievement (2025)"]}],e=he.useRef([]);e.current=[];const i=f=>{f&&!e.current.includes(f)&&e.current.push(f)},[r,l]=he.useState([]),c=he.useRef(null);return he.useLayoutEffect(()=>{const f=()=>{const m=c.current?c.current.getBoundingClientRect():{top:0},p=e.current.map(g=>{const x=g.getBoundingClientRect();return x.top-m.top+x.height/2});l(p)};f();const h=()=>f();return window.addEventListener("resize",h),window.addEventListener("load",f),()=>{window.removeEventListener("resize",h),window.removeEventListener("load",f)}},[]),fv.useEffect(()=>{if(!("IntersectionObserver"in window)){e.current.forEach(h=>h&&h.classList.add("in-view"));return}const f=new IntersectionObserver(h=>{h.forEach(m=>{if(m.isIntersecting){m.target.classList.add("in-view");const p=e.current.indexOf(m.target);if(typeof p=="number"&&p>=0){const x=document.querySelectorAll(".timeline-marker")[p];x&&(x.classList.add("marker-active"),setTimeout(()=>x.classList.remove("marker-active"),1200))}f.unobserve(m.target)}})},{threshold:.15});return e.current.forEach(h=>{h&&f.observe(h)}),()=>f.disconnect()},[r]),j.jsxs("section",{className:"education-section",children:[j.jsx("h2",{className:"section-title",children:"🎓 Education & Credentials"}),j.jsxs("div",{className:"timeline",ref:c,children:[s.map(h=>({type:h.list?"block":"item",side:h.side,data:h})).map((h,m)=>{const p=m*120;if(h.type==="item"){const g=h.data;return j.jsx($M,{forwardRef:i,side:h.side,title:g.title,institute:g.institute,period:g.period,details:g.details,delay:p},m)}return j.jsx("div",{className:`timeline-item ${h.side} hidden`,ref:i,style:{transitionDelay:`${p}ms`},children:j.jsxs("div",{className:"content",children:[j.jsx("h3",{children:h.data.title}),j.jsx("ul",{className:"achievements",children:h.data.list.map((g,x)=>j.jsx("li",{children:g},x))})]})},m)}),(()=>{const f=m=>{const p=s[m];return!p||p.title&&p.title.toLowerCase().includes("undergraduate")?"graduation":p.title&&(p.title.toLowerCase().includes("secondary")||p.title.toLowerCase().includes("higher secondary")||p.title.toLowerCase().includes("sslc")||p.title.toLowerCase().includes("hsc"))?"school":p.title&&p.title.toLowerCase().includes("achievements")?"trophy":p.title&&p.title.toLowerCase().includes("certificat")?"certificate":"graduation"},h=s.map(m=>({side:m.side}));return r.map((m,p)=>{const g=h[p]?h[p].side:"center",x=f(p);return j.jsx("div",{className:`timeline-marker ${g}`,style:{top:m+"px"},children:j.jsxs("svg",{className:"marker-badge",viewBox:"0 0 60 60",width:"72",height:"72","aria-hidden":"true",children:[j.jsx("circle",{cx:"30",cy:"30",r:"28",fill:"#ffffff",opacity:"0.9"}),j.jsx("circle",{cx:"30",cy:"30",r:"25",fill:"#2196F3"}),x==="school"&&j.jsx("image",{className:"marker-icon",href:QM,x:"14",y:"14",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true"}),x==="trophy"&&j.jsx("image",{className:"marker-icon",href:JM,x:"14",y:"14",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true"}),x==="certificate"&&j.jsx("image",{className:"marker-icon",href:KM,x:"14",y:"14",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true"}),x==="graduation"&&j.jsx("image",{className:"marker-icon",href:ZM,x:"14",y:"14",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true"})]})},`m-${p}`)})})()]})]})}const tb="/react-app/assets/image-DDgSvGtY.png",nb="/react-app/assets/todo-nTVyP_Gy.jpeg",ib="/react-app/assets/ecommerce-B4usTvQs.jpeg",ab="/react-app/assets/ai-2YXK7Q6p.jpeg";function rb(){const[s,e]=he.useState(null);he.useEffect(()=>{const r=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&c.target.classList.add("show-animate")})},{threshold:.2});document.querySelectorAll(".project-row").forEach(l=>r.observe(l))},[]);const i=[{title:"Portfolio Website",description:"This is my personal portfolio website built using React. It includes smooth animations, responsive layouts, reusable components and a clean modern UI. I built this to showcase my projects, skills, education, and contact details. The entire website is designed from scratch with full mobile responsiveness.",more:"The portfolio includes sections such as Home, About, Education, Projects and Contact. I used React Hooks, IntersectionObserver animations, and modern UI styling. Every component is separated and reusable. The project also includes smooth scroll animations and a dynamic typing effect.",tech:["React","CSS","JavaScript"],image:tb},{title:"To-Do List Application",description:"A simple and elegant To-Do list application that helps manage daily tasks. Users can add, delete, and mark tasks as completed. Clean UI with minimal design that is easy to use.",more:"The app uses React state management to handle task operations. Tasks are stored locally so they remain saved even after refresh. I plan to add Firebase backend sync in the future.",tech:["React","Local Storage"],image:nb},{title:"E-Commerce Website",description:"A full-stack e-commerce platform with product listings, cart management, and checkout flow. Fully responsive and visually attractive interface.",more:"Built using the MERN stack. Includes admin dashboard, product filters, cart sync, and backend authentication. One of the biggest projects I worked on.",tech:["React"],image:ib},{title:"AI Reminder Assistant",description:"An AI-powered reminder tool that helps schedule tasks using natural language input. Simple UI with advanced backend power.",more:"Uses NLP models for understanding reminders, supports voice command input and pushes scheduled notifications. Built using Python backend + React frontend.",tech:["React","Python","AI API"],image:ab}];return j.jsxs("section",{className:"projects-section",children:[j.jsx("h2",{className:"projects-title",children:"My Projects"}),j.jsx("div",{className:"projects-wrapper",children:i.map((r,l)=>j.jsxs("div",{className:`project-row ${l%2===1?"reverse":""}`,children:[j.jsx("div",{className:"project-image-box",children:j.jsx("img",{src:r.image,alt:r.title})}),j.jsxs("div",{className:"project-content",children:[j.jsx("p",{className:"featured",children:"Featured Project"}),j.jsx("h3",{className:"project-title",children:r.title}),j.jsxs("div",{className:"project-description",children:[r.description,s===l&&j.jsx("p",{className:"more-text",children:r.more})]}),j.jsx("button",{className:"view-more-btn",onClick:()=>e(s===l?null:l),children:s===l?"View Less":"View More"}),j.jsx("ul",{className:"tech-list",children:r.tech.map(c=>j.jsx("li",{children:c},c))})]})]},l))})]})}const sb="/react-app/assets/html-BlhLRGzY.png",ob="/react-app/assets/css-DlZE0Yf0.png",lb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOgElEQVR4nO2dCdCVZRXHz8Pnwi4groElmijuK6m4YCqJpZmJqJla40qGWjgYZZQL5p4GJZlboKKTGzoouWSAiQsuqONY42Q1LVrZYlpZnebcy51B6uO7977LeZ/7/H4z/wGGmfve5zznf577vu+ziAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtIW+JIqIQafkgKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyB/Sp+yKQJHwmlft+3l4kumiN62dmixx8WdJ9dg246LOjggUH79A4aQv3v79sg6Oab1P//pAlBL50iev9s0b8tq3bBkdTwDnjsisHA7zwj+v1viB62f9C+vbN9395rBx03JuhV00TfXFrF/kgM74DHriob+A8/EZ16YtChg7N9x+40oF/QyccGfXVhlfojMbwDHruqaOB3l4teMkV00IBijLuq1loz6PRJov94rgr9kRjeAY9dVTPwy/eJ7rZtOcZdVVtvHvSp2737IzG8DRC7qmTghdeWN+p2p769g94zEwNj4AqYMyYDz7tcdI0uX/PKCtn3mP01r/5IDG8DxK4qGPjumdUxr6yQvY6aezEGxsAVMGmVDWz3vAP7+xtWunnltGRu2f2RGN4GiF2eBranvttu4W9UWY3WHxL0tYcwMAaugFmrZuDzJ2e/fhkaN6a82WaSGt4GiF1eBv79Y6L9+/qbs1ndcCEGxsAVMGxVDDztZH9TtqIh64Ra0Sm+PxLD2wCxy8PANtNqw6H+pmxWgwcGvWZ6Wf2RGN4GiF0eBr732/nd+24/MugVU0WfuUP09cX11Ub259J5oldPE917l/oroXY//9hDgr6xpMz+SAxvA8QuDwNPOjq7cfv1qd+X/ufFnq9nr4J22LK1z990WKgtPyy/PxLD2wCxy8PANuc46/vZR29qfR3xxPE9f3ZXV9Azjwv61tNe/ZEY3gaIXWUb+O/PSs0kWa553ufba+u/losefuDqf44/eZt3fySGtwFiV9kGfnF+tmvarht/far99trIOmqz//3MGWeK/vP5KvRHYngHPHaVbeAHr8t2zQP2yD6pwh54NeZejx0d9JUFVeqPxPAOeOwq28C2cCHL9T57eD6zor46SfTa85p7CKal9kdieAc8dpVt4NuvzHZN28ius/sjMbwDHrvKNnDWd8AH7omBOwpvA8Susg38yA2S+f2v7VLZuf2RGN4Bj11lG9geGGW95qxzO7k/EsM74LGrbAPb6NmrV7Zrrjso6E/v79T+SAzvgMeusg1s2nJEtmuaRgwPtd08Oq8/EsM74LHLw8C2QCDrdU22Fc+NM6r3Kkgz9UdieAc8dnkY+KaL8t2Jw1YcPXZzp/RHYngHPHZ5GNiOTFlzjfwM3JAdZLZgduz9kRjeAY9dHgY2fXI1iwqyasetgt5yaTXmNmvL/ZEY3gGPXV4GtuWARRm4ITti1FYu/XZRTP2RGN4Bj11eBjbZrKqiTWxae62gnz406LN3xtAfieEd8NjlaeDn75LayYBlmHjl1UwPfLe6T64lNbwDHrs8DWz6+uk+e0NvNzLozZeI/vsF/z54b38khnfAY5e3gc1AB+9TvoEbsu19bruiSv2RGN4Bj13eBja9uVRqI6KXiUWCfvhD/mcDY+AKGCI2VcHApt8tzr7ZXVZ1dQX94gm+q50kNbwNELuqYmDTHx+X2mQMTxOLBN1qRNAnnDa3k9TwNkDsqpKBGycW2iiYdcVSVq3RFfSCM8p/Wi2p4W2A2FU1Azf0w+9JbSKG92h81MGhthUuBsbA7maNycAmO0zshMP8R+OD9irvvlhSw9sAsavKBl55G9j9Rvua+JCxobYxPAbGwO6mjc3ADc2fJbrLNn4mPuv44tsqqeFtgNgVk4EbWjRH9KP7Zjt1sB2FEGq7ahbbH4nhbYDYFaOBG3ruzvo9sh12VpaJN14/29EuPfdHYngbIHbFbOCVZ3JdeY7o+zcux8TnnlZcmyU1vJMndnWCgRt6d7norZeJ7jSqWAMP7B/0z08U1R+J4Z00sauTDLyyFl4rtfnNRZn4m18qqj8SwztRYlenGrghO+93/93zN/Do7Yppt6SGd4LErk43cEN3Xi26wbr5GbhXr6C/frSI/kgM78SIXakY2GR7Y+21c34mnnd5Ef2RGN5JEbtSMrDpradF99gxHwN/4YT82y6p4Z0QMcvm96ZmYNNrD0ntlMOsbT94HwyMgR0T+fXF1TSwLWIouu02LTJr27f5IAbGwE0m3M8flNrWqLboPa8kthP+sibxkQeFXN/jXnhGfXRcOq9YAy+Zm73t6w3BwBi4h0Sz0wVmnCnat3c9aU6ekF/S3Ped7El83Mfz+T7L737vQoVRmxW7DtemQ2Zte78+GBgD93CavW3vsuqE+rtn5pPENtplTeJTJ4bMo+75k6W2+fqqn33OScXeX2e9D+7qwsAYuJvXHXYEZ3erbQYPDPri/OwJvOdO2e8Dp3wm28buq5v2aNva2ESMIsxra3vt87O0vX9fDIyBV9kjeda5UjNoT8lj281kOaX+hXvy2VDdFhG0c1tgG7o3cyrDpsOCvrEkfwO/ujB7+zdaDwNj4BUJZXsS79riYvWhg4P+6Mb2Rp8xOYy+pjuuau3adj6RnR7YyjXGjs7/fvjqadkNvN1IDJy8gf+0VPRzx9Tvp9qd0jfp6FA7c7eZxH17mdQ2asvDvCZbk9vsqDt9UvvnAo/fO799qexzNt8ke9uPGIeBkzbw3ItFNxyaj5HsKfVJE0LtyfJfnnzvdWxr1JfvE71iqtR+kuZlXrumPYTqqZ3LfiC6fQ4nL9i+WLYBfNa4n35MddcFS2p4m7Bd/eyB7A9RVie7jx4xPOjwDetGK+Ia9hCsmbbuvkN+17T7zgWz24u5/QyffGx+3+XB6/LPC0kNbyNmkY2YRRm4DH3l1OYMvHiO5L5/1d671I8JbWanSNss/pZLpfZuOa/r9+1dzHtqSQ1vE2aRLUfLY06ul1o5DGzi+OJ+adi9qE12ue4CqW06d89M0RtnSO1khUP3C7ruoPyvO3E864GTN7Al9mVn+5yPm1X287yVY0dsAYFtReP9vfPSw9cXU9QlNbxH0awyE4wb45+QrcoKT6tttZ+x3t87D+00qrXihYE72MCm3/xYdP0h/onZrGwktddf7bT1xCP8v38VH17pCklqeJsvz3nPZe5vnEUXndV+O+09dB6vlLw0oeD1z5Ia3sbLU3d9q9hXS3nIJkBkffpqvzi2+IB/W1rVsA3yXc6JgTvMwCZ7elr2kSHNymZR5bVO95cP5zuppGj171vOod+SGt6GK0L2sKdPQZMvsuiqafkvKLCn2d7tkh5kSx3vb3PyCAZO0MAmq/Z2Do938jY07eRi7v1spZFNyvBun3SjQQPaWzCCgRMegRv61SP5rNnNIvs5bxMiimynzaf+8intL+goStuPDPrSveX2uaSGt8nKWCN8zfTm1gjnLZvBZBuil9XWx28t/lyjZrTWmkGnnljslj4YOBEDr7xLx6c+Vl8+WMaoa69L7Jplt9PmNl9/gc+9ca9eQT9xQNBXFvj1s6SGt7HKlu2kYdvt/L89pLLKfsIeMra1Oc5FydYP28O8Mu6P1xkQ9JQjQ23JpXe7JTW8A+4l2zvZTsjbd7f63lFZRh3bCcS2uPnFw/7t6u5p9SVT6mbOa7KLvdO1bXptR5F3ctooIA9JangHvAqyA65tIf9XJ4kefmDQnbcOtamZNrJYstpobffQm2xUX8NrezmbYefPqm/u7v39W5GZbdGc+t5hpx1VPx1hhy1DbWMEa2OjmA3oV//3ZsNDbfsgWz1kC/Bvv7K+Ftu7HdqNJDW8A46IgWJgDEwhoBAoIzBJQCGIOwckNbwDjoiBYmAMTCGgECgjMElAIYg7ByQ1vAOOiIFiYAxMIaAQKCMwSUAhiDsHJDW8A46IgWJgDEwhoBAoIzBJQCGIOwckNbwDjoiBYmAMTCGgECgjMElAIYg7ByQ1vAOOiIFiYAxMIaAQKCMwSUAhiDsHJDW8A46IgWJgDEwhoBBoiiMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEg+/BceiofdqS/+vQAAAABJRU5ErkJggg==",cb="/react-app/assets/reactjs-LYxsbuPE.png",ub="/react-app/assets/c-BYUoo2FU.png",fb="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAKQAkAMBIgACEQEDEQH/xAAxAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgYFAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/2gAMAwEAAhADEAAAAvVAAAAAAAAAAAHzex05sFNtX0Xx+ZR9Bt8johP1KJquAAAAfD+58qVbLzFleLnXjtghB6vTl1ZNIJAAZfj106M1sVcyjdFMFlM8iEdepsqs8fd1fkuduG2tn0Y0fPwjZliHfFcfZsqs+BH30e+fv+zrhLrmHk7Hdc8bB61DPohzyXNlWvI9D571WW/mDydZEc7MIj0hHrri+zmgetnA+Z8P18Tr8f6q6mifEI8zSie5cri2Oqo29WxxbJaISL4gARRoqp7nI8zQhEe6aLONNemzmd9MiYAAAQcVXqe5mlCVNybYyLOAAAK7IKK9MGPjbyY51iiy3o4snoiQAAAAAAAAAA//xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAE1doAAAABedSAsAABGIHIBqoBcCEGosocABV5u0OtIAAZgJQX64AACGBd68AAAAStDoAAABSgRQgCAAAAAAAAAAD//xAAC/9oADAMBAAIAAwAAABDzzzzzzzzzzymkQrTzzzzfpzt3zzihXJecG7xGDujuKC7yN2525SvLzwFFCFhpXzzzPPy27zzzzjOWTTzzxjjRwCTzzzzzzzzzzz//xAAuEQABAwMBBwIFBQAAAAAAAAACAAMEAQUSEwYQESAiQlMVMiMwM0BiUlRxcqL/2gAIAQIBAT8A+W02TrggKahw9TCp5EvTov6E/baUHJvmhmISBIkAQwka2ugdbMeInlucrTUP+eSLCbbbyIMiWgx41oMeNCID7d20EhwLm8IuKx3N0n9B08stzNOLrdPz3EQjTIk5e7c2WJPL162eZTdprcyydQPIlOmFJkG9XvUBwgnRq08g7grwIKoSyDKi2omOR4HR3ojr3InERojVlZJ+4xhp2de9iebQ41DIVtPK14HsxxVTTARDHi9JwL+uSrHtv7//ACg2UF0AMZnSX4q1WZi351EsjLv5L0y49AMQ9ycrUVU1NpbZMaM3ED4/SooE3HZCva3zSrRAklxcZ6lTZa20LLgai22HF+kzj9t//8QAKxEAAgEDAQcCBwEAAAAAAAAAAgMAAQQSEQUQEyAiMlIUFTAxM0BCU2Gi/9oACAEDAQE/APhuYKlkdY28u8M6BiM9fc+cTtEssWc16BGjQYZ3Zo4VUw1sAtCCDFfTDkubxjGdJ4jOKzznFZ5wiIu6DLEBK2CXKBEMx3Orok6/zcI5dIwNmXZDrhParvwlvsh5M6+2JSKwEaRwapPcdMgOkIdCxrNjJE26l+MoMoMEZSku64IPe+xBpZULGbLteA2vXllKDDJgl0BlKHcfo/1PcqiWnBlxdMd8+3ktjEXBrBpKDFeoBjKtLoh11I68y7hy+057hcRjnM7z+2//xAA2EAABAwEEBAwFBQAAAAAAAAABAAIDBBEgMDESE0FRBRAUFSEyNFJTcXKRIkJhgbEzQENQof/aAAgBAQABPwL+qkqoI83o8JRbGOXOg8L/AFc6N2xlN4RpznaE1zXC1ptGJwhMWAMac81BSSTC3IKaF8LrHXKepdA+3ZtCBBAI24fCX6zfSqOqiEQY42EKunZK5obk3bdpOzRenDraaWWQFo+Vcgqe6Pdcgqe6PdSUc8bS5w6B9blH2aL04FRUthG87An1k7vns8lr5vFd7rlE/iv91yifxX+65RP4r/dOmmcLDI4jzuU/ZYfSrTvQeULs0mskc7Cp+yw+njjNyodowyH6YUED5pA1v3O5GwBrRkBxx9a5Xdmk+35uRxvkdotFpTODG/ySey5upe89c20veeubKXvPQ4NpN7k0RxN0Y22C4zrC5VNtp5PK5SxCGEd52eFH1xcPSFIwse5u48QzCfnhQjM3a2jMvxs635Tmub1mkIdYeafngtYSgLBgSZ8YNhWtO5a07lrTuTTaMOTO6IhZ0pw0SmdUYcjbbol6F0vchiFgKMP1WqctU5CEbSgAMS0K0LSC0gtIK0K3CJRJRcUXFablpuWm5BxQcUCgcCxaK1a1S1K1K1K1S0Foqz9v/8QAKhABAAEBBgQGAwEAAAAAAAAAAQARECAhMEFhMVFx8YGRobHR8EDB4VD/2gAIAQEAAT8h/wArBAryMYTiPIj9D4h+lMdp4s+IbKmpmUbDjW0UlNFdZzxYiaxjYVFV+NGQqCo9cv6O7CR1vHgxza1OqsbWPyeWF5CjjTVnbE7cgXdTBYxnp2QX1YN8Q5YJ33O4Z3bO/YpVOIpjGxp003kAxCVuLQju6uGwRjG1jGz0a3jFzrN9bGN1sJb9CDTNHhasO9z6myMYwGtIMq1eX9zvR8Tvx8Tux8QGK/j/ACUy9rWNq8y5SvX5Y3HamFVfrKFbgBB4fMZ/I8rMRPOcLpleyXaQeAokP0Q5JSyuF0yU8DxhkGR7dtAZsJtJtJQXnKZXt3d6MrpPT5aCpxLtOhJT7sIKAZmn4xNI6cNuG1IJQMus3JvTdm/N2b0oyViXEW2UWjCxIVv0RLEMRKJ0yiAgSAJR+P8A/8QAKRABAQABBAAFAwQDAAAAAAAAAQARITFBURAgMGGBcZGhscHR8EBQ8f/aAAgBAQABPxD/AFHUskuHRNY9ONrRfrH8jA2X2k4x+iwxH7zn5ts4EYR9RDhEDhw0x8wJ0pkuXOAi4DhuwPb+JSlmjSDjHf1OGFUKDkGR9NPx4abmt4BVzmxdpmdBbw9jEpZZSrrw/Y9MW1Go1ZOZiF4jIyFCJlDYllLweb+fKWj0XHy9Em9r058ms/3z9ZiGgajaDio/UWUpbESnx8X/AEG1EqcjChs+Q11wG7JIo2L9ASlKWWUpeAQ05/xLLZR3bU8mLXCGPSMEspSyyyy8GbYUeDkWJjAi6BgPsSy2MOieRJQUpXD2A2DteCL5OakAfIZeIpMZYmA+k/sLukyNfcu6+7LWWXyG5JDTmC1lltsVONTJk+BKrlcr4ZllllllvpHK/bx6jWyhE7Jmpy+vkWj8mstjqQQP3tlwfu8Flllllllsyv0fv5WAOo8DbD2Tsy0VL8z+w/XwRZZZZZZZYEJjlGhbRQY82C0lgf1zLLMBhThkofAuJsBGcWHJAHorA/rdllllmFyQzk0tdcm4+3qYTHPB2S40ZZZZzWoYE5hFDffoQm7AB6mtuHY0bgz7Jien7pW6PzICnsNCwJh0emg3SS3iUxT2HgB4LyQjs+g/ECJ3G2zD7id3tM7uX3N7myCS86vHgXRXTJfgsYDwXRLpvBg/8f8A/9k=",db="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACUCAMAAABcK8BVAAAApVBMVEX////qKjDqIyrqHyb+9vYAcboEdLvtT1T96+wAarcAb7nvZ2v72drpGSHqJiwAbbj3s7XpAA0AZ7b0+fzpChb61NXt9vv5ysvyh4rpEhzoAACy0ejxe374wsPvY2f2rK7sPEH84+TsQ0jS5PHk7/fE2+3uW1/0l5nzkJPrMznwcHP1oKKdwuAfe758qdP3urs2iMSItdpoo9FHkchhms0AXrJQjMaypAvCAAAJJ0lEQVR4nO1ceXe6OhA1BBCpCS64UHAD3EFBbb//R3szEcS2+lv6HpB3Tu8fbRU83k5m7kzGiY3GD37wv0a7bgLPMZvUzeApRiu1bgrP0Kajuik8Q9te103hGdr2tG4KzzDq+nVTeIZZd143hWfw7GbdFJ5gMXe8ujk8wYyyWd0cHsPw6VzSVLVx6E7ObDAhnB3rJvEQi7lCV3WTeIjFinFFygwKzAjb1M3iEQQzKSuikc+IMl/UTeMBRoQShX6scI2auHyAOrY5UcgdM3Ww38igverYAWa0UzzRmc5nMrjdaO4QQrc32Rhs7O5GBmKNzpwSwvx8NQdj8rqSY1u1dhSwWTPz+cWGOHwshclUj3HCu+OMWWfuOFs5EoKxAzfjPMsBhqco7EUObTOmyMzJisdB0+a2J8ViNtQXCACuZMxGEA5UDjdrNMY2gQjYXx8MtpQ443oJ3XDknJB8l2KsIFOtpMhNgC2ohuJnbMaMcEliE6rtLi5n5mgGJFEqTUsB7ER4M3P7NYSqLcs2T/UgPHO/V3fwwJZlxyKodbNkaTQhIux9vYwKbGBB7awmW/hAjb7US6jAEVSNZdSE1fh2UC+jG1SoH+1MLkReIFSaTgyE6M29MEIhKmQJhIVfbNbbr0hNni3VzCnca4orSuRpxuwYzRP6YMvFksoiIIsmZbnZNsLblK0sGX4wd6bZEqpTJswmS7ZqHLs3Lm2sRAiVpWTDbh/LS6ERwZQgSQWOmHVv7SEPlpTJYzXY4Dl5U21kS6S6Ah2SLanBOW3Ks56IY/YBi8EVLkdLocDk2iQadL98njEMlstgWCWXfghvGRaPrzq7ef30WWh4OCexFieHsFEJhsvoEicnN+h/utDefrJZ3w2G/TBKWi09Kp9X3z0lZnxYPlgjY/xkrxeeLc0sm1uYggXi6LHvDD5lz8KoYaJpcVAmsUaaWJquLX9/4zBcRundfZGmm2l5vBr9U08HaIcg/OxleLXfH4YQHG4Erq/34vT+niDWtfODF/1ncHs9sJpuacnpkEZR5LrLpQuAP9P0dLpANOpW7+3trZWkH0MyBGpJqRICMXCOddNqtXqtj+ghLC2Oz6fU/aoUwmplq9sQlywVFopjXF8dfifJ+QJ2dJdBOHy4bK6mW2X62mf0c/z+zjP4QbkR+l24lt46VPVm4d/YIIi18j0tQ3hI/iIpBonVOleURN2kd/nF5U/OF8SWeamIWWiCU6cPdBfLEYjeJL7PlxHIbwW5PaOmm6gZyftFKK97Vd3D4fIOkquZpqZpp9wVw0NLSysyGSI4a2A4YGBZhehaFjyBeQy4xe+p8Pq+G8dptaIxdE86iv+VjIAmmPZ6Lf2SullZu7ycHmSG8hGAV50TzAkCmBBOabS888DhssyE/htgqZEhfJKifvAR0hopSCsTq79EFL+5Dy8M6wjJeyxB1+JL5EJKuEHsBy5JXKXCPqKGgmai0EJWOCMgEWS6a5lpnaoBWyRTu0mtqZl36qtZrfgPNl3lITjoLfOWC245AfYNST0poI8SmxWFoXtJdMsSuTPLp1p8SZePdoIlYxhEF0hHh6jI1330fNzmXU6nNHWX4ZNStlwrDqOz1YOl+pZJ0sdC858gTLV/U3ddflUU/zssk5Zunr77aignS7NaoGMoxtE3rDYM3It1Lq+ajHrX8jWBEPjjPRsEsxsd3mPtkvXiSima+of4KhGmqcfnA4QiKMhw+GHjnicrbKS6osqMrZYFySw3tZuWIyqB6EyZLctEUbVM3LXAtgU045ABFUQUvZgNelCIY2Om6PYGaYmtv/4Qd3KYK4W+CnzsFln53gXFD5T3ZqX+8qRrJerHPUXY3KHSoqHO5/f3d/gpLJhiy+2jO/YD9xS/tU6V5q6rc+V41DECWodzbPb0UzWlSLh82C/9QEn0TU+J3nvrVZnt+wGEH+7rME5hH5UhDEUjV7QF30XjtNfTk1NUdbYPIWIFAVEIXXfs155pD6JXtByAerWf/9wDRAwqpGuXOQdGQfCsa/qDH/ygLIyOx+NErk/VM6gvNnV8WUZyPgAn55TmD7W/ww+17+D/RE1V/0xJVNXIbjQGxh++5tvUVGOyWfnz7dafHq9PbDzP29xoz+CRmBNTF8fxCu7b+rsjPFaP630ZZi+oDTzfsanCOVeY3RSDHV6XObcZtsbKZjaF35Pd1nHEjZQ503aj0R6NyrXa3qaUMapQhkeUxAjWhBdj6g3D54TtkDDeSBWFMbjMyhuKLahNXrfTTWcyOa7xYBd9UfEsLSfKPLsTB03FlOm+O9+t4cbOhsA/Ud650YKa0Vlky7JYUcIpWgMH+rvZMPgEeIhBscUxD4CRj9TLCu+H4jGxCbGRRccuBvrXwNf/tHprHLEva0UfUjO6YCwcXFtwfhtj9uh1le9xZIVVq6Gm5tQacJVvxXurvvJ1oHlE66O2dyBGxV9tykn386xYhdQWx7W3ajbxYMaVGoYlE0c09jbhzu1V7c54t2r6c14RtYE3B7EC4Kj8lZoxxRXFyxCstzl/EF0q7sMh5yqorR3GqbL1/TurXY8qHTPBvU4lquMu5ZTjjRVZbWZzYk87g8XCaNs3agNwO+bhqDXh2TdTjB1Y2t0Rb+xU4mtt8CqejZEWYdBo4NOwdwBVy1Rk4oCpsovVhMGeEcXPp/jvqOH0NxmpkCDYVTp2DEhmr55UomsrWpyWuqeG+YnOYIk5EbKP+nY7kjMqldo0owbv+JDaogkJYby286squL6Tzw+Xu6A5tSYVPiWemzkFNTwlx32Mz+vgvHr3PxjjSqiN8fC9B38Yo5VDCmriKBqkUiUfnMcjXwqWtcbRZ6XqWn5kdoIHaWnT81ZESOmNGuZ6AMsXcSaorjyvqVBaqq41YX3EYYwN6BqBbABvOJ4pBTUMEDy1l9c+6s7JbmRktmGkW1ZRZIBuXWsddaPYDmOO448g8pzX20D6vus4zmtxaM/wHLjRsdlq0Ji9Oq9lUUPhzw+tGMf1eDPD9VHb7fatGsEH7fZ9pdbubMbr2SK7VlabaY/UpDkgdY82qBSX5ljZPbDmIVJ+Gd2gid/X8bnglwEjwgjvSvM9APdQxw4jcnzfyheouxdZvqDgC0ppPv3gBzLgH2kO4gclNk6AAAAAAElFTkSuQmCC",hb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUbHyP///8AAAASFxwWGx8OFBkUGB0LERcVGh4YHCEACxIAAAUABA0IDxUAAAqGh4j39/eVlZbQ0dHh4eJLTU/o6OldXmBxcnO1trfDxMQpLC6PkJF8fX4xMzZPUVM0NjilpaY/QUPv7+/a2tpnaWqdnp6vsLFiY2W9vr6AgIE8PkAiJSgrLjDJycqLjI2UlZZCd6ilAAAJq0lEQVR4nO2db3uqPAzGJfxHQaaizqkTp25T577/t3tk6qZA06oJeJ6rv7fnXKs3tGmapKHR0Gg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go3mOnzLMe0wiDKC0DYdy6/7J5HhO0ETwHxN+4P203I2my2f2oN++uoBNAPnX9fphwB+b7fqJHMjzzzprF56DYDwn1VpA2w+h92CtEu6w/YIwK77x16N7wIMholE3YlkOABw/6VXaUJz8Kyo7sTXOAKz7h+uhh9A/+NKeQc++hA8/ov0wdmpTs4iyc6Dx9bow2gV36wvI16NHlijD5vhXfIODDePqjFqrQj0ZaxaUd1iSnDhiUhfxhO4dQvK4cOi6LXcw3zxWFM1aHyR6sv4arTqlvWLBeP7DKiAMVh1Szvg2tf6L6o8mw+xGmHK8gJ/iKdQt7y9iflm05fxXbfB8YDexFzyBU6dAsPR7T6oKskorE9g1ONbgn/Evdo8HHivQF/GoiZ7A4OKBBrGoBaJMK5MYLb5/88F1iGxwil6oOqJ2qrKyPzxXqkj7vYqF2gYvQqdVGdTxT6YJ95U592ALJDNQ7eypQhcpyUZXxVJhJeaBBrGSyUS7TqszIleBSkcPywPOY3TdDpeUSzQ+XA3Tddp6allXkEqDspzEnNwHDMEmLTf7pO37AEEpuPAsvTfP9jnaSDwZVbNw797IaS3B4Y77xAdtwRvUv5fBgGvQN8U7IT9v8yYA0H585fxnJ5nSqH8cB2bvPNUMEcN42Ly+FE0u1pfJwXv/I80BVOBd57afdHPyw3rwyi/ac6Tbuf5Y7haDT86b90kNxeSRT4e44oOL31OeyqYOYYxK7jFFrwfjW7cHS4X69HeDJ3R3LxO27POyS4vi3kK0UI0EsaXGOwEgxrjEq/Y3U/V+HnXcwBatufnlo9vmVkVynqw32G6admPBtFgOz5jIxzz3NCciYD13vLjJTOevd9hWqUJfLH3y/YSm2LzMSrPMKjlHQT/SxyKnTVvlYDjh0KBRsRgwhEHn6kyBZAdgGPeIApXLPPU98QCq1ZosNT9RZijwuEQYwqXDGFwv4WlsdcMAQboiMebt+gfaYjGRxcMfgZgj3RMn64B9FTUZsgPiXffPW/kK9/BT/YM7rAp8oEP9KjXhcjTP8LgKwZ4fc6KetcHSYT01ZP/jStHxIMFMfEztWVR/G9ybziQjPhOa9xAUpKX0FvvSFICMaR9ibJJyhFwlwSeaaepOcUFLlhObOiGaBhTyqLpFh5aIp4wJ2z8uRbjCneA2zW28BegWxTppo+6F0abK3fpO+jyJ9wR7QU2EGNkCLenhM4wvgw/+QJDfoC9RMIjFLoMY44Ixu/I2EokXIgBZrZ5IgpHvFdk5DnZ/RN/iwxj9Fjv8qAJ9S1VDTFqaOa86S7UBJCZGnSUZ16F6ClxSbVNoW43x+n+YnBkbDJfCjWlpN5h2eDIQiQzpsKMUwZ31hk7YVD5Gr6HbBbUR+0CLSTSPicKDFuiRF4Ge51S2EZGn9BsF16KjJFP/pLjYmWeKU10CA0kshdi2ZhCopAiuiXVq7A0MXvDGJhLU6/CAY1TIyyKyGBfh6jCsvKBG6hXITr6J41DFX4iY9S7WxC5jOhTZD5a7M+mmNtP9A7RHYnda2tibj/ROsTjUNx9HtDrf0QHRDzgXefZgmo/9NDkKNFSEIKGans0Xpu3xgYhja0XsUbY4GsahXgginlDxM3clsYIiGrXDzAfENFS3LlNZObQM74xIc9vX4yNRVDI8glY6Y5hvHCWlvtNbGiyFYLXYbAuRHwZktVjBPg1oAZn3gLNdJOVR0hqd9qMuScTHZlow9+Ps0HHoS/A+iXADhaGsSGbPbgxZXTc8IuOhKlZSfMLNlvjoj4/ZQQlkBTvcL1EyV3VJzoDICunYVqJLSy4QPxg8VqMvTnl6M0hvEV2grTaBPVq9owYXDdZ6xvS5S/Z81kCUiC8gnSE1F1ECwZ+IC/8CiRrn9rll+yIe2a0EoNUNiBxoZLCjUlSiZH8wjhxcMFUuKI+BLJpA/hW/wN1Kbt8mu63xQ3N2vcE97gvIK+mk1TOHxlQvMbmVuXCO3lhuYWGo37pTO7tdRgodgklq4f6RbX13HB0R0tnK4KdWmMYhrxl/hgcr3bt3axsPj33oXWLFfBd2C5VG9+QHX7PyDn6EwjCIIJtWeIkyVo/2NdMI99swWgs8w3/YEnq5S6v9Q8r3YK09IiTrBaT7A63tOLFt5wAwJour+qnwXB1rZG/HBCf2hnawmhR8vH0PvHQnvkWhKPpbtW9sisTU9YyHzTpHxtv+mhlXzxHUmD+6O2m9sNcwa/8xZmP8PjbUTu7xJ73be182BLPhWuk8fqYg0U8HskprolH08rhWYWlQuLJwWg74tI3WbxYcgmvDMbrD8U7eknzIEDYa1d64pDFgEogvpd3QTGacSqCFoXFBO0kzv/mtS+RtQyrpKPK4LAmBFEAhVgKWjBTBnM6r+AWx8c9Iyi9ZapQ0iOPkFzyzVzfUpyNpwhNs+zUqlIAqnL0/IO9CMtMiyqObnZUbF2ulAKX3cDNjcb+MZqi1fxd+XYr3ydL6Zq+5PrmJdxzNKNoT38jJj6kw18vLH77nij9HLS+Mgd7KWSGZeUn41ms1IHm9HM1HK7a/Q201M5PV+yIsWLXojsJCynhC7/FDCOAKFS/OStpSHFOv6L27IUt475QqbrCKhbhgULnvfU9Bk5ZIfMlsgvynlZyT4RNVSFjvUARy0zyo9/uSikqnFus3loec5QzqN3NzUlSNYXxtuLvztmT/J7xCTeGFtQUvlb+yRm34DAnbYDgL4bom25L6SCnpHBdw2c83MJb3LscL++NU3fLRn88W6jMLBWF61o+GlScqAfmSffUnlTpPgReZZ0RVz9FD9gb2blHSaH0Hc63tX32yXQlcXg1hbJqHa/Gr3fiwWAahc90qeWbADTKQqCwOl9UBGBfRNrdqzDu1y5wb28CcUxfqeMvcj7sNGr8mtUfvnimKpUtiRW+PMrnARuRqLZAqZxApLC8Q3RNeILXqFQBKlD4/WCfeG41yvrRqyksK5T/2jL1e74dH3rFqarUXqVEYdJ/mBV4jgn9fED8NoXzwcN+Td6GRfduhcknPMQWIcCF/rmrqnT98uJs8Ta49SBdGTakfx8fl2cPM/6yPR/Th/uWcxkOBIfan1ixJaaZ/qQCurvNg20QYnwXNuP2wFVdTyYMXj5TCB7Rfgrx3fCaC5526Nb6yViNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajRL/Ae/tkd8cO8leAAAAAElFTkSuQmCC",pb="/react-app/assets/Canva-jRoRny6f.jpeg",mb="/react-app/assets/Google%20cloud-jAHtdSx6.png";function Li({title:s,icon:e}){return j.jsx("div",{className:"tech-card",children:j.jsxs("div",{className:"tech-card-content",children:[j.jsx("img",{src:e,alt:s,className:"tech-icon"}),j.jsx("h3",{className:"tech-title",children:s})]})})}function xb(){return j.jsxs("section",{className:"skills-section",children:[j.jsxs("div",{children:[j.jsx("h1",{className:"skills-heading",children:"Languages"}),j.jsxs("div",{className:"skills-container",children:[j.jsx(Li,{icon:sb,title:"HTML"}),j.jsx(Li,{icon:ob,title:"CSS"}),j.jsx(Li,{icon:lb,title:"JavaScript"}),j.jsx(Li,{icon:cb,title:"ReactJS"}),j.jsx(Li,{icon:ub,title:"C"}),j.jsx(Li,{icon:fb,title:"Python"}),j.jsx(Li,{icon:db,title:"Java"})]})]}),j.jsxs("div",{children:[j.jsx("h1",{className:"skills-heading",children:"Tools"}),j.jsxs("div",{className:"skills-container",children:[j.jsx(Li,{icon:hb,title:"GitHub"}),j.jsx(Li,{icon:pb,title:"Canva"}),j.jsx(Li,{icon:mb,title:"Google Cloud"})]})]})]})}const gb="modulepreload",vb=function(s){return"/react-app/"+s},og={},_b=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");l=m(i.map(p=>{if(p=vb(p),p in og)return;og[p]=!0;const g=p.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":gb,g||(_.as="script"),_.crossOrigin="",_.href=p,h&&_.setAttribute("nonce",h),document.head.appendChild(_),g)return new Promise((y,b)=>{_.addEventListener("load",y),_.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})};const ep="181",k2={ROTATE:0,DOLLY:1,PAN:2},X2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sb=0,lg=1,yb=2,Cv=1,Mb=2,da=3,ir=0,Xn=1,ha=2,ga=0,Us=1,Kc=2,cg=3,ug=4,bb=5,Ur=100,Ab=101,Eb=102,Tb=103,Rb=104,Cb=200,wb=201,Db=202,Ub=203,ah=204,rh=205,Lb=206,Nb=207,Ob=208,Pb=209,Bb=210,zb=211,Ib=212,Fb=213,Hb=214,sh=0,oh=1,lh=2,Ns=3,ch=4,uh=5,fh=6,dh=7,wv=0,Gb=1,Vb=2,nr=0,kb=1,Xb=2,qb=3,jb=4,Wb=5,Yb=6,Zb=7,Dv=300,Os=301,Ps=302,hh=303,ph=304,su=306,mh=1e3,pa=1001,xh=1002,ni=1003,Qb=1004,gc=1005,xi=1006,Ed=1007,Nr=1008,Bi=1009,Uv=1010,Lv=1011,jo=1012,tp=1013,Or=1014,ma=1015,Fs=1016,np=1017,ip=1018,Wo=1020,Nv=35902,Ov=35899,Pv=1021,Bv=1022,Ti=1023,Yo=1026,Zo=1027,zv=1028,ap=1029,rp=1030,sp=1031,op=1033,Xc=33776,qc=33777,jc=33778,Wc=33779,gh=35840,vh=35841,_h=35842,Sh=35843,yh=36196,Mh=37492,bh=37496,Ah=37808,Eh=37809,Th=37810,Rh=37811,Ch=37812,wh=37813,Dh=37814,Uh=37815,Lh=37816,Nh=37817,Oh=37818,Ph=37819,Bh=37820,zh=37821,Ih=36492,Fh=36494,Hh=36495,Gh=36283,Vh=36284,kh=36285,Xh=36286,Kb=3200,Jb=3201,Iv=0,$b=1,er="",pi="srgb",Bs="srgb-linear",Jc="linear",kt="srgb",gs=7680,fg=519,eA=512,tA=513,nA=514,Fv=515,iA=516,aA=517,rA=518,sA=519,dg=35044,hg="300 es",Oi=2e3,$c=2001;function Hv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function eu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function oA(){const s=eu("canvas");return s.style.display="block",s}const pg={};function mg(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function on(...s){const e="THREE."+s.shift();console.error(e,...s)}function Qo(...s){const e=s.join(" ");e in pg||(pg[e]=!0,st(...s))}function lA(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,qh=180/Math.PI;function el(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function _t(s,e,i){return Math.max(e,Math.min(i,s))}function cA(s,e){return(s%e+e)%e}function Td(s,e,i){return(1-i)*s+i*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const q2={DEG2RAD:Yc};class Ot{constructor(e=0,i=0){Ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],_=c[f+0],y=c[f+1],b=c[f+2],E=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h>=1){e[i+0]=_,e[i+1]=y,e[i+2]=b,e[i+3]=E;return}if(x!==E||m!==_||p!==y||g!==b){let M=m*_+p*y+g*b+x*E;M<0&&(_=-_,y=-y,b=-b,E=-E,M=-M);let v=1-h;if(M<.9995){const U=Math.acos(M),w=Math.sin(U);v=Math.sin(v*U)/w,h=Math.sin(h*U)/w,m=m*v+_*h,p=p*v+y*h,g=g*v+b*h,x=x*v+E*h}else{m=m*v+_*h,p=p*v+y*h,g=g*v+b*h,x=x*v+E*h;const U=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=U,p*=U,g*=U,x*=U}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[f],_=c[f+1],y=c[f+2],b=c[f+3];return e[i]=h*b+g*x+m*y-p*_,e[i+1]=m*b+g*_+p*x-h*y,e[i+2]=p*b+g*y+h*_-m*x,e[i+3]=g*b-h*x-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(c/2),_=m(r/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=_*g*x+p*y*b,this._y=p*y*x-_*g*b,this._z=p*g*b+_*y*x,this._w=p*g*x-_*y*b;break;case"YXZ":this._x=_*g*x+p*y*b,this._y=p*y*x-_*g*b,this._z=p*g*b-_*y*x,this._w=p*g*x+_*y*b;break;case"ZXY":this._x=_*g*x-p*y*b,this._y=p*y*x+_*g*b,this._z=p*g*b+_*y*x,this._w=p*g*x-_*y*b;break;case"ZYX":this._x=_*g*x-p*y*b,this._y=p*y*x+_*g*b,this._z=p*g*b-_*y*x,this._w=p*g*x+_*y*b;break;case"YZX":this._x=_*g*x+p*y*b,this._y=p*y*x+_*g*b,this._z=p*g*b-_*y*x,this._w=p*g*x-_*y*b;break;case"XZY":this._x=_*g*x-p*y*b,this._y=p*y*x-_*g*b,this._z=p*g*b+_*y*x,this._w=p*g*x+_*y*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],_=r+h+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>h&&r>x){const y=2*Math.sqrt(1+r-h-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>x){const y=2*Math.sqrt(1+h-r-x);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(xg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*i-c*l),x=2*(c*r-f*i);return this.x=i+m*p+f*x-h*g,this.y=r+m*g+h*p-c*x,this.z=l+m*x+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new se,xg=new tl;class dt{constructor(e,i,r,l,c,f,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],_=r[2],y=r[5],b=r[8],E=l[0],M=l[3],v=l[6],U=l[1],w=l[4],P=l[7],G=l[2],L=l[5],z=l[8];return c[0]=f*E+h*U+m*G,c[3]=f*M+h*w+m*L,c[6]=f*v+h*P+m*z,c[1]=p*E+g*U+x*G,c[4]=p*M+g*w+x*L,c[7]=p*v+g*P+x*z,c[2]=_*E+y*U+b*G,c[5]=_*M+y*w+b*L,c[8]=_*v+y*P+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*c*g+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*f-h*p,_=h*m-g*c,y=p*c-f*m,b=i*x+r*_+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=x*E,e[1]=(l*p-g*r)*E,e[2]=(h*r-l*f)*E,e[3]=_*E,e[4]=(g*i-l*m)*E,e[5]=(l*c-h*i)*E,e[6]=y*E,e[7]=(r*m-p*i)*E,e[8]=(f*i-r*c)*E,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Cd.makeScale(e,i)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new dt,gg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vg=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uA(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?Jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bs]:{primaries:e,whitePoint:r,transfer:Jc,toXYZ:gg,fromXYZ:vg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:gg,fromXYZ:vg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const Lt=uA();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class fA{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vs===void 0&&(vs=eu("canvas")),vs.width=e.width,vs.height=e.height;const l=vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=eu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dA=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=el(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(wd(l[f].image)):c.push(wd(l[f]))}else c=wd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let hA=0;const Dd=new se;class Bn extends zr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=pa,l=pa,c=xi,f=Nr,h=Ti,m=Bi,p=Bn.DEFAULT_ANISOTROPY,g=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=el(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dd).x}get height(){return this.source.getSize(Dd).y}get depth(){return this.source.getSize(Dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Dv;Bn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],x=m[8],_=m[1],y=m[5],b=m[9],E=m[2],M=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-E)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+E)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,P=(y+1)/2,G=(v+1)/2,L=(g+_)/4,z=(x+E)/4,Z=(b+M)/4;return w>P&&w>G?w<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(w),l=L/r,c=z/r):P>G?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=L/l,c=Z/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=z/c,l=Z/c),this.set(r,l,c,i),this}let U=Math.sqrt((M-b)*(M-b)+(x-E)*(x-E)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(M-b)/U,this.y=(x-E)/U,this.z=(_-g)/U,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pA extends zr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Bn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new lp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends pA{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Gv extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mA extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),_c.subVectors(this.max,Io),_s.subVectors(e.a,Io),Ss.subVectors(e.b,Io),ys.subVectors(e.c,Io),Wa.subVectors(Ss,_s),Ya.subVectors(ys,Ss),br.subVectors(_s,ys);let i=[0,-Wa.z,Wa.y,0,-Ya.z,Ya.y,0,-br.z,br.y,Wa.z,0,-Wa.x,Ya.z,0,-Ya.x,br.z,0,-br.x,-Wa.y,Wa.x,0,-Ya.y,Ya.x,0,-br.y,br.x,0];return!Ud(i,_s,Ss,ys,_c)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,_s,Ss,ys,_c))?!1:(Sc.crossVectors(Wa,Ya),i=[Sc.x,Sc.y,Sc.z],Ud(i,_s,Ss,ys,_c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sa=[new se,new se,new se,new se,new se,new se,new se,new se],Mi=new se,vc=new nl,_s=new se,Ss=new se,ys=new se,Wa=new se,Ya=new se,br=new se,Io=new se,_c=new se,Sc=new se,Ar=new se;function Ud(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Ar.fromArray(s,c);const h=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=e.dot(Ar),p=i.dot(Ar),g=r.dot(Ar);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const xA=new nl,Fo=new se,Ld=new se;class il{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):xA.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Ld)),this.expandByPoint(Fo.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new se,Nd=new se,yc=new se,Za=new se,Od=new se,Mc=new se,Pd=new se;class cp{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nd.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Nd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(yc),h=Za.dot(this.direction),m=-Za.dot(yc),p=Za.lengthSq(),g=Math.abs(1-f*f);let x,_,y,b;if(g>0)if(x=f*m-h,_=f*h-m,b=c*g,x>=0)if(_>=-b)if(_<=b){const E=1/g;x*=E,_*=E,y=x*(x+f*_+2*h)+_*(f*x+_+2*m)+p}else _=c,x=Math.max(0,-(f*_+h)),y=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(f*_+h)),y=-x*x+_*(_+2*m)+p;else _<=-b?(x=Math.max(0,-(-f*c+h)),_=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+p):_<=b?(x=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(x=Math.max(0,-(f*c+h)),_=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+p);else _=f>0?-c:c,x=Math.max(0,-(f*_+h)),y=-x*x+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Nd).addScaledVector(yc,_),y}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(h=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,r,l,c){Od.subVectors(i,e),Mc.subVectors(r,e),Pd.crossVectors(Od,Mc);let f=this.direction.dot(Pd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(Mc.crossVectors(Za,Mc));if(m<0)return null;const p=h*this.direction.dot(Od.cross(Za));if(p<0||m+p>f)return null;const g=-h*Za.dot(Pd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,i,r,l,c,f,h,m,p,g,x,_,y,b,E,M){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,g,x,_,y,b,E,M)}set(e,i,r,l,c,f,h,m,p,g,x,_,y,b,E,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=y,v[7]=b,v[11]=E,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ms.setFromMatrixColumn(e,0).length(),c=1/Ms.setFromMatrixColumn(e,1).length(),f=1/Ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=f*g,y=f*x,b=h*g,E=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+b*p,i[5]=_-E*p,i[9]=-h*m,i[2]=E-_*p,i[6]=b+y*p,i[10]=f*m}else if(e.order==="YXZ"){const _=m*g,y=m*x,b=p*g,E=p*x;i[0]=_+E*h,i[4]=b*h-y,i[8]=f*p,i[1]=f*x,i[5]=f*g,i[9]=-h,i[2]=y*h-b,i[6]=E+_*h,i[10]=f*m}else if(e.order==="ZXY"){const _=m*g,y=m*x,b=p*g,E=p*x;i[0]=_-E*h,i[4]=-f*x,i[8]=b+y*h,i[1]=y+b*h,i[5]=f*g,i[9]=E-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const _=f*g,y=f*x,b=h*g,E=h*x;i[0]=m*g,i[4]=b*p-y,i[8]=_*p+E,i[1]=m*x,i[5]=E*p+_,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,y=f*p,b=h*m,E=h*p;i[0]=m*g,i[4]=E-_*x,i[8]=b*x+y,i[1]=x,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*x+b,i[10]=_-E*x}else if(e.order==="XZY"){const _=f*m,y=f*p,b=h*m,E=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=_*x+E,i[5]=f*g,i[9]=y*x-b,i[2]=b*x-y,i[6]=h*g,i[10]=E*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gA,e,vA)}lookAt(e,i,r){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Qa.crossVectors(r,ei),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Qa.crossVectors(r,ei)),Qa.normalize(),bc.crossVectors(ei,Qa),l[0]=Qa.x,l[4]=bc.x,l[8]=ei.x,l[1]=Qa.y,l[5]=bc.y,l[9]=ei.y,l[2]=Qa.z,l[6]=bc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],_=r[9],y=r[13],b=r[2],E=r[6],M=r[10],v=r[14],U=r[3],w=r[7],P=r[11],G=r[15],L=l[0],z=l[4],Z=l[8],D=l[12],C=l[1],k=l[5],ne=l[9],le=l[13],fe=l[2],me=l[6],B=l[10],$=l[14],W=l[3],pe=l[7],Se=l[11],N=l[15];return c[0]=f*L+h*C+m*fe+p*W,c[4]=f*z+h*k+m*me+p*pe,c[8]=f*Z+h*ne+m*B+p*Se,c[12]=f*D+h*le+m*$+p*N,c[1]=g*L+x*C+_*fe+y*W,c[5]=g*z+x*k+_*me+y*pe,c[9]=g*Z+x*ne+_*B+y*Se,c[13]=g*D+x*le+_*$+y*N,c[2]=b*L+E*C+M*fe+v*W,c[6]=b*z+E*k+M*me+v*pe,c[10]=b*Z+E*ne+M*B+v*Se,c[14]=b*D+E*le+M*$+v*N,c[3]=U*L+w*C+P*fe+G*W,c[7]=U*z+w*k+P*me+G*pe,c[11]=U*Z+w*ne+P*B+G*Se,c[15]=U*D+w*le+P*$+G*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],_=e[10],y=e[14],b=e[3],E=e[7],M=e[11],v=e[15];return b*(+c*m*x-l*p*x-c*h*_+r*p*_+l*h*y-r*m*y)+E*(+i*m*y-i*p*_+c*f*_-l*f*y+l*p*g-c*m*g)+M*(+i*p*x-i*h*y-c*f*x+r*f*y+c*h*g-r*p*g)+v*(-l*h*g-i*m*x+i*h*_+l*f*x-r*f*_+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],_=e[10],y=e[11],b=e[12],E=e[13],M=e[14],v=e[15],U=x*M*p-E*_*p+E*m*y-h*M*y-x*m*v+h*_*v,w=b*_*p-g*M*p-b*m*y+f*M*y+g*m*v-f*_*v,P=g*E*p-b*x*p+b*h*y-f*E*y-g*h*v+f*x*v,G=b*x*m-g*E*m-b*h*_+f*E*_+g*h*M-f*x*M,L=i*U+r*w+l*P+c*G;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=U*z,e[1]=(E*_*c-x*M*c-E*l*y+r*M*y+x*l*v-r*_*v)*z,e[2]=(h*M*c-E*m*c+E*l*p-r*M*p-h*l*v+r*m*v)*z,e[3]=(x*m*c-h*_*c-x*l*p+r*_*p+h*l*y-r*m*y)*z,e[4]=w*z,e[5]=(g*M*c-b*_*c+b*l*y-i*M*y-g*l*v+i*_*v)*z,e[6]=(b*m*c-f*M*c-b*l*p+i*M*p+f*l*v-i*m*v)*z,e[7]=(f*_*c-g*m*c+g*l*p-i*_*p-f*l*y+i*m*y)*z,e[8]=P*z,e[9]=(b*x*c-g*E*c-b*r*y+i*E*y+g*r*v-i*x*v)*z,e[10]=(f*E*c-b*h*c+b*r*p-i*E*p-f*r*v+i*h*v)*z,e[11]=(g*h*c-f*x*c-g*r*p+i*x*p+f*r*y-i*h*y)*z,e[12]=G*z,e[13]=(g*E*l-b*x*l+b*r*_-i*E*_-g*r*M+i*x*M)*z,e[14]=(b*h*l-f*E*l-b*r*m+i*E*m+f*r*M-i*h*M)*z,e[15]=(f*x*l-g*h*l+g*r*m-i*x*m-f*r*_+i*h*_)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,x=h+h,_=c*p,y=c*g,b=c*x,E=f*g,M=f*x,v=h*x,U=m*p,w=m*g,P=m*x,G=r.x,L=r.y,z=r.z;return l[0]=(1-(E+v))*G,l[1]=(y+P)*G,l[2]=(b-w)*G,l[3]=0,l[4]=(y-P)*L,l[5]=(1-(_+v))*L,l[6]=(M+U)*L,l[7]=0,l[8]=(b+w)*z,l[9]=(M-U)*z,l[10]=(1-(_+E))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Ms.set(l[0],l[1],l[2]).length();const f=Ms.set(l[4],l[5],l[6]).length(),h=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/c,g=1/f,x=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=x,bi.elements[9]*=x,bi.elements[10]*=x,i.setFromRotationMatrix(bi),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Oi,m=!1){const p=this.elements,g=2*c/(i-e),x=2*c/(r-l),_=(i+e)/(i-e),y=(r+l)/(r-l);let b,E;if(m)b=c/(f-c),E=f*c/(f-c);else if(h===Oi)b=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===$c)b=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Oi,m=!1){const p=this.elements,g=2/(i-e),x=2/(r-l),_=-(i+e)/(i-e),y=-(r+l)/(r-l);let b,E;if(m)b=1/(f-c),E=f/(f-c);else if(h===Oi)b=-2/(f-c),E=-(f+c)/(f-c);else if(h===$c)b=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ms=new se,bi=new $t,gA=new se(0,0,0),vA=new se(1,1,1),Qa=new se,bc=new se,ei=new se,_g=new $t,Sg=new tl;class zi{constructor(e=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return _g.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_g,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _A=0;const yg=new se,bs=new tl,la=new $t,Ac=new se,Ho=new se,SA=new se,yA=new tl,Mg=new se(1,0,0),bg=new se(0,1,0),Ag=new se(0,0,1),Eg={type:"added"},MA={type:"removed"},As={type:"childadded",child:null},Bd={type:"childremoved",child:null};class gn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new se,i=new zi,r=new tl,l=new se(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $t},normalMatrix:{value:new dt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Mg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,i){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Mg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Ho,Ac,this.up):la.lookAt(Ac,Ho,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(la),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eg),As.child=e,this.dispatchEvent(As),As.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(MA),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eg),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,SA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,yA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),x=f(e.shapes),_=f(e.skeletons),y=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}gn.DEFAULT_UP=new se(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new se,ca=new se,zd=new se,ua=new se,Es=new se,Ts=new se,Tg=new se,Id=new se,Fd=new se,Hd=new se,Gd=new nn,Vd=new nn,kd=new nn;class Ei{constructor(e=new se,i=new se,r=new se){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),ca.subVectors(r,i),zd.subVectors(e,i);const f=Ai.dot(Ai),h=Ai.dot(ca),m=Ai.dot(zd),p=ca.dot(ca),g=ca.dot(zd),x=f*p-h*h;if(x===0)return c.set(0,0,0),null;const _=1/x,y=(p*m-h*g)*_,b=(f*g-h*m)*_;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Gd,c.x),f.addScaledVector(Vd,c.y),f.addScaledVector(kd,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),ca.subVectors(e,i),Ai.cross(ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ai.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Es.subVectors(l,r),Ts.subVectors(c,r),Id.subVectors(e,r);const m=Es.dot(Id),p=Ts.dot(Id);if(m<=0&&p<=0)return i.copy(r);Fd.subVectors(e,l);const g=Es.dot(Fd),x=Ts.dot(Fd);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Es,f);Hd.subVectors(e,c);const y=Es.dot(Hd),b=Ts.dot(Hd);if(b>=0&&y<=b)return i.copy(c);const E=y*p-m*b;if(E<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Ts,h);const M=g*b-y*x;if(M<=0&&x-g>=0&&y-b>=0)return Tg.subVectors(c,l),h=(x-g)/(x-g+(y-b)),i.copy(l).addScaledVector(Tg,h);const v=1/(M+E+_);return f=E*v,h=_*v,i.copy(r).addScaledVector(Es,f).addScaledVector(Ts,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Xd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Et{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Lt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Lt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Lt.workingColorSpace){if(e=cA(e,1),i=_t(i,0,1),r=_t(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Xd(f,c,e+1/3),this.g=Xd(f,c,e),this.b=Xd(f,c,e-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const r=kv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Lt.workingToColorSpace(Nn.copy(this),e),Math.round(_t(Nn.r*255,0,255))*65536+Math.round(_t(Nn.g*255,0,255))*256+Math.round(_t(Nn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Lt.workingColorSpace){Lt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const x=f-h;switch(p=g<=.5?x/(f+h):x/(2-f-h),f){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Lt.workingColorSpace){return Lt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=pi){Lt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(Ec);const r=Td(Ka.h,Ec.h,i),l=Td(Ka.s,Ec.s,i),c=Td(Ka.l,Ec.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Et;Et.NAMES=kv;let bA=0;class Ir extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=el(),this.name="",this.type="Material",this.blending=Us,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=rh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ah&&(r.blendSrc=this.blendSrc),this.blendDst!==rh&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xv extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new se,Tc=new Ot;let AA=0;class Pi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AA++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=dg,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dg&&(e.usage=this.usage),e}}class qv extends Pi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class jv extends Pi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ii extends Pi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let EA=0;const hi=new $t,qd=new gn,Rs=new se,ti=new nl,Go=new nl,An=new se;class ai extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?jv:qv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ii(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ti.min,Go.min),ti.expandByPoint(An),An.addVectors(ti.max,Go.max),ti.expandByPoint(An)):(ti.expandByPoint(Go.min),ti.expandByPoint(Go.max))}ti.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)An.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(An));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)An.fromBufferAttribute(h,p),m&&(Rs.fromBufferAttribute(e,p),An.add(Rs)),l=Math.max(l,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new se,m[Z]=new se;const p=new se,g=new se,x=new se,_=new Ot,y=new Ot,b=new Ot,E=new se,M=new se;function v(Z,D,C){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,C),_.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,D),b.fromBufferAttribute(c,C),g.sub(p),x.sub(p),y.sub(_),b.sub(_);const k=1/(y.x*b.y-b.x*y.y);isFinite(k)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(k),M.copy(x).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(k),h[Z].add(E),h[D].add(E),h[C].add(E),m[Z].add(M),m[D].add(M),m[C].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Z=0,D=U.length;Z<D;++Z){const C=U[Z],k=C.start,ne=C.count;for(let le=k,fe=k+ne;le<fe;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const w=new se,P=new se,G=new se,L=new se;function z(Z){G.fromBufferAttribute(l,Z),L.copy(G);const D=h[Z];w.copy(D),w.sub(G.multiplyScalar(G.dot(D))).normalize(),P.crossVectors(L,D);const k=P.dot(m[Z])<0?-1:1;f.setXYZW(Z,w.x,w.y,w.z,k)}for(let Z=0,D=U.length;Z<D;++Z){const C=U[Z],k=C.start,ne=C.count;for(let le=k,fe=k+ne;le<fe;le+=3)z(e.getX(le+0)),z(e.getX(le+1)),z(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const l=new se,c=new se,f=new se,h=new se,m=new se,p=new se,g=new se,x=new se;if(e)for(let _=0,y=e.count;_<y;_+=3){const b=e.getX(_+0),E=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),h.add(g),m.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,_=new p.constructor(m.length*g);let y=0,b=0;for(let E=0,M=m.length;E<M;E++){h.isInterleavedBufferAttribute?y=m[E]*h.data.stride+h.offset:y=m[E]*g;for(let v=0;v<g;v++)_[b++]=p[y++]}return new Pi(_,g,x)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ai,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const _=p[g],y=e(_,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const y=p[x];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,y=x.length;_<y;_++)g.push(x[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rg=new $t,Er=new cp,Rc=new il,Cg=new se,Cc=new se,wc=new se,Dc=new se,jd=new se,Uc=new se,wg=new se,Lc=new se;class Ii extends gn{constructor(e=new ai,i=new Xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(jd.fromBufferAttribute(x,e),f?Uc.addScaledVector(jd,g):Uc.addScaledVector(jd.sub(i),g))}i.add(Uc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(Rc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Rc,Cg)===null||Er.origin.distanceToSquared(Cg)>(e.far-e.near)**2))&&(Rg.copy(c).invert(),Er.copy(e.ray).applyMatrix4(Rg),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=_.length;b<E;b++){const M=_[b],v=f[M.materialIndex],U=Math.max(M.start,y.start),w=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let P=U,G=w;P<G;P+=3){const L=h.getX(P),z=h.getX(P+1),Z=h.getX(P+2);l=Nc(this,v,e,r,p,g,x,L,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let M=b,v=E;M<v;M+=3){const U=h.getX(M),w=h.getX(M+1),P=h.getX(M+2);l=Nc(this,f,e,r,p,g,x,U,w,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,E=_.length;b<E;b++){const M=_[b],v=f[M.materialIndex],U=Math.max(M.start,y.start),w=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let P=U,G=w;P<G;P+=3){const L=P,z=P+1,Z=P+2;l=Nc(this,v,e,r,p,g,x,L,z,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(m.count,y.start+y.count);for(let M=b,v=E;M<v;M+=3){const U=M,w=M+1,P=M+2;l=Nc(this,f,e,r,p,g,x,U,w,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function TA(s,e,i,r,l,c,f,h){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===ir,h),m===null)return null;Lc.copy(h),Lc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:s}}function Nc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Cc),s.getVertexPosition(m,wc),s.getVertexPosition(p,Dc);const g=TA(s,e,i,r,Cc,wc,Dc,wg);if(g){const x=new se;Ei.getBarycoord(wg,Cc,wc,Dc,x),l&&(g.uv=Ei.getInterpolatedAttribute(l,h,m,p,x,new Ot)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,h,m,p,x,new Ot)),f&&(g.normal=Ei.getInterpolatedAttribute(f,h,m,p,x,new se),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new se,materialIndex:0};Ei.getNormal(Cc,wc,Dc,_.normal),g.face=_,g.barycoord=x}return g}class al extends ai{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],x=[];let _=0,y=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ii(p,3)),this.setAttribute("normal",new ii(g,3)),this.setAttribute("uv",new ii(x,2));function b(E,M,v,U,w,P,G,L,z,Z,D){const C=P/z,k=G/Z,ne=P/2,le=G/2,fe=L/2,me=z+1,B=Z+1;let $=0,W=0;const pe=new se;for(let Se=0;Se<B;Se++){const N=Se*k-le;for(let te=0;te<me;te++){const ye=te*C-ne;pe[E]=ye*U,pe[M]=N*w,pe[v]=fe,p.push(pe.x,pe.y,pe.z),pe[E]=0,pe[M]=0,pe[v]=L>0?1:-1,g.push(pe.x,pe.y,pe.z),x.push(te/z),x.push(1-Se/Z),$+=1}}for(let Se=0;Se<Z;Se++)for(let N=0;N<z;N++){const te=_+N+me*Se,ye=_+N+me*(Se+1),Te=_+(N+1)+me*(Se+1),Pe=_+(N+1)+me*Se;m.push(te,ye,Pe),m.push(ye,Te,Pe),W+=6}h.addGroup(y,W,D),y+=W,_+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Pn(s){const e={};for(let i=0;i<s.length;i++){const r=zs(s[i]);for(const l in r)e[l]=r[l]}return e}function RA(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Wv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const CA={clone:zs,merge:Pn};var wA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wA,this.fragmentShader=DA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=RA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Yv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new se,Dg=new Ot,Ug=new Ot;class mi extends Yv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,Dg,Ug),i.subVectors(Ug,Dg)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cs=-90,ws=1;class UA extends gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Cs,ws,e,i);l.layers=this.layers,this.add(l);const c=new mi(Cs,ws,e,i);c.layers=this.layers,this.add(c);const f=new mi(Cs,ws,e,i);f.layers=this.layers,this.add(f);const h=new mi(Cs,ws,e,i);h.layers=this.layers,this.add(h);const m=new mi(Cs,ws,e,i);m.layers=this.layers,this.add(m);const p=new mi(Cs,ws,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===$c)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,_,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Zv extends Bn{constructor(e=[],i=Os,r,l,c,f,h,m,p,g){super(e,i,r,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LA extends Pr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ga});c.uniforms.tEquirect.value=i;const f=new Ii(l,c),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=xi),new UA(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Oc extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NA={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const M=i.getJointPose(E,r),v=this._getHandJoint(p,E);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),y=.02,b=.005;p.inputState.pinching&&_>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(NA)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Oc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class OA extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class PA extends Bn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=ni,g=ni,x,_){super(null,f,h,m,p,g,l,c,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new se,BA=new se,zA=new dt;class Dr{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yd.subVectors(r,i).cross(BA.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||zA.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new il,IA=new Ot(.5,.5),Pc=new se;class up{constructor(e=new Dr,i=new Dr,r=new Dr,l=new Dr,c=new Dr,f=new Dr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Oi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],y=c[7],b=c[8],E=c[9],M=c[10],v=c[11],U=c[12],w=c[13],P=c[14],G=c[15];if(l[0].setComponents(p-f,y-g,v-b,G-U).normalize(),l[1].setComponents(p+f,y+g,v+b,G+U).normalize(),l[2].setComponents(p+h,y+x,v+E,G+w).normalize(),l[3].setComponents(p-h,y-x,v-E,G-w).normalize(),r)l[4].setComponents(m,_,M,P).normalize(),l[5].setComponents(p-m,y-_,v-M,G-P).normalize();else if(l[4].setComponents(p-m,y-_,v-M,G-P).normalize(),i===Oi)l[5].setComponents(p+m,y+_,v+M,G+P).normalize();else if(i===$c)l[5].setComponents(m,_,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=IA.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Pc.x=l.normal.x>0?e.max.x:e.min.x,Pc.y=l.normal.y>0?e.max.y:e.min.y,Pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qv extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tu=new se,nu=new se,Lg=new $t,Vo=new cp,Bc=new il,Zd=new se,Ng=new se;class FA extends gn{constructor(e=new ai,i=new Qv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)tu.fromBufferAttribute(i,l-1),nu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=tu.distanceTo(nu);e.setAttribute("lineDistance",new ii(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bc.copy(r.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;Lg.copy(l).invert(),Vo.copy(e.ray).applyMatrix4(Lg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let E=y,M=b-1;E<M;E+=p){const v=g.getX(E),U=g.getX(E+1),w=zc(this,e,Vo,m,v,U,E);w&&i.push(w)}if(this.isLineLoop){const E=g.getX(b-1),M=g.getX(y),v=zc(this,e,Vo,m,E,M,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let E=y,M=b-1;E<M;E+=p){const v=zc(this,e,Vo,m,E,E+1,E);v&&i.push(v)}if(this.isLineLoop){const E=zc(this,e,Vo,m,b-1,y,b-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zc(s,e,i,r,l,c,f){const h=s.geometry.attributes.position;if(tu.fromBufferAttribute(h,l),nu.fromBufferAttribute(h,c),i.distanceSqToSegment(tu,nu,Zd,Ng)>r)return;Zd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Zd);if(!(p<e.near||p>e.far))return{distance:p,point:Ng.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const Og=new se,Pg=new se;class HA extends FA{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Og.fromBufferAttribute(i,l),Pg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Og.distanceTo(Pg);e.setAttribute("lineDistance",new ii(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kv extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bg=new $t,jh=new cp,Ic=new il,Fc=new se;class GA extends gn{constructor(e=new ai,i=new Kv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,e.ray.intersectsSphere(Ic)===!1)return;Bg.copy(l).invert(),jh.copy(e.ray).applyMatrix4(Bg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,x=r.attributes.position;if(p!==null){const _=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=_,E=y;b<E;b++){const M=p.getX(b);Fc.fromBufferAttribute(x,M),zg(Fc,M,m,l,e,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(x.count,f.start+f.count);for(let b=_,E=y;b<E;b++)Fc.fromBufferAttribute(x,b),zg(Fc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zg(s,e,i,r,l,c,f){const h=jh.distanceSqToPoint(s);if(h<i){const m=new se;jh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Jv extends Bn{constructor(e,i,r=Or,l,c,f,h=ni,m=ni,p,g=Yo,x=1){if(g!==Yo&&g!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $v extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ou extends ai{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=e/h,_=i/m,y=[],b=[],E=[],M=[];for(let v=0;v<g;v++){const U=v*_-f;for(let w=0;w<p;w++){const P=w*x-c;b.push(P,-U,0),E.push(0,0,1),M.push(w/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<h;U++){const w=U+p*v,P=U+p*(v+1),G=U+1+p*(v+1),L=U+1+p*v;y.push(w,P,L),y.push(P,G,L)}this.setIndex(y),this.setAttribute("position",new ii(b,3)),this.setAttribute("normal",new ii(E,3)),this.setAttribute("uv",new ii(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.width,e.height,e.widthSegments,e.heightSegments)}}class iu extends ai{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const g=[],x=new se,_=new se,y=[],b=[],E=[],M=[];for(let v=0;v<=r;v++){const U=[],w=v/r;let P=0;v===0&&f===0?P=.5/i:v===r&&m===Math.PI&&(P=-.5/i);for(let G=0;G<=i;G++){const L=G/i;x.x=-e*Math.cos(l+L*c)*Math.sin(f+w*h),x.y=e*Math.cos(f+w*h),x.z=e*Math.sin(l+L*c)*Math.sin(f+w*h),b.push(x.x,x.y,x.z),_.copy(x).normalize(),E.push(_.x,_.y,_.z),M.push(L+P,1-w),U.push(p++)}g.push(U)}for(let v=0;v<r;v++)for(let U=0;U<i;U++){const w=g[v][U+1],P=g[v][U],G=g[v+1][U],L=g[v+1][U+1];(v!==0||f>0)&&y.push(w,P,L),(v!==r-1||m<Math.PI)&&y.push(P,G,L)}this.setIndex(y),this.setAttribute("position",new ii(b,3)),this.setAttribute("normal",new ii(E,3)),this.setAttribute("uv",new ii(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ig extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iv,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VA extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kA extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class e_ extends gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class XA extends e_{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Qd=new $t,Fg=new se,Hg=new se;class qA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new up,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Fg.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fg),Hg.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Hg),i.updateMatrixWorld(),Qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t_ extends Yv{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jA extends qA{constructor(){super(new t_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WA extends e_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new jA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YA extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class j2{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(_t(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class W2 extends zr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){st("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gg(s,e,i,r){const l=ZA(r);switch(i){case Pv:return s*e;case zv:return s*e/l.components*l.byteLength;case ap:return s*e/l.components*l.byteLength;case rp:return s*e*2/l.components*l.byteLength;case sp:return s*e*2/l.components*l.byteLength;case Bv:return s*e*3/l.components*l.byteLength;case Ti:return s*e*4/l.components*l.byteLength;case op:return s*e*4/l.components*l.byteLength;case Xc:case qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:case Sh:return Math.max(s,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(s,8)*Math.max(e,8)/2;case yh:case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Fh:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gh:case Vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kh:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZA(s){switch(s){case Bi:case Uv:return{byteLength:1,components:1};case jo:case Lv:case Fs:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case Or:case tp:case ma:return{byteLength:4,components:1};case Nv:case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);function n_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function QA(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,b)=>y.start-b.start);let _=0;for(let y=1;y<x.length;y++){const b=x[_],E=x[y];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++_,x[_]=E)}x.length=_+1;for(let y=0,b=x.length;y<b;y++){const E=x[y];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var KA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ME=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,N3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:KA,alphahash_pars_fragment:JA,alphamap_fragment:$A,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:aE,batching_pars_vertex:rE,batching_vertex:sE,begin_vertex:oE,beginnormal_vertex:lE,bsdfs:cE,iridescence_fragment:uE,bumpmap_pars_fragment:fE,clipping_planes_fragment:dE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:xE,color_pars_fragment:gE,color_pars_vertex:vE,color_vertex:_E,common:SE,cube_uv_reflection_fragment:yE,defaultnormal_vertex:ME,displacementmap_pars_vertex:bE,displacementmap_vertex:AE,emissivemap_fragment:EE,emissivemap_pars_fragment:TE,colorspace_fragment:RE,colorspace_pars_fragment:CE,envmap_fragment:wE,envmap_common_pars_fragment:DE,envmap_pars_fragment:UE,envmap_pars_vertex:LE,envmap_physical_pars_fragment:kE,envmap_vertex:NE,fog_vertex:OE,fog_pars_vertex:PE,fog_fragment:BE,fog_pars_fragment:zE,gradientmap_pars_fragment:IE,lightmap_pars_fragment:FE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:GE,lights_pars_begin:VE,lights_toon_fragment:XE,lights_toon_pars_fragment:qE,lights_phong_fragment:jE,lights_phong_pars_fragment:WE,lights_physical_fragment:YE,lights_physical_pars_fragment:ZE,lights_fragment_begin:QE,lights_fragment_maps:KE,lights_fragment_end:JE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:e3,logdepthbuf_pars_vertex:t3,logdepthbuf_vertex:n3,map_fragment:i3,map_pars_fragment:a3,map_particle_fragment:r3,map_particle_pars_fragment:s3,metalnessmap_fragment:o3,metalnessmap_pars_fragment:l3,morphinstance_vertex:c3,morphcolor_vertex:u3,morphnormal_vertex:f3,morphtarget_pars_vertex:d3,morphtarget_vertex:h3,normal_fragment_begin:p3,normal_fragment_maps:m3,normal_pars_fragment:x3,normal_pars_vertex:g3,normal_vertex:v3,normalmap_pars_fragment:_3,clearcoat_normal_fragment_begin:S3,clearcoat_normal_fragment_maps:y3,clearcoat_pars_fragment:M3,iridescence_pars_fragment:b3,opaque_fragment:A3,packing:E3,premultiplied_alpha_fragment:T3,project_vertex:R3,dithering_fragment:C3,dithering_pars_fragment:w3,roughnessmap_fragment:D3,roughnessmap_pars_fragment:U3,shadowmap_pars_fragment:L3,shadowmap_pars_vertex:N3,shadowmap_vertex:O3,shadowmask_pars_fragment:P3,skinbase_vertex:B3,skinning_pars_vertex:z3,skinning_vertex:I3,skinnormal_vertex:F3,specularmap_fragment:H3,specularmap_pars_fragment:G3,tonemapping_fragment:V3,tonemapping_pars_fragment:k3,transmission_fragment:X3,transmission_pars_fragment:q3,uv_pars_fragment:j3,uv_pars_vertex:W3,uv_vertex:Y3,worldpos_vertex:Z3,background_vert:Q3,background_frag:K3,backgroundCube_vert:J3,backgroundCube_frag:$3,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:a1,distanceRGBA_frag:r1,equirect_vert:s1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:d1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:x1,meshnormal_frag:g1,meshphong_vert:v1,meshphong_frag:_1,meshphysical_vert:S1,meshphysical_frag:y1,meshtoon_vert:M1,meshtoon_frag:b1,points_vert:A1,points_frag:E1,shadow_vert:T1,shadow_frag:R1,sprite_vert:C1,sprite_frag:w1},Oe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Pn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Pn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Pn([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Pn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Pn([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Pn([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Pn([Oe.common,Oe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Pn([Oe.lights,Oe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Hc={r:0,b:0,g:0},Rr=new zi,D1=new $t;function U1(s,e,i,r,l,c,f){const h=new Et(0);let m=c===!0?0:1,p,g,x=null,_=0,y=null;function b(w){let P=w.isScene===!0?w.background:null;return P&&P.isTexture&&(P=(w.backgroundBlurriness>0?i:e).get(P)),P}function E(w){let P=!1;const G=b(w);G===null?v(h,m):G&&G.isColor&&(v(G,1),P=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(w,P){const G=b(P);G&&(G.isCubeTexture||G.mapping===su)?(g===void 0&&(g=new Ii(new al(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:zs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Rr.copy(P.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(Rr)),g.material.toneMapped=Lt.getTransfer(G.colorSpace)!==kt,(x!==G||_!==G.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=G,_=G.version,y=s.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ii(new ou(2,2),new Sa({name:"BackgroundMaterial",uniforms:zs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(G.colorSpace)!==kt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||_!==G.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=G,_=G.version,y=s.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function v(w,P){w.getRGB(Hc,Wv(s)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,P,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,P=1){h.set(w),m=P,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,v(h,m)},render:E,addToRenderList:M,dispose:U}}function L1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function h(C,k,ne,le,fe){let me=!1;const B=x(le,ne,k);c!==B&&(c=B,p(c.object)),me=y(C,le,ne,fe),me&&b(C,le,ne,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,P(C,k,ne,le),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,k,ne){const le=ne.wireframe===!0;let fe=r[C.id];fe===void 0&&(fe={},r[C.id]=fe);let me=fe[k.id];me===void 0&&(me={},fe[k.id]=me);let B=me[le];return B===void 0&&(B=_(m()),me[le]=B),B}function _(C){const k=[],ne=[],le=[];for(let fe=0;fe<i;fe++)k[fe]=0,ne[fe]=0,le[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:le,object:C,attributes:{},index:null}}function y(C,k,ne,le){const fe=c.attributes,me=k.attributes;let B=0;const $=ne.getAttributes();for(const W in $)if($[W].location>=0){const Se=fe[W];let N=me[W];if(N===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Se===void 0||Se.attribute!==N||N&&Se.data!==N.data)return!0;B++}return c.attributesNum!==B||c.index!==le}function b(C,k,ne,le){const fe={},me=k.attributes;let B=0;const $=ne.getAttributes();for(const W in $)if($[W].location>=0){let Se=me[W];Se===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor));const N={};N.attribute=Se,Se&&Se.data&&(N.data=Se.data),fe[W]=N,B++}c.attributes=fe,c.attributesNum=B,c.index=le}function E(){const C=c.newAttributes;for(let k=0,ne=C.length;k<ne;k++)C[k]=0}function M(C){v(C,0)}function v(C,k){const ne=c.newAttributes,le=c.enabledAttributes,fe=c.attributeDivisors;ne[C]=1,le[C]===0&&(s.enableVertexAttribArray(C),le[C]=1),fe[C]!==k&&(s.vertexAttribDivisor(C,k),fe[C]=k)}function U(){const C=c.newAttributes,k=c.enabledAttributes;for(let ne=0,le=k.length;ne<le;ne++)k[ne]!==C[ne]&&(s.disableVertexAttribArray(ne),k[ne]=0)}function w(C,k,ne,le,fe,me,B){B===!0?s.vertexAttribIPointer(C,k,ne,fe,me):s.vertexAttribPointer(C,k,ne,le,fe,me)}function P(C,k,ne,le){E();const fe=le.attributes,me=ne.getAttributes(),B=k.defaultAttributeValues;for(const $ in me){const W=me[$];if(W.location>=0){let pe=fe[$];if(pe===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),pe!==void 0){const Se=pe.normalized,N=pe.itemSize,te=e.get(pe);if(te===void 0)continue;const ye=te.buffer,Te=te.type,Pe=te.bytesPerElement,ae=Te===s.INT||Te===s.UNSIGNED_INT||pe.gpuType===tp;if(pe.isInterleavedBufferAttribute){const ue=pe.data,De=ue.stride,Ge=pe.offset;if(ue.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)v(W.location+qe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let qe=0;qe<W.locationSize;qe++)M(W.location+qe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let qe=0;qe<W.locationSize;qe++)w(W.location+qe,N/W.locationSize,Te,Se,De*Pe,(Ge+N/W.locationSize*qe)*Pe,ae)}else{if(pe.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)v(W.location+ue,pe.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ue=0;ue<W.locationSize;ue++)M(W.location+ue);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ue=0;ue<W.locationSize;ue++)w(W.location+ue,N/W.locationSize,Te,Se,N*Pe,N/W.locationSize*ue*Pe,ae)}}else if(B!==void 0){const Se=B[$];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(W.location,Se);break;case 3:s.vertexAttrib3fv(W.location,Se);break;case 4:s.vertexAttrib4fv(W.location,Se);break;default:s.vertexAttrib1fv(W.location,Se)}}}}U()}function G(){Z();for(const C in r){const k=r[C];for(const ne in k){const le=k[ne];for(const fe in le)g(le[fe].object),delete le[fe];delete k[ne]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const ne in k){const le=k[ne];for(const fe in le)g(le[fe].object),delete le[fe];delete k[ne]}delete r[C.id]}function z(C){for(const k in r){const ne=r[k];if(ne[C.id]===void 0)continue;const le=ne[C.id];for(const fe in le)g(le[fe].object),delete le[fe];delete ne[C.id]}}function Z(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:M,disableUnusedAttributes:U}}function N1(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let y=0;for(let b=0;b<x;b++)y+=g[b];i.update(y,r,1)}function m(p,g,x,_){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],g[b],_[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,x);let b=0;for(let E=0;E<x;E++)b+=g[E]*_[E];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function O1(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ti&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===Fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Bi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ma&&!Z)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(st("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:U,maxVaryings:w,maxFragmentUniforms:P,vertexTextures:G,maxSamples:L}}function P1(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Dr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||r!==0||l;return l=_,r=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,y){const b=x.clippingPlanes,E=x.clipIntersection,M=x.clipShadows,v=s.get(x);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const U=c?0:r,w=U*4;let P=v.clippingState||null;m.value=P,P=g(b,_,w,y);for(let G=0;G!==w;++G)P[G]=i[G];v.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,_,y,b){const E=x!==null?x.length:0;let M=null;if(E!==0){if(M=m.value,b!==!0||M===null){const v=y+E*4,U=_.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<v)&&(M=new Float32Array(v));for(let w=0,P=y;w!==E;++w,P+=4)f.copy(x[w]).applyMatrix4(U,h),f.normal.toArray(M,P),M[P+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,M}}function B1(s){let e=new WeakMap;function i(f,h){return h===hh?f.mapping=Os:h===ph&&(f.mapping=Ps),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===hh||h===ph)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new LA(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,Vg=[.125,.215,.35,.446,.526,.582],Lr=20,z1=256,ko=new t_,kg=new Et;let Kd=null,Jd=0,$d=0,eh=!1;const I1=new se;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=I1}=c;Kd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Jd,$d),this._renderer.xr.enabled=eh,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Os||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Fs,format:Ti,colorSpace:Bs,depthBuffer:!1},l=qg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F1(c)),this._blurMaterial=G1(c,e,i),this._ggxMaterial=H1(c,e,i)}return l}_compileMaterial(e){const i=new Ii(new ai,e);this._renderer.compile(i,ko)}_sceneToCubeUV(e,i,r,l,c){const m=new mi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(kg),x.toneMapping=nr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new al,new Xv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,M=E.material;let v=!1;const U=e.background;U?U.isColor&&(M.color.copy(U),e.background=null,v=!0):(M.color.copy(kg),v=!0);for(let w=0;w<6;w++){const P=w%3;P===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[w],c.y,c.z)):P===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[w]));const G=this._cubeSize;Ds(l,P*G,w>2?G:0,G,G),x.setRenderTarget(l),v&&x.render(E,m),x.render(e,m)}x.toneMapping=y,x.autoClear=_,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Os||e.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jg());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ds(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,ko)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,y=x*_,{_lodMax:b}=this,E=this._sizeLods[r],M=3*E*(r>b-tr?r-b+tr:0),v=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Ds(c,M,v,3*E,2*E),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Ds(e,M,v,3*E,2*E),l.setRenderTarget(e),l.render(h,ko)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const _=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Lr-1),E=c/b,M=isFinite(c)?1+Math.floor(g*E):Lr;M>Lr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Lr}`);const v=[];let U=0;for(let z=0;z<Lr;++z){const Z=z/E,D=Math.exp(-Z*Z/2);v.push(D),z===0?U+=D:z<M&&(U+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/U;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:w}=this;_.dTheta.value=b,_.mipInt.value=w-r;const P=this._sizeLods[l],G=3*P*(l>w-tr?l-w+tr:0),L=4*(this._cubeSize-P);Ds(i,G,L,3*P,2*P),m.setRenderTarget(i),m.render(x,ko)}}function F1(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+Vg.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-tr?m=Vg[f-s+tr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,b=6,E=3,M=2,v=1,U=new Float32Array(E*b*y),w=new Float32Array(M*b*y),P=new Float32Array(v*b*y);for(let L=0;L<y;L++){const z=L%3*2/3-1,Z=L>2?0:-1,D=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];U.set(D,E*b*L),w.set(_,M*b*L);const C=[L,L,L,L,L,L];P.set(C,v*b*L)}const G=new ai;G.setAttribute("position",new Pi(U,E)),G.setAttribute("uv",new Pi(w,M)),G.setAttribute("faceIndex",new Pi(P,v)),r.push(new Ii(G,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function qg(s,e,i){const r=new Pr(s,e,i);return r.texture.mapping=su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ds(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function H1(s,e,i){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function G1(s,e,i){const r=new Float32Array(Lr),l=new se(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function jg(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Wg(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V1(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===hh||m===ph,g=m===Os||m===Ps;if(p||g){let x=e.get(h);const _=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Xg(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Xg(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function k1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Qo("WebGLRenderer: "+r+" extension not supported."),l}}}function X1(s,e,i,r){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function p(x){const _=[],y=x.index,b=x.attributes.position;let E=0;if(y!==null){const U=y.array;E=y.version;for(let w=0,P=U.length;w<P;w+=3){const G=U[w+0],L=U[w+1],z=U[w+2];_.push(G,L,L,z,z,G)}}else if(b!==void 0){const U=b.array;E=b.version;for(let w=0,P=U.length/3-1;w<P;w+=3){const G=w+0,L=w+1,z=w+2;_.push(G,L,L,z,z,G)}}else return;const M=new(Hv(_)?jv:qv)(_,1);M.version=E;const v=c.get(x);v&&e.remove(v),c.set(x,M)}function g(x){const _=c.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function q1(s,e,i){let r;function l(_){r=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,y){s.drawElements(r,y,c,_*f),i.update(y,r,1)}function p(_,y,b){b!==0&&(s.drawElementsInstanced(r,y,c,_*f,b),i.update(y,r,b))}function g(_,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,r,1)}function x(_,y,b,E){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)p(_[v]/f,y[v],E[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,E,0,b);let v=0;for(let U=0;U<b;U++)v+=y[U]*E[U];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function j1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:on("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function W1(s,e,i){const r=new WeakMap,l=new nn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==x){let D=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;y===!0&&(w=1),b===!0&&(w=2),E===!0&&(w=3);let P=h.attributes.position.count*w,G=1;P>e.maxTextureSize&&(G=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*G*4*x),z=new Gv(L,P,G,x);z.type=ma,z.needsUpdate=!0;const Z=w*4;for(let C=0;C<x;C++){const k=M[C],ne=v[C],le=U[C],fe=P*G*4*C;for(let me=0;me<k.count;me++){const B=me*Z;y===!0&&(l.fromBufferAttribute(k,me),L[fe+B+0]=l.x,L[fe+B+1]=l.y,L[fe+B+2]=l.z,L[fe+B+3]=0),b===!0&&(l.fromBufferAttribute(ne,me),L[fe+B+4]=l.x,L[fe+B+5]=l.y,L[fe+B+6]=l.z,L[fe+B+7]=0),E===!0&&(l.fromBufferAttribute(le,me),L[fe+B+8]=l.x,L[fe+B+9]=l.y,L[fe+B+10]=l.z,L[fe+B+11]=le.itemSize===4?l.w:1)}}_={count:x,texture:z,size:new Ot(P,G)},r.set(h,_),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let y=0;for(let E=0;E<p.length;E++)y+=p[E];const b=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function Y1(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return x}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const i_=new Bn,Yg=new Jv(1,1),a_=new Gv,r_=new mA,s_=new Zv,Zg=[],Qg=[],Kg=new Float32Array(16),Jg=new Float32Array(9),$g=new Float32Array(4);function Hs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Zg[l];if(c===void 0&&(c=new Float32Array(l),Zg[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function vn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function _n(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function cu(s,e){let i=Qg[e];i===void 0&&(i=new Int32Array(e),Qg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function Z1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Q1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2fv(this.addr,e),_n(i,e)}}function K1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;s.uniform3fv(this.addr,e),_n(i,e)}}function J1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4fv(this.addr,e),_n(i,e)}}function $1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;$g.set(r),s.uniformMatrix2fv(this.addr,!1,$g),_n(i,r)}}function eT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;Jg.set(r),s.uniformMatrix3fv(this.addr,!1,Jg),_n(i,r)}}function tT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;Kg.set(r),s.uniformMatrix4fv(this.addr,!1,Kg),_n(i,r)}}function nT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function iT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2iv(this.addr,e),_n(i,e)}}function aT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3iv(this.addr,e),_n(i,e)}}function rT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4iv(this.addr,e),_n(i,e)}}function sT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function oT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2uiv(this.addr,e),_n(i,e)}}function lT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3uiv(this.addr,e),_n(i,e)}}function cT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4uiv(this.addr,e),_n(i,e)}}function uT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Yg.compareFunction=Fv,c=Yg):c=i_,i.setTexture2D(e||c,l)}function fT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||r_,l)}function dT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||s_,l)}function hT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||a_,l)}function pT(s){switch(s){case 5126:return Z1;case 35664:return Q1;case 35665:return K1;case 35666:return J1;case 35674:return $1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(s,e){s.uniform1fv(this.addr,e)}function xT(s,e){const i=Hs(e,this.size,2);s.uniform2fv(this.addr,i)}function gT(s,e){const i=Hs(e,this.size,3);s.uniform3fv(this.addr,i)}function vT(s,e){const i=Hs(e,this.size,4);s.uniform4fv(this.addr,i)}function _T(s,e){const i=Hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ST(s,e){const i=Hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function yT(s,e){const i=Hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function MT(s,e){s.uniform1iv(this.addr,e)}function bT(s,e){s.uniform2iv(this.addr,e)}function AT(s,e){s.uniform3iv(this.addr,e)}function ET(s,e){s.uniform4iv(this.addr,e)}function TT(s,e){s.uniform1uiv(this.addr,e)}function RT(s,e){s.uniform2uiv(this.addr,e)}function CT(s,e){s.uniform3uiv(this.addr,e)}function wT(s,e){s.uniform4uiv(this.addr,e)}function DT(s,e,i){const r=this.cache,l=e.length,c=cu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||i_,c[f])}function UT(s,e,i){const r=this.cache,l=e.length,c=cu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||r_,c[f])}function LT(s,e,i){const r=this.cache,l=e.length,c=cu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||s_,c[f])}function NT(s,e,i){const r=this.cache,l=e.length,c=cu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||a_,c[f])}function OT(s){switch(s){case 5126:return mT;case 35664:return xT;case 35665:return gT;case 35666:return vT;case 35674:return _T;case 35675:return ST;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return bT;case 35668:case 35672:return AT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class BT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const th=/(\w+)(\])?(\[|\.)?/g;function ev(s,e){s.seq.push(e),s.map[e.id]=e}function IT(s,e,i){const r=s.name,l=r.length;for(th.lastIndex=0;;){const c=th.exec(r),f=th.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ev(i,p===void 0?new PT(h,s,e):new BT(h,s,e));break}else{let x=i.map[h];x===void 0&&(x=new zT(h),ev(i,x)),i=x}}}class Zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);IT(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function tv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const FT=37297;let HT=0;function GT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const nv=new dt;function VT(s){Lt._getMatrix(nv,Lt.workingColorSpace,s);const e=`mat3( ${nv.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(s)){case Jc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function iv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+GT(s.getShaderSource(e),h)}else return c}function kT(s,e){const i=VT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XT(s,e){let i;switch(e){case kb:i="Linear";break;case Xb:i="Reinhard";break;case qb:i="Cineon";break;case jb:i="ACESFilmic";break;case Yb:i="AgX";break;case Zb:i="Neutral";break;case Wb:i="Custom";break;default:st("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new se;function qT(){Lt.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),e=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function WT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function YT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Xo(s){return s!==""}function av(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(ZT,KT)}const QT=new Map;function KT(s,e){let i=mt[e];if(i===void 0){const r=QT.get(e);if(r!==void 0)i=mt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sv(s){return s.replace(JT,$T)}function $T(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ov(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function t2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case Ps:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function i2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wv:e="ENVMAP_BLENDING_MULTIPLY";break;case Gb:e="ENVMAP_BLENDING_MIX";break;case Vb:e="ENVMAP_BLENDING_ADD";break}return e}function a2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function r2(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=e2(i),p=t2(i),g=n2(i),x=i2(i),_=a2(i),y=jT(i),b=WT(c),E=l.createProgram();let M,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(M=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?mt.tonemapping_pars_fragment:"",i.toneMapping!==nr?XT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Wh(f),f=av(f,i),f=rv(f,i),h=Wh(h),h=av(h,i),h=rv(h,i),f=sv(f),h=sv(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=U+M+f,P=U+v+h,G=tv(l,l.VERTEX_SHADER,w),L=tv(l,l.FRAGMENT_SHADER,P);l.attachShader(E,G),l.attachShader(E,L),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function z(k){if(s.debug.checkShaderErrors){const ne=l.getProgramInfoLog(E)||"",le=l.getShaderInfoLog(G)||"",fe=l.getShaderInfoLog(L)||"",me=ne.trim(),B=le.trim(),$=fe.trim();let W=!0,pe=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,E,G,L);else{const Se=iv(l,G,"vertex"),N=iv(l,L,"fragment");on("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+me+`
`+Se+`
`+N)}else me!==""?st("WebGLProgram: Program Info Log:",me):(B===""||$==="")&&(pe=!1);pe&&(k.diagnostics={runnable:W,programLog:me,vertexShader:{log:B,prefix:M},fragmentShader:{log:$,prefix:v}})}l.deleteShader(G),l.deleteShader(L),Z=new Zc(l,E),D=YT(l,E)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(E,FT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=G,this.fragmentShader=L,this}let s2=0;class o2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new l2(e),i.set(e,r)),r}}class l2{constructor(e){this.id=s2++,this.code=e,this.usedTimes=0}}function c2(s,e,i,r,l,c,f){const h=new Vv,m=new o2,p=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,k,ne,le){const fe=ne.fog,me=le.geometry,B=D.isMeshStandardMaterial?ne.environment:null,$=(D.isMeshStandardMaterial?i:e).get(D.envMap||B),W=$&&$.mapping===su?$.image.height:null,pe=b[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&st("WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Se=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,N=Se!==void 0?Se.length:0;let te=0;me.morphAttributes.position!==void 0&&(te=1),me.morphAttributes.normal!==void 0&&(te=2),me.morphAttributes.color!==void 0&&(te=3);let ye,Te,Pe,ae;if(pe){const Ct=Ni[pe];ye=Ct.vertexShader,Te=Ct.fragmentShader}else ye=D.vertexShader,Te=D.fragmentShader,m.update(D),Pe=m.getVertexShaderID(D),ae=m.getFragmentShaderID(D);const ue=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Ge=le.isInstancedMesh===!0,qe=le.isBatchedMesh===!0,ct=!!D.map,an=!!D.matcap,ht=!!$,Rt=!!D.aoMap,F=!!D.lightMap,pt=!!D.bumpMap,xt=!!D.normalMap,Bt=!!D.displacementMap,Ve=!!D.emissiveMap,Xt=!!D.metalnessMap,Ze=!!D.roughnessMap,rt=D.anisotropy>0,O=D.clearcoat>0,A=D.dispersion>0,K=D.iridescence>0,ge=D.sheen>0,Me=D.transmission>0,ce=rt&&!!D.anisotropyMap,We=O&&!!D.clearcoatMap,Ne=O&&!!D.clearcoatNormalMap,Je=O&&!!D.clearcoatRoughnessMap,je=K&&!!D.iridescenceMap,be=K&&!!D.iridescenceThicknessMap,Ee=ge&&!!D.sheenColorMap,Ye=ge&&!!D.sheenRoughnessMap,ke=!!D.specularMap,Be=!!D.specularColorMap,it=!!D.specularIntensityMap,H=Me&&!!D.transmissionMap,Ue=Me&&!!D.thicknessMap,Ce=!!D.gradientMap,we=!!D.alphaMap,Ae=D.alphaTest>0,_e=!!D.alphaHash,Ie=!!D.extensions;let at=nr;D.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ft={shaderID:pe,shaderType:D.type,shaderName:D.name,vertexShader:ye,fragmentShader:Te,defines:D.defines,customVertexShaderID:Pe,customFragmentShaderID:ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:qe,batchingColor:qe&&le._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&le.instanceColor!==null,instancingMorph:Ge&&le.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Bs,alphaToCoverage:!!D.alphaToCoverage,map:ct,matcap:an,envMap:ht,envMapMode:ht&&$.mapping,envMapCubeUVHeight:W,aoMap:Rt,lightMap:F,bumpMap:pt,normalMap:xt,displacementMap:_&&Bt,emissiveMap:Ve,normalMapObjectSpace:xt&&D.normalMapType===$b,normalMapTangentSpace:xt&&D.normalMapType===Iv,metalnessMap:Xt,roughnessMap:Ze,anisotropy:rt,anisotropyMap:ce,clearcoat:O,clearcoatMap:We,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Je,dispersion:A,iridescence:K,iridescenceMap:je,iridescenceThicknessMap:be,sheen:ge,sheenColorMap:Ee,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:Be,specularIntensityMap:it,transmission:Me,transmissionMap:H,thicknessMap:Ue,gradientMap:Ce,opaque:D.transparent===!1&&D.blending===Us&&D.alphaToCoverage===!1,alphaMap:we,alphaTest:Ae,alphaHash:_e,combine:D.combine,mapUv:ct&&E(D.map.channel),aoMapUv:Rt&&E(D.aoMap.channel),lightMapUv:F&&E(D.lightMap.channel),bumpMapUv:pt&&E(D.bumpMap.channel),normalMapUv:xt&&E(D.normalMap.channel),displacementMapUv:Bt&&E(D.displacementMap.channel),emissiveMapUv:Ve&&E(D.emissiveMap.channel),metalnessMapUv:Xt&&E(D.metalnessMap.channel),roughnessMapUv:Ze&&E(D.roughnessMap.channel),anisotropyMapUv:ce&&E(D.anisotropyMap.channel),clearcoatMapUv:We&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:be&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(D.sheenRoughnessMap.channel),specularMapUv:ke&&E(D.specularMap.channel),specularColorMapUv:Be&&E(D.specularColorMap.channel),specularIntensityMapUv:it&&E(D.specularIntensityMap.channel),transmissionMapUv:H&&E(D.transmissionMap.channel),thicknessMapUv:Ue&&E(D.thicknessMap.channel),alphaMapUv:we&&E(D.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(xt||rt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!me.attributes.uv&&(ct||we),fog:!!fe,useFog:D.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:le.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&D.map.isVideoTexture===!0&&Lt.getTransfer(D.map.colorSpace)===kt,decodeVideoTextureEmissive:Ve&&D.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(D.emissiveMap.colorSpace)===kt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ha,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ie&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&D.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ft.vertexUv1s=p.has(1),Ft.vertexUv2s=p.has(2),Ft.vertexUv3s=p.has(3),p.clear(),Ft}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)C.push(k),C.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(U(C,D),w(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function U(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function w(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function P(D){const C=b[D.type];let k;if(C){const ne=Ni[C];k=CA.clone(ne.uniforms)}else k=D.uniforms;return k}function G(D,C){let k;for(let ne=0,le=g.length;ne<le;ne++){const fe=g[ne];if(fe.cacheKey===C){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new r2(s,C,D,c),g.push(k)),k}function L(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:P,acquireProgram:G,releaseProgram:L,releaseShaderCache:z,programs:g,dispose:Z}}function u2(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function f2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(x,_,y,b,E,M){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:y,groupOrder:b,renderOrder:x.renderOrder,z:E,group:M},s[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=y,v.groupOrder=b,v.renderOrder=x.renderOrder,v.z=E,v.group=M),e++,v}function h(x,_,y,b,E,M){const v=f(x,_,y,b,E,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(x,_,y,b,E,M){const v=f(x,_,y,b,E,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,_){i.length>1&&i.sort(x||f2),r.length>1&&r.sort(_||lv),l.length>1&&l.sort(_||lv)}function g(){for(let x=e,_=s.length;x<_;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function d2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new cv,s.set(r,[f])):l>=c.length?(f=new cv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function h2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new Et};break;case"SpotLight":i={position:new se,direction:new se,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=i,i}}}function p2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let m2=0;function x2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function g2(s){const e=new h2,i=p2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new se);const l=new se,c=new $t,f=new $t;function h(p){let g=0,x=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,b=0,E=0,M=0,v=0,U=0,w=0,P=0,G=0,L=0,z=0;p.sort(x2);for(let D=0,C=p.length;D<C;D++){const k=p[D],ne=k.color,le=k.intensity,fe=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ne.r*le,x+=ne.g*le,_+=ne.b*le;else if(k.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],le);z++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const $=k.shadow,W=i.get(k);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=me,r.directionalShadowMatrix[y]=k.shadow.matrix,U++}r.directional[y]=B,y++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(ne).multiplyScalar(le),B.distance=fe,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,r.spot[E]=B;const $=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,$.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[E]=$.matrix,k.castShadow){const W=i.get(k);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,r.spotShadow[E]=W,r.spotShadowMap[E]=me,P++}E++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(ne).multiplyScalar(le),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=B,M++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const $=k.shadow,W=i.get(k);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=me,r.pointShadowMatrix[b]=k.shadow.matrix,w++}r.point[b]=B,b++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(le),B.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[v]=B,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==b||Z.spotLength!==E||Z.rectAreaLength!==M||Z.hemiLength!==v||Z.numDirectionalShadows!==U||Z.numPointShadows!==w||Z.numSpotShadows!==P||Z.numSpotMaps!==G||Z.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=E,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+G-L,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=z,Z.directionalLength=y,Z.pointLength=b,Z.spotLength=E,Z.rectAreaLength=M,Z.hemiLength=v,Z.numDirectionalShadows=U,Z.numPointShadows=w,Z.numSpotShadows=P,Z.numSpotMaps=G,Z.numLightProbes=z,r.version=m2++)}function m(p,g){let x=0,_=0,y=0,b=0,E=0;const M=g.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const w=p[v];if(w.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),x++}else if(w.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(w.isRectAreaLight){const P=r.rectArea[b];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),f.identity(),c.copy(w.matrixWorld),c.premultiply(M),f.extractRotation(c),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),b++}else if(w.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),_++}else if(w.isHemisphereLight){const P=r.hemi[E];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(M),E++}}}return{setup:h,setupView:m,state:r}}function uv(s){const e=new g2(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function v2(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new uv(s),e.set(l,[h])):c>=f.length?(h=new uv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const _2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y2(s,e,i){let r=new up;const l=new Ot,c=new Ot,f=new nn,h=new VA({depthPacking:Jb}),m=new kA,p={},g=i.maxTextureSize,x={[ir]:Xn,[Xn]:ir,[ha]:ha},_=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:_2,fragmentShader:S2}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new ai;b.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ii(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let v=this.type;this.render=function(L,z,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(ga),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const le=v!==da&&this.type===da,fe=v===da&&this.type!==da;for(let me=0,B=L.length;me<B;me++){const $=L[me],W=$.shadow;if(W===void 0){st("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const pe=W.getFrameExtents();if(l.multiply(pe),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/pe.x),l.x=c.x*pe.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/pe.y),l.y=c.y*pe.y,W.mapSize.y=c.y)),W.map===null||le===!0||fe===!0){const N=this.type!==da?{minFilter:ni,magFilter:ni}:{};W.map!==null&&W.map.dispose(),W.map=new Pr(l.x,l.y,N),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Se=W.getViewportCount();for(let N=0;N<Se;N++){const te=W.getViewport(N);f.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),ne.viewport(f),W.updateMatrices($,N),r=W.getFrustum(),P(z,Z,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===da&&U(W,Z),W.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(D,C,k)};function U(L,z){const Z=e.update(E);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Pr(l.x,l.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,_,E,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(z,null,Z,y,E,null)}function w(L,z,Z,D){let C=null;const k=Z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)C=k;else if(C=Z.isPointLight===!0?m:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=C.uuid,le=z.uuid;let fe=p[ne];fe===void 0&&(fe={},p[ne]=fe);let me=fe[le];me===void 0&&(me=C.clone(),fe[le]=me,z.addEventListener("dispose",G)),C=me}if(C.visible=z.visible,C.wireframe=z.wireframe,D===da?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:x[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=s.properties.get(C);ne.light=Z}return C}function P(L,z,Z,D,C){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===da)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld);const le=e.update(L),fe=L.material;if(Array.isArray(fe)){const me=le.groups;for(let B=0,$=me.length;B<$;B++){const W=me[B],pe=fe[W.materialIndex];if(pe&&pe.visible){const Se=w(L,pe,D,C);L.onBeforeShadow(s,L,z,Z,le,Se,W),s.renderBufferDirect(Z,null,le,Se,L,W),L.onAfterShadow(s,L,z,Z,le,Se,W)}}}else if(fe.visible){const me=w(L,fe,D,C);L.onBeforeShadow(s,L,z,Z,le,me,null),s.renderBufferDirect(Z,null,le,me,L,null),L.onAfterShadow(s,L,z,Z,le,me,null)}}const ne=L.children;for(let le=0,fe=ne.length;le<fe;le++)P(ne[le],z,Z,D,C)}function G(L){L.target.removeEventListener("dispose",G);for(const Z in p){const D=p[Z],C=L.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const M2={[sh]:oh,[lh]:fh,[ch]:dh,[Ns]:uh,[oh]:sh,[fh]:lh,[dh]:ch,[uh]:Ns};function b2(s,e){function i(){let H=!1;const Ue=new nn;let Ce=null;const we=new nn(0,0,0,0);return{setMask:function(Ae){Ce!==Ae&&!H&&(s.colorMask(Ae,Ae,Ae,Ae),Ce=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,_e,Ie,at,Ft){Ft===!0&&(Ae*=at,_e*=at,Ie*=at),Ue.set(Ae,_e,Ie,at),we.equals(Ue)===!1&&(s.clearColor(Ae,_e,Ie,at),we.copy(Ue))},reset:function(){H=!1,Ce=null,we.set(-1,0,0,0)}}}function r(){let H=!1,Ue=!1,Ce=null,we=null,Ae=null;return{setReversed:function(_e){if(Ue!==_e){const Ie=e.get("EXT_clip_control");_e?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Ue=_e;const at=Ae;Ae=null,this.setClear(at)}},getReversed:function(){return Ue},setTest:function(_e){_e?ue(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(_e){Ce!==_e&&!H&&(s.depthMask(_e),Ce=_e)},setFunc:function(_e){if(Ue&&(_e=M2[_e]),we!==_e){switch(_e){case sh:s.depthFunc(s.NEVER);break;case oh:s.depthFunc(s.ALWAYS);break;case lh:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case ch:s.depthFunc(s.EQUAL);break;case uh:s.depthFunc(s.GEQUAL);break;case fh:s.depthFunc(s.GREATER);break;case dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=_e}},setLocked:function(_e){H=_e},setClear:function(_e){Ae!==_e&&(Ue&&(_e=1-_e),s.clearDepth(_e),Ae=_e)},reset:function(){H=!1,Ce=null,we=null,Ae=null,Ue=!1}}}function l(){let H=!1,Ue=null,Ce=null,we=null,Ae=null,_e=null,Ie=null,at=null,Ft=null;return{setTest:function(Ct){H||(Ct?ue(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Ct){Ue!==Ct&&!H&&(s.stencilMask(Ct),Ue=Ct)},setFunc:function(Ct,Dn,qn){(Ce!==Ct||we!==Dn||Ae!==qn)&&(s.stencilFunc(Ct,Dn,qn),Ce=Ct,we=Dn,Ae=qn)},setOp:function(Ct,Dn,qn){(_e!==Ct||Ie!==Dn||at!==qn)&&(s.stencilOp(Ct,Dn,qn),_e=Ct,Ie=Dn,at=qn)},setLocked:function(Ct){H=Ct},setClear:function(Ct){Ft!==Ct&&(s.clearStencil(Ct),Ft=Ct)},reset:function(){H=!1,Ue=null,Ce=null,we=null,Ae=null,_e=null,Ie=null,at=null,Ft=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,y=[],b=null,E=!1,M=null,v=null,U=null,w=null,P=null,G=null,L=null,z=new Et(0,0,0),Z=0,D=!1,C=null,k=null,ne=null,le=null,fe=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=$>=2);let pe=null,Se={};const N=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),ye=new nn().fromArray(N),Te=new nn().fromArray(te);function Pe(H,Ue,Ce,we){const Ae=new Uint8Array(4),_e=s.createTexture();s.bindTexture(H,_e),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<Ce;Ie++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Ue+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return _e}const ae={};ae[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ue(s.DEPTH_TEST),f.setFunc(Ns),pt(!1),xt(lg),ue(s.CULL_FACE),Rt(ga);function ue(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function De(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function Ge(H,Ue){return x[H]!==Ue?(s.bindFramebuffer(H,Ue),x[H]=Ue,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ue),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function qe(H,Ue){let Ce=y,we=!1;if(H){Ce=_.get(Ue),Ce===void 0&&(Ce=[],_.set(Ue,Ce));const Ae=H.textures;if(Ce.length!==Ae.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Ie=Ae.length;_e<Ie;_e++)Ce[_e]=s.COLOR_ATTACHMENT0+_e;Ce.length=Ae.length,we=!0}}else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,we=!0);we&&s.drawBuffers(Ce)}function ct(H){return b!==H?(s.useProgram(H),b=H,!0):!1}const an={[Ur]:s.FUNC_ADD,[Ab]:s.FUNC_SUBTRACT,[Eb]:s.FUNC_REVERSE_SUBTRACT};an[Tb]=s.MIN,an[Rb]=s.MAX;const ht={[Cb]:s.ZERO,[wb]:s.ONE,[Db]:s.SRC_COLOR,[ah]:s.SRC_ALPHA,[Bb]:s.SRC_ALPHA_SATURATE,[Ob]:s.DST_COLOR,[Lb]:s.DST_ALPHA,[Ub]:s.ONE_MINUS_SRC_COLOR,[rh]:s.ONE_MINUS_SRC_ALPHA,[Pb]:s.ONE_MINUS_DST_COLOR,[Nb]:s.ONE_MINUS_DST_ALPHA,[zb]:s.CONSTANT_COLOR,[Ib]:s.ONE_MINUS_CONSTANT_COLOR,[Fb]:s.CONSTANT_ALPHA,[Hb]:s.ONE_MINUS_CONSTANT_ALPHA};function Rt(H,Ue,Ce,we,Ae,_e,Ie,at,Ft,Ct){if(H===ga){E===!0&&(De(s.BLEND),E=!1);return}if(E===!1&&(ue(s.BLEND),E=!0),H!==bb){if(H!==M||Ct!==D){if((v!==Ur||P!==Ur)&&(s.blendEquation(s.FUNC_ADD),v=Ur,P=Ur),Ct)switch(H){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kc:s.blendFunc(s.ONE,s.ONE);break;case cg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ug:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:on("WebGLState: Invalid blending: ",H);break}else switch(H){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case cg:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ug:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",H);break}U=null,w=null,G=null,L=null,z.set(0,0,0),Z=0,M=H,D=Ct}return}Ae=Ae||Ue,_e=_e||Ce,Ie=Ie||we,(Ue!==v||Ae!==P)&&(s.blendEquationSeparate(an[Ue],an[Ae]),v=Ue,P=Ae),(Ce!==U||we!==w||_e!==G||Ie!==L)&&(s.blendFuncSeparate(ht[Ce],ht[we],ht[_e],ht[Ie]),U=Ce,w=we,G=_e,L=Ie),(at.equals(z)===!1||Ft!==Z)&&(s.blendColor(at.r,at.g,at.b,Ft),z.copy(at),Z=Ft),M=H,D=!1}function F(H,Ue){H.side===ha?De(s.CULL_FACE):ue(s.CULL_FACE);let Ce=H.side===Xn;Ue&&(Ce=!Ce),pt(Ce),H.blending===Us&&H.transparent===!1?Rt(ga):Rt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),c.setMask(H.colorWrite);const we=H.stencilWrite;h.setTest(we),we&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function xt(H){H!==Sb?(ue(s.CULL_FACE),H!==k&&(H===lg?s.cullFace(s.BACK):H===yb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),k=H}function Bt(H){H!==ne&&(B&&s.lineWidth(H),ne=H)}function Ve(H,Ue,Ce){H?(ue(s.POLYGON_OFFSET_FILL),(le!==Ue||fe!==Ce)&&(s.polygonOffset(Ue,Ce),le=Ue,fe=Ce)):De(s.POLYGON_OFFSET_FILL)}function Xt(H){H?ue(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Ze(H){H===void 0&&(H=s.TEXTURE0+me-1),pe!==H&&(s.activeTexture(H),pe=H)}function rt(H,Ue,Ce){Ce===void 0&&(pe===null?Ce=s.TEXTURE0+me-1:Ce=pe);let we=Se[Ce];we===void 0&&(we={type:void 0,texture:void 0},Se[Ce]=we),(we.type!==H||we.texture!==Ue)&&(pe!==Ce&&(s.activeTexture(Ce),pe=Ce),s.bindTexture(H,Ue||ae[H]),we.type=H,we.texture=Ue)}function O(){const H=Se[pe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ge(){try{s.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Me(){try{s.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function We(){try{s.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ne(){try{s.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Je(){try{s.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function je(){try{s.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function be(){try{s.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(H){ye.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ye.copy(H))}function Ye(H){Te.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function ke(H,Ue){let Ce=p.get(Ue);Ce===void 0&&(Ce=new WeakMap,p.set(Ue,Ce));let we=Ce.get(H);we===void 0&&(we=s.getUniformBlockIndex(Ue,H.name),Ce.set(H,we))}function Be(H,Ue){const we=p.get(Ue).get(H);m.get(Ue)!==we&&(s.uniformBlockBinding(Ue,we,H.__bindingPointIndex),m.set(Ue,we))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},pe=null,Se={},x={},_=new WeakMap,y=[],b=null,E=!1,M=null,v=null,U=null,w=null,P=null,G=null,L=null,z=new Et(0,0,0),Z=0,D=!1,C=null,k=null,ne=null,le=null,fe=null,ye.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ue,disable:De,bindFramebuffer:Ge,drawBuffers:qe,useProgram:ct,setBlending:Rt,setMaterial:F,setFlipSided:pt,setCullFace:xt,setLineWidth:Bt,setPolygonOffset:Ve,setScissorTest:Xt,activeTexture:Ze,bindTexture:rt,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:K,texImage2D:je,texImage3D:be,updateUBOMapping:ke,uniformBlockBinding:Be,texStorage2D:Ne,texStorage3D:Je,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:We,scissor:Ee,viewport:Ye,reset:it}}function A2(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ot,g=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,A){return y?new OffscreenCanvas(O,A):eu("canvas")}function E(O,A,K){let ge=1;const Me=rt(O);if((Me.width>K||Me.height>K)&&(ge=K/Math.max(Me.width,Me.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ce=Math.floor(ge*Me.width),We=Math.floor(ge*Me.height);x===void 0&&(x=b(ce,We));const Ne=A?b(ce,We):x;return Ne.width=ce,Ne.height=We,Ne.getContext("2d").drawImage(O,0,0,ce,We),st("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ce+"x"+We+")."),Ne}else return"data"in O&&st("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){s.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(O,A,K,ge,Me=!1){if(O!==null){if(s[O]!==void 0)return s[O];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ce=A;if(A===s.RED&&(K===s.FLOAT&&(ce=s.R32F),K===s.HALF_FLOAT&&(ce=s.R16F),K===s.UNSIGNED_BYTE&&(ce=s.R8)),A===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.R8UI),K===s.UNSIGNED_SHORT&&(ce=s.R16UI),K===s.UNSIGNED_INT&&(ce=s.R32UI),K===s.BYTE&&(ce=s.R8I),K===s.SHORT&&(ce=s.R16I),K===s.INT&&(ce=s.R32I)),A===s.RG&&(K===s.FLOAT&&(ce=s.RG32F),K===s.HALF_FLOAT&&(ce=s.RG16F),K===s.UNSIGNED_BYTE&&(ce=s.RG8)),A===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RG8UI),K===s.UNSIGNED_SHORT&&(ce=s.RG16UI),K===s.UNSIGNED_INT&&(ce=s.RG32UI),K===s.BYTE&&(ce=s.RG8I),K===s.SHORT&&(ce=s.RG16I),K===s.INT&&(ce=s.RG32I)),A===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),K===s.UNSIGNED_INT&&(ce=s.RGB32UI),K===s.BYTE&&(ce=s.RGB8I),K===s.SHORT&&(ce=s.RGB16I),K===s.INT&&(ce=s.RGB32I)),A===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),K===s.UNSIGNED_INT&&(ce=s.RGBA32UI),K===s.BYTE&&(ce=s.RGBA8I),K===s.SHORT&&(ce=s.RGBA16I),K===s.INT&&(ce=s.RGBA32I)),A===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),A===s.RGBA){const We=Me?Jc:Lt.getTransfer(ge);K===s.FLOAT&&(ce=s.RGBA32F),K===s.HALF_FLOAT&&(ce=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ce=We===kt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(O,A){let K;return O?A===null||A===Or||A===Wo?K=s.DEPTH24_STENCIL8:A===ma?K=s.DEPTH32F_STENCIL8:A===jo&&(K=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Or||A===Wo?K=s.DEPTH_COMPONENT24:A===ma?K=s.DEPTH_COMPONENT32F:A===jo&&(K=s.DEPTH_COMPONENT16),K}function G(O,A){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==ni&&O.minFilter!==xi?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function L(O){const A=O.target;A.removeEventListener("dispose",L),Z(A),A.isVideoTexture&&g.delete(A)}function z(O){const A=O.target;A.removeEventListener("dispose",z),C(A)}function Z(O){const A=r.get(O);if(A.__webglInit===void 0)return;const K=O.source,ge=_.get(K);if(ge){const Me=ge[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&D(O),Object.keys(ge).length===0&&_.delete(K)}r.remove(O)}function D(O){const A=r.get(O);s.deleteTexture(A.__webglTexture);const K=O.source,ge=_.get(K);delete ge[A.__cacheKey],f.memory.textures--}function C(O){const A=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let Me=0;Me<A.__webglFramebuffer[ge].length;Me++)s.deleteFramebuffer(A.__webglFramebuffer[ge][Me]);else s.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)s.deleteFramebuffer(A.__webglFramebuffer[ge]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=O.textures;for(let ge=0,Me=K.length;ge<Me;ge++){const ce=r.get(K[ge]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove(K[ge])}r.remove(O)}let k=0;function ne(){k=0}function le(){const O=k;return O>=l.maxTextures&&st("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function fe(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function me(O,A){const K=r.get(O);if(O.isVideoTexture&&Xt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&K.__version!==O.version){const ge=O.image;if(ge===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(K,O,A);return}}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+A)}function B(O,A){const K=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){ae(K,O,A);return}else O.isExternalTexture&&(K.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+A)}function $(O,A){const K=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&K.__version!==O.version){ae(K,O,A);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+A)}function W(O,A){const K=r.get(O);if(O.version>0&&K.__version!==O.version){ue(K,O,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+A)}const pe={[mh]:s.REPEAT,[pa]:s.CLAMP_TO_EDGE,[xh]:s.MIRRORED_REPEAT},Se={[ni]:s.NEAREST,[Qb]:s.NEAREST_MIPMAP_NEAREST,[gc]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Ed]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},N={[eA]:s.NEVER,[sA]:s.ALWAYS,[tA]:s.LESS,[Fv]:s.LEQUAL,[nA]:s.EQUAL,[rA]:s.GEQUAL,[iA]:s.GREATER,[aA]:s.NOTEQUAL};function te(O,A){if(A.type===ma&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xi||A.magFilter===Ed||A.magFilter===gc||A.magFilter===Nr||A.minFilter===xi||A.minFilter===Ed||A.minFilter===gc||A.minFilter===Nr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,pe[A.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,pe[A.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,pe[A.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Se[A.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Se[A.minFilter]),A.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ni||A.minFilter!==gc&&A.minFilter!==Nr||A.type===ma&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ye(O,A){let K=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",L));const ge=A.source;let Me=_.get(ge);Me===void 0&&(Me={},_.set(ge,Me));const ce=fe(A);if(ce!==O.__cacheKey){Me[ce]===void 0&&(Me[ce]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,K=!0),Me[ce].usedTimes++;const We=Me[O.__cacheKey];We!==void 0&&(Me[O.__cacheKey].usedTimes--,We.usedTimes===0&&D(A)),O.__cacheKey=ce,O.__webglTexture=Me[ce].texture}return K}function Te(O,A,K){return Math.floor(Math.floor(O/K)/A)}function Pe(O,A,K,ge){const ce=O.updateRanges;if(ce.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,K,ge,A.data);else{ce.sort((be,Ee)=>be.start-Ee.start);let We=0;for(let be=1;be<ce.length;be++){const Ee=ce[We],Ye=ce[be],ke=Ee.start+Ee.count,Be=Te(Ye.start,A.width,4),it=Te(Ee.start,A.width,4);Ye.start<=ke+1&&Be===it&&Te(Ye.start+Ye.count-1,A.width,4)===Be?Ee.count=Math.max(Ee.count,Ye.start+Ye.count-Ee.start):(++We,ce[We]=Ye)}ce.length=We+1;const Ne=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),je=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let be=0,Ee=ce.length;be<Ee;be++){const Ye=ce[be],ke=Math.floor(Ye.start/4),Be=Math.ceil(Ye.count/4),it=ke%A.width,H=Math.floor(ke/A.width),Ue=Be,Ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),i.texSubImage2D(s.TEXTURE_2D,0,it,H,Ue,Ce,K,ge,A.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,je)}}function ae(O,A,K){let ge=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=s.TEXTURE_3D);const Me=ye(O,A),ce=A.source;i.bindTexture(ge,O.__webglTexture,s.TEXTURE0+K);const We=r.get(ce);if(ce.version!==We.__version||Me===!0){i.activeTexture(s.TEXTURE0+K);const Ne=Lt.getPrimaries(Lt.workingColorSpace),Je=A.colorSpace===er?null:Lt.getPrimaries(A.colorSpace),je=A.colorSpace===er||Ne===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let be=E(A.image,!1,l.maxTextureSize);be=Ze(A,be);const Ee=c.convert(A.format,A.colorSpace),Ye=c.convert(A.type);let ke=w(A.internalFormat,Ee,Ye,A.colorSpace,A.isVideoTexture);te(ge,A);let Be;const it=A.mipmaps,H=A.isVideoTexture!==!0,Ue=We.__version===void 0||Me===!0,Ce=ce.dataReady,we=G(A,be);if(A.isDepthTexture)ke=P(A.format===Zo,A.type),Ue&&(H?i.texStorage2D(s.TEXTURE_2D,1,ke,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,ke,be.width,be.height,0,Ee,Ye,null));else if(A.isDataTexture)if(it.length>0){H&&Ue&&i.texStorage2D(s.TEXTURE_2D,we,ke,it[0].width,it[0].height);for(let Ae=0,_e=it.length;Ae<_e;Ae++)Be=it[Ae],H?Ce&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Be.width,Be.height,Ee,Ye,Be.data):i.texImage2D(s.TEXTURE_2D,Ae,ke,Be.width,Be.height,0,Ee,Ye,Be.data);A.generateMipmaps=!1}else H?(Ue&&i.texStorage2D(s.TEXTURE_2D,we,ke,be.width,be.height),Ce&&Pe(A,be,Ee,Ye)):i.texImage2D(s.TEXTURE_2D,0,ke,be.width,be.height,0,Ee,Ye,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){H&&Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,ke,it[0].width,it[0].height,be.depth);for(let Ae=0,_e=it.length;Ae<_e;Ae++)if(Be=it[Ae],A.format!==Ti)if(Ee!==null)if(H){if(Ce)if(A.layerUpdates.size>0){const Ie=Gg(Be.width,Be.height,A.format,A.type);for(const at of A.layerUpdates){const Ft=Be.data.subarray(at*Ie/Be.data.BYTES_PER_ELEMENT,(at+1)*Ie/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,at,Be.width,Be.height,1,Ee,Ft)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,be.depth,Ee,Be.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,ke,Be.width,Be.height,be.depth,0,Be.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ce&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Be.width,Be.height,be.depth,Ee,Ye,Be.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ae,ke,Be.width,Be.height,be.depth,0,Ee,Ye,Be.data)}else{H&&Ue&&i.texStorage2D(s.TEXTURE_2D,we,ke,it[0].width,it[0].height);for(let Ae=0,_e=it.length;Ae<_e;Ae++)Be=it[Ae],A.format!==Ti?Ee!==null?H?Ce&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Be.width,Be.height,Ee,Be.data):i.compressedTexImage2D(s.TEXTURE_2D,Ae,ke,Be.width,Be.height,0,Be.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ce&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Be.width,Be.height,Ee,Ye,Be.data):i.texImage2D(s.TEXTURE_2D,Ae,ke,Be.width,Be.height,0,Ee,Ye,Be.data)}else if(A.isDataArrayTexture)if(H){if(Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,ke,be.width,be.height,be.depth),Ce)if(A.layerUpdates.size>0){const Ae=Gg(be.width,be.height,A.format,A.type);for(const _e of A.layerUpdates){const Ie=be.data.subarray(_e*Ae/be.data.BYTES_PER_ELEMENT,(_e+1)*Ae/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,be.width,be.height,1,Ee,Ye,Ie)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Ye,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,be.width,be.height,be.depth,0,Ee,Ye,be.data);else if(A.isData3DTexture)H?(Ue&&i.texStorage3D(s.TEXTURE_3D,we,ke,be.width,be.height,be.depth),Ce&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Ye,be.data)):i.texImage3D(s.TEXTURE_3D,0,ke,be.width,be.height,be.depth,0,Ee,Ye,be.data);else if(A.isFramebufferTexture){if(Ue)if(H)i.texStorage2D(s.TEXTURE_2D,we,ke,be.width,be.height);else{let Ae=be.width,_e=be.height;for(let Ie=0;Ie<we;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,ke,Ae,_e,0,Ee,Ye,null),Ae>>=1,_e>>=1}}else if(it.length>0){if(H&&Ue){const Ae=rt(it[0]);i.texStorage2D(s.TEXTURE_2D,we,ke,Ae.width,Ae.height)}for(let Ae=0,_e=it.length;Ae<_e;Ae++)Be=it[Ae],H?Ce&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ee,Ye,Be):i.texImage2D(s.TEXTURE_2D,Ae,ke,Ee,Ye,Be);A.generateMipmaps=!1}else if(H){if(Ue){const Ae=rt(be);i.texStorage2D(s.TEXTURE_2D,we,ke,Ae.width,Ae.height)}Ce&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Ye,be)}else i.texImage2D(s.TEXTURE_2D,0,ke,Ee,Ye,be);M(A)&&v(ge),We.__version=ce.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ue(O,A,K){if(A.image.length!==6)return;const ge=ye(O,A),Me=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+K);const ce=r.get(Me);if(Me.version!==ce.__version||ge===!0){i.activeTexture(s.TEXTURE0+K);const We=Lt.getPrimaries(Lt.workingColorSpace),Ne=A.colorSpace===er?null:Lt.getPrimaries(A.colorSpace),Je=A.colorSpace===er||We===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const je=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,Ee=[];for(let _e=0;_e<6;_e++)!je&&!be?Ee[_e]=E(A.image[_e],!0,l.maxCubemapSize):Ee[_e]=be?A.image[_e].image:A.image[_e],Ee[_e]=Ze(A,Ee[_e]);const Ye=Ee[0],ke=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),it=w(A.internalFormat,ke,Be,A.colorSpace),H=A.isVideoTexture!==!0,Ue=ce.__version===void 0||ge===!0,Ce=Me.dataReady;let we=G(A,Ye);te(s.TEXTURE_CUBE_MAP,A);let Ae;if(je){H&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Ye.width,Ye.height);for(let _e=0;_e<6;_e++){Ae=Ee[_e].mipmaps;for(let Ie=0;Ie<Ae.length;Ie++){const at=Ae[Ie];A.format!==Ti?ke!==null?H?Ce&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,0,0,at.width,at.height,ke,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,it,at.width,at.height,0,at.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,0,0,at.width,at.height,ke,Be,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,it,at.width,at.height,0,ke,Be,at.data)}}}else{if(Ae=A.mipmaps,H&&Ue){Ae.length>0&&we++;const _e=rt(Ee[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){H?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee[_e].width,Ee[_e].height,ke,Be,Ee[_e].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Ee[_e].width,Ee[_e].height,0,ke,Be,Ee[_e].data);for(let Ie=0;Ie<Ae.length;Ie++){const Ft=Ae[Ie].image[_e].image;H?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,0,0,Ft.width,Ft.height,ke,Be,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,it,Ft.width,Ft.height,0,ke,Be,Ft.data)}}else{H?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ke,Be,Ee[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,ke,Be,Ee[_e]);for(let Ie=0;Ie<Ae.length;Ie++){const at=Ae[Ie];H?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,0,0,ke,Be,at.image[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,it,ke,Be,at.image[_e])}}}M(A)&&v(s.TEXTURE_CUBE_MAP),ce.__version=Me.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function De(O,A,K,ge,Me,ce){const We=c.convert(K.format,K.colorSpace),Ne=c.convert(K.type),Je=w(K.internalFormat,We,Ne,K.colorSpace),je=r.get(A),be=r.get(K);if(be.__renderTarget=A,!je.__hasExternalTextures){const Ee=Math.max(1,A.width>>ce),Ye=Math.max(1,A.height>>ce);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?i.texImage3D(Me,ce,Je,Ee,Ye,A.depth,0,We,Ne,null):i.texImage2D(Me,ce,Je,Ee,Ye,0,We,Ne,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Ve(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,Me,be.__webglTexture,0,Bt(A)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,Me,be.__webglTexture,ce),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(O,A,K){if(s.bindRenderbuffer(s.RENDERBUFFER,O),A.depthBuffer){const ge=A.depthTexture,Me=ge&&ge.isDepthTexture?ge.type:null,ce=P(A.stencilBuffer,Me),We=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Bt(A);Ve(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,ce,A.width,A.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ce,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ce,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,O)}else{const ge=A.textures;for(let Me=0;Me<ge.length;Me++){const ce=ge[Me],We=c.convert(ce.format,ce.colorSpace),Ne=c.convert(ce.type),Je=w(ce.internalFormat,We,Ne,ce.colorSpace),je=Bt(A);K&&Ve(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Je,A.width,A.height):Ve(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,Je,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Je,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me(A.depthTexture,0);const Me=ge.__webglTexture,ce=Bt(A);if(A.depthTexture.format===Yo)Ve(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(A.depthTexture.format===Zo)Ve(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function ct(O){const A=r.get(O),K=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const ge=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",Me)};ge.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=ge}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ge=O.texture.mipmaps;ge&&ge.length>0?qe(A.__webglFramebuffer[0],O):qe(A.__webglFramebuffer,O)}else if(K){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=s.createRenderbuffer(),Ge(A.__webglDepthbuffer[ge],O,!1);else{const Me=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,ce)}}else{const ge=O.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ge(A.__webglDepthbuffer,O,!1);else{const Me=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,ce)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function an(O,A,K){const ge=r.get(O);A!==void 0&&De(ge.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ct(O)}function ht(O){const A=O.texture,K=r.get(O),ge=r.get(A);O.addEventListener("dispose",z);const Me=O.textures,ce=O.isWebGLCubeRenderTarget===!0,We=Me.length>1;if(We||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=A.version,f.memory.textures++),ce){K.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[Ne]=[];for(let Je=0;Je<A.mipmaps.length;Je++)K.__webglFramebuffer[Ne][Je]=s.createFramebuffer()}else K.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)K.__webglFramebuffer[Ne]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ne=0,Je=Me.length;Ne<Je;Ne++){const je=r.get(Me[Ne]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&Ve(O)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Me.length;Ne++){const Je=Me[Ne];K.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ne]);const je=c.convert(Je.format,Je.colorSpace),be=c.convert(Je.type),Ee=w(Je.internalFormat,je,be,Je.colorSpace,O.isXRRenderTarget===!0),Ye=Bt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ee,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(K.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),te(s.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Je=0;Je<A.mipmaps.length;Je++)De(K.__webglFramebuffer[Ne][Je],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Je);else De(K.__webglFramebuffer[Ne],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(A)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let Ne=0,Je=Me.length;Ne<Je;Ne++){const je=Me[Ne],be=r.get(je);let Ee=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ee=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),te(Ee,je),De(K.__webglFramebuffer,O,je,s.COLOR_ATTACHMENT0+Ne,Ee,0),M(je)&&v(Ee)}i.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ne=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,ge.__webglTexture),te(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Je=0;Je<A.mipmaps.length;Je++)De(K.__webglFramebuffer[Je],O,A,s.COLOR_ATTACHMENT0,Ne,Je);else De(K.__webglFramebuffer,O,A,s.COLOR_ATTACHMENT0,Ne,0);M(A)&&v(Ne),i.unbindTexture()}O.depthBuffer&&ct(O)}function Rt(O){const A=O.textures;for(let K=0,ge=A.length;K<ge;K++){const Me=A[K];if(M(Me)){const ce=U(O),We=r.get(Me).__webglTexture;i.bindTexture(ce,We),v(ce),i.unbindTexture()}}}const F=[],pt=[];function xt(O){if(O.samples>0){if(Ve(O)===!1){const A=O.textures,K=O.width,ge=O.height;let Me=s.COLOR_BUFFER_BIT;const ce=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(O),Ne=A.length>1;if(Ne)for(let je=0;je<A.length;je++)i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Je=O.texture.mipmaps;Je&&Je.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let je=0;je<A.length;je++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[je]);const be=r.get(A[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,K,ge,0,0,K,ge,Me,s.NEAREST),m===!0&&(F.length=0,pt.length=0,F.push(s.COLOR_ATTACHMENT0+je),O.depthBuffer&&O.resolveDepthBuffer===!1&&(F.push(ce),pt.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<A.length;je++){i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,We.__webglColorRenderbuffer[je]);const be=r.get(A[je]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const A=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Bt(O){return Math.min(l.maxSamples,O.samples)}function Ve(O){const A=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(O){const A=f.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function Ze(O,A){const K=O.colorSpace,ge=O.format,Me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||K!==Bs&&K!==er&&(Lt.getTransfer(K)===kt?(ge!==Ti||Me!==Bi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",K)),A}function rt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=ne,this.setTexture2D=me,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=an,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ve}function E2(s,e){function i(r,l=er){let c;const f=Lt.getTransfer(l);if(r===Bi)return s.UNSIGNED_BYTE;if(r===np)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ip)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Nv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ov)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Uv)return s.BYTE;if(r===Lv)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===tp)return s.INT;if(r===Or)return s.UNSIGNED_INT;if(r===ma)return s.FLOAT;if(r===Fs)return s.HALF_FLOAT;if(r===Pv)return s.ALPHA;if(r===Bv)return s.RGB;if(r===Ti)return s.RGBA;if(r===Yo)return s.DEPTH_COMPONENT;if(r===Zo)return s.DEPTH_STENCIL;if(r===zv)return s.RED;if(r===ap)return s.RED_INTEGER;if(r===rp)return s.RG;if(r===sp)return s.RG_INTEGER;if(r===op)return s.RGBA_INTEGER;if(r===Xc||r===qc||r===jc||r===Wc)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gh||r===vh||r===_h||r===Sh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh||r===Mh||r===bh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yh||r===Mh)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===bh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ah||r===Eh||r===Th||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ah)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Th)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ch)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ph)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zh)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ih||r===Fh||r===Hh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ih)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gh||r===Vh||r===kh||r===Xh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Gh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const T2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new $v(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Sa({vertexShader:T2,fragmentShader:R2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ii(new ou(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w2 extends zr{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,x=null,_=null,y=null,b=null;const E=typeof XRWebGLBinding<"u",M=new C2,v={},U=i.getContextAttributes();let w=null,P=null;const G=[],L=[],z=new Ot;let Z=null;const D=new mi;D.viewport=new nn;const C=new mi;C.viewport=new nn;const k=[D,C],ne=new YA;let le=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=G[ae];return ue===void 0&&(ue=new Wd,G[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=G[ae];return ue===void 0&&(ue=new Wd,G[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=G[ae];return ue===void 0&&(ue=new Wd,G[ae]=ue),ue.getHandSpace()};function me(ae){const ue=L.indexOf(ae.inputSource);if(ue===-1)return;const De=G[ue];De!==void 0&&(De.update(ae.inputSource,ae.frame,p||f),De.dispatchEvent({type:ae.type,data:ae.inputSource}))}function B(){l.removeEventListener("select",me),l.removeEventListener("selectstart",me),l.removeEventListener("selectend",me),l.removeEventListener("squeeze",me),l.removeEventListener("squeezestart",me),l.removeEventListener("squeezeend",me),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",$);for(let ae=0;ae<G.length;ae++){const ue=L[ae];ue!==null&&(L[ae]=null,G[ae].disconnect(ue))}le=null,fe=null,M.reset();for(const ae in v)delete v[ae];e.setRenderTarget(w),y=null,_=null,x=null,l=null,P=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&E&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(w=e.getRenderTarget(),l.addEventListener("select",me),l.addEventListener("selectstart",me),l.addEventListener("selectend",me),l.addEventListener("squeeze",me),l.addEventListener("squeezestart",me),l.addEventListener("squeezeend",me),l.addEventListener("end",B),l.addEventListener("inputsourceschange",$),U.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Ge=null,qe=null;U.depth&&(qe=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=U.stencil?Zo:Yo,Ge=U.stencil?Wo:Or);const ct={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(ct),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Pr(_.textureWidth,_.textureHeight,{format:Ti,type:Bi,depthTexture:new Jv(_.textureWidth,_.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const De={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Pr(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(ae){for(let ue=0;ue<ae.removed.length;ue++){const De=ae.removed[ue],Ge=L.indexOf(De);Ge>=0&&(L[Ge]=null,G[Ge].disconnect(De))}for(let ue=0;ue<ae.added.length;ue++){const De=ae.added[ue];let Ge=L.indexOf(De);if(Ge===-1){for(let ct=0;ct<G.length;ct++)if(ct>=L.length){L.push(De),Ge=ct;break}else if(L[ct]===null){L[ct]=De,Ge=ct;break}if(Ge===-1)break}const qe=G[Ge];qe&&qe.connect(De)}}const W=new se,pe=new se;function Se(ae,ue,De){W.setFromMatrixPosition(ue.matrixWorld),pe.setFromMatrixPosition(De.matrixWorld);const Ge=W.distanceTo(pe),qe=ue.projectionMatrix.elements,ct=De.projectionMatrix.elements,an=qe[14]/(qe[10]-1),ht=qe[14]/(qe[10]+1),Rt=(qe[9]+1)/qe[5],F=(qe[9]-1)/qe[5],pt=(qe[8]-1)/qe[0],xt=(ct[8]+1)/ct[0],Bt=an*pt,Ve=an*xt,Xt=Ge/(-pt+xt),Ze=Xt*-pt;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ze),ae.translateZ(Xt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),qe[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const rt=an+Xt,O=ht+Xt,A=Bt-Ze,K=Ve+(Ge-Ze),ge=Rt*ht/O*rt,Me=F*ht/O*rt;ae.projectionMatrix.makePerspective(A,K,ge,Me,rt,O),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function N(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ue=ae.near,De=ae.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(De=M.depthFar)),ne.near=C.near=D.near=ue,ne.far=C.far=D.far=De,(le!==ne.near||fe!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),le=ne.near,fe=ne.far),ne.layers.mask=ae.layers.mask|6,D.layers.mask=ne.layers.mask&3,C.layers.mask=ne.layers.mask&5;const Ge=ae.parent,qe=ne.cameras;N(ne,Ge);for(let ct=0;ct<qe.length;ct++)N(qe[ct],Ge);qe.length===2?Se(ne,D,C):ne.projectionMatrix.copy(D.projectionMatrix),te(ae,ne,Ge)};function te(ae,ue,De){De===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(De.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=qh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ne)},this.getCameraTexture=function(ae){return v[ae]};let ye=null;function Te(ae,ue){if(g=ue.getViewerPose(p||f),b=ue,g!==null){const De=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ge=!1;De.length!==ne.cameras.length&&(ne.cameras.length=0,Ge=!0);for(let ht=0;ht<De.length;ht++){const Rt=De[ht];let F=null;if(y!==null)F=y.getViewport(Rt);else{const xt=x.getViewSubImage(_,Rt);F=xt.viewport,ht===0&&(e.setRenderTargetTextures(P,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(P))}let pt=k[ht];pt===void 0&&(pt=new mi,pt.layers.enable(ht),pt.viewport=new nn,k[ht]=pt),pt.matrix.fromArray(Rt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Rt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(F.x,F.y,F.width,F.height),ht===0&&(ne.matrix.copy(pt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ge===!0&&ne.cameras.push(pt)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){x=r.getBinding();const ht=x.getDepthInformation(De[0]);ht&&ht.isValid&&ht.texture&&M.init(ht,l.renderState)}if(qe&&qe.includes("camera-access")&&E){e.state.unbindTexture(),x=r.getBinding();for(let ht=0;ht<De.length;ht++){const Rt=De[ht].camera;if(Rt){let F=v[Rt];F||(F=new $v,v[Rt]=F);const pt=x.getCameraImage(Rt);F.sourceTexture=pt}}}}for(let De=0;De<G.length;De++){const Ge=L[De],qe=G[De];Ge!==null&&qe!==void 0&&qe.update(Ge,ue,p||f)}ye&&ye(ae,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),b=null}const Pe=new n_;Pe.setAnimationLoop(Te),this.setAnimationLoop=function(ae){ye=ae},this.dispose=function(){}}}const Cr=new zi,D2=new $t;function U2(s,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,Wv(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,U,w,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&y(M,v,P)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),E(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,U,w):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Xn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Xn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const U=e.get(v),w=U.envMap,P=U.envMapRotation;w&&(M.envMap.value=w,Cr.copy(P),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),M.envMapRotation.value.setFromMatrix4(D2.makeRotationFromEuler(Cr)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,U,w){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*U,M.scale.value=w*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,U){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function E(M,v){const U=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function L2(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,w){const P=w.program;r.uniformBlockBinding(U,P)}function p(U,w){let P=l[U.id];P===void 0&&(b(U),P=g(U),l[U.id]=P,U.addEventListener("dispose",M));const G=w.program;r.updateUBOMapping(U,G);const L=e.render.frame;c[U.id]!==L&&(_(U),c[U.id]=L)}function g(U){const w=x();U.__bindingPointIndex=w;const P=s.createBuffer(),G=U.__size,L=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,G,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,P),P}function x(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const w=l[U.id],P=U.uniforms,G=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let L=0,z=P.length;L<z;L++){const Z=Array.isArray(P[L])?P[L]:[P[L]];for(let D=0,C=Z.length;D<C;D++){const k=Z[D];if(y(k,L,D,G)===!0){const ne=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let me=0;me<le.length;me++){const B=le[me],$=E(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ne+fe,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,fe),fe+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(U,w,P,G){const L=U.value,z=w+"_"+P;if(G[z]===void 0)return typeof L=="number"||typeof L=="boolean"?G[z]=L:G[z]=L.clone(),!0;{const Z=G[z];if(typeof L=="number"||typeof L=="boolean"){if(Z!==L)return G[z]=L,!0}else if(Z.equals(L)===!1)return Z.copy(L),!0}return!1}function b(U){const w=U.uniforms;let P=0;const G=16;for(let z=0,Z=w.length;z<Z;z++){const D=Array.isArray(w[z])?w[z]:[w[z]];for(let C=0,k=D.length;C<k;C++){const ne=D[C],le=Array.isArray(ne.value)?ne.value:[ne.value];for(let fe=0,me=le.length;fe<me;fe++){const B=le[fe],$=E(B),W=P%G,pe=W%$.boundary,Se=W+pe;P+=pe,Se!==0&&G-Se<$.storage&&(P+=G-Se),ne.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=$.storage}}}const L=P%G;return L>0&&(P+=G-L),U.__size=P,U.__cache={},this}function E(U){const w={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(w.boundary=4,w.storage=4):U.isVector2?(w.boundary=8,w.storage=8):U.isVector3||U.isColor?(w.boundary=16,w.storage=12):U.isVector4?(w.boundary=16,w.storage=16):U.isMatrix3?(w.boundary=48,w.storage=48):U.isMatrix4?(w.boundary=64,w.storage=64):U.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",U),w}function M(U){const w=U.target;w.removeEventListener("dispose",M);const P=f.indexOf(w.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const U in l)s.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const N2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fa=null;function O2(){return fa===null&&(fa=new PA(N2,32,32,rp,Fs),fa.minFilter=xi,fa.magFilter=xi,fa.wrapS=pa,fa.wrapT=pa,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class P2{constructor(e={}){const{canvas:i=oA(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const b=new Set([op,sp,ap]),E=new Set([Bi,Or,jo,Wo,np,ip]),M=new Uint32Array(4),v=new Int32Array(4);let U=null,w=null;const P=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let z=!1;this._outputColorSpace=pi;let Z=0,D=0,C=null,k=-1,ne=null;const le=new nn,fe=new nn;let me=null;const B=new Et(0);let $=0,W=i.width,pe=i.height,Se=1,N=null,te=null;const ye=new nn(0,0,W,pe),Te=new nn(0,0,W,pe);let Pe=!1;const ae=new up;let ue=!1,De=!1;const Ge=new $t,qe=new se,ct=new nn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Rt(){return C===null?Se:1}let F=r;function pt(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ep}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",_e,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),F===null){const X="webgl2";if(F=pt(X,R),F===null)throw pt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let xt,Bt,Ve,Xt,Ze,rt,O,A,K,ge,Me,ce,We,Ne,Je,je,be,Ee,Ye,ke,Be,it,H,Ue;function Ce(){xt=new k1(F),xt.init(),it=new E2(F,xt),Bt=new O1(F,xt,e,it),Ve=new b2(F,xt),Bt.reversedDepthBuffer&&_&&Ve.buffers.depth.setReversed(!0),Xt=new j1(F),Ze=new u2,rt=new A2(F,xt,Ve,Ze,Bt,it,Xt),O=new B1(L),A=new V1(L),K=new QA(F),H=new L1(F,K),ge=new X1(F,K,Xt,H),Me=new Y1(F,ge,K,Xt),Ye=new W1(F,Bt,rt),je=new P1(Ze),ce=new c2(L,O,A,xt,Bt,H,je),We=new U2(L,Ze),Ne=new d2,Je=new v2(xt),Ee=new U1(L,O,A,Ve,Me,y,m),be=new y2(L,Me,Bt),Ue=new L2(F,Xt,Bt,Ve),ke=new N1(F,xt,Xt),Be=new q1(F,xt,Xt),Xt.programs=ce.programs,L.capabilities=Bt,L.extensions=xt,L.properties=Ze,L.renderLists=Ne,L.shadowMap=be,L.state=Ve,L.info=Xt}Ce();const we=new w2(L,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(W,pe,!1))},this.getSize=function(R){return R.set(W,pe)},this.setSize=function(R,X,re=!0){if(we.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,pe=X,i.width=Math.floor(R*Se),i.height=Math.floor(X*Se),re===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(W*Se,pe*Se).floor()},this.setDrawingBufferSize=function(R,X,re){W=R,pe=X,Se=re,i.width=Math.floor(R*re),i.height=Math.floor(X*re),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(ye)},this.setViewport=function(R,X,re,ee){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,X,re,ee),Ve.viewport(le.copy(ye).multiplyScalar(Se).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,X,re,ee){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,X,re,ee),Ve.scissor(fe.copy(Te).multiplyScalar(Se).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){Ve.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){te=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,re=!0){let ee=0;if(R){let Y=!1;if(C!==null){const Re=C.texture.format;Y=b.has(Re)}if(Y){const Re=C.texture.type,Le=E.has(Re),ze=Ee.getClearColor(),Fe=Ee.getClearAlpha(),et=ze.r,nt=ze.g,Qe=ze.b;Le?(M[0]=et,M[1]=nt,M[2]=Qe,M[3]=Fe,F.clearBufferuiv(F.COLOR,0,M)):(v[0]=et,v[1]=nt,v[2]=Qe,v[3]=Fe,F.clearBufferiv(F.COLOR,0,v))}else ee|=F.COLOR_BUFFER_BIT}X&&(ee|=F.DEPTH_BUFFER_BIT),re&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Ee.dispose(),Ne.dispose(),Je.dispose(),Ze.dispose(),O.dispose(),A.dispose(),Me.dispose(),H.dispose(),Ue.dispose(),ce.dispose(),we.dispose(),we.removeEventListener("sessionstart",Gs),we.removeEventListener("sessionend",Vs),vi.stop()};function Ae(R){R.preventDefault(),mg("WebGLRenderer: Context Lost."),z=!0}function _e(){mg("WebGLRenderer: Context Restored."),z=!1;const R=Xt.autoReset,X=be.enabled,re=be.autoUpdate,ee=be.needsUpdate,Y=be.type;Ce(),Xt.autoReset=R,be.enabled=X,be.autoUpdate=re,be.needsUpdate=ee,be.type=Y}function Ie(R){on("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const X=R.target;X.removeEventListener("dispose",at),Ft(X)}function Ft(R){Ct(R),Ze.remove(R)}function Ct(R){const X=Ze.get(R).programs;X!==void 0&&(X.forEach(function(re){ce.releaseProgram(re)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,re,ee,Y,Re){X===null&&(X=an);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=uu(R,X,re,ee,Y);Ve.setMaterial(ee,Le);let Fe=re.index,et=1;if(ee.wireframe===!0){if(Fe=ge.getWireframeAttribute(re),Fe===void 0)return;et=2}const nt=re.drawRange,Qe=re.attributes.position;let ut=nt.start*et,Tt=(nt.start+nt.count)*et;Re!==null&&(ut=Math.max(ut,Re.start*et),Tt=Math.min(Tt,(Re.start+Re.count)*et)),Fe!==null?(ut=Math.max(ut,0),Tt=Math.min(Tt,Fe.count)):Qe!=null&&(ut=Math.max(ut,0),Tt=Math.min(Tt,Qe.count));const wt=Tt-ut;if(wt<0||wt===1/0)return;H.setup(Y,ee,ze,re,Fe);let Mt,Pt=ke;if(Fe!==null&&(Mt=K.get(Fe),Pt=Be,Pt.setIndex(Mt)),Y.isMesh)ee.wireframe===!0?(Ve.setLineWidth(ee.wireframeLinewidth*Rt()),Pt.setMode(F.LINES)):Pt.setMode(F.TRIANGLES);else if(Y.isLine){let $e=ee.linewidth;$e===void 0&&($e=1),Ve.setLineWidth($e*Rt()),Y.isLineSegments?Pt.setMode(F.LINES):Y.isLineLoop?Pt.setMode(F.LINE_LOOP):Pt.setMode(F.LINE_STRIP)}else Y.isPoints?Pt.setMode(F.POINTS):Y.isSprite&&Pt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $e=Y._multiDrawStarts,qt=Y._multiDrawCounts,bt=Y._multiDrawCount,Sn=Fe?K.get(Fe).bytesPerElement:1,ba=Ze.get(ee).currentProgram.getUniforms();for(let Wt=0;Wt<bt;Wt++)ba.setValue(F,"_gl_DrawID",Wt),Pt.render($e[Wt]/Sn,qt[Wt])}else if(Y.isInstancedMesh)Pt.renderInstances(ut,wt,Y.count);else if(re.isInstancedBufferGeometry){const $e=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,qt=Math.min(re.instanceCount,$e);Pt.renderInstances(ut,wt,qt)}else Pt.render(ut,wt)};function Dn(R,X,re){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,pn(R,X,re),R.side=ir,R.needsUpdate=!0,pn(R,X,re),R.side=ha):pn(R,X,re)}this.compile=function(R,X,re=null){re===null&&(re=R),w=Je.get(re),w.init(X),G.push(w),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),R!==re&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const ee=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const ze=Re[Le];Dn(ze,re,Y),ee.add(ze)}else Dn(Re,re,Y),ee.add(Re)}),w=G.pop(),ee},this.compileAsync=function(R,X,re=null){const ee=this.compile(R,X,re);return new Promise(Y=>{function Re(){if(ee.forEach(function(Le){Ze.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){Y(R);return}setTimeout(Re,10)}xt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let qn=null;function rl(R){qn&&qn(R)}function Gs(){vi.stop()}function Vs(){vi.start()}const vi=new n_;vi.setAnimationLoop(rl),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){qn=R,we.setAnimationLoop(R),R===null?vi.stop():vi.start()},we.addEventListener("sessionstart",Gs),we.addEventListener("sessionend",Vs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,X,C),w=Je.get(R,G.length),w.init(X),G.push(w),Ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ae.setFromProjectionMatrix(Ge,Oi,X.reversedDepth),De=this.localClippingEnabled,ue=je.init(this.clippingPlanes,De),U=Ne.get(R,P.length),U.init(),P.push(U),we.enabled===!0&&we.isPresenting===!0){const Re=L.xr.getDepthSensingMesh();Re!==null&&rr(Re,X,-1/0,L.sortObjects)}rr(R,X,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(N,te),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&Ee.addToRenderList(U,R),this.info.render.frame++,ue===!0&&je.beginShadows();const re=w.state.shadowsArray;be.render(re,R,X),ue===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=U.opaque,Y=U.transmissive;if(w.setupLights(),X.isArrayCamera){const Re=X.cameras;if(Y.length>0)for(let Le=0,ze=Re.length;Le<ze;Le++){const Fe=Re[Le];Xs(ee,Y,R,Fe)}ht&&Ee.render(R);for(let Le=0,ze=Re.length;Le<ze;Le++){const Fe=Re[Le];ks(U,R,Fe,Fe.viewport)}}else Y.length>0&&Xs(ee,Y,R,X),ht&&Ee.render(R),ks(U,R,X);C!==null&&D===0&&(rt.updateMultisampleRenderTarget(C),rt.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(L,R,X),H.resetDefaultState(),k=-1,ne=null,G.pop(),G.length>0?(w=G[G.length-1],ue===!0&&je.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?U=P[P.length-1]:U=null};function rr(R,X,re,ee){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ae.intersectsSprite(R)){ee&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ge);const Le=Me.update(R),ze=R.material;ze.visible&&U.push(R,Le,ze,re,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ae.intersectsObject(R))){const Le=Me.update(R),ze=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ct.copy(Le.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Ge)),Array.isArray(ze)){const Fe=Le.groups;for(let et=0,nt=Fe.length;et<nt;et++){const Qe=Fe[et],ut=ze[Qe.materialIndex];ut&&ut.visible&&U.push(R,Le,ut,re,ct.z,Qe)}}else ze.visible&&U.push(R,Le,ze,re,ct.z,null)}}const Re=R.children;for(let Le=0,ze=Re.length;Le<ze;Le++)rr(Re[Le],X,re,ee)}function ks(R,X,re,ee){const{opaque:Y,transmissive:Re,transparent:Le}=R;w.setupLightsView(re),ue===!0&&je.setGlobalState(L.clippingPlanes,re),ee&&Ve.viewport(le.copy(ee)),Y.length>0&&jn(Y,X,re),Re.length>0&&jn(Re,X,re),Le.length>0&&jn(Le,X,re),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Xs(R,X,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;w.state.transmissionRenderTarget[ee.id]===void 0&&(w.state.transmissionRenderTarget[ee.id]=new Pr(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Fs:Bi,minFilter:Nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Re=w.state.transmissionRenderTarget[ee.id],Le=ee.viewport||le;Re.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const ze=L.getRenderTarget(),Fe=L.getActiveCubeFace(),et=L.getActiveMipmapLevel();L.setRenderTarget(Re),L.getClearColor(B),$=L.getClearAlpha(),$<1&&L.setClearColor(16777215,.5),L.clear(),ht&&Ee.render(re);const nt=L.toneMapping;L.toneMapping=nr;const Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),w.setupLightsView(ee),ue===!0&&je.setGlobalState(L.clippingPlanes,ee),jn(R,re,ee),rt.updateMultisampleRenderTarget(Re),rt.updateRenderTargetMipmap(Re),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Tt=0,wt=X.length;Tt<wt;Tt++){const Mt=X[Tt],{object:Pt,geometry:$e,material:qt,group:bt}=Mt;if(qt.side===ha&&Pt.layers.test(ee.layers)){const Sn=qt.side;qt.side=Xn,qt.needsUpdate=!0,ln(Pt,re,ee,$e,qt,bt),qt.side=Sn,qt.needsUpdate=!0,ut=!0}}ut===!0&&(rt.updateMultisampleRenderTarget(Re),rt.updateRenderTargetMipmap(Re))}L.setRenderTarget(ze,Fe,et),L.setClearColor(B,$),Qe!==void 0&&(ee.viewport=Qe),L.toneMapping=nt}function jn(R,X,re){const ee=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Re=R.length;Y<Re;Y++){const Le=R[Y],{object:ze,geometry:Fe,group:et}=Le;let nt=Le.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),ze.layers.test(re.layers)&&ln(ze,X,re,Fe,nt,et)}}function ln(R,X,re,ee,Y,Re){R.onBeforeRender(L,X,re,ee,Y,Re),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(L,X,re,ee,R,Re),Y.transparent===!0&&Y.side===ha&&Y.forceSinglePass===!1?(Y.side=Xn,Y.needsUpdate=!0,L.renderBufferDirect(re,X,ee,Y,R,Re),Y.side=ir,Y.needsUpdate=!0,L.renderBufferDirect(re,X,ee,Y,R,Re),Y.side=ha):L.renderBufferDirect(re,X,ee,Y,R,Re),R.onAfterRender(L,X,re,ee,Y,Re)}function pn(R,X,re){X.isScene!==!0&&(X=an);const ee=Ze.get(R),Y=w.state.lights,Re=w.state.shadowsArray,Le=Y.state.version,ze=ce.getParameters(R,Y.state,Re,X,re),Fe=ce.getProgramCacheKey(ze);let et=ee.programs;ee.environment=R.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(R.isMeshStandardMaterial?A:O).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",at),et=new Map,ee.programs=et);let nt=et.get(Fe);if(nt!==void 0){if(ee.currentProgram===nt&&ee.lightsStateVersion===Le)return Fr(R,ze),nt}else ze.uniforms=ce.getUniforms(R),R.onBeforeCompile(ze,L),nt=ce.acquireProgram(ze,Fe),et.set(Fe,nt),ee.uniforms=ze.uniforms;const Qe=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=je.uniform),Fr(R,ze),ee.needsLights=sl(R),ee.lightsStateVersion=Le,ee.needsLights&&(Qe.ambientLightColor.value=Y.state.ambient,Qe.lightProbe.value=Y.state.probe,Qe.directionalLights.value=Y.state.directional,Qe.directionalLightShadows.value=Y.state.directionalShadow,Qe.spotLights.value=Y.state.spot,Qe.spotLightShadows.value=Y.state.spotShadow,Qe.rectAreaLights.value=Y.state.rectArea,Qe.ltc_1.value=Y.state.rectAreaLTC1,Qe.ltc_2.value=Y.state.rectAreaLTC2,Qe.pointLights.value=Y.state.point,Qe.pointLightShadows.value=Y.state.pointShadow,Qe.hemisphereLights.value=Y.state.hemi,Qe.directionalShadowMap.value=Y.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Qe.spotShadowMap.value=Y.state.spotShadowMap,Qe.spotLightMatrix.value=Y.state.spotLightMatrix,Qe.spotLightMap.value=Y.state.spotLightMap,Qe.pointShadowMap.value=Y.state.pointShadowMap,Qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=nt,ee.uniformsList=null,nt}function Hi(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Zc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Fr(R,X){const re=Ze.get(R);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function uu(R,X,re,ee,Y){X.isScene!==!0&&(X=an),rt.resetTextureUnits();const Re=X.fog,Le=ee.isMeshStandardMaterial?X.environment:null,ze=C===null?L.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bs,Fe=(ee.isMeshStandardMaterial?A:O).get(ee.envMap||Le),et=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!re.morphAttributes.position,ut=!!re.morphAttributes.normal,Tt=!!re.morphAttributes.color;let wt=nr;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(wt=L.toneMapping);const Mt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pt=Mt!==void 0?Mt.length:0,$e=Ze.get(ee),qt=w.state.lights;if(ue===!0&&(De===!0||R!==ne)){const Mn=R===ne&&ee.id===k;je.setState(ee,R,Mn)}let bt=!1;ee.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==qt.state.version||$e.outputColorSpace!==ze||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isBatchedMesh&&$e.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&$e.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&$e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&$e.instancingMorph===!1&&Y.morphTexture!==null||$e.envMap!==Fe||ee.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==je.numPlanes||$e.numIntersection!==je.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Qe||$e.morphNormals!==ut||$e.morphColors!==Tt||$e.toneMapping!==wt||$e.morphTargetsCount!==Pt)&&(bt=!0):(bt=!0,$e.__version=ee.version);let Sn=$e.currentProgram;bt===!0&&(Sn=pn(ee,X,Y));let ba=!1,Wt=!1,Gi=!1;const Yt=Sn.getUniforms(),yn=$e.uniforms;if(Ve.useProgram(Sn.program)&&(ba=!0,Wt=!0,Gi=!0),ee.id!==k&&(k=ee.id,Wt=!0),ba||ne!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Yt.setValue(F,"projectionMatrix",R.projectionMatrix),Yt.setValue(F,"viewMatrix",R.matrixWorldInverse);const En=Yt.map.cameraPosition;En!==void 0&&En.setValue(F,qe.setFromMatrixPosition(R.matrixWorld)),Bt.logarithmicDepthBuffer&&Yt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Yt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),ne!==R&&(ne=R,Wt=!0,Gi=!0)}if(Y.isSkinnedMesh){Yt.setOptional(F,Y,"bindMatrix"),Yt.setOptional(F,Y,"bindMatrixInverse");const Mn=Y.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Yt.setValue(F,"boneTexture",Mn.boneTexture,rt))}Y.isBatchedMesh&&(Yt.setOptional(F,Y,"batchingTexture"),Yt.setValue(F,"batchingTexture",Y._matricesTexture,rt),Yt.setOptional(F,Y,"batchingIdTexture"),Yt.setValue(F,"batchingIdTexture",Y._indirectTexture,rt),Yt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Yt.setValue(F,"batchingColorTexture",Y._colorsTexture,rt));const mn=re.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ye.update(Y,re,Sn),(Wt||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,Yt.setValue(F,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(yn.envMap.value=Fe,yn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(yn.envMapIntensity.value=X.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=O2()),Wt&&(Yt.setValue(F,"toneMappingExposure",L.toneMappingExposure),$e.needsLights&&fu(yn,Gi),Re&&ee.fog===!0&&We.refreshFogUniforms(yn,Re),We.refreshMaterialUniforms(yn,ee,Se,pe,w.state.transmissionRenderTarget[R.id]),Zc.upload(F,Hi($e),yn,rt)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Zc.upload(F,Hi($e),yn,rt),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Yt.setValue(F,"center",Y.center),Yt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Yt.setValue(F,"normalMatrix",Y.normalMatrix),Yt.setValue(F,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Mn=ee.uniformsGroups;for(let En=0,Ri=Mn.length;En<Ri;En++){const Vi=Mn[En];Ue.update(Vi,Sn),Ue.bind(Vi,Sn)}}return Sn}function fu(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function sl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,re){const ee=Ze.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Ze.get(R.texture).__webglTexture=X,Ze.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const re=Ze.get(R);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const sr=F.createFramebuffer();this.setRenderTarget=function(R,X=0,re=0){C=R,Z=X,D=re;let ee=!0,Y=null,Re=!1,Le=!1;if(R){const Fe=Ze.get(R);if(Fe.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(F.FRAMEBUFFER,null),ee=!1;else if(Fe.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(Fe.__hasExternalTextures)rt.rebindTextures(R,Ze.get(R.texture).__webglTexture,Ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Fe.__boundDepthTexture!==Qe){if(Qe!==null&&Ze.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const nt=Ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?Y=nt[X][re]:Y=nt[X],Re=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?Y=Ze.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?Y=nt[re]:Y=nt,le.copy(R.viewport),fe.copy(R.scissor),me=R.scissorTest}else le.copy(ye).multiplyScalar(Se).floor(),fe.copy(Te).multiplyScalar(Se).floor(),me=Pe;if(re!==0&&(Y=sr),Ve.bindFramebuffer(F.FRAMEBUFFER,Y)&&ee&&Ve.drawBuffers(R,Y),Ve.viewport(le),Ve.scissor(fe),Ve.setScissorTest(me),Re){const Fe=Ze.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,re)}else if(Le){const Fe=X;for(let et=0;et<R.textures.length;et++){const nt=Ze.get(R.textures[et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+et,nt.__webglTexture,re,Fe)}}else if(R!==null&&re!==0){const Fe=Ze.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,re)}k=-1},this.readRenderTargetPixels=function(R,X,re,ee,Y,Re,Le,ze=0){if(!(R&&R.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){Ve.bindFramebuffer(F.FRAMEBUFFER,Fe);try{const et=R.textures[ze],nt=et.format,Qe=et.type;if(!Bt.textureFormatReadable(nt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Qe)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ee&&re>=0&&re<=R.height-Y&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),F.readPixels(X,re,ee,Y,it.convert(nt),it.convert(Qe),Re))}finally{const et=C!==null?Ze.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,X,re,ee,Y,Re,Le,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(X>=0&&X<=R.width-ee&&re>=0&&re<=R.height-Y){Ve.bindFramebuffer(F.FRAMEBUFFER,Fe);const et=R.textures[ze],nt=et.format,Qe=et.type;if(!Bt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.bufferData(F.PIXEL_PACK_BUFFER,Re.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),F.readPixels(X,re,ee,Y,it.convert(nt),it.convert(Qe),0);const Tt=C!==null?Ze.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,Tt);const wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lA(F,wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Re),F.deleteBuffer(ut),F.deleteSync(wt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,re=0){const ee=Math.pow(2,-re),Y=Math.floor(R.image.width*ee),Re=Math.floor(R.image.height*ee),Le=X!==null?X.x:0,ze=X!==null?X.y:0;rt.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Le,ze,Y,Re),Ve.unbindTexture()};const qs=F.createFramebuffer(),Ma=F.createFramebuffer();this.copyTextureToTexture=function(R,X,re=null,ee=null,Y=0,Re=null){Re===null&&(Y!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Y,Y=0):Re=0);let Le,ze,Fe,et,nt,Qe,ut,Tt,wt;const Mt=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(re!==null)Le=re.max.x-re.min.x,ze=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,nt=re.min.y,Qe=re.isBox3?re.min.z:0;else{const mn=Math.pow(2,-Y);Le=Math.floor(Mt.width*mn),ze=Math.floor(Mt.height*mn),R.isDataArrayTexture?Fe=Mt.depth:R.isData3DTexture?Fe=Math.floor(Mt.depth*mn):Fe=1,et=0,nt=0,Qe=0}ee!==null?(ut=ee.x,Tt=ee.y,wt=ee.z):(ut=0,Tt=0,wt=0);const Pt=it.convert(X.format),$e=it.convert(X.type);let qt;X.isData3DTexture?(rt.setTexture3D(X,0),qt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(rt.setTexture2DArray(X,0),qt=F.TEXTURE_2D_ARRAY):(rt.setTexture2D(X,0),qt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const bt=F.getParameter(F.UNPACK_ROW_LENGTH),Sn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ba=F.getParameter(F.UNPACK_SKIP_PIXELS),Wt=F.getParameter(F.UNPACK_SKIP_ROWS),Gi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe);const Yt=R.isDataArrayTexture||R.isData3DTexture,yn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const mn=Ze.get(R),Mn=Ze.get(X),En=Ze.get(mn.__renderTarget),Ri=Ze.get(Mn.__renderTarget);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,En.__webglFramebuffer),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Vi=0;Vi<Fe;Vi++)Yt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.get(R).__webglTexture,Y,Qe+Vi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.get(X).__webglTexture,Re,wt+Vi)),F.blitFramebuffer(et,nt,Le,ze,ut,Tt,Le,ze,F.DEPTH_BUFFER_BIT,F.NEAREST);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Ze.has(R)){const mn=Ze.get(R),Mn=Ze.get(X);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,qs),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<Fe;En++)Yt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,Y,Qe+En):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,Y),yn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,Re,wt+En):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,Re),Y!==0?F.blitFramebuffer(et,nt,Le,ze,ut,Tt,Le,ze,F.COLOR_BUFFER_BIT,F.NEAREST):yn?F.copyTexSubImage3D(qt,Re,ut,Tt,wt+En,et,nt,Le,ze):F.copyTexSubImage2D(qt,Re,ut,Tt,et,nt,Le,ze);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(qt,Re,ut,Tt,wt,Le,ze,Fe,Pt,$e,Mt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(qt,Re,ut,Tt,wt,Le,ze,Fe,Pt,Mt.data):F.texSubImage3D(qt,Re,ut,Tt,wt,Le,ze,Fe,Pt,$e,Mt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Re,ut,Tt,Le,ze,Pt,$e,Mt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Re,ut,Tt,Mt.width,Mt.height,Pt,Mt.data):F.texSubImage2D(F.TEXTURE_2D,Re,ut,Tt,Le,ze,Pt,$e,Mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,bt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Sn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ba),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gi),Re===0&&X.generateMipmaps&&F.generateMipmap(qt),Ve.unbindTexture()},this.initRenderTarget=function(R){Ze.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){Z=0,D=0,C=null,Ve.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Lt._getUnpackColorSpace()}}function B2(){const s=he.useRef(null);return he.useEffect(()=>{const e=s.current;if(!e)return;let i;const l=(async()=>{try{const c=new OA,f=new P2({antialias:!0,alpha:!0});f.setPixelRatio(window.devicePixelRatio),f.setSize(e.clientWidth,e.clientHeight),e.appendChild(f.domElement);const h=new mi(45,e.clientWidth/e.clientHeight,.1,1e3);h.position.set(0,0,4);const m=new XA(16777215,4473924,.7);c.add(m);const p=new WA(16777215,.6);p.position.set(5,3,5),c.add(p);const g=new iu(1.2,64,64),x=new Ig({color:397850,roughness:1,metalness:0,transparent:!0,opacity:.06}),_=new Ii(g,x);c.add(_);const y=new iu(1.21,64,64),b=new Ig({transparent:!0,opacity:.03,depthWrite:!1}),E=new Ii(y,b);c.add(E);const v=((z=88,Z=1.25,D=3)=>{const C=[];for(let pe=0;pe<z;pe++){const Se=pe/z,N=Math.acos(1-2*Se),te=Math.PI*(1+Math.sqrt(5))*pe,ye=Math.sin(N)*Math.cos(te),Te=Math.sin(N)*Math.sin(te),Pe=Math.cos(N);C.push(new se(ye*Z,Te*Z,Pe*Z))}const k=new ai().setFromPoints(C),ne=.04*Z,le=new Kv({color:6746367,size:ne,sizeAttenuation:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Kc}),fe=new GA(k,le);c.add(fe);const me=[];for(let pe=0;pe<C.length;pe++){const Se=[];for(let N=0;N<C.length;N++)pe!==N&&Se.push({idx:N,dist:C[pe].distanceToSquared(C[N])});Se.sort((N,te)=>N.dist-te.dist);for(let N=0;N<Math.min(D,Se.length);N++){const te=C[Se[N].idx];me.push(C[pe].x,C[pe].y,C[pe].z),me.push(te.x,te.y,te.z)}}const B=new ai;B.setAttribute("position",new ii(me,3));const $=new Qv({color:6746367,transparent:!0,opacity:.42,blending:Kc,depthWrite:!1}),W=new HA(B,$);return c.add(W),{nodes:fe,nodesGeom:k,nodesMaterial:le,baseNodeSize:ne,lines:W,linesGeom:B,linesMaterial:$}})(108,1.25,3),w=(await _b(()=>import("./OrbitControls-BM6ci5hW.js"),[])).OrbitControls;i=new w(h,f.domElement),i.enablePan=!1,i.enableZoom=!1,i.autoRotate=!0,i.autoRotateSpeed=.4,i.minPolarAngle=.1,i.maxPolarAngle=Math.PI-.1;let P;const G=()=>{if(!e)return;const z=e.clientWidth,Z=e.clientHeight;f.setSize(z,Z),h.aspect=z/Z,h.updateProjectionMatrix()};window.addEventListener("resize",G);const L=()=>{i.update(),_.rotation.y+=.0012,E.rotation.y+=.0015,v&&v.lines&&(v.lines.rotation.y+=8e-4),v&&v.nodes&&(v.nodes.rotation.y+=9e-4);const z=performance.now()*.001;v&&v.nodesMaterial&&(v.nodesMaterial.size=v.baseNodeSize*(1+Math.sin(z*1.6)*.45),v.nodesMaterial.needsUpdate=!0),f.render(c,h),P=requestAnimationFrame(L)};return L(),()=>{cancelAnimationFrame(P),window.removeEventListener("resize",G),i&&i.dispose(),g.dispose(),y.dispose(),x.dispose(),b.dispose();try{v&&(v.nodes&&c.remove(v.nodes),v.lines&&c.remove(v.lines),v.nodesGeom&&v.nodesGeom.dispose(),v.nodesMaterial&&v.nodesMaterial.dispose(),v.linesGeom&&v.linesGeom.dispose(),v.linesMaterial&&v.linesMaterial.dispose())}catch{}f.dispose(),f.domElement&&e.contains(f.domElement)&&e.removeChild(f.domElement)}}catch(c){console.error("Error initializing Globe:",c)}})();return()=>{l.then(c=>{typeof c=="function"&&c()}).catch(c=>{})}},[]),j.jsx("div",{className:"globe-container",ref:s,"aria-hidden":"true"})}function z2(){const[s,e]=he.useState({name:"",email:"",message:""}),[i,r]=he.useState(!1),l=f=>{e({...s,[f.target.name]:f.target.value})},c=f=>{if(f.preventDefault(),!s.name||!s.email||!s.message){alert("Please fill all fields before sending.");return}r(!0),e({name:"",email:"",message:""}),setTimeout(()=>r(!1),3e3)};return j.jsxs("section",{className:"contact-section",children:[j.jsx("svg",{"aria-hidden":"true",width:"0",height:"0",children:j.jsxs("filter",{id:"glow-2",children:[j.jsx("feGaussianBlur",{stdDeviation:"12",result:"blur1"}),j.jsx("feGaussianBlur",{stdDeviation:"24",result:"blur2"}),j.jsx("feBlend",{in:"blur1",in2:"blur2",mode:"lighten",result:"glow"}),j.jsxs("feMerge",{children:[j.jsx("feMergeNode",{in:"glow"}),j.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),j.jsxs("div",{className:"glow-wrapper",children:[j.jsx("div",{className:"glow-border"}),j.jsxs("div",{className:"contact-box",children:[j.jsx("h3",{className:"contact-subtitle",children:"GET IN TOUCH"}),j.jsx("h1",{className:"contact-title",children:"Contact"}),j.jsxs("form",{className:"contact-form",onSubmit:c,children:[j.jsx("label",{children:"Your Name"}),j.jsx("input",{type:"text",name:"name",placeholder:"What's your name?",value:s.name,onChange:l,required:!0}),j.jsx("label",{children:"Your Email"}),j.jsx("input",{type:"email",name:"email",placeholder:"What's your email?",value:s.email,onChange:l,required:!0}),j.jsx("label",{children:"Your Message"}),j.jsx("textarea",{name:"message",rows:"5",placeholder:"What do you want to say?",value:s.message,onChange:l,required:!0}),j.jsx("button",{type:"submit",className:"send-btn",children:"Send"})]})]})]}),j.jsx("div",{className:"globe-wrapper",children:j.jsx(B2,{})}),i&&j.jsx("div",{className:"contact-success",children:"Message Sent Successfully!"})]})}function I2(){const s=ar(),e=i=>s.pathname===i;return j.jsxs("header",{className:"topbar",children:[j.jsx("div",{className:"brand",children:"KANISHKAA"}),j.jsxs("nav",{children:[j.jsx($a,{to:"/",className:e("/")?"nav-link active":"nav-link",children:"Home"}),j.jsx($a,{to:"/about",className:e("/about")?"nav-link active":"nav-link",children:"About"}),j.jsx($a,{to:"/education",className:e("/education")?"nav-link active":"nav-link",children:"Education"}),j.jsx($a,{to:"/projects",className:e("/projects")?"nav-link active":"nav-link",children:"Projects"}),j.jsx($a,{to:"/skills",className:e("/skills")?"nav-link active":"nav-link",children:"Skills"}),j.jsx($a,{to:"/contacts",className:e("/contacts")?"nav-link active":"nav-link",children:"Contact"})]})]})}function F2(){const s=he.useRef(null);return he.useEffect(()=>{const e=s.current;if(!e)return;const i=e.getContext("2d"),r={num:50,particle:{color:"rgba(252, 252, 252, 0.6)",szMin:.5,szMax:1,spMin:.05,spMax:.5},link:{color:"rgba(237, 241, 237, 0.3)",maxDist:160}},l=Math.PI*2,c=Math.PI/180;let f=e.width=window.innerWidth,h=e.height=window.innerHeight;class m{constructor(){this.p={x:Math.random()*e.width,y:Math.random()*e.height},this.s=r.particle.spMin+Math.random()*r.particle.spMax,this.r=r.particle.szMin+Math.random()*r.particle.szMax,this.d=Math.random()*l,this.v={x:Math.cos(this.d)*this.s,y:Math.sin(this.d)*this.s}}setDir(y){this.d=y,this.v.x=Math.cos(this.d)*this.s,this.v.y=Math.sin(this.d)*this.s}wrap(){(this.p.x<0||this.p.x>f||this.p.y<0||this.p.y>h)&&this.setDir(this.d+Math.random()*c*5),this.p.x<0&&(this.p.x+=f),this.p.x>f&&(this.p.x-=f),this.p.y<0&&(this.p.y+=h),this.p.y>h&&(this.p.y-=h)}update(){this.p.x+=this.v.x,this.p.y+=this.v.y,this.wrap()}draw(){i.beginPath(),i.arc(this.p.x,this.p.y,this.r,0,l),i.fillStyle=r.particle.color,i.fill()}drawLink(y){i.save(),i.globalAlpha=1-this.distanceTo(y)/r.link.maxDist,i.beginPath(),i.moveTo(this.p.x,this.p.y),i.lineWidth=this.r,i.lineTo(y.p.x,y.p.y),i.strokeStyle=r.link.color,i.stroke(),i.restore()}closeTo(y){let b=y.p.x-this.p.x,E=y.p.y-this.p.y;return b*b+E*E<=r.link.maxDist*r.link.maxDist}distanceTo(y){let b=y.p.x-this.p.x,E=y.p.y-this.p.y;return Math.sqrt(b*b+E*E)}}const p=[...Array(r.num)].map(()=>new m),g=()=>{let _={x:window.innerWidth/f,y:window.innerHeight/h};f=e.width=window.innerWidth,h=e.height=window.innerHeight,p.forEach(y=>{y.p.x*=_.x,y.p.y*=_.y})},x=()=>{i.clearRect(0,0,f,h),p.forEach(_=>{_.update(),_.draw(),p.forEach(y=>{_===y||!y.closeTo(_)||_.drawLink(y)})}),requestAnimationFrame(x)};return g(),window.addEventListener("resize",g),x(),()=>{window.removeEventListener("resize",g)}},[]),j.jsxs(j.Fragment,{children:[j.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundImage:"url('/background.jpeg')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",zIndex:-1,pointerEvents:"none"}}),j.jsx("canvas",{ref:s,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"block",zIndex:0,pointerEvents:"none",touchAction:"none"}})]})}function H2(){return j.jsxs("div",{children:[j.jsx(F2,{}),j.jsx(I2,{}),j.jsxs(hM,{children:[j.jsx(wr,{path:"/",element:j.jsx(WM,{})}),j.jsx(wr,{path:"/about",element:j.jsx(YM,{})}),j.jsx(wr,{path:"/education",element:j.jsx(eb,{})}),j.jsx(wr,{path:"/projects",element:j.jsx(rb,{})}),j.jsx(wr,{path:"/skills",element:j.jsx(xb,{})}),j.jsx(wr,{path:"/contacts",element:j.jsx(z2,{})})]})]})}function G2(){return j.jsxs("div",{className:"frame",children:[j.jsx("div",{className:"circle"}),j.jsx("div",{className:"line left"}),j.jsx("div",{className:"line right"}),j.jsx("div",{className:"bracket left"}),j.jsx("div",{className:"bracket right"}),j.jsxs("div",{className:"small top",children:[j.jsx("span",{className:"first-letter",children:"K"}),"anishkaa"]}),j.jsxs("div",{className:"small bottom",children:[" ",j.jsx("span",{className:"first-letter",children:"M"}),"aheshkumar"]}),j.jsx("div",{className:"hide top"}),j.jsx("div",{className:"hide bottom"})]})}function V2(){const[s,e]=he.useState(!1);return he.useEffect(()=>{const i=setTimeout(()=>{e(!0)},5e3);return()=>clearTimeout(i)},[]),s?j.jsx(BM,{children:j.jsx(H2,{})}):j.jsx(G2,{})}yy.createRoot(document.getElementById("root")).render(j.jsx(fv.StrictMode,{children:j.jsx(V2,{})}));export{W2 as C,k2 as M,Dr as P,tl as Q,cp as R,j2 as S,X2 as T,se as V,Ot as a,q2 as b};

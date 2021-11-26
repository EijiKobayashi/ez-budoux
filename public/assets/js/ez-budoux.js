/*! For license information please see ez-budoux.js.LICENSE */
!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=89)}([function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||function(){return this}()||Function("return this")()}).call(this,n(50))},function(t,r){var n=Function.prototype,e=n.bind,o=n.call,i=e&&e.bind(o);t.exports=e?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},function(t,r){t.exports=function(t){return"function"==typeof t}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,n){var e=n(1),o=n(14),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},function(t,r,n){var e=n(2);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},function(t,r,n){var e=n(0),o=n(29),i=n(4),c=n(30),u=n(31),a=n(32),f=o("wks"),s=e.Symbol,W=s&&s.for,U=a?s:s&&s.withoutSetter||c;t.exports=function(t){if(!i(f,t)||!u&&"string"!=typeof f[t]){var r="Symbol."+t;u&&i(s,t)?f[t]=s[t]:f[t]=a&&W?W(r):U(r)}return f[t]}},function(t,r,n){var e=n(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r,n){var e=n(0),o=n(2),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t]):e[t]&&e[t][r]}},function(t,r,n){var e=n(7),o=n(10),i=n(22);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(0),o=n(7),i=n(33),c=n(18),u=n(19),a=e.TypeError,f=Object.defineProperty;r.f=o?f:function(t,r,n){if(c(t),r=u(r),c(n),i)try{return f(t,r,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e={};e[n(6)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,r,n){var e=n(0),o=n(13),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,n){var e=n(0),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(0),o=n(15),i=e.Object;t.exports=function(t){return i(o(t))}},function(t,r,n){var e=n(0).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},function(t,r,n){var e,o,i=n(0),c=n(52),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},function(t,r,n){var e=n(0),o=n(2),i=n(4),c=n(9),u=n(13),a=n(23),f=n(56),s=n(59).CONFIGURABLE,W=f.get,U=f.enforce,p=String(String).split("String");(t.exports=function(t,r,n,a){var f,W=!!a&&!!a.unsafe,B=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet,v=a&&void 0!==a.name?a.name:r;o(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||s&&n.name!==v)&&c(n,"name",v),(f=U(n)).source||(f.source=p.join("string"==typeof v?v:""))),t!==e?(W?!l&&t[r]&&(B=!0):delete t[r],B?t[r]=n:c(t,r,n)):B?t[r]=n:u(r,n)})(Function.prototype,"toString",(function(){return o(this)&&W(this).source||a(this)}))},function(t,r,n){var e=n(0),o=n(5),i=e.String,c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},function(t,r,n){var e=n(35),o=n(21);t.exports=function(t){var r=e(t,"string");return o(r)?r:r+""}},function(t,r){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},function(t,r,n){var e=n(0),o=n(8),i=n(2),c=n(36),u=n(32),a=e.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&c(r.prototype,a(t))}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(1),o=n(2),i=n(12),c=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},function(t,r,n){var e=n(0),o=n(11),i=n(2),c=n(25),u=n(6)("toStringTag"),a=e.Object,f="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=a(t),u))?n:f?c(r):"Object"==(e=c(r))&&i(r.callee)?"Arguments":e}},function(t,r,n){var e=n(1),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},function(t,r,n){var e=n(66);t.exports=function(t){return e(t.length)}},function(t,r,n){var e=n(40),o=n(15);t.exports=function(t){return e(o(t))}},function(t,r,n){var e=n(7),o=n(20),i=n(78),c=n(22),u=n(27),a=n(19),f=n(4),s=n(33),W=Object.getOwnPropertyDescriptor;r.f=e?W:function(t,r){if(t=u(t),r=a(r),s)try{return W(t,r)}catch(t){}if(f(t,r))return c(!o(i.f,t,r),t[r])}},function(t,r,n){var e=n(51),o=n(12);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.19.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,r,n){var e=n(1),o=0,i=Math.random(),c=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},function(t,r,n){var e=n(16),o=n(3);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},function(t,r,n){var e=n(31);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){var e=n(7),o=n(3),i=n(34);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(0),o=n(5),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,r,n){var e=n(0),o=n(20),i=n(5),c=n(21),u=n(53),a=n(55),f=n(6),s=e.TypeError,W=f("toPrimitive");t.exports=function(t,r){if(!i(t)||c(t))return t;var n,e=u(t,W);if(e){if(void 0===r&&(r="default"),n=o(e,t,r),!i(n)||c(n))return n;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},function(t,r,n){var e=n(1);t.exports=e({}.isPrototypeOf)},function(t,r,n){var e=n(0),o=n(2),i=n(54),c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},function(t,r){t.exports={}},function(t,r,n){var e=n(65),o=n(1),i=n(40),c=n(14),u=n(26),a=n(42),f=o([].push),s=function(t){var r=1==t,n=2==t,o=3==t,s=4==t,W=6==t,U=7==t,p=5==t||W;return function(B,l,v,T){for(var y,d,h=c(B),b=i(h),g=e(l,v),x=u(b),m=0,O=T||a,S=r?O(B,x):n||U?O(B,0):void 0;x>m;m++)if((p||m in b)&&(d=g(y=b[m],m,h),t))if(r)S[m]=d;else if(d)switch(t){case 3:return!0;case 5:return y;case 6:return m;case 2:f(S,y)}else switch(t){case 4:return!1;case 7:f(S,y)}return W?-1:o||s?s:S}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},function(t,r,n){var e=n(0),o=n(1),i=n(3),c=n(25),u=e.Object,a=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?a(t,""):u(t)}:u},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},function(t,r,n){var e=n(67);t.exports=function(t,r){return new(e(t))(0===r?0:r)}},function(t,r,n){var e=n(25);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,r,n){var e=n(3),o=n(2),i=/#|\.prototype\./,c=function(t,r){var n=a[u(t)];return n==s||n!=f&&(o(r)?e(r):!!r)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},function(t,r,n){var e=n(74),o=n(77).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r,n){var e=n(0),o=n(28).f,i=n(9),c=n(17),u=n(13),a=n(84),f=n(44);t.exports=function(t,r){var n,s,W,U,p,B=t.target,l=t.global,v=t.stat;if(n=l?e:v?e[B]||u(B,{}):(e[B]||{}).prototype)for(s in r){if(U=r[s],W=t.noTargetGet?(p=o(n,s))&&p.value:n[s],!f(l?s:B+(v?".":"#")+s,t.forced)&&void 0!==W){if(typeof U==typeof W)continue;a(U,W)}(t.sham||W&&W.sham)&&i(U,"sham",!0),c(n,s,U,t)}}},function(t,r,n){var e=n(3),o=n(6),i=n(16),c=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},function(t,r,n){},function(t,r,n){var e=n(11),o=n(17),i=n(60);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r){t.exports=!1},function(t,r,n){var e=n(8);t.exports=e("navigator","userAgent")||""},function(t,r,n){var e=n(37);t.exports=function(t,r){var n=t[r];return null==n?void 0:e(n)}},function(t,r,n){var e=n(0).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,r,n){var e=n(0),o=n(20),i=n(2),c=n(5),u=e.TypeError;t.exports=function(t,r){var n,e;if("string"===r&&i(n=t.toString)&&!c(e=o(n,t)))return e;if(i(n=t.valueOf)&&!c(e=o(n,t)))return e;if("string"!==r&&i(n=t.toString)&&!c(e=o(n,t)))return e;throw u("Can't convert object to primitive value")}},function(t,r,n){var e,o,i,c=n(57),u=n(0),a=n(1),f=n(5),s=n(9),W=n(4),U=n(12),p=n(58),B=n(38),l=u.TypeError,v=u.WeakMap;if(c||U.state){var T=U.state||(U.state=new v),y=a(T.get),d=a(T.has),h=a(T.set);e=function(t,r){if(d(T,t))throw new l("Object already initialized");return r.facade=t,h(T,t,r),r},o=function(t){return y(T,t)||{}},i=function(t){return d(T,t)}}else{var b=p("state");B[b]=!0,e=function(t,r){if(W(t,b))throw new l("Object already initialized");return r.facade=t,s(t,b,r),r},o=function(t){return W(t,b)?t[b]:{}},i=function(t){return W(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!f(r)||(n=o(r)).type!==t)throw l("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(0),o=n(2),i=n(23),c=e.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},function(t,r,n){var e=n(29),o=n(30),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r,n){var e=n(7),o=n(4),i=Function.prototype,c=e&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!e||e&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},function(t,r,n){"use strict";var e=n(11),o=n(24);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,r,n){var e=n(0),o=n(62),i=n(63),c=n(64),u=n(9),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(r){t.forEach=c}};for(var f in o)o[f]&&a(e[f]&&e[f].prototype);a(i)},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){var e=n(34)("span").classList,o=e&&e.constructor&&e.constructor.prototype;t.exports=o===Object.prototype?void 0:o},function(t,r,n){"use strict";var e=n(39).forEach,o=n(69)("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,r,n){var e=n(1),o=n(37),i=e(e.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?i(t,r):function(){return t.apply(r,arguments)}}},function(t,r,n){var e=n(41),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r,n){var e=n(0),o=n(43),i=n(68),c=n(5),u=n(6)("species"),a=e.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,(i(r)&&(r===a||o(r.prototype))||c(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?a:r}},function(t,r,n){var e=n(1),o=n(3),i=n(2),c=n(24),u=n(8),a=n(23),f=function(){},s=[],W=u("Reflect","construct"),U=/^\s*(?:class|function)\b/,p=e(U.exec),B=!U.exec(f),l=function(t){if(!i(t))return!1;try{return W(f,s,t),!0}catch(t){return!1}};t.exports=!W||o((function(){var t;return l(l.call)||!l(Object)||!l((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return B||!!p(U,a(t))}:l},function(t,r,n){"use strict";var e=n(3);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},function(t,r,n){"use strict";var e=n(7),o=n(0),i=n(1),c=n(44),u=n(17),a=n(4),f=n(71),s=n(36),W=n(21),U=n(35),p=n(3),B=n(45).f,l=n(28).f,v=n(10).f,T=n(79),y=n(80).trim,d=o.Number,h=d.prototype,b=o.TypeError,g=i("".slice),x=i("".charCodeAt),m=function(t){var r=U(t,"number");return"bigint"==typeof r?r:O(r)},O=function(t){var r,n,e,o,i,c,u,a,f=U(t,"number");if(W(f))throw b("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=y(f),43===(r=x(f,0))||45===r){if(88===(n=x(f,2))||120===n)return NaN}else if(48===r){switch(x(f,1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+f}for(c=(i=g(f,2)).length,u=0;u<c;u++)if((a=x(i,u))<48||a>o)return NaN;return parseInt(i,e)}return+f};if(c("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var S,w=function(t){var r=arguments.length<1?0:d(m(t)),n=this;return s(h,n)&&p((function(){T(n)}))?f(Object(r),n,w):r},E=e?B(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Q=0;E.length>Q;Q++)a(d,S=E[Q])&&!a(w,S)&&v(w,S,l(d,S));w.prototype=h,h.constructor=w,u(o,"Number",w)}},function(t,r,n){var e=n(2),o=n(5),i=n(72);t.exports=function(t,r,n){var c,u;return i&&e(c=r.constructor)&&c!==n&&o(u=c.prototype)&&u!==n.prototype&&i(t,u),t}},function(t,r,n){var e=n(1),o=n(18),i=n(73);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=e(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return o(n),i(e),r?t(n,e):n.__proto__=e,n}}():void 0)},function(t,r,n){var e=n(0),o=n(2),i=e.String,c=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw c("Can't set "+i(t)+" as a prototype")}},function(t,r,n){var e=n(1),o=n(4),i=n(27),c=n(75).indexOf,u=n(38),a=e([].push);t.exports=function(t,r){var n,e=i(t),f=0,s=[];for(n in e)!o(u,n)&&o(e,n)&&a(s,n);for(;r.length>f;)o(e,n=r[f++])&&(~c(s,n)||a(s,n));return s}},function(t,r,n){var e=n(27),o=n(76),i=n(26),c=function(t){return function(r,n,c){var u,a=e(r),f=i(a),s=o(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,r,n){var e=n(41),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(1);t.exports=e(1..valueOf)},function(t,r,n){var e=n(1),o=n(15),i=n(81),c=n(82),u=e("".replace),a="["+c+"]",f=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),W=function(t){return function(r){var n=i(o(r));return 1&t&&(n=u(n,f,"")),2&t&&(n=u(n,s,"")),n}};t.exports={start:W(1),end:W(2),trim:W(3)}},function(t,r,n){var e=n(0),o=n(24),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,r,n){"use strict";var e=n(46),o=n(39).map;e({target:"Array",proto:!0,forced:!n(47)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,n){var e=n(4),o=n(85),i=n(28),c=n(10);t.exports=function(t,r){for(var n=o(r),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||u(t,s,a(r,s))}}},function(t,r,n){var e=n(8),o=n(1),i=n(45),c=n(86),u=n(18),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(u(t)),n=c.f;return n?a(r,n(t)):r}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){"use strict";var e=n(46),o=n(0),i=n(3),c=n(43),u=n(5),a=n(14),f=n(26),s=n(88),W=n(42),U=n(47),p=n(6),B=n(16),l=p("isConcatSpreadable"),v=o.TypeError,T=B>=51||!i((function(){var t=[];return t[l]=!1,t.concat()[0]!==t})),y=U("concat"),d=function(t){if(!u(t))return!1;var r=t[l];return void 0!==r?!!r:c(t)};e({target:"Array",proto:!0,forced:!T||!y},{concat:function(t){var r,n,e,o,i,c=a(this),u=W(c,0),U=0;for(r=-1,e=arguments.length;r<e;r++)if(d(i=-1===r?c:arguments[r])){if(U+(o=f(i))>9007199254740991)throw v("Maximum allowed index exceeded");for(n=0;n<o;n++,U++)n in i&&s(u,U,i[n])}else{if(U>=9007199254740991)throw v("Maximum allowed index exceeded");s(u,U++,i)}return u.length=U,u}})},function(t,r,n){"use strict";var e=n(19),o=n(10),i=n(22);t.exports=function(t,r,n){var c=e(r);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,r,n){"use strict";n.r(r);n(48),n(49),n(61),n(70),n(83),n(87);const e=[0,128,256,384,592,688,768,880,1024,1280,1328,1424,1536,1792,1872,1920,1984,2048,2112,2144,2208,2304,2432,2560,2688,2816,2944,3072,3200,3328,3456,3584,3712,3840,4096,4256,4352,4608,4992,5024,5120,5760,5792,5888,5920,5952,5984,6016,6144,6320,6400,6480,6528,6624,6656,6688,6832,6912,7040,7104,7168,7248,7296,7312,7360,7376,7424,7552,7616,7680,7936,8192,8304,8352,8400,8448,8528,8592,8704,8960,9216,9280,9312,9472,9600,9632,9728,9984,10176,10224,10240,10496,10624,10752,11008,11264,11360,11392,11520,11568,11648,11744,11776,11904,12032,12272,12288,12352,12448,12544,12592,12688,12704,12736,12784,12800,13056,13312,19904,19968,40960,42128,42192,42240,42560,42656,42752,42784,43008,43056,43072,43136,43232,43264,43312,43360,43392,43488,43520,43616,43648,43744,43776,43824,43888,43968,44032,55216,55296,56192,56320,57344,63744,64256,64336,65024,65040,65056,65072,65104,65136,65280,65520,65536,65664,65792,65856,65936,66e3,66176,66208,66272,66304,66352,66384,66432,66464,66560,66640,66688,66736,66816,66864,67072,67584,67648,67680,67712,67808,67840,67872,67968,68e3,68096,68192,68224,68288,68352,68416,68448,68480,68608,68736,68864,69216,69248,69376,69424,69552,69600,69632,69760,69840,69888,69968,70016,70112,70144,70272,70320,70400,70656,70784,71040,71168,71264,71296,71424,71680,71840,71936,72096,72192,72272,72384,72704,72816,72960,73056,73440,73648,73664,73728,74752,74880,77824,78896,82944,92160,92736,92880,92928,93760,93952,94176,94208,100352,101120,101632,110592,110848,110896,110960,113664,113824,118784,119040,119296,119520,119552,119648,119808,120832,122880,123136,123584,124928,125184,126064,126208,126464,126976,127024,127136,127232,127488,127744,128512,128592,128640,128768,128896,129024,129280,129536,129648,129792,131072,173824,177984,178208,183984,194560,196608,917504,917760,983040,1048576],o={"BB2:108120":1817,"BP2:OO":790,"UB3:107":714,"UP3:B":-1495,"TQ2:O108108108":-194,"TB3:108108108":562,"UB4:108":-2271,"UB3:108":169,"BQ1:O108108":-263,"BB1:108107":307,"UB4:107":-1743,"TB4:108108108":306,"UB3:109":-456,"TB3:108109109":1577,"UP1:U":251,"UW3:に":1629,"BB2:109109":-2151,"UW3:は":2029,"UW3:が":2055,"UB3:120":-213,"UW4:こ":1449,"BQ3:O108107":187,"UB5:107":-851,"UW4:お":3275,"UW3:と":1059,"BQ2:O120120":-379,"BB3:108120":-298,"UW3:の":1199,"UW4:て":-1379,"UW3:し":-827,"TB1:120120120":-242,"BB3:108108":849,"TB2:108108107":-145,"BQ1:B120120":365,"UW3:を":2925,"BB3:120108":255,"UW4:「":3298,"BB2:162162":-1613,"UW4:あ":1188,"UW4:、":-3540,"UW4:。":-1602,"UW3:、":2324,"TB1:108120108":-243,"UW3:も":1399,"UW4:の":-960,"BQ1:O120120":-120,"UW5:っ":772,"UW3:っ":-1870,"TB2:108108108":-114,"UB2:108":97,"TB1:108108108":-91,"TB3:108120108":-250,"UW5:で":-1030,"UQ2:O120":-110,"UB5:108":-66,"UW4:い":380,"UB4:162":-257,"UQ3:B108":-1112,"UW4:そ":1036,"BB2:107999":3411,"UW5:う":211,"BQ2:B108120":-221,"UW4:で":-924,"UW4:る":-1805,"TQ2:B108108108":-269,"UW5:な":-645,"BW3:もの":2676,"BB2:120120":-420,"TQ2:B120108120":-336,"BB3:107999":-1305,"UW3:る":756,"UW4:っ":-1536,"UP2:U":113,"UB6:107":-76,"BB2:162999":2668,"UB1:162":-208,"UW6:う":-420,"BQ2:O107108":-896,"UW5:き":664,"UW4:に":-1407,"UW5:し":-357,"UP1:B":-101,"BB1:108108":-77,"UQ3:B120":626,"BW2:とい":691,"UW5:に":-569,"BB2:120999":2291,"UW4:は":-608,"TQ1:O108108108":-281,"UB1:108":192,"UQ1:O108":-86,"UW5:が":-626,"UW4:ら":-1582,"TQ2:O120108108":-128,"UQ3:O162":222,"UW3:れ":-759,"TB3:120120120":-151,"BB3:162999":-1821,"BW3:とこ":1286,"UW5:は":-560,"UW5:ん":676,"UW4:れ":-1489,"BB1:162162":-251,"UW3:う":464,"UW5:す":-771,"UW3:く":821,"UW4:・":-2383,"UW4:が":-678,"UW6:に":92,"TQ1:O108120108":-410,"UP2:O":-53,"UW5:く":411,"UW2:の":218,"UW3:ま":-959,"UW3:，":1843,"UW3:ら":324,"UP3:O":121,"TB4:120108108":90,"UB4:120":-421,"BB2:108108":-92,"UW3:で":756,"UW3:た":484,"BW3:とい":-1444,"UW3:り":-223,"UW4:ほ":1294,"TB1:120120108":125,"UW6:。":-99,"BW3:いう":861,"UW3:き":-536,"BW3:いい":767,"UW4:や":650,"UW6:た":-284,"UW4:だ":-569,"BW1:から":816,"TB2:109109109":-543,"UW5:も":-405,"UW3:今":1340,"UW5:あ":-618,"UW3:］":825,"UW2:一":760,"BW1:いう":298,"UW5:を":-622,"UW5:・":-668,"TB1:120108120":-97,"UW5:め":308,"UW4:，":-2523,"BW2:であ":-1719,"BW3:ちょ":1343,"UW1:と":119,"UB2:120":38,"TB3:108120120":322,"UW4:ど":522,"BQ3:O162162":-248,"UW1:そ":204,"BW3:して":220,"BW2:てい":-522,"UW4:つ":682,"BB1:162120":397,"UW2:と":-94,"UW2:で":-227,"UW5:と":-476,"UW4:ん":-649,"UW4:り":-690,"BB2:109999":1320,"UW3:だ":-257,"UW4:出":-72,"UW4:を":-1092,"UW2:っ":55,"BW2:ない":-1335,"BW3:とき":1220,"TQ3:O162162162":-324,"UB4:072":-103,"BB2:108999":1504,"UW3:ち":-780,"UW4:ご":1047,"UW5:つ":584,"UW3:間":905,"TB3:108162162":317,"UW5:れ":265,"UW4:！":-1144,"UW5:来":-31,"UW6:っ":222,"BB2:108072":-977,"TB4:108108120":84,"UW3:ん":-302,"UW2:て":-213,"BW3:よう":-892,"UW4:わ":430,"TB2:108120108":-413,"UW3:人":945,"BW3:ため":1073,"BW3:出来":-1035,"UW2:ん":223,"UW6:の":-137,"BQ4:O108108":-136,"UW3:て":445,"UB4:109":-440,"UW5:の":-519,"BW1:とが":-1211,"UW1:な":-300,"TB1:120108108":-188,"UW4:す":366,"TW2:気に入":-1623,"TW3:ている":-761,"TQ3:O107120120":60,"BW1:では":-648,"UW2:る":-273,"UW3:か":439,"UW4:１":304,"UW1:に":-146,"UW6:り":273,"BW2:てお":-1727,"TQ2:O108120108":-160,"UW5:こ":104,"TQ2:O109109109":-279,"BQ4:U120120":-303,"UW1:で":-124,"BB2:107162":-766,"UW3:い":166,"BW2:とし":540,"UW2:ま":340,"BB2:108162":338,"UW4:け":-819,"TB4:109109109":423,"TB4:162162162":297,"UB5:162":-311,"UW1:い":-104,"UW2:毎":867,"UW2:そ":-298,"TQ1:B108120120":-172,"BW1:ない":238,"UW4:前":-559,"UW4:］":-1127,"TW4:くらい":835,"UW3:ば":464,"TW1:という":264,"UW4:ー":-655,"UW3:中":764,"UW4:…":-669,"UW4:ひ":1182,"UW3:・":567,"UW3:「":-514,"BW2:です":-1109,"BW3:なっ":-546,"BQ2:O108108":-40,"UW6:を":84,"UB6:109":-136,"UW5:だ":-217,"BW3:から":-702,"UW3:日":398,"BW3:その":1208,"BB2:120162":170,"UW3:け":-354,"BW3:こと":522,"TW3:と言っ":-1204,"UB5:120":60,"UW5:え":181,"TB1:108107108":-673,"BW3:かけ":1145,"UW5:イ":666,"UB4:087":-877,"UW3:後":1076,"BW1:とも":-672,"UW6:て":-186,"BB2:087999":836,"UQ3:O108":-21,"BQ2:O108120":129,"BB3:120999":-299,"UW4:２":433,"UB3:072":236,"UW2:よ":156,"UW5:ー":41,"UW5:べ":609,"UW5:て":119,"UW1:て":51,"UW4:『":979,"TW4:ところ":607,"UW2:結":700,"UW4:（":483,"TQ4:O120120120":208,"TW2:ではな":-505,"TQ4:O108107120":204,"UW6:０":392,"UW5:そ":-283,"TQ2:O108107108":-212,"BW1:こと":-434,"UW1:の":-65,"TQ1:O108108120":87,"BW1:かも":-928,"UW4:よ":310,"BQ1:O107120":180,"UW5:い":51,"BW2:には":-422,"TW4:ことが":-409,"UW3:み":-339,"TB4:162162999":-491,"UW3:こ":-194,"TB4:108120108":-129,"UW3:さ":-328,"UW6:ん":142,"UW3:お":-424,"BW3:すぐ":660,"TQ3:B108108120":158,"BW3:この":830,"TB3:109108108":130,"UW1:あ":111,"BW1:んな":174,"TB4:108109108":595,"UW2:も":-199,"BW3:わか":536,"UW4:思":445,"BB1:109120":-359,"UW4:電":-301,"UW1:お":-51,"TB4:120108120":61,"TQ4:O120108120":-102,"UW4:笑":-506,"UW3:な":215,"UW4:間":-430,"BW3:でき":393,"UW4:ま":136,"TW4:かなり":680,"TQ1:B108120108":75,"BQ2:B108108":-30,"BW3:ない":95,"UW3:べ":-452,"TB3:109120108":169,"BW2:と同":-602,"BW1:てい":-357,"UW6:、":31,"UW2:最":406,"UW3:や":285,"TW3:、ある":-784,"UW4:か":-93,"BW3:そし":-568,"UW5:年":428,"BW1:れて":-342,"UW3:昔":637,"UW2:し":33,"UW3:…":298,"UW6:と":-69,"UW5:々":556,"BW1:より":526,"UW1:、":17,"BW3:した":228,"BW1:った":105,"UW2:さ":238,"TW3:という":248,"UW2:少":449,"UW4:も":-174,"TQ2:B120120108":-76,"UW2:き":89,"UW1:や":-201,"TW3:である":-318,"BW1:い、":-518,"UW4:ろ":-287,"UW2:全":435,"BW2:くな":-404,"BW2:はな":-154,"BW1:かし":627,"UW6:あ":-90,"UW6:カ":303,"UW4:使":204,"UW5:ち":161,"UW1:っ":74,"UW3:ど":134,"TB3:109120120":-148,"UW3:よ":-145,"BW2:でき":-373,"UW3:電":-286,"BW2:いも":373,"BW1:しか":228,"BW1:たら":328,"BW3:かっ":-386,"BQ4:O120109":-112,"UW4:込":-315,"UW2:お":-184,"UW3:ー":99,"UW2:う":-44,"BW3:どう":258,"UW4:な":54,"UW5:ご":135,"BW2:でし":-337,"UW3:光":-182,"UW4:み":95,"UW2:ー":-30,"UW6:だ":-56,"TB3:120162162":69,"UW2:た":-83,"TQ1:O120120120":-14,"UW1:す":71,"TW3:てしま":-305,"UW3:。":140,"UW3:分":178,"BW1:とか":206,"TQ1:U120120108":43,"UW4:３":82,"UW2:人":27,"UW5:料":317,"BW1:んで":-191,"UW4:？":-274,"UW5:た":-80,"TQ3:O120108108":-53,"UQ2:O108":14,"UW5:せ":-122,"BW1:しい":135,"UW4:物":-245,"UW2:思":-15,"UW5:ず":179,"UW6:思":-109,"BW1:その":-159,"BW1:思い":-244,"UW4:．":-311,"UW6:や":68,"BQ4:B120108":-105,"BW2:のよ":-162,"UW6:わ":80,"BW1:るの":-148,"BW3:よく":134,"UW2:や":-67,"UW2:関":174,"UQ1:U109":39,"TW4:ない。":39,"UW4:く":-106,"UW6:さ":40,"TW4:ことに":-160,"UW4:合":-148,"TB4:162120108":14,"BW3:とて":173,"UW6:れ":-14,"TB4:108109109":-67,"BB3:120162":-27,"BW3:すご":173,"UW1:「":-53,"BW1:この":-91,"UW6:は":-26,"UW3:わ":-106,"UW4:５":117,"TW4:こと。":118,"UW3:真":185,"UW2:く":-39,"BW1:うに":-90,"UW6:め":118,"UW4:通":-132,"UW1:も":13,"TW3:ること":-38,"BW2:たい":-155,"BW1:少し":106,"TB4:120120108":14,"UW3:変":91,"UW2:が":26,"UW5:よ":-26,"UW3:度":90,"TB3:108108120":26,"UW5:さ":-26,"BW3:そう":-112,"TW1:ことも":-13,"UW5:け":-39,"TQ3:O108162120":52,"BW1:の間":103,"BB2:072999":78,"UW6:え":-39,"UW3:ご":-77,"BW2:りし":52,"BW2:帯電":-52,"TW3:らない":-76,"TB2:108108162":26,"UW1:社":51,"UW4:と":-26,"BW3:さん":-50,"UW6:し":13,"UW6:く":13,"TQ3:O120120107":-25,"TW4:ことも":-39,"BW3:かか":52,"UW5:る":13,"UQ2:O109":-13,"BW2:にも":-25,"UW6:る":-13,"BW2:、と":-13,"UW3:ゃ":13,"BW1:とは":-13,"UW1:く":13,"UW4:私":12},i=(t,r)=>{const n=Math.floor(t.length/2);return r===t[n]?n+1:r<t[n]?1===t.length?0:i(t.slice(0,n),r):1===t.length?1:n+i(t.slice(n),r)},c=1,u=3,a=new Set(["ABBR","BUTTON","CODE","IFRAME","INPUT","META","SCRIPT","STYLE","TEXTAREA","TIME","VAR"]);class f{constructor(t){this.model=t}static getUnicodeBlockFeature(t){const r=t.codePointAt(0);return(""+(void 0===r?999:i(e,r))).padStart(3,"0")}static getFeature(t,r,n,e,o,i,c,u,a){const s=f.getUnicodeBlockFeature(t),W=f.getUnicodeBlockFeature(r),U=f.getUnicodeBlockFeature(n),p=f.getUnicodeBlockFeature(e),B=f.getUnicodeBlockFeature(o),l=f.getUnicodeBlockFeature(i),v={UP1:c,UP2:u,UP3:a,BP1:c+u,BP2:u+a,UW1:t,UW2:r,UW3:n,UW4:e,UW5:o,UW6:i,BW1:r+n,BW2:n+e,BW3:e+o,TW1:t+r+n,TW2:r+n+e,TW3:n+e+o,TW4:e+o+i,UB1:s,UB2:W,UB3:U,UB4:p,UB5:B,UB6:l,BB1:W+U,BB2:U+p,BB3:p+B,TB1:s+W+U,TB2:W+U+p,TB3:U+p+B,TB4:p+B+l,UQ1:c+s,UQ2:u+W,UQ3:a+U,BQ1:u+W+U,BQ2:u+U+p,BQ3:a+W+U,BQ4:a+U+p,TQ1:u+s+W+U,TQ2:u+W+U+p,TQ3:a+s+W+U,TQ4:a+W+U+p};return Object.entries(v).map(([t,r])=>`${t}:${r}`)}static hasChildTextNode(t){for(const r of t.childNodes)if(r.nodeType===u)return!0;return!1}parse(t,r=1e3){if(""===t)return[];let n="U",e="U",o="U",i=[t.slice(0,3)];for(let c=3;c<t.length;c++){const u=f.getFeature(t[c-3],t[c-2],t[c-1],t[c],t[c+1]||"",t[c+2]||"",n,e,o).map(t=>this.model.get(t)||0).reduce((t,r)=>t+r),a=u>0?"B":"O";u>r&&i.push(""),i[i.length-1]+=t[c],n=e,e=o,o=a}return i}applyElement(t,r=1e3){t.style.wordBreak="keep-all",t.style.overflowWrap="break-word";let n=this.parse(t.textContent||"",r).join("▁");const e=t.ownerDocument,o=t=>{const r=a.has(t.nodeName),i=[...t.childNodes];for(const t of i)if(t.nodeType===u){let o="";const i=[];(t.textContent||"").split("").forEach(t=>{r?(o+=t,n=n.slice("▁"===n[0]?2:1)):t===n[0]?(o+=t,n=n.slice(1)):"▁"===n[0]&&(i.push(e.createTextNode(o)),i.push(e.createElement("wbr")),n=n.slice(2),o=t)}),o&&i.push(e.createTextNode(o)),t.replaceWith(...i)}else t.nodeType===c&&o(t)};o(t)}translateHTMLString(t,r=1e3){if(""===t)return t;const n=(t=>(new DOMParser).parseFromString(t,"text/html"))(t);if(f.hasChildTextNode(n.body)){const t=n.createElement("span");t.append(...n.body.childNodes),n.body.append(t)}return this.applyElement(n.body.childNodes[0],r),n.body.innerHTML}}var s=new f(new Map(Object.entries(o))),W=document.querySelectorAll("[data-budoux]");W&&W.forEach((function(t){var r=t,n=r.dataset.budoux,e=r.dataset.budouxThreshold,o=r.dataset.budouxType;if("true"===n){r.style.setProperty("word-break","keep-all"),r.style.setProperty("overflow-wrap","break-word");var i=1e3;if(e&&(i=Number(e)),"span"===o){var c=s.parse(r.textContent||"",i).map((function(t,r){return'<span class="fruit-'.concat(r,'">').concat(t,"</span>")})),u="";c.forEach((function(t){u+=t})),r.innerHTML=u}else if("br"===o){var a=s.parse(r.textContent||"",i).map((function(t,r){return"".concat(t,'<br class="fruit-').concat(r,'">')})),f="";a.forEach((function(t){f+=t})),r.innerHTML=f}else if("wbr"===o){var W=s.parse(r.textContent||"",i).map((function(t,r){return"".concat(t,'<wbr class="fruit-').concat(r,'">')})),U="";W.forEach((function(t){U+=t})),r.innerHTML=U}else s.applyElement(r,i)}}))}]);
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=76)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(47))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(0),i=n(22).f,o=n(6),a=n(49),s=n(14),c=n(53),u=n(59);t.exports=function(t,e){var n,l,d,f,h,p=t.target,v=t.global,y=t.stat;if(n=v?r:y?r[p]||s(p,{}):(r[p]||{}).prototype)for(l in e){if(f=e[l],d=t.noTargetGet?(h=i(n,l))&&h.value:n[l],!u(v?l:p+(y?".":"#")+l,t.forced)&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),a(n,l,f,t)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3),i=n(7),o=n(11);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3),i=n(26),o=n(9),a=n(13),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(o(t),e=a(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(3),i=n(1),o=n(2),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:c,d=o(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,d)}))}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(60),i=n(23),o=n(35),a=n(17),s=n(36),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(h,p,v,y){for(var m,b,g=o(h),D=i(g),C=r(p,v,3),x=a(D.length),S=0,E=y||s,L=e?E(h,x):n?E(h,0):void 0;x>S;S++)if((f||S in D)&&(b=C(m=D[S],S,g),t))if(e)L[S]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return S;case 2:c.call(L,m)}else if(l)return!1;return d?-1:u||l?l:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(23),i=n(25);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),i=n(6);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports={}},function(t,e,n){var r=n(55),i=n(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},function(t,e,n){var r=n(18),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(0),i=n(31),o=n(2),a=n(32),s=n(37),c=n(63),u=i("wks"),l=r.Symbol,d=c?l:l&&l.withoutSetter||a;t.exports=function(t){return o(u,t)||(s&&o(l,t)?u[t]=l[t]:u[t]=d("Symbol."+t)),u[t]}},function(t,e,n){"use strict";var r=n(4),i=n(10).find,o=n(38),a=n(8),s="find",c=!0,u=a(s);s in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},function(t,e,n){var r=n(3),i=n(48),o=n(11),a=n(12),s=n(13),c=n(2),u=n(26),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=a(t),e=s(e,!0),u)try{return l(t,e)}catch(t){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},function(t,e,n){var r=n(1),i=n(24),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(3),i=n(1),o=n(27);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),i=n(5),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var r=n(29),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),i=n(14),o="__core-js_shared__",a=r[o]||i(o,{});t.exports=a},function(t,e,n){var r=n(31),i=n(32),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var r=n(52),i=n(29);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(2),i=n(12),o=n(57).indexOf,a=n(15);t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)!r(a,n)&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var r=n(18),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5),i=n(62),o=n(20)("species");t.exports=function(t,e){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(20),i=n(64),o=n(7),a=r("unscopables"),s=Array.prototype;null==s[a]&&o.f(s,a,{configurable:!0,value:i(null)}),t.exports=function(t){s[a][t]=!0}},function(t,e,n){"use strict";var r=n(4),i=n(40);r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},function(t,e,n){"use strict";var r=n(10).forEach,i=n(68),o=n(8),a=i("forEach"),s=o("forEach");t.exports=a&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(0),i=n(69),o=n(40),a=n(6);for(var s in i){var c=r[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(t){u.forEach=o}}},function(t,e,n){var r=n(1),i=n(20),o=n(71),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e){t.exports='<div data-board="column" class="column board__column"> <h3 data-column="title" class="column__title"></h3> <ul data-column="cards-list" class="column__cards-list"></ul> </div> '},function(t,e){t.exports='<li data-cards-list="card" class="column__card column__cards-list-card"></li> '},function(t,e){t.exports='<div data-widget="addEntity" class="add-entity column__control"> <button data-btn="primaryAdd" class="btn btn_default btn_plus">Add another card</button> <form data-form="addition" data-visibility="hidden" class="add-entity__form"> <textarea data-field="cardText" class="column__card column__control-card" rows="3" placeholder="Enter a title for tis card..."></textarea> <div class="add-entity__form-control"> <button data-btn="secondaryAdd" class="btn btn_success">Add card</button> <button data-btn="cancel" class="btn column__control-btn"> <span data-visibility="v-hidden">Cancel</span> </button> </div> </form> </div> '},function(t,e){t.exports='<button data-card-btn="delete" class="btn column__card-btn"> <span data-visibility="v-hidden">Delete</span> </button> '},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),i=n(6),o=n(2),a=n(14),s=n(28),c=n(50),u=c.get,l=c.enforce,d=String(String).split("String");(t.exports=function(t,e,n,s){var c=!!s&&!!s.unsafe,u=!!s&&!!s.enumerable,f=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),l(n).source=d.join("string"==typeof e?e:"")),t!==r?(c?!f&&t[e]&&(u=!0):delete t[e],u?t[e]=n:i(t,e,n)):u?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},function(t,e,n){var r,i,o,a=n(51),s=n(0),c=n(5),u=n(6),l=n(2),d=n(30),f=n(15),h=s.WeakMap;if(a){var p=new h,v=p.get,y=p.has,m=p.set;r=function(t,e){return m.call(p,t,e),e},i=function(t){return v.call(p,t)||{}},o=function(t){return y.call(p,t)}}else{var b=d("state");f[b]=!0,r=function(t,e){return u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},o=function(t){return l(t,b)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),i=n(28),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},function(t,e){t.exports=!1},function(t,e,n){var r=n(2),i=n(54),o=n(22),a=n(7);t.exports=function(t,e){for(var n=i(e),s=a.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||s(t,l,c(e,l))}}},function(t,e,n){var r=n(16),i=n(56),o=n(58),a=n(9);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(33),i=n(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(12),i=n(17),o=n(34),a=function(t){return function(e,n,a){var s,c=r(e),u=i(c.length),l=o(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),i=/#|\.prototype\./,o=function(t,e){var n=s[a(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},function(t,e,n){var r=n(61);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(37);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r,i=n(9),o=n(65),a=n(19),s=n(15),c=n(67),u=n(27),l=n(30),d=l("IE_PROTO"),f=function(){},h=function(t){return"<script>"+t+"</"+"script>"},p=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;p=r?function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete p.prototype[a[n]];return p()};s[d]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=i(t),n=new f,f.prototype=null,n[d]=t):n=p(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(3),i=n(7),o=n(9),a=n(66);t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=a(e),s=r.length,c=0;s>c;)i.f(t,n=r[c++],e[n]);return t}},function(t,e,n){var r=n(33),i=n(19);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(16);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(4),i=n(10).filter,o=n(42),a=n(8),s=o("filter"),c=a("filter");r({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r,i,o=n(0),a=n(72),s=o.process,c=s&&s.versions,u=c&&c.v8;u?i=(r=u.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),t.exports=i&&+i},function(t,e,n){var r=n(16);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(4),i=n(10).findIndex,o=n(38),a=n(8),s="findIndex",c=!0,u=a(s);s in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},function(t,e,n){"use strict";var r=n(4),i=n(34),o=n(18),a=n(17),s=n(35),c=n(36),u=n(75),l=n(42),d=n(8),f=l("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,y=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var n,r,l,d,f,h,b=s(this),g=a(b.length),D=i(t,g),C=arguments.length;if(0===C?n=r=0:1===C?(n=0,r=g-D):(n=C-2,r=v(p(o(e),0),g-D)),g+n-r>y)throw TypeError(m);for(l=c(b,r),d=0;d<r;d++)(f=D+d)in b&&u(l,d,b[f]);if(l.length=r,n<r){for(d=D;d<g-r;d++)h=d+n,(f=d+r)in b?b[h]=b[f]:delete b[h];for(d=g;d>g-r+n;d--)delete b[d-1]}else if(n>r)for(d=g-r;d>D;d--)h=d+n-1,(f=d+r-1)in b?b[h]=b[f]:delete b[h];for(d=0;d<n;d++)b[d+D]=arguments[d+2];return b.length=g-r+n,l}})},function(t,e,n){"use strict";var r=n(13),i=n(7),o=n(11);t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},function(t,e,n){"use strict";n.r(e);n(21),n(39),n(41),n(70),n(73),n(74);var r=n(43),i=n.n(r),o=n(44),a=n.n(o);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";s(this,t),this.el=null,this.init(e)}var e,n,r;return e=t,(n=[{key:"init",value:function(t){var e=document.getElementsByTagName("body")[0];this.el=document.createElement("div"),this.el.dataset.visibility="hidden",""!==t&&(this.el.innerHTML=t),e.append(this.el)}}])&&c(e.prototype,n),r&&c(e,r),t}(),l=n(45),d=n.n(l);function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parentEl=e,this.els={addEntity:null,btns:{primaryAdd:null,secondaryAdd:null,cancel:null},additionForm:null,textField:null},this.selectors={addEntity:'[data-widget="addEntity"]',btns:{primaryAdd:'[data-btn="primaryAdd"]',cancel:'[data-btn="cancel"]'},additionForm:'[data-form="addition"]',textField:'[data-field="cardText"]'},this.onPrimaryAddClick=null,this.init()}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.parentEl.insertAdjacentHTML("beforeend",d.a),this.els.addEntity=this.parentEl.querySelector(this.selectors.addEntity),this.els.addEntity.addEventListener("click",this.onAddEntityClick.bind(this)),this.els.btns.primaryAdd=this.els.addEntity.querySelector(this.selectors.btns.primaryAdd),this.els.btns.cancel=this.els.addEntity.querySelector(this.selectors.btns.cancel),this.els.btns.cancel.insertAdjacentHTML("afterbegin","&#10006"),this.els.additionForm=this.els.addEntity.querySelector(this.selectors.additionForm),this.els.textField=this.els.addEntity.querySelector(this.selectors.textField)}},{key:"onAddEntityClick",value:function(t){t.preventDefault();var e=t.target;if(e.dataset.btn){var n=e.dataset.btn;if("primaryAdd"===n)return e.dataset.visibility="hidden",this.els.additionForm.removeAttribute("data-visibility"),void this.els.textField.focus();if("cancel"===n)return this.els.additionForm.dataset.visibility="hidden",void this.els.btns.primaryAdd.removeAttribute("data-visibility");if("secondaryAdd"===n){if(""===this.els.textField.value)return;var r=this.els.textField.value;this.els.textField.value="",this.els.textField.focus(),this.onPrimaryAddClick(r)}}}}])&&f(e.prototype,n),r&&f(e,r),t}();function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parentEl=null,this.els={column:null,title:null,cardsList:null},this.selectors={column:'[data-board="column"]',title:'[data-column="title"]',cardsList:'[data-column="cards-list"]',card:'[data-cards-list="card"]'},this.entity={addCard:null},this.cardsList=[],this.updateLS=null,this.init(e,n)}var e,n,r;return e=t,(n=[{key:"init",value:function(t,e){var n=this,r=new u(i.a).el;this.els.column=r.querySelector(this.selectors.column),this.els.title=this.els.column.querySelector(this.selectors.title),this.els.title.textContent=t,this.els.cardsList=this.els.column.querySelector(this.selectors.cardsList),e.forEach((function(t){return n.onAddCard(t,!0)})),this.entity.addCard=new h(this.els.column),this.entity.addCard.onPrimaryAddClick=this.onAddCard.bind(this),this.els.column.remove(),r.remove(),r=null}},{key:"appendToDOM",value:function(t){this.parentEl=t,this.parentEl.append(this.els.column)}},{key:"onAddCard",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new u(a.a).el,r=n.querySelector(this.selectors.card);r.textContent=t,n.remove(),n=null,this.cardsList.push({el:r,text:t}),this.els.cardsList.append(r),e||this.updateLS()}},{key:"onDeleteCard",value:function(t,e){t.el=null,this.deleteCardFromData(e),e.remove(),this.updateLS()}},{key:"insertDraggedCard",value:function(t,e,n){var r=this.cardsList.findIndex((function(t){var n=t.el.getBoundingClientRect(),r=n.top+n.height/2;return e<r}));if(-1!==r){if(this.cardsList[r].el===t.el)return;this.cardsList[r].el.before(t.el),n&&(this.cardsList.findIndex((function(e){return e.el===t.el}))<r&&(r-=1),this.deleteCardFromData(t.el)),this.cardsList.splice(r,0,t)}else this.els.cardsList.append(t.el),n&&this.deleteCardFromData(t.el),this.cardsList.push(t)}},{key:"getCardsText",value:function(){var t=[];return this.cardsList.forEach((function(e){t.push(e.text)})),t}},{key:"getCard",value:function(t){return this.cardsList.find((function(e){return e.el===t}))}},{key:"deleteCardFromData",value:function(t){this.cardsList=this.cardsList.filter((function(e){return e.el!==t}))}}])&&p(e.prototype,n),r&&p(e,r),t}(),y=n(46),m=n.n(y);function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parentEl=null,this.els={btn:null},this.selectors={btn:'[data-card-btn="delete"]'},this.onClick=null,this.init()}var e,n,r;return e=t,(n=[{key:"init",value:function(){var t=new u(m.a).el;this.els.btn=t.querySelector(this.selectors.btn),this.els.btn.insertAdjacentHTML("afterbegin","&#10006"),this.els.btn.addEventListener("click",this.onBtnClick.bind(this)),t.remove(),t=null}},{key:"appendToDOM",value:function(t){this.parentEl=t,this.parentEl.append(this.els.btn)}},{key:"removeFromDOM",value:function(){this.parentEl=null,this.els.btn.remove()}},{key:"onBtnClick",value:function(){this.onClick(this.parentEl)}}])&&b(e.prototype,n),r&&b(e,r),t}();function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.els={board:e},this.entity={columns:[],cardBtnDelete:new g},this.selectors={column:null,columnCard:null},this.DnD={draggedCard:null,cardCloneEl:null,startColumn:null,destColumn:null,cardCloneCoordDiff:{x:null,y:null},cursorStartCoord:{x:null,y:null},isDragStarted:!1,isCardCloneAppended:!1,handlers:{onCardDrag:this.onCardDrag.bind(this)}},this.currentCard={el:null}}var e,n,r;return e=t,(n=[{key:"init",value:function(){for(var t=this,e=this.getDataFromLS(),n=["TODO","IN PROGRESS","COMPLETED"],r=0;r<3;r+=1){var i=new v(n[r],e[r]);i.updateLS=this.updateLS.bind(this),this.entity.columns.push(i)}this.entity.columns.forEach((function(e){return e.appendToDOM(t.els.board)})),this.selectors.column=this.entity.columns[0].selectors.column,this.selectors.columnCard=this.entity.columns[0].selectors.card,this.els.board.addEventListener("mouseover",this.onBoardMouseover.bind(this)),this.els.board.addEventListener("mouseout",this.onBoardMouseout.bind(this)),this.els.board.addEventListener("mousedown",this.onBoardMousedown.bind(this)),this.els.board.addEventListener("mouseup",this.onBoardMouseup.bind(this))}},{key:"getDataFromLS",value:function(){var t=localStorage.getItem("data");return t?JSON.parse(t):[[],[],[]]}},{key:"onBoardMouseover",value:function(t){if(!this.DnD.cardCloneEl){var e=t.target;if(!this.currentCard.el&&e.closest(this.selectors.columnCard)){this.currentCard.el=e;var n=e.closest(this.selectors.column),r=this.entity.columns.find((function(t){return t.els.column===n}));this.entity.cardBtnDelete.onClick=r.onDeleteCard.bind(r,this.currentCard),this.entity.cardBtnDelete.appendToDOM(e)}}}},{key:"onBoardMouseout",value:function(t){if("card"===t.target.dataset.cardsList){if(t.relatedTarget.closest(this.selectors.columnCard))return;this.currentCard.el=null,this.entity.cardBtnDelete.removeFromDOM()}}},{key:"onBoardMousedown",value:function(t){var e=this,n=t.target;if("card"===n.dataset.cardsList){this.DnD.startColumn=this.entity.columns.find((function(t){return t.els.column===n.closest(e.selectors.column)})),this.DnD.draggedCard=this.DnD.startColumn.getCard(n),this.DnD.cardCloneEl=this.DnD.draggedCard.el.cloneNode(!0);var r=this.DnD.draggedCard.el.getBoundingClientRect().width;this.DnD.cardCloneEl.style.width="".concat(r,"px");var i=this.DnD.draggedCard.el.getBoundingClientRect();this.DnD.cardCloneEl.style.top="".concat(i.y,"px"),this.DnD.cardCloneEl.style.left="".concat(i.x,"px"),this.DnD.cardCloneCoordDiff.y=t.pageY-i.y,this.DnD.cardCloneCoordDiff.x=t.pageX-i.x,this.DnD.cursorStartCoord.y=t.pageY,this.DnD.cursorStartCoord.x=t.pageX,this.els.board.addEventListener("mousemove",this.DnD.handlers.onCardDrag)}}},{key:"onCardDrag",value:function(t){t.preventDefault();var e=t.pageY,n=t.pageX;if(!(Math.abs(e-this.DnD.cursorStartCoord.y)<=5&&Math.abs(n-this.DnD.cursorStartCoord.x)<=5)||this.DnD.isDragStarted){this.DnD.isDragStarted=!0,this.DnD.cardCloneEl.dataset.state="cardClone",this.DnD.cardCloneEl.style.top="".concat(e-this.DnD.cardCloneCoordDiff.y,"px"),this.DnD.cardCloneEl.style.left="".concat(n-this.DnD.cardCloneCoordDiff.x,"px"),this.DnD.cardCloneEl.dataset.cursor="grabbing",this.DnD.isCardCloneAppended||(this.els.board.append(this.DnD.cardCloneEl),this.DnD.isCardCloneAppended=!0),this.DnD.draggedCard.el.dataset.state="draggedCard";var r=this.DnD.cardCloneEl.getBoundingClientRect(),i=document.elementsFromPoint(r.left+r.width/2,t.clientY),o=i.find((function(t){return"column"===t.dataset.board})),a=i.find((function(t){return"draggedCard"===t.dataset.state}));if(o&&!a){this.DnD.destColumn=this.entity.columns.find((function(t){return t.els.column===o}));var s=!0;this.DnD.startColumn!==this.DnD.destColumn&&(s=!1,this.DnD.startColumn.deleteCardFromData(this.DnD.draggedCard.el),this.DnD.startColumn=this.DnD.destColumn),this.DnD.destColumn.insertDraggedCard(this.DnD.draggedCard,t.clientY,s)}}}},{key:"onBoardMouseup",value:function(t){"card"===t.target.dataset.cardsList&&(this.els.board.removeEventListener("mousemove",this.DnD.handlers.onCardDrag),this.DnD.draggedCard.el.removeAttribute("data-state"),this.DnD.cardCloneEl.remove(),this.DnD.cardCloneEl=null,this.DnD.isCardCloneAppended=!1,this.DnD.isDragStarted=!1,this.updateLS())}},{key:"updateLS",value:function(){var t=[];this.entity.columns.forEach((function(e){t.push(e.getCardsText())})),localStorage.setItem("data",JSON.stringify(t))}}])&&D(e.prototype,n),r&&D(e,r),t}())(document.querySelector('[data-widget="board"]')).init()}]);
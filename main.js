!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=45)}([function(t,e){t.exports=jQuery},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(26))},function(t,e,n){var r=n(8),o=n(23),i=n(28);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(30),o=n(31);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(2),o=n(29),i=n(3),a=n(36),c=n(16),u=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=a(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!h||!v||"replace"===t&&!l||"split"===t&&!s){var g=/./[p],d=n(p,""[t],(function(t,e,n,r,o){return e.exec===c?h&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=d[0],y=d[1];o(String.prototype,t,m),o(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)}),f&&r(RegExp.prototype[p],"sham",!0)}}},function(t,e,n){var r=n(1),o=n(2);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(6);t.exports=r("native-function-to-string",Function.toString)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r,o,i=n(38),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,l=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(l||s)&&(u=function(t){var e,n,r,o,u=this;return s&&(n=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),l&&(e=u.lastIndex),r=a.call(u,t),l&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),s&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=u},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(39).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(40),o=n(16);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(43);t.exports=function(t){var e,n="",o=t||{};return function(t){(function(){var o=t;if("number"==typeof o.length)for(var i=0,a=o.length;i<a;i++){var c=o[i];n=c.thumbnail?n+'<li class="item has-thumbnail col-md-4 col-sm-6 col-12"'+r.attr("style",r.style("background-image: url("+c.thumbnail+")"),!0,!0)+"><h3><a"+r.attr("href",c.link,!0,!0)+">"+r.escape(null==(e=c.title)?"":e)+"</a></h3></li></li>":n+'<li class="item no-thumbnail col-md-4 col-sm-6 col-12"><h3><a'+r.attr("href",c.link,!0,!0)+">"+r.escape(null==(e=c.title)?"":e)+"</a></h3><article>"+r.escape(null==(e=c.description)?"":e)+"</article></li>"}else{a=0;for(var i in o){a++;c=o[i];n=c.thumbnail?n+'<li class="item has-thumbnail col-md-4 col-sm-6 col-12"'+r.attr("style",r.style("background-image: url("+c.thumbnail+")"),!0,!0)+"><h3><a"+r.attr("href",c.link,!0,!0)+">"+r.escape(null==(e=c.title)?"":e)+"</a></h3></li></li>":n+'<li class="item no-thumbnail col-md-4 col-sm-6 col-12"><h3><a'+r.attr("href",c.link,!0,!0)+">"+r.escape(null==(e=c.title)?"":e)+"</a></h3><article>"+r.escape(null==(e=c.description)?"":e)+"</article></li>"}}}).call(this)}.call(this,"list"in o?o.list:"undefined"!=typeof list?list:void 0),n}},function(t,e,n){},function(t,e,n){"use strict";var r=n(11),o=n(5),i=n(17),a=n(7),c=n(18),u=n(19);r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=o(t),l=String(this);if(!a.global)return u(a,l);var s=a.unicode;a.lastIndex=0;for(var f,p=[],h=0;null!==(f=u(a,l));){var v=String(f[0]);p[h]=v,""===v&&(a.lastIndex=c(l,i(a.lastIndex),s)),h++}return 0===h?null:p}]}))},function(t,e,n){var r=n(8),o=n(24),i=n(5),a=n(27),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(8),o=n(3),i=n(25);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(4),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o=n(6),i=n(2),a=n(9),c=n(12),u=n(13),l=n(32),s=l.get,f=l.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,l=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||i(n,"name",e),f(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!s&&t[e]&&(l=!0):delete t[e],l?t[e]=n:i(t,e,n)):l?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},function(t,e){t.exports=!1},function(t,e,n){var r=n(1),o=n(12),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r,o,i,a=n(33),c=n(1),u=n(4),l=n(2),s=n(9),f=n(34),p=n(35),h=c.WeakMap;if(a){var v=new h,g=v.get,d=v.has,m=v.set;r=function(t,e){return m.call(v,t,e),e},o=function(t){return g.call(v,t)||{}},i=function(t){return d.call(v,t)}}else{var y=f("state");p[y]=!0,r=function(t,e){return l(t,y,e),e},o=function(t){return s(t,y)?t[y]:{}},i=function(t){return s(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(1),o=n(13),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(6),o=n(14),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(1),o=n(6),i=n(9),a=n(14),c=n(15),u=n(37),l=o("wks"),s=r.Symbol,f=u?s:a;t.exports=function(t){return i(l,t)||(c&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,e,n){var r=n(15);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(10),o=n(7),i=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";var r=n(11),o=n(5),i=n(42),a=n(17),c=n(10),u=n(7),l=n(18),s=n(19),f=Math.max,p=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n){return[function(n,r){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,i){var u=n(e,t,this,i);if(u.done)return u.value;var h=o(t),v=String(this),g="function"==typeof i;g||(i=String(i));var d=h.global;if(d){var m=h.unicode;h.lastIndex=0}for(var y=[];;){var b=s(h,v);if(null===b)break;if(y.push(b),!d)break;""===String(b[0])&&(h.lastIndex=l(v,a(h.lastIndex),m))}for(var x,w="",S=0,j=0;j<y.length;j++){b=y[j];for(var O=String(b[0]),E=f(p(c(b.index),v.length),0),k=[],A=1;A<b.length;A++)k.push(void 0===(x=b[A])?x:String(x));var I=b.groups;if(g){var M=[O].concat(k,E,v);void 0!==I&&M.push(I);var _=String(i.apply(void 0,M))}else _=r(O,v,E,k,I,i);E>=S&&(w+=v.slice(S,E)+_,S=E+O.length)}return w+v.slice(S)}];function r(t,n,r,o,a,c){var u=r+t.length,l=o.length,s=g;return void 0!==a&&(a=i(a),s=v),e.call(c,s,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>l){var f=h(s/10);return 0===f?e:f<=l?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}c=o[s-1]}return void 0===c?"":c}))}}))},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;function o(t,e){return Array.isArray(t)?function(t,e){for(var n,r="",i="",a=Array.isArray(e),c=0;c<t.length;c++)(n=o(t[c]))&&(a&&e[c]&&(n=u(n)),r=r+i+n,i=" ");return r}(t,e):t&&"object"==typeof t?function(t){var e="",n="";for(var o in t)o&&t[o]&&r.call(t,o)&&(e=e+n+o,n=" ");return e}(t):t||""}function i(t){if(!t)return"";if("object"==typeof t){var e="";for(var n in t)r.call(t,n)&&(e=e+n+":"+t[n]+";");return e}return t+""}function a(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var o=typeof e;return"object"!==o&&"function"!==o||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=u(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,n){if(1===arguments.length){for(var r=e[0],o=1;o<e.length;o++)r=t(r,e[o]);return r}for(var a in n)if("class"===a){var c=e[a]||[];e[a]=(Array.isArray(c)?c:[c]).concat(n[a]||[])}else if("style"===a){c=(c=i(e[a]))&&";"!==c[c.length-1]?c+";":c;var u=i(n[a]);u=u&&";"!==u[u.length-1]?u+";":u,e[a]=c+u}else e[a]=n[a];return e},e.classes=o,e.style=i,e.attr=a,e.attrs=function(t,e){var n="";for(var c in t)if(r.call(t,c)){var u=t[c];if("class"===c){u=o(u),n=a(c,u,!1,e)+n;continue}"style"===c&&(u=i(u)),n+=a(c,u,!1,e)}return n};var c=/["&<>]/;function u(t){var e=""+t,n=c.exec(e);if(!n)return t;var r,o,i,a="";for(r=n.index,o=0;r<e.length;r++){switch(e.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}o!==r&&(a+=e.substring(o,r)),o=r+1,a+=i}return o!==r?a+e.substring(o,r):a}e.escape=u,e.rethrow=function t(e,r,o,i){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&r||i))throw e.message+=" on line "+o,e;try{i=i||n(44).readFileSync(r,"utf8")}catch(n){t(e,null,o)}var a=3,c=i.split("\n"),u=Math.max(o-a,0),l=Math.min(c.length,o+a);a=c.slice(u,l).map((function(t,e){var n=e+u+1;return(n==o?"  > ":"    ")+n+"| "+t})).join("\n");throw e.path=r,e.message=(r||"Pug")+":"+o+"\n"+a+"\n\n"+e.message,e}},function(t,e){},function(t,e,n){"use strict";n.r(e);n(21);var r=n(0),o=n.n(r),i=(n(22),n(41),n(20)),a=n.n(i);const c="meathill-blogs",u="meathill-latest";class l{constructor(t){this.$el=o()(t.el),this.news=0;let e=localStorage.getItem(c);this.latest=Number(localStorage.getItem(u)),e&&(e=JSON.parse(e),this.render(e)),this.latest||(this.latest=isNaN(Number(this.$el.data("latest")))?this.latest:Number(this.$el.data("latest"))),this.fetch()}fetch(){o.a.get("https://blog.meathill.com/feed",{dataType:"xml"}).then(this.onSuccess.bind(this)).catch(l.onError)}parse(t){t=o()(t);let e=[],n=0,r=/^\w+:(\w+)$/,i=/\?p=(\d+)$/;return t.find("item").each((t,o)=>{let a={};for(o=o.firstElementChild;o;){a[o.namespaceURI&&o.tagName.match(r)>1?o.tagName.match(r)[1]:o.tagName]=o.textContent.replace(/<a.*>.*?<\/a>/,""),o=o.nextElementSibling}let c=parseInt(a.guid.match(i)[1]);if(0===t){if(c===this.latest)return!1;localStorage.setItem(u,c)}if(c>this.latest&&this.news++,e.push(a),++n>5)return!1}),this.news>0&&(this.news=this.news>=5?"5+":this.news,o()("#top-bar").find(".blog").append("<span>"+this.news+"</span>")),e}render(t){this.$el.html(a()({list:t}))}onSuccess(t){let e=this.parse(t),n=JSON.stringify(e);0!==e.length&&(e=e.map(t=>(t.thumbnail=t.thumbnail.replace("//blog.meathill.com/","//qiniu.meathill.com"),t)),localStorage.setItem(c,n),this.render(e))}static onError(t,e,n){}}let s=o()("#top-bar");o()(window).on("scroll",(function(){let t=document.body.scrollTop;s.toggleClass("bg-inverse",t>0);for(let e=f.length-1;e>-1;e--)if(f[e]-t<73&&f[e]-t>-33){s.find("li").eq(e).addClass("active").siblings().removeClass("active");break}}));let f=[];o()("a[name]").each((function(){f.push(o()(this).offset().top)}));new l({el:"#blog-grid"});var p,h,v,g;p=window,h=document,v="ga",p.GoogleAnalyticsObject=v,p.ga=p.ga||function(){(p.ga.q=p.ga.q||[]).push(arguments)},p.ga.l=1*new Date,(g=h.createElement("script")).async=1,g.src="//www.google-analytics.com/analytics.js",document.body.append(g),ga("create","UA-26694288-7","auto"),ga("send","pageview")}]);
(function(e){function r(r){for(var n,a,i=r[0],c=r[1],l=r[2],s=0,p=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(r);while(p.length)p.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(n=!1)}n&&(u.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={router:0},u=[];function a(e){return i.p+"js/"+({"router-index~router-view":"router-index~router-view","router-index":"router-index","router-view":"router-view"}[e]||e)+"."+{"router-index~router-view":"e37b07fa","router-index":"0f310d37","router-view":"65e5f670"}[e]+".js"}function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var l=new Error;u=function(r){c.onerror=c.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",l.name="ChunkLoadError",l.type=n,l.request=u,t[1](l)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(r)},i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=r,c=c.slice();for(var s=0;s<c.length;s++)r(c[s]);var f=l;u.push([3,"chunk-vendors"]),t()})({3:function(e,r,t){e.exports=t("f43b")},"5b22":function(e,r,t){"use strict";t("1fe4"),t("c9c1"),t("7258"),t("ab1a")},"89f9":function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"nav-wrap"},[t("ul",{staticClass:"nav-block"},[e._m(0),t("li",{class:{current:1===e.current}},[e._m(1)]),t("li",{class:{current:2===e.current}},[e._m(2)]),t("li",{class:{current:3===e.current}},[e._m(3)]),t("li",{class:{current:4===e.current}},[e._m(4)]),t("li",{class:{current:5===e.current}},[e._m(5)])])])},o=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("li",{staticClass:"logo"},[t("img",{attrs:{src:"http://img.daliangju.com/upload/20180603/1528019409246zkdt80.png",alt:""}})])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a",{attrs:{href:"../index"}},[t("i"),e._v("首页")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a",{attrs:{href:"../module2"}},[t("i"),e._v("模块2")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a",{attrs:{href:"../module3"}},[t("i"),e._v("模块3")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a",{attrs:{href:"../router"}},[t("i"),e._v("路由")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a",{attrs:{href:"../vuex"}},[t("i"),e._v("Vuex")])}],u=(t("98b9"),{props:["current"]}),a=u,i=t("2877"),c=Object(i["a"])(a,n,o,!1,null,null,null);r["a"]=c.exports},"98b9":function(e,r,t){},f43b:function(e,r,t){"use strict";t.r(r);var n=t("5530"),o=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("5b22"),t("2b0e")),u=t("58ca"),a=(t("d3b7"),t("8c4f")),i=function(){return Promise.all([t.e("router-index~router-view"),t.e("router-index")]).then(t.bind(null,"a7a0"))},c=function(){return Promise.all([t.e("router-index~router-view"),t.e("router-view")]).then(t.bind(null,"aa0d"))};o["a"].use(a["a"]);var l=new a["a"]({mode:"hash",routes:[{name:"index",path:"/",component:i},{name:"view",path:"/view/:id",component:c}]}),s=l,f=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"g-doc"},[t("nav-component",{attrs:{current:4}}),t("keep-alive",{attrs:{include:e.cachedViews}},[t("router-view",{key:e.key,staticClass:"body"})],1)],1)},p=[],d=(t("ac1f"),t("5319"),t("89f9")),v=(t("a5d8"),t("61e3"),{name:"router-app",components:{navComponent:d["a"]},data:function(){return{cachedViews:["router-index"]}},computed:{key:function(){return this.$route.path.replace(/\//g,"_")}}}),m=v,h=t("2877"),b=Object(h["a"])(m,f,p,!1,null,null,null),_=b.exports;o["a"].use(u["a"]);var w=new o["a"](Object(n["a"])({router:s},_));w.$mount("#app")}});
//# sourceMappingURL=router.d594e82f.js.map
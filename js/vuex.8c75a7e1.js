(function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={vuex:0},o=[];function c(e){return u.p+"js/"+({"vuex-index":"vuex-index","vuex-view":"vuex-view"}[e]||e)+"."+{"vuex-index":"912810e3","vuex-view":"a9e8b1a2"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=i;o.push([5,"chunk-vendors"]),n()})({"365c":function(e,t,n){"use strict";n("d3b7");var r=n("da71"),a=n.n(r),o=(n("a9e3"),n("854a")),c=n.n(o);c.a.options.positionClass="toast-top-center";var u=function(e){var t,n;"string"===typeof e?(t=e,n="error"):(t=e.content,n=e.type),c.a[n](t)};var s=n("bc3a"),i=n.n(s),l=n("323e"),p=n.n(l),f=n("4328"),d=n.n(f);function v(e){return p.a.done(),200===e.status||304===e.status?e.data:{success:!1,message:e.statusText,data:e.statusText}}function m(e){return e.success||u(e.message||e.data),e}i.a.interceptors.request.use((function(e){return p.a.start(),e}),(function(e){return Promise.reject(e)})),i.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.resolve(e.response)}));t["a"]={post:function(e,t){return i()({method:"post",url:a.a.api+e,data:d.a.stringify(t),timeout:a.a.timeout,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(v).then(m)},get:function(e,t){return i()({method:"get",url:a.a.api+e,params:t,timeout:a.a.timeout,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(v).then(m)}}},5:function(e,t,n){e.exports=n("531b")},"531b":function(e,t,n){"use strict";n.r(t);var r=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5b22"),n("2b0e")),o=n("58ca"),c=n("2f62"),u=(n("99af"),n("ade3")),s=(n("96cf"),n("1da1")),i=n("365c"),l={lists:{data:[],page:1,path:""}},p=Object(u["a"])({},"getTopics",(function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,o,c,u,s,l,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,o=e.state,c=e.rootState.route.fullPath,u=c,!(o.lists.data.length>0&&u===o.lists.path&&1===t.page)){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,i["a"].get("topics",t);case 6:s=n.sent,l=s.data,p=s.success,l&&p&&a("receiveTopics",Object(r["a"])(Object(r["a"])({},t),{},{data:l,path:u}));case 10:case"end":return n.stop()}}),n)})))()})),f=Object(u["a"])({},"receiveTopics",(function(e,t){var n,r=t.data,a=t.page,o=t.path;n=1===a?[].concat(r):e.lists.data.concat(r),e.lists={data:n,page:a,path:o}})),d=Object(u["a"])({},"getTopics",(function(e){return e.lists})),v={namespaced:!0,state:l,actions:p,mutations:f,getters:d},m={item:{data:{},path:""}},h=Object(u["a"])({},"getTopic",(function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,u,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.state,o=e.rootState.route.fullPath,c=o,!a.item.data.id||c!==a.item.path){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,i["a"].get("topic/".concat(t.id));case 6:u=n.sent,s=u.data,l=u.success,s&&l&&r("receiveTopic",{data:s,path:c});case 10:case"end":return n.stop()}}),n)})))()})),b=Object(u["a"])({},"receiveTopic",(function(e,t){var n=t.data,r=t.path;e.item={data:n,path:r}})),g=Object(u["a"])({},"getTopic",(function(e){return e.item})),x={namespaced:!0,state:m,actions:h,mutations:b,getters:g};a["a"].use(c["a"]);var w=new c["a"].Store({modules:{topics:v,topic:x}}),_=(n("d3b7"),n("8c4f")),y=function(){return n.e("vuex-index").then(n.bind(null,"8b2c"))},j=function(){return n.e("vuex-view").then(n.bind(null,"6392"))};a["a"].use(_["a"]);var O=new _["a"]({mode:"hash",routes:[{name:"index",path:"/",component:y},{name:"view",path:"/view/:id",component:j}]}),T=O,k=n("31bd"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-doc"},[n("nav-component",{attrs:{current:5}}),n("router-view",{key:e.key,staticClass:"body"})],1)},E=[],C=(n("ac1f"),n("5319"),n("89f9")),$=(n("a5d8"),n("61e3"),{name:"vuex-app",components:{navComponent:C["a"]},computed:{key:function(){return this.$route.path.replace(/\//g,"_")}}}),R=$,S=n("2877"),q=Object(S["a"])(R,P,E,!1,null,null,null),M=q.exports;a["a"].use(o["a"]),Object(k["sync"])(w,T),T.beforeEach((function(e,t,n){window.scrollTo(0,0),n()}));var L=new a["a"](Object(r["a"])({router:T,store:w},M));L.$mount("#app")},"5b22":function(e,t,n){"use strict";n("1fe4"),n("c9c1"),n("7258"),n("ab1a")},"89f9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-wrap"},[n("ul",{staticClass:"nav-block"},[e._m(0),n("li",{class:{current:1===e.current}},[e._m(1)]),n("li",{class:{current:2===e.current}},[e._m(2)]),n("li",{class:{current:3===e.current}},[e._m(3)]),n("li",{class:{current:4===e.current}},[e._m(4)]),n("li",{class:{current:5===e.current}},[e._m(5)])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"logo"},[n("img",{attrs:{src:"http://img.daliangju.com/upload/20180603/1528019409246zkdt80.png",alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"../index"}},[n("i"),e._v("首页")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"../module2"}},[n("i"),e._v("模块2")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"../module3"}},[n("i"),e._v("模块3")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"../router"}},[n("i"),e._v("路由")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"../vuex"}},[n("i"),e._v("Vuex")])}],o=(n("98b9"),{props:["current"]}),c=o,u=n("2877"),s=Object(u["a"])(c,r,a,!1,null,null,null);t["a"]=s.exports},"98b9":function(e,t,n){},da71:function(e,t){e.exports={api:"https://cnodejs.org/api/v1/",timeout:3e4}}});
//# sourceMappingURL=vuex.8c75a7e1.js.map
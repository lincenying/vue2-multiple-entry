(function(t){function e(e){for(var r,c,o=e[0],u=e[1],i=e[2],f=0,p=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={view:0},s=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var l=u;s.push([4,"chunk-vendors"]),n()})({2556:function(t,e,n){"use strict";n.r(e);var r=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5b22"),n("2b0e")),s=n("58ca"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-doc"},[n("nav-component"),n("views",{attrs:{data:t.data}})],1)},o=[],u=(n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),i=n("89f9"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"header"},[t._v(t._s(t.data.title))]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.data.content)}})])},f=[],p={props:["data"]},d=p,v=n("2877"),h=Object(v["a"])(d,l,f,!1,null,null,null),m=h.exports,_=n("365c"),b={components:{navComponent:i["a"],views:m},data:function(){return{data:{}}},mounted:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams(window.location.search).get("id"),e.next=3,_["a"].get("topic/".concat(n));case 3:r=e.sent,a=r.success,s=r.data,a&&(t.data=s);case 7:case"end":return e.stop()}}),e)})))()},metaInfo:function(){var t=this.data.title?this.data.title:"";return{title:t}}},g=b,w=Object(v["a"])(g,c,o,!1,null,null,null),y=w.exports;a["a"].use(s["a"]);var x=new a["a"](Object(r["a"])({},y));x.$mount("#app")},"365c":function(t,e,n){"use strict";n("d3b7");var r=n("da71"),a=n.n(r),s=(n("a9e3"),n("854a")),c=n.n(s);c.a.options.positionClass="toast-top-center";var o=function(t){var e,n;"string"===typeof t?(e=t,n="error"):(e=t.content,n=t.type),c.a[n](e)};var u=n("bc3a"),i=n.n(u),l=n("323e"),f=n.n(l),p=n("4328"),d=n.n(p);function v(t){return f.a.done(),200===t.status||304===t.status?t.data:{success:!1,message:t.statusText,data:t.statusText}}function h(t){return t.success||o(t.message||t.data),t}i.a.interceptors.request.use((function(t){return f.a.start(),t}),(function(t){return Promise.reject(t)})),i.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.resolve(t.response)}));e["a"]={post:function(t,e){return i()({method:"post",url:a.a.api+t,data:d.a.stringify(e),timeout:a.a.timeout,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(v).then(h)},get:function(t,e){return i()({method:"get",url:a.a.api+t,params:e,timeout:a.a.timeout,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(v).then(h)}}},4:function(t,e,n){t.exports=n("2556")},"5b22":function(t,e,n){"use strict";n("1fe4"),n("c9c1"),n("7258"),n("ab1a")},"89f9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-wrap"},[n("ul",{staticClass:"nav-block"},[t._m(0),n("li",{class:{current:1===t.current}},[t._m(1)]),n("li",{class:{current:2===t.current}},[t._m(2)]),n("li",{class:{current:3===t.current}},[t._m(3)]),n("li",{class:{current:4===t.current}},[t._m(4)]),n("li",{class:{current:5===t.current}},[t._m(5)])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"logo"},[n("img",{attrs:{src:"http://img.daliangju.com/upload/20180603/1528019409246zkdt80.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"../index"}},[n("i"),t._v("首页")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"../module2"}},[n("i"),t._v("模块2")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"../module3"}},[n("i"),t._v("模块3")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"../router"}},[n("i"),t._v("路由")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"../vuex"}},[n("i"),t._v("Vuex")])}],s=(n("98b9"),{props:["current"]}),c=s,o=n("2877"),u=Object(o["a"])(c,r,a,!1,null,null,null);e["a"]=u.exports},"98b9":function(t,e,n){},da71:function(t,e){t.exports={api:"https://cnodejs.org/api/v1/",timeout:3e4}}});
//# sourceMappingURL=view.df6c7dc2.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vuex-index"],{"8b2c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modules",{attrs:{loading:t.loading,topics:t.topics.data},on:{loadMore:t.loadMore}})},i=[],s=(n("96cf"),n("1da1")),a=n("5530"),o=n("2f62"),c=n("cff8"),u=n.n(c),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"topics"},t._l(t.topics,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/view/"+e.id},domProps:{textContent:t._s(e.title)}})],1)})),0),n("div",{staticClass:"pages"},[t.loading?n("a",{attrs:{href:"javascript:;"}},[t._v("加载中...")]):n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("loadMore")}}},[t._v("加载更多...")])])])},f=[],l={props:["topics","loading"]},p=l,g=n("2877"),v=Object(g["a"])(p,h,f,!1,null,null,null),_=v.exports,d={name:"vuex-index",components:{modules:_},data:function(){return{loading:!1}},computed:Object(a["a"])({},Object(o["b"])({topics:"topics/getTopics"})),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("topics/getTopics",{page:1});case 2:return e.next=4,t.$nextTick();case 4:n=t.$route.path,r=u.a.get(n)||0,u.a.remove(n),window.scrollTo(0,r);case 8:case"end":return e.stop()}}),e)})))()},methods:{loadMore:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.topics.page+1,e.next=4,t.$store.dispatch("topics/getTopics",{page:n});case 4:t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}},beforeRouteLeave:function(t,e,n){var r=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),i=e.path;r?u.a.set(i,r):u.a.remove(i),n()},metaInfo:function(){return{title:"这个是带vuex的模块 - "+this.topics.page}}},m=d,y=Object(g["a"])(m,r,i,!1,null,null,null);e["default"]=y.exports},cff8:function(t,e,n){(function(e,n){var r={version:"2.12.0",areas:{},apis:{},inherit:function(t,e){for(var n in t)e.hasOwnProperty(n)||Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e},stringify:function(t){return void 0===t||"function"===typeof t?t+"":JSON.stringify(t)},parse:function(t,e){try{return JSON.parse(t,e||r.revive)}catch(n){return t}},fn:function(t,e){for(var n in r.storeAPI[t]=e,r.apis)r.apis[n][t]=e},get:function(t,e){return t.getItem(e)},set:function(t,e,n){t.setItem(e,n)},remove:function(t,e){t.removeItem(e)},key:function(t,e){return t.key(e)},length:function(t){return t.length},clear:function(t){t.clear()},Store:function(t,e,n){var i=r.inherit(r.storeAPI,(function(t,e,n){return 0===arguments.length?i.getAll():"function"===typeof e?i.transact(t,e,n):void 0!==e?i.set(t,e,n):"string"===typeof t||"number"===typeof t?i.get(t):"function"===typeof t?i.each(t):t?i.setAll(t,e):i.clear()}));i._id=t;try{var s="__store2_test";e.setItem(s,"ok"),i._area=e,e.removeItem(s)}catch(a){i._area=r.storage("fake")}return i._ns=n||"",r.areas[t]||(r.areas[t]=i._area),r.apis[i._ns+i._id]||(r.apis[i._ns+i._id]=i),i},storeAPI:{area:function(t,e){var n=this[t];return n&&n.area||(n=r.Store(t,e,this._ns),this[t]||(this[t]=n)),n},namespace:function(t,e){if(!t)return this._ns?this._ns.substring(0,this._ns.length-1):"";var n=t,i=this[n];if((!i||!i.namespace)&&(i=r.Store(this._id,this._area,this._ns+n+"."),this[n]||(this[n]=i),!e))for(var s in r.areas)i.area(s,r.areas[s]);return i},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(t){return this._area.has?this._area.has(this._in(t)):!!(this._in(t)in this._area)},size:function(){return this.keys().length},each:function(t,e){for(var n=0,i=r.length(this._area);n<i;n++){var s=this._out(r.key(this._area,n));if(void 0!==s&&!1===t.call(this,s,this.get(s),e))break;i>r.length(this._area)&&(i--,n--)}return e||this},keys:function(t){return this.each((function(t,e,n){n.push(t)}),t||[])},get:function(t,e){var n,i=r.get(this._area,this._in(t));return"function"===typeof e&&(n=e,e=null),null!==i?r.parse(i,n):null!=e?e:i},getAll:function(t){return this.each((function(t,e,n){n[t]=e}),t||{})},transact:function(t,e,n){var r=this.get(t,n),i=e(r);return this.set(t,void 0===i?r:i),this},set:function(t,e,n){var i=this.get(t);return null!=i&&!1===n?e:r.set(this._area,this._in(t),r.stringify(e),n)||i},setAll:function(t,e){var n,r;for(var i in t)r=t[i],this.set(i,r,e)!==r&&(n=!0);return n},add:function(t,e){var n=this.get(t);if(n instanceof Array)e=n.concat(e);else if(null!==n){var i=typeof n;if(i===typeof e&&"object"===i){for(var s in e)n[s]=e[s];e=n}else e=n+e}return r.set(this._area,this._in(t),r.stringify(e)),e},remove:function(t,e){var n=this.get(t,e);return r.remove(this._area,this._in(t)),n},clear:function(){return this._ns?this.each((function(t){r.remove(this._area,this._in(t))}),1):r.clear(this._area),this},clearAll:function(){var t=this._area;for(var e in r.areas)r.areas.hasOwnProperty(e)&&(this._area=r.areas[e],this.clear());return this._area=t,this},_in:function(t){return"string"!==typeof t&&(t=r.stringify(t)),this._ns?this._ns+t:t},_out:function(t){return this._ns?t&&0===t.indexOf(this._ns)?t.substring(this._ns.length):void 0:t}},storage:function(t){return r.inherit(r.storageAPI,{items:{},name:t})},storageAPI:{length:0,has:function(t){return this.items.hasOwnProperty(t)},key:function(t){var e=0;for(var n in this.items)if(this.has(n)&&t===e++)return n},setItem:function(t,e){this.has(t)||this.length++,this.items[t]=e},removeItem:function(t){this.has(t)&&(delete this.items[t],this.length--)},getItem:function(t){return this.has(t)?this.items[t]:null},clear:function(){for(var t in this.items)this.removeItem(t)}}},i=r.Store("local",function(){try{return localStorage}catch(t){}}());i.local=i,i._=r,i.area("session",function(){try{return sessionStorage}catch(t){}}()),i.area("page",r.storage("page")),"function"===typeof n&&void 0!==n.amd?n("store2",[],(function(){return i})):t.exports?t.exports=i:(e.store&&(r.conflict=e.store),e.store=i)})(this,this&&this.define)}}]);
//# sourceMappingURL=vuex-index.912810e3.js.map
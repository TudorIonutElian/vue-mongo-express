(function(t){function e(e){for(var n,i,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Categorii")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("h1",{staticClass:"p-2 bg-primary text-white"},[t._v(" Categorii de Produse existente in cloud-ul MongoDB ")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.categorii,(function(e){return r("tr",{key:e._id},[r("th",{attrs:{scope:"row"}},[t._v(t._s(e._id))]),r("td",[t._v(t._s(e.titlu))]),r("td",[t._v(t._s(e.descriere))]),r("td",[r("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(r){return t.stergeCategorie(""+e._id)}}},[t._v(" Sterge Categorie ")])]),t._m(1,!0)])})),0)])])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#ID")]),r("th",{attrs:{scope:"col"}},[t._v("Titlu Categorie")]),r("th",{attrs:{scope:"col"}},[t._v("Descriere Categorie")]),r("th",{attrs:{scope:"col"}},[t._v("Sterge Categorie")]),r("th",{attrs:{scope:"col"}},[t._v("Produse Categorie")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("button",{staticClass:"btn btn-success btn-sm"},[t._v("Vezi Produse")])])}],u=(r("96cf"),r("1da1")),s=(r("d3b7"),r("d4ec")),l=r("bee2"),f=r("bc3a"),p=r.n(f),d="/api/categorii/",g=function(){function t(){Object(s["a"])(this,t)}return Object(l["a"])(t,null,[{key:"getCategorii",value:function(){return new Promise((function(t,e){try{var r=p.a.get(d);t(r)}catch(n){e(n)}}))}}]),t}(),v=g,b={name:"CategoriiComponent",data:function(){return{categorii:[],error:""}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getCategorii();case 3:r=e.sent,t.categorii=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{stergeCategorie:function(t){alert("Vrei sa stergi categoria cu ID-ul ".concat(t))}}},h=b,_=r("2877"),m=Object(_["a"])(h,i,c,!1,null,null,null),y=m.exports,C={name:"App",components:{Categorii:y}},w=C,O=(r("034f"),Object(_["a"])(w,o,a,!1,null,null,null)),j=O.exports;r("4989"),r("ab8b");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.62d903b1.js.map
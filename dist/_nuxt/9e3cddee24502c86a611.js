(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{207:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("e611ed62",content,!0,{sourceMap:!1})},208:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("d36167ae",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("6759f5ab",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";var r=n(207);n.n(r).a},231:function(t,e,n){(e=n(47)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},232:function(t,e,n){"use strict";var r=n(208);n.n(r).a},233:function(t,e,n){(e=n(47)(!1)).push([t.i,".weather{-webkit-animation:appear 5s;animation:appear 5s;margin:auto auto auto 30px}p{opacity:.4;font-style:oblique;font-size:5}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},234:function(t,e,n){"use strict";var r=n(213);n.n(r).a},235:function(t,e,n){(e=n(47)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=e},236:function(t,e,n){"use strict";n.r(e);n(220),n(222);var r=n(1),o=(n(224),n(228),n(219)),l=n(211),c=n(210),f=n(203);r.default.component("b-navbar",f.a);var v=r.default.extend({name:"Navbar"}),d=(n(230),n(30)),m=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("\n      Anders-datar1\n    ")]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[t._v("\n          Link\n        ")]),t._v(" "),n("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("\n          Disabled\n        ")])],1),t._v(" "),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[t._v("User")])]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("\n            Profile\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,y=(n(20),n(13),r.default.extend({props:{text:{type:Object,required:!0}},data:function(){return{message:this.text}},computed:{temperature:function(){return this.message.timeSeries[0].parameters[11].values[0]},sunniness:function(){var t=this.message.timeSeries[0].parameters[6].values[0];switch(!0){case t<2:return"It's really sunny.";case t<5:return"It's kinda sunny.";case t<8:return"It's not really sunny.";case 8===t:return"balls.";default:return"It's somewhere between kinda sunny and not sunny at all."}}},weatherSymbol:function(){return"NotImplemented"}})),h=(n(232),Object(d.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather level-center"},[t._v("\n  ICON "),n("br"),t._v("\n  "+t._s(t.temperature)+"°C "),n("br"),t._v("\n  "+t._s(t.sunniness)+" "),n("br"),t._v(" "),n("p",[t._v("\n    last update "+t._s(t.text.approvedTime)+"\n  ")])])}),[],!1,null,null,null).exports);r.default.use(o.a),r.default.use(l.a),r.default.use(c.a);var x=r.default.extend({components:{Weather:h,Navbar:m},asyncData:function(t){return t.app.$axios.get("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json").then((function(t){return{message:t.data}}))},data:function(){return{message:"initial message"}}}),_=(n(234),Object(d.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{staticClass:"base-container"},[e("b-row",{staticClass:"nav"},[e("navbar")],1),this._v(" "),e("div",{staticClass:"nav level-left  center"},[e("weather",{attrs:{text:this.message}})],1),this._v("\n  hejsan\n")],1)}),[],!1,null,null,null));e.default=_.exports}}]);
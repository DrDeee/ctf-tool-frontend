(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{266:function(e,t,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("257af960",content,!0,{sourceMap:!1})},267:function(e,t,n){"use strict";n(266)},268:function(e,t,n){var o=n(26)(!1);o.push([e.i,".app-header{display:flex;justify-content:space-between;margin-bottom:.7em;align-items:center}.site-name{font-size:22px}@media screen and (min-width:550px){div.app-header button{width:200px}}@media screen and (max-width:480px){div.app-header .user{display:none}}",""]),e.exports=o},269:function(e,t,n){"use strict";n.r(t);n(28);var o={props:["siteName"],methods:{logout:function(){this.$auth.logout(),this.$router.push("/login")}},computed:{displayName:function(){return this.$auth.user.name?this.$auth.user.name:this.$auth.user.preferred_username}}},r=(n(267),n(35)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"w-100 app-header"},[n("span",{staticClass:"user"},[e._v("Willkommen,\n      "),n("b",[e._v(e._s(e.displayName))])]),e._v(" "),n("b",{staticClass:"site-name"},[e._v(e._s(e.siteName))]),e._v(" "),n("button",{staticClass:"btn",on:{click:function(t){return e.logout()}}},[e._v("Logout")])]),e._v(" "),n("hr")])}),[],!1,null,null,null);t.default=component.exports}}]);
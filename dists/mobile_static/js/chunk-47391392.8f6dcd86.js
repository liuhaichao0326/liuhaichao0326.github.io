(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47391392"],{"3e1f":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"drop"},[i("div",{staticClass:"account"},[i("van-cell",{attrs:{title:"修改密码","is-link":"",value:"建议定期修改密码以保护账户安全"},on:{click:t.chang}}),i("div",{staticClass:"van-cell van-cell--clickable",attrs:{"data-v-7427b2c6":"",role:"button",tabindex:"0"}},[t._m(0),i("div",{staticClass:"van-cell__value",attrs:{"data-v-7427b2c6":""}},[t.id?i("span",{attrs:{"data-v-7427b2c6":""}},[t._v("已绑定："+t._s(t.id))]):i("span",{attrs:{"data-v-7427b2c6":""}},[t._v("无")])]),i("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon",attrs:{"data-v-7427b2c6":""}})]),i("van-cell",{attrs:{title:"收货地址","is-link":"",value:"如若您已更换地址，请及时添加"},on:{click:t.shohuodizhi}}),i("van-cell",{staticClass:"account-title",attrs:{title:"关于友黔花","is-link":"",value:"v1.2.1"}})],1),i("div",{staticClass:"drop-button"},[i("van-button",{attrs:{type:"primary",block:""},on:{click:t.drop}},[t._v("退出登陆")])],1)])},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"van-cell__title",attrs:{"data-v-7427b2c6":""}},[i("span",{attrs:{"data-v-7427b2c6":""}},[t._v("绑定手机")])])}],c=i("f42b"),e={data(){return{id:null}},methods:{drop(){window.localStorage.removeItem("UserKey"),this.$router.push("/login")},chang(){this.$router.push("/change?id="+this.id)},shohuodizhi(){this.$router.push("/shipping")}},async mounted(){this.id=this.$route.query.id;let t={appVersion:"2.2.0",type:2};await Object(c["t"])(t).then(t=>{})},components:{}},l=e,r=(i("7667"),i("f6be"),i("2877")),o=Object(r["a"])(l,s,n,!1,null,"0c4b61bb",null);a["default"]=o.exports},7667:function(t,a,i){"use strict";var s=i("c659"),n=i.n(s);n.a},8325:function(t,a,i){},c659:function(t,a,i){},f6be:function(t,a,i){"use strict";var s=i("8325"),n=i.n(s);n.a}}]);
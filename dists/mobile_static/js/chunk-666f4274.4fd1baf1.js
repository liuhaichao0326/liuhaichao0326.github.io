(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-666f4274"],{5951:function(t,a,s){},"8afd":function(t,a,s){"use strict";var e=s("5951"),i=s.n(e);i.a},d662:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mui-content"},[t._m(0),s("ul",{staticClass:"mui-input-group"},[t._m(1),s("li",{staticClass:"mui-input-row"},[s("label",[t._v("账户")]),s("input",{ref:"admin",staticClass:"mui-input-clear mui-input",attrs:{type:"text",value:"13513688471",placeholder:"请输入用户名"}})]),s("li",{staticClass:"mui-input-row mui-password"},[s("label",[t._v("密码")]),s("input",{ref:"password",staticClass:"mui-input-password mui-input",attrs:{type:"password",value:"",placeholder:"请输入密码"}})])]),s("div",{staticClass:"mui-content-padded"},[s("button",{staticClass:"mui-btn-block",on:{click:t.nextStep}},[t._v("登 录")]),t._m(2)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mui-loginbg"},[s("img",{attrs:{src:"http://www.youqianhua365.com/Areas/Mobile/Templates/Default/Images/v1/lobg.png"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"login-toptite"},[s("p",{staticClass:"loginreg"},[t._v("账号密码登陆")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"link-area"},[s("a",{staticClass:"mui-btn mui-btn-link"},[t._v("忘记密码？")]),s("a",{staticClass:"mui-btn",staticStyle:{border:"0",padding:"6px 0"},attrs:{href:"#"}},[t._v("去注册")])])}],n=s("f42b"),r={data(){return{}},methods:{async nextStep(){let t={userName:this.$refs.admin.value,password:this.$refs.password.value};await Object(n["b"])(t).then(t=>{t.data.UserKey?(localStorage.UserKey=t.data.UserKey,localStorage.UserId=t.data.UserId,this.$router.push("/usercenter")):alert("用户名或密码错误")})}},mounted(){},components:{}},l=r,u=(s("8afd"),s("2877")),c=Object(u["a"])(l,e,i,!1,null,"24622fe3",null);a["default"]=c.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7c0b"],{"77c8":function(e,s,a){"use strict";a.r(s);var r=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("van-field",{attrs:{disabled:"disabled",label:"用户账户",rules:[{required:!0}]},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),a("van-form",[a("van-field",{attrs:{type:"password",label:"旧密码",placeholder:"请输入旧密码",rules:[{required:!0}]},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),a("van-field",{attrs:{type:"password",label:"新密码",placeholder:"请输入新密码",rules:[{required:!0}]},model:{value:e.password2,callback:function(s){e.password2=s},expression:"password2"}}),a("van-field",{attrs:{type:"password",label:"确认密码",placeholder:"请确认密码",rules:[{required:!0}]},model:{value:e.password2,callback:function(s){e.password2=s},expression:"password2"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:e.xiugai}},[e._v("提交")])],1)],1)],1)},l=[],t=(a("e7e5"),a("d399")),d=a("f42b"),o={data(){return{username:null,password:null,password2:null,id:null}},methods:{async xiugai(){let e={userkey:localStorage.getItem("UserKey"),oldpassword:this.password,password:this.password2};await Object(d["a"])(e).then(e=>{1==e.data.success?(Object(t["a"])("修改密码成功"),this.$router.push("/usercenter")):Object(t["a"])("修改失败"+e.data.msg)})}},mounted(){this.id=this.$route.query.id},components:{},watch:{id(e){this.username=e}}},n=o,u=a("2877"),i=Object(u["a"])(n,r,l,!1,null,"6c4f4709",null);s["default"]=i.exports}}]);
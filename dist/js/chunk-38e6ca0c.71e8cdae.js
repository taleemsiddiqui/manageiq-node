(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38e6ca0c"],{bd76:function(e,r,s){"use strict";var t=[{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned",_classes:"table-success"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active",_classes:"table-success"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive",_classes:"table-danger"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}];r["a"]=t},eeca:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"6"}},[s("CCard",[s("CCardHeader",[e._v(" User id: "+e._s(e.$route.params.id)+" ")]),s("CCardBody",[s("CDataTable",{attrs:{striped:"",small:"",fixed:"",items:e.visibleData,fields:e.fields}})],1),s("CCardFooter",[s("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)},a=[],i=s("bd76"),u={name:"User",beforeRouteEnter(e,r,s){s(e=>{e.usersOpened=r.fullPath.includes("users")})},data(){return{usersOpened:null}},computed:{fields(){return[{key:"key",label:this.username,_style:"width:150px"},{key:"value",label:"",_style:"width:150px;"}]},userData(){var e=this.$route.params.id,r=i["a"].find((r,s)=>s+1==e),s=r?Object.entries(r):[["id","Not found"]];return s.map(e=>{var[r,s]=e;return{key:r,value:s}})},visibleData(){return this.userData.filter(e=>"username"!==e.key)},username(){return this.userData.filter(e=>"username"===e.key)[0].value}},methods:{goBack(){this.usersOpened?this.$router.go(-1):this.$router.push({path:"/users"})}}},n=u,d=s("2877"),l=Object(d["a"])(n,t,a,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-38e6ca0c.71e8cdae.js.map
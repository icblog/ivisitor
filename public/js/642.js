"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[642],{3642:(t,n,e)=>{e.r(n),e.d(n,{default:()=>m});var r=e(821),l=e(9285),a=e(1682),u=e(2770),i={class:"container"},o={class:"row"},s={class:"col-md-10 mx-auto"},c={class:"row"},f={class:"col text-right"},d=(0,r.Uk)(" I'm XYZ co-worker "),p={class:"col"},b=(0,r.Uk)(" External visitor ");const m={name:"SignInOption",setup:function(t){return function(t,n){return(0,r.wg)(),(0,r.j4)((0,r.SU)(u.Z),{pageTitle:"home",backUrl:"/"},{default:(0,r.w5)((function(){return[(0,r._)("div",i,[(0,r._)("div",o,[(0,r._)("div",s,[(0,r._)("div",c,[(0,r._)("div",f,[(0,r.Wm)((0,r.SU)(a.Z),{btnFunc:function(){l.Nd.visit("/co-worker-signin")},btnStyle:"primary",customClass:"sign-in-out-btn"},{default:(0,r.w5)((function(){return[d]})),_:1},8,["btnFunc"])]),(0,r._)("div",p,[(0,r.Wm)((0,r.SU)(a.Z),{btnFunc:function(){l.Nd.visit("/external-visitor-signin")},btnStyle:"primary",customClass:"sign-in-out-btn ml-4"},{default:(0,r.w5)((function(){return[b]})),_:1},8,["btnFunc"])])])])])])]})),_:1})}}}},1682:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(821);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,n,e){return(n=function(t){var n=function(t,n){if("object"!==l(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===l(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=["title","type"];const i={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(t){var n=t,e=(0,r.qj)({defaultClassName:"no-border-radius btn shadow-none "+n.customClass});return function(n,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("button",{title:t.btnTitle,type:t.btnType,class:(0,r.C_)(a({"hide-on-all-screen":t.hideBtn,"btn-full":t.fullBtn,"btn-muted":"muted"===t.btnStyle,"primary-btn":"primary"===t.btnStyle,"btn-primary":"primary2"===t.btnStyle,"btn-danger":"danger"===t.btnStyle,"btn-default":"default"===t.btnStyle,"btn-secondary":"secondary"===t.btnStyle,"btn-success":"success"===t.btnStyle,"btn-warning":"warn"===t.btnStyle},e.defaultClassName,!0)),onClick:l[0]||(l[0]=function(){return t.btnFunc&&t.btnFunc.apply(t,arguments)})},[(0,r.WI)(n.$slots,"default")],10,u),[[r.F8,!t.noBtnStyle]]),(0,r.wy)((0,r._)("button",{class:(0,r.C_)(null!=t.customClassObj?t.customClassObj:t.customClass),onClick:l[1]||(l[1]=function(){return t.btnFunc&&t.btnFunc.apply(t,arguments)})},[(0,r.WI)(n.$slots,"default")],2),[[r.F8,t.noBtnStyle]])],64)}}}},9323:(t,n,e)=>{e.d(n,{Z:()=>u});var r=e(821),l=e(9285),a=["href"];const u={name:"AppLink",props:{linkType:{type:String,default:"int"},className:{type:String,default:""},linkUrl:{type:String,default:"",requred:!0}},setup:function(t){return function(n,e){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("a",{class:(0,r.C_)(t.className),href:t.linkUrl,target:"_blank"},[(0,r.WI)(n.$slots,"default")],10,a),[[r.F8,"ext"===t.linkType]]),(0,r.wy)((0,r.Wm)((0,r.SU)(l.rU),{class:(0,r.C_)(t.className),href:t.linkUrl},{default:(0,r.w5)((function(){return[(0,r.WI)(n.$slots,"default")]})),_:3},8,["class","href"]),[[r.F8,"int"===t.linkType]])],64)}}}},2770:(t,n,e)=>{e.d(n,{Z:()=>T});var r=e(821),l=e(9323),a=e(1601),u={class:"container"},i={class:"row"},o={class:"col-md-12 header-wrapper"},s={class:"text-center"},c=(0,r._)("hr",null,null,-1),f={class:"row"},d={class:"col"},p={class:"date-time text-center"},b={class:"col"},m={class:"date-time text-center"},y={key:0,class:"col iv-go-back-btn-wrapper"},v=(0,r._)("i",{class:"fas fa-arrow-left"},null,-1),g=(0,r.Uk)(" Go back "),w=(0,r._)("hr",null,null,-1);const S={name:"Header",props:{backUrl:{type:String,default:""}},setup:function(t){var n=(0,r.qj)({currentDate:"",currentTime:""}),e=function(){var t=new Date;n.currentDate=t.toDateString(),n.currentTime=t.toLocaleTimeString("en-GB").slice(0,5)};return(0,r.bv)((function(){setTimeout((function(){e()}),50),setInterval((function(){e()}),1e3)})),function(e,S){return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",i,[(0,r._)("div",o,[(0,r._)("div",s,[(0,r.Wm)(a.Z),c]),(0,r._)("div",f,[(0,r._)("div",d,[(0,r._)("h5",p," Date: "+(0,r.zw)(n.currentDate),1)]),(0,r._)("div",b,[(0,r._)("h5",m," Time: "+(0,r.zw)(n.currentTime),1)]),""!=t.backUrl?((0,r.wg)(),(0,r.iD)("div",y,[(0,r.Wm)(l.Z,{linkUrl:t.backUrl,className:"iv-go-back-btn primary-btn"},{default:(0,r.w5)((function(){return[v,g]})),_:1},8,["linkUrl"])])):(0,r.kq)("",!0)]),w])])])}}};var _={className:"footer-wrapper"},k=(0,r._)("i",{class:"fa fa-copyright","aria-hidden":"true"},null,-1);const U={name:"Footer",setup:function(t){var n="".concat((new Date).getFullYear()," icblog.com/iv");return function(t,e){return(0,r.wg)(),(0,r.iD)("footer",_,[(0,r._)("div",{class:"container"},[(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-10 mx-auto"},[(0,r._)("p",{class:"text-center"},[k,(0,r.Uk)(" "+(0,r.zw)(n))])])])])])}}};var h=e(9285),C={class:"content-wrapper"};const T={name:"Layout",props:{pageTitle:{type:String,default:""},backUrl:{type:String,default:""}},setup:function(t){return function(n,e){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)((0,r.SU)(h.Fb),null,{default:(0,r.w5)((function(){return[(0,r._)("title",null,"\r\n      "+(0,r.zw)("iv | "+t.pageTitle)+"\r\n    ",1)]})),_:1}),(0,r.Wm)((0,r.SU)(S),{backUrl:t.backUrl},null,8,["backUrl"]),(0,r._)("div",C,[(0,r.WI)(n.$slots,"default")]),(0,r.Wm)((0,r.SU)(U))],64)}}}},1601:(t,n,e)=>{e.d(n,{Z:()=>o});var r=e(821),l=e(9323),a={class:"logo-wrapper"},u={class:"iv-logo"},i=(0,r.Uk)("XYZ LTD");const o={name:"Logo",setup:function(t){return function(t,n){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("h1",u,[(0,r.Wm)(l.Z,{linkUrl:"/"},{default:(0,r.w5)((function(){return[i]})),_:1})])])}}}}}]);
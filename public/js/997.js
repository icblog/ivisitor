"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[997],{1694:(e,t,n)=>{n.d(t,{Ae:()=>u,JO:()=>s,MM:()=>i,de:()=>r,eY:()=>o,kc:()=>a,vM:()=>l});var r=function(){return"Sorry system error, your request can not be processed please see a member of the security team thank you!"};function l(){window.scrollTo({top:0,left:0,behavior:"smooth"})}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj";return"arr"==r?t.filter((function(t){return t!==e})):t.filter((function(t){return t[n]!==e}))}function o(e){e.value.focus()}function u(e,t,n){return e.length?t.filter((function(t){return t[n].toLowerCase().includes(e.toLowerCase())})):t}function i(e){return/^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/.test(e)}function s(e,t){return e+" "+t}},4997:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(821),l=n(9285),a=n(2770),o=n(1293),u=n(4041),i=n(1682),s=n(1694),c={class:"container"},f={class:"row"},d={class:"col-md-7 mx-auto"},p=(0,r._)("div",{class:"page-intro-wrapper"},[(0,r._)("h1",null,"Forgotten password")],-1),m={class:"form-wrapper"},y={key:0},b={key:1},g=(0,r._)("p",{class:"form-top-text"}," Enter your registered email below, a link will be sent to reset your password if you have account. ",-1),v=["onSubmit"],w={class:"form-group"},S=(0,r._)("label",{class:"form-label",for:"email"},"Email*",-1),_={key:0,class:"text-danger small"},k=(0,r._)("p",{class:"small"},"All fields marked with a * are mandatory",-1),h={class:"pt-3 text-center"},U=(0,r.Uk)("Submit");const C={name:"ForgottenPassword",props:{errors:Object},setup:function(e){var t=(0,r.iH)(!1),n=(0,r.iH)(null),C=(0,r.qj)({email:"",myhouse:""}),H=function(){l.Nd.post("/handle-forgotten-password-form",C,{onStart:function(){t.value=!0},onFinish:function(){t.value=!1}})};return(0,r.bv)((function(){(0,s.eY)(n)})),function(l,s){return(0,r.wg)(),(0,r.j4)((0,r.SU)(a.Z),{pageTitle:"user-forgotten-password"},{default:(0,r.w5)((function(){return[(0,r._)("div",c,[(0,r._)("div",f,[(0,r._)("div",d,[p,(0,r._)("div",m,[(0,r.SU)(t)?((0,r.wg)(),(0,r.iD)("section",y,[(0,r.Wm)((0,r.SU)(o.Z))])):(0,r.kq)("",!0),(0,r.SU)(t)?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("section",b,[g,e.errors.fail?((0,r.wg)(),(0,r.j4)((0,r.SU)(u.Z),{key:0,infotype:"error",msg:e.errors.fail},null,8,["msg"])):(0,r.kq)("",!0),(0,r._)("form",{onSubmit:(0,r.iM)(H,["prevent"])},[(0,r._)("div",w,[S,e.errors.email?((0,r.wg)(),(0,r.iD)("div",_,(0,r.zw)(e.errors.email),1)):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{ref_key:"firstInput",ref:n,"onUpdate:modelValue":s[0]||(s[0]=function(e){return C.email=e}),type:"email",class:"form-control",id:"email",name:"email",maxlength:"255",autocomplete:"off",required:""},null,512),[[r.nr,C.email]])]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[1]||(s[1]=function(e){return C.myhouse=e}),type:"text",maxlength:"2",name:"myhouse",class:"not_in_my_house"},null,512),[[r.nr,C.myhouse]]),k,(0,r._)("div",h,[(0,r.Wm)((0,r.SU)(i.Z),{btnType:"submit",btnStyle:"primary"},{default:(0,r.w5)((function(){return[U]})),_:1})])],40,v)]))])])])])]})),_:1})}}}},1682:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(821);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=["title","type"];const u={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(e){var t=e,n=(0,r.qj)({defaultClassName:"no-border-radius btn shadow-none "+t.customClass});return function(t,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("button",{title:e.btnTitle,type:e.btnType,class:(0,r.C_)(a({"hide-on-all-screen":e.hideBtn,"btn-full":e.fullBtn,"btn-muted":"muted"===e.btnStyle,"primary-btn":"primary"===e.btnStyle,"btn-primary":"primary2"===e.btnStyle,"btn-danger":"danger"===e.btnStyle,"btn-default":"default"===e.btnStyle,"btn-secondary":"secondary"===e.btnStyle,"btn-success":"success"===e.btnStyle,"btn-warning":"warn"===e.btnStyle},n.defaultClassName,!0)),onClick:l[0]||(l[0]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,r.WI)(t.$slots,"default")],10,o),[[r.F8,!e.noBtnStyle]]),(0,r.wy)((0,r._)("button",{class:(0,r.C_)(null!=e.customClassObj?e.customClassObj:e.customClass),onClick:l[1]||(l[1]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,r.WI)(t.$slots,"default")],2),[[r.F8,e.noBtnStyle]])],64)}}}},9323:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(821),l=n(9285),a=["href"];const o={name:"AppLink",props:{linkType:{type:String,default:"int"},className:{type:String,default:""},linkUrl:{type:String,default:"",requred:!0}},setup:function(e){return function(t,n){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("a",{class:(0,r.C_)(e.className),href:e.linkUrl,target:"_blank"},[(0,r.WI)(t.$slots,"default")],10,a),[[r.F8,"ext"===e.linkType]]),(0,r.wy)((0,r.Wm)((0,r.SU)(l.rU),{class:(0,r.C_)(e.className),href:e.linkUrl},{default:(0,r.w5)((function(){return[(0,r.WI)(t.$slots,"default")]})),_:3},8,["class","href"]),[[r.F8,"int"===e.linkType]])],64)}}}},4041:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(821),l=(0,r._)("br",null,null,-1),a=["innerHTML"];const o={name:"HandleMsg",props:{infotype:{type:String,requred:!0},msg:{type:String,requred:!0},customClass:{type:String,default:""},showHeading:{type:Boolean,default:!0},customHeading:{type:String,default:""}},setup:function(e){var t=e,n=(0,r.iH)("no-border-radius alert"),o=(0,r.iH)("");return"success"==t.infotype&&(n.value="".concat(n.value," alert-success text-success"),o.value=""==t.customHeading?"Success!":t.customHeading),"error"==t.infotype&&(n.value="".concat(n.value," alert-danger text-danger"),o.value=""==t.customHeading?"Error!":t.customHeading),"info"==t.infotype&&(n.value="".concat(n.value," alert-secondary"),o.value=""==t.customHeading?"Info!":t.customHeading),function(u,i){return(0,r.wg)(),(0,r.iD)("div",{class:(0,r.C_)((0,r.SU)(n)+" "+e.customClass),"aria-live":"assertive"},[(0,r.wy)((0,r._)("span",null,[(0,r._)("strong",null,(0,r.zw)((0,r.SU)(o)),1),l],512),[[r.F8,e.showHeading]]),(0,r._)("span",{innerHTML:t.msg},null,8,a)],2)}}}},2770:(e,t,n)=>{n.d(t,{Z:()=>H});var r=n(821),l=n(9323),a=n(1601),o={class:"container"},u={class:"row"},i={class:"col-md-12 header-wrapper"},s={class:"text-center"},c=(0,r._)("hr",null,null,-1),f={class:"row"},d={class:"col"},p={class:"date-time text-center"},m={class:"col"},y={class:"date-time text-center"},b={key:0,class:"col iv-go-back-btn-wrapper"},g=(0,r._)("i",{class:"fas fa-arrow-left"},null,-1),v=(0,r.Uk)(" Go back "),w=(0,r._)("hr",null,null,-1);const S={name:"Header",props:{backUrl:{type:String,default:""}},setup:function(e){var t=(0,r.qj)({currentDate:"",currentTime:""});return(0,r.bv)((function(){setTimeout((function(){var e;e=new Date,t.currentDate=e.toDateString(),t.currentTime=e.toLocaleTimeString("en-GB").slice(0,5)}),50)})),function(n,S){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",u,[(0,r._)("div",i,[(0,r._)("div",s,[(0,r.Wm)(a.Z),c]),(0,r._)("div",f,[(0,r._)("div",d,[(0,r._)("h5",p," Date: "+(0,r.zw)(t.currentDate),1)]),(0,r._)("div",m,[(0,r._)("h5",y," Time: "+(0,r.zw)(t.currentTime),1)]),""!=e.backUrl?((0,r.wg)(),(0,r.iD)("div",b,[(0,r.Wm)(l.Z,{linkUrl:e.backUrl,className:"iv-go-back-btn primary-btn"},{default:(0,r.w5)((function(){return[g,v]})),_:1},8,["linkUrl"])])):(0,r.kq)("",!0)]),w])])])}}};var _={className:"footer-wrapper"},k=(0,r._)("i",{class:"fa fa-copyright","aria-hidden":"true"},null,-1);const h={name:"Footer",setup:function(e){var t="".concat((new Date).getFullYear()," icblog.com/iv");return function(e,n){return(0,r.wg)(),(0,r.iD)("footer",_,[(0,r._)("div",{class:"container"},[(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-10 mx-auto"},[(0,r._)("p",{class:"text-center"},[k,(0,r.Uk)(" "+(0,r.zw)(t))])])])])])}}};var U=n(9285),C={class:"content-wrapper"};const H={name:"Layout",props:{pageTitle:{type:String,default:""},backUrl:{type:String,default:""}},setup:function(e){return function(t,n){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)((0,r.SU)(U.Fb),null,{default:(0,r.w5)((function(){return[(0,r._)("title",null,"\r\n      "+(0,r.zw)("iv | "+e.pageTitle)+"\r\n    ",1)]})),_:1}),(0,r.Wm)((0,r.SU)(S),{backUrl:e.backUrl},null,8,["backUrl"]),(0,r._)("div",C,[(0,r.WI)(t.$slots,"default")]),(0,r.Wm)((0,r.SU)(h))],64)}}}},1293:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(821),l=[(0,r._)("i",{class:"fas fa-spinner fa-spin"},null,-1)];const a={name:"LoadingIndicator",props:{position:{type:String,default:null},dot:{type:Boolean,default:!1},loaderSize:{type:String,default:"large"},centerLoader:{type:Boolean,default:!0},loaderPSizeClassName:{type:String,default:""}},setup:function(e){var t=e,n=(0,r.iH)(""),a=(0,r.iH)("");return(0,r.bv)((function(){"large"==t.loaderSize&&(a.value="fa-3x"),"med"==t.loaderSize&&(a.value="fa-2x"),"small"==t.loaderSize&&(a.value="fa-1x"),t.centerLoader&&(n.value="loader"),null!==t.position&&"full-page"===t.position&&(n.value="".concat(n.value," full-page-loader")),t.dot&&(n.value="".concat(n.value," loader-dot"))})),function(t,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[e.dot?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,r.C_)((0,r.SU)(n))},[(0,r._)("div",{class:(0,r.C_)((0,r.SU)(a))},"..........",2)],2)):(0,r.kq)("",!0),e.dot?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:1,class:(0,r.C_)((0,r.SU)(n))},[(0,r._)("div",{class:(0,r.C_)((0,r.SU)(a))},l,2),(0,r._)("p",{class:(0,r.C_)(e.loaderPSizeClassName)},"Please wait...",2)],2))],64)}}}},1601:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821),l=n(9323),a={class:"logo-wrapper"},o={class:"iv-logo"},u=(0,r.Uk)("XYZ LTD");const i={name:"Logo",setup:function(e){return function(e,t){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("h1",o,[(0,r.Wm)(l.Z,{linkUrl:"/"},{default:(0,r.w5)((function(){return[u]})),_:1})])])}}}}}]);
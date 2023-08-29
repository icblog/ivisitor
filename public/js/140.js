/*! For license information please see 140.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[140],{8585:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(9669),o=t.n(r),a="http://127.0.0.1:8000";"remote"===appDataObj.appEnv&&(a="https://iv.icblog.uk");const i=o().create({baseURL:a,withCredentials:!0,headers:{"Content-Type":"application/json"}})},1694:(e,n,t)=>{t.d(n,{Ae:()=>s,JO:()=>u,MM:()=>l,de:()=>r,eY:()=>i,kc:()=>a,vM:()=>o});var r=function(){return"Sorry system error, your request can not be processed please see a member of the security team thank you!"};function o(){window.scrollTo({top:0,left:0,behavior:"smooth"})}function a(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj";return"arr"==r?n.filter((function(n){return n!==e})):n.filter((function(n){return n[t]!==e}))}function i(e){e.value.focus()}function s(e,n,t){return e.length?n.filter((function(n){return n[t].toLowerCase().includes(e.toLowerCase())})):n}function l(e){return/^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/.test(e)}function u(e,n){return e+" "+n}},140:(e,n,t)=>{t.r(n),t.d(n,{default:()=>we});var r=t(821),o=t(9285),a=t(2770),i=t(4041),s=t(1293),l=t(1694),u=t(1682),c=t(2306),p=t(621),d=t(9323),f={class:"container"},m={class:"row"},g={class:"col-md-10 mx-auto"},y={class:"form-wrapper"},v={key:0},h={key:1},b={class:"text-center"},_=(0,r.Uk)("Sign out"),w={key:2},k={key:3},S={key:0},F=(0,r._)("h5",{class:"text-center mb-3"},"External visitors only",-1),x=(0,r._)("p",{class:"text-center small mb-5"}," Please note, all fields marked with a * are required ",-1),I=["onSubmit"],O={class:"row"},D={class:"col-md-6"},C={class:"form-group"},E=(0,r._)("label",{class:"form-label",for:"fname"},"First name *",-1),U={key:0,class:"text-danger small"},j={class:"form-group"},T=(0,r._)("label",{class:"form-label",for:"lname"},"Last name *",-1),q={key:0,class:"text-danger small"},R={class:"form-group"},H=(0,r._)("label",{class:"form-label",for:"phone"},"Phone *",-1),L={key:0,class:"text-danger small"},W={class:"form-group"},P=(0,r._)("label",{class:"form-label",for:"badge"},"Badge * ",-1),Z=(0,r._)("div",{class:"badge-img-wrapper"},[(0,r._)("img",{class:"badge-img",src:"/imgs/badge.jpg",alt:"badge"})],-1),M={key:0,class:"text-danger small"},z={class:"col-md-6"},N={class:"form-group"},Y=(0,r._)("label",{class:"form-label",for:"reason"},"Reason *",-1),B={key:0,class:"text-danger small"},V={class:"input-group"},K={class:"input-group-append"},G={key:1,class:"quick-outer-wrapper"},A={key:0},$=(0,r._)("p",{class:"small"},"Quick reason",-1),J={class:"quick-wrapper pb-2"},Q=["onClick"],X={class:"form-group"},ee=(0,r._)("label",{class:"form-label",for:"company"},"Company",-1),ne=(0,r._)("span",{class:"optional"}," (Optional)",-1),te={class:"input-group"},re={class:"input-group-append"},oe={key:0,class:"quick-outer-wrapper"},ae={key:0},ie=(0,r._)("p",{class:"small"},"Quick company",-1),se={class:"quick-wrapper pb-2"},le=["onClick"],ue={class:"form-group"},ce={class:"form-label",for:"visiting"},pe={class:"optional"},de={key:0,class:"selected-visitor-p"},fe={class:"pr-3"},me={key:1},ge={class:"text-center col-md-12"},ye={key:0,class:"text-danger small"},ve={for:"code1000",class:"check-box-container"},he=(0,r._)("span",{class:"induction-text"},[(0,r.Uk)("I have received "),(0,r._)("strong",null,"site induction"),(0,r.Uk)(", read and understood "),(0,r._)("strong",null,"code 1000"),(0,r.Uk)(" evacuation process *")],-1),be={class:"pt-3 text-center"},_e=(0,r.Uk)("Submit");const we={name:"ExtVisitorSignIn",props:{errors:Object,respondsMsg:String,companyResult:{type:Object,default:[]},reasonResult:{type:Object,default:[]}},setup:function(e){var n=e,t=(0,r.iH)(!1),we=(0,r.iH)(null),ke=(0,r.iH)(!1),Se=(0,r.qj)({signInForm:{first_name:"",last_name:"",phone:"",badge:"",company:"",reason:"",visiting:"",code1000:ke,myhouse:"",action:"ext"},signInFormError:{first_name_err:"",last_name_err:"",phone_err:"",badge_err:"",reason_err:"",code1000_err:""},isReasonOptionDivOpened:!1,isCompanyOptionDivOpened:!1}),Fe=function(e){Se.signInForm.visiting=(0,l.JO)(e.fname,e.lname)},xe=function(){Se.signInForm.visiting=""},Ie=function(e){"reason"==e&&(Se.isCompanyOptionDivOpened=!1,Se.isReasonOptionDivOpened=!Se.isReasonOptionDivOpened),"company"==e&&(Se.isReasonOptionDivOpened=!1,Se.isCompanyOptionDivOpened=!Se.isCompanyOptionDivOpened)},Oe=function(){Se.isReasonOptionDivOpened&&(Se.isReasonOptionDivOpened=!1),Se.isCompanyOptionDivOpened&&(Se.isCompanyOptionDivOpened=!1)},De=function(e){switch(e){case"fname":Se.signInFormError.first_name_err="";break;case"lname":Se.signInFormError.last_name_err="";break;case"phone":Se.signInFormError.phone_err="";break;case"badge":Se.signInFormError.badge_err="";break;case"reason":Se.signInFormError.reason_err="",Oe();break;case"company":Oe()}},Ce=function(e){Se.signInForm.company=e,Oe()},Ee=function(e){Se.signInForm.reason=e,Se.signInFormError.reason_err="",Oe()},Ue=function(){var e=!1;""==Se.signInForm.first_name&&(e=!0,Se.signInFormError.first_name_err="First name is required"),""==Se.signInForm.last_name&&(e=!0,Se.signInFormError.last_name_err="Last name is required"),""==Se.signInForm.phone&&(e=!0,Se.signInFormError.phone_err="Phone number is required"),(0,l.MM)(Se.signInForm.phone)||(e=!0,Se.signInFormError.phone_err="Phone number is invalid"),""==Se.signInForm.badge&&(e=!0,Se.signInFormError.badge_err="Enter Badge letter or name"),""==Se.signInForm.reason&&(e=!0,Se.signInFormError.reason_err="Reason is required"),ke.value||(e=!0,Se.signInFormError.code1000_err="Tick this box to confirm you've recieved site induction and understand code 1000"),e||o.Nd.post("/handle-visitor-signin",Se.signInForm,{onStart:function(){(0,l.vM)(),setTimeout((function(){t.value=!0}),300)},onSuccess:function(){"code200"==n.respondsMsg&&setTimeout((function(){o.Nd.visit("/")}),1600)},onFinish:function(){t.value=!1},onError:function(e){var n;void 0!==(null==(n=e)?void 0:n.first_name)&&(Se.signInFormError.first_name_err=null==n?void 0:n.first_name),void 0!==n.last_name&&(Se.signInFormError.last_name_err=n.last_name),void 0!==n.phone&&(Se.signInFormError.phone_err=n.phone),void 0!==n.badge&&(Se.signInFormError.badge_err=n.badge),void 0!==n.reason&&(Se.signInFormError.reason_err=n.reason),void 0!==(null==n?void 0:n.code1000)&&(Se.signInFormError.code1000_err=n.code1000)}})};return(0,r.bv)((function(){(0,l.eY)(we)})),(0,r.YP)(ke,(function(e){e&&(Se.signInFormError.code1000_err=""),Se.signInForm.code1000=e})),function(n,o){return(0,r.wg)(),(0,r.j4)((0,r.SU)(a.Z),{pageTitle:"ext-visitor-signin",backUrl:"/sign-in-option"},{default:(0,r.w5)((function(){return[(0,r._)("div",f,[(0,r._)("div",m,[(0,r._)("div",g,[(0,r._)("div",y,[(0,r.SU)(t)&&""==e.respondsMsg?((0,r.wg)(),(0,r.iD)("section",v,[(0,r.Wm)(s.Z)])):(0,r.kq)("",!0),(0,r.SU)(t)||"code000"!=e.respondsMsg?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("section",h,[(0,r.Wm)((0,r.SU)(i.Z),{showHeading:!1,infotype:"error",customClass:"form-responds-msg",msg:"You have already signed in, please sign out first before signing back in thank you!"}),(0,r._)("div",b,[(0,r.Wm)(d.Z,{className:"primary-btn",linkUrl:"/signout"},{default:(0,r.w5)((function(){return[_]})),_:1})])])),(0,r.SU)(t)||"code200"!=e.respondsMsg?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("section",w,[(0,r.Wm)((0,r.SU)(i.Z),{showHeading:!1,infotype:"success",msg:"Sign in successful thank you!",customClass:"form-responds-msg"})])),!(0,r.SU)(t)&&""==e.respondsMsg||"code100"==e.respondsMsg?((0,r.wg)(),(0,r.iD)("section",k,[(0,r.SU)(t)||"code100"!=e.respondsMsg?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",S,[(0,r.Wm)((0,r.SU)(i.Z),{infotype:"error",customHeading:"Error "+e.respondsMsg,msg:(0,r.SU)(l.de)(),customClass:"form-responds-msg"},null,8,["customHeading","msg"])])),F,x,(0,r._)("form",{onSubmit:(0,r.iM)(Ue,["prevent"])},[(0,r._)("div",O,[(0,r._)("div",D,[(0,r._)("div",C,[E,""!=Se.signInFormError.first_name_err?((0,r.wg)(),(0,r.iD)("div",U,(0,r.zw)(Se.signInFormError.first_name_err),1)):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{ref_key:"firstInput",ref:we,"onUpdate:modelValue":o[0]||(o[0]=function(e){return Se.signInForm.first_name=e}),type:"text",class:(0,r.C_)({"form-control":!0,"input-error":""!=Se.signInFormError.first_name_err}),id:"fname",name:"first_name",maxlength:"255",autocomplete:"off",onKeypress:o[1]||(o[1]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"])),onFocus:o[2]||(o[2]=function(){return De("fname")})},null,34),[[r.nr,Se.signInForm.first_name]])]),(0,r._)("div",j,[T,""!=Se.signInFormError.last_name_err?((0,r.wg)(),(0,r.iD)("div",q,(0,r.zw)(Se.signInFormError.last_name_err),1)):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[3]||(o[3]=function(e){return Se.signInForm.last_name=e}),type:"text",class:(0,r.C_)({"form-control":!0,"input-error":""!=Se.signInFormError.last_name_err}),id:"lname",name:"last_name",maxlength:"255",autocomplete:"off",onKeypress:o[4]||(o[4]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"])),onFocus:o[5]||(o[5]=function(){return De("lname")})},null,34),[[r.nr,Se.signInForm.last_name]])]),(0,r._)("div",R,[H,""!=Se.signInFormError.phone_err?((0,r.wg)(),(0,r.iD)("div",L,(0,r.zw)(Se.signInFormError.phone_err),1)):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[6]||(o[6]=function(e){return Se.signInForm.phone=e}),type:"text",class:(0,r.C_)({"form-control":!0,"input-error":""!=Se.signInFormError.phone_err}),id:"phone",name:"phone",maxlength:"11",autocomplete:"off",onKeypress:o[7]||(o[7]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"])),onFocus:o[8]||(o[8]=function(){return De("phone")})},null,34),[[r.nr,Se.signInForm.phone]])]),(0,r._)("div",W,[P,Z,""!=Se.signInFormError.badge_err?((0,r.wg)(),(0,r.iD)("div",M,(0,r.zw)(Se.signInFormError.badge_err),1)):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[9]||(o[9]=function(e){return Se.signInForm.badge=e}),type:"text",class:(0,r.C_)({"form-control":!0,"input-error":""!=Se.signInFormError.badge_err}),id:"badge",name:"badge",maxlength:"255",autocomplete:"off",onKeypress:o[10]||(o[10]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"])),onFocus:o[11]||(o[11]=function(){return De("badge")})},null,34),[[r.nr,Se.signInForm.badge]])])]),(0,r._)("div",z,[(0,r._)("div",N,[Y,""!=Se.signInFormError.reason_err?((0,r.wg)(),(0,r.iD)("div",B,(0,r.zw)(Se.signInFormError.reason_err),1)):(0,r.kq)("",!0),(0,r._)("div",V,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[12]||(o[12]=function(e){return Se.signInForm.reason=e}),type:"text",class:(0,r.C_)({"form-control":!0,"input-error":""!=Se.signInFormError.reason_err}),id:"reason",name:"reason",maxlength:"255",autocomplete:"off",onKeypress:o[13]||(o[13]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"])),onFocus:o[14]||(o[14]=function(){return De("reason")})},null,34),[[r.nr,Se.signInForm.reason]]),(0,r._)("div",K,[(0,r.Wm)((0,r.SU)(u.Z),{btnType:"button",customClass:"option-toggle-btn",btnFunc:function(){return Ie("reason")}},{default:(0,r.w5)((function(){return[(0,r._)("i",{class:(0,r.C_)(Se.isReasonOptionDivOpened?"fas fa-arrow-up":"fas fa-arrow-down")},null,2)]})),_:1},8,["btnFunc"])])]),e.reasonResult.length>0?((0,r.wg)(),(0,r.iD)("div",G,[Se.isReasonOptionDivOpened?((0,r.wg)(),(0,r.iD)("div",A,[(0,r.Wm)(c.Z,{resultObj:e.reasonResult,optionSelected:Se.signInForm.reason,placeHolderText:"Search for reason",onUpdateSelectedOptionInput:Ee},null,8,["resultObj","optionSelected"])])):(0,r.kq)("",!0),$,(0,r._)("div",J,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.reasonResult,(function(e,n){return(0,r.wg)(),(0,r.iD)("span",{key:n},["yes"==e.quick_reason?((0,r.wg)(),(0,r.iD)("span",{key:0,class:(0,r.C_)({"quick-btn":!0,"quick-btn-disabled":Se.signInForm.reason==e.name}),onClick:function(){return Ee(e.name)}},(0,r.zw)(e.name),11,Q)):(0,r.kq)("",!0)])})),128))])])):(0,r.kq)("",!0)]),(0,r._)("div",X,[ee,ne,(0,r._)("div",te,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[15]||(o[15]=function(e){return Se.signInForm.company=e}),type:"text",class:"form-control",id:"company",name:"company",maxlength:"255",autocomplete:"off",onKeypress:o[16]||(o[16]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"])),onFocus:o[17]||(o[17]=function(){return De("company")})},null,544),[[r.nr,Se.signInForm.company]]),(0,r._)("div",re,[(0,r.Wm)((0,r.SU)(u.Z),{btnType:"button",customClass:"option-toggle-btn",btnFunc:function(){return Ie("company")}},{default:(0,r.w5)((function(){return[(0,r._)("i",{class:(0,r.C_)(Se.isCompanyOptionDivOpened?"fas fa-arrow-up":"fas fa-arrow-down")},null,2)]})),_:1},8,["btnFunc"])])]),e.companyResult.length>0?((0,r.wg)(),(0,r.iD)("div",oe,[Se.isCompanyOptionDivOpened?((0,r.wg)(),(0,r.iD)("div",ae,[(0,r.Wm)(c.Z,{resultObj:e.companyResult,optionSelected:Se.signInForm.company,onUpdateSelectedOptionInput:Ce,placeHolderText:"Search for company"},null,8,["resultObj","optionSelected"])])):(0,r.kq)("",!0),ie,(0,r._)("div",se,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.companyResult,(function(e,n){return(0,r.wg)(),(0,r.iD)("span",{key:n},["yes"==e.quick_company?((0,r.wg)(),(0,r.iD)("span",{key:0,class:(0,r.C_)({"quick-btn":!0,"quick-btn-disabled":Se.signInForm.company==e.name}),onClick:function(){return Ce(e.name)}},(0,r.zw)(e.name),11,le)):(0,r.kq)("",!0)])})),128))])])):(0,r.kq)("",!0)]),(0,r._)("div",ue,[(0,r._)("label",ce,(0,r.zw)(""==Se.signInForm.visiting?"Visiting":"You are visiting"),1),(0,r.wy)((0,r._)("span",pe," (Optional)",512),[[r.F8,""==Se.signInForm.visiting]]),""!=Se.signInForm.visiting?((0,r.wg)(),(0,r.iD)("p",de,[(0,r._)("span",fe,(0,r.zw)(Se.signInForm.visiting),1),(0,r._)("span",{class:"change-visitor-btn",onClick:xe}," Change ")])):((0,r.wg)(),(0,r.iD)("div",me,[(0,r.Wm)((0,r.SU)(p.Z),{makeResultAlink:!1,resultFoundTextSingular:"person",resultFoundTextplural:"people",noResultText:"Sorry no one found, try again or you can leave this field empty thank you.",onUpdateSelected:Fe})]))])]),(0,r._)("div",ge,[""!=Se.signInFormError.code1000_err?((0,r.wg)(),(0,r.iD)("div",ye,(0,r.zw)(Se.signInFormError.code1000_err),1)):(0,r.kq)("",!0),(0,r._)("label",ve,[he,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[18]||(o[18]=function(e){return(0,r.dq)(ke)?ke.value=e:ke=e}),type:"checkbox",id:"code1000",name:"code1000",onKeypress:o[19]||(o[19]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"]))},null,544),[[r.e8,(0,r.SU)(ke)]]),(0,r._)("span",{class:(0,r.C_)({checkmark:!0,"input-error":""!=Se.signInFormError.code1000_err})},null,2)])])]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[20]||(o[20]=function(e){return Se.signInForm.myhouse=e}),type:"text",maxlength:"2",name:"myhouse",class:"not_in_my_house",onKeypress:o[21]||(o[21]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"]))},null,544),[[r.nr,Se.signInForm.myhouse]]),(0,r._)("div",be,[(0,r.Wm)((0,r.SU)(u.Z),{btnType:"submit",btnStyle:"primary",customClass:"iv-submit-btn"},{default:(0,r.w5)((function(){return[_e]})),_:1})])],40,I)])):(0,r.kq)("",!0)])])])])]})),_:1})}}}},1682:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(821);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==o(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===o(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=["title","type"];const s={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(e){var n=e,t=(0,r.qj)({defaultClassName:"no-border-radius btn shadow-none "+n.customClass});return function(n,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("button",{title:e.btnTitle,type:e.btnType,class:(0,r.C_)(a({"hide-on-all-screen":e.hideBtn,"btn-full":e.fullBtn,"btn-muted":"muted"===e.btnStyle,"primary-btn":"primary"===e.btnStyle,"btn-primary":"primary2"===e.btnStyle,"btn-danger":"danger"===e.btnStyle,"btn-default":"default"===e.btnStyle,"btn-secondary":"secondary"===e.btnStyle,"btn-success":"success"===e.btnStyle,"btn-warning":"warn"===e.btnStyle},t.defaultClassName,!0)),onClick:o[0]||(o[0]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,r.WI)(n.$slots,"default")],10,i),[[r.F8,!e.noBtnStyle]]),(0,r.wy)((0,r._)("button",{class:(0,r.C_)(null!=e.customClassObj?e.customClassObj:e.customClass),onClick:o[1]||(o[1]=function(){return e.btnFunc&&e.btnFunc.apply(e,arguments)})},[(0,r.WI)(n.$slots,"default")],2),[[r.F8,e.noBtnStyle]])],64)}}}},9323:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(821),o=t(9285),a=["href"];const i={name:"AppLink",props:{linkType:{type:String,default:"int"},className:{type:String,default:""},linkUrl:{type:String,default:"",requred:!0}},setup:function(e){return function(n,t){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("a",{class:(0,r.C_)(e.className),href:e.linkUrl,target:"_blank"},[(0,r.WI)(n.$slots,"default")],10,a),[[r.F8,"ext"===e.linkType]]),(0,r.wy)((0,r.Wm)((0,r.SU)(o.rU),{class:(0,r.C_)(e.className),href:e.linkUrl},{default:(0,r.w5)((function(){return[(0,r.WI)(n.$slots,"default")]})),_:3},8,["class","href"]),[[r.F8,"int"===e.linkType]])],64)}}}},4041:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(821),o=(0,r._)("br",null,null,-1),a=["innerHTML"];const i={name:"HandleMsg",props:{infotype:{type:String,requred:!0},msg:{type:String,requred:!0},customClass:{type:String,default:""},showHeading:{type:Boolean,default:!0},customHeading:{type:String,default:""}},setup:function(e){var n=e,t=(0,r.iH)("no-border-radius alert"),i=(0,r.iH)("");return"success"==n.infotype&&(t.value="".concat(t.value," alert-success text-success"),i.value=""==n.customHeading?"Success!":n.customHeading),"error"==n.infotype&&(t.value="".concat(t.value," alert-danger text-danger"),i.value=""==n.customHeading?"Error!":n.customHeading),"info"==n.infotype&&(t.value="".concat(t.value," alert-secondary"),i.value=""==n.customHeading?"Info!":n.customHeading),function(s,l){return(0,r.wg)(),(0,r.iD)("div",{class:(0,r.C_)((0,r.SU)(t)+" "+e.customClass),"aria-live":"assertive"},[(0,r.wy)((0,r._)("span",null,[(0,r._)("strong",null,(0,r.zw)((0,r.SU)(i)),1),o],512),[[r.F8,e.showHeading]]),(0,r._)("span",{innerHTML:n.msg},null,8,a)],2)}}}},2770:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(821),o=t(9323),a=t(1601),i={class:"container"},s={class:"row"},l={class:"col-md-12 header-wrapper"},u={class:"text-center"},c=(0,r._)("hr",null,null,-1),p={class:"row"},d={class:"col"},f={class:"date-time text-center"},m={class:"col"},g={class:"date-time text-center"},y={key:0,class:"col iv-go-back-btn-wrapper"},v=(0,r._)("i",{class:"fas fa-arrow-left"},null,-1),h=(0,r.Uk)(" Go back "),b=(0,r._)("hr",null,null,-1);const _={name:"Header",props:{backUrl:{type:String,default:""}},setup:function(e){var n=(0,r.qj)({currentDate:"",currentTime:""});return(0,r.bv)((function(){setTimeout((function(){var e;e=new Date,n.currentDate=e.toDateString(),n.currentTime=e.toLocaleTimeString("en-GB").slice(0,5)}),50)})),function(t,_){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",s,[(0,r._)("div",l,[(0,r._)("div",u,[(0,r.Wm)(a.Z),c]),(0,r._)("div",p,[(0,r._)("div",d,[(0,r._)("h5",f," Date: "+(0,r.zw)(n.currentDate),1)]),(0,r._)("div",m,[(0,r._)("h5",g," Time: "+(0,r.zw)(n.currentTime),1)]),""!=e.backUrl?((0,r.wg)(),(0,r.iD)("div",y,[(0,r.Wm)(o.Z,{linkUrl:e.backUrl,className:"iv-go-back-btn primary-btn"},{default:(0,r.w5)((function(){return[v,h]})),_:1},8,["linkUrl"])])):(0,r.kq)("",!0)]),b])])])}}};var w={className:"footer-wrapper"},k=(0,r._)("i",{class:"fa fa-copyright","aria-hidden":"true"},null,-1);const S={name:"Footer",setup:function(e){var n="".concat((new Date).getFullYear()," icblog.com/iv");return function(e,t){return(0,r.wg)(),(0,r.iD)("footer",w,[(0,r._)("div",{class:"container"},[(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-10 mx-auto"},[(0,r._)("p",{class:"text-center"},[k,(0,r.Uk)(" "+(0,r.zw)(n))])])])])])}}};var F=t(9285),x={class:"content-wrapper"};const I={name:"Layout",props:{pageTitle:{type:String,default:""},backUrl:{type:String,default:""}},setup:function(e){return function(n,t){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)((0,r.SU)(F.Fb),null,{default:(0,r.w5)((function(){return[(0,r._)("title",null,"\r\n      "+(0,r.zw)("iv | "+e.pageTitle)+"\r\n    ",1)]})),_:1}),(0,r.Wm)((0,r.SU)(_),{backUrl:e.backUrl},null,8,["backUrl"]),(0,r._)("div",x,[(0,r.WI)(n.$slots,"default")]),(0,r.Wm)((0,r.SU)(S))],64)}}}},1293:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(821),o=[(0,r._)("i",{class:"fas fa-spinner fa-spin"},null,-1)];const a={name:"LoadingIndicator",props:{position:{type:String,default:null},dot:{type:Boolean,default:!1},loaderSize:{type:String,default:"large"},centerLoader:{type:Boolean,default:!0},loaderPSizeClassName:{type:String,default:""}},setup:function(e){var n=e,t=(0,r.iH)(""),a=(0,r.iH)("");return(0,r.bv)((function(){"large"==n.loaderSize&&(a.value="fa-3x"),"med"==n.loaderSize&&(a.value="fa-2x"),"small"==n.loaderSize&&(a.value="fa-1x"),n.centerLoader&&(t.value="loader"),null!==n.position&&"full-page"===n.position&&(t.value="".concat(t.value," full-page-loader")),n.dot&&(t.value="".concat(t.value," loader-dot"))})),function(n,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[e.dot?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,r.C_)((0,r.SU)(t))},[(0,r._)("div",{class:(0,r.C_)((0,r.SU)(a))},"..........",2)],2)):(0,r.kq)("",!0),e.dot?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:1,class:(0,r.C_)((0,r.SU)(t))},[(0,r._)("div",{class:(0,r.C_)((0,r.SU)(a))},o,2),(0,r._)("p",{class:(0,r.C_)(e.loaderPSizeClassName)},"Please wait...",2)],2))],64)}}}},1912:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(821),o=t(1694);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===a(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s={class:"input-group local-search-wrapper"},l=(0,r._)("span",{class:"local-search-icon"},[(0,r._)("i",{class:"fas fa-search"})],-1),u=["placeholder"],c=[(0,r._)("i",{class:"fas fa-times"},null,-1)];const p={name:"LocalSearch",props:{oldResultObj:{type:Object,default:{}},whatToCheck:{type:String,default:"name"},inputPlaceHolderValue:{type:String,default:"Search ...."},inputClass:{type:String,default:""}},emits:["updateResultObj"],setup:function(e,n){var t=n.emit,a=e,p=(0,r.iH)(""),d=function(){p.value=""};return(0,r.YP)(p,(function(e){var n=[];n=""==e?a.oldResultObj:(0,o.Ae)(e,a.oldResultObj,a.whatToCheck),t("updateResultObj",{arrObj:n,newValue:e})})),function(n,t){var o;return(0,r.wg)(),(0,r.iD)("div",s,[l,(0,r.wy)((0,r._)("input",{type:"text",class:(0,r.C_)((o={},i(o,e.inputClass,!0),i(o,"form-control",!0),i(o,"local-search-input",!0),o)),placeholder:e.inputPlaceHolderValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,r.dq)(p)?p.value=e:p=e})},null,10,u),[[r.nr,(0,r.SU)(p)]]),(0,r.SU)(p).length>0?((0,r.wg)(),(0,r.iD)("span",{key:0,class:"local-search-icon-times",onClick:d},c)):(0,r.kq)("",!0)])}}}},1601:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(821),o=t(9323),a={class:"logo-wrapper"},i={class:"iv-logo"},s=(0,r.Uk)("XYZ LTD");const l={name:"Logo",setup:function(e){return function(e,n){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("h1",i,[(0,r.Wm)(o.Z,{linkUrl:"/"},{default:(0,r.w5)((function(){return[s]})),_:1})])])}}}},2306:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(821),o=t(1912),a={class:"option-element-wrapper"},i=["onClick"];const s={name:"OptionElement",props:{resultObj:{type:Object,default:{}},optionSelected:{type:String,default:""},placeHolderText:{type:String,default:"Search ...."}},emits:["updateSelectedOptionInput"],setup:function(e,n){var t=n.emit,s=e,l=(0,r.qj)({filteredResultObject:s.resultObj}),u=function(e){l.filteredResultObject=e.arrObj};return function(n,c){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",null,[(0,r.Wm)(o.Z,{oldResultObj:e.resultObj,whatToCheck:"name",inputPlaceHolderValue:e.placeHolderText,inputClass:"custom-search-input",onUpdateResultObj:u},null,8,["oldResultObj","inputPlaceHolderValue"])]),(0,r._)("div",a,[(0,r._)("ul",null,[l.filteredResultObject.length>0?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(l.filteredResultObject,(function(n,o){return(0,r.wg)(),(0,r.iD)("li",{key:o,class:(0,r.C_)(n.name==e.optionSelected?"option-selected":""),onClick:function(){var e;(e=n.name)!=s.optionSelected&&t("updateSelectedOptionInput",e)}},(0,r.zw)(n.name),11,i)})),128)):(0,r.kq)("",!0)])])],64)}}}},621:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(821),o=t(1694),a=t(1293),i=t(8585),s=t(6486);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(){u=function(){return e};var e={},n=Object.prototype,t=n.hasOwnProperty,r=Object.defineProperty||function(e,n,t){e[n]=t.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(e){c=function(e,n,t){return e[n]=t}}function p(e,n,t,o){var a=n&&n.prototype instanceof m?n:m,i=Object.create(a.prototype),s=new O(o||[]);return r(i,"_invoke",{value:S(e,t,s)}),i}function d(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=p;var f={};function m(){}function g(){}function y(){}var v={};c(v,a,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(D([])));b&&b!==n&&t.call(b,a)&&(v=b);var _=y.prototype=m.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function k(e,n){function o(r,a,i,s){var u=d(e[r],e,a);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==l(p)&&t.call(p,"__await")?n.resolve(p.__await).then((function(e){o("next",e,i,s)}),(function(e){o("throw",e,i,s)})):n.resolve(p).then((function(e){c.value=e,i(c)}),(function(e){return o("throw",e,i,s)}))}s(u.arg)}var a;r(this,"_invoke",{value:function(e,t){function r(){return new n((function(n,r){o(e,t,n,r)}))}return a=a?a.then(r,r):r()}})}function S(e,n,t){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(t.method=o,t.arg=a;;){var i=t.delegate;if(i){var s=F(i,t);if(s){if(s===f)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var l=d(e,n,t);if("normal"===l.type){if(r=t.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:t.done}}"throw"===l.type&&(r="completed",t.method="throw",t.arg=l.arg)}}}function F(e,n){var t=n.method,r=e.iterator[t];if(void 0===r)return n.delegate=null,"throw"===t&&e.iterator.return&&(n.method="return",n.arg=void 0,F(e,n),"throw"===n.method)||"return"!==t&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+t+"' method")),f;var o=d(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function x(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function I(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function D(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(t.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return g.prototype=y,r(_,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:g,configurable:!0}),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},w(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(n,t,r,o,a){void 0===a&&(a=Promise);var i=new k(p(n,t,r,o),a);return e.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(_),c(_,s,"Generator"),c(_,a,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=Object(e),t=[];for(var r in n)t.push(r);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=D,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=t.call(a,"catchLoc"),l=t.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),f},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),I(t),f}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;I(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:D(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),f}},e}function c(e,n,t,r,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void t(e)}s.done?n(l):Promise.resolve(l).then(r,o)}var p={class:"coworker-search-wrapper"},d=["placeholder"],f={class:"co-worker-search-result"},m={className:"text-center number-result-found-p"},g=["onClick"],y={class:"blog-search-result"},v={className:"text-center pt-3"},h={class:"text-center"};const b={name:"coWorkerSearch",props:{focusOnSearchInput:{type:Boolean,default:!1},isSearchOn:{type:Boolean,default:!1},makeResultAlink:{type:Boolean,default:!0},resultFoundTextSingular:{type:String,default:"result"},resultFoundTextplural:{type:String,default:"results"},linkUrl:{type:String,default:""},placeholderText:{type:String,default:"Search ...."},noResultText:{type:String,default:"Sorry no result found, please try again thank you."}},emits:["updateSelected"],setup:function(e,n){var t=n.emit,l=e,b=(0,r.iH)(""),_=(0,r.iH)(null),w=(0,r.qj)({isSearching:!1,isSearchComplete:!1,customErr:"",coWorkerResData:[]}),k=function(){var e,n=(e=u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==n){e.next=17;break}return w.isSearching=!0,w.isSearchComplete&&(w.isSearchComplete=!1),e.prev=3,e.next=6,i.Z.post("/search-coworker",{searchedword:n});case 6:""!=(null==(r=e.sent)||null===(t=r.data)||void 0===t?void 0:t.error)?w.customErr=r.data.error:w.coWorkerResData=null==r||null===(a=r.data)||void 0===a?void 0:a.coWorkerResData,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),w.customErr=(0,o.de)();case 13:return e.prev=13,w.isSearching=!1,w.isSearchComplete=!0,e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[3,10,13,17]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){c(a,r,o,i,s,"next",e)}function s(e){c(a,r,o,i,s,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,r.bv)((function(){l.focusOnSearchInput&&(0,o.eY)(_)})),(0,r.YP)(b,(0,s.debounce)((function(e){k(e)}),400)),function(n,i){return(0,r.wg)(),(0,r.iD)("div",p,[(0,r.wy)((0,r._)("input",{ref_key:"searchInput",ref:_,"onUpdate:modelValue":i[0]||(i[0]=function(e){return(0,r.dq)(b)?b.value=e:b=e}),type:"text",class:"form-control",placeholder:e.placeholderText,maxlength:"255",autocomplete:"off",onKeypress:i[1]||(i[1]=(0,r.D2)((0,r.iM)((function(){}),["prevent"]),["enter"]))},null,40,d),[[r.nr,(0,r.SU)(b)]]),(0,r.wy)((0,r._)("div",f,[(0,r.wy)((0,r._)("section",null,[(0,r.Wm)(a.Z,{loaderSize:"small"})],512),[[r.F8,w.isSearching]]),(0,r.wy)((0,r._)("section",null,[(0,r._)("p",m,(0,r.zw)(w.coWorkerResData.length>1?"("+w.coWorkerResData.length+") "+e.resultFoundTextplural:"("+w.coWorkerResData.length+") "+e.resultFoundTextSingular)+" found ",1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.coWorkerResData,(function(e,n){return(0,r.wg)(),(0,r.iD)("div",{key:n},[(0,r._)("p",{class:"result-entry-p",onClick:function(){return n=e,void(l.makeResultAlink||t("updateSelected",n));var n}},(0,r.zw)((0,r.SU)(o.JO)(e.fname,e.lname)),9,g)])})),128))],512),[[r.F8,w.isSearchComplete&&!w.isSearching&&w.coWorkerResData.length>0]]),(0,r.wy)((0,r._)("section",y,[(0,r._)("div",v,[(0,r._)("p",h,(0,r.zw)(e.noResultText),1)])],512),[[r.F8,w.isSearchComplete&&!w.isSearching&&w.coWorkerResData.length<=0&&""!=(0,r.SU)(b)]])],512),[[r.F8,""!=(0,r.SU)(b)]])])}}}}}]);
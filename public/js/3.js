/*! For license information please see 3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3],{8585:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(9669),o=r.n(n),a="http://127.0.0.1:8000";"remote"===appDataObj.appEnv&&(a="https://iv.icblog.uk");const i=o().create({baseURL:a,withCredentials:!0,headers:{"Content-Type":"application/json"}})},1694:(t,e,r)=>{r.d(e,{Ae:()=>u,JO:()=>l,MM:()=>c,de:()=>n,eY:()=>i,kc:()=>a,vM:()=>o});var n=function(){return"Sorry system error, your request can not be processed please see a member of the security team thank you!"};function o(){window.scrollTo({top:0,left:0,behavior:"smooth"})}function a(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"obj";return"arr"==n?e.filter((function(e){return e!==t})):e.filter((function(e){return e[r]!==t}))}function i(t){t.value.focus()}function u(t,e,r){return t.length?e.filter((function(e){return e[r].toLowerCase().includes(t.toLowerCase())})):e}function c(t){return/^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/.test(t)}function l(t,e){return t+" "+e}},3:(t,e,r)=>{r.r(e),r.d(e,{default:()=>L});var n=r(821),o=r(9285),a=r(1682),i=r(1293),u=r(8585),c=r(1694);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),u=new k(o||[]);return n(i,"_invoke",{value:F(t,r,u)}),i}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function d(){}function h(){}function m(){}var g={};c(g,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(E([])));b&&b!==e&&r.call(b,a)&&(g=b);var w=m.prototype=d.prototype=Object.create(g);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function o(n,a,i,u){var c=y(t[n],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==l(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,u)}))}u(c.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function F(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=_(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=y(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=y(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:h,configurable:!0}),h.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(C.prototype),c(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new C(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(w),c(w,u,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function f(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,u,"next",t)}function u(t){f(a,n,o,i,u,"throw",t)}i(void 0)}))}}var p={class:"form-wrapper"},d={key:0},h={key:1},m=["onSubmit"],g={class:"form-label",for:"category-name"},v=(0,n._)("br",null,null,-1),b={key:0,class:"text-danger bolded small"},w={key:1,class:"text-success bolded"},S={key:2},C={class:"input-group mb-3"},F={class:"input-group-append"},_=(0,n.Uk)("Save"),x={class:"small"};const L={name:"NewCategoryForm",setup:function(t){var e=(0,n.qj)({categoryName:"",isFormProcessing:!1,newCategoryFormErrMsg:"",newCategoryFormSuccessMsg:""}),r=function(){e.newCategoryFormErrMsg=""},l=function(){var t=!1;""==e.categoryName&&(t=!0,e.newCategoryFormErrMsg="*Please enter category name"),t||(e.isFormProcessing=!0,setTimeout(y(s().mark((function t(){var r,n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.post("/admin/create-catgory",{categoryname:e.categoryName});case 3:!0===(null==(n=t.sent)||null===(r=n.data)||void 0===r?void 0:r.outcome)?(e.newCategoryFormSuccessMsg="Category created successfully",e.categoryName="",setTimeout((function(){o.Nd.visit("/admin/categories",{method:"get"})}),500)):e.newCategoryFormErrMsg=null==n||null===(a=n.data)||void 0===a?void 0:a.outcome[0],t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.newCategoryFormErrMsg=(0,c.de)();case 10:return t.prev=10,e.isFormProcessing=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])}))),1e3))};return function(t,o){return(0,n.wg)(),(0,n.iD)("div",p,[e.isFormProcessing?((0,n.wg)(),(0,n.iD)("section",d,[(0,n.Wm)(i.Z)])):(0,n.kq)("",!0),e.isFormProcessing?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("section",h,[(0,n._)("form",{class:"add-category-form",onSubmit:(0,n.iM)(l,["prevent"])},[(0,n._)("label",g,[(0,n.wy)((0,n._)("span",null," Create new category",512),[[n.F8,""==e.newCategoryFormSuccessMsg]]),v,""!=e.newCategoryFormErrMsg?((0,n.wg)(),(0,n.iD)("span",b,(0,n.zw)(e.newCategoryFormErrMsg),1)):""!=e.newCategoryFormSuccessMsg?((0,n.wg)(),(0,n.iD)("span",w,(0,n.zw)(e.newCategoryFormSuccessMsg),1)):((0,n.wg)(),(0,n.iD)("span",S,"Name*"))]),(0,n.wy)((0,n._)("div",C,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=function(t){return e.categoryName=t}),class:"form-control",id:"category-name",onFocus:r},null,544),[[n.nr,e.categoryName]]),(0,n._)("div",F,[(0,n.Wm)(a.Z,{btnType:"submit",customClass:"btn-primary"},{default:(0,n.w5)((function(){return[_]})),_:1})])],512),[[n.F8,""==e.newCategoryFormSuccessMsg]]),(0,n.wy)((0,n._)("p",x," All fields marked with a * are mandatory ",512),[[n.F8,""==e.newCategoryFormSuccessMsg]])],40,m)]))])}}}},1682:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(821);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i=["title","type"];const u={name:"AppButton",props:{noBtnStyle:{type:Boolean,default:!1},btnStyle:{type:String,default:"default"},btnType:{type:String,default:"button"},btnTitle:{type:String,default:""},btnFunc:{type:Function,default:null},fullBtn:{type:Boolean,default:!1},hideBtn:{type:Boolean,default:!1},customClass:{type:String,default:""},customClassObj:{type:Object,default:null}},setup:function(t){var e=t,r=(0,n.qj)({defaultClassName:"no-border-radius btn shadow-none "+e.customClass});return function(e,o){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("button",{title:t.btnTitle,type:t.btnType,class:(0,n.C_)(a({"hide-on-all-screen":t.hideBtn,"btn-full":t.fullBtn,"btn-muted":"muted"===t.btnStyle,"primary-btn":"primary"===t.btnStyle,"btn-primary":"primary2"===t.btnStyle,"btn-danger":"danger"===t.btnStyle,"btn-default":"default"===t.btnStyle,"btn-secondary":"secondary"===t.btnStyle,"btn-success":"success"===t.btnStyle,"btn-warning":"warn"===t.btnStyle},r.defaultClassName,!0)),onClick:o[0]||(o[0]=function(){return t.btnFunc&&t.btnFunc.apply(t,arguments)})},[(0,n.WI)(e.$slots,"default")],10,i),[[n.F8,!t.noBtnStyle]]),(0,n.wy)((0,n._)("button",{class:(0,n.C_)(null!=t.customClassObj?t.customClassObj:t.customClass),onClick:o[1]||(o[1]=function(){return t.btnFunc&&t.btnFunc.apply(t,arguments)})},[(0,n.WI)(e.$slots,"default")],2),[[n.F8,t.noBtnStyle]])],64)}}}},1293:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(821),o=[(0,n._)("i",{class:"fas fa-spinner fa-spin"},null,-1)];const a={name:"LoadingIndicator",props:{position:{type:String,default:null},dot:{type:Boolean,default:!1},loaderSize:{type:String,default:"large"},centerLoader:{type:Boolean,default:!0},loaderPSizeClassName:{type:String,default:""}},setup:function(t){var e=t,r=(0,n.iH)(""),a=(0,n.iH)("");return(0,n.bv)((function(){"large"==e.loaderSize&&(a.value="fa-3x"),"med"==e.loaderSize&&(a.value="fa-2x"),"small"==e.loaderSize&&(a.value="fa-1x"),e.centerLoader&&(r.value="loader"),null!==e.position&&"full-page"===e.position&&(r.value="".concat(r.value," full-page-loader")),e.dot&&(r.value="".concat(r.value," loader-dot"))})),function(e,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[t.dot?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,n.C_)((0,n.SU)(r))},[(0,n._)("div",{class:(0,n.C_)((0,n.SU)(a))},"..........",2)],2)):(0,n.kq)("",!0),t.dot?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",{key:1,class:(0,n.C_)((0,n.SU)(r))},[(0,n._)("div",{class:(0,n.C_)((0,n.SU)(a))},o,2),(0,n._)("p",{class:(0,n.C_)(t.loaderPSizeClassName)},"Please wait...",2)],2))],64)}}}}}]);
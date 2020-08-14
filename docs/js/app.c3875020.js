(function(t){function e(e){for(var r,s,c=e[0],a=e[1],u=e[2],h=0,d=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"106f":function(t,e,n){},4365:function(t,e,n){},"4b0b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._m(0),n("p",[t._v("A fully working, most feature-rich Vue.js terminal emulator.")]),n("vue-command",{attrs:{"autocompletion-resolver":t.autocompletionResolver,"built-in":t.builtIn,commands:t.commands,cursor:t.cursor,history:t.history,"help-timeout":1250,prompt:t.prompt,stdin:t.stdin,"show-help":""},on:{"update:cursor":function(e){t.cursor=e},"update:history":function(e){t.history=e},"update:stdin":function(e){t.stdin=e}}}),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("a",{attrs:{href:"https://github.com/ndabAP/vue-command"}},[t._v("vue-command")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[t._v("      "),n("code",[t._v("\n$ npm i --save vue-command\n      ")]),t._v("\n    ")])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading||t.isError?t._e():n("span",[t._v(t._s(t.joke))]),t.isLoading&&!t.isError?n("span",[t._v("Loading ...")]):t._e(),t.isError?n("span",[t._v("There was an error getting the joke")]):t._e()])},c=[],a=n("a34a"),u=n.n(a);function l(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){l(i,r,o,s,c,"next",t)}function c(t){l(i,r,o,s,c,"throw",t)}s(void 0)}))}}var d="https://api.chucknorris.io/jokes/random",f=5e3,p=new AbortController,m={inject:["terminate"],data:function(){return{isError:!1,isLoading:!0,joke:""}},mounted:function(){var t=this;return h(u.a.mark((function e(){var n,r,o;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return setTimeout((function(){t.isLoading&&p.abort()}),f),e.prev=1,e.next=4,fetch(d,{signal:p.signal});case 4:if(n=e.sent,n.ok){e.next=9;break}return t.setIsError(!0),t.terminate(),e.abrupt("return");case 9:return e.next=11,n.json();case 11:r=e.sent,o=r.value,t.joke=o,e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](1),t.setIsError(!0);case 19:return e.prev=19,t.isLoading=!1,t.terminate(),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[1,16,19,23]])})))()},methods:{setIsError:function(t){this.isError=t}}},v=m,y=n("2877"),b=Object(y["a"])(v,s,c,!1,null,null,null),g=b.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.characters,(function(e,r){return n("span",{key:r,style:{color:t.calculateColor(r)}},[t._v(" "+t._s(e)+" ")])})),n("br"),n("br"),t._v(" Press Ctrl + c to leave. ")],2)},w=[],S=38,k=40,P=67,I=82,_=9,O=["#FF0000","#FF9900","#CCFF00","#33FF00","#00FF66","#00FFFF","#0066FF","#3300FF","#CC00FF","#FF0099"],j=40,$={inject:["terminate"],data:function(){return{characters:"KLIEH",index:0,interval:void 0}},mounted:function(){var t=this;this.interval=setInterval((function(){t.index++}),j),window.addEventListener("keydown",(function(e){e.ctrlKey&&e.keyCode===P&&(clearInterval(t.interval),t.terminate())}),!0)},methods:{calculateColor:function(t){t+=this.index;var e=Math.floor(t/O.length)*O.length;return O[t-e]}}},F=$,E=Object(y["a"])(F,x,w,!1,null,null,null),C=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.context.parsed.help?n("span",[t._v(" Options: "),n("br"),t._v(" --timeout (default: 50)"),n("br"),t._v(" --amount (default: 10) ")]):n("span",[t._v(t._s("#".repeat(t.index)))])},T=[],L={inject:["terminate"],data:function(){return{index:0}},mounted:function(){var t=this;if(this.context.parsed.help)this.terminate();else{var e=this.context.parsed.timeout||50,n=this.context.parsed.amount||10,r=function r(){return setTimeout((function(){t.index++,t.index<n?r():t.terminate()}),e)};r()}}},K=L,H=Object(y["a"])(K,A,T,!1,null,null,null),B=H.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.environment.isExecuting?n("div",[n("textarea",{ref:"nano",attrs:{rows:"15"},on:{keydown:function(e){return(e.type.indexOf("key")||88===e.keyCode)&&e.ctrlKey?t.terminate(e):null}}},[t._v("This is a Nano text editor emulator! Press Ctrl + x to leave.")])]):t._e()},M=[],D={inject:["setIsFullscreen","terminate"],created:function(){this.setIsFullscreen(!0)},mounted:function(){this.$refs.nano.focus()}},q=D,z=(n("d962"),Object(y["a"])(q,N,M,!1,null,"f86bbe98",null)),V=z.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"vue-command",staticClass:"vue-command"},[t._t("bar",[t.hideBar?t._e():n("div",{staticClass:"term-bar"},[t.hideTitle?t._e():n("span",{staticClass:"term-title"},[t._v(" "+t._s(t.title)+" ")])])]),n("div",{ref:"term-std",staticClass:"term-std"},[t.isSearch?n("search",{ref:"search",attrs:{executed:t.local.executed,"is-search":t.isSearch,stdin:t.stdin},on:{"update:isSearch":function(e){t.isSearch=e},"update:is-search":function(e){t.isSearch=e},click:t.focus,handle:t.handle}}):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSearch,expression:"!isSearch"}],ref:"term-cont",staticClass:"term-cont",class:{"term-cont-fullscreen":t.local.isFullscreen},on:{click:t.focus}},[t.showIntro?n("div",[t._v(" "+t._s(t.intro)+" ")]):t._e(),t._l(t.local.history,(function(e,r){return n("div",{key:r,staticClass:"term-hist",class:{"term-hist-fullscreen":t.local.isFullscreen&&r===t.local.history.length-1}},[n("stdout",{directives:[{name:"show",rawName:"v-show",value:!t.local.isFullscreen||r===t.local.history.length-1,expression:"(!local.isFullscreen || index === local.history.length - 1)"}],staticClass:"term-stdout",attrs:{component:e}}),n("stdin",{directives:[{name:"show",rawName:"v-show",value:0===r&&!t.local.isFullscreen||!(r===t.local.history.length-1&&t.local.isInProgress)&&!t.local.isFullscreen,expression:"(index === 0 && !local.isFullscreen) || !(index === local.history.length - 1 && local.isInProgress) && !local.isFullscreen"}],ref:"stdin",refInFor:!0,attrs:{bus:t.bus,cursor:t.local.cursor,"hide-prompt":t.hidePrompt,"is-fullscreen":t.local.isFullscreen,"is-in-progress":t.local.isInProgress,"is-last":r===t.local.history.length-1,prompt:t.prompt,"help-text":t.helpText,"help-timeout":t.helpTimeout,"show-help":t.showHelp,stdin:t.local.stdin,uid:t._uid},on:{"update:stdin":function(e){return t.$set(t.local,"stdin",e)},handle:t.handle},scopedSlots:t._u([{key:"prompt",fn:function(){return[t._t("prompt")]},proxy:!0}],null,!0)})],1)}))],2)],1)],2)},U=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"term-cont",staticClass:"term-cont term-cont-fullscreen",on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.setIsSearch(!1))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.setIsSearch(!1))},function(e){return(e.type.indexOf("key")||67===e.keyCode)&&e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.sigint(e)):null}]}},[n("div",{staticClass:"term-search-container"},[n("span",{staticClass:"term-search"},[t._v(" (reverse-i-search)`"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"input",attrs:{autofocus:"",type:"text",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.handle(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v("': "+t._s(t.command)+" ")])])])},J=[],G={inject:["setStdin"],props:{executed:{required:!0,type:Set},isSearch:{required:!0,type:Boolean},stdin:{required:!0,type:String}},data:function(){return{command:"",search:""}},watch:{search:function(){var t=this;this.executed.forEach((function(e){e.startsWith(t.search)&&(t.command=e,t.setStdin(e))}))}},created:function(){this.command=this.stdin},mounted:function(){function t(){this.style.width="".concat(this.value.length,"ch")}this.focus();var e=this.$refs.input;e.addEventListener("input",t),t.call(e)},methods:{handle:function(){this.$emit("update:isSearch",!1),this.$emit("handle",this.command)},focus:function(){this.$refs.input.focus()},setIsSearch:function(t){this.$emit("update:isSearch",t)},sigint:function(){this.setStdin(""),this.$emit("update:isSearch",!1)}}},Q=G,X=(n("e589"),Object(y["a"])(Q,W,J,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"term-stdin-container"},[t._t("prompt",[t.hidePrompt?t._e():n("span",{staticClass:"term-ps"},[t._v(" "+t._s(t.local.prompt)+" ")])]),n("span",{staticClass:"term-stdin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.local.stdin,expression:"local.stdin"}],ref:"input",attrs:{autofocus:t.isLast,disabled:!t.isLast||t.isInProgress,placeholder:t.placeholder,type:"text",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.local.stdin},on:{click:function(e){return t.setCursor(t.$refs.input.selectionStart)},keyup:[function(e){return t.setCursor(t.$refs.input.selectionStart)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.handle(e)}],input:function(e){e.target.composing||t.$set(t.local,"stdin",e.target.value)}}})])],2)},tt=[];function et(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function nt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){et(i,r,o,s,c,"next",t)}function c(t){et(i,r,o,s,c,"throw",t)}s(void 0)}))}}var rt={inject:["setCursor","setStdin"],props:{bus:{required:!0,type:Object},cursor:{default:0,required:!0,type:Number},helpText:{default:"",type:String},helpTimeout:{default:0,type:Number},hidePrompt:{default:!1,type:Boolean},isInProgress:{default:!1,required:!0,type:Boolean},isLast:{default:!1,required:!0,type:Boolean},isFullscreen:{default:!1,required:!0,type:Boolean},prompt:{default:"",type:String},showHelp:{default:!1,type:Boolean},stdin:{default:"",required:!0,type:String},uid:{required:!0,type:Number}},data:function(){return{placeholder:"",local:{prompt:"",stdin:""}}},watch:{cursor:function(){this.isLast&&this.$refs.input.setSelectionRange(this.cursor,this.cursor)},isInProgress:function(){var t=this;return nt(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isInProgress||!t.isLast){e.next=5;break}return e.next=3,t.$nextTick();case 3:t.scrollIntoView(),t.focus();case 5:case"end":return e.stop()}}),e)})))()},isLast:function(t,e){e&&!t&&this.blur()},stdin:function(){var t=this;return nt(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLast&&!t.isInProgress&&(t.local.stdin=t.stdin),e.next=3,t.$nextTick();case 3:t.setCursor(t.$refs.input.selectionStart);case 4:case"end":return e.stop()}}),e)})))()},"local.stdin":function(){this.$emit("update:stdin",this.local.stdin),this.setCursor(this.$refs.input.selectionStart)}},created:function(){this.local.prompt=this.prompt,this.local.stdin=this.stdin},mounted:function(){var t=this;this.scrollIntoView(),this.focus(),setTimeout((function(){t.isLast&&t.showHelp&&t.setPlaceholder(t.helpText)}),this.helpTimeout)},methods:{handle:function(){this.setPrompt(this.prompt),this.$emit("handle",this.local.stdin),this.setPlaceholder("")},setPlaceholder:function(t){this.placeholder=t},setPrompt:function(t){this.local.prompt=t},blur:function(){this.$refs.input.blur()},focus:function(){this.$refs.input.focus()},scrollIntoView:function(){this.$refs.input.scrollIntoView()}}},ot=rt,it=(n("839b"),Object(y["a"])(ot,Z,tt,!1,null,null,null)),st=it.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.component,{tag:"component"})},at=[],ut={props:{component:{required:!0,type:Object}}},lt=ut,ht=(n("836c"),Object(y["a"])(lt,ct,at,!1,null,null,null)),dt=ht.exports,ft={provide:function(){return{setCursor:this.setCursor}},data:function(){return{local:{cursor:0}}},watch:{cursor:function(){this.local.cursor=this.cursor},"local.cursor":function(){this.$emit("update:cursor",this.local.cursor)}},methods:{autocomplete:function(){"function"===typeof this.autocompletionResolver&&this.autocompletionResolver()},setCursor:function(t){this.local.cursor=t}}},pt=n("ba6f"),mt=n.n(pt);function vt(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function yt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){vt(i,r,o,s,c,"next",t)}function c(t){vt(i,r,o,s,c,"throw",t)}s(void 0)}))}}var bt=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"VueCommandStdout",r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return{name:n,mixins:o,inject:["terminate"],mounted:function(){var t=this;return yt(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.terminate();case 3:case"end":return e.stop()}}),e)})))()},render:function(n){return e?n("span",{},t):n("span",{domProps:{innerHTML:t}})}}},gt=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"VueCommandStderr",r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return{name:n,mixins:o,inject:["terminate"],mounted:function(){var t=this;return yt(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.terminate();case 3:case"end":return e.stop()}}),e)})))()},render:function(n){return e?n("span",{},t):n("span",{domProps:{innerHTML:t}})}}},xt=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"VueCommandDummyStdout",e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return{name:t,mixins:n,inject:["terminate"],mounted:function(){var t=this;return yt(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.terminate();case 3:case"end":return e.stop()}}),e)})))()},render:function(t){return t("span",{},"")}}},wt={autocomplete:function(t){t.$refs["term-cont"].addEventListener("keydown",(function(e){e.keyCode===_&&(e.preventDefault(),t.autocomplete())}))},history:function(t){t.$refs["term-cont"].addEventListener("keydown",(function(e){e.keyCode===S&&(e.preventDefault(),t.decreaseHistory()),e.keyCode===k&&(e.preventDefault(),t.increaseHistory())}))},search:function(t){t.$refs["term-cont"].addEventListener("keydown",(function(e){e.ctrlKey&&e.keyCode===I&&(e.preventDefault(),t.setIsSearchHandler())}))}};function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function kt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(Object(n),!0).forEach((function(e){Pt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function It(t){return $t(t)||jt(t)||Ot(t)||_t()}function _t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ot(t,e){if(t){if("string"===typeof t)return Ft(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ft(t,e):void 0}}function jt(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function $t(t){if(Array.isArray(t))return Ft(t)}function Ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Et(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function Ct(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){Et(i,r,o,s,c,"next",t)}function c(t){Et(i,r,o,s,c,"throw",t)}s(void 0)}))}}var At={provide:function(){return{terminate:this.terminate}},methods:{handle:function(t){var e=this;return Ct(u.a.mark((function n(){var r;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.trim().split(" ")[0],"function"!==typeof e.builtIn[r]){n.next=5;break}return n.next=4,Promise.resolve(e.builtIn[r](t));case 4:return n.abrupt("return");case 5:if("function"!==typeof e.commands[r]){n.next=9;break}return n.next=8,Promise.resolve(e.execute(t));case 8:return n.abrupt("return");case 9:e.commandNotFound(t);case 10:case"end":return n.stop()}}),n)})))()},execute:function(t){var e=this;return Ct(u.a.mark((function n(){var r,o,i,s,c,a,l,h,d,f;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=t.trim(),r=mt()(t.split(" "),e.parserOptions)._[0],o=xt(),i=[],s=[],c=/[^\s"]+|"([^"]*)"/gi;do{s=c.exec(t),null!=s&&i.push(s[1]?s[1]:s[0])}while(null!=s);return a=[],l=!1,i.forEach((function(t,e){l?l=!1:t.endsWith("=")?(a.push(t+i[e+1]),l=!0):a.push(t)})),h=mt()(a,e.parserOptions),n.next=13,Promise.resolve(e.commands[r](h));case 13:o=n.sent,o=e.setupComponent(o,e.local.history.length,h),""!==t&&(d=new Set(e.local.executed),d.delete(t),d.add(t),e.$emit("update:executed",d),e.setExecuted(d)),e.setPointer(e.local.executed.size),f=It(e.local.history),f.push(o),e.emitExecute(),e.setIsInProgress(!0),e.setHistory(f),e.$emit("update:history",It(f));case 23:case"end":return n.stop()}}),n)})))()},commandNotFound:function(t){var e=xt();if(""!==t){e=gt("".concat(t,": ").concat(this.notFound),!0),e=this.setupComponent(e,this.local.history.length);var n=new Set(this.local.executed);n.delete(t),n.add(t),this.$emit("update:executed",n),this.setExecuted(n),this.setPointer(this.local.executed.size)}var r=It(this.local.history);r.push(e),this.emitExecute(),this.setIsInProgress(!0),this.setHistory(r),this.$emit("update:history",It(r))},setupComponent:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t=kt({},t),hasOwnProperty.call(t,"computed")||(t.computed={});var o=this.local.cursor,i=new Set(this.local.executed),s=It(this.local.history),c=this.local.pointer,a=this.local.stdin;return t.computed=kt({environment:function(){return{isExecuting:e.local.isInProgress&&e.local.history.length-1===n,isFullscreen:e.local.isFullscreen,isInProgress:e.local.isInProgress}},context:function(){return{cursor:o,executed:i,history:s,parsed:r,pointer:c,stdin:a}}},t.computed),t},terminate:function(){this.setStdin(""),this.setIsFullscreen(!1),this.$emit("executed"),this.setIsInProgress(!1)}}};function Tt(t){return Bt(t)||Ht(t)||Kt(t)||Lt()}function Lt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Kt(t,e){if(t){if("string"===typeof t)return Nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Nt(t,e):void 0}}function Ht(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function Bt(t){if(Array.isArray(t))return Nt(t)}function Nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Mt={provide:function(){return{setPointer:this.setPointer}},data:function(){return{local:{executed:new Set,history:[],pointer:0}}},watch:{history:function(){this.setHistory(Tt(this.history))},"local.pointer":function(){this.$emit("update:pointer",this.local.pointer)},pointer:function(){this.setPointer(this.pointer)}},methods:{increaseHistory:function(){this.local.pointer<this.local.executed.size-1&&(this.local.pointer++,this.local.stdin=Tt(this.local.executed)[this.local.pointer])},decreaseHistory:function(){this.local.pointer>0&&(this.local.pointer--,this.local.stdin=Tt(this.local.executed)[this.local.pointer])},setExecuted:function(t){this.local.executed=t},setHistory:function(t){this.local.history=t},setPointer:function(t){this.local.pointer=t}}};function Dt(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function qt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){Dt(i,r,o,s,c,"next",t)}function c(t){Dt(i,r,o,s,c,"throw",t)}s(void 0)}))}}var zt={data:function(){return{isSearch:!1}},watch:{isSearch:function(){var t=this;return qt(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isSearch){e.next=6;break}return e.next=3,t.$nextTick();case 3:n=t.$refs.stdin,r=n[t.local.history.length-1],r.focus();case 6:case"end":return e.stop()}}),e)})))()}},methods:{setIsSearchHandler:function(){this.isInProgress||this.setIsSearch(!0)},setIsSearch:function(t){this.isSearch=t}}},Vt={provide:function(){return{setIsFullscreen:this.setIsFullscreen,setIsInProgress:this.setIsInProgress}},data:function(){return{local:{isFullscreen:!1,isInProgress:!1}}},watch:{isFullscreen:function(){this.setIsFullscreen(this.isFullscreen)},isInProgress:function(){this.setIsInProgress(this.isInProgress)},"local.isFullscreen":function(){this.$emit("update:isFullscreen",this.local.isFullscreen)},"local.isInProgress":function(){this.$emit("update:isInProgress",this.local.isInProgress)}},methods:{setIsFullscreen:function(t){this.local.isFullscreen=t},setIsInProgress:function(t){this.local.isInProgress=t}}};function Rt(t){return Gt(t)||Jt(t)||Wt(t)||Ut()}function Ut(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Wt(t,e){if(t){if("string"===typeof t)return Qt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qt(t,e):void 0}}function Jt(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function Gt(t){if(Array.isArray(t))return Qt(t)}function Qt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Xt(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(r,o)}function Yt(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){Xt(i,r,o,s,c,"next",t)}function c(t){Xt(i,r,o,s,c,"throw",t)}s(void 0)}))}}var Zt=new r["a"],te={components:{Search:Y,Stdin:st,Stdout:dt},mixins:[ft,At,Mt,zt,Vt],provide:function(){return{emitExecute:this.emitExecute,emitExecuted:this.emitExecuted,emitInput:this.emitInput,setStdin:this.setStdin}},props:{autocompletionResolver:{default:void 0,type:Function},builtIn:{default:function(){return{}},type:Object},commands:{default:function(){return{}},type:Object},cursor:{default:0,type:Number},eventListeners:{default:function(){return[wt.autocomplete,wt.history,wt.search]},type:Array},executed:{default:function(){return new Set},type:Set},helpTimeout:{default:4e3,type:Number},hideBar:{default:!1,type:Boolean},hidePrompt:{default:!1,type:Boolean},hideTitle:{default:!1,type:Boolean},helpText:{default:"Type help",type:String},history:{default:function(){return[]},type:Array},intro:{default:"Fasten your seatbelts!",type:String},isFullscreen:{default:!1,type:Boolean},isInProgress:{default:!1,type:Boolean},notFound:{default:"command not found",type:String},parserOptions:{default:function(){return{}},type:Object},pointer:{default:0,type:Number},prompt:{default:"~neil@moon:#/",type:String},showHelp:{default:!1,type:Boolean},showIntro:{default:!1,type:Boolean},stdin:{default:"",type:String},title:{default:"neil@moon: ~",type:String}},data:function(){return{bus:Zt,local:{stdin:""},scroll:{eventListener:void 0,isBottom:!0,resizeObserver:void 0}}},watch:{stdin:function(){this.setStdin(this.stdin)},"local.stdin":function(){this.$emit("input",this.local.stdin),this.$emit("update:stdin",this.local.stdin),""===this.local.stdin&&this.setPointer(this.local.executed.size)}},mounted:function(){var t=this;this.scroll.resizeObserver=new ResizeObserver(function(){var e=Yt(u.a.mark((function e(n){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.scroll.isBottom&&(t.$refs["term-std"].scrollTop=t.$refs["term-std"].scrollHeight);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.scroll.resizeObserver.observe(this.$refs["term-cont"]),this.scroll.eventListener=function(){var e=t.$refs["term-std"];t.scroll.isBottom=e.scrollHeight-e.scrollTop-e.clientHeight===0},this.$refs["term-std"].addEventListener("scroll",this.scroll.eventListener),this.eventListeners.forEach((function(e){return e(t)}))},created:function(){this.executed.add=function(){for(var t,e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];(t=this.local.executed).add.apply(t,r),(e=Object.getPrototypeOf(this).add).call.apply(e,[this].concat(r))},this.executed.clear=function(){this.local.executed.clear(),Object.getPrototypeOf(this).add.call(this)},this.executed.delete=function(){for(var t,e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];(t=this.local.executed).delete.apply(t,r),(e=Object.getPrototypeOf(this).delete).call.apply(e,[this].concat(r))},this.setCursor(this.cursor),this.setPointer(this.pointer),this.setStdin(this.stdin),this.setIsInProgress(this.isInProgress),this.setIsFullscreen(this.isFullscreen);var t=Rt(this.history);0===t.length&&(t.push({name:"VueCommandDummyStdout",render:function(t){return t("span",{},"")}}),this.$emit("update:history",Rt(t))),this.setHistory(Rt(t))},methods:{emitInput:function(t){this.$emit("input",t)},emitExecute:function(){this.$emit("execute")},emitExecuted:function(){this.$emit("executed")},focus:function(){if(this.isSearch)this.$refs.search.focus();else{var t=this.$refs.stdin[this.local.history.length-1];t.focus()}},setStdin:function(t){this.local.stdin=t}}},ee=te,ne=(n("590b"),Object(y["a"])(ee,R,U,!1,null,null,null)),re=ne.exports;function oe(t){return ae(t)||ce(t)||se(t)||ie()}function ie(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function se(t,e){if(t){if("string"===typeof t)return ue(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(t,e):void 0}}function ce(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function ae(t){if(Array.isArray(t))return ue(t)}function ue(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var le="~neil@moon:#/",he={components:{VueCommand:re},data:function(){return{autocompletionResolver:function(){},builtIn:{},commands:{cd:void 0,clear:void 0,echo:function(t){return bt(JSON.stringify(t,null,2))},help:function(){return bt("Available programms:<br><br>\n        &nbsp;cd [dir]<br>\n        &nbsp;clear<br>\n        &nbsp;echo<br>\n        &nbsp;hello-world<br>\n        &nbsp;klieh<br>\n        &nbsp;loading [--amount n] [--timeout n]<br>\n        &nbsp;nano<br>\n        &nbsp;norris<br>\n        &nbsp;pokedex pokemon --color<br>\n        &nbsp;pwd<br>\n        &nbsp;reverse text<br>\n      ")},"hello-world":function(){return bt("Hello world")},klieh:function(){return C},loading:function(){return B},nano:function(){return V},norris:function(){return g},pokedex:function(t){var e=t.color,n=t._;return e&&"pikachu"===n[1]?bt("yellow"):gt("Usage: pokedex pokemon [option | -h]<br><br>\n\n          Example: pokedex pikachu --color\n        ")},pwd:function(){}},cursor:0,history:[],options:{long:{pokedex:["color"],loading:["amount","timeout"]},short:{pokedex:["h"]}},prompt:le,stdin:""}},created:function(){var t=this;this.commands.clear=function(){return t.history=[],xt()},this.commands.cd=function(e){var n=e._;return"home"!==n[1]&&"home/"!==n[1]||t.prompt!==le?"../"!==n[1]&&".."!==n[1]||t.prompt!=="".concat(le,"home")?"."===n[1]||"./"===n[1]||"undefined"===typeof n[1]?xt():gt("cd: ".concat(n[1],": No such file or directory")):(t.prompt=le,xt()):(t.prompt="".concat(le,"home"),xt())},this.commands.pwd=function(){return"~neil@moon:#/"===t.prompt?bt("/"):bt("/home")},this.builtIn.reverse=function(e){e=e.trim();var n=e.split(" ").slice(1).join(" ").replace(/"/g,"");n&&(t.stdin=n.split("").reverse().join(""))},this.autocompletionResolver=function(){var e=t.cursor,n=t.cursor,r="";while(" "!==t.stdin[n-1]&&n-1>0)n--,r="".concat(t.stdin[n]).concat(r);var o=t.stdin.split(" ");if(1!==o.length){if(""===t.stdin[e]||" "===t.stdin[e]||"undefined"===typeof t.stdin[e]){var i=o[0];if("undefined"!==typeof t.options.long[i]||"undefined"!==typeof t.options.short[i])if("--"!==r.substring(0,2)){if("-"===r.substring(0,1)){var s=[];if(t.options.short[i].forEach((function(t){("-".concat(t).startsWith(r)||"-"===r)&&s.push(t)})),1===s.length){var c="".concat(t.stdin.substring(0,n-1)," -").concat(s[0]),a="".concat(t.stdin.substring(t.cursor)),u=t.$watch((function(){return t.cursor}),(function(){t.cursor=e+(s[0].length-r.length+1),u()}));return void(t.stdin="".concat(c).concat(a))}("-"===r||s.length>1)&&t.history.push({render:function(t){for(var e=s.length<5?s.length:4,n=s.length<5?1:Math.ceil(s.length/e),r=0,o=[],i=0;i<n;i++){for(var c=[],a=0;a<e;a++)c.push(t("td","-".concat(s[r]))),r++;o.push(t("tr",[c]))}return t("table",{style:{width:"100%"}},[o])}})}}else{var l=[];if(t.options.long[i].forEach((function(t){("--".concat(t).startsWith(r)||"--"===r)&&l.push(t)})),1===l.length){var h="".concat(t.stdin.substring(0,n-1)," --").concat(l[0]),d="".concat(t.stdin.substring(t.cursor)),f=t.$watch((function(){return t.cursor}),(function(){t.cursor=e+(l[0].length-r.length+2),f()}));return void(t.stdin="".concat(h).concat(d))}("--"===r||l.length>1)&&t.history.push({render:function(t){for(var e=l.length<5?l.length:4,n=l.length<5?1:Math.ceil(l.length/e),r=0,o=[],i=0;i<n;i++){for(var s=[],c=0;c<e;c++)s.push(t("td","--".concat(l[r]))),r++;o.push(t("tr",[s]))}return t("table",{style:{width:"100%"}},[o])}})}}}else{var p=o[0],m=[],v=[].concat(oe(Object.keys(t.commands)),oe(Object.keys(t.builtIn))).sort();if(v.forEach((function(t){t.startsWith(p)&&m.push(t)})),""!==t.stdin&&m.length>1&&t.history.push({render:function(t){for(var e=m.length<5?m.length:4,n=m.length<5?1:Math.ceil(m.length/e),r=0,o=[],i=0;i<n;i++){for(var s=[],c=0;c<e;c++)s.push(t("td",m[r])),r++;o.push(t("tr",[s]))}return t("table",{style:{width:"100%"}},[o])}}),1===m.length){var y=t.$watch((function(){return t.cursor}),(function(){t.cursor=e+(m[0].length-r.length+0),y()}));t.stdin=m[0]}}}}},de=he,fe=(n("859e"),Object(y["a"])(de,o,i,!1,null,null,null)),pe=fe.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(pe)}}).$mount("#app")},"590b":function(t,e,n){"use strict";var r=n("acc8"),o=n.n(r);o.a},"836c":function(t,e,n){"use strict";var r=n("b50a"),o=n.n(r);o.a},"839b":function(t,e,n){"use strict";var r=n("106f"),o=n.n(r);o.a},"859e":function(t,e,n){"use strict";var r=n("dff8"),o=n.n(r);o.a},acc8:function(t,e,n){},b50a:function(t,e,n){},d962:function(t,e,n){"use strict";var r=n("4b0b"),o=n.n(r);o.a},dff8:function(t,e,n){},e589:function(t,e,n){"use strict";var r=n("4365"),o=n.n(r);o.a}});
//# sourceMappingURL=app.c3875020.js.map
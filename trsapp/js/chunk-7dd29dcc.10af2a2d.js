(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dd29dcc"],{"2a29":function(e,t,n){},"6ba6":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("7a23");function a(e){var t=Object(r["l"])(e,null);if(t){var n=Object(r["j"])(),{link:a,unlink:c,internalChildren:i}=t;a(n),Object(r["v"])(()=>c(n));var o=Object(r["d"])(()=>i.indexOf(n));return{parent:t,index:o}}return{parent:null,index:Object(r["B"])(-1)}}},"7cb2":function(e,t,n){"use strict";n("2a29")},"7e3e":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("8da3"),a=n("db17");function c(e){var{interceptor:t,args:n,done:c,canceled:i}=e;if(t){var o=t.apply(null,n||[]);Object(r["f"])(o)?o.then(e=>{e?c():i&&i()}).catch(a["d"]):o?c():i&&i()}else c()}},"8c53":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("7a23");function a(e){return e===window}function c(e,t){return{top:0,left:0,right:e,bottom:t,width:e,height:t}}var i=e=>{var t=Object(r["J"])(e);if(a(t)){var n=t.innerWidth,i=t.innerHeight;return c(n,i)}return t&&t.getBoundingClientRect?t.getBoundingClientRect():c(0,0)}},9261:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["O"])("data-v-60d7cba6");Object(r["z"])("data-v-60d7cba6");var c={class:"wrapper"},i=Object(r["g"])("首页"),o=Object(r["g"])("随手拍"),u=Object(r["g"])("举报"),l=Object(r["g"])("我的");Object(r["x"])();var d=a((function(e,t,n,d,b,s){var f=Object(r["E"])("router-view"),v=Object(r["E"])("TabbarItem"),h=Object(r["E"])("Tabbar");return Object(r["w"])(),Object(r["f"])("div",c,[Object(r["h"])(f),Object(r["h"])(h,{modelValue:d.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.active=e}),class:"footer",onChange:d.onChange},{default:a((function(){return[Object(r["h"])(v,{icon:"home-o"},{default:a((function(){return[i]})),_:1}),Object(r["h"])(v,{icon:"search"},{default:a((function(){return[o]})),_:1}),Object(r["h"])(v,{icon:"add-o"},{default:a((function(){return[u]})),_:1}),Object(r["h"])(v,{icon:"friends-o"},{default:a((function(){return[l]})),_:1})]})),_:1},8,["modelValue","onChange"])])})),b=(n("68ef"),n("cb51"),n("3743"),n("9312"),n("ae73"),n("c199")),s=n("d282"),f=n("db17"),v=n("8da3"),h=n("ea8e"),p=n("b1d2"),O=n("7e3e"),j=n("a6cd"),m=n("f9ae"),[g,x]=Object(s["a"])("tabbar"),k={route:Boolean,fixed:f["f"],border:f["f"],zIndex:[Number,String],placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:{type:[Number,String],default:0},safeAreaInsetBottom:{type:Boolean,default:null}},C=Symbol(g),y=Object(r["i"])({name:g,props:k,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){var a=Object(r["B"])(),{linkChildren:c}=Object(j["a"])(C),i=Object(m["a"])(a,x),o=()=>{var t;return!(null!=(t=e.safeAreaInsetBottom)?t:e.fixed)},u=()=>{var{fixed:t,zIndex:c,border:i}=e;return Object(r["h"])("div",{ref:a,style:Object(h["c"])(c),class:[x({unfit:o(),fixed:t}),{[p["c"]]:i}]},[null==n.default?void 0:n.default()])},l=n=>{n!==e.modelValue&&Object(O["a"])({interceptor:e.beforeChange,args:[n],done(){t("update:modelValue",n),t("change",n)}})};return c({props:e,setActive:l}),()=>e.fixed&&e.placeholder?i(u):u()}}),w=n("6ba6"),B=n("b070"),S=n("ad06"),A=n("471a"),[V,I]=Object(s["a"])("tabbar-item"),T=Object(r["i"])({name:V,props:Object(f["a"])({},B["b"],{dot:Boolean,icon:String,name:[Number,String],badge:[Number,String],iconPrefix:String}),emits:["click"],setup(e,{emit:t,slots:n}){var a=Object(B["c"])(),c=Object(r["j"])().proxy,{parent:i,index:o}=Object(w["a"])(C);if(i){var u=Object(r["d"])(()=>{var{route:t,modelValue:n}=i.props;if(t&&"$route"in c){var{$route:r}=c,{to:a}=e,u=Object(v["e"])(a)?a:{path:a},l="path"in u&&u.path===r.path,d="name"in u&&u.name===r.name;return l||d}return(e.name||o.value)===n}),l=n=>{var r;i.setActive(null!=(r=e.name)?r:o.value),t("click",n),a()},d=()=>n.icon?n.icon({active:u.value}):e.icon?Object(r["h"])(S["a"],{name:e.icon,classPrefix:e.iconPrefix},null):void 0;return()=>{var{dot:t,badge:a}=e,{activeColor:c,inactiveColor:o}=i.props,b=u.value?c:o;return Object(r["h"])("div",{class:I({active:u.value}),style:{color:b},onClick:l},[Object(r["h"])(A["a"],{dot:t,content:a,class:I("icon")},{default:()=>[d()]}),Object(r["h"])("div",{class:I("text")},[null==n.default?void 0:n.default({active:u.value})])])}}}}),_=Object(b["a"])(T),E=_,N=Object(b["a"])(y),$=N,z=n("6c02"),J={name:"index",setup:function(){var e=Object(r["B"])(0),t=location.hash;switch(t){case"#/home":e.value=0;break;case"#/clap":e.value=1;break;case"#/report":e.value=2;break;case"#/mine":e.value=3;break;default:e.value=0}var n=Object(z["c"])(),a=function(e){switch(e){case 0:n.push("/home");break;case 1:n.push("/clap");break;case 2:n.push("/report");break;case 3:n.push("/mine");break}};return{active:e,onChange:a}},components:{Tabbar:$,TabbarItem:E},methods:{change:function(){this.$router.push("/clap")}}};n("7cb2");J.render=d,J.__scopeId="data-v-60d7cba6";t["default"]=J},9312:function(e,t,n){},a6cd:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("7a23");function a(e){var t=[],n=e=>{Array.isArray(e)&&e.forEach(e=>{var a;Object(r["n"])(e)&&(t.push(e),null!=(a=e.component)&&a.subTree&&n(e.component.subTree.children),e.children&&n(e.children))})};return n(e),t}function c(e,t,n){var r=a(e.subTree.children);n.sort((e,t)=>r.indexOf(e.vnode)-r.indexOf(t.vnode));var c=n.map(e=>e.proxy);t.sort((e,t)=>{var n=c.indexOf(e),r=c.indexOf(t);return n-r})}function i(e){var t=Object(r["A"])([]),n=Object(r["A"])([]),a=Object(r["j"])(),i=i=>{var o=e=>{e.proxy&&(n.push(e),t.push(e.proxy),c(a,t,n))},u=e=>{var r=n.indexOf(e);t.splice(r,1),n.splice(r,1)};Object(r["y"])(e,Object.assign({link:o,unlink:u,children:t,internalChildren:n},i))};return{children:t,linkChildren:i}}},ae73:function(e,t,n){},b070:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n("7a23"),a={to:[String,Object],url:String,replace:Boolean};function c(e){var t=e.$router,{to:n,url:r,replace:a}=e;n&&t?t[a?"replace":"push"](n):r&&(a?location.replace(r):location.href=r)}function i(){var e=Object(r["j"])().proxy;return()=>c(e)}},b1d2:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var r="van-hairline",a=r+"--bottom",c=r+"--surround",i=r+"--top-bottom"},f9ae:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("7a23"),a=n("8c53"),c=e=>{var t=Object(r["B"])();return Object(r["u"])(()=>{Object(r["p"])(()=>{t.value=Object(a["a"])(e).height})}),t};function i(e,t){var n=c(e);return e=>Object(r["h"])("div",{class:t("placeholder"),style:{height:n.value?n.value+"px":void 0}},[e()])}}}]);
//# sourceMappingURL=chunk-7dd29dcc.10af2a2d.js.map
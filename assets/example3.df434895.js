import{M as t}from"./index.es.8c361d4d.js";import{_ as n}from"./index.98687fd8.js";import{e as i,B as a,C as c,j as l,l as r,o as d,k as u,m as p,t as m}from"./vendor.35d0f4de.js";const f=i({directives:{MouseMenu:t},setup(){return a(()=>{var o;const e=document.createElement("link");e.id="fontawesomeCDN",e.rel="stylesheet",e.type="text/css",e.href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css",(o=document.querySelector("head"))==null||o.appendChild(e)}),c(()=>{var o;const e=document.querySelector("#fontawesomeCDN");(o=e==null?void 0:e.parentNode)==null||o.removeChild(e)}),{isMobile:"ontouchstart"in window,options:{useLongPressInMobile:!0,hasIcon:!0,iconType:"font-icon",menuList:[{label:"\u6253\u5F00",tips:"Open",icon:"fas fa-folder-open",fn:(...e)=>console.log("open",e)},{label:"\u7F16\u8F91",tips:"Edit",icon:"fas fa-pencil-alt",fn:(...e)=>console.log("edit",e)},{label:"\u5220\u9664",tips:"Delete",icon:"fas fa-trash-alt",fn:(...e)=>console.log("delete",e)},{label:"\u91CD\u547D\u540D",tips:"Rename",fn:(...e)=>console.log("rename",e)}]}}}}),_={class:"box"},h={class:"text"};function v(e,o,b,x,D,g){const s=l("mouse-menu");return r((d(),u("div",_,[p("p",h,m(e.isMobile?"Long press this box":"Right click this box")+". ",1)],512)),[[s,e.options]])}var w=n(f,[["render",v],["__scopeId","data-v-77342d2c"]]);export{w as default};

import{M as e}from"./index.es.3aa14f92.js";import{d as s,j as t,k as a,c as d,F as i,m as n,w as l,p as o,b as u,o as c,a as b,t as r,n as p}from"./index.64ab2d53.js";var m=s({directives:{MouseMenu:e},setup:()=>({options:{menuHiddenFn:(e,s)=>{var t;return!(s.getAttribute("class")&&(null==(t=s.getAttribute("class"))?void 0:t.includes("box-listitem")))},menuList:[{label:(e,s)=>`#${s.getAttribute("data-id")}`,disabled:!0},{label:"打开",tips:"Open",fn:(...e)=>console.log("open",e),hidden:(e,s)=>["1","5","9"].includes(s.getAttribute("data-id"))},{label:"编辑",tips:"Edit",fn:(...e)=>console.log("edit",e),disabled:(e,s)=>["2","4","6"].includes(s.getAttribute("data-id"))},{label:"删除",tips:"Delete",fn:(...e)=>console.log("delete",e)},{label:"重命名",tips:"Rename",fn:(...e)=>console.log("rename",e)}]}})});const g=l();o("data-v-db1999d4");const f={class:"box"},v={class:"text"},x={key:0},A={key:1};u();const k=g(((e,s,l,o,u,m)=>{const g=t("mouse-menu");return a((c(),d("div",f,[(c(),d(i,null,n(9,(e=>b("div",{key:e,class:"box-listitem","data-id":e},[b("p",v,[b("span",null,r(e),1),[1,5,9].includes(e)?(c(),d("span",x,", Hidden Open")):p("",!0),[2,4,6].includes(e)?(c(),d("span",A,", Disabled Edit")):p("",!0)])],8,["data-id"]))),64))],512)),[[g,e.options]])}));m.render=k,m.__scopeId="data-v-db1999d4";export default m;

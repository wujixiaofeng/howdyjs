import{R as n}from"./index.es.73909a92.js";import{_ as c}from"./index.3788756d.js";import{e as p,g as l,j as _,o,k as r,m as t,l as v,y as h,z}from"./vendor.70dbb883.js";const f=p({directives:{resize:n},setup(){const e=l();return{resize:e,options:{},handleResizeX(s){console.log("resizeEvent",s);let i=s.target;s.resizeWidthPercent&&(i.style.width=`${s.resizeWidthPercent}%`,e.value.style.width=`${100-s.resizeWidthPercent}%`)}}}}),u=e=>(h("data-v-2497d868"),e=e(),z(),e),m={class:"page"},x={class:"wrapper"},R=u(()=>t("p",{class:"text"}," Set this box default resize ",-1)),$=[R],b={ref:"resize",class:"box2"};function g(e,s,i,w,y,j){const a=_("resize");return o(),r("div",m,[t("div",x,[v((o(),r("div",{class:"box1",onResize:s[0]||(s[0]=(...d)=>e.handleResizeX&&e.handleResizeX(...d))},$,32)),[[a,e.options]]),t("div",b,null,512)])])}var B=c(f,[["render",g],["__scopeId","data-v-2497d868"]]);export{B as default};

import{R as d}from"./index.es.73909a92.js";import{_ as a}from"./index.98687fd8.js";import{e as n,g as c,j as p,o as l,k as _,m as t,l as v,y as h,z}from"./vendor.35d0f4de.js";const f=n({directives:{resize:d},setup(){const e=c();return{resize:e,options:{},handleResizeX(s){console.log("resizeEvent",s);let i=s.target;s.resizeWidthPercent&&(i.style.width=`${s.resizeWidthPercent}%`,e.value.style.width=`${100-s.resizeWidthPercent}%`)}}}}),u=e=>(h("data-v-2497d868"),e=e(),z(),e),m={class:"page"},x={class:"wrapper"},R=u(()=>t("p",{class:"text"}," Set this box default resize ",-1)),$=[R],g={ref:"resize",class:"box2"};function w(e,s,i,y,j,I){const o=p("resize");return l(),_("div",m,[t("div",x,[v(t("div",{class:"box1",onResize:s[0]||(s[0]=(...r)=>e.handleResizeX&&e.handleResizeX(...r))},$,544),[[o,e.options]]),t("div",g,null,512)])])}var B=a(f,[["render",w],["__scopeId","data-v-2497d868"]]);export{B as default};

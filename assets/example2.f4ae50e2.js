import{S as e}from"./index.es.e2cb0136.js";import{_ as s}from"./index.0fcc9bbb.js";import{e as a,g as t,j as i,o as n,k as o,l as r,m as d,t as c,y as h,z as l}from"./vendor.b64a22de.js";const p=a({directives:{SizeObserver:e},setup(){const e=t("?"),s=t("?");return{width:e,height:s,options:{wait:1e3,immediate:!1},handleSizeChange:a=>{const{contentRect:t}=a,{width:i,height:n}=t;e.value=~~i,s.value=~~n}}}}),m={class:"wrapper"},v=(e=>(h("data-v-7e5366c2"),e=e(),l(),e))((()=>d("p",{class:"tips"}," Delay: 1s, Immediate: false ",-1))),b={class:"text"};var g=s(p,[["render",function(e,s,a,t,h,l){const p=i("size-observer");return n(),o("div",m,[r(d("div",{class:"box",onSizechange:s[0]||(s[0]=(...s)=>e.handleSizeChange&&e.handleSizeChange(...s))},[v,d("p",b,c(e.width)+" × "+c(e.height),1)],544),[[p,e.options]])])}],["__scopeId","data-v-7e5366c2"]]);export{g as default};

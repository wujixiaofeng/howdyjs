import{S as p}from"./index.es-f696db10.js";import{d as l,b as o,_ as v,h as g,o as r,i as c,j as u,k as f,t as d}from"./index-31042b3f.js";const m=l({directives:{SizeObserver:p},setup(){const e=o(0),s=o(0);return{width:e,height:s,handleSizeChange:i=>{const{contentRect:a}=i,{width:n,height:t}=a;e.value=~~n,s.value=~~t}}}});const z={class:"wrapper"},S={class:"text"};function b(e,s,h,i,a,n){const t=g("size-observer");return r(),c("div",z,[u((r(),c("div",{class:"box",onSizechange:s[0]||(s[0]=(..._)=>e.handleSizeChange&&e.handleSizeChange(..._))},[f("p",S,d(e.width)+" × "+d(e.height),1)],32)),[[t]])])}const C=v(m,[["render",b],["__scopeId","data-v-93a3b880"]]);export{C as default};

import{S as e}from"./index.es.24cbc3b0.js";import{e as s,g as a,p as t,j as i,k as n,o,b as r,l as c,m as d,t as h,x as l}from"./vendor.a626f9f4.js";var p=s({directives:{SizeObserver:e},setup(){const e=a("?"),s=a("?");return{width:e,height:s,options:{wait:1e3,immediate:!1},handleSizeChange:a=>{const{contentRect:t}=a,{width:i,height:n}=t;e.value=~~i,s.value=~~n}}}});const v=l();t("data-v-7e5366c2");const m={class:"wrapper"},g=d("p",{class:"tips"}," Delay: 1s, Immediate: false ",-1),b={class:"text"};i();const f=v(((e,s,a,t,i,l)=>{const p=n("size-observer");return o(),r("div",m,[c(d("div",{class:"box",onSizechange:s[1]||(s[1]=(...s)=>e.handleSizeChange&&e.handleSizeChange(...s))},[g,d("p",b,h(e.width)+" × "+h(e.height),1)],544),[[p,e.options]])])}));p.render=f,p.__scopeId="data-v-7e5366c2";export default p;

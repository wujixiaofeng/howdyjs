import{S as e}from"./index.es.4b9c239c.js";import{d as s,f as a,j as t,c as i,k as d,a as n,t as c,w as o,p as r,b as h,o as p}from"./index.f6d1a223.js";import"./tslib.es6.d5acbd82.js";var l=s({directives:{SizeObserver:e},setup(){const e=a("?"),s=a("?");return{width:e,height:s,options:{wait:1e3,immediate:!1},handleSizeChange:a=>{const{contentRect:t}=a,{width:i,height:d}=t;e.value=~~i,s.value=~~d}}}});const v=o("data-v-7e5366c2");r("data-v-7e5366c2");const m={class:"wrapper"},b=n("p",{class:"tips"}," Delay: 1s, Immediate: false ",-1),g={class:"text"};h();const f=v(((e,s,a,o,r,h)=>{const l=t("size-observer");return p(),i("div",m,[d(n("div",{class:"box",onSizechange:s[1]||(s[1]=(...s)=>e.handleSizeChange&&e.handleSizeChange(...s))},[b,n("p",g,c(e.width)+" × "+c(e.height),1)],544),[[l,e.options]])])}));l.render=f,l.__scopeId="data-v-7e5366c2";export default l;

import{s as t}from"./index.es.00afe4ea.js";import{_ as a}from"./index.0fcc9bbb.js";import{e as s,g as e,B as n,r as o,o as r,k as i,x as d,L as b,q as m,A as c,m as f,t as l,n as p}from"./vendor.b64a22de.js";const u=s({components:{StandardTabs:t},setup(){const t=e("100vw"),a=Array.from({length:9},((t,a)=>({name:`测试${a+1}`,slotName:`tab${a+1}`}))),s=e();return n((()=>{t.value=s.value.offsetWidth})),{tabContentWidth:t,tabList:a,container:s}}}),v={ref:"container"};var h=a(u,[["render",function(t,a,s,e,n,u){const h=o("StandardTabs");return r(),i("div",v,[d(h,{"tab-list":t.tabList.map((t=>t.name)),"tab-content-width":t.tabContentWidth,"tab-custom-style":"position:fixed"},b({_:2},[m(t.tabList,(t=>({name:t.slotName,fn:c((()=>[f("div",{class:p(`tab-content ${t.slotName}`)},l(t.name),3)]))})))]),1032,["tab-list","tab-content-width"])],512)}],["__scopeId","data-v-7e1e2314"]]);export{h as default};

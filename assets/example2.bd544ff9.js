import{s as i}from"./index.es.2caff25d.js";import{_}from"./index.3788756d.js";import{e as c,g as o,B as l,r as p,o as m,k as u,x as f,L as b,q as v,A as h,m as x,t as y,n as $}from"./vendor.70dbb883.js";const B=c({components:{StandardTabs:i},setup(){const t=o("100vw"),n=Array.from({length:9},(r,s)=>({name:`\u6D4B\u8BD5${s+1}`,slotName:`tab${s+1}`})),a=o();return l(()=>{t.value=a.value.offsetWidth}),{tabContentWidth:t,tabList:n,container:a}}}),C={ref:"container"};function g(t,n,a,r,s,L){const d=p("StandardTabs");return m(),u("div",C,[f(d,{"tab-list":t.tabList.map(e=>e.name),"tab-content-width":t.tabContentWidth,"tab-custom-style":"position:fixed"},b({_:2},[v(t.tabList,e=>({name:e.slotName,fn:h(()=>[x("div",{class:$(`tab-content ${e.slotName}`)},y(e.name),3)])}))]),1032,["tab-list","tab-content-width"])],512)}var j=_(B,[["render",g],["__scopeId","data-v-7e1e2314"]]);export{j as default};

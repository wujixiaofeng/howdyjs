import{R as z}from"./index.es.73909a92.js";import{_ as f}from"./index.3788756d.js";import{e as v,g as m,j as u,o as n,k as c,m as r,l as p,y as b,z as x,K as d}from"./vendor.70dbb883.js";const $=v({directives:{resize:z},setup(){const t=m();return{resize:t,options:{immediate:!0},handleResizeX(e){let s=e.target;s.style.width=`${e.resizeWidthPercent}%`,e.resizeWidthPercent&&(t.value.style.width=`${100-e.resizeWidthPercent}%`)},handleResizeAll(e){let s=e.target,{direction:o}=e;if(o==="right"){let i=e.resizeWidthPercent;s.style.width=`${i}%`}else if(o==="bottom"){let i=e.resizeHeightPercent;s.style.height=`${i}%`}else if(o==="left"){let{moveOffsetPercent:i,resizeWidthPercent:l}=e;s.style.width=`${l}%`,s.style.left=`${i}%`}else if(o==="top"){let{moveOffsetPercent:i,resizeHeightPercent:l}=e;s.style.height=`${l}%`,s.style.top=`${i}%`}}}}}),_=t=>(b("data-v-cc2ab0be"),t=t(),x(),t),g={class:"page"},y={class:"flex-wrapper"},P=_(()=>r("p",{class:"text"},[d(" Set this box default resize"),r("br"),d("immediate: true ")],-1)),R=[P],w={ref:"resize",class:"box2"},W={class:"outer-box"},S=_(()=>r("p",{class:"text"},[d(" Set this box -> resize:all"),r("br"),d("immediate: true ")],-1)),j=[S];function I(t,e,s,o,i,l){const h=u("resize");return n(),c("div",g,[r("div",y,[p((n(),c("div",{class:"box1",onResize:e[0]||(e[0]=(...a)=>t.handleResizeX&&t.handleResizeX(...a))},R,32)),[[h,t.options]]),r("div",w,null,512)]),r("div",W,[p((n(),c("div",{class:"inner-box",onResize:e[1]||(e[1]=(...a)=>t.handleResizeAll&&t.handleResizeAll(...a))},j,32)),[[h,t.options,"all"]])])])}var D=f($,[["render",I],["__scopeId","data-v-cc2ab0be"]]);export{D as default};

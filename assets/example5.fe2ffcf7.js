import{a as h}from"./index.es.5eac8f7c.js";import{_ as D}from"./index.3788756d.js";import{e as T,g as l,j as y,o as m,k as c,m as t,G as b,l as C,F as E,y as S,z as w,K as B}from"./vendor.70dbb883.js";var R="./images/compass.svg";const F=T({directives:{"to-drag":h},setup(){const e=l(0),o=l();return{rotate:e,compass:o,options:{immediateEvent:!0,forbidBodyScroll:!1},setCompassRotate(r){const{top:d,left:n,width:i,height:a}=o.value.getBoundingClientRect(),s=[n-i/2,d-a/2],{top:u,left:v,width:g,height:_}=r,p=[v-g/2,u-_/2],f=Math.atan2(p[1]-s[1],p[0]-s[0])/Math.PI*180;e.value=f+90},handleToDragStart(){document.body.style.overflow="hidden"},handleToDragEnd(){document.body.style.overflow="visible"}}}}),I=e=>(S("data-v-4d4f08e8"),e=e(),w(),e),$=I(()=>t("div",{class:"text"}," \u8BF7\u62D6\u62FD\u5C4F\u5E55\u4E0A\u7684\u7D2B\u8272\u6D6E\u5757 ",-1)),j={class:"compass-box"},x={ref:"compass",src:R,alt:"compass",class:"compass"},k=B(" DRAG "),P=[k];function z(e,o,r,d,n,i){const a=y("to-drag");return m(),c(E,null,[$,t("div",j,[t("div",{class:"img-wrapper",style:b({transform:`rotate(${e.rotate}deg)`})},[t("img",x,null,512)],4)]),C((m(),c("div",{class:"move-box",onTodraginit:o[0]||(o[0]=(...s)=>e.setCompassRotate&&e.setCompassRotate(...s)),onTodragstart:o[1]||(o[1]=(...s)=>e.handleToDragStart&&e.handleToDragStart(...s)),onTodragmove:o[2]||(o[2]=(...s)=>e.setCompassRotate&&e.setCompassRotate(...s)),onTodragend:o[3]||(o[3]=(...s)=>e.handleToDragEnd&&e.handleToDragEnd(...s))},P,32)),[[a,e.options]])],64)}var N=D(F,[["render",z],["__scopeId","data-v-4d4f08e8"]]);export{N as default};

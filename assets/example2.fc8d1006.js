import{s as a}from"./index.es.c2434140.js";import{b as s}from"./global.947b1fb7.js";import{d as e,f as i,r as o,c as l,a as t,F as n,m as c,w as d,p as r,b as m,o as g,t as f}from"./index.76ddee15.js";import"./tslib.es6.d5acbd82.js";var p=e({components:{AnimationDialog:a},setup(){const a=i(),e=i(0);return{dialog:a,imgList:Array.from({length:9},((a,e)=>`${s}images/img/${e+1}.jpg`)),active:0,handleShowDialog(s,i){e.value=i+1,a.value.open(s.currentTarget)}}}});const v=d("data-v-af540cdc");r("data-v-af540cdc");const u={id:"example"},b={class:"wrapper"},h={class:"dialog-content"};m();const k=v(((a,s,e,i,d,r)=>{const m=o("AnimationDialog");return g(),l("div",u,[t("div",b,[(g(!0),l(n,null,c(a.imgList,((s,e)=>(g(),l("div",{key:e,class:"box",onClick:s=>a.handleShowDialog(s,e)},[t("img",{src:s,alt:"image"},null,8,["src"])],8,["onClick"])))),128)),(g(),l(n,null,c(9,(a=>t("div",{key:"fake"+a,class:"fake"}))),64))]),t(m,{ref:"dialog",class:"an-dialog","open-from-itself":!0,"listen-window-size-change":!0},{default:v((()=>[t("div",h," #"+f(a.active),1)])),_:1},512)])}));p.render=k,p.__scopeId="data-v-af540cdc";export default p;

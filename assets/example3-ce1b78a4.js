import{R as z}from"./index.es-724d9dc0.js";import{d as v,b as r,_ as x,h as g,o as n,i as a,k as i,j as h,s as f,x as R}from"./index-31042b3f.js";const b=v({directives:{resize:z},setup(){const s=r(),o=r(),c=r(),_=r();return{a:s,b:o,c,d:_,options:{},handleResizeX(t){console.log(t);let l=t.target,e=t.resizeWidth;e&&(l.style.width=`${e}px`,s.value.style.width=`${600-e}px`)},handleResizeY(t){console.log(t);let l=t.target,e=t.resizeHeight;e&&(l.style.height=`${e}px`,o.value.style.height=`${400-e}px`)},handleResizeX1(t){console.log(t);let l=t.target,e=t.resizeWidth;e&&(l.style.width=`${e}px`,c.value.style.width=`${600-e}px`)},handleResizeY1(t){console.log(t);let l=t.target,e=t.resizeHeight;e&&(l.style.height=`${e}px`,_.value.style.height=`${400-e}px`)}}}});const p=s=>(f("data-v-21deea62"),s=s(),R(),s),u={class:"page"},y={class:"container"},$={class:"wrapper x"},m=p(()=>i("p",{class:"text"}," Set this box -> resize:right ",-1)),w=[m],S={ref:"a",class:"box2"},X={class:"wrapper y"},Y=p(()=>i("p",{class:"text"}," Set this box -> resize:bottom ",-1)),H=[Y],I={ref:"b",class:"box2"},W={class:"wrapper x"},k={ref:"c",class:"box1"},B=p(()=>i("p",{class:"text"}," Set this box -> resize:left ",-1)),D=[B],j={class:"wrapper y"},C={ref:"d",class:"box1"},E=p(()=>i("p",{class:"text"}," Set this box -> resize:top ",-1)),N=[E];function V(s,o,c,_,t,l){const e=g("resize");return n(),a("div",u,[i("div",y,[i("div",$,[h((n(),a("div",{class:"box1",onResize:o[0]||(o[0]=(...d)=>s.handleResizeX&&s.handleResizeX(...d))},w,32)),[[e,s.options,"right"]]),i("div",S,null,512)]),i("div",X,[h((n(),a("div",{class:"box1",onResize:o[1]||(o[1]=(...d)=>s.handleResizeY&&s.handleResizeY(...d))},H,32)),[[e,s.options,"bottom"]]),i("div",I,null,512)]),i("div",W,[i("div",k,null,512),h((n(),a("div",{class:"box2",onResize:o[2]||(o[2]=(...d)=>s.handleResizeX1&&s.handleResizeX1(...d))},D,32)),[[e,s.options,"left"]])]),i("div",j,[i("div",C,null,512),h((n(),a("div",{class:"box2",onResize:o[3]||(o[3]=(...d)=>s.handleResizeY1&&s.handleResizeY1(...d))},N,32)),[[e,s.options,"top"]])])])])}const F=x(b,[["render",V],["__scopeId","data-v-21deea62"]]);export{F as default};

import{s as m}from"./index.es.914892d5.js";import{_ as s}from"./index.98687fd8.js";import{e as r,g as i,r as p,o as f,k as h,m as e,x as l,F as g}from"./vendor.35d0f4de.js";const c=r({components:{AnimationDialog:m},setup(){const o=i(),n=i(),u=i(),d=i();return{bounce:o,fade:n,zoom:u,flip:d,handleShowBounceDialog(){o.value.open()},handleShowFadeDialog(){n.value.open()},handleShowZoomDialog(){u.value.open()},handleShowFlipDialog(){d.value.open()}}}}),D={class:"wrapper"},v={class:"btn-list"};function w(o,n,u,d,F,I){const t=p("AnimationDialog");return f(),h(g,null,[e("div",D,[e("ul",v,[e("li",null,[e("button",{onClick:n[0]||(n[0]=(...a)=>o.handleShowBounceDialog&&o.handleShowBounceDialog(...a))}," BounceIn / Out (Default) ")]),e("li",null,[e("button",{onClick:n[1]||(n[1]=(...a)=>o.handleShowFadeDialog&&o.handleShowFadeDialog(...a))}," FadeInLeft / FadeOutRight ")]),e("li",null,[e("button",{onClick:n[2]||(n[2]=(...a)=>o.handleShowZoomDialog&&o.handleShowZoomDialog(...a))}," ZoomIn / ZoomOut ")]),e("li",null,[e("button",{onClick:n[3]||(n[3]=(...a)=>o.handleShowFlipDialog&&o.handleShowFlipDialog(...a))}," FlipInX / FlipOutX ")])])]),l(t,{ref:"bounce","animation-mode":!0,title:"bounceIn / bounceOut"},null,512),l(t,{ref:"fade","animation-mode":!0,"animation-in":"fadeInLeft","animation-out":"fadeOutRight",title:"fadeInLeft / fadeOutRight"},null,512),l(t,{ref:"zoom","animation-mode":!0,"animation-in":"zoomIn","animation-out":"zoomOut",title:"zoomIn / zoomOut"},null,512),l(t,{ref:"flip","animation-mode":!0,"animation-in":"flipInX","animation-out":"flipOutX",title:"flipInX / flipOutX"},null,512)],64)}var b=s(c,[["render",w],["__scopeId","data-v-ca1af21a"]]);export{b as default};

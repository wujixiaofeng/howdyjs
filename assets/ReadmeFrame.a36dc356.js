import{e as a,h as e,b as s,f as r,w as d,p as n,g as t,o}from"./vendor.0e184d31.js";var m=a({name:"ReadmeFrame",props:{readme:{type:String,default:""}},setup:a=>({transformReadme:e((()=>a.readme.replace(/<table>(.|\n)*?<\/table>/g,'<div class="table-wrapper">$&</div>')))})});const c=d();n("data-v-d89c7928");const i={id:"API"},p={class:"container"};t();const l=c(((a,e,d,n,t,m)=>(o(),s("div",i,[r("div",p,[r("div",{class:"readme",innerHTML:a.transformReadme},null,8,["innerHTML"])])]))));m.render=l,m.__scopeId="data-v-d89c7928";export{m as _};

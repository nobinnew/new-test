"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{6641:function(e,l,s){s.d(l,{T:function(){return r},k:function(){return i}});let i=()=>{let e=document.querySelectorAll('a[href^="#"]');e.forEach(e=>{e.addEventListener("click",l=>{event.preventDefault();var s=document.querySelector(e.getAttribute("href"));window.scrollTo({top:s.offsetTop-90,behavior:"smooth"})})})},r=()=>{var e,l=document.getElementsByClassName("mil-accordion-menu");for(e=0;e<l.length;e++)l[e].onclick=function(){this.classList.toggle("mil-active");var e=this.nextElementSibling;e.style.height?e.style.height=null:e.style.height=e.scrollHeight+"px"}}},6204:function(e,l,s){s.d(l,{Z:function(){return S}});var i=s(5893),r=s(7294),a=s(990),t=s(6546);let n=()=>{a.p8.registerPlugin(t.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{a.p8.fromTo(e,{opacity:0,y:50,ease:"sine"},{y:0,opacity:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-rotate");l.forEach(e=>{var l=e.dataset.value;a.p8.fromTo(e,{ease:"sine",rotate:0},{rotate:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})}),a.p8.to(".mil-progress",{height:"100%",ease:"linear",scrollTrigger:{scrub:1}});let s=document.querySelector(".mil-back-to-top .mil-link");a.p8.set(s,{opacity:.5}),a.p8.to(s,{opacity:1,ease:"sine",scrollTrigger:{trigger:"body",start:"top -20%",end:"top -20%",toggleActions:"play none reverse none"}})},c=()=>{a.p8.registerPlugin(t.ScrollTrigger);let e=document.querySelectorAll(".mil-counter");e.forEach(e=>{let l=e,s={val:0},i=l.dataset.number,r=(i+"").split("."),t=r.length>1?r[1].length:0;a.p8.to(s,{val:i,duration:2,ScrollTrigger:{trigger:l,toggleActions:"play none none reverse"},onUpdate:function(){l.innerHTML=s.val.toFixed(t)}})});let l=document.querySelectorAll(".mil-circular-progress");l.forEach(e=>{var l=e.dataset.value;a.p8.fromTo(e,{"--p":"0",ease:"sine"},{"--p":l,duration:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-bar");s.forEach(e=>{var l=e.dataset.value;a.p8.fromTo(e,{width:0,duration:5e3,ease:"sine"},{width:l,scrollTrigger:{trigger:e,toggleClass:"mil-active",toggleActions:"play none none reverse"}})})};var o=s(3411),m=s.n(o);let d=()=>{var e=document.getElementById("scene");void 0!=e&&new(m())(e,{limitY:15})};var g=s(6641),h=s(1664),p=s.n(h),u=s(2806);let x=e=>{let{extraClass:l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("footer",{className:"mil-fw",children:[(0,i.jsx)("p",{className:"mil-light-soft",children:u.Mv.J}),(0,i.jsx)("p",{className:"mil-light-soft",dangerouslySetInnerHTML:{__html:u.Mv.W}})]})})},j=e=>{let{layout:l,bg:s,instagram:r,extraClass:a}=e;switch(l){case 1:case 2:return;default:return(0,i.jsx)(x,{bg:s,instagram:r,extraclassName:a})}};var v=s(1163);let f=e=>{let{extraClass:l}=e,[s,a]=(0,r.useState)(!1),t=[],{asPath:n}=(0,v.useRouter)();return u.Fs.GI.forEach((e,l)=>{let s="";0!=e.children&&(s="mil-has-children"),(-1!=n.indexOf(e.link)&&"/"!=e.link||n==e.link)&&(s+=" mil-active");let i=Object.assign({},e,{classes:s});t.push(i)}),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"mil-top-panel",children:[(0,i.jsx)(p(),{href:u.Fs.jY.p,className:"mil-logo",children:(0,i.jsx)("span",{className:"mil-dot",children:u.Fs.jY.N})}),(0,i.jsx)("div",{className:"mil-navigation ".concat(s?"mil-active":""),children:(0,i.jsx)("nav",{id:"swupMenu",className:"mil-menu-transition",children:(0,i.jsx)("ul",{children:t.map((e,l)=>(0,i.jsxs)("li",{className:e.classes,children:[(0,i.jsx)("a",{href:e.link,children:e.label}),0!=e.children&&(0,i.jsx)("ul",{children:e.children.map((e,s)=>(0,i.jsx)("li",{children:(0,i.jsx)(p(),{href:e.link,children:e.label})},"header-submenu".concat(l,"-item-").concat(s)))})]},"header-menu-item-".concat(l)))})})}),(0,i.jsxs)("div",{className:"mil-top-panel-btns",children:[(0,i.jsx)(p(),{href:u.Fs.LI.p,className:"mil-contact-btn",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-mail",children:[(0,i.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,i.jsx)("polyline",{points:"22,6 12,13 2,6"})]})}),(0,i.jsx)("div",{className:"mil-menu-btn ".concat(s?"mil-active":""),onClick:()=>a(!s),children:(0,i.jsx)("span",{})})]})]})})},N=e=>{let{layout:l,extraClass:s}=e;switch(l){case 1:case 2:return;default:return(0,i.jsx)(f,{extarclassName:s})}},y=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"mil-left-panel",children:[(0,i.jsx)("div",{className:"mil-page-name mil-upper mil-dark",children:"Homepage"}),(0,i.jsx)("ul",{className:"mil-social-icons",children:u.xs.map((e,l)=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.link,target:"_blank",className:"social-icon",children:(0,i.jsx)("i",{className:e.icon})})},"lp-social-item-".concat(l)))})]})}),b=e=>{let{background:l,img:s}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"mil-right-banner",id:"scene",children:[(0,i.jsx)("div",{className:"mil-progress-track",children:(0,i.jsx)("div",{className:"mil-progress"})}),(0,i.jsx)("div",{className:"mil-banner-wrapper","data-depth":"1",children:(0,i.jsx)("div",{id:"swupBg",className:"mil-banner-frame",children:(0,i.jsx)("img",{src:l,alt:"background",className:s?"mil-banner-bg mil-blur":"mil-banner-bg"})})}),(0,i.jsx)("div",{className:"mil-banner-wrapper","data-depth":"0.2",children:void 0!=s&&(0,i.jsx)("div",{id:"swupPerson",className:"mil-banner-frame",children:(0,i.jsx)("img",{src:s,alt:"person",className:"mil-banner-person"})})}),(0,i.jsx)("div",{className:"mil-flying-skills","data-depth":"0.1",children:void 0!=s&&(0,i.jsxs)("div",{id:"swupSkills",className:"mil-skills-frame",children:[(0,i.jsx)("div",{className:"mil-item",style:{top:"30%",left:"10%"},children:(0,i.jsx)("img",{src:"/img/logos/1.jpg",alt:"logo"})}),(0,i.jsx)("div",{className:"mil-item",style:{bottom:"15%",left:"20%"},children:(0,i.jsx)("img",{src:"/img/logos/2.jpg",alt:"logo"})}),(0,i.jsx)("div",{className:"mil-item",style:{bottom:"45%",right:"15%"},children:(0,i.jsx)("img",{src:"/img/logos/3.jpg",alt:"logo"})}),(0,i.jsx)("div",{className:"mil-el mil-addition-el-1",children:"+"}),(0,i.jsx)("div",{className:"mil-el mil-addition-el-2",children:"+"}),(0,i.jsx)("div",{className:"mil-el mil-addition-el-3"}),(0,i.jsx)("div",{className:"mil-el mil-addition-el-4"})]})})]})})},k=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"mil-back-to-top",children:(0,i.jsxs)("a",{href:"#top",className:"mil-link mil-btt-icon",children:[(0,i.jsx)("span",{children:"Back to top"}),(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right",children:[(0,i.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,i.jsx)("polyline",{points:"12 5 19 12 12 19"})]})]})})}),w=e=>{let{children:l,header:s,footer:a,noHeader:t,noFooter:o,fullWidth:m,rightPanelBackground:h,rightPanelImg:p,fullWidth100:u,extraClass:x}=e,v=!1,f=!1;return m&&u?(v=["mil-fw-page","mil-100-page"],f="mil-container-100"):m?(v="mil-fw-page",f="mil-container-fw"):v=!1,(0,r.useEffect)(()=>{n(),c(),d(),(0,g.k)(),void 0!=document&&v?document.querySelector("body").classList.add(...v):(document.querySelector("body").classList.remove("mil-fw-page"),document.querySelector("body").classList.remove("mil-100-page"))},[]),(0,i.jsxs)("div",{className:"mil-wrapper",id:"top",children:[(0,i.jsxs)("div",{className:"mil-frame",children:[!t&&(0,i.jsx)(N,{layout:s,extraclassName:x}),(0,i.jsx)(y,{}),(0,i.jsx)(k,{})]}),(0,i.jsxs)("div",{className:"mil-content",children:[(0,i.jsx)("div",{className:"mil-scroll-wrapper transition-fade",id:"swupMain",children:(0,i.jsxs)("div",{className:f||"mil-container",children:[l,!o&&(0,i.jsx)(j,{layout:a})]})}),!m&&(0,i.jsx)(b,{background:h,img:p})]})]})};var S=w}}]);
function lang(){return localStorage.getItem("portfolio-lang")||"en"}
function T(v,l=lang()){return typeof v==="string"?v:(v?.[l]??v?.en??"")}
function cat(c,l=lang()){return window.PORTFOLIO_CATEGORY_LABELS?.[c]?.[l]||c}
function objectId(){return document.body.dataset.objectId||new URLSearchParams(location.search).get("id")}
function findObj(id){return window.PORTFOLIO_OBJECTS.find(o=>o.id===id)}
function navData(o){const peers=window.PORTFOLIO_OBJECTS.filter(x=>x.category===o.category),i=peers.findIndex(x=>x.id===o.id);return{prev:i>0?peers[i-1]:null,next:i>=0&&i<peers.length-1?peers[i+1]:null}}
function renderNav(o,l){
  const host=document.querySelector(".object-prev-next");if(!host)return;
  const {prev,next}=navData(o);
  const item=(x,side)=>{const label=side==="prev"?(l==="zh"?"上一篇":"Previous"):(l==="zh"?"下一篇":"Next");return x?`<a class="object-nav-card" href="${x.href}"><small>${label}</small><b>${x.title}</b></a>`:`<span class="object-nav-card disabled"><small>${label}</small><b>—</b></span>`};
  host.innerHTML=item(prev,"prev")+item(next,"next");
}
function renderGeneric(o,l){
  const m=document.getElementById("object-mount");if(!m)return;
  const tags=(o.tags||[]).map(x=>`<span class="keyword">${x}</span>`).join("");
  const cover=o.cover?`<figure class="object-cover-large"><img src="${o.cover}" alt="${T(o.coverAlt||o.title,l)}"/><figcaption>${o.coverCaption?T(o.coverCaption,l):""}</figcaption></figure>`:"";
  const gallery=(o.gallery||[]).length?`<section class="object-gallery">${o.gallery.map(g=>`<figure class="detail-figure"><img src="${g.src}" alt="${T(g.caption,l)}"/><figcaption>${T(g.caption,l)}</figcaption></figure>`).join("")}</section>`:"";
  const sections=(o.sections||[]).map(s=>`<section class="object-body-section"><h2>${T(s.heading,l)}</h2><p>${T(s.body,l)}</p></section>`).join("");
  let links="";
  if(o.id==="briefy")links=`<div class="object-links"><a href="https://briefy.ai/" target="_blank" rel="noreferrer">${l==="zh"?"原产品官网":"Original product site"} ↗</a></div>`;
  if(o.id==="closet-door-panel")links=`<div class="object-links"><a href="https://www.qigushi.com/qi/1680272405297756.html" target="_blank" rel="noreferrer">${l==="zh"?"玩家攻略 / 讨论记录":"Fan guide / discussion archive"} ↗</a></div>`;
  if(o.id==="bo-simulator")links=`<div class="object-links"><a href="/bo.html">${l==="zh"?"打开模拟器":"Open simulator"} ↗</a></div>`;
  m.innerHTML=`<header class="detail-topbar"><a class="detail-back" href="/preview/#${o.category}">← ${l==="zh"?"返回 "+cat(o.category,l):"Back to "+cat(o.category,l)}</a><div class="lang-switch"><button data-lang="en" class="${l==="en"?"active":""}">EN</button><button data-lang="zh" class="${l==="zh"?"active":""}">中文</button></div></header>
  <article class="object-article"><header class="object-hero"><div class="section-kicker">${cat(o.category,l).toUpperCase()} / ${o.year||""}</div><h1>${o.title}</h1><p class="detail-subtitle">${T(o.subtitle,l)}</p><p class="detail-lead">${T(o.summary,l)}</p><div class="keyword-list detail-tags">${tags}</div></header>${cover}${gallery}<div class="object-body">${sections}</div>${links}<nav class="object-prev-next"></nav></article>`;
  m.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
  renderNav(o,l);
}
function setLang(l){
  document.documentElement.lang=l==="zh"?"zh-CN":"en";localStorage.setItem("portfolio-lang",l);
  const o=findObj(objectId());if(!o)return;
  if(document.getElementById("object-mount"))renderGeneric(o,l);
  else{
    document.querySelectorAll("[data-en]").forEach(el=>{const v=el.dataset[l];if(v!==undefined)el.textContent=v});
    document.querySelectorAll("[data-lang]").forEach(el=>el.classList.toggle("active",el.dataset.lang===l));
    renderNav(o,l);
  }
}
document.addEventListener("DOMContentLoaded",()=>{const o=findObj(objectId());if(!o)return;if(document.getElementById("object-mount"))renderGeneric(o,lang());else{document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));setLang(lang())}});
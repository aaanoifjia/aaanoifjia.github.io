const labels={en:{overview:"Overview",projects:"Projects",experience:"Experience",experiments:"Experiments",notes:"Notes"},zh:{overview:"概览",projects:"项目",experience:"经历",experiments:"实验",notes:"笔记"}};
let activeFilter="All";
function currentLang(){return localStorage.getItem("portfolio-lang")||"en"}
function t(v,lang=currentLang()){return typeof v==="string"?v:(v?.[lang]??v?.en??"")}
function categoryLabel(c,lang=currentLang()){return window.PORTFOLIO_CATEGORY_LABELS?.[c]?.[lang]||c}
function keywordLabel(k,lang=currentLang()){return window.PORTFOLIO_KEYWORD_LABELS?.[k]?.[lang]||k}
function cardHTML(o,lang){
  const tags=(o.tags||[]).slice(0,4).map(x=>`<span class="tag">${keywordLabel(x,lang)}</span>`).join("");
  const cover=o.cover?`<div class="object-card-cover"><img src="${o.cover}" alt="${t(o.coverAlt||o.title,lang)}" loading="lazy"/></div>`:"";
  return `<a class="card object-card ${o.cover?"has-cover":""}" href="${o.href}">${cover}
    <div class="object-card-top"><span class="object-type">${categoryLabel(o.category,lang)}</span><span class="object-year">${o.year||""}</span></div>
    <h3>${o.title}</h3><div class="object-subtitle">${t(o.subtitle,lang)}</div>${o.role?`<div class="object-role"><span>${lang==="zh"?"我的角色":"MY ROLE"}</span><b>${t(o.role,lang)}</b></div>`:""}<p>${t(o.summary,lang)}</p>
    <div class="object-card-bottom"><div class="meta-row">${tags}</div><span class="object-arrow">↗</span></div>
  </a>`;
}
function renderGrid(id,items,lang){const el=document.getElementById(id);if(el)el.innerHTML=items.map(o=>cardHTML(o,lang)).join("")}
function renderExplorer(lang){
  const f=document.getElementById("filter-list"),r=document.getElementById("explorer-results"),c=document.getElementById("explorer-count");
  if(!f||!r)return;
  const all=window.PORTFOLIO_OBJECTS,filters=["All",...window.PORTFOLIO_FILTERS];
  f.innerHTML=filters.map(x=>{
    const n=x==="All"?all.length:all.filter(o=>(o.tags||[]).includes(x)).length;
    const label=x==="All"?(lang==="zh"?"全部":"All"):keywordLabel(x,lang);
    return `<button class="filter-chip ${activeFilter===x?"active":""}" data-filter="${x}">${label}<span>${n}</span></button>`;
  }).join("");
  const shown=activeFilter==="All"?all:all.filter(o=>(o.tags||[]).includes(activeFilter));
  r.innerHTML=shown.map(o=>cardHTML(o,lang)).join("");
  if(c)c.textContent=lang==="zh"?`${shown.length} 条内容`:`${shown.length} items`;
  f.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{activeFilter=btn.dataset.filter;renderExplorer(currentLang())}));
}
function renderPortfolio(lang){
  const o=window.PORTFOLIO_OBJECTS;
  renderExplorer(lang);
  renderGrid("projects-grid",o.filter(x=>x.category==="projects"),lang);
  renderGrid("experience-grid",o.filter(x=>x.category==="experience"),lang);
  renderGrid("experiments-grid",o.filter(x=>x.category==="experiments"),lang);
  renderGrid("notes-grid",o.filter(x=>x.category==="notes"),lang);
  renderGrid("home-experiment-grid",o.filter(x=>x.category==="experiments").slice(0,2),lang);
}
function setSection(name){
  document.querySelectorAll(".page-section").forEach(el=>el.classList.toggle("active",el.dataset.section===name));
  document.querySelectorAll("[data-nav]").forEach(el=>el.classList.toggle("active",el.dataset.nav===name));
  history.replaceState(null,"","#"+name);window.scrollTo({top:0,behavior:"auto"});
}
function setLanguage(lang){
  document.documentElement.lang=lang==="zh"?"zh-CN":"en";
  document.querySelectorAll("[data-en]").forEach(el=>{const v=el.dataset[lang];if(v!==undefined)el.textContent=v});
  document.querySelectorAll("[data-lang]").forEach(el=>el.classList.toggle("active",el.dataset.lang===lang));
  document.querySelectorAll("[data-nav]").forEach(el=>{const k=el.dataset.nav;if(labels[lang][k])el.textContent=labels[lang][k]});
  localStorage.setItem("portfolio-lang",lang);renderPortfolio(lang);
}
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",()=>setSection(el.dataset.nav)));
  document.querySelectorAll("[data-lang]").forEach(el=>el.addEventListener("click",()=>setLanguage(el.dataset.lang)));
  document.querySelectorAll("[data-object-href]").forEach(el=>{
    const go=()=>location.href=el.dataset.objectHref;
    el.addEventListener("click",e=>{if(!e.target.closest("a,button"))go()});
    el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();go()}});
  });
  const section=location.hash.replace("#","")||"overview";
  setSection(["overview","projects","experience","experiments","notes"].includes(section)?section:"overview");
  setLanguage(currentLang());
});
const labels={
  en:{
    overview:"Overview",projects:"Projects",experience:"Experience",experiments:"Experiments",notes:"Notes"
  },
  zh:{
    overview:"概览",projects:"项目",experience:"经历",experiments:"实验",notes:"笔记"
  }
};

function setSection(name){
  document.querySelectorAll(".page-section").forEach(el=>el.classList.toggle("active",el.dataset.section===name));
  document.querySelectorAll("[data-nav]").forEach(el=>el.classList.toggle("active",el.dataset.nav===name));
  history.replaceState(null,"","#"+name);
  window.scrollTo({top:0,behavior:"instant"});
}
function setLanguage(lang){
  document.documentElement.lang=lang==="zh"?"zh-CN":"en";
  document.querySelectorAll("[data-en]").forEach(el=>{
    const value=el.dataset[lang];
    if(value!==undefined) el.textContent=value;
  });
  document.querySelectorAll("[data-lang]").forEach(el=>el.classList.toggle("active",el.dataset.lang===lang));
  document.querySelectorAll("[data-nav]").forEach(el=>{
    const key=el.dataset.nav;
    const text=labels[lang][key];
    if(text) el.textContent=text;
  });
  localStorage.setItem("portfolio-lang",lang);
}
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",()=>setSection(el.dataset.nav)));
  document.querySelectorAll("[data-lang]").forEach(el=>el.addEventListener("click",()=>setLanguage(el.dataset.lang)));
  const section=location.hash.replace("#","")||"overview";
  setSection(["overview","projects","experience","experiments","notes"].includes(section)?section:"overview");
  setLanguage(localStorage.getItem("portfolio-lang")||"en");
});
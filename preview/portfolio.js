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
  window.scrollTo({top:0,behavior:"auto"});
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
async function hydrateB64Images(){
  const images=[...document.querySelectorAll(".js-b64-image")];
  await Promise.all(images.map(async img=>{
    const prefix=img.dataset.b64Prefix;
    const count=Number(img.dataset.b64Chunks||0);
    if(!prefix||!count) return;
    try{
      const chunks=await Promise.all(
        Array.from({length:count},(_,i)=>
          fetch(`${prefix}.${i}.b64`).then(r=>{
            if(!r.ok) throw new Error("image chunk unavailable");
            return r.text();
          })
        )
      );
      img.addEventListener("load",()=>img.classList.add("loaded"),{once:true});
      img.src="data:image/webp;base64,"+chunks.join("").replace(/\s+/g,"");
    }catch(error){
      img.closest(".project-shot-media")?.classList.add("image-error");
    }
  }));
}

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-nav]").forEach(el=>el.addEventListener("click",()=>setSection(el.dataset.nav)));
  document.querySelectorAll("[data-lang]").forEach(el=>el.addEventListener("click",()=>setLanguage(el.dataset.lang)));
  document.querySelectorAll("[data-scroll-target]").forEach(el=>el.addEventListener("click",()=>document.getElementById(el.dataset.scrollTarget)?.scrollIntoView({behavior:"smooth",block:"start"})));
  const section=location.hash.replace("#","")||"overview";
  setSection(["overview","projects","experience","experiments","notes"].includes(section)?section:"overview");
  setLanguage(localStorage.getItem("portfolio-lang")||"en");
  hydrateB64Images();
});
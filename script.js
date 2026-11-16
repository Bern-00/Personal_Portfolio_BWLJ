const langSwitch=document.getElementById("langSwitch");
let currentLang="en";
function setLanguage(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-en][data-fr]").forEach(el=>{
    const value=el.getAttribute(`data-${lang}`);
    if(value!==null) el.innerHTML=value;
  });
  langSwitch.innerHTML=lang==="en"?'FR <span>/</span> EN':'EN <span>/</span> FR';
}
langSwitch.addEventListener("click",()=>setLanguage(currentLang==="en"?"fr":"en"));
document.getElementById("year").textContent=new Date().getFullYear();
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

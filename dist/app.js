"use strict";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const products=[
  {
    "id": "nitrozan",
    "name": "NITROZAN",
    "image": "nitrozan",
    "category": "parasite",
    "en": {
      "tag": "Internal parasite care",
      "short": "Nitroxynil 250 mg/ml in a veterinary injectable presentation.",
      "summary": "NITROZAN is a veterinary injectable within the Valerian parasite-care range. The available product information identifies nitroxynil at 250 mg/ml and a 100 ml vial, with a focus on internal parasites and liver-fluke care in farm animals.",
      "focus": "The product’s parasite-care positioning is most useful when considered alongside the animal’s species, grazing history and a veterinary parasite assessment. Internal parasites are not interchangeable, and identifying the relevant parasite is part of deciding which formulation belongs in a care programme."
    }
  },
  {
    "id": "phosphoval",
    "name": "PhosphoVal 20%",
    "image": "phosphoval",
    "category": "support",
    "en": {
      "tag": "Phosphorus-based supportive care",
      "short": "A 20% toldimphos sodium phosphotherapy injectable.",
      "summary": "PhosphoVal 20% is presented as a veterinary phosphotherapy solution for injection. The product information identifies toldimphos sodium trihydrate at 200 mg/ml in a 100 ml vial.",
      "focus": "This presentation broadens the supportive-care side of the portfolio. The supplied description discusses metabolic and nutritional support around digestion, rumen function and productive periods. Those contexts require an assessment of the whole animal and feeding programme rather than selection by the percentage in the product name."
    }
  },
  {
    "id": "oxyval",
    "name": "OxyVal L.A",
    "image": "oxyval",
    "category": "anti",
    "en": {
      "tag": "Long-acting antibacterial care",
      "short": "Oxytetracycline 200 mg/ml in a long-acting injectable presentation.",
      "summary": "OxyVal L.A is a long-acting oxytetracycline veterinary presentation. The supplied product information names oxytetracycline, as dihydrate, at 200 mg/ml and identifies a 100 ml injectable vial.",
      "focus": "The product information discusses bacterial-care contexts involving the respiratory system and other farm-animal infections. The relevance of an antibacterial formulation depends on diagnosis, susceptibility where appropriate, the animal’s condition and the locally authorised product instructions."
    }
  },
  {
    "id": "diphenex",
    "name": "DIPHENEX",
    "image": "diphenex",
    "category": "support",
    "en": {
      "tag": "Allergy-symptom supportive care",
      "short": "Diphenhydramine hydrochloride 20 mg/ml in a veterinary injectable.",
      "summary": "DIPHENEX is a veterinary solution for injection with an allergy-symptom care focus. The product information identifies diphenhydramine hydrochloride at 20 mg/ml and the packaging shows a 100 ml presentation.",
      "focus": "The product belongs in a veterinary discussion about the cause and severity of suspected allergic signs. An allergy-focused product description is not a diagnosis, and symptom relief should be considered alongside the underlying trigger and the animal’s overall condition."
    }
  },
  {
    "id": "eroxval",
    "name": "EroxVal 10%",
    "image": "eroxval",
    "category": "anti",
    "en": {
      "tag": "Antibacterial care",
      "short": "Enrofloxacin 100 mg/ml in a veterinary injectable presentation.",
      "summary": "EroxVal 10% is an injectable antibacterial presentation containing enrofloxacin at 100 mg/ml. The packaging identifies a 100 ml vial for animal treatment only.",
      "focus": "The supplied description discusses susceptible bacterial infections in farm-animal care, including respiratory and udder-health contexts. These are clinical categories for professional assessment, not a statement that the product is suitable for every infection, species or production stage."
    }
  },
  {
    "id": "valmectin-super",
    "name": "Valmectin Super",
    "image": "valmectin-super",
    "category": "parasite",
    "en": {
      "tag": "Internal & external parasite care",
      "short": "Ivermectin 10 mg/ml with clorsulon 100 mg/ml.",
      "summary": "Valmectin Super combines ivermectin and clorsulon in a veterinary injectable presentation. The available product information states 10 mg/ml ivermectin and 100 mg/ml clorsulon in a 100 ml vial.",
      "focus": "The product is positioned around mixed internal and external parasite-care needs in farm animals. A useful parasite-control discussion considers which parasites are relevant, the animal’s exposure and the timing of assessment, rather than assuming that a broad product description covers every infestation."
    }
  },
  {
    "id": "orvibion",
    "name": "Orvibion",
    "image": "orvibion",
    "category": "support",
    "en": {
      "tag": "Liver & metabolic supportive care",
      "short": "A betaine and amino-acid injectable with a liver-support focus.",
      "summary": "Orvibion adds a liver-focused supportive-care presentation to the Valerian range. The visible formulation identifies betaine alongside arginine, citrulline and ornithine in a 100 ml injectable vial.",
      "focus": "Its product positioning connects liver support with metabolic-care discussions in farm animals. The supplied description mentions demanding metabolic periods, including ketosis-related care in cattle and pregnancy-related metabolic problems in sheep and goats. Those conditions require veterinary assessment; the product is not a replacement for diagnosis or a complete treatment plan."
    }
  },
  {
    "id": "diclorix",
    "name": "Diclorix",
    "image": "diclorix",
    "category": "support",
    "en": {
      "tag": "Inflammation & pain-care support",
      "short": "A diclofenac-based veterinary anti-inflammatory injectable.",
      "summary": "Diclorix extends the supportive-care range with a diclofenac-based solution for injection. The supplied information states 5.39 g diclofenac sodium per 100 ml, equivalent to 5 g diclofenac base, in a 100 ml vial.",
      "focus": "The product presentation focuses on veterinary inflammation and pain-care contexts. The underlying cause of pain, the animal’s species and the authorised conditions of use must guide any treatment discussion. A pain-care product does not replace investigation of the clinical problem."
    }
  }
];
const translations={
  "en": {
    "skip": "Skip to content",
    "navLabel": "Main navigation",
    "filtersLabel": "Filter products",
    "menuOpen": "Open navigation",
    "menuClose": "Close navigation",
    "navAbout": "About us",
    "navProducts": "Our products",
    "navCare": "Animal care",
    "navKnowledge": "Knowledge",
    "navContact": "Contact",
    "brandSub": "ANIMAL HEALTH",
    "heroEyebrow": "AMERICAN ANIMAL HEALTH",
    "hero1": "Veterinary care.",
    "hero2": "For every life.",
    "heroDesc": "Veterinary products and practical information for the people who care for farm animals, livestock and horses.",
    "explore": "Explore our products",
    "storyLink": "Get to know Valerian",
    "heroCaption": "For veterinary professionals.<br>With animal wellbeing at heart.",
    "heroPhotoAlt": "Healthy cattle in a sunlit green pasture",
    "heroPhotoCaption": "Care begins with understanding.",
    "highlight1": "An American<br>animal health company",
    "highlight2": "Farm animals,<br>livestock & horses",
    "highlight3": "A focused range for<br>professional veterinary care",
    "aboutKicker": "ABOUT VALERIAN",
    "aboutTitle": "A focused approach.<br><em>A meaningful purpose.</em>",
    "aboutText1": "Valerian is an American animal health company focused on veterinary products for farm and large animals. The portfolio connects practical animal-care needs with clear product information.",
    "aboutText2": "Our range includes injectable presentations for anti-infective care, internal parasite management and supportive treatment. We believe that clear product information and a conversation with the right professional are essential parts of responsible care.",
    "missionLabel": "OUR PURPOSE",
    "missionText": "To support thoughtful veterinary care for the animals that work beside us and sustain our communities.",
    "carePhotoAlt": "A veterinarian gently caring for a horse at a stable",
    "aboutCaption": "Animal health is personal. So is our purpose.",
    "productsKicker": "OUR VETERINARY PORTFOLIO",
    "productsTitle": "Explore the <em>Valerian range.</em>",
    "productsIntro": "Find a product, explore its overview and request the official information you need for your practice.",
    "filterAll": "All products",
    "filterAnti": "Anti-infectives",
    "filterParasite": "Parasite care",
    "filterSupport": "Supportive care",
    "vetNote": "For veterinary use only. Refer to the official product information and your veterinarian for suitability, approved species and use.",
    "productCountLabel": "products",
    "productExplore": "View product details",
    "careKicker": "THE ANIMALS AT THE HEART OF OUR WORK",
    "careTitle": "Different needs.<br><em>The same commitment.</em>",
    "careIntro": "From the working herd to the stable, good care starts by understanding the animal, its environment and its needs.",
    "companionTitle": "Sheep & goats",
    "companionText": "Care for sheep and goats connects nutrition, pasture management, observation and veterinary assessment.",
    "livestockTitle": "Livestock & farm animals",
    "livestockText": "The day-to-day care of cattle, sheep, goats, pigs and other farm animals starts with observation, appropriate husbandry and veterinary oversight. Product selection should reflect the species, the clinical situation and the official label, with clear treatment records and relevant food-safety requirements.",
    "equineTitle": "Horses & equine care",
    "equineText": "A horse's routine, workload and environment all shape its care. We encourage a professional, species-specific approach to product enquiries, supported by the complete product leaflet and advice from the treating veterinarian.",
    "careRead": "Explore care resources",
    "careApproach": "Our approach to care",
    "careAsk": "Ask about product information",
    "livestockPhotoAlt": "Cattle and sheep grazing in a green pasture",
    "careSource": "General educational resources support veterinary conversations. Product suitability remains species- and label-specific.",
    "responsibilityKicker": "A RESPONSIBLE APPROACH",
    "responsibilityTitle": "Good care goes<br><em>beyond a product.</em>",
    "responsibilityIntro": "A veterinary product is one part of a wider care plan. We support informed conversations, clear information and the professional judgement that makes care individual.",
    "principle1Title": "Start with veterinary guidance",
    "principle1Text": "Diagnosis and product selection belong with the treating veterinarian. An animal's species, history and current condition all matter when deciding the appropriate next step.",
    "principle2Title": "Use clear product information",
    "principle2Text": "The official leaflet is the reference for composition, approved use, storage and precautions. Keep the original label available and ask when an instruction is unclear.",
    "principle3Title": "Support responsible medicine use",
    "principle3Text": "Antimicrobials require a considered veterinary approach. Treatment decisions should address animal health needs and follow the relevant professional guidance and local requirements.",
    "knowledgeKicker": "ANIMAL HEALTH KNOWLEDGE",
    "knowledgeTitle": "Useful information.<br><em>Trusted starting points.</em>",
    "knowledgeIntro": "Practical farm-animal resources for veterinary professionals and animal-care teams.",
    "resource1Title": "Practical prevention for farm animals",
    "resource1Text": "Connect observation, husbandry and veterinary review in a consistent preventive programme.",
    "resource2Title": "Clear communication about medicines",
    "resource2Text": "Learn why sharing a medication history, checking instructions and asking questions can help reduce veterinary medication errors.",
    "resource3Title": "Storing animal medicines thoughtfully",
    "resource3Text": "Explore practical information on original labelled containers, secure storage and keeping medicines away from animals and children.",
    "readResource": "Read the resource <svg class=\"action-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M14 4h6v6M20 4l-9 9\"/><path d=\"M10 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5\"/></svg>",
    "resourceNote": "External educational links do not indicate endorsement of Valerian or approval of any product. They complement professional advice.",
    "faqKicker": "A LITTLE MORE CLARITY",
    "faqTitle": "Your questions,<br><em>answered.</em>",
    "faqIntro": "A starting point for understanding the portfolio and making a useful product enquiry.",
    "faq1Q": "What does Valerian focus on?",
    "faq1A": "Valerian focuses on veterinary products for farm and large animals. The supplied portfolio comprises six injectable presentations across anti-infective, parasite and supportive care.",
    "faq2Q": "Is every product suitable for every animal?",
    "faq2A": "No. Suitability depends on the individual product, approved species, local registration and the animal's needs. Request the official product leaflet and consult the treating veterinarian.",
    "faq3Q": "How can I request more product information?",
    "faq3A": "Open a product and choose “Enquire about this product”. The product name will be selected automatically. Include your organisation and the information you need, such as the official leaflet or local availability.",
    "faq4Q": "Can I buy products on this website?",
    "faq4A": "This website is a product information and enquiry destination. It does not offer online checkout. Product availability and commercial arrangements can be discussed with the official regional representative listed in the footer.",
    "faq5Q": "Where can I find dosage or administration instructions?",
    "faq5A": "Use the official product leaflet and the instructions given by your veterinarian. Website summaries do not replace the complete prescribing information or professional advice.",
    "contactKicker": "LET'S TALK ABOUT ANIMAL HEALTH",
    "contactTitle": "The next step starts<br><em>with a conversation.</em>",
    "contactText": "Whether you represent a veterinary clinic, a farm or a distribution business, start with the product or partnership information you need.",
    "enquiryBtn": "Make an enquiry",
    "contactHint": "Product information · Availability · Business enquiries",
    "footerText": "American animal health.<br>Care for farm and large animals.",
    "footerPartner": "SOLE & EXCLUSIVE OFFICIAL PARTNER IN THE MIDDLE EAST",
    "footerPartnerName": "Emirates Pearl General Trading",
    "footerPartnerDesc": "EPGT is the sole and exclusive official partner of Valerian in the Middle East.",
    "footerPartnerBtn": "Regional enquiries",
    "copyright": "© 2026 Valerian & Emirates Pearl General Trading. All rights reserved.",
    "top": "Back to top <svg class=\"action-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m6 14 6-6 6 6\"/></svg>",
    "privacy": "Privacy",
    "terms": "Terms of use",
    "viewPack": "View original packaging <svg class=\"action-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M14 4h6v6M20 4l-9 9\"/><path d=\"M10 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5\"/></svg>",
    "presentation": "Presentation",
    "pack100": "100 ml vial · solution for injection",
    "productFocus": "Product focus",
    "detailNote": "Refer to the official product leaflet for full composition, approved species, indications and use. Your veterinarian will advise on suitability.",
    "productEnquiry": "Enquire about this product",
    "formTitle": "How can we<br><em>help you?</em>",
    "formIntro": "Prepare a product, professional information or business enquiry.",
    "name": "Your name",
    "email": "Email address",
    "organisation": "Organisation / practice",
    "interest": "I'm interested in",
    "generalEnquiry": "General product information",
    "businessEnquiry": "Business partnership",
    "message": "Your message",
    "formNote": "Your enquiry is prepared in this browser for you to copy or download. It is not sent automatically.",
    "prepare": "Prepare enquiry",
    "ready": "Your enquiry is ready.",
    "copy": "Copy enquiry",
    "download": "Download enquiry",
    "copied": "Enquiry copied.",
    "copyFailed": "Copy is unavailable in this browser. Please download your enquiry.",
    "close": "Close",
    "countProducts": "products",
    "privacyText": "This website prepares enquiry messages locally in your browser. It does not submit form entries automatically.",
    "termsText": "This website introduces Valerian and its veterinary product portfolio. Product summaries follow the supplied packaging and are not a substitute for the official product leaflet or veterinary advice. Availability, approved species and local registrations should be confirmed with the appropriate professional. The website does not offer online purchases or automatically send messages."
  }
};
let currentFilter="all",selectedProduct=null,preparedEnquiry="";
const t=key=>translations.en[key];
function setMenu(open){$("#navigation").classList.toggle("open",open);$(".menu-toggle").setAttribute("aria-expanded",String(open));$(".menu-toggle").setAttribute("aria-label",t(open?"menuClose":"menuOpen"))}
function openDialog(dialog){dialog.showModal();document.body.style.overflow="hidden"}
function productImage(product,original=false){return "assets/"+product.image+(original?".jpg":".webp")}
function renderProducts(){
 const items=products.filter(p=>currentFilter==="all"||p.category===currentFilter);
 $("#product-grid").innerHTML=items.map(p=>`<button class="product-card" data-product="${p.id}" aria-label="${t("productExplore")} ${p.name}"><span class="product-photo"><img src="${productImage(p)}" alt="${p.name} — Valerian" loading="lazy" width="800" height="1040"><span class="product-mark">100 ML</span></span><span class="product-card-copy"><span class="product-overline">${p.en.tag}</span><span class="product-card-name" dir="ltr">${p.name}</span><span class="product-summary">${p.en.short}</span><span class="product-discover">${t("productExplore")} <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 5 7 7-7 7"/></svg></span></span></button>`).join("");
 $(".product-count").textContent=String(items.length).padStart(2,"0")+" / "+String(products.length).padStart(2,"0")+" "+t("countProducts");
 $$(".filter").forEach(b=>{const active=b.dataset.filter===currentFilter;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active))})
}
function renderProductDetails(){if(!selectedProduct)return;const p=products.find(x=>x.id===selectedProduct);$("#detail-image").src=productImage(p);$("#detail-image").alt=p.name+" — Valerian";$("#original-image").href=productImage(p,true);$("#detail-name").textContent=p.name;$("#detail-category").textContent=p.en.tag;$("#detail-summary").textContent=p.en.summary;$("#detail-focus").textContent=p.en.focus}
function showProduct(id){selectedProduct=id;renderProductDetails();openDialog($("#product-dialog"))}
function renderPolicy(){const name=$("#policy-dialog").dataset.policy;if(name){$("#policy-title").textContent=t(name);$("#policy-text").textContent=t(name+"Text")}}
function initialize(){document.documentElement.lang="en";document.documentElement.dir="ltr";$$("[data-t]").forEach(e=>{const s=t(e.dataset.t);if(typeof s==="string")e.innerHTML=s});$$("[data-alt]").forEach(e=>e.alt=t(e.dataset.alt));$$("[data-close]").forEach(e=>e.setAttribute("aria-label",t("close")));$("#navigation").setAttribute("aria-label",t("navLabel"));$("#product-filters").setAttribute("aria-label",t("filtersLabel"));renderProducts();renderProductDetails();renderPolicy();setMenu(false);try{localStorage.removeItem("valerian-language")}catch{}}
function showContact(interest="general"){if($("#product-dialog").open)$("#product-dialog").close();$("#enquiry-interest").value=interest==="partnership"?"partnership":interest;$("#enquiry-result").hidden=true;$("#copy-status").textContent="";setMenu(false);openDialog($("#contact-dialog"))}
$(".menu-toggle").addEventListener("click",()=>setMenu(!$("#navigation").classList.contains("open")));
$("#navigation").addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
document.addEventListener("click",e=>{const product=e.target.closest("[data-product]");if(product){showProduct(product.dataset.product);return}const contact=e.target.closest("[data-contact]");if(contact){showContact(contact.dataset.contact||"general");return}const policy=e.target.closest("[data-policy]");if(policy){$("#policy-dialog").dataset.policy=policy.dataset.policy;renderPolicy();openDialog($("#policy-dialog"))}});
$("#product-filters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(b){currentFilter=b.dataset.filter;renderProducts()}});
$$("dialog").forEach(dialog=>{dialog.addEventListener("click",e=>{if(e.target.closest("[data-close]"))dialog.close();else if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close()}});dialog.addEventListener("close",()=>{if(!document.querySelector("dialog[open]"))document.body.style.overflow=""})});
$("#product-enquiry").addEventListener("click",()=>showContact(selectedProduct||"general"));
$("[data-top]").addEventListener("click",()=>window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}));
$("#enquiry-form").addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.target);const product=products.find(p=>p.id===data.get("interest"));const topic=product?product.name:t(data.get("interest")==="partnership"?"businessEnquiry":"generalEnquiry");preparedEnquiry=["Valerian Animal Health",t("name")+": "+data.get("name").trim(),t("email")+": "+data.get("email").trim(),t("organisation")+": "+data.get("organisation").trim(),t("interest")+": "+topic,"",data.get("message").trim()].join("\n");$("#enquiry-preview").textContent=preparedEnquiry;$("#enquiry-result").hidden=false;$("#copy-status").textContent="";$("#enquiry-result").scrollIntoView({block:"nearest"})});
$("#copy-enquiry").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(preparedEnquiry);$("#copy-status").textContent=t("copied")}catch{$("#copy-status").textContent=t("copyFailed")}});
$("#download-enquiry").addEventListener("click",()=>{const blob=new Blob(["\ufeff"+preparedEnquiry],{type:"text/plain;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="Valerian-enquiry.txt";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
initialize();

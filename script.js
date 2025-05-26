const translations = {
  es: {
    pageTitle: "pcurz",
    name: "Patricio Campos",
    tagline1: "Apasionado por crear herramientas útiles y simples.",
    tagline2: "Transformo problemas reales en soluciones funcionales.",
    contacts: "Contactos:",
    email: "Correo",
    projects_header: "Proyectos",
    tesisProjectTitle: "Chile Cargo Express - Muéveme SaaS (Proyecto de Tesis)",
    tesisDesc1: "Una empresa logística usaba Excel para todo. Lo convertí en un SaaS escalable.",
    tesisKPI: "KPI operativos en tiempo real",
    tesisArch: "Arquitectura híbrida y escalable para replicar en otras pymes",
    tesisStatus1: "Ya está en producción.",
    tesisStatus2: "Proyecto de titulación validado académicamente.",
    signatatProjectTitle: "SignaTat",
    signatatDesc1: "Software de escritorio para estudios de tatuajes que reemplaza formularios físicos de consentimiento por una solución digital con firma manuscrita.",
    signatatLicense: "Licencia única por estudio (no es SaaS, no hay suscripciones)",
    signatatSigning: "Permite firmar desde pantallas táctiles o mouse",
    signatatExport: "Exportación PDF y respaldo local automático",
    signatatBenefits: "Reduce costos operativos y simplifica la gestión legal",
    signatatStatus1: "Proyecto comercial real, vendido y usado en estudio activo.",
    ucalendarProjectTitle: "UCalendarMobile",
    ucalendarDesc1: "Una app para estudiantes de la UCM que centraliza feriados, suspensiones y eventos.",
    ucalendarNotif: "Notificaciones personalizadas",
    ucalendarFilter: "Filtro por tipo de evento",
    ucalendarOffline: "Funciona offline",
    ucalendarInstalls: "+280 instalaciones en 2 meses",
    fallwatcherProjectTitle: "FallWatcher",
    fallwatcherDesc1: "Sistema para monitorear caídas en adultos mayores.",
    fallwatcherPairing: "Asociación por código QR",
    vaiaProjectTitle: "VaiaFlashcardsUploader",
    vaiaDesc1: "Automatización para subir flashcards a Vaia.",
    vaiaAutomation: "Automatiza login y subida masiva",
    otherHeader: "Otros",
    otherDesc1: "A veces hago pentesting por curiosidad: apps, sitios, APIs, lo que se cruce.",
    otherDesc2: "Me gusta analizar comportamiento oculto, descubrir endpoints inseguros y romper lógica.",
    otherDesc3: "Desarmo sistemas sin intención destructiva, solo para entender cómo piensan quienes los hicieron.",
    otherDesc4: "Fan de la automatización: scraping, dashboards, orquestación, lo que ahorre tiempo.",
    otherDesc5: "Si algo no se puede... lo intento igual.",
    finalHeader: "Final",
    finalMessage: "Si algo de esto te sirve, o quieres conversar, escríbeme.",
  },
  en: {
    pageTitle: "pcurz - Patricio Campos",
    name: "Patricio Campos",
    tagline1: "Passionate about creating useful and simple tools.",
    tagline2: "I transform real problems into functional solutions.",
    contacts: "Contacts:",
    email: "Email",
    projects_header: "Projects",
    tesisProjectTitle: "Chile Cargo Express - Muéveme SaaS (Thesis Project)",
    tesisDesc1: "A logistics company used Excel for everything. I turned it into a scalable SaaS.",
    tesisKPI: "Real-time operational KPIs",
    tesisArch: "Hybrid and scalable architecture to replicate in other SMEs",
    tesisStatus1: "Already in production.",
    tesisStatus2: "Academically validated degree project.",
    signatatProjectTitle: "SignaTat",
    signatatDesc1: "Desktop software for tattoo studios that replaces physical consent forms with a digital solution with handwritten signature.",
    signatatLicense: "Single license per studio (not SaaS, no subscriptions)",
    signatatSigning: "Allows signing from touchscreens or mouse",
    signatatExport: "PDF export and automatic local backup",
    signatatBenefits: "Reduces operational costs and simplifies legal management",
    signatatStatus1: "Real commercial project, sold and used in an active studio.",
    ucalendarProjectTitle: "UCalendarMobile",
    ucalendarDesc1: "An app for UCM students that centralizes holidays, suspensions, and events.",
    ucalendarNotif: "Personalized notifications",
    ucalendarFilter: "Filter by event type",
    ucalendarOffline: "Works offline",
    ucalendarInstalls: "+280 installs in 2 months",
    fallwatcherProjectTitle: "FallWatcher",
    fallwatcherDesc1: "System to monitor falls in older adults.",
    fallwatcherPairing: "QR code pairing",
    vaiaProjectTitle: "VaiaFlashcardsUploader",
    vaiaDesc1: "Automation to upload flashcards to Vaia.",
    vaiaAutomation: "Automates login and bulk upload",
    otherHeader: "Others",
    otherDesc1: "Sometimes I do pentesting out of curiosity: apps, sites, APIs, whatever comes across.",
    otherDesc2: "I like to analyze hidden behavior, discover insecure endpoints, and break logic.",
    otherDesc3: "I dismantle systems without destructive intent, just to understand how those who made them think.",
    otherDesc4: "Automation fan: scraping, dashboards, orchestration, anything that saves time.",
    otherDesc5: "If something can't be done... I try it anyway.",
    finalHeader: "Final",
    finalMessage: "If any of this is useful to you, or you want to talk, write to me.",
  }
};

function updateActiveLanguageButton(lang) {
  document.querySelectorAll('#language-selector a').forEach(a => a.classList.remove('active'));
  const activeBtn = document.getElementById('lang-' + lang);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn("Language " + lang + " not supported.");
    return;
  }
  document.documentElement.lang = lang;
  if (translations[lang].pageTitle) {
      document.title = translations[lang].pageTitle;
  }

  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else {
      // Fallback: if key not in target lang, try to find it in 'es' (original)
      // Or leave it as is (original HTML content) if not in 'es' either.
      // For simplicity here, if not found, it will just keep the current text.
      // console.warn("Translation key " + key + " not found for language " + lang);
    }
  });
  localStorage.setItem('language', lang);
  updateActiveLanguageButton(lang);
  // Prevent page jump from href="#"
  return false;
}


document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language');
  const browserLang = navigator.language ? navigator.language.split('-')[0] : 'es';
  
  let initialLang = 'es'; // Default language
  if (savedLang && translations[savedLang]) {
      initialLang = savedLang;
  } else if (translations[browserLang]) {
      initialLang = browserLang;
  }
  // If 'es' is detected/defaulted but no 'es' translations object, it will use the HTML default text.
  // If another lang is set, it will try to translate.
  setLanguage(initialLang);

  // Attach event listeners to language selector buttons
  // This is needed because the onclick attributes in HTML won't work when the script is in a separate file
  // and loaded with defer or at the end of the body without being a module.
  // For simplicity and to ensure it works even if this script is moved or loaded differently, 
  // we re-attach here. A more robust solution for complex apps might involve event delegation.
  const langEsBtn = document.getElementById('lang-es');
  if (langEsBtn) {
    langEsBtn.onclick = () => setLanguage('es');
  }
  const langEnBtn = document.getElementById('lang-en');
  if (langEnBtn) {
    langEnBtn.onclick = () => setLanguage('en');
  }
}); 
const locales = {
  es: {
    name: "Patricio Campos",
    tagline1: "Builder / Product Hacker. Identifico problemas reales y los transformo en soluciones que funcionan.",
    tagline2: "Desde niño metiendo manos en la computadora, hoy construyo experiencias digitales únicas.",
    contacts: "Contactos:",
    email: "Correo",
    projects_header: "Proyectos",
    
    cliprotProjectTitle: "[cliprot]",
    cliprotDesc1: "Canal generativo en vivo 24/7 que evolucionó de un bot de OBS a un sistema autónomo de broadcasting.",
    cliprotDesc2: "Interludios/bumpers generados con IA usando contexto en tiempo real: viewers, video anterior, usuarios destacados, etc.",
    cliprotTech1: "FastAPI + PostgreSQL + Redis + FFmpeg workers en backend",
    cliprotTech2: "Frontend en React + Vite + ChakraUI con OAuth 2.0 de Discord",
    cliprotTech3: "Multistream con Nginx-RTMP para distribución simultánea",
    cliprotStatus: "Contenido en tiempo real: cada video se edita de forma única, nunca igual. Sistema de votación donde los usuarios afectan el stream en vivo. Programación visible con parrilla en tiempo real. Distribuye automáticamente a Twitch, YouTube y Kick. Setup casero optimizado: Xeon E5 2640 v3 con undervolt y 3.4 GHz, Quadro P600 para encoding GPU, 64 GB RAM.",
    
    signatatProjectTitle: "SignaTat",
    signatatDesc1: "Software de escritorio para estudios de tatuajes que reemplaza formularios físicos de consentimiento por una solución digital con firma manuscrita.",
    signatatTech1: "Hecho en Electron + Vue.js + PrimeVue",
    signatatLicense: "Licencia única por estudio (no es SaaS, no hay suscripciones)",
    signatatSigning: "Permite firmar desde pantallas táctiles o mouse",
    signatatExport: "Exportación PDF y respaldo local automático",
    signatatBenefits: "Reduce costos operativos y simplifica la gestión legal",
    signatatStatus1: "Proyecto comercial real, vendido y usado en estudio activo.",
    
    ucalendarProjectTitle: "UCalendarMobile",
    ucalendarDesc1: "Identifiqué que el calendario de la universidad era una tabla web no responsiva. Creé una app móvil con filtros inteligentes, notificaciones y modo offline.",
    ucalendarNotif: "Notificaciones personalizadas",
    ucalendarFilter: "Filtro por tipo de evento y días sin clases",
    ucalendarOffline: "Funciona offline",
    ucalendarInstalls: "+280 instalaciones en 2 meses",
    
    tesisProjectTitle: "Chile Cargo Express - Muéveme SaaS (Proyecto de Titulación)",
    tesisDesc1: "Una empresa logística usaba Excel para todo. Lo convertí en un SaaS escalable.",
    tesisTech1: "Next.js + React + Material UI (App Router, multitenant)",
    tesisTech2: "PostgreSQL en Azure, segregación por empresa",
    tesisTech3: "NextAuth con JWT, dashboards BI y arrastrar/soltar",
    tesisKPI: "KPI operativos en tiempo real",
    tesisArch: "Arquitectura híbrida y escalable para replicar en otras pymes",
    tesisStatus1: "Ya está en producción.",
    tesisStatus2: "Proyecto de titulación validado académicamente.",
    
    otherHeader: "Otros",
    otherDesc1: "A veces hago pentesting por curiosidad: apps, sitios, APIs, lo que se cruce.",
    otherDesc2: "Me gusta analizar comportamiento oculto, descubrir endpoints inseguros y romper lógica.",
    otherDesc3: "Desarmo sistemas sin intención destructiva, solo para entender cómo piensan quienes los hicieron.",
    otherDesc4: "Fan de la automatización: scraping, dashboards, orquestación, lo que ahorre tiempo.",
    otherDesc5: "Si algo no se puede... lo intento igual.",
    
    finalHeader: "Final",
    finalMessage: "Si algo de esto te sirve, o quieres conversar, escríbeme."
  },
  en: {
    name: "Patricio Campos",
    tagline1: "Builder / Product Hacker. I identify real problems and transform them into solutions that work.",
    tagline2: "Since childhood tinkering with computers, today I build unique digital experiences.",
    contacts: "Contacts:",
    email: "Email",
    projects_header: "Projects",
    
    cliprotProjectTitle: "[cliprot]",
    cliprotDesc1: "24/7 generative live channel that evolved from an OBS bot to an autonomous broadcasting system.",
    cliprotDesc2: "AI-generated interludes/bumpers using real-time context: viewers, previous video, top users, etc.",
    cliprotTech1: "FastAPI + PostgreSQL + Redis + FFmpeg workers backend",
    cliprotTech2: "Frontend in React + Vite + ChakraUI with Discord OAuth 2.0",
    cliprotTech3: "Multistream with Nginx-RTMP for simultaneous distribution",
    cliprotStatus: "Real-time content: each video is edited uniquely, never the same. Voting system where users affect the live stream. Visible programming with real-time grid. Automatically distributes to Twitch, YouTube and Kick. Optimized homemade setup: Xeon E5 2640 v3 with undervolt and 3.4 GHz, Quadro P600 for GPU encoding, 64 GB RAM.",
    
    signatatProjectTitle: "SignaTat",
    signatatDesc1: "Desktop software for tattoo studios that replaces physical consent forms with a digital solution with handwritten signature.",
    signatatTech1: "Made with Electron + Vue.js + PrimeVue",
    signatatLicense: "Single license per studio (not SaaS, no subscriptions)",
    signatatSigning: "Allows signing from touchscreens or mouse",
    signatatExport: "PDF export and automatic local backup",
    signatatBenefits: "Reduces operational costs and simplifies legal management",
    signatatStatus1: "Real commercial project, sold and used in an active studio.",
    
    ucalendarProjectTitle: "UCalendarMobile",
    ucalendarDesc1: "I identified that the university calendar was a non-responsive web table. Created a mobile app with smart filters, notifications, and offline mode.",
    ucalendarNotif: "Personalized notifications",
    ucalendarFilter: "Filter by event type and days without classes",
    ucalendarOffline: "Works offline",
    ucalendarInstalls: "+280 installs in 2 months",
    
    tesisProjectTitle: "Chile Cargo Express - Muéveme SaaS (Capstone Project)",
    tesisDesc1: "A logistics company used Excel for everything. I turned it into a scalable SaaS.",
    tesisTech1: "Next.js + React + Material UI (App Router, multitenant)",
    tesisTech2: "PostgreSQL on Azure, per-company segregation",
    tesisTech3: "NextAuth with JWT, BI dashboards, and drag/drop functionality",
    tesisKPI: "Real-time operational KPIs",
    tesisArch: "Hybrid and scalable architecture to replicate in other SMEs",
    tesisStatus1: "Already in production.",
    tesisStatus2: "Academically validated degree project.",
    
    otherHeader: "Others",
    otherDesc1: "Sometimes I do pentesting out of curiosity: apps, sites, APIs, whatever comes across.",
    otherDesc2: "I like to analyze hidden behavior, discover insecure endpoints, and break logic.",
    otherDesc3: "I dismantle systems without destructive intent, just to understand how those who made them think.",
    otherDesc4: "Automation fan: scraping, dashboards, orchestration, anything that saves time.",
    otherDesc5: "If something can't be done... I try it anyway.",
    
    finalHeader: "Final",
    finalMessage: "If any of this is useful to you, or you want to talk, write to me."
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
  if (!locales[lang]) {
    console.warn("Language " + lang + " not supported.");
    return;
  }
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (locales[lang][key]) {
      element.textContent = locales[lang][key];
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
  
  let initialLang = 'es';
  if (savedLang && locales[savedLang]) {
      initialLang = savedLang;
  } else if (locales[browserLang]) {
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
  const langEnBtn = document.getElementById('langEnBtn');
  if (langEnBtn) {
    langEnBtn.onclick = () => setLanguage('en');
  }
}); 
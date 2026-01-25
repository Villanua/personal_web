export const translations = {
  es: {
    // Navigation
    navHome: "Inicio",
    navTrajectory: "Trayectoria",
    navContact: "Contacto",
    
    // Hero section
    welcome: "¡Bienvenido!",
    heroPrefix: "Este es un espacio de",
    words: ["Robótica", "IA", "Arquitectura de Software", "Innovación"],
    discover: "Descubre",
    
    // About section
    background: "Background",
    name: "Nacho Villanúa",
    role: "Ingeniero de Robótica e IA",
    aboutText1Prefix: "Soy ",
    aboutText1Suffix: ", un Ingeniero de Robótica e IA enfocado en construir sistemas que perciban e interactúen con la realidad.",
    aboutText2: "Mi trabajo explora la sinergia entre Sistemas Robóticos e IA Generativa.",
    aboutText3: "Con experiencia en entornos tanto de investigación como industriales, disfruto enfrentándome a desafíos que requieren una mezcla de rigor matemático e ingeniería creativa.",
    viewTrajectory: "Ver Trayectoria Completa",
    
    // Professional Experience
    experienceLabel: "Experiencia Profesional",
    
    // Academic Formation
    educationLabel: "Formación Académica",
    
    // Contact section
    projectInquiry: "Consulta de Proyecto",
    letCreate: "Creemos algo significativo.",
    emailMe: "Envíame un Email",
    
    // Footer
    copyright: "© 2026 Nacho Villanúa",
    location: "Madrid, ES",
    builtWith: "Construido con precisión",
  },
  en: {
    // Navigation
    navHome: "Home",
    navTrajectory: "Trajectory",
    navContact: "Contact",
    
    // Hero section
    welcome: "Welcome!",
    heroPrefix: "This Is A Space Of",
    words: ["Robotics", "AI", "Software Architecture", "Innovation"],
    discover: "Discover",
    
    // About section
    background: "Background",
    name: "Nacho Villanúa",
    role: "Robotics & AI Engineer",
    aboutText1Prefix: "I'm ",
    aboutText1Suffix: ", a Robotics & AI Engineer focused on building systems that perceive and interact with reality.",
    aboutText2: "My work explores the synergy between Robotics Systems and Generative AI.",
    aboutText3: "With experience in both research and industrial environments, I enjoy tackling challenges that require a blend of mathematical rigor and creative engineering.",
    viewTrajectory: "View Full Trajectory",
    
    // Professional Experience
    experienceLabel: "Professional Experience",
    
    // Academic Formation
    educationLabel: "Academic Formation",
    
    // Contact section
    projectInquiry: "Project Inquiry",
    letCreate: "Let's create something meaningful.",
    emailMe: "Email Me",
    
    // Footer
    copyright: "© 2026 Nacho Villanúa",
    location: "Madrid, ES",
    builtWith: "Built with precision",
  }
} as const;

type LanguageCode = keyof typeof translations;

export function useLanguage(): LanguageCode {
  const browserLanguage = typeof navigator !== 'undefined' 
    ? navigator.language.split('-')[0] 
    : 'en';
  
  return (browserLanguage === 'es' ? 'es' : 'en') as LanguageCode;
}

export function getTranslation(key: string, lang: LanguageCode): string {
  return (translations[lang] as any)[key] || (translations.en as any)[key];
}

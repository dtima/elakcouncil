import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.government": "Government",
    "nav.residents": "Residents",
    "nav.visitors": "Visitors",
    "nav.business": "Business",
    "nav.iwantto": "I Want To...",
    "hero.title": "Welcome to Garoua III",
    "hero.subtitle": "A Haven of Cultural Diversity and Untapped Potential",
    "hero.searchPlaceholder": "Search the City of Garoua III...",
    "cta.invest": "Invest Now",
    "cta.learn": "Learn More",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.government": "Gouvernement",
    "nav.residents": "Résidents",
    "nav.visitors": "Visiteurs",
    "nav.business": "Entreprises",
    "nav.iwantto": "Je Veux...",
    "hero.title": "Bienvenue à Garoua III",
    "hero.subtitle": "Un havre de diversité culturelle et de potentiel inexploité",
    "hero.searchPlaceholder": "Rechercher dans la ville de Garoua III...",
    "cta.invest": "Investir",
    "cta.learn": "En Savoir Plus",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
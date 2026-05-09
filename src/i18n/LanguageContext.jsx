import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from './translations';

const LanguageContext = createContext({
  lang: 'en',
  dir: 'ltr',
  toggleLanguage: () => {},
  t: (key) => key
});

const normalizeLang = (value) => (value === 'ar' ? 'ar' : 'en');

const getValueByPath = (obj, path) => {
  if (!obj || !path) {
    return undefined;
  }

  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('lang');
    if (stored) {
      return normalizeLang(stored);
    }

    return navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.dir = dir;
  }, [lang, dir]);

  const t = useMemo(() => {
    return (key, params) => {
      const value = getValueByPath(translations[lang], key)
        ?? getValueByPath(translations.en, key)
        ?? key;

      if (typeof value !== 'string' || !params) {
        return value;
      }

      return value.replace(/\{(\w+)\}/g, (match, token) => {
        return params[token] ?? match;
      });
    };
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

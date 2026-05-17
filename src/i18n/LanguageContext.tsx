import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  defaultLanguage,
  languages,
  translations,
  type Language,
  type Translations,
} from './translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  languages: typeof languages
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return defaultLanguage

  const storedLanguage = window.localStorage.getItem('tsgp-language')
  return storedLanguage === 'fr' || storedLanguage === 'en'
    ? storedLanguage
    : defaultLanguage
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getStoredLanguage)

  useEffect(() => {
    window.localStorage.setItem('tsgp-language', language)
    document.documentElement.lang = language
    document.title = translations[language].site.title
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages,
      t: translations[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}

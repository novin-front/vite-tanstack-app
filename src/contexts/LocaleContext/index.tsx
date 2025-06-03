// src/contexts/LocaleContext.tsx
import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

type LocaleContextType = {
  locale: string
  setLocale: (newLocale: string) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within LocaleProvider')
  return context
}

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const [locale, setLocale] = useState<string>('en') // مقدار پیش‌فرض
  const { i18n } = useTranslation()

  // به‌روزرسانی زبان بر اساس URL
  useEffect(() => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean)
    const urlLocale = pathSegments[0] || 'en'
    if (['en', 'fa'].includes(urlLocale)) {
      setLocale(urlLocale)
      localStorage.setItem('locale', urlLocale)
      i18n.changeLanguage(urlLocale)
    }
  }, [])
  useEffect(() => {
    const dir = locale === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  // تغییر زبان و URL
  const changeLocale = (newLocale: string) => {
    if (!['en', 'fa'].includes(newLocale)) return

    const pathSegments = window.location.pathname.split('/').filter(Boolean)
    pathSegments[0] = newLocale
    const newPath = `/${pathSegments.join('/')}`

    setLocale(newLocale)
    navigate({ to: newPath }) // ناوبری به URL جدید
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

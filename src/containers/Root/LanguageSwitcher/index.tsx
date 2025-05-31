import { useLocale } from '@/contexts/LocaleContext'

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale()

  return (
    <button onClick={() => setLocale(locale === 'fa' ? 'en' : 'fa')}>
      {locale === 'fa' ? 'English' : 'فارسی'}
    </button>
  )
}

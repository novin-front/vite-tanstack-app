import { useLocale } from '@/contexts/LocaleContext'
import { Button } from '@mantine/core'
import styles from './index.module.css'

import { useRouter } from '@tanstack/react-router'
export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale()
  const router = useRouter()

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale)
    const path = router.state.location.pathname
    const newPath = path.replace(/^\/[^/]+/, `/${newLocale}`)
    router.navigate({ to: newPath })
  }
  return (
    <div className={styles.root}>
      <Button
        color="dark"
        onClick={() => changeLanguage(locale === 'fa' ? 'en' : 'fa')}
      >
        {locale === 'fa' ? 'فارسی' : 'English'}
      </Button>
    </div>
  )
}

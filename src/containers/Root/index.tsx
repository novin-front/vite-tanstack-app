import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Route as aboutRoute } from '@/routes/$locale/about/route'
import { LanguageSwitcher } from './LanguageSwitcher'
import { AppModeSwitch } from './AppModeSwitch'

export const Root = () => {
  const { t, i18n } = useTranslation('common')
  console.log('i18n ==>', i18n)
  return (
    <div>
      {t('title')}
      <p>تست زبان </p>
      <h1>Welcome!</h1>
      <h2>this is root page</h2>
      <h3>this is root page</h3>
      <h4>this is root page</h4>
      <LanguageSwitcher />
      <AppModeSwitch />
      <Link to={aboutRoute.to} params={{ locale: i18n.language }}>
        to about page
      </Link>
    </div>
  )
}

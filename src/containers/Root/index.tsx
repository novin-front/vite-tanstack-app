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
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.{' '}
      </p>
      <LanguageSwitcher />
      <AppModeSwitch />
      <Link to={aboutRoute.to} params={{ locale: i18n.language }}>
        to about page
      </Link>
    </div>
  )
}

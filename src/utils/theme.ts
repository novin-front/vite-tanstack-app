import { createTheme as mantineCreateTheme } from '@mantine/core'

type ThemeParams = {
  dir?: 'ltr' | 'rtl'
} | void

// Create a custom Mantine theme
export const createTheme = (themeParams: ThemeParams) => {
  return mantineCreateTheme({
    fontFamily: (() => {
      switch (themeParams?.dir) {
        case 'rtl':
          return "'Vazirmatn', sans-serif" // Use Vazirmatn for RTL
        case 'ltr':
          return "'OpenSans', sans-serif" // Use OpenSans for LTR
        default:
          return "'Vazirmatn', sans-serif" // Default to Vazirmatn
      }
    })(),
    breakpoints: {
      xs: '36em', // 576px for mobile
      sm: '48em', // 768px for tablets
      md: '62em', // 992px for larger tablets
      lg: '75em', // 1200px (optional)
      xl: '88em', // 1408px (optional)
    },
  })
}

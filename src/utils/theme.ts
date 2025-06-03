import {
  createTheme,
  defaultVariantColorsResolver,
  parseThemeColor,
  VariantColorsResolverInput,
} from '@mantine/core'

import { iransansx } from '@/utils/fonts/iransansx'
import { montserrat } from '@/utils/fonts/montserrat'

type ThemeParams = {
  dir?: 'ltr' | 'rtl'
} | void

const lightColors = {
  primary: '#0B3C7D',
  secondary: '#FFA726',
  accent: '#A9B9D1',
  background: '#F7F8FA',
  surface: '#F1F3F5',
  border: '#D5D8DC',
  success: '#26C281',
  error: '#E74C3C',
  information: '#2979FF',
  textPrimary: '#000000',
  textSecondary: '#586069',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
}

const darkColors = {
  primary: '#1E4E8C',
  secondary: '#FFA726',
  accent: '#0B1F3A',
  background: '#0B1624',
  surface: '#10213B',
  border: '#3D4857',
  success: '#26C281',
  error: '#E74C3C',
  information: '#2979FF',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0BEC5',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
}

export const createAppTheme = (themeParams: ThemeParams) => {
  const lang = localStorage.getItem('i18nextLng')
  const dir = themeParams?.dir || (lang === 'en' ? 'ltr' : 'rtl')
  console.log('dir =>', dir)

  return createTheme({
    fontFamily: (() => {
      switch (dir) {
        case 'rtl':
          return iransansx.style.fontFamily
        case 'ltr':
          return montserrat.style.fontFamily
        default:
          return createTheme({}).fontFamily
      }
    })(),

    headings: {
      fontFamily: (() => {
        switch (dir) {
          case 'rtl':
            return iransansx.style.fontFamily
          case 'ltr':
            return montserrat.style.fontFamily
          default:
            return createTheme({}).fontFamily
        }
      })(),
      sizes: {
        h1: { fontSize: '96px', fontWeight: '700', lineHeight: '144px' },
        h2: { fontSize: '72px', fontWeight: '700', lineHeight: '112px' },
        h3: { fontSize: '56px', fontWeight: '700', lineHeight: '84px' },
        h4: { fontSize: '32px', fontWeight: '700', lineHeight: '48px' },
        h5: { fontSize: '24px', fontWeight: '700', lineHeight: '36px' },
        h6: { fontSize: '18px', fontWeight: '700', lineHeight: '28px' },
      },
    },

    colors: {
      primary: [
        '#EAF2FF',
        '#D4E4FF',
        '#BFD6FF',
        '#A9C8FF',
        '#6EA1D9',
        '#4C88C6',
        '#0F4D91',
        '#0D3C70',
        '#0A2B4F',
        '#081A2E',
      ],
      secondary: [
        '#FFF2E6',
        '#FFE0BF',
        '#FFD099',
        '#FFBD73',
        '#FFAD4D',
        '#FF9B26',
        '#FF7F00',
        '#E66B00',
        '#B34F00',
        '#803400',
      ],
      gray: [
        '#FFFFFF', // 000
        '#F9FAFB', // 100
        '#F3F4F6', // 200
        '#E5E7EB', // 300
        '#D1D5DB', // 400
        '#9CA3AF', // 500
        '#6B7280', // 600
        '#374151', // 700
        '#1F2937', // 800
        '#111827', // 900
      ],
      error: [
        '#FFECEC', // 50
        '#FFCCCC', // 100
        '#FFA9A9', // 200
        '#FF8585', // 300
        '#FF6666', // 400
        '#FF4747', // 500
        '#FF4747', // 600
        '#FF4747', // 700
        '#FF4747', // 800
        '#FF4747', // 900
      ],
      success: [
        '#E6FFF5', // 50
        '#CCFFEB', // 100
        '#99FFD6', // 200
        '#66FFC2', // 300
        '#33FFAD', // 400
        '#00FF99', // 500
        '#00FF99', // 600
        '#00FF99', // 700
        '#00FF99', // 800
        '#00FF99', // 900
      ],
      information: [
        '#E6F0FF', // 50
        '#CCE0FF', // 100
        '#99C2FF', // 200
        '#66A3FF', // 300
        '#3385FF', // 400
        '#0066FF', // 500
        '#0066FF', // 600
        '#0066FF', // 700
        '#0066FF', // 800
        '#0066FF', // 900
      ],
      black: [
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#050505',
        '#050505',
        '#050505',
        '#050505',
        '#050505',
      ],
      white: [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#F6F7F9',
        '#F6F7F9',
        '#F6F7F9',
        '#F6F7F9',
        '#F6F7F9',
      ],

      accent: [
        '#FFF4E5',
        '#FFE6BF',
        '#FFD699',
        '#FFC266',
        '#FFAD33',
        '#FF9900',
        '#FF9F1C',
        '#CC7A00',
        '#995C00',
        '#663D00',
      ],
      lightbg: [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
      ],
      darkbg: [
        '#0B1624',
        '#0B1624',
        '#0B1624',
        '#0B1624',
        '#0B1624',
        '#0B1624',
        '#0B1624',
        '#0B1624',
        '#0B1624',
        '#0B1624',
      ],
      textlight: [
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
      ],
      textdark: [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
      ],
    },

    other: {
      light: lightColors,
      dark: darkColors,
    },

    primaryColor: 'primary',

    breakpoints: {
      xs: '36em',
      sm: '48em',
      md: '62em',
      lg: '75em',
      xl: '88em',
    },

    variantColorResolver: (input: VariantColorsResolverInput) => {
      const defaultResolvedColors = defaultVariantColorsResolver(input)
      const parsedColor = parseThemeColor({
        color: input.color || input.theme.primaryColor,
        theme: input.theme,
      })

      if (
        (parsedColor.color === 'primary' || parsedColor.color === 'accent') &&
        input.variant === 'filled'
      ) {
        return {
          ...defaultResolvedColors,
          background: parsedColor.value,
          color: input.theme.white,
          hover: `${parsedColor.value}cc`,
        }
      }

      return defaultResolvedColors
    },
  })
}

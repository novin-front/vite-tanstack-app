import {
  createTheme,
  defaultVariantColorsResolver,
  parseThemeColor,
  VariantColorsResolverInput,
} from '@mantine/core'

import { opensans } from '@/utils/fonts/opensans'
import { vazirmatn } from '@/utils/fonts/vazirmatn'

type ThemeParams = {
  dir?: 'ltr' | 'rtl'
} | void

export const createAppTheme = (themeParams: ThemeParams) => {
  return createTheme({
    fontFamily: (() => {
      switch (themeParams?.dir) {
        case 'rtl':
          return vazirmatn.style.fontFamily
        case 'ltr':
          return opensans.style.fontFamily
        default:
          return createTheme({}).fontFamily
      }
    })(),

    colors: {
      primaryOrange: [
        '#fffbe1',
        '#fff6cb',
        '#ffeb9a',
        '#ffe064',
        '#ffd738',
        '#ffd11c',
        '#ffcc00', // main accent
        '#e3b600',
        '#caa100',
        '#ae8b00',
      ],
      primaryBlue: [
        '#e6f7ff',
        '#ccefff',
        '#99ddff',
        '#66ccff',
        '#33bbff',
        '#1fa3e0',
        '#11306d', // main primary
        '#0f2a5e',
        '#0c244f',
        '#0a1d3f',
      ],
    },
    breakpoints: {
      xs: '36em', // 576px for mobile
      sm: '48em', // 768px for tablets
      md: '62em', // 992px for larger tablets
      lg: '75em', // 1200px (optional)
      xl: '88em', // 1408px (optional)
    },

    variantColorResolver: (input: VariantColorsResolverInput) => {
      const defaultResolvedColors = defaultVariantColorsResolver(input)
      const parsedColor = parseThemeColor({
        color: input.color || input.theme.primaryColor,
        theme: input.theme,
      })

      if (parsedColor.color === 'primaryOrange' && input.variant === 'filled') {
        return {
          ...defaultResolvedColors,
          background: parsedColor.value,
          color: input.theme.white,
          hover: `${parsedColor.value}cc`,
        }
      }

      if (parsedColor.color === 'primaryBlue' && input.variant === 'filled') {
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

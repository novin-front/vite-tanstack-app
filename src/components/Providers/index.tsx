import { QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { createAppTheme } from '@/utils/theme'
import { queryClient } from '@/api/config'
import { RouterProvider } from './RouterProvider'
import { DeviceRestriction } from '../deviceRestriction'

export const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={createAppTheme()} withCssVariables>
        <DeviceRestriction>
          <RouterProvider />
        </DeviceRestriction>
      </MantineProvider>
    </QueryClientProvider>
  )
}

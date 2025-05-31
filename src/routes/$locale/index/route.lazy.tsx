import { createLazyFileRoute } from '@tanstack/react-router'
import { Root } from '@/containers/Root'
import { LocaleProvider } from '@/contexts/LocaleContext'
export const Route = createLazyFileRoute('/$locale/')({
  component: () => (
    <LocaleProvider>
      <Root />
    </LocaleProvider>
  ),
})

import { useMantineColorScheme, Button, Group } from '@mantine/core'

export const AppModeSwitch = () => {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme()

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button color="secondary" onClick={() => setColorScheme('auto')}>
        Auto
      </Button>
      <Button color="accent" onClick={clearColorScheme}>
        Clear
      </Button>
    </Group>
  )
}

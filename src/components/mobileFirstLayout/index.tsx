import { Container } from '@mantine/core'
import styles from './index.module.css'

// MobileFirstLayout component with responsive styles
export const MobileFirstLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <Container className={styles.container}>{children}</Container>
}

import { useEffect, useState } from 'react'
import { Title, Text, Container, Button } from '@mantine/core'

// DeviceRestriction component to restrict access on laptops and PCs
export const DeviceRestriction = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isAllowedDevice, setIsAllowedDevice] = useState(true)

  useEffect(() => {
    // Get user agent and window width
    const userAgent = navigator.userAgent.toLowerCase()
    const windowWidth = window.innerWidth

    // Check if device is mobile or tablet (Android or iOS)
    const isMobileOrTablet = /android|iphone|ipad|ipod|mobile|tablet/.test(
      userAgent,
    )

    // Check if screen width is larger than typical tablet size (e.g., 1024px)
    const isLargeScreen = windowWidth > 1024

    // Allow access only for mobile or tablet devices and non-large screens
    setIsAllowedDevice(isMobileOrTablet && !isLargeScreen)

    // Update on window resize
    const handleResize = () => {
      setIsAllowedDevice(
        /android|iphone|ipad|ipod|mobile|tablet/.test(
          navigator.userAgent.toLowerCase(),
        ) && window.innerWidth <= 1024,
      )
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isAllowedDevice) {
    return (
      <Container
        size="sm"
        style={{ textAlign: 'center', padding: '2rem' }}
        dir="rtl"
      >
        <Title order={2} mb="lg">
          دسترسی محدود
        </Title>
        <Text mb="lg">
          این اپلیکیشن فقط روی گوشی‌ها و تبلت‌های اندروید و iOS در دسترس است.
        </Text>
        <Button
          color="brand"
          onClick={() => window.location.reload()}
          style={{ fontFamily: "'Vazirmatn', sans-serif" }}
        >
          تلاش دوباره
        </Button>
      </Container>
    )
  }

  return <>{children}</>
}

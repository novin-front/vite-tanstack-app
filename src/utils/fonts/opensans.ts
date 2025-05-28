import { useEffect } from 'react'

export function OpenSansFont() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @font-face {
        font-family: 'Open Sans';
        src: url('/src/assets/fonts/OpenSans-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Open Sans';
        src: url('/src/assets/fonts/OpenSans-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

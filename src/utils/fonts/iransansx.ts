import { useEffect } from 'react'

export function IranSansXFont() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @font-face {
        font-family: 'IRANSansX';
        src: url('/src/assets/fonts/IRANSansX-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'IRANSansX';
        src: url('/src/assets/fonts/IRANSansX-Bold.woff2') format('woff2');
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

// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    if (DefaultTheme.setup) DefaultTheme.setup()

    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.defer = true
      script.src = '/_vercel/insights/script.js'
      document.head.appendChild(script)
    }
  },
}

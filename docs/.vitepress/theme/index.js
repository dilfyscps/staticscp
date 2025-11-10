// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { injectAnalytics } from '@vercel/analytics'

export default {
  ...DefaultTheme,
  setup() {
    // Call DefaultTheme's setup if it exists
    if (DefaultTheme.setup) DefaultTheme.setup()

    // Inject analytics only on the client
    if (typeof window !== 'undefined') {
      injectAnalytics()
    }
  },
}

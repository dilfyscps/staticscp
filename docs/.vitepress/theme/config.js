import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,

  title: "DILFYSCPS",
  description: "Scenepack Directory",

  themeConfig: {
    sidebar: [ /* ... */ ],
    logo: '...',
    nav: [ /* ... */ ],

    search: {
      provider: 'algolia',
      options: {
        appId: '58JO3XHRWM',
        apiKey: 'd60c88800c8830d60aec5a4948af7e95',
        indexName: 'posters',
        placeholder: 'Search scene packs...',
      }
    }
  }
})

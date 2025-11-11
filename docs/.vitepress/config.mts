import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,

  title: "DILFYSCPS",
  description: "Scenepack Directory",

  themeConfig: {
    sidebar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Scenepacks',
        collapsed: true,
        items: [
          { text: 'TV SHOWS', link: '/tvshows'},
          { text: 'MOVIES', link: '/movies'},
          { text: 'TIKTOKERS & OF CREATORS', link: '/tiktokers'},
          { text: 'CELEBS', link: '/celebs'},
          { text: 'TRAILERS', link: '/trailers'}
        ]
      },
      {
        text: 'Others',
        collapsed: true,
        items: [
          { text: 'AFFILIATES', link: '/affiliates'},
          { text: 'FAQ', link: '/faq'},
          { text: 'RULES', link: '/rules'},
        ]
      },
      {
        text: 'Socials',
        collapsed: true,
        items: [
          { text: 'DILFYSCPS IG', link: 'https://instagram.com/dilfyscps'},
          { text: 'CVMSCPS IG', link: 'https://instagram.com/cvmscps'},
          { text: 'DILFYSCPS TIKTOK', link: 'https://tiktok.com/@castelloaep'},
          { text: 'CVMSCPS TIKTOK', link: 'https://tiktok.com/@cvmscps'}
        ]
      }
    ],
    logo: 'https://www.freepnglogos.com/uploads/cum-png/cum-white-splatter-clip-art-clkerm-vector-clip-art-9.png',

    // --- Replace default search with Algolia ---
    search: {
      provider: 'algolia',
      options: {
        appId: 'EMIQ9A6YTQ',                    // Your Algolia App ID
        apiKey: 'e0a3ab40da85ea854cce7e3800ad0b3e', // Search-only API key
        indexName: 'dilfyscps_Algolia_Blog',             // Your index name
        placeholder: 'Seach scenepacks..',
        
      }
    },

    nav: [
      { text: 'Home', link: '/' },
    ],
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  
  title: "DILFYSCPS",
  description: "Scenepack Directory",
  head: [['link', { rel: 'icon', href: 'docs/public/favicon.ico' }]],
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
          { text: 'DILFYSCPS TIKTOK', link: 'https://tiktok.com/@ktrivae'},
          { text: 'CVMSCPS TIKTOK', link: 'https://tiktok.com/@cvmscps'}
        ]
      }
    ],
    logo: 'https://www.freepnglogos.com/uploads/cum-png/cum-white-splatter-clip-art-clkerm-vector-clip-art-9.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DILFYSCPS Requests', link: 'https://www.instagram.com/p/DO15P_dkrJT/?utm_source=ig_web_copy_link&igsh=MWxpcmY4bWMyMnJx' },
      { text: 'CVMSCPS Requests', link: 'https://www.instagram.com/p/DOkcT32DCQN/' }
    ],

  }
})
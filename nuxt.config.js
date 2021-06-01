import contents from './static/contents.json'

const env = {
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://festivalzigzag.fr',
  mainTitle: 'Festival Zigzag',
  mainDesc: 'Zigzag, Festival d\'architecture et des arts de l\'espace'
}

export default {
  mode: 'universal',
  /*
  ** Env
  */
  env: {
    ...env
  },
  /*
  ** Headers of the page
  */
  head: {
    title: env.mainTitle,
    htmlAttrs: {
      lang: 'fr',
      dir: 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: env.mainDesc },
      { hid: 'og:site_name', property: 'og:site_name', content: env.mainTitle },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og.description', name: 'og.description', content: env.mainDesc },
      { hid: 'og:image', property: 'og:image', content: env.url + '/apple-touch-icon.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter.description', name: 'twitter.description', content: env.mainDesc },
      { hid: 'twitter.image', name: 'twitter.image', content: env.url + '/apple-touch-icon.png' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: '_8i0lpUnEjnS_5gs8aQryoLAW_J085Ofl90krfb6z30'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'alternate', type: 'application/rss+xml', href: env.url + '/rss.xml', title: env.mainTitle }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 'nuxt-leaflet',
    ['nuxt-leaflet', {}],
    '@nuxtjs/feed',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Plugins
  */
  plugins: [
    { src: '~/plugins/leaflet-marker-cluster.js', mode: 'client' }
  ],
  /*
  ** Build configuration
  */
  build: {
    styleResources: {
      scss: './assets/scss/_variables.scss'
    },
    extend (config, { isClient }) {
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    dir: 'public',
    routes () {
      return Object.entries(contents)
        .filter(([slug, content]) => content.dir !== 'blocks')
        .map(([slug, content]) => slug)
    }
  },
  /*
   * Router
   */
  router: {
    middleware: ['contents']
  },
  /**
   * Feed
   */
  feed: [
    {
      path: '/rss.xml',
      type: 'rss2',
      language: 'fr',
      favicon: env.url + '/favicon.ico',
      create (feed) {
        feed.options = {
          title: env.title,
          link: env.url + '/rss.xml',
          description: 'Journal du Festival Zigzag'
        }
        Object.entries(contents)
          .filter(([slug, content]) => content.dir === 'stories')
          .forEach(([slug, content]) => {
            feed.addItem({
              title: content.title,
              id: slug,
              link: env.url + slug,
              date: new Date(Number(content.dates[0].start.timestamp)),
              content: content.html
            })
          })
      }
    }
  ],
  /**
   * Sitemap
   */
  sitemap: {
    hostname: env.url + '/',
    gzip: true,
    routes () {
      return Object.entries(contents)
        .filter(([slug, content]) => content.dir !== 'blocks')
        .map(([slug, content]) => slug)
    }
  }
}

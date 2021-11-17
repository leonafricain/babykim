export default {
  target: 'static',
  head: {
    title: 'babykim',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],
  plugins: [
    '~/plugins/clickaway.js'
  ],
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts:{
    download: true,
    families:{
      'Open Sans': [400, 600, 800]
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/cloudinary'
    
  ],
  cloudinary: {
  cloudName: process.env.CLOUDNAME,
 // apiKey: process.env.API_KEY, //only needed if you are using server-side upload
//  apiSecret: process.env.API_SECRET, //only needed if you are using server-side upload,
  useComponent: true
},

  build: {
  },
 }

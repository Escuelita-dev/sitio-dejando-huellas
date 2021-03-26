import conf from './utils/conf'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sitio-dejando-huellas',
    htmlAttrs: {
      lang: 'en'
    },
    // Agregar boyAttrs: boxed_wrapper ???
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dejando huellas' },
      { hid: 'author', name: 'author', content: 'MauricioEtcheverry/MatiasCarrea' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/library/animate/animate.min.css' },
      { rel: 'stylesheet', href: '/library/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/library/bootstrap/css/bootstrap-dropdownhover.min.css' },
      { rel: 'stylesheet', href: '/library/icofont/icofont.min.css' },
      { rel: 'stylesheet', href: '/library/owlcarousel/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/library/select2/css/select2.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/home-main.css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/render.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit'
  ],
  strapi: {
    url: conf.strapiBaseUri
  },
  markdownit: {
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-modify-token'
    ],
    modifyToken: function (token, env) {
      switch (token.type) {
      case 'image': // set all images to 200px width except for foo.gif
        token.attrObj.src = (env.baseUrl ? env.baseUrl : '') + token.attrObj.src
        break;
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

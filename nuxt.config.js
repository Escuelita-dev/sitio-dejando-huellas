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
    ],
    script: [
      {
        src: "/library/jquery/jquery.min.js"
      },
      {
        src: "/library/bootstrap/js/bootstrap.bundle.min.js"
      },
      {
        src: "/library/bootstrap/js/bootstrap-dropdownhover.min.js"
      },
      {
        src: "/library/feather-icons/feather.min.js"
      },
      {
        src: "/library/owlcarousel/js/owl.carousel.min.js"
      },
      {
        src: "/library/select2/js/select2.min.js"
      },
      {
        src: "/library/magnific-popup/jquery.magnific-popup.min.js"
      },
      {
        src: "/library/jquery-instagramFeed/jquery.instagramFeed.min.js"
      },
      {
        src: "/library/jquery-waypoints/jquery.waypoints.min.js"
      },
      {
        src: "/library/countdown/jquery.countdown.min.js"
      },
      {
        src: "/library/jquery-appear/jquery.appear.js"
      },
      {
        src: "/library/jquery-easing/jquery.easing.min.js"
      },
      {
        src: "/library/jquery.counterup/jquery.counterup.min.js"
      },
      {
        src: "/library/jquery-validate/jquery.validate.min.js"
      },
      {
        src: "/js/site-custom.js"
      },
      {
        src: "/js/home-slider.js"
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
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
        token.attrObj.src = "https://strapi.dejando-huellas.escuelita.dev" + token.attrObj.src
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

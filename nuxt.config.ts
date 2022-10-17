// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-quasar-vite', '@nuxt/content', '@nuxt/image-edge'],
  quasar: {
    sassVariables: 'assets/styles/variables.scss',
    css: ['@quasar/extras/material-icons/material-icons.css', '@quasar/extras/fontawesome-v6/fontawesome-v6.css'],
  },
  css: ['assets/styles/main.scss'],
  meta: {
    titleTemplate: '%s | ',
    link: [
      { rel: 'icon', type: 'image/png', sizes: '128x128', href: 'icons/favicon-128x128.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/ico', href: 'favicon.ico' },
    ]
  },
  image: { cloudinary: { baseURL: 'https://res.cloudinary.com/<your_cloudinary_id>/image/upload/<folder>/images/' } }
})
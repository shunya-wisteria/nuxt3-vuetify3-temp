//-- add when vuetify installed
import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'
//-- add when vuetify installed

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  //-- add when vuetify installed
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: ['@/assets/main.scss','mdi/css/materialdesignicons.min.css'],
  //-- add when vuetify installed

  runtimeConfig:{
    public:{
      appName : process.env.APP_NAME,
      appId : process.env.APP_ID,
      siteTitle : process.env.SITE_TITLE
    }
  }

})

import { createVuetify } from 'vuetify'
import { MAIN_THEME, mainTheme, MAIN_DARK_THEME, mainDarkTheme } from '@/helpers/themes'
import { defaults } from '@/helpers/default'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    // 他の設定をここに記述していく
    defaults,
    display: {
      mobileBreakpoint: 'sm',
    },
    // add theme
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme,
      },
      // primary-darken-9 primary-lighten-9 までできるようにする
      // variations: {
      //   colors: ['primary', 'secondary', 'accent', 'drawer'],
      //   lighten: 9,
      //   darken: 9,
      // },
    },

  })

  // Vue.js で Vuetify を使用する
  nuxtApp.vueApp.use(vuetify)
})
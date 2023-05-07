import { ThemeDefinition } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

// テーマ名
export const MAIN_THEME = 'mainTheme'
// Light mode theme
export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: colors.blue.darken1,
    accent: colors.blueGrey.lighten1,
    secondary: colors.blueGrey.darken2,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    tilebg: colors.grey.lighten4,
    drawer: colors.blueGrey.darken3,
    textondark : colors.grey.lighten5
  },
}

// Dark モードのテーマ名
export const MAIN_DARK_THEME = 'mainDarkTheme'
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0C111B',
    surface: '#1f2937',
    primary: '#6366f1',
    secondary: '#9333ea',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
  },
}
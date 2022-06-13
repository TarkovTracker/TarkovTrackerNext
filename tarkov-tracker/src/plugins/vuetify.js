// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

const colorTheme = {
  primary: '#0A0A09',
  secondary: '#9A8866',
  accent: '#242F35',
  info: '#181817',
  success: '#242F35',
  warning: '#242F35',
  error: '#FF0000',
  failure: '#540000',
}

const themeDark = {
  ...colorTheme,
  bgdarken: colors.grey.darken4,
  enough: '#001638',
  questlink: colors.grey.lighten4,
  objectiveahead: '#193011',
  objectivecomplete: '#114200',
  objectiveuncomplete: '#391111',
  objectiveenough: '#2e455a',
  chartbase: '#ffffff',
  sitebackground: '#121212',
  contentbackground: '#1E1E1E'
}

export default createVuetify({
  global: {
    ripple: false,
  },
  theme: {
    defaultTheme: 'dark'
  },
  themes: {
    dark: themeDark,
  },
})

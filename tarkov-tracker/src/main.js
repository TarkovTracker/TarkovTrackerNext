import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createI18n } from 'vue-i18n'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  globalInjection: true,
  locale: 'en',
  messages
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(i18n)
  .mount('#app')

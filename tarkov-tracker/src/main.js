import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  globalInjection: true,
  locale: 'en',
  messages
})

const pinia = createPinia()

loadFonts()

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount('#app')

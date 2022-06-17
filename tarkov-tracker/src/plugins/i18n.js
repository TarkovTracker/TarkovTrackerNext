// i18n translations
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
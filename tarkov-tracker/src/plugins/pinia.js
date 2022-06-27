// Pinia store
import { createPinia } from 'pinia'
import { PiniaFirestore } from './pinia-firestore'
const pinia = createPinia()
pinia.use(PiniaFirestore)

export default pinia
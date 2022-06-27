import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

// The 'localTarkov' Pinia Store. Used to keep tarkov progress state in local storage when not signed in.
export const useLocalTarkovStore = defineStore('localTarkov', {
  state: () => ({
    // The initial state of the store
    level: useStorage('tarkov_level', 1),
  }),
  getters: {
    // State getters
  },
  actions: {
    // State mutations or setters
  }
})
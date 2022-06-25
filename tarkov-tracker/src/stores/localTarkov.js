import { defineStore } from 'pinia'

// The 'localTarkov' Pinia Store. Used to keep tarkov progress state in local storage when not signed in.
export const useLocalTarkovStore = defineStore('localTarkov', {
  state: () => ({
    // The initial state of the store
    name: 'localTarkov'
  }),
  getters: {
    // State getters
  },
  actions: {
    // State mutations or setters
  }
})
import { defineStore } from 'pinia'

// The 'remoteTarkov' Pinia Store. Used to keep tarkov progress state with firestore when signed in.
export const useRemoteTarkovStore = defineStore('remoteTarkov', {
  state: () => ({
    // The initial state of the store
    name: 'remoteTarkov'
  }),
  getters: {
    // State getters
  },
  actions: {
    // State mutations or setters
  }
})
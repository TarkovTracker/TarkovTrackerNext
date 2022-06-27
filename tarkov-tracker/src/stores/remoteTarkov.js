import { defineStore } from 'pinia'
// The 'remoteTarkov' Pinia Store. Used to keep tarkov progress state with firestore when signed in.
export const useRemoteTarkovStore = defineStore('remoteTarkov', {
  state: () => ({
    // The initial state of the store
    level: 1,
  }),
  getters: {
    // State getters
  },
  actions: {
    // State mutations or setters
  },
  firestore: {
    // {uid} will be replaced by the current auth'ed user's uid on bind 
    document: 'progress/{uid}',
    // The number of miliseconds to debounce changes to the firestore document
    debouncems: 250,
  }
})
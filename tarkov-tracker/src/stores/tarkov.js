import { defineStore } from 'pinia'
import { computed } from 'vue'
import { fireuser } from '@/plugins/firebase'
import { useLocalTarkovStore } from '@/stores/localTarkov'
import { useRemoteTarkovStore } from '@/stores/remoteTarkov'

const whichStore = computed(() => {
  const remoteTarkovStore = useRemoteTarkovStore()
  const localTarkovStore = useLocalTarkovStore()
  return fireuser?.uid ? remoteTarkovStore : localTarkovStore
})

// The 'tarkov' Pinia Store. Used to keep tarkov progress state
export const useTarkovStore = defineStore('tarkov', {
  state: () => ({
    // The initial state of the store
    level: 1,
  }),
  getters: {
    // State getters
    storeSelected() {
      return whichStore.value.name
    },
    playerLevel() {
      return whichStore.value.level
    }
  },
  actions: {
    // State mutations or setters
    incrementLevel() {
      whichStore.value.level++
    },
    decrementLevel() {
      whichStore.value.level--
    }
  }
})
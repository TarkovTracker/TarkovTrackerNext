import { defineStore } from 'pinia'
import { computed, watch } from 'vue'
import { fireuser } from '@/plugins/firebase'
import { useLocalTarkovStore } from '@/stores/localTarkov'
import { useRemoteTarkovStore } from '@/stores/remoteTarkov'

// Watch for fireuser state changing and bind/unbind the remoteTarkov store
watch(
  () => fireuser.loggedIn,
  (newValue) => {
    const remoteTarkovStore = useRemoteTarkovStore()
    if(newValue) {
      remoteTarkovStore.firebind()
    }else{
      remoteTarkovStore.fireunbind()
    }
  },
  // Immediately trigger the watch
  { immediate: true }
)

// Select the store to utilize based on the current user's state
const whichStore = computed(() => {
  const remoteTarkovStore = useRemoteTarkovStore()
  const localTarkovStore = useLocalTarkovStore()
  return fireuser.loggedIn ? remoteTarkovStore : localTarkovStore
})

// The 'tarkov' Pinia Store. Used to keep tarkov progress state
export const useTarkovStore = defineStore('tarkov', {
  state: () => ({
    // You should not be using the state here directly.
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
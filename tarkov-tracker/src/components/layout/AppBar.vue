<template>
  <v-app-bar color="transparent" elevation="0">
    <v-app-bar-nav-icon
      :icon="navBarIcon"
      variant="text"
      @click.stop="changeNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>My Page</v-toolbar-title>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from "/src/stores/app.js";
import { useDisplay } from 'vuetify'

const appStore = useAppStore();

const navBarIcon = computed(() => {
  return appStore.drawerShow && appStore.drawerRail ? 'mdi-menu-open' : 'mdi-menu'
})

// Change how the navigation bar is modified based upon the screen size
// Either change between open/close or rail/full
const { mdAndDown } = useDisplay()
function changeNavigationDrawer() {
  if (mdAndDown.value) {
    appStore.drawerShow = !appStore.drawerShow
  }else{
    appStore.drawerRail = !appStore.drawerRail
  }
}
</script>

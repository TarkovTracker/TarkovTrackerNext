<template>
  <v-app-bar color="transparent" elevation="0">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="changeNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>My Page</v-toolbar-title>
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "/src/stores/app.js";
import { useDisplay } from 'vuetify'

const appStore = useAppStore();

const { mdAndDown } = useDisplay()

function changeNavigationDrawer() {
  if (mdAndDown.value) {
    appStore.drawerShow = !appStore.drawerShow
  }else{
    appStore.drawerRail = !appStore.drawerRail
    
  }
}
</script>

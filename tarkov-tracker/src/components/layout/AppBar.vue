<template>
  <v-app-bar color="transparent" elevation="0">
    <template #prepend>
      <v-app-bar-nav-icon
        :icon="navBarIcon"
        variant="text"
        aria-label="Toggle Menu Drawer"
        @click.stop="changeNavigationDrawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-toolbar-title>{{ $t(`page.${route.name}.title`)}}</v-toolbar-title>
    
    <template #append>
      <v-menu
      v-model="state.menu"
      :close-on-content-click="false"
      location="start"
    >
      <template #activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <overflow-menu />
    </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { defineAsyncComponent } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

const state = reactive({ menu: null })

const appStore = useAppStore();

const route = useRoute()

const navBarIcon = computed(() => {
  return appStore.drawerShow && appStore.drawerRail ? 'mdi-menu-open' : 'mdi-menu'
})

const OverflowMenu = defineAsyncComponent(() =>
  import("/src/components/layout/OverflowMenu.vue")
)

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

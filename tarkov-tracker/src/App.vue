<template>
  <v-app>
    <!-- Navigation Drawer -->
    <nav-drawer />

    <!-- Application Bar-->
    <app-bar />

    <!-- Main View -->
    <v-main>

      <router-view />
      <app-footer />
    </v-main>

  </v-app>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const NavDrawer = defineAsyncComponent(() =>
  import("/src/components/layout/NavDrawer.vue")
)
const AppFooter = defineAsyncComponent(() =>
  import("/src/components/layout/AppFooter.vue")
)
const AppBar = defineAsyncComponent(() =>
  import("/src/components/layout/AppBar.vue")
)
</script>
<style lang="scss">
// Set the font family for the application to Share Tech Mono
.v-application {
  [class*="text-"] {
    font-family: 'Share Tech Mono', sans-serif !important;
  }
  font-family: 'Share Tech Mono', sans-serif !important;
}
</style>
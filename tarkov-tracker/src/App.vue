<template>
  <v-app>
    <!-- Navigation Drawer -->
    <nav-drawer />
    <!-- Main View -->
    <v-main>
      <v-card height="200px">{{ $t('hello_world')}} </v-card>
      <app-footer />
    </v-main>
    
  </v-app>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: "TarkovTracker",

  components: {
    NavDrawer: defineAsyncComponent(() =>
      import("/src/components/NavDrawer.vue")
    ),
    AppFooter: defineAsyncComponent(() =>
      import("/src/components/AppFooter.vue")
    ),
  },

  data: () => ({}),
};
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
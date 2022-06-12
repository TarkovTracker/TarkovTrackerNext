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
import NavDrawer from "./components/NavDrawer.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "TarkovTracker",

  components: {
    NavDrawer,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>

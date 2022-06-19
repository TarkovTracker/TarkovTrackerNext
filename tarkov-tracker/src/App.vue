<template>
  <!-- The main app space. -->
  <v-app>
    <!-- Layout will be rendered as part of the router view below -->
    <router-view />
  </v-app>
</template>

<script setup>
// Setup script
</script>
<style lang="scss">
// Set the font family for the application to Share Tech Mono
.v-application {
  [class*="text-"] {
    font-family: 'Share Tech Mono', sans-serif !important;
    font-display: swap;
  }
  font-family: 'Share Tech Mono', sans-serif !important;
  font-display: swap;
}
</style>
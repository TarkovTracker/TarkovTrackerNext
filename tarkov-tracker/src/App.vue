<template>
  <!-- The main app space. -->
  <v-app>
    <!-- Layout will be rendered as part of the router view below -->
    <Transition name="fade" mode="out-in">
      <router-view />
    </Transition>
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
  }
  font-family: 'Share Tech Mono', sans-serif !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<template>
    <!-- Navigation Drawer -->
    <nav-drawer />

    <!-- Application Bar-->
    <app-bar />
    <v-img
      :src='backgroundImage'
      gradient="to top, #00000075, #00000095"
      min-height="100vh"
      cover
    >
      <!-- Main View -->
      <v-main class="ma-8">
        <router-view />
        <app-footer />
      </v-main>
    </v-img>
</template>

<script setup>
import { computed } from 'vue'
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const backgroundImage = computed(() => {
  if (route.meta.background) {
    return `/img/background/${route.meta.background}.jpg`
  }else{
    return ''
  }
})

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
</style>
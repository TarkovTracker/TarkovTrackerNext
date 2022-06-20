<template>
    <!-- Navigation Drawer -->
    <nav-drawer />

    <!-- Application Bar-->
    <app-bar />
    <v-img
      :src='backgroundImage'
      gradient="to top, #00000075, #00000095"
      min-height="100vh"
      alt="Background image"
      cover
    >
      <div class="background-image">
        <!-- Main View -->
        <v-main class="ma-3 fill-height">
          <router-view />
        </v-main>
        <app-footer />
      </div>
    </v-img>
</template>

<script setup>
import { computed } from 'vue'
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const backgroundImage = computed(() => {
  if (route.meta.background) {
    return `/img/background/${route.meta.background}.webp`
  }else{
    return ''
  }
})

const NavDrawer = defineAsyncComponent(() =>
  import("@/components/layout/NavDrawer.vue")
)
const AppFooter = defineAsyncComponent(() =>
  import("@/components/layout/AppFooter.vue")
)
const AppBar = defineAsyncComponent(() =>
  import("@/components/layout/AppBar.vue")
)
</script>
<style lang="scss" scoped>
.background-image {
  background: rgba(255, 255, 255, 0.01); // Make sure this color has an opacity of less than 1
  backdrop-filter: blur(6px);
  height: 100vh;
  width: 100%;
  position:fixed;
  top: 0;
  left: 0;
}
</style>
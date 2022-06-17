<template>
  <v-list-item id="app-logo-item" class="flex flex-column" :ripple="false" to="/" >
    <v-list-item-avatar
      :class="appStore.drawerUseRail(mdAndDown) ? 'v-logo-rail' : 'v-logo-full'"
      style="height: auto; margin: 20px 0"
    >
      <v-img
        src="/img/tarkovtrackerlogo-light.png"
        lazy-src="/favicon-32x32.png"
      />
    </v-list-item-avatar>
    <v-list-item-content v-if="!appStore.drawerUseRail(mdAndDown)">
      <div class="text-h5 text-center mt-2 font-weight-medium">
        Tarkov Tracker
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script setup>
import { useAppStore } from "/src/stores/app.js";
import { useDisplay } from 'vuetify'
const { mdAndDown } = useDisplay()
const appStore = useAppStore();

</script>
<style lang="scss">
// Set up styles for rail and standard logo
#app-logo-item > .v-list-item__overlay {
  opacity: 0 !important;
}

.v-logo-full {
  width: 85%;
  min-width: 80%;
}

.v-logo-rail {
  width: 26px;
}
</style>
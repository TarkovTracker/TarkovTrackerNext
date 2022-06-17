<template>
  <v-list-item class="flex flex-column">
    <v-list-item-avatar
      :class="appStore.drawerRail ? 'v-logo-rail' : 'v-logo-full'"
      style="height: auto; margin: 20px 0"
    >
      <v-img
        src="/img/tarkovtrackerlogo-light.png"
        lazy-src="/favicon-32x32.png"
      />
    </v-list-item-avatar>
    <v-list-item-content v-if="!appStore.drawerRail">
      <div class="text-h5 text-center mt-2 font-weight-medium">
        Tarkov Tracker
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script setup>
import { useAppStore } from "/src/stores/app.js";

const appStore = useAppStore();
</script>
<style lang="scss">
// Set up styles for rail and standard logo
.v-logo-full {
  width: 85%;
  min-width: 80%;
}

.v-logo-rail {
  width: 26px;
}
</style>
<template>
  <v-navigation-drawer
    v-model="appStore.drawerShow"
    theme="dark"
    image="/img/sidebar-background.webp"
    :rail="appStore.drawerUseRail(mdAndDown)"
  >
    <tracker-logo />
    <v-divider class="mx-3 my-1" />
    <v-list nav bg-color="transparent" class="mx-auto">
      <drawer-item
        icon="mdi-fingerprint"
        locale-key="login"
        to="/login"
      >
      </drawer-item>
    </v-list>
    <v-divider class="mx-3 my-1" />
    <v-list nav bg-color="transparent" class="mx-auto">
      <drawer-item
        icon="mdi-view-dashboard"
        locale-key="home"
        to="/"
      >
      </drawer-item>
      <drawer-item
        icon="mdi-cog"
        locale-key="settings"
        to="/settings"
      >
      </drawer-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { defineAsyncComponent } from "vue";
import { useAppStore } from "/src/stores/app.js";

import { useDisplay } from 'vuetify'
const { mdAndDown } = useDisplay()

const appStore = useAppStore();

// Set up component loading
const TrackerLogo = defineAsyncComponent(() =>
  import("/src/components/drawer/TrackerLogo.vue")
);
const DrawerItem = defineAsyncComponent(() =>
  import("/src/components/drawer/DrawerItem.vue")
);
</script>
<style lang="scss" scoped>
// Set up styles for rail and standard logo
.v-logo-full {
  width: 85%;
  min-width: 80%;
}

.v-logo-rail {
  width: 26px;
}
</style>
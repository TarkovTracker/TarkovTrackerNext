<template>
  <v-navigation-drawer
    v-model="appStore.drawerShow"
    theme="dark"
    image="/img/tarkov-tracker-sidebar-01.jpg"
    :rail="appStore.drawerRail"
    rail-width="56"
  >
    <tracker-logo />
    <v-divider class="mx-3" />
    <v-list nav bg-color="transparent" class="mx-auto">
      <!-- <drawer-item
        icon="mdi-email"
        title="Test"
      >

      </drawer-item> -->
      <v-list-item
        prepend-icon="mdi-email"
        title="Inbox"
        value="inbox"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-supervisor-circle"
        title="Supervisors"
        value="supervisors"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-clock-start"
        title="Clock-in"
        value="clockin"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
//import { computed } from 'vue'
import { defineAsyncComponent } from "vue";
import { useAppStore } from "/src/stores/app.js";
// import { useDisplay } from 'vuetify'

const appStore = useAppStore();

// const { mobile } = useDisplay()
// const showDrawer = computed(() => {
//   return mobile ? true :
// })

// Set up component loading
const TrackerLogo = defineAsyncComponent(() =>
  import("/src/components/drawer/TrackerLogo.vue")
);
// const DrawerItem = defineAsyncComponent(() =>
//   import("/src/components/drawer/DrawerItem.vue")
// );
</script>

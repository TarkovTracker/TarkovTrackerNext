<template>
  <v-list-item 
    :class="itemClass"
    :to="props.to"
  >
    <v-icon :icon="props.icon"/>
    <v-list-item-title v-if="!appStore.drawerRail" :class="titleClass">
      {{ props.title }}
    </v-list-item-title>
  </v-list-item>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from "/src/stores/app.js";

const props = defineProps({
  icon: {
    type: String,
    default: "mdi-menu-right",
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

const appStore = useAppStore();

const itemClass = computed(() => ({
  'align-center': appStore.drawerRail,
  'justify-center': appStore.drawerRail,
  'active': true
}))

const titleClass = computed(() => ({
  'v-drawer-item-full': !appStore.drawerRail,
  'v-drawer-item-rail': appStore.drawerRail
}))

</script>
<style lang="scss">
// Set up styles for rail and standard item
.v-drawer-item-full {
  margin-inline-start: 32px;
}

.v-drawer-item-rail {
  width: 26px;
}
</style>
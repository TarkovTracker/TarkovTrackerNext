<template>
  <v-list-item 
    :class="itemClass"
    :to="props.to"
  >
    <v-icon :icon="props.icon"/>
    <v-list-item-title v-if="!appStore.drawerUseRail(mdAndDown)" :class="titleClass">
      {{ $t(`navigation_drawer.${props.localeKey}`) }}
    </v-list-item-title>
  </v-list-item>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from "/src/stores/app.js";
import { useDisplay } from 'vuetify'
const { mdAndDown } = useDisplay()

const props = defineProps({
  icon: {
    type: String,
    default: "mdi-menu-right",
    required: false,
  },
  localeKey: {
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
  'align-center': appStore.drawerUseRail(mdAndDown.value),
  'justify-center': appStore.drawerUseRail(mdAndDown.value),
}))

const titleClass = computed(() => ({
  'v-drawer-item-full': !appStore.drawerUseRail(mdAndDown.value),
  'v-drawer-item-rail': appStore.drawerUseRail(mdAndDown.value)
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
<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-icon :icon="props.icon"></v-icon>
    </v-list-item-avatar>
    <v-list-item-title>{{ props.title }}</v-list-item-title>
  </v-list-item>
</template>

<script setup>
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
});
</script>

<template>
<v-card height="200px" color="transparent" elevation="0">{{ $t('hello_world')}} There are {{tarkovtasks?.tasks.length}} Escape From Tarkov quests</v-card>
</template>
<script setup>
import { inject } from 'vue'

const tarkovtasks = inject('tarkovtasks')
</script>
<style lang="scss" scoped>
</style>
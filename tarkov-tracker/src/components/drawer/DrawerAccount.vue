<template>
<v-list nav bg-color="transparent" class="mx-auto">
  <drawer-item
    v-if="fireuser.uid != null"
    :text="fireuser.displayName"
    icon="mdi-account-circle"
    @click.stop="logout"
  />
  <drawer-item
    v-else
    icon="mdi-fingerprint"
    locale-key="login"
    to="/login"
  />
</v-list>
</template>
<script setup>
import { fireapp, fireuser } from '@/plugins/firebase'
import { defineAsyncComponent } from "vue";

const DrawerItem = defineAsyncComponent(() =>
  import("@/components/drawer/DrawerItem.vue")
);

function logout() {
  fireapp.auth().signOut()
}
</script>
<style lang="scss" scoped>
</style>
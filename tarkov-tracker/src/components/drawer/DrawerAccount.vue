<template>
<v-list nav bg-color="transparent" class="mx-auto">
  <template v-if="fireuser.uid != null">
    <v-list-group>
      <template #activator="{ props }">
        <v-list-item v-bind="props" :title="fireuser.displayName" :prepend-avatar="fireuser.photoURL" ></v-list-item>
      </template>
      <drawer-item
        icon="mdi-lock"
        locale-key="logout"
        @click.stop="logout"
      />
    </v-list-group>
  </template>
  <template v-else>
    <drawer-item
      icon="mdi-fingerprint"
      locale-key="login"
      to="/login"
    />
  </template>
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
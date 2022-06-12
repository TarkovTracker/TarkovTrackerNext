<template>
  <v-navigation-drawer
    theme="dark"
    image="https://tarkovtracker.io/img/tarkov-tracker-sidebar-01.jpg"
    width="260"
    permanent
  >
    <v-list nav bg-color="transparent">
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

<script>
export default {
  name: "NavDrawer",

  data: () => ({}),
};
</script>

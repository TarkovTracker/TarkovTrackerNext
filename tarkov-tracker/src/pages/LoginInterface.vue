<template>
  <v-container
    class="fill-height"
  >
    <v-row 
      align="center"
      class="fill-height"
    >
      <v-col cols="12">
        <div id="firebaseui-auth-container"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { onMounted } from 'vue'
import * as firebaseui from 'firebaseui'
import { firebase, fireapp } from '../plugins/firebase.js'

onMounted(() => {
  // Initialize the FirebaseUI Widget using Firebase.
  // The start method will wait until the DOM is loaded.
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(fireapp.auth())
  ui.start('#firebaseui-auth-container', uiConfig)
})
// FirebaseUI config.
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function () {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
    }
  },
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup',
  // Terms of Service
  tosUrl: 'https://www.termsfeed.com/live/d3a09e33-cd8e-4e08-8533-9c7a270d9ac1',
  // Privacy policy url/callback.
  privacyPolicyUrl: 'https://www.termsfeed.com/live/b6d6f7fd-adc4-4717-8a2b-83daf9d8ddb9'
}
</script>
<style lang="scss" scoped>
:deep(.firebaseui-tos) {
  text-decoration: none;
  color: #ffffff;
}

:deep(.firebaseui-link) {
  text-decoration: none;
  color: rgba(var(--v-theme-info), 1) !important;
}
</style>
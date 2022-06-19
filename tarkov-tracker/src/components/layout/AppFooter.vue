<template>
  <v-footer class="px-0 pb-0 d-flex" color="transparent" app>
    <v-container class="text-center footer-background mx-0">
      <v-row justify="center" style="font-size: 12px">
        <v-col cols="12" md="4" align-self="center">
          <div>
            Report bugs/request features on <v-icon class="mr-1">mdi-discord</v-icon><a href="https://discord.gg/zeAP4Ng" target="_blank" class="info-link">Discord</a>
          </div>
          <div class="mt-1">
            Contribute to the open source project on <v-icon class="mr-1">mdi-github</v-icon><a href="https://github.com/TarkovTracker/TarkovTracker" target="_blank" class="info-link">GitHub</a>
          </div>
          <div class="mt-1">
            Support the project on <v-icon class="mr-1">mdi-patreon</v-icon><a href="https://www.patreon.com/apologist" target="_blank" class="info-link">Patreon</a>
          </div>
            
        </v-col>
        <v-col cols="12" md="4" align-self="center">
          <v-img src="/img/UkraineDove.svg" class="custom-svg" alt="Ukraine Dove"/><a href="https://www.icrc.org/en/donate/ukraine" target="_blank" class="info-link">Support Ukraine</a> via the ICRC
        </v-col>
      </v-row>
      <!-- Notice of Battlestate Games copy/trade notices -->
      <v-container class="text-center mb-0 pb-0" style="font-size: 12px">
        <div>
          Game content and materials are trademarks and copyrights of Battlestate Games and its licensors. All rights reserved.
        </div>
        <div class="mt-2">
            TarkovTracker &copy; 2020 - {{ new Date().getFullYear() }} <router-link :to="{ path: '/contributors' }" class="info-link">TarkovTracker contributors</router-link> 
        </div>
        <div class="mt-0">
          <router-link to="/terms" target="_blank" class="info-link"
            >Terms</router-link
          >
          |
          <router-link to="/privacy" target="_blank" class="info-link"
            >Privacy</router-link
          >
        </div>
      </v-container>
    </v-container>
  </v-footer>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.footer-background {
  background-color: rgba(0,0,0,0.25);
  max-width: 100% !important;
}

a:link, a:active, a:visited {
  color: rgba(var(--v-theme-info), 1)
}

.info-link {
  text-decoration: none;
}

.custom-svg {
  height: 4em;
}
</style>
<template>
  <div id="app">
    <v-app>
      <app-header/>
      <app-carousel/>
      <div class="container-fluid">
      <router-view/>
      </div>
      <app-footer />
    </v-app>
  </div>
</template>
<script>

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppCarousel from "@/components/AppCarousel.vue"
export default {
  components: {
    AppHeader,
    AppFooter,
    AppCarousel
  }
};
</script>
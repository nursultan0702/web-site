<template>
  <div id="app">
    <v-app>
      <app-header/>
      <app-carousel/>
      <div class="container-fluid">
        <div class="mt-5">
          <div class="row">
            <div class="col-sm-3 pt-2">
              <h2>Социальные сети</h2>
              <a class="twitter-timeline"
                 data-height="600"
                 href="https://twitter.com/minhealthKZ?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
            </div>
      <router-view/>
            <div class="col-sm-3">
              <h2>Послдение новости</h2>
              <app-right-news/>
            </div>
          </div>
        </div>
      </div>
      <app-footer />
    </v-app>
  </div>
</template>
<script>

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppCarousel from "@/components/AppCarousel.vue"
import AppRightNews from "@/components/AppRightNews.vue"
export default {
  components: {
    AppHeader,
    AppFooter,
    AppCarousel,
    AppRightNews
  }
};
</script>
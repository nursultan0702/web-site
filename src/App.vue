<template>
  <div id="app">
    <v-app>
      <app-header/>
      <!--Carousel start-->
      <div>
        <v-carousel delimiter-icon="stop" prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="container-fluid">
      <router-view/>
      </div>
    </v-app>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>
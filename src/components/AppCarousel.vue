<template>
     <v-carousel hide-delimiters>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item">
          </v-carousel-item>
        </v-carousel>
</template>

<script>
export default {
    data() {
    return {
      items: [

      ]
    };
  },
    mounted() {
        this.importAll(require.context('/root/images/', true, /\.jpg$/));
    },

    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.items.push(r(key))));
        },
    },
}
</script>

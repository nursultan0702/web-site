<template>
    <div class="pt-2">
    <div class="card" style="width: 18rem;" v-for="(item) in news" :key="`${item.id}`">
        <img class="card-img-top" :src="item.img" width="286" height="180" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.body}}</p>
            <small class="text-muted">{{item.body}}</small>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        computed: {
            news() {
                var news = this.$store.getters.getNews;
                if(news.length>=3) {
                    var lastNews = {};
                    lastNews.push(news[0]);
                    lastNews.push(news[1]);
                    lastNews.push(news[2]);
                    return lastNews;
                }
                return news;
            }
        }
    }
</script>
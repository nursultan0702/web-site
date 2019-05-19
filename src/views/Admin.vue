<template>
    <div class="mt-5">
        <div class="row">
            <div class="col-sm-3 pt-2">
            </div>
            <div class="col-sm-6 pt-2">
                <h2>Новости</h2>
                <div class="card mb-3" v-for="(item) in news" :key="`${item.id}`">
                    <img class="card-img-top" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p class="card-text">{{item.body}}</p>
                        <p class="card-text"><small class="text-muted">{{item.postDate}}</small></p>
                    </div>
                </div>
                <div class="card mb-3">
                    <img class="card-img-top" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3" style="background-color:lavender;">.col-sm-3</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin"
    }
</script>

<style scoped>

</style>
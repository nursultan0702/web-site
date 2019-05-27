<template>
    <div class="mt-5">
        <div class="row">
            <div class="col-sm-3 pt-2">
                <h2>Социальные сети</h2>
                <a class="twitter-timeline"
                   data-height="600"
                   href="https://twitter.com/minhealthKZ?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
            </div>
            <div class="col-sm-6 pt-2">
                <h2>Новости</h2>
                <div class="card mb-3" v-for="(item) in news" :key="`${item.id}`">
                    <img class="card-img-top" :src="item.img"
                         alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p class="card-text">{{item.body}}</p>
                        <p class="card-text">
                            <small class="text-muted">{{item.postDate}}</small>
                        </p>
                        <v-divider></v-divider>
                        <button class="btn btn-danger" @click="deletePost(item.id)">Удалить</button>
                    </div>
                </div>
                <div class="card mb-3" v-if="getAuth">
                    <div class="card-body">
                        <h5 class="card-title"><label>Введите тему</label>
                            <input v-model="newPostTitle" type="text" class="form-control"
                                   aria-describedby="inputGroup-sizing-default">
                        </h5>
                        <h6 class="card-text">Выберите фото</h6>
                        <div class="custom-file">
                            <input type="file"
                                   id="file" name="avatar"
                                   accept="image/png, image/jpeg"
                                   ref="myFile"
                                   @change="getFile">
                        </div>
                        <h6 class="card-text">Введите основной текст</h6>
                        <textarea class="form-control" aria-label="With textarea" maxlength="10000"
                                  v-model="newPostBody"></textarea>
                        <v-divider></v-divider>
                        <button @click.prevent="savePost" class="btn btn-primary float-right">Сохранить</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-3" style="background-color:lavender;">.col-sm-3</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newPostTitle: null,
                newPostBody: null,
                img: null,
                file: []
            }
        },
        methods: {
            savePost() {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var img = "";
                if (this.file[0].name) {
                    img = this.file[0].name;
                }
                this.$store.dispatch("addPost", {
                    title: this.newPostTitle,
                    body: this.newPostBody,
                    img: img,
                    postDate: date,
                    file: this.file[0]
                });
                this.$swal({
                    type: 'success',
                    title: 'Новый пост был успешно добавлен',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.reloadPage()
            },
            reloadPage(){
                setTimeout(() =>  this.$router.go(), 2000);
            },
            getFile() {
                this.file = this.$refs.myFile.files
            },
            getUID() {
                return (this.generateUid() + this.generateUid() + "-" + this.generateUid() + "-4" + this.generateUid().substr(0, 3) + "-" + this.generateUid() + "-"
                    + this.generateUid() + this.generateUid() + this.generateUid()).toLowerCase();
            },
            generateUid() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            },
            deletePost(id){
                this.$store.dispatch("delete",id);
                this.$swal({
                    type: 'success',
                    title: 'Пост был успешно удален',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.reloadPage()
            }
        },
        computed: {
            news() {
                return this.$store.getters.getNews
            },
            getAuth(){
                return this.$store.getters.isUserAuthenticated
            }
        },
        name: "home",
        components: {},
    };
</script>

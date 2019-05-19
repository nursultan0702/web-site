<template>
    <div class="mt-5">
        <div class="row">
            <div class="col-sm-3 pt-2">
                <h2>Социальные сети</h2>
                <v-card
                        class="mx-auto"
                        color="#26c6da"
                        dark
                        max-width="400"
                >
                    <v-card-title>
                        <v-icon
                                large
                                left
                        >
                            mdi-twitter
                        </v-icon>
                        <span class="title font-weight-light">Twitter</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold">
                        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are
                        type invalid as well."
                    </v-card-text>

                    <v-card-actions>
                        <v-list-tile class="grow">
                            <v-list-tile-avatar color="grey darken-3">
                                <v-img
                                        class="elevation-6"
                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Evan You</v-list-tile-title>
                            </v-list-tile-content>

                            <v-layout
                                    align-center
                                    justify-end
                            >
                                <v-icon class="mr-1">mdi-heart</v-icon>
                                <span class="subheading mr-2">256</span>
                                <span class="mr-1">·</span>
                                <v-icon class="mr-1">mdi-share-variant</v-icon>
                                <span class="subheading">45</span>
                            </v-layout>
                        </v-list-tile>
                    </v-card-actions>
                </v-card>
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
                        <button class="btn btn-danger" @click.prevent="delete(item.id)">Удалить</button>
                    </div>
                </div>
                <div class="card mb-3">
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
                })
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
            delete(id){
                this.$store.dispatch("delete",id);
            }
        },
        computed: {
            news() {
                return this.$store.getters.getNews
            }
        },
        name: "home",
        components: {},
    };
</script>

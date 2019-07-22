<template>
    <div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6 pt-5">
                <h3>Объявление</h3>
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="(item,i) in results" :key="`${item.id}`">
                        <template v-slot:header>
                            <div>№{{item.row}}. {{item.title}}</div>
                        </template>
                        <v-card>
                            <v-card-text>
                                {{item.body}}
                                <a :href="item.docs"
                                   download>Скачать документ</a>
                                <v-divider></v-divider>
                                <button v-if="getAuth" class="btn btn-danger" @click="deleteResult(item.id)">Удалить</button>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <div class="card mb-3" v-if="getAuth">
                    <div class="card-body">
                        <h5 class="card-title"><label>Введите тему</label>
                            <input v-model="newDeclarationTitle" type="text" class="form-control"
                                   aria-describedby="inputGroup-sizing-default">
                        </h5>
                        <h6 class="card-text">Выберите документ</h6>
                        <div class="custom-file">
                            <input type="file"
                                   id="file" name="avatar"
                                   accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf,.zip,.rar"
                                   ref="myDocs"
                                   @change="getDocs">
                        </div>
                        <h6 class="card-text">Введите основной текст</h6>
                        <textarea class="form-control" aria-label="With textarea" maxlength="10000"
                                  v-model="newDeclarationBody"></textarea>
                        <v-divider></v-divider>
                        <button @click.prevent="saveResults" class="btn btn-primary float-right">Сохранить</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newDeclarationTitle: null,
                newDeclarationBody: null,
                docs: null,
                file: []
            }
        },
        methods: {
            saveResults() {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var docs = "";
                if (this.file[0].name) {
                    docs = this.file[0].name;
                }
                this.$store.dispatch("addResults", {
                    title: this.newDeclarationTitle,
                    body: this.newDeclarationBody,
                    docs: docs,
                    postDate: date,
                    file: this.file[0]
                });
                this.$swal({
                    type: 'success',
                    title: 'Добавлено',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.reloadPage()
            },
            reloadPage() {
                setTimeout(() => this.$router.go(), 2000);
            },
            getDocs() {
                this.file = this.$refs.myDocs.files
            },
            getUID() {
                return (this.generateUid() + this.generateUid() + "-" + this.generateUid() + "-4" + this.generateUid().substr(0, 3) + "-" + this.generateUid() + "-"
                    + this.generateUid() + this.generateUid() + this.generateUid()).toLowerCase();
            },
            generateUid() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            },
            deleteResult(id) {
                this.$store.dispatch("deleteResult", id);
                this.$swal({
                    type: 'success',
                    title: 'Удалено',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.reloadPage()
            }
        },
        computed: {
            results() {
                return this.$store.getters.getResults
            },
            getAuth(){
                return this.$store.getters.isUserAuthenticated
            }
        },
        beforeCreate(){

        },
        name: "home",
        components: {},
    };
</script>

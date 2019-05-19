import Vue from 'vue'

export default {
    state: {
        news: []
    },
    mutations: {
        set_news(state, payload) {
            state.news = payload
        }
    },
    actions: {
        loadNews({commit}) {
            let news = [];
            Vue.$db.collection("news").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var storageRef = Vue.$storage.ref();
                    storageRef.child('images/' + doc.data().img).getDownloadURL().then(function(url) {
                        let post = {
                            id: doc.id,
                            title: doc.data().title,
                            img: url,
                            postDate: doc.data().postDate,
                            body: doc.data().body
                        };
                        news.push(post)
                    })
                });
            });
            commit("set_news", news)
        },
        addPost({commit},payload) {
            var reader = new FileReader();
            reader.onloadend = function (evt) {
                var blob = new Blob([evt.target.result], { type: "image/jpeg" });
                var storageRef = Vue.$storage.ref('images/' + payload.img);
                storageRef.put(blob);
            };
            reader.onerror = function () {
            };
            reader.readAsArrayBuffer(payload.file);
            Vue.$db.collection("news").add({
                id: '123123',
                title: payload.title,
                body: payload.body,
                img: payload.img,
                postDate: payload.postDate
            });
        },
        delete({commit},payload){
            Vue.$db.collection("news").doc(payload).delete();
        }
    },
    getters: {
        getNews: (state) => state.news
    }
}
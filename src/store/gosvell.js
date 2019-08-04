import Vue from 'vue'

export default {
    state: {
        gosvells: []
    },
    mutations: {
        set_gosvells(state, payload) {
            state.gosvells = payload
        }
    },
    actions: {
        loadGosvells({commit}) {
            let gosvells = [];
            Vue.$db.collection("gosvells").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var storageRef = Vue.$storage.ref();
                    storageRef.child('docs/' + doc.data().docs).getDownloadURL().then(function(url) {
                        let gosvell = {
                            id: doc.id,
                            title: doc.data().title,
                            docs: url,
                            postDate: doc.data().postDate,
                            body: doc.data().body
                        };
                        gosvells.push(gosvell)
                    })
                });
            });
            commit("set_gosvells", gosvells)
        },
        addGosvells({commit},payload) {
            var reader = new FileReader();
            reader.onloadend = function (evt) {
                var blob = new Blob([evt.target.result]);
                var storageRef = Vue.$storage.ref('docs/' + payload.docs);
                storageRef.put(blob);
            };
            reader.onerror = function () {
            };
            reader.readAsArrayBuffer(payload.file);
            Vue.$db.collection("gosvells").add({
                title: payload.title,
                body: payload.body,
                docs: payload.docs,
                postDate: payload.postDate
            });
        },
        deleteDec({commit},payload){
            Vue.$db.collection("gosvells").doc(payload).delete();
        }
    },
    getters: {
        getGosvells: (state) => state.gosvells
    }
}
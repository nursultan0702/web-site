import Vue from 'vue'

export default {
    state: {
        results: []
    },
    mutations: {
        set_results(state, payload) {
            state.results = payload
        }
    },
    actions: {
        loadResults({commit}) {
            let results = [];
            var fromDb = Vue.$db.collection("results");
            fromDb.orderBy("row");
            fromDb.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var storageRef = Vue.$storage.ref();
                    storageRef.child('docs/' + doc.data().docs).getDownloadURL().then(function(url) {
                        let result = {
                            id: doc.id,
                            title: doc.data().title,
                            docs: url,
                            postDate: doc.data().postDate,
                            body: doc.data().body,
                            row: doc.data().row
                        };
                        results.push(result)
                    })
                });
            });
            commit("set_results", results)
        },
        addResults({commit},payload) {
            var reader = new FileReader();
            reader.onloadend = function (evt) {
                var blob = new Blob([evt.target.result]);
                var storageRef = Vue.$storage.ref('docs/' + payload.docs);
                storageRef.put(blob);
            };
            reader.onerror = function () {
            };
            reader.readAsArrayBuffer(payload.file);
            Vue.$db.collection("results").add({
                title: payload.title,
                body: payload.body,
                docs: payload.docs,
                postDate: payload.postDate
            });
        },
        deleteResult({commit},payload){
            Vue.$db.collection("results").doc(payload).delete();
        }
    },
    getters: {
        getResults: (state) => state.results
    }
}
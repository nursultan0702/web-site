import Vue from 'vue'

export default {
    state: {
        declars: []
    },
    mutations: {
        set_declarations(state, payload) {
            state.declars = payload
        }
    },
    actions: {
        loadDeclarations({commit}) {
            let declarations = [];
            Vue.$db.collection("declarations").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var storageRef = Vue.$storage.ref();
                    storageRef.child('docs/' + doc.data().docs).getDownloadURL().then(function(url) {
                        let declaration = {
                            id: doc.id,
                            title: doc.data().title,
                            docs: url,
                            postDate: doc.data().postDate,
                            body: doc.data().body
                        };
                        declarations.push(declaration)
                    })
                });
            });
           commit("set_declarations", declarations)
        },
        addDeclaration({commit},payload) {
            var reader = new FileReader();
            reader.onloadend = function (evt) {
                var blob = new Blob([evt.target.result]);
                var storageRef = Vue.$storage.ref('docs/' + payload.docs);
                storageRef.put(blob);
            };
            reader.onerror = function () {
            };
            reader.readAsArrayBuffer(payload.file);
            Vue.$db.collection("declarations").add({
                title: payload.title,
                body: payload.body,
                docs: payload.docs,
                postDate: payload.postDate
            });
        },
        deleteDec({commit},payload){
            Vue.$db.collection("declarations").doc(payload).delete();
        }
    },
    getters: {
        getDeclarations: (state) => state.declars
    }
}
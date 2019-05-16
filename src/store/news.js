import Vue from 'vue'

export default {
    state: {
       news: []
    },
    mutations: {
        set_news(state, payload){
            state.news = payload
        }
    },
    actions:{
      loadNews({commit}){
          let news=[]
        Vue.$db.collection("news").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                let post = {
                    id: doc.id,
                    title: doc.data().title,
                    img: doc.data().img,
                    postDate: doc.data().postDate,
                    body: doc.data().body
                }
                news.push(post)
            });
        });
        commit("set_news",news)
      }
    },
    getters: {
        getNews: (state) => state.news
    }
}
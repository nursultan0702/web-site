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
        Vue.$db.collection("news")
        .get()
        .then(querySnapshot => {
            let news = []
            querySnapshot.forEach(s => {
                const data = s.data
                let post = {
                    id: data.id,
                    title: data.title,
                    img: data.img,
                    postDate: data.postDate,
                    body: data.body
                }
                news.push(post)
            })
            commit('set_news', news)
        })
        .catch(error => console.log(error))
      }
    },
    getters: {
        getNews: (state) => state.news
    }
}
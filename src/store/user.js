import firebase from 'firebase'
export default {
    state: {
        user: {
            isAuthenticated: false,
            uid: null
        }
    },
    mutations: {
        set_user(state, payload){
            state.user.isAuthenticated = true
            state.user.uid = payload
        },
        logout(state){
            state.user.isAuthenticated = false
            state.user.token = null
          }
    },
    actions: {
        registration({commit}, payload){
            commit('set_processing', true)
            commit('clean_error')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                commit('set_processing', false)
            })
            .catch(function(error) {
                commit('set_processing', false)
                commit('set_error', error.message)
               
              });
              
        },
        login({commit}, payload){
              commit('set_processing', true)
              commit('clean_error')
              firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
              .then(() => {
                  commit('set_processing', false)
              })
              .catch(function(error) {
                  commit('set_processing', false)
                  commit('set_error', error.message)
                 
                });
        },
        logout(){
            firebase.auth().signOut()
          },
        stateChanged({commit}, payload){
            if(payload){
                commit('set_user', payload.uid)
            }else{
                commit("logout")
            }
        }
        
    },
    getters: {
        isUserAuthenticated: (state) => state.user.isAuthenticated
    }
}
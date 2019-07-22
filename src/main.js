import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'bootstrap'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase'
import "firebase/firestore"
import VueSweetalert2 from 'vue-sweetalert2';


Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueSweetalert2);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
var storage = firebase.storage();

Vue.$storage = storage;
Vue.$db = db;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
     vm.$store.dispatch('stateChanged', user);
    });
    this.$store.dispatch('loadNews');
    this.$store.dispatch('loadDeclarations');
    this.$store.dispatch('loadResults');
  },
}).$mount('#app');

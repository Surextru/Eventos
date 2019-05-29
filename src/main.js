import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBJJVsyYoiGbNQJyYTTddiU2vR8uD3R5QU",
      authDomain: "chateventos.firebaseapp.com",
      databaseURL: "https://chateventos.firebaseio.com",
      projectId: "chateventos",
      storageBucket: "chateventos.appspot.com",
      messagingSenderId: "1004290293484",
      appId: "1:1004290293484:web:fa4beff54576e15f"
    };
    firebase.initializeApp(firebaseConfig);
  }
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artist: null,
    event: null,
    search: ""
  },
  getters: {
    getArtist(state) {
      return state.artist;
    },
    getEvent(state) {
      return state.event;
    },
    getSearch(state) {
      return state.search;
    }
  },
  mutations: {
    setArtist(state, payload) {
      state.artist = payload;
    },
    setEvent(state, payload) {
      state.event = payload;
    },
    setSearch(state, payload) {
      state.search = payload
    }
  },
  actions: {
    getArtistData(context) {
      fetch("https://rest.bandsintown.com/artists/" + context.getters.getSearch + "?app_id=f711a497d2b27b1b9bc0626c3c6737cc")
        .then(res => res.json())
        .then(data => {
          context.commit("setArtist", data);
          console.log(context.getters.getArtist);
        })
        .catch(error => { console.log(error) })
    },
    getEventData(context) {
      fetch("https://rest.bandsintown.com/artists/" + context.getters.getSearch + "/events?app_id=f711a497d2b27b1b9bc0626c3c6737cc")
        .then(res => res.json())
        .then(data => {
          context.commit("setEvent", data);
          console.log(context.getters.getEvent);

        })
        .catch(error => { console.log(error) })
    },
  }
});

<template>
  <v-container fluid xs12>
    <v-layout row wrap justify-center>
      <input
        class="ma-4 text-xs-center"
        v-model="search"
        type="text"
        placeholder="Search for music"
      >
      <button v-on:click="searchArtist" xs12 pa-0>Search</button>
    </v-layout>

    <v-layout justify-center>
      <h1 class="font-weight-regular text-xs-center">Search the events of your favourites artists!</h1>
    </v-layout>

    <v-layout v-if="events" row wrap>
      <v-flex xs12 @click="sendtoStore(evento.id)">
        <v-card
          v-for="evento in events"
          :key="evento.id"
          :to="'/single_event/'+ evento.lineup[0] +'/' + evento.id"
          color="purple darken-4 white--text"
          class="card"
        >
          <v-layout>
            <v-flex xs5>
              <v-img :src="artist.image_url" height="125px" contain></v-img>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{artist.name}}</div>
                  <div>{{evento.venue.name}}</div>
                  <div>{{evento.venue.city}}, {{evento.venue.country}}</div>
                  <div>{{evento.datetime}}</div>
                  <div></div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  data() {
    return {
      search: "",
      eventos: this.events
    };
  },
  methods: {
    searchArtist() {
      this.$store.commit("setSearch", this.search);
      this.$store.dispatch("getArtistData");
      this.$store.dispatch("getEventData");
    },
    sendtoStore(id) {
      this.$store.commit("setIdEvent", id);
    }
  },
  computed: {
    artist() {
      return this.$store.getters.getArtist;
    },
    events() {
      return this.$store.getters.getEvent;
    }
  }
};
</script>

<style>
/* .inputSearch { */
/* margin: 3%; */
/* } */

input {
  width: 250px;
  height: 30px;
  box-shadow: 0 0 0px 3px black;
  border-radius: 10px;
}
.nice {
  background-color: #c488b2;
}
.card {
  margin: 2%;
  padding-top: 2.5%;
  color: white;
}
</style>

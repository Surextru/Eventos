<template>
  <v-container fluid xs12>
    <v-layout justify-center>
      <h1>Bienvenido {{name}}</h1>
    </v-layout>
    <v-layout row wrap justify-center>
      <input
        class="ma-4 text-xs-center"
        v-model="search"
        type="text"
        placeholder="Busca a tu grupo preferido"
      >
      <button v-on:click="searchArtist" xs12 pa-0>Busca</button>
    </v-layout>

    <v-layout justify-center>
      <h2
        class="font-weight-regular text-xs-center"
      >Busca los eventos de tus artistas preferido y no te pierdas ninguno de sus conciertos!</h2>
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

    <v-dialog v-model="dialogError" justify-center>
      <v-card height="60px">
        <v-card-text class="text-xs-center">No hay resultados.</v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      search: "",
      eventos: this.events,
      name: "",
      dialogError: false
    };
  },
  methods: {
    changeError() {
      this.dialogError = !this.dialogError;
    },
    searchArtist() {
      this.$store.commit("setSearch", this.search);
      this.$store.dispatch("getArtistData");
      this.$store.dispatch("getEventData");
      if (this.errorC != null) {
        this.changeError();
        setTimeout(() => this.changeError(), 1000);
      } else {
      }
    },
    sendtoStore(id) {
      this.$store.commit("setIdEvent", id);
    },
    cogerUsuario() {
      var user = firebase.auth().currentUser;

      if (user != null) {
        this.name = user.displayName;
      }
    }
  },
  computed: {
    artist() {
      return this.$store.getters.getArtist;
    },
    events() {
      return this.$store.getters.getEvent;
    },
    errorC() {
      return this.$store.getters.getError;
    }
  },

  created() {
    this.cogerUsuario();
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

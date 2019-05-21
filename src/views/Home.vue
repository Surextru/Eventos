<template>
  <v-app class="purple lighten-2">
    <div app class="purple lighten-2">
      <v-card class="purple lighten-2">
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      <input v-model="search" type="text" id="text" placeholder="Search for music">
                    </div>
                    <button v-on:click="searchArtist" xs12 offset-xs5 md2 lg5>Search</button>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>filter</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 v-for="evento in events" :key="evento.id">
              <v-card to="/single_event" color="cyan darken-2" class="white--text">
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

              <v-divider></v-divider>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchArtist() {
      this.$store.commit("setSearch", this.search);
      this.$store.dispatch("getArtistData");
      this.$store.dispatch("getEventData");
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
.nice {
  background-color: #c488b2;
}
</style>

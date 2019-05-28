<template>
  <v-container>
    <v-layout v-if="!events">
      <button>{{id}} {{artist}}</button>
    </v-layout>

    <v-layout v-if="events" mt-4>
      <v-flex>
        <v-card class="purple lighten-1 white--text">
          <v-layout justify-center pt-4>
            <img :src="artistC.thumb_url" alt="fotaca">
          </v-layout>
          <v-card-title class="display-3">{{artist}}</v-card-title>
          <v-card-text>
            <p>{{eventsC.datetime}}</p>
            <p>{{eventsC.venue.city}}, {{eventsC.venue.country}}</p>
            <p class="text-uppercase">
              {{eventsC.offers[0].status}} :
              <a
                class="orange--text"
                :href="eventsC.offers[0].url"
              >{{eventsC.offers[0].type}}</a>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id", "artist"],
  data() {
    return {
      event: false,
      mensaje: "Sin resultado"
    };
  },
  methods: {
    selectData() {
      console.log(this.artist);
      console.log(this.eventsC);
      console.log(this.idC);
    }
  },
  async created() {
    await this.$store.commit("setSearch", this.artist);
    await this.$store.commit("setIdEvent", this.id);
    await this.$store.dispatch("getEventData");
    await this.$store.dispatch("getArtistData");
    await this.$store.getters.getEvent.find(e => e.id == this.id);
    await this.selectData();
  },
  computed: {
    idC() {
      return this.$store.getters.getIdEvent;
    },
    events() {
      return this.$store.getters.getEvent;
    },
    eventsC() {
      return this.$store.getters.getEvent.find(e => e.id == this.id);
    },
    artistC() {
      return this.$store.getters.getArtist;
    }
  }
};
</script>

<style>
/* .tiket_state {
} */
</style>

<template class="purple lighten-2">
  <div>
    <v-layout row class="purple lighten-2">
      <v-flex xs12 sm6 offset-sm3 class="purple lighten-2">
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">caca</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      event: null
    };
  },
  methods: {
    selectData() {
      this.id = this.$store.getters.getIdEvent;
      this.event = this.$store.getters.getEvent;
      console.log(this.id);
      console.log(this.event);
    },
    searchID() {}
  },
  created() {
    this.selectData();
  }
};
</script>

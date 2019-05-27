<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <!-- v-for en el v-flex para los eventos propios. -->
      <v-flex xs12>
        <v-card to="/single_event" color="cyan darken-2" class="white--text">
          <v-layout>
            <v-flex xs5>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-img>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Supermodel</div>
                  <div>Foster the People</div>
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
export default {};
</script>

<style>
</style>

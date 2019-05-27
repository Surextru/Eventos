<template>
  <v-app>
    <v-toolbar app class="teal">
      <v-toolbar-side-icon class="white--text" @click="drawerOut = !drawerOut">si</v-toolbar-side-icon>
      <v-toolbar-side-icon class="white--text" @click="drawerIn = !drawerIn">no</v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="white--text" to="/" flat>Home</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawerIn" app class="teal">
      <v-layout row>
        <v-flex>
          <v-list two-line subheader>
            <v-subheader class="white--text">
              <h1>General</h1>
            </v-subheader>

            <v-divider></v-divider>

            <v-list-tile avatar to="/log_in">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Log in</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/registration">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Registration</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawerOut" app class="teal">
      <v-layout row>
        <v-flex>
          <v-list>
            <v-subheader class="white--text">
              <h1>General</h1>
            </v-subheader>

            <v-list-tile avatar to="/my_events">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">My Events</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/chat">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Chat</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Log out</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-content class="main">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawerIn: false,
      drawerOut: false
      //
    };
  }
};
</script>

<style>
.main {
  background-color: #80cbc4;
}
.blue-grey darken-2 {
  color: white;
}
</style>

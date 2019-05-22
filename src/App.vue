<template>
  <v-app>
    <v-toolbar app dark class="toolbar">
      <v-toolbar-side-icon class="grey--text" @click="drawerOut = !drawerOut">si</v-toolbar-side-icon>
      <v-toolbar-side-icon class="grey--text" @click="drawerIn = !drawerIn">no</v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat>Home</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <p>:d</p>

    <v-navigation-drawer v-model="drawerIn" app class="blue-grey darken-1">
      <v-layout row>
        <v-flex>
          <v-list two-line subheader>
            <v-subheader class="white--text">
              <h1>General</h1>
            </v-subheader>

            <v-divider></v-divider>

            <v-list-tile avatar to="/log_in" @click="logIn">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Log in</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/registration" @click="regist">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Registration</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawerOut" app class="blue-grey darken-1">
      <v-layout row>
        <v-flex>
          <v-list>
            <v-subheader class="white--text">
              <h1>General</h1>
            </v-subheader>

            <v-list-tile avatar to="/my_events" @click="myEvents">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">My Events</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/chat" @click="chat">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Chat</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile avatar @click="logOut">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Log out</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <router-view class="padding"></router-view>
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
  },
  methods: {
    homePage() {
      console.log("home page");
    },
    myEvents() {
      console.log("my events");
    },
    chat() {
      console.log("chat");
    },
    logOut() {
      console.log("log out");
    },
    logIn() {
      console.log("log in");
    },
    regist() {
      console.log("registration");
    }
  }
};
</script>

<style>
.blue-grey darken-2 {
  color: white;
}
.padding {
  margin-top: 2.5%;
}
</style>

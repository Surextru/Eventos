<template>
  <v-app>
    <v-toolbar app class="teal">
      <v-toolbar-side-icon class="white--text" @click="abrir"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="white--text" to="/" flat>Home</v-btn>
        <v-btn class="white--text" v-if="activo" @click="logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="teal">
      <v-layout row v-if="activo == false">
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

      <v-layout row v-if="activo">
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
/* eslint-disable */
import firebase from "firebase";
export default {
  name: "App",
  components: {},
  data() {
    return {
      activo: false,
      drawer: false
    };
  },

  methods: {
    cambio() {
      this.activo = !this.activo;
    },
    abrir() {
      this.drawer = !this.drawer;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.cambio())
        .catch(error => {
          console.log(error);
        });
    },
    mirar() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log(user);
          this.cambio();
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
    }
  },
  created() {
    this.mirar();
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

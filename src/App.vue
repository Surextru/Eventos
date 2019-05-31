<template>
  <v-app>
    <v-toolbar app class="teal">
      <v-toolbar-side-icon class="white--text" @click="abrir"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Eventacos!</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="teal">
      <v-layout row v-if="activo == false">
        <v-flex>
          <v-list two-line subheader>
            <v-subheader class="white--text">
              <h1>General</h1>
            </v-subheader>

            <v-divider></v-divider>

            <v-list-tile avatar to="/">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Inicio</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/log_in">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Inicia Sesión</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/registration">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Regístrate</v-list-tile-title>
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

            <v-list-tile avatar to="/">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Inicio</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/my_events">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Mis Eventos</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar to="/chat">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Chat</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar @click="logout">
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Cerrar Sesión</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-dialog v-model="dialog" justify-center>
      <v-card height="60px">
        <v-card-text class="text-xs-center">Sesión cerrada!</v-card-text>
      </v-card>
    </v-dialog>

    <v-content class="main">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
import { setTimeout } from "timers";
export default {
  name: "App",
  components: {},
  data() {
    return {
      activo: false,
      drawer: false,
      name: "",
      dialog: false
    };
  },

  methods: {
    cambio() {
      this.activo = !this.activo;
    },
    abrir() {
      this.drawer = !this.drawer;
    },
    dialogChange() {
      this.dialog = !this.dialog;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.dialogChange();
          setTimeout(() => this.dialogChange(), 2000);
          this.cambio();
          setTimeout(() => location.reload(), 2000);
          setTimeout(() => this.$router.push("/"), 2000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    mirar() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          this.name = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          this.cambio();
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
    },
    cogerUsuario() {
      var user = firebase.auth().currentUser;

      if (user != null) {
        this.name = user.displayName;
      }
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

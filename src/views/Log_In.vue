<template>
  <v-container xs6>
    <v-layout justify-center>
      <v-flex>
        <v-card>
          <v-layout wrap justify-center xs6>
            <v-form>
              <v-text-field v-model="email" label="E-mail" required>E-mail</v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required>Contraseña</v-text-field>
              <v-btn @click="login">Iniciar Sesión</v-btn>
            </v-form>
          </v-layout>
          <v-divider xs6></v-divider>

          <v-layout justify-center xs6>
            <v-btn to="/registration">No tienes cuenta?</v-btn>
          </v-layout>
          <v-divider></v-divider>

          <v-layout justify-center>
            <v-btn @click="loginGoogle">Iniciar sesión con Google</v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" justify-center>
      <v-card height="60px">
        <v-card-text class="text-xs-center">Bienvenido!</v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogError" justify-center>
      <v-card height="60px">
        <v-card-text class="text-xs-center">Email/Contraseña erroneo/s</v-card-text>
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
      email: "",
      password: "",
      show: false,
      dialog: false,
      user: "",
      name: "",
      dialogError: false
    };
  },
  //Acceso de usuarios existentes

  methods: {
    dialogChange() {
      this.dialog = !this.dialog;
    },
    errorChange() {
      this.dialogError = !this.dialogError;
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.dialogChange();
          setTimeout(() => this.dialogChange(), 2000);
          setTimeout(() => this.$router.push("/"), 2000);

          // ;
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          this.errorChange();
          setTimeout(() => this.errorChange(), 1500);

          this.$router.push("/log_in");
          // ...
        });
    },
    loginGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          this.dialogChange();
          setTimeout(() => this.dialogChange(), 2000);
          this.$router.push("/");
        })
        .catch(error => console.log(error));
    },
    cogerUsuario() {
      this.user = firebase.auth().currentUser;

      if (this.user != null) {
        this.name = user.displayName;
      }
    }
  }
};
</script>

<style>
</style>

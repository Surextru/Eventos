<template>
  <v-container xs6>
    <v-layout justify-center>
      <v-flex>
        <v-card>
          <!-- registrarse por cuenta propia  -->
          <v-layout justify-center xs6>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="user" :rules="userRules" label="Usuario" required></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-text-field
                type="password"
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
              ></v-text-field>

              <v-layout>
                <v-btn :disabled="!valid" color="success" @click="registrar">Validate</v-btn>

                <v-btn color="error" @click="reset">Reset Form</v-btn>
              </v-layout>
              <v-layout>
                <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
              </v-layout>
            </v-form>
          </v-layout>
          <!-- registrarse por google -->
          <v-layout justify-center>
            <v-btn @click="login">Google Registration</v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  data: () => ({
    valid: true,
    user: "",
    userRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 5) || "Password must be valid"
    ],
    select: null
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$store.commit("setEmail", this.email);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        });
    },
    registrar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("email y contraseña guardados correctamente.");
          this.nombreUsuario();
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...

          console.log(errorCode);
          console.log(errorMessage);
        });
    },
    nombreUsuario() {
      var user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: this.user,
          photoURL: null
        })
        .then(() => {
          console.log("nombre de usuario guardado correctamente.");
          console.log(displayName);
          // Update successful.
        })
        .catch(error => {
          console.log(this.error);
          // An error happened.
        });
    }
  }
};
</script>

<style>
</style>

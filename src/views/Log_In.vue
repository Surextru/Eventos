<template>
  <v-container xs6>
    <v-layout justify-center>
      <v-flex>
        <v-card>
          <v-layout wrap justify-center xs6>
            <v-form>
              <v-text-field v-model="email" label="E-mail" required>E-mail</v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required>Password</v-text-field>
              <v-btn @click="login">Log In</v-btn>
            </v-form>
          </v-layout>
          <v-layout justify-center xs6>
            <v-form>
              <v-btn to="/registration">Registration</v-btn>
            </v-form>
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
  data() {
    return {
      email: "",
      password: "",
      show: false
    };
  },
  //Acceso de usuarios existentes

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push("/"))
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode);
          console.log(errorMessage);
          this.$router.push("/");
          // ...
        });
    }
  }
};
</script>

<style>
</style>

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
                <v-btn :disabled="!valid" color="success" @click="registrar">Validar</v-btn>

                <v-btn color="error" @click="reset">Resetear Formulario</v-btn>
              </v-layout>
              <v-layout>
                <v-btn color="warning" @click="resetValidation">Resetear Validació</v-btn>
              </v-layout>
            </v-form>
          </v-layout>
          <v-layout justify-center>
            <v-btn to="/log_in">Ya tienes cuenta?</v-btn>
          </v-layout>
          <!-- registrarse por google -->
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" justify-center>
      <v-card height="60px">
        <v-card-text class="text-xs-center">Registro realizado correctamente</v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogError" justify-center>
      <v-card height="60px">
        <v-card-text class="text-xs-center">Error en el registrar</v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>



<script>
/* eslint-disable */
import firebase from "firebase";
import { setTimeout } from "timers";

export default {
  data: () => ({
    dialog: false,
    dialogError: false,
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
      v => (v && v.length >= 6) || "Password must be valid"
    ],
    select: null
  }),

  methods: {
    changeDialog() {
      this.dialog = !this.dialog;
    },
    changeDialogErr() {
      this.dialogError = !this.dialogError;
    },
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
    registrar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.nombreUsuario();
          this.changeDialog();
          setTimeout(() => this.changeDialog(), 2000);
          setTimeout(() => this.$router.push("/"), 2000);
        })
        .catch(error => {
          this.changeDialogErr();
          setTimeout(() => this.changeDialogErr(), 2000);
          var errorCode = error.code;
          var errorMessage = error.message;
          this.$router.push("/registration");
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
        })
        .catch(error => {
          console.log(this.error);
        });
    }
  }
};
</script>

<style>
</style>

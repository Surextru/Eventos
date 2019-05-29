<template>
  <v-container>
    <v-layout justify-center>
      <h2>Welcome to the Chat!</h2>
    </v-layout>

    <v-layout justify-center>
      <v-card class="box">
        <v-textarea></v-textarea>
      </v-card>
    </v-layout>

    <v-layout row wrap>
      <v-text-field placeholder="Escribe algo..."></v-text-field>
      <v-btn>Sumbit</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
export default {
  methods: {
    sendMessage() {
      let name = firebase.auth().currentUser.displayName;

      let messageToSend = {
        nombre: name,
        mensaje: texto
      };
      firebase
        .database()
        .ref("chat")
        .push(messageToSend);
    }
  }
};
</script>

<style>
.box {
  width: 350px;
  height: 530px;
}
</style>

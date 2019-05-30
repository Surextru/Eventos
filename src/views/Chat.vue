<template>
  <v-container>
    <v-layout justify-center>
      <h2>Welcome to the Chat!</h2>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="white" v-for="(mensaje,key) in mensajes" :key="mensaje[key]">
          <v-card-title>
            <p>{{mensaje.nombre}}</p>
          </v-card-title>
          <v-card-text>
            <p>{{mensaje.mensaje}}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-text-field v-model="texto" placeholder="Escribe algo..."></v-text-field>
      <v-btn @click="sendMessage">Sumbit</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
export default {
  data() {
    return {
      texto: "",
      mensajes: []
    };
  },
  methods: {
    sendMessage() {
      console.log(this.user);
      console.log(this.texto);

      let messageToSend = {
        nombre: this.user,
        mensaje: this.texto
      };
      firebase
        .database()
        .ref("chat")
        .push(messageToSend);
    }
  },
  computed: {
    getMessage() {
      return firebase
        .database()
        .ref("chat")
        .on("value", data => {
          this.mensajes = data.val();
          console.log(this.mensajes);
        });
    },
    user() {
      return firebase.auth().currentUser.displayName;
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

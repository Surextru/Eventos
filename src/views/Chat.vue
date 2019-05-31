<template>
  <v-container>
    <v-layout v-if="mensajes == null" justify-center>
      <v-btn @click="getMessage">chat</v-btn>
    </v-layout>

    <v-layout v-if="mensajes != null" justify-center row wrap>
      <v-card class="pestañita" v-for="(mensaje,key) in mensajes" :key="mensaje[key]">
        <v-layout justify-end v-if="mensaje.nombre == user" class="propiouser">
          <v-flex xs7 offset-xs5 offset-md2 offset-lg5>
            <p class="text-xs-right">{{mensaje.mensaje}}</p>
          </v-flex>
        </v-layout>

        <v-layout xs6 row wrap v-else class="otrosser">
          <p>{{mensaje.nombre}}</p>
          <p>{{mensaje.mensaje}}</p>
        </v-layout>
      </v-card>
    </v-layout>

    <v-layout v-if="mensajes != null" row wrap>
      <v-text-field v-model="texto" placeholder="Escribe algo..."></v-text-field>
      <v-btn @click="sendMessage" xs12 pa-0>Sumbit</v-btn>
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
      mensajes: null
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
    },
    getMessage() {
      return firebase
        .database()
        .ref("chat")
        .on("value", data => {
          this.mensajes = data.val();
          console.log(this.mensajes);
        });
    }
  },
  computed: {
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
.propiouser {
  background: green;
}
.otrosser {
  background: grey;
}
.mensaje_usuario_propio {
  display: flex;
}
.pestañita {
  width: 250px;
}
</style>

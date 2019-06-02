<template>
  <v-container>
    <v-layout justify-center>
      <h2>Chat Rico rico!</h2>
    </v-layout>
    <v-layout xs6 v-if="mensajes != null" justify-center row>
      <v-flex class="container">
        <v-layout v-for="(mensaje,key) in mensajes" :key="mensaje[key]">
          <v-flex>
            <v-layout justify-end v-if="mensaje.nombre == user" class="propiouser">
              <v-flex offset-xs5 offset-md2 offset-lg5>
                <p pr-3 mr-3 class="text-xs-right">{{mensaje.mensaje}}</p>
              </v-flex>
            </v-layout>
            <v-layout justify-start v-else class="otrosser">
              <v-flex>
                <h3>{{mensaje.nombre}}</h3>
                <p>{{mensaje.mensaje}}</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-text-field @keyup.enter="sendMessage" v-model="texto" placeholder="Escribe algo..."></v-text-field>
          <v-btn @click="sendMessage" xs12 pa-0>Enviar</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout justify-center v-if="mensajes == null ">
      <p>Loading fucking chat!...</p>
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

      this.texto = "";
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
  },
  created() {
    this.getMessage();
  }
};
</script>

<style>
.box {
  width: 350px;
  height: 530px;
}
.propiouser {
  background: #81c784;
  padding-right: 2%;
  margin-top: 1%;
  padding-top: 1%;
  border-radius: 10px;
}
.otrosser {
  background: #ffe0b2;
  padding-left: 2%;
  margin-top: 1%;
  padding-top: 1%;
  border-radius: 10px;
}
.mensaje_usuario_propio {
  display: flex;
}
.pestañita {
  width: 250px;
}
.container {
  background: #bdbdbd;
}
</style>

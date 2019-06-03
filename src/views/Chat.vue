<template>
  <v-container>
    <v-layout justify-center>
      <h2>Chat Rico rico!</h2>
    </v-layout>

    <v-layout justify-center v-if="mensajes == null ">
      <p>Loading fucking chat!...</p>
    </v-layout>

    <div class="containerchat_hold" xs12 v-if="mensajes != null" justify-center row>
      <v-flex xs12 class="containerchat">
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
      </v-flex>
      <v-layout class="chat_submit" row wrap justify-center>
        <v-text-field @keyup.enter="sendMessage" v-model="texto" placeholder="Escribe algo..."></v-text-field>
        <v-btn class="boton_submit" @click="sendMessage" xs12 pa-0>Enviar</v-btn>
      </v-layout>
    </div>
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
          document.querySelector(
            ".containerchat"
          ).scrollTop = document.querySelector(".containerchat").scrollHeight;
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
.containerchat {
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
}
.containerchat_hold {
  scroll-behavior: smooth;

  position: fixed;
  height: 70%;
  width: 90%;
}
.chat_submit {
  margin-top: 1%;
}
.boton_submit {
  margin-top: 3%;
}
</style>

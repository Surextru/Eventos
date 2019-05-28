<template>
  <v-container xs6>
    <v-layout justify-center>
      <v-flex>
        <v-card>
          <!-- registrarse por cuenta propia  -->
          <v-layout justify-center xs6>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Username"
                required
              ></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-text-field
                type="password"
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
              ></v-text-field>

              <v-layout>
                <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>

                <v-btn color="error" @click="reset">Reset Form</v-btn>
              </v-layout>
              <v-layout>
                <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
              </v-layout>
            </v-form>
          </v-layout>
          <!-- registrarse por google -->
          <v-layout justify-center>
            <v-btn>Google Registration</v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
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
        this.$store.commit("setUsername", this.name);
        this.$store.commit("setEmail", this.email);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
</style>

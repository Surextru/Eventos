<template>
  <v-card>
    <v-form>
      <v-text-field v-model="e_mail" label="Name" required>E-mail</v-text-field>
      <v-text-field v-model="pass" label="E-mail" required>Password</v-text-field>
      <v-btn>Log In</v-btn>
      <v-btn>Reset</v-btn>
    </v-form>
    <v-form>
      <v-btn to="/registration">Registration</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      e_mail: "",
      pass: ""
    };
  }
};
</script>

<style>
</style>

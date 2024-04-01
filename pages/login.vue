<script setup lang="ts">
const auth = useCookie("pokemon-auth");

async function login() {
  auth.value = "23jjd2"; // random id
  await navigateTo("/");
}

function logout() {
  auth.value = "";
}
</script>

<template>
  <h1>Login</h1>
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>
</template>

<style scoped></style>

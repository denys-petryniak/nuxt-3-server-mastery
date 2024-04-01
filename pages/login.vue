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
  <div class="login-container">
    <h1 class="title">Login</h1>
    <div class="button-group">
      <button class="login-button" @click="login">Login</button>
      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.login-button,
.logout-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button {
  background-color: #4caf50;
  color: white;
  margin-right: 10px;
}

.logout-button {
  background-color: #f44336;
  color: white;
}

.login-button:hover,
.logout-button:hover {
  background-color: #357a38;
}
</style>

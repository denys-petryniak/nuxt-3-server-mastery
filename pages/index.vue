<script setup lang="ts">
const { data: pokemon, error } = await useFetch("/api/d");
</script>

<template>
  <h1>Nuxt 3 Server Mastery</h1>
  <ul v-if="pokemon">
    <li>
      <img :src="pokemon.sprite" alt="" />
    </li>
    <li>{{ pokemon.id }}: {{ pokemon.name }}</li>
  </ul>
  <p v-else>{{ error }}</p>
</template>

<style scoped></style>

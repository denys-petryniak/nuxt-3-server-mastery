<script setup lang="ts">
const { data: scizor } = await useFetch(
  "https://pokeapi.co/api/v2/pokemon/scizor"
);
</script>

<template>
  <h1>Page: index</h1>
  <pre>{{ scizor }}</pre>
</template>

<style scoped></style>

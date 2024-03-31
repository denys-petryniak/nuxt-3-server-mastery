<script setup lang="ts">
const { data: scizor } = await useFetch("/api/scizor");
</script>

<template>
  <h1>Nuxt 3 Server Mastery</h1>
  <ul>
    <li>
      <img :src="scizor.sprite" alt="" />
    </li>
    <li>{{ scizor.id }}: {{ scizor.name }}</li>
  </ul>
</template>

<style scoped></style>

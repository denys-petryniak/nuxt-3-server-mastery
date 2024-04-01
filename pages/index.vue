<script setup lang="ts">
const { data: pokemon, error } = await useFetch("/api/pikachu");
</script>

<template>
  <div class="pokemon-container">
    <h1 class="title">Pokemon Details</h1>
    <div v-if="pokemon" class="pokemon-details">
      <div class="pokemon-image">
        <img :src="pokemon.image" :alt="pokemon.name" />
      </div>
      <div class="pokemon-info">
        <p class="pokemon-id">ID: {{ pokemon.id }}</p>
        <p class="pokemon-name">{{ pokemon.name }}</p>
      </div>
    </div>
    <p v-else class="error-message">{{ error }}</p>
  </div>
</template>

<style scoped>
.pokemon-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.pokemon-details {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-image img {
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.pokemon-info {
  text-align: left;
}

.pokemon-id {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.pokemon-name {
  font-size: 16px;
  margin-bottom: 20px;
}

.error-message {
  font-size: 16px;
  color: red;
  margin-top: 20px;
}
</style>

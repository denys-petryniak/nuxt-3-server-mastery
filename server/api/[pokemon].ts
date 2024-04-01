import type { Pokemon } from "~/types/pokemon";

export default defineEventHandler(async (event) => {
  try {
    const { pokemon } = event.context.params as {
      pokemon: string;
    };

    const response = await $fetch<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const idealResponse = {
      id: response.id,
      name: response.name,
      image: response.sprites.front_default,
    };

    return idealResponse;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Pokemon not found",
    });
  }
});

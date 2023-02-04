<template lang="">
	<h1>PokeApp</h1>
	<h2>Enter A Pokemon Name or Pokedex Number</h2>
	<form @submit.prevent="searchPokemon" class="inputForm">
		<input
			type="text"
			v-model="pokemon"
			placeholder="Enter a pokemon name or number"
			class="inputText"
		/>
		<button type="submit" class="btn">Search</button>
	</form>
	<p class="errorMessage">{{ errorMessage }}</p>
	<Pokedex :pokemonData="pokemonData" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { PokemonData } from "../interfaces";
import Pokedex from "./Pokedex.vue";
import { getSpecificPokemonData } from "../api";

export default defineComponent({
	components: {
		Pokedex,
	},
	setup() {
		const pokemon = ref<string>("");
		const pokemonData = ref<PokemonData>({});
		const errorMessage = ref<string>("");

		const searchPokemon = async () => {
			errorMessage.value = "";
			try {
				const data = await getSpecificPokemonData(pokemon.value);
				console.log(data);
				pokemonData.value = data ?? {};
			} catch (error: any) {
				errorMessage.value = error.message;
				pokemonData.value = {};
			}
		};

		return {
			pokemon,
			searchPokemon,
			pokemonData,
			errorMessage,
		};
	},
});
</script>
<style scoped>
.errorMessage {
	color: #f64171;
	font-size: 1.2rem;
	letter-spacing: 0.05em;
}
.inputForm {
	display: flex;
	align-items: center;
	width: 500px;
	margin: 0 auto;
	justify-content: space-between;
	column-gap: 1rem;
}

.inputText {
	padding: 0.5rem;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #ccc;
	width: 100%;
}

.btn {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	background-color: #d30a40;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
>

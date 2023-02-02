<template lang="">
	<h1>PokeApp</h1>
	<h2>Enter A Pokemon Name or Pokedex Number</h2>
	<form @submit.prevent="searchApi" class="inputForm">
		<input
			type="text"
			v-model="pokemon"
			placeholder="Enter a pokemon name or number"
			class="inputText"
		/>
		<button type="submit" class="btn">Search</button>
	</form>
	<div class="pokedexContainer">
		<img :src="pokedexImg" alt="Pokedex Image" class="pokedexImg" />
		<img :src="exampleImg" alt="Example pokemon" class="pokemonImg" />
		<p class="pokemonName">Butterfly</p>
		<p class="pokemonType">🌱</p>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import pokedex from "../assets/pokedex.png";
import examplePokemon from "../assets/examplePokemon.png";

export default defineComponent({
	setup() {
		const pokemon = ref<string>("");
		const pokedexImg = ref(pokedex);

		const exampleImg = ref(examplePokemon);
		function searchApi() {
			// search
			console.log("searching");
		}

		return {
			pokemon,
			searchApi,
			pokedexImg,
			exampleImg,
		};
	},
});
</script>
<style scoped>
.pokedexImg {
	width: 600px;
	height: 450px;
	object-fit: cover;
	border-radius: 10px;
}
.pokedexContainer {
	position: relative;
	margin: auto;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.pokemonType {
	position: absolute;
	margin-top: 12rem;
	margin-left: 19rem;
	font-size: 1rem;
	color: white;
	min-width: 11rem;
	display: flex;
	flex-direction: row;
	z-index: 3;
	font-size: 1.2rem;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.pokemonImg {
	position: absolute;
	margin-top: 9.5rem;
	margin-right: 15rem;
	width: 7rem;
	height: 7rem;
	z-index: 2;
}

.pokemonName {
	position: absolute;
	margin-top: 10.5rem;
	margin-left: 13rem;
	font-size: 0.9rem;
	color: white;
	min-width: 11rem;
	max-width: 10rem;
	z-index: 3;
	font-family: "Press Start 2P", "Courier New", Courier, monospace;
}

.inputForm {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 500px;
	margin: 0 auto;
}

.inputText {
	width: 100%;
	padding: 10px;
	font-size: 18px;
	border-radius: 5px;
	border: 1px solid #ccc;
	margin-bottom: 10px;
}

.btn {
	width: 100%;
	padding: 10px;
	font-size: 18px;
	background-color: #4caf50;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
>

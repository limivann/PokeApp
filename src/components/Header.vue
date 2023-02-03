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
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import examplePokemon from "../assets/examplePokemon.png";

export default defineComponent({
	setup() {
		const pokemon = ref<string>("");
		const exampleImg = ref(examplePokemon);
		function searchApi() {
			// search
			console.log("searching");
		}

		return {
			pokemon,
			searchApi,
			exampleImg,
		};
	},
});
</script>
<style scoped>
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

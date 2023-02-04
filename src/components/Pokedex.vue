<template lang="">
	<div class="pokedexContainer">
		<img :src="pokedexImg" alt="Pokedex Image" class="pokedexImg" />
		<img
			:src="pokemonData.imgUrl"
			alt="Example pokemon"
			class="pokemonImg"
			:style="{
				display: pokemonData?.name ? 'block' : 'none',
			}"
		/>
		<p class="pokemonName">{{ pokemonData.name }}</p>
		<p class="pokemonType">{{ getMainTypeIcon(pokemonData.type) }}</p>
		<button
			class="moreDetails"
			@click="goToDetailsPage"
			:style="{
				display: pokemonData?.name ? 'block' : 'none',
			}"
		>
			More Details
		</button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import pokedex from "../assets/pokedex.png";
import examplePokemon from "../assets/examplePokemon.png";
import { useRouter } from "vue-router";
import { PokemonData } from "../interfaces";

export default defineComponent({
	name: "Pokedex",
	props: {
		pokemonData: {
			type: Object as PropType<PokemonData>,
		},
	},
	setup(props) {
		const pokemonData = computed(() => props.pokemonData);
		const pokedexImg = ref(pokedex);
		const exampleImg = ref(examplePokemon);
		const router = useRouter();

		const goToDetailsPage = () => {
			router.push({ path: `/pokemon/${props.pokemonData?.id}` });
		};

		const getMainTypeIcon = () => {
			const pokemonTypes = props.pokemonData?.types;
			// could be undefined
			let icon = "";
			if (pokemonTypes && pokemonTypes[0]) {
				switch (pokemonTypes[0]) {
					case "water":
						icon = "💧";
						break;
					case "rock":
						icon = "🗿";
						break;
					case "fire":
						icon = "🔥";
						break;
					case "grass":
						icon = "🌱";
						break;
					case "flying":
						icon = "🐦";
						break;
					case "fighting":
						icon = "🥊";
						break;
					case "poison":
						icon = "☠️";
						break;
					case "electric":
						icon = "⚡";
						break;
					case "ground":
						icon = "🌍";
						break;
					case "psychic":
						icon = "🧠";
						break;
					case "ice":
						icon = "❄️";
						break;
					case "bug":
						icon = "🐞";
						break;
					case "ghost":
						icon = "👻";
						break;
					case "steel":
						icon = "⚙️";
						break;
					case "dragon":
						icon = "💧";
						break;
					case "dark":
						icon = "🌚";
						break;
					case "fairy":
						icon = "🎠";
						break;
					default:
						icon = "";
				}
			}
			return icon;
		};

		return {
			pokedexImg,
			exampleImg,
			goToDetailsPage,
			getMainTypeIcon,
			pokemonData,
		};
	},
});
</script>
<style scoped>
.moreDetails {
	position: absolute;
	margin-top: 14.9rem;
	margin-left: 17.1rem;
	background-color: rgba(10, 241, 246, 0.5);
	width: 161px;
	height: 46px;
	border-radius: 0;
	border: none;
	display: block;
	font-family: "Press Start 2P", "Courier New", Courier, monospace;
	font-weight: 800;
	color: black;
	transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.moreDetails:hover {
	box-shadow: 0 0 1rem rgba(10, 241, 246, 1);
	background-color: rgba(10, 241, 246, 1);
}

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
	text-transform: capitalize;
}
</style>

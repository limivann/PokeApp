<template lang="">
	<div class="title">
		<span class="name">Butterflee </span>
		<span class="pokemonId">#0001</span>
	</div>
	<div class="otherPokemonContainer">
		<button class="leftButton">
			<ArrowLeftCircleOutlineIcon />#0024 Arbok
		</button>
		<button class="rightButton">
			Raichu #0026
			<ArrowRightCircleOutlineIcon />
		</button>
	</div>
	<div class="details">
		<img :src="exampleImg" alt="Pokemon Image" class="pokemonImg" />
		<div class="typeContainer">
			<h2 class="typeTitle">Type</h2>
			<div class="types">
				<Type v-for="(type, index) in types" :key="index" :typeText="type" />
			</div>
			<h2 class="typeTitle">Stats</h2>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import examplePokemon from "../assets/examplePokemon.png";
import ArrowLeftCircleOutlineIcon from "vue-material-design-icons/ArrowLeftCircleOutline.vue";
import ArrowRightCircleOutlineIcon from "vue-material-design-icons/ArrowRightCircleOutline.vue";
import Type from "../components/Type.vue";
export default defineComponent({
	name: "Pokemon",
	components: {
		Type,
		ArrowLeftCircleOutlineIcon,
		ArrowRightCircleOutlineIcon,
	},
	setup() {
		const exampleImg = ref(examplePokemon);
		const types = ref(["Electric", "Normal"]);
		return {
			exampleImg,
			types,
		};
	},
});
</script>
<style scoped>
.title {
	font-weight: 500;
	font-size: 3rem;
	margin-bottom: 2rem;
}
.name {
	color: white;
}

.pokemonId {
	color: gray;
}

.pokemonImg {
	width: 400px;
	height: 400px;
}

.details {
	display: flex;
	justify-content: center;
	align-items: center;
}

.types {
	display: flex;
	column-gap: 1rem;
}

.typeTitle {
	width: 100%;
	text-align: left;
}

.otherPokemonContainer {
	display: flex;
	width: 100%;
	gap: 8px;
}

.leftButton {
	width: 50%;
	display: flex;
	justify-content: center;
	column-gap: 0.5rem;
}

.rightButton {
	width: 50%;
	display: flex;
	justify-content: center;
	column-gap: 0.5rem;
}
</style>

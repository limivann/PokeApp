<template lang="">
	<div v-if="currentPokemonData?.name == null">
		<!-- Render the data here -->
		<h1>Pokemon does not exist</h1>
	</div>
	<div v-else>
		<div class="title">
			<span class="name">{{ `${currentPokemonData?.name} ` }} </span>
			<span class="pokemonId">{{
				formatPokemonId(currentPokemonData?.id)
			}}</span>
		</div>
		<div class="otherPokemonContainer">
			<button
				class="leftButton"
				@click="navigatePrevOrNextPokemon(true)"
				:style="{
					display: prevPokemonData?.name ? 'flex' : 'none',
				}"
			>
				<ArrowLeftCircleOutlineIcon />
				<span class="">{{ formatPokemonId(prevPokemonData?.id) }}</span>
				<span class="name">{{ `${prevPokemonData?.name} ` }} </span>
			</button>
			<button
				class="rightButton"
				@click="navigatePrevOrNextPokemon(false)"
				:style="{
					display: nextPokemonData?.name ? 'flex' : 'none',
				}"
			>
				<span class="name">{{ `${nextPokemonData?.name} ` }} </span>
				<span class="">{{ formatPokemonId(nextPokemonData?.id) }}</span>
				<ArrowRightCircleOutlineIcon />
			</button>
		</div>
		<div class="details">
			<img
				:src="currentPokemonData.imgUrl"
				alt="Pokemon Image"
				class="pokemonImg"
			/>
			<div class="typeAndStatsContainer">
				<h2 class="typeTitle">Type</h2>
				<div class="types">
					<Type
						v-for="(type, index) in currentPokemonData.types"
						:key="index"
						:typeText="type"
					/>
				</div>
				<h2 class="typeTitle">Base Stats</h2>
				<Stats :stats="currentPokemonData.stats" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Stats from "../components/Stats.vue";
import ArrowLeftCircleOutlineIcon from "vue-material-design-icons/ArrowLeftCircleOutline.vue";
import ArrowRightCircleOutlineIcon from "vue-material-design-icons/ArrowRightCircleOutline.vue";
import Type from "../components/Type.vue";
import { useRoute, useRouter } from "vue-router";
import { getSpecificPokemonData, getPokemonNameId } from "../api";
import { PokemonData, IShortPokemonData } from "../interfaces";

export default defineComponent({
	name: "Pokemon",
	components: {
		Type,
		ArrowLeftCircleOutlineIcon,
		ArrowRightCircleOutlineIcon,
		Stats,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();
		const currentPokemonData = ref<PokemonData>({});

		const prevPokemonData = ref<IShortPokemonData | {}>({});
		const nextPokemonData = ref<IShortPokemonData | {}>({});
		const { id: currentPokemonId } = route.params;
		const id = reactive({ currentPokemonId });

		// check id pokemon exist
		if (id == undefined) {
			return;
		}

		const navigatePrevOrNextPokemon = async (prev: boolean) => {
			if (typeof id.currentPokemonId !== "string") {
				return;
			}
			if (prev) {
				id.currentPokemonId = (parseInt(id.currentPokemonId) - 1).toString();
			} else {
				id.currentPokemonId = (parseInt(id.currentPokemonId) + 1).toString();
			}
			router.push({ path: `/pokemon/${id.currentPokemonId}` });
			fetchData();
			fetchPrevAndNextPokemonData();
		};

		const fetchData = async () => {
			try {
				if (typeof id.currentPokemonId !== "string") {
					return;
				}
				const data = await getSpecificPokemonData(id.currentPokemonId);
				currentPokemonData.value = data ?? {};
				console.log(currentPokemonData.value);
			} catch (error) {
				// handle error
			}
		};

		const fetchPrevAndNextPokemonData = async () => {
			try {
				if (typeof id.currentPokemonId !== "string") {
					return;
				}
				const prevData = await getPokemonNameId(
					Number(id.currentPokemonId) - 1
				);
				const nextData = await getPokemonNameId(
					Number(id.currentPokemonId) + 1
				);
				prevPokemonData.value = prevData ?? {};
				nextPokemonData.value = nextData ?? {};
			} catch (error) {
				console.error(error);
			}
		};

		const formatPokemonId = (id: number): string => {
			if (id) {
				return "#" + id.toString().padStart(4, "0");
			}
			return "";
		};

		fetchData();
		fetchPrevAndNextPokemonData();

		return {
			currentPokemonData,
			prevPokemonData,
			nextPokemonData,
			formatPokemonId,
			navigatePrevOrNextPokemon,
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
	text-transform: capitalize;
}

.pokemonId {
	color: gray;
}

.pokemonImg {
	width: 375px;
	height: 375px;
}

.details {
	display: flex;
	justify-content: center;
	column-gap: 2rem;
}

.types {
	display: flex;
	column-gap: 1rem;
}

.typeAndStatsContainer {
	min-width: 300px;
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
	margin-right: auto;
}

.rightButton {
	width: 50%;
	display: flex;
	justify-content: center;
	column-gap: 0.5rem;
	margin-left: auto;
}
</style>

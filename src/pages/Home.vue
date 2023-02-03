<template lang="">
	<Header />
	<Pokedex />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Pokedex from "../components/Pokedex.vue";
export default defineComponent({
	name: "Home",
	components: {
		Header,
		Pokedex,
	},
});
</script>
<style lang=""></style>

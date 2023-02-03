<template lang="">
	<div class="typeBox">{{ typeText }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	props: {
		typeText: {
			type: String,
		},
	},
	setup(props) {
		const typeText = ref(props.typeText);
		return {
			typeText,
		};
	},
});
</script>
<style scoped>
.typeBox {
	width: 100px;
	background-color: aquamarine;
	padding: 0.75rem 0.75rem;
	color: black;
	font-size: 1.2rem;
	font-weight: 500;
}
</style>

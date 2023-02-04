<template lang="">
	<div class="typeBox">{{ typeText }}</div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
	props: {
		typeText: {
			type: String,
		},
	},
	setup(props) {
		const typeText = computed(() => props.typeText);
		return {
			typeText,
		};
	},
});
</script>
<style scoped>
.typeBox {
	width: 120px;
	background-color: #f64171;
	color: white;
	padding: 0.75rem 0.75rem;
	font-size: 1.2rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	border-radius: 5px;
}
</style>

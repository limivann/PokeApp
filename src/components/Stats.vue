<template lang="">
	<table class="statsTable">
		<tr class="hp">
			<td>Hit Points</td>
			<td>{{ stats?.hp }}</td>
		</tr>
		<tr class="attack">
			<td>Attack</td>
			<td>{{ stats?.attack }}</td>
		</tr>
		<tr class="defense">
			<td>Defense</td>
			<td>{{ stats?.defense }}</td>
		</tr>
		<tr class="specialAttack">
			<td>Special Attack</td>
			<td>{{ stats?.spAtk }}</td>
		</tr>
		<tr class="specialDefense">
			<td>Special Defense</td>
			<td>{{ stats?.spDef }}</td>
		</tr>
		<tr class="speed">
			<td>Speed</td>
			<td>{{ stats?.speed }}</td>
		</tr>
	</table>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { StatData } from "../interfaces";

export default defineComponent({
	props: {
		stats: {
			type: Object as PropType<StatData>,
		},
	},
	setup(props) {
		const stats = computed(() => props.stats);
		return {
			stats,
		};
	},
});
</script>
<style scoped>
table {
	width: 100%;
	border-collapse: collapse;
}

th,
td {
	border: 1px solid white;
	padding: 8px;
	text-align: left;
}

th {
	background-color: lightgray;
}
</style>

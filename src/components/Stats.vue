<template lang="">
	<table class="statsTable">
		<tr>
			<td>Hit Points</td>
			<td>{{ stats?.hp }}</td>
		</tr>
		<tr>
			<td>Attack</td>
			<td>{{ stats?.attack }}</td>
		</tr>
		<tr>
			<td>Defense</td>
			<td>{{ stats?.defense }}</td>
		</tr>
		<tr>
			<td>Special Attack</td>
			<td>{{ stats?.spAtk }}</td>
		</tr>
		<tr>
			<td>Special Defense</td>
			<td>{{ stats?.spDef }}</td>
		</tr>
		<tr>
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

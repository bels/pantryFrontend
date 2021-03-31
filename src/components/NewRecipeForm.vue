<template>
	<div>
		<PotentialRecipeItem v-for="item in potentialItems" :item="item" />
	</div>
</template>

<script>
	import PotentialRecipeItem from './PotentialRecipeItem.vue';

	export default {
		components: {
			PotentialRecipeItem: PotentialRecipeItem
		},
		computed: {
			potentialItems() {
				return this.$store.state.items;
			}
		}
	}
</script>
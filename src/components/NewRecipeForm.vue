<template>
	<form>
		<div class="form-row form-group">
			<label for="recipe-name-input" class="col-3">Name</label>
			<div class="col">
				<input type="text" id="recipe-name-input" class="form-control" v-model="recipeName" />
			</div>
		</div>
		<PotentialRecipeItem v-for="item in potentialItems" :item="item" @click="syncRecipeItems" :key="item.id" />
	</form>
	<div class="row mt-3">
		<div class="col text-center">
			<button type="button" class="btn btn-primary" @click="saveRecipe">Save</button>
		</div>
	</div>
</template>

<script>
	import PotentialRecipeItem from './PotentialRecipeItem.vue';

	export default {
		data: function(){
			return {
				recipeName: '',
				recipeItems: []
			}
		},
		components: {
			PotentialRecipeItem: PotentialRecipeItem
		},
		computed: {
			potentialItems() {
				return this.$store.state.items;
			}
		},
		methods: {
			syncRecipeItems: function(){
			
			},
			saveRecipe: function(){
				this.$store.dispatch('postRecipe',{name: this.recipeName, items: this.recipeItems});
				this.recipeName = '';
				this.recipeItems = [];
			}
		}
	}
</script>
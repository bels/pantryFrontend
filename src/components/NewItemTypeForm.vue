<template>
	<form>
		<div class="form-group">
			<label for="item-type-name">Item Type Name</label>
			<input type="text" class="form-control" v-model="itemTypeName" />
		</div>
		<button type="button" class="btn btn-primary" v-on:click="submit">Create</button>
	</form>
</template>

<script>
	export default {
		data: function(){
			return {
				itemTypeName: ''
			}
		},
		methods: {
			submit: function(){
				this.$store.dispatch('postItemType',{name: this.itemTypeName});
				this.itemTypeName = '';
			}
		}
	}
</script>
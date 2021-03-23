<template>
	<form>
		<div class="form-group">
			<label for="item-location-name">Item Location Name</label>
			<input type="text" class="form-control" v-model="itemLocationName" />
		</div>
		<button type="button" class="btn btn-primary" v-on:click="submit">Create</button>
	</form>
</template>

<script>
	export default {
		data: function(){
			return {
				itemLocationName: ''
			}
		},
		methods: {
			submit: function(){
				this.$store.dispatch('postLocation',{name: this.itemLocationName});
				this.itemLocationName = '';
			}
		}
	}
</script>
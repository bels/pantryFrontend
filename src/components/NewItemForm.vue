<template>
	<form>
		<div class="form-group">
		  <label for="item-name">Item Name</label>
		  <input type="text" class="form-control" v-model="itemName">
		</div>
		<button type="button" class="btn btn-primary" v-on:click="submit">Create</button>
	</form>
</template>

<script setup>
	axios.get('/locations').then(res =>{
	
	}).catch(err => {
	
	})
</script>

<script>
	export default {
		data: function(){
			return {
				itemName: '',
				locations: []
			}
		},
		methods: {
			submit: function(){
				console.log(this.itemName);
				this.itemName = '';
			}
		}
	}
</script>
<template>
	<form>
		<div class="form-group">
		  <label for="item-name">Item Name</label>
		  <input type="text" class="form-control" v-model="itemName" />
		</div>
		<div class="form-group">
			<label for="item-type">Item Type</label>
			<select class="custom-select" v-model="itemType" :options="itemTypes"></select>
		</div>
		<button type="button" class="btn btn-primary" v-on:click="submit">Create</button>
	</form>
</template>

<script setup>
	axios.get('http://localhost:3000/item/types').then(res =>{
		this.itemTypes = res.data;
	}).catch(err => {
		console.log(err);
	});
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
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
				console.log(this.itemTypeName);
				axios
					.post('http://localhost:3000/item/type',{name: this.itemTypeName})
					.then(res => console.log(res))
					.catch(err => console.log(err));
				
			}
		}
	}
</script>
<template>
	<label>{{item.name}}</label>
	<input class="form-control" type="checkbox" @click="clickSelected">
	<input class="form-control" type="text" v-model="amount" />
	<select v-model="uom" class="custom-select">
		<option value="ounce">Ounce</option>
		<option value="dry-cup">Dry Cup</option>
		<option value="fluid-cup">Fluid Cup</option>
		<option value="pint">Pint</option>
		<option value="quart">Quart</option>
		<option value="teaspoon">Teaspoon</option>
		<option value="tablespoon">TableSpoon</option>
	</select>
	<button type="button" class="btn btn-primary" @click="logEverything">Log It</button>
</template>

<script>

export default {
	props: {
		item: Object
	},
	data: function(){
		return {
			amount: 0,
			uom: '',
			selected: false
		}
	},
	methods: {
		clickSelected: function(){
			this.selected = !this.selected;
		},
		logEverything: function(){
			console.log(this.amount);
			console.log(this.uom);
			console.log(this.selected);
		}
	}
}

</script>
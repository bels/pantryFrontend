<template>
	<div class="form-row form-group">
		<div class="col">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" @click="clickSelected" id="check{{item.id}}">
				<label class="form-check-label" for="check{{item.id}}">{{item.name}}</label>
			</div>
		</div>
		<div class="col">
			<input class="form-control" type="text" v-model="amount" />
		</div>
		<div class="col">
			<select v-model="uom" class="custom-select">
				<option value="ounce">Ounce</option>
				<option value="dry-cup">Dry Cup</option>
				<option value="fluid-cup">Fluid Cup</option>
				<option value="pint">Pint</option>
				<option value="quart">Quart</option>
				<option value="teaspoon">Teaspoon</option>
				<option value="tablespoon">TableSpoon</option>
			</select>
		</div>
	</div>
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
		}
	}
}

</script>
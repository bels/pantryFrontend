<template>
	<form>
		<div class="form-group">
		  <label for="item-name">Item Name</label>
		  <input type="text" class="form-control" v-model="itemName" />
		</div>
		<div class="form-group">
			<label for="item-type">Item Type</label>
			<select class="custom-select" v-model="itemType">
				<option value=''>Please Select Type</option>
				<option v-for="type in itemTypes" :value="type.id" :key="type.id">{{type.name}}</option>
			</select>
		</div>
		<div class="form-group">
			<label for="item-amount">Item Amount</label>
			<input type="text" class="form-control" v-model="itemAmount" />
		</div>
		<div class="form-group">
			<label for="item-location">Item Location</label>
			<select class="custom-select" v-model="itemLocation">
				<option value=''>Please Select Location</option>
				<option v-for="location in locations" :value="location.id" :key="location.id">{{location.name}}</option>
			</select>
		</div>
		<button type="button" class="btn btn-primary" v-on:click="submit">Create</button>
	</form>
</template>

<script>
	export default {
		data: function(){
			return {
				itemName: '',
				itemType: '',
				itemAmount: 0,
				itemLocation: ''
			}
		},
		computed: {
			itemTypes() {
				return this.$store.state.itemTypes
			},
			locations(){
				return this.$store.state.locations
			}
		},
		methods: {
			submit: function(){
				this.$store.dispatch('postItem',{name: this.itemName, type: this.itemType, amount: this.itemAmount, location: this.itemLocation});
				this.itemName = '';
				this.itemType = '';
				this.itemAmount = 0;
				this.itemLocation = '';
			}
		}
	}
</script>
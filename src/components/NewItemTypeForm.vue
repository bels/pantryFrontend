<template>
	<form>
		<div class="form-group">
			<label for="item-type-name">Item Type Name</label>
			<input type="text" class="form-control" v-model="itemTypeName" />
		</div>
	</form>
</template>

<script>
	export default {
		data: function(){
			return {
				itemTypeName: ''
			}
		}
	}
</script>
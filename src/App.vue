<template>
  <div class="container">
  	<div class="row">
  		<div class="col">
  			<h2 class="text-center">Pantry App</h2>
  		</div>
  	</div>
  	<div class="row">
  		<div class="col">
  			<ul class="nav nav-tabs">
  				<li class="nav-item">
  					<a href="#item-tab-content" id="item-tab-link" role="tab" aria-controls="item-tab-link" data-toggle="tab" aria-selected="true" class="nav-link active">Item</a>
  				</li>
  				<li class="nav-item">
  					<a href="#item-types-tab-content" id="item-types-tab-link" role="tab" aria-controls="item-types-tab-link" data-toggle="tab" aria-selected="true" class="nav-link">Item Types</a>
  				</li>
  				<li class="nav-item">
  					<a href="#item-location-tab-content" id="item-location-tab-link" role="tab" aria-controls="item-locations-tab-link" data-toggle="tab" aria-selected="true" class="nav-link">Item Locations</a>
  				</li>
  				<li class="nav-item">
  					<a href="#recipe-tab-content" id="recipe-tab-link" role="tab" aria-controls="recipe-tab-link" aria-selected="true" data-toggle="tab" class="nav-link">Recipes</a>
  				</li>
  			</ul>
  			<div class="tab-content" id="tab-content">
  				<div class="tab-pane fade show active" id="item-tab-content" role="tabpanel" aria-labelledby="item-tab-link">
  					<NewItemForm />
  				</div>
  				<div class="tab-pane fade show" id="item-types-tab-content" role="tabpanel" aria-labelledby="item-types-tab-link">
  					<NewItemTypeForm />
  				</div>
  				<div class="tab-pane fade show" id="item-location-tab-content" role="tabpanel" aria-labelledby="item-locations-tab-link">
  					
  				</div>
  				<div class="tab-pane fade show" id="recipe-tab-content" role="tabpanel" aria-labelledby="recipe-tab-link">
  					
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script setup>
  import NewItemForm from './components/NewItemForm.vue';
  import NewItemTypeForm from './components/NewItemTypeForm.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
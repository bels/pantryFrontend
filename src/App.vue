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
            <div class="row pt-3">
              <div class="col-6">
                <NewItemForm />
              </div>
              <div class="col-6">
                <h2 class="text-center">Item List</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.id">
                      <td>{{item.name}}</td>
                      <td>{{item.amount}}</td>
                      <td>{{item.location}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  				</div>
  				<div class="tab-pane fade show" id="item-types-tab-content" role="tabpanel" aria-labelledby="item-types-tab-link">
            <div class="row pt-3">
              <div class="col-6">
                <NewItemTypeForm />
              </div>
              <div class="col-6">
                <h2 class="text-center">Item Types</h2>
                <ul id="item-type-list">
                  <li v-for="item_type in itemTypes" :key="item_type.id">
                    {{item_type.name}}
                  </li>
                </ul>
              </div>
            </div>
  				</div>
  				<div class="tab-pane fade show" id="item-location-tab-content" role="tabpanel" aria-labelledby="item-locations-tab-link">
  					<div class="row pt-3">
              <div class="col-6">
                <NewItemLocationForm />
              </div>
              <div class="col-6">
                <h2 class="text-center">Item Locations</h2>
                <ul id="item-type-list">
                  <li v-for="location in itemLocations" :key="location.id">
                    {{location.name}}
                  </li>
                </ul>
              </div>
            </div>
  				</div>
  				<div class="tab-pane fade show" id="recipe-tab-content" role="tabpanel" aria-labelledby="recipe-tab-link">
  					<div class="row pt-3">
              <div class="col-6">
                <NewRecipeForm />
              </div>
              <div class="col-6">
                <h2 class="text-center">Recipe</h2>
              </div>
            </div>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
  import NewItemForm from './components/NewItemForm.vue';
  import NewItemTypeForm from './components/NewItemTypeForm.vue';
  import NewItemLocationForm from './components/NewItemLocationForm.vue';
  import NewRecipeForm from './components/NewRecipeForm.vue';

  export default{
    components: {
      NewItemForm: NewItemForm,
      NewItemTypeForm: NewItemTypeForm,
      NewItemLocationForm: NewItemLocationForm,
      NewRecipeForm: NewRecipeForm
    },
    created() {
      this.$store.dispatch('getItemTypes');
      this.$store.dispatch('getItems');
    },
    computed: {
      itemTypes() {
        return this.$store.state.itemTypes
      },
      items() {
        return this.$store.state.items
      },
      itemLocations(){
        return this.$store.state.locations
      }
    }
  }
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
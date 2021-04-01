import { createApp }   from 'vue';
import { createStore } from 'vuex';
import App             from './App.vue';

const api = axios.create({
	baseURL: 'http://localhost:3000'
});


const store = createStore({
	state: {
		items: [],
		itemTypes: [],
		recipes: [],
		locations: []
	},
	mutations: {
		loadItems(state, items) {
			state.items = items;
		},
		addItem(state, item){
			state.items.push(item);
		},
		loadItemTypes(state,types) {
			state.itemTypes = types;
		},
		addItemType(state,type){
			state.itemTypes.push(type);
		},
		addLocation(state,location){
			state.locations.push(location);
		},
		loadLocations(state,locations){
			state.locations = locations;
		},
		addRecipe(state,recipe){
			state.recipes.push(recipe);
		},
		loadRecipes(state, recipes) {
			state.recipes = recipse;
		}
	},
	actions: {
		getItems(context){
			api
				.get('/items')
					.then((res) => {
						context.commit('loadItems',res.data);
					}).catch((error) => {
						console.log(error);
					});
		},
		postItem(context,data){
			api
				.post('/item',data)
					.then((res) => {
						context.commit('addItem',res.data);
					});
			
		},
		getItemTypes(context){
			api
				.get('/item/types')
					.then((res) => {
						context.commit('loadItemTypes',res.data);
					}).catch((error) => {
						console.log(error);
					});
		},
		postItemType(context,data){
			api
				.post('/item/type',data)
					.then((res) => {
						context.commit('addItemType',res.data);
					})
					.catch(err => console.log(err));
		},
		postLocation(context,data){
			api
				.post('/location',data)
					.then((res) => {
						context.commit('addLocation',res.data);
					});
		},
		getLocations(context){
			api
				.get('/locations')
					.then((res) => {
						context.commit('loadLocations',res.data);
					}).catch((error) => {
						console.log(error);
					});
		},
		postRecipe(context,data){
			api
				.post('/recipe',data)
					.then((res) => {
						context.commit('addRecipe',res.data);
					});
		},
		getRecipes(context){
			api
				.get('/recipes')
					.then((res) => {
						context.commit('loadRecipes',res.data);
					}).catch((error) => {
						console.log(error);
					});
		}
	}
});

createApp(App).use(store).mount('#app');

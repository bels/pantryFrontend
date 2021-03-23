import { createStore } from 'vuex';
import axios           from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000'
});

export default createStore({
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
	},
	actions: {
		syncItems(context){
			api
				.get('/items')
				.then((res) => {
					context.commit('loadItems',res.data);
				}).catch((error) => {
					console.log(error);
				});
		},
		postItem(context){
			api
				.post('/item',)
		}
	}
});
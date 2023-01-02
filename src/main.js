import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			count: 0
		}
	},
	mutations: {
		increment(state) {
			state.count += 1
		},
		decrement(state){
			state.count -=1
		}
	}
})


const app = createApp(App)
app.use(store)
app.mount('#app')
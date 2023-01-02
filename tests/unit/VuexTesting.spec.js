import {createStore} from 'vuex'

describe('Vuex', () => {
/*	it('mutations',()=>{
		const store = createStore({
			state:{
				count:0
			},
			mutations:{
				increment(state){
					state.count += 1
				},
				decrement(state){
					state.count -= 1
				}
			}
		})
		store.commit('increment')
		expect(store.state.count).toBe(1)
		
		store.commit('decrement')
		expect(store.state.count).toBe(0)
	})*/
/*	test('increment mutation', () => {
		const store = createStore({
			state: {
				count: 0
			},
			mutations: {
				increment(state) {
					state.count += 1
				}
			}
		})
		
		store.commit('increment')
		
		expect(store.state.count).toBe(1)
	})*/
	
	const createVuexStore = (initialState) =>
		createStore({
			state: {
				count: 0,
			},
			mutations: {
				increment(state, value = 1) {
					state.count += value
				}
			}
		})
	
	test.skip('increment mutation without passing a value', () => {
		const store = createVuexStore({ count: 20 })
		store.commit('increment')
		expect(store.state.count).toBe(21)
	})
	
	test.skip('increment mutation with a value', () => {
		const store = createVuexStore({ count: -10 })
		store.commit('increment', 15)
		expect(store.state.count).toBe(5)
	})
	
})


/*
import {mount} from '@vue/test-utils'
import VuexTesting from "@/components/VuexTesting.vue";

describe('VuexTesting.vue',()=>{
	test('vuex using a mock store', async () => {
		const $store = {
			state: {
				count: 25
			},
			commit: jest.fn()
		}
		
		const wrapper = mount(VuexTesting, {
			global: {
				mocks: {
					$store
				}
			}
		})
		
		expect(wrapper.html()).toContain('Count: 25')
		await wrapper.find('button').trigger('click')
		expect($store.commit).toHaveBeenCalled()
	})
})*/

import TranstionTest from "@/components/TranstionTest.vue";
import {mount} from '@vue/test-utils'

describe('TranstionTest.vue',()=>{
	test.skip('Testing transtion',async() => {
		const wrapper = mount(TranstionTest)
	expect(wrapper.find('hello').exists()).toBe(false)
	
	await wrapper.find('button').trigger('click')
	expect(wrapper.get('p').text()).toEqual('hello')
})
})
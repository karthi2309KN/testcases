import {mount} from '@vue/test-utils'
import TestCases from "@/components/TestCases.vue";
import SecondComp from "@/components/secondComp.vue";

describe('SecondComp.vue',()=>{
	test.skip('passing props from one comp to another comp',()=>{
		const wrapper = mount(SecondComp)
		expect(wrapper.getComponent(TestCases).vm.msg).toBe('hello world')
		expect(wrapper.getComponent(TestCases).props()).toEqual({
			msg:'hello world'
		})
	})
})
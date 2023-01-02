import {mount} from '@vue/test-utils'
import SlotsTest from "@/components/SlotsTest.vue";

describe('SlotsTest.Vue',()=>{
	test.skip('testing Slots',()=>{
		const wrapper = mount(SlotsTest,{
			slots:{
				header: '<div>Header</div>',
				main: '<div>Main Content</div>',
				footer: '<div>Footer</div>'
			}
		})
		expect(wrapper.html()).toContain('<div>Header</div>')
		expect(wrapper.html()).toContain('<div>Main Content</div>')
		expect(wrapper.html()).toContain('<div>Footer</div>')
	})
})
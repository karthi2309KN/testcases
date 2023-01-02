import {mount} from '@vue/test-utils'
import ConditionalRendring from "@/components/ConditionalRendring.vue";

describe('conditionnalRendering TestCase',()=>{
	test.skip('render a link',()=>{
		const wrapper = mount(ConditionalRendring)
		const profileLink = wrapper.get('#profile')
		expect(profileLink.text()).toEqual('My profile')
	})
	test.skip('does not render an admin link', () => {
		const wrapper = mount(ConditionalRendring)
		
		// Using `wrapper.get` would throw and make the test fail.
		expect(wrapper.find('#admin').exists()).toBe(false)
	})
	
	test.skip('renders an admin link', () => {
		const wrapper = mount(ConditionalRendring, {
			data() {
				return {
					admin: true
				}
			}
		})
		
		// Again, by using `get()` we are implicitly asserting that
		// the element exists.
		expect(wrapper.get('#admin').text()).toEqual('Admin')
	})
	
	test.skip('does not show the user dropdown', () => {
		const wrapper = mount(ConditionalRendring)
		
		expect(wrapper.get('#user-dropdown').isVisible()).toBe(false)
	})
})
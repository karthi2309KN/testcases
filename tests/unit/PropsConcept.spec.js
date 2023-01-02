import {mount} from '@vue/test-utils'
import PropsConcept from "@/components/PropsConcept.vue";

describe('PropsConcept.Vue',()=>{
	test.skip('renders an error if length is too short', () => {
		const wrapper = mount(PropsConcept, {
			props: {
				minLength: 10
			},
			data() {
				return {
					password: 'short'
				}
			}
		})
		
		expect(wrapper.html()).toContain('Password must be at least 10 characters')
	})
	
	test.skip('renders a greeting when show is true', async () => {
		const wrapper = mount(PropsConcept,{
			props:{
				show : true
			}
		})
		expect(wrapper.html()).toContain('Hello')
		
		await wrapper.setProps({ show: false })
		
		expect(wrapper.html()).not.toContain('Hello')
	})
})
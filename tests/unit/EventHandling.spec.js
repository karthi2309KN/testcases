import {mount} from '@vue/test-utils'
import EventHandling from "@/components/EventHandling.vue";

describe('Eventhandeling.Vue',()=>{
	test.skip('Event on button',() => {
		const wrapper = mount(EventHandling)
		wrapper.find('button').trigger('click')
		wrapper.find('button').trigger('click')
		
		expect(wrapper.emitted()).toHaveProperty('increment')
	})/*
	test('emits an event with count when clicked', () => {
		const wrapper = mount(EventHandling)
		
		wrapper.find('button').trigger('click')
		wrapper.find('button').trigger('click')
		
		const incrementEvent = wrapper.emitted('increment')
		
		expect(incrementEvent).toHaveLength(2)

		expect(incrementEvent[0]).toEqual([1])

		expect(incrementEvent[1]).toEqual([2])
	})*/
	
	test.skip('emits an event with count when clicked', () => {
		const wrapper = mount(EventHandling)
		
		wrapper.find('button').trigger('click')
		wrapper.find('button').trigger('click')
		
		// We have "clicked" twice, so the array of `increment` should
		// have two values.
		expect(wrapper.emitted('increment')).toHaveLength(2)
		
		// Then, we can make sure each element of `wrapper.emitted('increment')`
		// contains an array with the expected object.
		expect(wrapper.emitted('increment')[0]).toEqual([
			{
				count: 1,
				isEven: false
			}
		])
		
		expect(wrapper.emitted('increment')[1]).toEqual([
			{
				count: 2,
				isEven: true
			}
		])
	})
	
/*	test('emits textarea value on submit', async () => {
		const wrapper = mount(EventHandling)
		const description = 'Some very long text...'
		
		await wrapper.findComponent({ ref: 'description' }).setValue(description)
		
		wrapper.find('form').trigger('submit')
		
		expect(wrapper.emitted('submitted')[0][0]).toEqual(description)
	})*/
})
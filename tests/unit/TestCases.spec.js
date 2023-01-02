import {mount} from '@vue/test-utils'
import TestCases from "@/components/TestCases.vue";

describe ('TestCases.vue',()=>{
	test.skip('rendering a greet',()=>{
		const wrapper =mount(TestCases,{
			props:{
				msg1:'hello'
			}
		})
		expect(wrapper.html()).toContain('hello world')
	})
	
	test.skip('rendering the text',()=>{
		const wrapper = mount(TestCases)
		const todo = wrapper.get('[data-test="todo"]')
		expect(todo.text()).toBe('learning testing')
	})
	
	test.skip('creates a todo', async() => {
		const wrapper = mount(TestCases)
		expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
		
		await wrapper.get('[data-test="new-todo"]').setValue('New todo')
		await wrapper.get('[data-test="form"]').trigger('submit')
		
		expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
	})
	
	
	test.skip('completes a todo', async () => {
		const wrapper = mount(TestCases)
		
		await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
		
		expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
	})
	
	
})
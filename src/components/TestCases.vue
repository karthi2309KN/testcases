<template>
		<div>1.{{ msg1 }} {{ msg2 }}</div>
		<div>2.{{msg}}</div>
		<div v-for="todo in todos" :key="todo.id" data-test="todo" :class="[todo.completed ? 'completed' : '']" >
			{{todo.text}}
				<input
						type="checkbox"
						v-model="todo.completed"
						data-test="todo-checkbox"
				/>
		</div>
		<form data-test="form" @submit.prevent="createTodo">
				<input data-test="new-todo" v-model="newTodo" />
		</form>
</template>

<script>
export default {
		name:"TestCases",
		props: {
				msg1:String,
			msg: String
		},
		data(){
				return{
						newTodo: '',
						msg2:'world',
						todos:[
								{
										id:1,
										text:'learning testing',
										completed:false,
								}
						],
				}
		},
		methods:{
				createTodo() {
						this.todos.push({
								id: 2,
								text: this.newTodo,
								completed: false
						})
						this.newTodo=''
				}
		}
}
</script>

<style scoped>

</style>
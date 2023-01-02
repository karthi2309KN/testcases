<template>
		<p>props</p>
		<div>
				<input v-model="password" >
				<div v-if="error">{{ error }}</div>
		</div>
		<div v-if="show">{{ greeting }}</div>
</template>

<script>
export default {
		name:"PropsConcept",
		props: {
				minLength: {
						type: Number
				},
				show:{
						type: Boolean,
						default: true,
				}
		},
		data(){
				return{
						password:'',
						greeting: 'Hello'
				}
		},
		computed: {
				error() {
						if (this.password.length < this.minLength) {
								return `Password must be at least ${this.minLength} characters.`
						}
						return ''
				}
		}
}
</script>

<style scoped>

</style>
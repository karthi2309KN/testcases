<template>
<!--				<form @submit.prevent="submit">
						<input type="email" v-model="form.email" />
						
						<textarea v-model="form.description" />
						
						<select v-model="form.city">
								<option value="new-york">New York</option>
								<option value="moscow">Moscow</option>
						</select>
						
						<input type="checkbox" v-model="form.subscribe" />
						
						<input type="radio" value="weekly" v-model="form.interval" />
						<input type="radio" value="monthly" v-model="form.interval" />
						
						<button type="submit">Submit</button>
				</form>-->
		<hr>
		<div>
				<form>
						<input type="text" v-model="value" @blur="handelBlur" />
						<button >Submit</button>
				</form>
		</div>
</template>

<script>
export default {
		name:"FormHandling",
		data(){
				return{
						form: {
								email: '',
								description: '',
								city: '',
								subscribe: false,
								interval: ''
						},
						value:''
				}
		},
		methods:{
				async submit(){
						this.$emit('submit',this.form)
				},
				handelBlur(event){
						if(event.relatedTarget.tagName === 'BUTTON'){
								this.$emit('focus-lost')
						}
				}
		}
		
}
</script>

<style scoped>

</style>
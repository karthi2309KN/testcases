<template>
		<h1>Api</h1>
	<form @submit.prevent>
			<label for="username" >UserName</label>
			<input id="username" type="text" v-model="username"/>
			<label for="email" >Email</label>
			<input id="email" type="email" v-model="email"/>
			<label for="password" >Password</label>
			<input id="password" type="password" v-model="password"/>
			<label for="password-repeat" >PasswordRepeat</label>
			<input id="password-repeat" type="password" v-model="passwordRepeat"/>
			
			<button class="btn btn-primary"  @click="submit">SignIn</button>
	</form>
</template>

<script>
import axios from 'axios'
export default {
		name:"ApiCalling",
		data() {
				return {
						data:[]
				}
		},
		methods: {
				submit(){
			axios.post(`https://jsonplaceholder.typicode.com/posts`,{
					title:this.username,
					body:this.email,
					id:this.password
			})
					.then(response =>{
							console.log(response)
					})
				}
		},
		computed:{
				isDisabled(){
						return this.password && this.passwordRepeat
						? this.password !== this.passwordRepeat
								:true;
				}
		}
}
</script>

<style scoped>
.btn{
		margin-top: 30px;
}

</style>
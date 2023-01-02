<template>
		<div class="card">
				<button class="btn btn-primary" @click="handleClick">Increment</button>
				{{count}}
		</div>
<!--		<form @submit.prevent="handleSubmit">
				<textarea v-model="description" ref="description" />
				<button type="submit">Send</button>
		</form>-->
		
</template>

<script>
export default {
		name:"EventHandling",
		data(){
				return{
						count:0,
						description:'',
						content:''
				}
		},
		methods:{
				handleClick() {
						this.count+=1
						this.$emit('increment',{
								count: this.count,
								isEven: this.count % 2 === 0,
						})
				},
				handleSubmit(){
						this.$emit('submitted', this.description)
				/*		this.content = this.description*/
				}
		}
}
</script>

<style scoped>
.btn{
		margin:20px;
}

</style>
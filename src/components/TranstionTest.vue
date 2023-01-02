<template>
		<button @click="show = !show">Toggle</button>
		
		<transition name="fade">
				<p v-if="show">hello</p>
		</transition>
</template>

<script>

export default {
		name:"TranstionTest",
		data(){
				return{
						show : false
				}
		}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
		transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
		opacity: 0;
}
</style>
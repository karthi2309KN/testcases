<template>
		<div>
				<button @click="increment">click me</button><button @click="decrement">decrease</button>
				Count: {{ count }}
		</div>
</template>

<script>
export default {
		name:"VuexTesting",
		computed: {
				count() {
						return this.$store.state.count
				}
		},
		methods: {
				increment() {
						this.$store.commit('increment')
				},
				decrement(){
						this.$store.commit('decrement')
				}
		}
}
</script>

<style scoped>

</style>
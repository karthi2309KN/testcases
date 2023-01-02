<template>
<div>
		<form @submit.prevent>
				<label>{{label}}</label>
				<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
		</form>
</div>
</template>

<script>
export default {
		name:"VmodelTest",
		props:{
				label: String,
				modelValue: String,
		}
}
</script>

<style scoped>

</style>
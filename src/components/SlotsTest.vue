<template>
		<div>
				<h1>Slots</h1>
				<header>
						<slot name="header"/>
				</header>
				<main>
						<slot name="main"/>
				</main>
				<footer>
						<slot name="footer"/>
				</footer>
		</div>
</template>

<script>
export default {
		name:"SlotsTest"
}
</script>

<style scoped>

</style>
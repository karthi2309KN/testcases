<template>
<div>
		<nav class="navbar">
				<a id="profile" href="/profile">My profile</a>
				<a v-if="admin" id="admin" href="/admin">Admin</a>
		</nav>
		
		<nav class="navbar">
				<a id="user" href="/profile">My Profile</a>
				<ul v-show="shouldShowDropdown" id="user-dropdown">
				</ul>
		</nav>
</div>
</template>

<script>
export default {
		name:"ConditionalRendring",
		data(){
				return{
						admin: false,
						shouldShowDropdown: false
				}
		}
}
</script>

<style scoped>

</style>
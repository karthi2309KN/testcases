<template>
  <HelloWorld msg="Vue 3 & Vue Test Utils"/>
		<SecondComp/>
		<ApiCalling/>
		<ConditionalRendring/>
		<EventHandling/>
		<FormHandling/>
		<PropsConcept min-length="20"  />
		<SlotsTest>
				<template #header>
						<h1>
								header
						</h1>
				</template>
				<template #main>
						<h1>
								main
						</h1>
				</template>
				<template #footer>
						<h1>
								footer
						</h1>
				</template>
				
				</SlotsTest>
		
		<TranstionTest></TranstionTest>
		<VmodelTest v-model="text" label="test"/>
		<VuexTesting/>
		
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SecondComp from "@/components/secondComp.vue";
import ConditionalRendring from "@/components/ConditionalRendring.vue";
import EventHandling from "@/components/EventHandling.vue";
import FormHandling from "@/components/FormHandling.vue";
import PropsConcept from "@/components/PropsConcept.vue";
import SlotsTest from "@/components/SlotsTest.vue";
import ApiCalling from "@/components/ApiCalling.vue";
import TranstionTest from "@/components/TranstionTest.vue";
import VmodelTest from "@/components/VmodelTest.vue";
import VuexTesting from "@/components/VuexTesting.vue";

export default {
  name: 'App',
  components: {
			VuexTesting,
			VmodelTest,
			TranstionTest,
			ApiCalling,
			SlotsTest,
			PropsConcept,
			FormHandling,
			EventHandling,
			ConditionalRendring,
			SecondComp,
      HelloWorld,
  },
	data(){
			return{
					text:'test'
			}
	}
}
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

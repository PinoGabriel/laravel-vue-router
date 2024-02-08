<script>

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import { computeStyles } from "@popperjs/core";
import { RouterView } from "vue-router";

export default {
	components: {
		RouterView
	},
	data() {
		return {
			store,
			menuItems: [
				{
					routeName: 'home',
					label: 'HomePage'
				},
				{
					routeName: 'about',
					label: 'Chi Siamo'
				},
				{
					routeName: 'event',
					label: 'Eventi'
				}
			]
		}
	},
	mounted() {
		this.getEventList();
	},
	methods: {
		getEventList() {
			let url = this.store.apiUrl + this.store.apiEventEndpoint

			axios.get(url).then(risultato => {
				if (risultato.status === 200 && risultato.data.success) {
					console.log(risultato.data.payload);
					this.store.eventList = risultato.data.payload
				}
				else {
					console.error('Qualcosa è andato storto');
				}
			}).catch(errore => {
				console.error(errore);
			});
		}
	}
}
</script>

<template>
	<header>
		<li v-for="(item, index) in menuItems" :key="index">
			<router-link :to="{ name: item.routeName }" class="nav-link">
				{{ item.label }}
			</router-link>
		</li>
	</header>
	<router-view></router-view>

	<main>

	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>
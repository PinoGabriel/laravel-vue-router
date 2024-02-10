<script>

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import { computeStyles } from "@popperjs/core";
import { RouterView } from "vue-router";
import AppHeader from './components/AppHeader.vue';

export default {
	components: {
		RouterView,
		AppHeader,
	},
	data() {
		return {
			store,
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
	<AppHeader></AppHeader>

	<main>
		<router-view></router-view>
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
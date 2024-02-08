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
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li v-for="(item, index) in menuItems" :key="index" class="nav-item">
							<router-link :to="{ name: item.routeName }" class="nav-link">
								{{ item.label }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
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
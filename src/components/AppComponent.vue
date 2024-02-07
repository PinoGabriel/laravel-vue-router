<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div>
        <h1>Tutti gli Eventi</h1>

        <div class="container">
            <div class="row justify-content-between">
                <div v-for="evento in store.eventList" class="card mb-3" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title">{{ evento.event_name }}</h3>
                        <h5 class="card-title">User: {{ evento.user.name }}</h5>
                        <p class="card-text">Ci sono {{ evento.available_tickets }} biglietti per il {{ evento.date }}</p>
                        <a href="#" class="btn btn-primary">Vai all'evento</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>
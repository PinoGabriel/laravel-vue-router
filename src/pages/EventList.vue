<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "EventList",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h1 class="my-5">Tutti gli Eventi</h1>
            <div class="row justify-content-between">
                <div v-for="evento in store.eventList" class="card mb-3" style="width: 18rem;">
                    <div v-if="!evento">Caricamento in corso...</div>
                    <div class="card-body">
                        <h3 class="card-title">{{ evento.event_name }}</h3>
                        <h5 class="card-title">User: {{ evento.user.name }}</h5>
                        <p class="card-text">Ci sono {{ evento.available_tickets }} biglietti per il {{ evento.date }}
                        </p>
                        <a href="#" class="btn btn-primary">
                            <router-link :to="{ name: 'event_details', params: { id: evento.id } }" class="nav-link">
                                Vai all'evento
                            </router-link>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>



<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
main {
    padding: 1rem;
}
</style>
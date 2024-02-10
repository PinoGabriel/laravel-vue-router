<script>
import { store } from "../store.js" //state management

export default {
    name: "EventDetails",
    props: ["id"],
    data() {
        return {
            store,
            evento: null
        }
    },
    mounted() {
        console.log("Eventi: ", this.store.eventList[this.id - 1]);
        this.evento = this.store.eventList.find(item => item.id == this.id)
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-if="!evento">Caricamento in corso...</div>
            <div class="card my-5">
                <div class="card-body">
                    <h3 class="card-title">{{ evento?.event_name }}</h3>
                    <h5 class="card-title">User: {{ evento?.user.name }}</h5>
                    <p class="card-text">Ci sono <b>{{ evento?.available_tickets }}</b> biglietti per il <b>{{ evento?.date
                    }}</b>
                    </p>
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
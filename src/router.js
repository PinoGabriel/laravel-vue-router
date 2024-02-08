import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue'
import AboutUs from './pages/AboutUs.vue'
import EventList from './pages/EventList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs,
        },
        {
            path: '/event',
            name: 'event',
            component: EventList,
        },
    ]
});

export { router };
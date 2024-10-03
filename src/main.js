import { createApp } from 'vue'
import './style.css'
import 'flowbite';
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createMemoryHistory, createRouter } from 'vue-router'
// Screens
import Landing from './screens/Landing.vue'
import Start from './screens/Start.vue'
import Pricing from './screens/Pricing.vue'
import Contact from './screens/Contact.vue'


const routes = [
    { 
        path: '/', 
        name: 'Landing',
        component: Landing
    },
    {
        path: '/start',
        name: 'Start',
        component: Start
    },
    {
        path:'/pricing',
        name: 'Pricing',
        component: Pricing
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
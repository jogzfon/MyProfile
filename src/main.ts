import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router';

const app = createApp(App);

app.use(router);  // Use the router instance in the Vue app

app.mount('#app');

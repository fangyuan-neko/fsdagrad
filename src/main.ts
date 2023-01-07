import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// import router from './routes.js'

const app = createApp(App);
var pinia = createPinia();
app.use(pinia);
// app.use(createPinia());
app.mount('#app');

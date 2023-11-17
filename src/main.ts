import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import router from './router'
import { createPinia } from 'pinia';
import './mock/index'
import App from './App.vue'
const app=createApp(App)
app.use(router).use(createPinia()).use(ElementPlus)
app.mount('#app')

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import 'normalize.css/normalize.css'
import router from './router'
import { createPinia } from 'pinia';
import './mock/index'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import svgIcon from './components/svg-icon/index.vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('svg-icon', svgIcon)
app.use(router).use(createPinia()).use(ElementPlus)
app.mount('#app')

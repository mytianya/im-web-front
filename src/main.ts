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
app.directive('vTablescroll', {
    mounted(el: Element, binding) {
        console.log( el.querySelector(".scroll_table .el-table__body-wrapper"))
        const selectwrap = el.querySelector(".scroll_table .el-table__body-wrapper")
        console.log(selectwrap)
        if (selectwrap == null) return
        selectwrap.scrollFn = function (this) {
            const sign = 0
            const scrollDistance =
                this.scrollHeight - this.scrollTop - this.clientHeight
                console.log(scrollDistance)
            if (scrollDistance <= sign) {
                binding.value()
            }
        }
        console.log(selectwrap.scrollFn)
        selectwrap.addEventListener('scroll', selectwrap.scrollFn)
    },
    unmounted(el: Element) {
        const selectwrap = el.querySelector(".scroll_table .el-table__body-wrapper")
        if (selectwrap == null) return
        selectwrap.removeEventListener('scroll', selectwrap.scrollFn)
        selectwrap.scrollFn = null
    }
})
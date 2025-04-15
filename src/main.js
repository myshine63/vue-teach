import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/reset.css'
import App from './App.vue'

import router from './router'
import VChild from '@/pages/lifeCycle/VChild.vue'

const app = createApp(App)
app.component('VChild',VChild) // 全局注册后，可以在其他组件中直接使用，不需要引入。但是不能按需加载。
app.use(createPinia())
app.use(router)
app.use(router)

app.mount('#app')

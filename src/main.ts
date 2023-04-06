import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 1. 引入UI组件
import { Button, Switch, Divider, ConfigProvider, Row, Col } from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'
import './assets/main.css'

const app = createApp(App)

// 使用这些的控件
app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Switch)
app.use(Divider)
app.use(ConfigProvider)
app.use(Col)
app.use(Row)

app.mount('#app')

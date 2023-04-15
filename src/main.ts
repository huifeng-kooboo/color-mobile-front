import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 1. 引入UI组件
import { Button, Switch, Divider, ConfigProvider,Uploader ,Row, Col, Space, Grid, GridItem, Field} from 'vant'
// const vue-color = require("vue-color")

// import { Chrome } from 'vue-color';
import vcolorpicker from 'vcolorpicker'
  
// import * as Three from 'three'

// 2. 引入组件样式
import 'vant/lib/index.css'
import './assets/main.css'

const app = createApp(App)

// 使用这些的控件
app.use(createPinia())
app.use(Button)
app.use(Switch)
app.use(Divider)
app.use(ConfigProvider)
app.use(Col)
app.use(Row)
app.use(Space)
app.use(Grid)
app.use(GridItem)
app.use(Field)
app.use(Uploader)
app.use(vcolorpicker)
// app.use(Chrome)
app.use(router).mount('#app')

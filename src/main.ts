import { createApp } from 'vue'
import { createPinia, getActivePinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 1. 引入UI组件
import { Button, Switch, Divider, ConfigProvider,Uploader ,Row, Col, Space, Grid, GridItem, Field} from 'vant'
import { Swipe, SwipeItem, Icon, Pagination, Locale } from 'vant';
import enUS from "vant/es/locale/lang/en-US";
import 'element-plus/theme-chalk/index.css'
import {ElColorPicker, ElCarousel, ElCarouselItem} from 'element-plus'
import vcolorpicker from 'vcolorpicker'

import pinia from '@/store/store'

// 2. 引入组件样式
import 'vant/lib/index.css'
import './assets/main.css'

Locale.use('en-US', enUS)

const app = createApp(App)
app.use(pinia)
app.use(getActivePinia)
// 使用这些的控件
// app.use(createPinia())
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
app.use(ElColorPicker)
app.use(ElCarousel)
app.use(ElCarouselItem)
app.use(Swipe)
app.use(SwipeItem)
app.use(Icon)
app.use(Pagination)
// app.use(Chrome)
app.use(router).mount('#app')


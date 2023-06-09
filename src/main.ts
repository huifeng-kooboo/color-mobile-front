import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/store/store'
import { createPinia, getActivePinia } from 'pinia'

// 1. 引入UI组件
import { Button, Switch, Divider, ConfigProvider,Uploader ,Row, Col, Space, Grid, GridItem, Field} from 'vant'
import { Swipe, SwipeItem, Icon, Pagination, Locale, Tag, Popup, Tab, Tabs } from 'vant';
import { Image as VanImage } from 'vant';
import {ElColorPicker, ElCarousel, ElCarouselItem, ElButtonGroup, ElButton} from 'element-plus'
// color 控件
// import VueColor from "@lk77/vue3-color";
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
// 2. 引入组件样式
import 'element-plus/theme-chalk/index.css'
import 'vant/lib/index.css'
import './assets/main.css'

// 3. 国际化
import enUS from "vant/es/locale/lang/en-US";
Locale.use('en-US', enUS)

// 4. 使用组件
const app = createApp(App)
app.use(pinia)
app.use(getActivePinia)
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
app.use(ElColorPicker)
app.use(ElCarousel)
app.use(ElCarouselItem)
app.use(Swipe)
app.use(SwipeItem)
app.use(Icon)
app.use(Pagination)
app.use(Tag)
app.use(ElButton)
app.use(ElButtonGroup)
app.use(Popup)
app.use(VanImage)
app.use(Tabs)
app.use(Tab)
app.use(Vue3ColorPicker)
app.use(router).mount('#app')

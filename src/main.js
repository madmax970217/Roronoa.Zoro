import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import XLSX from 'xlsx'
// import Convert_Pinyin from './const/Convert_Pinyin'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import qrcode from 'vue-qrcode-directive'

import { Scrollbar, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

//引入ECHARTS
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//引入uuid
import UUID from "vue-uuid";
Vue.use(UUID);

Vue.component(CollapseTransition.name, CollapseTransition)



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Avue)
Vue.use(XLSX)
Vue.use(qrcode)

Vue.use(Scrollbar)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

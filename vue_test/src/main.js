import Vue from 'vue'
import App from './App.vue'
// import { ElRow } from 'element-ui/types/row'
// import { ElDatePicker } from 'element-ui/types/date-picker'
// import { from } from 'core-js/core/array'
// 完整引入El UI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 按需引入
import {Button, Row, DatePicker} from 'element-ui'

Vue.config.productionTip=false

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)

const vm = new Vue({
        el:'#app',
        render(create){
            return create(App)
        }
    },
)
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// import Vuex from 'vuex'
import store from './store/index'

Vue.config.productionTip=false

Vue.use(VueResource)
// Vue.use(Vuex)

const vm = new Vue({
        el:'#app',
        render(create){
            return create(App)
        },
        store,
        beforeCreate(){
            Vue.prototype.$bus = this
        }
    },
)

console.log(vm)
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  el: '#app',
  // render(create){
  //   return create(App, '')
  // },
  render: create => create(App)
  // template: `<App></App>`,
  // components:{App}
})

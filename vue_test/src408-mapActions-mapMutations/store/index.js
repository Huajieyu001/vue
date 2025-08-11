import Vuex from 'vuex'
import Vue from 'vue'

const actions = {
    // increment(context, value){
    //     context.commit('increment', value)
    // },
    // decrement(context, value){
    //     context.commit('decrement', value)
    // },
    incrementIfOdd(context, value){
        if(context.state.sum % 2){
            context.commit('increment', value)
        }
    },
    incrementWait(context, value){
        setTimeout(()=>{
            context.commit('increment', value)
        }, 500)
    }
}
const mutations = {
    increment(state, value){
        state.sum += value;
    },
    decrement(state, value){
        state.sum -= value
    }
}
const state = {
    sum: 0,
    school: 'PKU',
    subject: 'CS'
}
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
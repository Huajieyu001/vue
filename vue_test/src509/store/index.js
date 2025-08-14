import Vuex from 'vuex'
import Vue from 'vue'

const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        increment(state, value){
            state.sum += value;
        },
        decrement(state, value){
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        school: 'PKU',
        subject: 'CS'
    },
    getters: {
        bigSum(state){
            return state.sum * 10
        }
    }
}

const personOptions = {
    actions: {},
    mutations: {},
    state: {
        persons:[
            {
                id: '001',
                name: 'Tom'
            },
            {
                id: '002',
                name: 'Rosy'
            },
        ]
    },
    getters: {}
}

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        a: countOptions,
        b: personOptions
    }
})
export default {
    install(Vue){
        Vue.mixin(
            {
                data(){
                    return {
                        i:555,
                        j:666
                    }
                }
            }
        )
    }
}
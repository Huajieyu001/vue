<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchKey"/>&nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Search",
    data(){
        return {
            searchKey: ''
        }
    },
    methods:{
        getUsers(){
            if(!this.searchKey) return;
            this.$bus.$emit('getInfo', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: []
            })
            axios.get(`https://api.github.com/search/users?q=${this.searchKey}`).then(
                resp => {
                    console.log(resp.data.items)
                    this.$bus.$emit('getInfo', 
                        {
                            isLoading: false,
                            errMsg: '',
                            users: resp.data.items
                        }
                    )
                },
                err => {
                    console.log(err.message)
                    this.$bus.$emit('getInfo', 
                        {
                            isLoading: false,
                            errMsg: err.message,
                            users: []
                        }
                    )
                }
            )

        }
    }
}
</script>

<style>

</style>
<template>
    <div id="app">
        <h1 ref='title'>Hello</h1>
        <button ref='bth'>Hello</button>
        <School/>
    </div>
</template>

<script lang='js'>
    import School from './components/School'
    export default {
        name:'App',
        components:{
            School
        },
        methods:{
            showRef(){
                console.log(this.$ref.title)
                console.log(this.$ref.bth)
            }
        }
    }
</script>

<style scoped>

</style>
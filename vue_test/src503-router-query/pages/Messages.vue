<template>
    <div>
        <ul>
            <li v-for="m in msgs" :key="m.id">
                <!-- 传参写法一 -->
                <!-- <router-link :to="`/home/messages/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 传参写法二 -->
                <router-link :to="{ 
                    path: '/home/messages/detail', 
                    query: { 
                        id: m.id, 
                        title: m.title 
                        } 
                    }">{{m.title}}</router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Messages',
    data(){
        return {
            msgs:[
                {
                    id: 1,
                    title: 'khjwsrg'
                },
                {
                    id: 2,
                    title: 'khjwsrg'
                },
                {
                    id: 3,
                    title: 'sdg'
                },
            ]
        }
    }
}
</script>

<style>

</style>
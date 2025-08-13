import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes:[
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'ns',
                    path: 'news',
                    component: News,  
                },
                {
                    name: 'msg',
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            name: 'mydetail',
                            path: 'detail',
                            component: Detail,
                            // 写法1： 传死数据
                            // props: {a: 'asf', b:'bbb'}
                            // 写法2： props=true代表此时把所有params参数作为props传给目标组件
                            // path: 'detail/:id/:title',
                            // props: true
                            // 写法3： 传函数,把对应query参数作为props传给目标组件
                            props($route){
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }

                        }
                    ]
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next)=>{
    console.log(to)
    console.log(from)
    console.log(next)
    if(to.name == 'ns' || to.name == 'msg'){
        if(window.localStorage.getItem('pwd') == '123456'){
            next()
        } else {
            console.log('zhuye验证不通过')
        }
    } else {
        next()
    }
    console.log('router hahaha')
})

export default router

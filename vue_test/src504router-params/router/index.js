import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes:[
        {
            path: '/about',
            component: About
        },
        {
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
                            path: 'detail/:id/:title',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})
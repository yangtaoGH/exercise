// 这个路由列表数据可以单独提取出来，然后通过导入的方式引入进来
// 通过lazy引入所有的模块
import React, { lazy } from 'react';
const First = lazy(() => import('pages/view/main/First'));
const Second = lazy(() => import('pages/view/Second'));
const None = lazy(() => import('pages/view/None'));
const Ntwo = lazy(() => import('pages/view/Ntwo'));

// 对于首页如果有多个tab页，那么将其写成它的另一个对象就好了

const routeData = [
    {
        id: '0',
        path: '/main/home',
        title: '总览',
        icon:'',
        component: First, //首页的方式引入了当前的文件内容
        // tab: [
        //     {
        //         id: 0,
        //         title:'设备信息',
        //         path: '/main/cancat/details/des',
        //         component: 'pages/view/Nthird.tsx'
        //     },
        //     {
        //         id: 1,
        //         title: '流量信息',
        //         path: '/main/cancat/details/info',
        //         component: 'pages/view/Nthird.tsx'
        //     },
        //     {
        //         id: 2,
        //         title: '无线信息',
        //         path: '/main/cancat/details/infos',
        //         component: 'pages/view/Nthird.tsx'
        //     }
        // ]
    },
    {
        id: '10',
        title:'联系',
        path:'/main/concat',
        child: [
            {
                id: '11',
                path: '/main/cancat/details',
                title: '详情',
                component: Second,
            },
            {
                id: '12',
                path: '/main/cancat/detail',
                title: '详情2',
                component: None,
            }
        ]
    },
    {
        id:'20',
        title: '系统',
        path: '/main/option',
        child: [{
            id: '21',
            path: '/main/option/info',
            title: '关于本机',
            component: Ntwo
        }]
    }  
]

export default routeData;
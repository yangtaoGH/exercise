import { lazy } from 'react';
const Nthird = lazy(() => import('pages/view/Nthird'));
const Nfour = lazy(() => import('pages/view/Nfour'));
const Nfive = lazy(() => import('pages/view/Nfive'));
  // 头部标签页(每个模块都各不相同，将其当做参数传递到样式文件中即可)
const navList = [
    {
        id: 0,
        title:'设备信息',
        path: '/main/home/details',
        component: Nthird
    },
    {
        id: 1,
        title: '流量信息',
        path: '/main/home/info',
        component: Nfour
    },
    {
        id: 2,
        title: '无线信息',
        path: '/main/home/des',
        component: Nfive
    }
]

export default navList;
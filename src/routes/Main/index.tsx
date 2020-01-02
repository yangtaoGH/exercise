import { lazy } from 'react';
const Third = lazy(() => import('pages/view/main/First/Direc'));
const Nfour = lazy(() => import('pages/view/main/Second/Info'));
const Nfive = lazy(() => import('pages/view/Nfive'));
  // 头部标签页(每个模块都各不相同，将其当做参数传递到样式文件中即可)
const navList = [
    {
        id: 0,
        title:'设备信息',
        path: '/main/home/details',
        component: Third
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
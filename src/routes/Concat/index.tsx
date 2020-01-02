import {lazy} from 'react';
const Nthird = lazy(() => import('pages/view/Nthird'));
const Nfour = lazy(() => import('pages/view/Nfour'));
const Nfive = lazy(() => import('pages/view/Nfive'));
// 这个navList可以放到routes下面的文件内部，这样文件分类就比较清晰了
const navList = [
    {
        id: 0,
        title:'联系页面',
        path: '/main/cancat/details/page',
        component: Nthird
    },
    {
        id: 1,
        title: '联系中心',
        path: '/main/cancat/details/info',
        component: Nfour
    },
    {
        id: 2,
        title: '联系售后',
        path: '/main/cancat/details/des',
        component: Nfive
    }
]
export default navList;

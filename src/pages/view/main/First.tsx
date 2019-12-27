import React, {lazy} from 'react';
import { TopNav, Main } from 'common/Aside';
// import { Switch, Route, Redirect } from 'react-router-dom';

const Nthird = lazy(() => import('pages/view/Nthird'));
const Nfour = lazy(() => import('pages/view/Nfour'));
const Nfive = lazy(() => import('pages/view/Nfive'));
// import Nthird from 'pages/view/Nthird';
// import Nfour from 'pages/view/Nfour';
// import Nfive from 'pages/view/Nthird';


const First = () => {
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
    
    return (
        <React.Fragment>
            {/* 传值的方式还是跟不使用hook的方式一致的 */}
            <div>
                <TopNav routeData={navList} />
            </div>
            {/* 展示渲染的内容 */}
            {/* <Switch>
                <Route path={'/main/cancat/details/des'} component={firstCon} />
                <Route path={'/main/cancat/details/info'} component={secCon} />
                <Redirect exact from='/main/cancat/details' to={'/main/cancat/details/des'} ></Redirect>
            </Switch> */}

            <Main routeData={navList} />
        </React.Fragment>
    )
}

export default First;

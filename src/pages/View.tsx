import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import viewStyles from './view.module.scss';

// 通用的路由结构样式
import { Aside, Main }  from 'common/Aside';
// 路由表，将页面需要渲染的添加进来，并且在数组中就引入了对应的模块内容
import routeData from 'routes/index';


import Header from './view/common/Header';
import Footer from './view/common/Footer';
import logo from 'asset/imgs/logo.jpeg';



const View = () => {
    
    return (
        <div className={viewStyles.view}>
            <div>
                <div>
                    <img src={logo} alt=""/>
                    <span>系统</span>
                </div>
                <Aside routeData={routeData} />
            </div>
            <div className={viewStyles.right}>
                <Header />
                <div className={viewStyles.body}>
                    {/* 通过路由切换后的内容显示的组件 */}
                    <Main routeData={routeData} />
                </div>
                
                <Footer />
            </div>
        </div>
    )
}

export default View;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import AppStyle from 'asset/css/app.module.scss';
import Login from 'pages/login/Login';
import View from 'pages/View';
import NoPage from 'pages/nopage/NoPage';

// 设置登录页面与首页的之间的切换

const App = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path='/main' component={View} />
                <Route path='/login' component={Login} />
                <Route path='/notfound' component={NoPage} />
                <Route path='/' component={Login} />

                {/* <Redirect exact to='/'></Redirect> */}
            </Switch>  
        </React.Fragment>    
    )
}
export default App;
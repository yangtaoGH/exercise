import React, { Suspense, lazy } from 'react';
import { Switch, Route, NavLink, Redirect, } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import AsideStyles from './Aside.module.scss';

// const First = React.lazy(() => import('pages/view/First'));
// const Second = React.lazy(() => import('pages/view/Second'));

{/* <Suspense fallback={<div>Loading...</div>}>
<OtherComponent />
   <TowComponent />
</Suspense> */}

// 路由文件是将侧边狂所有的类型的路由以及页面的
// 配置点击侧边栏后对应的路由
// 侧边栏

const { SubMenu } = Menu;
const Aside = (props: any) => {
    const renderList = (item: any) => {
        if (!item.child) {
            return (
                <Menu.Item key={item.id}>
                    <NavLink to={item.path}>
                        <Icon type="pie-chart" />
                        <span>{item.title}</span>
                    </NavLink>
                </Menu.Item>
            )
        } else {
            return (
                <SubMenu key={item.id} title={item.title}>
                    {
                        item.child.map((it:any) => {
                            return renderList(it)
                        })
                    }
                </SubMenu>
            )
        }
    }

    return (
        <React.Fragment>
            <div style={{ width: 256, background:'#001529' }}>
                <Menu
                    defaultSelectedKeys={['0']}
                    defaultOpenKeys={['10']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={false}
                >
                        {
                            props.routeData.map((item: any) => {
                                return renderList(item)
                            })
                        }   
                </Menu>
            </div>
        </React.Fragment>
    )
}


const TopNav = (props: any) => {
    const renderTopNav = (item: any, index: number) => {
        return (
            <li className='fl' key={index} ><NavLink activeClassName={AsideStyles.active} to={item.path}>{item.title}</NavLink></li>
        )
    }
    return (
        <React.Fragment>
            <ul className={AsideStyles.dir + ' clear'}>
                {
                    props.routeData.map((item: any, index: number) => {
                        return renderTopNav(item, index);
                    }) 
                }
            </ul>  
        </React.Fragment>
    )
}

// 获取页面内容的函数
const Main = (props: any) => {
    const handleRoute = (item: any) => {
        if (!item.child) {
            // 如何使用lazy
            console.log(item.component, '组件')
            return  (<Route key={item.id} path={item.path}
                component={item.component}
              />)
        } else {
            return item.child.map((it: any) => {
                return handleRoute(it);
            })
        }
    }
    return (
        <div>
            <Switch>
                {/* <Redirect exact  to={props.routeData[0].path}/> */}
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        props.routeData.map((item: any) => {
                            return  handleRoute(item);
                        })
                    }
                     {/* 上面都不匹配的时候，会使用下面的内容, 路由重定向也需要写在函数内部 */}
                    <Redirect to={props.routeData[0].path}/>
                </Suspense>  
            </Switch>
        </div>
    )
}


// 该组件接受一个参数props.routeData，通过传递该参数，进行页面的渲染
export {
    Main, // 路由变化后，替换后的内容
    Aside, // 侧边栏，指代的是左侧导航页的内容
    TopNav // 子集侧边栏，指代的是头部的导航栏的内容
}
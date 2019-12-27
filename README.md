## 安装的插件有  react-app-rewired react-router-dom
## 引用module.scss的时候，需要安装插件node-sass 引入的样式文件都是根据import styles from  'xxx/xxx.module.scsss'
** 需要注意的是，这样编译后的class类名回家上不唯一的数字编码，所以如果想全局更改的时候，需要在xxx.module.scss文件内部，给要添加的样式类型一个global属性
=> :global(.clear) {}

+ 在设置样式的时候，似乎伪类first-child以及last-child没有起作用，暂时没有去验证结果

- 在登录完成界面的时候，需要使用Navlink，通过使用它进行页面的路由跳转


## 设置文件夹绝对路径，通过在tsconfig函数内部添加"baseUrl": "src",然后引入模块根据src下的目录结构去进行查找，在查找的时候，默认不添加src属性

### 二级路由设置的时候，需要成对出现的，首先需要设置路由的Route

```js
<li key={items.name}>
    <NavLink to={{ pathname: `${items.url}` }}>
        <Icon type={items.icon} />
        <span>{items.text}</span>
    </NavLink>
</li> 

<Route path="/ac/network/dhcpconfig" component={Loadable({
    loader: () => import('./view/network/dhcpconfig'),
    loading: Loading
})} /> 

```

## 配置路由的时候，出现问题，当从路由中首先引入的是Redirect的时候，它将促使页面不能进行渲染（原因是没有加exact属性，'/'默认匹配所有符合该路由的界面）
## 如果配置的redirect当中不添加<Route path='/' component={Login} />，那么页面也是会不渲染的，原因未知。。
```js
    <Switch>
        {/* redirect放再这，就会导致整个页面不进行刷新
        <Redirect  to='/'></Redirect>*/}

        <Route path='/index' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
        <Route path='/notfound' component={NoPage} />
        <Redirect  to='/'></Redirect>
        {/* Redirect如果放在第一行，那么久会导致页面整个不会渲染，具体问题后期研究哈 */}
    </Switch>  
```

## 定义鼠标的事件的类型定义
```js
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
```

## 关于exact,这个属性类似于正则表达式的效果。如果使用了该属性，那么就代表路由需要完全匹配才可以，
## 如果不加，默认'/'、'/index'、'/main'都会被第一个路由匹配到，这也就是为什么如果将redirect放在前面，下面的页面会没有内容显示的原因，所有页面都被'/'匹配到了


## 路由在切换的时候，如果设置左边侧边栏，右边内容区域更改的，那么路由是通过层级嵌套的。
## 渲染内容通过Route标签去进行引入模块内容
## 通过点击事件将路由对应起来，是通过NavLink标签去包裹界面元素的

## 关于使用跟不适用exact是否需要注意Route跟Redirect的关系；
+ 如果你的 exact 设置为false，表示的是 非严格匹配；举个例子：
+ 如果你的请求的路由是： '/a/b/c';那么他会被匹配到以下路由
    1. /
    2. /a
    3. /a/b
    4. /a/b/c
+ 这里的 第4个路由是你的目标路由， 如果前3个路由的 exact都是 设置为 false; 
+ 并且路由的顺序是在 4的前面。那么前面3个的组件都会被渲染，并且默认的，会把 2 当作 1的子页面，3当作 2的子页面，
+ 这样设计的目的，是为了实现路由的嵌套业务。所以你如果不希望这样，要么设置 exact=true ；要么注意顺序。
+ 这种场景在模糊匹配的路由中也是存在的。
+ 所以定义路由的时候，一般都是这样，
+ 长路由放在短路由前面，这里是说，路由前半部分相同的情况 /a/b 应该放在 /a 前面
+ 长路由放在模糊匹配的前面 /a/b 放在 /a/:id

## 对于二级路由或者子路由来说，匹配的路由规则就是当前被点击的使用NavLink标签包裹，然后动态渲染的内容需要使用Route渲染
## 需要注意的是路由是后者路由完全包裹前者的路由，只有这样才能保证路由在切换的时候，通用部分不会被完全替换
**  页面标准配置的模式 **
```js
    const app = () => {
        return (
            <div>
                <Aside />
                <Content />
            </div>
        )
    }

    const Aside = () => {
        return (
            <div>
                <ul>
                    <li><NavLink to='/main'>首页</NavLink></li>
                    <li><NavLink to='/system'>系统</NavLink></li>
                </ul>
            </div>
        )
    }

    const Content = () => {
        return (
            <Switch>
                <Route to='/main/home' component={首页内容的组件}></Route>
                <Route to='/system/home' component={系统内容的组件}></Route>
                // 这个是用来当从登陆页面跳转过来的时候，需要匹配的/main的内容，但是该路由下的内容只有侧边栏
                // 这时候需要重定向，然后当前路由切换成/main/home,将侧边栏以及当前路由下的内容都匹配到了
                // 渲染默认使用的页面内容
                <Redirect from='/main' to='/main/home' />
            </Switch>
        )
    }

```

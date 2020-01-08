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

## 在创建同心的正方体的时候，有个细节需要注意，一开始如果不设置原点位置的时候，平移或者旋转都是根据元素中心位置进行操作的。所以大正方体跟小正方体是包含关系，在一开始就需要将其位置定位好，确保小正方形在大正放形的中间，不然偏移后，两个正方体的位置会进行错位
## 在浏览器中，坐标系是横坐标是x轴，纵坐标是y轴，但是y轴与数学上的y轴方向相反。
## 然后在旋转角度来说，顺时针的旋转角度为正。旋转方向的判定，是以当前坐标正方向的指向所指代的位置，然后模拟到时钟上，判断旋转方向的


## 开始使用redux，react-redux，将一些数据全局话，从而将其能够多处调用数据

## 文件命名的时候，需要注意，尽量不要使用index的，因为模块引入的问价都会使用index文件，所以当文件命名一致的时候，特别是文件夹命名一致，且文件夹下，文件命名为index文件，则代表导入模块后，文件的index名称可以被忽略的
## 这就会变成要从模块中导入的文件，变成从本地导入，若没有本地文件没有相应的方法，则会报错



## 项目需要搭建好所需要的环境以及需要用到的软件
1. 前端： visual studio, git, node, (还可以使用yarn进行各种包的安装)
2. 后端： mysql数据库，visual community(2017之下几个版本)

## 前后端请求接口的操作思路
1. 首先需要运行前后端代码，当然后端代码也需要跟前端代码差不多，一个入口文件，然后如果前端代码进行登录接口请求的时候，那么需要调用接口
2. 后端的代码需要将内容跟数据库进行连接，然后彼此之间产生数据的读写操作
3. 然后设置访问的接口地址，彼此进行联系操作


### 后端的配置文件要求: 首先选择的框架是python搭建django框架进行的后台的项目的搭建，
1. 如果已经安装好了python了，那么需要做的就是直接使用cmd，运行命令pip install django
2. pip类似前端的npm包的性质
3. 配置环境变量的时候，需要精确地找到python的目标文件夹，然后根据该文件下的目录文件目录，添加到系统环境变量中
> 我的电脑的文件地址是如下所示
+ C:\Users\admin\AppData\Local\Programs\Python\Python37\Lib\site-packages\django （添加django的环境变量）
+ C:\Users\admin\AppData\Local\Programs\Python\Python37\Scripts （添加python的环境变量）

代理就是设置的网址是默认localhost:3000，但是它实际情况是将其网址渲染到接口请求的网址去了
> 按照Ac项目的实例来说，代理的地址是 'http://10.170.26.164:9001',
> 但是在前端接口请求上，显示的请求地址是 http://localhost:3000/api/login_auth
同理：后端端口的请求地址是127.0.0.1:8000/login
所以当前的代理地址要在setupProxy设置它的值就是127.0.0.1:8000

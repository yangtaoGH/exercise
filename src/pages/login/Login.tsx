import React, { useState } from 'react';
import { Input, Button, message, Spin} from 'antd';
import Logo from 'asset/imgs/yay.jpg';
import logoStyles from './Login.module.scss';
import reducerList from 'redux/reducers';
import request from 'http/http';
import { AxiosError } from 'axios';


type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

const Login = (props:any) => {
    let userInfo:string | number = '', pwd: string | number = '';
    const [isShow, showSpin] = useState(false);
    const handleInfo = (e: InputEvent, type: string): void => {
        switch(type) {
            case 'user':
                userInfo = e.target.value;
                break;
            case 'pwd':
                pwd = e.target.value;
                break;
        }
     } 
    const handleLogin = ():void => {

        if (!userInfo) {
            message.error('请输入用户名');
            console.log(props, '获取值')
            return;
        }
        if (!pwd) {
            message.error('请输入密码');
            return;
        }

        // 接口请求做的事情
        const resp = {
            user: 'admin',
            pwd: 'admin',
            avator: ''
        }
       
        // 请求的地址，请求的参数，然后就是回调函数
        const param = {
            "user": userInfo,
            "pwd": pwd
        }
        showSpin(!isShow);
        request.post('/login', param).then((resp) => {
            console.log(resp, '返回参数值')
            if (resp.data.status === 'ok') {
                console.log(reducerList.authorReducer, 'reducerList')
                message.success('登录成功，正在跳转');
                showSpin(isShow);
                props.history.push('/main');
            } else {
                showSpin(isShow);
                // 如果登录信息不对，则需要进行前端的提示
                message.error('用户名或者密码有误，请重新输入');
                return ;
            }
                // 通过dispatch修改数据，修改好了，之后就可以进行操作了
                // 首先就是dispatch将值发生变化发送到数据中
                // 首先得拿到store这个对象，通过contex的方式？
                
                // 将值存入到store中
                // reducer是按照计划去修改数据，所以首先找到数据
                // reducerList.authorReducer(state, action);
               

            // 开始进行路由的切换
        }).catch((err: AxiosError) => {
            console.log(err);
        })
       
    }
    return (
        <div className={logoStyles.login}>
            <div>
                <img src={Logo} alt=""/>
            </div>
            <Input placeholder="账户名" onChange={(e) => handleInfo(e, 'user')} />
            <Input.Password placeholder="密码" onChange={(e) => handleInfo(e, 'pwd')} />
            <Button 
                type='primary'
                onClick={() => handleLogin()}>登录</Button>
                <Spin size="large" spinning={isShow} />
        </div>

    )
}
export default Login;

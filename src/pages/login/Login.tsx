import React, { useState } from 'react';
import { Input, Button, message, Spin} from 'antd';
import Logo from 'asset/imgs/yay.jpg';
import logoStyles from './Login.module.scss';


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
            return;
        }
        if (!pwd) {
            message.error('请输入密码');
            return;
        }

        // 接口请求做的事情
        const resp = {
            user: 'admin',
            pwd: 'admin'
        }
        if (userInfo !== resp.user || userInfo !== resp.pwd) {
            message.error('用户名或者密码有误，请重新输入');
            return ;
        } 
        if (userInfo === resp.user && userInfo === resp.pwd) {
            message.success('登录成功，正在跳转');
            showSpin(!isShow);
            setTimeout(() => {
                showSpin(isShow);
                props.history.push('/main');
            }, 3000)
        }
        // 开始进行路由的切换
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

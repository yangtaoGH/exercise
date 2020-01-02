import React, {useEffect} from 'react';
import headerStyles from './Header.module.scss';
// 设置头像（通过登录页面传入了用户名跟密码，然后在通过接口再次传入头像就好）
import logo from 'asset/imgs/avator.png';

const Header = () => {
    const authorInfo:any = {
        name: 'admin',
        logo: logo
    }
    useEffect(() => {
        // 通过钩子函数获取当前账户的登录信息 
        console.log('需要通过接口的方式去解决问题'); 
    })
    return (
        <div className={`${headerStyles.top} clear`}>
            <span className='fr'>{authorInfo.name}</span>
            <div className='fr'>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default Header;
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import * as qs from 'qs';

const instance = axios.create({
    xsrfCookieName: 'xsrf-token',
    timeout: 20000,
    withCredentials: true
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';
instance.defaults.headers['X-Requested-with'] = 'XMLHttpRequest';

// 拦截器
instance.interceptors.request.use((config:AxiosRequestConfig): AxiosRequestConfig => {
    console.log(config,'canshu')
    // 这是因为需要请求的代理网址因为升级从而需要加上api前缀（如果一开始就配置好了，说不定就不需要了）
    if (process.env && process.env.NODE_ENV === 'development') {
        config.url = '/api' + config.url;
    }
     // 排序关键字转义(未来项目中是否用该该判断，到时候看)
  /* if(config.method === 'get'){
        if(typeof config.params !== 'undefined' && typeof config.params.sorter !== 'undefined' && Object.keys(config.params.sorter).length === 0){
            delete config.params.sorter;
        }
    } else if(config.method === 'post') {
        config.data = qs.stringify(config.data);
    } */
    // 判断登录信息，没有token信息，进入重新登录操作
    /* if (!storage.getLocalItem('token')){
        history.push('/login');
    } */
    return config;
}, (err: AxiosError) => {
    return Promise.reject(err);
})

instance.interceptors.response.use((res: AxiosResponse): AxiosResponse => {
    return res;
}, (err: AxiosError) => {
    if(err.response && (err.response.status === 401 || err.response.status === 403)){
        alert("页面超时");
        // storage.removeLocalItem("token");
        // history.push('/login');
    }
    return Promise.reject(err);
})

export default instance;
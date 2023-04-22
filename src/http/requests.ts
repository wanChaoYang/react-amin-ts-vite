import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from '@/utils/cookies';
/**接口返回的对象 */
interface Result<T> {
    data: T;
    code: string;
    message: string
}
//创建axios实例
const instance: AxiosInstance = axios.create({
    baseURL: "https://www.fastmock.site/mock/1f9f19ae92bb7910af122a5c362efc5e/react_vite",
    timeout: 5000,
    headers: {
        "X-Custom-Header": "foobar"
    }
})

//请求拦截
/**
 * config:AxiosRequestConfig官方有bug还未解决
 * 解决：1.类型设置为any   2.降低版本为：1.1.3版本可以用
 */
instance.interceptors.request.use((config: any) => {
    //添加token到请求头
    const token: string = getToken();
    if (config && config.headers && token) {
        config.headers.token = token
    }
    return config
}, (error: AxiosError) => {
    return Promise.reject(error);
})

//响应拦截
instance.interceptors.response.use((response: AxiosResponse) => {
    //2XX 范围内状态码都会触发该函数
    const data = response.data;
    if (data.code === "0") {
        return data
    } else {
        return Promise.reject(data)
    }
}, (error: AxiosError) => {
    //超出 2XX 范围状态码都会触发该函数
    const status = error.response?.status;
    switch (status) {
        case 400:
            break;
        case 401:
            break;
        default:
            break;
    }
    return Promise.reject(error)
})

//请求方式封装
const http = {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return instance.get(url, config);
    },
    post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> {
        return instance.post(url, data, config);
    }
}
export default http;
import Cookies from 'js-cookie';
const tokenKey: string = "token";
/**设置token */
export const setTokenValue = (value: string) => {
    Cookies.set(tokenKey, value);
}
/**获取token */
export const getToken = () => {
    return Cookies.get(tokenKey) || "";
}
/**清除token */
export const removeToken = () => {
    Cookies.remove(tokenKey);
}
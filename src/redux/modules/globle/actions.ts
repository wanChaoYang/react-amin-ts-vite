import { Dispatch } from "redux"
const TOKEN = "TOKEN"
//设置token
export const setToken = (value: string) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch({
                type: TOKEN, token: value
            })
        }, 2000);
    }
}
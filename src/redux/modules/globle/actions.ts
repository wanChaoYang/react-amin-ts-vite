import { Dispatch } from "redux"
const TOKEN = "SET_TOKEN"
//设置token
export const setToken = (value: string) => {
    return { type: "SET_TOKEN", token: value }
}
//设置token异步形式
// export const setToken = (value: string) => {
//     return (dispatch: Dispatch) => {
//         setTimeout(() => {
//             dispatch({
//                 type: TOKEN, token: value
//             })
//         }, 2000);
//     }
// }

export const setNmae=(value: string)=>{
    return { type: "SET_NAME", name: value }
}
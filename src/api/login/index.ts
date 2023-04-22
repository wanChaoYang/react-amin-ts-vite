import http from "@/http/requests";
import { Login, LoginRes } from "../types";
//登录
// export const login = (data: Login) => {
//     return http.post<LoginRes>("api/login", data)
// }
//登录get
export const login = () => {
    return http.get<LoginRes>("/api/login")
}
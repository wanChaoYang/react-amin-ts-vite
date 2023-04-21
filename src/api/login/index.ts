import http from "@/http/requests";
import { Login, LoginRes } from "../types";
//登录
export const login = (data: Login) => {
    return http.post<LoginRes>("uri", data)
}
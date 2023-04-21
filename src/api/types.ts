//定义接口得请求参数以及类型
export interface Login {
    userName: string;
    password: string;
}

export interface LoginRes {
    token:string
}
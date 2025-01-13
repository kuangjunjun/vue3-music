import http from "./http";
import type { UserProfile } from "../models";


// 登录接口
export async function useLogin(phone: string, password: string) {
    return await http.get<{
        code: number,
        cookie: string,
        token: string
    }>('login/cellphone', {phone: phone, password: password})
}

export async function useLoginStatus() {
    return await http.get<{
        data: {
            code: number,
            profile: UserProfile
        },
    }>("login/status")
}
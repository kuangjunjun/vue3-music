import http from "./http";
import type {
    UserProfile, Banner, Personalized, PersonalizedNewSong,
    PersonalizedMv, PersonalizedPrivateContent, DjProgram
} from "../models";


// 登录接口
export async function useLogin(phone: string, password: string) {
    return await http.get<{
        code: number,
        cookie: string,
        token: string
    }>('login/cellphone', {phone: phone, password: password})
}


// 登录状态
export async function useLoginStatus() {
    return await http.get<{
        data: {
            code: number,
            profile: UserProfile
        },
    }>("login/status")
}

// 轮播图
export async function useBanner() {
    const { banners } = await http.get<{ banners: Banner[] }>('/banner', { type: '1' })
    return banners
}
// 专属歌单
export async function usePersonalized() {
    const { result } = await http.get<{ result: Personalized[] }>('/personalized')
    return result
}

// 推荐新音乐
export async function usePersonalizedNewSong() {
    const { result } = await http.get<{ result: PersonalizedNewSong[] }>('/personalized/newsong')
    return result
}

// 推荐MV
export async function usePersonalizedMv() {
    const { result } = await http.get<{ result: PersonalizedMv[] }>('/personalized/mv')
    return result
}

// 独家放送
export async function usePersonalizedPrivateContentList(limit: number = 10, offset: number = 0) {
    const {result} = await http.get<{ result: PersonalizedPrivateContent[] }>('personalized/privatecontent/list', {
        limit: limit,
        offset: offset
    })
    return result
}

//推荐电台
export async function usePersonalizedDjProgram() {
    const {result} = await http.get<{ result: DjProgram[] }>('personalized/djprogram')
    return result
} 
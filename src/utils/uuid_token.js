import { v4 as uuidv4 } from 'uuid'

export const getUUID = () => {
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    // 单例模式，判断本地是否又uuid
    if (!uuid_token) {
        uuid_token = uuidv4();
        localStorage.setItem("UUIDTOKEN", uuid_token)
    }
    //记得返回出去
    return uuid_token;
}
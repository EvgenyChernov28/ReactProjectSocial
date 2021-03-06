import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "5f8966e8-e55a-41d2-a189-5fbe008641b2" },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
            return response.data;
        });
    },
    setFollow(id) {
        return instance.post(`follow/${id}`)
        .then((response) => {
            return response.data;
        });
    },
    setUnfollow(id) {
        return instance.delete(`follow/${id}`)
        .then((response) => {
            return response.data;
        });
    },
    getProfile(userId){
        console.log("warn, use old method");
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status})
    },
    savePhoto(file){
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData)
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
};

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout(){
        return instance.delete(`auth/login`);
    },
    captchaURL(){
        return instance.get(`security/get-captcha-url`);
    }
}
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
        return instance.delete(`follow/${id}`).then((response) => {
            return response.data;
        });
    },
};

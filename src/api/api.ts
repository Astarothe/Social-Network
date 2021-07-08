import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "42aa837a-8390-46f1-8f1e-90039525de3d"
    }
})

export const usersAPI = {
    getUsers(currentPage: any = 1, pageSize: any = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}



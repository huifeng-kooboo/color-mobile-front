import axios from "../axios"


// 登录API 
// params:{"username":"xxx", "password":"xxx"}
export function loginApi(params) {
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    return axios.post("/api/v1/user/login/", params);
}
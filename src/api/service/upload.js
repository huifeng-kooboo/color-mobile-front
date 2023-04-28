import axios from "../axios"


export function uploadFileApi(params) {
    // 需要讲content-type 进行调整
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    return axios.post("/api/v1/file_manager/file_info/", params);
}
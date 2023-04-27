import axios from "../axios"


export function uploadFile(params) {
    return axios.post("/file_manager/file_info/", params);
}
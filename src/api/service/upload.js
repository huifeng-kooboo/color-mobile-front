import axios from "../axios"


export function uploadFileApi(params) {
    return axios.post("/file_manager/file_info/", params);
}
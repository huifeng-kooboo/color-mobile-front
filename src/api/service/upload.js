import axios from "../axios"


export function uploadFileApi(params) {
    return axios.post("/api/v1/file_manager/file_info/", params);
}
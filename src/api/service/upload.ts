import axios from "../axios"


export function uploadFileApi(params) {
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    return axios.post("/api/v1/file_manager/file_info/", params);
}

export { uploadFileApi };
import axios from "../axios"

export function getMenuOneApi() {
    axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
    return axios.get("/api/v1/shop/menu_one/");
}


export function getMenuTwoInfoByIdApi(strId) {
   //  axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
    return axios.get("/api/v1/shop/menu_two_info/"+strId + "/");
}

export function getMenuThreeInfoByIdApi(strId) {
    //  axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
     return axios.get("/api/v1/shop/menu_three_info/"+strId + "/");
 }

 export function getProductInfoByIdApi(strId) {
    //  axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
     return axios.get("/api/v1/shop/product_info/"+strId + "/");
 }
 

export function getMenuTwoApi() {
    axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
    return axios.get("/api/v1/shop/menu_two/");
}

export function getMenuThreeApi() {
    axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
    return axios.get("/api/v1/shop/menu_three/");
}

import axios from "../axios"

export function getMenuOneApi() {
    axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
    return axios.get("/api/v1/shop/menu_one/");
}

export function getMenuTwoApi() {
    axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
    return axios.get("/api/v1/shop/menu_two/");
}

export function getMenuThreeApi() {
    axios.defaults.headers.get['Content-Type'] = 'multipart/form-data'
    return axios.get("/api/v1/shop/menu_three/");
}

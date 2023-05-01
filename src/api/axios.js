// 请求配置 【网络请求相关】
// https://www.axios-http.cn/docs/example
import axios from 'axios'

// axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//backend-api-01.newbee.ltd/api/v1' : '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
if (localStorage.getItem("token"))
{
  console.log("设置Token中")
  axios.defaults.headers["Authorization"] = localStorage.getItem("token")
}
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    console.log("【request】ERROR")
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    console.log("【request】WARNING")
    if (res.data.message)
      console.log(res.data.message)
    return Promise.reject(res.data)
  }
  return res.data
})

export default axios
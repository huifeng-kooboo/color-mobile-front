import axios from 'axios'
import { Toast } from 'vant'
// import { setLocal } from '@/common/js/utils'
import router from '../router'

// axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//backend-api-01.newbee.ltd/api/v1' : '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.baseURL = "http://127.0.0.1:8000"
axios.defaults.withCredentials = false
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    if (res.data.message) Toast.fail(res.data.message)
    console.log(res.data.data)
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios
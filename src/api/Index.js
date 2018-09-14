import axios from 'axios'

const axiosBase = axios.create({
  baseURL: process.env.API_BASE_URL
})

export default (Vue, { store }) => {
  axiosBase.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })

  axiosBase.interceptors.response.use((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })

  Vue.api = Vue.prototype.$api = axiosBase
}

export const test = {
  get (callback, apiName, param) {
    axios.get(apiName, {params: {param}})
      .then((res) => { callback(res.data) })
      .catch((res) => console.log('ERROR!! occurred in Backend.'))
  },
  post (callback, apiName, param) {
    axios.post(apiName, {param: {param}})
      .then((res) => { callback(res.data) })
      .catch((res) => console.log('ERROR!! occurred in Backend.'))
  }
}

import axios from 'axios'
import config from 'config'
import { getToken } from 'services/auth'

const api = axios.create({ baseURL: config.envApi })

api.interceptors.request.use(async (config) => {
  const token = getToken()
  if (token) config.headers.Authorization = `${token}`
  return config
})

export default api

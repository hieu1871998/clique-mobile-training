import axios from 'axios'

const API_URL = 'http://localhost:3187'

const instance = axios.create({
  baseURL: API_URL,
  timeout: 30000
})
instance.defaults.timeout = 60000

export default instance
import axios from 'axios'
import {getItem} from '@/helpers/persistaceStorage'

axios.defaults.baseURL = 'https://conduit.productionready.io/api'

axios.interceptors.request.use(config => {
  const token = getItem('Auth Token')
  const authToken = token ? `Token ${token}` : ''
  config.headers.authorization = authToken
  console.log(authToken)
  return config
})

export default axios

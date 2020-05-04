import axios from 'axios'
import config from '../utils/config'

const baseUrl = `${config.BASEURL}/login`

const login = (userName, password) => {
  return axios.post(baseUrl, {userName, password})
}

export default { login }
import axios from 'axios'

axios.defaults.baseURL = '/api'

export async function registry(username, password) {
  return axios
    .post('/user', {
      username,
      password,
    })
    .then((res) => {
      return res.data
    })
}

export async function login(username, password) {
  return axios.post('/auth/login', { username, password }).then((res) => {
    return res.data
  })
}

export async function getUserInfo(token) {
  return axios.get('/user', { headers: { Authorization: token } }).then((res) => {
    return res.data
  })
}

const instance = axios.create()
export default instance

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/repos/minecode/code_contest'
})

export default api

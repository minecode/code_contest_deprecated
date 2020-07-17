import axios from 'axios'

const apiCodeContestResponses = axios.create({
  baseURL: 'https://api.github.com/repos/minecode/code_contest_responses'
})

export default apiCodeContestResponses

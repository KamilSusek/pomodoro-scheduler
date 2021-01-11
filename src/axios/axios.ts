import axios from 'axios'

const BASE_URL = 'https://pomodoro-scheduler-api.herokuapp.com'

const instance = axios.create({
  baseURL: BASE_URL
})

export default instance

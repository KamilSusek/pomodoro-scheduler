import { FETCH_SCHEDULES } from './actionsTypes'
import axios from '../../axios/axios'

export const fetchSchedules = () => async (dispatch: any) => {
  const response = await axios.get('/schedule/all')

  dispatch({ type: FETCH_SCHEDULES, payload: response.data })
}

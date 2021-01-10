import { FETCH_SCHEDULES } from '../actions/actionsTypes'

export default (state = [], action: any) => {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return action.payload
    default:
      return state
  }
}

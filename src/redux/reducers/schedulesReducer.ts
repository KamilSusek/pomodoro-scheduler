import { FETCH_SCHEDULES } from '../actions/actionsTypes'

 const reducer = (state = [], action: any) => {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return action.payload
    default:
      return state
  }
}
export default reducer
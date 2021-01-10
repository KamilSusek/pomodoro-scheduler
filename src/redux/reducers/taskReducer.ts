import { SET_TASK } from '../actions/actionsTypes'

export default (state = {}, action: any) => {
  switch (action.type) {
    case SET_TASK:
      return { ...state, task: action.payload }
    default:
      return state
  }
}
